(function () { const B = {}; const UKKM_PART = (n, b) => { B[b.id] = b; };
UKKM_PART(10, { id: 'mat', nama: 'Matematik', ikon: '🧮', minit: 30,
  arahan: 'Jawab semua 20 soalan. 18 soalan objektif (pilih A, B, C atau D) dan 2 soalan isian (taip jawapan nombor). Kalkulator saintifik dibenarkan; gunakan kertas conteng.',
  soalan: [
  { // 1 Pola — mudah
    s: "Apakah nombor seterusnya dalam jujukan berikut?<br><b>2, 5, 14, 41, …</b>",
    en: "What is the next number in the sequence 2, 5, 14, 41, … ?",
    p: ['123', '122', '121', '68'], a: 1, topik: 'Pola & Jujukan', aras: 'mudah',
    hurai: "Setiap sebutan = sebutan sebelumnya × 3 − 1: 2×3−1 = 5, 5×3−1 = 14, 14×3−1 = 41, maka 41×3−1 = <b>122</b>. (Beza 3, 9, 27 → beza seterusnya 81.) 123 lupa '−1'; 121 tolak 2; 68 = 41 + 27, mengulang beza terakhir."
  },
  { // 2 Bentuk piawai & ketaksamaan — mudah
    s: "Sebuah lori kosong berjisim 3.5 × 10<sup>3</sup> kg. Lori itu membawa kampit beras yang setiap satunya berjisim 5 × 10<sup>1</sup> kg. Had jisim sebuah jambatan ialah 1.2 × 10<sup>4</sup> kg. Berapakah bilangan <b>maksimum</b> kampit beras yang boleh dibawa supaya lori itu boleh melalui jambatan tersebut?",
    en: "An empty lorry has mass 3.5 × 10³ kg. It carries rice sacks of 5 × 10¹ kg each. A bridge has a mass limit of 1.2 × 10⁴ kg. What is the maximum number of sacks so the lorry can cross the bridge?",
    p: ['70', '170', '171', '240'], a: 1, topik: 'Persamaan Linear', aras: 'mudah',
    hurai: "3 500 + 50n ≤ 12 000 → 50n ≤ 8 500 → n ≤ 170. Maksimum = <b>170</b> kampit. (240 = 12 000 ÷ 50, lupa jisim lori; 171 melebihi had; 70 = 3 500 ÷ 50.)"
  },
  { // 3 Peratus — mudah
    s: "Di sebuah sekolah, 40% murid ialah lelaki. Sebanyak 30% murid lelaki dan 50% murid perempuan menyertai Kelab Sains. Berapakah peratus <b>semua murid</b> sekolah itu yang menyertai Kelab Sains?",
    en: "In a school, 40% of pupils are boys. 30% of the boys and 50% of the girls join the Science Club. What percentage of all pupils join the Science Club?",
    p: ['12%', '40%', '42%', '80%'], a: 2, topik: 'Peratus & Matematik Pengguna', aras: 'mudah',
    hurai: "Lelaki dalam kelab = 30% × 40% = 12% semua murid. Perempuan = 60% semua murid; dalam kelab = 50% × 60% = 30%. Jumlah = 12% + 30% = <b>42%</b>. (40% = purata 30% dan 50%, mengabaikan bilangan lelaki dan perempuan yang berbeza; 80% = 30% + 50%; 12% hanya lelaki.)"
  },
  { // 4 Nisbah — mudah
    s: "Nyatakan nisbah 1 jam 15 minit kepada 50 minit dalam bentuk termudah.",
    en: "Express the ratio of 1 hour 15 minutes to 50 minutes in its simplest form.",
    p: ['3 : 2', '2 : 3', '23 : 10', '3 : 10'], a: 0, topik: 'Nisbah, Kadar & Laju', aras: 'mudah',
    hurai: "1 jam 15 minit = 75 minit. 75 : 50 = <b>3 : 2</b>. (23 : 10 datang daripada 115 : 50, menganggap 1 jam 15 minit = 115 minit; 3 : 10 = 15 : 50, mengabaikan 1 jam; 2 : 3 terbalik.)"
  },
  { // 5 Data — mudah
    rajah: '<table><tr><th></th><th>Sains</th><th>Seni</th><th>Sukan</th><th>Jumlah</th></tr><tr><th>Lelaki</th><td>18</td><td>?</td><td>25</td><td>55</td></tr><tr><th>Perempuan</th><td>22</td><td>20</td><td>?</td><td>60</td></tr><tr><th>Jumlah</th><td>40</td><td>?</td><td>?</td><td>115</td></tr></table>',
    s: "Jadual dua hala menunjukkan bilangan murid Tingkatan 3 dalam tiga kelab. Setiap murid menyertai satu kelab sahaja. Berapakah jumlah murid dalam Kelab Seni?",
    en: "The two-way table shows Form 3 pupils in three clubs; each pupil joins one club only. How many pupils are in the Art Club?",
    p: ['12', '18', '20', '32'], a: 3, topik: 'Data & Statistik', aras: 'mudah',
    hurai: "Lelaki Seni = 55 − 18 − 25 = 12. Jumlah Seni = 12 + 20 = <b>32</b>. (Semak: Sukan perempuan = 60 − 22 − 20 = 18, jumlah Sukan = 43; 40 + 32 + 43 = 115 ✓.) (12 dan 20 hanya lelaki atau perempuan; 18 ialah perempuan dalam Kelab Sukan.)"
  },
  { // 6 Geometri — sederhana
    s: "Diameter roda sebuah basikal ialah 70 cm. Berapakah bilangan putaran lengkap roda itu apabila basikal bergerak sejauh 1.1 km? (Guna π = <sup>22</sup>⁄<sub>7</sub>)",
    en: "A bicycle wheel has diameter 70 cm. How many complete turns does it make when the bicycle travels 1.1 km? (Use π = 22/7)",
    p: ['50', '250', '500', '1 000'], a: 2, topik: 'Geometri & Pengukuran', aras: 'sederhana',
    hurai: "Lilitan = πd = 22/7 × 70 = 220 cm. 1.1 km = 110 000 cm. Putaran = 110 000 ÷ 220 = <b>500</b>. (250 menggunakan 70 cm sebagai jejari (lilitan 440 cm); 1 000 guna πj = 110 cm; 50 tersilap tukar 1.1 km = 11 000 cm.)"
  },
  { // 7 Logik — sederhana
    s: "Lima murid duduk sebaris di kerusi bernombor 1 hingga 5 dari kiri ke kanan.<br>• Chin duduk di salah satu hujung.<br>• Emir duduk betul-betul di sebelah kanan Aqil.<br>• Chin duduk bersebelahan dengan Aqil.<br>• Balqis dan Devi duduk bersebelahan.<br>• Devi tidak duduk di hujung.<br>Siapakah yang duduk di kerusi nombor 4?",
    en: "Five pupils sit in a row on seats 1 to 5 from left to right. Chin sits at one end. Emir sits immediately to the right of Aqil. Chin sits next to Aqil. Balqis and Devi sit next to each other. Devi does not sit at an end. Who sits in seat 4?",
    p: ['Aqil', 'Balqis', 'Emir', 'Devi'], a: 3, topik: 'Penaakulan Logik', aras: 'sederhana',
    hurai: "Jika Chin di kerusi 5, Aqil mesti di kerusi 4 dan Emir di kerusi 5 — bercanggah. Jadi Chin di kerusi 1, Aqil 2, Emir 3. Balqis dan Devi di kerusi 4 dan 5; Devi bukan di hujung, jadi Devi di kerusi 4 dan Balqis di kerusi 5. Jawapan: <b>Devi</b>. (Balqis ialah jawapan jika syarat terakhir diabaikan.)"
  },
  { // 8 Pola — sederhana
    rajah: '<svg viewBox="0 0 230 112" style="max-width:100%;width:280px" role="img" aria-label="Rajah 1: grid 3 kali 3, Rajah 2: grid 4 kali 4, Rajah 3: grid 5 kali 5, jubin sempadan berwarna biru"><g stroke="currentColor"><rect x="10" y="12" width="42" height="42" fill="var(--c)"/><rect x="24" y="26" width="14" height="14" fill="var(--card)"/><path d="M24 12v42M38 12v42M10 26h42M10 40h42" fill="none"/><rect x="70" y="12" width="56" height="56" fill="var(--c)"/><rect x="84" y="26" width="28" height="28" fill="var(--card)"/><path d="M84 12v56M98 12v56M112 12v56M70 26h56M70 40h56M70 54h56" fill="none"/><rect x="145" y="12" width="70" height="70" fill="var(--c)"/><rect x="159" y="26" width="42" height="42" fill="var(--card)"/><path d="M159 12v70M173 12v70M187 12v70M201 12v70M145 26h70M145 40h70M145 54h70M145 68h70" fill="none"/></g><g font-size="12" fill="currentColor"><text x="8" y="104">Rajah 1</text><text x="74" y="104">Rajah 2</text><text x="156" y="104">Rajah 3</text></g></svg>',
    s: "Rajah menunjukkan tiga rajah pertama bagi satu pola jubin segi empat sama. Jubin di sempadan luar berwarna biru dan jubin di dalam berwarna putih. Berapakah bilangan jubin <b>putih</b> dalam Rajah 10?",
    en: "The diagram shows the first three figures of a square tile pattern. Border tiles are blue and inner tiles are white. How many white tiles are there in Figure 10?",
    p: ['44', '100', '121', '144'], a: 1, topik: 'Pola & Jujukan', aras: 'sederhana',
    hurai: "Rajah n ialah grid (n + 2) × (n + 2) dan jubin putih membentuk grid n × n (1, 4, 9, …). Rajah 10: 12 × 12 dengan <b>10² = 100</b> jubin putih. (144 ialah jumlah semua jubin; 44 ialah bilangan jubin biru; 121 = 11², tersilap satu.)"
  },
  { // 9 Persamaan linear — sederhana (ISI)
    jenis: 'isi',
    s: "Sebatang pen berharga RM 1.80 dan sebatang pensel berharga RM 0.90. Cikgu Mei membeli 40 batang pen dan pensel kesemuanya dan membayar RM 58.50. Berapakah bilangan pen yang dibelinya?",
    en: "A pen costs RM 1.80 and a pencil costs RM 0.90. Cikgu Mei buys 40 pens and pencils altogether and pays RM 58.50. How many pens did she buy?",
    a: 25, unit: 'batang', topik: 'Persamaan Linear', aras: 'sederhana',
    hurai: "Pen = p, pensel = 40 − p. 1.80p + 0.90(40 − p) = 58.50 → 0.90p + 36 = 58.50 → 0.90p = 22.50 → p = <b>25</b>. Semak: 25 × 1.80 + 15 × 0.90 = 45 + 13.50 = 58.50 ✓."
  },
  { // 10 Peratus — sederhana
    s: "Semasa melancong di Jepun, Farid melihat sebuah beg berharga ¥8 000 dengan diskaun 15%. Kadar pertukaran ialah RM 1 = ¥32. Berapakah harga beg itu selepas diskaun, dalam ringgit?",
    en: "In Japan, Farid sees a bag priced ¥8 000 with a 15% discount. The exchange rate is RM 1 = ¥32. What is the discounted price in ringgit?",
    p: ['RM 212.50', 'RM 235.00', 'RM 250.00', 'RM 287.50'], a: 0, topik: 'Peratus & Matematik Pengguna', aras: 'sederhana',
    hurai: "Harga selepas diskaun = 8 000 × 0.85 = ¥6 800. Dalam ringgit = 6 800 ÷ 32 = <b>RM 212.50</b>. (RM 250 = 8 000 ÷ 32, lupa diskaun; RM 235 = 250 − 15, menolak 15 ringgit dan bukan 15%; RM 287.50 menambah 15%.)"
  },
  { // 11 Laju — sederhana
    s: "Sebuah bas bertolak dari Ipoh pada pukul 10:45 pagi ke sebuah bandar yang jauhnya 252 km. Laju purata bas ketika bergerak ialah 72 km/j dan bas itu berhenti rehat selama 15 minit di pertengahan jalan. Pukul berapakah bas itu tiba?",
    en: "A bus leaves Ipoh at 10:45 a.m. for a town 252 km away. Its average moving speed is 72 km/h and it stops midway for a 15-minute rest. At what time does it arrive?",
    p: ['2:15 petang', '2:30 petang', '2:35 petang', '2:50 petang'], a: 1, topik: 'Nisbah, Kadar & Laju', aras: 'sederhana',
    hurai: "Masa bergerak = 252 ÷ 72 = 3.5 jam = 3 jam 30 minit. Tambah rehat 15 minit → 3 jam 45 minit. 10:45 pagi + 3 jam 45 minit = <b>2:30 petang</b>. (2:15 petang lupa rehat; 2:35 dan 2:50 petang menganggap 3.5 jam = 3 jam 50 minit.)"
  },
  { // 12 Kebarangkalian — sederhana
    rajah: '<svg viewBox="0 0 220 225" style="max-width:100%;width:240px" role="img" aria-label="Pemutar dengan 8 sektor sama besar bernombor 7, 2, 9, 6, 3, 12, 5, 8"><circle cx="110" cy="115" r="90" fill="none" stroke="currentColor" stroke-width="2.5"/><g stroke="currentColor" stroke-width="1.5"><path d="M110 115L110 25M110 115L173.6 51.4M110 115L200 115M110 115L173.6 178.6M110 115L110 205M110 115L46.4 178.6M110 115L20 115M110 115L46.4 51.4"/></g><path d="M110 115L150 80" stroke="var(--c)" stroke-width="4" stroke-linecap="round"/><circle cx="110" cy="115" r="5" fill="var(--c)"/><g font-size="16" font-weight="700" fill="currentColor" text-anchor="middle" dominant-baseline="middle"><text x="133" y="59.6">7</text><text x="165.4" y="92">2</text><text x="165.4" y="138">9</text><text x="133" y="170.4">6</text><text x="87" y="170.4">3</text><text x="54.6" y="138">12</text><text x="54.6" y="92">5</text><text x="87" y="59.6">8</text></g></svg>',
    s: "Sebuah pemutar dibahagikan kepada 8 sektor yang sama besar seperti dalam rajah. Pemutar itu diputar sekali. Berapakah kebarangkalian jarum berhenti pada nombor yang <b>genap atau gandaan 3</b>?",
    en: "A spinner has 8 equal sectors as shown. It is spun once. What is the probability that it stops on a number that is even or a multiple of 3?",
    p: ['1/4', '1/2', '3/4', '1'], a: 2, topik: 'Data & Statistik', aras: 'sederhana',
    hurai: "Genap: 2, 6, 8, 12. Gandaan 3: 3, 6, 9, 12. Gabungan (tanpa mengira dua kali): 2, 3, 6, 8, 9, 12 = 6 sektor. Kebarangkalian = 6/8 = <b>3/4</b>. (1 = 4/8 + 4/8, mengira 6 dan 12 dua kali; 1/4 hanya nombor yang genap <i>dan</i> gandaan 3; 1/2 hanya nombor genap.)"
  },
  { // 13 Trigonometri — sederhana
    rajah: '<svg viewBox="0 0 300 170" style="max-width:100%;width:320px" role="img" aria-label="Tanjakan: segi tiga bersudut tegak, sudut 15 darjah dengan lantai, tinggi 0.9 m"><path d="M20 140H260V76Z" fill="none" stroke="var(--c)" stroke-width="3"/><path d="M248 140V128H260" fill="none" stroke="currentColor"/><path d="M70 140A50 50 0 0 0 68.3 127" fill="none" stroke="currentColor"/><g font-size="13" fill="currentColor"><text x="76" y="134">15°</text><text x="266" y="112">0.9 m</text><text x="118" y="96">permukaan condong</text><text x="110" y="160">lantai mengufuk</text></g></svg>',
    s: "Sebuah tanjakan kerusi roda membuat sudut 15° dengan lantai mengufuk dan tingginya 0.9 m. Berapakah panjang permukaan condong tanjakan itu, betul kepada dua tempat perpuluhan?",
    en: "A wheelchair ramp makes an angle of 15° with the horizontal floor and is 0.9 m high. What is the length of the sloping surface, correct to two decimal places?",
    p: ['0.23 m', '0.93 m', '3.36 m', '3.48 m'], a: 3, topik: 'Geometri & Pengukuran', aras: 'sederhana',
    hurai: "Tinggi ialah sisi bertentangan, permukaan condong ialah hipotenus: sin 15° = 0.9 ÷ x → x = 0.9 ÷ sin 15° = 0.9 ÷ 0.2588 ≈ <b>3.48 m</b>. (3.36 m = 0.9 ÷ tan 15°, iaitu jarak mengufuk; 0.93 m = 0.9 ÷ cos 15°; 0.23 m = 0.9 × sin 15°.)"
  },
  { // 14 Logik — sederhana
    s: "Terdapat 20 syiling yang kelihatan sama. Satu daripadanya palsu dan lebih ringan sedikit; yang lain sama berat. Dengan menggunakan neraca dua lengan (tanpa pemberat), berapakah bilangan <b>minimum</b> penimbangan yang pasti dapat mengenal pasti syiling palsu itu?",
    en: "There are 20 identical-looking coins; one is fake and slightly lighter. Using a two-pan balance (no weights), what is the minimum number of weighings that is guaranteed to find the fake coin?",
    p: ['3', '4', '10', '19'], a: 0, topik: 'Penaakulan Logik', aras: 'sederhana',
    hurai: "Setiap penimbangan ada 3 kemungkinan (kiri ringan, kanan ringan, seimbang), jadi 2 penimbangan hanya boleh membezakan 3 × 3 = 9 syiling — tidak cukup untuk 20. Dengan 3: bahagi 7, 7, 6 → kumpulan disyaki ≤ 7 → bahagi 3, 3, 1 (atau 2, 2, 2) → kumpulan ≤ 3 → 1, 1, 1. Jadi <b>3</b>. (4 ialah kaedah bahagi dua; 10 menimbang berpasangan; 19 membandingkan satu demi satu.)"
  },
  { // 15 Pola — sukar
    rajah: '<table><tr><th>Bilangan sisi poligon</th><td>4</td><td>5</td><td>6</td><td>7</td></tr><tr><th>Bilangan pepenjuru</th><td>2</td><td>5</td><td>9</td><td>14</td></tr></table>',
    s: "Jadual menunjukkan bilangan pepenjuru bagi beberapa poligon. Berapakah bilangan pepenjuru bagi poligon yang mempunyai 15 sisi?",
    en: "The table shows the number of diagonals of some polygons. How many diagonals does a 15-sided polygon have?",
    p: ['75', '90', '105', '180'], a: 1, topik: 'Pola & Jujukan', aras: 'sukar',
    hurai: "Dari setiap bucu, pepenjuru boleh dilukis ke (n − 3) bucu lain; setiap pepenjuru dikira dua kali. Bilangan = n(n − 3) ÷ 2 = 15 × 12 ÷ 2 = <b>90</b>. (Atau teruskan beza 3, 4, 5, …: 14, 20, 27, 35, 44, 54, 65, 77, 90.) (180 lupa bahagi dua; 105 = 15 × 14 ÷ 2 termasuk 15 sisi; 75 = 15 × 5.)"
  },
  { // 16 Persamaan linear — sukar
    s: "Umur Along ialah 2 tahun lebih daripada dua kali umur Angah. Umur Angah pula 3 tahun lebih daripada umur Adik. Jumlah umur mereka bertiga ialah 47 tahun. Berapakah umur Along?",
    en: "Along is 2 years older than twice Angah's age. Angah is 3 years older than Adik. Their ages total 47. How old is Along?",
    p: ['9', '12', '24', '26'], a: 3, topik: 'Persamaan Linear', aras: 'sukar',
    hurai: "Adik = x, Angah = x + 3, Along = 2(x + 3) + 2 = 2x + 8. x + (x + 3) + (2x + 8) = 47 → 4x + 11 = 47 → x = 9. Along = 2(9) + 8 = <b>26</b>. Semak: 9 + 12 + 26 = 47 ✓. (24 = 2 × 12, lupa '+2'; 12 dan 9 ialah umur Angah dan Adik.)"
  },
  { // 17 Peratus — sukar
    rajah: '<table><tr><th>Pendapatan bercukai (RM)</th><th>Kadar cukai</th></tr><tr><td>0 – 5 000</td><td>0%</td></tr><tr><td>5 001 – 20 000</td><td>1%</td></tr><tr><td>20 001 – 35 000</td><td>3%</td></tr><tr><td>35 001 – 50 000</td><td>6%</td></tr></table>',
    s: "Jadual menunjukkan kadar cukai pendapatan berperingkat sebuah negara (rekaan): setiap kadar hanya dikenakan ke atas bahagian pendapatan dalam peringkat itu. Pendapatan bercukai Puan Zaiton ialah RM 42 000 setahun. Berapakah cukai pendapatannya?",
    en: "The table shows a (fictional) tiered income tax: each rate applies only to the part of income within that band. Puan Zaiton's taxable income is RM 42 000 a year. How much income tax does she pay?",
    p: ['RM 2 520', 'RM 1 260', 'RM 1 020', 'RM 600'], a: 2, topik: 'Peratus & Matematik Pengguna', aras: 'sukar',
    hurai: "RM 5 000 pertama: 0. RM 15 000 berikutnya × 1% = RM 150. RM 15 000 berikutnya × 3% = RM 450. Baki 42 000 − 35 000 = RM 7 000 × 6% = RM 420. Jumlah = <b>RM 1 020</b>. (RM 2 520 = 6% daripada keseluruhan RM 42 000; RM 1 260 = 3% daripada keseluruhan; RM 600 lupa peringkat 6%.)"
  },
  { // 18 Nisbah luas — sukar
    s: "Pelan sebuah rumah dilukis dengan skala 1 : 200. Luas sebuah bilik pada pelan ialah 12 cm². Berapakah luas sebenar bilik itu?",
    en: "A house plan is drawn to a scale of 1 : 200. A room has an area of 12 cm² on the plan. What is the actual area of the room?",
    p: ['0.24 m²', '4.8 m²', '48 m²', '480 m²'], a: 2, topik: 'Nisbah, Kadar & Laju', aras: 'sukar',
    hurai: "Faktor skala panjang = 200, jadi faktor luas = 200² = 40 000. Luas sebenar = 12 × 40 000 = 480 000 cm². 1 m² = 10 000 cm², jadi luas = <b>48 m²</b>. (0.24 m² = 12 × 200 cm², guna faktor panjang untuk luas; 480 m² dan 4.8 m² ialah ralat penukaran cm² kepada m².)"
  },
  { // 19 Data — sukar (ISI)
    jenis: 'isi',
    s: "Min markah 24 murid dalam sebuah kelas ialah 68. Seorang murid baharu menyertai kelas itu dan menduduki ujian yang sama. Min markah 25 murid itu kini ialah 69. Berapakah markah murid baharu itu?",
    en: "The mean mark of 24 pupils is 68. A new pupil joins and sits the same test. The mean of the 25 pupils is now 69. What is the new pupil's mark?",
    a: 93, unit: 'markah', topik: 'Data & Statistik', aras: 'sukar',
    hurai: "Jumlah asal = 24 × 68 = 1 632. Jumlah baharu = 25 × 69 = 1 725. Markah murid baharu = 1 725 − 1 632 = <b>93</b>. (Ralat biasa: menjawab 69 atau 70, menyangka min naik 1 bermaksud markahnya hanya lebih 1.)"
  },
  { // 20 Geometri bulatan — sukar
    rajah: '<svg viewBox="0 0 250 200" style="max-width:100%;width:280px" role="img" aria-label="Bulatan pusat O, tangen PA di A, perentas AB, sudut PAB 64 darjah"><circle cx="120" cy="110" r="70" fill="none" stroke="var(--c)" stroke-width="2.5"/><path d="M10 180H240" stroke="currentColor" stroke-width="2"/><g stroke="currentColor" stroke-width="1.8" fill="none"><path d="M120 180L175.2 66.9M120 110L120 180M120 110L175.2 66.9"/><path d="M144 180A24 24 0 0 0 130.5 158.4"/></g><circle cx="120" cy="110" r="3" fill="currentColor"/><g font-size="13" fill="currentColor"><text x="104" y="108">O</text><text x="114" y="196">A</text><text x="180" y="62">B</text><text x="230" y="196">P</text><text x="146" y="174">64°</text></g></svg>',
    s: "Dalam rajah, garis lurus AP ialah tangen kepada bulatan berpusat O di titik A. B ialah satu titik pada bulatan dan ∠PAB = 64°. Berapakah saiz ∠AOB?",
    en: "In the diagram, AP is a tangent to the circle with centre O at A. B is a point on the circle and angle PAB = 64°. Find angle AOB.",
    p: ['128°', '116°', '64°', '52°'], a: 0, topik: 'Geometri & Pengukuran', aras: 'sukar',
    hurai: "Jejari OA ⊥ tangen, jadi ∠OAP = 90° dan ∠OAB = 90° − 64° = 26°. OA = OB (jejari), maka ∠OBA = 26°. ∠AOB = 180° − 26° − 26° = <b>128°</b>. (52° = 2 × 26°; 116° = 180° − 64°; 64° ialah sudut di lilitan, bukan di pusat.)"
  }
  ]
});

UKKM_PART(10, { id: 'sains', nama: 'Sains', ikon: '🔬', minit: 30,
  arahan: 'Jawab semua 30 soalan. Pilih satu jawapan yang paling tepat bagi setiap soalan.',
  soalan: [
  { topik: 'Biologi: Sel', s: `Seorang murid memerhati sel X di bawah mikroskop dan merekodkan strukturnya dalam jadual. Sel X paling mungkin ialah…`,
    en: `A student observes cell X under a microscope and records its structures in the table. Cell X is most likely a…`,
    rajah: `<table><tr><th>Struktur</th><th>Dinding sel</th><th>Nukleus</th><th>Kloroplas</th><th>Vakuol besar</th></tr><tr><th>Sel X</th><td>Ada</td><td>Ada</td><td>Tiada</td><td>Ada</td></tr></table>`,
    p: ['sel pipi manusia', 'sel epidermis bawang', 'sel palisad daun', 'sel darah merah'], a: 1,
    hurai: `Dinding sel dan vakuol besar menunjukkan sel tumbuhan, tetapi tiada kloroplas. Sel epidermis bawang ialah sel tumbuhan yang tidak berkloroplas; sel palisad mempunyai banyak kloroplas.` },
  { topik: 'Biologi: Sel', s: `Apakah fungsi membran sel?`,
    en: `What is the function of the cell membrane?`,
    p: ['Memberikan bentuk tetap kepada sel tumbuhan', 'Menjalankan fotosintesis', 'Menyimpan maklumat genetik', 'Mengawal pergerakan bahan keluar dan masuk sel'], a: 3,
    hurai: `Membran sel mengawal bahan yang masuk dan keluar dari sel. Bentuk tetap diberikan oleh dinding sel, fotosintesis oleh kloroplas, dan maklumat genetik disimpan dalam nukleus.` },
  { topik: 'Biologi: Rangsangan dan Gerak Balas', s: `Hujung jari lebih peka terhadap sentuhan berbanding kulit di belakang badan. Apakah sebabnya?`,
    en: `Fingertips are more sensitive to touch than the skin on the back. Why?`,
    p: ['Kulit hujung jari lebih tebal', 'Hujung jari mempunyai lebih banyak salur darah', 'Hujung jari lebih dekat dengan otak', 'Hujung jari mempunyai lebih banyak reseptor sentuhan'], a: 3,
    hurai: `Kepekaan kulit bergantung pada bilangan reseptor di kawasan itu. Hujung jari mempunyai reseptor sentuhan yang sangat banyak berbanding belakang badan.` },
  { topik: 'Biologi: Rangsangan dan Gerak Balas', s: `Sepasu anak pokok diletakkan secara mengiring di dalam bilik gelap. Selepas beberapa hari, pucuknya membengkok ke atas. Gerak balas pucuk ini ialah…`,
    en: `A potted seedling is laid on its side in a dark room. After a few days, its shoot bends upwards. This shoot response is…`,
    p: ['geotropisme positif', 'geotropisme negatif', 'fototropisme positif', 'tigmotropisme'], a: 1,
    hurai: `Pucuk tumbuh melawan arah graviti, jadi ia geotropisme negatif. Bilik gelap memastikan cahaya bukan penyebabnya; akar pula menunjukkan geotropisme positif.` },
  { topik: 'Biologi: Respirasi', s: `Semasa serangan asma, otot pada dinding bronkiol mengecut dan lebih banyak mukus dihasilkan. Apakah kesannya?`,
    en: `During an asthma attack, the muscles in the bronchiole walls contract and more mucus is produced. What is the effect?`,
    p: ['Saluran udara menjadi sempit, jadi pesakit sukar bernafas', 'Alveolus menjadi lebih besar', 'Lebih banyak oksigen meresap ke dalam darah', 'Jantung berhenti berdenyut'], a: 0,
    hurai: `Bronkiol yang menyempit dan dipenuhi mukus mengurangkan aliran udara ke alveolus. Pesakit berasa sesak dada dan sukar bernafas.` },
  { topik: 'Biologi: Respirasi', s: `Larutan glukosa dididihkan, disejukkan, kemudian dicampur dengan yis di dalam sebuah kelalang. Lapisan minyak dituang di atas campuran itu. Selepas sehari, bau alkohol dapat dihidu dan gas yang terbebas mengeruhkan air kapur. Apakah tujuan lapisan minyak?`,
    en: `Glucose solution is boiled, cooled and mixed with yeast in a flask. A layer of oil is poured over the mixture. After a day, alcohol can be smelled and the gas given off turns limewater cloudy. What is the purpose of the oil layer?`,
    p: ['Membekalkan makanan kepada yis', 'Menghalang oksigen daripada udara melarut dalam larutan supaya respirasi anaerob berlaku', 'Mempercepat penyejatan alkohol', 'Membunuh bakteria dalam larutan'], a: 1,
    hurai: `Pendidihan menyingkirkan oksigen terlarut dan lapisan minyak menghalang oksigen masuk semula. Tanpa oksigen, yis menjalankan respirasi anaerob: glukosa → etanol + karbon dioksida + tenaga.` },
  { topik: 'Biologi: Pengangkutan', s: `Darah beroksigen dari peparu memasuki jantung melalui salur darah dan ruang jantung yang manakah?`,
    en: `Oxygenated blood from the lungs enters the heart through which blood vessel and chamber?`,
    p: ['Vena pulmonari; atrium kiri', 'Arteri pulmonari; atrium kanan', 'Vena kava; atrium kanan', 'Aorta; ventrikel kiri'], a: 0,
    hurai: `Vena pulmonari membawa darah beroksigen dari peparu ke atrium kiri. Vena kava membawa darah terdeoksigen dari badan ke atrium kanan, dan aorta membawa darah keluar dari ventrikel kiri.` },
  { topik: 'Biologi: Pembiakan', s: `Bunga raya mempunyai petal yang besar dan berwarna terang serta menghasilkan nektar. Apakah fungsi nektar?`,
    en: `The hibiscus flower has large, brightly coloured petals and produces nectar. What is the function of the nectar?`,
    p: ['Menarik serangga untuk membantu pendebungaan', 'Menghasilkan butir debunga', 'Melindungi bunga daripada hujan', 'Menyerap air dari udara'], a: 0,
    hurai: `Nektar yang manis menarik serangga. Semasa serangga menghisap nektar, debunga melekat pada badannya dan dipindahkan ke stigma bunga lain.` },
  { topik: 'Biologi: Kesihatan Manusia', s: `Cakera kertas yang direndam dalam tiga jenis antiseptik, P, Q dan R, diletakkan di atas agar yang telah dicalit bakteria. Selepas dua hari, diameter kawasan jernih (tiada bakteria) di sekeliling setiap cakera diukur. Antiseptik manakah paling berkesan?`,
    en: `Paper discs soaked in three antiseptics, P, Q and R, are placed on agar spread with bacteria. After two days, the diameter of the clear zone (no bacteria) around each disc is measured. Which antiseptic is the most effective?`,
    rajah: `<table><tr><th>Antiseptik</th><td>P</td><td>Q</td><td>R</td></tr><tr><th>Diameter kawasan jernih (mm)</th><td>5</td><td>18</td><td>0</td></tr></table>`,
    p: ['P', 'Q', 'R', 'Semua sama berkesan'], a: 1,
    hurai: `Kawasan jernih menunjukkan bakteria tidak dapat tumbuh. Kawasan jernih Q paling besar, jadi Q paling berkesan; R tidak berkesan langsung.` },

  { topik: 'Ekologi: Ekosistem', s: `Kulat dan bakteria yang menguraikan daun dan bangkai haiwan dikenali sebagai…`,
    en: `Fungi and bacteria that break down dead leaves and animal remains are known as…`,
    p: ['pengeluar', 'pengguna primer', 'pengurai', 'pemangsa'], a: 2,
    hurai: `Pengurai menguraikan bahan organik mati dan mengembalikan nutrien ke dalam tanah untuk digunakan semula oleh tumbuhan.` },
  { topik: 'Ekologi: Siratan Makanan', s: `Dalam rantai makanan Rumput → Arnab → Musang, satu penyakit telah membunuh kebanyakan arnab. Apakah kesan yang paling mungkin kepada populasi rumput dan musang?`,
    en: `In the food chain Grass → Rabbit → Fox, a disease kills most of the rabbits. What is the most likely effect on the grass and fox populations?`,
    p: ['Rumput bertambah; musang berkurang', 'Rumput berkurang; musang bertambah', 'Rumput berkurang; musang berkurang', 'Rumput bertambah; musang bertambah'], a: 0,
    hurai: `Kurang arnab bermaksud kurang rumput dimakan, jadi rumput bertambah. Musang kehilangan sumber makanan, jadi populasinya berkurang.` },
  { topik: 'Ekologi: Biodiversiti', s: `Jadual menunjukkan bilangan spesies burung yang direkodkan di tiga kawasan dalam tempoh yang sama. Apakah kesimpulan yang paling sesuai?`,
    en: `The table shows the number of bird species recorded in three areas over the same period. What is the most suitable inference?`,
    rajah: `<table><tr><th>Kawasan</th><th>Bilangan spesies burung</th></tr><tr><td>Hutan simpan</td><td>85</td></tr><tr><td>Ladang kelapa sawit</td><td>20</td></tr><tr><td>Kawasan bandar</td><td>12</td></tr></table>`,
    p: ['Penukaran hutan kepada ladang atau bandar mengurangkan biodiversiti', 'Ladang kelapa sawit menyokong lebih banyak spesies daripada hutan', 'Burung lebih suka kawasan bandar', 'Bilangan spesies tidak dipengaruhi oleh habitat'], a: 0,
    hurai: `Hutan simpan mempunyai pelbagai habitat dan sumber makanan, jadi menyokong paling banyak spesies. Apabila hutan ditukar kepada ladang atau bandar, bilangan spesies berkurang.` },

  { topik: 'Kimia: Jirim', s: `Antara pernyataan berikut, yang manakah menerangkan susunan dan pergerakan zarah dalam pepejal?`,
    en: `Which statement describes the arrangement and movement of particles in a solid?`,
    p: ['Zarah tersusun jauh dan bergerak bebas secara rawak', 'Zarah tersusun rapat tetapi tidak teratur dan boleh menggelongsor', 'Zarah tersusun rapat dan teratur serta bergetar di kedudukan tetap', 'Zarah tidak bergerak langsung'], a: 2,
    hurai: `Zarah pepejal tersusun rapat dalam corak teratur dan hanya bergetar di kedudukan tetap. Pilihan pertama menerangkan gas dan pilihan kedua menerangkan cecair.` },
  { topik: 'Kimia: Jadual Berkala dan Campuran', s: `Kaedah manakah paling sesuai untuk mengasingkan serbuk besi daripada pasir?`,
    en: `Which method is the most suitable for separating iron filings from sand?`,
    p: ['Penyulingan', 'Penyejatan', 'Kromatografi', 'Menggunakan magnet'], a: 3,
    hurai: `Besi ialah bahan magnet tetapi pasir bukan. Magnet menarik serbuk besi dan meninggalkan pasir.` },
  { topik: 'Kimia: Udara', s: `Tiga batang paku besi diletakkan dalam tiga tabung uji seperti dalam jadual. Selepas seminggu, hanya paku dalam P berkarat. Apakah kesimpulannya?`,
    en: `Three iron nails are placed in three test tubes as shown in the table. After a week, only the nail in P has rusted. What is the conclusion?`,
    rajah: `<table><tr><th>Tabung uji</th><th>Keadaan</th><th>Pemerhatian</th></tr><tr><td>P</td><td style="text-align:left">Air paip dan udara</td><td>Berkarat</td></tr><tr><td>Q</td><td style="text-align:left">Air yang telah dididihkan, dilitupi minyak</td><td>Tidak berkarat</td></tr><tr><td>R</td><td style="text-align:left">Udara kering (kalsium klorida kontang)</td><td>Tidak berkarat</td></tr></table>`,
    p: ['Pengaratan hanya memerlukan air', 'Pengaratan hanya memerlukan udara', 'Pengaratan memerlukan kedua-dua air dan oksigen', 'Minyak menyebabkan pengaratan'], a: 2,
    hurai: `Q ada air tetapi tiada oksigen, dan R ada udara tetapi tiada air; kedua-duanya tidak berkarat. Hanya P yang mempunyai air dan oksigen berkarat.` },
  { topik: 'Kimia: Air dan Larutan', s: `Gula dikacau ke dalam secawan air sehingga tiada lagi gula dapat larut dan ada gula termendap di dasar cawan. Bagaimanakah lebih banyak gula boleh dilarutkan dalam larutan itu?`,
    en: `Sugar is stirred into a cup of water until no more will dissolve and some settles at the bottom. How can more sugar be dissolved in this solution?`,
    p: ['Menyejukkan larutan di dalam peti sejuk', 'Membiarkan larutan tanpa dikacau', 'Memanaskan larutan', 'Menambah lebih banyak gula'], a: 2,
    hurai: `Larutan itu sudah tepu pada suhu tersebut. Keterlarutan gula bertambah apabila suhu meningkat, jadi memanaskan larutan membolehkan lebih banyak gula larut.` },
  { topik: 'Kimia: Asid dan Alkali', s: `Antara bahan berikut, yang manakah bersifat alkali?`,
    en: `Which of the following substances is alkaline?`,
    p: ['Cuka', 'Jus limau', 'Larutan sabun', 'Minuman berkarbonat'], a: 2,
    hurai: `Larutan sabun bersifat alkali (pH lebih daripada 7) dan terasa licin. Cuka, jus limau dan minuman berkarbonat bersifat asid.` },
  { topik: 'Kimia: Kereaktifan Logam', s: `Siri kereaktifan, bermula daripada yang paling reaktif, ialah: K, Na, Ca, Mg, Al, C, Zn, Fe, Sn, Pb, Cu. Kumpulan logam manakah boleh diekstrak daripada oksidanya dengan pemanasan bersama karbon?`,
    en: `The reactivity series, from most reactive, is: K, Na, Ca, Mg, Al, C, Zn, Fe, Sn, Pb, Cu. Which group of metals can be extracted from their oxides by heating with carbon?`,
    p: ['Kalium, natrium dan kalsium', 'Magnesium dan aluminium', 'Zink, besi dan plumbum', 'Aluminium, zink dan besi'], a: 2,
    hurai: `Karbon hanya dapat menyingkirkan oksigen daripada oksida logam yang terletak di bawahnya dalam siri, iaitu Zn, Fe, Sn, Pb dan Cu. Aluminium terletak di atas karbon.` },
  { topik: 'Kimia: Termokimia', s: `Kalsium karbonat hanya terurai menjadi kalsium oksida dan karbon dioksida jika dipanaskan dengan kuat secara berterusan. Penguraian berhenti apabila pemanasan dihentikan. Tindak balas ini ialah…`,
    en: `Calcium carbonate decomposes into calcium oxide and carbon dioxide only when heated strongly and continuously. It stops when heating stops. This reaction is…`,
    p: ['eksotermik kerana membebaskan haba', 'endotermik kerana memerlukan bekalan haba yang berterusan', 'eksotermik kerana menghasilkan gas', 'bukan tindak balas kimia kerana tiada perubahan tenaga'], a: 1,
    hurai: `Tindak balas yang memerlukan haba secara berterusan menyerap tenaga haba, jadi ia endotermik. Penghasilan gas tidak menentukan sama ada tindak balas eksotermik atau endotermik.` },

  { topik: 'Fizik: Keelektrikan', s: `Graf menunjukkan arus, I, melawan beza keupayaan, V, bagi dua perintang P dan Q. Berapakah rintangan P dan Q?`,
    en: `The graph shows current, I, against potential difference, V, for two resistors P and Q. What are the resistances of P and Q?`,
    rajah: `<svg viewBox="0 0 400 255" style="max-width:420px" role="img" aria-label="Graf I melawan V bagi P dan Q"><g stroke="currentColor" stroke-width="1.5" fill="none"><line x1="60" y1="210" x2="380" y2="210"/><line x1="60" y1="210" x2="60" y2="20"/></g><g stroke-dasharray="4 4" stroke-width="1" style="stroke:var(--muted)"><line x1="60" y1="30" x2="360" y2="30"/><line x1="60" y1="120" x2="360" y2="120"/><line x1="360" y1="30" x2="360" y2="210"/></g><line x1="60" y1="210" x2="360" y2="30" style="stroke:var(--c)" stroke-width="3"/><line x1="60" y1="210" x2="360" y2="120" stroke="currentColor" stroke-width="2.5" stroke-dasharray="8 5"/><g font-size="14" font-weight="700" fill="currentColor"><text x="366" y="36">P</text><text x="366" y="126">Q</text></g><g font-size="13" fill="currentColor" text-anchor="middle"><text x="60" y="228">0</text><text x="160" y="228">2</text><text x="260" y="228">4</text><text x="360" y="228">6</text><text x="220" y="250">V (V)</text></g><g font-size="13" fill="currentColor" text-anchor="end"><text x="54" y="184">0.1</text><text x="54" y="154">0.2</text><text x="54" y="124">0.3</text><text x="54" y="94">0.4</text><text x="54" y="64">0.5</text><text x="54" y="34">0.6</text></g><text x="66" y="16" font-size="13" fill="currentColor">I (A)</text></svg>`,
    p: ['P: 10 Ω; Q: 20 Ω', 'P: 20 Ω; Q: 10 Ω', 'P: 0.1 Ω; Q: 0.05 Ω', 'P dan Q: 10 Ω'], a: 0,
    hurai: `Pada V = 6 V, arus P = 0.6 A dan arus Q = 0.3 A. R = V/I, jadi P = 6 ÷ 0.6 = 10 Ω dan Q = 6 ÷ 0.3 = 20 Ω. Garis yang lebih landai pada graf I–V bermaksud rintangan lebih besar.` },
  { topik: 'Fizik: Elektrik dan Kemagnetan', s: `Mengapakah suis dan fius pada perkakas elektrik mesti disambung pada wayar hidup?`,
    en: `Why must the switch and fuse of an electrical appliance be connected to the live wire?`,
    p: ['Supaya perkakas terputus daripada voltan tinggi wayar hidup apabila suis dimatikan atau fius putus', 'Supaya perkakas menggunakan kurang tenaga', 'Supaya voltan bekalan bertambah', 'Supaya wayar neutral tidak menjadi panas'], a: 0,
    hurai: `Wayar hidup membawa voltan tinggi. Jika suis atau fius berada pada wayar hidup, perkakas terputus daripada voltan tinggi apabila suis dimatikan atau fius putus, jadi selamat disentuh.` },
  { topik: 'Fizik: Daya dan Gerakan', s: `Antara berikut, yang manakah BUKAN kesan daya ke atas sesuatu objek?`,
    en: `Which of the following is NOT an effect of a force on an object?`,
    p: ['Mengubah bentuk objek', 'Mengubah laju objek', 'Mengubah arah gerakan objek', 'Mengubah jisim objek'], a: 3,
    hurai: `Daya boleh mengubah bentuk, laju dan arah gerakan objek. Jisim ialah kuantiti jirim dalam objek dan tidak berubah apabila daya dikenakan.` },
  { topik: 'Fizik: Haba', s: `Mengapakah pakaian berwarna cerah lebih selesa dipakai pada hari yang panas?`,
    en: `Why are light-coloured clothes more comfortable to wear on a hot day?`,
    p: ['Warna cerah menyerap lebih banyak haba', 'Warna cerah ialah konduktor haba yang baik', 'Warna cerah menghasilkan angin', 'Warna cerah memantulkan lebih banyak sinaran haba dan menyerap kurang haba'], a: 3,
    hurai: `Permukaan cerah ialah pemantul haba yang baik dan penyerap haba yang lemah. Permukaan gelap pula menyerap lebih banyak sinaran haba daripada Matahari.` },
  { topik: 'Fizik: Cahaya', s: `Cahaya putih disinari melalui penapis biru, kemudian melalui penapis merah, sebelum sampai ke skrin putih. Apakah yang dilihat pada skrin?`,
    en: `White light passes through a blue filter and then a red filter before reaching a white screen. What is seen on the screen?`,
    p: ['Cahaya magenta', 'Cahaya merah', 'Cahaya biru', 'Tiada cahaya (skrin gelap)'], a: 3,
    hurai: `Penapis biru hanya membenarkan cahaya biru melaluinya. Penapis merah pula menyerap cahaya biru itu, jadi tiada cahaya sampai ke skrin.` },
  { topik: 'Fizik: Bunyi', s: `Seorang murid berdiri 85 m dari sebuah dinding tinggi dan menepuk tangan. Gema didengar 0.5 s kemudian. Berapakah laju bunyi yang dihitung?`,
    en: `A student stands 85 m from a tall wall and claps. The echo is heard 0.5 s later. What speed of sound is calculated?`,
    p: ['42.5 m s⁻¹', '170 m s⁻¹', '340 m s⁻¹', '680 m s⁻¹'], a: 2,
    hurai: `Bunyi bergerak ke dinding dan kembali: jarak = 2 × 85 = 170 m. Laju = 170 ÷ 0.5 = 340 m s⁻¹.` },
  { topik: 'Fizik: Tenaga dan Kuasa', s: `Mentol LED 9 W memberikan kecerahan yang hampir sama dengan mentol berfilamen 60 W. Mengapakah mentol LED lebih jimat tenaga?`,
    en: `A 9 W LED bulb gives about the same brightness as a 60 W filament bulb. Why does the LED bulb save energy?`,
    p: ['Mentol LED menggunakan voltan yang lebih tinggi', 'Mentol LED menukar lebih banyak tenaga elektrik kepada cahaya dan kurang kepada haba', 'Mentol LED tidak memerlukan tenaga elektrik', 'Mentol LED menghasilkan lebih banyak haba'], a: 1,
    hurai: `Mentol berfilamen membazirkan kebanyakan tenaga sebagai haba. Mentol LED menukar sebahagian besar tenaga elektrik kepada cahaya, jadi kuasa yang diperlukan untuk kecerahan yang sama jauh lebih rendah.` },
  { topik: 'Fizik: Keradioaktifan', s: `Keaktifan sebuah sampel radioaktif diukur setiap 2 jam. Keputusan ditunjukkan dalam jadual. Apakah separuh hayat sampel itu?`,
    en: `The activity of a radioactive sample is measured every 2 hours. The results are in the table. What is the half-life of the sample?`,
    rajah: `<table><tr><th>Masa (jam)</th><td>0</td><td>2</td><td>4</td><td>6</td></tr><tr><th>Keaktifan (Bq)</th><td>800</td><td>400</td><td>200</td><td>100</td></tr></table>`,
    p: ['1 jam', '2 jam', '4 jam', '6 jam'], a: 1,
    hurai: `Separuh hayat ialah masa untuk keaktifan berkurang kepada separuh. Keaktifan turun daripada 800 Bq kepada 400 Bq dalam 2 jam, dan terus separuh setiap 2 jam.` },

  { topik: 'Bumi & Angkasa: Sistem Suria', s: `Apakah yang menyebabkan planet-planet terus mengorbit Matahari?`,
    en: `What keeps the planets orbiting the Sun?`,
    p: ['Daya graviti Matahari', 'Angin suria', 'Daya magnet Bumi', 'Putaran planet pada paksinya'], a: 0,
    hurai: `Daya graviti Matahari yang sangat besar menarik planet ke arahnya, manakala gerakan planet menghalangnya jatuh ke Matahari. Gabungan ini mengekalkan planet dalam orbit.` },
  { topik: 'Bumi & Angkasa: Cuaca Angkasa', s: `Jadual menunjukkan purata bilangan tompok matahari bagi beberapa tahun. Berdasarkan jadual, kitaran aktiviti tompok matahari berulang kira-kira setiap…`,
    en: `The table shows the average number of sunspots in some years. Based on the table, the sunspot cycle repeats about every…`,
    rajah: `<table><tr><th>Tahun</th><td>2008</td><td>2014</td><td>2019</td><td>2024</td></tr><tr><th>Purata bilangan tompok matahari</th><td>4 (minimum)</td><td>113 (maksimum)</td><td>4 (minimum)</td><td>154 (maksimum)</td></tr></table>`,
    p: ['5 tahun', '11 tahun', '22 tahun', '50 tahun'], a: 1,
    hurai: `Dari satu minimum (2008) ke minimum berikutnya (2019) ialah 11 tahun. Begitu juga dari maksimum 2014 ke maksimum 2024–2025, kira-kira 10–11 tahun.` },
  { topik: 'Bumi & Angkasa: Meteoroid, Asteroid dan Komet', s: `Meteoroid yang tidak terbakar sepenuhnya di atmosfera dan jatuh ke permukaan Bumi dikenali sebagai…`,
    en: `A meteoroid that does not burn up completely in the atmosphere and lands on the Earth's surface is called a…`,
    p: ['meteor', 'asteroid', 'komet', 'meteorit'], a: 3,
    hurai: `Meteor ialah jalur cahaya ketika meteoroid terbakar di atmosfera. Bahagian yang sampai ke permukaan Bumi dipanggil meteorit.` },
  ] });

UKKM_PART(10, {
  id: 'eng', nama: 'Bahasa Inggeris', ikon: '📖', minit: 30, jenis: 'objektif',
  arahan: 'Read each text carefully and answer the questions that follow. Choose the best answer (A, B, C or D).',
  petikan: [
    { id: 'P1', tajuk: 'Programme: STEM Discovery Day for Form 3 Visitors', teks: `
<p>Faculty of Science, Universiti Sains Tanjung · Saturday, 17 October</p>
<table style="border-collapse:collapse;margin:6px 0 10px">
<tr><th style="border:1px solid var(--line);padding:4px 8px;text-align:left">Time</th><th style="border:1px solid var(--line);padding:4px 8px;text-align:left">Activity</th><th style="border:1px solid var(--line);padding:4px 8px;text-align:left">Venue</th></tr>
<tr><td style="border:1px solid var(--line);padding:4px 8px">8.30 – 9.00 a.m.</td><td style="border:1px solid var(--line);padding:4px 8px">Registration</td><td style="border:1px solid var(--line);padding:4px 8px">Main Lobby</td></tr>
<tr><td style="border:1px solid var(--line);padding:4px 8px">9.00 – 9.45 a.m.</td><td style="border:1px solid var(--line);padding:4px 8px">Welcome talk: Careers in Science</td><td style="border:1px solid var(--line);padding:4px 8px">Lecture Hall A</td></tr>
<tr><td style="border:1px solid var(--line);padding:4px 8px">10.00 – 11.30 a.m.</td><td style="border:1px solid var(--line);padding:4px 8px">Lab session 1 (Group 1: Chemistry · Group 2: Physics)</td><td style="border:1px solid var(--line);padding:4px 8px">Labs 1 and 2</td></tr>
<tr><td style="border:1px solid var(--line);padding:4px 8px">11.30 a.m. – 12.00 p.m.</td><td style="border:1px solid var(--line);padding:4px 8px">Break</td><td style="border:1px solid var(--line);padding:4px 8px">Cafeteria</td></tr>
<tr><td style="border:1px solid var(--line);padding:4px 8px">12.00 – 1.00 p.m.</td><td style="border:1px solid var(--line);padding:4px 8px">Lab session 2 (groups swap)</td><td style="border:1px solid var(--line);padding:4px 8px">Labs 1 and 2</td></tr>
<tr><td style="border:1px solid var(--line);padding:4px 8px">1.00 – 2.00 p.m.</td><td style="border:1px solid var(--line);padding:4px 8px">Lunch and prayers</td><td style="border:1px solid var(--line);padding:4px 8px">Cafeteria / Surau</td></tr>
<tr><td style="border:1px solid var(--line);padding:4px 8px">2.00 – 3.00 p.m.</td><td style="border:1px solid var(--line);padding:4px 8px">Robotics demonstration</td><td style="border:1px solid var(--line);padding:4px 8px">Lecture Hall A</td></tr>
</table>
<p><b>Note:</b> Closed shoes must be worn in the labs. Students who arrive after 9.00 a.m. must report to the Faculty office before joining their group, as they will need a visitor’s tag.</p>` },
    { id: 'P2', tajuk: 'Dialogue: Can We Trust This Source?', teks: `
<p><i>Haikal and Priya are in the school resource centre with the teacher-librarian, Puan Zaleha.</i></p>
<p><b>Haikal:</b> Puan, our project is on whether eating breakfast improves concentration. We found a website that says skipping breakfast lowers your IQ by 20 points!</p>
<p><b>Puan Zaleha:</b> That’s a big claim. Who wrote it?</p>
<p><b>Haikal:</b> Er… it doesn’t say. But it has thousands of shares.</p>
<p><b>Priya:</b> And there are advertisements for a breakfast cereal all over the page.</p>
<p><b>Puan Zaleha:</b> Exactly. A page that earns money from cereal advertisements has a reason to make breakfast sound important. That doesn’t prove the claim is wrong, but you should treat it with caution. Always check who is behind the information, when it was published and whether it gives evidence.</p>
<p><b>Priya:</b> What about this article from a university health journal? It was published in 2021 and lists the studies it used.</p>
<p><b>Puan Zaleha:</b> That’s much more reliable. You could still mention the website in your project, as an example of a doubtful claim.</p>
<p><b>Haikal:</b> So popular doesn’t mean true.</p>
<p><b>Puan Zaleha:</b> Not at all. Some of the least accurate posts are shared the most by readers, because they are surprising.</p>` },
    { id: 'P3', tajuk: 'Article: Hidden Treasure in Old Phones', teks: `
<p>Many Malaysian households have at least one old mobile phone lying in a drawer. Together with broken laptops, chargers and televisions, these items are known as electronic waste, or e-waste. The amount grows every year as people replace their devices more often.</p>
<p>E-waste becomes a problem when it is thrown away with ordinary rubbish. Many devices contain lead, mercury and other toxic substances, which can leak from landfills into the soil and groundwater. Burning e-waste in the open, as some unlicensed collectors do to recover copper from cables, releases harmful smoke.</p>
<p>Yet e-waste is also valuable. A tonne of old phones contains far more gold than a tonne of rock from a typical gold mine, as well as silver, copper and other metals used in batteries. Recovering these materials reduces the need for new mining, which damages forests and uses large amounts of energy.</p>
<p>The challenge is getting e-waste to the right place. Licensed recycling plants have the equipment to separate metals safely, but many people do not know where to send their old devices, or they keep them “just in case”. In recent years, the authorities have worked with local councils and shopping malls to set up collection points, and some phone shops accept old phones when customers buy new ones.</p>
<p>Before handing over a device, users should delete their personal data. A phone that is recycled carefully can become part of a new device; one that is dumped carelessly can poison a river for years.</p>` }
  ],
  soalan: [
    { petikan: 'P1', topik: 'Main idea / purpose', s: 'What is the main purpose of this text?',
      p: ['To show the schedule of activities for a visit', 'To advertise science courses offered by the university', 'To list the safety rules for using university laboratories', 'To invite students to apply for a robotics competition'], a: 0,
      hurai: `It is a "Programme" with times, activities and venues for "Form 3 Visitors" on one day. Only one safety rule (closed shoes) is mentioned.` },
    { petikan: 'P1', topik: 'Specific detail', s: 'Where will the robotics demonstration take place?',
      p: ['In the Main Lobby', 'In Labs 1 and 2', 'In Lecture Hall A', 'In the Faculty office'], a: 2,
      hurai: `"2.00 – 3.00 p.m. Robotics demonstration: Lecture Hall A".` },
    { petikan: 'P1', topik: 'Vocabulary in context', s: 'In “Lab session 2 (groups <b>swap</b>)”, the word <b>swap</b> means',
      p: ['trade their belongings with each other', 'change places with each other', 'replace their broken equipment', 'leave the building for a break'], a: 1,
      hurai: `In session 1, Group 1 does Chemistry and Group 2 does Physics. In session 2 they "swap", so each group moves to the other lab.` },
    { petikan: 'P1', topik: 'Reference', s: 'In the note, <b>they</b> in “as they will need a visitor’s tag” refers to',
      p: ['the staff who work in the Faculty office', 'the groups already in the labs', 'the students wearing closed shoes', 'students arriving after 9.00 a.m.'], a: 3,
      hurai: `"Students who arrive after 9.00 a.m. must report to the Faculty office ... as they will need a visitor’s tag." Late students need tags; the office staff give them out.` },
    { petikan: 'P1', topik: 'Inference', s: 'When will students in Group 2 be in the Chemistry lab?',
      p: ['10.00 – 11.30 a.m.', '12.00 – 1.00 p.m.', '9.00 – 9.45 a.m.', '2.00 – 3.00 p.m.'], a: 1,
      hurai: `Group 2 does Physics in session 1 (10.00 – 11.30 a.m.). In session 2 (12.00 – 1.00 p.m.) the "groups swap", so Group 2 moves to Chemistry.` },

    { petikan: 'P2', topik: 'Main idea / purpose', s: 'What is the conversation mainly about?',
      p: ['Whether students should eat breakfast before school', 'Why university journals are difficult to understand', 'How to judge whether a source can be trusted', 'How to get more people to share a project online'], a: 2,
      hurai: `Puan Zaleha teaches them to "check who is behind the information, when it was published and whether it gives evidence". Breakfast is only the project topic.` },
    { petikan: 'P2', topik: 'Specific detail', s: 'What makes Priya doubt the website?',
      p: ['It was published many years ago.', 'Its writer is a well-known doctor.', 'It has fewer shares than the journal article.', 'It is covered in advertisements for a cereal.'], a: 3,
      hurai: `Priya points out, "there are advertisements for a breakfast cereal all over the page". The page has "thousands of shares", and no writer is named.` },
    { petikan: 'P2', topik: 'Vocabulary in context', s: 'In “you should <b>treat</b> it with caution”, the word <b>treat</b> means',
      p: ['regard or deal with in a certain way', 'give medicine to make a sick person well', 'buy something special for a friend', 'discuss in a formal meeting'], a: 0,
      hurai: `Puan Zaleha means the students should regard the claim carefully and not fully trust it. The medical and "special gift" meanings of "treat" do not fit.` },
    { petikan: 'P2', topik: 'Reference', s: 'In Puan Zaleha’s last line, <b>they</b> in “because they are surprising” refers to',
      p: ['the readers who share posts', 'the studies in the journal', 'the least accurate posts', 'the cereal advertisements'], a: 2,
      hurai: `"Some of the least accurate posts are shared the most by readers, because they are surprising." The posts are surprising, which is why readers share them.` },
    { petikan: 'P2', topik: 'Inference / attitude', s: 'What is Puan Zaleha’s view of the website?',
      p: ['It is useless and should never be looked at.', 'It is weak evidence but useful as an example.', 'It is reliable because so many people have shared it.', 'It is more useful than the university journal article.'], a: 1,
      hurai: `She says to "treat it with caution", yet adds, "You could still mention the website in your project, as an example of a doubtful claim".` },

    { petikan: 'P3', topik: 'Main idea / purpose', s: 'What is the writer’s main purpose?',
      p: ['To compare the prices of new and used phones', 'To explain how gold is mined in Malaysia', 'To warn people never to buy electronic devices', 'To show why e-waste should be recycled properly'], a: 3,
      hurai: `The article explains the dangers of dumping e-waste, the value of the materials inside it, and where to send old devices. Gold mining is mentioned only for comparison.` },
    { petikan: 'P3', topik: 'Specific detail', s: 'According to the article, what do some unlicensed collectors do?',
      p: ['Burn e-waste to get copper from cables', 'Sell old phones cheaply to people who need them', 'Delete personal data from old phones', 'Bury batteries deep in landfills'], a: 0,
      hurai: `"Burning e-waste in the open, as some unlicensed collectors do to recover copper from cables, releases harmful smoke."` },
    { petikan: 'P3', topik: 'Vocabulary in context', s: 'In “Recovering these materials reduces the need for new mining”, <b>recovering</b> means',
      p: ['becoming healthy again after an illness', 'covering something again with a new layer', 'getting back useful materials from waste', 'waking up after being unconscious'], a: 2,
      hurai: `"These materials" are the gold, silver and copper inside old phones. Taking them out for reuse means less new mining is needed.` },
    { petikan: 'P3', topik: 'Reference', s: 'In “or they keep <b>them</b> ‘just in case’”, <b>them</b> refers to',
      p: ['the licensed recycling plants', 'their old devices', 'the shopping malls', 'the metals inside phones'], a: 1,
      hurai: `"Many people do not know where to send their old devices, or they keep them ‘just in case’." People keep old devices; they do not keep recycling plants or malls.` },
    { petikan: 'P3', topik: 'Inference', s: 'Why does the writer describe old phones as “hidden treasure”?',
      p: ['People often hide their phones in drawers to protect them.', 'Phone shops pay customers in gold for their old phones.', 'Old phones are worth more than new ones.', 'Old phones contain valuable metals that people often overlook.'], a: 3,
      hurai: `"A tonne of old phones contains far more gold than a tonne of rock from a typical gold mine", yet many lie forgotten "in a drawer". Their value is not obvious.` }
  ]
});

// UKKM Set 10 — Ujian Keperibadian (skala 4 mata), 100 item. Item terbalik bukan-kejujuran: 28.
UKKM_PART(10, {
  id: 'per', nama: 'Ujian Keperibadian', ikon: '🧭', minit: 30,
  arahan: "Baca setiap pernyataan dan pilih <b>Sangat setuju</b>, <b>Setuju</b>, <b>Tidak setuju</b> atau <b>Sangat tidak setuju</b> mengikut diri anda yang sebenar. Jawab dengan jujur, logik dan konsisten; beberapa idea diulang dengan ayat berbeza. Bagi situasi asrama yang belum anda alami, jawab mengikut tindakan yang paling mungkin anda lakukan. Masa: kira-kira 18 saat bagi setiap item.",
  skala: ["Sangat setuju","Setuju","Tidak setuju","Sangat tidak setuju"],
  item: [
    { s: "Saya merungut dan memotong barisan apabila perlu menunggu giliran bilik air.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: [2, 3], hurai: "Bersabar dengan kemudahan bersama penting di asrama." },
    { s: "Saya mampu mengekalkan semangat sepanjang minggu peperiksaan yang panjang.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: [0, 1], hurai: "Ketahanan diri membantu menghadapi tempoh yang mencabar." },
    { s: "Saya mengambil alih tugas menghubungi guru penasihat apabila kelab memerlukan kelulusan.", trait: "Kepimpinan & Inisiatif", pos: [0, 1], hurai: "Menguruskan urusan rasmi menunjukkan inisiatif dan tanggungjawab." },
    { id: 'ea2', pasangan: 'ea1', s: "Apabila menghadapi masalah besar, fikiran saya bercelaru dan saya hanya mampu bersedih.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: [2, 3], hurai: "Fikiran yang bercelaru menghalang penyelesaian masalah." },
    { s: "Saya tidak pernah terlupa tarikh akhir sebarang tugasan.", trait: "Skala Kejujuran", pos: [2, 3], hurai: "Hampir semua pelajar pernah terlupa; jawapan jujur lebih realistik." },
    { id: 'sb2', pasangan: 'sb1', s: "Saya berpuas hati dengan keputusan sederhana dan malas berusaha lebih.", trait: "Minat Ilmu, Sains & Motivasi", pos: [2, 3], hurai: "Berpuas hati dengan keputusan sederhana menunjukkan motivasi yang rendah." },
    { s: "Saya boleh menenangkan diri sebelum membuat panggilan penting.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: [0, 1], hurai: "Kawalan kegelisahan membantu komunikasi." },
    { id: 'ia1', pasangan: 'ia2', s: "Saya tetap meluangkan masa untuk mengulang kaji semasa cuti sekolah.", trait: "Integriti & Disiplin Diri", pos: [0, 1], hurai: "Disiplin diri tetap diamalkan di luar waktu sekolah." },
    { s: "Saya suka memikirkan cara sains boleh menyelesaikan masalah masyarakat.", trait: "Minat Ilmu, Sains & Motivasi", pos: [0, 1], hurai: "Sains untuk masyarakat selari dengan matlamat MRSM." },
    { s: "Saya membuat keputusan berdasarkan fakta, bukan perasaan semata-mata.", trait: "Kepimpinan & Inisiatif", pos: [0, 1], hurai: "Keputusan berasaskan fakta lebih adil dan tepat." },
    { s: "Saya mengambil makanan rakan sebilik di dalam loker dan menganggapnya biasa.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: [2, 3], hurai: "Mengambil barang tanpa izin merosakkan kepercayaan." },
    { s: "Saya mengajak rakan sekumpulan menyemak kerja bersama sebelum dihantar.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: [0, 1], hurai: "Semakan bersama meningkatkan mutu kerja pasukan." },
    { id: 'eb2', pasangan: 'eb1', s: "Saya menuduh hakim berat sebelah setiap kali pasukan saya kalah.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: [2, 3], hurai: "Menyalahkan orang lain menunjukkan kematangan emosi yang rendah." },
    { id: 'sa2', pasangan: 'sa1', s: "Saya rasa aktiviti pengaturcaraan dan reka bentuk itu leceh dan elok dielakkan.", trait: "Minat Ilmu, Sains & Motivasi", pos: [2, 3], hurai: "Mengelak aktiviti teknologi kurang sesuai bagi calon MRSM." },
    { id: 'ma1', pasangan: 'ma2', s: "Saya selesa menguruskan kehidupan harian di asrama seperti makan, mandi dan belajar mengikut jadual.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: [0, 1], hurai: "Keselesaan dengan rutin asrama menunjukkan kesediaan." },
    { s: "Saya kekal tenang apabila bas lewat dan saya mungkin terlewat.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: [0, 1], hurai: "Ketenangan menghadapi perkara di luar kawalan menunjukkan kestabilan." },
    { s: "Saya membaca nota tambahan sebelum guru memulakan topik baharu.", trait: "Minat Ilmu, Sains & Motivasi", pos: [0, 1], hurai: "Persediaan awal menunjukkan motivasi." },
    { s: "Saya sentiasa menjaga meja saya kemas tanpa sekali pun membiarkannya bersepah.", trait: "Skala Kejujuran", pos: [2, 3], hurai: "Hampir setiap orang pernah membiarkan mejanya bersepah; jawapan jujur lebih dipercayai." },
    { s: "Saya menyimpan peralatan sukan sekolah dengan baik selepas latihan.", trait: "Integriti & Disiplin Diri", pos: [0, 1], hurai: "Menjaga harta sekolah menunjukkan amanah." },
    { s: "Saya menukar jawapan dalam kertas yang sudah ditanda sebelum meminta guru menyemak semula markah.", trait: "Integriti & Disiplin Diri", pos: [2, 3], hurai: "Mengubah jawapan selepas ditanda ialah penipuan." },
    { s: "Saya menyusun jadual mandi supaya tidak berebut dengan rakan sedorm.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: [0, 1], hurai: "Perancangan mengelakkan konflik di asrama." },
    { s: "Saya menyimpan nombor telefon warden dan keluarga di tempat yang mudah dicapai.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: [0, 1], hurai: "Persediaan komunikasi penting untuk kecemasan." },
    { s: "Saya mengikut arahan guru bertugas tentang kebersihan kawasan sekolah.", trait: "Integriti & Disiplin Diri", pos: [0, 1], hurai: "Mematuhi arahan menunjukkan disiplin." },
    { id: 'ib1', pasangan: 'ib2', s: "Saya memaklumkan ibu bapa dengan jujur tentang tempat saya pergi ketika keluar bersama kawan.", trait: "Integriti & Disiplin Diri", pos: [0, 1], hurai: "Jujur kepada ibu bapa membina kepercayaan." },
    { s: "Saya membasuh pakaian dalam dan stoking saya setiap hari.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: [0, 1], hurai: "Kebersihan diri ialah asas hidup berasrama." },
    { s: "Saya menetapkan peraturan kumpulan bersama-sama ahli pada awal projek.", trait: "Kepimpinan & Inisiatif", pos: [0, 1], hurai: "Peraturan yang dipersetujui bersama memudahkan pasukan bekerja." },
    { s: "Saya berasa sangat terganggu dan marah apabila rakan mengubah barang di meja saya.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: [2, 3], hurai: "Reaksi berlebihan terhadap perkara kecil menunjukkan emosi kurang stabil." },
    { s: "Saya menyerahkan tugas memimpin kepada pelajar lain kerana saya mahu bermain permainan video.", trait: "Kepimpinan & Inisiatif", pos: [2, 3], hurai: "Mengutamakan hiburan berbanding tanggungjawab menunjukkan inisiatif rendah." },
    { s: "Saya sering bimbang berlebihan tentang perkara yang mungkin berlaku pada masa depan.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: [2, 3], hurai: "Kebimbangan berlebihan menjejaskan ketenangan." },
    { s: "Jika idea dalam pembentangan saya datang daripada rakan, saya menyebut namanya.", trait: "Integriti & Disiplin Diri", pos: [0, 1], hurai: "Memberi penghargaan kepada pemilik idea menunjukkan integriti." },
    { id: 'ba1', pasangan: 'ba2', s: "Saya sanggup menerangkan semula langkah kerja kepada ahli kumpulan yang ketinggalan.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: [0, 1], hurai: "Membantu ahli yang ketinggalan memastikan pasukan bergerak bersama." },
    { s: "Saya pernah berasa malu untuk mengaku kesalahan sendiri.", trait: "Skala Kejujuran", pos: [0, 1], hurai: "Mengakui perasaan ini menunjukkan kejujuran." },
    { s: "Saya berminat mengetahui cara makanan diproses secara saintifik.", trait: "Minat Ilmu, Sains & Motivasi", pos: [0, 1], hurai: "Minat terhadap sains gunaan menunjukkan sifat ingin tahu." },
    { s: "Saya suka memerhati perubahan cuaca dan mencari sebabnya.", trait: "Minat Ilmu, Sains & Motivasi", pos: [0, 1], hurai: "Pemerhatian alam menunjukkan sifat ingin tahu." },
    { s: "Saya meninggalkan kumpulan belajar apabila perbincangan menjadi sukar.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: [2, 3], hurai: "Meninggalkan kumpulan ketika sukar melemahkan pasukan." },
    { s: "Saya menghargai peluang menggunakan peralatan makmal yang canggih.", trait: "Minat Ilmu, Sains & Motivasi", pos: [0, 1], hurai: "Menghargai kemudahan sains menunjukkan minat." },
    { s: "Saya suka mengetuai kumpulan dalam eksperimen makmal.", trait: "Kepimpinan & Inisiatif", pos: [0, 1], hurai: "Mengetuai eksperimen melatih kepimpinan dan ketelitian." },
    { id: 'ka2', pasangan: 'ka1', s: "Saya rasa masalah kemudahan sekolah ialah urusan pentadbir, jadi saya diam sahaja.", trait: "Kepimpinan & Inisiatif", pos: [2, 3], hurai: "Pelajar berinisiatif menyalurkan cadangan melalui saluran yang betul." },
    { s: "Saya menyerahkan tugas mengurus barang saya kepada ibu bapa setiap kali pulang bercuti.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: [2, 3], hurai: "Pelajar perlu mampu mengurus barang sendiri." },
    { s: "Saya menyatakan pendapat yang jujur apabila guru meminta maklum balas tentang aktiviti.", trait: "Integriti & Disiplin Diri", pos: [0, 1], hurai: "Maklum balas yang jujur membantu penambahbaikan." },
    { s: "Saya membahagikan projek besar kepada tugasan kecil supaya ahli tidak terbeban.", trait: "Kepimpinan & Inisiatif", pos: [0, 1], hurai: "Memecahkan tugas ialah strategi pemimpin yang berkesan." },
    { s: "Saya mengurus masa supaya sempat ke kelas prep malam dengan bersedia.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: [0, 1], hurai: "Pengurusan masa menunjukkan kemandirian." },
    { s: "Saya menghabiskan kerja sekolah sebelum menggunakan telefon.", trait: "Integriti & Disiplin Diri", pos: [0, 1], hurai: "Mendahulukan tanggungjawab menunjukkan disiplin diri." },
    { s: "Saya tidak pernah ketawa apabila orang lain tersilap.", trait: "Skala Kejujuran", pos: [2, 3], hurai: "Hampir setiap orang pernah tergelak secara spontan; mengakuinya ialah jawapan jujur." },
    { s: "Saya menerima pembahagian tugas yang adil walaupun bahagian saya lebih sukar.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: [0, 1], hurai: "Menerima tugas sukar menunjukkan komitmen pasukan." },
    { id: 'mb2', pasangan: 'mb1', s: "Apabila ada wang lebih, saya terus membelanjakannya untuk barang yang saya ingini.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: [2, 3], hurai: "Berbelanja ikut kehendak menunjukkan pengurusan wang yang lemah." },
    { s: "Saya boleh menjaga barang dengan baik walaupun tinggal bersama ramai orang.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: [0, 1], hurai: "Tanggungjawab terhadap barang sendiri penting di asrama." },
    { s: "Kadang-kadang saya berasa letih untuk melayan pertanyaan orang lain.", trait: "Skala Kejujuran", pos: [0, 1], hurai: "Mengakui kepenatan biasa menunjukkan kejujuran." },
    { s: "Saya mampu memujuk diri sendiri apabila rindu akan rumah.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: [0, 1], hurai: "Mengurus emosi sendiri penting di asrama." },
    { s: "Saya berani mengambil risiko yang munasabah untuk mencuba projek yang lebih mencabar.", trait: "Kepimpinan & Inisiatif", pos: [0, 1], hurai: "Pemimpin berani menerima cabaran yang terancang." },
    { s: "Saya mengelak kelas tambahan sains walaupun saya lemah dalam subjek itu.", trait: "Minat Ilmu, Sains & Motivasi", pos: [2, 3], hurai: "Mengelak bantuan menunjukkan motivasi yang rendah." },
    { s: "Saya mendengar rakan meluahkan perasaan tanpa memotong percakapannya.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: [0, 1], hurai: "Mendengar dengan sabar menunjukkan empati." },
    { s: "Saya mencari penjelasan tambahan apabila jawapan buku teks kurang jelas.", trait: "Minat Ilmu, Sains & Motivasi", pos: [0, 1], hurai: "Inisiatif mencari penjelasan menunjukkan minat ilmu." },
    { s: "Saya terus menghantar jawapan pertama saya kerana menyemak semula itu leceh.", trait: "Minat Ilmu, Sains & Motivasi", pos: [2, 3], hurai: "Menyemak jawapan menunjukkan ketelitian saintifik." },
    { s: "Saya merajuk dengan ibu bapa apabila mereka lambat datang menjemput saya.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: [2, 3], hurai: "Merajuk menunjukkan emosi yang belum matang." },
    { s: "Saya mampu menerima pendapat yang bertentangan tanpa berasa marah.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: [0, 1], hurai: "Mengawal emosi semasa berbeza pendapat menunjukkan kematangan." },
    { s: "Saya sanggup mencalonkan diri sebagai pengawas atau pemimpin pelajar.", trait: "Kepimpinan & Inisiatif", pos: [0, 1], hurai: "Menawarkan diri untuk berkhidmat ialah ciri pemimpin." },
    { s: "Saya memberi semangat kepada rakan sedorm sebelum peperiksaan besar.", trait: "Kepimpinan & Inisiatif", pos: [0, 1], hurai: "Pemimpin menyokong moral orang di sekelilingnya." },
    { s: "Saya percaya pengalaman sukar menjadikan saya lebih kuat.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: [0, 1], hurai: "Pandangan ini membina ketahanan diri." },
    { s: "Saya boleh menukar strategi apabila cara lama tidak berjaya.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: [0, 1], hurai: "Fleksibiliti menunjukkan daya tahan." },
    { s: "Saya suka membandingkan keputusan eksperimen dengan teori.", trait: "Minat Ilmu, Sains & Motivasi", pos: [0, 1], hurai: "Membandingkan data dengan teori ialah kemahiran saintifik." },
    { s: "Apabila ahli kumpulan saya memberi cadangan, saya terus menolaknya jika cadangan itu datang daripada pelajar yang lemah.", trait: "Kepimpinan & Inisiatif", pos: [2, 3], hurai: "Pemimpin menilai idea berdasarkan merit, bukan siapa yang mencadangkannya." },
    { s: "Saya menunjuk-nunjuk kejayaan saya di hadapan rakan yang gagal.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: [2, 3], hurai: "Menunjuk-nunjuk boleh melukakan perasaan rakan." },
    { s: "Saya bercita-cita melanjutkan pelajaran dalam bidang sains di universiti.", trait: "Minat Ilmu, Sains & Motivasi", pos: [0, 1], hurai: "Aspirasi akademik sains selari dengan MRSM." },
    { id: 'ib2', pasangan: 'ib1', s: "Saya memberitahu ibu bapa saya berada di perpustakaan walaupun sebenarnya saya melepak di pusat beli-belah.", trait: "Integriti & Disiplin Diri", pos: [2, 3], hurai: "Berbohong kepada ibu bapa menjejaskan integriti." },
    { id: 'eb1', pasangan: 'eb2', s: "Saya menerima keputusan pertandingan dengan hati yang terbuka walaupun berasa layak menang.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: [0, 1], hurai: "Menerima keputusan dengan baik menunjukkan kematangan emosi." },
    { s: "Saya sentiasa melakukan perkara yang betul dalam setiap situasi.", trait: "Skala Kejujuran", pos: [2, 3], hurai: "Tiada manusia sempurna; jawapan jujur lebih dipercayai." },
    { s: "Saya menghormati keputusan ketua kumpulan walaupun saya mencadangkan pilihan lain.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: [0, 1], hurai: "Menghormati kepimpinan membantu pasukan bergerak." },
    { id: 'sb1', pasangan: 'sb2', s: "Saya berusaha menambah baik keputusan saya dari semasa ke semasa.", trait: "Minat Ilmu, Sains & Motivasi", pos: [0, 1], hurai: "Usaha penambahbaikan berterusan menunjukkan motivasi." },
    { s: "Saya memulangkan wang lebihan yang tersilap dibayar kepada saya oleh bendahari kelab.", trait: "Integriti & Disiplin Diri", pos: [0, 1], hurai: "Memulangkan wang lebihan menunjukkan amanah." },
    { s: "Saya menyiapkan nota ulang kaji secara berperingkat setiap minggu.", trait: "Integriti & Disiplin Diri", pos: [0, 1], hurai: "Usaha berterusan menunjukkan disiplin belajar." },
    { s: "Saya mengakui sumbangan setiap ahli semasa membentangkan hasil kumpulan.", trait: "Kepimpinan & Inisiatif", pos: [0, 1], hurai: "Pemimpin yang baik berkongsi kejayaan dengan pasukan." },
    { s: "Saya menyiapkan sendiri barang yang perlu dibawa untuk minggu orientasi.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: [0, 1], hurai: "Persediaan sendiri menunjukkan kemandirian." },
    { s: "Saya tidak pernah berasa sedih atau kecewa dalam hidup saya.", trait: "Skala Kejujuran", pos: [2, 3], hurai: "Sedih dan kecewa ialah emosi normal; menafikannya kelihatan tidak jujur." },
    { s: "Saya sudi menyemak kerja rakan yang meminta pendapat saya.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: [0, 1], hurai: "Membantu rakan memperbaiki kerja menunjukkan semangat kerjasama." },
    { s: "Saya menganggap teguran warden sebagai tanda dia mengambil berat.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: [0, 1], hurai: "Melihat teguran secara positif menunjukkan kematangan." },
    { s: "Saya menggunakan kad pelajar rakan untuk meminjam buku tambahan di perpustakaan.", trait: "Integriti & Disiplin Diri", pos: [2, 3], hurai: "Menggunakan identiti orang lain ialah ketidakjujuran." },
    { s: "Saya meraikan hari jadi rakan sedorm secara sederhana.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: [0, 1], hurai: "Meraikan rakan mengeratkan ukhuwah." },
    { s: "Saya boleh mengurus diri apabila rakan sebilik pulang bercuti dan saya tinggal seorang diri.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: [0, 1], hurai: "Kemandirian penting apabila bersendirian." },
    { s: "Saya sering meninggalkan pakaian di ampaian bersama sehingga berhari-hari.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: [2, 3], hurai: "Menggunakan kemudahan bersama perlu bertimbang rasa." },
    { s: "Saya mengambil berat tentang keselamatan rakan semasa aktiviti luar.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: [0, 1], hurai: "Menjaga rakan menunjukkan semangat berpasukan." },
    { s: "Saya mengulang latihan matematik sehingga saya dapat menjawab dengan yakin.", trait: "Minat Ilmu, Sains & Motivasi", pos: [0, 1], hurai: "Latihan berulang menunjukkan kegigihan." },
    { id: 'sa1', pasangan: 'sa2', s: "Saya suka menyertai aktiviti yang melibatkan pengaturcaraan atau reka bentuk.", trait: "Minat Ilmu, Sains & Motivasi", pos: [0, 1], hurai: "Minat teknologi selari dengan pendidikan MRSM." },
    { s: "Ada kalanya saya menonton video lebih lama daripada yang saya rancang.", trait: "Skala Kejujuran", pos: [0, 1], hurai: "Perkara ini biasa; mengakuinya ialah jawapan jujur." },
    { s: "Saya mudah putus asa apabila sesuatu topik sukar difahami pada kali pertama.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: [2, 3], hurai: "Mudah putus asa menghalang pembelajaran." },
    { id: 'mb1', pasangan: 'mb2', s: "Saya berbelanja secara berhemah walaupun ada wang lebih.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: [0, 1], hurai: "Berhemah dalam perbelanjaan menunjukkan kemandirian." },
    { id: 'ba2', pasangan: 'ba1', s: "Saya membiarkan ahli kumpulan yang ketinggalan berusaha sendiri kerana itu masalahnya.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: [2, 3], hurai: "Mengabaikan ahli yang ketinggalan melemahkan pasukan." },
    { s: "Saya bekerjasama dengan pelajar daripada kelas lain dalam projek sekolah.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: [0, 1], hurai: "Kerjasama merentas kelas menunjukkan kemahiran sosial." },
    { id: 'ea1', pasangan: 'ea2', s: "Saya boleh berfikir dengan tenang ketika menghadapi masalah yang besar.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: [0, 1], hurai: "Ketenangan membantu membuat keputusan yang baik." },
    { s: "Saya berasa lebih selesa jika guru menentukan setiap langkah kerja kumpulan saya.", trait: "Kepimpinan & Inisiatif", pos: [2, 3], hurai: "Pelajar MRSM diharap mampu merancang langkah kerja sendiri." },
    { s: "Saya dapat menyesuaikan diri apabila guru baharu menggunakan cara mengajar yang berbeza.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: [0, 1], hurai: "Kebolehsuaian membantu pembelajaran." },
    { s: "Saya mengakui perasaan sedih saya dan kemudian meneruskan tugas harian.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: [0, 1], hurai: "Mengakui emosi secara sihat menunjukkan kestabilan." },
    { s: "Saya rasa kerja amali di makmal itu leceh dan memenatkan.", trait: "Minat Ilmu, Sains & Motivasi", pos: [2, 3], hurai: "Kerja amali ialah teras pembelajaran sains di MRSM." },
    { s: "Saya berpegang pada keputusan untuk berjimat walaupun rakan mengajak berbelanja.", trait: "Integriti & Disiplin Diri", pos: [0, 1], hurai: "Kawalan diri dalam berbelanja menunjukkan disiplin." },
    { s: "Saya membantu rakan baharu membiasakan diri dengan kemudahan di sekolah.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: [0, 1], hurai: "Membantu rakan menyesuaikan diri menunjukkan keprihatinan." },
    { id: 'ma2', pasangan: 'ma1', s: "Saya rasa rutin asrama yang berjadual itu terlalu mengongkong dan sukar saya ikuti.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: [2, 3], hurai: "Calon MRSM perlu bersedia mengikut rutin asrama." },
    { id: 'ka1', pasangan: 'ka2', s: "Apabila saya melihat sesuatu yang perlu dibaiki di sekolah, saya mencadangkan penambahbaikan kepada pihak yang berkenaan.", trait: "Kepimpinan & Inisiatif", pos: [0, 1], hurai: "Mencadangkan penambahbaikan menunjukkan inisiatif dan rasa memiliki." },
    { s: "Saya mampu menanggung penat semasa minggu aktiviti yang padat.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: [0, 1], hurai: "Daya tahan penting untuk jadual yang sibuk." },
    { s: "Saya membawa pakaian dan barang mengikut senarai yang ditetapkan oleh asrama.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: [0, 1], hurai: "Mematuhi senarai keperluan menunjukkan kesediaan." },
    { id: 'ia2', pasangan: 'ia1', s: "Semasa cuti sekolah, saya membiarkan buku tersimpan dan hanya bersantai sepanjang masa.", trait: "Integriti & Disiplin Diri", pos: [2, 3], hurai: "Disiplin belajar yang terhenti semasa cuti menjejaskan pencapaian." }
  ]
});

UKKM.push({ set: 10, tajuk: 'Set 10', bahagian: ['mat', 'sains', 'eng', 'per'].map(k => B[k]).filter(Boolean) }); })();
