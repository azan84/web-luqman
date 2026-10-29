(function () { const B = {}; const UKKM_PART = (n, b) => { B[b.id] = b; };
UKKM_PART(8, { id: 'mat', nama: 'Matematik', ikon: '🧮', minit: 30,
  arahan: 'Jawab semua 30 soalan. 27 soalan objektif (pilih A, B, C atau D) dan 3 soalan isian (taip jawapan nombor). Kalkulator saintifik dibenarkan; gunakan kertas conteng.',
  soalan: [
  { // 1 Pola — mudah
    s: "Dalam jujukan berikut, setiap sebutan ialah separuh daripada sebutan sebelumnya.<br><b>768, 384, 192, 96, …</b><br>Berapakah sebutan ke-8?",
    en: "In the sequence 768, 384, 192, 96, … each term is half of the previous term. What is the 8th term?",
    p: ['3', '6', '12', '96'], a: 1, topik: 'Pola & Jujukan', aras: 'mudah',
    hurai: "Sebutan ke-5 hingga ke-8: 48, 24, 12, <b>6</b>. (Atau 768 ÷ 2⁷ = 6.) 12 ialah sebutan ke-7 (tersilap kira satu); 3 ialah sebutan ke-9; 96 = 768 ÷ 8, membahagi dengan 8 dan bukan membahagi dua sebanyak 7 kali."
  },
  { // 2 Persamaan linear — mudah
    s: "Sebatang pen dan sebuah buku nota berharga RM 7.50 kesemuanya. Buku nota itu RM 2.10 lebih mahal daripada pen. Berapakah harga buku nota itu?",
    en: "A pen and a notebook cost RM 7.50 altogether. The notebook costs RM 2.10 more than the pen. What is the price of the notebook?",
    p: ['RM 5.40', 'RM 4.80', 'RM 3.75', 'RM 2.70'], a: 1, topik: 'Persamaan Linear', aras: 'mudah',
    hurai: "Pen = x, buku nota = x + 2.10. x + (x + 2.10) = 7.50 → 2x = 5.40 → x = 2.70. Buku nota = 2.70 + 2.10 = <b>RM 4.80</b>. (RM 2.70 ialah harga pen; RM 3.75 = 7.50 ÷ 2, bahagi sama rata; RM 5.40 ialah nilai 2x.)"
  },
  { // 3 Peratus — mudah
    s: "Tanda harga sebuah periuk nasi elektrik berbunyi: <b>\"Diskaun 30%! Harga jualan RM 56.\"</b> Berapakah harga asal periuk itu?",
    en: "A rice cooker's price tag reads: '30% off! Sale price RM 56.' What was the original price?",
    p: ['RM 72.80', 'RM 80.00', 'RM 86.00', 'RM 186.67'], a: 1, topik: 'Peratus & Matematik Pengguna', aras: 'mudah',
    hurai: "Harga jualan = 70% harga asal. Harga asal = 56 ÷ 0.70 = <b>RM 80</b>. (RM 72.80 = 56 × 1.30, menambah 30% kepada harga jualan; RM 86 = 56 + 30; RM 186.67 = 56 ÷ 0.30.)"
  },
  { // 4 Skala — mudah
    s: "Sebuah model bas dibina mengikut skala 1 : 50. Panjang model itu ialah 24 cm. Berapakah panjang sebenar bas itu?",
    en: "A model bus is built to a scale of 1 : 50. The model is 24 cm long. What is the actual length of the bus?",
    p: ['1.2 m', '12 m', '120 m', '1 200 m'], a: 1, topik: 'Nisbah, Kadar & Laju', aras: 'mudah',
    hurai: "Panjang sebenar = 24 × 50 = 1 200 cm = <b>12 m</b>. (1 200 m lupa menukar cm kepada m; 1.2 m dan 120 m ialah ralat penukaran unit, 1 m = 100 cm.)"
  },
  { // 5 Data — mudah
    rajah: '<table><tr><th>Kelas</th><th>Botol plastik dikumpul</th></tr><tr><td>3 Amanah</td><td style="text-align:left">● ● ● ● ●</td></tr><tr><td>3 Bestari</td><td style="text-align:left">● ● ● ◐</td></tr><tr><td>3 Cekal</td><td style="text-align:left">● ● ● ● ● ●</td></tr><tr><td>3 Dedikasi</td><td style="text-align:left">● ● ● ● ◐</td></tr><tr><td colspan="2">● mewakili 8 botol &nbsp; ◐ mewakili 4 botol</td></tr></table>',
    s: "Piktograf menunjukkan bilangan botol plastik yang dikumpul oleh empat kelas untuk program kitar semula. Berapakah beza bilangan botol yang dikumpul oleh 3 Cekal dengan 3 Bestari?",
    en: "The pictograph shows plastic bottles collected by four classes. How many more bottles did 3 Cekal collect than 3 Bestari?",
    p: ['16', '20', '24', '28'], a: 1, topik: 'Data & Statistik', aras: 'mudah',
    hurai: "3 Cekal = 6 × 8 = 48 botol. 3 Bestari = 3 × 8 + 4 = 28 botol. Beza = 48 − 28 = <b>20</b>. (24 mengabaikan simbol separuh; 16 mengira simbol separuh sebagai penuh; 28 ialah jumlah 3 Bestari.)"
  },
  { // 6 Kadar — mudah
    s: "Kepala pancuran mandian lama di rumah Lina mengalirkan air pada kadar 9 liter seminit. Kepala pancuran baharu yang jimat air hanya mengalirkan 6 liter seminit. Ahli keluarga Lina mandi selama 40 minit sehari secara keseluruhan. Berapakah isi padu air yang dapat dijimatkan dalam masa 30 hari selepas kepala pancuran itu ditukar?",
    en: "The old shower head in Lina's house flows at 9 litres per minute. The new water-saving shower head flows at only 6 litres per minute. Lina's family showers for 40 minutes a day in total. How much water is saved in 30 days after the shower head is changed?",
    p: ['3 600 liter', '7 200 liter', '10 800 liter', '18 000 liter'], a: 0, topik: 'Nisbah, Kadar & Laju', aras: 'mudah',
    hurai: "Air dijimatkan = 9 − 6 = 3 liter seminit. Sehari: 3 × 40 = 120 liter. Dalam 30 hari: 120 × 30 = <b>3 600 liter</b>. (7 200 liter ialah penggunaan pancuran baharu; 10 800 liter ialah penggunaan pancuran lama; 18 000 liter menambah kedua-dua kadar.)"
  },
  { // 7 Data — mudah
    rajah: '<svg viewBox="0 0 330 240" style="max-width:100%;width:340px" role="img" aria-label="Carta palang berganda bilangan murid lelaki dan perempuan: 3 Amanah lelaki 17 perempuan 19; 3 Bestari lelaki 21 perempuan 13; 3 Cekal lelaki 14 perempuan 22; 3 Dedikasi lelaki 11 perempuan 20"><g font-size="12" fill="currentColor"><text x="4" y="22">Bilangan murid</text><text x="166" y="232">Kelas</text></g><g stroke="var(--muted)" stroke-width="1"><line x1="50" y1="190" x2="320" y2="190"/><line x1="50" y1="40" x2="50" y2="190"/><g stroke-dasharray="2 4"><line x1="46" y1="160" x2="320" y2="160"/><line x1="46" y1="130" x2="320" y2="130"/><line x1="46" y1="100" x2="320" y2="100"/><line x1="46" y1="70" x2="320" y2="70"/><line x1="46" y1="40" x2="320" y2="40"/></g></g><g font-size="12" fill="currentColor" text-anchor="end"><text x="42" y="194">0</text><text x="42" y="164">5</text><text x="42" y="134">10</text><text x="42" y="104">15</text><text x="42" y="74">20</text><text x="42" y="44">25</text></g><rect x="62" y="88" width="22" height="102" fill="var(--c)"/><rect x="84" y="76" width="22" height="114" fill="var(--c)" fill-opacity=".35" stroke="var(--c)" stroke-width="1"/><rect x="128" y="64" width="22" height="126" fill="var(--c)"/><rect x="150" y="112" width="22" height="78" fill="var(--c)" fill-opacity=".35" stroke="var(--c)" stroke-width="1"/><rect x="194" y="106" width="22" height="84" fill="var(--c)"/><rect x="216" y="58" width="22" height="132" fill="var(--c)" fill-opacity=".35" stroke="var(--c)" stroke-width="1"/><rect x="260" y="124" width="22" height="66" fill="var(--c)"/><rect x="282" y="70" width="22" height="120" fill="var(--c)" fill-opacity=".35" stroke="var(--c)" stroke-width="1"/><g font-size="11" fill="currentColor" text-anchor="middle"><text x="73" y="84">17</text><text x="95" y="72">19</text><text x="139" y="60">21</text><text x="161" y="108">13</text><text x="205" y="102">14</text><text x="227" y="54">22</text><text x="271" y="120">11</text><text x="293" y="66">20</text></g><g font-size="11" fill="currentColor" text-anchor="middle"><text x="84" y="206">3 Amanah</text><text x="150" y="206">3 Bestari</text><text x="216" y="206">3 Cekal</text><text x="282" y="206">3 Dedikasi</text></g><g font-size="11" fill="currentColor"><rect x="200" y="8" width="12" height="12" fill="var(--c)"/><text x="216" y="18">Lelaki</text><rect x="262" y="8" width="12" height="12" fill="var(--c)" fill-opacity=".35" stroke="var(--c)" stroke-width="1"/><text x="278" y="18">Perempuan</text></g></svg>',
    s: "Carta palang berganda menunjukkan bilangan murid lelaki dan perempuan dalam empat kelas Tingkatan 3. Berapakah lebih banyak murid perempuan berbanding murid lelaki bagi keempat-empat kelas itu?",
    en: "The dual bar chart shows the number of boys and girls in four Form 3 classes. How many more girls than boys are there in the four classes altogether?",
    p: ['11', '19', '27', '137'], a: 0, topik: 'Data & Statistik', aras: 'mudah',
    hurai: "Jumlah murid perempuan = 19 + 13 + 22 + 20 = 74. Jumlah murid lelaki = 17 + 21 + 14 + 11 = 63. Beza = 74 − 63 = <b>11</b>. (19 = 2 + 8 + 9, mengabaikan 3 Bestari yang lebih ramai murid lelaki; 27 = 2 + 8 + 8 + 9, menambah beza 3 Bestari sedangkan ia patut ditolak; 137 ialah jumlah semua murid.)"
  },
  { // 8 Geometri — mudah
    s: "Jarum minit sebuah jam dinding panjangnya 7 cm. Berapakah jarak yang dilalui oleh hujung jarum minit itu dalam masa 45 minit? (Guna π = 22/7)",
    en: "The minute hand of a wall clock is 7 cm long. How far does the tip of the minute hand travel in 45 minutes? (Use π = 22/7)",
    p: ['33 cm', '44 cm', '66 cm', '115.5 cm'], a: 0, topik: 'Geometri & Pengukuran', aras: 'mudah',
    hurai: "Dalam 60 minit, hujung jarum melalui satu lilitan penuh: 2 × 22/7 × 7 = 44 cm. Dalam 45 minit: 45/60 × 44 = <b>33 cm</b>. (44 cm ialah satu pusingan penuh; 66 cm mengambil 14 cm sebagai jejari; 115.5 ialah luas sektor, ½ × 22/7 × 7² × ¾ = 115.5 cm², bukan panjang lengkok.)"
  },
  { // 9 Geometri — sederhana
    rajah: '<svg viewBox="0 0 300 185" style="max-width:100%;width:320px" role="img" aria-label="Trapezium bersudut tegak ABCD: AB 10 cm, DC 16 cm, BC 10 cm, AD tegak"><path d="M30 30H180L270 150H30Z" fill="none" stroke="var(--c)" stroke-width="3"/><path d="M30 42h12v-12M30 138h12v12" fill="none" stroke="currentColor"/><g font-size="13" fill="currentColor"><text x="22" y="24">A</text><text x="182" y="24">B</text><text x="274" y="160">C</text><text x="16" y="164">D</text><text x="92" y="22">10 cm</text><text x="130" y="170">16 cm</text><text x="232" y="86">10 cm</text></g></svg>',
    s: "Rajah menunjukkan trapezium ABCD dengan AB selari dengan DC dan AD berserenjang dengan kedua-duanya. AB = 10 cm, DC = 16 cm dan BC = 10 cm. Berapakah luas trapezium itu?",
    en: "The diagram shows trapezium ABCD with AB parallel to DC and AD perpendicular to both. AB = 10 cm, DC = 16 cm, BC = 10 cm. What is the area of the trapezium?",
    p: ['104 cm²', '128 cm²', '130 cm²', '208 cm²'], a: 0, topik: 'Geometri & Pengukuran', aras: 'sederhana',
    hurai: "Beza sisi selari = 16 − 10 = 6 cm. Tinggi AD = √(10² − 6²) = √64 = 8 cm. Luas = ½ × (10 + 16) × 8 = <b>104 cm²</b>. (130 cm² menggunakan sisi condong 10 cm sebagai tinggi; 208 cm² lupa ½; 128 cm² = 16 × 8.)"
  },
  { // 10 Logik — sederhana
    s: "Jam dinding Pak Leman berjalan perlahan: bagi setiap 1 jam waktu sebenar, jarum jam itu hanya bergerak 55 minit. Dia menetapkan jam itu tepat pada pukul 7:00 pagi. Apabila jam itu menunjukkan pukul 6:00 petang pada hari yang sama, pukul berapakah waktu sebenar?",
    en: "Pak Leman's wall clock runs slow: for every 1 real hour it moves only 55 minutes. He sets it correctly at 7:00 a.m. When the clock shows 6:00 p.m. the same day, what is the real time?",
    p: ['5:05 petang', '6:00 petang', '6:55 petang', '7:00 petang'], a: 3, topik: 'Penaakulan Logik', aras: 'sederhana',
    hurai: "Jam itu bergerak 11 jam = 660 minit. Setiap 55 minit pada jam = 60 minit sebenar, jadi masa sebenar = 660 ÷ 55 × 60 = 720 minit = 12 jam. 7:00 pagi + 12 jam = <b>7:00 petang</b>. (6:55 petang menambah 11 × 5 = 55 minit — ralat kerana jam lambat 5 minit bagi setiap jam <i>sebenar</i>, bukan setiap jam pada jam itu; 5:05 petang menolak pula.)"
  },
  { // 11 Pola — sederhana
    s: "Pecahan <sup>5</sup>⁄<sub>7</sub> ditulis sebagai perpuluhan: 0.714285714285… Apakah digit ke-100 selepas titik perpuluhan?",
    en: "5/7 as a decimal is 0.714285714285… What is the 100th digit after the decimal point?",
    p: ['2', '4', '5', '8'], a: 0, topik: 'Pola & Jujukan', aras: 'sederhana',
    hurai: "Digit berulang dalam kitaran 6: 7, 1, 4, 2, 8, 5. 100 ÷ 6 = 16 baki 4, jadi digit ke-100 sama dengan digit ke-4 dalam kitaran = <b>2</b>. (4 dan 8 ialah digit ke-3 dan ke-5, ralat tersasar satu; 5 menganggap digit ke-100 menamatkan kitaran.)"
  },
  { // 12 Persamaan linear — sederhana
    s: "Tambang bas ekspres ialah RM 45 bagi seorang dewasa dan RM 28 bagi seorang kanak-kanak. Satu kumpulan 14 orang membayar RM 528 kesemuanya. Berapakah bilangan orang dewasa dalam kumpulan itu?",
    en: "An express bus fare is RM 45 per adult and RM 28 per child. A group of 14 people paid RM 528 in total. How many adults are in the group?",
    p: ['6', '7', '8', '11'], a: 2, topik: 'Persamaan Linear', aras: 'sederhana',
    hurai: "Dewasa = d, kanak-kanak = 14 − d. 45d + 28(14 − d) = 528 → 17d + 392 = 528 → 17d = 136 → d = <b>8</b>. Semak: 8 × 45 + 6 × 28 = 360 + 168 = 528. (6 ialah bilangan kanak-kanak; 11 ≈ 528 ÷ 45; 7 = 14 ÷ 2.)"
  },
  { // 13 Peratus — sederhana
    s: "Harga asal sebuah pembersih udara ialah RM 480. Kedai menaikkan harganya sebanyak 25%. Sebulan kemudian, kedai itu memberi diskaun 20% daripada harga baharu. Berapakah harga akhir pembersih udara itu?",
    en: "An air purifier costs RM 480. The shop raises the price by 25%, then a month later gives a 20% discount on the new price. What is the final price?",
    p: ['RM 600', 'RM 504', 'RM 480', 'RM 456'], a: 2, topik: 'Peratus & Matematik Pengguna', aras: 'sederhana',
    hurai: "Harga baharu = 480 × 1.25 = RM 600. Selepas diskaun = 600 × 0.80 = <b>RM 480</b> — sama dengan harga asal kerana 1.25 × 0.80 = 1. (RM 504 menganggap perubahan bersih +5% (25% − 20%); RM 456 menganggap −5%; RM 600 lupa diskaun.)"
  },
  { // 14 Nisbah — sederhana
    s: "Konkrit dibancuh dengan nisbah isi padu simen : pasir : batu baur = 1 : 2 : 4. Seorang pekerja mempunyai 0.5 m³ simen, 1.2 m³ pasir dan 2.2 m³ batu baur. Berapakah isi padu maksimum bancuhan (jumlah ketiga-tiga bahan) yang boleh dihasilkan mengikut nisbah itu?",
    en: "Concrete is mixed in the volume ratio cement : sand : gravel = 1 : 2 : 4. A worker has 0.5 m³ cement, 1.2 m³ sand and 2.2 m³ gravel. What is the maximum total volume of mix he can make in this ratio?",
    p: ['3.5 m³', '3.85 m³', '3.9 m³', '4.2 m³'], a: 0, topik: 'Nisbah, Kadar & Laju', aras: 'sederhana',
    hurai: "Nilai 1 bahagian yang dibenarkan: simen 0.5 ÷ 1 = 0.5; pasir 1.2 ÷ 2 = 0.6; batu baur 2.2 ÷ 4 = 0.55. Bahan yang paling menghadkan ialah simen (0.5). Jumlah = 7 bahagian × 0.5 = <b>3.5 m³</b>. (3.85 dan 4.2 menggunakan had batu baur atau pasir; 3.9 menjumlahkan semua bahan tanpa ikut nisbah.)"
  },
  { // 15 Data — sederhana (ISI)
    jenis: 'isi',
    rajah: '<table><tr><th>Bilangan adik-beradik</th><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr><tr><th>Bilangan murid</th><td>4</td><td>5</td><td>8</td><td>6</td><td>5</td><td>2</td></tr></table>',
    s: "Jadual kekerapan menunjukkan bilangan adik-beradik bagi setiap murid dalam sebuah kelas. Hitung min bilangan adik-beradik.",
    en: "The frequency table shows the number of siblings of each pupil in a class. Calculate the mean number of siblings.",
    a: 2.3, tol: 0.01, topik: 'Data & Statistik', aras: 'sederhana',
    hurai: "Jumlah murid = 4 + 5 + 8 + 6 + 5 + 2 = 30. Jumlah (nilai × kekerapan) = 0 + 5 + 16 + 18 + 20 + 10 = 69. Min = 69 ÷ 30 = <b>2.3</b>. (Ralat biasa: membahagi dengan 6 lajur atau mencari min kekerapan sahaja.)"
  },
  { // 16 Geometri — sederhana
    rajah: '<svg viewBox="0 0 240 240" style="max-width:100%;width:260px" role="img" aria-label="Satah Cartes dengan titik C(1, 2) dan P(4, 1)"><g stroke="var(--muted)" stroke-width="1" opacity=".6"><path d="M60 30V210M90 30V210M120 30V210M150 30V210M180 30V210M210 30V210M30 180H210M30 150H210M30 120H210M30 90H210M30 60H210M30 30H210"/></g><g stroke="currentColor" stroke-width="1.5"><path d="M30 215V25M25 210H215"/></g><g font-size="12" fill="currentColor" text-anchor="middle"><text x="30" y="226">0</text><text x="60" y="226">1</text><text x="90" y="226">2</text><text x="120" y="226">3</text><text x="150" y="226">4</text><text x="180" y="226">5</text><text x="210" y="226">6</text><text x="18" y="184">1</text><text x="18" y="154">2</text><text x="18" y="124">3</text><text x="18" y="94">4</text><text x="18" y="64">5</text><text x="18" y="34">6</text><text x="222" y="214">x</text><text x="30" y="18">y</text></g><circle cx="60" cy="150" r="5" fill="var(--c)"/><circle cx="150" cy="180" r="5" fill="var(--c)"/><g font-size="13" fill="currentColor" font-weight="700"><text x="66" y="144">C</text><text x="156" y="174">P</text></g></svg>',
    s: "Titik P(4, 1) diputarkan 90° <b>lawan arah jam</b> pada pusat C(1, 2). Apakah koordinat imej P?",
    en: "Point P(4, 1) is rotated 90° anticlockwise about centre C(1, 2). What are the coordinates of the image of P?",
    p: ['(−1, 4)', '(0, −1)', '(1, 3)', '(2, 5)'], a: 3, topik: 'Geometri & Pengukuran', aras: 'sederhana',
    hurai: "Dari C ke P: 3 unit ke kanan, 1 unit ke bawah. Putaran 90° lawan arah jam menukar \"3 kanan, 1 bawah\" kepada \"1 kanan, 3 atas\". Imej = (1 + 1, 2 + 3) = <b>(2, 5)</b>. ((−1, 4) ialah putaran pada asalan O; (0, −1) ialah putaran ikut arah jam; (1, 3) lupa menambah semula koordinat C.)"
  },
  { // 17 Logik — sederhana
    s: "Dalam satu kejohanan bola tampar, 8 pasukan bermain dalam satu kumpulan dan setiap pasukan bertemu setiap pasukan lain <b>tepat sekali</b>. Empat pasukan teratas kemudian mara ke separuh akhir dan pemenangnya bertemu di perlawanan akhir. Berapakah jumlah perlawanan dalam kejohanan itu?",
    en: "In a volleyball tournament, 8 teams play in one group and each team meets every other team exactly once. The top four go to the semi-finals and the winners meet in the final. How many matches are played in total?",
    p: ['59', '35', '31', '28'], a: 2, topik: 'Penaakulan Logik', aras: 'sederhana',
    hurai: "Peringkat kumpulan: setiap pasukan main 7 kali, 8 × 7 = 56, tetapi setiap perlawanan dikira dua kali → 56 ÷ 2 = 28. Separuh akhir 2 + akhir 1 = 3. Jumlah = <b>31</b>. (59 = 56 + 3, lupa bahagi dua; 28 lupa peringkat kalah mati; 35 = 28 + 7.)"
  },
  { // 18 Pola — sederhana
    s: "Sebutan pertama suatu jujukan ialah 5. Setiap sebutan seterusnya diperoleh dengan mengkuasaduakan sebutan sebelumnya, kemudian menjumlahkan digit hasilnya. Contohnya, 5² = 25 dan 2 + 5 = 7, jadi sebutan kedua ialah 7. Apakah sebutan ke-102?",
    en: "The first term of a sequence is 5. Each next term is found by squaring the previous term, then adding the digits of the result. For example, 5² = 25 and 2 + 5 = 7, so the second term is 7. What is the 102nd term?",
    p: ['7', '13', '16', '256'], a: 2, topik: 'Pola & Jujukan', aras: 'sederhana',
    hurai: "7² = 49 → 4 + 9 = 13; 13² = 169 → 1 + 6 + 9 = 16; 16² = 256 → 2 + 5 + 6 = 13; … Jujukan: 5, 7, 13, 16, 13, 16, … Mulai sebutan ke-3, 13 dan 16 berulang: sebutan ganjil = 13, sebutan genap = 16. 102 ialah nombor genap → <b>16</b>. (13 tersilap padanan ganjil/genap; 7 menganggap empat sebutan pertama 5, 7, 13, 16 berulang, 102 = 4 × 25 + 2; 256 = 16², terlupa menjumlahkan digit.)"
  },
  { // 19 Peratus — sederhana
    s: "Dalam satu peperiksaan percubaan, 80% daripada calon lulus Matematik. Daripada calon yang lulus, 30% mendapat gred A. Seramai 54 orang calon mendapat gred A. Berapakah bilangan calon yang <b>gagal</b>?",
    en: "In a trial exam, 80% of the candidates passed Mathematics. Of those who passed, 30% got grade A. 54 candidates got grade A. How many candidates failed?",
    p: ['36', '45', '180', '225'], a: 1, topik: 'Peratus & Matematik Pengguna', aras: 'sederhana',
    hurai: "30% daripada calon lulus = 54 → calon lulus = 54 ÷ 0.3 = 180. 80% daripada semua calon = 180 → jumlah calon = 180 ÷ 0.8 = 225. Gagal = 225 − 180 = <b>45</b> (iaitu 20% × 225). (36 = 20% × 180, mengambil 20% daripada calon yang lulus; 180 ialah bilangan calon yang lulus; 225 ialah jumlah calon.)"
  },
  { // 20 Data — sederhana
    rajah: '<table><tr><th>Masa (minit)</th><th>Bilangan murid</th></tr><tr><td>1 – 10</td><td>6</td></tr><tr><td>11 – 20</td><td>9</td></tr><tr><td>21 – 30</td><td>14</td></tr><tr><td>31 – 40</td><td>13</td></tr><tr><td>41 – 50</td><td>8</td></tr></table>',
    s: "Jadual kekerapan menunjukkan masa (dalam minit, nombor bulat) yang diluangkan oleh 50 orang murid untuk membaca pada suatu hari. Berapakah peratus murid yang membaca <b>lebih daripada 20 minit</b>?",
    en: "The frequency table shows the time (in whole minutes) that 50 pupils spent reading on one day. What percentage of the pupils read for more than 20 minutes?",
    p: ['28%', '42%', '58%', '70%'], a: 3, topik: 'Data & Statistik', aras: 'sederhana',
    hurai: "Lebih daripada 20 minit bermaksud kelas 21 – 30, 31 – 40 dan 41 – 50: 14 + 13 + 8 = 35 orang. Peratus = 35/50 × 100% = <b>70%</b>. (Semak: 6 + 9 = 15 orang membaca 20 minit atau kurang, dan 15 + 35 = 50.) (58% = 29/50, iaitu 6 + 9 + 14, murid yang membaca 30 minit atau kurang; 42% = (13 + 8)/50, iaitu lebih daripada 30 minit sahaja; 28% = 14/50, kelas 21 – 30 sahaja.)"
  },
  { // 21 Logik — sederhana
    rajah: '<table><tr><th>Tugas</th><th>Masa (minit)</th><th>Boleh bermula selepas</th></tr><tr><td style="text-align:left">P: Mengambil bahan dari stor</td><td>20</td><td>–</td></tr><tr><td style="text-align:left">Q: Menyiang ayam</td><td>15</td><td>P siap</td></tr><tr><td style="text-align:left">R: Membasuh beras</td><td>10</td><td>–</td></tr><tr><td style="text-align:left">S: Memasak nasi (guna dapur)</td><td>30</td><td>R siap</td></tr><tr><td style="text-align:left">T: Memasak kari ayam (guna dapur)</td><td>35</td><td>Q siap</td></tr><tr><td style="text-align:left">U: Menghidang makanan</td><td>10</td><td>S dan T siap</td></tr></table>',
    s: "Sekumpulan pengakap menyediakan makan tengah hari di tapak perkhemahan. Jadual menunjukkan enam tugas yang perlu dilakukan. Ahli kumpulan cukup ramai, jadi tugas yang berlainan boleh dibuat serentak oleh orang yang berlainan. Namun, hanya ada <b>sebuah dapur gas satu tungku</b>, jadi tugas S dan T tidak boleh dibuat pada masa yang sama. Berapakah masa minimum untuk menyiapkan semua tugas?",
    en: "A group of scouts prepares lunch at a campsite. The table shows six tasks. There are enough members for different tasks to be done at the same time by different people. However, there is only one single-burner gas stove, so tasks S and T cannot be done at the same time. What is the minimum time to complete all the tasks?",
    p: ['75 minit', '80 minit', '85 minit', '110 minit'], a: 2, topik: 'Penaakulan Logik', aras: 'sederhana',
    hurai: "T hanya boleh bermula pada minit ke-35 (selepas P dan Q), manakala S boleh bermula pada minit ke-10 (selepas R). Jika S dimasak dahulu (minit 10 – 40), T bermula sebaik dapur kosong (minit 40 – 75) dan U dibuat pada minit 75 – 85. Jika T dimasak dahulu (minit 35 – 70), S hanya tamat pada minit ke-100 dan U tamat pada minit ke-110. Masa minimum = <b>85 minit</b>. (80 minit mengabaikan had dapur: 20 + 15 + 35 + 10; 110 minit memasak T dahulu; 75 minit terlupa tugas U.)"
  },
  { // 22 Pola — sukar
    rajah: '<svg viewBox="0 0 260 100" style="max-width:100%;width:300px" role="img" aria-label="Pola jubin kelabu mengelilingi jubin putih"><g stroke="currentColor"><rect x="10" y="20" width="48" height="48" fill="var(--muted)"/><rect x="26" y="36" width="16" height="16" fill="var(--card)"/><path d="M26 20v48M42 20v48M10 36h48M10 52h48" fill="none"/><rect x="80" y="20" width="64" height="48" fill="var(--muted)"/><rect x="96" y="36" width="32" height="16" fill="var(--card)"/><path d="M96 20v48M112 20v48M128 20v48M80 36h64M80 52h64" fill="none"/><rect x="170" y="20" width="80" height="48" fill="var(--muted)"/><rect x="186" y="36" width="48" height="16" fill="var(--card)"/><path d="M186 20v48M202 20v48M218 20v48M234 20v48M170 36h80M170 52h80" fill="none"/></g><g font-size="12" fill="currentColor"><text x="12" y="88">Rajah 1</text><text x="90" y="88">Rajah 2</text><text x="188" y="88">Rajah 3</text></g></svg>',
    s: "Dalam pola di atas, satu baris jubin putih dikelilingi oleh jubin kelabu. Satu rajah dalam pola yang sama menggunakan <b>150 jubin kesemuanya</b>. Berapakah bilangan jubin kelabu dalam rajah itu?",
    en: "In the pattern, a row of white tiles is surrounded by grey tiles. One figure in the same pattern uses 150 tiles altogether. How many grey tiles does it have?",
    p: ['102', '100', '96', '48'], a: 0, topik: 'Pola & Jujukan', aras: 'sukar',
    hurai: "Rajah ke-n: n jubin putih, segi empat tepat 3 × (n + 2). Jumlah jubin = 3(n + 2) = 3n + 6; kelabu = 3n + 6 − n = 2n + 6. 3n + 6 = 150 → n = 48. Kelabu = 2(48) + 6 = <b>102</b>. (48 ialah bilangan jubin putih; 96 = 2n, lupa 6 jubin di hujung; 100 = ⅔ × 150.)"
  },
  { // 23 Persamaan linear — sukar
    s: "Di pasar tani, 3 biji mangga dan 4 biji epal berharga RM 13.20, manakala 5 biji mangga dan 2 biji epal berharga RM 15.00. Berapakah harga 2 biji mangga dan 3 biji epal?",
    en: "At a farmers' market, 3 mangoes and 4 apples cost RM 13.20, while 5 mangoes and 2 apples cost RM 15.00. What is the price of 2 mangoes and 3 apples?",
    p: ['RM 10.20', 'RM 9.40', 'RM 9.30', 'RM 7.80'], a: 2, topik: 'Persamaan Linear', aras: 'sukar',
    hurai: "3m + 4e = 13.20 … (1); 5m + 2e = 15.00 … (2). (2) × 2: 10m + 4e = 30.00. Tolak (1): 7m = 16.80 → m = 2.40. Daripada (2): 2e = 15 − 12 = 3 → e = 1.50. 2m + 3e = 4.80 + 4.50 = <b>RM 9.30</b>. (RM 10.20 menukar harga mangga dan epal; RM 9.40 = (13.20 + 15.00) ÷ 3, jalan pintas yang salah; RM 7.80 = 2 × (m + e).)"
  },
  { // 24 Peratus — sukar
    s: "Harga sejenis saham jatuh 20% pada hari Isnin dan jatuh lagi 10% pada hari Selasa. Berapakah peratus kenaikan yang diperlukan pada hari Rabu supaya harganya kembali sama dengan harga sebelum hari Isnin?",
    en: "A share price falls 20% on Monday and a further 10% on Tuesday. What percentage increase is needed on Wednesday to return to the price before Monday?",
    p: ['28.0%', '30.0%', '36.1%', '38.9%'], a: 3, topik: 'Peratus & Matematik Pengguna', aras: 'sukar',
    hurai: "Harga selepas dua hari = 0.8 × 0.9 = 0.72 daripada asal. Kenaikan diperlukan = (1 − 0.72) ÷ 0.72 = 0.28 ÷ 0.72 ≈ <b>38.9%</b>. (28% ialah peratus penurunan, bukan kenaikan; 30% = 20% + 10%; 36.1% = 25% + 11.1%, menjumlahkan kenaikan untuk setiap hari secara berasingan.)"
  },
  { // 25 Kadar & zon masa — sukar (ISI)
    jenis: 'isi',
    s: "Sebuah pesawat berlepas dari Kuala Lumpur pada pukul 9:00 pagi waktu Malaysia dan mendarat di London pada pukul 3:30 petang waktu London pada hari yang sama. Waktu London ialah 7 jam di belakang waktu Malaysia. Jarak penerbangan ialah 10 800 km. Hitung laju purata pesawat itu dalam km/j.",
    en: "A plane leaves Kuala Lumpur at 9:00 a.m. Malaysian time and lands in London at 3:30 p.m. London time the same day. London time is 7 hours behind Malaysian time. The flight distance is 10 800 km. Find the average speed in km/h.",
    a: 800, unit: 'km/j', topik: 'Nisbah, Kadar & Laju', aras: 'sukar',
    hurai: "9:00 pagi waktu Malaysia = 2:00 pagi waktu London. Masa penerbangan = 2:00 pagi hingga 3:30 petang = 13.5 jam. Laju = 10 800 ÷ 13.5 = <b>800 km/j</b>. (Jika zon masa diabaikan, masa disangka 6.5 jam dan laju ≈ 1 662 km/j — salah.)"
  },
  { // 26 Data — sukar
    s: "Markah ujian lapan murid ialah:<br><b>56, 72, 48, 65, 80, 59, 72, 61</b><br>Dua murid lagi mengambil ujian itu dan memperoleh 70 dan 52. Apakah kesan kepada <b>median</b> markah?",
    en: "Eight pupils scored 56, 72, 48, 65, 80, 59, 72, 61. Two more pupils score 70 and 52. What happens to the median mark?",
    p: ['Berkurang 3', 'Berkurang 2', 'Berkurang 0.625', 'Tidak berubah'], a: 3, topik: 'Data & Statistik', aras: 'sukar',
    hurai: "Susun 8 markah: 48, 56, 59, 61, 65, 72, 72, 80 → median = (61 + 65) ÷ 2 = 63. Susun 10 markah: 48, 52, 56, 59, 61, 65, 70, 72, 72, 80 → median = (61 + 65) ÷ 2 = 63. Median <b>tidak berubah</b> (satu markah baharu di bawah 61, satu di atas 65). (Berkurang 3 datang daripada tidak menyusun data; berkurang 2 mengambil nilai ke-5 sahaja sebagai median; 0.625 ialah perubahan min, bukan median.)"
  },
  { // 27 Geometri — sukar
    rajah: '<svg viewBox="0 0 250 170" style="max-width:100%;width:290px" role="img" aria-label="Bulatan pusat O, tangen PT menyentuh bulatan di T, garis PO memotong bulatan di Q"><circle cx="90" cy="100" r="50" fill="none" stroke="var(--c)" stroke-width="2.5"/><g stroke="currentColor" stroke-width="2" fill="none"><path d="M90 100L109.2 53.8L220 100Z"/><path d="M106.2 61.2L113.5 64.3L116.6 56.9"/></g><circle cx="90" cy="100" r="3" fill="currentColor"/><circle cx="140" cy="100" r="3" fill="currentColor"/><g font-size="13" fill="currentColor"><text x="78" y="116">O</text><text x="104" y="46">T</text><text x="224" y="106">P</text><text x="140" y="116">Q</text><text x="74" y="76">5 cm</text><text x="162" y="68">12 cm</text></g></svg>',
    s: "Dalam rajah, PT ialah tangen kepada bulatan berpusat O di titik T. Jejari bulatan ialah 5 cm dan PT = 12 cm. Garis lurus PO memotong bulatan di Q. Berapakah panjang PQ?",
    en: "In the diagram, PT is a tangent to the circle with centre O at point T. The radius is 5 cm and PT = 12 cm. Line PO cuts the circle at Q. What is the length of PQ?",
    p: ['13 cm', '10.9 cm', '8 cm', '7 cm'], a: 2, topik: 'Geometri & Pengukuran', aras: 'sukar',
    hurai: "Tangen berserenjang dengan jejari, jadi ∠OTP = 90°. OP = √(5² + 12²) = √169 = 13 cm. PQ = OP − OQ = 13 − 5 = <b>8 cm</b>. (13 cm ialah OP; 10.9 cm = √(12² − 5²), tersilap memilih hipotenus; 7 cm = 12 − 5.)"
  },
  { // 28 Persamaan linear — sukar
    s: "Sebuah nombor dua digit adalah 4 kali hasil tambah digitnya. Jika 18 ditambah kepada nombor itu, hasilnya ialah 6 kali hasil tambah digitnya. Apakah nombor itu?",
    en: "A two-digit number is 4 times the sum of its digits. If 18 is added to the number, the result is 6 times the sum of its digits. What is the number?",
    p: ['9', '36', '54', '63'], a: 1, topik: 'Persamaan Linear', aras: 'sukar',
    hurai: "Katakan hasil tambah digit = s. Nombor = 4s dan nombor + 18 = 6s. Maka 4s + 18 = 6s → 2s = 18 → s = 9, jadi nombor = 4 × 9 = <b>36</b>. Semak: 3 + 6 = 9; 36 = 4 × 9; 36 + 18 = 54 = 6 × 9. (9 ialah hasil tambah digit, bukan nombor itu; 54 = 36 + 18, iaitu nombor selepas ditambah 18; 63 menukar kedudukan digit, tetapi 63 ≠ 4 × 9.)"
  },
  { // 29 Kadar — sukar (ISI)
    jenis: 'isi',
    s: "Nisbah bilangan setem dalam album A kepada album B ialah 5 : 3. Mei Ling memindahkan sebilangan setem dari album A ke album B, lalu nisbah A : B menjadi 3 : 5. Kemudian, dia memindahkan 12 keping setem dari album B kembali ke album A, dan kini kedua-dua album mempunyai bilangan setem yang sama. Berapakah bilangan setem yang dipindahkan pada kali <b>pertama</b>?",
    en: "The ratio of the number of stamps in album A to album B is 5 : 3. Mei Ling moves some stamps from album A to album B, and the ratio A : B becomes 3 : 5. Then she moves 12 stamps from album B back to album A, and now both albums have the same number of stamps. How many stamps were moved the first time?",
    a: 24, unit: 'keping', topik: 'Nisbah, Kadar & Laju', aras: 'sukar',
    hurai: "Jumlah setem, T, tidak berubah. Selepas pindahan pertama, B = 5/8 T; selepas 12 keping dipindahkan keluar, B = 1/2 T. Jadi 5/8 T − 1/2 T = 12 → 1/8 T = 12 → T = 96. Asal: A = 60, B = 36. Selepas pindahan pertama: A = 36, B = 60. Setem yang dipindahkan = 60 − 36 = <b>24</b> keping. (Ralat biasa: menjawab 96, iaitu jumlah setem, atau 12, iaitu pindahan kedua.)"
  },
  { // 30 Geometri — sukar
    s: "Titik A(2, 5) dipantulkan pada garis y = x untuk menghasilkan imej A′. Kemudian, A′ diputarkan 180° pada asalan O untuk menghasilkan imej A″. Berapakah luas segi tiga AA′A″?",
    en: "Point A(2, 5) is reflected in the line y = x to give the image A′. Then A′ is rotated 180° about the origin O to give the image A″. What is the area of triangle AA′A″?",
    p: ['6 unit²', '15 unit²', '20 unit²', '21 unit²'], a: 3, topik: 'Geometri & Pengukuran', aras: 'sukar',
    hurai: "Pantulan pada y = x menukar kedudukan koordinat: A′ = (5, 2). Putaran 180° pada O menukar tanda kedua-dua koordinat: A″ = (−5, −2). Kecerunan AA′ = (2 − 5)/(5 − 2) = −1 dan kecerunan AA″ = (−2 − 5)/(−5 − 2) = 1, jadi ∠A = 90°. AA′ = √(3² + 3²) = 3√2 dan AA″ = √(7² + 7²) = 7√2. Luas = ½ × 3√2 × 7√2 = ½ × 42 = <b>21 unit²</b>. (Semak dengan segi empat tepat yang melingkungi: 10 × 7 − 4.5 − 20 − 24.5 = 21.) (20 unit² memantulkan A pada paksi-y, bukan garis y = x; 6 unit² memutarkan A′ 90° lawan arah jam, bukan 180°; 15 unit² menganggap putaran 180° hanya menukar tanda koordinat x, iaitu A″ = (−5, 2).)"
  }
  ]
});

UKKM_PART(8, { id: 'sains', nama: 'Sains', ikon: '🔬', minit: 30,
  arahan: 'Jawab semua 30 soalan. Pilih satu jawapan yang paling tepat bagi setiap soalan.',
  soalan: [
  { topik: 'Biologi: Sel', s: `Sel rambut akar tidak mempunyai kloroplas. Apakah sebab yang paling munasabah?`,
    en: `Root hair cells have no chloroplasts. What is the most reasonable explanation?`,
    p: ['Akar berada di dalam tanah dan tidak menerima cahaya untuk fotosintesis', 'Sel rambut akar tidak mempunyai nukleus', 'Akar menghasilkan makanan sendiri tanpa kloroplas', 'Kloroplas hanya terdapat dalam sel haiwan'], a: 0,
    hurai: `Kloroplas diperlukan untuk fotosintesis yang memerlukan cahaya. Akar di dalam tanah tidak menerima cahaya, jadi sel rambut akar dikhususkan untuk menyerap air dan garam mineral.` },
  { topik: 'Biologi: Sel', s: `Rajah menunjukkan susunan radas untuk mengkaji kadar fotosintesis tumbuhan akuatik <i>Hydrilla</i>. Lampu diletakkan pada jarak, d, yang berlainan dan bilangan gelembung gas seminit dikira. Berdasarkan keputusan dalam jadual, apakah kesimpulannya?`,
    en: `The diagram shows apparatus to study the rate of photosynthesis of the water plant Hydrilla. The lamp is placed at different distances, d, and the gas bubbles per minute are counted. Based on the results in the table, what is the conclusion?`,
    rajah: `<svg viewBox="0 0 460 275" style="max-width:440px" role="img" aria-label="Radas fotosintesis Hydrilla"><defs><marker id="s8q2" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto-start-reverse"><path d="M0,0 L8,4 L0,8 z" fill="currentColor"/></marker></defs><g stroke="currentColor" stroke-width="2" fill="none"><circle cx="60" cy="130" r="18"/><path d="M60 148 V230 M35 230 H85"/><path d="M60 102 V94 M82 112 L88 106 M38 112 L32 106 M88 130 H96"/><path d="M160 80 V230 H320 V80"/><path d="M185 215 L232 165 V120 M295 215 L248 165 V120"/><path d="M226 140 V50 Q226 36 240 36 Q254 36 254 50 V140"/></g><line x1="160" y1="100" x2="320" y2="100" stroke-dasharray="5 4" style="stroke:var(--muted)" stroke-width="1.5"/><g fill="none" style="stroke:var(--c)" stroke-width="2.5"><path d="M215 214 q6 -10 0 -20 q-6 -10 0 -20"/><path d="M240 214 q6 -10 0 -20 q-6 -10 0 -20"/><path d="M265 214 q6 -10 0 -20 q-6 -10 0 -20"/></g><g fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="240" cy="132" r="3"/><circle cx="240" cy="112" r="3"/><circle cx="240" cy="92" r="2.5"/></g><line x1="62" y1="252" x2="158" y2="252" stroke="currentColor" stroke-width="1.5" marker-start="url(#s8q2)" marker-end="url(#s8q2)"/><g stroke="var(--muted)" stroke-width="1" style="stroke:var(--muted)"><line x1="256" y1="60" x2="330" y2="50"/><line x1="245" y1="112" x2="330" y2="110"/><line x1="272" y1="200" x2="330" y2="200"/></g><g font-size="13" fill="currentColor"><text x="60" y="84" text-anchor="middle">Lampu</text><text x="110" y="270" text-anchor="middle" font-weight="700">d</text><text x="336" y="54">Tabung uji</text><text x="336" y="114">Gelembung gas</text><text x="336" y="204">Hydrilla sp.</text><text x="166" y="76">Air</text></g></svg><table><tr><th>d (cm)</th><td>10</td><td>20</td><td>30</td><td>40</td></tr><tr><th>Gelembung seminit</th><td>40</td><td>22</td><td>12</td><td>6</td></tr></table>`,
    p: ['Semakin tinggi keamatan cahaya, semakin tinggi kadar fotosintesis', 'Semakin jauh lampu, semakin tinggi kadar fotosintesis', 'Keamatan cahaya tidak mempengaruhi kadar fotosintesis', 'Gas yang terkumpul ialah karbon dioksida'], a: 0,
    hurai: `Lampu yang lebih dekat memberikan keamatan cahaya yang lebih tinggi, dan lebih banyak gelembung oksigen terhasil. Maka kadar fotosintesis bertambah apabila keamatan cahaya bertambah.` },
  { topik: 'Biologi: Rangsangan dan Gerak Balas', s: `Neuron manakah membawa impuls dari sistem saraf pusat ke efektor seperti otot?`,
    en: `Which neuron carries impulses from the central nervous system to an effector such as a muscle?`,
    p: ['Neuron deria', 'Neuron perantaraan', 'Neuron motor', 'Reseptor'], a: 2,
    hurai: `Neuron motor membawa impuls dari otak atau saraf tunjang ke efektor. Neuron deria membawa impuls dari reseptor ke sistem saraf pusat.` },
  { topik: 'Biologi: Koordinasi dan Homeostasis', s: `Apabila berada di dalam bilik berhawa dingin yang sangat sejuk, badan Aina menggigil. Apakah tujuan menggigil?`,
    en: `In a very cold air-conditioned room, Aina's body shivers. What is the purpose of shivering?`,
    p: ['Mengurangkan kehilangan air', 'Menyejukkan badan', 'Mengurangkan kadar respirasi sel', 'Otot mengecut dan mengendur dengan cepat untuk menghasilkan haba'], a: 3,
    hurai: `Menggigil ialah pengecutan otot secara cepat dan berulang. Aktiviti otot ini meningkatkan respirasi sel dan menghasilkan haba untuk mengekalkan suhu badan.` },
  { topik: 'Biologi: Respirasi', s: `Apakah urutan laluan udara yang betul semasa menarik nafas?`,
    en: `What is the correct path of air during inhalation?`,
    p: ['Rongga hidung → bronkus → trakea → bronkiol → alveolus', 'Rongga hidung → trakea → bronkiol → bronkus → alveolus', 'Rongga hidung → trakea → bronkus → bronkiol → alveolus', 'Rongga hidung → alveolus → bronkiol → bronkus → trakea'], a: 2,
    hurai: `Udara masuk melalui rongga hidung ke trakea, kemudian bercabang ke bronkus, bronkiol dan akhirnya alveolus tempat pertukaran gas berlaku.` },
  { topik: 'Biologi: Pengangkutan', s: `Daun pokok bunga di halaman rumah layu pada waktu tengah hari yang panas tetapi segar semula pada waktu petang. Apakah sebabnya?`,
    en: `The leaves of a garden plant wilt at noon on a hot day but recover in the evening. Why?`,
    p: ['Kadar transpirasi melebihi kadar penyerapan air oleh akar pada tengah hari', 'Pokok berhenti menjalankan fotosintesis pada waktu petang', 'Akar menyerap terlalu banyak air pada tengah hari', 'Floem berhenti mengangkut makanan'], a: 0,
    hurai: `Pada tengah hari yang panas, air hilang melalui stoma lebih cepat daripada yang dapat diserap oleh akar, jadi sel kehilangan kesegahan dan daun layu. Pada waktu petang transpirasi menurun dan sel kembali segah.` },
  { topik: 'Biologi: Pengangkutan', s: `Bilangan stoma pada permukaan atas dan permukaan bawah daun sejenis tumbuhan dibilang di bawah mikroskop. Keputusan ditunjukkan dalam jadual. Apakah inferens yang paling sesuai?`,
    en: `The number of stomata on the upper and lower surfaces of a leaf is counted under a microscope. The results are in the table. What is the most suitable inference?`,
    rajah: `<table><tr><th>Permukaan daun</th><th>Bilangan stoma per mm²</th></tr><tr><td>Atas</td><td>5</td></tr><tr><td>Bawah</td><td>48</td></tr></table>`,
    p: ['Kebanyakan air hilang melalui permukaan atas daun', 'Kebanyakan transpirasi berlaku melalui permukaan bawah daun', 'Fotosintesis hanya berlaku di permukaan bawah daun', 'Stoma tidak terlibat dalam transpirasi'], a: 1,
    hurai: `Wap air keluar dari daun melalui stoma. Permukaan bawah mempunyai jauh lebih banyak stoma, jadi kebanyakan transpirasi berlaku di situ.` },
  { topik: 'Biologi: Pembiakan', s: `Selepas haid, dinding uterus menjadi semakin tebal dan kaya dengan salur darah. Apakah kepentingannya?`,
    en: `After menstruation, the uterus lining becomes thicker and rich in blood vessels. Why is this important?`,
    p: ['Untuk menghasilkan ovum', 'Untuk menghasilkan hormon testosteron', 'Untuk menerima dan membekalkan nutrien kepada embrio yang menempel', 'Untuk menghalang sperma memasuki uterus'], a: 2,
    hurai: `Jika persenyawaan berlaku, embrio akan menempel pada dinding uterus yang tebal dan mendapat nutrien serta oksigen daripadanya. Jika tiada persenyawaan, dinding ini luruh semasa haid.` },
  { topik: 'Biologi: Kesihatan Manusia', s: `Mengapakah makanan yang disimpan di dalam peti sejuk lebih lambat rosak?`,
    en: `Why does food kept in a refrigerator spoil more slowly?`,
    p: ['Suhu rendah melambatkan pertumbuhan dan pembiakan mikroorganisma', 'Suhu rendah membunuh semua mikroorganisma', 'Peti sejuk mengeluarkan oksigen daripada makanan', 'Peti sejuk menambah garam pada makanan'], a: 0,
    hurai: `Mikroorganisma membiak paling cepat pada suhu suam. Suhu rendah dalam peti sejuk melambatkan aktiviti mikroorganisma tetapi tidak membunuh semuanya.` },

  { topik: 'Ekologi: Siratan Makanan', s: `Jadual menunjukkan bilangan organisma dalam rantai makanan sebuah kolam: Hydrilla → ikan kecil → ikan haruan. Apakah inferens yang paling sesuai?`,
    en: `The table shows the numbers of organisms in a pond food chain: Hydrilla → small fish → snakehead fish. What is the most suitable inference?`,
    rajah: `<table><tr><th>Organisma</th><th>Bilangan</th></tr><tr><td>Hydrilla</td><td>5000</td></tr><tr><td>Ikan kecil</td><td>300</td></tr><tr><td>Ikan haruan</td><td>10</td></tr></table>`,
    p: ['Ikan haruan ialah pengeluar dalam kolam itu', 'Bilangan organisma berkurang pada aras trofik yang lebih tinggi kerana tenaga yang tersedia semakin berkurang', 'Hydrilla memakan ikan kecil', 'Tenaga bertambah pada setiap aras trofik'], a: 1,
    hurai: `Hanya sebahagian kecil tenaga dipindahkan ke aras trofik berikutnya; selebihnya digunakan untuk respirasi dan hilang sebagai haba. Oleh itu aras trofik yang lebih tinggi menyokong bilangan organisma yang lebih kecil (piramid nombor).` },
  { topik: 'Ekologi: Ekosistem', s: `Rumput lalang yang tumbuh di sekeliling anak pokok kelapa sawit menyebabkan anak pokok itu tumbuh dengan perlahan. Apakah jenis interaksi ini?`,
    en: `Lalang grass growing around young oil palms makes them grow slowly. What type of interaction is this?`,
    p: ['Persaingan intraspesies', 'Mutualisme', 'Komensalisme', 'Persaingan interspesies'], a: 3,
    hurai: `Lalang dan kelapa sawit ialah spesies berbeza yang bersaing untuk air, nutrien dan cahaya, maka ia persaingan interspesies. Persaingan intraspesies berlaku antara organisma spesies yang sama.` },
  { topik: 'Ekologi: Biodiversiti', s: `Haiwan X berdarah sejuk (poikiloterma), berkulit kering dan bersisik, serta bertelur bercangkerang di darat. Haiwan manakah mungkin X?`,
    en: `Animal X is cold-blooded, has dry scaly skin and lays shelled eggs on land. Which animal could be X?`,
    p: ['Katak', 'Ikan paus', 'Cicak', 'Ayam'], a: 2,
    hurai: `Ciri-ciri ini milik reptilia seperti cicak. Katak mempunyai kulit lembap, ikan paus ialah mamalia, dan ayam ialah burung yang berdarah panas (homeoterma).` },

  { topik: 'Kimia: Jirim', s: `Titisan air terbentuk di permukaan luar sebuah gelas yang berisi air ais. Dari manakah titisan air itu datang?`,
    en: `Water droplets form on the outside of a glass of iced water. Where do the droplets come from?`,
    p: ['Wap air di udara menyejuk dan memeluwap apabila menyentuh permukaan gelas yang sejuk', 'Air ais meresap keluar melalui dinding gelas', 'Gelas menghasilkan air apabila sejuk', 'Ais di dalam gelas memejalwap'], a: 0,
    hurai: `Udara mengandungi wap air. Apabila wap air menyentuh permukaan gelas yang sejuk, zarahnya kehilangan tenaga dan memeluwap menjadi titisan air.` },
  { topik: 'Kimia: Jadual Berkala dan Campuran', s: `Campuran etanol (takat didih 78 °C) dan air (takat didih 100 °C) diasingkan melalui penyulingan. Semasa etanol sedang terkumpul sebagai hasil sulingan, apakah bacaan termometer yang dijangka?`,
    en: `A mixture of ethanol (boiling point 78 °C) and water (boiling point 100 °C) is separated by distillation. While ethanol is being collected as the distillate, what reading is expected on the thermometer?`,
    p: ['Kira-kira 0 °C', 'Kira-kira 78 °C', 'Kira-kira 100 °C', 'Kira-kira 178 °C'], a: 1,
    hurai: `Etanol mempunyai takat didih yang lebih rendah, jadi ia mendidih dan tersuling dahulu pada kira-kira 78 °C. Suhu hanya naik ke arah 100 °C selepas kebanyakan etanol telah tersuling.` },
  { topik: 'Kimia: Udara', s: `Gas manakah membentuk peratusan terbesar dalam udara?`,
    en: `Which gas makes up the largest percentage of air?`,
    p: ['Oksigen', 'Karbon dioksida', 'Nitrogen', 'Argon'], a: 2,
    hurai: `Udara mengandungi kira-kira 78% nitrogen, 21% oksigen, kurang daripada 1% argon dan gas nadir lain, dan kira-kira 0.04% karbon dioksida.` },
  { topik: 'Kimia: Air dan Larutan', s: `Di loji rawatan air, tawas (aluminium sulfat) ditambah kepada air sungai. Apakah tujuannya?`,
    en: `At a water treatment plant, alum (aluminium sulphate) is added to river water. What is its purpose?`,
    p: ['Membunuh bakteria', 'Mencegah kerosakan gigi', 'Meneutralkan air yang berasid', 'Menggumpalkan zarah kotoran halus supaya mudah termendap'], a: 3,
    hurai: `Tawas menyebabkan zarah kotoran yang halus bergumpal (pengentalan) dan termendap. Klorin membunuh bakteria, fluorida mencegah kerosakan gigi, dan kapur meneutralkan keasidan.` },
  { topik: 'Kimia: Asid dan Alkali', s: `Air suling ditambah sedikit demi sedikit kepada 10 mL asid hidroklorik dan pH larutan diukur. Keputusan ditunjukkan dalam jadual. Apakah kesimpulannya?`,
    en: `Distilled water is added bit by bit to 10 mL of hydrochloric acid and the pH is measured. The results are in the table. What is the conclusion?`,
    rajah: `<table><tr><th>Isi padu air ditambah (mL)</th><td>0</td><td>10</td><td>20</td><td>30</td></tr><tr><th>pH</th><td>1.0</td><td>1.3</td><td>1.5</td><td>1.6</td></tr></table>`,
    p: ['Asid menjadi lebih berasid apabila dicairkan', 'Nilai pH bertambah, iaitu larutan menjadi kurang berasid apabila dicairkan', 'Asid bertukar menjadi alkali apabila air ditambah', 'Penambahan air tidak mengubah pH asid'], a: 1,
    hurai: `pH bertambah daripada 1.0 kepada 1.6 tetapi masih di bawah 7. Larutan kekal berasid tetapi menjadi kurang berasid kerana kepekatan asid berkurang.` },
  { topik: 'Kimia: Kereaktifan Logam', s: `Kasiterit ialah bijih timah yang banyak dilombong di Malaysia suatu ketika dahulu. Kasiterit ialah sebatian timah dengan…`,
    en: `Cassiterite is a tin ore that was once widely mined in Malaysia. Cassiterite is a compound of tin with…`,
    p: ['sulfur', 'karbon', 'klorin', 'oksigen'], a: 3,
    hurai: `Kasiterit ialah timah oksida. Timah diekstrak dengan memanaskan kasiterit bersama karbon kerana karbon lebih reaktif daripada timah.` },
  { topik: 'Kimia: Termokimia', s: `Ketulan ais dimasukkan ke dalam segelas minuman suam dan minuman itu menjadi sejuk. Apakah penerangan yang betul?`,
    en: `Ice cubes are put into a glass of warm drink and the drink becomes cold. Which explanation is correct?`,
    p: ['Ais membebaskan haba kepada minuman', 'Ais menyerap haba daripada minuman untuk melebur (proses endotermik)', 'Ais menambah zarah sejuk ke dalam minuman', 'Minuman menyerap kesejukan daripada ais secara eksotermik'], a: 1,
    hurai: `Peleburan memerlukan haba. Ais menyerap haba daripada minuman di sekelilingnya, jadi suhu minuman turun; proses yang menyerap haba ialah endotermik.` },

  { topik: 'Fizik: Keelektrikan', s: `Rajah menunjukkan dua perintang yang disambung secara selari. Ammeter A1 menunjukkan bacaan 0.9 A dan ammeter A2 menunjukkan bacaan 0.6 A. Berapakah bacaan ammeter A3?`,
    en: `The diagram shows two resistors connected in parallel. Ammeter A1 reads 0.9 A and ammeter A2 reads 0.6 A. What is the reading of ammeter A3?`,
    rajah: `<svg viewBox="0 0 420 235" style="max-width:420px" role="img" aria-label="Litar selari dengan tiga ammeter"><g stroke="currentColor" stroke-width="2" fill="none"><path d="M60 190 V40 H182"/><line x1="182" y1="22" x2="182" y2="58"/><line x1="192" y1="30" x2="192" y2="50" stroke-width="4"/><path d="M192 40 H208"/><line x1="208" y1="22" x2="208" y2="58"/><line x1="218" y1="30" x2="218" y2="50" stroke-width="4"/><path d="M218 40 H286"/><circle cx="300" cy="40" r="14"/><path d="M314 40 H360 V190"/><path d="M60 110 H106"/><circle cx="120" cy="110" r="14"/><path d="M134 110 H200"/><rect x="200" y="98" width="60" height="24"/><path d="M260 110 H360"/><path d="M60 190 H106"/><circle cx="120" cy="190" r="14"/><path d="M134 190 H200"/><rect x="200" y="178" width="60" height="24"/><path d="M260 190 H360"/></g><g fill="currentColor"><circle cx="60" cy="110" r="4"/><circle cx="360" cy="110" r="4"/></g><g font-size="12" font-weight="700" fill="currentColor" text-anchor="middle"><text x="300" y="44">A1</text><text x="120" y="114">A2</text><text x="120" y="194">A3</text></g><g font-size="13" fill="currentColor" text-anchor="middle"><text x="300" y="76">0.9 A</text><text x="120" y="88">0.6 A</text><text x="120" y="226">?</text></g></svg>`,
    p: ['0.3 A', '0.6 A', '0.9 A', '1.5 A'], a: 0,
    hurai: `Dalam litar selari, arus utama terbahagi kepada cabang-cabang: A1 = A2 + A3. Maka A3 = 0.9 − 0.6 = 0.3 A.` },
  { topik: 'Fizik: Kemagnetan', s: `Teras elektromagnet dalam sebuah loceng elektrik diperbuat daripada besi lembut. Apakah sebabnya?`,
    en: `The core of the electromagnet in an electric bell is made of soft iron. Why?`,
    p: ['Besi lembut ialah penebat elektrik', 'Besi lembut menjadi magnet kekal', 'Besi lembut mudah dimagnetkan dan hilang kemagnetannya apabila arus diputuskan', 'Besi lembut lebih ringan daripada keluli'], a: 2,
    hurai: `Loceng elektrik memerlukan elektromagnet yang hidup dan mati berulang kali. Besi lembut menjadi magnet apabila arus mengalir dan hilang kemagnetan serta-merta apabila arus terputus, tidak seperti keluli.` },
  { topik: 'Fizik: Daya dan Gerakan', s: `Sebuah bongkah kayu ditarik perlahan-lahan dengan neraca spring di atas permukaan yang berlainan. Bacaan neraca spring ketika bongkah mula bergerak direkodkan dalam jadual. Apakah kesimpulannya?`,
    en: `A wooden block is pulled slowly with a spring balance over different surfaces. The reading when the block starts to move is recorded in the table. What is the conclusion?`,
    rajah: `<table><tr><th>Permukaan</th><th>Bacaan neraca spring (N)</th></tr><tr><td>Kaca</td><td>2.0</td></tr><tr><td>Papan kayu</td><td>4.0</td></tr><tr><td>Kertas pasir</td><td>7.0</td></tr></table>`,
    p: ['Semakin kasar permukaan, semakin besar daya geseran', 'Semakin licin permukaan, semakin besar daya geseran', 'Jenis permukaan tidak mempengaruhi daya geseran', 'Daya geseran bergantung pada warna permukaan'], a: 0,
    hurai: `Daya yang diperlukan untuk menggerakkan bongkah sama dengan daya geseran. Kertas pasir yang paling kasar memerlukan daya paling besar, jadi geseran bertambah dengan kekasaran permukaan.` },
  { topik: 'Fizik: Haba', s: `Haba daripada Matahari sampai ke Bumi melalui angkasa lepas yang hampir vakum. Kaedah pemindahan haba ini ialah…`,
    en: `Heat from the Sun reaches Earth through space, which is almost a vacuum. This method of heat transfer is…`,
    p: ['pengaliran', 'perolakan', 'sinaran', 'penyejatan'], a: 2,
    hurai: `Sinaran tidak memerlukan medium, jadi boleh merambat melalui vakum. Pengaliran dan perolakan memerlukan zarah jirim.` },
  { topik: 'Fizik: Cahaya', s: `Perkataan "AMBULANS" ditulis secara songsang sisi di bahagian hadapan van ambulans. Apakah sebabnya?`,
    en: `The word "AMBULANS" is written laterally inverted on the front of an ambulance. Why?`,
    p: ['Supaya pejalan kaki di tepi jalan dapat membacanya dengan mudah', 'Untuk menjimatkan ruang pada van', 'Kerana tulisan songsang lebih mudah dicat', 'Supaya pemandu di hadapan dapat membacanya dengan betul melalui cermin pandang belakang'], a: 3,
    hurai: `Imej dalam cermin satah adalah songsang sisi. Tulisan yang sudah disongsangkan akan kelihatan betul dalam cermin pandang belakang pemandu di hadapan.` },
  { topik: 'Fizik: Bunyi', s: `Guruh didengar 3 s selepas kilat dilihat. Jika laju bunyi di udara ialah 340 m s⁻¹, berapakah jarak kilat itu dari pemerhati?`,
    en: `Thunder is heard 3 s after the lightning is seen. If the speed of sound in air is 340 m s⁻¹, how far away is the lightning?`,
    p: ['113 m', '340 m', '510 m', '1020 m'], a: 3,
    hurai: `Cahaya sampai hampir serta-merta, jadi 3 s ialah masa bunyi bergerak sehala. Jarak = 340 × 3 = 1020 m (tidak perlu dibahagi dua kerana ini bukan gema).` },
  { topik: 'Fizik: Tenaga dan Kuasa', s: `Apakah urutan perubahan tenaga yang betul di sebuah stesen janakuasa hidroelektrik?`,
    en: `What is the correct sequence of energy changes in a hydroelectric power station?`,
    p: ['Tenaga keupayaan graviti → tenaga kinetik → tenaga elektrik', 'Tenaga kimia → tenaga haba → tenaga elektrik', 'Tenaga nuklear → tenaga haba → tenaga elektrik', 'Tenaga cahaya → tenaga elektrik'], a: 0,
    hurai: `Air yang disimpan di empangan mempunyai tenaga keupayaan graviti. Air mengalir turun (tenaga kinetik) dan memutarkan turbin serta penjana yang menghasilkan tenaga elektrik.` },
  { topik: 'Fizik: Keradioaktifan', s: `Bahan radioaktif disimpan di dalam bekas plumbum yang tebal. Apakah sebabnya?`,
    en: `Radioactive substances are stored in thick lead containers. Why?`,
    p: ['Plumbum mempercepatkan pereputan radioaktif', 'Plumbum yang tebal dapat menghalang sinaran radioaktif, termasuk sinar gama', 'Plumbum menukarkan sinaran kepada cahaya', 'Plumbum menyejukkan bahan radioaktif'], a: 1,
    hurai: `Plumbum yang tebal menyerap sinaran radioaktif, termasuk sinar gama yang paling menembus. Ini melindungi orang di sekeliling; plumbum tidak mengubah kadar pereputan.` },

  { topik: 'Bumi & Angkasa: Bintang dan Galaksi', s: `Satu tahun cahaya ialah…`,
    en: `One light-year is…`,
    p: ['masa yang diambil oleh cahaya Matahari untuk sampai ke Bumi', 'tempoh Bumi mengelilingi Matahari', 'umur sebuah bintang', 'jarak yang dilalui oleh cahaya dalam masa satu tahun'], a: 3,
    hurai: `Tahun cahaya ialah unit jarak, bukan unit masa. Ia digunakan untuk jarak yang sangat jauh antara bintang dan galaksi.` },
  { topik: 'Bumi & Angkasa: Cuaca Angkasa', s: `Semasa berlaku suar suria yang kuat, angkasawan di stesen angkasa diarahkan berlindung di bahagian stesen yang mempunyai pelindung tambahan. Apakah sebabnya?`,
    en: `During a strong solar flare, astronauts on a space station are told to shelter in the part with extra shielding. Why?`,
    p: ['Suar suria menyebabkan stesen angkasa jatuh ke Bumi', 'Suar suria membebaskan sinaran dan zarah bertenaga tinggi yang boleh membahayakan kesihatan angkasawan', 'Suar suria menyebabkan suhu di angkasa menjadi terlalu sejuk', 'Suar suria menghalang angkasawan bernafas'], a: 1,
    hurai: `Suar suria membebaskan sinaran bertenaga tinggi (seperti sinar-X) dan zarah bercas. Di luar perlindungan atmosfera Bumi, sinaran ini boleh merosakkan sel badan angkasawan.` },
  { topik: 'Bumi & Angkasa: Bumi', s: `Jadual menunjukkan cara pembentukan tiga jenis batuan, P, Q dan R. Batuan manakah paling mungkin mengandungi fosil?`,
    en: `The table shows how three types of rock, P, Q and R, are formed. Which rock is most likely to contain fossils?`,
    rajah: `<table><tr><th>Batuan</th><th>Cara pembentukan</th></tr><tr><td>P</td><td style="text-align:left">Magma menyejuk dan membeku; berhablur</td></tr><tr><td>Q</td><td style="text-align:left">Lapisan enapan termampat dan mengeras; berlapis-lapis</td></tr><tr><td>R</td><td style="text-align:left">Batuan sedia ada berubah akibat haba dan tekanan yang tinggi</td></tr></table>`,
    p: ['P', 'Q', 'R', 'P dan R'], a: 1,
    hurai: `Fosil terbentuk apabila sisa hidupan tertimbus dalam lapisan enapan, jadi batuan enapan (Q) paling mungkin mengandungi fosil. Haba magma (P) atau haba dan tekanan tinggi (R) biasanya memusnahkan fosil.` },
  ] });

UKKM_PART(8, {
  id: 'eng', nama: 'Bahasa Inggeris', ikon: '📖', minit: 30, jenis: 'objektif',
  arahan: 'Read each text carefully and answer the questions that follow. Choose the best answer (A, B, C or D).',
  petikan: [
    { id: 'P1', tajuk: 'Poster: Prevent Kitchen Fires', teks: `
<p style="font-size:1.15em"><b>PREVENT KITCHEN FIRES</b></p>
<p><i>A message from your local fire and rescue station</i></p>
<p>Many house fires start in the kitchen. Follow these simple steps:</p>
<ul>
<li>Never leave cooking unattended. If you must leave the kitchen, switch off the stove first.</li>
<li>Keep cloths, plastic bags and paper away from the stove.</li>
<li>If oil in a pan catches fire, do <b>NOT</b> pour water on it. Turn off the gas and cover the pan with a lid or a damp cloth.</li>
<li>Check gas hoses every month for cracks. Replace them every two years.</li>
</ul>
<p>In an emergency, call <b>999</b>.</p>
<p>Free fire safety talk: Sunday, 12 July, 9.00 a.m., Dewan Orang Ramai Taman Desa</p>` },
    { id: 'P2', tajuk: 'Minutes of the Student Council Meeting', teks: `
<p><b>SMK Taman Universiti</b> · Date: 4 March · Time: 2.30 p.m. · Venue: Meeting Room 2<br>
<b>Present:</b> 14 members and Puan Nora (teacher advisor)<br>
<b>Absent with apology:</b> Iskandar (Treasurer), who was representing the school at a debate</p>
<p><b>1. Canteen queues</b><br>Members reported long queues at recess, especially for Form 1 students. Puan Nora suggested staggered recess times. The secretary will write to the Senior Assistant to propose this.</p>
<p><b>2. Sports Day budget</b><br>As the treasurer was absent, the budget could not be finalised. It will be discussed at the next meeting.</p>
<p><b>3. Recycling bins</b><br>Farhan reported that the bins at Block C are often full by Wednesday. Members agreed to ask the cleaning contractor to empty them twice a week instead of once.</p>
<p><b>4. Other matters</b><br>Nur Sabrina proposed a Quiet Reading Corner in the hall foyer. Several members liked the idea but felt that it needed more planning. She will present a detailed proposal at a later meeting.</p>
<p>Meeting ended: 3.40 p.m. · Next meeting: 1 April<br>Prepared by: Chen Wei Ling (Secretary)</p>` },
    { id: 'P3', tajuk: 'Article: Why Teenagers Can’t Fall Asleep Early', teks: `
<p>Many parents complain that their teenage children stay up late and are difficult to wake in the morning. It is easy to blame laziness or phones, but scientists say that biology also plays a part.</p>
<p>During the teenage years, the body’s internal clock shifts. The brain begins releasing melatonin, the hormone that makes us feel sleepy, about one to two hours later than it did in childhood. As a result, many teenagers do not feel tired until 11 p.m. or later, even if they go to bed earlier.</p>
<p>At the same time, teenagers still need between eight and ten hours of sleep each night. A student who falls asleep at midnight and wakes at 5.45 a.m. for school gets less than six hours. Over a week, this missing sleep adds up. Studies link it with poorer memory, weaker concentration and changes in mood.</p>
<p>Screens make the problem worse. The blue light from phones and tablets can delay the release of melatonin even further, and an exciting game or conversation keeps the brain alert.</p>
<p>Some countries have responded by starting school later in the morning. In Malaysia, early school start times are unlikely to change soon, so experts suggest steps that students themselves can control. Keeping the same bedtime on weekdays and weekends helps the body clock stay steady. Putting phones away an hour before bed and getting morning sunlight can also help.</p>
<p>None of this means that teenagers should be excused for being late. However, understanding the science may lead to more patience on both sides.</p>` }
  ],
  soalan: [
    { petikan: 'P1', topik: 'Main idea / purpose', s: 'What is the main purpose of the poster?',
      p: ['To advertise new gas stoves and hoses', 'To explain how the fire and rescue station is run', 'To invite people to train as firefighters', 'To give advice about kitchen fires'], a: 3,
      hurai: `The title is "PREVENT KITCHEN FIRES" and the poster lists "simple steps", including what to do "If oil in a pan catches fire". The talk at the end is an extra activity.` },
    { petikan: 'P1', topik: 'Specific detail', s: 'According to the poster, how often should gas hoses be replaced?',
      p: ['Every month', 'Every two years', 'Every time they are checked', 'Only when a fire has started'], a: 1,
      hurai: `"Check gas hoses every month for cracks. Replace them every two years." Checking is monthly; replacing is every two years.` },
    { petikan: 'P1', topik: 'Vocabulary in context', s: 'In “Never leave cooking <b>unattended</b>”, the word <b>unattended</b> means',
      p: ['with nobody watching it', 'without any guests present', 'without being invited', 'not finished on time'], a: 0,
      hurai: `The next sentence says, "If you must leave the kitchen, switch off the stove first", so "unattended" means with no one there to watch it.` },
    { petikan: 'P1', topik: 'Reference', s: 'In “Check gas hoses every month for cracks. Replace <b>them</b> every two years”, <b>them</b> refers to',
      p: ['the cracks', 'the cloths and plastic bags', 'the gas hoses', 'the pan lids'], a: 2,
      hurai: `You replace the gas hoses, not the cracks. The cracks are what you check the hoses for.` },
    { petikan: 'P1', topik: 'Inference', s: 'While Aiman is frying fish, the oil in the pan catches fire. Which action follows the poster’s advice?',
      p: ['Pour a jug of cold water over the pan', 'Carry the burning pan outside to the sink', 'Turn off the gas and cover the pan with a lid', 'Open the window and wait for the flames to burn out'], a: 2,
      hurai: `"If oil in a pan catches fire, do NOT pour water on it. Turn off the gas and cover the pan with a lid or a damp cloth."` },

    { petikan: 'P2', topik: 'Main idea / purpose', s: 'This document is mainly a record of',
      p: ['what was discussed and decided at a meeting', 'the rules for using the school canteen', 'a proposal for a Quiet Reading Corner', 'the budget for the school’s Sports Day'], a: 0,
      hurai: `Minutes list who was "Present", each item discussed, and what was agreed, such as asking the contractor "to empty them twice a week".` },
    { petikan: 'P2', topik: 'Specific detail', s: 'Why could the Sports Day budget NOT be finalised?',
      p: ['The meeting ended before the item was reached.', 'Puan Nora did not agree with the amount.', 'The secretary had not prepared the figures in time.', 'The treasurer was away representing the school.'], a: 3,
      hurai: `"As the treasurer was absent, the budget could not be finalised." Iskandar, the treasurer, "was representing the school at a debate".` },
    { petikan: 'P2', topik: 'Vocabulary in context', s: 'Puan Nora suggested <b>staggered</b> recess times. This means recess would',
      p: ['be much longer than the usual twenty minutes', 'start at different times for each group', 'be a very surprising change for students', 'happen only when students walk steadily'], a: 1,
      hurai: `The problem is "long queues at recess". Staggered times spread students out so that not everyone arrives at the canteen at once. The word is not about walking unsteadily or surprise.` },
    { petikan: 'P2', topik: 'Reference', s: 'In item 3, <b>them</b> in “to empty them twice a week” refers to',
      p: ['the recycling bins at Block C', 'the council members', 'the workers from the contractor', 'the Wednesday collections'], a: 0,
      hurai: `"The bins at Block C are often full by Wednesday. Members agreed to ask the cleaning contractor to empty them". Only bins can be emptied.` },
    { petikan: 'P2', topik: 'Inference', s: 'Which statement about Nur Sabrina’s idea is true?',
      p: ['It was rejected because the hall foyer is too small.', 'It was first suggested by Puan Nora at the meeting.', 'It was approved and will start on 1 April.', 'It was welcomed but has not been approved yet.'], a: 3,
      hurai: `"Several members liked the idea but felt that it needed more planning", and she must present "a detailed proposal". So it was liked but not yet approved.` },

    { petikan: 'P3', topik: 'Main idea / purpose', s: 'What is the main idea of the article?',
      p: ['Teenagers sleep late mainly because they are lazy and use phones.', 'Biology partly explains late sleep, and some habits can help.', 'Malaysian schools should start later in the morning.', 'Melatonin is a medicine that helps people fall asleep.'], a: 1,
      hurai: `The writer says, "scientists say that biology also plays a part", explains the body clock, and ends with steps "that students themselves can control". The writer does not argue for a later school start.` },
    { petikan: 'P3', topik: 'Specific detail', s: 'According to the article, how does a teenager’s brain release melatonin compared with a child’s?',
      p: ['In smaller amounts than before', 'Only when there is no blue light', 'About one to two hours later than before', 'Only after eight to ten hours of sleep'], a: 2,
      hurai: `"The brain begins releasing melatonin ... about one to two hours later than it did in childhood."` },
    { petikan: 'P3', topik: 'Vocabulary in context', s: 'In “Over a week, this missing sleep <b>adds up</b>”, the phrase <b>adds up</b> means',
      p: ['slowly grows into a large total', 'makes sense when it is explained', 'is calculated using a formula', 'is replaced at the weekend'], a: 0,
      hurai: `Losing a little sleep each night builds into a big loss over a week. "Adds up" can also mean "makes sense", but that meaning does not fit here.` },
    { petikan: 'P3', topik: 'Reference', s: 'In “Studies link <b>it</b> with poorer memory”, <b>it</b> refers to',
      p: ['the week', 'the early school day', 'melatonin', 'the missing sleep'], a: 3,
      hurai: `"Over a week, this missing sleep adds up. Studies link it with poorer memory ..." Lack of sleep is what causes these problems.` },
    { petikan: 'P3', topik: 'Inference / attitude', s: 'Which best describes the writer’s attitude in the last paragraph?',
      p: ['Angry at parents who wake their children early', 'Understanding, but not making excuses for teenagers', 'Hopeless that the sleep problem can ever be solved by students', 'Strongly in favour of punishing late students'], a: 1,
      hurai: `"None of this means that teenagers should be excused for being late. However, understanding the science may lead to more patience on both sides."` }
  ]
});

// UKKM Set 08 — Ujian Keperibadian (skala 4 mata), 100 item. Item terbalik bukan-kejujuran: 28.
UKKM_PART(8, {
  id: 'per', nama: 'Ujian Keperibadian', ikon: '🧭', minit: 30,
  arahan: "Baca setiap pernyataan dan pilih <b>Sangat setuju</b>, <b>Setuju</b>, <b>Tidak setuju</b> atau <b>Sangat tidak setuju</b> mengikut diri anda yang sebenar. Jawab dengan jujur, logik dan konsisten; beberapa idea diulang dengan ayat berbeza. Bagi situasi asrama yang belum anda alami, jawab mengikut tindakan yang paling mungkin anda lakukan. Masa: kira-kira 18 saat bagi setiap item.",
  skala: ["Sangat setuju","Setuju","Tidak setuju","Sangat tidak setuju"],
  item: [
    { s: "Saya sanggup menggantikan rakan dalam tugas dorm apabila dia ada pertandingan.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: [0, 1], hurai: "Saling membantu mengeratkan hubungan." },
    { id: 'sb2', pasangan: 'sb1', s: "Saya terus meminta jawapan daripada rakan setiap kali menemui soalan sukar.", trait: "Minat Ilmu, Sains & Motivasi", pos: [2, 3], hurai: "Bergantung pada jawapan rakan menghalang pemikiran sendiri." },
    { s: "Saya membawa semua buku dan alatan yang diperlukan ke kelas setiap hari.", trait: "Integriti & Disiplin Diri", pos: [0, 1], hurai: "Persediaan rapi menunjukkan disiplin diri." },
    { id: 'ib2', pasangan: 'ib1', s: "Saya mendahulukan perkara yang seronok walaupun ada tugasan penting yang hampir tamat tempoh.", trait: "Integriti & Disiplin Diri", pos: [2, 3], hurai: "Mendahulukan keseronokan menunjukkan disiplin diri yang lemah." },
    { s: "Saya mengurus masa kumpulan supaya pembentangan tamat dalam tempoh yang ditetapkan.", trait: "Kepimpinan & Inisiatif", pos: [0, 1], hurai: "Mengurus masa ialah tanggungjawab pemimpin." },
    { s: "Saya membuat senaman ringan secara berkala walaupun tiada sesiapa menyuruh.", trait: "Integriti & Disiplin Diri", pos: [0, 1], hurai: "Disiplin diri merangkumi menjaga kesihatan sendiri." },
    { s: "Saya selalu memikirkan pandangan orang lain tentang diri saya sehingga resah.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: [2, 3], hurai: "Terlalu memikirkan pandangan orang lain menjejaskan ketenangan." },
    { s: "Saya menahan diri daripada menyampuk ketika guru sedang mengajar.", trait: "Integriti & Disiplin Diri", pos: [0, 1], hurai: "Kawalan diri menunjukkan hormat dan disiplin." },
    { s: "Saya memberi tunjuk ajar kepada rakan yang baru menyertai pasukan beruniform.", trait: "Kepimpinan & Inisiatif", pos: [0, 1], hurai: "Membimbing ahli baharu ialah ciri pemimpin." },
    { s: "Saya menghargai kemajuan kecil yang saya capai setiap minggu.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: [0, 1], hurai: "Menghargai kemajuan membina motivasi." },
    { s: "Saya mudah menerima rakan yang mempunyai minat berbeza daripada saya.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: [0, 1], hurai: "Keterbukaan memudahkan persahabatan." },
    { id: 'mb2', pasangan: 'mb1', s: "Saya menyimpan pakaian sukan yang basah di dalam beg selama berhari-hari.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: [2, 3], hurai: "Pakaian basah yang disimpan menjejaskan kebersihan." },
    { s: "Saya suka mengaitkan konsep matematik dengan masalah sebenar.", trait: "Minat Ilmu, Sains & Motivasi", pos: [0, 1], hurai: "Aplikasi matematik mengukuhkan kefahaman." },
    { s: "Saya suka mencari corak dalam nombor.", trait: "Minat Ilmu, Sains & Motivasi", pos: [0, 1], hurai: "Minat terhadap corak menyokong pemikiran matematik." },
    { s: "Apabila kumpulan saya buntu, saya mencadangkan cara lain untuk menyelesaikan masalah.", trait: "Kepimpinan & Inisiatif", pos: [0, 1], hurai: "Pemimpin mencari jalan apabila pasukan tersekat." },
    { s: "Saya memberikan semua kerja kepada ahli lain dan hanya memantau dari jauh.", trait: "Kepimpinan & Inisiatif", pos: [2, 3], hurai: "Pemimpin turut menyumbang tenaga, bukan sekadar mengarah." },
    { s: "Saya cepat bersemangat semula selepas menerima berita yang mengecewakan.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: [0, 1], hurai: "Pemulihan yang cepat ialah tanda daya tahan." },
    { id: 'ma2', pasangan: 'ma1', s: "Saya lebih rela belajar di sekolah berhampiran rumah daripada tinggal di asrama.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: [2, 3], hurai: "Calon MRSM perlu bersedia untuk kehidupan berasrama." },
    { s: "Saya kekal bersemangat walaupun menghadapi beberapa minggu sibuk berturut-turut.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: [0, 1], hurai: "Daya tahan penting dalam kehidupan asrama yang padat." },
    { s: "Saya membuat bahagian kerja saya dengan teliti supaya kumpulan berbangga.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: [0, 1], hurai: "Komitmen terhadap pasukan menunjukkan semangat berpasukan." },
    { s: "Saya mencadangkan sistem giliran supaya peralatan sukan digunakan secara adil.", trait: "Kepimpinan & Inisiatif", pos: [0, 1], hurai: "Mencipta sistem yang adil menunjukkan inisiatif kepimpinan." },
    { id: 'ka2', pasangan: 'ka1', s: "Saya berasa jawatan kepimpinan di sekolah hanya membebankan dan elok dielakkan.", trait: "Kepimpinan & Inisiatif", pos: [2, 3], hurai: "Memandang kepimpinan sebagai beban menunjukkan inisiatif yang rendah." },
    { s: "Saya berasa puas apabila memahami konsep yang sebelum ini mengelirukan.", trait: "Minat Ilmu, Sains & Motivasi", pos: [0, 1], hurai: "Kepuasan belajar menunjukkan motivasi dalaman." },
    { s: "Saya lebih rela meniru jawapan rakan daripada memerah otak sendiri.", trait: "Minat Ilmu, Sains & Motivasi", pos: [2, 3], hurai: "Meniru menghalang perkembangan kemahiran berfikir." },
    { s: "Saya menyokong idea rakan yang bernas walaupun dia bukan kawan rapat saya.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: [0, 1], hurai: "Menilai idea secara adil menguatkan pasukan." },
    { s: "Saya mengambil tempat duduk yang sudah dikhaskan untuk rakan lain.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: [2, 3], hurai: "Mengambil hak orang lain menjejaskan hubungan." },
    { s: "Saya menyesuaikan diri dengan jadual makan yang tetap di asrama.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: [0, 1], hurai: "Mematuhi jadual makan menunjukkan kesediaan." },
    { s: "Saya bersemangat untuk mewakili sekolah dalam pertandingan sains.", trait: "Minat Ilmu, Sains & Motivasi", pos: [0, 1], hurai: "Mewakili sekolah menunjukkan motivasi." },
    { s: "Saya rasa projek inovasi sekolah membuang masa sahaja.", trait: "Minat Ilmu, Sains & Motivasi", pos: [2, 3], hurai: "Projek inovasi melatih kreativiti dan sains." },
    { s: "Saya mengakui jika jawapan yang saya hantar sebenarnya hasil perbincangan dengan rakan.", trait: "Integriti & Disiplin Diri", pos: [0, 1], hurai: "Jujur tentang sumber jawapan menunjukkan integriti akademik." },
    { s: "Saya mampu hidup dengan kemudahan yang sederhana di asrama.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: [0, 1], hurai: "Bersederhana memudahkan kehidupan asrama." },
    { id: 'eb1', pasangan: 'eb2', s: "Saya menerima keadaan dengan tenang apabila barang saya hilang dan berusaha mencarinya.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: [0, 1], hurai: "Bertindak tenang membantu menyelesaikan masalah." },
    { s: "Saya boleh berkata dengan tenang bahawa saya perlukan bantuan.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: [0, 1], hurai: "Meminta bantuan ialah tanda kekuatan emosi." },
    { s: "Saya meminta rakan menyiapkan tugasan kebersihan saya dengan membayarnya.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: [2, 3], hurai: "Tanggungjawab peribadi perlu dilaksanakan sendiri." },
    { s: "Saya tenang menghadapi pemeriksaan mengejut warden.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: [0, 1], hurai: "Ketenangan dalam situasi mengejut menunjukkan kestabilan emosi." },
    { id: 'ba1', pasangan: 'ba2', s: "Saya suka belajar bersama rakan-rakan dalam kumpulan perbincangan.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: [0, 1], hurai: "Belajar berkumpulan membina kerjasama dan kefahaman." },
    { s: "Saya merancang menu makanan ringan yang sihat untuk disimpan di loker.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: [0, 1], hurai: "Memilih makanan sihat menunjukkan pengurusan diri." },
    { s: "Saya membantu rakan sebilik yang demam dengan mengambilkan makanan untuknya.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: [0, 1], hurai: "Menjaga rakan yang sakit menunjukkan keprihatinan." },
    { s: "Apabila ada masalah dalam kumpulan, saya mengadu kepada guru sebelum cuba menyelesaikannya sendiri.", trait: "Kepimpinan & Inisiatif", pos: [2, 3], hurai: "Pemimpin mencuba penyelesaian sendiri dahulu sebelum merujuk guru." },
    { s: "Saya sentiasa membalas setiap mesej dengan segera dan sopan.", trait: "Skala Kejujuran", pos: [2, 3], hurai: "Setiap orang pernah lambat membalas mesej; menafikannya kelihatan tidak jujur." },
    { id: 'ea1', pasangan: 'ea2', s: "Saya boleh mengawal kegelisahan sebelum peperiksaan dengan membuat persediaan yang teratur.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: [0, 1], hurai: "Persediaan rapi membantu mengawal kebimbangan." },
    { s: "Saya mendengar penjelasan rakan sebelum membuat kesimpulan tentang tindakannya.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: [0, 1], hurai: "Mendengar dahulu mengelakkan salah faham." },
    { s: "Ada kalanya saya berasa marah tetapi menyimpannya sahaja.", trait: "Skala Kejujuran", pos: [0, 1], hurai: "Perasaan ini biasa; mengakuinya ialah jawapan jujur." },
    { s: "Saya boleh fokus belajar walaupun ada masalah kecil dengan rakan.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: [0, 1], hurai: "Mengasingkan masalah daripada tugas menunjukkan kestabilan." },
    { id: 'sa2', pasangan: 'sa1', s: "Saya berasa belajar sains itu suatu beban yang membosankan.", trait: "Minat Ilmu, Sains & Motivasi", pos: [2, 3], hurai: "Memandang sains sebagai beban kurang sesuai bagi calon MRSM." },
    { s: "Saya boleh mengurus keperluan harian sendiri sepanjang perkhemahan.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: [0, 1], hurai: "Kemandirian diuji semasa perkhemahan." },
    { s: "Saya mengambil gambar kertas jawapan rakan untuk disalin di dorm.", trait: "Integriti & Disiplin Diri", pos: [2, 3], hurai: "Menyalin jawapan orang lain ialah ketidakjujuran akademik." },
    { id: 'ia2', pasangan: 'ia1', s: "Apabila guru bertanya siapa yang membuat bising, saya menuding kepada rakan lain walaupun saya turut terlibat.", trait: "Integriti & Disiplin Diri", pos: [2, 3], hurai: "Mengalihkan kesalahan kepada orang lain ialah ketidakjujuran." },
    { s: "Saya menyusun jadual harian sendiri pada hujung minggu di asrama.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: [0, 1], hurai: "Mengisi masa lapang dengan teratur menunjukkan kemandirian." },
    { s: "Saya mengambil inisiatif mengemas kini papan kenyataan kelas tanpa disuruh.", trait: "Kepimpinan & Inisiatif", pos: [0, 1], hurai: "Bertindak atas kehendak sendiri menunjukkan inisiatif." },
    { s: "Saya menyediakan kelengkapan sekolah bagi minggu hadapan pada setiap hujung minggu.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: [0, 1], hurai: "Persediaan awal menunjukkan kemandirian." },
    { s: "Saya pernah tersilap menuduh seseorang.", trait: "Skala Kejujuran", pos: [0, 1], hurai: "Mengakui kesilapan lalu menunjukkan kejujuran." },
    { s: "Saya mengembalikan pen yang saya pinjam daripada guru selepas kelas.", trait: "Integriti & Disiplin Diri", pos: [0, 1], hurai: "Memulangkan barang pinjaman menunjukkan amanah." },
    { id: 'sb1', pasangan: 'sb2', s: "Saya berusaha mencari jawapan sendiri sebelum bertanya kepada guru.", trait: "Minat Ilmu, Sains & Motivasi", pos: [0, 1], hurai: "Usaha sendiri menguatkan pembelajaran." },
    { id: 'mb1', pasangan: 'mb2', s: "Saya menjaga kebersihan pakaian sukan saya sendiri.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: [0, 1], hurai: "Mengurus pakaian sendiri menunjukkan kemandirian." },
    { s: "Saya mencatat fakta menarik yang saya pelajari setiap minggu.", trait: "Minat Ilmu, Sains & Motivasi", pos: [0, 1], hurai: "Mencatat fakta menunjukkan minat ilmu." },
    { s: "Saya boleh menerima apabila kawan rapat berpindah ke kelas lain.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: [0, 1], hurai: "Menerima perubahan menunjukkan kestabilan emosi." },
    { s: "Saya suka menonton video eksperimen sains di internet.", trait: "Minat Ilmu, Sains & Motivasi", pos: [0, 1], hurai: "Minat terhadap eksperimen menunjukkan minat sains." },
    { s: "Saya mudah berputus asa apabila latihan sukan terlalu berat.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: [2, 3], hurai: "Mudah berputus asa menunjukkan ketahanan diri yang rendah." },
    { s: "Saya cepat berasa jemu apabila perlu berfikir lama untuk satu soalan.", trait: "Minat Ilmu, Sains & Motivasi", pos: [2, 3], hurai: "Daya tahan berfikir penting untuk soalan aras tinggi." },
    { id: 'ma1', pasangan: 'ma2', s: "Saya bersedia untuk tinggal di asrama yang jauh dari rumah.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: [0, 1], hurai: "Kesediaan tinggal jauh penting untuk pelajar MRSM." },
    { s: "Saya pernah menyampuk ketika orang lain sedang bercakap.", trait: "Skala Kejujuran", pos: [0, 1], hurai: "Mengakui kelemahan kecil menunjukkan kejujuran." },
    { s: "Saya mengajak rakan baharu menyertai kelab saya.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: [0, 1], hurai: "Mengajak rakan baharu menunjukkan sikap mesra." },
    { s: "Saya rasa sangat kekok jika terpaksa membasuh pakaian sendiri.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: [2, 3], hurai: "Pelajar asrama perlu mampu mengurus pakaian sendiri." },
    { s: "Saya bersikap angkuh terhadap rakan yang lemah dalam pelajaran.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: [2, 3], hurai: "Keangkuhan menjauhkan rakan." },
    { s: "Saya mengisi borang kehadiran dengan maklumat yang betul.", trait: "Integriti & Disiplin Diri", pos: [0, 1], hurai: "Maklumat yang benar ialah asas integriti." },
    { s: "Saya mencuci pinggan dan cawan sendiri selepas digunakan.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: [0, 1], hurai: "Menjaga kebersihan barang sendiri penting di asrama." },
    { s: "Saya berasa rendah diri apabila berada dalam kumpulan pelajar yang lebih pandai.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: [2, 3], hurai: "Rasa rendah diri berlebihan menghalang penglibatan." },
    { s: "Saya menilai semula cara saya memimpin selepas sesuatu aktiviti tamat.", trait: "Kepimpinan & Inisiatif", pos: [0, 1], hurai: "Refleksi membantu pemimpin menjadi lebih baik." },
    { s: "Saya membalas dendam apabila rakan menyakitkan hati saya.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: [2, 3], hurai: "Membalas dendam memanjangkan konflik." },
    { s: "Saya tidak pernah bercakap kasar walaupun sedang marah.", trait: "Skala Kejujuran", pos: [2, 3], hurai: "Hampir setiap orang pernah terlepas cakap; jawapan jujur lebih dipercayai." },
    { s: "Saya menghormati privasi rakan sebilik dengan tidak membaca diari atau mesejnya.", trait: "Integriti & Disiplin Diri", pos: [0, 1], hurai: "Menghormati privasi orang lain ialah tanda integriti." },
    { s: "Saya mematuhi waktu keluar dan masuk asrama pada hari lawatan.", trait: "Integriti & Disiplin Diri", pos: [0, 1], hurai: "Mematuhi waktu asrama menunjukkan disiplin." },
    { s: "Saya berminat memahami cara vaksin dan ubat dihasilkan.", trait: "Minat Ilmu, Sains & Motivasi", pos: [0, 1], hurai: "Minat terhadap sains perubatan menunjukkan sifat ingin tahu." },
    { s: "Saya mengucapkan selamat maju jaya kepada rakan yang akan menghadapi pertandingan.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: [0, 1], hurai: "Sokongan moral menguatkan persahabatan." },
    { s: "Saya menunggu ketua memberi arahan walaupun saya tahu apa yang perlu dilakukan.", trait: "Kepimpinan & Inisiatif", pos: [2, 3], hurai: "Pelajar berinisiatif bertindak apabila sudah tahu tugasnya." },
    { s: "Saya boleh mengetuai latihan kawad atau persembahan dengan yakin.", trait: "Kepimpinan & Inisiatif", pos: [0, 1], hurai: "Mengetuai latihan di hadapan orang ramai memerlukan keyakinan pemimpin." },
    { s: "Saya menetapkan sasaran untuk menguasai satu kemahiran baharu setiap cuti.", trait: "Minat Ilmu, Sains & Motivasi", pos: [0, 1], hurai: "Sasaran kemahiran menunjukkan motivasi." },
    { s: "Saya tetap bersemangat walaupun usaha saya belum dipuji oleh sesiapa.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: [0, 1], hurai: "Motivasi dalaman menunjukkan ketahanan diri." },
    { s: "Saya melepaskan rasa geram kepada adik-beradik apabila saya tertekan.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: [2, 3], hurai: "Melepaskan tekanan kepada orang lain menunjukkan kawalan emosi yang lemah." },
    { s: "Saya menangguhkan urusan peribadi sehingga menjadi masalah besar.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: [2, 3], hurai: "Menguruskan perkara kecil lebih awal menunjukkan kemandirian." },
    { s: "Saya menggunakan wang yuran kelab untuk keperluan peribadi dan berniat menggantinya kemudian.", trait: "Integriti & Disiplin Diri", pos: [2, 3], hurai: "Menggunakan wang amanah untuk diri sendiri melanggar integriti." },
    { s: "Saya bercakap dengan nada yang baik walaupun sedang marah.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: [0, 1], hurai: "Mengawal nada menjaga hubungan." },
    { s: "Saya sentiasa bercakap benar walaupun kebenaran itu akan memalukan saya.", trait: "Skala Kejujuran", pos: [2, 3], hurai: "Hampir setiap orang pernah berselindung untuk mengelak malu; jawapan jujur lebih realistik." },
    { id: 'ib1', pasangan: 'ib2', s: "Saya menyusun keutamaan kerja supaya tugasan penting disiapkan dahulu.", trait: "Integriti & Disiplin Diri", pos: [0, 1], hurai: "Menyusun keutamaan ialah tanda disiplin diri." },
    { id: 'sa1', pasangan: 'sa2', s: "Saya berasa bersemangat apabila belajar perkara baharu dalam sains.", trait: "Minat Ilmu, Sains & Motivasi", pos: [0, 1], hurai: "Semangat belajar sains sesuai dengan aliran MRSM." },
    { s: "Saya memastikan ahli baharu kelab berasa dialu-alukan.", trait: "Kepimpinan & Inisiatif", pos: [0, 1], hurai: "Pemimpin menjadikan setiap ahli rasa dihargai." },
    { id: 'ea2', pasangan: 'ea1', s: "Saya berasa sangat cemas sebelum peperiksaan sehingga sukar makan dan tidur.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: [2, 3], hurai: "Kebimbangan yang melampau menjejaskan prestasi." },
    { s: "Saya mengurus sendiri pembaharuan kad perpustakaan atau kad pelajar.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: [0, 1], hurai: "Menguruskan urusan rasmi sendiri menunjukkan berdikari." },
    { id: 'ka1', pasangan: 'ka2', s: "Saya suka memikul tanggungjawab memimpin dalam aktiviti sekolah.", trait: "Kepimpinan & Inisiatif", pos: [0, 1], hurai: "Minat memimpin ialah sifat yang dicari dalam calon MRSM." },
    { id: 'ia1', pasangan: 'ia2', s: "Saya menjawab dengan jujur apabila guru bertanya siapa yang membuat bising.", trait: "Integriti & Disiplin Diri", pos: [0, 1], hurai: "Jujur walaupun melibatkan diri sendiri menunjukkan integriti." },
    { s: "Saya tidak pernah menyimpan sedikit pun rasa tidak puas hati terhadap sesiapa.", trait: "Skala Kejujuran", pos: [2, 3], hurai: "Rasa tidak puas hati sekali-sekala ialah perkara biasa; mengakuinya ialah jawapan jujur." },
    { s: "Saya mampu menahan diri daripada membalas ejekan.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: [0, 1], hurai: "Kawalan diri menunjukkan kematangan emosi." },
    { s: "Saya tidak pernah berasa bosan walaupun melakukan kerja yang sama berulang kali.", trait: "Skala Kejujuran", pos: [2, 3], hurai: "Rasa bosan ialah perkara biasa; mengakuinya menunjukkan kejujuran." },
    { s: "Saya berasa yakin mengurus diri apabila ibu bapa berada di luar kawasan selama beberapa hari.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: [0, 1], hurai: "Keyakinan berdikari penting bagi pelajar asrama." },
    { s: "Saya sanggup menghadapi guru bagi pihak kumpulan apabila kami membuat kesilapan.", trait: "Kepimpinan & Inisiatif", pos: [0, 1], hurai: "Pemimpin berani bertanggungjawab bagi pihak pasukan." },
    { s: "Saya mengulang kaji pelajaran walaupun tiada ujian dalam masa terdekat.", trait: "Minat Ilmu, Sains & Motivasi", pos: [0, 1], hurai: "Belajar berterusan menunjukkan motivasi dalaman." },
    { s: "Saya berusaha menyelesaikan masalah dahulu sebelum mengeluh.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: [0, 1], hurai: "Fokus kepada penyelesaian menunjukkan ketahanan diri." },
    { id: 'ba2', pasangan: 'ba1', s: "Saya rasa perbincangan berkumpulan hanya membuang masa saya.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: [2, 3], hurai: "Menolak kerja kumpulan sepenuhnya menyukarkan kehidupan akademik di MRSM." },
    { id: 'eb2', pasangan: 'eb1', s: "Saya mengamuk dan menuduh rakan sebilik apabila barang saya hilang.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: [2, 3], hurai: "Menuduh tanpa bukti ketika marah merosakkan hubungan." }
  ]
});

UKKM.push({ set: 8, tajuk: 'Set 8', bahagian: ['mat', 'sains', 'eng', 'per'].map(k => B[k]).filter(Boolean) }); })();
