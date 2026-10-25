# Cikgu Robo — study helper chat

The robot button (bottom-left) on the main pages and every study page (`assets/cikgu-robo.js` +
`assets/cikgu-robo.css`) talks to this Cloudflare Worker, which holds the Anthropic API key and tutors
with Claude (`claude-haiku-5-5`, low effort, adaptive thinking): any school subject, KSSR/KSSM level,
friendly step-by-step explanations in BM or English, with links to the site's own notes and games.

Live endpoint: `https://luqman-study-chat.azan-sapardi.workers.dev/chat`

It isn't added inside the games (`games.html` links to them) so it never gets in the way of play.
On study pages it stops key presses from reaching the page, so typing in the chat doesn't flip cards.

## After adding or renaming study pages

The bot teaches from its own knowledge; `src/knowledge.js` only tells it what's on the site so it can
link to it (`index`, `studies` and `games` pages in full, plus each `studies/*/*.html` page's title and
section headings). Redeploy so it knows about new pages:

```bash
cd chat-worker
npm install        # first time only
npm run deploy     # rebuilds knowledge.js, then wrangler deploy
```

New study pages also need `<script src="../../assets/cikgu-robo.js" defer></script>` before `</body>`.

## Local testing

```bash
# chat-worker/.dev.vars (gitignored):
#   ANTHROPIC_API_KEY=sk-ant-...
#   ALLOW_LOCALHOST="true"
npm run dev                                   # worker on http://localhost:8787
python3 -m http.server 8000 --directory ..    # site on http://localhost:8000
```

The widget automatically uses the local worker when the page is served from `localhost` / `127.0.0.1`.

## Key, limits, safety and cost

- API key: `npx wrangler secret put ANTHROPIC_API_KEY` (stored encrypted in Cloudflare, never in the repo).
- Only `https://luqman.biomechemical.com` may call the endpoint (`ALLOWED_ORIGINS` in `wrangler.toml`);
  scripts can fake that, so volume is also capped: 8 questions/minute per visitor IP and 40/minute site-wide.
  Questions are capped at 1,500 characters, history at 12 messages, replies at 4,000 tokens.
- Child-safety rules live in the system prompt in `src/index.js`: no personal details, kind replies and a
  trusted adult / Talian Kasih 15999 / 999 for anyone upset or unsafe, homework help that teaches the method.
- The ~27k-token instructions + site map are prompt-cached: well under $0.001 per answer while warm, ~$0.004 for
  the first question after 5 idle minutes. Set a monthly spend limit in the Anthropic Console as a backstop.
- The Worker runs in `aws:us-east-1` (`[placement]`), because some Cloudflare edge locations get
  403 "Request not allowed" from the Anthropic API.
- `npx wrangler tail` shows live requests, including a `usage` line per answer.
