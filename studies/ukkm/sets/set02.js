(function () { const B = {}; const UKKM_PART = (n, b) => { B[b.id] = b; };
UKKM_PART(2, { id: 'mat', nama: 'Matematik', ikon: '🧮', minit: 30,
  arahan: 'Jawab semua 20 soalan. 18 soalan objektif (pilih A, B, C atau D) dan 2 soalan isian (taip jawapan nombor). Kalkulator saintifik dibenarkan; gunakan kertas conteng.',
  soalan: [
  { // 1 Pola — mudah
    s: "Apakah nombor seterusnya dalam jujukan berikut?<br><b>2, 5, 10, 17, 26, …</b>",
    en: "What is the next number in the sequence 2, 5, 10, 17, 26, … ?",
    p: ['35', '36', '37', '39'], a: 2, topik: 'Pola & Jujukan', aras: 'mudah',
    hurai: "Beza berturutan ialah 3, 5, 7, 9 (nombor ganjil), jadi beza seterusnya 11: 26 + 11 = <b>37</b>. (Juga, sebutan ke-n = n² + 1; 6² + 1 = 37.) 35 mengulang beza 9; 36 = 6², lupa '+1'."
  },
  { // 2 Persamaan linear — mudah
    s: "Aqil memikirkan satu nombor. Dia mendarabkan nombor itu dengan 4, menolak 6, kemudian membahagikan hasilnya dengan 2. Jawapan akhirnya ialah 15. Apakah nombor yang difikirkan oleh Aqil?",
    en: "Aqil thinks of a number, multiplies it by 4, subtracts 6, then divides the result by 2. The final answer is 15. What was his number?",
    p: ['9', '6', '5.25', '3.75'], a: 0, topik: 'Persamaan Linear', aras: 'mudah',
    hurai: "(4x − 6) ÷ 2 = 15 → 4x − 6 = 30 → 4x = 36 → x = <b>9</b>. Songsangkan langkah dari belakang: ×2, +6, ÷4. (6 = (30 − 6) ÷ 4, tolak sedangkan patut tambah; 5.25 = (15 + 6) ÷ 4, lupa songsangkan ÷2; 3.75 = 15 ÷ 4.)"
  },
  { // 3 Peratus — mudah
    s: "Harga sekilogram ikan kembung naik daripada RM 16 kepada RM 20. Berapakah peratus kenaikan harga itu?",
    en: "The price of a kilogram of mackerel rises from RM 16 to RM 20. What is the percentage increase?",
    p: ['0.25%', '4%', '20%', '25%'], a: 3, topik: 'Peratus & Matematik Pengguna', aras: 'mudah',
    hurai: "Kenaikan = RM 4. Peratus kenaikan = 4 ÷ 16 × 100% = <b>25%</b> (bahagi dengan harga ASAL). 20% = 4 ÷ 20, bahagi dengan harga baharu; 0.25% lupa darab 100; 4% mengelirukan RM 4 dengan peratus."
  },
  { // 4 Kadar — mudah (ISI)
    jenis: 'isi',
    s: "Satu resipi menggunakan 300 g tepung untuk membuat 12 biji kek cawan. Aisyah mempunyai 1 kg tepung. Berapakah bilangan <b>maksimum</b> kek cawan yang boleh dibuatnya jika bahan lain mencukupi?",
    en: "A recipe uses 300 g of flour for 12 cupcakes. Aisyah has 1 kg of flour. What is the maximum number of cupcakes she can make if other ingredients are enough?",
    a: 40, unit: 'biji', topik: 'Nisbah, Kadar & Laju', aras: 'mudah',
    hurai: "Tepung bagi sebiji = 300 ÷ 12 = 25 g. 1 kg = 1000 g. 1000 ÷ 25 = <b>40</b> biji."
  },
  { // 5 Data — mudah
    rajah: '<table><tr><th>Hari</th><th>Bilangan murid meminjam buku</th></tr><tr><td>Isnin</td><td style="text-align:left">● ● ●</td></tr><tr><td>Selasa</td><td style="text-align:left">● ● ● ● ◐</td></tr><tr><td>Rabu</td><td style="text-align:left">● ●</td></tr><tr><td>Khamis</td><td style="text-align:left">● ● ● ● ●</td></tr><tr><td>Jumaat</td><td style="text-align:left">● ◐</td></tr><tr><td colspan="2">● mewakili 8 murid &nbsp; ◐ mewakili 4 murid</td></tr></table>',
    s: "Piktograf menunjukkan bilangan murid yang meminjam buku dari pusat sumber dalam seminggu. Berapakah beza bilangan murid yang meminjam buku antara hari paling ramai dengan hari paling sedikit?",
    en: "The pictograph shows the number of pupils borrowing books in a week. What is the difference between the number of borrowers on the busiest day and on the quietest day?",
    p: ['24', '28', '32', '36'], a: 1, topik: 'Data & Statistik', aras: 'mudah',
    hurai: "Paling ramai: Khamis = 5 × 8 = 40. Paling sedikit: Jumaat = 8 + 4 = 12. Beza = 40 − 12 = <b>28</b>. (32 mengabaikan separuh simbol; 24 menganggap ◐ sebagai simbol penuh; 36 ialah bilangan pada hari Selasa.)"
  },
  { // 6 Geometri — sederhana
    rajah: '<svg viewBox="0 0 280 200" style="max-width:100%;width:300px" role="img" aria-label="Pelan tanah berbentuk L"><polygon points="40,20 160,20 160,80 250,80 250,170 40,170" fill="var(--c)" fill-opacity="0.12" stroke="var(--c)" stroke-width="3"/><g font-size="13" fill="currentColor"><text x="130" y="188">14 m</text><text x="4" y="100">10 m</text><text x="190" y="72">6 m</text><text x="166" y="55">4 m</text></g></svg>',
    s: "Rajah menunjukkan pelan sebidang tanah berbentuk L. Semua sudutnya ialah sudut tegak. Pagar akan dipasang di sekeliling tanah itu dengan kos RM 12.50 semeter. Berapakah kos memasang pagar itu?",
    en: "The diagram shows an L-shaped plot; all corners are right angles. Fencing costs RM 12.50 per metre. What is the cost of fencing the whole boundary?",
    p: ['RM 425', 'RM 550', 'RM 600', 'RM 1 450'], a: 2, topik: 'Geometri & Pengukuran', aras: 'sederhana',
    hurai: "Sisi yang tidak berlabel: atas = 14 − 6 = 8 m, kanan = 10 − 4 = 6 m. Perimeter = 14 + 10 + 8 + 4 + 6 + 6 = 48 m (sama dengan perimeter segi empat tepat 14 × 10). Kos = 48 × 12.50 = <b>RM 600</b>. (RM 425 = 34 m, hanya jumlah label; RM 550 tertinggal satu sisi 4 m; RM 1 450 guna luas 116 m².)"
  },
  { // 7 Logik — sederhana
    s: "Enam sahabat P, Q, R, S, T dan U duduk mengelilingi meja bulat dengan jarak yang sama.<br>• P duduk bertentangan dengan Q.<br>• R duduk bersebelahan dengan Q.<br>• S duduk bertentangan dengan R.<br>• T tidak duduk bersebelahan dengan P.<br>Siapakah yang duduk bertentangan dengan T?",
    en: "Six friends sit equally spaced around a round table. P is opposite Q; R is next to Q; S is opposite R; T is not next to P. Who sits opposite T?",
    p: ['P', 'R', 'S', 'U'], a: 3, topik: 'Penaakulan Logik', aras: 'sederhana',
    hurai: "Nomborkan kerusi 1–6 mengikut bulatan. P = 1, Q = 4. R bersebelahan Q: kerusi 3 (kes kerusi 5 ialah cerminan yang sama). S bertentangan R: kerusi 6. Tinggal kerusi 2 dan 5; kerusi 2 bersebelahan P, maka T = 5, U = 2. Bertentangan dengan kerusi 5 ialah kerusi 2 = <b>U</b>."
  },
  { // 8 Pola — sederhana
    s: "Rajah 1 dalam satu pola menggunakan 9 jubin, Rajah 2 menggunakan 14 jubin dan Rajah 3 menggunakan 19 jubin. Pola ini berterusan dengan cara yang sama. Berapakah bilangan jubin dalam Rajah 40?",
    en: "Figure 1 of a pattern uses 9 tiles, Figure 2 uses 14 and Figure 3 uses 19, continuing in the same way. How many tiles are in Figure 40?",
    p: ['200', '204', '209', '360'], a: 1, topik: 'Pola & Jujukan', aras: 'sederhana',
    hurai: "Beza tetap 5, jadi sebutan ke-n = 9 + 5(n − 1) = 5n + 4. Rajah 40: 5(40) + 4 = <b>204</b>. (209 = 9 + 5 × 40, tertambah satu beza; 200 = 5 × 40 tanpa pemalar; 360 = 9 × 40, menganggap kadar berkadaran.)"
  },
  { // 9 Persamaan linear — sederhana
    s: "Harga 3 batang pen dan 2 buah buku nota ialah RM 13.00. Harga 2 batang pen dan 3 buah buku nota ialah RM 14.50. Berapakah harga 2 batang pen dan 2 buah buku nota?",
    en: "3 pens and 2 notebooks cost RM 13.00; 2 pens and 3 notebooks cost RM 14.50. How much do 2 pens and 2 notebooks cost?",
    p: ['RM 11.00', 'RM 13.75', 'RM 22.00', 'RM 27.50'], a: 0, topik: 'Persamaan Linear', aras: 'sederhana',
    hurai: "Tambah dua persamaan: 5 pen + 5 buku = RM 27.50, maka 1 pen + 1 buku = RM 5.50, dan 2 pen + 2 buku = <b>RM 11.00</b>. (Semakan: pen = RM 2, buku = RM 3.50.) RM 27.50 ialah harga 5 set; RM 13.75 ialah purata dua jumlah; RM 22.00 = 27.50 × 4/5, salah nisbah."
  },
  { // 10 Peratus — sederhana
    s: "Selepas diberi diskaun 15%, harga sebuah jam tangan ialah RM 170. Berapakah harga asal jam tangan itu?",
    en: "After a 15% discount, a watch costs RM 170. What was its original price?",
    p: ['RM 144.50', 'RM 185.00', 'RM 195.50', 'RM 200.00'], a: 3, topik: 'Peratus & Matematik Pengguna', aras: 'sederhana',
    hurai: "RM 170 ialah 85% daripada harga asal. Harga asal = 170 ÷ 0.85 = <b>RM 200</b>. (RM 195.50 = 170 × 1.15, menambah 15% pada harga baharu — 15% sepatutnya daripada harga asal; RM 144.50 = 170 × 0.85; RM 185 = 170 + 15.)"
  },
  { // 11 Laju — sederhana
    s: "Encik Rahman memandu sejauh 200 km dari Ipoh ke Kuala Lumpur dengan laju purata 100 km/j. Dalam perjalanan pulang melalui jalan yang sama, hujan lebat menyebabkan laju puratanya hanya 80 km/j. Berapakah laju purata bagi keseluruhan perjalanan pergi dan balik?",
    en: "Mr Rahman drives 200 km from Ipoh to Kuala Lumpur at an average speed of 100 km/h and returns on the same road at 80 km/h. What is his average speed for the whole round trip?",
    p: ['88.89 km/j', '90.00 km/j', '100.00 km/j', '180.00 km/j'], a: 0, topik: 'Nisbah, Kadar & Laju', aras: 'sederhana',
    hurai: "Masa pergi = 200 ÷ 100 = 2 j; masa balik = 200 ÷ 80 = 2.5 j. Laju purata = jumlah jarak ÷ jumlah masa = 400 ÷ 4.5 = <b>88.89 km/j</b>. (90 ialah purata dua laju — salah kerana masa balik lebih lama; 100 menganggap perjalanan balik juga 2 j; 180 menjumlahkan laju.)"
  },
  { // 12 Kebarangkalian — sederhana
    s: "Sebuah kotak mengandungi 4 biji guli merah, 6 biji guli biru dan beberapa biji guli hijau. Sebiji guli dipilih secara rawak. Kebarangkalian mendapat guli biru ialah 1/3. Berapakah kebarangkalian mendapat guli <b>hijau</b>?",
    en: "A box has 4 red, 6 blue and some green marbles. One marble is picked at random. The probability of blue is 1/3. What is the probability of green?",
    p: ['2/9', '1/3', '4/9', '2/3'], a: 2, topik: 'Data & Statistik', aras: 'sederhana',
    hurai: "6 ÷ jumlah = 1/3 → jumlah = 18 biji. Hijau = 18 − 4 − 6 = 8. P(hijau) = 8/18 = <b>4/9</b>. (2/9 ialah P(merah); 1/3 menganggap setiap warna sama peluang; 2/3 ialah P(bukan biru).)"
  },
  { // 13 Geometri — sederhana
    rajah: '<svg viewBox="0 0 320 200" style="max-width:100%;width:320px" role="img" aria-label="Dua garis selari dengan sudut 38 darjah dan 47 darjah"><g stroke="currentColor" stroke-width="2"><line x1="20" y1="40" x2="300" y2="40"/><line x1="20" y1="160" x2="300" y2="160"/></g><g stroke="currentColor" stroke-width="2" fill="none"><path d="M246 34l8 6-8 6M256 34l8 6-8 6"/><path d="M246 154l8 6-8 6M256 154l8 6-8 6"/></g><polyline points="60,40 136.8,100 80.85,160" fill="none" stroke="var(--c)" stroke-width="3"/><g font-size="13" fill="currentColor"><text x="90" y="56">38°</text><text x="104" y="154">47°</text><text x="110" y="105" font-style="italic">x</text><text x="52" y="32">A</text><text x="142" y="104">X</text><text x="72" y="178">B</text><text x="22" y="32">P</text><text x="290" y="32">Q</text><text x="22" y="180">R</text><text x="290" y="180">S</text></g></svg>',
    s: "Dalam rajah, PQ selari dengan RS. Titik A terletak pada PQ dan titik B terletak pada RS. ∠XAQ = 38° dan ∠XBS = 47°. Cari nilai x, iaitu ∠AXB.",
    en: "In the diagram PQ is parallel to RS, A is on PQ and B is on RS. Angle XAQ = 38° and angle XBS = 47°. Find x, the angle AXB.",
    p: ['85°', '95°', '133°', '142°'], a: 0, topik: 'Geometri & Pengukuran', aras: 'sederhana',
    hurai: "Lukis garis melalui X selari dengan PQ. Sudut selang-seli: bahagian atas = 38°, bahagian bawah = 47°. x = 38° + 47° = <b>85°</b>. (95° = 180° − 85°, menganggap A, X, B membentuk segi tiga dengan sudut 38° dan 47°; 142° = 180° − 38°.)"
  },
  { // 14 Logik — sederhana
    s: "Sebuah laci mengandungi 10 stoking hitam, 8 stoking putih dan 6 stoking kelabu yang bercampur. Dalam gelap, berapakah bilangan <b>minimum</b> stoking yang perlu diambil untuk memastikan sekurang-kurangnya 2 stoking <b>putih</b> diperoleh?",
    en: "A drawer holds 10 black, 8 white and 6 grey socks, mixed. In the dark, what is the minimum number of socks you must take to be sure of getting at least 2 white socks?",
    p: ['4', '16', '17', '18'], a: 3, topik: 'Penaakulan Logik', aras: 'sederhana',
    hurai: "Kes paling malang: semua 10 hitam dan 6 kelabu diambil dahulu (16 stoking), kemudian barulah 2 putih. Minimum = 16 + 2 = <b>18</b>. (4 hanya menjamin sepasang stoking SEBARANG warna; 17 hanya menjamin sekurang-kurangnya SATU stoking putih; 16 belum menjamin sebarang stoking putih.)"
  },
  { // 15 Pola — sukar (ISI)
    jenis: 'isi',
    s: "Jujukan berikut berterusan mengikut pola yang sama:<br><b>1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, …</b><br>(nombor n ditulis sebanyak n kali). Apakah sebutan ke-100?",
    en: "The sequence 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, … continues (the number n is written n times). What is the 100th term?",
    a: 14, topik: 'Pola & Jujukan', aras: 'sukar',
    hurai: "Sebutan terakhir bagi nombor n berada pada kedudukan 1 + 2 + … + n = n(n + 1)/2. n = 13 → kedudukan 91; n = 14 → kedudukan 105. Kedudukan 92 hingga 105 ialah 14, maka sebutan ke-100 = <b>14</b>."
  },
  { // 16 Ketaksamaan — sukar
    s: "Pelan telefon A mengenakan RM 30 sebulan dan 10 sen seminit panggilan. Pelan B mengenakan RM 12 sebulan dan 25 sen seminit. Berapakah bilangan minit (nombor bulat) <b>terkecil</b> sebulan supaya pelan A lebih murah daripada pelan B?",
    en: "Phone plan A costs RM 30 a month plus 10 sen per minute; plan B costs RM 12 a month plus 25 sen per minute. What is the smallest whole number of minutes per month for which plan A is cheaper than plan B?",
    p: ['72', '120', '121', '180'], a: 2, topik: 'Persamaan Linear', aras: 'sukar',
    hurai: "30 + 0.10m < 12 + 0.25m → 18 < 0.15m → m > 120. Nombor bulat terkecil = <b>121</b>. (Pada 120 minit kedua-dua pelan sama, RM 42, jadi A belum lebih murah; 72 = 18 ÷ 0.25 dan 180 = 18 ÷ 0.10 hanya menggunakan satu kadar.)"
  },
  { // 17 Matematik pengguna — sukar
    s: "Jumlah harga makanan di sebuah restoran ialah RM 80. Caj perkhidmatan 10% dikenakan, kemudian cukai 6% dikenakan ke atas jumlah selepas caj perkhidmatan. Kamal mempunyai baucar RM 10 yang ditolak daripada harga makanan <b>sebelum</b> caj dan cukai. Berapakah jumlah yang perlu dibayar?",
    en: "A restaurant food bill is RM 80. A 10% service charge is added, then 6% tax is charged on the total after the service charge. Kamal's RM 10 voucher is deducted from the food price before the charge and tax. How much must he pay?",
    p: ['RM 81.20', 'RM 81.62', 'RM 82.80', 'RM 83.28'], a: 1, topik: 'Peratus & Matematik Pengguna', aras: 'sukar',
    hurai: "Selepas baucar: 80 − 10 = RM 70. Caj 10%: 70 × 1.10 = RM 77. Cukai 6%: 77 × 1.06 = <b>RM 81.62</b>. (RM 81.20 = 70 × 1.16, menambah 16% sekali gus; RM 83.28 menolak baucar selepas caj dan cukai; RM 82.80 = 80 × 1.16 − 10.)"
  },
  { // 18 Laju — sukar
    s: "Bandar P dan bandar Q terletak 310 km antara satu sama lain. Kereta A bertolak dari P ke Q pada pukul 8:00 pagi dengan laju 80 km/j. Kereta B bertolak dari Q ke P melalui jalan yang sama pada pukul 8:30 pagi dengan laju 100 km/j. Pada pukul berapakah kedua-dua kereta itu bertemu?",
    en: "Towns P and Q are 310 km apart. Car A leaves P for Q at 8:00 a.m. at 80 km/h. Car B leaves Q for P on the same road at 8:30 a.m. at 100 km/h. At what time do they meet?",
    p: ['9:43 pagi', '10:00 pagi', '10:13 pagi', '10:30 pagi'], a: 1, topik: 'Nisbah, Kadar & Laju', aras: 'sukar',
    hurai: "Pada 8:30, A sudah bergerak 80 × 0.5 = 40 km; baki jarak = 270 km. Kedua-duanya mendekati pada 80 + 100 = 180 km/j. Masa = 270 ÷ 180 = 1.5 j → 8:30 + 1 j 30 min = <b>10:00 pagi</b>. (9:43 = 8:00 + 310/180 j, mengabaikan B lewat bertolak; 10:13 = 8:30 + 310/180 j, mengabaikan jarak yang sudah dilalui A.)"
  },
  { // 19 Statistik — sukar
    s: "Enam nombor disusun secara menaik: <b>4, 7, 10, x, 22, 27</b>. Median bagi set data itu ialah 12. Berapakah min set data itu?",
    en: "Six numbers in ascending order: 4, 7, 10, x, 22, 27. The median is 12. What is the mean?",
    p: ['12.00', '13.67', '14.00', '15.50'], a: 2, topik: 'Data & Statistik', aras: 'sukar',
    hurai: "Median = (10 + x) ÷ 2 = 12 → x = 14. Jumlah = 4 + 7 + 10 + 14 + 22 + 27 = 84. Min = 84 ÷ 6 = <b>14</b>. (13.67 menganggap x = median = 12; 12 ialah median, bukan min; 15.50 = (4 + 27) ÷ 2, titik tengah julat.)"
  },
  { // 20 Trigonometri — sukar
    rajah: '<svg viewBox="0 0 280 200" style="max-width:100%;width:300px" role="img" aria-label="Pemerhati dan menara"><line x1="10" y1="170" x2="270" y2="170" stroke="currentColor" stroke-width="2"/><line x1="30" y1="170" x2="30" y2="150" stroke="currentColor" stroke-width="4"/><rect x="202" y="24" width="16" height="146" fill="var(--c)" fill-opacity="0.25" stroke="var(--c)" stroke-width="2"/><line x1="30" y1="150" x2="210" y2="24" stroke="var(--c)" stroke-width="2"/><line x1="30" y1="150" x2="210" y2="150" stroke="var(--muted)" stroke-width="1.5" stroke-dasharray="5 4"/><path d="M70 150 A40 40 0 0 0 62.8 127.1" fill="none" stroke="currentColor" stroke-width="1.5"/><g font-size="13" fill="currentColor"><text x="76" y="144">35°</text><text x="105" y="188">40 m</text><text x="36" y="166">1.5 m</text><text x="180" y="18">menara</text></g></svg>',
    s: "Mata seorang pemerhati berada 1.5 m di atas tanah mengufuk dan dia berdiri 40 m dari kaki sebuah menara. Sudut di antara garis pandangannya ke puncak menara dengan garis mengufuk ialah 35°. Berapakah tinggi menara itu? (Beri jawapan betul kepada 2 tempat perpuluhan.)",
    en: "An observer's eyes are 1.5 m above level ground, 40 m from the foot of a tower. The angle between the line of sight to the top and the horizontal is 35°. How tall is the tower (2 d.p.)?",
    p: ['22.94 m', '24.44 m', '28.01 m', '29.51 m'], a: 3, topik: 'Geometri & Pengukuran', aras: 'sukar',
    hurai: "Bahagian di atas aras mata = 40 × tan 35° = 40 × 0.7002 = 28.01 m. Tinggi menara = 28.01 + 1.5 = <b>29.51 m</b>. (28.01 m lupa ketinggian mata; 24.44 m guna sin 35° (40 × 0.5736 + 1.5); 22.94 m guna sin tanpa tambah 1.5 m.)"
  }
  ]
});

UKKM_PART(2, { id: 'sains', nama: 'Sains', ikon: '🔬', minit: 30,
  arahan: 'Jawab semua 30 soalan. Pilih satu jawapan yang paling tepat bagi setiap soalan.',
  soalan: [
  { topik: 'Biologi: Sel', s: `Sel otot jantung mengandungi mitokondria yang sangat banyak. Apakah sebabnya?`,
    en: `Heart muscle cells contain a very large number of mitochondria. Why?`,
    p: ['Untuk menyimpan air dan garam mineral', 'Untuk menjalankan respirasi sel dan membebaskan banyak tenaga', 'Untuk mengawal semua aktiviti sel', 'Untuk menghasilkan makanan melalui fotosintesis'], a: 1,
    hurai: `Mitokondria ialah tapak respirasi sel yang membebaskan tenaga. Otot jantung mengecut tanpa henti, jadi memerlukan banyak tenaga.` },
  { topik: 'Biologi: Sel', s: `Antara organisma berikut, yang manakah ialah organisma unisel?`,
    en: `Which of the following is a unicellular organism?`,
    p: ['<i>Hydra</i>', '<i>Amoeba</i>', 'Cendawan', '<i>Spirogyra</i>'], a: 1,
    hurai: `<i>Amoeba</i> terdiri daripada satu sel sahaja yang menjalankan semua proses hidup. <i>Hydra</i>, cendawan dan <i>Spirogyra</i> ialah organisma multisel.` },
  { topik: 'Biologi: Nutrisi', s: `Sebahagian besar ileum seorang pesakit terpaksa dibuang melalui pembedahan. Apakah kesan utama yang mungkin dialaminya?`,
    en: `A large part of a patient's ileum has to be removed by surgery. What is the main effect he is likely to experience?`,
    p: ['Hempedu tidak dapat dihasilkan', 'Penghadaman protein di dalam perut terhenti', 'Penyerapan makanan tercerna berkurang, menyebabkan berat badan menurun', 'Gigi tidak dapat mengunyah makanan'], a: 2,
    hurai: `Ileum mempunyai banyak vilus untuk menyerap hasil pencernaan seperti glukosa dan asid amino. Tanpa sebahagian besar ileum, kurang makanan diserap ke dalam darah.` },
  { topik: 'Biologi: Nutrisi', s: `Dua sampel makanan, X dan Y, diuji. Keputusan ditunjukkan dalam jadual. Apakah kandungan utama X dan Y?`,
    en: `Two food samples, X and Y, are tested. The results are shown in the table. What do X and Y mainly contain?`,
    rajah: `<table><tr><th>Sampel</th><th>Ujian iodin</th><th>Ujian Benedict (dipanaskan)</th></tr><tr><td>X</td><td>Biru tua</td><td>Kekal biru</td></tr><tr><td>Y</td><td>Kekal perang</td><td>Mendakan merah bata</td></tr></table>`,
    p: ['X: kanji; Y: glukosa', 'X: glukosa; Y: kanji', 'X: protein; Y: lemak', 'X: kanji; Y: protein'], a: 0,
    hurai: `Larutan iodin bertukar menjadi biru tua dengan kanji. Larutan Benedict membentuk mendakan merah bata apabila dipanaskan dengan gula penurun seperti glukosa.` },
  { topik: 'Biologi: Rangsangan dan Gerak Balas', s: `Tangan Siti tersentuh cerek panas dan dia menarik tangannya serta-merta sebelum sempat berfikir. Apakah laluan impuls saraf dalam tindakan ini?`,
    en: `Siti touches a hot kettle and pulls her hand away immediately, before she can think. What is the path of the nerve impulse in this action?`,
    p: ['Reseptor → neuron motor → neuron perantaraan → neuron deria → efektor', 'Efektor → neuron deria → otak → neuron motor → reseptor', 'Reseptor → neuron deria → otak → neuron motor → efektor', 'Reseptor → neuron deria → neuron perantaraan → neuron motor → efektor'], a: 3,
    hurai: `Ini tindakan refleks. Impuls bergerak dari reseptor kulit melalui neuron deria ke neuron perantaraan di saraf tunjang, kemudian melalui neuron motor ke otot (efektor) tanpa menunggu keputusan otak.` },
  { topik: 'Biologi: Rangsangan dan Gerak Balas', s: `Hafiz dapat membaca buku dengan jelas tetapi tulisan di papan putih kelihatan kabur. Apakah kecacatan penglihatannya dan jenis kanta yang membetulkannya?`,
    en: `Hafiz can read a book clearly, but writing on the whiteboard looks blurred. What is his sight defect and which lens corrects it?`,
    p: ['Rabun dekat; kanta cembung', 'Rabun jauh; kanta cembung', 'Rabun jauh; kanta cekung', 'Rabun dekat; kanta cekung'], a: 2,
    hurai: `Rabun jauh: imej objek jauh terbentuk di hadapan retina. Kanta cekung mencapahkan cahaya supaya imej terbentuk tepat pada retina.` },
  { topik: 'Biologi: Pengangkutan', s: `Mengapakah dinding otot ventrikel kiri jantung lebih tebal daripada dinding ventrikel kanan?`,
    en: `Why is the muscular wall of the left ventricle thicker than that of the right ventricle?`,
    p: ['Ventrikel kiri mengepam darah ke seluruh badan, jadi memerlukan tekanan yang lebih tinggi', 'Ventrikel kiri menerima darah terdeoksigen dari seluruh badan', 'Ventrikel kiri mengepam darah ke peparu sahaja', 'Ventrikel kiri menyimpan lebih banyak darah untuk kecemasan'], a: 0,
    hurai: `Ventrikel kiri mengepam darah beroksigen melalui aorta ke seluruh badan, jadi perlu menghasilkan tekanan tinggi. Ventrikel kanan hanya mengepam darah ke peparu yang berdekatan.` },
  { topik: 'Biologi: Pembiakan', s: `Pokok padi didebungakan oleh angin. Ciri bunga manakah membantu pendebungaan oleh angin?`,
    en: `Paddy plants are wind-pollinated. Which flower feature helps wind pollination?`,
    p: ['Stigma berbulu dan terjulur keluar dari bunga', 'Petal berwarna terang dan berbau wangi', 'Menghasilkan banyak nektar', 'Butir debunga besar dan melekit'], a: 0,
    hurai: `Stigma yang berbulu dan terjulur keluar mudah memerangkap debunga ringan yang dibawa angin. Petal terang, bau wangi, nektar dan debunga melekit ialah ciri bunga yang didebungakan oleh serangga.` },
  { topik: 'Biologi: Kesihatan Manusia', s: `Tiga piring Petri berisi agar nutrien steril disediakan. Piring P disentuh dengan jari yang tidak dibasuh, piring Q disentuh dengan jari yang dibasuh dengan sabun, dan piring R tidak disentuh. Semua piring ditutup dan disimpan selama 3 hari. Apakah tujuan piring R?`,
    en: `Three Petri dishes of sterile nutrient agar are prepared. Dish P is touched with unwashed fingers, dish Q with fingers washed with soap, and dish R is not touched. All dishes are covered and kept for 3 days. What is the purpose of dish R?`,
    p: ['Untuk membiakkan lebih banyak bakteria', 'Untuk menguji keberkesanan sabun', 'Untuk membekalkan nutrien kepada piring lain', 'Sebagai kawalan untuk menunjukkan bahawa agar tidak tercemar tanpa sentuhan'], a: 3,
    hurai: `R ialah kawalan. Jika R kekal tanpa koloni, maka koloni dalam P dan Q pasti berasal daripada jari, bukan daripada agar atau udara.` },

  { topik: 'Ekologi: Biodiversiti', s: `Tumbuhan X mempunyai daun dengan urat selari, akar serabut dan biji benih dengan satu kotiledon. Tumbuhan manakah mungkin X?`,
    en: `Plant X has leaves with parallel veins, fibrous roots and seeds with one cotyledon. Which plant could be X?`,
    p: ['Pokok kacang tanah', 'Pokok jagung', 'Pokok bunga raya', 'Pokok rambutan'], a: 1,
    hurai: `Urat daun selari, akar serabut dan satu kotiledon ialah ciri monokotiledon seperti jagung. Kacang tanah, bunga raya dan rambutan ialah dikotiledon.` },
  { topik: 'Ekologi: Ekosistem', s: `Liken terdiri daripada alga dan kulat yang hidup bersama. Alga menghasilkan makanan melalui fotosintesis, manakala kulat menyerap air dan melindungi alga. Apakah jenis interaksi ini?`,
    en: `A lichen consists of an alga and a fungus living together. The alga makes food by photosynthesis, while the fungus absorbs water and protects the alga. What type of interaction is this?`,
    p: ['Parasitisme', 'Komensalisme', 'Mutualisme', 'Persaingan'], a: 2,
    hurai: `Kedua-dua organisma mendapat manfaat daripada hubungan ini, maka ia ialah mutualisme. Dalam komensalisme hanya satu pihak mendapat manfaat tanpa merugikan pihak lain.` },
  { topik: 'Ekologi: Ekosistem', s: `Dalam rantai makanan Fitoplankton → Zooplankton → Ikan bilis → Ikan tongkol, fitoplankton menyimpan 10 000 kJ tenaga. Jika hanya 10% tenaga dipindahkan dari satu aras trofik ke aras berikutnya, berapakah tenaga yang diterima oleh ikan tongkol?`,
    en: `In the food chain Phytoplankton → Zooplankton → Anchovy → Tuna, the phytoplankton store 10 000 kJ of energy. If only 10% of the energy is passed from one trophic level to the next, how much energy reaches the tuna?`,
    p: ['10 kJ', '100 kJ', '1000 kJ', '3000 kJ'], a: 0,
    hurai: `10 000 kJ → 1000 kJ (zooplankton) → 100 kJ (ikan bilis) → 10 kJ (ikan tongkol). Tenaga berkurang pada setiap aras kerana digunakan untuk respirasi dan hilang sebagai haba.` },

  { topik: 'Kimia: Jirim', s: `Mengapakah gas mudah dimampatkan tetapi pepejal tidak?`,
    en: `Why can a gas be compressed easily but a solid cannot?`,
    p: ['Zarah gas lebih ringan daripada zarah pepejal', 'Zarah gas bergerak lebih perlahan', 'Zarah gas lebih kecil daripada zarah pepejal', 'Ruang antara zarah gas sangat besar'], a: 3,
    hurai: `Menurut teori kinetik, zarah gas berjauhan antara satu sama lain, jadi ruang antara zarah boleh dikurangkan. Zarah pepejal tersusun rapat, maka hampir tiada ruang untuk dimampatkan.` },
  { topik: 'Kimia: Jadual Berkala', s: `Mentol lampu berfilamen diisi dengan gas argon. Apakah sebabnya?`,
    en: `Filament light bulbs are filled with argon gas. Why?`,
    p: ['Argon membekalkan oksigen untuk nyalaan', 'Argon ialah gas adi yang lengai dan tidak bertindak balas dengan filamen yang panas', 'Argon mengalirkan elektrik dengan baik', 'Argon bertindak balas dengan filamen untuk menghasilkan cahaya'], a: 1,
    hurai: `Argon dalam Kumpulan 18 (gas adi) adalah lengai. Filamen yang sangat panas tidak teroksida atau terbakar di dalam argon, jadi mentol tahan lebih lama.` },
  { topik: 'Kimia: Udara', s: `Tiga batang lilin yang sama dinyalakan dan ditutup serentak dengan balang gas yang berlainan isi padu. Masa lilin terus menyala direkodkan dalam jadual. Apakah inferens yang paling sesuai?`,
    en: `Three identical candles are lit and covered at the same time with gas jars of different volumes. The time each candle keeps burning is recorded in the table. What is the most suitable inference?`,
    rajah: `<table><tr><th>Isi padu balang (cm³)</th><td>250</td><td>500</td><td>1000</td></tr><tr><th>Masa lilin menyala (s)</th><td>12</td><td>25</td><td>49</td></tr></table>`,
    p: ['Lilin menghasilkan lebih banyak haba di dalam balang besar', 'Balang kecil mengandungi lebih banyak karbon dioksida pada awalnya', 'Balang yang lebih besar mengandungi lebih banyak oksigen untuk menyokong pembakaran', 'Lilin terbakar lebih perlahan di dalam balang kecil'], a: 2,
    hurai: `Pembakaran memerlukan oksigen. Balang yang lebih besar mengandungi lebih banyak udara, maka lebih banyak oksigen, jadi lilin menyala lebih lama.` },
  { topik: 'Kimia: Air dan Larutan', s: `Faktor manakah TIDAK meningkatkan kadar penyejatan air daripada pakaian basah yang dijemur?`,
    en: `Which factor does NOT increase the rate at which water evaporates from wet clothes hung out to dry?`,
    p: ['Suhu persekitaran yang tinggi', 'Tiupan angin', 'Pakaian dibentangkan dengan luas', 'Kelembapan udara yang tinggi'], a: 3,
    hurai: `Udara yang lembap sudah mengandungi banyak wap air, jadi kadar penyejatan menjadi perlahan. Suhu tinggi, angin dan luas permukaan yang besar mempercepat penyejatan.` },
  { topik: 'Kimia: Asid dan Alkali', s: `Pak Mat mendapati tanah ladangnya mempunyai pH 4.5 dan tanamannya tidak tumbuh dengan baik. Bahan manakah sesuai ditaburkan untuk membetulkan keadaan ini?`,
    en: `Pak Mat finds that his farm soil has a pH of 4.5 and his crops are not growing well. Which substance is suitable to spread on the soil to correct this?`,
    p: ['Kapur mati (kalsium hidroksida)', 'Baja amonium sulfat', 'Cuka', 'Garam biasa'], a: 0,
    hurai: `pH 4.5 bermaksud tanah berasid. Kapur mati ialah alkali yang meneutralkan keasidan tanah; cuka menambah keasidan dan garam biasa neutral.` },
  { topik: 'Kimia: Kereaktifan Logam', s: `Logam manakah TIDAK dapat diekstrak daripada oksidanya dengan memanaskan oksida itu bersama karbon?`,
    en: `Which metal can NOT be extracted from its oxide by heating the oxide with carbon?`,
    p: ['Besi', 'Zink', 'Plumbum', 'Aluminium'], a: 3,
    hurai: `Karbon hanya dapat menyingkirkan oksigen daripada oksida logam yang kurang reaktif daripada karbon. Aluminium lebih reaktif daripada karbon, jadi diekstrak secara elektrolisis.` },
  { topik: 'Kimia: Termokimia', s: `Empat bahan dicampurkan secara berasingan dengan air. Suhu awal dan suhu akhir campuran direkodkan dalam jadual. Bahan manakah mengalami proses eksotermik?`,
    en: `Four substances are mixed separately with water. The initial and final temperatures are recorded in the table. Which substance undergoes an exothermic process?`,
    rajah: `<table><tr><th>Bahan</th><th>Suhu awal (°C)</th><th>Suhu akhir (°C)</th></tr><tr><td>P</td><td>28.0</td><td>22.5</td></tr><tr><td>Q</td><td>28.0</td><td>36.0</td></tr><tr><td>R</td><td>28.0</td><td>28.0</td></tr><tr><td>S</td><td>28.0</td><td>24.0</td></tr></table>`,
    p: ['P', 'Q', 'R', 'S'], a: 1,
    hurai: `Proses eksotermik membebaskan haba, jadi suhu campuran meningkat. Hanya Q menunjukkan kenaikan suhu; P dan S endotermik, manakala R tiada perubahan haba yang ketara.` },

  { topik: 'Fizik: Keelektrikan', s: `Rajah menunjukkan perintang 6 Ω dan 3 Ω yang disambung secara selari kepada bateri 12 V. Berapakah bacaan ammeter?`,
    en: `The diagram shows a 6 Ω and a 3 Ω resistor connected in parallel to a 12 V battery. What is the ammeter reading?`,
    rajah: `<svg viewBox="0 0 420 240" style="max-width:420px" role="img" aria-label="Litar selari dua perintang"><g stroke="currentColor" stroke-width="2" fill="none"><path d="M60 120 V40 H182"/><path d="M218 40 H306"/><path d="M334 40 H360 V120"/><line x1="182" y1="22" x2="182" y2="58"/><line x1="192" y1="30" x2="192" y2="50" stroke-width="4"/><path d="M192 40 H208"/><line x1="208" y1="22" x2="208" y2="58"/><line x1="218" y1="30" x2="218" y2="50" stroke-width="4"/><circle cx="320" cy="40" r="14"/><path d="M60 120 H180"/><rect x="180" y="108" width="60" height="24"/><path d="M240 120 H360"/><path d="M60 120 V195 H180"/><rect x="180" y="183" width="60" height="24"/><path d="M240 195 H360 V120"/></g><circle cx="60" cy="120" r="4" fill="currentColor"/><circle cx="360" cy="120" r="4" fill="currentColor"/><g font-size="14" fill="currentColor" text-anchor="middle"><text x="200" y="80">12 V</text><text x="320" y="45" font-weight="700">A</text><text x="210" y="100">6 Ω</text><text x="210" y="230">3 Ω</text></g></svg>`,
    p: ['1.3 A', '2.0 A', '4.0 A', '6.0 A'], a: 3,
    hurai: `Dalam litar selari, voltan setiap cabang = 12 V. Arus cabang = 12/6 + 12/3 = 2 + 4 = 6.0 A (atau rintangan berkesan 2 Ω, I = 12/2 = 6.0 A).` },
  { topik: 'Fizik: Keelektrikan', s: `Sebatang rod politena digosok dengan kain wul dan rod itu menjadi bercas negatif. Apakah yang berlaku semasa proses menggosok?`,
    en: `A polythene rod is rubbed with a woollen cloth and becomes negatively charged. What happens during rubbing?`,
    p: ['Proton dipindahkan dari rod ke kain wul', 'Proton dipindahkan dari kain wul ke rod', 'Elektron dipindahkan dari kain wul ke rod', 'Elektron dipindahkan dari rod ke kain wul'], a: 2,
    hurai: `Hanya elektron yang boleh berpindah semasa geseran; proton kekal dalam nukleus. Rod menerima elektron daripada kain wul lalu menjadi bercas negatif.` },
  { topik: 'Fizik: Daya dan Gerakan', s: `Seorang angkasawan berjisim 60 kg mendarat di Bulan. Kekuatan medan graviti di Bulan ialah 1.6 N kg⁻¹. Berapakah jisim dan berat angkasawan itu di Bulan?`,
    en: `A 60 kg astronaut lands on the Moon. The gravitational field strength on the Moon is 1.6 N kg⁻¹. What are the astronaut's mass and weight on the Moon?`,
    p: ['Jisim 60 kg; berat 96 N', 'Jisim 10 kg; berat 96 N', 'Jisim 60 kg; berat 600 N', 'Jisim 10 kg; berat 16 N'], a: 0,
    hurai: `Jisim ialah kuantiti jirim dan tidak berubah di mana-mana. Berat = jisim × kekuatan medan graviti = 60 × 1.6 = 96 N.` },
  { topik: 'Fizik: Haba', s: `Dua tin yang sama saiz, satu bercat hitam pudar dan satu lagi putih berkilat, diisi dengan air panas yang sama isi padu dan suhu. Suhu air selepas 15 minit ditunjukkan dalam jadual. Apakah kesimpulan eksperimen ini?`,
    en: `Two cans of the same size, one painted dull black and the other shiny white, are filled with the same volume of hot water at the same temperature. The water temperature after 15 minutes is shown in the table. What is the conclusion?`,
    rajah: `<table><tr><th>Tin</th><th>Suhu awal (°C)</th><th>Suhu selepas 15 minit (°C)</th></tr><tr><td>Hitam pudar</td><td>80</td><td>56</td></tr><tr><td>Putih berkilat</td><td>80</td><td>68</td></tr></table>`,
    p: ['Permukaan putih berkilat ialah pemancar haba yang lebih baik', 'Permukaan hitam pudar ialah pemancar haba yang lebih baik', 'Warna permukaan tidak mempengaruhi kadar kehilangan haba', 'Air di dalam tin hitam pudar menyerap lebih banyak haba'], a: 1,
    hurai: `Suhu air dalam tin hitam pudar turun lebih banyak (24 °C berbanding 12 °C), jadi tin itu membebaskan haba secara sinaran dengan lebih cepat. Permukaan hitam pudar ialah pemancar haba yang baik.` },
  { topik: 'Fizik: Cahaya', s: `Dasar sebuah kolam renang kelihatan lebih cetek daripada kedalaman sebenarnya. Fenomena ini berlaku kerana…`,
    en: `The bottom of a swimming pool looks shallower than it really is. This happens because of…`,
    p: ['pantulan cahaya pada permukaan air', 'penyebaran cahaya oleh air', 'pembiasan cahaya apabila cahaya merambat dari air ke udara', 'penyerakan cahaya oleh zarah di dalam air'], a: 2,
    hurai: `Cahaya dari dasar kolam terbias menjauhi normal apabila keluar dari air ke udara. Mata mengesan cahaya itu seolah-olah datang dari titik yang lebih tinggi, jadi kolam kelihatan cetek.` },
  { topik: 'Fizik: Bunyi', s: `Julat frekuensi bunyi yang boleh didengar oleh telinga manusia ialah…`,
    en: `The range of sound frequencies that the human ear can hear is…`,
    p: ['2 Hz hingga 2 000 Hz', '20 Hz hingga 20 000 Hz', '200 Hz hingga 200 000 Hz', '20 kHz hingga 200 kHz'], a: 1,
    hurai: `Manusia mendengar bunyi berfrekuensi 20 Hz hingga 20 000 Hz (20 kHz). Bunyi melebihi 20 kHz ialah ultrasonik.` },
  { topik: 'Fizik: Tenaga dan Kuasa', s: `Sebuah buku berjisim 2 kg diangkat dari lantai ke atas rak setinggi 1.5 m. Berapakah tenaga keupayaan graviti yang diperoleh buku itu? (g = 10 N kg⁻¹)`,
    en: `A 2 kg book is lifted from the floor onto a shelf 1.5 m high. How much gravitational potential energy does the book gain? (g = 10 N kg⁻¹)`,
    p: ['3 J', '15 J', '30 J', '300 J'], a: 2,
    hurai: `Tenaga keupayaan graviti = mgh = 2 × 10 × 1.5 = 30 J.` },
  { topik: 'Fizik: Keradioaktifan', s: `Suatu bahan radioaktif mempunyai separuh hayat 8 hari. Jisim awal sampel ialah 80 g. Berapakah jisim bahan yang belum mereput selepas 24 hari?`,
    en: `A radioactive substance has a half-life of 8 days. The sample's initial mass is 80 g. What mass has not yet decayed after 24 days?`,
    p: ['10 g', '20 g', '26.7 g', '40 g'], a: 0,
    hurai: `24 hari = 3 separuh hayat. 80 g → 40 g → 20 g → 10 g.` },

  { topik: 'Bumi & Angkasa: Bumi', s: `Batuan igneus seperti granit terbentuk apabila…`,
    en: `Igneous rocks such as granite are formed when…`,
    p: ['lapisan sedimen termampat selama berjuta-juta tahun', 'batuan sedia ada berubah akibat haba dan tekanan yang tinggi', 'cengkerang haiwan laut terkumpul di dasar laut', 'magma menyejuk dan membeku'], a: 3,
    hurai: `Batuan igneus terbentuk daripada magma atau lava yang menyejuk dan membeku. Pilihan lain menerangkan batuan enapan dan batuan metamorfik.` },
  { topik: 'Bumi & Angkasa: Penerokaan Angkasa', s: `Satelit komunikasi geopegun seperti MEASAT kelihatan seolah-olah pegun di langit apabila dilihat dari Bumi. Apakah sebabnya?`,
    en: `Geostationary communication satellites such as MEASAT appear to stay still in the sky when seen from Earth. Why?`,
    p: ['Satelit itu tidak bergerak di angkasa', 'Tempoh orbitnya 24 jam, sama dengan tempoh putaran Bumi pada paksinya', 'Satelit itu berada di luar tarikan graviti Bumi', 'Satelit itu mengorbit Bumi dari kutub ke kutub'], a: 1,
    hurai: `Satelit geopegun mengorbit di atas khatulistiwa sekali dalam 24 jam, mengikut arah putaran Bumi. Oleh itu kedudukannya relatif kepada permukaan Bumi kelihatan tetap.` },
  { topik: 'Bumi & Angkasa: Sistem Suria', s: `Jadual menunjukkan jarak purata beberapa planet dari Matahari dan tempoh orbitnya. Apakah hubungan yang ditunjukkan oleh data ini?`,
    en: `The table shows the average distance of some planets from the Sun and their orbital periods. What relationship do these data show?`,
    rajah: `<table><tr><th>Planet</th><th>Jarak dari Matahari (juta km)</th><th>Tempoh orbit (tahun Bumi)</th></tr><tr><td>Utarid</td><td>58</td><td>0.24</td></tr><tr><td>Bumi</td><td>150</td><td>1.0</td></tr><tr><td>Musytari</td><td>778</td><td>11.9</td></tr><tr><td>Neptun</td><td>4 500</td><td>164.8</td></tr></table>`,
    p: ['Semakin jauh planet, semakin pendek tempoh orbitnya', 'Tempoh orbit tidak bergantung pada jarak', 'Semakin jauh planet, semakin panjang tempoh orbitnya', 'Semua planet mempunyai tempoh orbit yang sama'], a: 2,
    hurai: `Data menunjukkan tempoh orbit bertambah apabila jarak dari Matahari bertambah. Planet yang jauh bergerak dalam orbit yang lebih panjang dan lebih perlahan.` },
  ] });

UKKM_PART(2, {
  id: 'eng', nama: 'Bahasa Inggeris', ikon: '📖', minit: 30, jenis: 'objektif',
  arahan: 'Read each text carefully and answer the questions that follow. Choose the best answer (A, B, C or D).',
  petikan: [
    { id: 'P1', tajuk: 'Resource Centre Hours: Final Examination (3–14 November)', teks: `
<p><b>Pusat Sumber, SMK Bandar Baru Bangi</b></p>
<table style="border-collapse:collapse;margin:6px 0 10px">
<tr><th style="border:1px solid var(--line);padding:4px 8px;text-align:left">Day</th><th style="border:1px solid var(--line);padding:4px 8px;text-align:left">Opening hours</th></tr>
<tr><td style="border:1px solid var(--line);padding:4px 8px">Monday – Thursday</td><td style="border:1px solid var(--line);padding:4px 8px">7.00 a.m. – 5.30 p.m.</td></tr>
<tr><td style="border:1px solid var(--line);padding:4px 8px">Friday</td><td style="border:1px solid var(--line);padding:4px 8px">7.00 a.m. – 12.15 p.m. and 2.30 p.m. – 5.00 p.m.</td></tr>
<tr><td style="border:1px solid var(--line);padding:4px 8px">Saturday 7 November only</td><td style="border:1px solid var(--line);padding:4px 8px">8.00 a.m. – 1.00 p.m.</td></tr>
</table>
<p><b>Notes</b></p>
<ul>
<li>Discussion rooms are available in one-hour slots for groups of up to four. Book at the counter at least one day before.</li>
<li>Food and drinks are not allowed. Leave your bags on the racks outside the entrance.</li>
<li>Library prefects will be on duty during recess. Students who need help finding past-year papers should ask them, as the teacher-librarian will be busy with stock-taking.</li>
</ul>` },
    { id: 'P2', tajuk: 'Story: Under the Lights', teks: `
<p>The hall at the state robotics challenge was brighter than Hui Min had expected. Rows of powerful lamps hung from the ceiling, and on the practice track the team’s robot, Kancil, kept drifting off the black line.</p>
<p>“It worked perfectly in the lab,” groaned Farah, the team’s programmer.</p>
<p>Their teacher, Cikgu Azman, did not offer a solution. Instead he asked, “What is different here?”</p>
<p>Hui Min studied the track. The lamps were reflecting off its shiny surface, and the light sensor under Kancil was confused by the glare. Farah passed the scissors to Hui Min, who had the steadiest hands in the team, and she cut a small cardboard skirt to shade the sensor. They taped it on with only ten minutes to spare.</p>
<p>Kancil completed the course on its first official run, although it was slower than the winning robots. The team finished fourth out of twenty-two. They were disappointed, but at the prize-giving the judges announced a special award for the team that had solved a problem on the spot. Cikgu Azman smiled as if he had known all along.</p>` },
    { id: 'P3', tajuk: 'Article: Mangroves, the Coast’s Living Wall', teks: `
<p>Along the west coast of Peninsular Malaysia, from Kuala Selangor to Perak, lie belts of mangrove forest. To many visitors they look like muddy, mosquito-filled swamps. To scientists, however, they are some of the most valuable ecosystems on Earth.</p>
<p>Mangrove trees grow where few other plants can survive: in salty water that rises and falls with the tide. Many of their roots stick up out of the mud like pencils and help the trees take in air. The tangled roots also slow down waves and trap mud, so the shoreline is protected from erosion.</p>
<p>Mangroves are also nurseries. Young fish, prawns and crabs shelter among the roots until they are big enough to survive in the open sea. Many of the seafood dishes sold in coastal towns depend on this hidden stage of life.</p>
<p>There is a further benefit that cannot be seen. Mangrove mud stores large amounts of carbon, sometimes several times more per hectare than a rainforest on dry land. When mangroves are cleared for shrimp ponds or housing, much of this carbon escapes into the atmosphere.</p>
<p>Replanting is possible, but it is not as easy as it sounds. Seedlings must be placed at the right height on the shore. If they are planted too low, they are drowned by the tide; too high, and they dry out. Community groups in Selangor now work with researchers to choose suitable sites, and the survival rate of their seedlings has improved greatly.</p>` }
  ],
  soalan: [
    { petikan: 'P1', topik: 'Main idea / purpose', s: 'What is the main purpose of the text?',
      p: ['To announce the dates of the final examination', 'To list the rules for borrowing past-year papers from the library', 'To give the centre’s opening hours and rules during the exam', 'To recruit library prefects to help during recess'], a: 2,
      hurai: `The title and table give the "Opening hours" for "3–14 November", and the notes explain how to book rooms and get help. The exam dates appear only as the time period.` },
    { petikan: 'P1', topik: 'Specific detail', s: 'On which day is the resource centre open for only half a day?',
      p: ['Monday', 'Thursday', 'Friday', 'Saturday 7 November'], a: 3,
      hurai: `Saturday 7 November is open only from "8.00 a.m. – 1.00 p.m." Friday is open in the morning and again from "2.30 p.m. – 5.00 p.m."` },
    { petikan: 'P1', topik: 'Vocabulary in context', s: 'In “Discussion rooms are available in one-hour <b>slots</b>”, the word <b>slots</b> means',
      p: ['periods of time that can be booked', 'narrow openings for inserting coins', 'places in a team or a list', 'small rooms at the back of the library'], a: 0,
      hurai: `The rooms are booked "at the counter" for "one-hour" periods, so a slot here is a fixed period of time. The other options are different meanings of the word.` },
    { petikan: 'P1', topik: 'Reference', s: 'In the last note, <b>them</b> in “should ask them” refers to',
      p: ['the students who need help', 'the library prefects', 'the past-year papers', 'the teacher-librarian and her helpers'], a: 1,
      hurai: `"Library prefects will be on duty during recess. Students who need help ... should ask them." The students are the ones asking, papers cannot be asked, and the teacher-librarian "will be busy".` },
    { petikan: 'P1', topik: 'Inference', s: 'Kavitha and three friends want a discussion room from 3.00 to 4.00 p.m. on Thursday, 5 November. What should she do?',
      p: ['Book a room at the counter by Wednesday, 4 November', 'Book a room at the counter on Thursday morning', 'Ask a library prefect for a room during recess', 'Go to the room at 3.00 p.m., as no booking is needed'], a: 0,
      hurai: `Rooms are for "groups of up to four" (Kavitha + 3 = 4), and she must "Book at the counter at least one day before", so by Wednesday. Thursday morning is the same day.` },

    { petikan: 'P2', topik: 'Main idea / purpose', s: 'Which title best suits the story?',
      p: ['The Fastest Robot in the State', 'A Quick Fix Under the Lights', 'Farah Learns to Program', 'Cikgu Azman Builds a Robot'], a: 1,
      hurai: `The story is about solving the glare problem "with only ten minutes to spare". Kancil was "slower than the winning robots", so it was not the fastest.` },
    { petikan: 'P2', topik: 'Specific detail', s: 'Why did Kancil keep drifting off the black line in the hall?',
      p: ['Its batteries were running low.', 'Farah had changed its program that morning.', 'Its light sensor was confused by glare from the lamps.', 'The practice track was not the same colour as the one in the lab.'], a: 2,
      hurai: `"The lamps were reflecting off its shiny surface, and the light sensor under Kancil was confused by the glare."` },
    { petikan: 'P2', topik: 'Vocabulary in context', s: 'In “she cut a small cardboard <b>skirt</b> to shade the sensor”, the word <b>skirt</b> refers to',
      p: ['a cover hanging around the base of the robot', 'a piece of clothing worn by Hui Min at the event', 'the outer edge of the competition track', 'a way of avoiding a difficult problem'], a: 0,
      hurai: `The cardboard piece was cut "to shade the sensor", which is "under Kancil", so it hangs around the bottom of the robot like a skirt. It is not real clothing.` },
    { petikan: 'P2', topik: 'Reference', s: 'In “Farah passed the scissors to Hui Min, who had the steadiest hands in the team, and <b>she</b> cut a small cardboard skirt”, <b>she</b> refers to',
      p: ['Farah', 'one of the judges', 'the organiser of the challenge', 'Hui Min'], a: 3,
      hurai: `Farah gives the scissors away to Hui Min, "who had the steadiest hands", so the person who cuts is Hui Min.` },
    { petikan: 'P2', topik: 'Inference', s: 'Why did Cikgu Azman most likely ask, “What is different here?” instead of giving a solution?',
      p: ['He did not know what was wrong with the robot.', 'He wanted the team to find the answer themselves.', 'He was annoyed that Farah had blamed the lab for the problem.', 'He thought the team should leave the competition.'], a: 1,
      hurai: `He "did not offer a solution" and later "smiled as if he had known all along", which suggests he knew the answer but wanted the team to find it.` },

    { petikan: 'P3', topik: 'Main idea / purpose', s: 'What is the writer’s main purpose in this article?',
      p: ['To persuade tourists to visit Kuala Selangor', 'To describe how shrimp ponds are built', 'To prove that rainforests store much less carbon than mangrove forests', 'To explain why mangroves are valuable and how they can be restored'], a: 3,
      hurai: `Most paragraphs describe a benefit (protecting the shoreline, "nurseries", storing carbon), and the last one explains replanting. Carbon is only one of several points.` },
    { petikan: 'P3', topik: 'Specific detail', s: 'According to the article, what happens when mangroves are cleared?',
      p: ['Carbon stored in the mud escapes into the air.', 'Young fish and prawns move into rivers and the rainforest.', 'The tide stops rising and falling.', 'Seedlings grow faster on the open shore.'], a: 0,
      hurai: `"When mangroves are cleared for shrimp ponds or housing, much of this carbon escapes into the atmosphere."` },
    { petikan: 'P3', topik: 'Vocabulary in context', s: 'In “Mangroves are also <b>nurseries</b>”, the word <b>nurseries</b> means',
      p: ['shops that sell young plants', 'rooms in a hospital where newborn babies are cared for', 'places where young animals shelter as they grow', 'schools for very small children'], a: 2,
      hurai: `The next sentence explains: "Young fish, prawns and crabs shelter among the roots until they are big enough". The other options are common meanings that do not fit here.` },
    { petikan: 'P3', topik: 'Reference', s: 'In the last paragraph, <b>they</b> in “too high, and they dry out” refers to',
      p: ['the community groups', 'the seedlings', 'the researchers', 'the suitable sites'], a: 1,
      hurai: `"Seedlings must be placed at the right height ... If they are planted too low, they are drowned by the tide; too high, and they dry out." People and sites are not planted.` },
    { petikan: 'P3', topik: 'Inference / attitude', s: 'Why does the writer mention that mangroves look like “muddy, mosquito-filled swamps” to many visitors?',
      p: ['To warn readers to stay away from mangroves because of disease', 'To show that mangroves are unhealthy places', 'To explain why shrimp ponds are built there', 'To contrast a common opinion with their real value'], a: 3,
      hurai: `The next sentence begins "To scientists, however, they are some of the most valuable ecosystems on Earth". The word "however" shows a contrast.` }
  ]
});

// UKKM Set 02 — Ujian Keperibadian (Ya/Tidak), 100 item. Item terbalik bukan-kejujuran: 28.
UKKM_PART(2, {
  id: 'per', nama: 'Ujian Keperibadian', ikon: '🧭', minit: 30,
  arahan: "Baca setiap pernyataan dan pilih <b>Ya</b> atau <b>Tidak</b> mengikut diri anda yang sebenar. Jawab dengan jujur, logik dan konsisten; beberapa idea diulang dengan ayat berbeza. Bagi situasi asrama yang belum anda alami, jawab mengikut tindakan yang paling mungkin anda lakukan. Masa: kira-kira 18 saat bagi setiap item.",
  skala: ["Ya","Tidak"],
  item: [
    { s: "Saya beratur dengan sabar di kaunter dewan selera.", trait: "Integriti & Disiplin Diri", pos: 0, hurai: "Beratur menunjukkan disiplin dan hormat kepada orang lain." },
    { s: "Saya mengelak subjek sains apabila diberi pilihan aktiviti.", trait: "Minat Ilmu, Sains & Motivasi", pos: 1, hurai: "Mengelak sains kurang sesuai bagi calon MRSM." },
    { s: "Saya mengambil masa sebentar untuk bertenang sebelum membalas mesej yang menyakitkan hati.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Bertenang dahulu mengelakkan tindakan yang dikesali." },
    { s: "Saya boleh berkongsi bilik dengan beberapa orang rakan.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Berkongsi ruang ialah realiti kehidupan asrama." },
    { s: "Saya keluar dari kawasan asrama secara senyap apabila warden sibuk.", trait: "Integriti & Disiplin Diri", pos: 1, hurai: "Keluar tanpa kebenaran melanggar peraturan dan membahayakan diri." },
    { s: "Saya berasa sedih berpanjangan apabila gagal dipilih ke dalam pasukan sekolah.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 1, hurai: "Kesedihan yang berpanjangan melambatkan usaha untuk bangkit." },
    { s: "Saya mengekalkan keputusan yang betul walaupun ada ahli yang merungut.", trait: "Kepimpinan & Inisiatif", pos: 0, hurai: "Pemimpin berpegang pada keputusan yang wajar dan menerangkannya dengan baik." },
    { id: 'eb2', pasangan: 'eb1', s: "Saya mudah panik dan buntu apabila beberapa tugasan perlu dihantar serentak.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 1, hurai: "Panik menjejaskan keupayaan merancang kerja." },
    { s: "Apabila rakan cedera semasa bersukan, saya segera memanggil guru untuk mendapatkan bantuan.", trait: "Kepimpinan & Inisiatif", pos: 0, hurai: "Bertindak pantas dalam kecemasan menunjukkan kepimpinan yang bertanggungjawab." },
    { id: 'sa2', pasangan: 'sa1', s: "Saya terus melihat jawapan di belakang buku apabila soalan matematik kelihatan sukar.", trait: "Minat Ilmu, Sains & Motivasi", pos: 1, hurai: "Melihat jawapan terlalu awal menghalang pembelajaran." },
    { id: 'ma1', pasangan: 'ma2', s: "Saya mengemas beg dan menyediakan keperluan sekolah saya sendiri.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Menyediakan keperluan sendiri menunjukkan kemandirian." },
    { s: "Saya membentangkan hasil kerja kumpulan dengan yakin di hadapan kelas.", trait: "Kepimpinan & Inisiatif", pos: 0, hurai: "Pelajar MRSM sering membentang; keyakinan ini ialah kemahiran kepimpinan." },
    { id: 'ea2', pasangan: 'ea1', s: "Selepas kalah dalam sesuatu pertandingan, saya serik dan menolak untuk menyertainya lagi.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 1, hurai: "Serik selepas sekali kalah menunjukkan ketahanan diri yang rendah." },
    { s: "Saya membuat keputusan kecil sendiri seperti memilih aktiviti petang.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Membuat keputusan sendiri menunjukkan kemandirian." },
    { s: "Saya mencatat soalan yang timbul semasa belajar untuk dicari jawapannya kemudian.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Mencatat persoalan menunjukkan sifat ingin tahu." },
    { s: "Saya boleh bekerja dengan rakan yang bukan kawan rapat saya.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 0, hurai: "Pasukan yang baik terbentuk daripada pelbagai individu." },
    { id: 'ba2', pasangan: 'ba1', s: "Apabila berselisih faham dengan rakan sebilik, saya mendiamkan diri berhari-hari supaya dia rasa bersalah.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 1, hurai: "Memulaukan rakan memanjangkan konflik." },
    { s: "Saya tahu cara membasuh pakaian sendiri, sama ada dengan tangan atau mesin basuh.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Kemahiran asas ini penting di asrama." },
    { s: "Saya menyokong rakan sepasukan yang melakukan kesilapan semasa perlawanan.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 0, hurai: "Sokongan selepas kesilapan menguatkan pasukan." },
    { s: "Saya membayar semula wang yang saya pinjam daripada rakan pada masa yang dijanjikan.", trait: "Integriti & Disiplin Diri", pos: 0, hurai: "Melunaskan hutang menunjukkan amanah." },
    { id: 'mb1', pasangan: 'mb2', s: "Saya memberitahu warden dengan segera apabila saya berasa kurang sihat.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Tahu tindakan yang betul apabila sakit ialah kemahiran hidup berasrama." },
    { id: 'ia1', pasangan: 'ia2', s: "Saya menjawab soalan peperiksaan dengan usaha sendiri walaupun pengawas peperiksaan keluar sebentar.", trait: "Integriti & Disiplin Diri", pos: 0, hurai: "Kejujuran ketika tiada pengawasan ialah ujian integriti sebenar." },
    { s: "Saya percaya saya boleh memperbaiki kelemahan saya dengan usaha.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Keyakinan untuk berubah membina daya tahan." },
    { s: "Saya mahu ibu bapa melawat setiap minggu kerana saya sukar berjauhan.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 1, hurai: "Pelajar MRSM perlu bersedia berjauhan dengan keluarga." },
    { s: "Saya membimbing pelajar junior yang baru mendaftar supaya mereka mengenali kawasan sekolah.", trait: "Kepimpinan & Inisiatif", pos: 0, hurai: "Membimbing orang lain menunjukkan sifat kepimpinan dan keprihatinan." },
    { id: 'ib1', pasangan: 'ib2', s: "Saya mengehadkan masa bermain permainan video supaya kerja sekolah dapat disiapkan.", trait: "Integriti & Disiplin Diri", pos: 0, hurai: "Mengawal hiburan menunjukkan disiplin diri." },
    { s: "Saya mengingatkan diri tentang matlamat saya apabila berasa malas.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Matlamat yang jelas menguatkan daya tahan." },
    { s: "Saya ingin tahu cara komputer dan aplikasi diprogramkan.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Minat terhadap teknologi menyokong bidang STEM." },
    { s: "Saya belajar semata-mata kerana dipaksa oleh ibu bapa.", trait: "Minat Ilmu, Sains & Motivasi", pos: 1, hurai: "Motivasi luaran semata-mata sukar dikekalkan." },
    { id: 'ka2', pasangan: 'ka1', s: "Dalam mesyuarat, saya mengikut sahaja pendapat ramai walaupun saya rasa ada cara yang lebih baik.", trait: "Kepimpinan & Inisiatif", pos: 1, hurai: "Mengikut arus tanpa menyuarakan idea yang lebih baik menunjukkan keyakinan kepimpinan yang lemah." },
    { s: "Saya menyesuaikan diri dengan cara kerja ahli kumpulan yang berbeza.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 0, hurai: "Fleksibiliti memudahkan kerja berpasukan." },
    { s: "Saya mematuhi kod pakaian sekolah setiap hari.", trait: "Integriti & Disiplin Diri", pos: 0, hurai: "Mematuhi peraturan pakaian menunjukkan disiplin." },
    { s: "Saya membawa bekalan alat tulis yang mencukupi untuk sebulan.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Persediaan sendiri mengelakkan kesulitan." },
    { s: "Saya berasa teruja dengan pengalaman tinggal di asrama.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Sikap positif terhadap asrama memudahkan penyesuaian." },
    { s: "Saya hanya mahu bekerja dengan kawan rapat dan meminggirkan ahli lain.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 1, hurai: "Meminggirkan orang lain melemahkan pasukan." },
    { s: "Saya sentiasa gembira setiap hari tanpa pernah berasa sedih.", trait: "Skala Kejujuran", pos: 1, hurai: "Perasaan sedih ialah emosi normal; menafikannya kelihatan tidak jujur." },
    { id: 'sb1', pasangan: 'sb2', s: "Saya ke perpustakaan untuk mencari buku tambahan tentang topik yang saya minati.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Inisiatif mencari bahan menunjukkan minat ilmu." },
    { s: "Saya memuji ahli kumpulan yang bekerja keras di hadapan ahli lain.", trait: "Kepimpinan & Inisiatif", pos: 0, hurai: "Pengiktirafan yang ikhlas memotivasikan ahli dan mengukuhkan pasukan." },
    { s: "Saya membuat senarai barang yang perlu dibawa sebelum pulang ke asrama.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Perancangan rapi mengelakkan barang tertinggal." },
    { s: "Sekali-sekala saya berpura-pura sibuk supaya terlepas daripada sesuatu tugas.", trait: "Skala Kejujuran", pos: 0, hurai: "Kebanyakan orang pernah berbuat demikian; mengakuinya ialah jawapan jujur." },
    { s: "Saya sanggup menukar tugas dengan rakan yang mempunyai masalah keluarga.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 0, hurai: "Bertolak ansur menunjukkan keprihatinan." },
    { s: "Saya boleh menerima kekalahan dengan hati yang terbuka.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Menerima kekalahan dengan baik menunjukkan kematangan emosi." },
    { s: "Saya mencadangkan sesi ulang kaji berkumpulan apabila ramai rakan sekelas lemah dalam sesuatu topik.", trait: "Kepimpinan & Inisiatif", pos: 0, hurai: "Mengambil inisiatif untuk membantu kelas ialah tanda pemimpin yang prihatin." },
    { s: "Saya tidak pernah lupa membawa apa-apa barang ke sekolah.", trait: "Skala Kejujuran", pos: 1, hurai: "Setiap orang pernah terlupa sesuatu; jawapan jujur lebih dipercayai." },
    { s: "Saya suka memerhatikan bagaimana sesuatu alat berfungsi.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Minat terhadap mekanisme menyokong minat kejuruteraan." },
    { s: "Saya meninggikan suara apabila rakan lambat memahami penerangan saya.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 1, hurai: "Kesabaran penting ketika membantu rakan." },
    { s: "Saya tetap bersikap baik walaupun hari saya tidak berjalan lancar.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Mengawal emosi menjaga hubungan dengan orang lain." },
    { s: "Saya berusaha untuk mendapat keputusan cemerlang dalam Sains dan Matematik.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Motivasi akademik dalam STEM sesuai dengan MRSM." },
    { s: "Saya pernah ketawa apabila mendengar jenaka yang kurang sopan.", trait: "Skala Kejujuran", pos: 0, hurai: "Mengakui kelemahan kecil menunjukkan kejujuran." },
    { s: "Saya mengaku kerja rakan sekumpulan sebagai hasil usaha saya sendiri.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 1, hurai: "Mengambil kredit orang lain merosakkan kepercayaan." },
    { s: "Saya menerima bahawa ada perkara di luar kawalan saya.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Penerimaan membantu mengurangkan tekanan." },
    { s: "Saya menyalahkan nasib apabila sesuatu berlaku di luar jangkaan.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 1, hurai: "Menyalahkan nasib menghalang penyelesaian masalah." },
    { s: "Saya hanya makan makanan ringan di bilik kerana menu dewan selera membosankan.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 1, hurai: "Pemakanan yang buruk menjejaskan kesihatan di asrama." },
    { s: "Saya lebih senang membiarkan masalah dalam kelas selesai dengan sendirinya.", trait: "Kepimpinan & Inisiatif", pos: 1, hurai: "Masalah perlu ditangani; membiarkannya menunjukkan sikap pasif." },
    { s: "Saya membezakan antara keperluan dengan kehendak sebelum membelanjakan wang.", trait: "Integriti & Disiplin Diri", pos: 0, hurai: "Mengurus wang dengan berhemah ialah disiplin kewangan." },
    { s: "Saya mengemas tempat tidur saya setiap pagi tanpa perlu diingatkan.", trait: "Integriti & Disiplin Diri", pos: 0, hurai: "Rutin harian yang konsisten menunjukkan disiplin diri." },
    { s: "Saya selalu menghabiskan setiap makanan yang dihidangkan tanpa merungut sedikit pun.", trait: "Skala Kejujuran", pos: 1, hurai: "Setiap orang ada citarasa tersendiri; mengakuinya ialah jawapan jujur." },
    { s: "Saya bertoleransi dengan tabiat rakan sebilik yang berbeza daripada saya.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 0, hurai: "Toleransi penting apabila tinggal bersama." },
    { s: "Saya selalu terlupa membawa barang keperluan dan meminjam daripada rakan.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 1, hurai: "Kerap bergantung pada barang rakan menunjukkan persediaan yang lemah." },
    { s: "Saya berasa malas apabila guru memberi soalan berbentuk penyelesaian masalah.", trait: "Minat Ilmu, Sains & Motivasi", pos: 1, hurai: "Soalan penyelesaian masalah ialah teras pembelajaran MRSM." },
    { s: "Apabila guru meminta seorang sukarelawan, saya menundukkan kepala supaya saya terlepas daripada dipilih.", trait: "Kepimpinan & Inisiatif", pos: 1, hurai: "Mengelak peluang menunjukkan inisiatif yang rendah." },
    { s: "Saya menyimpan rahsia yang diamanahkan oleh rakan selagi rahsia itu tidak membahayakan sesiapa.", trait: "Integriti & Disiplin Diri", pos: 0, hurai: "Menjaga amanah rakan menunjukkan integriti." },
    { s: "Saya tidak pernah tersilap membawa pulang alat tulis kepunyaan rakan.", trait: "Skala Kejujuran", pos: 1, hurai: "Hampir semua orang pernah tersilap mengambil barang kecil; jawapan jujur lebih dipercayai." },
    { id: 'ba1', pasangan: 'ba2', s: "Saya berbincang dengan tenang apabila berselisih faham dengan rakan sebilik.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 0, hurai: "Perbincangan yang tenang menyelesaikan konflik dengan matang." },
    { s: "Saya menulis laporan amali berdasarkan data sebenar yang saya peroleh.", trait: "Integriti & Disiplin Diri", pos: 0, hurai: "Melaporkan data sebenar ialah asas integriti saintifik." },
    { s: "Saya menghargai bantuan rakan dengan mengucapkan terima kasih.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 0, hurai: "Menghargai orang lain mengeratkan hubungan." },
    { s: "Saya membersihkan kawasan katil saya setiap hari.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Kebersihan diri dan ruang menunjukkan kemandirian." },
    { s: "Saya sanggup bertanding dalam pemilihan jawatankuasa kelab jika saya rasa mampu menyumbang.", trait: "Kepimpinan & Inisiatif", pos: 0, hurai: "Berani menawarkan diri untuk berkhidmat ialah ciri pemimpin." },
    { s: "Saya menyampaikan maklumat penting kepada ahli kumpulan yang tidak hadir.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 0, hurai: "Komunikasi yang baik memastikan semua ahli bersedia." },
    { s: "Saya menjaga kesihatan dengan makan dan tidur pada waktunya.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Menjaga diri sendiri penting di asrama." },
    { id: 'ma2', pasangan: 'ma1', s: "Ibu bapa saya yang selalu mengemas beg sekolah saya setiap malam.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 1, hurai: "Bergantung pada ibu bapa untuk urusan harian menyukarkan hidup berasrama." },
    { id: 'sa1', pasangan: 'sa2', s: "Saya berusaha menyelesaikan soalan matematik yang sukar sendiri sebelum menyemak jawapan di belakang buku.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Mencuba sendiri dahulu menguatkan kemahiran berfikir." },
    { s: "Saya menyusun senarai semak supaya program kelas berjalan lancar.", trait: "Kepimpinan & Inisiatif", pos: 0, hurai: "Perancangan yang teliti ialah kemahiran penting seorang pemimpin." },
    { s: "Saya mudah berputus asa apabila projek saya gagal pada percubaan pertama.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 1, hurai: "Mudah berputus asa menghalang pembelajaran." },
    { s: "Saya menangis atau marah apabila rakan menegur kesilapan kecil saya.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 1, hurai: "Bertindak balas berlebihan terhadap teguran menunjukkan emosi yang rapuh." },
    { s: "Saya berminat dengan berita tentang penemuan sains terkini.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Mengikuti perkembangan sains menunjukkan minat ilmu." },
    { s: "Saya suka berbincang tentang topik sains dengan rakan.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Perbincangan mengukuhkan kefahaman sains." },
    { id: 'eb1', pasangan: 'eb2', s: "Saya boleh menghadapi tekanan apabila banyak tugasan perlu dihantar dalam minggu yang sama.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Mengurus beban kerja dengan tenang menunjukkan ketahanan." },
    { s: "Saya tersenyum dan meneruskan aktiviti walaupun tersilap langkah semasa persembahan.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Meneruskan persembahan menunjukkan ketahanan diri." },
    { s: "Apabila dua ahli kumpulan saya bertengkar, saya buat-buat sibuk dan menjauhkan diri.", trait: "Kepimpinan & Inisiatif", pos: 1, hurai: "Pemimpin membantu meredakan konflik dalam kumpulan dengan bijak." },
    { s: "Saya sentiasa bersabar dalam semua keadaan tanpa sekali pun hilang sabar.", trait: "Skala Kejujuran", pos: 1, hurai: "Tiada manusia yang sentiasa sabar; jawapan \"sempurna\" menimbulkan syak." },
    { s: "Saya mencuba eksperimen ringkas di rumah dengan bahan yang selamat.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Eksperimen sendiri menunjukkan minat sains." },
    { s: "Saya memberitahu ibu bapa keputusan peperiksaan saya dengan jujur walaupun keputusannya kurang baik.", trait: "Integriti & Disiplin Diri", pos: 0, hurai: "Kejujuran kepada keluarga menunjukkan integriti." },
    { s: "Saya mampu menguruskan jadual sendiri tanpa diingatkan oleh ibu bapa.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Pengurusan masa sendiri ialah tanda berdikari." },
    { id: 'ea1', pasangan: 'ea2', s: "Saya bersemangat menyertai semula pertandingan walaupun pernah kalah pada tahun lepas.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Daya tahan bermaksud terus mencuba selepas kalah." },
    { s: "Jika ketua kumpulan saya tidak hadir, saya sanggup mengambil alih tugasnya buat sementara.", trait: "Kepimpinan & Inisiatif", pos: 0, hurai: "Kesediaan mengisi kekosongan menunjukkan inisiatif dan tanggungjawab." },
    { s: "Ada kalanya saya bercakap tentang orang lain di belakangnya.", trait: "Skala Kejujuran", pos: 0, hurai: "Mengakui kelemahan biasa lebih jujur daripada menafikannya." },
    { s: "Saya mampu berfikir dengan jelas dalam keadaan tergesa-gesa.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Ketenangan dalam tekanan ialah tanda kestabilan emosi." },
    { s: "Saya menukar sedikit data eksperimen supaya keputusan kelihatan lebih cantik.", trait: "Integriti & Disiplin Diri", pos: 1, hurai: "Mengubah data ialah ketidakjujuran saintifik yang serius." },
    { s: "Saya membuat jadual ulang kaji untuk mencapai sasaran saya.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Perancangan belajar menunjukkan motivasi." },
    { s: "Saya menenangkan rakan yang bersedih kerana rindu akan keluarga.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 0, hurai: "Empati membantu rakan menghadapi kehidupan asrama." },
    { id: 'sb2', pasangan: 'sb1', s: "Saya rasa membaca buku di luar sukatan pelajaran hanya membuang masa.", trait: "Minat Ilmu, Sains & Motivasi", pos: 1, hurai: "Menolak bacaan tambahan menyempitkan ilmu." },
    { s: "Saya mengajak rakan yang duduk bersendirian untuk makan bersama.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 0, hurai: "Sikap inklusif membina hubungan sosial yang baik." },
    { id: 'mb2', pasangan: 'mb1', s: "Apabila demam ringan di asrama, saya mendesak ibu bapa menjemput saya sebelum berjumpa warden.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 1, hurai: "Pelajar asrama perlu tahu prosedur dan pihak yang betul untuk dirujuk." },
    { id: 'ka1', pasangan: 'ka2', s: "Saya berani menyatakan pendapat saya dalam mesyuarat walaupun pendapat itu berbeza daripada majoriti.", trait: "Kepimpinan & Inisiatif", pos: 0, hurai: "Pemimpin berani menyuarakan pandangan secara berhemah demi kebaikan kumpulan." },
    { s: "Saya boleh tidur dengan tenang walaupun esok ada pembentangan.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Mengurus kebimbangan membantu persediaan." },
    { s: "Saya memperbaiki kesilapan dalam latihan dengan memahami punca kesilapan itu.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Belajar daripada kesilapan menunjukkan kesungguhan." },
    { s: "Saya mengatasi rasa rindu akan keluarga dengan menyibukkan diri dalam aktiviti bermanfaat.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Mengurus rasa rindu secara positif penting di asrama." },
    { id: 'ia2', pasangan: 'ia1', s: "Jika pengawas peperiksaan keluar sebentar, saya mengambil peluang melihat jawapan rakan di sebelah.", trait: "Integriti & Disiplin Diri", pos: 1, hurai: "Meniru dalam peperiksaan melanggar integriti akademik." },
    { id: 'ib2', pasangan: 'ib1', s: "Saya bermain permainan video sehingga lewat malam walaupun esok ada ujian.", trait: "Integriti & Disiplin Diri", pos: 1, hurai: "Mengutamakan hiburan sebelum ujian menunjukkan kawalan diri yang lemah." }
  ]
});

UKKM.push({ set: 2, tajuk: 'Set 2', bahagian: ['mat', 'sains', 'eng', 'per'].map(k => B[k]).filter(Boolean) }); })();
