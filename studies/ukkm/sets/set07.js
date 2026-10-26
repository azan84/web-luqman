(function () { const B = {}; const UKKM_PART = (n, b) => { B[b.id] = b; };
UKKM_PART(7, { id: 'mat', nama: 'Matematik', ikon: '🧮', minit: 30,
  arahan: 'Jawab semua 20 soalan. 18 soalan objektif (pilih A, B, C atau D) dan 2 soalan isian (taip jawapan nombor). Kalkulator saintifik dibenarkan; gunakan kertas conteng.',
  soalan: [
  { // 1 Pola — mudah
    s: "Apakah nombor seterusnya dalam jujukan berikut?<br><b>0, 3, 8, 15, 24, …</b>",
    en: "What is the next number in the sequence 0, 3, 8, 15, 24, … ?",
    p: ['33', '35', '36', '48'], a: 1, topik: 'Pola & Jujukan', aras: 'mudah',
    hurai: "Beza berturutan: 3, 5, 7, 9, jadi beza seterusnya 11: 24 + 11 = <b>35</b>. (Juga n² − 1: 1−1, 4−1, 9−1, …, 36 − 1 = 35.) (33 = 24 + 9, mengulang beza terakhir; 36 ialah 6², lupa tolak 1; 48 = 24 × 2.)"
  },
  { // 2 Persamaan linear — mudah
    s: "Panjang sebuah segi empat tepat ialah 4 cm lebih daripada dua kali lebarnya. Perimeternya ialah 62 cm. Berapakah luas segi empat tepat itu?",
    en: "The length of a rectangle is 4 cm more than twice its width. Its perimeter is 62 cm. What is its area?",
    p: ['396 cm²', '279 cm²', '198 cm²', '99 cm²'], a: 2, topik: 'Persamaan Linear', aras: 'mudah',
    hurai: "Lebar = w, panjang = 2w + 4. 2(w + 2w + 4) = 62 → 6w + 8 = 62 → w = 9, panjang = 22. Luas = 9 × 22 = <b>198 cm²</b>. (279 = 9 × 31, mengambil separuh perimeter sebagai panjang; 99 dan 396 ialah separuh dan dua kali luas sebenar.)"
  },
  { // 3 Peratus — mudah (ISI)
    jenis: 'isi',
    s: "Sebuah sekolah mempunyai 1 200 orang murid. Sebanyak 35% daripada mereka menyertai kelab sukan. Daripada ahli kelab sukan itu, 15% dipilih mewakili daerah. Berapakah bilangan murid yang mewakili daerah?",
    en: "A school has 1 200 pupils. 35% of them join a sports club. Of the sports club members, 15% are chosen to represent the district. How many pupils represent the district?",
    a: 63, unit: 'orang', topik: 'Peratus & Matematik Pengguna', aras: 'mudah',
    hurai: "Ahli kelab sukan = 35% × 1200 = 420. Wakil daerah = 15% × 420 = <b>63</b> orang. (Ralat biasa: 15% × 1200 = 180, mengambil 15% daripada semua murid.)"
  },
  { // 4 Kadaran — mudah
    s: "Harga 5 kg beras ialah RM 13.50. Pada kadar harga yang sama, berapakah harga 12 kg beras?",
    en: "5 kg of rice costs RM 13.50. At the same rate, how much does 12 kg of rice cost?",
    p: ['RM 162.00', 'RM 40.50', 'RM 32.40', 'RM 27.00'], a: 2, topik: 'Nisbah, Kadar & Laju', aras: 'mudah',
    hurai: "Harga sekilogram = 13.50 ÷ 5 = RM 2.70. 12 kg = 12 × 2.70 = <b>RM 32.40</b>. (RM 162 = 13.50 × 12, menganggap RM 13.50 ialah harga sekilogram; RM 40.50 = 3 beg 5 kg; RM 27.00 hanya untuk 10 kg.)"
  },
  { // 5 Data — mudah
    rajah: '<table><tr><th>Batang</th><th>Daun</th></tr><tr><td>3</td><td style="text-align:left">5 &nbsp;8</td></tr><tr><td>4</td><td style="text-align:left">0 &nbsp;2 &nbsp;2 &nbsp;7</td></tr><tr><td>5</td><td style="text-align:left">1 &nbsp;3 &nbsp;6 &nbsp;9</td></tr><tr><td>6</td><td style="text-align:left">0 &nbsp;4</td></tr></table><div style="font-size:.85rem;color:var(--muted)">Kekunci: 3 | 5 bermaksud 35 kg</div>',
    s: "Plot batang-dan-daun menunjukkan jisim (kg) sekumpulan murid. Berapakah <b>julat</b> jisim mereka?",
    en: "The stem-and-leaf plot shows the masses (kg) of a group of pupils. What is the range of their masses?",
    p: ['9 kg', '25 kg', '29 kg', '64 kg'], a: 2, topik: 'Data & Statistik', aras: 'mudah',
    hurai: "Jisim terbesar = 64 kg, terkecil = 35 kg. Julat = 64 − 35 = <b>29 kg</b>. (9 = 9 − 0, beza daun sahaja; 25 = 60 − 35, membaca daun pertama baris terakhir; 64 ialah nilai maksimum, bukan julat.)"
  },
  { // 6 Sudut segi tiga — sederhana
    rajah: '<svg viewBox="0 0 250 175" style="max-width:100%;width:280px" role="img" aria-label="Segi tiga sama kaki PQR dengan PQ sama dengan PR. Sudut QPR 40 darjah. QR dipanjangkan ke S. Sudut PRS ialah x."><g stroke="var(--c)" stroke-width="2" fill="none"><path d="M110 20 L50 150 L170 150 Z"/></g><g stroke="currentColor" stroke-width="2"><line x1="170" y1="150" x2="238" y2="150"/><line x1="74" y1="83" x2="84" y2="88"/><line x1="146" y1="83" x2="136" y2="88"/></g><g font-size="13" fill="currentColor"><text x="104" y="14">P</text><text x="36" y="164">Q</text><text x="166" y="168">R</text><text x="232" y="168">S</text><text x="100" y="52">40°</text><text x="184" y="142">x</text></g></svg>',
    s: "Dalam rajah, PQR ialah segi tiga sama kaki dengan PQ = PR, dan QRS ialah garis lurus. Diberi ∠QPR = 40°, cari nilai x.",
    en: "In the diagram, PQR is an isosceles triangle with PQ = PR, and QRS is a straight line. Given angle QPR = 40°, find x.",
    p: ['40°', '70°', '80°', '110°'], a: 3, topik: 'Geometri & Pengukuran', aras: 'sederhana',
    hurai: "∠PQR = ∠PRQ = (180° − 40°) ÷ 2 = 70°. x = 180° − 70° = <b>110°</b> (atau sudut peluaran = 40° + 70°). (70° ialah sudut tapak; 80° = 40° + 40°, menganggap sudut tapak juga 40°; 40° menyalin sudut puncak.)"
  },
  { // 7 Logik — sederhana
    s: "Encik Rahim ialah <b>satu-satunya</b> anak lelaki kepada datuk Sofia sebelah ayah. Hakim ialah abang kandung Sofia. Apakah hubungan Encik Rahim dengan Hakim?",
    en: "Mr Rahim is the only son of Sofia's paternal grandfather. Hakim is Sofia's full brother. How is Mr Rahim related to Hakim?",
    p: ['Bapa', 'Bapa saudara', 'Datuk', 'Abang ipar'], a: 0, topik: 'Penaakulan Logik', aras: 'sederhana',
    hurai: "Datuk sebelah ayah ialah bapa kepada ayah Sofia, jadi ayah Sofia ialah anak lelaki datuk itu. Oleh sebab Encik Rahim satu-satunya anak lelaki, Encik Rahim <b>ialah ayah Sofia</b>, dan juga ayah Hakim (abang kandung). (Bapa saudara mungkin jika datuk ada anak lelaki lain — tetapi tiada.)"
  },
  { // 8 Pola — sederhana
    s: "Perhatikan pola kod berikut:<br><b>A1, C4, E9, G16, …</b><br>Apakah kod yang ke-10?",
    en: "Look at the code pattern A1, C4, E9, G16, … What is the 10th code?",
    p: ['S100', 'S81', 'T100', 'U121'], a: 0, topik: 'Pola & Jujukan', aras: 'sederhana',
    hurai: "Kod ke-n: huruf ke-(2n − 1) dalam abjad diikuti n². Untuk n = 10: huruf ke-19 = S, nombor 10² = 100 → <b>S100</b>. (S81 guna 9²; T100 mengira huruf ke-20; U121 ialah kod ke-11.)"
  },
  { // 9 Persamaan linear — sederhana
    s: "Hasil tambah digit sebuah nombor dua digit ialah 11. Apabila kedudukan digitnya ditukar, nombor baharu itu 27 lebih besar daripada nombor asal. Apakah nombor asal?",
    en: "The digits of a two-digit number add up to 11. When the digits are swapped, the new number is 27 more than the original. What is the original number?",
    p: ['38', '47', '56', '74'], a: 1, topik: 'Persamaan Linear', aras: 'sederhana',
    hurai: "Nombor = 10a + b dengan a + b = 11. (10b + a) − (10a + b) = 27 → 9(b − a) = 27 → b − a = 3. Jadi a = 4, b = 7 → <b>47</b> (semak: 74 − 47 = 27). (74 ialah nombor baharu; 38 dan 56 jumlah digit 11 tetapi beza 45 dan 9.)"
  },
  { // 10 Pelaburan — sederhana
    s: "Encik Lee membeli 2 000 unit saham pada harga RM 1.50 seunit. Dia menerima dividen 8 sen seunit, kemudian menjual semua saham itu pada harga RM 1.62 seunit. Berapakah pulangan pelaburan (ROI) beliau?",
    en: "Mr Lee buys 2 000 shares at RM 1.50 each. He receives a dividend of 8 sen per share, then sells all the shares at RM 1.62 each. What is his return on investment (ROI)?",
    p: ['5.33%', '8.00%', '12.35%', '13.33%'], a: 3, topik: 'Peratus & Matematik Pengguna', aras: 'sederhana',
    hurai: "Modal = 2000 × 1.50 = RM 3 000. Dividen = 2000 × 0.08 = RM 160. Keuntungan modal = 2000 × 0.12 = RM 240. ROI = (160 + 240) ÷ 3000 × 100% = <b>13.33%</b>. (8.00% hanya keuntungan modal; 5.33% hanya dividen; 12.35% = 400 ÷ 3240, membahagi dengan nilai jualan.)"
  },
  { // 11 Kadar (ketumpatan) — sederhana
    s: "Sebuah blok aluminium berjisim 108 g. Ketumpatan aluminium ialah 2.7 g/cm³. Sebuah blok kuprum mempunyai isi padu yang <b>sama</b> dengan blok aluminium itu. Jika ketumpatan kuprum ialah 8.9 g/cm³, berapakah jisim blok kuprum?",
    en: "An aluminium block has mass 108 g; aluminium's density is 2.7 g/cm³. A copper block has the same volume. If copper's density is 8.9 g/cm³, what is the mass of the copper block?",
    p: ['32.8 g', '108 g', '291.6 g', '356 g'], a: 3, topik: 'Nisbah, Kadar & Laju', aras: 'sederhana',
    hurai: "Isi padu = jisim ÷ ketumpatan = 108 ÷ 2.7 = 40 cm³. Jisim kuprum = 40 × 8.9 = <b>356 g</b>. (108 g menganggap jisim sama, bukan isi padu; 291.6 = 108 × 2.7, mendarab bukannya membahagi; 32.8 = 108 × 2.7 ÷ 8.9, nisbah terbalik.)"
  },
  { // 12 Carta pai — sederhana
    rajah: '<svg viewBox="0 0 300 232" style="max-width:100%;width:300px" role="img" aria-label="Carta pai cara murid ke sekolah: Bas 144 darjah, Kereta 96 darjah, Basikal tidak dinyatakan, Berjalan kaki 48 darjah"><g stroke="var(--card, #fff)" stroke-width="1.5"><path d="M150 120 L150 40 A80 80 0 0 1 197 184.7 Z" fill="var(--c)" fill-opacity=".55"/><path d="M150 120 L197 184.7 A80 80 0 0 1 80.7 160 Z" fill="var(--c)" fill-opacity=".3"/><path d="M150 120 L80.7 160 A80 80 0 0 1 90.5 66.5 Z" fill="var(--c)" fill-opacity=".15"/><path d="M150 120 L90.5 66.5 A80 80 0 0 1 150 40 Z" fill="var(--c)" fill-opacity=".42"/></g><circle cx="150" cy="120" r="80" fill="none" stroke="currentColor" stroke-width="1.5"/><g font-size="12" fill="currentColor" text-anchor="middle"><text x="198" y="108">144°</text><text x="140" y="172">96°</text><text x="130" y="80">48°</text><text x="104" y="118" font-size="14" font-weight="700">?</text><text x="262" y="92">Bas</text><text x="130" y="224">Kereta</text><text x="40" y="114">Basikal</text><text x="96" y="28">Berjalan kaki</text></g></svg>',
    s: "Carta pai menunjukkan cara 600 orang murid ke sekolah. Berapakah bilangan murid yang ke sekolah dengan <b>basikal</b>?",
    en: "The pie chart shows how 600 pupils travel to school. How many pupils cycle to school?",
    p: ['240', '120', '80', '72'], a: 1, topik: 'Data & Statistik', aras: 'sederhana',
    hurai: "Sudut basikal = 360° − 144° − 96° − 48° = 72°. Bilangan = 72/360 × 600 = <b>120</b>. (72 ialah sudut, bukan bilangan murid; 80 ialah murid berjalan kaki; 240 ialah murid menaiki bas.)"
  },
  { // 13 Lukisan berskala — sederhana (ISI)
    jenis: 'isi',
    s: "Pelan sebuah rumah dilukis dengan skala 1 : 200. Sebuah bilik pada pelan itu berukuran 3 cm × 2.5 cm. Berapakah luas sebenar bilik itu dalam m²?",
    en: "A house plan is drawn to a scale of 1 : 200. A room on the plan measures 3 cm × 2.5 cm. What is the actual area of the room in m²?",
    a: 30, unit: 'm²', topik: 'Geometri & Pengukuran', aras: 'sederhana',
    hurai: "Ukuran sebenar: 3 × 200 = 600 cm = 6 m; 2.5 × 200 = 500 cm = 5 m. Luas = 6 × 5 = <b>30 m²</b>. (Ralat biasa: 7.5 cm² × 200 = 1500 cm² — luas perlu didarab dengan 200², bukan 200.)"
  },
  { // 14 Logik kalendar — sederhana
    s: "Tahun 2027 bukan tahun lompat. Diberi 1 Januari 2027 jatuh pada hari Jumaat. Pada hari apakah jatuhnya 1 Mac 2027?",
    en: "2027 is not a leap year. Given that 1 January 2027 is a Friday, on which day is 1 March 2027?",
    p: ['Ahad', 'Isnin', 'Selasa', 'Rabu'], a: 1, topik: 'Penaakulan Logik', aras: 'sederhana',
    hurai: "Dari 1 Januari ke 1 Mac = 31 (Januari) + 28 (Februari) = 59 hari. 59 = 8 × 7 + 3, jadi 3 hari selepas Jumaat → <b>Isnin</b>. (Selasa menganggap Februari 29 hari; Ahad menganggap setiap bulan 30 hari.)"
  },
  { // 15 Pola — sukar
    s: "Dalam satu mesyuarat, 12 orang peserta berjabat tangan tepat sekali dengan setiap peserta lain. Kemudian, 3 orang peserta lewat tiba dan setiap seorang daripada mereka berjabat tangan tepat sekali dengan <b>semua</b> orang lain yang ada di situ (termasuk sesama mereka). Berapakah jumlah jabat tangan keseluruhannya?",
    en: "At a meeting, 12 participants each shake hands exactly once with every other participant. Then 3 latecomers arrive and each shakes hands exactly once with everyone else present (including each other). How many handshakes are there in total?",
    p: ['66', '69', '102', '105'], a: 3, topik: 'Pola & Jujukan', aras: 'sukar',
    hurai: "Pola jabat tangan n orang = n(n − 1) ÷ 2. Akhirnya setiap pasangan daripada 15 orang berjabat tangan sekali: 15 × 14 ÷ 2 = <b>105</b> (atau 66 + 3 × 12 + 3). (66 hanya 12 orang awal; 102 terlupa 3 jabat tangan sesama peserta lewat; 69 terlupa jabat tangan peserta lewat dengan 12 orang awal.)"
  },
  { // 16 Ketaksamaan — sukar
    s: "Berapakah bilangan integer x yang memuaskan <b>kedua-dua</b> ketaksamaan 3x − 5 &lt; 16 dan 2 − x ≤ 2x + 11?",
    en: "How many integers x satisfy both 3x − 5 < 16 and 2 − x ≤ 2x + 11?",
    p: ['8', '9', '10', '11'], a: 2, topik: 'Persamaan Linear', aras: 'sukar',
    hurai: "3x − 5 &lt; 16 → 3x &lt; 21 → x &lt; 7. 2 − x ≤ 2x + 11 → −9 ≤ 3x → x ≥ −3. Integer −3, −2, …, 6 → <b>10</b> integer. (11 turut memasukkan 7; 9 tertinggal −3; 8 tertinggal kedua-dua hujung.)"
  },
  { // 17 Sewa beli — sukar
    s: "Harga tunai sebuah motosikal ialah RM 7 800. Encik Hafiz membayar wang pendahuluan 10%, dan baki harga dibiayai melalui sewa beli dengan kadar faedah sama rata 4% setahun selama 3 tahun. Berapakah ansuran bulanannya?",
    en: "A motorcycle's cash price is RM 7 800. Mr Hafiz pays a 10% deposit and finances the balance by hire purchase at a flat interest rate of 4% per annum for 3 years. What is his monthly instalment?",
    p: ['RM 195.00', 'RM 202.80', 'RM 218.40', 'RM 242.67'], a: 2, topik: 'Peratus & Matematik Pengguna', aras: 'sukar',
    hurai: "Pendahuluan = RM 780; baki = RM 7 020. Faedah = 7020 × 4% × 3 = RM 842.40. Jumlah bayaran balik = RM 7 862.40. Ansuran = 7862.40 ÷ 36 = <b>RM 218.40</b>. (RM 242.67 mengenakan faedah atas RM 7 800 penuh; RM 195.00 tiada faedah; RM 202.80 faedah untuk 1 tahun sahaja.)"
  },
  { // 18 Kadar kerja — sukar
    s: "Ali boleh mengecat sebuah pagar seorang diri dalam masa 6 jam, manakala Kumar boleh mengecatnya seorang diri dalam masa 4 jam. Mereka mula mengecat bersama-sama, tetapi selepas 1 jam Ali berhenti. Berapa lama lagi Kumar perlu bekerja untuk menyiapkan pagar itu?",
    en: "Ali can paint a fence alone in 6 hours; Kumar alone in 4 hours. They start together, but Ali stops after 1 hour. How much longer must Kumar work to finish?",
    p: ['1 jam 24 minit', '2 jam 20 minit', '2 jam 24 minit', '3 jam'], a: 1, topik: 'Nisbah, Kadar & Laju', aras: 'sukar',
    hurai: "Dalam 1 jam bersama: 1/6 + 1/4 = 5/12 siap. Baki = 7/12. Kumar: (7/12) ÷ (1/4) = 7/3 jam = <b>2 jam 20 minit</b>. (2 jam 24 minit ialah masa jika bekerja bersama sepanjang masa; 1 jam 24 minit = 2.4 − 1; 3 jam = 4 − 1, mengabaikan kerja Ali.)"
  },
  { // 19 Kebarangkalian — sukar
    s: "Dua biji dadu adil dilambung serentak dan nombor pada kedua-dua dadu ditambah. Apakah kebarangkalian hasil tambah itu ialah <b>nombor perdana</b>?",
    en: "Two fair dice are thrown and the two numbers are added. What is the probability that the sum is a prime number?",
    p: ['5/12', '5/11', '7/18', '13/36'], a: 0, topik: 'Data & Statistik', aras: 'sukar',
    hurai: "Ruang sampel = 36 kesudahan. Hasil tambah perdana: 2 (1 cara), 3 (2), 5 (4), 7 (6), 11 (2) → 15 cara. P = 15/36 = <b>5/12</b>. (5/11 menganggap 11 hasil tambah 2–12 sama kemungkinan; 7/18 = 14/36 tertinggal hasil tambah 2; 13/36 tertinggal hasil tambah 11.)"
  },
  { // 20 Pelan & dongakan — sukar
    rajah: '<svg viewBox="0 0 200 190" style="max-width:100%;width:220px" role="img" aria-label="Pelan grid 3 kali 3 menunjukkan bilangan kubus bertindan. Baris belakang: 2, 1, 3. Baris tengah: 1, 0, 2. Baris hadapan: 3, 1, 1. Anak panah di bawah menunjukkan arah Depan."><g stroke="var(--c)" stroke-width="2" fill="none"><rect x="40" y="10" width="120" height="120"/><line x1="80" y1="10" x2="80" y2="130"/><line x1="120" y1="10" x2="120" y2="130"/><line x1="40" y1="50" x2="160" y2="50"/><line x1="40" y1="90" x2="160" y2="90"/></g><g font-size="16" font-weight="700" fill="currentColor" text-anchor="middle"><text x="60" y="36">2</text><text x="100" y="36">1</text><text x="140" y="36">3</text><text x="60" y="76">1</text><text x="100" y="76">0</text><text x="140" y="76">2</text><text x="60" y="116">3</text><text x="100" y="116">1</text><text x="140" y="116">1</text></g><g stroke="currentColor" stroke-width="2" fill="none"><line x1="100" y1="172" x2="100" y2="140"/><path d="M93 148 L100 140 L107 148"/></g><text x="112" y="170" font-size="12" fill="currentColor">Depan</text></svg>',
    s: "Rajah ialah pelan bagi satu susunan kubus bersisi 2 cm. Nombor dalam setiap petak menunjukkan bilangan kubus yang bertindan pada petak itu. Berapakah luas <b>dongakan depan</b> susunan itu (dilihat dari arah anak panah)?",
    en: "The diagram is the plan of a stack of 2 cm cubes; each number shows how many cubes are stacked on that square. What is the area of the front elevation (viewed in the direction of the arrow)?",
    p: ['28 cm²', '32 cm²', '36 cm²', '56 cm²'], a: 0, topik: 'Geometri & Pengukuran', aras: 'sukar',
    hurai: "Dari depan, setiap lajur kelihatan setinggi tindanan tertinggi dalam lajur itu: kiri max(2, 1, 3) = 3, tengah max(1, 0, 1) = 1, kanan max(3, 2, 1) = 3 → 7 segi empat sama. Luas = 7 × (2 × 2) = <b>28 cm²</b>. (32 cm² ialah dongakan sisi atau pelan, iaitu 8 segi empat sama; 56 cm² = 14 kubus × 4, mengira semua kubus; 36 cm² menganggap grid 3 × 3 penuh.)"
  }
  ]
});

UKKM_PART(7, { id: 'sains', nama: 'Sains', ikon: '🔬', minit: 30,
  arahan: 'Jawab semua 30 soalan. Pilih satu jawapan yang paling tepat bagi setiap soalan.',
  soalan: [
  { topik: 'Biologi: Sel', s: `Seorang murid memerhati sel pipi menggunakan mikroskop dengan kanta mata 10× dan kanta objek 40×. Berapakah pembesaran imej yang dilihat?`,
    en: `A student observes cheek cells with a microscope using a 10× eyepiece and a 40× objective lens. What is the magnification of the image?`,
    p: ['4×', '50×', '400×', '4000×'], a: 2,
    hurai: `Pembesaran mikroskop = pembesaran kanta mata × pembesaran kanta objek = 10 × 40 = 400×.` },
  { topik: 'Biologi: Sel', s: `Organel manakah mengawal semua aktiviti sel dan mengandungi bahan genetik?`,
    en: `Which organelle controls all the activities of the cell and contains genetic material?`,
    p: ['Mitokondria', 'Nukleus', 'Vakuol', 'Sitoplasma'], a: 1,
    hurai: `Nukleus mengandungi kromosom (bahan genetik) dan mengawal aktiviti sel. Mitokondria menjalankan respirasi sel, manakala vakuol menyimpan air dan bahan terlarut.` },
  { topik: 'Biologi: Rangsangan dan Gerak Balas', s: `Daun pokok semalu menguncup dengan cepat apabila disentuh. Gerak balas ini ialah…`,
    en: `The leaves of the touch-me-not (Mimosa) plant fold quickly when touched. This response is…`,
    p: ['fototropisme', 'geotropisme', 'gerak balas nastik', 'hidrotropisme'], a: 2,
    hurai: `Gerak balas nastik ialah gerak balas yang tidak bergantung pada arah rangsangan dan berlaku dengan cepat, seperti daun semalu menguncup apabila disentuh. Tropisme pula ialah pertumbuhan yang perlahan mengikut arah rangsangan.` },
  { topik: 'Biologi: Rangsangan dan Gerak Balas', s: `Anak benih diletakkan dalam sebuah bekas. Kapas lembap diletakkan di sebelah kanan dan kalsium klorida kontang (penyerap lembapan) di sebelah kiri. Bekas itu disimpan dalam gelap. Selepas dua hari, akar anak benih membengkok ke kanan. Apakah kesimpulannya?`,
    en: `Seedlings are placed in a container with moist cotton wool on the right and anhydrous calcium chloride (a drying agent) on the left. The container is kept in the dark. After two days, the roots bend to the right. What is the conclusion?`,
    p: ['Akar tumbuh menjauhi cahaya', 'Akar tumbuh ke arah air (hidrotropisme positif)', 'Akar hanya tumbuh mengikut arah graviti', 'Akar tumbuh ke arah kalsium klorida'], a: 1,
    hurai: `Kalsium klorida kontang menyerap lembapan di sebelah kiri, jadi hanya sebelah kanan lembap. Akar membengkok ke arah kapas lembap, menunjukkan hidrotropisme positif; bekas gelap memastikan cahaya tidak mempengaruhi keputusan.` },
  { topik: 'Biologi: Nutrisi', s: `Pundi hempedu seorang pesakit telah dibuang melalui pembedahan. Doktor menasihatinya supaya mengurangkan makanan berlemak. Apakah sebabnya?`,
    en: `A patient's gall bladder has been removed by surgery. The doctor advises him to eat less fatty food. Why?`,
    p: ['Hempedu yang mengemulsikan lemak tidak lagi dapat disimpan dan dirembeskan dalam jumlah yang banyak semasa makan', 'Lemak tidak dapat diserap langsung tanpa pundi hempedu', 'Pundi hempedu menghasilkan enzim lipase', 'Lemak akan bertukar menjadi kanji di dalam usus'], a: 0,
    hurai: `Hempedu dihasilkan oleh hati dan disimpan dalam pundi hempedu sebelum dirembeskan ke duodenum. Tanpa pundi hempedu, kurang hempedu tersedia untuk mengemulsikan lemak, jadi pencernaan lemak kurang cekap.` },
  { topik: 'Biologi: Nutrisi', s: `Sebiji kacang tanah berjisim 0.5 g dibakar sepenuhnya di bawah tabung didih berisi 20 g air. Suhu air naik sebanyak 10 °C. Dengan menggunakan formula tenaga (J) = jisim air (g) × 4.2 × kenaikan suhu (°C), berapakah nilai kalori kacang tanah itu?`,
    en: `A 0.5 g peanut is burned completely under a boiling tube containing 20 g of water. The water temperature rises by 10 °C. Using energy (J) = mass of water (g) × 4.2 × temperature rise (°C), what is the energy value of the peanut?`,
    p: ['420 J/g', '840 J/g', '1680 J/g', '3360 J/g'], a: 2,
    hurai: `Tenaga = 20 × 4.2 × 10 = 840 J bagi 0.5 g kacang. Nilai kalori = 840 ÷ 0.5 = 1680 J/g. (Nilai sebenar lebih tinggi kerana banyak haba hilang ke persekitaran.)` },
  { topik: 'Biologi: Pengangkutan', s: `Arteri pulmonari berbeza daripada arteri-arteri lain kerana arteri pulmonari…`,
    en: `The pulmonary artery is different from other arteries because it…`,
    p: ['membawa darah beroksigen dari peparu ke jantung', 'mempunyai injap di sepanjang salurnya', 'membawa darah terdeoksigen dari jantung ke peparu', 'membawa darah ke otak'], a: 2,
    hurai: `Kebanyakan arteri membawa darah beroksigen. Arteri pulmonari membawa darah terdeoksigen dari ventrikel kanan ke peparu untuk menerima oksigen.` },
  { topik: 'Biologi: Pembiakan', s: `Organ manakah menghasilkan sperma dan hormon testosteron?`,
    en: `Which organ produces sperm and the hormone testosterone?`,
    p: ['Ovari', 'Testis', 'Uterus', 'Kelenjar prostat'], a: 1,
    hurai: `Testis menghasilkan sperma dan hormon testosteron. Kelenjar prostat merembeskan bendalir untuk sperma tetapi tidak menghasilkan sperma.` },
  { topik: 'Biologi: Kesihatan Manusia', s: `Seorang bayi diberi suntikan vaksin. Bagaimanakah vaksin melindungi bayi itu daripada penyakit?`,
    en: `A baby is given a vaccine injection. How does the vaccine protect the baby from disease?`,
    p: ['Vaksin mengandungi antibodi siap yang terus membunuh patogen', 'Vaksin membunuh semua bakteria dalam badan', 'Vaksin menambah bilangan sel darah merah', 'Vaksin mengandungi patogen yang telah dilemahkan atau dimatikan yang merangsang badan menghasilkan antibodi sendiri'], a: 3,
    hurai: `Vaksin merangsang badan menghasilkan antibodi sendiri tanpa menyebabkan penyakit, jadi bayi mendapat keimunan aktif buatan. Suntikan antibodi siap (antiserum) memberikan keimunan pasif.` },

  { topik: 'Ekologi: Ekosistem', s: `Ikan remora melekat pada badan ikan yu dan memakan sisa makanan yu. Ikan yu tidak mendapat manfaat dan tidak dirugikan. Apakah jenis interaksi ini?`,
    en: `A remora fish attaches itself to a shark and eats the shark's food scraps. The shark neither benefits nor is harmed. What type of interaction is this?`,
    p: ['Mutualisme', 'Parasitisme', 'Komensalisme', 'Pemangsaan'], a: 2,
    hurai: `Dalam komensalisme, satu organisma mendapat manfaat (remora) dan yang lain tidak terjejas (yu). Dalam parasitisme, perumah dirugikan.` },
  { topik: 'Ekologi: Ekosistem', s: `Anak benih jagung ditanam dalam tiga petak dengan jarak tanaman yang berbeza. Tinggi purata anak benih selepas empat minggu direkodkan dalam jadual. Apakah inferens yang paling sesuai?`,
    en: `Maize seedlings are planted in three plots at different spacings. The average height after four weeks is recorded in the table. What is the most suitable inference?`,
    rajah: `<table><tr><th>Jarak antara anak benih (cm)</th><td>10</td><td>5</td><td>2</td></tr><tr><th>Tinggi purata (cm)</th><td>30</td><td>24</td><td>15</td></tr></table>`,
    p: ['Anak benih yang ditanam rapat bersaing untuk cahaya, air dan nutrien', 'Anak benih yang ditanam rapat menerima lebih banyak nutrien', 'Jarak tanaman tidak mempengaruhi pertumbuhan', 'Anak benih yang ditanam rapat bekerjasama secara mutualisme'], a: 0,
    hurai: `Semakin rapat anak benih, semakin rendah tinggi puratanya. Ini menunjukkan persaingan intraspesies untuk cahaya, air dan nutrien yang terhad.` },
  { topik: 'Ekologi: Biodiversiti', s: `Tumbuhan manakah membiak dengan menghasilkan spora?`,
    en: `Which plant reproduces by producing spores?`,
    p: ['Pokok padi', 'Pokok mangga', 'Pokok pain', 'Paku pakis'], a: 3,
    hurai: `Paku pakis ialah tumbuhan tidak berbunga yang membiak dengan spora di bawah daunnya. Pokok pain juga tidak berbunga tetapi menghasilkan biji benih dalam kon; padi dan mangga ialah tumbuhan berbunga.` },

  { topik: 'Kimia: Jirim', s: `Graf menunjukkan lengkung penyejukan cecair X. Apakah takat beku X dan apakah keadaan X pada minit ke-6?`,
    en: `The graph shows the cooling curve of liquid X. What is the freezing point of X and what is its state at minute 6?`,
    rajah: `<svg viewBox="0 0 400 255" style="max-width:420px" role="img" aria-label="Lengkung penyejukan X"><g stroke="currentColor" stroke-width="1.5" fill="none"><line x1="60" y1="210" x2="380" y2="210"/><line x1="60" y1="210" x2="60" y2="20"/></g><g stroke-dasharray="4 4" stroke-width="1" style="stroke:var(--muted)"><line x1="60" y1="135" x2="148" y2="135"/><line x1="148" y1="135" x2="148" y2="210"/><line x1="280" y1="135" x2="280" y2="210"/></g><polyline points="60,60 148,135 280,135 368,185" fill="none" style="stroke:var(--c)" stroke-width="3"/><g font-size="13" fill="currentColor" text-anchor="middle"><text x="60" y="228">0</text><text x="148" y="228">4</text><text x="236" y="228">8</text><text x="324" y="228">12</text><text x="220" y="250">Masa (min)</text></g><g font-size="13" fill="currentColor" text-anchor="end"><text x="54" y="189">40</text><text x="54" y="139">60</text><text x="54" y="89">80</text><text x="54" y="39">100</text></g><text x="66" y="16" font-size="13" fill="currentColor">Suhu (°C)</text></svg>`,
    p: ['60 °C; cecair dan pepejal', '60 °C; gas sahaja', '90 °C; cecair sahaja', '40 °C; pepejal sahaja'], a: 0,
    hurai: `Suhu malar pada 60 °C dari minit ke-4 hingga ke-10 kerana haba dibebaskan semasa cecair membeku, jadi takat beku ialah 60 °C. Pada minit ke-6, X sedang membeku dan wujud sebagai campuran cecair dan pepejal.` },
  { topik: 'Kimia: Jadual Berkala', s: `Antara berikut, yang manakah ialah sebatian?`,
    en: `Which of the following is a compound?`,
    p: ['Oksigen', 'Udara', 'Air laut', 'Karbon dioksida'], a: 3,
    hurai: `Karbon dioksida terbentuk daripada karbon dan oksigen yang bergabung secara kimia. Oksigen ialah unsur, manakala udara dan air laut ialah campuran.` },
  { topik: 'Kimia: Udara', s: `Langkah manakah dapat membantu mengurangkan pemanasan global?`,
    en: `Which step can help reduce global warming?`,
    p: ['Membakar sampah secara terbuka', 'Menggunakan pengangkutan awam dan tenaga solar', 'Menebang hutan untuk pembangunan', 'Menggunakan lebih banyak kenderaan persendirian'], a: 1,
    hurai: `Pengangkutan awam dan tenaga solar mengurangkan pembakaran bahan api fosil, jadi kurang karbon dioksida (gas rumah hijau) dibebaskan. Pilihan lain menambah karbon dioksida di atmosfera.` },
  { topik: 'Kimia: Air dan Larutan', s: `Isi padu air yang sama dituang ke dalam tiga bekas yang berlainan luas permukaan dan diletakkan bersebelahan di dalam bilik selama tiga hari. Keputusan ditunjukkan dalam jadual. Apakah pemboleh ubah yang dimanipulasikan?`,
    en: `The same volume of water is poured into three containers with different surface areas, placed side by side in a room for three days. The results are in the table. What is the manipulated variable?`,
    rajah: `<table><tr><th>Bekas</th><th>Luas permukaan air (cm²)</th><th>Isi padu air yang hilang (mL)</th></tr><tr><td>P</td><td>50</td><td>12</td></tr><tr><td>Q</td><td>100</td><td>24</td></tr><tr><td>R</td><td>200</td><td>47</td></tr></table>`,
    p: ['Isi padu air yang hilang', 'Luas permukaan air yang terdedah', 'Suhu bilik', 'Jenis air yang digunakan'], a: 1,
    hurai: `Pemboleh ubah dimanipulasikan ialah faktor yang sengaja diubah, iaitu luas permukaan. Isi padu air yang hilang ialah pemboleh ubah bergerak balas, manakala suhu bilik dan jenis air dimalarkan.` },
  { topik: 'Kimia: Asid dan Alkali', s: `Ketulan marmar (kalsium karbonat) dimasukkan ke dalam asid hidroklorik cair. Gelembung gas terhasil dan gas itu mengeruhkan air kapur. Apakah gas itu?`,
    en: `Marble chips (calcium carbonate) are added to dilute hydrochloric acid. Gas bubbles are produced and the gas turns limewater cloudy. What is the gas?`,
    p: ['Hidrogen', 'Oksigen', 'Karbon dioksida', 'Klorin'], a: 2,
    hurai: `Asid bertindak balas dengan karbonat menghasilkan garam, air dan karbon dioksida. Karbon dioksida mengeruhkan air kapur.` },
  { topik: 'Kimia: Kereaktifan Logam', s: `Mengapakah karbon (kok) boleh digunakan untuk mengekstrak besi daripada bijih besi?`,
    en: `Why can carbon (coke) be used to extract iron from iron ore?`,
    p: ['Karbon lebih reaktif daripada besi, jadi karbon dapat menyingkirkan oksigen daripada besi oksida', 'Karbon kurang reaktif daripada besi', 'Karbon melarutkan bijih besi', 'Karbon menambah oksigen kepada bijih besi'], a: 0,
    hurai: `Dalam siri kereaktifan, karbon terletak di atas besi. Karbon (melalui karbon monoksida dalam relau bagas) menyingkirkan oksigen daripada besi oksida dan meninggalkan besi.` },
  { topik: 'Kimia: Termokimia', s: `Antara berikut, yang manakah proses eksotermik?`,
    en: `Which of the following is an exothermic process?`,
    p: ['Peleburan ais', 'Penguraian kalsium karbonat oleh haba', 'Fotosintesis', 'Pembakaran arang'], a: 3,
    hurai: `Pembakaran arang membebaskan haba ke persekitaran (eksotermik). Peleburan ais, penguraian kalsium karbonat dan fotosintesis menyerap tenaga (endotermik).` },

  { topik: 'Fizik: Keelektrikan', s: `Rajah menunjukkan litar X dan litar Y. Semua mentol dan bateri adalah serupa. Bagaimanakah kecerahan setiap mentol dalam litar Y berbanding setiap mentol dalam litar X?`,
    en: `The diagram shows circuits X and Y. All bulbs and batteries are identical. How bright is each bulb in circuit Y compared with each bulb in circuit X?`,
    rajah: `<svg viewBox="0 0 420 210" style="max-width:420px" role="img" aria-label="Litar bersiri X dan litar selari Y"><g stroke="currentColor" stroke-width="2" fill="none"><path d="M30 150 V40 H99"/><line x1="99" y1="24" x2="99" y2="56"/><line x1="111" y1="31" x2="111" y2="49" stroke-width="4"/><path d="M111 40 H180 V150 H147"/><circle cx="135" cy="150" r="12"/><path d="M127 142 L143 158 M143 142 L127 158"/><path d="M123 150 H87"/><circle cx="75" cy="150" r="12"/><path d="M67 142 L83 158 M83 142 L67 158"/><path d="M63 150 H30"/><path d="M240 160 V40 H309"/><line x1="309" y1="24" x2="309" y2="56"/><line x1="321" y1="31" x2="321" y2="49" stroke-width="4"/><path d="M321 40 H390 V160"/><path d="M240 100 H303"/><circle cx="315" cy="100" r="12"/><path d="M307 92 L323 108 M323 92 L307 108"/><path d="M327 100 H390"/><path d="M240 160 H303"/><circle cx="315" cy="160" r="12"/><path d="M307 152 L323 168 M323 152 L307 168"/><path d="M327 160 H390"/></g><g fill="currentColor"><circle cx="240" cy="100" r="3.5"/><circle cx="390" cy="100" r="3.5"/></g><g font-size="14" font-weight="700" fill="currentColor" text-anchor="middle"><text x="105" y="198">Litar X</text><text x="315" y="198">Litar Y</text></g></svg>`,
    p: ['Lebih malap', 'Sama terang', 'Lebih terang', 'Tidak menyala'], a: 2,
    hurai: `Dalam litar X (bersiri), voltan bateri dikongsi antara dua mentol, jadi setiap mentol mendapat separuh voltan. Dalam litar Y (selari), setiap mentol mendapat voltan penuh bateri, jadi lebih terang.` },
  { topik: 'Fizik: Kemagnetan', s: `Di luar sebatang magnet bar, arah garisan medan magnet adalah dari…`,
    en: `Outside a bar magnet, the magnetic field lines point from the…`,
    p: ['kutub selatan ke kutub utara', 'tengah magnet ke kedua-dua kutub', 'kedua-dua kutub ke tengah magnet', 'kutub utara ke kutub selatan'], a: 3,
    hurai: `Garisan medan magnet keluar dari kutub utara dan masuk ke kutub selatan. Arah ini ditunjukkan oleh kutub utara jarum kompas.` },
  { topik: 'Fizik: Daya dan Gerakan', s: `Sebatang pembaris meter seimbang pada tanda 50 cm. Satu beban 2 N digantung pada tanda 20 cm. Pada tanda berapakah beban 3 N perlu digantung supaya pembaris kembali seimbang?`,
    en: `A metre rule balances at the 50 cm mark. A 2 N weight hangs at the 20 cm mark. At which mark must a 3 N weight hang to balance the rule again?`,
    p: ['60 cm', '70 cm', '80 cm', '95 cm'], a: 1,
    hurai: `Momen kiri = 2 N × (50 − 20) cm = 60 N cm. Momen kanan = 3 N × d = 60, jadi d = 20 cm dari pangsi, iaitu pada tanda 50 + 20 = 70 cm.` },
  { topik: 'Fizik: Haba', s: `Unsur pemanas dalam cerek elektrik diletakkan di bahagian bawah cerek. Apakah sebabnya?`,
    en: `The heating element of an electric kettle is placed at the bottom. Why?`,
    p: ['Air panas di bawah naik dan air sejuk di atas turun, menghasilkan arus perolakan yang memanaskan semua air', 'Haba bergerak ke bawah melalui sinaran', 'Air di bahagian bawah lebih mudah mendidih kerana lebih berat', 'Supaya cerek tidak mudah terbalik'], a: 0,
    hurai: `Air yang dipanaskan mengembang, menjadi kurang tumpat dan naik, manakala air sejuk yang lebih tumpat turun untuk dipanaskan. Arus perolakan ini memanaskan seluruh air dengan cekap.` },
  { topik: 'Fizik: Cahaya', s: `Mengapakah langit kelihatan biru pada waktu siang?`,
    en: `Why does the sky look blue in the daytime?`,
    p: ['Laut memantulkan warna biru ke langit', 'Atmosfera menyerap semua cahaya kecuali biru', 'Cahaya biru diserakkan lebih banyak oleh zarah-zarah udara berbanding warna lain', 'Matahari memancarkan cahaya biru sahaja'], a: 2,
    hurai: `Cahaya Matahari mengandungi semua warna. Cahaya biru yang berpanjang gelombang pendek lebih banyak diserakkan oleh zarah udara ke seluruh langit, jadi langit kelihatan biru.` },
  { topik: 'Fizik: Bunyi', s: `Panjang bahagian tali yang bergetar pada sebuah alat muzik diubah dan frekuensi bunyi diukur. Keputusan ditunjukkan dalam jadual. Apakah kesimpulannya?`,
    en: `The vibrating length of a string on a musical instrument is changed and the sound frequency is measured. The results are in the table. What is the conclusion?`,
    rajah: `<table><tr><th>Panjang tali bergetar (cm)</th><td>60</td><td>40</td><td>30</td></tr><tr><th>Frekuensi (Hz)</th><td>220</td><td>330</td><td>440</td></tr></table>`,
    p: ['Semakin pendek tali, semakin tinggi frekuensi dan semakin langsing bunyi', 'Semakin pendek tali, semakin rendah frekuensi', 'Semakin pendek tali, semakin kuat bunyi', 'Panjang tali tidak mempengaruhi frekuensi'], a: 0,
    hurai: `Frekuensi meningkat dari 220 Hz kepada 440 Hz apabila tali dipendekkan. Frekuensi yang tinggi menghasilkan bunyi yang lebih langsing (pic tinggi); kenyaringan bergantung pada amplitud.` },
  { topik: 'Fizik: Tenaga dan Kuasa', s: `Seorang pekerja menolak troli dengan daya 50 N sejauh 20 m dalam masa 10 s. Berapakah kuasa yang digunakan?`,
    en: `A worker pushes a trolley with a force of 50 N over 20 m in 10 s. What power is used?`,
    p: ['2.5 W', '100 W', '1000 W', '10 000 W'], a: 1,
    hurai: `Kerja = daya × jarak = 50 × 20 = 1000 J. Kuasa = kerja ÷ masa = 1000 ÷ 10 = 100 W.` },
  { topik: 'Fizik: Keradioaktifan', s: `Antara sinaran berikut, yang manakah ialah sinaran mengion?`,
    en: `Which of the following is an ionising radiation?`,
    p: ['Gelombang radio', 'Gelombang mikro', 'Cahaya nampak', 'Sinar-X'], a: 3,
    hurai: `Sinar-X bertenaga tinggi dan boleh mengion atom yang dilaluinya. Gelombang radio, gelombang mikro dan cahaya nampak ialah sinaran tidak mengion.` },

  { topik: 'Bumi & Angkasa: Bumi', s: `Fosil hidupan laut ditemui di puncak sebuah gunung. Apakah inferens yang paling sesuai?`,
    en: `Fossils of sea creatures are found on a mountain top. What is the most suitable inference?`,
    p: ['Kawasan itu dahulunya berada di bawah laut dan terangkat akibat pergerakan kerak Bumi', 'Hidupan laut pernah memanjat gunung itu', 'Burung membawa fosil itu ke puncak gunung', 'Fosil terbentuk di atas gunung kerana suhunya sejuk'], a: 0,
    hurai: `Fosil hidupan laut terbentuk dalam batuan enapan di dasar laut. Pergerakan kerak Bumi selama berjuta-juta tahun telah mengangkat batuan itu menjadi gunung.` },
  { topik: 'Bumi & Angkasa: Sistem Suria', s: `Planet manakah terkenal dengan sistem gelangnya yang paling besar dan jelas?`,
    en: `Which planet is famous for having the largest and most visible ring system?`,
    p: ['Marikh', 'Utarid', 'Bumi', 'Zuhal'], a: 3,
    hurai: `Zuhal mempunyai sistem gelang yang besar dan terang yang terdiri daripada ketulan ais dan batu. Marikh, Utarid dan Bumi tidak mempunyai gelang.` },
  { topik: 'Bumi & Angkasa: Penerokaan Angkasa', s: `Aplikasi navigasi pada telefon pintar dapat menunjukkan kedudukan pengguna dengan tepat. Teknologi ini bergantung kepada…`,
    en: `Navigation apps on smartphones can show a user's position accurately. This technology depends on…`,
    p: ['isyarat daripada beberapa satelit GPS yang mengorbit Bumi', 'gelombang bunyi daripada menara telekomunikasi', 'teleskop di balai cerap', 'gema ultrasonik'], a: 0,
    hurai: `Penerima GPS dalam telefon menerima isyarat daripada sekurang-kurangnya beberapa satelit GPS. Masa isyarat sampai digunakan untuk mengira kedudukan pengguna.` },
  ] });

UKKM_PART(7, {
  id: 'eng', nama: 'Bahasa Inggeris', ikon: '📖', minit: 30, jenis: 'objektif',
  arahan: 'Read each text carefully and answer the questions that follow. Choose the best answer (A, B, C or D).',
  petikan: [
    { id: 'P1', tajuk: 'Notice: Monsoon Season Arrangements', teks: `
<p><b>SMK PULAU RUSA, KUALA TERENGGANU</b><br>To all parents and students · November – January</p>
<ul>
<li>If the school is closed because of floods, an announcement will be made on the school’s Telegram channel by <b>6.00 a.m.</b> Please do not phone the school office, as the lines must be kept free for emergencies.</li>
<li>On closure days, lessons will continue online. Teachers will post work by <b>9.00 a.m.</b></li>
<li>Students living in low-lying areas should keep their textbooks in waterproof bags on a high shelf at home.</li>
<li>Hostel students will remain at school during floods unless their parents collect them in person.</li>
</ul>
<p>Thank you for your cooperation.<br><i>Principal</i></p>` },
    { id: 'P2', tajuk: 'Letter: Request for a Pedestrian Crossing', teks: `
<p>To: The President, Seri Jaya Municipal Council</p>
<p>Dear Sir,</p>
<p><b>Request for a pedestrian crossing outside SMK Seri Jaya</b></p>
<p>I am writing on behalf of the Student Council of SMK Seri Jaya to request a pedestrian crossing on Jalan Damai, directly outside our main gate.</p>
<p>More than 600 students cross this road every afternoon. Since the new shopping mall opened last year, traffic has increased sharply, as many drivers now use Jalan Damai as a shortcut. Our teachers have recorded four near-accidents this year alone. In one case, a lorry failed to stop for a Form 1 student and her younger brother, and it missed them by less than a metre.</p>
<p>At present, a teacher on duty helps students to cross. However, this is only possible until 2.30 p.m., and many students stay later for co-curricular activities.</p>
<p>We suggest a zebra crossing with flashing lights, as well as speed bumps on both sides. A petition signed by 412 parents and residents is attached.</p>
<p>We would be grateful if an officer could visit the site.</p>
<p>Yours faithfully,<br>Lim Jia Hui<br>President, Student Council</p>` },
    { id: 'P3', tajuk: 'Article: Power from the Roof', teks: `
<p>Malaysia lies close to the equator, so it receives strong sunlight for most of the year. Yet for a long time, most of the country’s electricity came from burning gas and coal. Today, more homes, schools and factories are turning to a source of energy that is right above their heads: the roof.</p>
<p>Solar panels contain cells made of silicon. When sunlight falls on these cells, they produce an electric current. Panels on a typical house roof can supply a large part of a family’s daytime electricity. Under a government scheme, owners can even send unused electricity to the national grid and have its value taken off their bills.</p>
<p>The benefits are clear. Solar panels produce no smoke and make no noise, and once they are installed, the sunlight they use is free. Most panels last around 25 years with little care apart from occasional cleaning.</p>
<p>There are, however, some drawbacks. Installing a system can be expensive, although prices have fallen steadily over the past ten years. Panels produce little electricity on cloudy days and none at night, so homes still need power from the grid or from batteries. Shade from tall trees or nearby buildings can also reduce the output sharply.</p>
<p>Some schools have found a way around the cost. Instead of buying panels, they allow a company to install them on school roofs. The school then pays a lower rate for the electricity, while the company owns and looks after the equipment. Many schools use the money they save to fund science activities.</p>` }
  ],
  soalan: [
    { petikan: 'P1', topik: 'Main idea / purpose', s: 'What is the main purpose of the notice?',
      p: ['To ask parents to donate waterproof bags to the school', 'To report on the damage caused by last year’s floods', 'To explain what will happen if floods affect the school', 'To announce that the school will close for the monsoon season'], a: 2,
      hurai: `The notice lists arrangements "If the school is closed because of floods": announcements, online lessons, protecting books and hostel students. It does not say the school will close for the whole season.` },
    { petikan: 'P1', topik: 'Specific detail', s: 'How will families find out that the school is closed because of floods?',
      p: ['From the school’s Telegram channel by 6.00 a.m.', 'By phoning the school office early in the morning', 'From a teacher’s post on the online class by 9.00 a.m.', 'From a letter sent home with the hostel students'], a: 0,
      hurai: `"An announcement will be made on the school’s Telegram channel by 6.00 a.m." Parents are asked NOT to phone the office, and 9.00 a.m. is when teachers post work.` },
    { petikan: 'P1', topik: 'Vocabulary in context', s: 'In “Students living in <b>low-lying</b> areas”, the phrase <b>low-lying</b> describes places that',
      p: ['have only small, low buildings', 'are quiet and away from busy roads', 'are known for people who do not tell the truth', 'lie lower than nearby land and flood easily'], a: 3,
      hurai: `The notice is about floods and tells these students to keep books "on a high shelf", so "low-lying" means land at a low level. "Lying" here has nothing to do with telling lies.` },
    { petikan: 'P1', topik: 'Reference', s: 'In the last point, <b>them</b> in “unless their parents collect them in person” refers to',
      p: ['the teachers on duty', 'the hostel students', 'the parents of day students', 'the waterproof bags'], a: 1,
      hurai: `"Hostel students will remain at school during floods unless their parents collect them in person." The parents do the collecting; the hostel students are collected.` },
    { petikan: 'P1', topik: 'Inference', s: 'The school is closed because of floods. What should a day student do at about 9.00 a.m.?',
      p: ['Go to the school gate to wait for a teacher', 'Phone the office to ask about homework', 'Check online for the work posted by teachers', 'Wait for the Telegram announcement to be made'], a: 2,
      hurai: `"On closure days, lessons will continue online. Teachers will post work by 9.00 a.m." The Telegram announcement comes earlier, by 6.00 a.m.` },

    { petikan: 'P2', topik: 'Main idea / purpose', s: 'Why did Jia Hui write the letter?',
      p: ['To complain about the new shopping mall near the school', 'To thank the council for building speed bumps last year', 'To invite the council to a co-curricular event at the school', 'To ask for safety measures on the road outside her school'], a: 3,
      hurai: `"I am writing ... to request a pedestrian crossing on Jalan Damai", and she suggests "a zebra crossing with flashing lights, as well as speed bumps". The mall is only the cause of the traffic.` },
    { petikan: 'P2', topik: 'Specific detail', s: 'According to the letter, why has traffic on Jalan Damai increased?',
      p: ['More parents now drive their children to school every afternoon.', 'Drivers use it as a shortcut since the mall opened.', 'The council widened the road last year.', 'Lorries are delivering goods to the school.'], a: 1,
      hurai: `"Since the new shopping mall opened last year, traffic has increased sharply, as many drivers now use Jalan Damai as a shortcut."` },
    { petikan: 'P2', topik: 'Vocabulary in context', s: 'In “four <b>near-accidents</b> this year”, the word <b>near-accidents</b> means',
      p: ['events in which an accident almost happened', 'accidents that took place near the school gate', 'minor accidents that caused small injuries', 'accidents involving drivers from nearby towns'], a: 0,
      hurai: `The example shows a lorry that "missed them by less than a metre", so no one was hit. "Near" here means "almost", not "close by".` },
    { petikan: 'P2', topik: 'Reference', s: 'In “and <b>it</b> missed them by less than a metre”, <b>it</b> refers to',
      p: ['the shopping mall', 'Jalan Damai', 'the lorry', 'the main gate'], a: 2,
      hurai: `"A lorry failed to stop for a Form 1 student and her younger brother, and it missed them". Only a moving vehicle can miss people.` },
    { petikan: 'P2', topik: 'Inference', s: 'Why does Jia Hui mention that many students stay at school after 2.30 p.m.?',
      p: ['To ask the council to provide more co-curricular activities', 'To show that the teacher on duty cannot fully solve the problem', 'To explain why the teachers recorded only four near-accidents', 'To suggest that students should go home earlier for safety'], a: 1,
      hurai: `A teacher helps students cross, "However, this is only possible until 2.30 p.m." Students who leave later have no help, so a permanent crossing is needed.` },

    { petikan: 'P3', topik: 'Main idea / purpose', s: 'What is the article mainly about?',
      p: ['How rooftop solar panels work and their benefits and drawbacks', 'Why Malaysia should stop using gas and coal by next year', 'How silicon is mined and made into solar cells', 'Why schools should spend more money on science activities'], a: 0,
      hurai: `The article explains how panels produce electricity, then lists "The benefits" and "some drawbacks", and ends with how some schools pay for them.` },
    { petikan: 'P3', topik: 'Specific detail', s: 'Under the government scheme, what can owners do with unused electricity?',
      p: ['Store it inside the panels until it is needed at night', 'Sell it directly to their neighbours', 'Give it free to nearby schools', 'Send it to the grid to lower their bills'], a: 3,
      hurai: `"Owners can even send unused electricity to the national grid and have its value taken off their bills."` },
    { petikan: 'P3', topik: 'Vocabulary in context', s: 'In “Shade ... can also reduce the output <b>sharply</b>”, the word <b>sharply</b> means',
      p: ['with a pointed edge', 'by a large amount', 'in a cleverly planned way', 'in an angry voice'], a: 1,
      hurai: `Shade blocks sunlight, so the panels produce much less electricity. Here "sharply" describes a large, sudden drop, not a pointed edge or a tone of voice.` },
    { petikan: 'P3', topik: 'Reference', s: 'In the last paragraph, <b>they</b> in “Instead of buying panels, they allow a company to install them” refers to',
      p: ['the solar panels', 'the companies', 'some schools', 'the homes with batteries'], a: 2,
      hurai: `"Some schools have found a way around the cost. Instead of buying panels, they allow a company to install them." The panels are installed; the company does the installing.` },
    { petikan: 'P3', topik: 'Inference / attitude', s: 'Which best describes the writer’s view of rooftop solar power?',
      p: ['Generally positive, while honest about its limits', 'Strongly against it because of the high cost', 'Unsure whether solar panels can work in Malaysia', 'Confident that it can fully replace the national grid'], a: 0,
      hurai: `The writer says "The benefits are clear" but also lists "some drawbacks", such as no power at night, which means homes "still need power from the grid".` }
  ]
});

// UKKM Set 07 — Ujian Keperibadian (Ya/Tidak), 100 item. Item terbalik bukan-kejujuran: 28.
UKKM_PART(7, {
  id: 'per', nama: 'Ujian Keperibadian', ikon: '🧭', minit: 30,
  arahan: "Baca setiap pernyataan dan pilih <b>Ya</b> atau <b>Tidak</b> mengikut diri anda yang sebenar. Jawab dengan jujur, logik dan konsisten; beberapa idea diulang dengan ayat berbeza. Bagi situasi asrama yang belum anda alami, jawab mengikut tindakan yang paling mungkin anda lakukan. Masa: kira-kira 18 saat bagi setiap item.",
  skala: ["Ya","Tidak"],
  item: [
    { s: "Saya menghantar kerja yang dibuat oleh abang atau kakak saya atas nama saya.", trait: "Integriti & Disiplin Diri", pos: 1, hurai: "Menghantar kerja orang lain sebagai kerja sendiri ialah penipuan." },
    { s: "Saya mengutamakan keuntungan diri sendiri walaupun tindakan itu merugikan kumpulan.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 1, hurai: "Mementingkan diri menjejaskan kejayaan pasukan." },
    { s: "Kadang-kadang saya berangan-angan ketika guru sedang mengajar.", trait: "Skala Kejujuran", pos: 0, hurai: "Mengakui perkara biasa menunjukkan kejujuran." },
    { s: "Saya menetapkan masa khusus setiap hari untuk latihan matematik.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Latihan berkala menunjukkan motivasi." },
    { s: "Saya mudah hilang sabar dan meninggikan suara apabila ahli kumpulan lambat memahami arahan.", trait: "Kepimpinan & Inisiatif", pos: 1, hurai: "Pemimpin perlu sabar dan menerangkan dengan jelas." },
    { id: 'ib2', pasangan: 'ib1', s: "Jika soalan ujian tersebar dalam kumpulan sembang, saya menggunakannya untuk persediaan.", trait: "Integriti & Disiplin Diri", pos: 1, hurai: "Menggunakan soalan bocor ialah ketidakjujuran akademik." },
    { s: "Saya memilih kawan rapat sebagai ahli kumpulan walaupun ada pelajar lain yang lebih sesuai untuk tugas itu.", trait: "Kepimpinan & Inisiatif", pos: 1, hurai: "Pemimpin memilih ahli berdasarkan kesesuaian, demi mutu kerja." },
    { s: "Saya mengekalkan hubungan baik dengan rakan walaupun kami bersaing dalam pelajaran.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 0, hurai: "Persaingan sihat tidak merosakkan persahabatan." },
    { s: "Saya suka mencuba pelbagai cara, seperti rajah atau model, untuk memahami konsep sains.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Rajah membantu kefahaman konsep." },
    { id: 'eb2', pasangan: 'eb1', s: "Saya berasa sangat marah dan kecewa apabila rancangan saya berubah pada saat akhir.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 1, hurai: "Reaksi berlebihan terhadap perubahan menunjukkan emosi kurang stabil." },
    { s: "Saya mencadangkan aktiviti baharu untuk kelab apabila aktiviti lama menjadi membosankan.", trait: "Kepimpinan & Inisiatif", pos: 0, hurai: "Membawa idea segar menunjukkan inisiatif." },
    { s: "Saya mencuba lagi selepas gagal dalam ujian kecergasan.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Mencuba semula menunjukkan ketahanan diri." },
    { id: 'mb2', pasangan: 'mb1', s: "Loker saya selalu bersepah sehingga saya lambat mencari barang.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 1, hurai: "Loker bersepah menunjukkan pengurusan diri yang lemah." },
    { s: "Saya mengurus wang tambahan daripada hadiah dengan menyimpannya.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Menyimpan wang menunjukkan disiplin kewangan." },
    { id: 'ea2', pasangan: 'ea1', s: "Saya mengambil masa yang sangat lama untuk berasa selesa di tempat baharu dan sering menyendiri.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 1, hurai: "Penyesuaian yang lambat menyukarkan kehidupan asrama." },
    { s: "Saya mengekalkan sikap sopan walaupun ada orang bersikap kasar kepada saya.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Kawalan emosi dalam provokasi menunjukkan kematangan." },
    { s: "Saya menegur rakan secara peribadi, bukan di hadapan orang ramai.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 0, hurai: "Teguran peribadi menjaga maruah rakan." },
    { s: "Saya senang berkongsi idea dalam kumpulan yang ahlinya pelbagai latar belakang.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 0, hurai: "Kepelbagaian idea menguatkan pasukan." },
    { s: "Saya membersihkan meja makan selepas makan di dewan selera.", trait: "Integriti & Disiplin Diri", pos: 0, hurai: "Bertanggungjawab terhadap kebersihan menunjukkan disiplin." },
    { s: "Saya hadir ke kelas tambahan walaupun saya lebih suka berehat.", trait: "Integriti & Disiplin Diri", pos: 0, hurai: "Kawalan diri mengatasi keinginan untuk bersantai." },
    { s: "Saya dapat menerima kata-kata nasihat yang keras dengan tenang.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Menerima nasihat dengan tenang menunjukkan kematangan." },
    { s: "Saya boleh mengawal perasaan apabila keputusan ujian rakan lebih baik daripada keputusan saya.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Mengawal rasa iri menunjukkan kematangan emosi." },
    { s: "Saya mendengar semua pandangan sebelum membuat keputusan untuk kumpulan.", trait: "Kepimpinan & Inisiatif", pos: 0, hurai: "Mendengar dahulu menjadikan keputusan pemimpin lebih adil." },
    { s: "Saya sentiasa bersikap sopan kepada semua orang dalam setiap keadaan.", trait: "Skala Kejujuran", pos: 1, hurai: "Tiada manusia yang sentiasa sopan; jawapan jujur lebih dipercayai." },
    { s: "Saya menggunakan kata-kata kesat apabila bergurau dengan rakan.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 1, hurai: "Gurauan kasar boleh menyakiti hati dan menimbulkan konflik." },
    { s: "Saya mendamaikan rakan sedorm yang bergaduh kerana perkara kecil.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 0, hurai: "Menjadi pendamai menjaga keharmonian dorm." },
    { s: "Saya membantu ketua kelas apabila dia kelihatan terbeban dengan tugas.", trait: "Kepimpinan & Inisiatif", pos: 0, hurai: "Menyokong pemimpin lain juga ialah tanda semangat kepimpinan." },
    { id: 'ma1', pasangan: 'ma2', s: "Saya boleh mengurus diri dengan baik apabila ibu bapa sibuk dan sukar dihubungi.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Kemandirian penting apabila sokongan keluarga terhad." },
    { s: "Saya menyusun strategi bersama pasukan sebelum perlawanan bermula.", trait: "Kepimpinan & Inisiatif", pos: 0, hurai: "Merancang strategi bersama menunjukkan kepimpinan yang tersusun." },
    { id: 'sa1', pasangan: 'sa2', s: "Saya suka menyiasat sendiri jawapan kepada persoalan yang menarik minat saya.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Menyiasat sendiri menunjukkan minat ilmu." },
    { s: "Saya mengulang kaji pelajaran pada waktu yang sama setiap hari.", trait: "Integriti & Disiplin Diri", pos: 0, hurai: "Rutin yang konsisten membentuk disiplin diri." },
    { s: "Saya berasa seronok apabila dapat bekerja dalam pasukan yang bersatu.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 0, hurai: "Menikmati kerja berpasukan sesuai dengan kehidupan MRSM." },
    { s: "Saya membersihkan kasut sukan selepas aktiviti petang.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Menjaga barang sendiri menunjukkan tanggungjawab." },
    { s: "Ada kalanya saya membeli sesuatu yang kemudiannya saya rasa tidak perlu.", trait: "Skala Kejujuran", pos: 0, hurai: "Perkara ini biasa; mengakuinya ialah jawapan jujur." },
    { s: "Saya mampu menenangkan diri selepas bermimpi buruk dan tidur semula.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Menenangkan diri menunjukkan kestabilan emosi." },
    { s: "Saya berani mengaku saya tidak tahu dan bertanya apabila memimpin sesuatu tugas.", trait: "Kepimpinan & Inisiatif", pos: 0, hurai: "Pemimpin yang baik jujur tentang had dirinya dan mencari bantuan." },
    { s: "Saya tetap bersemangat walaupun guru memberi banyak kerja rumah.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Semangat yang kekal menunjukkan daya tahan." },
    { id: 'ba1', pasangan: 'ba2', s: "Saya menyumbang tenaga semasa gotong-royong membersihkan asrama.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 0, hurai: "Bergotong-royong menunjukkan semangat kerjasama." },
    { s: "Saya pernah menyalahkan orang lain atas kesilapan kecil saya.", trait: "Skala Kejujuran", pos: 0, hurai: "Mengakui kesilapan lalu menunjukkan kejujuran." },
    { s: "Saya suka menjalankan kajian kecil untuk projek sekolah.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Kajian kecil melatih kemahiran saintifik." },
    { s: "Saya selalu menyiapkan kerja rumah sains secara tergesa-gesa supaya cepat selesai.", trait: "Minat Ilmu, Sains & Motivasi", pos: 1, hurai: "Kerja tergesa-gesa mengurangkan pembelajaran." },
    { id: 'ka2', pasangan: 'ka1', s: "Saya mengelak daripada tugas yang remeh atau kotor walaupun kumpulan saya memerlukannya.", trait: "Kepimpinan & Inisiatif", pos: 1, hurai: "Mengelak tugas penting yang kurang menarik menunjukkan kepimpinan yang lemah." },
    { s: "Saya berasa resah sepanjang malam jika esoknya ada ujian kecil.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 1, hurai: "Kebimbangan berlebihan terhadap ujian kecil menjejaskan rehat." },
    { s: "Saya mengemas barang sendiri sebelum cuti tanpa bantuan keluarga.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Berdikari dalam urusan sendiri penting di asrama." },
    { s: "Saya meminta abang atau kakak menguruskan semua urusan saya di sekolah.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 1, hurai: "Pelajar perlu mampu menguruskan urusan sendiri." },
    { s: "Saya meminta pendapat rakan sebilik sebelum mengubah susunan perabot di bilik.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 0, hurai: "Berunding menunjukkan hormat terhadap orang yang berkongsi ruang." },
    { id: 'ia1', pasangan: 'ia2', s: "Saya mengekalkan disiplin belajar walaupun ibu bapa saya berada jauh.", trait: "Integriti & Disiplin Diri", pos: 0, hurai: "Disiplin dalaman penting ketika hidup di asrama." },
    { s: "Saya mengurus masa supaya sempat membasuh pakaian pada hujung minggu.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Perancangan tugas peribadi menunjukkan berdikari." },
    { s: "Saya sentiasa menyimpan setiap barang di tempat asalnya sejurus selepas digunakan.", trait: "Skala Kejujuran", pos: 1, hurai: "Hampir setiap orang pernah terlupa; menafikannya kelihatan tidak jujur." },
    { s: "Saya menyimpan resit setiap kali menggunakan wang tabung kelas.", trait: "Integriti & Disiplin Diri", pos: 0, hurai: "Ketelusan dalam wang awam menunjukkan integriti." },
    { s: "Saya bosan apabila perlu membaca jadual dan graf.", trait: "Minat Ilmu, Sains & Motivasi", pos: 1, hurai: "Kemahiran membaca data penting dalam sains." },
    { s: "Saya kekal tenang walaupun peluang berhubung dengan keluarga di asrama terhad.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Kesediaan berjauhan dengan keluarga penting di asrama." },
    { s: "Saya menepati masa apabila berjanji untuk belajar bersama rakan.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 0, hurai: "Menepati janji dengan rakan menunjukkan rasa hormat." },
    { id: 'sb1', pasangan: 'sb2', s: "Saya bersungguh-sungguh dalam subjek yang saya rasa sukar.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Kegigihan dalam subjek sukar menunjukkan motivasi." },
    { s: "Saya menghentak kaki dan merungut kuat apabila disuruh membuat kerja yang membosankan.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 1, hurai: "Merungut secara kasar menunjukkan kawalan emosi yang lemah." },
    { id: 'mb1', pasangan: 'mb2', s: "Saya menyusun pakaian mengikut jenis di dalam loker supaya mudah dicari.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Kekemasan menjimatkan masa di asrama." },
    { s: "Saya memberi peluang kepada rakan yang jarang bermain untuk turut serta dalam pasukan.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 0, hurai: "Memberi peluang menunjukkan sikap inklusif." },
    { s: "Saya rasa ilmu sains terlalu rumit untuk orang seperti saya.", trait: "Minat Ilmu, Sains & Motivasi", pos: 1, hurai: "Keyakinan terhadap kebolehan sendiri penting untuk minat sains." },
    { s: "Saya memalingkan muka apabila pelajar yang saya rasa menjengkelkan menegur saya.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 1, hurai: "Sikap dingin menjejaskan hubungan sosial." },
    { s: "Saya tidak pernah berasa jengkel apabila diganggu ketika sibuk.", trait: "Skala Kejujuran", pos: 1, hurai: "Rasa jengkel ialah reaksi normal; mengakuinya ialah jawapan jujur." },
    { s: "Saya mengikut arahan pengawas walaupun dia lebih muda daripada saya.", trait: "Integriti & Disiplin Diri", pos: 0, hurai: "Menghormati pihak yang bertugas menunjukkan disiplin." },
    { id: 'ea1', pasangan: 'ea2', s: "Saya cepat menyesuaikan diri dengan tempat dan orang baharu.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Kebolehsuaian penting untuk kehidupan asrama." },
    { s: "Saya tidak pernah sekali pun berasa malas untuk menghadiri aktiviti kokurikulum.", trait: "Skala Kejujuran", pos: 1, hurai: "Hampir semua pelajar pernah berasa malas sekali-sekala; jawapan jujur lebih realistik." },
    { s: "Saya sanggup menjadi ketua projek kitar semula di sekolah.", trait: "Kepimpinan & Inisiatif", pos: 0, hurai: "Mengetuai projek komuniti menunjukkan inisiatif dan tanggungjawab." },
    { s: "Saya membantu rakan yang baru pulang dari hospital mengejar pelajaran.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 0, hurai: "Membantu rakan yang tertinggal menunjukkan empati." },
    { s: "Saya suka mengikuti rancangan atau ceramah tentang sains untuk menambah pengetahuan.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Menambah ilmu melalui pelbagai media menunjukkan minat." },
    { s: "Saya mempunyai keyakinan bahawa saya mampu hidup berdikari di asrama.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Keyakinan diri membantu penyesuaian." },
    { s: "Saya membaca arahan eksperimen dengan teliti sebelum memulakannya.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Ketelitian penting dalam kerja makmal." },
    { s: "Saya berminat dengan teknologi seperti dron, robot dan kecerdasan buatan.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Minat teknologi selari dengan matlamat STEM MRSM." },
    { s: "Saya memakai baju yang sama berhari-hari kerana malas membasuh.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 1, hurai: "Kebersihan diri ialah tanggungjawab peribadi." },
    { s: "Saya menunaikan tugas yang saya janjikan kepada guru walaupun saya penat.", trait: "Integriti & Disiplin Diri", pos: 0, hurai: "Menunaikan janji menunjukkan amanah." },
    { s: "Saya memulangkan buku teks pinjaman dalam keadaan baik.", trait: "Integriti & Disiplin Diri", pos: 0, hurai: "Menjaga barang pinjaman menunjukkan amanah." },
    { s: "Saya meluangkan masa untuk berehat selepas minggu yang memenatkan.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Mengenali keperluan diri membantu kestabilan emosi." },
    { s: "Saya boleh berkongsi rak kasut dan ampaian dengan rakan secara teratur.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Berkongsi kemudahan dengan teratur penting di asrama." },
    { s: "Saya mengakui bahawa saya tersilap apabila rakan menunjukkan kesalahan dalam jawapan saya.", trait: "Integriti & Disiplin Diri", pos: 0, hurai: "Mengakui kesilapan menunjukkan kejujuran intelektual." },
    { s: "Saya menghabiskan wang saku untuk makanan ringan dan terpaksa meminjam wang rakan.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 1, hurai: "Pengurusan wang yang lemah menyusahkan diri dan rakan." },
    { id: 'eb1', pasangan: 'eb2', s: "Saya kekal tenang apabila rancangan saya terpaksa diubah pada saat akhir.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Ketenangan menghadapi perubahan menunjukkan kestabilan emosi." },
    { s: "Saya tahu cara meminta bantuan kaunselor apabila memerlukannya.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Mengetahui saluran bantuan menunjukkan kesediaan hidup berasrama." },
    { s: "Saya menyimpan sendiri tiket dan dokumen perjalanan dengan selamat semasa pulang bercuti.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Menguruskan perjalanan sendiri menunjukkan kemandirian." },
    { s: "Saya rasa urusan menganjurkan aktiviti kelas ialah kerja guru semata-mata.", trait: "Kepimpinan & Inisiatif", pos: 1, hurai: "Pelajar yang berinisiatif turut membantu menganjurkan aktiviti." },
    { s: "Saya boleh menerima apabila permohonan saya untuk sesuatu program ditolak.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Menerima penolakan dengan tenang membina daya tahan." },
    { id: 'sa2', pasangan: 'sa1', s: "Apabila ada persoalan yang menarik, saya membiarkannya berlalu begitu sahaja.", trait: "Minat Ilmu, Sains & Motivasi", pos: 1, hurai: "Membiarkan persoalan berlalu menunjukkan rasa ingin tahu yang rendah." },
    { id: 'ma2', pasangan: 'ma1', s: "Saya berasa sangat bingung dan tertekan jika ibu bapa lambat menjawab panggilan saya.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 1, hurai: "Pelajar asrama perlu mampu bertindak sendiri." },
    { s: "Saya mengingatkan rakan sedorm supaya bersiap awal untuk perhimpunan pagi.", trait: "Kepimpinan & Inisiatif", pos: 0, hurai: "Membantu orang lain menepati masa menunjukkan kepimpinan." },
    { id: 'ka1', pasangan: 'ka2', s: "Saya sanggup melakukan tugas yang dielakkan oleh orang lain jika tugas itu penting untuk kumpulan.", trait: "Kepimpinan & Inisiatif", pos: 0, hurai: "Pemimpin sanggup berkorban demi kejayaan pasukan." },
    { id: 'ib1', pasangan: 'ib2', s: "Jika soalan ujian tersebar sebelum ujian, saya menolak untuk melihatnya.", trait: "Integriti & Disiplin Diri", pos: 0, hurai: "Menolak soalan bocor menunjukkan integriti tinggi." },
    { id: 'ia2', pasangan: 'ia1', s: "Apabila tiada ibu bapa yang memantau, saya bersantai dan melupakan jadual belajar.", trait: "Integriti & Disiplin Diri", pos: 1, hurai: "Disiplin yang bergantung pada pemantauan tidak sesuai untuk kehidupan asrama." },
    { s: "Saya merancang pakaian untuk aktiviti luar mengikut ramalan cuaca.", trait: "Kemandirian & Kesediaan Hidup Berasrama", pos: 0, hurai: "Perancangan sendiri menunjukkan kemandirian." },
    { s: "Saya mahu belajar di institusi yang menekankan sains dan teknologi.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Aspirasi ini selari dengan MRSM." },
    { s: "Saya tidak pernah mengambil kesempatan atas kebaikan orang lain.", trait: "Skala Kejujuran", pos: 1, hurai: "Setiap orang pernah tersilap; jawapan jujur lebih dipercayai." },
    { s: "Saya menyorokkan telefon bimbit di dalam beg semasa pemeriksaan dorm.", trait: "Integriti & Disiplin Diri", pos: 1, hurai: "Menyembunyikan barang larangan melanggar peraturan dan integriti." },
    { s: "Saya membuat keputusan pantas apabila keadaan memerlukan tindakan segera.", trait: "Kepimpinan & Inisiatif", pos: 0, hurai: "Pemimpin perlu tegas dan pantas dalam keadaan mendesak." },
    { s: "Saya membaca maklum balas guru dan memperbaiki kerja saya.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Memanfaatkan maklum balas menunjukkan kesungguhan." },
    { id: 'ba2', pasangan: 'ba1', s: "Semasa gotong-royong, saya mencari tempat untuk berehat sementara rakan lain bekerja.", trait: "Kerja Berpasukan & Hubungan Sosial", pos: 1, hurai: "Mengelak kerja bersama membebankan rakan lain." },
    { s: "Saya memberi taklimat ringkas kepada ahli kumpulan sebelum memulakan tugasan projek.", trait: "Kepimpinan & Inisiatif", pos: 0, hurai: "Taklimat yang jelas membantu ahli bersedia." },
    { s: "Saya menghentikan hobi kegemaran sebaik sahaja saya gagal sekali.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 1, hurai: "Berhenti selepas sekali gagal menunjukkan ketahanan yang rendah." },
    { s: "Saya mudah menangis apabila ditegur oleh warden di hadapan rakan.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 1, hurai: "Terlalu mudah terkesan dengan teguran menyukarkan kehidupan asrama." },
    { s: "Saya berasa teruja apabila dapat menguji idea saya sendiri.", trait: "Minat Ilmu, Sains & Motivasi", pos: 0, hurai: "Keterujaan menguji idea ialah semangat saintis." },
    { id: 'sb2', pasangan: 'sb1', s: "Saya mengabaikan subjek yang saya rasa sukar dan menumpukan perhatian kepada subjek yang mudah sahaja.", trait: "Minat Ilmu, Sains & Motivasi", pos: 1, hurai: "Mengelak subjek sukar menghalang perkembangan." },
    { s: "Saya menganggap kritikan rakan sebagai maklumat, bukan serangan peribadi.", trait: "Kestabilan Emosi & Ketahanan Diri", pos: 0, hurai: "Menilai kritikan secara rasional menunjukkan emosi yang stabil." }
  ]
});

UKKM.push({ set: 7, tajuk: 'Set 7', bahagian: ['mat', 'sains', 'eng', 'per'].map(k => B[k]).filter(Boolean) }); })();
