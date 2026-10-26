(function () { const B = {}; const UKKM_PART = (n, b) => { B[b.id] = b; };
UKKM_PART(4, { id: 'mat', nama: 'Matematik', ikon: '🧮', minit: 30,
  arahan: 'Jawab semua 20 soalan. 18 soalan objektif (pilih A, B, C atau D) dan 2 soalan isian (taip jawapan nombor). Kalkulator saintifik dibenarkan; gunakan kertas conteng.',
  soalan: [
  { // 1 Pola — mudah
    s: "Apakah nombor seterusnya dalam jujukan berikut?<br><b>2, 9, 28, 65, …</b>",
    en: "What is the next number in the sequence 2, 9, 28, 65, … ?",
    p: ['102', '124', '125', '126'], a: 3, topik: 'Pola & Jujukan', aras: 'mudah',
    hurai: "Setiap sebutan = n³ + 1: 1 + 1, 8 + 1, 27 + 1, 64 + 1, maka seterusnya 5³ + 1 = <b>126</b>. (125 lupa '+1'; 124 guna n³ − 1; 102 mengulang beza terakhir 37.)"
  },
  { // 2 Persamaan linear — mudah (ISI)
    jenis: 'isi',
    s: "Tambang sebuah teksi terdiri daripada caj permulaan RM 4.00 dan RM 1.20 bagi setiap kilometer perjalanan. Puan Mei membayar RM 22.00. Berapakah jarak perjalanannya, dalam km?",
    en: "A taxi fare is RM 4.00 flag-fall plus RM 1.20 per kilometre. Mrs Mei paid RM 22.00. How far did she travel, in km?",
    a: 15, unit: 'km', topik: 'Persamaan Linear', aras: 'mudah',
    hurai: "4 + 1.20d = 22 → 1.20d = 18 → d = <b>15 km</b>. (Jangan bahagi 22 terus dengan 1.20; tolak caj permulaan dahulu.)"
  },
  { // 3 Untung — mudah
    s: "Seorang peniaga membeli 50 biji tembikai dengan harga RM 6 sebiji. Lima biji tembikai rosak dan dibuang. Baki tembikai dijual dengan harga RM 8.40 sebiji. Berapakah peratus keuntungannya?",
    en: "A trader buys 50 watermelons at RM 6 each. Five are spoilt and thrown away; the rest are sold at RM 8.40 each. What is the percentage profit?",
    p: ['20.6%', '26%', '30%', '40%'], a: 1, topik: 'Peratus & Matematik Pengguna', aras: 'mudah',
    hurai: "Kos = 50 × 6 = RM 300. Jualan = 45 × 8.40 = RM 378. Untung = RM 78. Peratus untung = 78 ÷ 300 × 100% = <b>26%</b>. (40% mengabaikan tembikai rosak; 20.6% = 78 ÷ 378, bahagi dengan harga jual, bukan kos.)"
  },
  { // 4 Laju — mudah
    s: "Seorang pelari pecut menamatkan larian 100 m dalam masa 12.5 saat. Berapakah laju puratanya dalam km/j?",
    en: "A sprinter runs 100 m in 12.5 seconds. What is the average speed in km/h?",
    p: ['2.22 km/j', '8 km/j', '28.8 km/j', '480 km/j'], a: 2, topik: 'Nisbah, Kadar & Laju', aras: 'mudah',
    hurai: "Laju = 100 ÷ 12.5 = 8 m/s. 8 m/s × 3600 s ÷ 1000 m = 8 × 3.6 = <b>28.8 km/j</b>. (8 ialah m/s, belum ditukar; 2.22 = 8 ÷ 3.6, arah penukaran salah; 480 = 8 × 60, hanya tukar saat ke minit.)"
  },
  { // 5 Data — mudah
    rajah: '<table><tr><th>Saiz kasut</th><td>5</td><td>6</td><td>7</td><td>8</td><td>9</td></tr><tr><th>Bilangan murid</th><td>4</td><td>9</td><td>12</td><td>7</td><td>3</td></tr></table>',
    s: "Jadual menunjukkan saiz kasut bagi 35 orang murid. Berapakah bilangan murid yang memakai kasut bersaiz <b>lebih besar</b> daripada mod?",
    en: "The table shows the shoe sizes of 35 pupils. How many pupils wear a size larger than the mode?",
    p: ['10', '12', '13', '22'], a: 0, topik: 'Data & Statistik', aras: 'mudah',
    hurai: "Mod = saiz 7 (kekerapan tertinggi, 12). Lebih besar daripada 7: saiz 8 dan 9 → 7 + 3 = <b>10</b>. (22 termasuk saiz 7; 12 ialah kekerapan mod; 13 ialah murid bersaiz lebih kecil.)"
  },
  { // 6 Perimeter — sederhana
    rajah: '<svg viewBox="-25 0 340 175" style="max-width:100%;width:330px" role="img" aria-label="Segi empat tepat dengan semibulatan"><path d="M210,20 L30,20 L30,146 L210,146 A63.0,63.0 0 0 0 210,20" fill="var(--c)" fill-opacity="0.15" stroke="var(--c)" stroke-width="2.5"/><line x1="210" y1="20" x2="210" y2="146" stroke="var(--muted)" stroke-width="1.5" stroke-dasharray="5 4"/><g font-size="13" fill="currentColor"><text x="102.0" y="164">20 cm</text><text x="26" y="87.0" text-anchor="end">14 cm</text></g></svg>',
    s: "Rajah menunjukkan sebuah papan tanda yang terdiri daripada sebuah segi empat tepat dan sebuah semibulatan. Garis putus-putus bukan sebahagian daripada sempadan. Berapakah perimeter papan tanda itu? (Guna π = 22/7)",
    en: "The diagram shows a signboard made of a rectangle and a semicircle. The dashed line is not part of the boundary. What is the perimeter? (Use π = 22/7)",
    p: ['65 cm', '76 cm', '90 cm', '98 cm'], a: 1, topik: 'Geometri & Pengukuran', aras: 'sederhana',
    hurai: "Diameter semibulatan = 14 cm, jejari 7 cm. Lengkok = ½ × 2 × 22/7 × 7 = 22 cm. Perimeter = 20 + 14 + 20 + 22 = <b>76 cm</b>. (90 cm termasuk garis putus-putus 14 cm; 98 cm guna lilitan bulatan penuh 44 cm; 65 cm guna lengkok suku bulatan 11 cm.)"
  },
  { // 7 Logik — sederhana
    s: "Hari Malaysia, 16 September 2026, jatuh pada hari Rabu. Pada hari apakah 25 Disember 2026?",
    en: "Malaysia Day, 16 September 2026, falls on a Wednesday. On what day is 25 December 2026?",
    p: ['Khamis', 'Jumaat', 'Sabtu', 'Ahad'], a: 1, topik: 'Penaakulan Logik', aras: 'sederhana',
    hurai: "Bilangan hari dari 16 Sept hingga 25 Dis: 14 (baki September) + 31 (Oktober) + 30 (November) + 25 = 100 hari. 100 = 7 × 14 + 2, jadi 2 hari selepas Rabu = <b>Jumaat</b>. (Khamis: tersilap kira 99 hari, contohnya menganggap Oktober 30 hari; Sabtu: terkira 16 Sept sekali lagi, 101 hari.)"
  },
  { // 8 Pola — sederhana
    s: "Dalam suatu jujukan, setiap sebutan diperoleh dengan menambah nombor yang sama kepada sebutan sebelumnya. Sebutan ke-4 ialah 23 dan sebutan ke-9 ialah 48. Berapakah sebutan ke-25?",
    en: "In a sequence, each term is found by adding the same number to the previous term. The 4th term is 23 and the 9th term is 48. What is the 25th term?",
    p: ['123', '125', '128', '133'], a: 2, topik: 'Pola & Jujukan', aras: 'sederhana',
    hurai: "Dari sebutan ke-4 ke ke-9 ada 5 langkah: beza = (48 − 23) ÷ 5 = 5. Sebutan pertama = 23 − 3 × 5 = 8. Sebutan ke-25 = 8 + 24 × 5 = <b>128</b>. (133 = 8 + 25 × 5, tertambah satu langkah; 125 = 25 × 5 tanpa sebutan pertama; 123 = 48 + 15 × 5, tersilap kira 15 langkah dari sebutan ke-9 ke ke-25 (sepatutnya 16).)"
  },
  { // 9 Persamaan linear — sederhana
    s: "Sebuah balang yang berisi penuh dengan madu berjisim 1 500 g. Selepas separuh daripada madu itu digunakan, jisim balang bersama baki madu ialah 900 g. Berapakah jisim balang kosong itu?",
    en: "A jar full of honey has a mass of 1 500 g. After half of the honey is used, the jar and the remaining honey have a mass of 900 g. What is the mass of the empty jar?",
    p: ['300 g', '600 g', '750 g', '1 200 g'], a: 0, topik: 'Persamaan Linear', aras: 'sederhana',
    hurai: "Separuh madu = 1500 − 900 = 600 g, jadi madu penuh = 1 200 g. Balang = 1500 − 1200 = <b>300 g</b>. (600 g ialah separuh madu; 1 200 g ialah jisim madu penuh; 750 g = 1500 ÷ 2, menganggap balang tiada jisim.)"
  },
  { // 10 Pinjaman — sederhana
    s: "Puan Aida meminjam RM 12 000 untuk membeli sebuah motosikal. Pinjaman itu dikenakan kadar faedah sama rata 4% setahun dan perlu dibayar balik dalam 5 tahun secara ansuran bulanan yang sama. Berapakah bayaran ansuran bulanannya?",
    en: "Mrs Aida borrows RM 12 000 for a motorcycle at a flat interest rate of 4% per year, repaid over 5 years in equal monthly instalments. What is the monthly instalment?",
    p: ['RM 200', 'RM 208', 'RM 240', 'RM 1 200'], a: 2, topik: 'Peratus & Matematik Pengguna', aras: 'sederhana',
    hurai: "Faedah = 12 000 × 0.04 × 5 = RM 2 400. Jumlah bayaran = RM 14 400. Ansuran = 14 400 ÷ 60 bulan = <b>RM 240</b>. (RM 200 lupa faedah; RM 208 hanya faedah setahun; RM 1 200 = 14 400 ÷ 12, ansuran tahunan bagi setahun sahaja.)"
  },
  { // 11 Pertukaran wang — sederhana
    s: "Sebelum melancong ke Singapura, Aiman menukar RM 850 kepada dolar Singapura (SGD) pada kadar SGD 1 = RM 3.40. Dia membelanjakan SGD 180. Selepas pulang, dia menukar baki SGD kepada ringgit pada kadar SGD 1 = RM 3.30. Berapakah jumlah ringgit yang diterimanya?",
    en: "Aiman changes RM 850 to Singapore dollars at SGD 1 = RM 3.40 and spends SGD 180. Back home he changes the balance to ringgit at SGD 1 = RM 3.30. How many ringgit does he receive?",
    p: ['RM 21.21', 'RM 231', 'RM 238', 'RM 670'], a: 1, topik: 'Nisbah, Kadar & Laju', aras: 'sederhana',
    hurai: "850 ÷ 3.40 = SGD 250. Baki = 250 − 180 = SGD 70. 70 × 3.30 = <b>RM 231</b>. (RM 238 guna kadar lama 3.40; RM 670 = 850 − 180, mencampurkan RM dengan SGD; RM 21.21 = 70 ÷ 3.30, membahagi sedangkan patut mendarab.)"
  },
  { // 12 Graf garis — sederhana
    rajah: '<svg viewBox="0 0 340 250" style="max-width:100%;width:340px" role="img" aria-label="Graf garis jualan bulanan"><line x1="60" y1="200.0" x2="310" y2="200.0" stroke="var(--muted)" stroke-opacity="0.35"/><text x="54" y="204.0" font-size="12" fill="currentColor" text-anchor="end">100</text><line x1="60" y1="172.0" x2="310" y2="172.0" stroke="var(--muted)" stroke-opacity="0.35"/><text x="54" y="176.0" font-size="12" fill="currentColor" text-anchor="end">120</text><line x1="60" y1="144.0" x2="310" y2="144.0" stroke="var(--muted)" stroke-opacity="0.35"/><text x="54" y="148.0" font-size="12" fill="currentColor" text-anchor="end">140</text><line x1="60" y1="116.0" x2="310" y2="116.0" stroke="var(--muted)" stroke-opacity="0.35"/><text x="54" y="120.0" font-size="12" fill="currentColor" text-anchor="end">160</text><line x1="60" y1="88.0" x2="310" y2="88.0" stroke="var(--muted)" stroke-opacity="0.35"/><text x="54" y="92.0" font-size="12" fill="currentColor" text-anchor="end">180</text><line x1="60" y1="60.0" x2="310" y2="60.0" stroke="var(--muted)" stroke-opacity="0.35"/><text x="54" y="64.0" font-size="12" fill="currentColor" text-anchor="end">200</text><line x1="60" y1="32.0" x2="310" y2="32.0" stroke="var(--muted)" stroke-opacity="0.35"/><text x="54" y="36.0" font-size="12" fill="currentColor" text-anchor="end">220</text><line x1="60" y1="200.0" x2="310" y2="200.0" stroke="currentColor" stroke-width="1.5"/><line x1="60" y1="200.0" x2="60" y2="20" stroke="currentColor" stroke-width="1.5"/><line x1="60" y1="186" x2="310" y2="186" stroke="var(--muted)" stroke-opacity="0.25" stroke-dasharray="2 4"/><line x1="60" y1="158" x2="310" y2="158" stroke="var(--muted)" stroke-opacity="0.25" stroke-dasharray="2 4"/><line x1="60" y1="130" x2="310" y2="130" stroke="var(--muted)" stroke-opacity="0.25" stroke-dasharray="2 4"/><line x1="60" y1="102" x2="310" y2="102" stroke="var(--muted)" stroke-opacity="0.25" stroke-dasharray="2 4"/><line x1="60" y1="74" x2="310" y2="74" stroke="var(--muted)" stroke-opacity="0.25" stroke-dasharray="2 4"/><line x1="60" y1="46" x2="310" y2="46" stroke="var(--muted)" stroke-opacity="0.25" stroke-dasharray="2 4"/><polyline points="70,172.0 115,130.0 160,151.0 205,88.0 250,46.0 295,67.0" fill="none" stroke="var(--c)" stroke-width="2.5"/><circle cx="70" cy="172.0" r="4" fill="var(--c)"/><text x="70" y="216.0" font-size="12" fill="currentColor" text-anchor="middle">Jan</text><circle cx="115" cy="130.0" r="4" fill="var(--c)"/><text x="115" y="216.0" font-size="12" fill="currentColor" text-anchor="middle">Feb</text><circle cx="160" cy="151.0" r="4" fill="var(--c)"/><text x="160" y="216.0" font-size="12" fill="currentColor" text-anchor="middle">Mac</text><circle cx="205" cy="88.0" r="4" fill="var(--c)"/><text x="205" y="216.0" font-size="12" fill="currentColor" text-anchor="middle">Apr</text><circle cx="250" cy="46.0" r="4" fill="var(--c)"/><text x="250" y="216.0" font-size="12" fill="currentColor" text-anchor="middle">Mei</text><circle cx="295" cy="67.0" r="4" fill="var(--c)"/><text x="295" y="216.0" font-size="12" fill="currentColor" text-anchor="middle">Jun</text><text x="4" y="12" font-size="12" fill="currentColor">Bilangan unit dijual</text><text x="185" y="244" font-size="12" fill="currentColor" text-anchor="middle">Bulan</text></svg>',
    s: "Graf garis menunjukkan bilangan unit telefon yang dijual oleh sebuah kedai dari Januari hingga Jun. Antara dua bulan berturutan yang manakah berlakunya <b>peningkatan</b> jualan yang paling besar?",
    en: "The line graph shows phones sold by a shop from January to June. Between which two consecutive months was the largest increase in sales?",
    p: ['Januari – Februari', 'Mac – April', 'April – Mei', 'Mei – Jun'], a: 1, topik: 'Data & Statistik', aras: 'sederhana',
    hurai: "Bacaan: Jan 120, Feb 150, Mac 135, Apr 180, Mei 210, Jun 195. Perubahan: +30, −15, <b>+45</b>, +30, −15. Peningkatan terbesar Mac – April. (Mei – Jun ialah penurunan; April – Mei mempunyai nilai jualan tertinggi tetapi peningkatannya hanya 30.)"
  },
  { // 13 Penjelmaan — sederhana
    s: "Titik P(3, −1) dipantulkan pada garis y = 2. Imejnya kemudian ditranslasikan 4 unit ke kiri dan 1 unit ke atas. Apakah koordinat imej akhir?",
    en: "Point P(3, −1) is reflected in the line y = 2, then the image is translated 4 units left and 1 unit up. What are the final coordinates?",
    p: ['(−1, 6)', '(−1, 2)', '(−7, 0)', '(7, 4)'], a: 0, topik: 'Geometri & Pengukuran', aras: 'sederhana',
    hurai: "P berada 3 unit di bawah garis y = 2, jadi imej pantulan berada 3 unit di atas: (3, 5). Translasi: (3 − 4, 5 + 1) = <b>(−1, 6)</b>. ((−1, 2) memantul pada paksi-x; (−7, 0) memantul pada paksi-y; (7, 4) mentranslasi ke arah bertentangan.)"
  },
  { // 14 Logik — sederhana
    s: "Aina, Balqis dan Chen masing-masing bermain satu sukan yang berbeza: badminton, renang atau bola jaring. Umur mereka juga berbeza.<br>• Pemain badminton lebih tua daripada Balqis.<br>• Chen ialah yang paling muda.<br>• Perenang lebih tua daripada pemain bola jaring.<br>Siapakah pemain bola jaring?",
    en: "Aina, Balqis and Chen each play a different sport: badminton, swimming or netball, and are of different ages. The badminton player is older than Balqis; Chen is the youngest; the swimmer is older than the netball player. Who plays netball?",
    p: ['Aina', 'Balqis', 'Chen', 'Tidak dapat ditentukan'], a: 2, topik: 'Penaakulan Logik', aras: 'sederhana',
    hurai: "Pemain badminton lebih tua daripada Balqis, jadi bukan Balqis; dan bukan Chen (paling muda tidak boleh lebih tua daripada sesiapa). Maka Aina = badminton. Antara Balqis dan Chen, perenang lebih tua; Chen paling muda, jadi Balqis = renang dan <b>Chen = bola jaring</b>."
  },
  { // 15 Pola & bentuk piawai — sukar
    s: "Sejenis bakteria membiak dengan setiap sel membahagi kepada dua setiap 20 minit. Pada mulanya terdapat 3 × 10³ sel bakteria. Berapakah bilangan sel selepas 4 jam? Beri jawapan dalam bentuk piawai.",
    en: "Each bacterial cell divides into two every 20 minutes. Initially there are 3 × 10³ cells. How many cells are there after 4 hours, in standard form?",
    p: ['3.6 × 10⁴', '4.8 × 10⁴', '1.2288 × 10⁷', '2.4576 × 10⁷'], a: 2, topik: 'Pola & Jujukan', aras: 'sukar',
    hurai: "4 jam = 240 minit = 12 kali pembahagian. Bilangan = 3 000 × 2¹² = 3 000 × 4 096 = 12 288 000 = <b>1.2288 × 10⁷</b>. (2.4576 × 10⁷ guna 2¹³, terlebih satu kitaran; 4.8 × 10⁴ = 3 000 × 2⁴, mengira 4 kali pembahagian (sejam sekali); 3.6 × 10⁴ = 3 000 × 12, menambah, bukan menggandakan.)"
  },
  { // 16 Persamaan linear — sukar (ISI)
    jenis: 'isi',
    s: "Lilin A sepanjang 30 cm memendek 2 cm setiap jam apabila dinyalakan. Lilin B sepanjang 22 cm memendek 1.2 cm setiap jam. Kedua-dua lilin dinyalakan serentak. Selepas berapa jam panjang kedua-dua lilin itu menjadi sama?",
    en: "Candle A is 30 cm long and burns 2 cm per hour. Candle B is 22 cm long and burns 1.2 cm per hour. Both are lit at the same time. After how many hours are they the same length?",
    a: 10, unit: 'jam', topik: 'Persamaan Linear', aras: 'sukar',
    hurai: "30 − 2t = 22 − 1.2t → 8 = 0.8t → t = <b>10 jam</b>. Semak: A = 30 − 20 = 10 cm, B = 22 − 12 = 10 cm (kedua-duanya masih menyala)."
  },
  { // 17 Matematik pengguna — sukar
    s: "Harga sehelai baju di dua buah kedai ialah RM 45. Kedai X menawarkan \"Beli 3, percuma 1\". Kedai Y memberi diskaun 25% bagi setiap helai. Puan Ros mahu membeli <b>tepat 6 helai</b> baju. Pernyataan manakah yang betul?",
    en: "A shirt costs RM 45 at two shops. Shop X offers 'Buy 3, get 1 free'. Shop Y gives 25% off every shirt. Mrs Ros wants exactly 6 shirts. Which statement is correct?",
    p: ['Kedua-dua kedai sama harga', 'Kedai X lebih murah sebanyak RM 22.50', 'Kedai Y lebih murah sebanyak RM 67.50', 'Kedai Y lebih murah sebanyak RM 22.50'], a: 3, topik: 'Peratus & Matematik Pengguna', aras: 'sukar',
    hurai: "Kedai X: bayar 3 dapat 4 (RM 135), kemudian bayar 2 lagi (RM 90) → 6 helai = RM 225. Kedai Y: 6 × 45 × 0.75 = RM 202.50. Kedai Y lebih murah sebanyak <b>RM 22.50</b>. (\"Beli 3 percuma 1\" bersamaan diskaun 25% hanya jika bilangan baju gandaan 4; RM 67.50 menganggap Kedai X tiada baju percuma.)"
  },
  { // 18 Nisbah campuran — sukar
    s: "Jus P dibancuh dengan nisbah sirap kepada air 1 : 4. Jus Q dibancuh dengan nisbah sirap kepada air 3 : 2. Sebanyak 500 ml jus P dicampurkan dengan 250 ml jus Q. Apakah nisbah sirap kepada air dalam campuran itu?",
    en: "Drink P has syrup : water = 1 : 4 and drink Q has syrup : water = 3 : 2. 500 ml of P is mixed with 250 ml of Q. What is the syrup : water ratio of the mixture?",
    p: ['1 : 2', '2 : 3', '4 : 11', '1 : 4'], a: 0, topik: 'Nisbah, Kadar & Laju', aras: 'sukar',
    hurai: "P: sirap = 1/5 × 500 = 100 ml, air = 400 ml. Q: sirap = 3/5 × 250 = 150 ml, air = 100 ml. Campuran: sirap 250 ml, air 500 ml → <b>1 : 2</b>. (2 : 3 menambah sebutan nisbah terus (1+3 : 4+2); 4 : 11 tersilap baca nisbah Q sebagai air : sirap; 1 : 4 hanya nisbah jus P.)"
  },
  { // 19 Statistik — sukar
    s: "Satu set 10 nombor mempunyai min 18 dan julat 20. Setiap nombor dalam set itu didarab dengan 3, kemudian ditolak 5. Apakah min dan julat set nombor yang baharu?",
    en: "A set of 10 numbers has mean 18 and range 20. Each number is multiplied by 3 and then 5 is subtracted. What are the new mean and range?",
    p: ['Min 13, julat 15', 'Min 49, julat 55', 'Min 54, julat 60', 'Min 49, julat 60'], a: 3, topik: 'Data & Statistik', aras: 'sukar',
    hurai: "Min berubah mengikut operasi yang sama: 18 × 3 − 5 = 49. Julat = terbesar − terkecil; darab 3 menggandakan julat (60), tetapi tolak 5 daripada setiap nombor tidak mengubah beza → julat = 60. Jawapan: <b>min 49, julat 60</b>. (Julat 55 tersilap menolak 5 daripada julat; min 54 lupa tolak 5.)"
  },
  { // 20 Pythagoras 3D — sukar
    rajah: '<svg viewBox="-10 0 310 200" style="max-width:100%;width:300px" role="img" aria-label="Kotak berbentuk kuboid 12 cm × 9 cm × 8 cm"><line x1="40.0" y1="70.0" x2="220.0" y2="70.0" stroke="currentColor" stroke-width="2"/><line x1="220.0" y1="70.0" x2="220.0" y2="166.0" stroke="currentColor" stroke-width="2"/><line x1="220.0" y1="166.0" x2="40.0" y2="166.0" stroke="currentColor" stroke-width="2"/><line x1="40.0" y1="166.0" x2="40.0" y2="70.0" stroke="currentColor" stroke-width="2"/><line x1="83.2" y1="37.6" x2="263.2" y2="37.6" stroke="currentColor" stroke-width="2"/><line x1="263.2" y1="37.6" x2="263.2" y2="133.6" stroke="currentColor" stroke-width="2"/><line x1="40.0" y1="70.0" x2="83.2" y2="37.6" stroke="currentColor" stroke-width="2"/><line x1="220.0" y1="70.0" x2="263.2" y2="37.6" stroke="currentColor" stroke-width="2"/><line x1="220.0" y1="166.0" x2="263.2" y2="133.6" stroke="currentColor" stroke-width="2"/><line x1="83.2" y1="133.6" x2="83.2" y2="37.6" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4" stroke-opacity="0.6"/><line x1="83.2" y1="133.6" x2="263.2" y2="133.6" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4" stroke-opacity="0.6"/><line x1="40.0" y1="166.0" x2="83.2" y2="133.6" stroke="currentColor" stroke-width="2" stroke-dasharray="5 4" stroke-opacity="0.6"/><line x1="40" y1="166" x2="263.2" y2="37.6" stroke="var(--c)" stroke-width="2.5"/><g font-size="13" fill="currentColor"><text x="114.0" y="184">12 cm</text><text x="247.6" y="161.8">9 cm</text><text x="34" y="122.0" text-anchor="end">8 cm</text></g></svg>',
    s: "Sebuah kotak berbentuk kuboid berukuran 12 cm × 9 cm × 8 cm. Berapakah panjang batang lidi lurus yang <b>terpanjang</b> yang boleh dimuatkan sepenuhnya di dalam kotak itu (seperti garis berwarna dalam rajah)?",
    en: "A cuboid box measures 12 cm × 9 cm × 8 cm. What is the length of the longest straight stick that fits entirely inside the box (like the coloured line in the diagram)?",
    p: ['12.04 cm', '14.42 cm', '15.00 cm', '17.00 cm'], a: 3, topik: 'Geometri & Pengukuran', aras: 'sukar',
    hurai: "Pepenjuru tapak = √(12² + 9²) = √225 = 15 cm. Pepenjuru ruang = √(15² + 8²) = √289 = <b>17 cm</b>. (15 cm hanya pepenjuru tapak; 14.42 cm = √(12² + 8²) dan 12.04 cm = √(9² + 8²) ialah pepenjuru muka sisi.)"
  }
  ]
});

UKKM_PART(4, {
  id: 'eng', nama: 'Bahasa Inggeris', ikon: '📖', minit: 30, jenis: 'objektif',
  arahan: 'Read each text carefully and answer the questions that follow. Choose the best answer (A, B, C or D).',
  petikan: [
    { id: 'P1', tajuk: 'Poster: Give Blood, Save Lives', teks: `
<p style="font-size:1.15em"><b>GIVE BLOOD, SAVE LIVES</b><br>Blood Donation Drive</p>
<p>Dewan Komuniti Taman Sentosa, Klang<br><b>Sunday, 8 March · 8.30 a.m. – 2.00 p.m.</b><br>Organised by the PIBG of SMK Taman Sentosa with the district hospital blood bank</p>
<p><b>Who can donate?</b></p>
<ul>
<li>People aged 18 to 60 (17-year-olds need written consent from a parent)</li>
<li>People who weigh at least 45 kg</li>
<li>People who slept well the night before and have eaten a proper meal</li>
</ul>
<p>Please do <b>NOT</b> donate if you have had a fever in the past week.</p>
<p>Students under 17 are welcome to volunteer at the registration and refreshment counters, where they will help donors fill in forms and serve drinks. Every donor receives a free blood pressure check.</p>` },
    { id: 'P2', tajuk: 'Letter: New Rules on Mobile Phones in the Hostel', teks: `
<p>Dear Parents and Guardians,</p>
<p>Beginning 2 June, all hostel students must hand in their mobile phones to the wardens every Monday morning. The phones will be returned on Friday afternoon, so students can use them during the weekend.</p>
<p>This decision was not made lightly. Over the past term, our wardens found that many students were staying up past midnight on their phones. Teachers reported that these students often fell asleep in class, and their test results dropped. Several parents also wrote to us with the same concern.</p>
<p>We understand that you may worry about contacting your child. Each block will have two phones for students to call home between 8.00 and 9.00 p.m. on weekdays. In an emergency, you may call the warden’s office at any time.</p>
<p>A student who is found with a phone on a weekday will have it kept by the school for two weeks.</p>
<p>We hope you will discuss these rules at home. If you have any questions, please contact Encik Hafiz, our senior warden, at 07-432 8765.</p>
<p>Yours sincerely,<br>Dr Salmah Yusof<br>Principal</p>` },
    { id: 'P3', tajuk: 'Article: From Plate to Compost', teks: `
<p>Malaysians throw away thousands of tonnes of food every day, and much of it is still fit to eat. Rice, bread and vegetables make up a large share of this waste. When food is buried in landfills, it rots without air and produces methane, a gas that traps heat far more strongly than carbon dioxide.</p>
<p>At SMK Bukit Indah in Johor, the Environmental Club decided to tackle the problem in their own canteen. For two weeks, members weighed the leftovers on students’ plates after recess. The results surprised them: an average of 18 kg of food was being thrown away every school day, mostly rice.</p>
<p>The club did not stop at counting. Members talked to the canteen operator, who agreed to offer two portion sizes of rice at different prices. They also put up posters reminding students to take only what they could finish.</p>
<p>The remaining scraps now go into three compost bins behind the science block. Fruit peels and vegetable waste are mixed with dry leaves, and the mixture is turned every few days so that air can reach it. After about two months, it becomes dark, crumbly compost, which is used in the school’s herb garden.</p>
<p>Six months later, daily food waste has fallen to around 7 kg. The club’s advisor, Puan Kalai, admits that progress has been slower than she hoped, as some students still ignore the posters. Even so, she believes the project has taught her students something no textbook could: that small, measured actions can change habits.</p>` }
  ],
  soalan: [
    { petikan: 'P1', topik: 'Main idea / purpose', s: 'What is the main purpose of the poster?',
      p: ['To explain how donated blood is stored at the district hospital', 'To announce the opening of a new community hall', 'To offer free health checks to all residents of Klang', 'To invite donors and student helpers to a blood drive'], a: 3,
      hurai: `The poster is headed "Blood Donation Drive", lists "Who can donate?" and welcomes students "to volunteer". Only donors get the free blood pressure check.` },
    { petikan: 'P1', topik: 'Specific detail', s: 'What does a 17-year-old need in order to donate blood at the drive?',
      p: ['A letter from the school principal', 'Written consent from a parent', 'A volunteer certificate', 'A recent blood pressure report'], a: 1,
      hurai: `"17-year-olds need written consent from a parent."` },
    { petikan: 'P1', topik: 'Vocabulary in context', s: 'In “Blood Donation <b>Drive</b>”, the word <b>drive</b> means',
      p: ['an organised effort to collect something', 'a journey in a car', 'a road leading up to a house', 'strong energy and determination to succeed'], a: 0,
      hurai: `The event is held on one day to collect blood from donors, so a "drive" here is an organised campaign. The other options are common meanings that do not fit a poster asking for donors.` },
    { petikan: 'P1', topik: 'Reference', s: 'In the last paragraph, <b>they</b> in “where they will help donors fill in forms” refers to',
      p: ['the donors', 'the hospital staff', 'the students under 17', 'the people aged 18 to 60'], a: 2,
      hurai: `"Students under 17 are welcome to volunteer ... where they will help donors fill in forms." The donors are the ones being helped, so they cannot be "they".` },
    { petikan: 'P1', topik: 'Inference', s: 'Who should NOT donate blood at the drive?',
      p: ['Puan Lee, 58, who weighs 52 kg and had breakfast', 'Encik Rahman, 45, who weighs 70 kg and had a fever four days ago', 'Danial, 17, who weighs 50 kg and has a signed consent letter from his mother', 'Kak Ina, 25, who weighs 46 kg and slept well'], a: 1,
      hurai: `"Please do NOT donate if you have had a fever in the past week." Four days ago is within the past week. The other three meet the age, weight and consent rules.` },

    { petikan: 'P2', topik: 'Main idea / purpose', s: 'Why did the principal write this letter?',
      p: ['To explain a new hostel rule and why it was made', 'To complain about parents who call the hostel too often', 'To ask parents to buy phones for their children', 'To announce that students will be sent home on weekends'], a: 0,
      hurai: `The letter explains that students must "hand in their mobile phones ... every Monday morning" and then gives the reasons: late nights, sleeping in class and lower results.` },
    { petikan: 'P2', topik: 'Specific detail', s: 'How can a student contact his family on a Wednesday evening?',
      p: ['By borrowing a teacher’s phone at any time', 'By asking Encik Hafiz to return his own phone for the evening', 'By sending a letter through the warden’s office', 'By using a block phone between 8.00 and 9.00 p.m.'], a: 3,
      hurai: `"Each block will have two phones for students to call home between 8.00 and 9.00 p.m. on weekdays." The warden’s office is for parents to call in an emergency.` },
    { petikan: 'P2', topik: 'Vocabulary in context', s: '“This decision was <b>not made lightly</b>.” This means the decision was',
      p: ['made quickly and without much thought at all', 'made by only a few teachers', 'made after careful and serious thought', 'not popular with the students'], a: 2,
      hurai: `The principal goes on to list evidence collected "Over the past term" from wardens, teachers and parents. This shows careful thought. Option A is the opposite meaning.` },
    { petikan: 'P2', topik: 'Reference', s: 'In “Teachers reported that these students often fell asleep in class, and <b>their</b> test results dropped”, <b>their</b> refers to',
      p: ['the teachers', 'the students who stayed up late', 'the wardens', 'the parents who wrote to the school'], a: 1,
      hurai: `"These students" are the ones "staying up past midnight on their phones"; it is their test results that dropped. Teachers only reported the problem.` },
    { petikan: 'P2', topik: 'Inference / attitude', s: 'Which word best describes the principal’s attitude towards parents’ worries?',
      p: ['Impatient', 'Uninterested', 'Apologetic', 'Understanding'], a: 3,
      hurai: `"We understand that you may worry about contacting your child." She then offers solutions (block phones, emergency calls). She does not apologise for the rule itself.` },

    { petikan: 'P3', topik: 'Main idea / purpose', s: 'Which statement best expresses the main idea of the article?',
      p: ['Methane is more harmful than carbon dioxide.', 'Canteen operators are responsible for most of the food waste in schools.', 'A school club reduced food waste through practical action.', 'Compost is the best fertiliser for a herb garden.'], a: 2,
      hurai: `Most of the article follows the club, from weighing leftovers to offering smaller portions, posters and composting, until waste fell "to around 7 kg". Methane is only background.` },
    { petikan: 'P3', topik: 'Specific detail', s: 'What did the canteen operator agree to do?',
      p: ['Sell rice in two portion sizes', 'Stop selling rice during recess', 'Weigh the leftovers on every plate', 'Put up posters about food waste'], a: 0,
      hurai: `The canteen operator "agreed to offer two portion sizes of rice at different prices". The club members put up the posters and weighed the leftovers.` },
    { petikan: 'P3', topik: 'Vocabulary in context', s: 'In “the Environmental Club decided to <b>tackle</b> the problem”, the word <b>tackle</b> means',
      p: ['take the ball from a player', 'make an effort to deal with', 'attack someone physically', 'collect equipment for fishing'], a: 1,
      hurai: `The club then measured the waste and took steps to reduce it. "Tackle the problem" means to start dealing with it. The other options are sports, fighting and fishing meanings.` },
    { petikan: 'P3', topik: 'Reference', s: 'In “the mixture is turned every few days so that air can reach <b>it</b>”, <b>it</b> refers to',
      p: ['the science block', 'the herb garden', 'the dry leaves only', 'the whole mixture'], a: 3,
      hurai: `The mixture is turned "so that air can reach it", so the air reaches the mixture of fruit peels, vegetable waste and dry leaves. The leaves are only one part of it.` },
    { petikan: 'P3', topik: 'Inference / attitude', s: 'Which best describes Puan Kalai’s view of the project?',
      p: ['Realistic about its problems but positive about what it taught', 'Disappointed and ready to stop it', 'Fully satisfied because every student now follows the posters closely', 'Worried that the compost is harming the herb garden'], a: 0,
      hurai: `She "admits that progress has been slower than she hoped", "Even so, she believes the project has taught her students something no textbook could".` }
  ]
});

// UKKM Set 04 — Ujian Keperibadian (Ya/Tidak), 100 item. Item terbalik bukan-kejujuran: 28.
UKKM_PART(4, {
  id: 'per', nama: 'Ujian Keperibadian', ikon: '🧭', minit: 30,
  arahan: "Baca setiap pernyataan dan pilih <b>Ya</b> atau <b>Tidak</b> mengikut diri anda yang sebenar. Jawab dengan jujur, logik dan konsisten; beberapa idea diulang dengan ayat berbeza. Bagi situasi asrama yang belum anda alami, jawab mengikut tindakan yang paling mungkin anda lakukan. Masa: kira-kira 18 saat bagi setiap item.",
  skala: ["Ya","Tidak"],
  item: [
    { s: "Saya meneruskan latihan walaupun jurulatih bersikap tegas.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Ketahanan diri membantu menghadapi latihan yang mencabar." },
    { s: "Saya mencatat minit mesyuarat atau tindakan susulan supaya keputusan tidak dilupakan.", trait: "Kepimpinan & Inisiatif", pos: 0, hurai: "Tindakan susulan memastikan rancangan pemimpin dilaksanakan." },
    { s: "Saya boleh mengurus rasa gementar sebelum perlawanan dengan baik.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Mengurus kegelisahan membantu prestasi." },
    { s: "Saya menyukai setiap subjek di sekolah sama banyak.", trait: "Skala Kejujuran", pos: 1, hurai: "Wajar jika kita lebih menyukai sesetengah subjek; mengakuinya ialah jawapan jujur." },
    { s: "Saya bersedia membantu rakan sebilik mengemas barang apabila dia tergesa-gesa.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 0, hurai: "Saling membantu memudahkan kehidupan asrama." },
    { id: 'ba2', pasangan: 'ba1', s: "Dalam kerja kumpulan, saya membiarkan seorang ahli yang rajin membuat hampir semua kerja.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 1, hurai: "Membebankan seorang ahli menunjukkan kerjasama yang lemah." },
    { s: "Saya pernah tertidur semasa sepatutnya mengulang kaji.", trait: "Skala Kejujuran", pos: 0, hurai: "Perkara ini biasa berlaku; mengakuinya ialah jawapan jujur." },
    { id: 'mb1', pasangan: 'mb2', s: "Saya boleh menguruskan barang sendiri ketika menaiki pengangkutan awam ke asrama.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Bergerak secara berdikari menunjukkan kesediaan hidup berasrama." },
    { s: "Saya menandatangani sendiri surat kebenaran bagi pihak ibu bapa supaya urusan cepat selesai.", trait: "Integriti & Disiplin Diri", pos: 1, hurai: "Memalsukan tandatangan ialah pelanggaran integriti yang serius." },
    { s: "Saya boleh menenangkan ahli kumpulan yang panik sebelum pertandingan bermula.", trait: "Kepimpinan & Inisiatif", pos: 0, hurai: "Pemimpin membantu pasukan kekal tenang dalam tekanan." },
    { id: 'ea2', pasangan: 'ea1', s: "Saya menggelabah dan lupa semua perkara apabila dipanggil ke hadapan kelas secara tiba-tiba.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 1, hurai: "Panik dalam situasi mengejut menjejaskan prestasi." },
    { id: 'eb2', pasangan: 'eb1', s: "Saya berhenti berusaha jika tiada hasil yang nampak dalam masa seminggu.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 1, hurai: "Mengharapkan hasil segera menunjukkan daya tahan yang rendah." },
    { s: "Saya sanggup meluangkan masa untuk memahami soalan KBAT.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Usaha memahami soalan aras tinggi menunjukkan motivasi." },
    { s: "Saya teruja apabila guru memperkenalkan topik baharu.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Keterujaan belajar menunjukkan motivasi." },
    { s: "Saya boleh menyesuaikan diri dengan peraturan memadamkan lampu pada waktu malam.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Mematuhi rutin asrama menunjukkan kesediaan." },
    { s: "Saya menghubungi ahli kumpulan untuk memastikan semua orang tahu masa perjumpaan.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 0, hurai: "Komunikasi yang baik memudahkan kerja pasukan." },
    { id: 'ia1', pasangan: 'ia2', s: "Saya bercakap benar kepada warden walaupun kesalahan itu melibatkan kawan baik saya.", trait: "Integriti & Disiplin Diri", pos: 0, hurai: "Integriti bermaksud jujur walaupun melibatkan kawan." },
    { s: "Apabila menjadi ketua, saya membuat semua keputusan sendiri kerana pendapat ahli melambatkan kerja.", trait: "Kepimpinan & Inisiatif", pos: 1, hurai: "Pemimpin yang baik berunding dengan ahli sebelum membuat keputusan." },
    { id: 'ka1', pasangan: 'ka2', s: "Saya selesa mengendalikan perbincangan kumpulan supaya semua ahli mendapat giliran bercakap.", trait: "Kepimpinan & Inisiatif", pos: 0, hurai: "Mengurus perbincangan dengan adil ialah kemahiran pemimpin." },
    { s: "Saya mengembalikan kunci bilik makmal kepada guru selepas digunakan.", trait: "Integriti & Disiplin Diri", pos: 0, hurai: "Memulangkan barang amanah dengan segera menunjukkan tanggungjawab." },
    { s: "Saya membuat peta minda untuk merumuskan topik yang dipelajari.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Teknik belajar aktif menunjukkan kesungguhan." },
    { s: "Saya menangguhkan tugasan sehingga guru memberi amaran.", trait: "Integriti & Disiplin Diri", pos: 1, hurai: "Bertindak hanya selepas diberi amaran menunjukkan disiplin yang lemah." },
    { s: "Saya mengekalkan kebersihan loker saya tanpa perlu diperiksa.", trait: "Integriti & Disiplin Diri", pos: 0, hurai: "Disiplin diri terserlah dalam perkara kecil." },
    { s: "Saya menyiapkan pakaian untuk esok pada malam sebelumnya.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Persediaan awal memudahkan pagi yang sibuk di asrama." },
    { id: 'sb1', pasangan: 'sb2', s: "Saya terus belajar walaupun keputusan saya sudah baik.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Motivasi berterusan membawa kecemerlangan." },
    { s: "Saya sentiasa mendahulukan kepentingan orang lain dalam setiap perkara.", trait: "Skala Kejujuran", pos: 1, hurai: "Setiap orang ada kalanya mendahulukan diri sendiri; menafikannya kelihatan tidak jujur." },
    { s: "Saya menganggap soalan sains yang mencabar sebagai sesuatu yang perlu dielakkan.", trait: "Minat Ilmu, Sains & Motivasi", pos: 1, hurai: "Cabaran sepatutnya dilihat sebagai peluang belajar." },
    { s: "Saya menyerahkan perancangan aktiviti kepada orang lain kerana merancang itu memenatkan.", trait: "Kepimpinan & Inisiatif", pos: 1, hurai: "Merancang ialah tugas utama yang perlu dipikul oleh pemimpin." },
    { s: "Saya boleh berfikir semula secara rasional selepas berasa marah.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Berfikir rasional selepas marah menunjukkan kawalan emosi." },
    { s: "Saya selalu merungut tentang makanan di dewan selera sehingga menjejaskan emosi saya.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 1, hurai: "Merungut berlebihan menjejaskan emosi dan penyesuaian." },
    { s: "Saya menegur rakan yang membuang sampah merata-rata dengan cara yang baik.", trait: "Kepimpinan & Inisiatif", pos: 0, hurai: "Menegur secara berhemah menunjukkan keberanian dan teladan." },
    { s: "Ada kalanya saya berasa bosan di dalam kelas.", trait: "Skala Kejujuran", pos: 0, hurai: "Mengakui perasaan biasa menunjukkan kejujuran." },
    { id: 'ib1', pasangan: 'ib2', s: "Saya mula mengulang kaji beberapa minggu sebelum peperiksaan.", trait: "Integriti & Disiplin Diri", pos: 0, hurai: "Persediaan awal menunjukkan disiplin belajar." },
    { s: "Saya memberi markah yang jujur apabila diminta menilai kerja rakan sebaya.", trait: "Integriti & Disiplin Diri", pos: 0, hurai: "Penilaian yang adil menunjukkan integriti." },
    { s: "Saya mengelak menghadapi peperiksaan percubaan kerana takut gagal.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 1, hurai: "Mengelak cabaran kerana takut gagal menghalang kemajuan." },
    { s: "Saya mengajak rakan yang berbeza bangsa menyertai kumpulan belajar saya.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 0, hurai: "Perpaduan dibina melalui pergaulan yang terbuka." },
    { s: "Saya mengagihkan bahan dan peralatan dengan adil dalam aktiviti makmal.", trait: "Kepimpinan & Inisiatif", pos: 0, hurai: "Keadilan dalam pengagihan menunjukkan kepimpinan yang dipercayai." },
    { s: "Saya membersihkan kasut sekolah saya sendiri.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Mengurus barang sendiri ialah kemahiran berdikari." },
    { s: "Saya tetap belajar walaupun cuaca panas dan suasana kurang selesa.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Daya tahan membolehkan fokus dalam suasana sukar." },
    { id: 'ma1', pasangan: 'ma2', s: "Saya mengurus waktu tidur saya sendiri supaya cukup rehat.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Mengurus rehat sendiri menunjukkan kemandirian." },
    { id: 'sa2', pasangan: 'sa1', s: "Saya menganggap membaca bahan sains pada masa lapang sesuatu yang membosankan.", trait: "Minat Ilmu, Sains & Motivasi", pos: 1, hurai: "Hilang minat membaca bahan sains menunjukkan minat ilmu yang rendah." },
    { s: "Saya tahu cara menjaga diri ketika keluar ke bandar pada hari outing.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Kesedaran keselamatan penting bagi pelajar asrama." },
    { s: "Saya memberi galakan kepada rakan yang hendak mencuba sesuatu yang baharu.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 0, hurai: "Menyokong rakan membina hubungan positif." },
    { s: "Saya tidak pernah mengusik atau mengejek sesiapa, walaupun secara bergurau.", trait: "Skala Kejujuran", pos: 1, hurai: "Hampir semua orang pernah mengusik rakan; jawapan jujur lebih dipercayai." },
    { s: "Saya menyimpan makanan kering di loker dalam bekas yang bertutup rapat.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Menyimpan makanan dengan betul menjaga kebersihan dorm." },
    { s: "Apabila arahan guru kurang jelas, saya bertanya bagi pihak kumpulan saya.", trait: "Kepimpinan & Inisiatif", pos: 0, hurai: "Mengambil inisiatif mendapatkan maklumat membantu seluruh kumpulan." },
    { id: 'ba1', pasangan: 'ba2', s: "Saya memastikan setiap ahli kumpulan mendapat bahagian kerja yang adil.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 0, hurai: "Pembahagian yang adil menjaga semangat berpasukan." },
    { s: "Saya melihat sisi positif dalam situasi yang sukar.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Pandangan positif menguatkan daya tahan." },
    { s: "Saya mengajak rakan-rakan menyertai pertandingan inovasi sekolah.", trait: "Kepimpinan & Inisiatif", pos: 0, hurai: "Menggerakkan orang lain untuk mencuba sesuatu ialah ciri pemimpin." },
    { s: "Saya mematuhi peraturan jalan raya ketika menunggang basikal ke sekolah.", trait: "Integriti & Disiplin Diri", pos: 0, hurai: "Mematuhi undang-undang menunjukkan disiplin dan kesedaran keselamatan." },
    { s: "Saya boleh membiasakan diri berkongsi bilik air dengan ramai pelajar.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Berkongsi kemudahan ialah sebahagian kehidupan asrama." },
    { s: "Saya sanggup memikul tanggungjawab sebagai ketua dorm walaupun tugasnya banyak.", trait: "Kepimpinan & Inisiatif", pos: 0, hurai: "Kepimpinan di asrama ialah latihan tanggungjawab yang berharga." },
    { s: "Saya bertindak terburu-buru apabila sedang marah.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 1, hurai: "Tindakan terburu-buru ketika marah sering dikesali." },
    { s: "Saya mengikut arahan keselamatan makmal walaupun arahan itu terasa leceh.", trait: "Integriti & Disiplin Diri", pos: 0, hurai: "Mematuhi arahan keselamatan menunjukkan disiplin." },
    { s: "Saya cepat berputus asa apabila ahli kumpulan lambat memberi kerjasama.", trait: "Kepimpinan & Inisiatif", pos: 1, hurai: "Pemimpin perlu sabar dan mencari cara memotivasikan ahli." },
    { id: 'mb2', pasangan: 'mb1', s: "Saya berasa takut dan mahu ditemani keluarga setiap kali perlu bergerak ke asrama.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 1, hurai: "Pelajar asrama perlu yakin bergerak secara berdikari." },
    { s: "Saya mempertahankan rakan yang diejek oleh pelajar lain.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 0, hurai: "Mempertahankan rakan menunjukkan kesetiaan dan keberanian." },
    { s: "Saya mempersendakan loghat rakan dari negeri lain.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 1, hurai: "Mempersendakan perbezaan menyakiti hati dan memecahbelahkan." },
    { s: "Saya suka bertanya soalan kepada penceramah sains semasa program sekolah.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Bertanya menunjukkan sifat ingin tahu." },
    { id: 'ia2', pasangan: 'ia1', s: "Saya sanggup berbohong kepada warden untuk melindungi kawan yang melanggar peraturan asrama.", trait: "Integriti & Disiplin Diri", pos: 1, hurai: "Berbohong demi kawan tetap merupakan ketidakjujuran." },
    { s: "Saya cuba mengaitkan pelajaran sains dengan kejadian harian.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Mengaitkan ilmu dengan kehidupan mengukuhkan kefahaman." },
    { s: "Saya berterus terang dengan sopan apabila ada perkara yang mengganggu saya.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 0, hurai: "Komunikasi yang jujur dan sopan mengelakkan salah faham." },
    { s: "Saya tahu ke mana wang saku saya dibelanjakan setiap minggu.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Memantau perbelanjaan membantu mengurus wang." },
    { s: "Saya menggunakan barang di ruang bersama dorm dan membiarkannya bersepah.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 1, hurai: "Membiarkan ruang bersama bersepah menyusahkan rakan lain." },
    { s: "Saya tidak pernah meninggikan suara kepada sesiapa pun.", trait: "Skala Kejujuran", pos: 1, hurai: "Hampir setiap orang pernah meninggikan suara; jawapan jujur lebih realistik." },
    { s: "Saya boleh menyesuaikan diri apabila ditempatkan dalam kumpulan yang ahlinya belum saya kenali.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Kebolehan menyesuaikan diri penting di asrama." },
    { s: "Saya suka mencuba menyelesaikan masalah sebelum melihat contoh jawapan.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Mencuba sendiri dahulu menguatkan pemikiran." },
    { s: "Saya sanggup mengalah dalam perkara kecil demi keharmonian dorm.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 0, hurai: "Bertolak ansur menjaga keharmonian." },
    { s: "Saya memeriksa barang saya sebelum meninggalkan dorm untuk cuti.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Ketelitian menjaga barang sendiri." },
    { s: "Saya merancang langkah alternatif sekiranya rancangan asal kumpulan gagal.", trait: "Kepimpinan & Inisiatif", pos: 0, hurai: "Pemimpin yang baik bersedia dengan pelan sandaran." },
    { s: "Saya mengikuti saluran sains di internet untuk menambah ilmu.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Menggunakan internet untuk ilmu menunjukkan minat sains." },
    { s: "Saya meminta rakan mengemaskan katil saya setiap pagi kerana saya malas.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 1, hurai: "Bergantung pada rakan untuk keperluan sendiri menunjukkan kemandirian yang rendah." },
    { s: "Kadang-kadang saya membalas mesej rakan lambat kerana malas.", trait: "Skala Kejujuran", pos: 0, hurai: "Mengakui kelemahan kecil lebih jujur daripada menafikannya." },
    { id: 'eb1', pasangan: 'eb2', s: "Saya boleh meneruskan usaha walaupun hasilnya lambat kelihatan.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Kesabaran terhadap proses menunjukkan ketahanan." },
    { id: 'ea1', pasangan: 'ea2', s: "Saya tetap tenang apabila guru memanggil saya ke hadapan tanpa diduga.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Ketenangan dalam situasi tidak dijangka menunjukkan kestabilan emosi." },
    { s: "Saya lebih suka bermain telefon daripada menyiapkan projek sains.", trait: "Minat Ilmu, Sains & Motivasi", pos: 1, hurai: "Mengutamakan hiburan menunjukkan motivasi yang rendah." },
    { id: 'ib2', pasangan: 'ib1', s: "Saya hanya membuka buku pada malam sebelum peperiksaan.", trait: "Integriti & Disiplin Diri", pos: 1, hurai: "Belajar saat akhir menunjukkan disiplin belajar yang lemah." },
    { s: "Saya kekal tenang apabila keputusan ujian diumumkan di hadapan kelas.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Ketenangan menghadapi keputusan menunjukkan kestabilan emosi." },
    { s: "Saya mengawal rasa kecewa apabila aktiviti yang dinanti-nantikan dibatalkan.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Menerima kekecewaan dengan tenang menunjukkan kematangan." },
    { id: 'sb2', pasangan: 'sb1', s: "Selepas mendapat keputusan baik, saya berasa sudah cukup dan berhenti mengulang kaji.", trait: "Minat Ilmu, Sains & Motivasi", pos: 1, hurai: "Berpuas hati terlalu awal menghalang kemajuan." },
    { s: "Saya percaya usaha yang konsisten akan membawa kejayaan.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Kepercayaan ini mengekalkan motivasi belajar." },
    { s: "Saya meletakkan tuala basah di atas katil sehingga cadar berbau.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 1, hurai: "Kebersihan diri dan katil penting di asrama." },
    { s: "Saya berasa sangat terganggu sepanjang hari jika seseorang memandang saya dengan pelik.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 1, hurai: "Terlalu terkesan oleh perkara kecil menunjukkan emosi yang rapuh." },
    { s: "Saya membayar tiket atau yuran aktiviti tepat pada masanya.", trait: "Integriti & Disiplin Diri", pos: 0, hurai: "Melunaskan bayaran menunjukkan amanah." },
    { s: "Saya bersabar dengan rakan yang bekerja lebih perlahan daripada saya.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 0, hurai: "Kesabaran penting dalam pasukan yang pelbagai." },
    { s: "Saya tidak pernah terlewat bangun walaupun sekali seumur hidup.", trait: "Skala Kejujuran", pos: 1, hurai: "Hampir semua orang pernah terlewat bangun; jawapan jujur lebih dipercayai." },
    { s: "Saya menyediakan keperluan untuk aktiviti kokurikulum tanpa diingatkan.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Persediaan sendiri menunjukkan kemandirian." },
    { s: "Saya menelefon ibu bapa beberapa kali sehari untuk bertanya perkara kecil.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 1, hurai: "Pelajar asrama perlu membuat keputusan kecil sendiri." },
    { s: "Saya memaafkan rakan yang telah meminta maaf kepada saya.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 0, hurai: "Memaafkan memulihkan hubungan." },
    { s: "Saya mudah hilang tumpuan ketika membaca bahan ilmiah.", trait: "Minat Ilmu, Sains & Motivasi", pos: 1, hurai: "Tumpuan yang lemah menjejaskan pembelajaran." },
    { id: 'ka2', pasangan: 'ka1', s: "Dalam perbincangan kumpulan, saya membiarkan dua tiga orang sahaja menguasai perbualan.", trait: "Kepimpinan & Inisiatif", pos: 1, hurai: "Pemimpin memastikan setiap ahli mendapat peluang bersuara." },
    { id: 'sa1', pasangan: 'sa2', s: "Saya membaca buku ilmiah atau majalah sains untuk keseronokan.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Membaca untuk keseronokan menunjukkan minat ilmu." },
    { s: "Saya menyindir ahli kumpulan yang memberi idea yang saya rasa mengarut.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 1, hurai: "Menyindir menyebabkan ahli lain takut menyumbang idea." },
    { s: "Saya membahagikan masa antara kokurikulum dan pelajaran dengan seimbang.", trait: "Integriti & Disiplin Diri", pos: 0, hurai: "Pengurusan masa yang baik ialah disiplin diri." },
    { s: "Saya mengakui kepada rakan apabila saya merosakkan barangnya secara tidak sengaja.", trait: "Integriti & Disiplin Diri", pos: 0, hurai: "Mengaku dan bertanggungjawab ialah tanda integriti." },
    { s: "Saya tahu cara memberi semangat kepada diri sendiri apabila berasa lemah.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Motivasi kendiri ialah ciri ketahanan diri." },
    { s: "Saya berminat menyertai kelab robotik atau pengaturcaraan.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Minat teknologi selari dengan matlamat MRSM." },
    { s: "Saya menawarkan diri menjadi pengerusi majlis kecil di kelas.", trait: "Kepimpinan & Inisiatif", pos: 0, hurai: "Mengambil peranan pengerusi menunjukkan keyakinan dan inisiatif." },
    { id: 'ma2', pasangan: 'ma1', s: "Saya sering tidur lewat di asrama kerana tiada ibu bapa yang menyuruh saya tidur.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 1, hurai: "Kemandirian bermaksud mengawal rutin sendiri tanpa pemantauan." },
    { s: "Saya menerima keputusan guru dengan tenang walaupun saya kurang bersetuju.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Menerima keputusan dengan matang menunjukkan kestabilan emosi." }
  ]
});

UKKM.push({ set: 4, tajuk: 'Set 4', bahagian: ['mat', 'sains', 'eng', 'per'].map(k => B[k]).filter(Boolean) }); })();
