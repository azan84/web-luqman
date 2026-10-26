(function () { const B = {}; const UKKM_PART = (n, b) => { B[b.id] = b; };
UKKM_PART(1, { id: 'mat', nama: 'Matematik', ikon: '🧮', minit: 30,
  arahan: 'Jawab semua 20 soalan. 18 soalan objektif (pilih A, B, C atau D) dan 2 soalan isian (taip jawapan nombor). Kalkulator saintifik dibenarkan; gunakan kertas conteng.',
  soalan: [
  { // 1 Pola — mudah
    s: "Apakah nombor seterusnya dalam jujukan berikut?<br><b>4, 9, 19, 39, …</b>",
    en: "What is the next number in the sequence 4, 9, 19, 39, … ?",
    p: ['79', '78', '69', '59'], a: 0, topik: 'Pola & Jujukan', aras: 'mudah',
    hurai: "Setiap sebutan = sebutan sebelumnya × 2 + 1: 4×2+1 = 9, 9×2+1 = 19, 19×2+1 = 39, maka 39×2+1 = <b>79</b>. (Beza 5, 10, 20 berganda → beza seterusnya 40.) 78 ialah ralat lupa '+1'; 59 ialah ralat menganggap beza tetap 20."
  },
  { // 2 Persamaan linear — mudah
    s: "Sebuah tempat letak kenderaan mempunyai motosikal dan kereta sahaja. Terdapat 45 buah kenderaan dan 130 biji roda kesemuanya. Berapakah lebihnya bilangan motosikal berbanding bilangan kereta?",
    en: "A car park has only motorcycles and cars: 45 vehicles and 130 wheels in total. How many more motorcycles than cars are there?",
    p: ['5', '10', '20', '25'], a: 0, topik: 'Persamaan Linear', aras: 'mudah',
    hurai: "Katakan kereta = k, motosikal = m. k + m = 45 dan 4k + 2m = 130. Jika semua 45 motosikal: 90 roda; lebihan 40 roda ÷ 2 = 20 kereta. Maka m = 25. Beza = 25 − 20 = <b>5</b>. (20 dan 25 ialah jawapan separuh jalan.)"
  },
  { // 3 Peratus — mudah
    s: "Harga asal sepasang kasut sukan ialah RM 84. Kedai memberi diskaun 25%, kemudian cukai jualan 10% dikenakan ke atas harga selepas diskaun. Berapakah jumlah yang perlu dibayar?",
    en: "A pair of sports shoes costs RM 84. The shop gives a 25% discount, then 10% sales tax is charged on the discounted price. How much must be paid?",
    p: ['RM 63.00', 'RM 69.30', 'RM 71.40', 'RM 92.40'], a: 1, topik: 'Peratus & Matematik Pengguna', aras: 'mudah',
    hurai: "Selepas diskaun: 84 × 0.75 = RM 63. Tambah cukai 10%: 63 × 1.10 = <b>RM 69.30</b>. RM 71.40 ialah ralat menolak 15% terus (25% − 10%); RM 63 lupa cukai; RM 92.40 lupa diskaun."
  },
  { // 4 Kadar — mudah
    s: "Sebuah pencetak mencetak 18 halaman dalam masa 45 saat. Pada kadar yang sama, berapakah bilangan halaman yang dapat dicetak dalam masa 4 minit?",
    en: "A printer prints 18 pages in 45 seconds. At the same rate, how many pages can it print in 4 minutes?",
    p: ['160', '96', '90', '72'], a: 1, topik: 'Nisbah, Kadar & Laju', aras: 'mudah',
    hurai: "Kadar = 18 ÷ 45 = 0.4 halaman sesaat. 4 minit = 240 saat. 0.4 × 240 = <b>96</b> halaman. (72 = 18 × 4 tanpa menukar unit; 160 menganggap 45 saat = 0.45 minit.)"
  },
  { // 5 Data — mudah
    rajah: '<table><tr><th>Murid</th><th>Aina</th><th>Bala</th><th>Chong</th><th>Dina</th><th>Eshan</th><th>Farah</th></tr><tr><th>Markah</th><td>14</td><td>18</td><td>11</td><td>20</td><td>15</td><td>6</td></tr></table>',
    s: "Jadual menunjukkan markah kuiz enam orang murid. Markah Farah dibatalkan kerana dia tidak sempat menghabiskan kuiz. Berapakah min markah lima orang murid yang tinggal?",
    en: "The table shows quiz marks of six pupils. Farah's mark is cancelled. What is the mean mark of the remaining five pupils?",
    p: ['13.0', '14.0', '15.6', '16.8'], a: 2, topik: 'Data & Statistik', aras: 'mudah',
    hurai: "Jumlah enam markah = 84. Buang 6 → 78. Min = 78 ÷ 5 = <b>15.6</b>. (14.0 ialah min asal; 13.0 = 78 ÷ 6, pembahagi salah; 16.8 = 84 ÷ 5, lupa tolak markah Farah.)"
  },
  { // 6 Geometri — sederhana
    rajah: '<svg viewBox="0 0 240 190" style="max-width:100%;width:260px" role="img" aria-label="Tangga bersandar pada dinding"><line x1="40" y1="10" x2="40" y2="170" stroke="currentColor" stroke-width="4"/><line x1="20" y1="170" x2="220" y2="170" stroke="currentColor" stroke-width="2"/><line x1="40" y1="24" x2="82" y2="170" stroke="var(--c)" stroke-width="4"/><text x="70" y="95" font-size="13" fill="currentColor">2.5 m</text><text x="48" y="186" font-size="13" fill="currentColor">0.7 m</text><text x="120" y="60" font-size="12" fill="var(--muted)">dinding tegak,</text><text x="120" y="76" font-size="12" fill="var(--muted)">lantai mengufuk</text></svg>',
    s: "Sebatang tangga sepanjang 2.5 m disandarkan pada dinding tegak dengan kakinya 0.7 m dari dinding. Hujung atas tangga kemudian menggelongsor turun sejauh 0.4 m. Berapakah jarak baharu kaki tangga dari dinding?",
    en: "A 2.5 m ladder leans against a vertical wall with its foot 0.7 m from the wall. The top slides down 0.4 m. What is the new distance of the foot from the wall?",
    p: ['0.7 m', '0.8 m', '1.1 m', '1.5 m'], a: 3, topik: 'Geometri & Pengukuran', aras: 'sederhana',
    hurai: "Tinggi asal = √(2.5² − 0.7²) = √(6.25 − 0.49) = √5.76 = 2.4 m. Tinggi baharu = 2.4 − 0.4 = 2.0 m. Jarak baharu = √(2.5² − 2.0²) = √2.25 = <b>1.5 m</b>. (1.1 m menganggap kaki bergerak sama jauh dengan hujung atas; 0.8 m ialah anjakan kaki, bukan jarak baharu.)"
  },
  { // 7 Logik — sederhana
    s: "Lima sahabat dibandingkan ketinggian mereka:<br>• Amir lebih tinggi daripada Badrul.<br>• Chandra lebih rendah daripada Badrul tetapi lebih tinggi daripada Daniel.<br>• Elisa lebih tinggi daripada Amir.<br>Siapakah orang yang <b>ketiga tertinggi</b>?",
    en: "Five friends compare heights: Amir is taller than Badrul; Chandra is shorter than Badrul but taller than Daniel; Elisa is taller than Amir. Who is the third tallest?",
    p: ['Amir', 'Chandra', 'Daniel', 'Badrul'], a: 3, topik: 'Penaakulan Logik', aras: 'sederhana',
    hurai: "Susun: Elisa > Amir > Badrul > Chandra > Daniel. Ketiga tertinggi ialah <b>Badrul</b>. (Amir ialah kedua tertinggi; Chandra ialah ketiga terendah — kekeliruan arah.)"
  },
  { // 8 Pola — sederhana
    rajah: '<svg viewBox="0 0 330 110" style="max-width:100%;width:340px" role="img" aria-label="Pola segi empat sama daripada batang mancis"><g stroke="var(--c)" stroke-width="3" stroke-linecap="round" fill="none"><path d="M20 30h30v30h-30z"/><path d="M90 30h60v30h-60zM120 30v30"/><path d="M190 30h90v30h-90zM220 30v30M250 30v30"/></g><g font-size="12" fill="currentColor"><text x="12" y="85">Rajah 1</text><text x="96" y="85">Rajah 2</text><text x="212" y="85">Rajah 3</text><text x="14" y="102" fill="var(--muted)">4 batang</text><text x="98" y="102" fill="var(--muted)">7 batang</text><text x="208" y="102" fill="var(--muted)">10 batang</text></g></svg>',
    s: "Batang mancis disusun membentuk satu baris segi empat sama seperti dalam rajah. Jika Hana mempunyai 100 batang mancis, berapakah bilangan <b>maksimum</b> segi empat sama yang boleh dibentuk dalam satu baris mengikut pola ini?",
    en: "Matchsticks form a row of squares as shown. With 100 matchsticks, what is the maximum number of squares in one row following this pattern?",
    p: ['25', '32', '33', '34'], a: 2, topik: 'Pola & Jujukan', aras: 'sederhana',
    hurai: "Bilangan batang untuk n segi empat = 3n + 1. 3n + 1 ≤ 100 → n ≤ 33. Rajah ke-33 memerlukan 3(33) + 1 = 100 batang tepat, jadi <b>33</b>. (25 = 100 ÷ 4 menganggap setiap segi empat perlukan 4 batang berasingan; 34 memerlukan 103 batang.)"
  },
  { // 9 Persamaan linear — sederhana (ISI)
    jenis: 'isi',
    s: "Umur seorang ibu sekarang ialah 3 kali umur anaknya. 12 tahun lagi, umur ibu itu akan menjadi 2 kali umur anaknya. Berapakah <b>jumlah</b> umur mereka sekarang?",
    en: "A mother is now 3 times as old as her child. In 12 years she will be twice as old as the child. What is the sum of their present ages?",
    a: 48, unit: 'tahun', topik: 'Persamaan Linear', aras: 'sederhana',
    hurai: "Umur anak = x, ibu = 3x. 3x + 12 = 2(x + 12) → 3x + 12 = 2x + 24 → x = 12. Ibu = 36. Jumlah = 12 + 36 = <b>48 tahun</b>."
  },
  { // 10 Peratus — sederhana
    s: "Seorang peniaga membeli sebuah kipas dengan harga RM 120. Dia menanda harga jualan 50% lebih tinggi daripada harga kos, kemudian memberi diskaun 20% daripada harga tanda. Berapakah peratus keuntungannya berdasarkan harga kos?",
    en: "A trader buys a fan for RM 120, marks the price 50% above cost, then gives a 20% discount on the marked price. What is the percentage profit on cost?",
    p: ['10%', '20%', '24%', '30%'], a: 1, topik: 'Peratus & Matematik Pengguna', aras: 'sederhana',
    hurai: "Harga tanda = 120 × 1.5 = RM 180. Harga jual = 180 × 0.8 = RM 144. Untung = RM 24 → 24 ÷ 120 × 100% = <b>20%</b>. (30% = 50% − 20%, ralat tolak peratus terus; 24% mengelirukan untung RM 24 dengan peratus.)"
  },
  { // 11 Nisbah — sederhana
    s: "Wang hadiah RM 620 dikongsi oleh Ain, Bob dan Chen. Nisbah bahagian Ain kepada Bob ialah 3 : 4, manakala nisbah bahagian Bob kepada Chen ialah 6 : 5. Berapakah bahagian Bob?",
    en: "RM 620 prize money is shared by Ain, Bob and Chen. Ain : Bob = 3 : 4 and Bob : Chen = 6 : 5. How much does Bob get?",
    p: ['RM 180.00', 'RM 200.00', 'RM 206.67', 'RM 240.00'], a: 3, topik: 'Nisbah, Kadar & Laju', aras: 'sederhana',
    hurai: "Samakan bahagian Bob: 3 : 4 = 9 : 12 dan 6 : 5 = 12 : 10. Ain : Bob : Chen = 9 : 12 : 10 (31 bahagian). 620 ÷ 31 = 20. Bob = 12 × 20 = <b>RM 240</b>. (RM 180 dan RM 200 ialah bahagian Ain dan Chen; RM 206.67 = 620 ÷ 3, bahagi sama rata.)"
  },
  { // 12 Data — sederhana
    rajah: '<svg viewBox="0 0 320 240" style="max-width:100%;width:340px" role="img" aria-label="Carta palang bilangan buku dibaca"><g font-size="12" fill="currentColor"><text x="4" y="14">Bilangan murid</text><text x="120" y="236">Bilangan buku dibaca</text></g><g stroke="var(--muted)" stroke-width="1"><line x1="50" y1="200" x2="300" y2="200"/><line x1="50" y1="56" x2="50" y2="200"/><line x1="46" y1="176" x2="300" y2="176" stroke-dasharray="2 4"/><line x1="46" y1="152" x2="300" y2="152" stroke-dasharray="2 4"/><line x1="46" y1="128" x2="300" y2="128" stroke-dasharray="2 4"/><line x1="46" y1="104" x2="300" y2="104" stroke-dasharray="2 4"/><line x1="46" y1="80" x2="300" y2="80" stroke-dasharray="2 4"/><line x1="46" y1="56" x2="300" y2="56" stroke-dasharray="2 4"/><line x1="50" y1="188" x2="300" y2="188" stroke-dasharray="1 5" stroke-opacity="0.6"/><line x1="50" y1="164" x2="300" y2="164" stroke-dasharray="1 5" stroke-opacity="0.6"/><line x1="50" y1="140" x2="300" y2="140" stroke-dasharray="1 5" stroke-opacity="0.6"/><line x1="50" y1="116" x2="300" y2="116" stroke-dasharray="1 5" stroke-opacity="0.6"/><line x1="50" y1="92" x2="300" y2="92" stroke-dasharray="1 5" stroke-opacity="0.6"/><line x1="50" y1="68" x2="300" y2="68" stroke-dasharray="1 5" stroke-opacity="0.6"/></g><g font-size="12" fill="currentColor" text-anchor="end"><text x="42" y="204">0</text><text x="42" y="180">2</text><text x="42" y="156">4</text><text x="42" y="132">6</text><text x="42" y="108">8</text><text x="42" y="84">10</text><text x="42" y="60">12</text></g><g fill="var(--c)"><rect x="62" y="176" width="30" height="24"/><rect x="112" y="152" width="30" height="48"/><rect x="162" y="140" width="30" height="60"/><rect x="212" y="104" width="30" height="96"/><rect x="262" y="68" width="30" height="132"/></g><g font-size="12" fill="currentColor" text-anchor="middle"><text x="77" y="216">0</text><text x="127" y="216">1</text><text x="177" y="216">2</text><text x="227" y="216">3</text><text x="277" y="216">4</text></g><g font-size="12" fill="currentColor" text-anchor="middle"><text x="77" y="171">2</text><text x="127" y="147">4</text><text x="177" y="135">5</text><text x="227" y="99">8</text><text x="277" y="63">11</text></g></svg>',
    s: "Carta palang menunjukkan bilangan buku yang dibaca oleh sekumpulan murid dalam sebulan. Berapakah <b>median</b> bilangan buku yang dibaca?",
    en: "The bar chart shows the number of books read by a group of pupils in a month. What is the median number of books read?",
    p: ['2', '2.73', '3', '4'], a: 2, topik: 'Data & Statistik', aras: 'sederhana',
    hurai: "Kekerapan: 0→2, 1→4, 2→5, 3→8, 4→11; jumlah 30 murid. Median = purata nilai ke-15 dan ke-16. Kekerapan longgokan: 2, 6, 11, 19 → nilai ke-12 hingga ke-19 ialah 3. Median = <b>3</b>. (4 ialah mod; 2.73 ialah min = 82 ÷ 30; 2 ialah nilai tengah paksi, bukan median data.)"
  },
  { // 13 Geometri — sederhana
    s: "Setiap sudut pedalaman sebuah poligon sekata ialah 156°. Berapakah bilangan sisi poligon itu?",
    en: "Each interior angle of a regular polygon is 156°. How many sides does the polygon have?",
    p: ['24', '15', '13', '12'], a: 1, topik: 'Geometri & Pengukuran', aras: 'sederhana',
    hurai: "Sudut peluaran = 180° − 156° = 24°. Bilangan sisi = 360° ÷ 24° = <b>15</b>. (24 ialah sudut peluaran, bukan bilangan sisi.)"
  },
  { // 14 Logik — sederhana
    s: "Sebuah pasu di makmal pecah. Hanya seorang daripada tiga murid yang memecahkannya, dan <b>hanya seorang</b> daripada mereka bercakap benar.<br>Aiman: \"Bukan saya yang pecahkan.\"<br>Ben: \"Aiman yang pecahkan.\"<br>Cheng: \"Bukan Ben yang pecahkan.\"<br>Siapakah yang memecahkan pasu itu?",
    en: "A vase was broken by exactly one of three pupils, and only one of them is telling the truth. Aiman: 'It wasn't me.' Ben: 'Aiman broke it.' Cheng: 'It wasn't Ben.' Who broke the vase?",
    p: ['Aiman', 'Ben', 'Cheng', 'Tidak dapat ditentukan'], a: 1, topik: 'Penaakulan Logik', aras: 'sederhana',
    hurai: "Uji setiap kes. Jika Aiman: Ben dan Cheng benar (2 orang) ✗. Jika Cheng: Aiman dan Cheng benar (2 orang) ✗. Jika <b>Ben</b>: hanya Aiman benar ✓. Maka Ben."
  },
  { // 15 Pola — sukar
    s: "Berapakah digit sa (digit terakhir) bagi 7<sup>2026</sup>?",
    en: "What is the units digit of 7 to the power of 2026?",
    p: ['1', '3', '7', '9'], a: 3, topik: 'Pola & Jujukan', aras: 'sukar',
    hurai: "Digit sa kuasa 7 berulang setiap 4: 7¹→7, 7²→9, 7³→3, 7⁴→1, 7⁵→7, … 2026 ÷ 4 = 506 baki 2, jadi sama seperti 7² → <b>9</b>. (Baki 2 bukan bermaksud kitaran ke-2 bermula semula pada 7.)"
  },
  { // 16 Persamaan linear — sukar
    s: "Dalam satu pertandingan kuiz 30 soalan, setiap jawapan betul diberi 4 markah, setiap jawapan salah ditolak 1 markah, dan soalan yang tidak dijawab diberi 0 markah. Hafiz menjawab 26 soalan dan memperoleh 79 markah. Berapakah bilangan jawapan betulnya?",
    en: "In a 30-question quiz, a correct answer scores 4, a wrong answer loses 1, and an unanswered question scores 0. Hafiz answered 26 questions and scored 79. How many did he answer correctly?",
    p: ['18', '20', '21', '22'], a: 2, topik: 'Persamaan Linear', aras: 'sukar',
    hurai: "Betul = b, salah = 26 − b. 4b − (26 − b) = 79 → 5b − 26 = 79 → b = <b>21</b> (semak: 84 − 5 = 79). (22 datang daripada guna 30 soalan sebagai jumlah dijawab; 20 ≈ 79 ÷ 4 mengabaikan penalti; 18 tersilap tanda: 4b + (26 − b) = 79 → b ≈ 17.7.)"
  },
  { // 17 Peratus — sukar
    s: "Puan Lim ingin melabur RM 5 000 selama 3 tahun. Pilihan P memberi faedah kompaun 4% setahun (dikompaun tahunan). Pilihan Q memberi faedah mudah 4.2% setahun. Pernyataan manakah yang betul tentang nilai pelaburan pada akhir tahun ke-3?",
    en: "Mrs Lim invests RM 5 000 for 3 years. Option P: 4% p.a. compound interest (compounded yearly). Option Q: 4.2% p.a. simple interest. Which statement about the value after 3 years is correct?",
    p: ['Q lebih tinggi sebanyak RM 5.68', 'Q lebih tinggi sebanyak RM 30.00', 'P lebih tinggi sebanyak RM 5.68', 'Kedua-duanya sama'], a: 0, topik: 'Peratus & Matematik Pengguna', aras: 'sukar',
    hurai: "P: 5000 × 1.04³ = RM 5 624.32. Q: 5000 + 5000 × 0.042 × 3 = RM 5 630.00. Q lebih tinggi sebanyak 5630 − 5624.32 = <b>RM 5.68</b>. (RM 30 = 0.2% × 3 × 5000, mengabaikan kesan pengkompaunan.)"
  },
  { // 18 Kadar — sukar (ISI)
    jenis: 'isi',
    s: "Sebuah tangki air sudah separuh penuh. Paip P boleh mengisi tangki kosong hingga penuh dalam 6 jam, paip Q dalam 4 jam, manakala salur keluar R boleh mengosongkan tangki penuh dalam 12 jam. Jika P, Q dan R dibuka serentak, berapakah masa, dalam <b>minit</b>, yang diperlukan untuk tangki itu penuh?",
    en: "A water tank is half full. Pipe P fills an empty tank in 6 hours, pipe Q in 4 hours, and outlet R empties a full tank in 12 hours. If P, Q and R are all opened, how many minutes until the tank is full?",
    a: 90, unit: 'minit', topik: 'Nisbah, Kadar & Laju', aras: 'sukar',
    hurai: "Kadar bersih = 1/6 + 1/4 − 1/12 = 2/12 + 3/12 − 1/12 = 4/12 = 1/3 tangki sejam. Separuh tangki: (1/2) ÷ (1/3) = 1.5 jam = <b>90 minit</b>."
  },
  { // 19 Data — sukar
    s: "Kelas Bestari mempunyai 30 orang murid dengan min markah 62. Apabila markah Kelas Bestari dan Kelas Cemerlang (20 orang murid) digabungkan, min keseluruhan ialah 66. Berapakah min markah Kelas Cemerlang?",
    en: "Class Bestari has 30 pupils with mean mark 62. When combined with Class Cemerlang (20 pupils), the overall mean is 66. What is the mean mark of Class Cemerlang?",
    p: ['66', '67', '70', '72'], a: 3, topik: 'Data & Statistik', aras: 'sukar',
    hurai: "Jumlah keseluruhan = 50 × 66 = 3300. Jumlah Bestari = 30 × 62 = 1860. Jumlah Cemerlang = 1440 → min = 1440 ÷ 20 = <b>72</b>. (70 = 2 × 66 − 62, menganggap min gabungan ialah purata dua min tanpa mengambil kira saiz kelas.)"
  },
  { // 20 Geometri koordinat — sukar
    s: "Titik A(−2, 1), B(4, 10) dan C(k, 16) terletak pada garis lurus yang sama. Berapakah nilai k?",
    en: "Points A(−2, 1), B(4, 10) and C(k, 16) lie on the same straight line. Find k.",
    p: ['8', '10', '10.67', '20.5'], a: 0, topik: 'Geometri & Pengukuran', aras: 'sukar',
    hurai: "Kecerunan AB = (10 − 1) ÷ (4 − (−2)) = 9/6 = 1.5. Kecerunan BC mesti sama: (16 − 10) ÷ (k − 4) = 1.5 → k − 4 = 4 → k = <b>8</b>. (20.5 guna kecerunan terbalik 6/9; 10 menganggap pintasan-y = 1; 10.67 = 16 ÷ 1.5, lupa pintasan.)"
  }
  ]
});

UKKM_PART(1, {
  id: 'eng', nama: 'Bahasa Inggeris', ikon: '📖', minit: 30, jenis: 'objektif',
  arahan: 'Read each text carefully and answer the questions that follow. Choose the best answer (A, B, C or D).',
  petikan: [
    { id: 'P1', tajuk: 'Notice: Makmal Sains 2 Closed for Upgrading', teks: `
<p><b>SMK TAMAN MELAWATI: SCIENCE DEPARTMENT</b></p>
<p>Makmal Sains 2 will be closed from <b>14 to 25 July</b> while new gas pipes and fume cupboards are fitted. During this period:</p>
<ul>
<li>Form 3 practical lessons will move to Makmal Sains 1. Form 2 classes will have theory lessons in their own classrooms instead.</li>
<li>Students who left apparatus or project boards in Makmal Sains 2 must collect them by <b>11 July</b>. Items still in the lab after that date will be stored safely, not thrown away, but they cannot be collected until the lab reopens.</li>
<li>The Science Society meeting on 17 July is postponed to a date to be announced.</li>
</ul>
<p>Enquiries: Puan Rohana (Head of Science)</p>` },
    { id: 'P2', tajuk: 'Email: Group Visit Enquiry', teks: `
<p><b>From:</b> Nur Aqilah binti Hassan<br><b>To:</b> Education Officer, Discovery Centre Melaka<br><b>Subject:</b> Group visit enquiry: 40 Form 3 students</p>
<p>Dear Sir or Madam,</p>
<p>I am the secretary of the Science Society at SMK Seri Pagi, Muar. Our advisor, Encik Faizal, has asked me to write to you because he is attending a course this week. We hope to bring 40 Form 3 students and three teachers to your centre on Saturday, 15 August.</p>
<p>Last year our visit was rushed. Our bus arrived late, and by the time we reached the planetarium, the last show was full. This time we would like to book the 10.30 a.m. show in advance, if possible.</p>
<p>I would also be grateful if you could answer three questions. First, is there a reduced rate for school groups of more than 30? Second, is the lift to the upper gallery in service again? When we came last year, it was under repair, and one of our members, who uses a wheelchair, could not join her friends upstairs. Third, may students bring packed lunches, or must they buy food at the café?</p>
<p>Thank you for your time. I look forward to your reply.</p>
<p>Yours faithfully,<br>Nur Aqilah binti Hassan<br>Secretary, Science Society</p>` },
    { id: 'P3', tajuk: 'Article: Why Is the City Hotter Than the Kampung?', teks: `
<p>On a hot afternoon, the centre of Kuala Lumpur can be up to 4 °C warmer than nearby villages surrounded by farms and forest. Scientists call this the <i>urban heat island</i> effect.</p>
<p>The main cause is the material that cities are built from. Concrete, asphalt and dark roofs absorb sunlight during the day and release the heat slowly at night. Trees and soil behave differently. They lose water through their leaves and surfaces, and this process cools the air around them, in the same way that sweat cools our skin. When green areas are replaced by roads and buildings, this natural cooling disappears.</p>
<p>Heat from human activity adds to the problem. Air-conditioners pump warm air out of buildings, and thousands of car engines release heat into narrow streets where the breeze cannot easily reach.</p>
<p>The effect is not just uncomfortable. Hot nights make it harder for people to sleep, and elderly people living alone in small flats are especially at risk of heat exhaustion. Higher temperatures also increase the demand for electricity, as more people switch on air-conditioners, which then release even more heat.</p>
<p>Some solutions are surprisingly simple. Painting roofs white or light grey reflects much of the sunlight. Planting trees along roads gives shade and cools the air. In Singapore, some buildings have gardens on their walls and roofs. Malaysian town planners are studying these ideas, although they caution that green roofs need regular watering and care, which makes them costly to maintain.</p>` }
  ],
  soalan: [
    { petikan: 'P1', topik: 'Main idea / purpose', s: 'What is the main purpose of the notice?',
      p: ['To announce new safety rules for using the fume cupboards in the lab', 'To explain the changes during a temporary lab closure', 'To ask students to help clear Makmal Sains 2 before 11 July', 'To explain why the Science Society meeting has been cancelled'], a: 1,
      hurai: `The notice tells students that Makmal Sains 2 "will be closed from 14 to 25 July" and then lists what changes during that time. The meeting is "postponed", not cancelled, and no new safety rules are given.` },
    { petikan: 'P1', topik: 'Specific detail', s: 'Where will Form 2 students have their science lessons from 14 to 25 July?',
      p: ['In their own classrooms', 'In Makmal Sains 1', 'In Makmal Sains 2', 'In the Science Society room'], a: 0,
      hurai: `"Form 2 classes will have theory lessons in their own classrooms instead." Makmal Sains 1 is for Form 3 practical lessons.` },
    { petikan: 'P1', topik: 'Vocabulary in context', s: 'The word <b>fitted</b> in “new gas pipes and fume cupboards are fitted” is closest in meaning to',
      p: ['tried on for size', 'made healthy', 'put in place', 'chosen carefully'], a: 2,
      hurai: `Pipes and cupboards are being "fitted" in a lab that is being upgraded, so the word means installed or put in place. "Tried on" (clothes) and "healthy" (fit) are other meanings of the word that do not suit this context.` },
    { petikan: 'P1', topik: 'Reference', s: 'In the second point, the word <b>they</b> in “but they cannot be collected until the lab reopens” refers to',
      p: ['the students who left their things behind', 'the new gas pipes', 'the Form 3 practical lessons', 'the items left in the lab after 11 July'], a: 3,
      hurai: `"Items still in the lab after that date will be stored safely ... but they cannot be collected." Only items can be "collected"; the students are the ones who collect them.` },
    { petikan: 'P1', topik: 'Inference', s: 'Faiz forgets to collect his project board by 11 July and only remembers on 15 July. What will most likely happen?',
      p: ['His board will be thrown away.', 'He will get his board back after the lab reopens.', 'Puan Rohana will return the board to him on 15 July.', 'His board will be moved to Makmal Sains 1 for him.'], a: 1,
      hurai: `Items left after 11 July "will be stored safely, not thrown away, but they cannot be collected until the lab reopens". So Faiz must wait until after 25 July.` },

    { petikan: 'P2', topik: 'Main idea / purpose', s: 'Why did Aqilah write the email?',
      p: ['To complain about the full planetarium show last year', 'To tell the centre that Encik Faizal is attending a course', 'To ask for information and arrange a group visit', 'To invite an officer from the centre to give a talk at her school'], a: 2,
      hurai: `She says, "We hope to bring 40 Form 3 students ... to your centre" and asks "three questions". Last year's problem is mentioned only to explain her booking request.` },
    { petikan: 'P2', topik: 'Specific detail', s: 'What happened during the society’s visit last year?',
      p: ['The group could not get into the last planetarium show.', 'Their bus broke down on the highway on the way to Melaka.', 'The students were not allowed to bring packed lunches.', 'The centre was closed because of repairs.'], a: 0,
      hurai: `"By the time we reached the planetarium, the last show was full." The bus was late, not broken down, and only the lift was under repair.` },
    { petikan: 'P2', topik: 'Vocabulary in context', s: 'In “Last year our visit was <b>rushed</b>”, the word <b>rushed</b> suggests that the visit',
      p: ['was planned at the last minute by the teachers', 'was very crowded and noisy', 'ended earlier than the school had paid for', 'was too hurried because time was short'], a: 3,
      hurai: `The next sentence explains why: "Our bus arrived late", so the group had too little time. Nothing says the visit was planned late, crowded, or cut short by the centre.` },
    { petikan: 'P2', topik: 'Reference', s: 'In “When we came last year, <b>it</b> was under repair”, <b>it</b> refers to',
      p: ['the upper gallery', 'the lift', 'the wheelchair', 'the planetarium'], a: 1,
      hurai: `Aqilah asks whether "the lift to the upper gallery" is "in service again", so it was the lift that was under repair. The gallery was open, because the member "could not join her friends upstairs".` },
    { petikan: 'P2', topik: 'Inference', s: 'Why does Aqilah most likely want to book the 10.30 a.m. show in advance?',
      p: ['The afternoon shows are more expensive.', 'Encik Faizal can only accompany the group in the morning.', 'She does not want the group to miss the show again.', 'The students must eat lunch at the café at noon.'], a: 2,
      hurai: `Right after describing how "the last show was full" last year, she writes, "This time we would like to book the 10.30 a.m. show in advance". She wants to avoid the same problem.` },

    { petikan: 'P3', topik: 'Main idea / purpose', s: 'What is the article mainly about?',
      p: ['Causes, effects and solutions of extra heat in cities', 'How sweat helps to cool the human body', 'Why villages surrounded by farms and forests are hotter at night', 'The rising cost of electricity in Malaysia'], a: 0,
      hurai: `The paragraphs move from causes ("The main cause is the material ...") to effects ("The effect is not just uncomfortable") to solutions ("Some solutions are surprisingly simple"). Sweat is only an example.` },
    { petikan: 'P3', topik: 'Specific detail', s: 'According to the article, how do trees cool the air around them?',
      p: ['By reflecting sunlight like a white roof', 'By absorbing heat during the day', 'By blocking the breeze from narrow streets', 'By losing water through their leaves'], a: 3,
      hurai: `"They lose water through their leaves and surfaces, and this process cools the air around them." Reflecting sunlight is what light-coloured roofs do.` },
    { petikan: 'P3', topik: 'Vocabulary in context', s: 'In “they <b>caution</b> that green roofs need regular watering and care”, the word <b>caution</b> means',
      p: ['proudly announce', 'warn about a possible problem', 'move slowly and carefully to avoid danger', 'strongly refuse'], a: 1,
      hurai: `The planners point out a drawback: green roofs need care, "which makes them costly to maintain". To caution here is to warn, not to refuse or announce proudly.` },
    { petikan: 'P3', topik: 'Reference', s: 'In the last paragraph, <b>they</b> in “although they caution that green roofs need regular watering” refers to',
      p: ['the buildings in Singapore', 'these ideas', 'Malaysian town planners', 'green roofs'], a: 2,
      hurai: `"Malaysian town planners are studying these ideas, although they caution ..." Only people can caution, and green roofs are what they are warning about.` },
    { petikan: 'P3', topik: 'Inference', s: 'Which statement is best supported by the last paragraph?',
      p: ['A light-coloured roof is probably cheaper to maintain than a green roof.', 'Many Malaysian buildings already have gardens on their walls and roofs.', 'Malaysian town planners have decided not to use any ideas from Singapore.', 'Trees planted along roads need more watering than green roofs do.'], a: 0,
      hurai: `Painting roofs is called "surprisingly simple", while green roofs "need regular watering and care, which makes them costly to maintain". The planners are "studying" the ideas, not rejecting them.` }
  ]
});

// UKKM Set 01 — Ujian Keperibadian (Ya/Tidak), 100 item. Item terbalik bukan-kejujuran: 28.
UKKM_PART(1, {
  id: 'per', nama: 'Ujian Keperibadian', ikon: '🧭', minit: 30,
  arahan: "Baca setiap pernyataan dan pilih <b>Ya</b> atau <b>Tidak</b> mengikut diri anda yang sebenar. Jawab dengan jujur, logik dan konsisten; beberapa idea diulang dengan ayat berbeza. Bagi situasi asrama yang belum anda alami, jawab mengikut tindakan yang paling mungkin anda lakukan. Masa: kira-kira 18 saat bagi setiap item.",
  skala: ["Ya","Tidak"],
  item: [
    { s: "Saya menghormati pendapat rakan walaupun saya tidak bersetuju dengannya.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 0, hurai: "Menghormati perbezaan pendapat menjaga keharmonian." },
    { id: 'eb2', pasangan: 'eb1', s: "Saya cepat naik angin apabila rakan bergurau tentang diri saya.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 1, hurai: "Cepat marah menunjukkan emosi yang kurang stabil." },
    { id: 'ib2', pasangan: 'ib1', s: "Saya sering masuk ke kelas selepas guru sudah mula mengajar.", trait: "Integriti & Disiplin Diri", pos: 1, hurai: "Kerap lewat menunjukkan disiplin diri yang lemah." },
    { s: "Saya terus berasa mahu pulang ke rumah setiap kali menghadapi sedikit kesukaran di asrama.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 1, hurai: "Mudah mahu berputus asa menyukarkan penyesuaian di asrama." },
    { s: "Kadang-kadang saya bertangguh membuat kerja yang membosankan.", trait: "Skala Kejujuran", pos: 0, hurai: "Hampir semua orang pernah bertangguh; mengakuinya ialah jawapan jujur." },
    { s: "Saya mengejek rakan yang tersilap menjawab soalan di dalam kelas.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 1, hurai: "Mengejek rakan menjejaskan suasana belajar yang selamat." },
    { s: "Saya menerima teguran guru sebagai panduan untuk menjadi lebih baik.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Menerima teguran secara positif menunjukkan kematangan emosi." },
    { s: "Saya menyusun barang-barang saya di dalam loker dengan kemas.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Kekemasan memudahkan kehidupan di ruang yang terhad." },
    { id: 'sb1', pasangan: 'sb2', s: "Saya berusaha memahami konsep, bukan sekadar menghafal jawapan.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Kefahaman konsep penting untuk pelajar aliran sains." },
    { s: "Saya mengulang kaji topik yang sukar sehingga saya benar-benar faham.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Kegigihan belajar menunjukkan motivasi tinggi." },
    { s: "Saya menegur pelajar baharu di dorm dan memperkenalkan diri.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 0, hurai: "Sikap mesra membantu rakan baharu menyesuaikan diri." },
    { id: 'mb1', pasangan: 'mb2', s: "Saya merancang perbelanjaan wang saku supaya cukup sehingga hujung bulan.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Mengurus wang sendiri ialah tanda kemandirian." },
    { id: 'ma2', pasangan: 'ma1', s: "Saya membawa pulang semua pakaian kotor supaya keluarga membasuhnya pada hujung minggu.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 1, hurai: "Bergantung pada keluarga untuk tugas harian menyukarkan hidup di asrama." },
    { id: 'ia1', pasangan: 'ia2', s: "Saya menyiapkan kerja rumah sendiri walaupun rakan menawarkan jawapannya.", trait: "Integriti & Disiplin Diri", pos: 0, hurai: "Menyiapkan kerja sendiri menunjukkan kejujuran dan disiplin." },
    { s: "Saya tidak pernah berasa marah terhadap sesiapa pun.", trait: "Skala Kejujuran", pos: 1, hurai: "Tiada manusia sempurna; setiap orang pernah berasa marah, jadi jawapan jujur lebih dipercayai." },
    { s: "Saya selesa berjauhan dengan keluarga untuk tempoh yang lama.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Kesediaan berjauhan dengan keluarga penting untuk pelajar MRSM." },
    { s: "Saya mengingatkan rakan sekumpulan tentang tarikh akhir tugasan dengan cara yang sopan.", trait: "Kepimpinan & Inisiatif", pos: 0, hurai: "Memantau kemajuan kumpulan secara berhemah menunjukkan kepimpinan yang matang." },
    { s: "Saya tidak pernah berbohong walaupun sekali.", trait: "Skala Kejujuran", pos: 1, hurai: "Hampir setiap orang pernah berbohong kecil; jawapan jujur menunjukkan integriti." },
    { s: "Saya bangun sendiri pada waktu subuh tanpa dikejutkan.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Bangun sendiri ialah kemahiran penting di asrama." },
    { s: "Saya terus mencuba menyelesaikan soalan sukar walaupun beberapa kali gagal.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Kegigihan menunjukkan daya tahan." },
    { s: "Saya terlalu memikirkan kesilapan kecil sehingga sukar menumpukan perhatian pada kerja lain.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 1, hurai: "Terlalu memikirkan kesilapan kecil menjejaskan fokus." },
    { s: "Setiap kali guru bercakap, saya mendengar dengan penuh tumpuan dari awal hingga akhir.", trait: "Skala Kejujuran", pos: 1, hurai: "Tumpuan setiap orang ada kalanya terganggu; jawapan \"sempurna\" kelihatan tidak jujur." },
    { s: "Saya bangkit semula dengan cepat selepas kalah dalam pertandingan.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Bangkit selepas kekalahan ialah tanda ketahanan diri." },
    { s: "Saya menepati janji yang saya buat kepada rakan.", trait: "Integriti & Disiplin Diri", pos: 0, hurai: "Menepati janji membina kepercayaan." },
    { s: "Saya menganggap kegagalan sebagai peluang untuk belajar.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Pandangan positif terhadap kegagalan membina daya tahan." },
    { s: "Saya mudah berkawan dengan pelajar yang berbeza negeri dan latar belakang.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 0, hurai: "MRSM menghimpunkan pelajar dari seluruh negara; keterbukaan memudahkan pergaulan." },
    { s: "Saya boleh fokus menjawab soalan walaupun berasa gementar dalam dewan peperiksaan.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Mengawal kegelisahan membantu prestasi." },
    { s: "Saya meminta rakan mengambilkan makanan dari dewan selera kerana malas berjalan.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 1, hurai: "Pelajar asrama perlu mengurus keperluan sendiri, bukan bergantung pada rakan." },
    { s: "Saya membaca artikel sains walaupun tiada kerja rumah tentangnya.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Membaca di luar tugasan menunjukkan minat ilmu." },
    { s: "Saya memberitahu penjual jika dia tersilap memberikan baki lebih kepada saya.", trait: "Integriti & Disiplin Diri", pos: 0, hurai: "Kejujuran dalam urusan wang ialah ciri penting integriti." },
    { s: "Saya berhenti bermain dan mula mengulang kaji apabila tiba waktu prep.", trait: "Integriti & Disiplin Diri", pos: 0, hurai: "Kawalan diri pada waktu belajar menunjukkan disiplin." },
    { s: "Saya meminta ibu bapa menyelesaikan setiap masalah kecil saya dengan rakan sebilik.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 1, hurai: "Pelajar asrama perlu belajar menyelesaikan masalah kecil sendiri." },
    { id: 'sa2', pasangan: 'sa1', s: "Saya rasa memikirkan punca fenomena alam seperti pelangi hanya membuang masa.", trait: "Minat Ilmu, Sains & Motivasi", pos: 1, hurai: "Hilang rasa ingin tahu menghalang minat sains." },
    { s: "Saya boleh menyediakan sendiri barang keperluan sebelum pulang ke asrama.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Membuat persediaan sendiri menunjukkan kemandirian." },
    { id: 'ka2', pasangan: 'ka1', s: "Ketika ahli kumpulan saya bingung tentang tugasan, saya menunggu sehingga orang lain mengambil alih.", trait: "Kepimpinan & Inisiatif", pos: 1, hurai: "Menunggu orang lain bertindak menunjukkan inisiatif yang lemah; calon MRSM diharap berani memulakan langkah." },
    { s: "Saya suka mencadangkan idea baharu semasa mesyuarat kelab.", trait: "Kepimpinan & Inisiatif", pos: 0, hurai: "Menyumbang idea menunjukkan keyakinan diri dan semangat kepimpinan." },
    { id: 'ba2', pasangan: 'ba1', s: "Saya merajuk dan berhenti menyumbang apabila kumpulan menolak idea saya.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 1, hurai: "Merajuk apabila idea ditolak menjejaskan semangat pasukan." },
    { s: "Saya berkongsi bahan rujukan dengan rakan sekumpulan.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 0, hurai: "Berkongsi sumber menguatkan pasukan." },
    { id: 'ea1', pasangan: 'ea2', s: "Saya tetap tenang apabila mendapat markah rendah dan merancang cara memperbaikinya.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Bertindak balas secara tenang terhadap kegagalan menunjukkan ketahanan diri." },
    { s: "Saya meletakkan barang saya bersepah di atas katil dan lantai dorm.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 1, hurai: "Kekemasan penting apabila berkongsi ruang." },
    { s: "Apabila kipas kelas rosak, saya melaporkannya kepada guru walaupun tiada sesiapa menyuruh saya.", trait: "Kepimpinan & Inisiatif", pos: 0, hurai: "Bertindak terhadap masalah kecil atas kehendak sendiri menunjukkan inisiatif." },
    { s: "Saya datang awal ke aktiviti yang saya sendiri anjurkan.", trait: "Kepimpinan & Inisiatif", pos: 0, hurai: "Pemimpin yang baik menunjukkan teladan melalui perbuatan." },
    { s: "Saya mematuhi jadual harian asrama dari pagi hingga malam.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Mengikut jadual asrama menunjukkan kesediaan hidup berasrama." },
    { s: "Saya dapat menenangkan diri dengan menarik nafas panjang apabila berasa cemas.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Teknik menenangkan diri membantu kawalan emosi." },
    { s: "Saya meminta maaf apabila kata-kata saya menyinggung perasaan rakan.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 0, hurai: "Meminta maaf memulihkan hubungan dengan rakan." },
    { s: "Saya mengakui kesalahan saya apabila guru bertanya siapa yang memecahkan bikar.", trait: "Integriti & Disiplin Diri", pos: 0, hurai: "Mengaku kesilapan ialah tanda integriti." },
    { s: "Saya menonton dokumentari tentang angkasa lepas atau haiwan.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Minat terhadap ilmu sains di luar kelas sangat digalakkan." },
    { s: "Saya makan makanan yang disediakan di dewan selera walaupun bukan kegemaran saya.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Kesediaan menerima makanan asrama memudahkan penyesuaian." },
    { s: "Saya boleh membuat keputusan dengan tenang apabila ahli kumpulan berbeza pendapat.", trait: "Kepimpinan & Inisiatif", pos: 0, hurai: "Pemimpin perlu menimbang pandangan lalu membuat keputusan walaupun ada perbezaan." },
    { s: "Saya gembira apabila rakan sepasukan saya berjaya.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 0, hurai: "Meraikan kejayaan rakan menunjukkan semangat berpasukan." },
    { s: "Saya memilih untuk diam dalam perbincangan kelas walaupun saya ada jawapan yang baik.", trait: "Kepimpinan & Inisiatif", pos: 1, hurai: "Berkongsi idea yang bernas membantu kelas; berdiam diri melepaskan peluang memimpin." },
    { s: "Saya menghentak meja atau membaling barang apabila sangat marah.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 1, hurai: "Melepaskan marah secara kasar menunjukkan kawalan emosi yang lemah." },
    { s: "Saya bertanya kepada guru apabila saya kurang faham sesuatu konsep.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Bertanya menunjukkan kesungguhan belajar." },
    { s: "Saya membiarkan ahli lain menyiapkan bahagian saya dalam projek kumpulan.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 1, hurai: "Membebankan orang lain menunjukkan sikap kurang bekerjasama." },
    { s: "Saya memulangkan buku perpustakaan sebelum tarikh akhir.", trait: "Integriti & Disiplin Diri", pos: 0, hurai: "Bertanggungjawab terhadap harta awam menunjukkan integriti." },
    { s: "Saya menetapkan sasaran markah untuk setiap peperiksaan.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Matlamat yang jelas meningkatkan motivasi." },
    { s: "Saya menggunakan barang rakan sebilik apabila dia keluar dan memulangkannya senyap-senyap.", trait: "Integriti & Disiplin Diri", pos: 1, hurai: "Menggunakan barang orang lain secara senyap ialah ketidakjujuran." },
    { s: "Saya mereka alasan kepada guru apabila saya terlupa membawa buku latihan.", trait: "Integriti & Disiplin Diri", pos: 1, hurai: "Mereka alasan ialah bentuk penipuan kecil yang menjejaskan integriti." },
    { s: "Saya boleh bersabar ketika menunggu giliran yang lama.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Kesabaran ialah tanda emosi yang stabil." },
    { s: "Saya membantu rakan sekelas yang tertinggal dalam pelajaran.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 0, hurai: "Membantu rakan menunjukkan semangat kerjasama." },
    { s: "Saya belajar hanya apabila peperiksaan sudah hampir.", trait: "Minat Ilmu, Sains & Motivasi", pos: 1, hurai: "Belajar secara bermusim menunjukkan motivasi yang rendah." },
    { s: "Saya pernah berasa cemburu terhadap kejayaan orang lain.", trait: "Skala Kejujuran", pos: 0, hurai: "Rasa cemburu sekali-sekala ialah perkara biasa; mengakuinya menunjukkan kejujuran." },
    { s: "Saya boleh menyelesaikan masalah kecil sendiri sebelum meminta bantuan.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Berdikari dalam masalah kecil menunjukkan kematangan." },
    { s: "Saya melangkau soalan yang memerlukan saya berfikir panjang.", trait: "Minat Ilmu, Sains & Motivasi", pos: 1, hurai: "Mengelak soalan mencabar menghalang kemahiran berfikir." },
    { s: "Apabila projek kumpulan saya gagal, saya mengakui bahagian kesilapan saya sendiri.", trait: "Kepimpinan & Inisiatif", pos: 0, hurai: "Pemimpin yang bertanggungjawab menilai diri sendiri sebelum menuding jari." },
    { s: "Saya mendengar dengan teliti apabila rakan sedang bercakap.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 0, hurai: "Mendengar dengan baik ialah asas komunikasi berkesan." },
    { id: 'mb2', pasangan: 'mb1', s: "Wang saku saya biasanya habis dalam minggu pertama.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 1, hurai: "Perbelanjaan tanpa rancangan menyukarkan hidup berdikari." },
    { s: "Saya mematuhi peraturan penggunaan telefon bimbit di asrama.", trait: "Integriti & Disiplin Diri", pos: 0, hurai: "Mematuhi peraturan asrama menunjukkan disiplin diri." },
    { s: "Saya menyukai semua orang yang saya kenali tanpa kecuali.", trait: "Skala Kejujuran", pos: 1, hurai: "Wajar jika ada orang yang kita kurang serasi; mengakuinya ialah jawapan jujur." },
    { s: "Saya suka menyertai pertandingan sains atau inovasi.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Penglibatan dalam pertandingan menunjukkan minat sains." },
    { s: "Saya mampu menyesuaikan diri apabila jadual harian berubah secara tiba-tiba.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Fleksibiliti membantu menghadapi rutin MRSM yang padat." },
    { s: "Sebagai ketua kumpulan, saya menyimpan tugasan yang paling mudah untuk diri sendiri.", trait: "Kepimpinan & Inisiatif", pos: 1, hurai: "Pemimpin yang adil turut memikul bahagian kerja yang berat." },
    { id: 'ib1', pasangan: 'ib2', s: "Saya tiba di kelas tepat pada masanya.", trait: "Integriti & Disiplin Diri", pos: 0, hurai: "Menepati masa ialah asas disiplin diri pelajar asrama." },
    { s: "Saya cepat bosan apabila guru menerangkan konsep sains.", trait: "Minat Ilmu, Sains & Motivasi", pos: 1, hurai: "Rasa bosan terhadap sains kurang sesuai dengan aliran MRSM." },
    { id: 'ka1', pasangan: 'ka2', s: "Apabila kumpulan saya keliru tentang tugasan, saya mengambil langkah pertama untuk membahagikan kerja.", trait: "Kepimpinan & Inisiatif", pos: 0, hurai: "Pemimpin yang baik menyusun kumpulan tanpa menunggu disuruh." },
    { s: "Saya bercerita tentang kelemahan rakan sebilik kepada pelajar lain.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 1, hurai: "Mengumpat merosakkan kepercayaan dan hubungan." },
    { s: "Saya meluahkan perasaan kepada orang yang saya percayai apabila saya tertekan.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Mencari sokongan ialah cara sihat mengurus emosi." },
    { s: "Saya mencari cara yang sihat seperti bersukan untuk melegakan tekanan.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Cara mengurus tekanan yang sihat menunjukkan kestabilan emosi." },
    { s: "Saya menyiapkan bahagian tugasan saya supaya kumpulan dapat menghantar kerja tepat pada masanya.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 0, hurai: "Melaksanakan bahagian sendiri ialah tanggungjawab ahli pasukan." },
    { s: "Saya boleh menyesuaikan diri dengan katil dan bantal yang berbeza daripada di rumah.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Kebolehsuaian dengan keadaan baharu memudahkan hidup berasrama." },
    { id: 'ba1', pasangan: 'ba2', s: "Saya menerima keputusan kumpulan walaupun idea saya tidak dipilih.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 0, hurai: "Menghormati keputusan bersama ialah asas kerja berpasukan." },
    { id: 'ea2', pasangan: 'ea1', s: "Apabila mendapat markah rendah, saya berasa sangat kecewa sehingga malas belajar berhari-hari.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 1, hurai: "Kekecewaan yang berpanjangan melambatkan usaha untuk bangkit semula." },
    { id: 'eb1', pasangan: 'eb2', s: "Saya boleh mengawal rasa marah apabila diusik oleh rakan.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Kawalan emosi mengelakkan konflik di asrama." },
    { s: "Saya sentiasa menyiapkan semua kerja rumah tanpa sekali pun terlewat.", trait: "Skala Kejujuran", pos: 1, hurai: "Hampir semua pelajar pernah terlewat sekali-sekala; mengaku dengan jujur lebih realistik." },
    { id: 'ma1', pasangan: 'ma2', s: "Saya membasuh dan melipat pakaian saya sendiri.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Mengurus pakaian sendiri ialah kemahiran asas hidup berasrama." },
    { s: "Saya sanggup berucap di perhimpunan sekolah jika diminta mewakili kelas.", trait: "Kepimpinan & Inisiatif", pos: 0, hurai: "Keberanian bercakap di khalayak ialah kemahiran asas kepimpinan." },
    { s: "Saya mencuba menyelesaikan teka-teki matematik pada masa lapang.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Minat menyelesaikan masalah menyokong pembelajaran STEM." },
    { s: "Jika saya menjumpai dompet di koridor, saya menyerahkannya kepada guru bertugas.", trait: "Integriti & Disiplin Diri", pos: 0, hurai: "Memulangkan barang orang lain menunjukkan integriti." },
    { s: "Saya lebih suka menjadi ahli biasa supaya terlepas daripada sebarang tanggungjawab.", trait: "Kepimpinan & Inisiatif", pos: 1, hurai: "Mengelak tanggungjawab menunjukkan inisiatif yang rendah." },
    { id: 'sa1', pasangan: 'sa2', s: "Saya suka bertanya \"mengapa\" apabila melihat sesuatu fenomena alam.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Sifat ingin tahu ialah asas minat sains." },
    { s: "Saya mengikut jadual belajar yang saya sediakan sendiri.", trait: "Integriti & Disiplin Diri", pos: 0, hurai: "Mematuhi jadual sendiri menunjukkan disiplin dalaman." },
    { s: "Saya sukar bertenang selama berjam-jam selepas bertengkar dengan rakan.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 1, hurai: "Pemulihan emosi yang lambat menjejaskan tumpuan dan hubungan." },
    { s: "Saya menulis nama pada barang peribadi supaya mudah dikenal pasti.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Menjaga barang sendiri ialah tanggungjawab di asrama." },
    { s: "Ada kalanya saya berasa malas untuk bangun pagi.", trait: "Skala Kejujuran", pos: 0, hurai: "Mengakui kelemahan biasa menunjukkan kejujuran." },
    { s: "Saya seronok menjalankan eksperimen di makmal.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Minat terhadap kerja amali sesuai dengan MRSM." },
    { s: "Saya bercita-cita menceburi bidang sains, teknologi atau kejuruteraan.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Aspirasi STEM selari dengan matlamat MRSM." },
    { s: "Saya sanggup menawarkan diri menjadi ketua kumpulan bagi projek sains kelas.", trait: "Kepimpinan & Inisiatif", pos: 0, hurai: "Kesediaan memikul tanggungjawab memimpin ialah ciri penting pelajar MRSM." },
    { id: 'sb2', pasangan: 'sb1', s: "Saya lebih suka menghafal skema jawapan daripada memahami konsep.", trait: "Minat Ilmu, Sains & Motivasi", pos: 1, hurai: "Menghafal tanpa faham melemahkan penguasaan sains." },
    { s: "Saya meminta pendapat ahli yang pendiam supaya semua orang dapat menyumbang.", trait: "Kepimpinan & Inisiatif", pos: 0, hurai: "Pemimpin yang baik memberi ruang kepada setiap ahli untuk bersuara." },
    { id: 'ia2', pasangan: 'ia1', s: "Apabila kesuntukan masa, saya menyalin kerja rumah rakan sebelum kelas bermula.", trait: "Integriti & Disiplin Diri", pos: 1, hurai: "Menyalin kerja orang lain ialah ketidakjujuran akademik." }
  ]
});

UKKM.push({ set: 1, tajuk: 'Set 1', bahagian: ['mat', 'sains', 'eng', 'per'].map(k => B[k]).filter(Boolean) }); })();
