(function () { const B = {}; const UKKM_PART = (n, b) => { B[b.id] = b; };
UKKM_PART(6, { id: 'mat', nama: 'Matematik', ikon: '🧮', minit: 30,
  arahan: 'Jawab semua 20 soalan. 18 soalan objektif (pilih A, B, C atau D) dan 2 soalan isian (taip jawapan nombor). Kalkulator saintifik dibenarkan; gunakan kertas conteng.',
  soalan: [
  { // 1 Pola — mudah
    s: "Apakah nombor seterusnya dalam jujukan berikut?<br><b>2, 5, 7, 12, 19, 31, …</b>",
    en: "What is the next number in the sequence 2, 5, 7, 12, 19, 31, … ?",
    p: ['43', '50', '62', '81'], a: 1, topik: 'Pola & Jujukan', aras: 'mudah',
    hurai: "Setiap sebutan ialah hasil tambah dua sebutan sebelumnya: 2 + 5 = 7, 5 + 7 = 12, 7 + 12 = 19, 12 + 19 = 31, maka 19 + 31 = <b>50</b>. (43 = 31 + 12, menambah beza terakhir; 62 = 31 × 2; 81 ialah sebutan selepas 50.)"
  },
  { // 2 Ketaksamaan linear — mudah
    s: "Aishah mempunyai RM 50. Dia membeli sebuah buku nota berharga RM 8.50 dan beberapa batang pen berharga RM 3.20 sebatang. Berapakah bilangan <b>maksimum</b> pen yang boleh dibelinya?",
    en: "Aishah has RM 50. She buys a notebook for RM 8.50 and some pens at RM 3.20 each. What is the maximum number of pens she can buy?",
    p: ['12', '13', '15', '16'], a: 0, topik: 'Persamaan Linear', aras: 'mudah',
    hurai: "8.50 + 3.20p ≤ 50 → 3.20p ≤ 41.50 → p ≤ 12.97. Bilangan pen mesti nombor bulat, jadi maksimum <b>12</b> (semak: 13 pen → RM 50.10, melebihi RM 50). (13 membundarkan 12.97 ke atas; 15 ≈ 50 ÷ 3.20 lupa harga buku nota; 16 membundarkan 15.6 ke atas.)"
  },
  { // 3 Peratus — mudah
    s: "Bil makanan sebuah keluarga di restoran ialah RM 80. Caj perkhidmatan 10% dikenakan, kemudian cukai 6% dikenakan ke atas jumlah selepas caj perkhidmatan. Berapakah jumlah yang perlu dibayar?",
    en: "A family's restaurant bill is RM 80. A 10% service charge is added, then 6% tax is charged on the amount after the service charge. How much must they pay?",
    p: ['RM 84.80', 'RM 88.00', 'RM 92.80', 'RM 93.28'], a: 3, topik: 'Peratus & Matematik Pengguna', aras: 'mudah',
    hurai: "Selepas caj perkhidmatan: 80 × 1.10 = RM 88. Selepas cukai: 88 × 1.06 = <b>RM 93.28</b>. (RM 92.80 = 80 × 1.16, menambah 10% + 6% terus atas RM 80; RM 88.00 lupa cukai; RM 84.80 lupa caj perkhidmatan.)"
  },
  { // 4 Laju — mudah
    s: "Sebuah bas bertolak pada pukul 7:45 pagi dan tiba di destinasi pada pukul 10:15 pagi. Jarak perjalanan ialah 190 km. Berapakah laju purata bas itu?",
    en: "A bus leaves at 7:45 a.m. and arrives at 10:15 a.m. The distance is 190 km. What is its average speed?",
    p: ['95.0 km/j', '82.6 km/j', '76.0 km/j', '63.3 km/j'], a: 2, topik: 'Nisbah, Kadar & Laju', aras: 'mudah',
    hurai: "Masa = 7:45 hingga 10:15 = 2 jam 30 minit = 2.5 jam. Laju purata = 190 ÷ 2.5 = <b>76 km/j</b>. (82.6 menganggap 2 jam 30 minit = 2.3 jam; 63.3 = 190 ÷ 3; 95 = 190 ÷ 2, mengabaikan minit.)"
  },
  { // 5 Data — mudah
    rajah: '<svg viewBox="0 0 310 230" style="max-width:100%;width:340px" role="img" aria-label="Carta palang jualan bungkusan nasi lemak: Isnin 40, Selasa 60, Rabu 30, Khamis 70, Jumaat 50"><g font-size="12" fill="currentColor"><text x="4" y="16">Bilangan bungkus</text><text x="150" y="226">Hari</text></g><g stroke="var(--muted)" stroke-width="1"><line x1="50" y1="190" x2="300" y2="190"/><line x1="50" y1="30" x2="50" y2="190"/><g stroke-dasharray="2 4"><line x1="46" y1="170" x2="300" y2="170"/><line x1="46" y1="150" x2="300" y2="150"/><line x1="46" y1="130" x2="300" y2="130"/><line x1="46" y1="110" x2="300" y2="110"/><line x1="46" y1="90" x2="300" y2="90"/><line x1="46" y1="70" x2="300" y2="70"/><line x1="46" y1="50" x2="300" y2="50"/><line x1="46" y1="30" x2="300" y2="30"/></g></g><g font-size="12" fill="currentColor" text-anchor="end"><text x="42" y="194">0</text><text x="42" y="174">10</text><text x="42" y="154">20</text><text x="42" y="134">30</text><text x="42" y="114">40</text><text x="42" y="94">50</text><text x="42" y="74">60</text><text x="42" y="54">70</text><text x="42" y="34">80</text></g><g fill="var(--c)"><rect x="60" y="110" width="30" height="80"/><rect x="110" y="70" width="30" height="120"/><rect x="160" y="130" width="30" height="60"/><rect x="210" y="50" width="30" height="140"/><rect x="260" y="90" width="30" height="100"/></g><g font-size="12" fill="currentColor" text-anchor="middle"><text x="75" y="206">Isn</text><text x="125" y="206">Sel</text><text x="175" y="206">Rab</text><text x="225" y="206">Kha</text><text x="275" y="206">Jum</text></g></svg>',
    s: "Carta palang menunjukkan bilangan bungkusan nasi lemak yang dijual oleh sebuah kantin dalam lima hari. Sebungkus nasi lemak dijual pada harga RM 2.50. Berapakah beza hasil jualan antara hari jualan <b>tertinggi</b> dengan hari jualan <b>terendah</b>?",
    en: "The bar chart shows packets of nasi lemak sold by a canteen over five days. Each packet costs RM 2.50. What is the difference in sales revenue between the highest-selling day and the lowest-selling day?",
    p: ['RM 40.00', 'RM 75.00', 'RM 100.00', 'RM 175.00'], a: 2, topik: 'Data & Statistik', aras: 'mudah',
    hurai: "Tertinggi Khamis = 70, terendah Rabu = 30. Beza = 40 bungkus × RM 2.50 = <b>RM 100</b>. (RM 40 ialah beza bungkus, bukan ringgit; RM 75 = (60 − 30) × 2.50, tersalah pilih Selasa sebagai tertinggi; RM 175 = 70 × 2.50 ialah hasil Khamis sahaja.)"
  },
  { // 6 Luas permukaan — sederhana
    s: "Sebuah kotak tanpa penutup berbentuk kuboid berukuran 30 cm panjang, 20 cm lebar dan 12 cm tinggi diperbuat daripada kadbod. Berapakah luas kadbod yang digunakan (abaikan pertindihan)?",
    en: "An open box (no lid) shaped like a cuboid, 30 cm long, 20 cm wide and 12 cm high, is made of cardboard. What area of cardboard is used (ignore overlaps)?",
    p: ['1200 cm²', '1800 cm²', '2400 cm²', '7200 cm²'], a: 1, topik: 'Geometri & Pengukuran', aras: 'sederhana',
    hurai: "Tapak = 30 × 20 = 600. Dua sisi panjang = 2 × 30 × 12 = 720. Dua sisi lebar = 2 × 20 × 12 = 480. Jumlah = <b>1800 cm²</b> (tiada penutup). (2400 cm² ialah kotak bertutup; 1200 cm² hanya sisi tegak; 7200 ialah isi padu dalam cm³.)"
  },
  { // 7 Logik — sederhana
    s: "Lima ceramah, P, Q, R, S dan T, diadakan dari hari Isnin hingga Jumaat, satu ceramah sehari.<br>• Ceramah T diadakan pada hari Rabu.<br>• Ceramah Q diadakan sehari selepas ceramah P.<br>• Ceramah S diadakan lebih awal daripada ceramah P.<br>• Ceramah R tidak diadakan pada hari Isnin.<br>Pada hari apakah ceramah S diadakan?",
    en: "Five talks P, Q, R, S, T are held Monday to Friday, one per day. T is on Wednesday. Q is the day after P. S is earlier than P. R is not on Monday. On which day is S held?",
    p: ['Isnin', 'Selasa', 'Khamis', 'Jumaat'], a: 0, topik: 'Penaakulan Logik', aras: 'sederhana',
    hurai: "P dan Q mesti dua hari berturutan tanpa Rabu: (Isnin, Selasa) atau (Khamis, Jumaat). S mesti sebelum P, jadi P bukan Isnin → P Khamis, Q Jumaat. Isnin dan Selasa tinggal untuk R dan S; R bukan Isnin → R Selasa, S <b>Isnin</b>."
  },
  { // 8 Pola — sederhana (ISI)
    jenis: 'isi',
    rajah: '<svg viewBox="0 0 220 100" style="max-width:100%;width:260px" role="img" aria-label="Tangga daripada blok: 1 anak tangga 1 blok, 2 anak tangga 3 blok, 3 anak tangga 6 blok"><g fill="var(--c)" fill-opacity=".35" stroke="currentColor" stroke-width="1.5"><rect x="15" y="62" width="16" height="16"/><rect x="65" y="62" width="16" height="16"/><rect x="81" y="62" width="16" height="16"/><rect x="81" y="46" width="16" height="16"/><rect x="135" y="62" width="16" height="16"/><rect x="151" y="62" width="16" height="16"/><rect x="167" y="62" width="16" height="16"/><rect x="151" y="46" width="16" height="16"/><rect x="167" y="46" width="16" height="16"/><rect x="167" y="30" width="16" height="16"/></g><g font-size="12" fill="currentColor"><text x="4" y="96">Rajah 1</text><text x="58" y="96">Rajah 2</text><text x="138" y="96">Rajah 3</text></g></svg>',
    s: "Sebuah tangga dibina daripada blok segi empat sama seperti dalam rajah. Tangga dengan 1 anak tangga memerlukan 1 blok, 2 anak tangga memerlukan 3 blok dan 3 anak tangga memerlukan 6 blok. Berapakah bilangan blok yang diperlukan untuk tangga dengan <b>20</b> anak tangga?",
    en: "A staircase is built from square blocks as shown: 1 step needs 1 block, 2 steps need 3, 3 steps need 6. How many blocks are needed for a staircase with 20 steps?",
    a: 210, unit: 'blok', topik: 'Pola & Jujukan', aras: 'sederhana',
    hurai: "Bilangan blok = 1 + 2 + 3 + … + 20. Pasangkan sebutan: (1 + 20) + (2 + 19) + … = 10 pasangan × 21 = <b>210</b> blok. (Rumus n(n + 1) ÷ 2 = 20 × 21 ÷ 2.)"
  },
  { // 9 Persamaan linear — sederhana
    s: "Sebuah kedai sewa mempunyai 36 buah basikal dan basikal roda tiga, dengan jumlah 87 roda. Sewa sejam ialah RM 5 bagi basikal dan RM 8 bagi basikal roda tiga. Berapakah jumlah sewa sejam jika <b>semua</b> disewa serentak?",
    en: "A rental shop has 36 bicycles and tricycles with 87 wheels in total. Hourly rent is RM 5 per bicycle and RM 8 per tricycle. What is the total hourly rent if all are rented at once?",
    p: ['RM 225', 'RM 234', 'RM 243', 'RM 288'], a: 0, topik: 'Persamaan Linear', aras: 'sederhana',
    hurai: "Basikal b, roda tiga t: b + t = 36, 2b + 3t = 87. Tolak 2 × (persamaan pertama): t = 87 − 72 = 15, b = 21. Sewa = 21 × 5 + 15 × 8 = 105 + 120 = <b>RM 225</b>. (RM 243 menukar bilangan basikal dan roda tiga; RM 234 menganggap 18 setiap jenis; RM 288 = 36 × 8.)"
  },
  { // 10 Susut nilai — sederhana
    s: "Sebuah van berharga RM 60 000. Nilainya menyusut 15% setiap tahun berdasarkan nilai pada awal tahun itu. Berapakah nilai van itu selepas 3 tahun?",
    en: "A van costs RM 60 000. Its value falls by 15% each year, based on its value at the start of that year. What is its value after 3 years?",
    p: ['RM 51 000.00', 'RM 36 847.50', 'RM 33 000.00', 'RM 23 152.50'], a: 1, topik: 'Peratus & Matematik Pengguna', aras: 'sederhana',
    hurai: "Nilai = 60 000 × 0.85³ = 60 000 × 0.614125 = <b>RM 36 847.50</b>. (RM 33 000 = 60 000 × (1 − 0.45), menolak 15% daripada harga asal setiap tahun; RM 51 000 ialah nilai selepas 1 tahun; RM 23 152.50 ialah jumlah susut nilai, bukan nilai van.)"
  },
  { // 11 Nisbah gear — sederhana
    s: "Gear A (48 gigi) berputar 25 putaran seminit dan memacu gear B (16 gigi). Gear C (20 gigi) dipasang pada paksi yang sama dengan gear B, jadi berputar sama laju dengan B. Gear C memacu gear D (50 gigi). Berapakah bilangan putaran seminit gear D?",
    en: "Gear A (48 teeth) turns at 25 rpm and drives gear B (16 teeth). Gear C (20 teeth) is on the same axle as B, so it turns at the same speed. C drives gear D (50 teeth). How many revolutions per minute does D make?",
    p: ['25', '30', '75', '187.5'], a: 1, topik: 'Nisbah, Kadar & Laju', aras: 'sederhana',
    hurai: "Gigi yang bertemu per minit adalah sama: B = 25 × 48 ÷ 16 = 75 put/min. C = 75 put/min. D = 75 × 20 ÷ 50 = <b>30</b> put/min. (75 ialah laju B/C; 187.5 = 75 × 50 ÷ 20, nisbah terbalik; 25 menganggap laju tidak berubah.)"
  },
  { // 12 Data — sederhana
    rajah: '<table><tr><th>Saiz kasut</th><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td></tr><tr><th>Bilangan murid</th><td>2</td><td>4</td><td>7</td><td>9</td><td>14</td></tr></table>',
    s: "Jadual kekerapan menunjukkan saiz kasut sekumpulan murid. Berapakah <b>median</b> saiz kasut?",
    en: "The frequency table shows the shoe sizes of a group of pupils. What is the median shoe size?",
    p: ['6', '6.81', '7', '8'], a: 2, topik: 'Data & Statistik', aras: 'sederhana',
    hurai: "Jumlah murid = 36. Median = purata nilai ke-18 dan ke-19. Kekerapan longgokan: 2, 6, 13, 22 → nilai ke-14 hingga ke-22 ialah saiz 7. Median = <b>7</b>. (8 ialah mod; 6.81 ialah min = 245 ÷ 36; 6 ialah saiz di tengah jadual, bukan median data.)"
  },
  { // 13 Koordinat — sederhana
    s: "M(1, 4) ialah titik tengah bagi garis lurus PQ. Diberi P(−3, 7), berapakah panjang PQ dalam unit?",
    en: "M(1, 4) is the midpoint of line segment PQ. Given P(−3, 7), what is the length of PQ in units?",
    p: ['5', '6', '8', '10'], a: 3, topik: 'Geometri & Pengukuran', aras: 'sederhana',
    hurai: "Q = (2 × 1 − (−3), 2 × 4 − 7) = (5, 1). PQ = √((5 − (−3))² + (1 − 7)²) = √(64 + 36) = <b>10</b>. (5 ialah PM, separuh sahaja; 8 dan 6 ialah beza mengufuk dan menegak sahaja.)"
  },
  { // 14 Logik pembilangan — sederhana
    s: "Nombor tiga digit dibentuk menggunakan digit 0, 2, 5, 7 dan 9 <b>tanpa ulangan</b>. Berapakah bilangan nombor tiga digit <b>genap</b> yang dapat dibentuk?",
    en: "Three-digit numbers are formed from the digits 0, 2, 5, 7, 9 without repetition. How many even three-digit numbers can be formed?",
    p: ['12', '18', '21', '24'], a: 2, topik: 'Penaakulan Logik', aras: 'sederhana',
    hurai: "Digit akhir mesti 0 atau 2. Berakhir 0: ratus 4 pilihan, puluh 3 pilihan → 12. Berakhir 2: ratus tidak boleh 0 → 3 pilihan (5, 7, 9), puluh 3 pilihan (termasuk 0) → 9. Jumlah = <b>21</b>. (24 = 2 × 4 × 3 membenarkan 0 di depan; 12 hanya kes berakhir 0; 18 menganggap kedua-dua kes seperti kes berakhir 2.)"
  },
  { // 15 Pola — sukar
    rajah: '<svg viewBox="0 0 190 140" style="max-width:100%;width:220px" role="img" aria-label="Grid segi empat sama 4 baris dan 5 lajur"><g stroke="var(--c)" stroke-width="2" fill="none"><rect x="20" y="10" width="150" height="120"/><line x1="50" y1="10" x2="50" y2="130"/><line x1="80" y1="10" x2="80" y2="130"/><line x1="110" y1="10" x2="110" y2="130"/><line x1="140" y1="10" x2="140" y2="130"/><line x1="20" y1="40" x2="170" y2="40"/><line x1="20" y1="70" x2="170" y2="70"/><line x1="20" y1="100" x2="170" y2="100"/></g></svg>',
    s: "Rajah menunjukkan grid segi empat sama dengan 4 baris dan 5 lajur. Berapakah jumlah <b>semua</b> segi empat sama (pelbagai saiz) yang terdapat dalam grid itu?",
    en: "The diagram shows a square grid of 4 rows and 5 columns. How many squares of all sizes are there in the grid?",
    p: ['40', '38', '32', '20'], a: 0, topik: 'Pola & Jujukan', aras: 'sukar',
    hurai: "1×1: 4 × 5 = 20. 2×2: 3 × 4 = 12. 3×3: 2 × 3 = 6. 4×4: 1 × 2 = 2. Jumlah = <b>40</b>. (20 hanya petak kecil; 32 terhenti pada 2×2; 38 terlupa dua segi empat sama 4×4.)"
  },
  { // 16 Persamaan / ketaksamaan — sukar
    s: "Purata markah lima ujian pertama Iqbal ialah 72. Ujian keenam diberi pemberat <b>dua kali</b> ganda (dikira seperti dua ujian). Iqbal mahu purata berwajaran semua ujian sekurang-kurangnya 75. Jika markah ialah nombor bulat, berapakah markah <b>minimum</b> yang perlu diperoleh dalam ujian keenam?",
    en: "Iqbal's mean for his first five tests is 72. The sixth test counts double (like two tests). He wants a weighted mean of at least 75. If marks are whole numbers, what is the minimum mark he needs in the sixth test?",
    p: ['75', '78', '82', '83'], a: 3, topik: 'Persamaan Linear', aras: 'sukar',
    hurai: "Jumlah berwajaran = 5 × 72 + 2x, dibahagi 7 pemberat. (360 + 2x) ÷ 7 ≥ 75 → 2x ≥ 165 → x ≥ 82.5, maka markah bulat minimum = <b>83</b>. (82 dibundarkan ke bawah, tidak cukup; 78 = 75 + 3 menampung kekurangan secara salah; 75 ialah sasaran purata, bukan markah diperlukan.)"
  },
  { // 17 Simpanan — sukar (ISI)
    jenis: 'isi',
    s: "Puan Mei menyimpan RM 3 000 dalam akaun simpanan tetap dengan kadar faedah 3.5% setahun, <b>dikompaun setiap 6 bulan</b>. Berapakah jumlah <b>faedah</b> yang diperoleh selepas 2 tahun? (Jawab dalam RM, betul kepada 2 tempat perpuluhan.)",
    en: "Mrs Mei saves RM 3 000 in a fixed deposit at 3.5% per annum, compounded every 6 months. How much interest does she earn after 2 years? (Answer in RM, 2 decimal places.)",
    a: 215.58, tol: 0.01, unit: 'RM', topik: 'Peratus & Matematik Pengguna', aras: 'sukar',
    hurai: "Kadar setiap 6 bulan = 3.5% ÷ 2 = 1.75%; bilangan tempoh = 2 × 2 = 4. Nilai = 3000 × 1.0175⁴ = RM 3 215.58. Faedah = 3215.58 − 3000 = <b>RM 215.58</b>. (Ralat biasa: kompaun tahunan → RM 213.67; faedah mudah → RM 210.00.)"
  },
  { // 18 Kadar & bentuk piawai — sukar
    s: "Sebatang pili air yang bocor menitiskan setitis air setiap 2 saat. Isi padu setitis air ialah 0.05 ml. Berapakah isi padu air yang terbuang dalam setahun (365 hari)? Beri jawapan dalam bentuk piawai.",
    en: "A leaking tap drips one drop every 2 seconds. Each drop is 0.05 ml. How much water is wasted in a year (365 days)? Give the answer in standard form.",
    p: ['7.884 × 10³ L', '1.577 × 10³ L', '7.884 × 10² L', '7.884 × 10¹ L'], a: 2, topik: 'Nisbah, Kadar & Laju', aras: 'sukar',
    hurai: "Saat setahun = 365 × 24 × 3600 = 31 536 000. Titisan = 31 536 000 ÷ 2 = 15 768 000. Isi padu = 15 768 000 × 0.05 = 788 400 ml = 788.4 L = <b>7.884 × 10² L</b>. (1.577 × 10³ L lupa bahagi 2; 7.884 × 10³ dan 7.884 × 10¹ salah menukar ml kepada liter — 1 L = 1000 ml.)"
  },
  { // 19 Set / gambar rajah Venn — sukar
    rajah: '<table><tr><th>Kelab</th><th>Bilangan murid</th></tr><tr><td>Sains (S)</td><td>17</td></tr><tr><td>Matematik (M)</td><td>14</td></tr><tr><td>Robotik (R)</td><td>12</td></tr><tr><td>S dan M</td><td>6</td></tr><tr><td>S dan R</td><td>5</td></tr><tr><td>M dan R</td><td>4</td></tr><tr><td>Ketiga-tiga kelab</td><td>2</td></tr></table>',
    s: "Bagi sekumpulan 34 orang murid, maklumat keahlian mereka dalam tiga kelab ditunjukkan dalam jadual (ada murid yang tidak menyertai mana-mana kelab ini). (Contohnya, \"S dan M\" termasuk murid yang menyertai ketiga-tiga kelab.) Berapakah bilangan murid yang menyertai <b>tepat satu</b> kelab sahaja?",
    en: "For a group of 34 pupils, their membership of three clubs is shown in the table (some pupils join none of these clubs). (For example, 'S and M' includes pupils in all three clubs.) How many pupils join exactly one club?",
    p: ['13', '19', '28', '30'], a: 1, topik: 'Data & Statistik', aras: 'sukar',
    hurai: "Lukis gambar rajah Venn dari tengah: ketiga-tiga = 2. S∩M sahaja = 6 − 2 = 4; S∩R sahaja = 5 − 2 = 3; M∩R sahaja = 4 − 2 = 2. S sahaja = 17 − 4 − 3 − 2 = 8; M sahaja = 14 − 4 − 2 − 2 = 6; R sahaja = 12 − 3 − 2 − 2 = 5. Tepat satu = 8 + 6 + 5 = <b>19</b>. (13 = (17−6−5) + (14−6−4) + (12−5−4), menolak bahagian ketiga-tiga dua kali; 30 ialah murid yang menyertai sekurang-kurangnya satu kelab; 28 = 17 + 14 + 12 − 6 − 5 − 4, lupa menambah semula 2.)"
  },
  { // 20 Lokus — sukar
    rajah: '<svg viewBox="0 0 250 230" style="max-width:100%;width:280px" role="img" aria-label="Satah Cartes dengan titik A(2, 1), B(2, 7) dan P(5, 0)"><g stroke="var(--muted)" stroke-width="0.6"><path d="M30 24V200M52 24V200M74 24V200M96 24V200M118 24V200M140 24V200M162 24V200M184 24V200M206 24V200M228 24V200"/><path d="M30 200H228M30 178H228M30 156H228M30 134H228M30 112H228M30 90H228M30 68H228M30 46H228M30 24H228"/></g><g stroke="currentColor" stroke-width="1.6"><line x1="30" y1="200" x2="236" y2="200"/><line x1="30" y1="200" x2="30" y2="16"/></g><g font-size="12" fill="currentColor" text-anchor="middle"><text x="30" y="216">0</text><text x="74" y="216">2</text><text x="118" y="216">4</text><text x="162" y="216">6</text><text x="206" y="216">8</text><text x="242" y="204">x</text><text x="20" y="160">2</text><text x="20" y="116">4</text><text x="20" y="72">6</text><text x="20" y="28">8</text><text x="30" y="12">y</text></g><g fill="var(--c)"><circle cx="74" cy="178" r="4"/><circle cx="74" cy="46" r="4"/><circle cx="140" cy="200" r="4"/></g><g font-size="13" font-weight="700" fill="currentColor"><text x="80" y="174">A</text><text x="80" y="42">B</text><text x="145" y="194">P</text></g></svg>',
    s: "Rajah menunjukkan titik A(2, 1), B(2, 7) dan P(5, 0). Titik X bergerak dengan keadaan X sentiasa <b>sama jarak dari A dan B</b>, dan X juga berjarak <b>5 unit dari P</b>. Apakah koordinat semua kedudukan X yang mungkin?",
    en: "The diagram shows A(2, 1), B(2, 7) and P(5, 0). Point X is always equidistant from A and B, and X is also 5 units from P. What are all possible positions of X?",
    p: ['(5, 4) sahaja', '(2, 4) sahaja', '(5, 5) dan (5, −5)', '(2, 4) dan (8, 4)'], a: 3, topik: 'Geometri & Pengukuran', aras: 'sukar',
    hurai: "Lokus sama jarak dari A dan B ialah pembahagi dua sama serenjang AB, iaitu garis y = 4. Lokus 5 unit dari P ialah bulatan berpusat P berjejari 5. Pada y = 4: jarak tegak dari P = 4, jadi jarak mengufuk = √(5² − 4²) = 3 → x = 5 − 3 = 2 atau 5 + 3 = 8. X = <b>(2, 4) dan (8, 4)</b>. ((5, 4) hanya 4 unit dari P; (2, 4) sahaja terlepas satu titik persilangan; (5, ±5) mengabaikan syarat sama jarak dari A dan B.)"
  }
  ]
});

UKKM_PART(6, {
  id: 'eng', nama: 'Bahasa Inggeris', ikon: '📖', minit: 30, jenis: 'objektif',
  arahan: 'Read each text carefully and answer the questions that follow. Choose the best answer (A, B, C or D).',
  petikan: [
    { id: 'P1', tajuk: 'Survey Results: How Form 3 Students Spend Their Evenings', teks: `
<p>The Counselling Unit of SMK Seri Kembangan asked 120 Form 3 students to record how they spent their time between 8.00 and 11.00 p.m. on school nights for one week. The average results are shown below.</p>
<table style="border-collapse:collapse;margin:6px 0 10px">
<tr><th style="border:1px solid var(--line);padding:4px 8px;text-align:left">Activity</th><th style="border:1px solid var(--line);padding:4px 8px;text-align:left">Average time per night</th></tr>
<tr><td style="border:1px solid var(--line);padding:4px 8px">Phone and social media</td><td style="border:1px solid var(--line);padding:4px 8px">75 minutes</td></tr>
<tr><td style="border:1px solid var(--line);padding:4px 8px">Homework and revision</td><td style="border:1px solid var(--line);padding:4px 8px">50 minutes</td></tr>
<tr><td style="border:1px solid var(--line);padding:4px 8px">Watching TV</td><td style="border:1px solid var(--line);padding:4px 8px">25 minutes</td></tr>
<tr><td style="border:1px solid var(--line);padding:4px 8px">Helping at home</td><td style="border:1px solid var(--line);padding:4px 8px">15 minutes</td></tr>
<tr><td style="border:1px solid var(--line);padding:4px 8px">Reading for pleasure</td><td style="border:1px solid var(--line);padding:4px 8px">10 minutes</td></tr>
<tr><td style="border:1px solid var(--line);padding:4px 8px">Other</td><td style="border:1px solid var(--line);padding:4px 8px">5 minutes</td></tr>
</table>
<p>The counsellor, Puan Aida, said the figures were not a surprise, but they were a concern, as many students had told her that they lacked time to revise.</p>` },
    { id: 'P2', tajuk: 'Story: Not Yet, Mak', teks: `
<p>On his first night at the residential school, Danish could not sleep. The dormitory was full of strange sounds: a fan that clicked, a boy who snored, and rain on the zinc roof. At home in Kuala Krai, his mother had always woken him for school. Here, the siren went off at 5.30 a.m., and nobody was going to call his name.</p>
<p>The first few days were a blur of new routines. He forgot his name tag on Monday and lost two merit points. On Wednesday he discovered that his white shirts had turned pale blue, because he had washed them with his new sports jersey.</p>
<p>His roommate, Kumar, laughed, but not unkindly. Then he showed Danish how to sort his laundry and how to plan each day on a small whiteboard.</p>
<p>By Friday, Danish had made a checklist and stuck it on the inside of his cupboard door. When he called home that evening, his mother asked whether he wanted to come back. He thought about the clicking fan and the blue shirts. Then he said, “Not yet, Mak. I’m just getting started.”</p>` },
    { id: 'P3', tajuk: 'Article: Kelulut, Small Bees with a Big Future', teks: `
<p>Most people picture bees as insects that sting. Malaysia, however, is home to more than 30 species of stingless bee, known locally as <i>kelulut</i>. Instead of stinging, they defend their nests by biting or by sticking resin onto intruders.</p>
<p>Kelulut honey has a sour-sweet taste and is more watery than the honey of common honeybees. It is also much rarer. A single kelulut colony may produce only one or two kilograms of honey a year, while a honeybee hive can produce many times more. As a result, kelulut honey is sold at high prices, and many rural families now keep the bees in wooden boxes beside their homes as a source of extra income.</p>
<p>The bees are valuable for another reason. As they visit flowers to collect nectar, they carry pollen from one flower to another. This helps fruit trees such as durian, rambutan and starfruit to produce fruit. Some farmers report better harvests after placing kelulut boxes in their orchards.</p>
<p>Keeping kelulut is not difficult, but it requires patience. A new colony needs time to grow, and beekeepers must harvest carefully so that the bees keep enough honey to feed themselves. Colonies also suffer when nearby farms spray insecticides, which kill the very insects that the orchards depend on.</p>
<p>Researchers believe the industry could grow further, but only if forests and flowering plants are protected. Without them, the bees have nothing to feed on.</p>` }
  ],
  soalan: [
    { petikan: 'P1', topik: 'Main idea / purpose', s: 'What is the main purpose of this text?',
      p: ['To report how a group of students use their evening time', 'To ban the use of phones after 8.00 p.m. on school nights', 'To advertise a reading programme run by the Counselling Unit', 'To compare the evening habits of Form 3 and Form 5 students'], a: 0,
      hurai: `The text explains that 120 students recorded "how they spent their time between 8.00 and 11.00 p.m." and shows "The average results". No rule is announced and only Form 3 is surveyed.` },
    { petikan: 'P1', topik: 'Specific detail', s: 'On average, how long did the students spend on homework and revision each night?',
      p: ['10 minutes', '25 minutes', '75 minutes', '50 minutes'], a: 3,
      hurai: `The table shows "Homework and revision: 50 minutes". 75 minutes is the time spent on phones and social media.` },
    { petikan: 'P1', topik: 'Vocabulary in context', s: 'In “asked 120 Form 3 students to <b>record</b> how they spent their time”, the word <b>record</b> means',
      p: ['film on a camera or phone', 'write down as a note', 'achieve the best result ever', 'remember without writing anything'], a: 1,
      hurai: `The students kept a log of their activities for one week so that averages could be worked out. Here "record" means to note down, not to film or to set a record.` },
    { petikan: 'P1', topik: 'Reference', s: 'In “the figures were not a surprise, but <b>they</b> were a concern”, <b>they</b> refers to',
      p: ['the students who lacked time', 'the members of the Counselling Unit', 'the survey figures', 'the school nights'], a: 2,
      hurai: `"The figures were not a surprise, but they were a concern." The same subject, the figures, is described twice. The students are mentioned later, as the reason for her concern.` },
    { petikan: 'P1', topik: 'Inference', s: 'Which statement is supported by the information in the table?',
      p: ['Every student spent more than an hour on the phone each night.', 'Most students did not read for pleasure at all.', 'Students spent more time helping at home than watching TV.', 'On average, phone time equalled homework and TV time combined.'], a: 3,
      hurai: `Phone time was 75 minutes; homework (50) + TV (25) = 75 minutes. The table gives averages, so it cannot tell us about "every student" or "most students".` },

    { petikan: 'P2', topik: 'Main idea / purpose', s: 'What is the story mainly about?',
      p: ['A boy who wants to go home because the hostel is noisy', 'A boy learning to manage on his own at a boarding school', 'A roommate who plays tricks on a new student', 'A mother who worries about her son’s school results'], a: 1,
      hurai: `Danish struggles at first (lost merit points, blue shirts) but by Friday has "made a checklist" and decides to stay. He does not want to go home: "Not yet, Mak."` },
    { petikan: 'P2', topik: 'Specific detail', s: 'Why did Danish’s white shirts turn pale blue?',
      p: ['He washed them together with his new sports jersey.', 'He used too much soap powder in the hostel machine.', 'Kumar had put his own clothes in the same bucket.', 'The rain leaked through the zinc roof onto them.'], a: 0,
      hurai: `"His white shirts had turned pale blue, because he had washed them with his new sports jersey."` },
    { petikan: 'P2', topik: 'Vocabulary in context', s: '“The first few days were a <b>blur</b> of new routines.” This suggests that the days',
      p: ['were hard to see because his eyes were tired', 'were boring because nothing happened', 'passed too quickly to remember clearly', 'were spent mostly in the dark dormitory'], a: 2,
      hurai: `So many new things happened (the name tag, the laundry, the siren) that the days rushed past. "Blur" here is used figuratively, not about eyesight.` },
    { petikan: 'P2', topik: 'Reference', s: 'In “Danish had made a checklist and stuck <b>it</b> on the inside of his cupboard door”, <b>it</b> refers to',
      p: ['the checklist', 'the whiteboard', 'the name tag', 'the sports jersey'], a: 0,
      hurai: `Danish "made a checklist and stuck it" on the door. The whiteboard was mentioned earlier, but it was used to plan each day, not stuck on the door.` },
    { petikan: 'P2', topik: 'Inference / attitude', s: 'What does Danish’s reply, “Not yet, Mak. I’m just getting started,” show about him?',
      p: ['He plans to leave the school the following week.', 'He is upset with his mother for asking the question.', 'He no longer misses his family or his home at all.', 'He has decided to keep going after a hard start.'], a: 3,
      hurai: `He remembers the problems ("the clicking fan and the blue shirts") but still chooses to stay. Nothing suggests he has stopped missing home completely.` },

    { petikan: 'P3', topik: 'Main idea / purpose', s: 'Which statement best summarises the article?',
      p: ['Kelulut honey tastes better than the honey of common honeybees.', 'Insecticides should be banned immediately in every orchard in Malaysia.', 'Kelulut bring income and help crops, but need care and a healthy habitat.', 'Durian and rambutan trees cannot produce any fruit without kelulut boxes.'], a: 2,
      hurai: `The article covers income ("source of extra income"), pollination ("This helps fruit trees"), the need for "patience", and the need to protect "forests and flowering plants".` },
    { petikan: 'P3', topik: 'Specific detail', s: 'How do kelulut defend their nests?',
      p: ['By stinging any animal that comes near', 'By biting intruders or sticking resin onto them', 'By producing sour honey that intruders dislike', 'By moving the nest into a wooden box'], a: 1,
      hurai: `"Instead of stinging, they defend their nests by biting or by sticking resin onto intruders."` },
    { petikan: 'P3', topik: 'Vocabulary in context', s: 'In “insecticides, which kill the <b>very</b> insects that the orchards depend on”, the word <b>very</b> shows that',
      p: ['the insects are extremely small', 'a very large number of insects die', 'the insects are very dangerous to the fruit trees in orchards', 'the chemicals kill exactly the insects the farms need'], a: 3,
      hurai: `"The very ..." is used for emphasis to mean "exactly those". The insecticides harm the same bees that pollinate the orchards, which is the opposite of what farmers want.` },
    { petikan: 'P3', topik: 'Reference', s: 'In the last paragraph, <b>them</b> in “Without them, the bees have nothing to feed on” refers to',
      p: ['forests and flowering plants', 'the researchers who study kelulut', 'the insecticides sprayed on farms', 'wooden boxes'], a: 0,
      hurai: `"Only if forests and flowering plants are protected. Without them, the bees have nothing to feed on." Bees feed on nectar from flowers, not on researchers or boxes.` },
    { petikan: 'P3', topik: 'Inference', s: 'Based on the article, which farmer is most likely to have a healthy kelulut colony?',
      p: ['Pak Hamid, who takes all the honey from his boxes every month', 'Puan Siew, who sprays insecticide on her trees every week', 'Encik Bala, who keeps boxes in a flowering orchard and does not spray', 'Mak Esah, who places her boxes in a cleared field far from any trees'], a: 2,
      hurai: `Bees need flowers to feed on, they suffer when "farms spray insecticides", and beekeepers must leave "enough honey to feed themselves". Only Encik Bala meets all these needs.` }
  ]
});

// UKKM Set 06 — Ujian Keperibadian (Ya/Tidak), 100 item. Item terbalik bukan-kejujuran: 28.
UKKM_PART(6, {
  id: 'per', nama: 'Ujian Keperibadian', ikon: '🧭', minit: 30,
  arahan: "Baca setiap pernyataan dan pilih <b>Ya</b> atau <b>Tidak</b> mengikut diri anda yang sebenar. Jawab dengan jujur, logik dan konsisten; beberapa idea diulang dengan ayat berbeza. Bagi situasi asrama yang belum anda alami, jawab mengikut tindakan yang paling mungkin anda lakukan. Masa: kira-kira 18 saat bagi setiap item.",
  skala: ["Ya","Tidak"],
  item: [
    { s: "Saya menyesuaikan nada bercakap supaya rakan tidak tersinggung.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 0, hurai: "Komunikasi berhemah menjaga perasaan orang lain." },
    { s: "Saya berasa bermotivasi apabila melihat kemajuan dalam markah saya.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Motivasi daripada kemajuan menunjukkan sikap positif." },
    { s: "Saya mampu meneruskan latihan larian walaupun penat.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Ketahanan fizikal dan mental saling berkait." },
    { id: 'mb1', pasangan: 'mb2', s: "Saya menjaga kebersihan diri walaupun jadual harian sangat padat.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Kebersihan diri penting dalam kehidupan bersama." },
    { id: 'ia1', pasangan: 'ia2', s: "Saya membaca dan mengikut peraturan pertandingan dengan teliti sebelum menyertainya.", trait: "Integriti & Disiplin Diri", pos: 0, hurai: "Bersaing secara adil menunjukkan integriti." },
    { s: "Saya membiarkan rakan dipersalahkan atas kesilapan yang saya lakukan.", trait: "Integriti & Disiplin Diri", pos: 1, hurai: "Membiarkan orang lain menanggung kesalahan kita sangat menjejaskan integriti." },
    { s: "Saya mampu menerima perubahan rakan sebilik pada pertengahan tahun.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Kebolehsuaian menunjukkan kestabilan emosi." },
    { s: "Saya berasa malu dan menolak setiap kali dicalonkan untuk sebarang jawatan.", trait: "Kepimpinan & Inisiatif", pos: 1, hurai: "Pelajar MRSM digalakkan menerima peluang memimpin." },
    { s: "Saya berasa hidup saya musnah apabila gagal satu ujian kecil.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 1, hurai: "Pandangan melampau terhadap kegagalan kecil menunjukkan ketahanan yang rendah." },
    { s: "Saya tidak pernah memikirkan perkara buruk tentang orang lain.", trait: "Skala Kejujuran", pos: 1, hurai: "Fikiran negatif sekali-sekala ialah perkara biasa; mengakuinya ialah jawapan jujur." },
    { id: 'ea1', pasangan: 'ea2', s: "Saya boleh bertenang dan mencari jalan keluar apabila tersesat semasa lawatan.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Ketenangan dalam kecemasan menunjukkan kestabilan emosi." },
    { s: "Saya membiarkan sampah di bawah katil sehingga diperiksa oleh warden.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 1, hurai: "Kebersihan ruang sendiri ialah tanggungjawab harian." },
    { s: "Saya membina rutin belajar yang tetap setiap hari.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Rutin belajar menunjukkan motivasi." },
    { id: 'ka1', pasangan: 'ka2', s: "Saya memulakan tugasan kumpulan seawal mungkin supaya ada masa untuk membuat pembetulan.", trait: "Kepimpinan & Inisiatif", pos: 0, hurai: "Bertindak awal menunjukkan inisiatif dan perancangan yang baik." },
    { s: "Saya mengambil makanan lebih daripada bahagian saya di dewan selera apabila tiada orang melihat.", trait: "Integriti & Disiplin Diri", pos: 1, hurai: "Mengambil hak orang lain ialah perbuatan tidak jujur." },
    { id: 'eb1', pasangan: 'eb2', s: "Saya menerima pembetulan guru tentang kerja saya dengan hati terbuka.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Hati terbuka terhadap pembetulan menunjukkan kematangan emosi." },
    { s: "Saya mencari maklumat tambahan untuk kumpulan saya sebelum diminta oleh guru.", trait: "Kepimpinan & Inisiatif", pos: 0, hurai: "Menyediakan maklumat lebih awal menunjukkan inisiatif." },
    { s: "Saya sanggup menjadi ketua pasukan dalam pertandingan kuiz sains.", trait: "Kepimpinan & Inisiatif", pos: 0, hurai: "Menerima peranan ketua dalam pertandingan menunjukkan keyakinan." },
    { s: "Kadang-kadang saya berasa lega apabila sesuatu kelas dibatalkan.", trait: "Skala Kejujuran", pos: 0, hurai: "Perasaan ini biasa; mengakuinya lebih jujur daripada menafikannya." },
    { s: "Saya rasa topik sains di sekolah terlalu jauh daripada kehidupan saya.", trait: "Minat Ilmu, Sains & Motivasi", pos: 1, hurai: "Sains sebenarnya berkait rapat dengan kehidupan harian." },
    { s: "Saya memilih untuk berkawan dengan pelajar yang popular sahaja.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 1, hurai: "Memilih kawan berdasarkan populariti menunjukkan sikap kurang ikhlas." },
    { s: "Saya boleh menghadapi hari yang sukar tanpa melepaskan geram kepada orang lain.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Kawalan emosi menjaga hubungan baik." },
    { s: "Saya menyelaraskan kerja apabila beberapa kumpulan perlu menggunakan makmal pada masa yang sama.", trait: "Kepimpinan & Inisiatif", pos: 0, hurai: "Menyelaras sumber dengan adil ialah tugas pemimpin." },
    { id: 'sa1', pasangan: 'sa2', s: "Saya suka meneroka topik sains yang belum diajar di sekolah.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Meneroka lebih awal menunjukkan minat ilmu." },
    { s: "Saya menganggap tugasan yang sukar sebagai peluang untuk berkembang.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Pandangan positif terhadap cabaran membina daya tahan." },
    { id: 'ib1', pasangan: 'ib2', s: "Saya menyiapkan kerja yang diberi oleh guru walaupun tiada sesiapa memeriksanya.", trait: "Integriti & Disiplin Diri", pos: 0, hurai: "Disiplin sebenar ialah konsisten walaupun tiada pemantauan." },
    { s: "Ada kalanya saya berpura-pura tidak mendengar apabila dipanggil untuk membuat kerja.", trait: "Skala Kejujuran", pos: 0, hurai: "Kebanyakan orang pernah berbuat demikian; mengakuinya ialah jawapan jujur." },
    { s: "Saya menghormati barang peribadi rakan sebilik.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 0, hurai: "Menghormati hak milik orang lain mengekalkan kepercayaan." },
    { id: 'ma2', pasangan: 'ma1', s: "Saya memerlukan bantuan keluarga hampir setiap hari untuk urusan peribadi saya.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 1, hurai: "Pelajar MRSM perlu mampu mengurus diri sendiri." },
    { s: "Saya mampu menunggu keputusan peperiksaan dengan tenang.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Ketenangan menunjukkan kestabilan emosi." },
    { s: "Saya mengajak rakan sekelas membersihkan kelas selepas majlis jamuan.", trait: "Kepimpinan & Inisiatif", pos: 0, hurai: "Menggerakkan rakan untuk tanggungjawab bersama ialah ciri pemimpin." },
    { s: "Saya mengikut jadual mandi dan membasuh pakaian yang dipersetujui di dorm.", trait: "Integriti & Disiplin Diri", pos: 0, hurai: "Mematuhi jadual bersama menunjukkan disiplin dan hormat." },
    { s: "Saya menyertai kuiz atau pertandingan matematik dengan bersemangat.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Pertandingan matematik menunjukkan minat STEM." },
    { s: "Saya mengakui sumbangan rakan apabila guru memuji projek kami.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 0, hurai: "Mengiktiraf sumbangan rakan mengukuhkan kepercayaan." },
    { s: "Saya mudah tersinggung apabila rakan lupa membalas mesej saya.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 1, hurai: "Mudah tersinggung menunjukkan emosi yang rapuh." },
    { s: "Saya melaporkan kepada warden jika ada kemudahan dorm yang rosak.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Bertindak sendiri terhadap masalah asrama menunjukkan kemandirian." },
    { s: "Saya menyimpan alat makmal di tempat asal selepas digunakan.", trait: "Integriti & Disiplin Diri", pos: 0, hurai: "Disiplin menjaga peralatan memudahkan orang lain." },
    { s: "Saya mengatur tempat tidur dan loker dengan teratur pada hari pertama mendaftar.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Menguruskan diri sejak awal memudahkan penyesuaian." },
    { s: "Saya memakai tanda nama sekolah seperti yang diwajibkan.", trait: "Integriti & Disiplin Diri", pos: 0, hurai: "Mematuhi peraturan kecil menunjukkan disiplin." },
    { s: "Saya mengikuti prosedur meminta kebenaran keluar asrama dengan betul.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Mematuhi prosedur menunjukkan kesediaan hidup berasrama." },
    { s: "Saya lebih suka berada di belakang dan membiarkan orang lain mengendalikan kumpulan.", trait: "Kepimpinan & Inisiatif", pos: 1, hurai: "Calon MRSM diharap bersedia tampil memimpin apabila perlu." },
    { id: 'ba2', pasangan: 'ba1', s: "Saya yakin pandangan saya sentiasa betul, jadi saya malas mendengar hujah rakan.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 1, hurai: "Keengganan mendengar menjejaskan kerja berpasukan." },
    { s: "Apabila kumpulan saya mendapat markah rendah, saya terus melupakannya dan beralih kepada perkara lain.", trait: "Kepimpinan & Inisiatif", pos: 1, hurai: "Pemimpin menganalisis punca kegagalan supaya pasukan menjadi lebih baik." },
    { id: 'sb1', pasangan: 'sb2', s: "Saya gigih mencari punca apabila eksperimen saya gagal.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Menganalisis kegagalan eksperimen ialah sikap saintifik." },
    { s: "Saya sentiasa menunaikan setiap janji yang pernah saya buat.", trait: "Skala Kejujuran", pos: 1, hurai: "Hampir semua orang pernah termungkir janji kecil; jawapan jujur lebih dipercayai." },
    { s: "Saya membaiki sendiri barang kecil yang rosak seperti zip beg.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Kemahiran membaiki barang kecil menunjukkan berdikari." },
    { s: "Setiap kali kalah, saya langsung tidak berasa kecewa.", trait: "Skala Kejujuran", pos: 1, hurai: "Kecewa apabila kalah ialah reaksi normal; menafikannya kelihatan tidak jujur." },
    { s: "Saya mengambil tahu jika ada rakan sedorm yang kelihatan murung.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 0, hurai: "Keprihatinan membantu rakan yang menghadapi masalah." },
    { s: "Saya berjalan, bukan berlari, di koridor walaupun saya hampir lewat.", trait: "Integriti & Disiplin Diri", pos: 0, hurai: "Mematuhi peraturan keselamatan menunjukkan disiplin." },
    { s: "Saya tetap yakin pada diri walaupun ada rakan yang lebih pandai.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Keyakinan diri yang stabil penting di MRSM yang kompetitif." },
    { s: "Saya menyediakan sendiri barang untuk pertandingan luar.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Persediaan sendiri menunjukkan kemandirian." },
    { id: 'mb2', pasangan: 'mb1', s: "Apabila sibuk, saya melangkau mandi supaya dapat berehat lebih lama.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 1, hurai: "Mengabaikan kebersihan diri menjejaskan diri dan rakan sebilik." },
    { s: "Saya tidak pernah berasa takut terhadap apa-apa pun.", trait: "Skala Kejujuran", pos: 1, hurai: "Rasa takut ialah emosi normal; menafikannya kelihatan tidak jujur." },
    { s: "Saya mengatur giliran tugas memasak dalam perkhemahan kumpulan saya.", trait: "Kepimpinan & Inisiatif", pos: 0, hurai: "Mengatur tugas dengan teratur ialah kemahiran kepimpinan." },
    { s: "Saya berhenti membaca apabila menjumpai istilah sains yang sukar.", trait: "Minat Ilmu, Sains & Motivasi", pos: 1, hurai: "Mencari makna istilah sukar menunjukkan kesungguhan." },
    { s: "Saya boleh menyesuaikan diri dengan cuaca sejuk atau panas di dorm.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Kebolehsuaian membantu kehidupan asrama." },
    { s: "Saya menyesuaikan perbelanjaan apabila harga makanan di kantin naik.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Fleksibiliti kewangan menunjukkan kemandirian." },
    { s: "Saya berani bertanya soalan kepada penceramah jemputan di dewan.", trait: "Kepimpinan & Inisiatif", pos: 0, hurai: "Keberanian bersuara di khalayak menunjukkan keyakinan diri." },
    { s: "Saya menggunakan kalkulator saintifik dengan cekap untuk menyemak jawapan.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Kemahiran menggunakan alat menyokong pembelajaran." },
    { s: "Saya menerima kelemahan diri dan berusaha memperbaikinya.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Menerima kelemahan ialah langkah pertama untuk berubah." },
    { s: "Saya suka menyelesaikan masalah logik dan permainan strategi.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Permainan logik melatih pemikiran kritis." },
    { s: "Saya sedar apabila saya tertekan dan mengambil langkah untuk berehat.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Kesedaran diri membantu mengurus tekanan." },
    { s: "Saya mengharapkan ibu bapa menghantar setiap barang yang saya terlupa bawa ke asrama.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 1, hurai: "Pelajar asrama perlu membuat persediaan sendiri dengan teliti." },
    { s: "Saya pernah membuat bising semasa orang lain sedang belajar.", trait: "Skala Kejujuran", pos: 0, hurai: "Mengakui kesilapan kecil menunjukkan kejujuran." },
    { id: 'ea2', pasangan: 'ea1', s: "Jika saya terpisah daripada kumpulan semasa lawatan, saya terus menangis dan panik.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 1, hurai: "Panik menyukarkan penyelesaian masalah." },
    { s: "Saya boleh memujuk rakan-rakan untuk bersetuju dengan rancangan yang baik secara berhemah.", trait: "Kepimpinan & Inisiatif", pos: 0, hurai: "Kemahiran memujuk dengan sopan penting bagi pemimpin." },
    { id: 'eb2', pasangan: 'eb1', s: "Saya berasa malu yang teramat dan membisu sepanjang kelas apabila guru membetulkan jawapan saya.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 1, hurai: "Rasa malu yang berlebihan menghalang pembelajaran." },
    { id: 'sa2', pasangan: 'sa1', s: "Saya hanya mahu belajar perkara yang akan disoal dalam peperiksaan.", trait: "Minat Ilmu, Sains & Motivasi", pos: 1, hurai: "Belajar hanya untuk peperiksaan menyempitkan ilmu." },
    { s: "Saya mengetawakan rakan yang terjatuh di hadapan orang ramai.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 1, hurai: "Mengetawakan kemalangan rakan menyakitkan hati." },
    { s: "Saya bercakap benar walaupun kebenaran itu membuatkan saya dimarahi.", trait: "Integriti & Disiplin Diri", pos: 0, hurai: "Integriti diuji ketika kejujuran mempunyai akibat." },
    { id: 'ia2', pasangan: 'ia1', s: "Dalam pertandingan, saya mencari helah untuk menang walaupun cara itu melanggar peraturan.", trait: "Integriti & Disiplin Diri", pos: 1, hurai: "Menang secara tidak adil merosakkan integriti." },
    { s: "Saya menangguhkan kerja kerana takut hasilnya kelihatan buruk.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 1, hurai: "Bimbang berlebihan tentang kesempurnaan menghalang kemajuan." },
    { s: "Saya membantu menyelesaikan salah faham antara dua orang kawan saya.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 0, hurai: "Menjadi pendamai menunjukkan kemahiran sosial." },
    { s: "Saya bertanya tentang aplikasi sesuatu konsep dalam kehidupan sebenar.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Mengaitkan konsep dengan kehidupan mengukuhkan kefahaman." },
    { s: "Saya mengucapkan terima kasih kepada pekerja dewan selera dan pengawal keselamatan.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 0, hurai: "Berbudi bahasa kepada semua orang mencerminkan peribadi yang baik." },
    { s: "Saya mahu memahami cara tenaga elektrik dijana.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Minat terhadap fizik menunjukkan sifat ingin tahu." },
    { id: 'ma1', pasangan: 'ma2', s: "Saya mampu mengurus diri tanpa bantuan keluarga sepanjang minggu persekolahan.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Mengurus diri sendiri ialah inti kemandirian." },
    { s: "Saya sanggup menerima tugas yang kurang popular demi kumpulan.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 0, hurai: "Berkorban untuk pasukan menunjukkan semangat berpasukan." },
    { id: 'ka2', pasangan: 'ka1', s: "Walaupun saya ketua kumpulan, saya biasanya memulakan tugasan pada saat-saat akhir.", trait: "Kepimpinan & Inisiatif", pos: 1, hurai: "Pemimpin yang lewat bertindak menyusahkan seluruh pasukan." },
    { s: "Saya menilai khabar angin tentang peperiksaan secara rasional sebelum mempercayainya.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Berfikir rasional mengurangkan kebimbangan." },
    { s: "Saya menangguhkan ulang kaji dengan pelbagai alasan.", trait: "Minat Ilmu, Sains & Motivasi", pos: 1, hurai: "Menangguhkan ulang kaji menunjukkan motivasi yang rendah." },
    { id: 'ib2', pasangan: 'ib1', s: "Saya hanya membuat latihan yang saya tahu akan diperiksa oleh guru.", trait: "Integriti & Disiplin Diri", pos: 1, hurai: "Bekerja hanya ketika diperiksa menunjukkan disiplin yang rapuh." },
    { s: "Saya berasa sangat sukar mengikut waktu tidur dan bangun yang ditetapkan oleh asrama.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 1, hurai: "Penyesuaian dengan rutin asrama diperlukan." },
    { s: "Saya menyerahkan semula wang lebihan selepas membeli barang untuk kelas.", trait: "Integriti & Disiplin Diri", pos: 0, hurai: "Mengurus wang kelas dengan amanah menunjukkan integriti." },
    { s: "Saya bertengkar dengan rakan apabila saya penat dan lapar.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 1, hurai: "Kawalan emosi perlu dikekalkan walaupun penat." },
    { s: "Saya menahan diri daripada membeli barang yang saya tidak perlukan.", trait: "Integriti & Disiplin Diri", pos: 0, hurai: "Kawalan diri dalam berbelanja ialah disiplin kewangan." },
    { s: "Saya bangun lebih awal supaya sempat bersiap tanpa tergesa-gesa.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Mengurus masa pagi menunjukkan disiplin hidup berasrama." },
    { s: "Saya memotivasikan diri dengan mengingat kejayaan kecil yang pernah dicapai.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Mengingat kejayaan membina ketahanan." },
    { id: 'sb2', pasangan: 'sb1', s: "Jika eksperimen saya gagal, saya terus menyalin keputusan yang sepatutnya daripada buku.", trait: "Minat Ilmu, Sains & Motivasi", pos: 1, hurai: "Menyalin keputusan menghilangkan peluang belajar." },
    { s: "Saya mencatat pemerhatian dengan teliti semasa amali.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Pemerhatian yang teliti ialah kemahiran saintifik." },
    { id: 'ba1', pasangan: 'ba2', s: "Saya cuba melihat sesuatu masalah dari sudut pandangan rakan saya.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 0, hurai: "Memahami sudut pandangan orang lain membina empati." },
    { s: "Saya menjemput rakan sekelas yang pemalu menyertai permainan pada waktu riadah.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 0, hurai: "Sikap inklusif membina hubungan sosial yang sihat." },
    { s: "Saya mencadangkan penyelesaian, bukan sekadar merungut, apabila ada masalah di dorm.", trait: "Kepimpinan & Inisiatif", pos: 0, hurai: "Pemimpin memberi fokus kepada penyelesaian." },
    { s: "Saya berkongsi ruang belajar dengan rakan secara bertimbang rasa.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 0, hurai: "Bertimbang rasa memudahkan hidup bersama." },
    { s: "Saya mengaku kepada guru jika saya terlupa menyiapkan kerja rumah.", trait: "Integriti & Disiplin Diri", pos: 0, hurai: "Mengaku dengan jujur lebih baik daripada mereka alasan." },
    { s: "Saya meminjam barang rakan dan lambat memulangkannya walaupun dia memerlukannya.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 1, hurai: "Melengahkan pemulangan barang menyusahkan rakan." },
    { s: "Saya mengambil tahu masalah ahli kumpulan yang kerap tertinggal kerja.", trait: "Kepimpinan & Inisiatif", pos: 0, hurai: "Pemimpin prihatin terhadap ahli yang menghadapi kesukaran." },
    { s: "Saya menambah bekalan sabun dan ubat gigi sebelum kehabisan.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Memantau keperluan sendiri menunjukkan kemandirian." },
    { s: "Saya berminat membaca biografi saintis terkenal.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Belajar daripada saintis memberi inspirasi." },
    { s: "Saya tidak pernah berasa malas walaupun sehari.", trait: "Skala Kejujuran", pos: 1, hurai: "Setiap orang pernah berasa malas; jawapan jujur lebih realistik." }
  ]
});

UKKM.push({ set: 6, tajuk: 'Set 6', bahagian: ['mat', 'sains', 'eng', 'per'].map(k => B[k]).filter(Boolean) }); })();
