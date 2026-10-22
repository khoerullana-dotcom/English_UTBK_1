import { Question } from '../types/quiz';

export const QUESTIONS: Question[] = [
  // ==================== PASSAGE 1: QUESTIONS 1 - 5 ====================
  {
    id: 1,
    passageId: 'passage-1',
    questionText: 'What is the main idea of the passage?',
    options: [
      'Generative AI has permanently incapacitated human neuroplasticity across all demographic groups.',
      'The human brain is unable to adapt to technological innovations without severe cognitive impairment.',
      'While outsourcing tasks to generative AI may risk cognitive atrophy, adapting education could redirect human intellect toward higher-order strategic reasoning.',
      'Writing systems and calculating devices in the past had far more detrimental neurological consequences than modern AI.',
      'Cognitive scientists have concluded that artificial intelligence should be strictly prohibited in secondary curricula.'
    ],
    correctAnswer: 2, // C
    skillType: 'Main Idea & Topic',
    explanation: {
      summary: 'Paragraf 1 menjelaskan prinsip neuroplastisitas, Paragraf 2 membahas potensi bahaya cognitive atrophy akibat ketergantungan pada AI, dan Paragraf 3 memberikan pandangan berimbang bahwa AI dapat membebaskan pikiran manusia untuk berpikir strategis tingkat tinggi bila kurikulum pendidikan disesuaikan.',
      clueSentence: 'Paragraph 3: "...intellectual obsolescence is not inevitable; rather, pedagogical paradigms must actively pivot... to meta-strategic reasoning."',
      optionAnalysis: {
        A: 'Salah. Kata "permanently incapacitated" terlalu ekstrem dan bertentangan dengan teks yang menyebut kepunahan intelektual bukanlah hal yang tak terelakkan.',
        B: 'Salah. Paragraf 1 justru menegaskan bahwa otak manusia memiliki "extraordinary physiological capacity to reorganize" (kemampuan adaptasi luar biasa).',
        C: 'BENAR. Merangkum sintesis Paragraf 2 (risiko cognitive atrophy) dan Paragraf 3 (peluang redirection toward higher-order thinking dengan perubahan kurikulum).',
        D: 'Salah. Paragraf 3 menyebut penemuan tulisan dan kalkulator sebagai contoh positif pergeseran kapasitas mental dari menghafal ke sintesis konseptual.',
        E: 'Salah. Teks tidak pernah menyarankan pelarangan AI secara ketat, melainkan adaptasi pedagogis untuk melatih siswa mengevaluasi output AI.'
      },
      strategyTip: 'Cari kalimat tesis atau kesimpulan di paragraf terakhir yang mendamaikan dua sudut pandang (kontras antara kekhawatiran di paragraf 2 dan solusi di paragraf 3).',
      keyVocab: [
        { word: 'Neuroplasticity', meaning: 'Kemampuan otak untuk beradaptasi dan membentuk jalur saraf baru' },
        { word: 'Cognitive atrophy', meaning: 'Penyusutan/penurunan fungsi kemampuan berpikir akibat jarang digunakan' },
        { word: 'Obsolescence', meaning: 'Keusangan / kondisi menjadi tidak terpakai lagi' }
      ]
    }
  },
  {
    id: 2,
    passageId: 'passage-1',
    questionText: 'The author mentions "use it or lose it" in paragraph 1 primarily to emphasize that...',
    options: [
      'unexercised cognitive circuits gradually degrade through biological synaptic pruning.',
      'human memory capacity has already reached its evolutionary zenith.',
      'technological tools naturally improve brain myelination without mental effort.',
      'older individuals inevitably lose all neuroplastic flexibility.',
      'computational algorithms mimic human neural pruning mechanisms.'
    ],
    correctAnswer: 0, // A
    skillType: 'Specific Detail & Fact',
    explanation: {
      summary: 'Prinsip "use it or lose it" dihubungkan langsung dengan kalimat berikutnya: jika jalur saraf aktif, mielinisasi meningkat; namun jika tidak digunakan, terjadi synaptic pruning (pemangkasan sinapsis).',
      clueSentence: 'Paragraph 1: "When neural circuits undergo repetitive activation, myelination increases... Conversely, unprompted cognitive pathways gradually undergo synaptic pruning, diminishing their functional efficiency over extended periods."',
      optionAnalysis: {
        A: 'BENAR. Sesuai langsung dengan penjelasan bahwa sirkuit otak yang tidak dilatih akan mengalami degradasi efisiensi fungsi melalui proses pruning biologis.',
        B: 'Salah. Teks tidak menyatakan bahwa memori manusia telah mencapai puncak evolusinya ("evolutionary zenith").',
        C: 'Salah. Teknologi justru dikhawatirkan mengurangi usaha mental, bukan meningkatkan mielinisasi tanpa usaha.',
        D: 'Salah. Tidak ada klaim bahwa lansia kehilangan seluruh fleksibilitas neuroplastisitasnya.',
        E: 'Salah. Frasa tersebut membicarakan biologi saraf manusia, bukan cara kerja algoritma komputer.'
      },
      strategyTip: 'Perhatikan kalimat sebelum dan sesudah frasa yang dikutip. Kata penghubung "Conversely" (sebaliknya) memperjelas konsekuensi jika sirkuit saraf tidak dipakai.',
      keyVocab: [
        { word: 'Synaptic pruning', meaning: 'Pemangkasan sinapsis saraf yang tidak aktif secara alami' },
        { word: 'Myelination', meaning: 'Pembentukan selubung mielin yang mempercepat hantaran impuls saraf' }
      ]
    }
  },
  {
    id: 3,
    passageId: 'passage-1',
    questionText: 'The word "subdued" in paragraph 2 is closest in meaning to...',
    options: [
      'amplified',
      'diminished',
      'erratic',
      'synchronized',
      'impervious'
    ],
    correctAnswer: 1, // B
    skillType: 'Vocabulary in Context',
    explanation: {
      summary: 'Dalam konteks "...subdued blood-oxygen-level-dependent (BOLD) responses in frontal executive networks when tasks are mediated by automated algorithmic prompts compared to unassisted cognitive exertion", kata "subdued" bermakna teredam, berkurang, atau melemah (diminished / suppressed).',
      clueSentence: 'Paragraph 2: "...engages in noticeably less metabolic exertion. Neuroimaging studies demonstrate subdued blood-oxygen-level-dependent (BOLD) responses..."',
      optionAnalysis: {
        A: 'Salah. "Amplified" berarti diperkuat / diperbesar (antonim).',
        B: 'BENAR. "Diminished" berarti berkurang, menyusut, atau melemah, selaras dengan "noticeably less metabolic exertion".',
        C: 'Salah. "Erratic" berarti tidak menentu atau kacau.',
        D: 'Salah. "Synchronized" berarti terjadi secara serempak / tersinkronisasi.',
        E: 'Salah. "Impervious" berarti kebal atau tidak dapat ditembus.'
      },
      strategyTip: 'Lihat kata kunci sebelumnya: "less metabolic exertion" mengindikasikan bahwa respon otak mengalami penurunan (penurunan = diminished/subdued).',
      keyVocab: [
        { word: 'Subdued', meaning: 'Teredam, berkurang, tidak intens' },
        { word: 'Exertion', meaning: 'Pengerahan tenaga/upaya' }
      ]
    }
  },
  {
    id: 4,
    passageId: 'passage-1',
    questionText: 'According to paragraph 3, how should modern education respond to the rise of generative AI?',
    options: [
      'By reinstating strict memorization drills to prevent neural pruning.',
      'By banning internet connectivity during all instructional hours.',
      'By teaching students to critically interrogate algorithmic outputs and identify hallucinations.',
      'By replacing human instructors entirely with automated conversational models.',
      'By avoiding multidisciplinary projects in favor of isolated syntactic exercises.'
    ],
    correctAnswer: 2, // C
    skillType: 'Specific Detail & Fact',
    explanation: {
      summary: 'Paragraf 3 secara eksplisit mengemukakan bahwa alih-alih menguji hafalan biasa, sekolah harus melatih siswa untuk menginterogasi luaran algoritma, mendeteksi bias halusinasi, dan melakukan sintesis multidisiplin.',
      clueSentence: 'Paragraph 3: "...curricula must train learners to interrogate algorithmic outputs, detect nuanced hallucinatory bias, and orchestrate complex multidisciplinary synthesis."',
      optionAnalysis: {
        A: 'Salah. Teks menyatakan "Instead of evaluating rudimentary information recall" (bukan malah mengembalikan hafalan).',
        B: 'Salah. Tidak ada anjuran memutus koneksi internet.',
        C: 'BENAR. Sesuai persis dengan teks: "train learners to interrogate algorithmic outputs, detect nuanced hallucinatory bias".',
        D: 'Salah. Menggantikan guru manusia tidak pernah dianjurkan.',
        E: 'Salah. Teks justru menganjurkan "orchestrate complex multidisciplinary synthesis" (sintesis lintas disiplin).'
      },
      strategyTip: 'Cari frasa kunci dalam teks setelah kata "must train learners to...". Jangan terkecoh opsi ekstrim.',
      keyVocab: [
        { word: 'Interrogate', meaning: 'Memeriksa secara kritis / mempertanyakan secara mendalam' },
        { word: 'Hallucinatory bias', meaning: 'Kecenderungan AI mengarang informasi yang keliru (halusinasi)' }
      ]
    }
  },
  {
    id: 5,
    passageId: 'passage-1',
    questionText: 'Which of the following best reflects the author\'s tone regarding the future of human intellect in the AI era?',
    options: [
      'Uncompromisingly fatalistic and despairing',
      'Balanced and pragmatically optimistic',
      'Openly scornful and dismissive of technology',
      'Completely indifferent and passive',
      'Wildly ecstatic and utopian'
    ],
    correctAnswer: 1, // B
    skillType: 'Author Tone & Attitude',
    explanation: {
      summary: 'Penulis mengakui risiko neurobiologis nyata (atrophy), namun menolak pandangan panik yang berlebihan (alarmist), dan memberikan solusi praktis perubahan paradigma pendidikan agar kecerdasan manusia naik ke level meta-strategis. Sikap ini seimbang dan optimis secara pragmatis.',
      clueSentence: 'Paragraph 3: "Under this framework, intellectual obsolescence is not inevitable; rather, pedagogical paradigms must actively pivot."',
      optionAnalysis: {
        A: 'Salah. Fatalistik berarti pasrah pada nasib buruk, padahal penulis menyatakan "intellectual obsolescence is not inevitable".',
        B: 'BENAR. Balanced (menimbang risiko dan peluang) dan pragmatically optimistic (optimis jika ada langkah nyata adaptasi kurikulum).',
        C: 'Salah. Scornful berarti mencemooh, bukan nada tulisan akademis ini.',
        D: 'Salah. Penulis sangat peduli dan memberikan seruan aksi, bukan acuh tak acuh (indifferent).',
        E: 'Salah. Ecstatic/utopian berarti terlalu memuja tanpa melihat risiko, padahal risiko diuraikan mendalam di Paragraf 2.'
      },
      strategyTip: 'Perhatikan apakah penulis menggunakan kata moderat seperti "Nevertheless", "could conceivably", "not inevitable", yang mencerminkan sikap analitis dan berimbang (balanced/objective/pragmatic).',
      keyVocab: [
        { word: 'Pragmatic', meaning: 'Praktis, realistis berdasarkan fakta dan tindakan nyata' },
        { word: 'Fatalistic', meaning: 'Pasrah pada takdir buruk tanpa berusaha' }
      ]
    }
  },

  // ==================== PASSAGE 2: QUESTIONS 6 - 10 ====================
  {
    id: 6,
    passageId: 'passage-2',
    questionText: 'What is the primary topic of passage 2?',
    options: [
      'The economic benefits of deep-sea trawling in subpolar regions',
      'The geochemical mechanism of ocean acidification and its cascading ecological threats',
      'The mechanical engineering behind modern artificial coral nurseries',
      'The historical transition of atmospheric gases prior to the Industrial Revolution',
      'The nutritional composition of pteropods compared to commercial fish species'
    ],
    correctAnswer: 1, // B
    skillType: 'Main Idea & Topic',
    explanation: {
      summary: 'Bacaan menjelaskan reaksi kimia masuknya CO2 ke laut yang menghasilkan asam karbonat dan menurunkan ion karbonat (geokimia), serta dampaknya terhadap kalsifikasi karang/pteropoda hingga stabilitas jaring makanan global (ekologi).',
      clueSentence: 'Paragraph 1 & 3: "Ocean acidification represents one of the most insidious geochemical transformations... Disruptions at these trophic baselines propagate systemic instability throughout marine ecosystems..."',
      optionAnalysis: {
        A: 'Salah. Tidak membahas penangkapan ikan dengan pukat laut dalam (deep-sea trawling).',
        B: 'BENAR. Mencakup mekanisme kimia laut (geochemical) dan dampak berantai pada ekosistem laut (cascading ecological threats).',
        C: 'Salah. Teks tidak membahas rekayasa mesin terumbu karang buatan.',
        D: 'Salah. Teks hanya menyebut Revolusi Industri sebagai titik awal emisi, bukan topik utama pergeseran gas purba.',
        E: 'Salah. Pteropoda hanya disinggung sebagai mangsa dasar rantai makanan, bukan profil nutrisinya.'
      },
      strategyTip: 'Topik utama harus mencakup keseluruhan teks dari paragraf 1 (kimiawi) hingga paragraf 3 (dampak ekologi), bukan hanya salah satu detail.',
      keyVocab: [
        { word: 'Acidification', meaning: 'Pengasaman (penurunan pH menjadi lebih asam)' },
        { word: 'Cascading', meaning: 'Berantai / merambat ke tingkat berikutnya' }
      ]
    }
  },
  {
    id: 7,
    passageId: 'passage-2',
    questionText: 'Based on paragraph 1, how does the surge in hydrogen ions affect marine organisms that build shells?',
    options: [
      'It increases available carbonate ions, accelerating skeletal growth.',
      'It directly converts seawater into potable fresh water.',
      'It neutralizes toxic pollutants released by coastal factories.',
      'It diminishes the ambient carbonate ions required to construct calcium carbonate structures.',
      'It elevates the oceanic temperature beyond thermal tolerance levels.'
    ],
    correctAnswer: 3, // D
    skillType: 'Specific Detail & Fact',
    explanation: {
      summary: 'Paragraf 1 menyatakan: "The surge in hydrogen ions concurrently diminishes oceanic pH and consumes ambient carbonate ions." Akibat ion karbonat berkurang, organisme kalsifikasi kesulitan membentuk cangkang kalsium karbonat.',
      clueSentence: 'Paragraph 1: "...which rapidly dissociates into hydrogen ions and bicarbonate. The surge in hydrogen ions concurrently diminishes oceanic pH and consumes ambient carbonate ions."',
      optionAnalysis: {
        A: 'Salah. Kebalikan dari fakta teks (mengurangi, bukan memperbanyak).',
        B: 'Salah. Tidak ada kaitan dengan konversi air tawar.',
        C: 'Salah. Tidak menetralkan polutan.',
        D: 'BENAR. Lonjakan ion hidrogen menurunkan ketersediaan ion karbonat yang dibutuhkan hewan untuk menyintesis cangkang kalsium karbonat.',
        E: 'Salah. Kenaikan ion hidrogen berkaitan dengan keasaman (kimia), bukan suhu termal laut.'
      },
      strategyTip: 'Cari kata "hydrogen ions" pada teks paragraf 1 dan ikuti alur reaksi sebab-akibatnya.',
      keyVocab: [
        { word: 'Ambient', meaning: 'Yang ada di lingkungan sekitarnya' },
        { word: 'Diminish', meaning: 'Mengurangi / menyusutkan' }
      ]
    }
  },
  {
    id: 8,
    passageId: 'passage-2',
    questionText: 'Which of the following can be inferred from paragraph 2 regarding marine calcifiers in waters below equilibrium thresholds?',
    options: [
      'They experience accelerated shell thickening to withstand predation.',
      'Their existing shells begin to dissolve, forcing them to spend energy on survival rather than reproduction.',
      'They undergo genetic mutations allowing them to utilize silicon instead of calcium.',
      'They migrate to terrestrial habitats to seek sheltered freshwater pools.',
      'They become immune to predatory attacks due to hardened calcified armor.'
    ],
    correctAnswer: 1, // B
    skillType: 'Inference & Implication',
    explanation: {
      summary: 'Paragraf 2 menyatakan bahwa di bawah ambang ekuilibrium, struktur kalsium yang sudah ada larut, dan hewan terpaksa mengalihkan energi untuk homeostasis daripada bertumbuh atau bereproduksi.',
      clueSentence: 'Paragraph 2: "...existing calcium structures physically dissolve, forcing organisms to divert vital caloric resources toward biochemical homeostasis rather than growth or reproduction."',
      optionAnalysis: {
        A: 'Salah. Cangkang justru larut dan menipis, bukan menebal.',
        B: 'BENAR. Sesuai langsung dengan inferensi bahwa cangkang larut sehingga energi teralihkan untuk pertahanan diri/homeostasis.',
        C: 'Salah. Tidak ada mutasi menjadi pemakai silikon yang disebutkan.',
        D: 'Salah. Hewan laut ini tidak bermigrasi ke daratan.',
        E: 'Salah. Cangkang melarut membuat mereka semakin rentan, bukan kebal.'
      },
      strategyTip: 'Inferensi yang valid berakar kuat pada data eksplisit di teks tanpa menambahkan asumsi fantastis.',
      keyVocab: [
        { word: 'Equilibrium threshold', meaning: 'Ambang batas keseimbangan kimia' },
        { word: 'Homeostasis', meaning: 'Keseimbangan internal tubuh organisme' }
      ]
    }
  },
  {
    id: 9,
    passageId: 'passage-2',
    questionText: 'The word "insidious" in paragraph 1 is closest in meaning to...',
    options: [
      'gradual and subtle yet deeply harmful',
      'spontaneous and universally celebrated',
      'easily reversible through direct filtration',
      'strictly superficial and inconsequential',
      'loud and immediately conspicuous'
    ],
    correctAnswer: 0, // A
    skillType: 'Vocabulary in Context',
    explanation: {
      summary: '"Insidious" bermakna merayap diam-diam/perlahan namun membawa bahaya yang sangat besar dan mematikan tanpa disadari secara langsung pada awalnya.',
      clueSentence: 'Paragraph 1: "Ocean acidification represents one of the most insidious geochemical transformations provoked by anthropogenic greenhouse emissions."',
      optionAnalysis: {
        A: 'BENAR. "Gradual and subtle yet deeply harmful" mendefinisikan sifat "insidious" dengan sempurna.',
        B: 'Salah. Bukan sesuatu yang dirayakan (celebrated).',
        C: 'Salah. Tidak mudah dibalikkan (easily reversible).',
        D: 'Salah. Bukan hal sepele atau di permukaan saja (inconsequential).',
        E: 'Salah. Kebalikan dari tersembunyi (conspicuous).'
      },
      strategyTip: 'Pelajari kosakata akademis tingkat lanjut yang sering muncul di UTBK seperti insidious, pervasive, pernicious.',
      keyVocab: [
        { word: 'Insidious', meaning: 'Berbahaya secara tersembunyi/merayap perlahan' },
        { word: 'Anthropogenic', meaning: 'Disebabkan oleh aktivitas manusia' }
      ]
    }
  },
  {
    id: 10,
    passageId: 'passage-2',
    questionText: 'Why does the author discuss pteropods in paragraph 3?',
    options: [
      'To prove that microscopic organisms have no influence on pelagic marine predators',
      'To illustrate how harm to baseline organisms can ripple through the entire marine food web',
      'To argue that commercial fisheries should transition to harvesting pteropods for human food',
      'To highlight that whales are exclusively dependent on plant-based phytoplankton',
      'To show that subpolar oceans are completely unaffected by carbon dioxide uptake'
    ],
    correctAnswer: 1, // B
    skillType: 'Text Structure & Logic',
    explanation: {
      summary: 'Pteropoda ("sea butterflies") dijadikan contoh spesies mangsa pondasi rantai makanan. Gangguan pada spesies ini akan merambat (propagate) ke salmon, makarel, dan paus, serta mengancam ketahanan protein manusia.',
      clueSentence: 'Paragraph 3: "...pteropods—often termed \'sea butterflies\'—serve as foundational prey species... Disruptions at these trophic baselines propagate systemic instability throughout marine ecosystems..."',
      optionAnalysis: {
        A: 'Salah. Teks menyatakan sebaliknya, pteropoda justru sangat krusial bagi predator.',
        B: 'BENAR. Pteropoda dicontohkan untuk membuktikan bahwa dampak pada tingkat trofik dasar akan merambat (ripple / propagate) ke seluruh rantai makanan.',
        C: 'Salah. Teks tidak menyarankan manusia memakan pteropoda secara langsung.',
        D: 'Salah. Teks menyebut paus memakan pteropoda (zooplankton/moluska kecil), bukan hanya fitoplankton.',
        E: 'Salah. Wilayah subpolar justru sangat rentan terhadap pengasaman.'
      },
      strategyTip: 'Tanyakan: "Mengapa penulis menyertakan contoh khusus ini?" Jawabannya biasanya ada di kalimat pengait sebelum atau sesudah contoh tersebut.',
      keyVocab: [
        { word: 'Trophic baseline', meaning: 'Dasar tingkatan trofik (tingkat dasar jaring makanan)' },
        { word: 'Propagate', meaning: 'Merambat, menyebar, meluas' }
      ]
    }
  },

  // ==================== PASSAGE 3: QUESTIONS 11 - 15 ====================
  {
    id: 11,
    passageId: 'passage-3',
    questionText: 'According to paragraph 1, what is the primary biological reason adolescents tend to stay awake later at night?',
    options: [
      'A permanent degeneration of the hypothalamic suprachiasmatic nucleus',
      'An intentional lifestyle choice driven entirely by academic homework demands',
      'A natural delay of approximately two hours in the nocturnal secretion of melatonin',
      'An inability of the pineal gland to produce any melatonin during puberty',
      'A psychological resistance to parental sleep recommendations'
    ],
    correctAnswer: 2, // C
    skillType: 'Specific Detail & Fact',
    explanation: {
      summary: 'Paragraf 1 menyatakan bahwa selama masa pubertas, sekresi melatonin pada malam hari oleh kelenjar pineal secara sistematis tertunda sekitar dua jam dibandingkan anak-anak maupun orang dewasa.',
      clueSentence: 'Paragraph 1: "...the nocturnal secretion of melatonin by the pineal gland is systematically postponed by approximately two hours relative to both pre-pubescent children and mature adults."',
      optionAnalysis: {
        A: 'Salah. Bukan kerusakan permanen (degeneration), melainkan pergeseran waktu biologis normal.',
        B: 'Salah. Ini faktor biologis bawaan (endokrin/sirkadian), bukan sekadar gaya hidup.',
        C: 'BENAR. Sesuai langsung dengan pernyataan penundaan sekresi melatonin selama 2 jam.',
        D: 'Salah. Kelenjar pineal tetap memproduksi melatonin, hanya waktunya yang mundur (tertunda).',
        E: 'Salah. Teks menegaskan hal ini terjadi "irrespective of parental bedtimes" karena dorongan biologis, bukan sekadar pembangkangan psikologis.'
      },
      strategyTip: 'Fokus pada kata kunci "biological reason" dan cari organ/hormon yang disebutkan pada paragraf 1 (melatonin, pineal gland).',
      keyVocab: [
        { word: 'Nocturnal', meaning: 'Terjadi pada malam hari' },
        { word: 'Circadian rhythm', meaning: 'Irama sirkadian (siklus biologis 24 jam tubuh)' }
      ]
    }
  },
  {
    id: 12,
    passageId: 'passage-3',
    questionText: 'The phrase "social jetlag" in paragraph 2 refers to the condition where...',
    options: [
      'teenagers travel across multiple international time zones every weekend.',
      'adolescent biological sleep rhythms clash severely with early institutional school schedules.',
      'social media usage replaces all physical face-to-face peer interactions.',
      'students feel disoriented after participating in mandatory team sports.',
      'parents and teachers enforce identical wakefulness routines across all age groups.'
    ],
    correctAnswer: 1, // B
    skillType: 'Inference & Implication',
    explanation: {
      summary: '"Social jetlag" adalah ketidaksesuaian kronis antara jam biologis internal tubuh remaja (yang tertunda) dengan jadwal sosial/sekolah pagi yang menuntut bangun lebih awal.',
      clueSentence: 'Paragraph 2: "Compounding this endogenous delay, modern secondary school schedules impose early morning start times, forcing teenagers into chronic sleep restriction and social jetlag."',
      optionAnalysis: {
        A: 'Salah. Jetlag di sini bersifat kiasan sosial, bukan bepergian ke luar negeri.',
        B: 'BENAR. Menjelaskan konflik antara jam tubuh biologis remaja dengan jadwal masuk sekolah yang terlalu pagi.',
        C: 'Salah. Tidak merujuk pada penggantian interaksi sosial oleh gawai.',
        D: 'Salah. Tidak berkaitan dengan olahraga tim.',
        E: 'Salah. Tidak mendefinisikan fenomena jetlag sosial pada siswa.'
      },
      strategyTip: 'Istilah "social jetlag" menggabungkan konsep biologis dan tuntutan sosial (jadwal sekolah pagi vs biologi tubuh).',
      keyVocab: [
        { word: 'Endogenous', meaning: 'Berasal dari dalam diri/tubuh organisme' },
        { word: 'Truncated', meaning: 'Dipotong / diperpendek sebelum waktunya' }
      ]
    }
  },
  {
    id: 13,
    passageId: 'passage-3',
    questionText: 'How do SWS and REM sleep differently contribute to brain function according to paragraph 2?',
    options: [
      'SWS increases emotional reactivity, while REM eliminates all memory traces.',
      'SWS repairs physical muscular tissues, while REM has no neurological impact.',
      'SWS prunes daytime connections and stabilizes memory, while REM underpins emotional regulation and problem-solving.',
      'SWS is exclusive to adults, whereas REM sleep occurs only during infancy.',
      'Both sleep stages perform identical biochemical functions without any functional division.'
    ],
    correctAnswer: 2, // C
    skillType: 'Specific Detail & Fact',
    explanation: {
      summary: 'Paragraf 2 menyatakan: SWS memangkas koneksi saraf berlebih dan menstabilkan jejak memori di hipokampus, sedangkan REM mendukung regulasi emosi dan pemecahan masalah asosiatif.',
      clueSentence: 'Paragraph 2: "SWS facilitates the synaptic homeostasis hypothesis, pruning redundant daytime connections and stabilizing hippocampal memory traces, whereas REM sleep underpins emotional regulation and complex associative problem-solving."',
      optionAnalysis: {
        A: 'Salah. Terbalik dan salah arah.',
        B: 'Salah. Mengabaikan fungsi neurologis REM yang sangat penting.',
        C: 'BENAR. Tepat memetakan fungsi spesifik SWS (memori & pruning) dan REM (regulasi emosi & problem-solving).',
        D: 'Salah. Kedua fase dialami oleh semua manusia pada tahapan tidur.',
        E: 'Salah. Teks secara eksplisit membedakan peran keduanya (menggunakan kata "whereas").'
      },
      strategyTip: 'Kata penghubung kontras "whereas" menghubungkan dua konsep komparatif yang sering menjadi soal detail di UTBK.',
      keyVocab: [
        { word: 'Pruning', meaning: 'Memangkas / menyeleksi cabang sinapsis' },
        { word: 'Homeostasis', meaning: 'Keseimbangan fungsi biologis stabil' }
      ]
    }
  },
  {
    id: 14,
    passageId: 'passage-3',
    questionText: 'Which finding is NOT reported by school districts that delayed their morning start times to 8:30 AM or later?',
    options: [
      'Measurable improvements in standardized academic achievement',
      'Statistically significant reductions in student absenteeism',
      'Fewer adolescent vehicular traffic collisions',
      'A complete eradication of all psychiatric disorders among teenagers',
      'Better alignment with natural adolescent sleep cycles'
    ],
    correctAnswer: 3, // D
    skillType: 'Specific Detail & Fact',
    explanation: {
      summary: 'Teks melaporkan penurunan absensi, berkurangnya kecelakaan mobil remaja, dan naiknya nilai akademik. Klaim "penghapusan total seluruh gangguan kejiwaan" (complete eradication) tidak pernah dinyatakan dan jelas hiperbolis/tidak logis.',
      clueSentence: 'Paragraph 3: "Districts that have delayed bell times to 8:30 AM or later report statistically significant reductions in absenteeism, fewer adolescent vehicular collisions, and measurable improvements in standardized academic achievement."',
      optionAnalysis: {
        A: 'Ada di teks: "measurable improvements in standardized academic achievement".',
        B: 'Ada di teks: "statistically significant reductions in absenteeism".',
        C: 'Ada di teks: "fewer adolescent vehicular collisions".',
        D: 'BENAR (sebagai jawaban soal "NOT reported"). Teks tidak pernah mengklaim penghapusan total (eradication) gangguan jiwa.',
        E: 'Ada di teks: tujuan utama kebijakan adalah menyelaraskan dengan jam biologis remaja.'
      },
      strategyTip: 'Perhatikan kata "NOT" atau "EXCEPT". Opsi dengan kata absolut seperti "complete eradication of all" hampir selalu salah atau menjadi jawaban soal bertipe pengecualian.',
      keyVocab: [
        { word: 'Absenteeism', meaning: 'Tingkat ketidakhadiran (bolos/absen)' },
        { word: 'Eradication', meaning: 'Pemberantasan tuntas sampai ke akar-akarnya' }
      ]
    }
  },
  {
    id: 15,
    passageId: 'passage-3',
    questionText: 'What is the author\'s primary purpose in writing passage 3?',
    options: [
      'To criticize teenagers for undisciplined nighttime recreational habits',
      'To explain the neurobiological basis of adolescent sleep cycles and advocate for supportive institutional school schedules',
      'To prove that standardized testing should be permanently dismantled worldwide',
      'To market pharmaceutical sleep supplements designed for high school pupils',
      'To demonstrate that adult sleep requirements are identical to adolescent needs'
    ],
    correctAnswer: 1, // B
    skillType: 'Author Tone & Attitude',
    explanation: {
      summary: 'Penulis bertujuan menjelaskan mekanisme biologis (melatonin, SWS, REM) yang mendasari siklus tidur remaja, serta menyuarakan pentingnya penyesuaian jam sekolah agar selaras dengan kebutuhan biologis siswa kelas atas.',
      clueSentence: 'Paragraph 3: "...public health organizations have urged municipal school districts to adjust secondary school start times to align with adolescent biological imperatives."',
      optionAnalysis: {
        A: 'Salah. Penulis tidak menyalahkan remaja karena menunjukkan ini murni proses biologis.',
        B: 'BENAR. Merangkum tujuan eksplanatif (neurobiologis) dan advokasi kebijakan (jadwal sekolah yang suportif).',
        C: 'Salah. Penulis tidak berniat menghapus tes terstandar secara global.',
        D: 'Salah. Tidak ada promosi suplemen tidur komersial.',
        E: 'Salah. Teks justru membedakan kebutuhan dan siklus remaja dengan orang dewasa.'
      },
      strategyTip: 'Primary purpose menghubungkan "isi bahasan" (konten ilmiah) dengan "pesan akhir yang dituju penulis" (kebijakan waktu sekolah).',
      keyVocab: [
        { word: 'Advocate', meaning: 'Menyuarakan / mendukung suatu kebijakan' },
        { word: 'Imperative', meaning: 'Keharusan mendesak / kebutuhan esensial' }
      ]
    }
  },

  // ==================== PASSAGE 4: QUESTIONS 16 - 20 ====================
  {
    id: 16,
    passageId: 'passage-4',
    questionText: 'According to Attention Restoration Theory (ART) described in paragraph 1, mental fatigue occurs when...',
    options: [
      'individuals are deprived of synthetic audio stimulation.',
      'prolonged inhibitory exertion depletes directed attention reserves.',
      'people spend too much time observing natural fractal geometries.',
      'metropolitan inhabitants consume insufficient processed carbohydrates.',
      'the parasympathetic nervous system remains permanently activated.'
    ],
    correctAnswer: 1, // B
    skillType: 'Specific Detail & Fact',
    explanation: {
      summary: 'Paragraf 1 menyatakan: "According to Attention Restoration Theory (ART), prolonged cognitive exertion of this inhibitory mechanism depletes directed attention reserves, yielding mental fatigue, irritability, and diminished executive processing."',
      clueSentence: 'Paragraph 1: "...prolonged cognitive exertion of this inhibitory mechanism depletes directed attention reserves, yielding mental fatigue..."',
      optionAnalysis: {
        A: 'Salah. Tidak ada hubungan dengan kekurangan stimulasi audio sintetis.',
        B: 'BENAR. Pengerahan perhatian terarah secara terus-menerus menguras cadangan perhatian terarah (directed attention), menyebabkan kelelahan mental.',
        C: 'Salah. Mengamati pola fraktal alami justru memulihkan perhatian (Paragraf 2), bukan membuat lelah.',
        D: 'Salah. Tidak membahas asupan karbohidrat.',
        E: 'Salah. Aktivasi parasimpatis justru meredakan stres dan memulihkan tubuh.'
      },
      strategyTip: 'Cari akronim "(ART)" pada paragraf 1 dan baca definisi mekanisme yang menyebabkannya lelah (depletes directed attention reserves).',
      keyVocab: [
        { word: 'Directed attention', meaning: 'Perhatian yang dikendalikan secara sadar dan melelahkan otak' },
        { word: 'Deplete', meaning: 'Menguras / menghabiskan cadangan' }
      ]
    }
  },
  {
    id: 17,
    passageId: 'passage-4',
    questionText: 'The concept of "soft fascination" in paragraph 2 is best described as...',
    options: [
      'an involuntary, effortless engagement with natural patterns that allows the brain\'s executive mechanisms to rest.',
      'an intense, stressful concentration required to decipher complex urban street signs.',
      'a hypnotic trance induced by repetitive commercial video advertisements.',
      'a deliberate mathematical calculation of tree canopy circumferences.',
      'a medical therapy relying on pharmaceutical sedatives for anxiety reduction.'
    ],
    correctAnswer: 0, // A
    skillType: 'Specific Detail & Fact',
    explanation: {
      summary: 'Paragraf 2 mendefinisikan "soft fascination" sebagai keterlibatan persepsi tanpa paksaan dan tanpa usaha keras saat melihat geometri alami, yang memberi kesempatan mekanisme perhatian terarah di korteks prefrontal untuk beristirahat.',
      clueSentence: 'Paragraph 2: "...engages \'soft fascination.\' This involuntary, effortless mode of perceptual engagement allows the prefrontal cortex\'s directed-attention mechanisms to rest and replenish."',
      optionAnalysis: {
        A: 'BENAR. Sesuai langsung dengan penjelasan "involuntary, effortless mode of perceptual engagement" yang mengistirahatkan prefrontal cortex.',
        B: 'Salah. Ini deskripsi dari directed attention / sensory overstimulation di kota.',
        C: 'Salah. Tidak berkaitan dengan iklan komersial.',
        D: 'Salah. Bukan kalkulasi matematika yang melelahkan.',
        E: 'Salah. Bukan terapi obat-obatan penenang kimiawi.'
      },
      strategyTip: 'Perhatikan definisi langsung yang diletakkan persis setelah tanda petik kata kunci di teks bacaan.',
      keyVocab: [
        { word: 'Soft fascination', meaning: 'Kekaguman lembut / keterikatan perhatian tanpa usaha keras pada alam' },
        { word: 'Replenish', meaning: 'Mengisi ulang / memulihkan kembali' }
      ]
    }
  },
  {
    id: 18,
    passageId: 'passage-4',
    questionText: 'Which physiological change is observed when individuals are immersed in urban green spaces according to paragraph 2?',
    options: [
      'Elevated blood pressure and heightened systemic inflammation',
      'Rapid suppression of the parasympathetic nervous system',
      'Activation of the parasympathetic nervous system and reduced blood pressure',
      'Immediate shutdown of all sensory receptors in the auditory canal',
      'A massive spike in salivary cortisol production'
    ],
    correctAnswer: 2, // C
    skillType: 'Specific Detail & Fact',
    explanation: {
      summary: 'Paragraf 2 menyatakan bahwa tes kortisol air liur dan respons kulit menunjukkan penurunan tekanan darah, penurunan inflamasi sistemik, dan aktivasi sistem saraf parasimpatis.',
      clueSentence: 'Paragraph 2: "...immersion in urban green spaces precipitates rapid parasympathetic nervous system activation, reducing blood pressure and systemic inflammation."',
      optionAnalysis: {
        A: 'Salah. Kebalikan dari teks (tekanan darah dan inflamasi justru turun).',
        B: 'Salah. Sistem parasimpatis diaktifkan (activation), bukan ditekan (suppression).',
        C: 'BENAR. Aktivasi saraf parasimpatis dan penurunan tekanan darah adalah fakta eksplisit di paragraf 2.',
        D: 'Salah. Reseptor pendengaran tidak mati.',
        E: 'Salah. Kortisol (hormon stres) justru menurun, bukan melonjak (spike).'
      },
      strategyTip: 'Pastikan membaca arah perubahan: apakah naik (increase) atau turun (reduce). Jangan terkecoh istilah biologi yang mirip.',
      keyVocab: [
        { word: 'Parasympathetic', meaning: 'Sistem saraf parasimpatis (yang merangsang relaksasi dan istirahat)' },
        { word: 'Cortisol', meaning: 'Hormon penanda stres' }
      ]
    }
  },
  {
    id: 19,
    passageId: 'passage-4',
    questionText: 'In paragraph 3, the author argues that biophilic infrastructure in cities should be treated as...',
    options: [
      'an ornamental luxury reserved solely for affluent gated neighborhoods.',
      'an obsolete architectural fad with negligible public value.',
      'an expensive municipal burden that diverts funds from law enforcement.',
      'an essential public health intervention that fosters social cohesion and civic trust.',
      'a temporary exhibition that should be dismantled during winter months.'
    ],
    correctAnswer: 3, // D
    skillType: 'Specific Detail & Fact',
    explanation: {
      summary: 'Paragraf 3 menyatakan bahwa ruang hijau bukan sekadar kemewahan dekoratif (decorative luxury), melainkan intervensi kesehatan publik mutlak (non-negotiable public health intervention) yang meningkatkan kepercayaan warga dan menurunkan angka kriminalitas.',
      clueSentence: 'Paragraph 3: "Integrating nature into civic planning is thus no longer considered a decorative luxury, but a non-negotiable public health intervention capable of mitigating urban heat islands and fostering psychological resilience."',
      optionAnalysis: {
        A: 'Salah. Teks menolak anggapan bahwa ini kemewahan (luxury).',
        B: 'Salah. Teks menganggapnya sangat bernilai tinggi, bukan tren usang.',
        C: 'Salah. Lingkungan berinfrastruktur biophilic justru terbukti menurunkan kriminalitas.',
        D: 'BENAR. Merangkum gagasan paragraf 3: intervensi kesehatan masyarakat yang wajib dan memupuk kohesi sosial.',
        E: 'Salah. Tidak disebutkan sebagai pameran sementara.'
      },
      strategyTip: 'Perhatikan pola "no longer X, but Y" pada teks; jawaban sering kali diambil dari bagian "but Y".',
      keyVocab: [
        { word: 'Social cohesion', meaning: 'Keterikatan dan kerukunan sosial dalam masyarakat' },
        { word: 'Non-negotiable', meaning: 'Tidak dapat ditawar-tawar / mutlak perlu' }
      ]
    }
  },
  {
    id: 20,
    passageId: 'passage-4',
    questionText: 'What is the relationship between paragraph 2 and paragraph 3?',
    options: [
      'Paragraph 2 provides mathematical formulas that disprove the claims introduced in paragraph 3.',
      'Paragraph 2 focuses on individual biological and neurological benefits, while paragraph 3 broadens the scope to collective societal and civic impacts.',
      'Paragraph 3 completely contradicts and refutes every scientific assertion made in paragraph 2.',
      'Paragraph 2 recounts the historical origin of cities, while paragraph 3 predicts futuristic space habitats.',
      'Both paragraphs analyze identical statistical surveys conducted on corporate office workers.'
    ],
    correctAnswer: 1, // B
    skillType: 'Text Structure & Logic',
    explanation: {
      summary: 'Paragraf 2 membahas dampak fisiologis & kognitif pada tingkat individu (kortisol, denyut darah, fokus otak), sedangkan Paragraf 3 memperluas ke ranah sosial kolektif (kejahatan berkurang, interaksi antarwarga, pemerataan kota).',
      clueSentence: 'Paragraph 3: "Beyond individual neurophysiological recovery, the distribution of biophilic infrastructure shapes urban equity and social cohesion."',
      optionAnalysis: {
        A: 'Salah. Paragraf 2 tidak memuat rumus matematika yang membantah paragraf 3.',
        B: 'BENAR. Transisi dari "individual neurophysiological recovery" (paragraf 2) menuju "collective societal and civic impacts" (paragraf 3).',
        C: 'Salah. Paragraf 3 mendukung dan memperluas paragraf 2, bukan membantah (refute).',
        D: 'Salah. Tidak membahas kota masa depan di luar angkasa.',
        E: 'Salah. Bukan survei kantor perusahaan, melainkan lanskap perkotaan secara umum.'
      },
      strategyTip: 'Periksa kalimat pertama paragraf lanjutan: kata "Beyond individual neurophysiological recovery..." menandai pergeseran fokus dari level individu ke ranah masyarakat.',
      keyVocab: [
        { word: 'Broaden the scope', meaning: 'Memperluas cakupan pembahasan' },
        { word: 'Societal', meaning: 'Terkait masyarakat luas' }
      ]
    }
  },

  // ==================== PASSAGE 5: QUESTIONS 21 - 25 ====================
  {
    id: 21,
    passageId: 'passage-5',
    questionText: 'According to Text 1, what is the underlying commercial motive behind algorithmic filter bubbles?',
    options: [
      'Encouraging users to subscribe to traditional investigative print newspapers',
      'Maximizing user engagement and dwell time on digital platforms',
      'Actively eliminating all advertising revenues from online platforms',
      'Training internet users to become objective factual researchers',
      'Ensuring equal distribution of conflicting ideological arguments'
    ],
    correctAnswer: 1, // B
    skillType: 'Specific Detail & Fact',
    explanation: {
      summary: 'Teks 1 paragraf pertama menyatakan: "Contemporary digital platforms rely heavily upon algorithmic recommendation systems engineered to maximize user engagement and dwell time."',
      clueSentence: 'Text 1, paragraph 1: "...engineered to maximize user engagement and dwell time. By evaluating historical search telemetry..."',
      optionAnalysis: {
        A: 'Salah. Tidak ada urusan mempromosikan koran cetak tradisional.',
        B: 'BENAR. Motivasi komersialnya adalah memaksimalkan keterlibatan (engagement) dan durasi menetap (dwell time) pengguna di platform.',
        C: 'Salah. Perusahaan platform hidup dari iklan, bukan menghilangkannya.',
        D: 'Salah. Kebalikan dari tujuan platform yang mengurung pengguna dalam gelembung opini.',
        E: 'Salah. Algoritma justru membatasi perbedaan pandangan.'
      },
      strategyTip: 'Cari kata kunci "commercial" atau "engineered to" dalam Teks 1.',
      keyVocab: [
        { word: 'Dwell time', meaning: 'Lama waktu yang dihabiskan pengguna pada suatu laman/aplikasi' },
        { word: 'Epistemic', meaning: 'Berkaitan dengan pengetahuan dan keyakinan berpikir' }
      ]
    }
  },
  {
    id: 22,
    passageId: 'passage-5',
    questionText: 'In Text 2, the author counters the argument of Text 1 primarily by asserting that...',
    options: [
      'users are entirely helpless victims with zero control over what they read online.',
      'empirical behavioral tracking shows that users still encounter diverse content through incidental exposure.',
      'social media companies have completely turned off recommendation algorithms.',
      'polarization did not exist in human civilization prior to modern algorithmic feeds.',
      'computer algorithms were originally designed to promote philosophical enlightenment.'
    ],
    correctAnswer: 1, // B
    skillType: 'Comparative Analysis',
    explanation: {
      summary: 'Penulis Teks 2 menyanggah Teks 1 dengan data empiris: pelacakan perilaku menunjukkan pengguna internet masih terpapar konten lintas ideologi melalui eksposur insidental (jaringan teman, trending, tautan eksternal), dan agensi manusia tetap berpengaruh.',
      clueSentence: 'Text 2, paragraph 1: "Behavioral tracking demonstrates that typical internet users encounter substantial cross-ideological content through incidental exposure... user agency remains a decisive factor."',
      optionAnalysis: {
        A: 'Salah. Teks 2 justru menegaskan agensi pengguna ("user agency remains a decisive factor"), bukan korban tak berdaya.',
        B: 'BENAR. Menyampaikan bantahan utama Teks 2 dengan merujuk pada temuan empiris paparan insidental lintas pandangan.',
        C: 'Salah. Perusahaan tidak mematikan algoritma.',
        D: 'Salah. Teks 2 justru mengatakan polarisasi sudah ada sejak zaman purba jauh sebelum mesin pencari.',
        E: 'Salah. Tidak ada klaim bahwa algoritma dibuat untuk pencerahan filosofis.'
      },
      strategyTip: 'Pada soal teks berpasangan (paired passages), identifikasi inti sanggahan (counterargument) Text 2 terhadap klaim ekstrem Text 1.',
      keyVocab: [
        { word: 'Hermeticism', meaning: 'Kekedapan / keterisolasian total dari dunia luar' },
        { word: 'Incidental exposure', meaning: 'Paparan informasi yang terjadi secara tidak sengaja/kebetulan' }
      ]
    }
  },
  {
    id: 23,
    passageId: 'passage-5',
    questionText: 'What term does the author of Text 2 use to describe pre-existing human psychological tendencies toward group bias?',
    options: [
      'Epistemic filter bubbles',
      'In-group favoritism and affective polarization',
      'Synthetic cognitive myelination',
      'Algorithmic deterministic feedback loops',
      'Metabolic prefrontal exhaustion'
    ],
    correctAnswer: 1, // B
    skillType: 'Specific Detail & Fact',
    explanation: {
      summary: 'Penulis Teks 2 menyatakan bahwa biang keladi polarisasi adalah sifat bawaan psikologis manusia: "deep-seated psychological tendencies toward in-group favoritism and affective polarization".',
      clueSentence: 'Text 2, paragraph 2: "...rather deep-seated psychological tendencies toward in-group favoritism and affective polarization, which algorithms simply mirror rather than invent."',
      optionAnalysis: {
        A: 'Salah. "Filter bubbles" adalah istilah yang dipakai di Teks 1.',
        B: 'BENAR. Disebutkan persis di akhir Paragraf 2 Teks 2 sebagai akar psikologis polarisasi.',
        C: 'Salah. Istilah dari Bacaan 1 tentang biologi otak.',
        D: 'Salah. Ini istilah mekanis yang justru dikritik oleh Teks 2.',
        E: 'Salah. Istilah dari bacaan neurosains.'
      },
      strategyTip: 'Cari kutipan spesifik dalam Teks 2 yang menjelaskan kecenderungan psikologis manusia kuno.',
      keyVocab: [
        { word: 'In-group favoritism', meaning: 'Kecenderungan memfavoritkan kelompok sendiri' },
        { word: 'Affective polarization', meaning: 'Polarisasi berbasis rasa benci/suka antar kelompok' }
      ]
    }
  },
  {
    id: 24,
    passageId: 'passage-5',
    questionText: 'Both authors would most likely AGREE with which of the following statements?',
    options: [
      'Societal polarization and ideological divergence are noticeable phenomena in contemporary public life.',
      'Algorithms are the single and exclusive cause of all historical social discord.',
      'Every internet user is trapped in an unbreakable ideological prison without any escape.',
      'Digital social platforms have completely eliminated commercial advertising incentives.',
      'Citizens should be barred from using computers and mobile devices to preserve democracy.'
    ],
    correctAnswer: 0, // A
    skillType: 'Comparative Analysis',
    explanation: {
      summary: 'Kedua teks sepakat bahwa polarisasi sosial dan segregasi ideologis merupakan realitas yang nyata terjadi saat ini. Perbedaannya hanya terletak pada apakah algoritma adalah penyebab mutlak (Teks 1) atau sekadar cerminan sifat manusia (Teks 2).',
      clueSentence: 'Text 1 discusses "degrades democratic deliberation" and Text 2 discusses "attributing societal polarization solely to automated algorithms absolves individuals..."',
      optionAnalysis: {
        A: 'BENAR. Kedua teks sama-sama mengakui bahwa fenomena perpecahan/polarisasi opini saat ini memang nyata terjadi di masyarakat.',
        B: 'Salah. Teks 2 menolak mentah-mentah bahwa algoritma adalah penyebab tunggal.',
        C: 'Salah. Teks 2 menyatakan pengguna tidak terkunci secara absolut (myth of hermeticism).',
        D: 'Salah. Platform digital didorong oleh motif komersial.',
        E: 'Salah. Tidak ada penulis yang menganjurkan pelarangan total teknologi.'
      },
      strategyTip: 'Soal "Both authors agree" mencari titik temu (common ground) yang tidak dibantah oleh kedua pihak.',
      keyVocab: [
        { word: 'Ideological divergence', meaning: 'Perbedaan/perpecahan haluan pandangan ideologi' },
        { word: 'Discord', meaning: 'Pertikaian / ketidakharmonisan' }
      ]
    }
  },
  {
    id: 25,
    passageId: 'passage-5',
    questionText: 'Which statement best describes the fundamental difference in perspective between Text 1 and Text 2?',
    options: [
      'Text 1 discusses economics, while Text 2 analyzes plant agriculture.',
      'Text 1 attributes ideological polarization primarily to technological system architecture, while Text 2 highlights human psychology and user agency.',
      'Text 1 claims internet algorithms do not exist, while Text 2 explains how algorithms are coded.',
      'Text 1 advocates for totalitarian digital surveillance, while Text 2 urges total platform deregulation.',
      'Text 1 focuses on ancient historical tribes, while Text 2 analyzes adolescent sleep biology.'
    ],
    correctAnswer: 1, // B
    skillType: 'Comparative Analysis',
    explanation: {
      summary: 'Teks 1 memandang arsitektur algoritma platform sebagai pendorong utama polarisasi (filter bubbles), sedangkan Teks 2 memandang bias psikologis manusia dan agensi individu sebagai faktor yang lebih mendasar (algoritma hanya mencerminkan kecenderungan bawaan).',
      clueSentence: 'Comparison of Text 1 ("epistemic filter bubbles... algorithmic confinement") and Text 2 ("user agency remains a decisive factor... algorithms simply mirror rather than invent").',
      optionAnalysis: {
        A: 'Salah. Tidak ada yang membahas pertanian tanaman di sini.',
        B: 'BENAR. Merangkum kontras sudut pandang: determinisme teknologi (Teks 1) vs psikologi dan kehendak bebas manusia (Teks 2).',
        C: 'Salah. Tidak ada teks yang menyangkal keberadaan algoritma.',
        D: 'Salah. Tidak ada yang mendukung pengawasan totaliter.',
        E: 'Salah. Deskripsi topik salah kaprah.'
      },
      strategyTip: 'Sintesiskan tesis dari masing-masing teks: Teks 1 = "Technology drives division", Teks 2 = "Human nature drives division, technology just reflects it".',
      keyVocab: [
        { word: 'User agency', meaning: 'Kapasitas dan kebebasan individu untuk memilih tindakannya sendiri' },
        { word: 'Deterministic', meaning: 'Bersifat menentukan secara mutlak tanpa celah kehendak bebas' }
      ]
    }
  },

  // ==================== PASSAGE 6: QUESTIONS 26 - 30 ====================
  {
    id: 26,
    passageId: 'passage-6',
    questionText: 'What is the central paradox of global food security presented in paragraph 1?',
    options: [
      'Farms produce too few calories worldwide, yet obesity rates continue to surge.',
      'Food insecurity is driven primarily by massive post-harvest spoilage across supply chains rather than a deficit in total crop production.',
      'Synthetic fertilizers have permanently destroyed all arable agricultural acreage.',
      'Consumers in developed nations refuse to purchase any refrigerated food products.',
      'Technological innovation has made farming completely obsolete in modern economies.'
    ],
    correctAnswer: 1, // B
    skillType: 'Main Idea & Topic',
    explanation: {
      summary: 'Paragraf 1 membuka dengan paradoks bahwa masalah ketahanan pangan bukan karena kurangnya produksi kalori total, melainkan karena sepertiga dari total makanan (1,3 miliar ton) terbuang atau busuk pasca panen di rantai distribusi.',
      clueSentence: 'Paragraph 1: "Global food security is fundamentally imperiled not by an aggregate deficit in caloric production, but by egregious post-harvest food loss across agricultural distribution chains."',
      optionAnalysis: {
        A: 'Salah. Teks menegaskan produksi kalori mencukupi, bukan defisit.',
        B: 'BENAR. Inti paradoks: produksi cukup, tapi terbuang masif (1/3 bagian) akibat rantai logistik yang buruk.',
        C: 'Salah. Tidak ada klaim bahwa semua tanah pertanian musnah permanen.',
        D: 'Salah. Konsumen tidak menolak produk berpendingin.',
        E: 'Salah. Pertanian tidak pernah dianggap usang.'
      },
      strategyTip: 'Cari frasa penanda "imperiled not by X, but by Y" pada kalimat pertama.',
      keyVocab: [
        { word: 'Egregious', meaning: 'Sangat buruk, keterlaluan, mencolok' },
        { word: 'Deficit', meaning: 'Kekurangan jumlah' }
      ]
    }
  },
  {
    id: 27,
    passageId: 'passage-6',
    questionText: 'According to paragraph 2, what dilemma do smallholder farmers in tropical regions face due to lack of cold storage?',
    options: [
      'They must either sell produce immediately at depressed harvest prices or let it spoil quickly.',
      'They are forced to abandon farming and relocate to polar climates.',
      'They must purchase expensive diesel tractors every harvest season.',
      'They are legally prohibited from trading with wholesale regional merchants.',
      'They must convert their agricultural fields into concrete parking lots.'
    ],
    correctAnswer: 0, // A
    skillType: 'Specific Detail & Fact',
    explanation: {
      summary: 'Paragraf 2 menyatakan bahwa petani kecil di daerah tropis dihadapkan pada dua pilihan merugikan: menjual cepat dengan harga jatuh saat panen raya, atau membiarkan hasil panen membusuk dalam hitungan jam karena tidak ada mesin pendingin.',
      clueSentence: 'Paragraph 2: "...forces smallholder farmers to either sell their yields immediately at heavily depressed harvest-season prices or watch high-value produce spoil within hours."',
      optionAnalysis: {
        A: 'BENAR. Sesuai langsung dengan teks: "sell their yields immediately at heavily depressed harvest-season prices or watch high-value produce spoil".',
        B: 'Salah. Tidak ada anjuran pindah ke kutub.',
        C: 'Salah. Tidak membahas traktor diesel.',
        D: 'Salah. Tidak dilarang berdagang secara hukum.',
        E: 'Salah. Tidak ada hubungannya dengan lahan parkir.'
      },
      strategyTip: 'Perhatikan konjungsi korelatif "either ... or ..." dalam paragraf kedua.',
      keyVocab: [
        { word: 'Depressed prices', meaning: 'Harga yang anjlok / sangat murah' },
        { word: 'Smallholder farmer', meaning: 'Petani gurem / petani berlahan kecil' }
      ]
    }
  },
  {
    id: 28,
    passageId: 'passage-6',
    questionText: 'The word "precarity" in paragraph 2 is closest in meaning to...',
    options: [
      'instability and financial insecurity',
      'extreme affluence and abundance',
      'absolute certainty and guarantee',
      'technological sophistication',
      'bureaucratic neutrality'
    ],
    correctAnswer: 0, // A
    skillType: 'Vocabulary in Context',
    explanation: {
      summary: 'Dalam konteks "entraps rural farming communities in persistent financial precarity", kata "precarity" bermakna kondisi ketidakpastian, kerentanan, atau ketidakstabilan finansial yang rawan bangkrut/miskin.',
      clueSentence: 'Paragraph 2: "The resulting economic loss entraps rural farming communities in persistent financial precarity..."',
      optionAnalysis: {
        A: 'BENAR. "Instability and financial insecurity" adalah padanan kata dari precarity (kondisi genting/rentan).',
        B: 'Salah. Affluence berarti kemakmuran/kekayaan berlimpah (antonim).',
        C: 'Salah. Certainty berarti kepastian (antonim).',
        D: 'Salah. Sophistication berarti kecanggihan.',
        E: 'Salah. Neutrality berarti kenetralan.'
      },
      strategyTip: 'Konteks kalimat menunjukkan hasil buruk ("entraps", "economic loss"), sehingga kata yang dicari harus bernada negatif (ketidakstabilan).',
      keyVocab: [
        { word: 'Precarity', meaning: 'Kerapuhan, ketidakpastian kondisi hidup' },
        { word: 'Entraps', meaning: 'Menjebak / memerangkap' }
      ]
    }
  },
  {
    id: 29,
    passageId: 'passage-6',
    questionText: 'Which two post-harvest innovations are highlighted in paragraph 3?',
    options: [
      'Chemical genetic cloning and artificial weather modification',
      'Off-grid solar refrigeration hubs and plant-based edible protective coatings',
      'High-speed supersonic transport jets and underground nuclear silos',
      'Synthetic plastic packaging and petroleum-based pesticides',
      'Automated satellite lasers and robotic soil compactors'
    ],
    correctAnswer: 1, // B
    skillType: 'Specific Detail & Fact',
    explanation: {
      summary: 'Paragraf 3 memaparkan dua inovasi: 1) Hub pendingin off-grid bertenaga surya di titik pengumpulan pertanian, dan 2) Pelapis nabati alami (plant-based edible coatings) yang memperlambat respirasi buah/sayur.',
      clueSentence: 'Paragraph 3: "Off-grid refrigeration hubs operating on photovoltaic microgrids... Concurrently, plant-based edible coatings derived from organic lipids and agricultural by-products..."',
      optionAnalysis: {
        A: 'Salah. Tidak menyebut kloning genetika atau modifikasi cuaca.',
        B: 'BENAR. Tepat menyebutkan kedua teknologi yang diuraikan di paragraf 3.',
        C: 'Salah. Fiksi dan tidak ada di teks.',
        D: 'Salah. Teks justru menyebut pelapis organik berbahan lipid nabati, bukan plastik sintetis atau pestisida minyak bumi.',
        E: 'Salah. Tidak menyebut laser satelit.'
      },
      strategyTip: 'Cari kata transisi "Concurrently" (secara bersamaan) yang menghubungkan inovasi pertama dan inovasi kedua.',
      keyVocab: [
        { word: 'Off-grid', meaning: 'Mandiri / tidak bergantung pada jaringan listrik utama' },
        { word: 'Edible coating', meaning: 'Lapisan pelindung yang aman dimakan' }
      ]
    }
  },
  {
    id: 30,
    passageId: 'passage-6',
    questionText: 'What can be inferred about the ecological footprint of food waste mentioned in paragraph 2?',
    options: [
      'Discarded food produces no environmental impact once buried.',
      'Food waste also wastes all the embedded environmental resources used to grow it, including water, fertilizer, and arable land.',
      'Food loss is restricted entirely to animal meats and has no relation to crops.',
      'Agricultural land expands automatically when food is thrown away.',
      'Rainfall increases in direct proportion to spoiled agricultural yields.'
    ],
    correctAnswer: 1, // B
    skillType: 'Inference & Implication',
    explanation: {
      summary: 'Paragraf 2 menyatakan bahwa pembusukan makanan tidak hanya merugikan uang, tetapi juga menyia-nyiakan air irigasi, pupuk kimia, dan lahan subur yang terkandung (embedded) di dalam tanaman yang tak termakan tersebut.',
      clueSentence: 'Paragraph 2: "...while squandering astronomical volumes of irrigation water, chemical fertilizers, and arable land embedded in unconsumed crops."',
      optionAnalysis: {
        A: 'Salah. Mengabaikan dampak lingkungan yang nyata.',
        B: 'BENAR. Merangkum fakta bahwa membuang makanan berarti ikut menyia-nyiakan air, pupuk, dan lahan yang dipakai selama proses bertani.',
        C: 'Salah. Teks secara spesifik menyorot "perishable crops like tropical fruits and leafy vegetables".',
        D: 'Salah. Lahan tidak membesar secara otomatis.',
        E: 'Salah. Curah hujan tidak berhubungan proporsional dengan makanan busuk.'
      },
      strategyTip: 'Kata "embedded in" (tertanam di dalam) mengimplikasikan adanya "jejak ekologis tersembunyi" (hidden ecological footprint).',
      keyVocab: [
        { word: 'Squander', meaning: 'Menyia-nyiakan / membuang-buang dengan percuma' },
        { word: 'Embedded', meaning: 'Melekat / tertanam di dalamnya' }
      ]
    }
  },

  // ==================== PASSAGE 7: QUESTIONS 31 - 35 ====================
  {
    id: 31,
    passageId: 'passage-7',
    questionText: 'What is the primary concern raised by the author in paragraph 1?',
    options: [
      'The worldwide dominance of artificial computer programming languages over spoken tongues',
      'The imminent threat that over half the world\'s spoken languages may become extinct by the end of this century',
      'The inability of modern children to master more than one dialect during schooling',
      'The total failure of all digital lexicographical translation software',
      'The rapid disappearance of ancient Egyptian hieroglyphic inscriptions'
    ],
    correctAnswer: 1, // B
    skillType: 'Main Idea & Topic',
    explanation: {
      summary: 'Paragraf 1 membuka dengan peringatan linguis bahwa tanpa upaya revitalisasi bersama, lebih dari separuh dari 7.000 bahasa lisan dunia dapat punah sebelum akhir abad ini.',
      clueSentence: 'Paragraph 1: "Linguists project that without concerted revitalisation initiatives, more than half of the world\'s estimated seven thousand spoken languages could fall silent by the end of this century."',
      optionAnalysis: {
        A: 'Salah. Teks membahas bahasa ibu komunitas adat, bukan bahasa pemrograman komputer.',
        B: 'BENAR. Sesuai langsung dengan kalimat pembuka mengenai ancaman punahnya >50% bahasa dunia.',
        C: 'Salah. Teks menyoroti pergeseran ke bahasa nasional/global, bukan ketidakmampuan kognitif anak.',
        D: 'Salah. Tidak membahas kegagalan software terjemahan.',
        E: 'Salah. Teks membahas ribuan bahasa hidup suku asli, bukan hieroglif Mesir kuno saja.'
      },
      strategyTip: 'Main idea paragraf pertama biasanya terletak di kalimat pembuka (topic sentence).',
      keyVocab: [
        { word: 'Fall silent', meaning: 'Kiasan untuk punah / tidak dituturkan lagi' },
        { word: 'Attrition', meaning: 'Penyusutan / pengikisan secara bertahap' }
      ]
    }
  },
  {
    id: 32,
    passageId: 'passage-7',
    questionText: 'According to paragraph 2, why are Indigenous languages of immense value to scientific discovery?',
    options: [
      'They employ completely computerized syntactic structures unknown to mathematics.',
      'They encode unique folk-taxonomies detailing local medicinal plants and meteorological events unclassified in Western science.',
      'They have shorter vocabularies that allow faster digital communication speeds.',
      'They were explicitly engineered by modern academic research universities.',
      'They contain cryptographic algorithms capable of breaking modern internet security.'
    ],
    correctAnswer: 1, // B
    skillType: 'Specific Detail & Fact',
    explanation: {
      summary: 'Paragraf 2 menyatakan bahwa bahasa-bahasa adat memiliki taksonomi lokal yang rinci mengenai khasiat obat tanaman langka, arus perairan, dan fluktuasi cuaca yang belum terklasifikasi dalam sains Barat.',
      clueSentence: 'Paragraph 2: "...describe the pharmacological efficacy of rare rainforest plants, subtle aquatic current shifts, and micro-climatic fluctuations that remain unclassified within Western scientific nomenclature."',
      optionAnalysis: {
        A: 'Salah. Tidak ada kaitan dengan sintaksis komputer buatan.',
        B: 'BENAR. Sangat bernilai bagi sains karena menyimpan pengetahuan empiris botani obat dan ekologi lokal selama ribuan tahun.',
        C: 'Salah. Kosakatanya justru sangat kaya dan spesifik.',
        D: 'Salah. Bahasa adat lahir dari masyarakat tradisional, bukan universitas modern.',
        E: 'Salah. Tidak berkaitan dengan enkripsi siber.'
      },
      strategyTip: 'Cari kata "Western scientific nomenclature" dan lihat apa yang dijelaskan sebelum frasa tersebut.',
      keyVocab: [
        { word: 'Ontological framework', meaning: 'Kerangka cara pandang terhadap realitas hakikat keberadaan' },
        { word: 'Folk-taxonomy', meaning: 'Sistem klasifikasi tradisional masyarakat lokal' }
      ]
    }
  },
  {
    id: 33,
    passageId: 'passage-7',
    questionText: 'The author mentions "biocultural diversity" in paragraph 3 to illustrate that...',
    options: [
      'linguistic diversity and biological biodiversity conservation are inseparable endeavors.',
      'biological organisms can only communicate using English vocabulary.',
      'cultural traditions should be discarded to prioritize economic growth.',
      'zoological parks must replace natural wilderness areas worldwide.',
      'genetic biodiversity has no correlation with human community practices.'
    ],
    correctAnswer: 0, // A
    skillType: 'Inference & Implication',
    explanation: {
      summary: 'Paragraf 3 menjelaskan bahwa melindungi keanekaragaman bahasa dan melindungi keanekaragaman hayati adalah tujuan yang tak terpisahkan (indivisible objectives), yang dirangkum dalam konsep "biocultural diversity".',
      clueSentence: 'Paragraph 3: "...conserving linguistic diversity and safeguarding biological diversity are indivisible objectives—a unified paradigm termed \'biocultural diversity.\'"',
      optionAnalysis: {
        A: 'BENAR. Konsep keragaman biokultural menegaskan bahwa menjaga bahasa dan menjaga alam adalah satu kesatuan tak terpisahkan.',
        B: 'Salah. Mengklaim organisme harus berbahasa Inggris adalah konyol.',
        C: 'Salah. Bertentangan dengan seruan teks untuk melestarikan budaya dan bahasa.',
        D: 'Salah. Tidak membahas pembangunan kebun binatang buatan.',
        E: 'Salah. Teks justru menegaskan korelasi erat antara bahasa komunitas dan kelestarian ekosistem.'
      },
      strategyTip: 'Perhatikan tanda hubung atau em-dash ("—") yang memberikan definisi langsung dari istilah tersebut.',
      keyVocab: [
        { word: 'Indivisible', meaning: 'Tidak dapat dipisahkan satu sama lain' },
        { word: 'Biocultural diversity', meaning: 'Keterpaduan keragaman hayati dan keragaman budaya/bahasa' }
      ]
    }
  },
  {
    id: 34,
    passageId: 'passage-7',
    questionText: 'The word "dormancy" in paragraph 1 is closest in meaning to...',
    options: [
      'feverish activity',
      'inactivity or extinction',
      'rapid expansion',
      'unregulated reproduction',
      'legal litigation'
    ],
    correctAnswer: 1, // B
    skillType: 'Vocabulary in Context',
    explanation: {
      summary: 'Dalam konteks "When a language ceases to be transmitted intergenerationally, linguistic dormancy is frequently irreversible", kata "dormancy" merujuk pada ketidakaktifan, mati suri, atau kepunahan penutur bahasa.',
      clueSentence: 'Paragraph 1: "...ceases to be transmitted intergenerationally, linguistic dormancy is frequently irreversible."',
      optionAnalysis: {
        A: 'Salah. "Feverish activity" berarti aktivitas yang sangat heboh/sibuk (antonim).',
        B: 'BENAR. "Inactivity" (keadaan tidak aktif / mati suri) sepadan dengan konteks bahasa yang berhenti dipakai.',
        C: 'Salah. Ekspansi berarti perluasan (kebalikan).',
        D: 'Salah. Tidak ada kaitan dengan reproduksi biologis sembarangan.',
        E: 'Salah. Litigasi berarti proses pengadilan hukum.'
      },
      strategyTip: 'Dormancy berakar dari kata dormant (tertidur / tidak aktif). Hubungkan dengan frasa "ceases to be transmitted" (berhenti diwariskan).',
      keyVocab: [
        { word: 'Dormancy', meaning: 'Kondisi mati suri / ketidakaktifan' },
        { word: 'Irreversible', meaning: 'Tidak dapat diputarbalikkan kembali' }
      ]
    }
  },
  {
    id: 35,
    passageId: 'passage-7',
    questionText: 'Which revitalization method is EXPLICITLY recommended in the final sentence of the passage?',
    options: [
      'Forcing all indigenous youths into international boarding colleges',
      'Replacing local dialects with uniform artificial machine codes',
      'Community-led digital archives, elder-immersion schools, and legal recognition',
      'Extracting genetic tissue from elderly native speakers without consent',
      'Translating ancient religious scriptures exclusively into Latin'
    ],
    correctAnswer: 2, // C
    skillType: 'Specific Detail & Fact',
    explanation: {
      summary: 'Kalimat terakhir bacaan menyebutkan tiga langkah konkret: arsip digital yang dikelola komunitas, sekolah imersi bersama para sesepuh, dan pengakuan secara hukum.',
      clueSentence: 'Paragraph 3: "Protecting endangered tongues via community-led digital archives, elder-immersion schools, and legal recognition is thus essential for planetary survival."',
      optionAnalysis: {
        A: 'Salah. Ini bentuk asimilasi paksa masa lalu yang justru merusak bahasa ibu.',
        B: 'Salah. Teks tidak menyarankan mengganti bahasa dengan kode mesin.',
        C: 'BENAR. Disebutkan persis di kalimat penutup bacaan.',
        D: 'Salah. Tidak etis dan tidak ada di teks.',
        E: 'Salah. Tidak menyebut penerjemahan ke bahasa Latin.'
      },
      strategyTip: 'Soal "EXPLICITLY recommended in the final sentence" menginstruksikan Anda langsung memeriksa kalimat pamungkas teks.',
      keyVocab: [
        { word: 'Elder-immersion school', meaning: 'Sekolah pembelajaran imersif langsung bersama para sesepuh penutur asli' },
        { word: 'Revitalization', meaning: 'Penghidupan kembali' }
      ]
    }
  },

  // ==================== PASSAGE 8: QUESTIONS 36 - 40 ====================
  {
    id: 36,
    passageId: 'passage-8',
    questionText: 'What was the core assumption of the classical "Homo economicus" model described in paragraph 1?',
    options: [
      'Humans are consistently guided by bounded irrationality and unpredictable emotional impulses.',
      'Humans are idealized rational actors with infinite cognitive bandwidth who systematically maximize utility.',
      'Economic choices are primarily governed by genetic astrological destiny.',
      'Individuals always prioritize charitable altruism over self-interest.',
      'Decision-makers are incapable of calculating basic mathematical risks.'
    ],
    correctAnswer: 1, // B
    skillType: 'Specific Detail & Fact',
    explanation: {
      summary: 'Paragraf 1 menyatakan bahwa asumsi klasik menganggap manusia sebagai Homo economicus: aktor rasional ideal dengan kapasitas kognitif tanpa batas, informasi lengkap, dan konsisten mengambil keputusan yang memaksimalkan utilitas.',
      clueSentence: 'Paragraph 1: "...the idealized rational actor possessing limitless cognitive capacity, complete information, and invariant self-control who consistently executes utility-maximizing decisions."',
      optionAnalysis: {
        A: 'Salah. Ini justru pandangan dari psikologi kognitif modern yang membantah model klasik.',
        B: 'BENAR. Sesuai langsung dengan teks: aktor rasional ideal dengan kemampuan kognitif tanpa batas yang memaksimalkan utilitas.',
        C: 'Salah. Teori ekonomi klasik tidak mendasarkan pada astrologi.',
        D: 'Salah. Homo economicus mementingkan utilitas pribadi (self-interest), bukan altruisme.',
        E: 'Salah. Model klasik mengasumsikan manusia sangat pintar menghitung risiko, bukan tidak mampu.'
      },
      strategyTip: 'Baca definisi konsep "Homo economicus" persis setelah tanda strip pisah (em-dash) di paragraf 1.',
      keyVocab: [
        { word: 'Utility-maximizing', meaning: 'Memaksimalkan kepuasan / keuntungan pribadi' },
        { word: 'Bounded rationality', meaning: 'Rasionalitas terbatas oleh keterbatasan otak dan waktu' }
      ]
    }
  },
  {
    id: 37,
    passageId: 'passage-8',
    questionText: 'In the context of nudge theory, what is an essential condition of a "nudge"?',
    options: [
      'It must legally forbid harmful choices and fine individuals who disobey.',
      'It subtly steers behavior in an advantageous direction without removing choices or altering economic incentives.',
      'It requires mandatory psychiatric counseling for all corporate employees.',
      'It triples the financial cost of unhealthy lifestyle habits through severe taxation.',
      'It operates only when citizens sign written constitutional consent forms.'
    ],
    correctAnswer: 1, // B
    skillType: 'Specific Detail & Fact',
    explanation: {
      summary: 'Paragraf 2 mendefinisikan "nudge" sebagai perubahan halus dalam penyajian pilihan yang mengarahkan perilaku ke arah yang menguntungkan tanpa melarang opsi apa pun atau mengubah insentif ekonomi (uang).',
      clueSentence: 'Paragraph 2: "A nudge represents any subtle alteration in the presentation of choices that steers individual behavior in an advantageous direction without forbidding any options or altering economic incentives."',
      optionAnalysis: {
        A: 'Salah. Nudge tidak boleh melarang (forbid) pilihan atau memberi denda hukum.',
        B: 'BENAR. Kunci konsep nudge: mengarahkan tanpa melarang opsi apa pun dan tanpa mengubah insentif ekonomi.',
        C: 'Salah. Tidak mewajibkan konseling kejiwaan.',
        D: 'Salah. Menaikkan pajak berarti mengubah insentif ekonomi, sehingga bukan murni nudge.',
        E: 'Salah. Tidak memerlukan surat perjanjian konstitusi tertulis.'
      },
      strategyTip: 'Kata kunci definisi Thaler & Sunstein: "without forbidding any options or altering economic incentives". Opsi yang mengandung larangan/hukuman/denda bukanlah nudge.',
      keyVocab: [
        { word: 'Nudge', meaning: 'Dorongan / sentuhan halus pengarah keputusan' },
        { word: 'Choice architecture', meaning: 'Arsitektur penataan pilihan' }
      ]
    }
  },
  {
    id: 38,
    passageId: 'passage-8',
    questionText: 'According to paragraph 2, what was the concrete result of shifting pension enrollment from "opt-in" to "automatic enrollment"?',
    options: [
      'Corporate retirement participation dropped to near zero percent.',
      'Employee participation surged from thirty-seven percent to over eighty-five percent.',
      'Employees sued the companies for violating labor union contracts.',
      'Companies went bankrupt due to insurmountable administrative paperwork.',
      'Retirement ages were officially raised by ten years.'
    ],
    correctAnswer: 1, // B
    skillType: 'Specific Detail & Fact',
    explanation: {
      summary: 'Paragraf 2 menyajikan data konkret: mengubah skema pensiun menjadi pendaftaran otomatis (automatic enrollment secara default) melesatkan partisipasi karyawan dari 37% menjadi lebih dari 85%.',
      clueSentence: 'Paragraph 2: "...restructuring retirement pension schemes from an \'opt-in\' model... to an \'automatic enrollment\' model... catapulted participation rates from thirty-seven percent to over eighty-five percent..."',
      optionAnalysis: {
        A: 'Salah. Partisipasi justru melonjak, bukan turun ke nol.',
        B: 'BENAR. Data persentase jelas: melesat dari 37% ke lebih dari 85%.',
        C: 'Salah. Tidak ada gugatan hukum serikat pekerja yang disebutkan.',
        D: 'Salah. Perusahaan tidak bangkrut.',
        E: 'Salah. Usia pensiun tidak dinaikkan.'
      },
      strategyTip: 'Cari angka persentase pada paragraf 2 untuk mencocokkan fakta numerik.',
      keyVocab: [
        { word: 'Catapulted', meaning: 'Melesat tinggi dengan sangat cepat' },
        { word: 'Opt-in vs Opt-out', meaning: 'Mendaftar aktif sendiri vs Terdaftar otomatis (bisa keluar jika ingin)' }
      ]
    }
  },
  {
    id: 39,
    passageId: 'passage-8',
    questionText: 'What counter-argument do proponents of nudge policies offer against critics who allege paternalistic manipulation in paragraph 3?',
    options: [
      'Democratic elections should be permanently abolished in modern societies.',
      'Completely neutral choice presentation is practically impossible because every layout inevitably establishes a default bias.',
      'Manipulating citizens is justifiable because ordinary individuals lack moral intelligence.',
      'Governments should own all private retirement bank accounts.',
      'Paternalism is the only constitutionally sanctioned form of government.'
    ],
    correctAnswer: 1, // B
    skillType: 'Specific Detail & Fact',
    explanation: {
      summary: 'Pendukung nudge menjawab kritik paternalisme dengan menyatakan bahwa penyajian pilihan yang 100% netral tidak mungkin ada di dunia nyata; setiap tata letak, formulir, atau kebijakan pasti memiliki bawaan awal (default bias). Oleh karena itu, lebih baik default tersebut dirancang transparan untuk kebaikan bersama.',
      clueSentence: 'Paragraph 3: "Proponents respond that neutral choice presentation is practically impossible; every policy, interface, or layout inevitably establishes a default bias."',
      optionAnalysis: {
        A: 'Salah. Tidak ada usulan membubarkan pemilu demokratis.',
        B: 'BENAR. Alasan pembelaan: kenetralan murni adalah ilusi; tata letak apa pun pasti memiliki default.',
        C: 'Salah. Pendukung tidak menghina kecerdasan moral warga.',
        D: 'Salah. Tidak ada wacana penyitaan tabungan oleh negara.',
        E: 'Salah. Tidak ada klaim konstitusi paternalistik semacam itu.'
      },
      strategyTip: 'Cari kalimat yang diawali dengan "Proponents respond that...".',
      keyVocab: [
        { word: 'Libertarian paternalism', meaning: 'Paternalisme libertarian (mengarahkan untuk kebaikan tapi tetap memberi kebebasan memilih)' },
        { word: 'Default bias', meaning: 'Kecenderungan memilih opsi bawaan default karena malas mengubah' }
      ]
    }
  },
  {
    id: 40,
    passageId: 'passage-8',
    questionText: 'The word "debunked" in paragraph 1 is closest in meaning to...',
    options: [
      'disproved and exposed as flawed',
      'celebrated and officially institutionalized',
      'financially subsidized',
      'mathematically replicated without changes',
      'deliberately kept secret from scholars'
    ],
    correctAnswer: 0, // A
    skillType: 'Vocabulary in Context',
    explanation: {
      summary: 'Dalam kalimat "...Kahneman and Amos Tversky decisively debunked this paradigm, demonstrating that human cognition is constrained by bounded rationality...", kata "debunked" bermakna menyanggah, mematahkan mitos, atau membuktikan bahwa teori tersebut keliru.',
      clueSentence: 'Paragraph 1: "...experiments conducted by cognitive psychologists Daniel Kahneman and Amos Tversky decisively debunked this paradigm..."',
      optionAnalysis: {
        A: 'BENAR. "Disproved and exposed as flawed" (disanggah dan dibuktikan kekeliruannya) merupakan padanan tepat dari debunked.',
        B: 'Salah. Menolak, bukan merayakan atau meresmikan.',
        C: 'Salah. Tidak berkaitan dengan subsidi uang.',
        D: 'Salah. Membantah, bukan mereplikasi.',
        E: 'Salah. Tidak disembunyikan secara rahasia.'
      },
      strategyTip: 'Ingat kata "debunk a myth" (mematahkan mitos / membuktikan ketidakbenaran suatu anggapan umum).',
      keyVocab: [
        { word: 'Debunk', meaning: 'Membongkar kepalsuan / membantah kebenaran suatu teori' },
        { word: 'Heuristic', meaning: 'Jalan pintas mental dalam mengambil keputusan' }
      ]
    }
  },

  // ==================== PASSAGE 9: QUESTIONS 41 - 45 ====================
  {
    id: 41,
    passageId: 'passage-9',
    questionText: 'How does the James Webb Space Telescope (JWST) fundamentally differ from the Hubble Space Telescope according to paragraph 1?',
    options: [
      'JWST is permanently stationed in a low orbit directly around the Moon.',
      'JWST operates primarily in infrared wavelengths, whereas Hubble observed mostly in visible and ultraviolet light.',
      'Hubble had a larger primary mirror and was able to detect higher redshifts than JWST.',
      'JWST relies solely on manned astronaut crews to manually direct its focal mirrors.',
      'Hubble was designed strictly for atmospheric weather monitoring on Earth.'
    ],
    correctAnswer: 1, // B
    skillType: 'Specific Detail & Fact',
    explanation: {
      summary: 'Paragraf 1 menyatakan: Berbeda dari teleskop Hubble yang mengamati spektrum cahaya tampak dan ultraviolet, JWST mengamati pada spektrum inframerah dekat dan menengah beresolusi tinggi.',
      clueSentence: 'Paragraph 1: "Unlike its predecessor, the Hubble Space Telescope, which observed primarily in visible and ultraviolet wavelengths, JWST operates across high-resolution near- and mid-infrared spectra."',
      optionAnalysis: {
        A: 'Salah. JWST berada di titik Lagrange 2 (L2), bukan mengorbit Bulan.',
        B: 'BENAR. Perbedaan fundamentalnya adalah panjang gelombang inframerah (JWST) versus cahaya tampak/ultraviolet (Hubble).',
        C: 'Salah. JWST memiliki cermin jauh lebih besar dan mendeteksi redshift lebih tinggi daripada Hubble.',
        D: 'Salah. JWST beroperasi tanpa awak manusia di titik L2 (1,5 juta km dari Bumi).',
        E: 'Salah. Hubble adalah teleskop antariksa astronomi, bukan pengawas cuaca Bumi.'
      },
      strategyTip: 'Cari kata perbandingan "Unlike its predecessor..." di paragraf 1.',
      keyVocab: [
        { word: 'Predecessor', meaning: 'Pendahulu' },
        { word: 'Wavelength', meaning: 'Panjang gelombang' }
      ]
    }
  },
  {
    id: 42,
    passageId: 'passage-9',
    questionText: 'Why is infrared capability essential for observing the earliest cosmic structures?',
    options: [
      'Cosmic dust emits exclusively lethal gamma radiation that destroys visible lenses.',
      'Cosmic expansion stretches the light from distant primordial celestial bodies into the infrared spectrum.',
      'The early universe contained no hydrogen or helium atoms.',
      'Infrared light travels significantly faster than the universal speed of light.',
      'All ancient galaxies were physically frozen in absolute zero temperature ice.'
    ],
    correctAnswer: 1, // B
    skillType: 'Specific Detail & Fact',
    explanation: {
      summary: 'Paragraf 1 menjelaskan bahwa ekspansi alam semesta menyebabkan panjang gelombang cahaya dari benda langit purba meregang menjadi inframerah (fenomena redshift), sehingga hanya instrumen inframerah yang dapat menangkapnya menembus debu kosmik.',
      clueSentence: 'Paragraph 1: "Because cosmic expansion causes the wavelengths of light emitted by primordial celestial bodies to stretch into the infrared—a cosmological phenomenon known as redshift..."',
      optionAnalysis: {
        A: 'Salah. Tidak relevan dan keliru secara fisika.',
        B: 'BENAR. Penjelasan ilmiah redshift: pemuaian alam semesta meregangkan gelombang cahaya purba menuju spektrum inframerah.',
        C: 'Salah. Alam semesta purba justru didominasi hidrogen dan helium.',
        D: 'Salah. Kecepatan cahaya konstan di ruang hampa.',
        E: 'Salah. Galaksi purba bersuhu sangat tinggi dan aktif membentuk bintang.'
      },
      strategyTip: 'Hubungkan istilah "redshift" dengan pemanjangan gelombang akibat ekspansi kosmik.',
      keyVocab: [
        { word: 'Redshift', meaning: 'Pergeseran merah (pemanjangan gelombang cahaya akibat objek menjauh/alam semesta memuai)' },
        { word: 'Primordial', meaning: 'Purba / paling awal dari awal penciptaan' }
      ]
    }
  },
  {
    id: 43,
    passageId: 'passage-9',
    questionText: 'What unexpected finding from the "Cosmic Dawn" observations surprised astrophysicists in paragraph 2?',
    options: [
      'The early universe was completely empty with zero stars forming for ten billion years.',
      'The discovery of massive, luminous galaxies existing just 300 to 500 million years after the Big Bang, defying theoretical models.',
      'The confirmation that standard cosmological models predicted early galaxies with perfect mathematical accuracy.',
      'The detection of synthetic radio signals emitted by extraterrestrial planetary civilizations.',
      'The observation that all early stars were microscopic and colder than terrestrial ice.'
    ],
    correctAnswer: 1, // B
    skillType: 'Specific Detail & Fact',
    explanation: {
      summary: 'Paragraf 2 menyatakan bahwa model standar memperkirakan galaksi purba berukuran kecil dan redup; namun JWST justru menemukan galaksi masif dan sangat terang yang sudah terbentuk hanya 300-500 juta tahun pasca Big Bang.',
      clueSentence: 'Paragraph 2: "Instead, JWST discovered massive, luminous galaxies existing just 300 to 500 million years post-singularity, containing stellar populations far more evolved than theoretical models allowed."',
      optionAnalysis: {
        A: 'Salah. Bintang justru terbentuk sangat cepat dan masif.',
        B: 'BENAR. Kejutan terbesarnya: penemuan galaksi raksasa yang sangat terang pada usia alam semesta yang masih sangat muda (300-500 juta tahun).',
        C: 'Salah. Temuan ini mengejutkan karena bertentangan dengan prediksi model standar.',
        D: 'Salah. Tidak ada sinyal alien yang ditemukan.',
        E: 'Salah. Bintang purba sangat masif dan bersuhu tinggi.'
      },
      strategyTip: 'Perhatikan kata transisi kontras "Instead..." pada paragraf 2 setelah pembahasan ekspektasi model teoritis lama.',
      keyVocab: [
        { word: 'Luminous', meaning: 'Sangat terang memancarkan cahaya' },
        { word: 'Post-singularity', meaning: 'Setelah titik awal Big Bang' }
      ]
    }
  },
  {
    id: 44,
    passageId: 'passage-9',
    questionText: 'According to paragraph 3, which hypothesis has been proposed to account for the anomalous early massive galaxies?',
    options: [
      'Primordial black holes may have formed directly from gravitational gas collapses without prior stellar death.',
      'The Big Bang theory has been formally abandoned and replaced by a static universe model.',
      'The telescope\'s lenses were contaminated by terrestrial moisture during rocket launch.',
      'Early galaxies were optical illusions caused by reflections from Jupiter\'s rings.',
      'Light travelled in reverse direction in the early cosmos.'
    ],
    correctAnswer: 0, // A
    skillType: 'Specific Detail & Fact',
    explanation: {
      summary: 'Paragraf 3 memaparkan dua hipotesis ilmuwan, salah satunya: lubang hitam purba mungkin terbentuk langsung dari keruntuhan gravitasi awan gas di alam semesta muda tanpa melalui kematian bintang terlebih dahulu.',
      clueSentence: 'Paragraph 3: "Some astrophysicists propose that primordial black holes formed directly from gravitational gas collapses in the nascent universe without prior stellar death, accelerating early star formation."',
      optionAnalysis: {
        A: 'BENAR. Sesuai langsung dengan penjelasan hipotesis keruntuhan langsung awan gas menjadi black hole purba.',
        B: 'Salah. Kalimat penutup menegaskan: "Rather than invalidating the Big Bang framework..." (tidak membatalkan teori Big Bang).',
        C: 'Salah. Tidak ada klaim kontaminasi lensa.',
        D: 'Salah. Bukan ilusi optik cincin Jupiter.',
        E: 'Salah. Cahaya tidak merambat terbalik.'
      },
      strategyTip: 'Pastikan membaca detail hipotesis di paragraf 3 dengan teliti dan hindari asumsi yang membatalkan teori Big Bang.',
      keyVocab: [
        { word: 'Gravitational collapse', meaning: 'Keruntuhan materi akibat gaya gravitasinya sendiri' },
        { word: 'Nascent', meaning: 'Baru lahir / baru mulai berkembang' }
      ]
    }
  },
  {
    id: 45,
    passageId: 'passage-9',
    questionText: 'The word "anomalous" in paragraph 3 is closest in meaning to...',
    options: [
      'atypical and deviating from standard expectations',
      'predictable and strictly routine',
      'universally despised',
      'microscopic and insignificant',
      'chemically inert'
    ],
    correctAnswer: 0, // A
    skillType: 'Vocabulary in Context',
    explanation: {
      summary: 'Dalam konteks "These anomalous discoveries have prompted vigorous scientific debates...", kata "anomalous" bermakna anomali, tidak biasa, menyimpang dari prediksi umum (atypical / unexpected).',
      clueSentence: 'Paragraph 3: "These anomalous discoveries have prompted vigorous scientific debates regarding galactic evolution..."',
      optionAnalysis: {
        A: 'BENAR. "Atypical and deviating from standard expectations" (tidak lazim dan menyimpang dari standar) adalah sinonim tepat.',
        B: 'Salah. Predictable/routine adalah antonim (dapat diprediksi).',
        C: 'Salah. Despised berarti dibenci.',
        D: 'Salah. Insignificant berarti tidak penting, padahal temuan ini sangat revolusioner.',
        E: 'Salah. Inert berarti tidak bereaksi kimia.'
      },
      strategyTip: 'Anomali berarti penyimpangan dari pola lazim (deviating from the norm).',
      keyVocab: [
        { word: 'Anomalous', meaning: 'Menyimpang dari kebiasaan / anomali' },
        { word: 'Nascent', meaning: 'Sedang bertunas / baru terbentuk' }
      ]
    }
  },

  // ==================== PASSAGE 10: QUESTIONS 46 - 50 ====================
  {
    id: 46,
    passageId: 'passage-10',
    questionText: 'What is the "clean energy mineral dilemma" articulated in paragraph 1?',
    options: [
      'Renewable energy technologies consume far more oil and coal than combustion vehicles.',
      'Solar panels and electric cars require substantially more critical mineral extraction than traditional fossil-fuel infrastructures.',
      'Electric batteries produce nuclear radiation when recharged repeatedly.',
      'Wind turbines can only be constructed from gold and diamond alloys.',
      'Governments have banned the use of copper in municipal power lines.'
    ],
    correctAnswer: 1, // B
    skillType: 'Main Idea & Topic',
    explanation: {
      summary: 'Paragraf 1 mengungkap paradoks bahwa transisi menuju energi bersih dan kendaraan listrik justru membutuhkan jauh lebih banyak mineral tambang kritis (seperti litium, nikel, tembaga, kobalt) dibandingkan infrastruktur bahan bakar fosil konvensional.',
      clueSentence: 'Paragraph 1: "...renewable infrastructures are vastly more mineral-intensive than their hydrocarbon predecessors. An electric vehicle, for example, demands six times more critical mineral inputs..."',
      optionAnalysis: {
        A: 'Salah. Kendaraan listrik tidak memakai lebih banyak batu bara/minyak secara langsung.',
        B: 'BENAR. Merangkum dilema utama: infrastruktur energi bersih sangat rakus mineral kritis dibandingkan teknologi hidrokarbon lama.',
        C: 'Salah. Baterai listrik tidak memancarkan radiasi nuklir.',
        D: 'Salah. Tidak dibuat dari paduan emas dan berlian.',
        E: 'Salah. Penggunaan tembaga tidak dilarang.'
      },
      strategyTip: 'Perhatikan kalimat "renewable infrastructures are vastly more mineral-intensive than their hydrocarbon predecessors".',
      keyVocab: [
        { word: 'Mineral-intensive', meaning: 'Membutuhkan banyak mineral tambang' },
        { word: 'Hydrocarbon predecessors', meaning: 'Teknologi bahan bakar fosil terdahulu' }
      ]
    }
  },
  {
    id: 47,
    passageId: 'passage-10',
    questionText: 'According to paragraph 2, what severe ecological consequence occurs in the "Lithium Triangle"?',
    options: [
      'Massive avalanches of volcanic snow destroy coastal cities.',
      'The evaporation of lithium brine consumes millions of liters of groundwater, imperiling desert biomes and pastoralists.',
      'Excessive freshwater flooding permanently submerges local farming communities.',
      'Toxic gas releases completely destroy the upper atmospheric ozone layer.',
      'Oceanic tides rise by over twenty meters daily.'
    ],
    correctAnswer: 1, // B
    skillType: 'Specific Detail & Fact',
    explanation: {
      summary: 'Paragraf 2 menyatakan bahwa di wilayah "Lithium Triangle" (Amerika Selatan), penguapan air garam litium mengonsumsi jutaan liter air tanah per ton metrik, membahayakan ekosistem gurun yang rapuh dan para peternak lokal.',
      clueSentence: 'Paragraph 2: "In arid regions like South America\'s \'Lithium Triangle,\' evaporating lithium brine consumes millions of liters of groundwater per metric ton, imperiling fragile desert biomes and Indigenous pastoralists."',
      optionAnalysis: {
        A: 'Salah. Wilayah ini adalah gurun kering gersang, bukan salju vulkanik longsor.',
        B: 'BENAR. Fakta eksplisit: penguapan brine litium menyedot jutaan liter air tanah dan mengancam ekosistem serta peternak lokal.',
        C: 'Salah. Justru terjadi kekeringan air tanah, bukan banjir air tawar melimpah.',
        D: 'Salah. Tidak merusak lapisan ozon atas.',
        E: 'Salah. Pasang surut laut tidak ada kaitan dengan gurun litium pedalaman.'
      },
      strategyTip: 'Cari frasa kutipan nama lokasi "\'Lithium Triangle\'" pada paragraf 2.',
      keyVocab: [
        { word: 'Lithium brine', meaning: 'Air asin/larutan kaya kandungan garam litium' },
        { word: 'Pastoralist', meaning: 'Masyarakat penggembala/peternak hewan tradisional' }
      ]
    }
  },
  {
    id: 48,
    passageId: 'passage-10',
    questionText: 'The word "imperative" in paragraph 3 is closest in meaning to...',
    options: [
      'optional and easily postponable',
      'crucially necessary and urgent',
      'commercially unprofitable',
      'historically unprecedented',
      'strictly theoretical'
    ],
    correctAnswer: 1, // B
    skillType: 'Vocabulary in Context',
    explanation: {
      summary: 'Dalam kalimat terakhir: "...is imperative to decouple clean energy expansion from raw ecological destruction", kata "imperative" bermakna sangat mendesak, penting sekali, atau suatu keharusan mutlak (crucially necessary / essential).',
      clueSentence: 'Paragraph 3: "...Developing robust closed-loop industrial recycling ecosystems... is imperative to decouple clean energy expansion from raw ecological destruction."',
      optionAnalysis: {
        A: 'Salah. Optional/postponable berarti bisa ditunda/sukarela (antonim).',
        B: 'BENAR. "Crucially necessary and urgent" (sangat mendasar dan mendesak) adalah padanan tepat dari imperative.',
        C: 'Salah. Tidak berarti tidak menguntungkan secara komersial.',
        D: 'Salah. Unprecedented berarti belum pernah terjadi sebelumnya.',
        E: 'Salah. Theoretical berarti bersifat teori semata.'
      },
      strategyTip: 'Kata "imperative" sering keluar di ujian masuk perguruan tinggi sebagai sinonim dari essential, vital, urgent.',
      keyVocab: [
        { word: 'Imperative', meaning: 'Keharusan mutlak / sangat mendesak' },
        { word: 'Decouple', meaning: 'Memisahkan keterikatan dua hal (memutuskan hubungan saling ketergantungan)' }
      ]
    }
  },
  {
    id: 49,
    passageId: 'passage-10',
    questionText: 'According to paragraph 3, what major environmental advantage does circular hydrometallurgy offer over virgin mining?',
    options: [
      'It creates artificial diamonds without requiring electricity.',
      'It recovers over ninety-five percent of high-purity battery minerals with a fraction of the carbon emissions generated by virgin mining.',
      'It eliminates the need for any chemical reactions or refining facilities.',
      'It transforms spent batteries into combustible petroleum fuel.',
      'It produces zero waste while instantly lowering global atmospheric temperatures.'
    ],
    correctAnswer: 1, // B
    skillType: 'Specific Detail & Fact',
    explanation: {
      summary: 'Paragraf 3 menyatakan bahwa proses hidrometalurgi dapat mendaur ulang lebih dari 95% litium, kobalt, dan nikel dengan kemurnian tinggi dari baterai bekas, dengan emisi karbon yang jauh lebih sedikit dibandingkan penambangan bijih primer baru.',
      clueSentence: 'Paragraph 3: "...can recover over ninety-five percent of high-purity lithium, cobalt, and nickel from spent lithium-ion battery cells with a fraction of the carbon emissions generated by virgin mining."',
      optionAnalysis: {
        A: 'Salah. Tidak membuat berlian buatan.',
        B: 'BENAR. Menyebutkan daur ulang >95% mineral kemurnian tinggi dengan emisi karbon yang jauh lebih kecil dibanding tambang primer.',
        C: 'Salah. Hidrometalurgi adalah proses kimiawi larutan berair, jadi tetap membutuhkan proses kimiawi terkontrol.',
        D: 'Salah. Baterai tidak diubah menjadi bensin minyak bumi.',
        E: 'Salah. Klaim langsung menurunkan suhu global seketika terlalu muluk dan tidak ada di teks.'
      },
      strategyTip: 'Cari kata "hydrometallurgical recycling" di paragraf 3 dan periksa klaim efisiensi (95%) serta emisinya.',
      keyVocab: [
        { word: 'Hydrometallurgy', meaning: 'Teknik ekstraksi logam dari larutan kimia cair' },
        { word: 'Spent battery', meaning: 'Baterai yang telah habis masa pakainya' }
      ]
    }
  },
  {
    id: 50,
    passageId: 'passage-10',
    questionText: 'Which alternative battery chemistry is explicitly mentioned in paragraph 3 as a potential solution to reduce mineral scarcity?',
    options: [
      'Uranium-fission cells',
      'Sodium-ion architectures',
      'Lead-acid car batteries',
      'Mercury-cadmium modules',
      'Hydrogen peroxide cartridges'
    ],
    correctAnswer: 1, // B
    skillType: 'Specific Detail & Fact',
    explanation: {
      summary: 'Paragraf 3 secara eksplisit menyebutkan arsitektur baterai natrium/sodium (sodium-ion architectures) sebagai kimia alternatif untuk mengurangi ketergantungan pada litium dan mineral langka.',
      clueSentence: 'Paragraph 3: "...alongside alternative battery chemistries, such as sodium-ion architectures, is imperative to decouple clean energy expansion from raw ecological destruction."',
      optionAnalysis: {
        A: 'Salah. Tidak menyebut reaksi fisi uranium nuklir.',
        B: 'BENAR. Teks secara eksplisit menyebut "sodium-ion architectures". Natrium jauh lebih melimpah di alam.',
        C: 'Salah. Aki timbal-asam adalah teknologi lama, bukan solusi baterai maju.',
        D: 'Salah. Merkuri dan kadmium adalah logam beracun berbahaya.',
        E: 'Salah. Tidak menyebut hidrogen peroksida.'
      },
      strategyTip: 'Soal penutup menanyakan nama teknologi kimia baterai alternatif yang dicantumkan secara harfiah di akhir bacaan.',
      keyVocab: [
        { word: 'Sodium-ion', meaning: 'Baterai ion natrium (menggunakan garam natrium yang melimpah)' },
        { word: 'Scarcity', meaning: 'Kelangkaan barang/sumber daya' }
      ]
    }
  }
];
