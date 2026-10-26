(function () { const B = {}; const UKKM_PART = (n, b) => { B[b.id] = b; };
UKKM_PART(5, { id: 'mat', nama: 'Matematik', ikon: '🧮', minit: 30,
  arahan: 'Jawab semua 20 soalan. 18 soalan objektif (pilih A, B, C atau D) dan 2 soalan isian (taip jawapan nombor). Kalkulator saintifik dibenarkan; gunakan kertas conteng.',
  soalan: [
  { // 1 Pola — mudah
    s: "Apakah sebutan <b>keenam</b> dalam jujukan berikut?<br><b>5, −10, 20, −40, …</b>",
    en: "What is the sixth term of the sequence 5, −10, 20, −40, … ?",
    p: ['−320', '−160', '160', '320'], a: 1, topik: 'Pola & Jujukan', aras: 'mudah',
    hurai: "Setiap sebutan didarab dengan −2: −40 × (−2) = 80 (sebutan ke-5), 80 × (−2) = <b>−160</b> (sebutan ke-6). (160 lupa tukar tanda; 320 ialah sebutan ke-7, terlebih satu langkah; −320 terlebih langkah dan salah tanda.)"
  },
  { // 2 Persamaan linear — mudah
    s: "Tiket pameran sains berharga RM 12 untuk dewasa dan RM 7 untuk kanak-kanak. Sebanyak 50 keping tiket terjual dengan kutipan RM 455. Berapakah bilangan tiket kanak-kanak yang terjual?",
    en: "Science exhibition tickets cost RM 12 (adult) and RM 7 (child). 50 tickets were sold for RM 455. How many child tickets were sold?",
    p: ['21', '25', '29', '35'], a: 2, topik: 'Persamaan Linear', aras: 'mudah',
    hurai: "Dewasa = d, kanak-kanak = 50 − d. 12d + 7(50 − d) = 455 → 5d + 350 = 455 → d = 21. Kanak-kanak = 50 − 21 = <b>29</b>. (21 ialah tiket dewasa; 35 = 455 ÷ 13, membahagi dengan jumlah dua harga; 25 sekadar separuh daripada 50.)"
  },
  { // 3 Peratus — mudah
    s: "Bilangan ahli Kelab Robotik meningkat daripada 40 orang pada tahun lalu kepada 52 orang tahun ini. Berapakah peratus peningkatan bilangan ahli?",
    en: "Robotics Club membership rose from 40 last year to 52 this year. What is the percentage increase?",
    p: ['1.3%', '12%', '23.1%', '30%'], a: 3, topik: 'Peratus & Matematik Pengguna', aras: 'mudah',
    hurai: "Peningkatan = 52 − 40 = 12. Peratus = 12 ÷ 40 × 100% = <b>30%</b> (bahagi dengan nilai <i>asal</i>). (23.1% = 12 ÷ 52, bahagi dengan nilai baharu; 12% menganggap beza ialah peratus; 1.3% salah tafsir nisbah 52 ÷ 40 = 1.3.)"
  },
  { // 4 Nisbah — mudah
    s: "Sejumlah wang dikongsi antara Kamal dan Lina mengikut nisbah 5 : 3. Kamal menerima RM 48 lebih daripada Lina. Berapakah jumlah wang itu?",
    en: "Some money is shared between Kamal and Lina in the ratio 5 : 3. Kamal receives RM 48 more than Lina. What is the total amount?",
    p: ['RM 384', 'RM 192', 'RM 120', 'RM 72'], a: 1, topik: 'Nisbah, Kadar & Laju', aras: 'mudah',
    hurai: "Beza nisbah = 5 − 3 = 2 bahagian = RM 48, maka 1 bahagian = RM 24. Jumlah = 8 × 24 = <b>RM 192</b>. (RM 120 dan RM 72 ialah bahagian Kamal dan Lina; RM 384 = 48 × 8, menganggap RM 48 ialah satu bahagian.)"
  },
  { // 5 Data — mudah
    rajah: '<table><tr><th>Bilangan adik-beradik</th><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td></tr><tr><th>Bilangan murid</th><td>3</td><td>7</td><td>6</td><td>3</td><td>1</td></tr></table>',
    s: "Jadual kekerapan menunjukkan bilangan adik-beradik bagi sekumpulan murid. Hitung min bilangan adik-beradik.",
    en: "The frequency table shows the number of siblings of a group of pupils. Find the mean number of siblings.",
    p: ['1.6', '2.0', '4.0', '6.4'], a: 0, topik: 'Data & Statistik', aras: 'mudah',
    hurai: "Jumlah murid = 3 + 7 + 6 + 3 + 1 = 20. Jumlah adik-beradik = 0(3) + 1(7) + 2(6) + 3(3) + 4(1) = 32. Min = 32 ÷ 20 = <b>1.6</b>. (2.0 ialah min nilai 0–4 tanpa kekerapan; 4.0 = 20 ÷ 5; 6.4 = 32 ÷ 5, bahagi dengan bilangan lajur.)"
  },
  { // 6 Geometri (ruang) — sederhana
    rajah: '<svg viewBox="0 0 200 140" style="max-width:100%;width:240px" role="img" aria-label="Bentangan kubus berbentuk tangga: baris atas muka 1 dan 2; baris tengah muka 3 dan 4 (muka 3 di bawah muka 2); baris bawah muka 5 dan 6 (muka 5 di bawah muka 4)"><g fill="none" stroke="var(--c)" stroke-width="2.5"><rect x="20" y="10" width="40" height="40"/><rect x="60" y="10" width="40" height="40"/><rect x="60" y="50" width="40" height="40"/><rect x="100" y="50" width="40" height="40"/><rect x="100" y="90" width="40" height="40"/><rect x="140" y="90" width="40" height="40"/></g><g font-size="16" font-weight="700" fill="currentColor" text-anchor="middle"><text x="40" y="36">1</text><text x="80" y="36">2</text><text x="80" y="76">3</text><text x="120" y="76">4</text><text x="120" y="116">5</text><text x="160" y="116">6</text></g></svg>',
    s: "Rajah menunjukkan bentangan sebuah kubus. Apabila bentangan itu dilipat menjadi kubus, muka manakah yang bertentangan dengan muka <b>2</b>?",
    en: "The diagram shows the net of a cube. When it is folded into a cube, which face is opposite face 2?",
    p: ['1', '3', '4', '5'], a: 3, topik: 'Geometri & Pengukuran', aras: 'sederhana',
    hurai: "Jadikan muka 4 sebagai tapak. Muka 3 naik menjadi dinding kiri, muka 5 dinding hadapan, muka 6 (bercantum pada 5) dinding kanan, muka 2 (bercantum pada 3) dinding belakang dan muka 1 (bercantum pada 2) menjadi bahagian atas. Maka muka 2 (belakang) bertentangan dengan muka <b>5</b> (hadapan); pasangan lain ialah 1–4 dan 3–6. (Muka 1 dan 3 bersentuhan dengan muka 2 dalam bentangan, jadi pasti bersebelahan dengannya; 4 bertentangan dengan 1.)"
  },
  { // 7 Logik — sederhana
    s: "Terdapat 9 keping syiling yang kelihatan serupa. Sekeping daripadanya palsu dan <b>lebih berat</b> sedikit. Dengan menggunakan neraca dua lengan sahaja (tanpa pemberat), berapakah bilangan penimbangan <b>minimum</b> yang <b>menjamin</b> syiling palsu itu dapat dikenal pasti?",
    en: "There are 9 identical-looking coins; one fake coin is slightly heavier. Using only a two-pan balance, what is the minimum number of weighings that guarantees finding the fake coin?",
    p: ['1', '2', '3', '4'], a: 1, topik: 'Penaakulan Logik', aras: 'sederhana',
    hurai: "Bahagi kepada 3 kumpulan 3 syiling. Timbang kumpulan I lawan II: lengan yang turun mengandungi syiling palsu; jika seimbang, ia dalam kumpulan III. Kemudian timbang 1 lawan 1 daripada kumpulan itu dengan cara yang sama. Jadi <b>2</b> penimbangan. (Kaedah separuh 4 lawan 4 memerlukan 3 penimbangan dalam kes terburuk; 1 penimbangan hanya ada 3 kemungkinan keputusan, tidak cukup untuk 9 syiling.)"
  },
  { // 8 Pola — sederhana
    rajah: '<svg viewBox="0 0 290 105" style="max-width:100%;width:320px" role="img" aria-label="Meja disambung dalam satu baris: 1 meja 4 kerusi, 2 meja 6 kerusi, 3 meja 8 kerusi"><g fill="none" stroke="var(--c)" stroke-width="2"><rect x="20" y="30" width="24" height="24"/><rect x="90" y="30" width="48" height="24"/><line x1="114" y1="30" x2="114" y2="54"/><rect x="180" y="30" width="72" height="24"/><line x1="204" y1="30" x2="204" y2="54"/><line x1="228" y1="30" x2="228" y2="54"/></g><g fill="currentColor"><circle cx="32" cy="21" r="4.5"/><circle cx="32" cy="63" r="4.5"/><circle cx="11" cy="42" r="4.5"/><circle cx="53" cy="42" r="4.5"/><circle cx="102" cy="21" r="4.5"/><circle cx="126" cy="21" r="4.5"/><circle cx="102" cy="63" r="4.5"/><circle cx="126" cy="63" r="4.5"/><circle cx="81" cy="42" r="4.5"/><circle cx="147" cy="42" r="4.5"/><circle cx="192" cy="21" r="4.5"/><circle cx="216" cy="21" r="4.5"/><circle cx="240" cy="21" r="4.5"/><circle cx="192" cy="63" r="4.5"/><circle cx="216" cy="63" r="4.5"/><circle cx="240" cy="63" r="4.5"/><circle cx="171" cy="42" r="4.5"/><circle cx="261" cy="42" r="4.5"/></g><g font-size="12" fill="currentColor"><text x="4" y="92">1 meja</text><text x="90" y="92">2 meja</text><text x="196" y="92">3 meja</text></g></svg>',
    s: "Meja segi empat sama disambung dalam satu baris dan kerusi (•) diletakkan di sekelilingnya seperti dalam rajah. Untuk satu majlis, 58 orang tetamu perlu duduk di <b>satu baris</b> meja sahaja. Berapakah bilangan meja minimum yang diperlukan?",
    en: "Square tables are joined in one row with chairs placed around them as shown. 58 guests must sit at a single row of tables. What is the minimum number of tables needed?",
    p: ['30', '29', '28', '15'], a: 2, topik: 'Pola & Jujukan', aras: 'sederhana',
    hurai: "Bilangan kerusi = 2n + 2 (2 kerusi di atas dan bawah setiap meja, tambah 2 di hujung). 2n + 2 ≥ 58 → n ≥ 28. Jadi <b>28</b> meja (tepat 58 kerusi). (15 ≈ 58 ÷ 4 menganggap setiap meja berasingan; 29 = 58 ÷ 2 lupa 2 kerusi di hujung.)"
  },
  { // 9 Persamaan linear — sederhana
    rajah: '<svg viewBox="0 0 420 110" style="max-width:100%;width:420px" role="img" aria-label="Neraca 1: dua tin T dan pemberat 300 g seimbang dengan satu kotak K. Neraca 2: satu kotak K dan satu tin T seimbang dengan pemberat 1200 g."><g stroke="currentColor" stroke-width="2" fill="none"><line x1="10" y1="62" x2="190" y2="62"/><path d="M100 62 L90 82 L110 82 Z"/><line x1="70" y1="82" x2="130" y2="82"/><line x1="220" y1="62" x2="410" y2="62"/><path d="M315 62 L305 82 L325 82 Z"/><line x1="285" y1="82" x2="345" y2="82"/></g><g stroke="var(--c)" stroke-width="2" fill="none"><circle cx="24" cy="51" r="11"/><circle cx="48" cy="51" r="11"/><rect x="62" y="40" width="34" height="22"/><rect x="138" y="30" width="40" height="32"/><rect x="230" y="30" width="40" height="32"/><circle cx="286" cy="51" r="11"/><rect x="345" y="40" width="52" height="22"/></g><g font-size="12" fill="currentColor" text-anchor="middle"><text x="24" y="55">T</text><text x="48" y="55">T</text><text x="79" y="55">300 g</text><text x="158" y="51">K</text><text x="250" y="51">K</text><text x="286" y="55">T</text><text x="371" y="55">1200 g</text><text x="100" y="102">Neraca 1</text><text x="315" y="102">Neraca 2</text></g></svg>',
    s: "Kedua-dua neraca dalam rajah berada dalam keseimbangan. Semua tin T mempunyai jisim yang sama. Berapakah jisim sebuah kotak K?",
    en: "Both balances in the diagram are balanced. All tins T have the same mass. What is the mass of one box K?",
    p: ['300 g', '600 g', '750 g', '900 g'], a: 3, topik: 'Persamaan Linear', aras: 'sederhana',
    hurai: "Neraca 1: K = 2T + 300. Neraca 2: K + T = 1200. Gantikan: 2T + 300 + T = 1200 → 3T = 900 → T = 300 g, maka K = 2(300) + 300 = <b>900 g</b>. (300 g ialah jisim tin; 600 g = 2T sahaja; 750 g = (1200 + 300) ÷ 2, menggabungkan persamaan secara salah.)"
  },
  { // 10 Peratus — sederhana
    rajah: '<table><tr><th>Penggunaan elektrik</th><th>Kadar</th></tr><tr><td>200 kWj pertama (1–200)</td><td>20 sen/kWj</td></tr><tr><td>100 kWj berikutnya (201–300)</td><td>35 sen/kWj</td></tr><tr><td>Setiap kWj melebihi 300</td><td>50 sen/kWj</td></tr></table>',
    s: "Jadual menunjukkan tarif elektrik berperingkat sebuah syarikat. Rumah Encik Ravi menggunakan 365 kWj sebulan. Cukai perkhidmatan 6% dikenakan ke atas jumlah caj elektrik. Berapakah bil bulanannya?",
    en: "The table shows a tiered electricity tariff. Mr Ravi's house uses 365 kWh in a month. A 6% service tax is charged on the electricity charge. What is his monthly bill?",
    p: ['RM 193.45', 'RM 182.50', 'RM 113.95', 'RM 107.50'], a: 2, topik: 'Peratus & Matematik Pengguna', aras: 'sederhana',
    hurai: "200 × 0.20 = RM 40.00; 100 × 0.35 = RM 35.00; 65 × 0.50 = RM 32.50. Jumlah = RM 107.50. Tambah cukai 6%: 107.50 × 1.06 = <b>RM 113.95</b>. (RM 107.50 lupa cukai; RM 182.50 = 365 × 0.50, mengenakan kadar tertinggi pada semua unit; RM 193.45 = 182.50 × 1.06.)"
  },
  { // 11 Kadar — sederhana (ISI)
    jenis: 'isi',
    s: "Kereta Encik Faiz menggunakan 6 liter petrol bagi setiap 100 km. Dia memandu pergi dan balik dari Kuala Lumpur ke Ipoh, iaitu 205 km sehala. Jika harga petrol RM 2.05 seliter, berapakah kos petrol bagi perjalanan itu? (Jawab dalam RM, betul kepada 2 tempat perpuluhan.)",
    en: "Mr Faiz's car uses 6 litres per 100 km. He drives from Kuala Lumpur to Ipoh and back (205 km each way). Petrol costs RM 2.05 per litre. What is the petrol cost in RM (2 decimal places)?",
    a: 50.43, tol: 0.01, unit: 'RM', topik: 'Nisbah, Kadar & Laju', aras: 'sederhana',
    hurai: "Jarak = 2 × 205 = 410 km. Petrol = 410 ÷ 100 × 6 = 24.6 liter. Kos = 24.6 × 2.05 = <b>RM 50.43</b>. (Ralat biasa: lupa perjalanan balik → RM 25.22.)"
  },
  { // 12 Data / kebarangkalian — sederhana
    rajah: '<table><tr><th></th><th>Kelab Sains</th><th>Kelab Sukan</th><th>Kelab Seni</th></tr><tr><th>Tingkatan 2</th><td>12</td><td>18</td><td>10</td></tr><tr><th>Tingkatan 3</th><td>15</td><td>9</td><td>16</td></tr></table>',
    s: "Jadual menunjukkan bilangan murid Tingkatan 2 dan Tingkatan 3 mengikut kelab. Seorang murid dipilih secara rawak daripada <b>ahli Kelab Sains</b>. Apakah kebarangkalian murid itu murid Tingkatan 3?",
    en: "The table shows Form 2 and Form 3 pupils by club. A pupil is chosen at random from the Science Club members. What is the probability that the pupil is in Form 3?",
    p: ['5/9', '3/8', '27/80', '3/16'], a: 0, topik: 'Data & Statistik', aras: 'sederhana',
    hurai: "Ruang sampel hanya ahli Kelab Sains: 12 + 15 = 27 murid. P(Tingkatan 3) = 15/27 = <b>5/9</b>. (3/8 = 15/40 guna semua murid Tingkatan 3; 3/16 = 15/80 guna semua murid; 27/80 ialah kebarangkalian memilih ahli Kelab Sains.)"
  },
  { // 13 Geometri bulatan — sederhana
    rajah: '<svg viewBox="0 0 220 200" style="max-width:100%;width:240px" role="img" aria-label="Bulatan berpusat O. A dan B di bahagian bawah lilitan, C di bahagian atas. Garis OA, OB, AB, CA dan CB dilukis. Sudut OAB = 34 darjah."><circle cx="110" cy="100" r="80" fill="none" stroke="currentColor" stroke-width="2"/><g stroke="var(--c)" stroke-width="2" fill="none"><line x1="43.7" y1="144.7" x2="176.3" y2="144.7"/><line x1="43.7" y1="144.7" x2="110" y2="100"/><line x1="176.3" y1="144.7" x2="110" y2="100"/><line x1="43.7" y1="144.7" x2="110" y2="20"/><line x1="176.3" y1="144.7" x2="110" y2="20"/></g><circle cx="110" cy="100" r="2.5" fill="currentColor"/><g font-size="13" fill="currentColor"><text x="28" y="160">A</text><text x="182" y="160">B</text><text x="105" y="14">C</text><text x="114" y="96">O</text><text x="66" y="141">34°</text></g></svg>',
    s: "Dalam rajah, O ialah pusat bulatan dan A, B, C terletak pada lilitan. Diberi ∠OAB = 34°, cari ∠ACB.",
    en: "In the diagram, O is the centre of the circle and A, B, C lie on the circumference. Given angle OAB = 34°, find angle ACB.",
    p: ['34°', '56°', '68°', '112°'], a: 1, topik: 'Geometri & Pengukuran', aras: 'sederhana',
    hurai: "OA = OB (jejari), jadi ∠OBA = 34°. ∠AOB = 180° − 2(34°) = 112°. Sudut di lilitan = ½ sudut di pusat: ∠ACB = 112° ÷ 2 = <b>56°</b>. (112° ialah sudut di pusat; 68° = 2 × 34°; 34° menganggap sudut sama dengan ∠OAB.)"
  },
  { // 14 Logik — sederhana
    s: "Diberi dua pernyataan:<br>• Semua ahli Kelab Robotik pandai mengekod.<br>• Sebahagian ahli Kelab Robotik ialah pengawas sekolah.<br>Pernyataan manakah yang <b>PASTI</b> benar?",
    en: "All Robotics Club members can code. Some Robotics Club members are school prefects. Which statement MUST be true?",
    p: ['Semua pengawas sekolah pandai mengekod.', 'Semua murid yang pandai mengekod ialah ahli Kelab Robotik.', 'Sebahagian ahli Kelab Robotik tidak pandai mengekod.', 'Sebahagian pengawas sekolah pandai mengekod.'], a: 3, topik: 'Penaakulan Logik', aras: 'sederhana',
    hurai: "Pengawas yang menjadi ahli Kelab Robotik pasti pandai mengekod, jadi <b>sebahagian pengawas pandai mengekod</b>. Tiada maklumat tentang pengawas lain (A tidak pasti); B menterbalikkan pernyataan pertama; C bercanggah dengan 'semua ahli pandai mengekod'."
  },
  { // 15 Pola — sukar
    rajah: '<svg viewBox="0 0 230 80" style="max-width:100%;width:280px" role="img" aria-label="Segi empat sama dibina daripada lapisan berbentuk L: 1 petak; 1 + 3 petak membentuk 2 kali 2; 1 + 3 + 5 petak membentuk 3 kali 3"><g stroke="currentColor" stroke-width="1.5"><rect x="10" y="40" width="16" height="16" fill="var(--c)" fill-opacity=".6"/><rect x="60" y="40" width="16" height="16" fill="var(--c)" fill-opacity=".6"/><rect x="76" y="40" width="16" height="16" fill="none"/><rect x="60" y="24" width="16" height="16" fill="none"/><rect x="76" y="24" width="16" height="16" fill="none"/><rect x="130" y="40" width="16" height="16" fill="var(--c)" fill-opacity=".6"/><rect x="146" y="40" width="16" height="16" fill="none"/><rect x="130" y="24" width="16" height="16" fill="none"/><rect x="146" y="24" width="16" height="16" fill="none"/><rect x="162" y="40" width="16" height="16" fill="var(--c)" fill-opacity=".6"/><rect x="162" y="24" width="16" height="16" fill="var(--c)" fill-opacity=".6"/><rect x="130" y="8" width="16" height="16" fill="var(--c)" fill-opacity=".6"/><rect x="146" y="8" width="16" height="16" fill="var(--c)" fill-opacity=".6"/><rect x="162" y="8" width="16" height="16" fill="var(--c)" fill-opacity=".6"/></g><g font-size="12" fill="currentColor"><text x="6" y="74">1 = 1²</text><text x="50" y="74">1+3 = 2²</text><text x="122" y="74">1+3+5 = 3²</text></g></svg>',
    s: "Rajah menunjukkan bahawa hasil tambah nombor ganjil berturutan bermula daripada 1 membentuk nombor kuasa dua. Gunakan pola ini untuk mencari nilai<br><b>21 + 23 + 25 + … + 79</b>.",
    en: "The diagram shows that sums of consecutive odd numbers starting from 1 give square numbers. Use this pattern to find 21 + 23 + 25 + … + 79.",
    p: ['1479', '1500', '1550', '1600'], a: 1, topik: 'Pola & Jujukan', aras: 'sukar',
    hurai: "1 + 3 + … + 79 ialah 40 nombor ganjil = 40² = 1600. 1 + 3 + … + 19 ialah 10 nombor ganjil = 10² = 100. Maka 21 + … + 79 = 1600 − 100 = <b>1500</b>. (1600 tidak menolak sebutan awal; 1479 = 1600 − 11², turut menolak 21; 1550 = 31 × 50, tersilap kira bilangan sebutan — sebenarnya 30.)"
  },
  { // 16 Rumus / persamaan linear — sukar
    s: "Hubungan antara suhu dalam darjah Fahrenheit (F) dan darjah Celsius (C) ialah F = <sup>9</sup>⁄<sub>5</sub>C + 32. Berapakah suhu dalam darjah Celsius apabila bacaan dalam °F ialah <b>dua kali</b> bacaan dalam °C?",
    en: "Temperature in Fahrenheit is F = (9/5)C + 32. At what Celsius temperature is the Fahrenheit reading twice the Celsius reading?",
    p: ['−40°C', '80°C', '160°C', '320°C'], a: 2, topik: 'Persamaan Linear', aras: 'sukar',
    hurai: "Syarat F = 2C: 2C = 1.8C + 32 → 0.2C = 32 → C = <b>160°C</b> (semak: F = 288 + 32 = 320 = 2 × 160). (320 ialah bacaan °F, bukan °C; −40°C ialah suhu apabila F = C; 80°C tersilap 0.4C = 32.)"
  },
  { // 17 Kredit — sukar
    s: "Penyata kad kredit Puan Aida menunjukkan baki tertunggak RM 2 400. Dia hanya membuat bayaran minimum 5% sebelum tarikh akhir. Bank mengenakan caj kewangan pada kadar 18% setahun ke atas baki yang belum dibayar. Berapakah caj kewangan untuk satu bulan?",
    en: "Mrs Aida's credit card statement shows RM 2 400 outstanding. She pays only the 5% minimum payment before the due date. The bank charges 18% per annum on the unpaid balance. What is the finance charge for one month?",
    p: ['RM 34.20', 'RM 36.00', 'RM 410.40', 'RM 432.00'], a: 0, topik: 'Peratus & Matematik Pengguna', aras: 'sukar',
    hurai: "Bayaran minimum = 5% × 2400 = RM 120. Baki belum dibayar = RM 2 280. Kadar sebulan = 18% ÷ 12 = 1.5%. Caj = 2280 × 0.015 = <b>RM 34.20</b>. (RM 36.00 dikira atas RM 2 400 penuh; RM 410.40 dan RM 432.00 lupa menukar kadar tahunan kepada bulanan.)"
  },
  { // 18 Laju — sukar
    s: "Ali berlari dengan laju seragam 5 m/s. Empat saat kemudian, Badrul mula berlari dari garisan yang sama dengan laju seragam 6 m/s. Berapakah jarak dari garisan permulaan apabila Badrul memintas Ali?",
    en: "Ali runs at a steady 5 m/s. Four seconds later, Badrul starts from the same line at a steady 6 m/s. How far from the start line does Badrul overtake Ali?",
    p: ['20 m', '100 m', '120 m', '144 m'], a: 2, topik: 'Nisbah, Kadar & Laju', aras: 'sukar',
    hurai: "Dalam 4 s, Ali mendahului 4 × 5 = 20 m. Badrul merapatkan jarak 6 − 5 = 1 m/s, jadi perlu 20 s. Jarak Badrul = 6 × 20 = <b>120 m</b> (semak Ali: 5 × 24 = 120 m). (20 m ialah jarak pendahuluan; 100 m = 5 × 20 lupa 4 s awal Ali; 144 m = 6 × 24 guna masa Ali untuk Badrul.)"
  },
  { // 19 Data — sukar (ISI)
    jenis: 'isi',
    s: "Min tinggi 25 orang murid ialah 152 cm. Kemudian didapati tinggi seorang murid tersalah catat sebagai 165 cm, sedangkan tinggi sebenar ialah 156 cm. Selepas pembetulan, seorang murid baharu setinggi 148 cm turut dimasukkan. Berapakah min tinggi baharu bagi 26 orang murid itu?",
    en: "The mean height of 25 pupils is 152 cm. One height was wrongly recorded as 165 cm instead of 156 cm. After correcting it, a new pupil of height 148 cm is added. What is the new mean height of the 26 pupils?",
    a: 151.5, tol: 0.01, unit: 'cm', topik: 'Data & Statistik', aras: 'sukar',
    hurai: "Jumlah asal = 25 × 152 = 3800. Betulkan: 3800 − 165 + 156 = 3791. Tambah murid baharu: 3791 + 148 = 3939. Min = 3939 ÷ 26 = <b>151.5 cm</b>."
  },
  { // 20 Isi padu — sukar
    rajah: '<svg viewBox="0 0 240 160" style="max-width:100%;width:280px" role="img" aria-label="Kon tegak terbalik berjejari 6 cm dan tinggi 15 cm penuh dengan air; silinder kosong berjejari 5 cm dan tinggi 10 cm"><g fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="55" cy="30" rx="36" ry="9"/><line x1="19" y1="30" x2="55" y2="130"/><line x1="91" y1="30" x2="55" y2="130"/><ellipse cx="160" cy="50" rx="30" ry="8"/><line x1="130" y1="50" x2="130" y2="130"/><line x1="190" y1="50" x2="190" y2="130"/><path d="M130 130 A30 8 0 0 0 190 130"/></g><g stroke="var(--muted)" stroke-dasharray="3 3"><line x1="55" y1="30" x2="91" y2="30"/><line x1="55" y1="30" x2="55" y2="130"/><line x1="160" y1="50" x2="190" y2="50"/></g><g font-size="12" fill="currentColor"><text x="60" y="24">6 cm</text><text x="60" y="88">15 cm</text><text x="162" y="42">5 cm</text><text x="194" y="95">10 cm</text><text x="30" y="152">Kon (penuh air)</text><text x="135" y="152">Silinder</text></g></svg>',
    s: "Sebuah bekas berbentuk kon terbalik berjejari 6 cm dan tinggi 15 cm penuh dengan air. Semua air itu dituang ke dalam sebuah silinder kosong berjejari 5 cm dan tinggi 10 cm. Berapakah kedalaman air dalam silinder?",
    en: "An inverted cone of radius 6 cm and height 15 cm is full of water. All the water is poured into an empty cylinder of radius 5 cm and height 10 cm. What is the depth of water in the cylinder?",
    p: ['7.2 cm', '10.0 cm', '21.6 cm', '28.8 cm'], a: 0, topik: 'Geometri & Pengukuran', aras: 'sukar',
    hurai: "Isi padu kon = ⅓ × π × 6² × 15 = 180π cm³. Kedalaman h dalam silinder: π × 5² × h = 180π → h = 180 ÷ 25 = <b>7.2 cm</b> (kurang daripada 10 cm, tidak melimpah). (21.6 cm lupa faktor ⅓; 10.0 cm menyangka air melimpah kerana 21.6 > 10; 28.8 cm guna diameter 12 cm sebagai jejari kon.)"
  }
  ]
});

UKKM_PART(5, { id: 'sains', nama: 'Sains', ikon: '🔬', minit: 30,
  arahan: 'Jawab semua 30 soalan. Pilih satu jawapan yang paling tepat bagi setiap soalan.',
  soalan: [
  { topik: 'Biologi: Sel', s: `Sel darah merah manusia tidak mempunyai nukleus dan berbentuk cakera dwicekung. Apakah kelebihan ciri-ciri ini?`,
    en: `Human red blood cells have no nucleus and are biconcave discs. What is the advantage of these features?`,
    p: ['Lebih banyak ruang untuk hemoglobin dan luas permukaan yang besar untuk mengangkut oksigen', 'Membolehkan sel darah merah membahagi dengan cepat', 'Membolehkan sel darah merah memusnahkan bakteria', 'Membantu darah membeku dengan cepat'], a: 0,
    hurai: `Tanpa nukleus, lebih banyak hemoglobin dapat dimuatkan, dan bentuk dwicekung menambah luas permukaan untuk resapan oksigen. Ini contoh pengkhususan sel.` },
  { topik: 'Biologi: Sel', s: `Sebatang pokok berdaun belang hijau dan putih didedahkan kepada cahaya Matahari. Sehelai daunnya dinyahwarnakan, kemudian diuji dengan larutan iodin. Hanya bahagian yang asalnya hijau bertukar menjadi biru tua. Apakah kesimpulannya?`,
    en: `A plant with green-and-white variegated leaves is exposed to sunlight. One leaf is decolourised and tested with iodine solution. Only the parts that were green turn dark blue. What is the conclusion?`,
    p: ['Cahaya diperlukan untuk fotosintesis', 'Klorofil diperlukan untuk fotosintesis', 'Karbon dioksida diperlukan untuk fotosintesis', 'Air diperlukan untuk fotosintesis'], a: 1,
    hurai: `Kanji (warna biru tua) hanya terbentuk di bahagian yang mengandungi klorofil. Seluruh daun menerima cahaya, karbon dioksida dan air yang sama, jadi perbezaannya hanyalah klorofil.` },
  { topik: 'Biologi: Rangsangan dan Gerak Balas', s: `Sistem saraf pusat manusia terdiri daripada…`,
    en: `The human central nervous system consists of the…`,
    p: ['otak dan saraf tunjang', 'otak dan saraf kranium', 'saraf tunjang dan saraf spina', 'semua neuron deria dan neuron motor'], a: 0,
    hurai: `Sistem saraf pusat terdiri daripada otak dan saraf tunjang. Saraf kranium, saraf spina, neuron deria dan neuron motor tergolong dalam sistem saraf periferi.` },
  { topik: 'Biologi: Nutrisi', s: `Seorang murid jarang makan sayur-sayuran dan buah-buahan, dan sering mengalami sembelit. Kelas makanan manakah kurang dalam dietnya?`,
    en: `A student rarely eats vegetables and fruit and often suffers from constipation. Which class of food is lacking in his diet?`,
    p: ['Protein', 'Lemak', 'Pelawas (serat)', 'Karbohidrat'], a: 2,
    hurai: `Pelawas daripada sayur-sayuran dan buah-buahan merangsang peristalsis dan memudahkan penyahtinjaan. Kekurangan pelawas menyebabkan sembelit.` },
  { topik: 'Biologi: Nutrisi', s: `Tabung uji P dan Q masing-masing mengandungi 5 mL larutan kanji. Air liur ditambah ke dalam P, manakala air liur yang telah dididihkan ditambah ke dalam Q. Kedua-duanya diletakkan dalam kukus air 37 °C selama 30 minit, kemudian diuji dengan larutan iodin. Apakah kesimpulannya?`,
    en: `Test tubes P and Q each contain 5 mL of starch solution. Saliva is added to P, and boiled saliva is added to Q. Both are kept in a 37 °C water bath for 30 minutes and then tested with iodine solution. What is the conclusion?`,
    rajah: `<table><tr><th>Tabung uji</th><th>Warna dengan larutan iodin</th></tr><tr><td>P (air liur)</td><td>Kekal perang</td></tr><tr><td>Q (air liur dididihkan)</td><td>Biru tua</td></tr></table>`,
    p: ['Kanji dalam Q telah dicernakan', 'Larutan iodin tidak bertindak balas dengan kanji pada 37 °C', 'Air liur mengandungi kanji', 'Enzim dalam air liur yang dididihkan telah rosak dan tidak dapat mencernakan kanji'], a: 3,
    hurai: `Dalam P, amilase liur mencernakan kanji, jadi iodin kekal perang. Dalam Q kanji masih ada (biru tua) kerana enzim telah rosak akibat pendidihan.` },
  { topik: 'Biologi: Pengangkutan', s: `Seseorang yang mempunyai bilangan platelet yang sangat rendah akan menghadapi masalah…`,
    en: `A person with a very low platelet count will have problems with…`,
    p: ['mengangkut oksigen', 'melawan jangkitan kuman', 'menghentikan pendarahan apabila luka', 'mengangkut makanan tercerna'], a: 2,
    hurai: `Platelet membantu pembekuan darah di tempat luka. Sel darah merah mengangkut oksigen, sel darah putih melawan kuman, dan plasma mengangkut makanan tercerna.` },
  { topik: 'Biologi: Respirasi', s: `Mengapakah bernafas melalui hidung lebih baik daripada bernafas melalui mulut?`,
    en: `Why is breathing through the nose better than breathing through the mouth?`,
    p: ['Udara dalam rongga hidung ditapis oleh bulu hidung dan mukus, serta dilembapkan dan dipanaskan', 'Hidung menambah kandungan oksigen dalam udara', 'Hidung menyingkirkan karbon dioksida daripada udara sedutan', 'Udara bergerak lebih perlahan melalui hidung'], a: 0,
    hurai: `Bulu hidung dan mukus memerangkap habuk dan mikroorganisma. Rongga hidung juga memanaskan dan melembapkan udara sebelum sampai ke peparu.` },
  { topik: 'Biologi: Pembiakan', s: `Selepas persenyawaan berlaku dalam bunga, ovari akan berkembang menjadi…`,
    en: `After fertilisation in a flower, the ovary develops into a…`,
    p: ['biji benih', 'buah', 'butir debunga', 'kelopak'], a: 1,
    hurai: `Ovari berkembang menjadi buah, manakala ovul di dalamnya berkembang menjadi biji benih.` },
  { topik: 'Biologi: Pembiakan', s: `Biji benih kacang hijau disediakan dalam empat tabung uji seperti dalam jadual. Selepas tiga hari, hanya biji benih dalam P bercambah. Perbandingan tabung uji manakah menunjukkan bahawa oksigen diperlukan untuk percambahan?`,
    en: `Mung bean seeds are set up in four test tubes as in the table. After three days, only the seeds in P have germinated. Which pair of test tubes shows that oxygen is needed for germination?`,
    rajah: `<table><tr><th>Tabung uji</th><th>Keadaan</th></tr><tr><td>P</td><td style="text-align:left">Kapas lembap, 30 °C</td></tr><tr><td>Q</td><td style="text-align:left">Kapas kering, 30 °C</td></tr><tr><td>R</td><td style="text-align:left">Tenggelam dalam air didih yang telah disejukkan, dilitupi lapisan minyak, 30 °C</td></tr><tr><td>S</td><td style="text-align:left">Kapas lembap, dalam peti sejuk 4 °C</td></tr></table>`,
    p: ['P dan Q', 'P dan S', 'Q dan R', 'P dan R'], a: 3,
    hurai: `R mempunyai air dan suhu yang sesuai tetapi tiada oksigen (air didih tiada oksigen terlarut dan minyak menghalang udara). Hanya oksigen yang berbeza antara P dan R.` },

  { topik: 'Ekologi: Ekosistem', s: `Semua ikan keli yang hidup di dalam sebuah kolam membentuk satu…`,
    en: `All the catfish living in a pond form a…`,
    p: ['komuniti', 'ekosistem', 'populasi', 'habitat'], a: 2,
    hurai: `Populasi ialah sekumpulan organisma daripada spesies yang sama yang tinggal di habitat yang sama. Komuniti terdiri daripada pelbagai populasi spesies berbeza.` },
  { topik: 'Ekologi: Kitar Nutrien', s: `Dua bekas tertutup diisi dengan daun kering yang sama banyak dan tanah lembap. Tanah dalam bekas P ialah tanah kebun biasa, manakala tanah dalam bekas Q telah dipanaskan dalam ketuhar dan disejukkan. Selepas empat minggu, daun dalam P telah reput tetapi daun dalam Q hampir tidak berubah. Apakah kesimpulannya?`,
    en: `Two closed containers hold equal amounts of dry leaves and moist soil. Container P has ordinary garden soil, while the soil in Q was heated in an oven and cooled. After four weeks, the leaves in P have decayed but those in Q are almost unchanged. What is the conclusion?`,
    p: ['Mikroorganisma dalam tanah menguraikan daun kering', 'Haba mempercepat pereputan daun', 'Daun memerlukan cahaya untuk reput', 'Tanah yang dipanaskan mempunyai lebih banyak nutrien'], a: 0,
    hurai: `Pemanasan membunuh pengurai (bakteria dan kulat) dalam tanah Q, jadi daun tidak reput. Pengurai mengembalikan nutrien daripada bahan mati ke dalam tanah.` },
  { topik: 'Ekologi: Biodiversiti', s: `Harimau Malaya ialah spesies yang terancam. Langkah manakah paling berkesan untuk memuliharanya?`,
    en: `The Malayan tiger is an endangered species. Which step is the most effective to conserve it?`,
    p: ['Membuka lebih banyak tanah hutan untuk pertanian', 'Memelihara harimau sebagai haiwan peliharaan di rumah', 'Mewujudkan dan melindungi kawasan hutan simpan serta menguatkuasakan undang-undang terhadap pemburuan haram', 'Memindahkan semua harimau ke negara lain'], a: 2,
    hurai: `Harimau memerlukan habitat hutan yang luas dan perlindungan daripada pemburu haram. Membuka hutan memusnahkan habitatnya.` },

  { topik: 'Kimia: Jirim', s: `Jadual menunjukkan takat lebur dan takat didih empat bahan. Bahan manakah wujud sebagai cecair pada suhu bilik, 27 °C?`,
    en: `The table shows the melting and boiling points of four substances. Which substance is a liquid at room temperature, 27 °C?`,
    rajah: `<table><tr><th>Bahan</th><th>Takat lebur (°C)</th><th>Takat didih (°C)</th></tr><tr><td>P</td><td>−10</td><td>60</td></tr><tr><td>Q</td><td>40</td><td>200</td></tr><tr><td>R</td><td>−200</td><td>−150</td></tr><tr><td>S</td><td>120</td><td>400</td></tr></table>`,
    p: ['P', 'Q', 'R', 'S'], a: 0,
    hurai: `Bahan ialah cecair jika suhu bilik berada di antara takat lebur dan takat didihnya. Bagi P, −10 °C < 27 °C < 60 °C. Q dan S masih pepejal, manakala R sudah menjadi gas.` },
  { topik: 'Kimia: Jadual Berkala dan Campuran', s: `Seorang pegawai forensik ingin mengetahui sama ada dakwat pada sepucuk surat sama dengan dakwat pen milik seorang suspek. Kaedah manakah paling sesuai?`,
    en: `A forensic officer wants to know whether the ink on a letter is the same as the ink in a suspect's pen. Which method is the most suitable?`,
    p: ['Penurasan', 'Penyulingan', 'Kromatografi kertas', 'Penyejatan'], a: 2,
    hurai: `Kromatografi kertas memisahkan pewarna-pewarna dalam dakwat. Jika corak tompok kedua-dua dakwat sama, dakwat itu mungkin sama.` },
  { topik: 'Kimia: Udara', s: `Minyak dalam sebuah kuali terbakar. Ibu menutup kuali itu dengan kain basah dan api terpadam. Apakah sebab utama api itu terpadam?`,
    en: `Oil in a frying pan catches fire. Mother covers the pan with a damp cloth and the fire goes out. What is the main reason the fire goes out?`,
    p: ['Bekalan oksigen kepada api dihalang', 'Bahan api telah disingkirkan', 'Kain basah menambah bahan api', 'Kain basah membebaskan karbon dioksida'], a: 0,
    hurai: `Pembakaran memerlukan bahan api, oksigen dan haba (segi tiga api). Kain basah menutup kuali dan menghalang oksigen sampai kepada api.` },
  { topik: 'Kimia: Air dan Larutan', s: `Dalam elektrolisis air, 20 cm³ gas hidrogen terkumpul di katod. Berapakah isi padu gas oksigen yang terkumpul di anod dalam masa yang sama?`,
    en: `In the electrolysis of water, 20 cm³ of hydrogen gas collects at the cathode. What volume of oxygen gas collects at the anode in the same time?`,
    p: ['5 cm³', '10 cm³', '20 cm³', '40 cm³'], a: 1,
    hurai: `Air terdiri daripada hidrogen dan oksigen dalam nisbah isi padu 2 : 1. Maka isi padu oksigen = 20 ÷ 2 = 10 cm³.` },
  { topik: 'Kimia: Asid dan Alkali', s: `Antara berikut, yang manakah ciri-ciri larutan asid?`,
    en: `Which of the following are properties of an acidic solution?`,
    p: ['Rasa pahit, licin dan pH lebih daripada 7', 'Rasa masam, pH lebih daripada 7 dan menukar kertas litmus merah menjadi biru', 'Rasa pahit, pH 7 dan tidak mengubah warna litmus', 'Rasa masam, pH kurang daripada 7 dan menukar kertas litmus biru menjadi merah'], a: 3,
    hurai: `Asid berasa masam, mempunyai pH kurang daripada 7 dan menukar litmus biru menjadi merah. Rasa pahit, licin dan pH lebih daripada 7 ialah ciri alkali.` },
  { topik: 'Kimia: Kereaktifan Logam', s: `Logam kalium disimpan di dalam minyak parafin di makmal. Apakah sebabnya?`,
    en: `Potassium metal is stored in paraffin oil in the laboratory. Why?`,
    p: ['Kalium sangat reaktif dan bertindak balas dengan oksigen serta wap air di udara', 'Kalium mudah melebur pada suhu bilik', 'Kalium ialah logam yang sangat berat', 'Kalium akan menjadi radioaktif jika terdedah kepada udara'], a: 0,
    hurai: `Kalium berada di bahagian atas siri kereaktifan. Minyak parafin menghalangnya daripada bersentuhan dengan oksigen dan wap air di udara.` },
  { topik: 'Kimia: Termokimia', s: `Mengapakah respirasi sel dikelaskan sebagai proses eksotermik?`,
    en: `Why is cellular respiration classified as an exothermic process?`,
    p: ['Respirasi menyerap haba daripada persekitaran', 'Respirasi memerlukan cahaya Matahari', 'Respirasi menghasilkan oksigen', 'Respirasi membebaskan tenaga haba ke persekitaran'], a: 3,
    hurai: `Respirasi sel menguraikan glukosa dan membebaskan tenaga, sebahagiannya sebagai haba; inilah yang memanaskan badan kita. Proses yang membebaskan haba ialah eksotermik.` },

  { topik: 'Fizik: Keelektrikan', s: `Rajah menunjukkan tiga mentol yang serupa disambung secara bersiri kepada sebuah bateri. Voltmeter yang disambung merentasi satu mentol menunjukkan bacaan 2 V. Berapakah voltan bateri?`,
    en: `The diagram shows three identical bulbs connected in series to a battery. A voltmeter across one bulb reads 2 V. What is the battery voltage?`,
    rajah: `<svg viewBox="0 0 420 220" style="max-width:420px" role="img" aria-label="Tiga mentol bersiri dengan voltmeter"><g stroke="currentColor" stroke-width="2" fill="none"><path d="M182 40 H40 V180 H106"/><path d="M218 40 H380 V180 H314"/><line x1="182" y1="22" x2="182" y2="58"/><line x1="192" y1="30" x2="192" y2="50" stroke-width="4"/><path d="M192 40 H208"/><line x1="208" y1="22" x2="208" y2="58"/><line x1="218" y1="30" x2="218" y2="50" stroke-width="4"/><circle cx="120" cy="180" r="14"/><path d="M110 170 L130 190 M130 170 L110 190"/><path d="M134 180 H196"/><circle cx="210" cy="180" r="14"/><path d="M200 170 L220 190 M220 170 L200 190"/><path d="M224 180 H286"/><circle cx="300" cy="180" r="14"/><path d="M290 170 L310 190 M310 170 L290 190"/><path d="M170 180 V120 H196"/><path d="M224 120 H250 V180"/><circle cx="210" cy="120" r="14"/></g><g fill="currentColor"><circle cx="170" cy="180" r="3.5"/><circle cx="250" cy="180" r="3.5"/></g><g font-size="14" fill="currentColor" text-anchor="middle"><text x="210" y="125" font-weight="700">V</text><text x="210" y="96">2 V</text></g></svg>`,
    p: ['0.67 V', '2 V', '4 V', '6 V'], a: 3,
    hurai: `Dalam litar bersiri, voltan bateri dibahagikan antara komponen. Tiga mentol serupa mendapat 2 V setiap satu, jadi voltan bateri = 3 × 2 = 6 V.` },
  { topik: 'Fizik: Kemagnetan', s: `Sebuah kompas diletakkan di bawah seutas dawai lurus. Apabila arus elektrik dialirkan melalui dawai itu, jarum kompas terpesong. Apakah yang ditunjukkan oleh pemerhatian ini?`,
    en: `A compass is placed under a straight wire. When an electric current flows through the wire, the compass needle is deflected. What does this show?`,
    p: ['Dawai itu diperbuat daripada bahan magnet', 'Arus elektrik menghasilkan medan magnet di sekeliling dawai', 'Kompas menghasilkan arus elektrik', 'Graviti bertambah apabila arus mengalir'], a: 1,
    hurai: `Arus elektrik yang mengalir dalam konduktor menghasilkan medan magnet di sekelilingnya. Medan ini memesongkan jarum kompas; inilah prinsip elektromagnet.` },
  { topik: 'Fizik: Daya dan Gerakan', s: `Jadual menunjukkan panjang sebuah spring apabila beban yang berlainan digantung padanya. Jika had kenyal tidak dilampaui, berapakah panjang spring apabila beban 5 N digantung?`,
    en: `The table shows the length of a spring when different loads hang from it. If the elastic limit is not exceeded, what is the length of the spring with a 5 N load?`,
    rajah: `<table><tr><th>Beban (N)</th><td>0</td><td>1</td><td>2</td><td>3</td></tr><tr><th>Panjang spring (cm)</th><td>10</td><td>12</td><td>14</td><td>16</td></tr></table>`,
    p: ['10 cm', '18 cm', '20 cm', '25 cm'], a: 2,
    hurai: `Setiap 1 N memanjangkan spring sebanyak 2 cm. Pemanjangan untuk 5 N = 10 cm, jadi panjang spring = 10 + 10 = 20 cm. Jawapan 10 cm hanyalah pemanjangan.` },
  { topik: 'Fizik: Haba', s: `Dinding dalam kelalang termos dilapisi perak yang berkilat. Apakah fungsinya?`,
    en: `The inner walls of a vacuum flask are coated with shiny silver. What is their function?`,
    p: ['Mengurangkan kehilangan haba melalui pengaliran', 'Memantulkan sinaran haba supaya haba tidak hilang', 'Mengurangkan kehilangan haba melalui perolakan', 'Menambah haba kepada minuman'], a: 1,
    hurai: `Permukaan berkilat ialah pemantul sinaran haba yang baik, jadi haba dipantulkan kembali ke dalam minuman. Ruang vakum pula mengurangkan pengaliran dan perolakan.` },
  { topik: 'Fizik: Cahaya', s: `Cahaya merah dan cahaya hijau disinari bertindih pada sebuah skrin putih. Apakah warna yang dilihat pada kawasan bertindih?`,
    en: `Red light and green light overlap on a white screen. What colour is seen where they overlap?`,
    p: ['Kuning', 'Sian', 'Magenta', 'Putih'], a: 0,
    hurai: `Penambahan warna primer cahaya: merah + hijau = kuning. Hijau + biru = sian, merah + biru = magenta, dan ketiga-tiganya = putih.` },
  { topik: 'Fizik: Bunyi', s: `Kelawar dapat terbang dan menangkap serangga dalam gelap. Apakah yang membolehkannya berbuat demikian?`,
    en: `Bats can fly and catch insects in the dark. What allows them to do this?`,
    p: ['Kelawar menghasilkan cahaya dari badannya', 'Kelawar mengesan haba badan serangga dengan matanya', 'Kelawar mendengar bunyi infrasonik daripada serangga', 'Kelawar menghasilkan bunyi ultrasonik dan mengesan gemanya'], a: 3,
    hurai: `Kelawar mengeluarkan bunyi ultrasonik dan mendengar gema yang dipantulkan oleh objek. Masa dan arah gema memberitahu kedudukan mangsa atau halangan.` },
  { topik: 'Fizik: Tenaga dan Kuasa', s: `Sebuah penyaman udara 1.5 kW digunakan selama 8 jam sehari. Jika tarif elektrik ialah 50 sen per kWj, berapakah kos penggunaannya selama 30 hari?`,
    en: `A 1.5 kW air conditioner is used for 8 hours a day. If the electricity tariff is 50 sen per kWh, what is the cost of using it for 30 days?`,
    p: ['RM6', 'RM60', 'RM180', 'RM360'], a: 2,
    hurai: `Tenaga = 1.5 kW × 8 j × 30 = 360 kWj. Kos = 360 × RM0.50 = RM180. RM6 ialah kos sehari sahaja dan RM360 terlupa didarab dengan 50 sen.` },
  { topik: 'Fizik: Keradioaktifan', s: `Pekerja di jabatan radiologi sebuah hospital memakai lencana filem. Apakah fungsinya?`,
    en: `Workers in a hospital radiology department wear film badges. What is their function?`,
    p: ['Melindungi badan daripada sinaran', 'Mengesan dan merekod dos sinaran yang diterima oleh pekerja', 'Menghasilkan sinaran untuk rawatan', 'Menunjukkan nama dan jawatan pekerja'], a: 1,
    hurai: `Lencana filem mengandungi filem yang menjadi gelap apabila terdedah kepada sinaran. Ia merekod jumlah dos sinaran pekerja tetapi tidak melindunginya.` },

  { topik: 'Bumi & Angkasa: Cuaca Angkasa', s: `Tompok matahari kelihatan lebih gelap daripada kawasan sekelilingnya pada fotosfera. Apakah sebabnya?`,
    en: `Sunspots look darker than the area around them on the photosphere. Why?`,
    p: ['Tompok matahari ialah lubang pada permukaan Matahari', 'Suhu tompok matahari lebih rendah daripada kawasan sekelilingnya', 'Tompok matahari ialah bayang-bayang planet', 'Tompok matahari dilitupi awan'], a: 1,
    hurai: `Tompok matahari ialah kawasan dengan medan magnet yang kuat dan suhunya lebih rendah daripada fotosfera di sekelilingnya. Oleh itu kawasan ini memancarkan kurang cahaya dan kelihatan gelap.` },
  { topik: 'Bumi & Angkasa: Bintang dan Galaksi', s: `Sistem Suria kita terletak di dalam galaksi…`,
    en: `Our Solar System is located in the galaxy called…`,
    p: ['Andromeda', 'Magellan Besar', 'Triangulum', 'Bima Sakti'], a: 3,
    hurai: `Sistem Suria berada di salah satu lengan galaksi lingkaran Bima Sakti. Andromeda ialah galaksi jiran yang besar.` },
  { topik: 'Bumi & Angkasa: Penerokaan Angkasa', s: `Roket boleh terus memecut di angkasa lepas walaupun tiada udara di sekelilingnya. Apakah sebabnya?`,
    en: `A rocket can keep accelerating in space even though there is no air around it. Why?`,
    p: ['Graviti tidak wujud di angkasa lepas', 'Roket menolak gas ekzos ke belakang dan gas itu menolak roket ke hadapan dengan daya yang sama besar', 'Roket ditarik oleh Bulan', 'Udara di dalam roket menolak dinding roket'], a: 1,
    hurai: `Roket menolak gas ekzos keluar ke belakang (tindakan), dan gas itu menolak roket ke hadapan (tindak balas). Prinsip ini tidak memerlukan udara di luar roket.` },
  ] });

UKKM_PART(5, {
  id: 'eng', nama: 'Bahasa Inggeris', ikon: '📖', minit: 30, jenis: 'objektif',
  arahan: 'Read each text carefully and answer the questions that follow. Choose the best answer (A, B, C or D).',
  petikan: [
    { id: 'P1', tajuk: 'Email: Project Deadline', teks: `
<p><b>From:</b> Cikgu Wong Mei Fen<br><b>To:</b> Group leaders, 3 Bestari<br><b>Date:</b> Wednesday, 12 August<br><b>Subject:</b> RE: Request to extend river project deadline</p>
<p>Dear group leaders,</p>
<p>Thank you for your email. I understand that the heavy rain last weekend made it unsafe to collect water samples at Sungai Pinang, and I agree that your safety comes first.</p>
<p>The deadline for the written report is extended from 15 August to <b>22 August</b>. However, the presentation date (26 August) stays the same, as the hall has already been booked.</p>
<p>Please collect your samples this Saturday if the water level has gone down. If it has not, use last year’s class data, which I have uploaded to Google Classroom, and state this clearly in your report.</p>
<p>Regards,<br>Cikgu Wong</p>` },
    { id: 'P2', tajuk: 'Brochure: Become a Junior Ranger at Royal Belum', teks: `
<p>Royal Belum State Park in northern Perak is one of the oldest rainforests in the world. It is home to all ten species of hornbill found in Malaysia, as well as tigers, elephants and the giant <i>Rafflesia</i> flower.</p>
<p>Our three-day <b>Junior Ranger Programme</b> gives students aged 14 to 17 the chance to work alongside real park rangers. Participants will:</p>
<ul>
<li>learn to identify animal tracks and record them in a field notebook</li>
<li>help set up camera traps to monitor wildlife</li>
<li>join a boat patrol on Temenggor Lake</li>
</ul>
<p>This is not a holiday. Days start at 6.30 a.m., and participants sleep in basic shared cabins without air-conditioning. Mobile signal is weak in most parts of the park. However, many past participants have told the rangers that the experience changed the way they see the forest.</p>
<p>Places are offered to school groups first. Each group must be accompanied by at least one teacher for every eight students.</p>
<p><b>Fee:</b> RM350 per student (meals, boat transport and equipment included). Applications close on 30 April.</p>` },
    { id: 'P3', tajuk: 'Article: Tiny Plastics, Big Questions', teks: `
<p>When a plastic bottle is thrown into a river, it does not simply disappear. Sunlight, heat and the movement of water slowly break it into smaller and smaller pieces. Pieces smaller than 5 millimetres are called <i>microplastics</i>, and scientists are now finding them almost everywhere: in rivers, on beaches, in fish, and even in table salt.</p>
<p>Microplastics come from two main sources. Some are made at this size on purpose, such as the tiny beads that were once added to face scrubs. Most, however, come from larger items breaking down, including bags, bottles and fishing nets. Synthetic clothes are another surprising source. Every time a polyester shirt is washed, thousands of fibres are released into the waste water, and many of them pass straight through treatment plants.</p>
<p>Researchers at several Malaysian universities have tested water from rivers such as the Klang and the Langat. They found microplastics in every sample, with the highest numbers near towns and industrial areas.</p>
<p>What do microplastics do to living things? This question is harder to answer. Fish and shellfish that swallow them may eat less real food, and the particles can carry harmful chemicals. Their effect on human health is still uncertain, and scientists warn against drawing conclusions too quickly.</p>
<p>What is clear is that preventing plastic from entering rivers is far easier than removing it later. Using fewer single-use plastics, throwing away rubbish properly and choosing natural fabrics where possible are small steps that everyone can take.</p>` }
  ],
  soalan: [
    { petikan: 'P1', topik: 'Main idea / purpose', s: 'What is the main purpose of Cikgu Wong’s email?',
      p: ['To cancel the river project because of the floods', 'To reply to a request and explain the new arrangements', 'To invite parents to the presentation in the school hall', 'To warn students that late reports will not be marked'], a: 1,
      hurai: `The subject is "RE: Request to extend river project deadline", and she explains that the report deadline "is extended" and what to do about the samples.` },
    { petikan: 'P1', topik: 'Specific detail', s: 'What is the new deadline for the written report?',
      p: ['12 August', '15 August', '22 August', '26 August'], a: 2,
      hurai: `"The deadline for the written report is extended from 15 August to 22 August." 26 August is the presentation date, which "stays the same".` },
    { petikan: 'P1', topik: 'Vocabulary in context', s: 'In “I agree that your safety <b>comes first</b>”, the phrase <b>comes first</b> means',
      p: ['is the most important thing', 'is the first item on the list of tasks', 'arrives earlier than anything else', 'wins first place in a competition'], a: 0,
      hurai: `Cikgu Wong accepts that collecting samples during floods was "unsafe", so she is saying that safety matters more than the deadline. The phrase is not about order of arrival or ranking.` },
    { petikan: 'P1', topik: 'Reference', s: 'In “If <b>it</b> has not, use last year’s class data”, <b>it</b> refers to',
      p: ['the hall', 'the written report', 'the river project', 'the water level'], a: 3,
      hurai: `The sentence before says, "collect your samples this Saturday if the water level has gone down. If it has not ..." So "it" is the water level.` },
    { petikan: 'P1', topik: 'Inference', s: 'What can we infer about the email that the group leaders sent earlier?',
      p: ['They asked for more time as they could not collect samples safely.', 'They asked Cikgu Wong to move the presentation to another hall.', 'They asked to use last year’s data instead of collecting new samples.', 'They complained that the river project was too difficult for Form 3.'], a: 0,
      hurai: `The subject line repeats their "Request to extend river project deadline", and Cikgu Wong mentions that the rain "made it unsafe to collect water samples". Using last year’s data was her idea.` },

    { petikan: 'P2', topik: 'Main idea / purpose', s: 'The brochure is mainly written to',
      p: ['describe the animals that live in Royal Belum', 'warn visitors about the weak mobile signal in the park', 'promote a tough programme for students in the park', 'recruit adults to work full-time as park rangers'], a: 2,
      hurai: `Most of the brochure describes the "Junior Ranger Programme" for "students aged 14 to 17": its activities, conditions, rules and fee. The animals and mobile signal are supporting details.` },
    { petikan: 'P2', topik: 'Specific detail', s: 'Which of these is one of the activities in the programme?',
      p: ['Planting Rafflesia flowers along the lake', 'Helping to set up cameras that record wildlife', 'Feeding the elephants near the cabins', 'Catching hornbills to put rings on their legs'], a: 1,
      hurai: `Participants will "help set up camera traps to monitor wildlife". The animals are mentioned only as residents of the park.` },
    { petikan: 'P2', topik: 'Vocabulary in context', s: 'In “participants sleep in <b>basic</b> shared cabins”, the word <b>basic</b> means',
      p: ['simple, with only what is necessary', 'the most important', 'suitable for beginners', 'found at the bottom of something'], a: 0,
      hurai: `The cabins are "without air-conditioning", and the paragraph begins "This is not a holiday", so "basic" means plain and simple, without extra comforts.` },
    { petikan: 'P2', topik: 'Reference', s: 'In “the experience changed the way <b>they</b> see the forest”, <b>they</b> refers to',
      p: ['the park rangers', 'the hornbills and tigers', 'the teachers who accompany each group', 'the past participants'], a: 3,
      hurai: `"Many past participants have told the rangers that the experience changed the way they see the forest." The rangers are the people who were told; the experience belongs to the participants.` },
    { petikan: 'P2', topik: 'Inference', s: 'A school wants to send 20 students to the programme. What is the smallest number of teachers that must go with them?',
      p: ['1', '2', '3', '4'], a: 2,
      hurai: `There must be "at least one teacher for every eight students". Two teachers can cover only 16 students, so 20 students need 3 teachers.` },

    { petikan: 'P3', topik: 'Main idea / purpose', s: 'What is the article mainly about?',
      p: ['How Malaysian universities test water samples from the Klang River', 'Why polyester clothes should no longer be made', 'How plastic bottles are recycled into new products', 'What microplastics are, their sources and why they matter'], a: 3,
      hurai: `The article defines microplastics, describes "two main sources", reports findings in rivers, discusses their effects, and suggests how to prevent them. The university tests are only one paragraph.` },
    { petikan: 'P3', topik: 'Specific detail', s: 'According to the article, where were the highest numbers of microplastics found in the Klang and Langat rivers?',
      p: ['Near the sea, where the rivers end', 'Near towns and industrial areas', 'In the upper parts, near forests', 'Close to fish farms and fishing boats'], a: 1,
      hurai: `"They found microplastics in every sample, with the highest numbers near towns and industrial areas."` },
    { petikan: 'P3', topik: 'Vocabulary in context', s: 'In “scientists warn against <b>drawing</b> conclusions too quickly”, the word <b>drawing</b> means',
      p: ['making a picture with a pencil', 'pulling something out slowly', 'reaching a decision about something', 'attracting the attention of people'], a: 2,
      hurai: `Scientists do not yet know the effect on human health ("still uncertain"), so they warn against deciding too soon. To "draw a conclusion" is to reach a judgement.` },
    { petikan: 'P3', topik: 'Reference', s: 'In “many of <b>them</b> pass straight through treatment plants”, <b>them</b> refers to',
      p: ['the fibres from the shirts', 'the polyester shirts', 'the tiny beads in face scrubs', 'the larger plastic items'], a: 0,
      hurai: `"Thousands of fibres are released into the waste water, and many of them pass straight through treatment plants." Shirts stay in the washing machine; only the fibres travel with the water.` },
    { petikan: 'P3', topik: 'Inference / attitude', s: 'What is the writer’s attitude towards the effect of microplastics on human health?',
      p: ['Certain that they cause serious diseases', 'Cautious, as the evidence is still unclear', 'Sure that they are harmless to people', 'Uninterested, since only fish swallow them'], a: 1,
      hurai: `The writer says their effect on human health "is still uncertain" and agrees with scientists who "warn against drawing conclusions too quickly".` }
  ]
});

// UKKM Set 05 — Ujian Keperibadian (Ya/Tidak), 100 item. Item terbalik bukan-kejujuran: 28.
UKKM_PART(5, {
  id: 'per', nama: 'Ujian Keperibadian', ikon: '🧭', minit: 30,
  arahan: "Baca setiap pernyataan dan pilih <b>Ya</b> atau <b>Tidak</b> mengikut diri anda yang sebenar. Jawab dengan jujur, logik dan konsisten; beberapa idea diulang dengan ayat berbeza. Bagi situasi asrama yang belum anda alami, jawab mengikut tindakan yang paling mungkin anda lakukan. Masa: kira-kira 18 saat bagi setiap item.",
  skala: ["Ya","Tidak"],
  item: [
    { s: "Saya menyiapkan kerja kursus dengan teliti walaupun markahnya kecil.", trait: "Integriti & Disiplin Diri", pos: 0, hurai: "Melakukan kerja dengan ikhlas menunjukkan disiplin dan integriti." },
    { id: 'ma2', pasangan: 'ma1', s: "Saya hanya mahu makan makanan yang dimasak oleh keluarga saya.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 1, hurai: "Terlalu memilih makanan menyukarkan kehidupan asrama." },
    { s: "Saya bertanya khabar rakan yang tidak hadir ke kelas kerana sakit.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 0, hurai: "Mengambil berat mengeratkan persahabatan." },
    { s: "Saya bangun sendiri apabila jam loceng berbunyi tanpa perlu dikejutkan.", trait: "Integriti & Disiplin Diri", pos: 0, hurai: "Bangun sendiri menunjukkan disiplin dan kemandirian." },
    { s: "Saya percaya setiap masalah mempunyai jalan penyelesaian.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Keyakinan ini menguatkan daya tahan." },
    { id: 'ba1', pasangan: 'ba2', s: "Saya mudah memulakan perbualan dengan rakan baharu.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 0, hurai: "Kemahiran bergaul memudahkan penyesuaian di MRSM." },
    { id: 'ea2', pasangan: 'ea1', s: "Saya berasa marah berjam-jam selepas kalah dalam permainan bersama rakan.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 1, hurai: "Marah berpanjangan selepas kalah menunjukkan emosi yang kurang stabil." },
    { s: "Saya tidak pernah membuat kesilapan dalam kerja sekolah saya.", trait: "Skala Kejujuran", pos: 1, hurai: "Kesilapan ialah sebahagian daripada belajar; menafikannya kelihatan tidak jujur." },
    { s: "Saya menyalahkan rakan sepasukan secara terbuka apabila pasukan kalah.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 1, hurai: "Menyalahkan rakan secara terbuka merosakkan semangat pasukan." },
    { s: "Saya menetapkan matlamat yang jelas sebelum kumpulan saya memulakan projek.", trait: "Kepimpinan & Inisiatif", pos: 0, hurai: "Matlamat yang jelas memandu pasukan ke arah kejayaan." },
    { s: "Saya menggunakan nama rakan untuk mendaftar aktiviti apabila tempat untuk saya sudah penuh.", trait: "Integriti & Disiplin Diri", pos: 1, hurai: "Menyamar sebagai orang lain ialah perbuatan tidak jujur." },
    { s: "Saya rasa urusan kebersihan dorm ialah tugas pekerja pembersihan semata-mata.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 1, hurai: "Pelajar asrama bertanggungjawab menjaga kebersihan dorm." },
    { s: "Saya sanggup mengetuai kumpulan walaupun ahlinya bukan kawan rapat saya.", trait: "Kepimpinan & Inisiatif", pos: 0, hurai: "Pemimpin yang baik boleh bekerja dengan sesiapa sahaja." },
    { s: "Saya menyusun buku mengikut jadual waktu setiap malam.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Persediaan sendiri menunjukkan kemandirian." },
    { id: 'eb1', pasangan: 'eb2', s: "Saya terus bersemangat walaupun terpaksa mengulang eksperimen beberapa kali.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Kegigihan dalam eksperimen menunjukkan ketahanan diri." },
    { id: 'sb2', pasangan: 'sb1', s: "Saya membuat latihan sekadar cukup syarat supaya guru berpuas hati.", trait: "Minat Ilmu, Sains & Motivasi", pos: 1, hurai: "Usaha minimum menunjukkan motivasi yang rendah." },
    { s: "Saya memerhatikan tumbuhan atau haiwan di sekeliling saya dengan teliti.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Pemerhatian ialah kemahiran asas sains." },
    { s: "Saya membantu rakan sepasukan yang cedera keluar dari padang.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 0, hurai: "Menjaga rakan sepasukan ialah semangat berpasukan." },
    { s: "Saya boleh menyesuaikan diri dengan jadual asrama yang bermula awal pagi.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Penyesuaian dengan rutin MRSM penting." },
    { s: "Saya membawa pulang pakaian yang tidak diperlukan supaya loker tidak sesak.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Mengurus ruang terhad menunjukkan kemandirian." },
    { s: "Saya menghormati rakan sebilik yang perlu tidur awal dengan memperlahankan suara.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 0, hurai: "Mempertimbangkan keperluan orang lain menjaga keharmonian." },
    { id: 'ka2', pasangan: 'ka1', s: "Jika keputusan saya sebagai ketua mendatangkan masalah, saya mengatakan bahawa ahli lain yang mencadangkannya.", trait: "Kepimpinan & Inisiatif", pos: 1, hurai: "Menolak kesalahan kepada orang lain merosakkan kepercayaan terhadap pemimpin." },
    { s: "Saya suka berkongsi idea inovasi dengan guru atau rakan.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Berkongsi idea menunjukkan minat inovasi." },
    { s: "Ada kalanya saya mahu berehat walaupun kerja belum siap.", trait: "Skala Kejujuran", pos: 0, hurai: "Perasaan ini biasa; mengakuinya ialah jawapan jujur." },
    { s: "Saya berasa cukup dengan markah lulus dalam Matematik.", trait: "Minat Ilmu, Sains & Motivasi", pos: 1, hurai: "Sasaran rendah menunjukkan motivasi yang rendah." },
    { s: "Jika kehilangan barang, saya tahu saluran yang betul untuk melaporkannya.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Mengetahui prosedur yang betul menunjukkan kemandirian." },
    { s: "Saya menyatakan dengan jujur bahagian kerja yang saya lakukan dalam projek kumpulan.", trait: "Integriti & Disiplin Diri", pos: 0, hurai: "Jujur tentang sumbangan sendiri menunjukkan integriti." },
    { s: "Saya meluahkan kemarahan terhadap guru di media sosial.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 1, hurai: "Meluahkan marah di media sosial menunjukkan kawalan emosi yang lemah." },
    { s: "Saya mempunyai cara tersendiri untuk menenangkan diri seperti membaca atau berjalan.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Strategi menenangkan diri membantu kestabilan emosi." },
    { id: 'sa2', pasangan: 'sa1', s: "Saya rasa kisah penemuan sains yang mengubah kehidupan manusia itu membosankan.", trait: "Minat Ilmu, Sains & Motivasi", pos: 1, hurai: "Hilang minat terhadap perkembangan sains mengurangkan rasa ingin tahu." },
    { s: "Saya mengehadkan penggunaan media sosial semasa minggu peperiksaan.", trait: "Integriti & Disiplin Diri", pos: 0, hurai: "Mengawal gangguan menunjukkan disiplin diri." },
    { s: "Saya mengagihkan makanan secara adil semasa jamuan kelas.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 0, hurai: "Keadilan dalam perkara kecil menjaga hubungan baik." },
    { s: "Saya menyimpan wang kecemasan dan hanya menggunakannya untuk keperluan sebenar.", trait: "Integriti & Disiplin Diri", pos: 0, hurai: "Disiplin kewangan membantu ketika hidup jauh dari keluarga." },
    { s: "Saya menyemak kesilapan dalam ujian untuk memperbaiki prestasi.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Refleksi selepas ujian menunjukkan kesungguhan." },
    { s: "Saya mudah mengubah keputusan kumpulan semata-mata untuk menyenangkan hati kawan rapat.", trait: "Kepimpinan & Inisiatif", pos: 1, hurai: "Keputusan pemimpin perlu adil, tidak berat sebelah kepada kawan rapat." },
    { s: "Saya suka mencuba aplikasi pembelajaran sains atau matematik.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Menggunakan teknologi untuk belajar menunjukkan minat." },
    { s: "Saya suka menjadi pusat perhatian sehingga rakan lain sukar mendapat giliran bercakap.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 1, hurai: "Memonopoli perbualan meminggirkan orang lain." },
    { s: "Saya sering terlewat ke dewan selera kerana leka di dorm.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 1, hurai: "Pengurusan masa yang lemah menjejaskan rutin asrama." },
    { s: "Saya pernah bermain telefon secara senyap ketika sepatutnya belajar.", trait: "Skala Kejujuran", pos: 0, hurai: "Mengakui kelemahan biasa menunjukkan kejujuran." },
    { id: 'ib2', pasangan: 'ib1', s: "Jika saya terjumpa kalkulator yang tertinggal di dewan, saya menyimpannya untuk diri sendiri.", trait: "Integriti & Disiplin Diri", pos: 1, hurai: "Menyimpan barang orang lain ialah ketidakjujuran." },
    { id: 'mb2', pasangan: 'mb1', s: "Saya selalu kehilangan barang peribadi kerana meletakkannya di merata-rata tempat.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 1, hurai: "Kecuaian menjaga barang menyukarkan hidup berasrama." },
    { s: "Apabila ada tugasan baharu dalam kelab, saya menunggu sehingga nama saya dipanggil.", trait: "Kepimpinan & Inisiatif", pos: 1, hurai: "Calon berinisiatif menawarkan diri tanpa perlu dipanggil." },
    { s: "Saya mengambil inisiatif menubuhkan kumpulan belajar bersama rakan sedorm.", trait: "Kepimpinan & Inisiatif", pos: 0, hurai: "Memulakan sesuatu yang bermanfaat menunjukkan inisiatif yang tinggi." },
    { s: "Saya tidak pernah mengeluh walaupun dalam keadaan yang sangat sukar.", trait: "Skala Kejujuran", pos: 1, hurai: "Mengeluh sekali-sekala ialah reaksi normal; menafikannya kelihatan tidak jujur." },
    { s: "Saya mengantuk dan hilang minat setiap kali kelas sains bermula.", trait: "Minat Ilmu, Sains & Motivasi", pos: 1, hurai: "Hilang minat dalam kelas sains kurang sesuai bagi calon MRSM." },
    { id: 'ia2', pasangan: 'ia1', s: "Saya turut berbual dan bergurau sepanjang waktu prep apabila warden tiada.", trait: "Integriti & Disiplin Diri", pos: 1, hurai: "Membazir masa prep menunjukkan kawalan diri yang lemah." },
    { s: "Saya menyemak kemajuan setiap ahli kumpulan setiap minggu.", trait: "Kepimpinan & Inisiatif", pos: 0, hurai: "Pemantauan berkala membantu pemimpin mengesan masalah awal." },
    { s: "Saya membersihkan bilik air mengikut giliran tanpa perlu disuruh.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Tanggungjawab bersama menunjukkan kesediaan hidup berasrama." },
    { s: "Saya mengetahui cara menggunakan seterika dengan selamat.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Kemahiran asas ini penting di asrama." },
    { s: "Saya tenang ketika menghadapi temu duga atau penilaian lisan.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Ketenangan membantu menunjukkan kebolehan sebenar." },
    { s: "Emosi saya mudah berubah-ubah sehingga rakan sukar mendekati saya.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 1, hurai: "Emosi yang tidak menentu menjejaskan hubungan." },
    { s: "Saya sentiasa mengemas bilik saya setiap hari tanpa pernah terlepas.", trait: "Skala Kejujuran", pos: 1, hurai: "Hampir semua orang pernah terlepas mengemas; jawapan jujur lebih dipercayai." },
    { s: "Saya suka memikirkan penyelesaian kepada masalah alam sekitar.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Minat terhadap isu sains semasa menunjukkan keprihatinan." },
    { s: "Saya membuat keputusan untuk kumpulan secara senyap dan memaklumkannya kemudian.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 1, hurai: "Keputusan kumpulan perlu dibincangkan bersama ahli." },
    { s: "Saya mengawal emosi apabila terdengar orang bercakap buruk tentang saya.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Kawalan emosi mengelakkan konflik." },
    { s: "Saya sanggup menjadi fasilitator untuk kumpulan pelajar junior dalam program motivasi.", trait: "Kepimpinan & Inisiatif", pos: 0, hurai: "Membimbing orang lain mengasah kemahiran kepimpinan." },
    { s: "Saya berasa ingin menyerah apabila jadual harian terlalu padat.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 1, hurai: "Daya tahan diperlukan untuk menghadapi jadual MRSM." },
    { s: "Saya bersedia menerima tugasan yang mencabar walaupun berisiko gagal.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Keberanian menghadapi cabaran menunjukkan ketahanan." },
    { s: "Saya tidak pernah berasa iri hati terhadap barang milik orang lain.", trait: "Skala Kejujuran", pos: 1, hurai: "Rasa iri sekali-sekala ialah perkara biasa; mengakuinya menunjukkan kejujuran." },
    { s: "Saya boleh bekerjasama dengan pelajar yang pernah bertelagah dengan saya.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 0, hurai: "Mengetepikan perselisihan demi tugas menunjukkan kematangan." },
    { s: "Saya berminat menyertai program sains di universiti atau pusat sains.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Minat terhadap program sains menunjukkan motivasi." },
    { s: "Saya menyiapkan diri untuk perhimpunan pagi tanpa bergegas.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Pengurusan masa menunjukkan kesediaan hidup berasrama." },
    { s: "Saya menamatkan panggilan dengan keluarga dalam masa yang dibenarkan oleh asrama.", trait: "Integriti & Disiplin Diri", pos: 0, hurai: "Mematuhi giliran menunjukkan disiplin dan keadilan." },
    { id: 'ea1', pasangan: 'ea2', s: "Saya boleh menerima kekalahan dalam perlawanan persahabatan dengan senyuman.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Menerima kekalahan dengan baik menunjukkan kematangan emosi." },
    { s: "Saya berani mencuba kaedah baharu untuk menyelesaikan masalah kumpulan.", trait: "Kepimpinan & Inisiatif", pos: 0, hurai: "Keberanian mencuba idea baharu ialah ciri pemimpin yang berinisiatif." },
    { id: 'ma1', pasangan: 'ma2', s: "Saya boleh menyesuaikan diri dengan makanan yang berbeza daripada masakan di rumah.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Kebolehsuaian dengan makanan asrama memudahkan hidup berasrama." },
    { id: 'sb1', pasangan: 'sb2', s: "Saya menyiapkan latihan tambahan supaya lebih bersedia untuk peperiksaan.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Usaha tambahan menunjukkan motivasi." },
    { s: "Saya meminta keluarga menghantar makanan setiap minggu kerana saya bosan dengan menu asrama.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 1, hurai: "Bergantung pada kiriman keluarga menyukarkan penyesuaian." },
    { s: "Saya rasa lega apabila guru memilih orang lain sebagai ketua kerana saya mahu mengelak kerja tambahan.", trait: "Kepimpinan & Inisiatif", pos: 1, hurai: "Mengelak tanggungjawab menunjukkan semangat kepimpinan yang rendah." },
    { s: "Saya berasa seronok apabila dapat menerangkan konsep sains kepada rakan.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Menerangkan kepada orang lain mengukuhkan kefahaman." },
    { s: "Saya menetapkan cita-cita kerjaya dan mengetahui subjek yang perlu dikuasai.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Matlamat kerjaya yang jelas meningkatkan motivasi." },
    { s: "Saya mengaku jika saya belum membaca buku yang perlu diulas di kelas.", trait: "Integriti & Disiplin Diri", pos: 0, hurai: "Mengaku dengan jujur lebih baik daripada berpura-pura." },
    { s: "Saya sentiasa mengikut nasihat ibu bapa tanpa sekali pun membantah.", trait: "Skala Kejujuran", pos: 1, hurai: "Hampir setiap remaja pernah membantah; jawapan jujur lebih realistik." },
    { s: "Bagi saya, menghafal formula sudah memadai walaupun maksudnya kabur.", trait: "Minat Ilmu, Sains & Motivasi", pos: 1, hurai: "Kefahaman formula penting untuk menyelesaikan masalah baharu." },
    { s: "Saya bersedia mendengar masalah rakan walaupun saya sibuk.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 0, hurai: "Meluangkan masa untuk rakan menunjukkan empati." },
    { s: "Saya menyimpan wang di tempat yang selamat dan mengira baki secara berkala.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Mengurus wang dengan teliti menunjukkan kemandirian." },
    { s: "Saya boleh menangguhkan keinginan untuk bersuka ria demi persediaan peperiksaan.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Kawalan diri menunjukkan kematangan emosi." },
    { s: "Saya berpura-pura sakit supaya terlepas daripada latihan rumah sukan.", trait: "Integriti & Disiplin Diri", pos: 1, hurai: "Berpura-pura sakit ialah penipuan yang menjejaskan kepercayaan." },
    { s: "Saya cepat berasa kecil hati dengan gurauan rakan.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 1, hurai: "Terlalu mudah berkecil hati menyukarkan pergaulan di asrama." },
    { s: "Saya membawa pakaian yang sesuai mengikut jadual aktiviti seminggu.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Merancang keperluan sendiri menunjukkan kemandirian." },
    { id: 'ka1', pasangan: 'ka2', s: "Saya sanggup menanggung akibat apabila keputusan yang saya buat sebagai ketua ternyata salah.", trait: "Kepimpinan & Inisiatif", pos: 0, hurai: "Pemimpin bertanggungjawab atas keputusannya, baik atau buruk." },
    { s: "Saya menikmati proses belajar, bukan hanya keputusannya.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Motivasi dalaman lebih kekal." },
    { s: "Saya mengambil iktibar daripada kesilapan tanpa menyalahkan diri secara berlebihan.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Belajar daripada kesilapan secara seimbang menunjukkan emosi yang sihat." },
    { s: "Saya boleh menenangkan diri apabila rindu akan rumah pada waktu malam.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Mengurus rasa rindu penting dalam kehidupan asrama." },
    { s: "Saya memuji usaha rakan walaupun hasilnya belum sempurna.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 0, hurai: "Pujian ikhlas memotivasikan rakan." },
    { s: "Apabila majlis kelas hampir bermula dan pembesar suara rosak, saya segera mencari jalan penyelesaian.", trait: "Kepimpinan & Inisiatif", pos: 0, hurai: "Pemimpin bertindak pantas apabila berlaku masalah di saat akhir." },
    { s: "Saya mengucapkan terima kasih kepada semua ahli selepas sesuatu program selesai.", trait: "Kepimpinan & Inisiatif", pos: 0, hurai: "Menghargai pasukan ialah amalan pemimpin yang baik." },
    { s: "Saya pernah berpura-pura faham walaupun sebenarnya keliru.", trait: "Skala Kejujuran", pos: 0, hurai: "Mengakui kelemahan biasa menunjukkan kejujuran." },
    { s: "Saya mengajar rakan cara menggunakan perisian yang saya kuasai.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 0, hurai: "Berkongsi kemahiran menguatkan kumpulan." },
    { s: "Saya mampu tersenyum walaupun penat selepas hari yang panjang.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Ketahanan diri membantu kekal positif." },
    { s: "Saya mengikut keputusan majoriti walaupun saya lebih suka pilihan lain.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 0, hurai: "Menghormati keputusan majoriti menjaga kesepakatan." },
    { id: 'sa1', pasangan: 'sa2', s: "Saya ingin tahu bagaimana penemuan sains mengubah kehidupan manusia.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Sifat ingin tahu ini menunjukkan minat ilmu." },
    { s: "Saya mengikut peraturan menyimpan makanan di bilik asrama.", trait: "Integriti & Disiplin Diri", pos: 0, hurai: "Mematuhi peraturan asrama menjaga kebersihan dan keselamatan." },
    { id: 'ia1', pasangan: 'ia2', s: "Saya membuat ulang kaji pada waktu prep walaupun rakan-rakan lain berbual.", trait: "Integriti & Disiplin Diri", pos: 0, hurai: "Kekal fokus walaupun ada gangguan menunjukkan disiplin diri." },
    { s: "Saya boleh tidur walaupun ada beberapa orang lain di dalam bilik.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Kebolehsuaian penting di dorm yang dikongsi." },
    { id: 'ba2', pasangan: 'ba1', s: "Saya berasa janggal dan mengelak setiap kali perlu berbual dengan rakan baharu.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 1, hurai: "Mengelak pergaulan menyukarkan penyesuaian di asrama." },
    { id: 'eb2', pasangan: 'eb1', s: "Saya mudah bosan dan putus asa apabila eksperimen perlu diulang.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 1, hurai: "Mudah putus asa menghalang kejayaan dalam sains." },
    { id: 'mb1', pasangan: 'mb2', s: "Saya menyimpan barang peribadi di tempat yang tetap supaya mudah dicari.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Menjaga barang sendiri ialah tanggungjawab." },
    { s: "Saya menerangkan sebab di sebalik keputusan saya kepada ahli kumpulan.", trait: "Kepimpinan & Inisiatif", pos: 0, hurai: "Penjelasan yang telus membina kepercayaan terhadap pemimpin." },
    { id: 'ib1', pasangan: 'ib2', s: "Saya memulangkan barang yang tertinggal di dewan selera kepada pemiliknya atau ke kaunter barang hilang.", trait: "Integriti & Disiplin Diri", pos: 0, hurai: "Memulangkan barang tercicir ialah amalan jujur." }
  ]
});

UKKM.push({ set: 5, tajuk: 'Set 5', bahagian: ['mat', 'sains', 'eng', 'per'].map(k => B[k]).filter(Boolean) }); })();
