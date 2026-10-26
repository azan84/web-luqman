(function () { const B = {}; const UKKM_PART = (n, b) => { B[b.id] = b; };
UKKM_PART(3, { id: 'mat', nama: 'Matematik', ikon: '🧮', minit: 30,
  arahan: 'Jawab semua 20 soalan. 18 soalan objektif (pilih A, B, C atau D) dan 2 soalan isian (taip jawapan nombor). Kalkulator saintifik dibenarkan; gunakan kertas conteng.',
  soalan: [
  { // 1 Pola — mudah
    rajah: '<svg viewBox="0 0 330 110" style="max-width:100%;width:340px" role="img" aria-label="Pola titik segi tiga: 1, 3, 6, 10 titik"><circle cx="26" cy="14" r="5" fill="var(--c)"/><text x="20" y="100" font-size="12" fill="currentColor">Rajah 1</text><circle cx="83" cy="14" r="5" fill="var(--c)"/><circle cx="76" cy="28" r="5" fill="var(--c)"/><circle cx="90" cy="28" r="5" fill="var(--c)"/><text x="70" y="100" font-size="12" fill="currentColor">Rajah 2</text><circle cx="155" cy="14" r="5" fill="var(--c)"/><circle cx="148" cy="28" r="5" fill="var(--c)"/><circle cx="162" cy="28" r="5" fill="var(--c)"/><circle cx="141" cy="42" r="5" fill="var(--c)"/><circle cx="155" cy="42" r="5" fill="var(--c)"/><circle cx="169" cy="42" r="5" fill="var(--c)"/><text x="135" y="100" font-size="12" fill="currentColor">Rajah 3</text><circle cx="242" cy="14" r="5" fill="var(--c)"/><circle cx="235" cy="28" r="5" fill="var(--c)"/><circle cx="249" cy="28" r="5" fill="var(--c)"/><circle cx="228" cy="42" r="5" fill="var(--c)"/><circle cx="242" cy="42" r="5" fill="var(--c)"/><circle cx="256" cy="42" r="5" fill="var(--c)"/><circle cx="221" cy="56" r="5" fill="var(--c)"/><circle cx="235" cy="56" r="5" fill="var(--c)"/><circle cx="249" cy="56" r="5" fill="var(--c)"/><circle cx="263" cy="56" r="5" fill="var(--c)"/><text x="215" y="100" font-size="12" fill="currentColor">Rajah 4</text></svg>',
    s: "Rajah menunjukkan susunan titik yang membentuk segi tiga. Jika pola ini berterusan, berapakah bilangan titik dalam Rajah 8?",
    en: "The diagram shows dots arranged in triangles. If the pattern continues, how many dots are in Figure 8?",
    p: ['64', '45', '36', '28'], a: 2, topik: 'Pola & Jujukan', aras: 'mudah',
    hurai: "Bilangan titik: 1, 3, 6, 10, … (tambah 2, 3, 4, …). Rajah 5 = 15, Rajah 6 = 21, Rajah 7 = 28, Rajah 8 = <b>36</b>. (Atau 8 × 9 ÷ 2 = 36.) 28 ialah Rajah 7 (tersilap kira); 45 ialah Rajah 9; 64 = 8², bukan nombor segi tiga."
  },
  { // 2 Persamaan linear — mudah
    s: "Hasil tambah tiga nombor <b>genap</b> berturutan ialah 138. Apakah nombor yang terbesar?",
    en: "The sum of three consecutive even numbers is 138. What is the largest number?",
    p: ['44', '46', '47', '48'], a: 3, topik: 'Persamaan Linear', aras: 'mudah',
    hurai: "x + (x + 2) + (x + 4) = 138 → 3x + 6 = 138 → x = 44. Nombor: 44, 46, 48. Terbesar = <b>48</b>. (46 ialah nombor tengah = 138 ÷ 3; 47 datang daripada nombor bulat berturutan 45, 46, 47; 44 ialah nombor terkecil.)"
  },
  { // 3 Faedah mudah — mudah
    s: "Encik Daud menyimpan RM 2 400 dalam akaun yang memberi faedah mudah 3.5% setahun. Berapakah jumlah wang dalam akaunnya selepas 4 tahun?",
    en: "Mr Daud saves RM 2 400 in an account paying 3.5% simple interest per year. How much is in the account after 4 years?",
    p: ['RM 2 754.06', 'RM 2 736.00', 'RM 2 484.00', 'RM 336.00'], a: 1, topik: 'Peratus & Matematik Pengguna', aras: 'mudah',
    hurai: "Faedah = 2400 × 0.035 × 4 = RM 336. Jumlah = 2400 + 336 = <b>RM 2 736</b>. (RM 336 hanya faedah; RM 2 484 hanya faedah setahun; RM 2 754.06 guna faedah kompaun 2400 × 1.035⁴.)"
  },
  { // 4 Kadar — mudah
    s: "Sebuah kedai menjual jus oren dalam empat saiz. Saiz manakah memberi <b>nilai terbaik</b> (harga paling rendah bagi setiap mililiter)?",
    en: "A shop sells orange juice in four sizes. Which size is the best value (lowest price per millilitre)?",
    p: ['500 ml — RM 4.20', '750 ml — RM 6.90', '1.2 L — RM 10.20', '2 L — RM 17.60'], a: 0, topik: 'Nisbah, Kadar & Laju', aras: 'mudah',
    hurai: "Harga per 100 ml: 500 ml → 4.20 ÷ 5 = 84 sen; 750 ml → 6.90 ÷ 7.5 = 92 sen; 1.2 L → 10.20 ÷ 12 = 85 sen; 2 L → 17.60 ÷ 20 = 88 sen. Nilai terbaik: <b>500 ml</b>. (Pek paling besar tidak semestinya paling murah per unit.)"
  },
  { // 5 Data — mudah
    rajah: '<svg viewBox="0 0 380 225" style="max-width:100%;width:370px" role="img" aria-label="Carta pai sukan pilihan murid"><path d="M180,110 L180.0,20.0 A90,90 0 0 1 243.64,173.64 Z" fill="var(--c)" fill-opacity="0.55" stroke="currentColor" stroke-width="1.5"/><text x="230.81" y="92.95" font-size="13" fill="currentColor" text-anchor="middle">135°</text><text x="276.08" y="74.2" font-size="12" fill="currentColor" text-anchor="start">Bola sepak</text><path d="M180,110 L243.64,173.64 A90,90 0 0 1 135.0,187.94 Z" fill="var(--c)" fill-opacity="0.35" stroke="currentColor" stroke-width="1.5"/><text x="187.18" y="168.53" font-size="13" fill="currentColor" text-anchor="middle">75°</text><text x="193.57" y="217.11" font-size="12" fill="currentColor" text-anchor="start">Badminton</text><path d="M180,110 L135.0,187.94 A90,90 0 0 1 102.06,65.0 Z" fill="var(--c)" fill-opacity="0.2" stroke="currentColor" stroke-width="1.5"/><text x="126.87" y="128.24" font-size="13" fill="currentColor" text-anchor="middle">90°</text><text x="79.54" y="140.92" font-size="12" fill="currentColor" text-anchor="end">Bola jaring</text><path d="M180,110 L102.06,65.0 A90,90 0 0 1 180.0,20.0 Z" fill="var(--c)" fill-opacity="0.08" stroke="currentColor" stroke-width="1.5"/><text x="152.5" y="66.37" font-size="13" fill="currentColor" text-anchor="middle">60°</text><text x="128.0" y="23.93" font-size="12" fill="currentColor" text-anchor="end">Olahraga</text></svg>',
    s: "Carta pai menunjukkan sukan pilihan 240 orang murid Tingkatan 3. Berapakah bilangan murid yang memilih badminton?",
    en: "The pie chart shows the favourite sports of 240 Form 3 pupils. How many pupils chose badminton?",
    p: ['50', '60', '75', '180'], a: 0, topik: 'Data & Statistik', aras: 'mudah',
    hurai: "Badminton = 75° daripada 360°. Bilangan = 75/360 × 240 = <b>50</b>. (75 ialah sudut, bukan bilangan murid; 180 menganggap 75° sebagai 75%; 60 ialah bilangan bagi sektor 90°, bola jaring.)"
  },
  { // 6 Geometri — sederhana
    s: "Sebuah tin berbentuk silinder mempunyai diameter 14 cm dan tinggi 20 cm. Tin itu diisi air sehingga 3/4 penuh. Berapakah isi padu air dalam tin itu? (Guna π = 22/7)",
    en: "A cylindrical tin has diameter 14 cm and height 20 cm. It is filled with water until it is 3/4 full. What is the volume of water? (Use π = 22/7)",
    p: ['9 240 cm³', '3 080 cm³', '2 310 cm³', '660 cm³'], a: 2, topik: 'Geometri & Pengukuran', aras: 'sederhana',
    hurai: "Jejari = 7 cm. Isi padu tin = 22/7 × 7² × 20 = 3 080 cm³. Air = 3/4 × 3 080 = <b>2 310 cm³</b>. (3 080 lupa 3/4; 9 240 guna diameter 14 sebagai jejari; 660 guna 2πr × h × 3/4, iaitu luas sisi, bukan isi padu.)"
  },
  { // 7 Logik — sederhana
    s: "Enam peserta tamat dalam satu larian merentas desa tanpa ada yang seri.<br>• Hakim tamat sebelum Farid.<br>• Farid tamat sebelum Gopal.<br>• Irfan tamat sejurus selepas Gopal.<br>• Kumar tamat sejurus selepas Jamal.<br>• Jamal tamat di tempat ketiga.<br>Siapakah yang tamat di tempat <b>kelima</b>?",
    en: "Six runners finish a race with no ties. Hakim finishes before Farid; Farid before Gopal; Irfan immediately after Gopal; Kumar immediately after Jamal; Jamal is third. Who is fifth?",
    p: ['Gopal', 'Farid', 'Irfan', 'Kumar'], a: 0, topik: 'Penaakulan Logik', aras: 'sederhana',
    hurai: "Jamal ke-3, Kumar ke-4. Tempat kosong: 1, 2, 5, 6 untuk Hakim, Farid, Gopal, Irfan. Hakim < Farid < Gopal dan Irfan sejurus selepas Gopal → Gopal dan Irfan mesti 5 dan 6. Maka Hakim 1, Farid 2, <b>Gopal 5</b>, Irfan 6."
  },
  { // 8 Pola — sederhana
    s: "Manik disusun pada seutas tali mengikut pola berulang: <b>merah, biru, biru, kuning, hijau, biru, putih</b>, merah, biru, biru, … Berapakah bilangan manik <b>biru</b> dalam 2026 biji manik yang pertama?",
    en: "Beads are strung in the repeating pattern red, blue, blue, yellow, green, blue, white, red, blue, blue, … How many blue beads are among the first 2026 beads?",
    p: ['1013', '869', '868', '867'], a: 1, topik: 'Pola & Jujukan', aras: 'sederhana',
    hurai: "Satu kitaran = 7 manik dengan 3 biru (kedudukan 2, 3, 6). 2026 = 7 × 289 + 3. 289 kitaran penuh → 867 biru; baki 3 manik (merah, biru, biru) → 2 biru lagi. Jumlah = <b>869</b>. (867 lupa baki; 868 = 2026 × 3/7 dibundarkan ke bawah; 1013 menganggap separuh manik biru.)"
  },
  { // 9 Persamaan linear — sederhana
    s: "Sebuah tabung mengandungi 48 keping syiling yang terdiri daripada syiling 20 sen dan 50 sen sahaja. Jumlah nilainya ialah RM 15.30. Berapakah bilangan syiling 50 sen?",
    en: "A money box holds 48 coins, all 20 sen or 50 sen, worth RM 15.30 in total. How many 50 sen coins are there?",
    p: ['19', '24', '29', '31'], a: 0, topik: 'Persamaan Linear', aras: 'sederhana',
    hurai: "Katakan 50 sen = y keping, 20 sen = 48 − y. 50y + 20(48 − y) = 1530 → 30y + 960 = 1530 → y = <b>19</b> (20 sen = 29 keping). (29 ialah bilangan syiling 20 sen; 24 menganggap sama banyak; 31 ≈ 15.30 ÷ 0.50, menganggap semua syiling 50 sen.)"
  },
  { // 10 Komisen — sederhana (ISI)
    jenis: 'isi',
    s: "Seorang ejen hartanah menerima komisen 2.5% bagi RM 500 000 yang pertama daripada harga jualan rumah, dan 1.5% bagi baki harga jualan selebihnya. Sebuah rumah dijual dengan harga RM 680 000. Berapakah komisen ejen itu, dalam RM?",
    en: "An estate agent earns 2.5% commission on the first RM 500 000 of a house price and 1.5% on the rest. A house sells for RM 680 000. What is the commission, in RM?",
    a: 15200, unit: 'RM', topik: 'Peratus & Matematik Pengguna', aras: 'sederhana',
    hurai: "2.5% × 500 000 = RM 12 500. Baki = 180 000; 1.5% × 180 000 = RM 2 700. Jumlah komisen = <b>RM 15 200</b>."
  },
  { // 11 Kadaran songsang — sederhana
    s: "12 orang pekerja boleh menyiapkan sebuah pagar dalam 15 hari. Selepas mereka bekerja selama 5 hari, 4 orang pekerja berhenti. Berapakah bilangan hari <b>lagi</b> yang diperlukan oleh pekerja yang tinggal untuk menyiapkan pagar itu? (Anggap semua pekerja bekerja pada kadar yang sama.)",
    en: "12 workers can build a fence in 15 days. After 5 days, 4 workers leave. How many more days do the remaining workers need to finish? (All work at the same rate.)",
    p: ['22.5', '20', '15', '10'], a: 2, topik: 'Nisbah, Kadar & Laju', aras: 'sederhana',
    hurai: "Jumlah kerja = 12 × 15 = 180 hari-pekerja. Selepas 5 hari: 12 × 5 = 60 siap; baki 120. Pekerja tinggal 8 → 120 ÷ 8 = <b>15 hari</b>. (10 menganggap baki hari tidak berubah; 20 ialah jumlah keseluruhan 5 + 15; 22.5 = 15 × 12 ÷ 8, mengabaikan kerja yang sudah siap.)"
  },
  { // 12 Statistik — sederhana
    rajah: '<table><tr><th>Batang</th><th>Daun</th></tr><tr><td>3</td><td style="text-align:left">2 5 8</td></tr><tr><td>4</td><td style="text-align:left">0 1 1 6 9</td></tr><tr><td>5</td><td style="text-align:left">3 3 3 7</td></tr><tr><td>6</td><td style="text-align:left">0 4</td></tr><tr><td>7</td><td style="text-align:left">1</td></tr><tr><td colspan="2">Kekunci: 3 | 2 bermaksud 32 kg</td></tr></table>',
    s: "Plot batang-dan-daun menunjukkan jisim (kg) 15 orang murid. Berapakah median jisim mereka?",
    en: "The stem-and-leaf plot shows the masses (kg) of 15 pupils. What is the median mass?",
    p: ['46 kg', '49 kg', '51.5 kg', '53 kg'], a: 1, topik: 'Data & Statistik', aras: 'sederhana',
    hurai: "15 data → median ialah nilai ke-8. Kira menaik: 32, 35, 38, 40, 41, 41, 46, <b>49</b>. Median = 49 kg. (53 ialah mod; 51.5 = (32 + 71) ÷ 2, titik tengah julat; 46 ialah nilai ke-7.)"
  },
  { // 13 Kecerunan — sederhana
    rajah: '<svg viewBox="-8 0 288 250" style="max-width:100%;width:300px" role="img" aria-label="Garis lurus pada satah Cartes"><line x1="20" y1="20" x2="20" y2="230" stroke="var(--muted)" stroke-opacity="0.35"/><line x1="50" y1="20" x2="50" y2="230" stroke="var(--muted)" stroke-opacity="0.35"/><line x1="80" y1="20" x2="80" y2="230" stroke="var(--muted)" stroke-opacity="0.35"/><line x1="110" y1="20" x2="110" y2="230" stroke="var(--muted)" stroke-opacity="0.35"/><line x1="140" y1="20" x2="140" y2="230" stroke="var(--muted)" stroke-opacity="0.35"/><line x1="170" y1="20" x2="170" y2="230" stroke="var(--muted)" stroke-opacity="0.35"/><line x1="200" y1="20" x2="200" y2="230" stroke="var(--muted)" stroke-opacity="0.35"/><line x1="230" y1="20" x2="230" y2="230" stroke="var(--muted)" stroke-opacity="0.35"/><line x1="260" y1="20" x2="260" y2="230" stroke="var(--muted)" stroke-opacity="0.35"/><line x1="20" y1="230" x2="260" y2="230" stroke="var(--muted)" stroke-opacity="0.35"/><line x1="20" y1="200" x2="260" y2="200" stroke="var(--muted)" stroke-opacity="0.35"/><line x1="20" y1="170" x2="260" y2="170" stroke="var(--muted)" stroke-opacity="0.35"/><line x1="20" y1="140" x2="260" y2="140" stroke="var(--muted)" stroke-opacity="0.35"/><line x1="20" y1="110" x2="260" y2="110" stroke="var(--muted)" stroke-opacity="0.35"/><line x1="20" y1="80" x2="260" y2="80" stroke="var(--muted)" stroke-opacity="0.35"/><line x1="20" y1="50" x2="260" y2="50" stroke="var(--muted)" stroke-opacity="0.35"/><line x1="20" y1="20" x2="260" y2="20" stroke="var(--muted)" stroke-opacity="0.35"/><line x1="20" y1="200" x2="262" y2="200" stroke="currentColor" stroke-width="1.5"/><line x1="110" y1="230" x2="110" y2="16" stroke="currentColor" stroke-width="1.5"/><text x="20" y="215" font-size="12" fill="currentColor" text-anchor="middle">-3</text><text x="50" y="215" font-size="12" fill="currentColor" text-anchor="middle">-2</text><text x="80" y="215" font-size="12" fill="currentColor" text-anchor="middle">-1</text><text x="140" y="215" font-size="12" fill="currentColor" text-anchor="middle">1</text><text x="170" y="215" font-size="12" fill="currentColor" text-anchor="middle">2</text><text x="200" y="215" font-size="12" fill="currentColor" text-anchor="middle">3</text><text x="230" y="215" font-size="12" fill="currentColor" text-anchor="middle">4</text><text x="260" y="215" font-size="12" fill="currentColor" text-anchor="middle">5</text><text x="105" y="234" font-size="12" fill="currentColor" text-anchor="end">-1</text><text x="105" y="174" font-size="12" fill="currentColor" text-anchor="end">1</text><text x="105" y="144" font-size="12" fill="currentColor" text-anchor="end">2</text><text x="105" y="114" font-size="12" fill="currentColor" text-anchor="end">3</text><text x="105" y="84" font-size="12" fill="currentColor" text-anchor="end">4</text><text x="105" y="54" font-size="12" fill="currentColor" text-anchor="end">5</text><text x="105" y="24" font-size="12" fill="currentColor" text-anchor="end">6</text><text x="105" y="215" font-size="12" fill="currentColor" text-anchor="end">0</text><text x="266" y="204" font-size="12" fill="currentColor">x</text><text x="115" y="14" font-size="12" fill="currentColor">y</text><line x1="20" y1="30.0" x2="260" y2="190.0" stroke="var(--c)" stroke-width="2.5"/><circle cx="50" cy="50" r="4.5" fill="var(--c)"/><circle cx="230" cy="170" r="4.5" fill="var(--c)"/><text x="56" y="42" font-size="13" font-weight="700" fill="currentColor">A</text><text x="234" y="160" font-size="13" font-weight="700" fill="currentColor">B</text></svg>',
    s: "Rajah menunjukkan garis lurus yang melalui titik A dan titik B pada satah Cartes. Berapakah kecerunan garis itu?",
    en: "The diagram shows a straight line through points A and B on a Cartesian plane. What is the gradient of the line?",
    p: ['−3/2', '−2/3', '2/3', '3/2'], a: 1, topik: 'Geometri & Pengukuran', aras: 'sederhana',
    hurai: "Daripada graf, A(−2, 5) dan B(4, 1). Kecerunan = (1 − 5) ÷ (4 − (−2)) = −4/6 = <b>−2/3</b>. Garis menurun dari kiri ke kanan, jadi kecerunan negatif. (2/3 tertinggal tanda negatif; −3/2 menterbalikkan pecahan, iaitu jarak mengufuk ÷ jarak mencancang.)"
  },
  { // 14 Logik — sederhana
    s: "Tiga kotak berlabel <b>\"Epal\"</b>, <b>\"Oren\"</b> dan <b>\"Campur\"</b>. Satu kotak berisi epal sahaja, satu berisi oren sahaja dan satu berisi campuran epal dan oren. Diketahui <b>semua</b> label dilekatkan salah. Anda boleh mengeluarkan sebiji buah dari satu kotak sahaja (tanpa melihat ke dalam) untuk menentukan isi semua kotak. Dari kotak manakah buah itu patut dikeluarkan?",
    en: "Three boxes are labelled 'Apples', 'Oranges' and 'Mixed'; every label is wrong. You may take one fruit from one box (without looking inside) to work out the contents of all boxes. Which box should you take it from?",
    p: ['Kotak berlabel "Epal"', 'Kotak berlabel "Oren"', 'Mana-mana kotak', 'Kotak berlabel "Campur"'], a: 3, topik: 'Penaakulan Logik', aras: 'sederhana',
    hurai: "Kotak berlabel \"Campur\" pasti berisi satu jenis buah sahaja (labelnya salah). Jika buah yang keluar ialah epal, kotak itu = Epal. Kotak berlabel \"Oren\" tidak boleh berisi oren, dan epal sudah diambil, jadi ia = Campur; kotak berlabel \"Epal\" = Oren. Jadi pilih <b>kotak berlabel \"Campur\"</b>. Dari kotak \"Epal\" atau \"Oren\", buah yang keluar tidak dapat membezakan kotak satu jenis daripada kotak campur."
  },
  { // 15 Pola — sukar
    s: "Jujukan P: 5, 12, 19, 26, … (tambah 7)<br>Jujukan Q: 3, 7, 11, 15, … (tambah 4)<br>Berapakah bilangan nombor <b>kurang daripada 200</b> yang terdapat dalam <b>kedua-dua</b> jujukan?",
    en: "Sequence P: 5, 12, 19, 26, … (add 7). Sequence Q: 3, 7, 11, 15, … (add 4). How many numbers less than 200 appear in both sequences?",
    p: ['6', '7', '8', '28'], a: 1, topik: 'Pola & Jujukan', aras: 'sukar',
    hurai: "Sebutan sepunya pertama ialah 19 (19 = 5 + 2×7 = 3 + 4×4). Selepas itu, sebutan sepunya berulang setiap GSTK(7, 4) = 28: 19, 47, 75, 103, 131, 159, 187 → <b>7</b> nombor (215 melebihi 200). (6 tertinggal 19 atau 187; 8 termasuk 215; 28 ialah beza sebutan sepunya.)"
  },
  { // 16 Persamaan linear — sukar
    s: "Cikgu Liza mengagihkan gula-gula kepada murid dalam kumpulannya. Jika setiap murid diberi 5 biji, berbaki 13 biji. Jika setiap murid diberi 7 biji, tidak cukup 9 biji. Berapakah bilangan gula-gula yang ada pada Cikgu Liza?",
    en: "Cikgu Liza shares sweets among her group. If each pupil gets 5, 13 are left over. If each gets 7, she is 9 short. How many sweets does she have?",
    p: ['11', '23', '55', '68'], a: 3, topik: 'Persamaan Linear', aras: 'sukar',
    hurai: "Murid = n. 5n + 13 = 7n − 9 → 2n = 22 → n = 11. Gula-gula = 5(11) + 13 = <b>68</b> (semak: 7 × 11 − 9 = 68). (11 ialah bilangan murid; 55 lupa baki 13; 23 datang daripada ralat tanda 5n + 13 = 7n + 9 → n = 2.)"
  },
  { // 17 Peratus — sukar
    s: "Bilangan pengunjung sebuah taman tema meningkat 20% dari tahun 2023 ke tahun 2024, kemudian menurun 20% dari tahun 2024 ke tahun 2025. Pada tahun 2025, terdapat 4 800 orang pengunjung. Berapakah bilangan pengunjung pada tahun 2023?",
    en: "Visitors to a theme park rose 20% from 2023 to 2024, then fell 20% from 2024 to 2025. There were 4 800 visitors in 2025. How many were there in 2023?",
    p: ['4 608', '4 800', '4 992', '5 000'], a: 3, topik: 'Peratus & Matematik Pengguna', aras: 'sukar',
    hurai: "2025 = 2023 × 1.20 × 0.80 = 2023 × 0.96. Maka 2023 = 4800 ÷ 0.96 = <b>5 000</b>. (4 800 menganggap naik 20% lalu turun 20% kembali ke asal; 4 608 = 4800 × 0.96, arah salah; 4 992 = 4800 × 1.04, menambah 4% pada nilai akhir.)"
  },
  { // 18 Nisbah — sukar
    s: "Nisbah ahli lelaki kepada ahli perempuan dalam Kelab Robotik ialah 3 : 5. Selepas 6 orang ahli lelaki baharu menyertai kelab dan 2 orang ahli perempuan keluar, nisbah itu menjadi 1 : 1. Berapakah bilangan ahli perempuan <b>asal</b>?",
    en: "In the Robotics Club the ratio of boys to girls is 3 : 5. After 6 new boys join and 2 girls leave, the ratio becomes 1 : 1. How many girls were there originally?",
    p: ['12', '18', '20', '32'], a: 2, topik: 'Nisbah, Kadar & Laju', aras: 'sukar',
    hurai: "Lelaki = 3k, perempuan = 5k. 3k + 6 = 5k − 2 → k = 4. Perempuan asal = 5 × 4 = <b>20</b>. (18 ialah bilangan perempuan selepas 2 keluar; 12 ialah lelaki asal; 32 ialah jumlah ahli asal.)"
  },
  { // 19 Set & kebarangkalian — sukar
    s: "Dalam sebuah kelas 40 orang murid, 25 orang menyertai Kelab Sains, 18 orang menyertai Kelab Robotik dan 7 orang tidak menyertai mana-mana kelab ini. Seorang murid dipilih secara rawak daripada murid yang menyertai <b>sekurang-kurangnya satu</b> kelab ini. Berapakah kebarangkalian murid itu menyertai Kelab Sains <b>sahaja</b>?",
    en: "In a class of 40, 25 join the Science Club, 18 join the Robotics Club and 7 join neither. A pupil is chosen at random from those in at least one of these clubs. What is the probability that the pupil is in the Science Club only?",
    p: ['10/33', '3/8', '5/11', '5/8'], a: 2, topik: 'Data & Statistik', aras: 'sukar',
    hurai: "Sekurang-kurangnya satu kelab = 40 − 7 = 33. Kedua-dua kelab = 25 + 18 − 33 = 10. Sains sahaja = 25 − 10 = 15. Kebarangkalian = 15/33 = <b>5/11</b>. (3/8 = 15/40, ruang sampel salah; 10/33 ialah kebarangkalian kedua-dua kelab; 5/8 = 25/40, termasuk ahli kedua-dua kelab.)"
  },
  { // 20 Lengkok — sukar (ISI)
    jenis: 'isi',
    rajah: '<svg viewBox="0 0 300 170" style="max-width:100%;width:300px" role="img" aria-label="Kipas berbentuk sektor bulatan"><path d="M150,150 L253.9,90.0 A120,120 0 0 0 46.1,90.0 Z" fill="var(--c)" fill-opacity="0.15" stroke="var(--c)" stroke-width="2.5"/><path d="M167.3,140 A20,20 0 0 0 132.7,140" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="150" y="128" font-size="13" fill="currentColor" text-anchor="middle">120°</text><text x="214" y="132" font-size="13" fill="currentColor">21 cm</text><circle cx="150" cy="150" r="3" fill="currentColor"/></svg>',
    s: "Sebuah kipas tangan berbentuk sektor bulatan dengan jejari 21 cm dan sudut 120° di pusat. Renda akan dijahit di sepanjang <b>seluruh</b> sempadan kipas itu (lengkok dan kedua-dua jejari). Berapakah panjang renda yang diperlukan, dalam cm? (Guna π = 22/7)",
    en: "A hand fan is a sector of a circle with radius 21 cm and angle 120° at the centre. Lace is sewn along the whole boundary (arc and both radii). How many cm of lace are needed? (Use π = 22/7)",
    a: 86, unit: 'cm', topik: 'Geometri & Pengukuran', aras: 'sukar',
    hurai: "Panjang lengkok = 120/360 × 2 × 22/7 × 21 = 1/3 × 132 = 44 cm. Perimeter = 44 + 21 + 21 = <b>86 cm</b>. (Jangan lupa dua jejari.)"
  }
  ]
});

UKKM_PART(3, { id: 'sains', nama: 'Sains', ikon: '🔬', minit: 30,
  arahan: 'Jawab semua 30 soalan. Pilih satu jawapan yang paling tepat bagi setiap soalan.',
  soalan: [
  { topik: 'Biologi: Sel', s: `Struktur manakah memberikan bentuk yang tetap dan sokongan kepada sel tumbuhan?`,
    en: `Which structure gives a plant cell a fixed shape and support?`,
    p: ['Membran sel', 'Dinding sel', 'Nukleus', 'Sitoplasma'], a: 1,
    hurai: `Dinding sel yang diperbuat daripada selulosa adalah kuat dan tegar, jadi memberikan bentuk tetap kepada sel tumbuhan. Membran sel pula mengawal pergerakan bahan keluar dan masuk sel.` },
  { topik: 'Biologi: Koordinasi dan Homeostasis', s: `Ahmad berlari di padang pada waktu tengah hari yang panas. Bagaimanakah badannya mengekalkan suhu badan yang normal?`,
    en: `Ahmad runs on the field at noon on a hot day. How does his body keep its temperature normal?`,
    p: ['Kurang berpeluh dan salur darah di kulit mengecut', 'Lebih banyak berpeluh dan salur darah di kulit mengembang', 'Menggigil dan salur darah di kulit mengembang', 'Lebih banyak berpeluh dan salur darah di kulit mengecut'], a: 1,
    hurai: `Peluh yang menyejat membawa haba keluar dari badan. Salur darah di kulit mengembang supaya lebih banyak darah mengalir dekat permukaan kulit dan membebaskan haba.` },
  { topik: 'Biologi: Respirasi', s: `Rajah menunjukkan model balang loceng bagi sistem respirasi manusia. Apakah yang berlaku apabila kepingan getah ditarik ke bawah?`,
    en: `The diagram shows a bell-jar model of the human breathing system. What happens when the rubber sheet is pulled down?`,
    rajah: `<svg viewBox="0 0 440 270" style="max-width:440px" role="img" aria-label="Model balang loceng"><g stroke="currentColor" stroke-width="2" fill="none"><path d="M100 215 V70 Q100 45 130 45 H230 Q260 45 260 70 V215"/><rect x="160" y="34" width="40" height="14"/><path d="M180 10 V100 M180 100 L150 125 M180 100 L210 125"/><ellipse cx="148" cy="150" rx="20" ry="26"/><ellipse cx="212" cy="150" rx="20" ry="26"/><path d="M100 215 Q180 248 260 215"/><path d="M180 231 V258"/></g><g stroke="var(--muted)" stroke-width="1" style="stroke:var(--muted)"><line x1="186" y1="22" x2="290" y2="22"/><line x1="232" y1="150" x2="290" y2="110"/><line x1="258" y1="180" x2="290" y2="170"/><line x1="240" y1="228" x2="290" y2="230"/></g><g font-size="13" fill="currentColor"><text x="296" y="26">Salur kaca (trakea)</text><text x="296" y="114">Belon (peparu)</text><text x="296" y="174">Balang (rongga toraks)</text><text x="296" y="234">Kepingan getah</text><text x="296" y="250">(diafragma)</text></g></svg>`,
    p: ['Isi padu dalam balang bertambah, tekanan berkurang dan belon mengembang', 'Isi padu dalam balang berkurang, tekanan bertambah dan belon mengecut', 'Isi padu dalam balang bertambah, tekanan bertambah dan belon mengecut', 'Isi padu dalam balang berkurang, tekanan berkurang dan belon mengembang'], a: 0,
    hurai: `Menarik kepingan getah ke bawah meniru diafragma yang mengecut dan mendatar. Isi padu balang bertambah, tekanan di dalamnya berkurang, lalu udara masuk dan belon mengembang (seperti tarik nafas).` },
  { topik: 'Biologi: Respirasi', s: `Mengapakah karbon monoksida dalam asap rokok mengurangkan pengangkutan oksigen dalam darah?`,
    en: `Why does the carbon monoxide in cigarette smoke reduce the transport of oxygen in the blood?`,
    p: ['Karbon monoksida merosakkan dinding alveolus', 'Karbon monoksida melemahkan otot diafragma', 'Karbon monoksida bergabung dengan hemoglobin lebih mudah daripada oksigen', 'Karbon monoksida menukarkan oksigen kepada karbon dioksida'], a: 2,
    hurai: `Karbon monoksida bergabung dengan hemoglobin dengan lebih mudah dan lebih kuat daripada oksigen. Hemoglobin yang telah diduduki karbon monoksida tidak dapat mengangkut oksigen.` },
  { topik: 'Biologi: Pengangkutan', s: `Salur darah manakah mempunyai injap untuk mencegah darah mengalir balik?`,
    en: `Which blood vessel has valves to prevent blood from flowing backwards?`,
    p: ['Arteri', 'Kapilari', 'Aorta', 'Vena'], a: 3,
    hurai: `Darah dalam vena mengalir pada tekanan rendah kembali ke jantung, jadi vena mempunyai injap untuk mengelakkan aliran balik. Arteri dan aorta berdinding tebal kerana tekanan darahnya tinggi.` },
  { topik: 'Biologi: Pengangkutan', s: `Satu gelang kulit batang, termasuk floem, dibuang daripada batang sepokok bunga raya tanpa merosakkan xilem. Selepas dua minggu, bahagian batang di atas gelang didapati membengkak. Apakah sebabnya?`,
    en: `A ring of bark, including the phloem, is removed from a hibiscus stem without damaging the xylem. After two weeks, the part of the stem above the ring has swollen. Why?`,
    p: ['Air yang diangkut oleh xilem terkumpul di atas gelang', 'Makanan yang diangkut oleh floem terkumpul di atas gelang', 'Sel-sel di atas gelang menyerap lebih banyak oksigen', 'Garam mineral dari akar terkumpul di atas gelang'], a: 1,
    hurai: `Floem mengangkut makanan (gula) dari daun ke bahagian lain. Apabila floem diputuskan, makanan tidak dapat bergerak ke bawah dan terkumpul di atas gelang, menyebabkan bengkak.` },
  { topik: 'Biologi: Pembiakan', s: `Sehelai daun pokok setawar (<i>Bryophyllum</i>) diletakkan di atas tanah lembap. Selepas beberapa hari, anak pokok tumbuh di pinggir daun itu. Apakah jenis pembiakan ini?`,
    en: `A leaf of the Bryophyllum plant is placed on moist soil. After a few days, small plants grow from the edge of the leaf. What type of reproduction is this?`,
    p: ['Pembiakan seks melalui persenyawaan', 'Pembentukan spora', 'Pembelahan dedua', 'Pembiakan vegetatif'], a: 3,
    hurai: `Anak pokok tumbuh daripada bahagian vegetatif (daun) tanpa melibatkan gamet. Ini ialah pembiakan aseks secara pembiakan vegetatif.` },
  { topik: 'Biologi: Nutrisi', s: `Seorang kanak-kanak mempunyai tulang kaki yang lembut dan bengkok. Doktor menasihatinya supaya minum susu dan bermain di bawah cahaya Matahari pagi. Kekurangan apakah yang paling mungkin dialaminya?`,
    en: `A child has soft, bent leg bones. The doctor advises him to drink milk and play in the morning sunlight. Which deficiency is he most likely to have?`,
    p: ['Vitamin A', 'Vitamin C', 'Vitamin D', 'Ferum'], a: 2,
    hurai: `Tulang lembut dan bengkok ialah tanda riket akibat kekurangan vitamin D. Kulit menghasilkan vitamin D apabila terdedah kepada cahaya Matahari, dan vitamin D membantu penyerapan kalsium daripada susu.` },
  { topik: 'Biologi: Kesihatan Manusia', s: `Seorang bayi menerima antibodi daripada susu ibunya. Apakah jenis keimunan yang diperoleh bayi itu?`,
    en: `A baby receives antibodies from its mother's milk. What type of immunity does the baby get?`,
    p: ['Keimunan aktif semula jadi', 'Keimunan pasif semula jadi', 'Keimunan aktif buatan', 'Keimunan pasif buatan'], a: 1,
    hurai: `Bayi menerima antibodi siap daripada ibu dan tidak menghasilkannya sendiri, maka keimunan itu pasif. Ia berlaku secara semula jadi melalui susu ibu, bukan suntikan.` },

  { topik: 'Ekologi: Kitar Nutrien', s: `Proses manakah menyingkirkan karbon dioksida daripada atmosfera?`,
    en: `Which process removes carbon dioxide from the atmosphere?`,
    p: ['Respirasi', 'Pembakaran bahan api fosil', 'Penguraian oleh pengurai', 'Fotosintesis'], a: 3,
    hurai: `Tumbuhan hijau menyerap karbon dioksida semasa fotosintesis untuk menghasilkan glukosa. Respirasi, pembakaran dan penguraian membebaskan karbon dioksida ke atmosfera.` },
  { topik: 'Ekologi: Ekosistem', s: `Tumbuhan tali puteri melilit pokok perumah dan menyerap air serta makanan daripada pokok itu melalui akar khas. Lama-kelamaan pokok perumah menjadi lemah. Apakah jenis interaksi ini?`,
    en: `A dodder plant winds around a host tree and absorbs water and food from it through special roots. Over time the host tree becomes weak. What type of interaction is this?`,
    p: ['Mutualisme', 'Parasitisme', 'Komensalisme', 'Pemangsaan'], a: 1,
    hurai: `Tali puteri (parasit) mendapat manfaat, manakala pokok perumah dirugikan tetapi tidak dibunuh serta-merta. Hubungan ini ialah parasitisme.` },
  { topik: 'Ekologi: Ekosistem', s: `Graf menunjukkan perubahan populasi rusa dan harimau di sebuah hutan simpan selama 8 tahun. Mengapakah populasi harimau menurun selepas tahun ke-4?`,
    en: `The graph shows the populations of deer and tigers in a forest reserve over 8 years. Why does the tiger population fall after year 4?`,
    rajah: `<svg viewBox="0 0 400 260" style="max-width:420px" role="img" aria-label="Graf populasi rusa dan harimau"><g stroke="currentColor" stroke-width="1.5" fill="none"><line x1="60" y1="210" x2="380" y2="210"/><line x1="60" y1="210" x2="60" y2="20"/></g><polyline points="60,138 98,102 136,66 174,84 212,120 250,138 288,111 326,75 364,84" fill="none" style="stroke:var(--c)" stroke-width="3"/><polyline points="60,174 98,170 136,156 174,138 212,129 250,147 288,165 326,160 364,142" fill="none" stroke="currentColor" stroke-width="2.5" stroke-dasharray="7 5"/><g font-size="13" fill="currentColor" text-anchor="middle"><text x="60" y="228">0</text><text x="136" y="228">2</text><text x="212" y="228">4</text><text x="288" y="228">6</text><text x="364" y="228">8</text><text x="220" y="250">Masa (tahun)</text></g><g font-size="13" fill="currentColor" text-anchor="end"><text x="54" y="214">0</text><text x="54" y="124">50</text><text x="54" y="34">100</text></g><text x="66" y="16" font-size="13" fill="currentColor">Populasi</text><g font-size="13" fill="currentColor"><line x1="250" y1="30" x2="280" y2="30" style="stroke:var(--c)" stroke-width="3"/><text x="286" y="35">Rusa</text><line x1="250" y1="50" x2="280" y2="50" stroke="currentColor" stroke-width="2.5" stroke-dasharray="7 5"/><text x="286" y="55">Harimau</text></g></svg>`,
    p: ['Bilangan rusa sebagai sumber makanan harimau telah berkurang', 'Rusa telah berpindah ke hutan lain secara beramai-ramai', 'Harimau tidak lagi memburu rusa', 'Populasi rusa terlalu banyak'], a: 0,
    hurai: `Populasi rusa menurun selepas tahun ke-2. Selepas itu harimau mendapat kurang makanan, maka populasinya turut menurun selepas tahun ke-4 (perubahan pemangsa mengekori perubahan mangsa).` },

  { topik: 'Kimia: Jirim', s: `Antara berikut, yang manakah ialah perubahan kimia?`,
    en: `Which of the following is a chemical change?`,
    p: ['Lilin melebur', 'Garam dilarutkan dalam air', 'Susu menjadi masam', 'Air membeku menjadi ais'], a: 2,
    hurai: `Susu menjadi masam kerana bakteria menghasilkan bahan baharu (asid laktik) dan perubahan ini tidak boleh diterbalikkan. Peleburan, pelarutan dan pembekuan ialah perubahan fizikal.` },
  { topik: 'Kimia: Jadual Berkala', s: `Natrium ialah logam yang sangat reaktif dan klorin ialah gas beracun, tetapi natrium klorida (garam dapur) selamat dimakan. Apakah yang dapat disimpulkan?`,
    en: `Sodium is a very reactive metal and chlorine is a poisonous gas, but sodium chloride (table salt) is safe to eat. What can be concluded?`,
    p: ['Sifat sebatian berbeza daripada sifat unsur-unsur yang membentuknya', 'Natrium klorida ialah campuran natrium dan klorin', 'Natrium dan klorin boleh diasingkan semula dengan penurasan', 'Sebatian mempunyai sifat yang sama dengan unsur pembentuknya'], a: 0,
    hurai: `Natrium klorida ialah sebatian; unsur-unsurnya bergabung secara kimia dan menghasilkan bahan baharu dengan sifat yang berbeza. Sebatian tidak boleh diasingkan dengan kaedah fizikal seperti penurasan.` },
  { topik: 'Kimia: Udara', s: `Gas sulfur dioksida yang dibebaskan oleh kilang dan stesen janakuasa yang membakar bahan api fosil boleh larut dalam air hujan. Apakah kesannya terhadap alam sekitar?`,
    en: `Sulphur dioxide released by factories and power stations burning fossil fuels can dissolve in rainwater. What is its effect on the environment?`,
    p: ['Penipisan lapisan ozon', 'Penambahan oksigen di udara', 'Pembentukan lapisan debu di permukaan tanah', 'Hujan asid yang menghakis bangunan dan merosakkan tumbuhan'], a: 3,
    hurai: `Sulfur dioksida larut dalam air hujan membentuk asid, menghasilkan hujan asid. Penipisan ozon pula disebabkan oleh CFC.` },
  { topik: 'Kimia: Air dan Larutan', s: `Jadual menunjukkan jisim maksimum gula yang dapat larut dalam 100 g air pada suhu yang berbeza. Apakah kesimpulan yang sesuai?`,
    en: `The table shows the maximum mass of sugar that can dissolve in 100 g of water at different temperatures. What is a suitable conclusion?`,
    rajah: `<table><tr><th>Suhu air (°C)</th><td>20</td><td>40</td><td>60</td><td>80</td></tr><tr><th>Jisim gula yang larut (g)</th><td>204</td><td>238</td><td>287</td><td>362</td></tr></table>`,
    p: ['Keterlarutan gula bertambah apabila suhu air bertambah', 'Keterlarutan gula berkurang apabila suhu air bertambah', 'Suhu tidak mempengaruhi keterlarutan gula', 'Gula tidak larut dalam air pada suhu 20 °C'], a: 0,
    hurai: `Jisim gula yang dapat larut meningkat dari 204 g kepada 362 g apabila suhu meningkat. Maka keterlarutan gula bertambah dengan suhu.` },
  { topik: 'Kimia: Asid dan Alkali', s: `Ubat gigi bersifat alkali lemah. Apakah sebabnya?`,
    en: `Toothpaste is weakly alkaline. Why?`,
    p: ['Untuk membunuh semua bakteria di dalam mulut', 'Untuk meneutralkan asid yang dihasilkan oleh bakteria daripada sisa makanan', 'Untuk melarutkan karang gigi', 'Untuk menghasilkan banyak buih'], a: 1,
    hurai: `Bakteria menguraikan sisa makanan dan menghasilkan asid yang menghakis enamel gigi. Alkali lemah dalam ubat gigi meneutralkan asid ini.` },
  { topik: 'Kimia: Kereaktifan Logam', s: `Serbuk karbon dipanaskan bersama oksida bagi tiga logam X, Y dan Z secara berasingan. Pemerhatian ditunjukkan dalam jadual. Apakah susunan kereaktifan daripada yang paling reaktif kepada yang paling kurang reaktif?`,
    en: `Carbon powder is heated separately with the oxides of three metals X, Y and Z. The observations are shown in the table. What is the order of reactivity from the most to the least reactive?`,
    rajah: `<table><tr><th>Campuran</th><th>Pemerhatian</th></tr><tr><td>Karbon + oksida X</td><td>Tiada perubahan</td></tr><tr><td>Karbon + oksida Y</td><td>Berbara malap; logam Y terbentuk</td></tr><tr><td>Karbon + oksida Z</td><td>Nyalaan terang; logam Z terbentuk</td></tr></table>`,
    p: ['X, karbon, Y, Z', 'Z, Y, karbon, X', 'X, karbon, Z, Y', 'Karbon, X, Y, Z'], a: 0,
    hurai: `Karbon tidak dapat menyingkirkan oksigen daripada oksida X, jadi X lebih reaktif daripada karbon. Karbon menurunkan oksida Y dan Z; tindak balas dengan oksida Z lebih cergas, menunjukkan Z paling jauh di bawah karbon. Susunan: X > karbon > Y > Z.` },
  { topik: 'Kimia: Termokimia', s: `Antara proses berikut, yang manakah ialah proses endotermik?`,
    en: `Which of the following processes is endothermic?`,
    p: ['Respirasi sel', 'Pembakaran kayu', 'Fotosintesis', 'Peneutralan asid oleh alkali'], a: 2,
    hurai: `Fotosintesis menyerap tenaga cahaya untuk menghasilkan glukosa, jadi ia endotermik. Respirasi, pembakaran dan peneutralan membebaskan haba (eksotermik).` },

  { topik: 'Fizik: Keelektrikan', s: `Graf menunjukkan hubungan antara beza keupayaan, V, dengan arus, I, bagi sebuah perintang. Berapakah rintangan perintang itu?`,
    en: `The graph shows the relationship between potential difference, V, and current, I, for a resistor. What is its resistance?`,
    rajah: `<svg viewBox="0 0 400 255" style="max-width:420px" role="img" aria-label="Graf V melawan I"><g stroke="currentColor" stroke-width="1.5" fill="none"><line x1="60" y1="210" x2="380" y2="210"/><line x1="60" y1="210" x2="60" y2="20"/></g><g stroke-dasharray="4 4" stroke-width="1" style="stroke:var(--muted)"><line x1="60" y1="138" x2="180" y2="138"/><line x1="180" y1="138" x2="180" y2="210"/></g><line x1="60" y1="210" x2="330" y2="48" style="stroke:var(--c)" stroke-width="3"/><g fill="currentColor"><circle cx="120" cy="174" r="4"/><circle cx="180" cy="138" r="4"/><circle cx="240" cy="102" r="4"/><circle cx="300" cy="66" r="4"/></g><g font-size="13" fill="currentColor" text-anchor="middle"><text x="60" y="228">0</text><text x="120" y="228">0.2</text><text x="180" y="228">0.4</text><text x="240" y="228">0.6</text><text x="300" y="228">0.8</text><text x="360" y="228">1.0</text><text x="220" y="250">I (A)</text></g><g font-size="13" fill="currentColor" text-anchor="end"><text x="54" y="178">1</text><text x="54" y="142">2</text><text x="54" y="106">3</text><text x="54" y="70">4</text><text x="54" y="34">5</text></g><text x="66" y="16" font-size="13" fill="currentColor">V (V)</text></svg>`,
    p: ['0.2 Ω', '2.5 Ω', '5 Ω', '10 Ω'], a: 2,
    hurai: `R = V/I. Daripada graf, apabila I = 0.4 A, V = 2.0 V, maka R = 2.0 ÷ 0.4 = 5 Ω. Jawapan 0.2 Ω ialah I/V (terbalik).` },
  { topik: 'Fizik: Elektrik dan Kemagnetan', s: `Sebuah cerek elektrik berlabel 240 V, 2200 W. Fius manakah paling sesuai dipasang pada palamnya?`,
    en: `An electric kettle is labelled 240 V, 2200 W. Which fuse is the most suitable for its plug?`,
    p: ['1 A', '3 A', '5 A', '13 A'], a: 3,
    hurai: `Arus = P/V = 2200 ÷ 240 ≈ 9.2 A. Fius mesti sedikit melebihi arus biasa, jadi 13 A sesuai; fius 1 A, 3 A dan 5 A akan terus putus.` },
  { topik: 'Fizik: Daya dan Gerakan', s: `Kereta sorong ialah tuas dengan beban terletak di antara fulkrum dan daya. Alat manakah juga merupakan tuas jenis ini?`,
    en: `A wheelbarrow is a lever with the load between the fulcrum and the effort. Which tool is also this type of lever?`,
    p: ['Gunting', 'Penyepit', 'Pemecah kacang', 'Jongkang-jongket'], a: 2,
    hurai: `Pemecah kacang ialah tuas kelas kedua: fulkrum di hujung, kacang (beban) di tengah dan daya di hujung pemegang. Gunting dan jongkang-jongket ialah kelas pertama, manakala penyepit ialah kelas ketiga.` },
  { topik: 'Fizik: Haba', s: `Pada waktu siang di tepi pantai, angin bertiup dari laut ke darat. Apakah penerangan yang betul?`,
    en: `In the daytime at the beach, the wind blows from the sea to the land. Which explanation is correct?`,
    p: ['Darat menjadi panas lebih cepat; udara panas di atas darat naik dan udara sejuk dari laut bergerak menggantikannya', 'Laut menjadi panas lebih cepat; udara panas di atas laut naik dan bergerak ke darat', 'Darat menyejuk lebih cepat; udara sejuk dari darat bergerak ke laut', 'Laut menyejuk lebih cepat; udara di atas laut naik dan turun di darat'], a: 0,
    hurai: `Darat menyerap haba lebih cepat daripada air laut. Udara panas di atas darat naik (perolakan) dan udara yang lebih sejuk dari laut bergerak ke darat sebagai bayu laut.` },
  { topik: 'Fizik: Cahaya', s: `Sehelai baju merah dilihat di dalam bilik gelap yang hanya disinari cahaya biru. Apakah warna baju itu yang dilihat?`,
    en: `A red shirt is viewed in a dark room lit only by blue light. What colour does the shirt appear?`,
    p: ['Merah', 'Biru', 'Magenta', 'Hitam'], a: 3,
    hurai: `Baju merah hanya memantulkan cahaya merah dan menyerap warna lain. Tiada cahaya merah yang sampai kepadanya, jadi tiada cahaya dipantulkan dan baju kelihatan hitam.` },
  { topik: 'Fizik: Bunyi', s: `Sebuah loceng elektrik yang berbunyi diletakkan di dalam balang kaca. Udara di dalam balang dipam keluar secara beransur-ansur. Bunyi loceng menjadi semakin perlahan, tetapi pengetuknya masih kelihatan bergetar. Apakah kesimpulan eksperimen ini?`,
    en: `A ringing electric bell is placed in a glass jar. The air inside is gradually pumped out. The sound becomes fainter, but the hammer can still be seen vibrating. What is the conclusion?`,
    p: ['Bunyi memerlukan medium untuk merambat', 'Loceng berhenti bergetar dalam vakum', 'Cahaya memerlukan medium untuk merambat', 'Bunyi merambat lebih laju dalam vakum'], a: 0,
    hurai: `Loceng masih bergetar tetapi bunyi semakin hilang apabila udara dikeluarkan. Ini menunjukkan bunyi memerlukan medium, manakala cahaya boleh merambat melalui vakum.` },
  { topik: 'Fizik: Tenaga dan Kuasa', s: `Seorang murid berjisim 50 kg menaiki tangga setinggi 4 m dalam masa 10 s. Berapakah kuasa yang dijana oleh murid itu? (g = 10 N kg⁻¹)`,
    en: `A 50 kg student climbs stairs 4 m high in 10 s. What power does the student develop? (g = 10 N kg⁻¹)`,
    p: ['20 W', '200 W', '500 W', '2000 W'], a: 1,
    hurai: `Kerja = mgh = 50 × 10 × 4 = 2000 J. Kuasa = kerja ÷ masa = 2000 ÷ 10 = 200 W.` },
  { topik: 'Fizik: Keradioaktifan', s: `Sinar gama digunakan untuk mensteril picagari plastik yang sudah siap dibungkus. Mengapakah sinar gama sesuai untuk tujuan ini?`,
    en: `Gamma rays are used to sterilise plastic syringes that are already sealed in packets. Why are gamma rays suitable?`,
    p: ['Sinar gama menjadikan picagari bersifat radioaktif secara kekal', 'Sinar gama boleh menembusi bungkusan dan membunuh mikroorganisma', 'Sinar gama memanaskan picagari hingga melebur', 'Sinar gama dihalang sepenuhnya oleh plastik'], a: 1,
    hurai: `Sinar gama mempunyai kuasa penembusan yang tinggi, jadi boleh melalui bungkusan dan membunuh bakteria tanpa membuka bungkusan atau memanaskan plastik. Picagari tidak menjadi radioaktif.` },

  { topik: 'Bumi & Angkasa: Cuaca Angkasa', s: `Lapisan Matahari yang kelihatan sebagai permukaan Matahari dan memancarkan cahaya yang kita lihat ialah…`,
    en: `The layer of the Sun that appears as its surface and gives out the light we see is the…`,
    p: ['teras', 'korona', 'fotosfera', 'kromosfera'], a: 2,
    hurai: `Fotosfera ialah lapisan yang kelihatan sebagai permukaan Matahari; tompok matahari juga terdapat di sini. Korona dan kromosfera ialah lapisan atmosfera Matahari di luar fotosfera.` },
  { topik: 'Bumi & Angkasa: Meteoroid, Asteroid dan Komet', s: `Mengapakah ekor komet sentiasa menghala menjauhi Matahari?`,
    en: `Why does a comet's tail always point away from the Sun?`,
    p: ['Komet sentiasa bergerak menjauhi Matahari', 'Ekor komet ditarik oleh graviti planet Musytari', 'Ekor komet ialah asap daripada pembakaran komet', 'Ekor komet ditolak oleh angin suria dan sinaran Matahari'], a: 3,
    hurai: `Apabila komet menghampiri Matahari, ais pada komet memejalwap dan membebaskan gas serta debu. Angin suria dan sinaran Matahari menolak gas dan debu ini ke arah yang bertentangan dengan Matahari.` },
  { topik: 'Bumi & Angkasa: Bumi', s: `Penduduk di sebuah kampung tepi pantai melihat air laut tiba-tiba surut jauh dari pantai sejurus selepas gempa bumi di dasar laut. Apakah tindakan yang paling wajar?`,
    en: `Villagers on a coast see the sea suddenly draw far back from the beach just after an undersea earthquake. What is the most sensible action?`,
    p: ['Berkumpul di pantai untuk melihat fenomena itu', 'Mengutip ikan yang terdampar di pantai', 'Segera berpindah ke kawasan tanah tinggi kerana tsunami mungkin melanda', 'Berlindung di bawah meja di dalam rumah tepi pantai'], a: 2,
    hurai: `Air laut yang surut secara mendadak selepas gempa bumi di dasar laut ialah tanda awal tsunami. Penduduk mesti segera bergerak ke kawasan tinggi yang jauh dari pantai.` },
  ] });

UKKM_PART(3, {
  id: 'eng', nama: 'Bahasa Inggeris', ikon: '📖', minit: 30, jenis: 'objektif',
  arahan: 'Read each text carefully and answer the questions that follow. Choose the best answer (A, B, C or D).',
  petikan: [
    { id: 'P1', tajuk: 'Advertisement: Holiday Coding Camp', teks: `
<p style="font-size:1.15em"><b>CODE YOUR OWN GAME!</b><br>School Holiday Camp at Ipoh Community Library (2nd floor)</p>
<p><b>23–27 December · 9.00 a.m. – 12.30 p.m.</b><br>For students aged 13 to 15. No experience needed!</p>
<ul>
<li>Start with block coding, then move on to simple Python.</li>
<li>Design a game about protecting Perak’s rivers.</li>
<li>On the last day, present your game to parents and a panel of judges.</li>
</ul>
<p><b>Fee:</b> RM60 (RM45 for library members). Includes a T-shirt and morning snacks.</p>
<p>Laptops are provided, but participants who own one may bring it. Places are limited to 24 participants.</p>
<p>Register at the information counter by 15 December. Bring a copy of your school ID.</p>` },
    { id: 'P2', tajuk: 'Interview: Watching the Sky for a Living', teks: `
<p><i>Our school magazine spoke to Puan Nadia Ismail, a meteorologist at a weather station in Sepang.</i></p>
<p><b>Q: What does a meteorologist actually do?</b><br>A: We study the atmosphere and forecast the weather. Every few hours we collect data from instruments, satellites and weather balloons, and feed it into computer models.</p>
<p><b>Q: Isn’t the computer doing all the work, then?</b><br>A: Not quite. The models give us several possible outcomes, and we have to judge which is most likely. That matters most before the monsoon, when a wrong forecast can affect thousands of families.</p>
<p><b>Q: What is the hardest part of the job?</b><br>A: Thunderstorms. In Malaysia they can form in less than an hour, often in the afternoon, so we sometimes have very little time to warn people.</p>
<p><b>Q: Any advice for students who are interested in this career?</b><br>A: Take physics and mathematics seriously. And be curious. I started by measuring rainfall with a bottle outside my house when I was twelve. My mother thought it was a strange hobby!</p>` },
    { id: 'P3', tajuk: 'Article: Fighting Dengue with Mosquitoes', teks: `
<p>Dengue is one of Malaysia’s most serious public health problems. Every year tens of thousands of cases are reported. The disease is spread by the <i>Aedes</i> mosquito, which breeds in small pools of clean water such as flower-pot trays, blocked drains and discarded containers.</p>
<p>For many years, the main weapons against <i>Aedes</i> were fogging and clean-up campaigns. Fogging kills adult mosquitoes, but its effect lasts only a short time, and eggs that have already been laid survive. Clean-ups work better, yet they depend on every household taking part week after week.</p>
<p>Malaysian researchers have now tried a different approach. They release <i>Aedes</i> mosquitoes carrying <i>Wolbachia</i>, a type of bacteria found naturally in many insects. <i>Wolbachia</i> makes it much harder for the dengue virus to grow inside a mosquito. When these mosquitoes mate with wild ones, <i>Wolbachia</i> is passed on to the next generation, so over time most of the local mosquito population carries it.</p>
<p>Results from several housing areas in the Klang Valley have been encouraging, with dengue cases falling sharply after releases. However, scientists stress that <i>Wolbachia</i> is not a magic solution. It takes months to become established in a new area, and it does not stop mosquitoes from biting. Residents may even notice more mosquitoes for a while after a release.</p>
<p>For this reason, health officers still ask the public to check their homes for stagnant water once a week. A bottle cap of water, they point out, is enough for <i>Aedes</i> to breed.</p>` }
  ],
  soalan: [
    { petikan: 'P1', topik: 'Main idea / purpose', s: 'What is the main purpose of the advertisement?',
      p: ['To attract young people to a holiday coding course', 'To ask students to donate laptops to the library', 'To announce the winners of a game design contest', 'To encourage teenagers to become library members'], a: 0,
      hurai: `The headline "CODE YOUR OWN GAME!" and details such as the fee, dates and "Register at the information counter" show that it is selling a holiday course.` },
    { petikan: 'P1', topik: 'Specific detail', s: 'How much does a participant who is a library member pay?',
      p: ['RM15', 'RM24', 'RM45', 'RM60'], a: 2,
      hurai: `"Fee: RM60 (RM45 for library members)." RM15 is only the difference between the two prices.` },
    { petikan: 'P1', topik: 'Vocabulary in context', s: 'In “<b>Places</b> are limited to 24 participants”, the word <b>places</b> means',
      p: ['rooms on the second floor of the library', 'spots for people who want to join', 'positions such as first or second in a contest', 'towns in Perak where the camp is held'], a: 1,
      hurai: `Only 24 people can join, so "places" means openings for participants. It is not about rooms, towns or contest rankings.` },
    { petikan: 'P1', topik: 'Reference', s: 'In “participants who own <b>one</b> may bring it”, the word <b>one</b> refers to',
      p: ['a library card', 'a T-shirt', 'a school ID', 'a laptop'], a: 3,
      hurai: `"Laptops are provided, but participants who own one may bring it." The sentence contrasts laptops given by the library with a participant’s own laptop.` },
    { petikan: 'P1', topik: 'Inference', s: 'Which student is NOT able to join the camp?',
      p: ['Mei Ling, 13, who has never written any code', 'Adam, 14, who is not a library member', 'Ravi, 16, who has already built two games', 'Siti, 15, who does not own a laptop'], a: 2,
      hurai: `The camp is "For students aged 13 to 15", so Ravi, at 16, is too old. "No experience needed", non-members pay RM60, and "Laptops are provided".` },

    { petikan: 'P2', topik: 'Main idea / purpose', s: 'The interview is mainly about',
      p: ['how to measure rainfall with a bottle', 'why Malaysia has a monsoon season', 'how computers forecast the weather without help', 'the work and challenges of a meteorologist'], a: 3,
      hurai: `The questions cover "What does a meteorologist actually do?", "the hardest part of the job" and advice for the career. The bottle is only part of her personal story.` },
    { petikan: 'P2', topik: 'Specific detail', s: 'According to Puan Nadia, why are thunderstorms the hardest part of her job?',
      p: ['They happen only during the monsoon.', 'They form so fast that there is little time to warn people.', 'They damage the instruments at the weather station.', 'The computer models at the station cannot detect them at all.'], a: 1,
      hurai: `"In Malaysia they can form in less than an hour ... so we sometimes have very little time to warn people." She says they often form "in the afternoon", not only during the monsoon.` },
    { petikan: 'P2', topik: 'Vocabulary in context', s: 'In “we have to <b>judge</b> which is most likely”, the word <b>judge</b> means',
      p: ['decide after thinking carefully', 'act as a referee in a competition', 'criticise someone unfairly', 'punish someone in a court of law'], a: 0,
      hurai: `The models give "several possible outcomes", and the meteorologist must decide which one is most likely. This is careful decision-making, not refereeing or punishing.` },
    { petikan: 'P2', topik: 'Reference', s: 'In “collect data from instruments, satellites and weather balloons, and feed <b>it</b> into computer models”, <b>it</b> refers to',
      p: ['the atmosphere', 'the weather', 'the data', 'a weather balloon'], a: 2,
      hurai: `What is collected is "data", and that is what is fed into computer models. The atmosphere and the weather are studied, not fed into a computer.` },
    { petikan: 'P2', topik: 'Inference / attitude', s: 'What can we infer from Puan Nadia’s last answer?',
      p: ['Her interest in weather began early, though others found it odd.', 'Her mother wanted her to become a meteorologist.', 'She found physics and mathematics very easy at school.', 'She thinks curiosity is less important than getting good grades in exams.'], a: 0,
      hurai: `She measured rainfall "when I was twelve", and "My mother thought it was a strange hobby!" She also says, "And be curious", so curiosity matters to her.` },

    { petikan: 'P3', topik: 'Main idea / purpose', s: 'Which of the following best states the main idea of the article?',
      p: ['Fogging is still the most effective way to control dengue in Malaysia.', 'A new method using bacteria can reduce dengue, but it has limits.', 'Dengue cases in the Klang Valley have disappeared completely.', 'Wolbachia is a harmful germ that spreads from insects to humans.'], a: 1,
      hurai: `The article describes the Wolbachia approach and its "encouraging" results, but also says "Wolbachia is not a magic solution". Cases fell "sharply"; they did not disappear.` },
    { petikan: 'P3', topik: 'Specific detail', s: 'According to the article, what is ONE weakness of fogging?',
      p: ['It depends on every household taking part.', 'It makes mosquitoes bite more often.', 'It takes several months to start working in a new housing area.', 'It does not destroy eggs that have already been laid.'], a: 3,
      hurai: `"Fogging kills adult mosquitoes, but ... eggs that have already been laid survive." Depending on households is a weakness of clean-ups, and taking months is about Wolbachia.` },
    { petikan: 'P3', topik: 'Vocabulary in context', s: 'In “Results ... have been <b>encouraging</b>”, the word <b>encouraging</b> means',
      p: ['giving hope that the method works', 'persuading residents to join a campaign', 'helping mosquitoes to multiply', 'praising someone with kind words'], a: 0,
      hurai: `The results are described "with dengue cases falling sharply", which is a hopeful sign. The word describes the results, not people persuading or praising others.` },
    { petikan: 'P3', topik: 'Reference', s: 'In “most of the local mosquito population carries <b>it</b>”, <b>it</b> refers to',
      p: ['the dengue virus', 'the next generation', 'Wolbachia', 'the new approach'], a: 2,
      hurai: `"Wolbachia is passed on to the next generation, so over time most of the local mosquito population carries it." What is passed on, and therefore carried, is Wolbachia.` },
    { petikan: 'P3', topik: 'Inference', s: 'Why do health officers still ask people to check for stagnant water every week?',
      p: ['Wolbachia mosquitoes need dirty water to survive.', 'Wolbachia does not give complete or immediate protection.', 'Fogging is no longer allowed in housing areas.', 'Residents in the Klang Valley have stopped reporting dengue cases.'], a: 1,
      hurai: `Wolbachia "takes months to become established" and "does not stop mosquitoes from biting". The last paragraph begins "For this reason", which links the weekly checks to these limits.` }
  ]
});

// UKKM Set 03 — Ujian Keperibadian (Ya/Tidak), 100 item. Item terbalik bukan-kejujuran: 28.
UKKM_PART(3, {
  id: 'per', nama: 'Ujian Keperibadian', ikon: '🧭', minit: 30,
  arahan: "Baca setiap pernyataan dan pilih <b>Ya</b> atau <b>Tidak</b> mengikut diri anda yang sebenar. Jawab dengan jujur, logik dan konsisten; beberapa idea diulang dengan ayat berbeza. Bagi situasi asrama yang belum anda alami, jawab mengikut tindakan yang paling mungkin anda lakukan. Masa: kira-kira 18 saat bagi setiap item.",
  skala: ["Ya","Tidak"],
  item: [
    { id: 'sa1', pasangan: 'sa2', s: "Saya memikirkan tujuan setiap langkah semasa menjalankan amali.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Memahami tujuan setiap langkah ialah kemahiran saintifik penting." },
    { id: 'eb1', pasangan: 'eb2', s: "Saya bersikap optimis walaupun menghadapi minggu yang sukar.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Optimisme menguatkan daya tahan." },
    { id: 'ma1', pasangan: 'ma2', s: "Saya boleh tinggal di asrama selama beberapa minggu tanpa pulang ke rumah.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Kesediaan berjauhan dengan keluarga penting di MRSM." },
    { s: "Saya tidak pernah membuang masa walaupun seminit.", trait: "Skala Kejujuran", pos: 1, hurai: "Setiap orang pernah membuang masa; menafikannya kelihatan tidak jujur." },
    { id: 'ib2', pasangan: 'ib1', s: "Saya berjaga hingga larut malam menonton video walaupun sudah waktu tidur asrama.", trait: "Integriti & Disiplin Diri", pos: 1, hurai: "Melanggar waktu tidur menjejaskan kesihatan dan disiplin." },
    { s: "Saya menunggu rakan sebilik mengemas ruang bersama kerana saya malas mengemas.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 1, hurai: "Kebersihan ruang bersama ialah tanggungjawab setiap penghuni." },
    { s: "Saya menghormati senior dan berbudi bahasa dengan junior.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 0, hurai: "Hormat-menghormati menjaga keharmonian asrama." },
    { s: "Saya mengurung diri di bilik berhari-hari apabila menghadapi masalah.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 1, hurai: "Mengasingkan diri berpanjangan melambatkan penyelesaian masalah." },
    { s: "Saya lebih suka orang lain yang memulakan perbualan dengan guru baharu bagi pihak kelas.", trait: "Kepimpinan & Inisiatif", pos: 1, hurai: "Berani menjadi wakil menunjukkan keyakinan kepimpinan." },
    { s: "Saya meninggalkan pinggan dan cawan kotor di dalam bilik selama beberapa hari.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 1, hurai: "Meninggalkan bekas kotor menjejaskan kebersihan dorm." },
    { s: "Saya menyemak semula jawapan sebelum menghantar kertas ujian.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Ketelitian menunjukkan kesungguhan." },
    { s: "Saya mematuhi had masa menggunakan komputer di makmal.", trait: "Integriti & Disiplin Diri", pos: 0, hurai: "Mematuhi had masa menunjukkan disiplin dan adil kepada orang lain." },
    { s: "Saya memeriksa semula kerja kumpulan sebelum menyerahkannya kepada guru.", trait: "Kepimpinan & Inisiatif", pos: 0, hurai: "Pemimpin memastikan mutu hasil kerja pasukan." },
    { s: "Saya boleh berjenaka tentang kesilapan kecil saya sendiri.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Tidak terlalu keras terhadap diri menunjukkan emosi yang sihat." },
    { s: "Saya mengurus kekecewaan dengan berbincang bersama guru kaunseling atau rakan.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Mendapatkan sokongan ialah cara sihat mengurus emosi." },
    { s: "Saya mengambil giliran bercakap dan memberi peluang kepada orang lain dalam perbincangan.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 0, hurai: "Memberi ruang kepada orang lain menunjukkan hormat." },
    { s: "Saya menerima teguran ahli kumpulan tentang cara saya memimpin dengan hati terbuka.", trait: "Kepimpinan & Inisiatif", pos: 0, hurai: "Pemimpin yang baik sedia diperbaiki oleh maklum balas." },
    { id: 'sb2', pasangan: 'sb1', s: "Pada masa lapang, saya hanya mahu berehat dan menonton rancangan hiburan.", trait: "Minat Ilmu, Sains & Motivasi", pos: 1, hurai: "Mengabaikan peluang belajar menunjukkan motivasi yang rendah." },
    { s: "Saya boleh berkompromi supaya kumpulan dapat mencapai kata sepakat.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 0, hurai: "Kompromi ialah kemahiran utama kerja berpasukan." },
    { s: "Saya merasakan matematik terlalu sukar dan saya melepaskan peluang untuk menguasainya.", trait: "Minat Ilmu, Sains & Motivasi", pos: 1, hurai: "Sikap mudah mengalah menghalang penguasaan matematik." },
    { s: "Saya boleh menyesuaikan diri dengan makanan dan suasana baharu di asrama.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Penyesuaian yang cepat membantu kehidupan asrama." },
    { id: 'ea1', pasangan: 'ea2', s: "Saya boleh menerima kritikan terhadap kerja saya tanpa berasa terhina.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Menerima kritikan dengan tenang menunjukkan emosi yang stabil." },
    { s: "Saya mengemas katil dengan rapi sebelum ke kelas.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Kekemasan harian menunjukkan disiplin hidup berasrama." },
    { s: "Saya cuba memahami perasaan rakan sebelum memberi pendapat.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 0, hurai: "Empati menjadikan nasihat lebih berkesan." },
    { s: "Saya meninggikan suara kepada ibu bapa apabila mereka menasihati saya.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 1, hurai: "Mengawal emosi kepada keluarga menunjukkan kematangan." },
    { s: "Saya menjelaskan semula bahagian yang rakan tidak faham dengan sabar.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 0, hurai: "Kesabaran membantu seluruh kumpulan maju bersama." },
    { id: 'mb2', pasangan: 'mb1', s: "Saya selalu kehabisan baju bersih kerana membiarkan pakaian kotor bertimbun.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 1, hurai: "Membiarkan pakaian bertimbun menunjukkan pengurusan diri yang lemah." },
    { s: "Saya menyiapkan tugasan lebih awal daripada tarikh akhir.", trait: "Integriti & Disiplin Diri", pos: 0, hurai: "Menyiapkan kerja awal menunjukkan disiplin dan perancangan." },
    { s: "Saya mudah berasa cemburu apabila rakan mendapat pujian guru.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 1, hurai: "Cemburu yang mudah timbul menunjukkan emosi yang kurang stabil." },
    { s: "Apabila pasukan saya kalah dalam pertandingan, saya memberi semangat kepada ahli untuk mencuba lagi.", trait: "Kepimpinan & Inisiatif", pos: 0, hurai: "Pemimpin membangkitkan semangat pasukan selepas kegagalan." },
    { s: "Saya rasa sains hanya berguna untuk lulus peperiksaan.", trait: "Minat Ilmu, Sains & Motivasi", pos: 1, hurai: "Sains penting dalam kehidupan, bukan sekadar untuk peperiksaan." },
    { id: 'ka2', pasangan: 'ka1', s: "Semasa memimpin kumpulan, saya memberikan tugas secara rawak kerana kekuatan ahli itu remeh.", trait: "Kepimpinan & Inisiatif", pos: 1, hurai: "Mengabaikan kekuatan ahli melemahkan hasil kerja pasukan." },
    { id: 'ia1', pasangan: 'ia2', s: "Saya menulis karangan dengan ayat sendiri walaupun banyak contoh tersedia di internet.", trait: "Integriti & Disiplin Diri", pos: 0, hurai: "Menghasilkan kerja sendiri ialah amalan jujur dalam penulisan." },
    { s: "Saya menyiapkan urusan peribadi lebih awal supaya sempat menghadiri aktiviti malam asrama.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Pengurusan masa ialah kunci kehidupan asrama." },
    { s: "Saya berkongsi makanan dengan rakan sedorm apabila mendapat kiriman dari rumah.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 0, hurai: "Berkongsi mengeratkan ukhuwah di asrama." },
    { s: "Saya suka membina model atau projek menggunakan bahan terbuang.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Kreativiti dalam membina projek menyokong minat kejuruteraan." },
    { s: "Saya kekal bersemangat walaupun keputusan eksperimen tidak seperti yang dijangka.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Sikap positif terhadap kegagalan eksperimen penting dalam sains." },
    { s: "Saya tidak pernah merahsiakan apa-apa perkara daripada ibu bapa saya.", trait: "Skala Kejujuran", pos: 1, hurai: "Hampir setiap remaja pernah menyimpan perkara kecil daripada ibu bapa; jawapan jujur lebih dipercayai." },
    { s: "Jika saya nampak cara yang lebih cekap untuk melakukan tugasan, saya akan mencadangkannya.", trait: "Kepimpinan & Inisiatif", pos: 0, hurai: "Mencadangkan penambahbaikan menunjukkan inisiatif." },
    { s: "Saya menyalin keputusan eksperimen kumpulan lain kerana malas mengulang eksperimen.", trait: "Minat Ilmu, Sains & Motivasi", pos: 1, hurai: "Menyalin keputusan menghilangkan pengalaman belajar sains." },
    { id: 'ba1', pasangan: 'ba2', s: "Saya menawarkan bantuan apabila rakan kelihatan sukar membawa barang ke dorm.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 0, hurai: "Membantu tanpa diminta menunjukkan keprihatinan." },
    { s: "Saya membuat tugasan piket dengan sempurna walaupun guru tiada untuk memeriksa.", trait: "Integriti & Disiplin Diri", pos: 0, hurai: "Integriti bermaksud melakukan perkara betul walaupun tiada orang melihat." },
    { s: "Saya teruja melihat bintang dan bulan pada waktu malam.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Minat terhadap alam semesta menunjukkan sifat ingin tahu." },
    { s: "Saya mampu menyiapkan kerja walaupun ada perkara yang merunsingkan fikiran.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Fokus walaupun tertekan menunjukkan ketahanan." },
    { s: "Saya boleh membuat keputusan sendiri tentang perbelanjaan kecil.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Membuat keputusan kewangan kecil menunjukkan kemandirian." },
    { s: "Saya memerlukan ibu bapa membuat hampir semua keputusan untuk saya.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 1, hurai: "Pelajar asrama perlu mampu membuat keputusan sendiri." },
    { s: "Saya suka merancang aktiviti rumah sukan saya untuk Hari Sukan.", trait: "Kepimpinan & Inisiatif", pos: 0, hurai: "Minat merancang aktiviti menunjukkan semangat kepimpinan." },
    { s: "Saya menyediakan jadual kerja apabila kumpulan saya mempunyai projek besar.", trait: "Kepimpinan & Inisiatif", pos: 0, hurai: "Merancang jadual menunjukkan kepimpinan yang tersusun." },
    { s: "Saya menyebarkan khabar angin tentang pelajar lain dalam kumpulan sembang.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 1, hurai: "Menyebarkan khabar angin merosakkan hubungan dan maruah orang lain." },
    { s: "Setiap kali ditegur, saya terus menerimanya dengan gembira tanpa sedikit pun rasa terkilan.", trait: "Skala Kejujuran", pos: 1, hurai: "Rasa terkilan apabila ditegur ialah perkara biasa; mengakuinya ialah jawapan jujur." },
    { s: "Saya dapat bertenang semula dengan cepat selepas dimarahi.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Pemulihan emosi yang cepat menunjukkan kestabilan." },
    { s: "Ada kalanya saya lebih suka bermain daripada mengulang kaji.", trait: "Skala Kejujuran", pos: 0, hurai: "Mengakui kecenderungan biasa menunjukkan kejujuran." },
    { s: "Saya mengucapkan tahniah kepada pasukan lawan selepas perlawanan.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 0, hurai: "Semangat kesukanan mencerminkan hubungan sosial yang sihat." },
    { s: "Saya menyorokkan nota saya daripada rakan kerana takut dia mendapat markah lebih tinggi.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 1, hurai: "Berkongsi ilmu menguatkan kumpulan dan persahabatan." },
    { s: "Saya mengunci loker saya untuk menjaga barang berharga.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Menjaga keselamatan barang sendiri ialah tanggungjawab." },
    { s: "Saya meminta rakan menandakan kehadiran saya apabila saya ponteng aktiviti kokurikulum.", trait: "Integriti & Disiplin Diri", pos: 1, hurai: "Memalsukan kehadiran ialah perbuatan tidak jujur." },
    { s: "Saya tahu cara menghubungi warden atau guru bertugas jika berlaku kecemasan.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Mengetahui prosedur kecemasan ialah kesediaan hidup berasrama." },
    { s: "Saya mahu menjadi pelajar yang dapat menyumbang kepada inovasi negara.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Aspirasi menyumbang selari dengan misi MRSM." },
    { id: 'ib1', pasangan: 'ib2', s: "Saya tidur pada waktu yang ditetapkan supaya cergas keesokan harinya.", trait: "Integriti & Disiplin Diri", pos: 0, hurai: "Mengawal waktu tidur menunjukkan disiplin diri." },
    { s: "Saya suka mengukur dan merekod data dengan tepat.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Ketepatan data ialah asas kerja saintifik." },
    { id: 'ma2', pasangan: 'ma1', s: "Saya merayu untuk pulang ke rumah setiap hujung minggu walaupun hal itu menjejaskan aktiviti asrama.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 1, hurai: "Terlalu kerap mahu pulang menyukarkan penyesuaian di asrama." },
    { s: "Apabila hasil kumpulan dipuji, saya mahu nama saya sahaja yang disebut.", trait: "Kepimpinan & Inisiatif", pos: 1, hurai: "Pemimpin yang baik berkongsi pujian dengan seluruh pasukan." },
    { id: 'ea2', pasangan: 'ea1', s: "Saya berasa sangat terhina dan tersinggung apabila kerja saya dikritik.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 1, hurai: "Terlalu sensitif terhadap kritikan menyukarkan pembelajaran." },
    { s: "Saya mengakui kesilapan saya kepada rakan sekumpulan apabila kerja saya menyusahkan mereka.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 0, hurai: "Mengakui kesilapan kepada pasukan mengekalkan kepercayaan." },
    { id: 'sa2', pasangan: 'sa1', s: "Semasa amali, saya mengikut langkah secara membuta tuli.", trait: "Minat Ilmu, Sains & Motivasi", pos: 1, hurai: "Bekerja tanpa berfikir mengurangkan pembelajaran saintifik." },
    { s: "Saya membatalkan semua rancangan saya apabila satu perkara gagal.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 1, hurai: "Daya tahan bermaksud menyesuaikan rancangan, bukan membatalkan semuanya." },
    { s: "Saya pernah memberi alasan supaya terlepas daripada sesuatu kerja.", trait: "Skala Kejujuran", pos: 0, hurai: "Kebanyakan orang pernah berbuat demikian; mengakuinya ialah jawapan jujur." },
    { s: "Saya berasa terbeban dan mahu melepaskan jawatan setiap kali diberi tanggungjawab kecil.", trait: "Kepimpinan & Inisiatif", pos: 1, hurai: "Pelajar MRSM perlu bersedia memikul tanggungjawab." },
    { id: 'sb1', pasangan: 'sb2', s: "Saya menggunakan masa lapang untuk mempelajari kemahiran baharu.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Belajar secara kendiri menunjukkan motivasi." },
    { s: "Saya cuba memahami punca rasa marah saya sebelum bertindak.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Memahami emosi sendiri membantu kawalan diri." },
    { s: "Saya meminta izin sebelum meminjam alat tulis rakan.", trait: "Integriti & Disiplin Diri", pos: 0, hurai: "Meminta izin menunjukkan hormat terhadap hak orang lain." },
    { s: "Saya sentiasa mematuhi setiap peraturan sekolah tanpa sekali pun melanggarnya.", trait: "Skala Kejujuran", pos: 1, hurai: "Hampir semua pelajar pernah melanggar peraturan kecil; jawapan jujur lebih dipercayai." },
    { s: "Saya mencari video pembelajaran untuk memahami topik yang sukar.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Mencari sumber tambahan menunjukkan inisiatif belajar." },
    { s: "Saya berminat mengetahui cara tubuh manusia berfungsi.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Minat biologi menunjukkan sifat ingin tahu." },
    { s: "Kadang-kadang saya berasa geram apabila keinginan saya tidak dituruti.", trait: "Skala Kejujuran", pos: 0, hurai: "Rasa geram sekali-sekala ialah emosi normal." },
    { id: 'eb2', pasangan: 'eb1', s: "Apabila menghadapi minggu yang sukar, saya yakin semuanya akan berakhir dengan buruk.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 1, hurai: "Memikirkan perkara terburuk meningkatkan tekanan." },
    { s: "Saya bersedia mempelajari kemahiran asas seperti menjahit butang baju sendiri.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Kesediaan belajar kemahiran asas memudahkan hidup berasrama." },
    { s: "Saya memastikan setiap ahli faham peranannya sebelum aktiviti bermula.", trait: "Kepimpinan & Inisiatif", pos: 0, hurai: "Penjelasan yang jelas memudahkan pasukan bekerja dengan lancar." },
    { id: 'ia2', pasangan: 'ia1', s: "Saya menyalin karangan dari internet dan menghantarnya sebagai kerja saya.", trait: "Integriti & Disiplin Diri", pos: 1, hurai: "Plagiat ialah pelanggaran integriti akademik." },
    { s: "Saya membeli makanan ringan dengan wang yang diberi untuk membeli buku.", trait: "Integriti & Disiplin Diri", pos: 1, hurai: "Menyalahgunakan wang amanah menjejaskan integriti." },
    { s: "Saya menetapkan matlamat mingguan untuk belajar.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Matlamat jangka pendek mengekalkan motivasi." },
    { s: "Saya membaca semula nota selepas kelas untuk mengukuhkan ingatan.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Mengulang kaji secara berkala menunjukkan motivasi." },
    { id: 'ba2', pasangan: 'ba1', s: "Apabila rakan kelihatan bergelut dengan barang yang berat, saya berlalu sahaja kerana itu urusannya.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 1, hurai: "Sikap tidak peduli menjejaskan hubungan sosial." },
    { s: "Saya mencari maklumat sendiri tentang peraturan asrama.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Mengambil tahu peraturan menunjukkan kesediaan." },
    { s: "Saya mengisi hujung minggu dengan aktiviti berfaedah selain berehat.", trait: "Integriti & Disiplin Diri", pos: 0, hurai: "Mengurus masa lapang dengan baik menunjukkan disiplin diri." },
    { s: "Saya dapat tidur dengan nyenyak di tempat yang baharu.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Kebolehsuaian penting untuk hidup berasrama." },
    { id: 'mb1', pasangan: 'mb2', s: "Saya menyusun jadual mencuci pakaian supaya pakaian bersih sentiasa mencukupi.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Merancang tugas harian menunjukkan kemandirian." },
    { s: "Saya mencadangkan cara mengumpul dana apabila kelab saya memerlukan wang untuk aktiviti.", trait: "Kepimpinan & Inisiatif", pos: 0, hurai: "Mencari penyelesaian secara proaktif ialah tanda inisiatif." },
    { s: "Saya membeli keperluan diri sendiri di koperasi sekolah.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Mengurus keperluan sendiri menunjukkan kemandirian." },
    { s: "Saya mengekalkan rutin harian walaupun berasa sedikit sedih.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Rutin membantu menstabilkan emosi." },
    { s: "Saya tidak pernah menyesal tentang apa-apa yang saya lakukan.", trait: "Skala Kejujuran", pos: 1, hurai: "Setiap orang pernah membuat kesilapan yang dikesali; jawapan jujur lebih realistik." },
    { s: "Saya mengaku kepada warden apabila saya terlewat pulang dari aktiviti luar.", trait: "Integriti & Disiplin Diri", pos: 0, hurai: "Bercakap benar walaupun berisiko ditegur menunjukkan integriti." },
    { s: "Saya memotong percakapan rakan apabila saya rasa idea saya lebih baik.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 1, hurai: "Memotong percakapan menunjukkan kurang hormat." },
    { s: "Saya memberitahu guru jika dia tersilap memberi markah lebih kepada saya.", trait: "Integriti & Disiplin Diri", pos: 0, hurai: "Kejujuran tentang markah sendiri menunjukkan integriti tinggi." },
    { id: 'ka1', pasangan: 'ka2', s: "Saya membahagikan tugas mengikut kekuatan setiap ahli kumpulan.", trait: "Kepimpinan & Inisiatif", pos: 0, hurai: "Pemimpin yang bijak memanfaatkan kebolehan setiap ahli." },
    { s: "Saya sanggup mewakili rakan sedorm untuk berbincang dengan warden tentang masalah dorm.", trait: "Kepimpinan & Inisiatif", pos: 0, hurai: "Menjadi jurucakap secara bertanggungjawab ialah peranan pemimpin." },
    { s: "Saya menganggap peperiksaan sebagai cabaran yang boleh diatasi.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Melihat cabaran secara positif mengurangkan kebimbangan." },
    { s: "Saya mengajak rakan sedorm bersarapan bersama supaya tiada yang tertinggal.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 0, hurai: "Sikap inklusif mengeratkan hubungan di asrama." },
    { s: "Saya menjaga kemudahan asrama seperti harta saya sendiri.", trait: "Integriti & Disiplin Diri", pos: 0, hurai: "Menjaga harta awam ialah tanda tanggungjawab." },
    { s: "Saya bersabar apabila rakan sebilik membuat bising.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Kesabaran mengelakkan konflik di dorm." }
  ]
});

UKKM.push({ set: 3, tajuk: 'Set 3', bahagian: ['mat', 'sains', 'eng', 'per'].map(k => B[k]).filter(Boolean) }); })();
