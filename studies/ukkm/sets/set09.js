(function () { const B = {}; const UKKM_PART = (n, b) => { B[b.id] = b; };
UKKM_PART(9, { id: 'mat', nama: 'Matematik', ikon: '🧮', minit: 30,
  arahan: 'Jawab semua 20 soalan. 18 soalan objektif (pilih A, B, C atau D) dan 2 soalan isian (taip jawapan nombor). Kalkulator saintifik dibenarkan; gunakan kertas conteng.',
  soalan: [
  { // 1 Pola — mudah
    s: "Jujukan berikut berkurang secara tetap:<br><b>85, 78, 71, 64, …</b><br>Apakah sebutan <b>negatif yang pertama</b> dalam jujukan ini?",
    en: "The sequence 85, 78, 71, 64, … decreases steadily. What is the first negative term?",
    p: ['1', '−6', '−7', '−13'], a: 1, topik: 'Pola & Jujukan', aras: 'mudah',
    hurai: "Beza sepunya −7: …, 15, 8, 1, <b>−6</b>. (1 ialah sebutan positif terakhir; −7 menganggap sebutan mesti gandaan 7; −13 terlebih satu langkah.)"
  },
  { // 2 Indeks — mudah
    s: "Diberi 2<sup>2x − 1</sup> = 32, cari nilai x.",
    en: "Given 2 to the power (2x − 1) = 32, find x.",
    p: ['3', '5', '8.5', '16.5'], a: 0, topik: 'Persamaan Linear', aras: 'mudah',
    hurai: "32 = 2⁵, jadi 2x − 1 = 5 → 2x = 6 → x = <b>3</b>. (5 berhenti pada 2x − 1 = 5; 16.5 menyamakan 2x − 1 = 32 tanpa menukar asas; 8.5 menganggap 2x − 1 = 32 ÷ 2.)"
  },
  { // 3 Peratus — mudah
    s: "Seramai 240 murid menduduki satu peperiksaan Matematik dan 85% daripada mereka lulus. Daripada murid yang lulus, 25% mendapat gred A. Berapakah bilangan murid yang mendapat gred A?",
    en: "240 pupils sat a Mathematics exam and 85% passed. Of those who passed, 25% got grade A. How many pupils got grade A?",
    p: ['204', '153', '60', '51'], a: 3, topik: 'Peratus & Matematik Pengguna', aras: 'mudah',
    hurai: "Lulus = 240 × 0.85 = 204. Gred A = 204 × 0.25 = <b>51</b>. (60 = 25% daripada 240, mengambil peratus daripada jumlah yang salah; 153 = 75% daripada 204; 204 ialah bilangan yang lulus sahaja.)"
  },
  { // 4 Kadar — mudah
    s: "Sebuah akuarium berbentuk kuboid berukuran 120 cm × 50 cm × 40 cm. Akuarium kosong itu diisi dengan paip yang mengalirkan air pada kadar 12 liter seminit. Berapakah masa, dalam minit, yang diperlukan untuk memenuhkan akuarium itu? (1 liter = 1 000 cm³)",
    en: "A cuboid aquarium measures 120 cm × 50 cm × 40 cm. It is filled by a pipe at 12 litres per minute. How many minutes to fill it? (1 litre = 1 000 cm³)",
    p: ['20', '200', '2 000', '20 000'], a: 0, topik: 'Nisbah, Kadar & Laju', aras: 'mudah',
    hurai: "Isi padu = 120 × 50 × 40 = 240 000 cm³ = 240 liter. Masa = 240 ÷ 12 = <b>20 minit</b>. (20 000 = 240 000 ÷ 12, lupa menukar cm³ kepada liter; 200 dan 2 000 ialah ralat penukaran unit.)"
  },
  { // 5 Data — mudah
    s: "Masa (dalam minit) yang diambil oleh 10 murid untuk sampai ke sekolah ialah:<br><b>12, 25, 8, 15, 25, 30, 12, 25, 18, 40</b><br>Nyatakan julat dan mod data ini.",
    en: "The times (minutes) for 10 pupils to reach school are 12, 25, 8, 15, 25, 30, 12, 25, 18, 40. State the range and the mode.",
    p: ['Julat 28, mod 25', 'Julat 32, mod 25', 'Julat 32, mod 12', 'Julat 40, mod 25'], a: 1, topik: 'Data & Statistik', aras: 'mudah',
    hurai: "Julat = nilai terbesar − nilai terkecil = 40 − 8 = <b>32</b>. Mod = nilai paling kerap = <b>25</b> (3 kali; 12 hanya 2 kali). (28 = 40 − 12, menolak nilai pertama dalam senarai, bukan nilai terkecil; 40 ialah nilai terbesar sahaja.)"
  },
  { // 6 Geometri — sederhana (ISI)
    jenis: 'isi',
    s: "Sudut-sudut pedalaman sebuah heksagon ialah 130°, 110°, 140°, x, (x + 20°) dan 2x. Berapakah saiz sudut <b>terbesar</b> heksagon itu, dalam darjah?",
    en: "The interior angles of a hexagon are 130°, 110°, 140°, x, (x + 20°) and 2x. What is the size of the largest angle, in degrees?",
    a: 160, unit: '°', topik: 'Geometri & Pengukuran', aras: 'sederhana',
    hurai: "Hasil tambah sudut pedalaman heksagon = (6 − 2) × 180° = 720°. 130 + 110 + 140 + x + x + 20 + 2x = 720 → 400 + 4x = 720 → x = 80. Sudut-sudut: 130°, 110°, 140°, 80°, 100°, 160°. Terbesar = <b>160°</b>. (Ralat biasa: berhenti pada x = 80, atau guna 540° iaitu hasil tambah pentagon.)"
  },
  { // 7 Logik — sederhana
    rajah: '<svg viewBox="0 0 220 160" style="max-width:100%;width:250px" role="img" aria-label="Grid jalan 3 blok ke kanan dan 2 blok ke atas dari A ke B, simpang P ditutup"><g stroke="currentColor" stroke-width="2.5"><path d="M30 30V130M80 30V130M130 30V130M180 30V130M30 30H180M30 80H180M30 130H180"/></g><circle cx="30" cy="130" r="5" fill="var(--c)"/><circle cx="180" cy="30" r="5" fill="var(--c)"/><g stroke="var(--no, #d9480f)" stroke-width="3"><path d="M72 72L88 88M88 72L72 88"/></g><g font-size="13" fill="currentColor" font-weight="700"><text x="12" y="148">A</text><text x="188" y="24">B</text><text x="88" y="98">P</text></g><text x="40" y="154" font-size="12" fill="var(--muted)">simpang P ditutup</text></svg>',
    s: "Rajah menunjukkan jalan-jalan berbentuk grid. Daniel berjalan dari A ke B dan hanya bergerak <b>ke kanan</b> atau <b>ke atas</b> di sepanjang jalan. Simpang P ditutup untuk kerja membaiki jalan. Berapakah bilangan laluan berlainan yang boleh diambil oleh Daniel?",
    en: "The diagram shows a grid of roads. Daniel walks from A to B moving only right or up along the roads. Junction P is closed. How many different routes can he take?",
    p: ['4', '6', '9', '10'], a: 0, topik: 'Penaakulan Logik', aras: 'sederhana',
    hurai: "Tanpa sekatan terdapat 10 laluan (3 langkah kanan + 2 langkah atas). Laluan melalui P: 2 cara dari A ke P × 3 cara dari P ke B = 6. Laluan yang tidak melalui P = 10 − 6 = <b>4</b>. (Boleh juga kira dengan menulis bilangan cara pada setiap simpang dan meletakkan 0 di P.) (6 ialah laluan melalui P; 10 ialah jumlah tanpa sekatan; 9 menganggap hanya satu laluan tersekat.)"
  },
  { // 8 Pola — sederhana
    s: "Sebuah dewan mempunyai 20 baris kerusi. Baris pertama mempunyai 14 kerusi dan setiap baris berikutnya mempunyai 2 kerusi lebih daripada baris sebelumnya. Berapakah jumlah kerusi dalam dewan itu?",
    en: "A hall has 20 rows of seats. The first row has 14 seats and each following row has 2 more than the row before. How many seats are there in total?",
    p: ['52', '660', '680', '1 320'], a: 1, topik: 'Pola & Jujukan', aras: 'sederhana',
    hurai: "Baris ke-20 = 14 + 19 × 2 = 52. Pasangkan baris pertama dengan terakhir, kedua dengan ke-19, …: setiap pasangan = 14 + 52 = 66, ada 10 pasangan. Jumlah = 10 × 66 = <b>660</b>. (52 ialah kerusi baris ke-20 sahaja; 680 menganggap baris ke-20 = 14 + 20 × 2 = 54; 1 320 = 20 × 66, lupa bahawa ada hanya 10 pasangan.)"
  },
  { // 9 Persamaan linear — sederhana
    s: "Jumlah umur Kak Long dan adiknya sekarang ialah 28 tahun. Empat tahun yang lalu, umur Kak Long ialah 3 kali umur adiknya. Berapakah umur Kak Long sekarang?",
    en: "The sum of the present ages of Kak Long and her younger sibling is 28. Four years ago, Kak Long was 3 times as old as the sibling. How old is Kak Long now?",
    p: ['21', '19', '15', '9'], a: 1, topik: 'Persamaan Linear', aras: 'sederhana',
    hurai: "Adik = a, Kak Long = 28 − a. 4 tahun lalu: (28 − a) − 4 = 3(a − 4) → 24 − a = 3a − 12 → 4a = 36 → a = 9. Kak Long = <b>19</b>. Semak: 4 tahun lalu 15 dan 5 ✓. (21 menganggap 3 kali umur adik sekarang; 15 ialah umur Kak Long 4 tahun lalu; 9 ialah umur adik.)"
  },
  { // 10 Peratus — sederhana
    s: "Aisyah mahu membeli komputer riba berharga RM 2 850. Dia sudah mempunyai simpanan RM 600. Setiap bulan dia menyimpan 15% daripada elaunnya sebanyak RM 1 250. Berapakah bilangan bulan <b>minimum</b> yang diperlukan supaya simpanannya cukup?",
    en: "Aisyah wants a laptop costing RM 2 850. She already has RM 600 saved and saves 15% of her RM 1 250 monthly allowance. What is the minimum number of months needed?",
    p: ['18', '16', '15', '12'], a: 3, topik: 'Peratus & Matematik Pengguna', aras: 'sederhana',
    hurai: "Simpanan sebulan = 15% × 1 250 = RM 187.50. Baki diperlukan = 2 850 − 600 = RM 2 250. Bulan = 2 250 ÷ 187.50 = <b>12</b> bulan tepat. (15 dan 16 datang daripada 2 850 ÷ 187.50 = 15.2, lupa simpanan sedia ada; 18 = 2 250 ÷ 125, guna 10% dan bukan 15%.)"
  },
  { // 11 Nisbah — sederhana
    s: "Nisbah bilangan guli Ali, Bala dan Chong ialah 5 : 3 : 4. Selepas Ali memberi 12 biji guli kepada Bala, nisbah guli Ali kepada Bala menjadi 7 : 5. Chong tidak memberi atau menerima guli. Berapakah bilangan guli Chong?",
    en: "Ali, Bala and Chong share marbles in the ratio 5 : 3 : 4. After Ali gives Bala 12 marbles, Ali : Bala becomes 7 : 5. Chong is unchanged. How many marbles does Chong have?",
    p: ['180', '144', '120', '108'], a: 1, topik: 'Nisbah, Kadar & Laju', aras: 'sederhana',
    hurai: "Ali = 5k, Bala = 3k, Chong = 4k. (5k − 12) : (3k + 12) = 7 : 5 → 5(5k − 12) = 7(3k + 12) → 25k − 60 = 21k + 84 → 4k = 144 → k = 36. Chong = 4 × 36 = <b>144</b>. (180 dan 108 ialah guli asal Ali dan Bala; 120 ialah guli Bala selepas menerima.)"
  },
  { // 12 Data — sederhana
    rajah: '<svg viewBox="0 0 320 240" style="max-width:100%;width:340px" role="img" aria-label="Graf garis suhu air melawan masa: 0 min 20°C, 2 min 35°C, 4 min 50°C, 6 min 60°C, 8 min 65°C, 10 min 65°C"><g stroke="var(--muted)" stroke-width="1" opacity=".5"><path d="M50 185H300M50 170H300M50 155H300M50 140H300M50 125H300M50 110H300M50 95H300M50 80H300M50 65H300M50 50H300M100 50V200M150 50V200M200 50V200M250 50V200M300 50V200"/></g><path d="M50 200H300M50 50V200" stroke="currentColor" stroke-width="1.5" fill="none"/><polyline points="50,200 100,155 150,110 200,80 250,65 300,65" fill="none" stroke="var(--c)" stroke-width="3"/><g fill="var(--c)"><circle cx="50" cy="200" r="4"/><circle cx="100" cy="155" r="4"/><circle cx="150" cy="110" r="4"/><circle cx="200" cy="80" r="4"/><circle cx="250" cy="65" r="4"/><circle cx="300" cy="65" r="4"/></g><g font-size="12" fill="currentColor" text-anchor="end"><text x="44" y="204">20</text><text x="44" y="174">30</text><text x="44" y="144">40</text><text x="44" y="114">50</text><text x="44" y="84">60</text><text x="44" y="54">70</text></g><g font-size="12" fill="currentColor" text-anchor="middle"><text x="50" y="216">0</text><text x="100" y="216">2</text><text x="150" y="216">4</text><text x="200" y="216">6</text><text x="250" y="216">8</text><text x="300" y="216">10</text><text x="175" y="234">Masa (minit)</text></g><text x="6" y="36" font-size="12" fill="currentColor">Suhu (°C)</text></svg>',
    s: "Graf garis menunjukkan suhu air yang dipanaskan dalam sebuah bikar. Berapakah kadar purata kenaikan suhu dari minit ke-0 hingga minit ke-8?",
    en: "The line graph shows the temperature of water being heated in a beaker. What is the average rate of temperature rise from minute 0 to minute 8?",
    p: ['8.125 °C/min', '7.5 °C/min', '5.625 °C/min', '4.5 °C/min'], a: 2, topik: 'Data & Statistik', aras: 'sederhana',
    hurai: "Suhu pada minit 0 = 20 °C, pada minit 8 = 65 °C. Kadar purata = (65 − 20) ÷ 8 = 45 ÷ 8 = <b>5.625 °C/min</b>. (8.125 = 65 ÷ 8, lupa menolak suhu awal; 7.5 ialah kadar 2 minit pertama sahaja; 4.5 = 45 ÷ 10, guna tempoh yang salah.)"
  },
  { // 13 Geometri — sederhana
    s: "Satu garis lurus melalui titik (2, 7) dan (6, −1). Berapakah <b>pintasan-x</b> garis lurus itu?",
    en: "A straight line passes through (2, 7) and (6, −1). What is its x-intercept?",
    p: ['−5.5', '−1.5', '5.5', '11'], a: 2, topik: 'Geometri & Pengukuran', aras: 'sederhana',
    hurai: "Kecerunan m = (−1 − 7) ÷ (6 − 2) = −2. y = −2x + c; 7 = −2(2) + c → c = 11. Pintasan-x: 0 = −2x + 11 → x = <b>5.5</b>. (11 ialah pintasan-y; −1.5 datang daripada kecerunan +2 (ralat tanda); −5.5 tersilap tanda ketika menyelesaikan.)"
  },
  { // 14 Logik — sederhana
    s: "Di sebuah pulau, setiap penduduk sama ada <b>sentiasa bercakap benar</b> atau <b>sentiasa berbohong</b>. Pak Ali berkata, \"Saya dan Pak Badar kedua-duanya pembohong.\" Apakah kesimpulan yang betul?",
    en: "On an island, every inhabitant either always tells the truth or always lies. Pak Ali says, 'Pak Badar and I are both liars.' Which conclusion is correct?",
    p: ['Pak Ali pembohong, Pak Badar bercakap benar', 'Pak Ali bercakap benar, Pak Badar pembohong', 'Kedua-duanya pembohong', 'Kedua-duanya bercakap benar'], a: 0, topik: 'Penaakulan Logik', aras: 'sederhana',
    hurai: "Jika Pak Ali bercakap benar, maka dia pembohong — bercanggah. Jadi Pak Ali <b>pembohong</b>, dan kenyataannya palsu: tidak benar bahawa kedua-duanya pembohong. Oleh sebab Pak Ali pembohong, Pak Badar mestilah <b>bercakap benar</b>. (\"Kedua-duanya pembohong\" menerima kenyataan pembohong sebagai benar.)"
  },
  { // 15 Pola — sukar
    rajah: '<div style="text-align:center;font-family:var(--mono);line-height:1.9">Baris 1: &nbsp; 1<br>Baris 2: &nbsp; 3 &nbsp; 5<br>Baris 3: &nbsp; 7 &nbsp; 9 &nbsp; 11<br>Baris 4: &nbsp; 13 &nbsp; 15 &nbsp; 17 &nbsp; 19<br>⋮</div>',
    s: "Nombor ganjil disusun dalam baris seperti di atas: baris ke-n mengandungi n nombor ganjil berturutan. Berapakah hasil tambah semua nombor dalam <b>baris ke-10</b>?",
    en: "Odd numbers are arranged in rows as shown: row n contains n consecutive odd numbers. What is the sum of all numbers in row 10?",
    p: ['100', '910', '1 000', '1 090'], a: 2, topik: 'Pola & Jujukan', aras: 'sukar',
    hurai: "Hasil tambah baris: 1, 8, 27, 64, … = 1³, 2³, 3³, 4³ → baris ke-10 = 10³ = <b>1 000</b>. Semak: baris 1–9 menggunakan 45 nombor ganjil, jadi baris ke-10 bermula dengan nombor ganjil ke-46 = 91 dan berakhir dengan 109; 10 nombor dengan purata 100 → 1 000. (910 = 10 × 91 dan 1 090 = 10 × 109 guna nombor pertama atau terakhir sahaja; 100 = 10², corak salah.)"
  },
  { // 16 Persamaan linear — sukar (ISI)
    jenis: 'isi',
    s: "Encik Ravi dibayar RM 12 sejam bagi 8 jam pertama setiap hari. Setiap jam kerja lebih masa dibayar 1.5 kali kadar biasa. Dalam satu minggu, dia bekerja 5 hari, 8 jam biasa setiap hari, ditambah beberapa jam lebih masa. Jumlah gajinya minggu itu ialah RM 588. Berapakah jumlah jam lebih masa yang dia kerjakan?",
    en: "Mr Ravi earns RM 12 an hour for the first 8 hours each day; overtime is paid at 1.5 times the normal rate. One week he works 5 days of 8 normal hours plus some overtime and earns RM 588. How many overtime hours did he work?",
    a: 6, unit: 'jam', topik: 'Persamaan Linear', aras: 'sukar',
    hurai: "Gaji biasa = 5 × 8 × 12 = RM 480. Kadar lebih masa = 1.5 × 12 = RM 18 sejam. 480 + 18h = 588 → 18h = 108 → h = <b>6 jam</b>. (Ralat biasa: guna RM 12 untuk lebih masa → 9 jam.)"
  },
  { // 17 Peratus — sukar
    s: "Encik Tan ingin menyimpan RM 10 000 selama 2 tahun.<br>• Bank X: faedah 4% setahun, dikompaun setiap 6 bulan.<br>• Bank Y: faedah 4.1% setahun, dikompaun setiap tahun.<br>Pernyataan manakah yang betul tentang nilai simpanan pada akhir tahun ke-2?",
    en: "Mr Tan saves RM 10 000 for 2 years. Bank X: 4% per year compounded every 6 months. Bank Y: 4.1% per year compounded yearly. Which statement about the value after 2 years is correct?",
    p: ['Bank X lebih tinggi sebanyak RM 12.49', 'Kedua-dua bank memberi nilai yang sama', 'Bank Y lebih tinggi sebanyak RM 20.00', 'Bank Y lebih tinggi sebanyak RM 12.49'], a: 3, topik: 'Peratus & Matematik Pengguna', aras: 'sukar',
    hurai: "Bank X: 10 000 × (1 + 0.04/2)⁴ = 10 000 × 1.02⁴ = RM 10 824.32. Bank Y: 10 000 × 1.041² = RM 10 836.81. Bank Y lebih tinggi sebanyak <b>RM 12.49</b>. (RM 20.00 = 0.1% × 2 × 10 000, mengabaikan kesan pengkompaunan; ramai menyangka pengkompaunan 6 bulan pasti lebih untung.)"
  },
  { // 18 Kadar kerja — sukar
    s: "Amin boleh mengecat sebuah pagar seorang diri dalam 6 jam, manakala Bakar memerlukan 9 jam. Mereka mula mengecat bersama-sama, tetapi selepas 2 jam Amin terpaksa pergi. Berapakah bilangan jam <b>lagi</b> yang diperlukan oleh Bakar bekerja seorang diri untuk menyiapkan pagar itu?",
    en: "Amin can paint a fence alone in 6 hours; Bakar needs 9 hours. They start together, but after 2 hours Amin leaves. How many more hours must Bakar work alone to finish?",
    p: ['1.6 jam', '3.6 jam', '4 jam', '7 jam'], a: 2, topik: 'Nisbah, Kadar & Laju', aras: 'sukar',
    hurai: "Kadar bersama = 1/6 + 1/9 = 5/18 pagar sejam. Dalam 2 jam: 10/18 = 5/9 siap. Baki = 4/9. Masa Bakar = (4/9) ÷ (1/9) = <b>4 jam</b>. (3.6 jam ialah masa jika mereka bekerja bersama sepanjang masa; 1.6 = 3.6 − 2; 7 = 9 − 2, menganggap Amin tidak membantu langsung.)"
  },
  { // 19 Data — sukar
    s: "Markah akhir Sains dikira sebagai 30% markah kerja kursus + 70% markah peperiksaan. Hana memperoleh 84 bagi kerja kursus. Untuk mendapat gred A, markah akhir mesti sekurang-kurangnya 75. Jika markah peperiksaan ialah nombor bulat, berapakah markah peperiksaan <b>minimum</b> yang diperlukan oleh Hana?",
    en: "The final Science mark = 30% coursework + 70% exam. Hana scored 84 for coursework. Grade A needs a final mark of at least 75. If exam marks are whole numbers, what is the minimum exam mark Hana needs?",
    p: ['50', '66', '71', '72'], a: 3, topik: 'Data & Statistik', aras: 'sukar',
    hurai: "0.3 × 84 + 0.7x ≥ 75 → 25.2 + 0.7x ≥ 75 → 0.7x ≥ 49.8 → x ≥ 71.14… Markah bulat minimum = <b>72</b>. Semak: 71 memberi 74.9 (tidak cukup), 72 memberi 75.6. (71 membundarkan ke bawah; 66 = 2 × 75 − 84, menganggap kedua-dua markah sama berat; 50 ≈ 49.8, lupa membahagi dengan 0.7.)"
  },
  { // 20 Geometri — sukar
    rajah: '<svg viewBox="0 0 240 185" style="max-width:100%;width:280px" role="img" aria-label="Kapsul: silinder dengan hemisfera di kedua-dua hujung, panjang 26 cm, diameter 14 cm"><path d="M70 24H166A56 56 0 0 1 166 136H70A56 56 0 0 1 70 24Z" fill="none" stroke="var(--c)" stroke-width="3"/><path d="M70 24V136M166 24V136" stroke="var(--muted)" stroke-dasharray="4 4"/><path d="M118 24V136" stroke="currentColor"/><path d="M14 160H222M14 154V166M222 154V166" stroke="currentColor"/><g font-size="13" fill="currentColor"><text x="124" y="84">14 cm</text><text x="100" y="180">26 cm</text></g></svg>',
    s: "Sebuah bekas berbentuk kapsul terdiri daripada sebuah silinder dengan hemisfera pada kedua-dua hujungnya. Panjang keseluruhan kapsul ialah 26 cm dan diameternya 14 cm. Hitung isi padu kapsul itu. (Guna π = <sup>22</sup>⁄<sub>7</sub>)",
    en: "A capsule-shaped container is a cylinder with a hemisphere at each end. Its total length is 26 cm and its diameter is 14 cm. Find its volume. (Use π = 22/7)",
    p: ['5 441.33 cm³', '4 004.00 cm³', '3 285.33 cm³', '2 566.67 cm³'], a: 2, topik: 'Geometri & Pengukuran', aras: 'sukar',
    hurai: "Jejari = 7 cm. Panjang silinder = 26 − 7 − 7 = 12 cm. Silinder = 22/7 × 7² × 12 = 1 848 cm³. Dua hemisfera = satu sfera = 4/3 × 22/7 × 7³ = 1 437.33 cm³. Jumlah = <b>3 285.33 cm³</b>. (4 004 guna tinggi silinder 26 cm; 5 441.33 = 4 004 + sfera, tinggi silinder salah; 2 566.67 hanya mengira satu hemisfera.)"
  }
  ]
});

UKKM_PART(9, {
  id: 'eng', nama: 'Bahasa Inggeris', ikon: '📖', minit: 30, jenis: 'objektif',
  arahan: 'Read each text carefully and answer the questions that follow. Choose the best answer (A, B, C or D).',
  petikan: [
    { id: 'P1', tajuk: 'State Young Scientists Fair: Entry Rules', teks: `
<p><b>Lower Secondary Category</b></p>
<ol>
<li>Teams must have two or three students from Forms 1–3 of the same school.</li>
<li>Each school may send up to two teams.</li>
<li>Projects must include a real experiment with recorded data. Posters that only present information from books or websites will not be accepted.</li>
<li>Submit the entry form and a one-page summary to your Science teacher by <b>20 May</b>. Late entries will not be accepted.</li>
<li>Teams that pass the first round will present their projects at the State Youth Complex on 14 June. They must bring their own display board (maximum width: 1.2 m).</li>
</ol>
<p><b>Prizes:</b> Gold, Silver and Bronze in each category, plus a special award for the best use of recycled materials.</p>` },
    { id: 'P2', tajuk: 'Story: Nights on the Beach', teks: `
<p>Aishah had imagined that volunteering at the turtle hatchery in Terengganu would be like a nature documentary: moonlight, gentle waves and baby turtles racing to the sea. The reality, she soon discovered, involved a great deal of sand and very little sleep.</p>
<p>Each night, she and the other volunteers patrolled the beach with Encik Rosli, the ranger, looking for green turtles coming ashore to lay eggs. They used red torches, because white light confuses the turtles. On her third night, they found a female digging a nest near the high-tide line. Encik Rosli waited until she had finished and returned to the sea. Then he carefully moved the eggs to the hatchery, where they would be safe from the waves and from egg thieves.</p>
<p>Seven weeks later, long after Aishah had gone home, he sent her a short video. Ninety-two hatchlings from “her” nest were scrambling across the sand towards the waves.</p>
<p>Aishah watched it four times. Then she opened her school planner and wrote a note for the next holidays: <i>Ask about volunteering again.</i></p>` },
    { id: 'P3', tajuk: 'Article: When Hills Give Way', teks: `
<p>Landslides are among the most dangerous natural hazards in Malaysia’s hilly areas, such as Cameron Highlands and parts of Sabah. They happen when soil and rock on a slope suddenly move downhill, sometimes burying roads and houses within seconds.</p>
<p>Rain is the most common trigger. During the monsoon, water soaks into the ground and fills the tiny spaces between soil particles. The soil becomes heavier, and the water reduces the friction that holds the particles together. When the slope can no longer support this weight, it collapses.</p>
<p>Human activity often makes slopes weaker. When forests are cleared for farms, roads or housing, the tree roots that once held the soil together are lost. Cutting into the bottom of a hill to make flat land for building also removes support from the slope above. Poor drainage can allow water to collect in one place instead of flowing away safely.</p>
<p>Engineers have several ways to reduce the risk. They build retaining walls, plant grass and shrubs with strong roots, and install drains to carry water away from slopes. In some high-risk areas, sensors measure how much the ground is moving and send a warning when the movement becomes dangerous.</p>
<p>Residents also have a role. Cracks appearing in walls or in the ground, trees leaning at unusual angles, and muddy water suddenly flowing from a slope can all be warning signs. Reporting these signs early to the local council may save lives. Ignoring them, on the other hand, can turn a small problem into a disaster.</p>` }
  ],
  soalan: [
    { petikan: 'P1', topik: 'Main idea / purpose', s: 'What is the main purpose of this text?',
      p: ['To announce the winners of the State Young Scientists Fair', 'To set out the rules for entering a science fair', 'To teach students how to build a display board', 'To ask schools to collect recycled materials for the fair'], a: 1,
      hurai: `The text is titled "Entry Rules" and lists who can take part, what projects must include and when to submit. No winners are named yet.` },
    { petikan: 'P1', topik: 'Specific detail', s: 'By when must teams submit their entry forms?',
      p: ['20 May', '1 June', '14 June', 'The day of the first round'], a: 0,
      hurai: `"Submit the entry form and a one-page summary to your Science teacher by 20 May." 14 June is the presentation day.` },
    { petikan: 'P1', topik: 'Vocabulary in context', s: 'In “Teams ... will <b>present</b> their projects at the State Youth Complex”, the word <b>present</b> means',
      p: ['give as a gift to the judges', 'be at a place, such as a class', 'happening now, not in the past', 'show and explain to an audience'], a: 3,
      hurai: `Teams bring "their own display board" to show their projects, so "present" means to show and explain them. The other options are other meanings of "present".` },
    { petikan: 'P1', topik: 'Reference', s: 'In rule 5, <b>They</b> in “They must bring their own display board” refers to',
      p: ['the judges of the first round', 'the projects', 'the teams that pass the first round', 'the schools that send two teams'], a: 2,
      hurai: `"Teams that pass the first round will present their projects ... They must bring their own display board." Projects cannot bring anything; the teams do.` },
    { petikan: 'P1', topik: 'Inference', s: 'Which entry is most likely to be rejected?',
      p: ['Two Form 3 students who measured how fast ice melts in salt water', 'Three students from Forms 1 and 2 of the same school who tested home-made water filters', 'Three Form 2 students whose poster summarises facts about volcanoes from websites', 'Two Form 3 students who built a rain gauge from old bottles and recorded rainfall'], a: 2,
      hurai: `Rule 3: "Posters that only present information from books or websites will not be accepted." The other teams did real experiments with recorded data and meet the team rules.` },

    { petikan: 'P2', topik: 'Main idea / purpose', s: 'What is the story mainly about?',
      p: ['A ranger who catches people stealing turtle eggs', 'A girl who makes a nature documentary about turtles', 'Why green turtles always lay their eggs close to the high-tide line', 'A volunteer trip that was harder but more rewarding than expected'], a: 3,
      hurai: `Aishah finds "a great deal of sand and very little sleep", but after seeing the video she plans to volunteer again. She only imagined it would be "like a nature documentary".` },
    { petikan: 'P2', topik: 'Specific detail', s: 'Why did the volunteers use red torches on the beach?',
      p: ['White light confuses the turtles.', 'Red light helps them see the nests better.', 'The ranger did not have enough white torches.', 'Red light keeps egg thieves away from the beach.'], a: 0,
      hurai: `"They used red torches, because white light confuses the turtles."` },
    { petikan: 'P2', topik: 'Vocabulary in context', s: 'In “Ninety-two hatchlings ... were <b>scrambling</b> across the sand”, the word <b>scrambling</b> means',
      p: ['being mixed together like cooked eggs', 'moving quickly in an awkward, hurried way', 'fighting each other for a place in the water', 'climbing up a steep wall using their hands'], a: 1,
      hurai: `Baby turtles hurry clumsily over the sand "towards the waves". The cooking meaning ("scrambled eggs") does not fit here.` },
    { petikan: 'P2', topik: 'Reference', s: 'In “Encik Rosli waited until <b>she</b> had finished and returned to the sea”, <b>she</b> refers to',
      p: ['Aishah', 'the female turtle', 'another volunteer', 'Encik Rosli’s assistant'], a: 1,
      hurai: `The sentence before mentions "a female digging a nest". She "had finished" digging and "returned to the sea", which only the turtle would do.` },
    { petikan: 'P2', topik: 'Inference / attitude', s: 'What does Aishah’s note, “Ask about volunteering again,” suggest?',
      p: ['She wants to become a ranger as soon as she finishes school.', 'She is disappointed that she missed the hatching.', 'She found the experience worthwhile despite its difficulties.', 'She plans to complain about the lack of sleep.'], a: 2,
      hurai: `Although the work involved "very little sleep", she watched the video "four times" and planned to return. This shows she valued the experience.` },

    { petikan: 'P3', topik: 'Main idea / purpose', s: 'The article is mainly about',
      p: ['the causes of landslides and ways to reduce the risk', 'the history of landslides in Cameron Highlands and in Sabah', 'how engineers build roads through hilly areas cheaply', 'why the monsoon season is becoming longer every year'], a: 0,
      hurai: `The article explains what causes landslides (rain, clearing forests, cutting hills, poor drainage) and how engineers and residents can reduce the danger.` },
    { petikan: 'P3', topik: 'Specific detail', s: 'According to the article, how does heavy rain cause a slope to collapse?',
      p: ['It washes away all the grass and shrubs growing on the slope.', 'It cools the rocks until they crack into pieces.', 'It makes the drains overflow onto nearby roads.', 'It makes the soil heavier and less able to hold together.'], a: 3,
      hurai: `"The soil becomes heavier, and the water reduces the friction that holds the particles together."` },
    { petikan: 'P3', topik: 'Vocabulary in context', s: 'In “Rain is the most common <b>trigger</b>”, the word <b>trigger</b> means',
      p: ['the part of a gun that is pulled to fire it', 'a sudden emotional reaction to a memory', 'something that causes an event to begin', 'a button that switches on a camera'], a: 2,
      hurai: `The paragraph explains how rain starts the process that leads to a slope collapsing, so a trigger is the cause that sets off the landslide.` },
    { petikan: 'P3', topik: 'Reference', s: 'In the last paragraph, <b>them</b> in “Ignoring them, on the other hand” refers to',
      p: ['the warning signs', 'the residents', 'the lives that are saved', 'the sensors on the slopes'], a: 0,
      hurai: `"Reporting these signs early ... may save lives. Ignoring them, on the other hand ..." Reporting and ignoring are being compared, and both refer to the warning signs.` },
    { petikan: 'P3', topik: 'Inference', s: 'Puan Mariam lives at the bottom of a hill. Which of these should she report to the local council?',
      p: ['Workers have planted grass with strong roots on the slope.', 'Rainwater flows away quickly through the new drains.', 'A retaining wall has been built along the bottom of the slope.', 'A tall tree on the slope behind her house is now leaning.'], a: 3,
      hurai: `"Trees leaning at unusual angles" is listed as a warning sign. The other three are ways of reducing the risk, so they are not dangers.` }
  ]
});

// UKKM Set 09 — Ujian Keperibadian (skala 4 mata), 100 item. Item terbalik bukan-kejujuran: 28.
UKKM_PART(9, {
  id: 'per', nama: 'Ujian Keperibadian', ikon: '🧭', minit: 30,
  arahan: "Baca setiap pernyataan dan pilih <b>Sangat setuju</b>, <b>Setuju</b>, <b>Tidak setuju</b> atau <b>Sangat tidak setuju</b> mengikut diri anda yang sebenar. Jawab dengan jujur, logik dan konsisten; beberapa idea diulang dengan ayat berbeza. Bagi situasi asrama yang belum anda alami, jawab mengikut tindakan yang paling mungkin anda lakukan. Masa: kira-kira 18 saat bagi setiap item.",
  skala: ["Sangat setuju","Setuju","Tidak setuju","Sangat tidak setuju"],
  item: [
    { s: "Saya membaca berita teknologi untuk mengetahui ciptaan terkini.", trait: "Minat Ilmu, Sains & Motivasi", pos: [0, 1], hurai: "Mengikuti perkembangan teknologi menunjukkan minat." },
    { s: "Saya memaksa rakan mengikut cara saya dalam setiap aktiviti.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: [2, 3], hurai: "Memaksa orang lain menjejaskan kerjasama." },
    { id: 'sa2', pasangan: 'sa1', s: "Saya memilih untuk melangkau topik sains yang sukar semasa mengulang kaji.", trait: "Minat Ilmu, Sains & Motivasi", pos: [2, 3], hurai: "Melangkau topik sukar meninggalkan kelemahan." },
    { s: "Saya memadam bukti apabila saya merosakkan peralatan makmal supaya saya terlepas.", trait: "Integriti & Disiplin Diri", pos: [2, 3], hurai: "Menyembunyikan kesalahan menjejaskan integriti." },
    { s: "Saya membantu kumpulan lain apabila kumpulan saya sudah siap.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: [0, 1], hurai: "Membantu pihak lain menunjukkan semangat kerjasama." },
    { id: 'ka1', pasangan: 'ka2', s: "Saya bersedia menjadi orang pertama yang mencuba apabila guru memperkenalkan aktiviti baharu.", trait: "Kepimpinan & Inisiatif", pos: [0, 1], hurai: "Keberanian mencuba dahulu memberi contoh kepada rakan lain." },
    { id: 'ma1', pasangan: 'ma2', s: "Saya membuat keputusan sendiri tentang cara menggunakan masa lapang di asrama.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: [0, 1], hurai: "Mengurus masa lapang sendiri menunjukkan kemandirian." },
    { id: 'ib2', pasangan: 'ib1', s: "Saya kerap membuka media sosial ketika sedang membuat kerja sekolah.", trait: "Integriti & Disiplin Diri", pos: [2, 3], hurai: "Mudah terganggu menunjukkan kawalan diri yang lemah." },
    { id: 'eb2', pasangan: 'eb1', s: "Selepas beberapa kali gagal, saya yakin usaha saya sia-sia dan berhenti mencuba.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: [2, 3], hurai: "Berhenti mencuba menunjukkan daya tahan yang rendah." },
    { s: "Saya mengurus kunci loker sendiri dengan berhati-hati.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: [0, 1], hurai: "Menjaga barang sendiri ialah tanggungjawab." },
    { s: "Saya suka mencipta penyelesaian kepada masalah kecil di rumah.", trait: "Minat Ilmu, Sains & Motivasi", pos: [0, 1], hurai: "Kreativiti menyelesaikan masalah menyokong minat inovasi." },
    { s: "Saya sentiasa menghormati pendapat orang lain tanpa sekali pun berasa jengkel.", trait: "Skala Kejujuran", pos: [2, 3], hurai: "Rasa jengkel sekali-sekala ialah perkara biasa; mengakuinya menunjukkan kejujuran." },
    { s: "Saya sanggup menjadi ketua rumah sukan walaupun tugasnya memenatkan.", trait: "Kepimpinan & Inisiatif", pos: [0, 1], hurai: "Kesanggupan memikul tugas berat menunjukkan semangat kepimpinan." },
    { id: 'ia2', pasangan: 'ia1', s: "Saya meminta rakan menggantikan giliran saya membersihkan bilik air dan berjanji membalasnya, tetapi saya melupakannya.", trait: "Integriti & Disiplin Diri", pos: [2, 3], hurai: "Mengelak tugas dan memungkiri janji menjejaskan integriti." },
    { s: "Saya suka menyelesaikan soalan sains berbentuk situasi.", trait: "Minat Ilmu, Sains & Motivasi", pos: [0, 1], hurai: "Soalan situasi melatih aplikasi ilmu." },
    { s: "Saya melepaskan peluang menjadi wakil sekolah kerana bimbang terpaksa bekerja lebih.", trait: "Kepimpinan & Inisiatif", pos: [2, 3], hurai: "Peluang mewakili sekolah membina kepimpinan dan pengalaman." },
    { s: "Saya boleh memaafkan diri sendiri selepas membuat kesilapan.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: [0, 1], hurai: "Memaafkan diri membantu bangkit semula." },
    { s: "Saya tetap tenang dan membantu membimbing rakan ke tempat berkumpul semasa latihan kebakaran.", trait: "Kepimpinan & Inisiatif", pos: [0, 1], hurai: "Pemimpin membantu orang lain mengikut prosedur dalam situasi cemas." },
    { s: "Saya cepat berasa bosan dan mahu pulang apabila terpaksa tinggal di asrama pada hujung minggu.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: [2, 3], hurai: "Kesediaan hidup berasrama termasuk hujung minggu di asrama." },
    { id: 'mb1', pasangan: 'mb2', s: "Saya memeriksa dan menyusun semula barang saya setiap minggu.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: [0, 1], hurai: "Rutin menyusun barang menunjukkan pengurusan diri yang baik." },
    { s: "Saya menghempas pintu bilik apabila berasa geram.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: [2, 3], hurai: "Melepaskan marah secara kasar menunjukkan kawalan emosi lemah." },
    { id: 'ea2', pasangan: 'ea1', s: "Apabila dituduh, saya terus menengking orang itu sebelum mendengar cerita sebenar.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: [2, 3], hurai: "Reaksi melulu menunjukkan kawalan emosi yang lemah." },
    { s: "Saya mencatat kesilapan lazim saya supaya dapat mengelakkannya dalam peperiksaan.", trait: "Minat Ilmu, Sains & Motivasi", pos: [0, 1], hurai: "Belajar daripada kesilapan menunjukkan motivasi." },
    { s: "Saya menyediakan pelan tindakan apabila kelab saya diberi tugasan menganjurkan program.", trait: "Kepimpinan & Inisiatif", pos: [0, 1], hurai: "Pelan tindakan ialah alat utama pemimpin yang tersusun." },
    { s: "Saya keluar ke kantin semasa waktu kelas dengan alasan ke tandas.", trait: "Integriti & Disiplin Diri", pos: [2, 3], hurai: "Memberi alasan palsu untuk ponteng ialah ketidakjujuran." },
    { s: "Saya terus berlatih walaupun ditertawakan semasa kali pertama mencuba.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: [0, 1], hurai: "Ketahanan diri membolehkan seseorang terus berusaha." },
    { s: "Saya dapat mengawal perasaan gementar ketika bercakap dengan orang yang lebih tua.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: [0, 1], hurai: "Mengawal gementar membantu komunikasi." },
    { s: "Saya menjaga nama baik rakan apabila dia tiada.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: [0, 1], hurai: "Menjaga maruah rakan menunjukkan kesetiaan." },
    { s: "Saya sanggup meminjamkan nota kepada rakan yang tidak hadir.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: [0, 1], hurai: "Berkongsi bahan membantu rakan mengejar pelajaran." },
    { s: "Saya membiarkan buku dan alat tulis bersepah di meja selepas kelas prep.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: [2, 3], hurai: "Kekemasan ruang belajar ialah tanggungjawab harian." },
    { id: 'sb1', pasangan: 'sb2', s: "Saya mempunyai matlamat jangka panjang yang jelas dalam pelajaran.", trait: "Minat Ilmu, Sains & Motivasi", pos: [0, 1], hurai: "Matlamat jangka panjang mengekalkan motivasi." },
    { s: "Saya berusaha menguasai bahasa Inggeris kerana bahasa itu membantu pembelajaran sains.", trait: "Minat Ilmu, Sains & Motivasi", pos: [0, 1], hurai: "Penguasaan bahasa menyokong akses ilmu sains." },
    { s: "Saya pernah berasa geram dengan rakan baik saya sendiri.", trait: "Skala Kejujuran", pos: [0, 1], hurai: "Rasa geram terhadap kawan rapat sekali-sekala ialah perkara biasa." },
    { s: "Saya boleh tinggal bersama rakan yang mempunyai cara hidup berbeza.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: [0, 1], hurai: "Kebolehsuaian penting di asrama yang pelbagai." },
    { s: "Saya sentiasa tahu jawapan bagi setiap soalan guru.", trait: "Skala Kejujuran", pos: [2, 3], hurai: "Tiada pelajar yang tahu segala-galanya; jawapan jujur lebih dipercayai." },
    { s: "Saya lebih suka melihat rakan menjalankan eksperimen daripada mencubanya sendiri.", trait: "Minat Ilmu, Sains & Motivasi", pos: [2, 3], hurai: "Penglibatan aktif dalam eksperimen penting untuk pembelajaran." },
    { s: "Saya memberi sokongan kepada rakan yang gagal dalam ujian.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: [0, 1], hurai: "Sokongan membantu rakan bangkit semula." },
    { s: "Saya merancang aktiviti hujung minggu supaya seimbang antara rehat dan belajar.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: [0, 1], hurai: "Perancangan seimbang menunjukkan kemandirian." },
    { id: 'ba2', pasangan: 'ba1', s: "Saya meneruskan rancangan kumpulan walaupun nampak jelas ada ahli yang tersisih.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: [2, 3], hurai: "Membiarkan ahli tersisih melemahkan pasukan." },
    { s: "Saya mengurus tekanan dengan merancang masa belajar dan masa rehat.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: [0, 1], hurai: "Perancangan membantu mengawal tekanan." },
    { s: "Saya meminta maaf terlebih dahulu apabila berlaku pertengkaran kecil dengan kawan.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: [0, 1], hurai: "Memulakan perdamaian menunjukkan kematangan." },
    { s: "Saya bersemangat menyertai lawatan ke pusat sains atau muzium.", trait: "Minat Ilmu, Sains & Motivasi", pos: [0, 1], hurai: "Lawatan sains menambah pengalaman belajar." },
    { s: "Saya menghormati masa rehat rakan sebilik.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: [0, 1], hurai: "Bertimbang rasa memudahkan hidup bersama." },
    { s: "Saya meminta maklum balas daripada ahli selepas saya mengetuai sesuatu aktiviti.", trait: "Kepimpinan & Inisiatif", pos: [0, 1], hurai: "Maklum balas membantu pemimpin memperbaiki diri." },
    { s: "Saya mengurus sendiri pakaian seragam untuk hari-hari tertentu.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: [0, 1], hurai: "Mengurus jadual pakaian seragam menunjukkan berdikari." },
    { s: "Ada kalanya saya mengambil masa lebih lama untuk menyiapkan kerja kerana leka.", trait: "Skala Kejujuran", pos: [0, 1], hurai: "Mengakui kelemahan biasa menunjukkan kejujuran." },
    { s: "Saya dapat mengawal rasa marah dan bercakap dengan sopan dalam mesyuarat.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: [0, 1], hurai: "Mengawal emosi dalam situasi formal menunjukkan kematangan." },
    { s: "Saya memeriksa jadual dan menyediakan buku pada malam sebelumnya.", trait: "Integriti & Disiplin Diri", pos: [0, 1], hurai: "Persediaan awal menunjukkan disiplin." },
    { s: "Saya bersedia menghadapi suasana pembelajaran yang lebih mencabar di MRSM.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: [0, 1], hurai: "Kesediaan menghadapi cabaran menunjukkan ketahanan diri." },
    { s: "Saya merancang agenda sebelum mengadakan perjumpaan kumpulan.", trait: "Kepimpinan & Inisiatif", pos: [0, 1], hurai: "Agenda yang jelas menjadikan perjumpaan lebih berkesan." },
    { s: "Saya tidak pernah tersalah faham arahan guru.", trait: "Skala Kejujuran", pos: [2, 3], hurai: "Setiap pelajar pernah tersalah faham; jawapan jujur lebih realistik." },
    { s: "Saya berbincang untuk menetapkan peraturan bersama di dorm.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: [0, 1], hurai: "Peraturan yang dipersetujui bersama mengurangkan konflik." },
    { s: "Saya rasa soalan \"mengapa\" daripada guru hanya menyusahkan.", trait: "Minat Ilmu, Sains & Motivasi", pos: [2, 3], hurai: "Soalan \"mengapa\" melatih pemikiran saintifik." },
    { s: "Saya sering merasakan semua orang sengaja menyusahkan saya.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: [2, 3], hurai: "Prasangka sebegini menjejaskan kestabilan emosi." },
    { s: "Saya suka mencuba eksperimen sains yang saya lihat dalam buku.", trait: "Minat Ilmu, Sains & Motivasi", pos: [0, 1], hurai: "Mencuba eksperimen menunjukkan minat sains." },
    { s: "Saya membuat bising di dorm walaupun rakan sedang belajar.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: [2, 3], hurai: "Mengganggu rakan belajar menunjukkan sikap kurang bertimbang rasa." },
    { s: "Saya mematuhi larangan menggunakan gajet sepanjang kem motivasi.", trait: "Integriti & Disiplin Diri", pos: [0, 1], hurai: "Mematuhi peraturan program menunjukkan disiplin diri." },
    { s: "Saya menjawab kuiz dalam talian dengan usaha sendiri walaupun tiada sesiapa mengawasi saya di rumah.", trait: "Integriti & Disiplin Diri", pos: [0, 1], hurai: "Jujur dalam penilaian kendiri menunjukkan integriti." },
    { s: "Saya memberi tumpuan kepada perkara yang boleh saya ubah.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: [0, 1], hurai: "Fokus pada perkara dalam kawalan mengurangkan tekanan." },
    { s: "Saya tahu tempat untuk mendapatkan bantuan pertolongan cemas di asrama.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: [0, 1], hurai: "Kesediaan menghadapi kecemasan penting di asrama." },
    { s: "Saya tidak pernah mengatakan sesuatu yang saya kesali kemudiannya.", trait: "Skala Kejujuran", pos: [2, 3], hurai: "Hampir setiap orang pernah tersalah cakap; jawapan jujur lebih dipercayai." },
    { s: "Saya boleh menyelesaikan salah faham antara dua rakan sekumpulan secara adil.", trait: "Kepimpinan & Inisiatif", pos: [0, 1], hurai: "Pemimpin bertindak sebagai pendamai yang adil." },
    { s: "Saya berasa sangat sedih berhari-hari apabila kalah undian pemilihan kelab.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: [2, 3], hurai: "Kesedihan berpanjangan menghalang pemulihan." },
    { s: "Saya menyerahkan barang terlarang yang ditemui di dorm kepada warden.", trait: "Integriti & Disiplin Diri", pos: [0, 1], hurai: "Melaporkan barang terlarang menunjukkan integriti dan keselamatan." },
    { s: "Saya boleh menyesuaikan diri dengan rakan sebilik yang berlatarkan budaya berbeza.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: [0, 1], hurai: "Keterbukaan penting dalam kehidupan asrama." },
    { s: "Saya membuat nota sendiri walaupun rakan menawarkan nota yang sudah siap.", trait: "Integriti & Disiplin Diri", pos: [0, 1], hurai: "Usaha sendiri menunjukkan disiplin belajar." },
    { s: "Saya membersihkan meja belajar saya setiap hari.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: [0, 1], hurai: "Ruang belajar yang kemas membantu fokus." },
    { s: "Saya cenderung mengikut sahaja keputusan rakan rapat walaupun saya nampak kelemahannya.", trait: "Kepimpinan & Inisiatif", pos: [2, 3], hurai: "Pemimpin berani menyuarakan kelemahan sesuatu rancangan." },
    { s: "Saya mudah berasa terancam apabila rakan mendapat jawatan yang saya mahu.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: [2, 3], hurai: "Rasa terancam yang mudah timbul menunjukkan emosi kurang stabil." },
    { s: "Saya membeli barang keperluan mengikut senarai yang telah saya sediakan.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: [0, 1], hurai: "Berbelanja secara terancang menunjukkan kemandirian." },
    { s: "Saya membuat soalan sendiri untuk menguji kefahaman saya.", trait: "Minat Ilmu, Sains & Motivasi", pos: [0, 1], hurai: "Menguji diri ialah teknik belajar aktif." },
    { id: 'sb2', pasangan: 'sb1', s: "Saya belajar secara sambil lewa dan mengikut sahaja keadaan.", trait: "Minat Ilmu, Sains & Motivasi", pos: [2, 3], hurai: "Belajar tanpa matlamat melemahkan motivasi." },
    { s: "Saya memberitahu jurulatih dengan jujur apabila saya cedera dan perlu berehat.", trait: "Integriti & Disiplin Diri", pos: [0, 1], hurai: "Kejujuran tentang keadaan diri penting untuk keselamatan." },
    { id: 'ka2', pasangan: 'ka1', s: "Saya lebih suka melihat orang lain mencuba aktiviti baharu dahulu sebelum saya menyertainya.", trait: "Kepimpinan & Inisiatif", pos: [2, 3], hurai: "Menunggu orang lain sentiasa mendahului menunjukkan inisiatif yang rendah." },
    { s: "Saya tetap ceria walaupun cuti saya dipendekkan kerana aktiviti sekolah.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: [0, 1], hurai: "Menerima keadaan dengan positif menunjukkan kematangan." },
    { s: "Saya melaporkan kerosakan yang saya sebabkan kepada pihak asrama.", trait: "Integriti & Disiplin Diri", pos: [0, 1], hurai: "Bertanggungjawab atas kerosakan menunjukkan integriti." },
    { id: 'mb2', pasangan: 'mb1', s: "Saya hanya mengemas barang apabila warden mengumumkan pemeriksaan dorm.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: [2, 3], hurai: "Kekemasan sepatutnya menjadi rutin, bukan reaksi kepada pemeriksaan." },
    { s: "Saya bercampur dengan semua rakan sekelas, bukan hanya satu kumpulan.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: [0, 1], hurai: "Pergaulan yang luas membina hubungan sosial yang baik." },
    { s: "Saya sanggup menegur ketua kelas secara peribadi jika dia membuat keputusan yang tidak adil.", trait: "Kepimpinan & Inisiatif", pos: [0, 1], hurai: "Berani menegur secara berhemah menunjukkan integriti kepimpinan." },
    { s: "Saya mampu menerima bahawa saya tidak akan menang setiap kali.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: [0, 1], hurai: "Penerimaan realistik menunjukkan kestabilan emosi." },
    { s: "Kadang-kadang saya berasa mahu memberi alasan apabila tidak bersedia.", trait: "Skala Kejujuran", pos: [0, 1], hurai: "Mengakui godaan biasa lebih jujur daripada menafikannya." },
    { s: "Saya berasa sangat tertekan dan mahu menarik diri apabila diminta mengetuai aktiviti.", trait: "Kepimpinan & Inisiatif", pos: [2, 3], hurai: "Calon MRSM perlu bersedia memikul peranan memimpin." },
    { id: 'eb1', pasangan: 'eb2', s: "Saya mampu bangkit semula selepas menghadapi minggu yang penuh kegagalan.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: [0, 1], hurai: "Bangkit selepas kegagalan ialah tanda ketahanan." },
    { s: "Saya menyediakan bekalan air minuman sendiri untuk aktiviti luar.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: [0, 1], hurai: "Persediaan sendiri menunjukkan kemandirian." },
    { s: "Saya bergantung pada rakan sebilik untuk mengingatkan saya tentang semua jadual.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: [2, 3], hurai: "Pelajar perlu mengurus jadual sendiri." },
    { s: "Saya kekal tenang ketika komputer rosak semasa menyiapkan tugasan.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: [0, 1], hurai: "Ketenangan membantu mencari penyelesaian." },
    { id: 'ib1', pasangan: 'ib2', s: "Saya menjauhkan telefon daripada meja ketika membuat kerja sekolah.", trait: "Integriti & Disiplin Diri", pos: [0, 1], hurai: "Mengawal gangguan menunjukkan disiplin diri." },
    { id: 'sa1', pasangan: 'sa2', s: "Saya suka mempelajari konsep sains yang mencabar.", trait: "Minat Ilmu, Sains & Motivasi", pos: [0, 1], hurai: "Minat terhadap cabaran sains sesuai bagi calon MRSM." },
    { id: 'ma2', pasangan: 'ma1', s: "Pada masa lapang di asrama, saya menunggu kawan menentukan apa yang perlu saya lakukan.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: [2, 3], hurai: "Bergantung pada orang lain untuk mengisi masa menunjukkan kemandirian yang rendah." },
    { id: 'ia1', pasangan: 'ia2', s: "Saya memenuhi tugas giliran membersihkan bilik air dorm mengikut jadual.", trait: "Integriti & Disiplin Diri", pos: [0, 1], hurai: "Melaksanakan tugas bersama menunjukkan disiplin dan amanah." },
    { s: "Saya mengambil inisiatif menyediakan nota ringkas untuk dikongsi dengan rakan sekelas.", trait: "Kepimpinan & Inisiatif", pos: [0, 1], hurai: "Berkongsi bahan secara sukarela menunjukkan inisiatif." },
    { s: "Saya berasa cukup dengan nota guru dan malas mencari bahan tambahan.", trait: "Minat Ilmu, Sains & Motivasi", pos: [2, 3], hurai: "Mencari bahan tambahan menunjukkan minat ilmu." },
    { s: "Saya mengikut prosedur yang betul ketika meminjam peralatan sukan.", trait: "Integriti & Disiplin Diri", pos: [0, 1], hurai: "Mematuhi prosedur menunjukkan disiplin." },
    { s: "Saya tidak pernah berasa gementar sebelum peperiksaan.", trait: "Skala Kejujuran", pos: [2, 3], hurai: "Gementar sebelum peperiksaan ialah perkara biasa; menafikannya kelihatan tidak jujur." },
    { id: 'ba1', pasangan: 'ba2', s: "Saya peka apabila rakan sekumpulan kelihatan kurang selesa dengan pembahagian tugas.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: [0, 1], hurai: "Peka terhadap perasaan ahli menjaga keharmonian pasukan." },
    { id: 'ea1', pasangan: 'ea2', s: "Saya bertenang dahulu sebelum menjawab apabila seseorang menuduh saya.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: [0, 1], hurai: "Bertenang membantu memberi jawapan yang rasional." },
    { s: "Saya mengakui kelebihan rakan dan belajar daripadanya.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: [0, 1], hurai: "Belajar daripada rakan menunjukkan kerendahan hati." },
    { s: "Saya bergosip tentang guru dan rakan dalam kumpulan sembang kelas.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: [2, 3], hurai: "Bergosip merosakkan suasana hormat-menghormati." },
    { s: "Saya mencatat formula penting dan memahami maksud setiap simbol.", trait: "Minat Ilmu, Sains & Motivasi", pos: [0, 1], hurai: "Kefahaman simbol mengukuhkan penguasaan." },
    { s: "Saya menggalakkan ahli kumpulan yang kurang yakin untuk membuat pembentangan.", trait: "Kepimpinan & Inisiatif", pos: [0, 1], hurai: "Pemimpin membina keyakinan ahli pasukannya." }
  ]
});

UKKM.push({ set: 9, tajuk: 'Set 9', bahagian: ['mat', 'sains', 'eng', 'per'].map(k => B[k]).filter(Boolean) }); })();
