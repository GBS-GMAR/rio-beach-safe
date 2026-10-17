/* Rio Beach Safe – textos em todos os idiomas.
   PT, ES e EN seguem exatamente as telas aprovadas pelo CBMERJ.
   Os demais idiomas foram traduzidos a partir delas. */
window.LANGS = [
  { code: 'pt', name: 'Português', flag: '🇧🇷', main: true },
  { code: 'es', name: 'Español', flag: '🇪🇸', main: true },
  { code: 'en', name: 'English', flag: '🇬🇧', main: true },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪', main: true },
  { code: 'fr', name: 'Français', flag: '🇫🇷', main: true },
  { code: 'zh', name: '中文', flag: '🇨🇳', main: true },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦', rtl: true },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' }
];

window.I18N = {
/* ───────────────────────── PORTUGUÊS ───────────────────────── */
pt: {
  ui: {
    chooseLang: 'Escolha o seu idioma',
    tagline: 'Informação, prevenção e segurança para todos nas praias do Rio',
    otherLangs: 'Outros idiomas',
    libras: 'Libras',
    librasHint: 'Tradução em Língua Brasileira de Sinais',
    menuTitle: 'Informação que salva vidas!',
    back: 'Voltar',
    home: 'Início',
    changeLang: 'Idioma',
    slogan: 'Abrace o Rio. Aproveite com segurança!',
    cbmerj: 'Corpo de Bombeiros Militar do Estado do Rio de Janeiro',
    call: 'Ligar',
    tapToCall: 'Toque para ligar',
    install193: 'Baixar o app 193RJ',
    install193Sub: 'Aplicativo oficial do CBMERJ para pedir socorro',
    installed: 'Adicionar à tela inicial',
    next: 'Próximo',
    share: 'Compartilhar'
  },
  menu: {
    flags: { title: 'Bandeiras de sinalização', sub: 'O que cada cor significa' },
    rip: { title: 'Correntes de retorno', sub: 'Como reconhecer e como sair' },
    health: { title: 'Saúde e bem-estar', sub: 'Cuidados em ambientes quentes' },
    kids: { title: 'Segurança infantil', sub: 'Pulseira de identificação e cuidados' },
    emergency: { title: 'Emergência', sub: 'Números importantes e app 193RJ' }
  },
  flags: {
    title: 'Bandeiras de sinalização',
    red: { name: 'Bandeira vermelha · Alto risco', items: ['Mar perigoso', 'Não entre nesta área', 'Risco elevado de afogamento'] },
    yellow: { name: 'Bandeira amarela · Médio risco', items: ['Risco moderado de afogamento'] },
    green: { name: 'Bandeira verde · Baixo risco', items: ['Condições favoráveis ao banho de mar', 'Aproveite com segurança!'] },
    purple: { name: 'Bandeira roxa · Animais marinhos', items: ['Presença de animais marinhos'] },
    attention: 'ATENÇÃO:',
    attentionText: 'O banho de mar no período noturno não é recomendado. Após o pôr do sol, não há atuação do serviço de guarda-vidas, aumentando os riscos associados ao banho de mar.'
  },
  rip: {
    title: 'Correntes de retorno',
    items: [
      'As correntes de retorno são sinalizadas pelos guarda-vidas com o uso de bandeiras vermelhas ou placas de sinalização.',
      'Para sair da corrente de retorno, nade paralelamente à praia.',
      'Para pedir auxílio, mantenha a calma, levante o braço e peça ajuda para atrair a atenção.',
      'Conserve energia boiando. Utilize a força das ondas para auxiliar no retorno à praia.'
    ]
  },
  health: {
    title: 'Cuidados com a saúde',
    sub: 'em ambientes quentes',
    water: { title: 'Consumo de água', text: 'Beba água regularmente.' },
    alcohol: { title: 'Álcool', text: 'O álcool prejudica a percepção, favorece a desidratação e aumenta o risco de acidentes e afogamento.', strong: 'Se beber, não entre no mar.', after: 'Beba com responsabilidade.' },
    sun: { title: 'Sol', text: 'Proteja-se do sol, principalmente nos horários de maior intensidade. Aplique protetor solar 30 minutos antes da exposição.' },
    gear: { title: 'Use acessórios de proteção', text: 'Utilize chapéu, boné, óculos de sol e roupas com proteção UV.' }
  },
  kids: {
    wristTitle: 'Pulseira de identificação',
    wristText: 'Uma ação simples que facilita a identificação e o contato rápido com o responsável.',
    wristFields: ['Nome do responsável', 'Tel. de contato', 'Localização / referência'],
    title: 'Segurança das crianças',
    items: [
      'Nunca deixe as crianças sozinhas.',
      'Mostre pontos de referência e combine um ponto de encontro, se necessário.',
      'Oriente sobre os limites do mar e ensine até onde a criança pode entrar.',
      'Nunca deixe a criança sob os cuidados de pessoas desconhecidas.',
      'Conheça o seu entorno e observe quem está ao seu redor.',
      'No mar, fique sempre perto e mantenha supervisão constante.',
      'Ensine as crianças sobre os perigos do mar e como pedir ajuda.'
    ]
  },
  emergency: {
    title: 'Números importantes',
    numbers: { '193': 'Corpo de Bombeiros', '192': 'SAMU', '190': 'Polícia Militar', '199': 'Defesa Civil' },
    note1: 'Em caso de emergência,',
    note2: 'ligue para o número correspondente.',
    note3: 'Sua atitude pode salvar vidas!'
  }
},

/* ───────────────────────── ESPAÑOL ───────────────────────── */
es: {
  ui: {
    chooseLang: 'Elige tu idioma',
    tagline: 'Información, prevención y seguridad para todos en las playas de Río',
    otherLangs: 'Otros idiomas',
    libras: 'Libras',
    librasHint: 'Lengua de Señas Brasileña',
    menuTitle: '¡Información que salva vidas!',
    back: 'Volver',
    home: 'Inicio',
    changeLang: 'Idioma',
    slogan: '¡Disfruta Río. Con seguridad!',
    cbmerj: 'Cuerpo de Bomberos Militar del Estado de Río de Janeiro',
    call: 'Llamar',
    tapToCall: 'Toca para llamar',
    install193: 'Descargar la app 193RJ',
    install193Sub: 'Aplicación oficial del CBMERJ para pedir auxilio',
    installed: 'Añadir a la pantalla de inicio',
    next: 'Siguiente',
    share: 'Compartir'
  },
  menu: {
    flags: { title: 'Banderas de señalización', sub: 'Qué significa cada color' },
    rip: { title: 'Corrientes de retorno', sub: 'Cómo reconocerlas y cómo salir' },
    health: { title: 'Salud y bienestar', sub: 'Cuidados en ambientes calurosos' },
    kids: { title: 'Seguridad infantil', sub: 'Pulsera de identificación y cuidados' },
    emergency: { title: 'Emergencia', sub: 'Números importantes y app 193RJ' }
  },
  flags: {
    title: 'Banderas de señalización',
    red: { name: 'Bandera roja · Alto riesgo', items: ['Mar peligroso', 'No entre en esta zona', 'Alto riesgo de ahogamiento'] },
    yellow: { name: 'Bandera amarilla · Riesgo medio', items: ['Riesgo moderado de ahogamiento'] },
    green: { name: 'Bandera verde · Bajo riesgo', items: ['Condiciones favorables para bañarse en el mar', '¡Disfrute con seguridad!'] },
    purple: { name: 'Bandera morada · Animales marinos', items: ['Presencia de animales marinos'] },
    attention: 'ATENCIÓN:',
    attentionText: 'No se recomienda bañarse en el mar durante la noche. Después de la puesta del sol, no hay servicio de guardavidas, lo que aumenta los riesgos asociados al baño en el mar.'
  },
  rip: {
    title: 'Corrientes de retorno',
    items: [
      'Las corrientes de retorno son señalizadas por los guardavidas mediante banderas rojas o carteles de señalización.',
      'Para salir de la corriente de retorno, nade paralelamente a la playa.',
      'Para pedir ayuda, mantenga la calma, levante el brazo y pida ayuda para llamar la atención.',
      'Conserve energía flotando. Utilice la fuerza de las olas para ayudar a regresar a la playa.'
    ]
  },
  health: {
    title: 'Cuidados con la salud',
    sub: 'en ambientes calurosos',
    water: { title: 'Consumo de agua', text: 'Bebe agua regularmente.' },
    alcohol: { title: 'Alcohol', text: 'El alcohol perjudica la percepción, favorece la deshidratación y aumenta el riesgo de accidentes y ahogamiento.', strong: 'Si bebes, no entres al mar.', after: 'Bebe con responsabilidad.' },
    sun: { title: 'Sol', text: 'Protégete del sol, especialmente en los horarios de mayor intensidad. Aplica protector solar 30 minutos antes de la exposición.' },
    gear: { title: 'Usa accesorios de protección', text: 'Utiliza sombrero, gorra, gafas de sol y ropa con protección UV.' }
  },
  kids: {
    wristTitle: 'Pulsera de identificación',
    wristText: 'Una acción sencilla que facilita la identificación y el contacto rápido con el responsable.',
    wristFields: ['Nombre del responsable', 'Tel. de contacto', 'Ubicación / referencia'],
    title: 'Seguridad de los niños',
    items: [
      'Nunca deje a los niños solos.',
      'Muéstreles puntos de referencia y acuerden un punto de encuentro, si es necesario.',
      'Explíqueles los límites del mar y hasta dónde pueden entrar.',
      'Nunca deje a los niños al cuidado de personas desconocidas.',
      'Conozca su entorno y observe quién está a su alrededor.',
      'En el mar, manténgase siempre cerca y supervise a los niños constantemente.',
      'Enséñeles los peligros del mar y cómo pedir ayuda.'
    ]
  },
  emergency: {
    title: 'Números importantes',
    numbers: { '193': 'Cuerpo de Bomberos', '192': 'SAMU', '190': 'Policía Militar', '199': 'Defensa Civil' },
    note1: 'En caso de emergencia,',
    note2: 'llame al número correspondiente.',
    note3: '¡Su actitud puede salvar vidas!'
  }
},

/* ───────────────────────── ENGLISH ───────────────────────── */
en: {
  ui: {
    chooseLang: 'Choose your language',
    tagline: 'Information, prevention and safety for everyone on Rio\'s beaches',
    otherLangs: 'Other languages',
    libras: 'Libras',
    librasHint: 'Brazilian Sign Language',
    menuTitle: 'Information that saves lives!',
    back: 'Back',
    home: 'Home',
    changeLang: 'Language',
    slogan: 'Enjoy Rio. Stay safe!',
    cbmerj: 'Military Fire Department of the State of Rio de Janeiro',
    call: 'Call',
    tapToCall: 'Tap to call',
    install193: 'Download the 193RJ app',
    install193Sub: 'Official CBMERJ app to call for help',
    installed: 'Add to home screen',
    next: 'Next',
    share: 'Share'
  },
  menu: {
    flags: { title: 'Warning flags', sub: 'What each colour means' },
    rip: { title: 'Rip currents', sub: 'How to spot one and how to escape' },
    health: { title: 'Health and well-being', sub: 'Care in hot environments' },
    kids: { title: 'Child safety', sub: 'Identification wristband and tips' },
    emergency: { title: 'Emergency', sub: 'Important numbers and the 193RJ app' }
  },
  flags: {
    title: 'Warning flags',
    red: { name: 'Red flag · High risk', items: ['Dangerous sea conditions', 'Do not enter this area', 'High risk of drowning'] },
    yellow: { name: 'Yellow flag · Medium risk', items: ['Moderate risk of drowning'] },
    green: { name: 'Green flag · Low risk', items: ['Favorable conditions for swimming in the sea', 'Enjoy safely!'] },
    purple: { name: 'Purple flag · Marine animals', items: ['Presence of marine animals'] },
    attention: 'ATTENTION:',
    attentionText: 'Swimming in the sea at night is not recommended. After sunset, lifeguard services are not available, increasing the risks associated with swimming in the sea.'
  },
  rip: {
    title: 'Rip currents',
    items: [
      'Rip currents are marked by lifeguards using red flags or warning signs.',
      'To escape a rip current, swim parallel to the beach.',
      'To ask for help, stay calm, raise your arm, and call for help to attract attention.',
      'Conserve energy by floating. Use the force of the waves to help you return to the beach.'
    ]
  },
  health: {
    title: 'Health care tips',
    sub: 'in hot environments',
    water: { title: 'Water intake', text: 'Drink water regularly.' },
    alcohol: { title: 'Alcohol', text: 'Alcohol impairs judgment, increases the risk of dehydration, accidents and drowning.', strong: 'Do not enter the water after drinking alcoholic beverages.', after: 'Drink responsibly.' },
    sun: { title: 'Sun', text: 'Protect yourself from the sun, especially during peak hours. Apply sunscreen 30 minutes before sun exposure.' },
    gear: { title: 'Use protective accessories', text: 'Wear a hat, cap, sunglasses and UV-protective clothing.' }
  },
  kids: {
    wristTitle: 'Identification wristband',
    wristText: 'A simple action that makes identification easier and allows quick contact with the parent or guardian.',
    wristFields: ['Responsible person', 'Contact phone', 'Location / reference'],
    title: 'Child safety',
    items: [
      'Never leave children alone.',
      'Show them landmarks and agree on a meeting point, if necessary.',
      'Explain the limits of the sea and how far they are allowed to go into the water.',
      'Never leave your child with strangers.',
      'Be aware of your surroundings and who is around you.',
      'In the water, always stay close and supervise children at all times.',
      'Teach children about the dangers of the sea and how to ask for help.'
    ]
  },
  emergency: {
    title: 'Important numbers',
    numbers: { '193': 'Fire Department', '192': 'SAMU (Ambulance)', '190': 'Military Police', '199': 'Civil Defense' },
    note1: 'In case of emergency,',
    note2: 'call the corresponding number.',
    note3: 'Your attitude can save lives!'
  }
},

/* ───────────────────────── DEUTSCH ───────────────────────── */
de: {
  ui: {
    chooseLang: 'Wählen Sie Ihre Sprache',
    tagline: 'Information, Prävention und Sicherheit für alle an den Stränden von Rio',
    otherLangs: 'Weitere Sprachen',
    libras: 'Libras',
    librasHint: 'Brasilianische Gebärdensprache',
    menuTitle: 'Informationen, die Leben retten!',
    back: 'Zurück',
    home: 'Start',
    changeLang: 'Sprache',
    slogan: 'Genießen Sie Rio. Bleiben Sie sicher!',
    cbmerj: 'Militärische Feuerwehr des Bundesstaates Rio de Janeiro',
    call: 'Anrufen',
    tapToCall: 'Zum Anrufen tippen',
    install193: 'App 193RJ herunterladen',
    install193Sub: 'Offizielle App der CBMERJ, um Hilfe zu rufen',
    installed: 'Zum Startbildschirm hinzufügen',
    next: 'Weiter',
    share: 'Teilen'
  },
  menu: {
    flags: { title: 'Warnflaggen', sub: 'Was jede Farbe bedeutet' },
    rip: { title: 'Rippströmungen', sub: 'Erkennen und entkommen' },
    health: { title: 'Gesundheit und Wohlbefinden', sub: 'Vorsicht bei Hitze' },
    kids: { title: 'Kindersicherheit', sub: 'Identifikationsarmband und Tipps' },
    emergency: { title: 'Notfall', sub: 'Wichtige Nummern und App 193RJ' }
  },
  flags: {
    title: 'Warnflaggen',
    red: { name: 'Rote Flagge · Hohes Risiko', items: ['Gefährliche See', 'Diesen Bereich nicht betreten', 'Hohe Ertrinkungsgefahr'] },
    yellow: { name: 'Gelbe Flagge · Mittleres Risiko', items: ['Mäßige Ertrinkungsgefahr'] },
    green: { name: 'Grüne Flagge · Geringes Risiko', items: ['Günstige Bedingungen zum Baden im Meer', 'Genießen Sie es sicher!'] },
    purple: { name: 'Violette Flagge · Meerestiere', items: ['Meerestiere im Wasser'] },
    attention: 'ACHTUNG:',
    attentionText: 'Nachts im Meer zu baden wird nicht empfohlen. Nach Sonnenuntergang gibt es keinen Rettungsschwimmerdienst, was die Risiken beim Baden im Meer erhöht.'
  },
  rip: {
    title: 'Rippströmungen',
    items: [
      'Rippströmungen werden von den Rettungsschwimmern mit roten Flaggen oder Warnschildern gekennzeichnet.',
      'Um einer Rippströmung zu entkommen, schwimmen Sie parallel zum Strand.',
      'Um Hilfe zu rufen, bleiben Sie ruhig, heben Sie den Arm und rufen Sie um Hilfe, um Aufmerksamkeit zu erregen.',
      'Sparen Sie Kraft, indem Sie sich treiben lassen. Nutzen Sie die Kraft der Wellen, um zum Strand zurückzukehren.'
    ]
  },
  health: {
    title: 'Gesundheitstipps',
    sub: 'bei heißem Wetter',
    water: { title: 'Wasser trinken', text: 'Trinken Sie regelmäßig Wasser.' },
    alcohol: { title: 'Alkohol', text: 'Alkohol beeinträchtigt die Wahrnehmung, fördert die Dehydrierung und erhöht das Risiko von Unfällen und Ertrinken.', strong: 'Wenn Sie getrunken haben, gehen Sie nicht ins Meer.', after: 'Trinken Sie verantwortungsvoll.' },
    sun: { title: 'Sonne', text: 'Schützen Sie sich vor der Sonne, besonders in den Stunden stärkster Strahlung. Tragen Sie Sonnencreme 30 Minuten vor dem Sonnenbad auf.' },
    gear: { title: 'Schutzzubehör verwenden', text: 'Tragen Sie Hut, Kappe, Sonnenbrille und Kleidung mit UV-Schutz.' }
  },
  kids: {
    wristTitle: 'Identifikationsarmband',
    wristText: 'Eine einfache Maßnahme, die die Identifizierung erleichtert und den schnellen Kontakt zur verantwortlichen Person ermöglicht.',
    wristFields: ['Name der verantwortlichen Person', 'Telefonnummer', 'Standort / Orientierungspunkt'],
    title: 'Sicherheit der Kinder',
    items: [
      'Lassen Sie Kinder nie allein.',
      'Zeigen Sie ihnen Orientierungspunkte und vereinbaren Sie bei Bedarf einen Treffpunkt.',
      'Erklären Sie die Grenzen des Meeres und wie weit das Kind ins Wasser darf.',
      'Lassen Sie Ihr Kind nie in der Obhut von Fremden.',
      'Kennen Sie Ihre Umgebung und beobachten Sie, wer sich in Ihrer Nähe befindet.',
      'Bleiben Sie im Meer immer in der Nähe und beaufsichtigen Sie Kinder ständig.',
      'Bringen Sie Kindern die Gefahren des Meeres bei und wie man um Hilfe bittet.'
    ]
  },
  emergency: {
    title: 'Wichtige Nummern',
    numbers: { '193': 'Feuerwehr', '192': 'SAMU (Rettungsdienst)', '190': 'Militärpolizei', '199': 'Zivilschutz' },
    note1: 'Im Notfall',
    note2: 'rufen Sie die entsprechende Nummer an.',
    note3: 'Ihr Verhalten kann Leben retten!'
  }
},

/* ───────────────────────── FRANÇAIS ───────────────────────── */
fr: {
  ui: {
    chooseLang: 'Choisissez votre langue',
    tagline: 'Information, prévention et sécurité pour tous sur les plages de Rio',
    otherLangs: 'Autres langues',
    libras: 'Libras',
    librasHint: 'Langue des signes brésilienne',
    menuTitle: 'Une information qui sauve des vies !',
    back: 'Retour',
    home: 'Accueil',
    changeLang: 'Langue',
    slogan: 'Profitez de Rio. En toute sécurité !',
    cbmerj: 'Corps des sapeurs-pompiers militaires de l\'État de Rio de Janeiro',
    call: 'Appeler',
    tapToCall: 'Touchez pour appeler',
    install193: 'Télécharger l\'app 193RJ',
    install193Sub: 'Application officielle du CBMERJ pour demander des secours',
    installed: 'Ajouter à l\'écran d\'accueil',
    next: 'Suivant',
    share: 'Partager'
  },
  menu: {
    flags: { title: 'Drapeaux de signalisation', sub: 'Ce que signifie chaque couleur' },
    rip: { title: 'Courants d\'arrachement', sub: 'Les reconnaître et s\'en sortir' },
    health: { title: 'Santé et bien-être', sub: 'Précautions par forte chaleur' },
    kids: { title: 'Sécurité des enfants', sub: 'Bracelet d\'identification et conseils' },
    emergency: { title: 'Urgence', sub: 'Numéros importants et app 193RJ' }
  },
  flags: {
    title: 'Drapeaux de signalisation',
    red: { name: 'Drapeau rouge · Risque élevé', items: ['Mer dangereuse', 'N\'entrez pas dans cette zone', 'Risque élevé de noyade'] },
    yellow: { name: 'Drapeau jaune · Risque moyen', items: ['Risque modéré de noyade'] },
    green: { name: 'Drapeau vert · Risque faible', items: ['Conditions favorables à la baignade', 'Profitez-en en toute sécurité !'] },
    purple: { name: 'Drapeau violet · Animaux marins', items: ['Présence d\'animaux marins'] },
    attention: 'ATTENTION :',
    attentionText: 'La baignade de nuit n\'est pas recommandée. Après le coucher du soleil, il n\'y a pas de service de sauveteurs, ce qui augmente les risques liés à la baignade.'
  },
  rip: {
    title: 'Courants d\'arrachement',
    items: [
      'Les courants d\'arrachement sont signalés par les sauveteurs au moyen de drapeaux rouges ou de panneaux de signalisation.',
      'Pour sortir d\'un courant d\'arrachement, nagez parallèlement à la plage.',
      'Pour demander de l\'aide, restez calme, levez le bras et appelez à l\'aide pour attirer l\'attention.',
      'Économisez votre énergie en flottant. Utilisez la force des vagues pour vous aider à revenir vers la plage.'
    ]
  },
  health: {
    title: 'Conseils santé',
    sub: 'par forte chaleur',
    water: { title: 'Hydratation', text: 'Buvez de l\'eau régulièrement.' },
    alcohol: { title: 'Alcool', text: 'L\'alcool altère la perception, favorise la déshydratation et augmente le risque d\'accidents et de noyade.', strong: 'Si vous avez bu, n\'entrez pas dans l\'eau.', after: 'Buvez avec modération.' },
    sun: { title: 'Soleil', text: 'Protégez-vous du soleil, surtout aux heures les plus intenses. Appliquez de la crème solaire 30 minutes avant l\'exposition.' },
    gear: { title: 'Utilisez des accessoires de protection', text: 'Portez un chapeau, une casquette, des lunettes de soleil et des vêtements anti-UV.' }
  },
  kids: {
    wristTitle: 'Bracelet d\'identification',
    wristText: 'Un geste simple qui facilite l\'identification et le contact rapide avec le responsable.',
    wristFields: ['Nom du responsable', 'Tél. de contact', 'Lieu / point de repère'],
    title: 'Sécurité des enfants',
    items: [
      'Ne laissez jamais les enfants seuls.',
      'Montrez-leur des points de repère et convenez d\'un point de rendez-vous si nécessaire.',
      'Expliquez les limites de la mer et jusqu\'où l\'enfant peut aller dans l\'eau.',
      'Ne confiez jamais votre enfant à des inconnus.',
      'Connaissez votre environnement et observez qui se trouve autour de vous.',
      'Dans l\'eau, restez toujours à proximité et surveillez les enfants en permanence.',
      'Apprenez aux enfants les dangers de la mer et comment demander de l\'aide.'
    ]
  },
  emergency: {
    title: 'Numéros importants',
    numbers: { '193': 'Pompiers', '192': 'SAMU (urgences médicales)', '190': 'Police militaire', '199': 'Protection civile' },
    note1: 'En cas d\'urgence,',
    note2: 'appelez le numéro correspondant.',
    note3: 'Votre attitude peut sauver des vies !'
  }
},

/* ───────────────────────── 中文 (简体) ───────────────────────── */
zh: {
  ui: {
    chooseLang: '请选择您的语言',
    tagline: '里约海滩的安全信息、预防与保护，面向每一个人',
    otherLangs: '其他语言',
    libras: 'Libras',
    librasHint: '巴西手语',
    menuTitle: '挽救生命的信息！',
    back: '返回',
    home: '首页',
    changeLang: '语言',
    slogan: '拥抱里约，安全享受！',
    cbmerj: '里约热内卢州军事消防局',
    call: '拨打',
    tapToCall: '点击拨打',
    install193: '下载 193RJ 应用',
    install193Sub: 'CBMERJ 官方求救应用',
    installed: '添加到主屏幕',
    next: '下一步',
    share: '分享'
  },
  menu: {
    flags: { title: '警示旗帜', sub: '每种颜色的含义' },
    rip: { title: '离岸流', sub: '如何识别与脱离' },
    health: { title: '健康与保健', sub: '炎热环境下的注意事项' },
    kids: { title: '儿童安全', sub: '识别手环与注意事项' },
    emergency: { title: '紧急情况', sub: '重要电话与 193RJ 应用' }
  },
  flags: {
    title: '警示旗帜',
    red: { name: '红旗 · 高风险', items: ['海况危险', '请勿进入该区域', '溺水风险高'] },
    yellow: { name: '黄旗 · 中等风险', items: ['溺水风险中等'] },
    green: { name: '绿旗 · 低风险', items: ['适合下海游泳', '请安全享受！'] },
    purple: { name: '紫旗 · 海洋生物', items: ['有海洋生物出没'] },
    attention: '注意：',
    attentionText: '不建议夜间下海游泳。日落后没有救生员值守，下海游泳的风险会增加。'
  },
  rip: {
    title: '离岸流',
    items: [
      '救生员会用红旗或警示牌标示离岸流的位置。',
      '要脱离离岸流，请平行于海岸游动。',
      '需要求救时，请保持冷静，举起手臂并大声呼救以引起注意。',
      '漂浮以保存体力。借助海浪的力量帮助自己返回岸边。'
    ]
  },
  health: {
    title: '健康提示',
    sub: '炎热环境下',
    water: { title: '饮水', text: '请定时饮水。' },
    alcohol: { title: '酒精', text: '酒精会削弱判断力，加重脱水，并增加事故和溺水的风险。', strong: '饮酒后请勿下海。', after: '请理性饮酒。' },
    sun: { title: '阳光', text: '请做好防晒，尤其是在日照最强的时段。暴露在阳光下前 30 分钟涂抹防晒霜。' },
    gear: { title: '使用防护用品', text: '请佩戴帽子、太阳镜，并穿着防紫外线的衣物。' }
  },
  kids: {
    wristTitle: '识别手环',
    wristText: '一个简单的举动，便于识别儿童身份并快速联系监护人。',
    wristFields: ['监护人姓名', '联系电话', '位置 / 参照物'],
    title: '儿童安全',
    items: [
      '切勿让儿童独处。',
      '向孩子指出参照物，必要时约定一个集合地点。',
      '告诉孩子海水的界限，以及可以进入到哪里。',
      '切勿将孩子交给陌生人照看。',
      '了解周围环境，留意身边的人。',
      '在海里时，请始终靠近孩子并持续看护。',
      '教孩子认识大海的危险以及如何求救。'
    ]
  },
  emergency: {
    title: '重要电话',
    numbers: { '193': '消防局', '192': 'SAMU（急救）', '190': '军事警察', '199': '民防' },
    note1: '遇到紧急情况，',
    note2: '请拨打相应的电话。',
    note3: '您的行动可以挽救生命！'
  }
},

/* ───────────────────────── ITALIANO ───────────────────────── */
it: {
  ui: {
    chooseLang: 'Scegli la tua lingua',
    tagline: 'Informazione, prevenzione e sicurezza per tutti sulle spiagge di Rio',
    otherLangs: 'Altre lingue',
    libras: 'Libras',
    librasHint: 'Lingua dei segni brasiliana',
    menuTitle: 'Informazioni che salvano vite!',
    back: 'Indietro',
    home: 'Inizio',
    changeLang: 'Lingua',
    slogan: 'Goditi Rio. In sicurezza!',
    cbmerj: 'Corpo dei Vigili del Fuoco Militari dello Stato di Rio de Janeiro',
    call: 'Chiama',
    tapToCall: 'Tocca per chiamare',
    install193: 'Scarica l\'app 193RJ',
    install193Sub: 'App ufficiale del CBMERJ per chiedere soccorso',
    installed: 'Aggiungi alla schermata Home',
    next: 'Avanti',
    share: 'Condividi'
  },
  menu: {
    flags: { title: 'Bandiere di segnalazione', sub: 'Cosa significa ogni colore' },
    rip: { title: 'Correnti di risacca', sub: 'Come riconoscerle e come uscirne' },
    health: { title: 'Salute e benessere', sub: 'Attenzioni in ambienti caldi' },
    kids: { title: 'Sicurezza dei bambini', sub: 'Braccialetto identificativo e consigli' },
    emergency: { title: 'Emergenza', sub: 'Numeri importanti e app 193RJ' }
  },
  flags: {
    title: 'Bandiere di segnalazione',
    red: { name: 'Bandiera rossa · Rischio alto', items: ['Mare pericoloso', 'Non entrare in quest\'area', 'Alto rischio di annegamento'] },
    yellow: { name: 'Bandiera gialla · Rischio medio', items: ['Rischio moderato di annegamento'] },
    green: { name: 'Bandiera verde · Rischio basso', items: ['Condizioni favorevoli alla balneazione', 'Divertiti in sicurezza!'] },
    purple: { name: 'Bandiera viola · Animali marini', items: ['Presenza di animali marini'] },
    attention: 'ATTENZIONE:',
    attentionText: 'Fare il bagno in mare di notte è sconsigliato. Dopo il tramonto non c\'è servizio di salvataggio, il che aumenta i rischi legati alla balneazione.'
  },
  rip: {
    title: 'Correnti di risacca',
    items: [
      'Le correnti di risacca sono segnalate dai bagnini con bandiere rosse o cartelli di segnalazione.',
      'Per uscire da una corrente di risacca, nuota parallelamente alla spiaggia.',
      'Per chiedere aiuto, mantieni la calma, alza il braccio e chiama aiuto per attirare l\'attenzione.',
      'Risparmia energia galleggiando. Sfrutta la forza delle onde per tornare verso la spiaggia.'
    ]
  },
  health: {
    title: 'Consigli per la salute',
    sub: 'in ambienti caldi',
    water: { title: 'Bere acqua', text: 'Bevi acqua regolarmente.' },
    alcohol: { title: 'Alcol', text: 'L\'alcol compromette la percezione, favorisce la disidratazione e aumenta il rischio di incidenti e annegamento.', strong: 'Se hai bevuto, non entrare in mare.', after: 'Bevi responsabilmente.' },
    sun: { title: 'Sole', text: 'Proteggiti dal sole, soprattutto nelle ore di maggiore intensità. Applica la crema solare 30 minuti prima dell\'esposizione.' },
    gear: { title: 'Usa accessori protettivi', text: 'Indossa cappello, berretto, occhiali da sole e abiti con protezione UV.' }
  },
  kids: {
    wristTitle: 'Braccialetto identificativo',
    wristText: 'Un gesto semplice che facilita l\'identificazione e il contatto rapido con il responsabile.',
    wristFields: ['Nome del responsabile', 'Tel. di contatto', 'Posizione / punto di riferimento'],
    title: 'Sicurezza dei bambini',
    items: [
      'Non lasciare mai i bambini da soli.',
      'Mostra loro punti di riferimento e concorda un punto d\'incontro, se necessario.',
      'Spiega i limiti del mare e fino a dove il bambino può entrare.',
      'Non lasciare mai il bambino con persone sconosciute.',
      'Conosci l\'ambiente circostante e osserva chi ti sta intorno.',
      'In mare, resta sempre vicino e mantieni una supervisione costante.',
      'Insegna ai bambini i pericoli del mare e come chiedere aiuto.'
    ]
  },
  emergency: {
    title: 'Numeri importanti',
    numbers: { '193': 'Vigili del Fuoco', '192': 'SAMU (ambulanza)', '190': 'Polizia Militare', '199': 'Protezione Civile' },
    note1: 'In caso di emergenza,',
    note2: 'chiama il numero corrispondente.',
    note3: 'Il tuo comportamento può salvare vite!'
  }
},

/* ───────────────────────── 日本語 ───────────────────────── */
ja: {
  ui: {
    chooseLang: '言語を選んでください',
    tagline: 'リオのビーチで、すべての人に情報・予防・安全を',
    otherLangs: 'その他の言語',
    libras: 'Libras',
    librasHint: 'ブラジル手話',
    menuTitle: '命を守る情報！',
    back: '戻る',
    home: 'ホーム',
    changeLang: '言語',
    slogan: 'リオを楽しもう。安全に！',
    cbmerj: 'リオデジャネイロ州軍事消防隊',
    call: '電話する',
    tapToCall: 'タップして電話',
    install193: '193RJ アプリをダウンロード',
    install193Sub: 'CBMERJ 公式の救助要請アプリ',
    installed: 'ホーム画面に追加',
    next: '次へ',
    share: '共有'
  },
  menu: {
    flags: { title: '警告旗', sub: '色の意味' },
    rip: { title: '離岸流', sub: '見分け方と脱出方法' },
    health: { title: '健康と体調管理', sub: '暑い環境での注意' },
    kids: { title: '子どもの安全', sub: '迷子防止リストバンドと注意点' },
    emergency: { title: '緊急時', sub: '重要な電話番号と 193RJ アプリ' }
  },
  flags: {
    title: '警告旗',
    red: { name: '赤旗 · 高リスク', items: ['危険な海', 'この区域に入らないでください', '溺水の危険性が高い'] },
    yellow: { name: '黄旗 · 中リスク', items: ['溺水の危険性が中程度'] },
    green: { name: '緑旗 · 低リスク', items: ['海水浴に適した状態', '安全に楽しんでください！'] },
    purple: { name: '紫旗 · 海洋生物', items: ['海洋生物の出現'] },
    attention: '注意：',
    attentionText: '夜間の海水浴はおすすめしません。日没後はライフガードがいないため、海水浴の危険性が高まります。'
  },
  rip: {
    title: '離岸流',
    items: [
      '離岸流はライフガードが赤い旗や標識で表示しています。',
      '離岸流から脱出するには、海岸と平行に泳いでください。',
      '助けを求めるときは、落ち着いて腕を上げ、大声で呼んで注意を引いてください。',
      '浮いて体力を温存してください。波の力を利用して岸へ戻りましょう。'
    ]
  },
  health: {
    title: '健康のための注意',
    sub: '暑い環境で',
    water: { title: '水分補給', text: 'こまめに水を飲みましょう。' },
    alcohol: { title: 'アルコール', text: 'アルコールは判断力を低下させ、脱水を促進し、事故や溺水の危険を高めます。', strong: '飲酒後は海に入らないでください。', after: '節度ある飲酒を。' },
    sun: { title: '日差し', text: '特に日差しが強い時間帯は日焼け対策をしてください。日光にあたる 30 分前に日焼け止めを塗りましょう。' },
    gear: { title: '保護用品を使いましょう', text: '帽子、サングラス、UV カット素材の衣類を着用してください。' }
  },
  kids: {
    wristTitle: '迷子防止リストバンド',
    wristText: '身元確認と保護者への迅速な連絡を可能にする、簡単な対策です。',
    wristFields: ['保護者の名前', '連絡先電話番号', '場所 / 目印'],
    title: '子どもの安全',
    items: [
      '子どもを決してひとりにしないでください。',
      '目印を教え、必要に応じて待ち合わせ場所を決めておきましょう。',
      '海の境界と、どこまで入ってよいかを教えてください。',
      '子どもを知らない人に預けないでください。',
      '周囲の状況を把握し、まわりに誰がいるか注意しましょう。',
      '海では常に子どものそばにいて、目を離さないでください。',
      '海の危険と助けの求め方を子どもに教えましょう。'
    ]
  },
  emergency: {
    title: '重要な電話番号',
    numbers: { '193': '消防', '192': 'SAMU（救急）', '190': '軍警察', '199': '民間防衛' },
    note1: '緊急時は、',
    note2: '該当する番号に電話してください。',
    note3: 'あなたの行動が命を救います！'
  }
},

/* ───────────────────────── العربية ───────────────────────── */
ar: {
  ui: {
    chooseLang: 'اختر لغتك',
    tagline: 'معلومات ووقاية وسلامة للجميع على شواطئ ريو',
    otherLangs: 'لغات أخرى',
    libras: 'Libras',
    librasHint: 'لغة الإشارة البرازيلية',
    menuTitle: 'معلومات تنقذ الأرواح!',
    back: 'رجوع',
    home: 'الرئيسية',
    changeLang: 'اللغة',
    slogan: 'استمتع بريو. بأمان!',
    cbmerj: 'هيئة الإطفاء العسكرية لولاية ريو دي جانيرو',
    call: 'اتصال',
    tapToCall: 'اضغط للاتصال',
    install193: 'تحميل تطبيق 193RJ',
    install193Sub: 'التطبيق الرسمي لـ CBMERJ لطلب النجدة',
    installed: 'إضافة إلى الشاشة الرئيسية',
    next: 'التالي',
    share: 'مشاركة'
  },
  menu: {
    flags: { title: 'أعلام التحذير', sub: 'ماذا يعني كل لون' },
    rip: { title: 'التيارات الساحبة', sub: 'كيف تتعرف عليها وكيف تنجو منها' },
    health: { title: 'الصحة والعافية', sub: 'احتياطات في الأجواء الحارة' },
    kids: { title: 'سلامة الأطفال', sub: 'سوار التعريف ونصائح' },
    emergency: { title: 'الطوارئ', sub: 'أرقام مهمة وتطبيق 193RJ' }
  },
  flags: {
    title: 'أعلام التحذير',
    red: { name: 'علم أحمر · خطر مرتفع', items: ['بحر خطير', 'لا تدخل هذه المنطقة', 'خطر مرتفع للغرق'] },
    yellow: { name: 'علم أصفر · خطر متوسط', items: ['خطر متوسط للغرق'] },
    green: { name: 'علم أخضر · خطر منخفض', items: ['ظروف مناسبة للسباحة في البحر', 'استمتع بأمان!'] },
    purple: { name: 'علم بنفسجي · كائنات بحرية', items: ['وجود كائنات بحرية'] },
    attention: 'تنبيه:',
    attentionText: 'لا يُنصح بالسباحة في البحر ليلاً. بعد غروب الشمس لا توجد خدمة إنقاذ، مما يزيد من مخاطر السباحة في البحر.'
  },
  rip: {
    title: 'التيارات الساحبة',
    items: [
      'يشير المنقذون إلى التيارات الساحبة باستخدام أعلام حمراء أو لافتات تحذيرية.',
      'للخروج من التيار الساحب، اسبح بموازاة الشاطئ.',
      'لطلب المساعدة، حافظ على هدوئك وارفع ذراعك واطلب النجدة لجذب الانتباه.',
      'وفّر طاقتك بالطفو. استعن بقوة الأمواج للعودة إلى الشاطئ.'
    ]
  },
  health: {
    title: 'نصائح صحية',
    sub: 'في الأجواء الحارة',
    water: { title: 'شرب الماء', text: 'اشرب الماء بانتظام.' },
    alcohol: { title: 'الكحول', text: 'يُضعف الكحول الإدراك ويسبب الجفاف ويزيد من خطر الحوادث والغرق.', strong: 'إذا شربت الكحول، فلا تدخل البحر.', after: 'اشرب بمسؤولية.' },
    sun: { title: 'الشمس', text: 'احمِ نفسك من الشمس، خاصة في أوقات الذروة. ضع واقي الشمس قبل التعرض للشمس بثلاثين دقيقة.' },
    gear: { title: 'استخدم أدوات الحماية', text: 'ارتدِ قبعة ونظارات شمسية وملابس واقية من الأشعة فوق البنفسجية.' }
  },
  kids: {
    wristTitle: 'سوار التعريف',
    wristText: 'إجراء بسيط يسهّل التعرف على الطفل والتواصل السريع مع ولي الأمر.',
    wristFields: ['اسم ولي الأمر', 'هاتف للتواصل', 'الموقع / نقطة مرجعية'],
    title: 'سلامة الأطفال',
    items: [
      'لا تترك الأطفال بمفردهم أبداً.',
      'أرِهم نقاطاً مرجعية واتفقوا على نقطة لقاء عند الحاجة.',
      'اشرح لهم حدود البحر وإلى أي مدى يمكنهم الدخول.',
      'لا تترك طفلك في رعاية أشخاص غرباء أبداً.',
      'اعرف محيطك وراقب من حولك.',
      'في البحر، ابقَ دائماً قريباً وراقب الأطفال باستمرار.',
      'علّم الأطفال مخاطر البحر وكيفية طلب المساعدة.'
    ]
  },
  emergency: {
    title: 'أرقام مهمة',
    numbers: { '193': 'الإطفاء', '192': 'SAMU (الإسعاف)', '190': 'الشرطة العسكرية', '199': 'الدفاع المدني' },
    note1: 'في حالة الطوارئ،',
    note2: 'اتصل بالرقم المناسب.',
    note3: 'تصرفك يمكن أن ينقذ الأرواح!'
  }
},

/* ───────────────────────── РУССКИЙ ───────────────────────── */
ru: {
  ui: {
    chooseLang: 'Выберите язык',
    tagline: 'Информация, профилактика и безопасность для всех на пляжах Рио',
    otherLangs: 'Другие языки',
    libras: 'Libras',
    librasHint: 'Бразильский жестовый язык',
    menuTitle: 'Информация, которая спасает жизни!',
    back: 'Назад',
    home: 'Главная',
    changeLang: 'Язык',
    slogan: 'Наслаждайтесь Рио. Безопасно!',
    cbmerj: 'Военная пожарная служба штата Рио-де-Жанейро',
    call: 'Позвонить',
    tapToCall: 'Нажмите, чтобы позвонить',
    install193: 'Скачать приложение 193RJ',
    install193Sub: 'Официальное приложение CBMERJ для вызова помощи',
    installed: 'Добавить на главный экран',
    next: 'Далее',
    share: 'Поделиться'
  },
  menu: {
    flags: { title: 'Сигнальные флаги', sub: 'Что означает каждый цвет' },
    rip: { title: 'Отбойные течения', sub: 'Как распознать и как выбраться' },
    health: { title: 'Здоровье и самочувствие', sub: 'Меры предосторожности в жару' },
    kids: { title: 'Безопасность детей', sub: 'Идентификационный браслет и советы' },
    emergency: { title: 'Экстренная помощь', sub: 'Важные номера и приложение 193RJ' }
  },
  flags: {
    title: 'Сигнальные флаги',
    red: { name: 'Красный флаг · Высокий риск', items: ['Опасное море', 'Не входите в эту зону', 'Высокий риск утопления'] },
    yellow: { name: 'Жёлтый флаг · Средний риск', items: ['Умеренный риск утопления'] },
    green: { name: 'Зелёный флаг · Низкий риск', items: ['Благоприятные условия для купания', 'Отдыхайте безопасно!'] },
    purple: { name: 'Фиолетовый флаг · Морские животные', items: ['Присутствие морских животных'] },
    attention: 'ВНИМАНИЕ:',
    attentionText: 'Купание в море ночью не рекомендуется. После захода солнца спасатели не дежурят, что повышает риски, связанные с купанием.'
  },
  rip: {
    title: 'Отбойные течения',
    items: [
      'Отбойные течения обозначаются спасателями красными флагами или предупреждающими знаками.',
      'Чтобы выбраться из отбойного течения, плывите параллельно берегу.',
      'Чтобы позвать на помощь, сохраняйте спокойствие, поднимите руку и кричите, чтобы привлечь внимание.',
      'Берегите силы, держась на воде. Используйте силу волн, чтобы вернуться к берегу.'
    ]
  },
  health: {
    title: 'Советы по здоровью',
    sub: 'в жаркую погоду',
    water: { title: 'Питьевой режим', text: 'Регулярно пейте воду.' },
    alcohol: { title: 'Алкоголь', text: 'Алкоголь ухудшает восприятие, способствует обезвоживанию и повышает риск несчастных случаев и утопления.', strong: 'Если вы выпили, не заходите в море.', after: 'Пейте ответственно.' },
    sun: { title: 'Солнце', text: 'Защищайтесь от солнца, особенно в часы наибольшей активности. Наносите солнцезащитный крем за 30 минут до выхода на солнце.' },
    gear: { title: 'Используйте защитные аксессуары', text: 'Носите шляпу, кепку, солнцезащитные очки и одежду с УФ-защитой.' }
  },
  kids: {
    wristTitle: 'Идентификационный браслет',
    wristText: 'Простое действие, которое облегчает идентификацию и позволяет быстро связаться с ответственным лицом.',
    wristFields: ['Имя ответственного', 'Контактный телефон', 'Местоположение / ориентир'],
    title: 'Безопасность детей',
    items: [
      'Никогда не оставляйте детей одних.',
      'Покажите им ориентиры и при необходимости договоритесь о месте встречи.',
      'Объясните границы моря и до какого места ребёнку можно заходить.',
      'Никогда не оставляйте ребёнка с незнакомыми людьми.',
      'Изучите окружение и следите за тем, кто находится рядом.',
      'В море всегда держитесь рядом и постоянно присматривайте за детьми.',
      'Расскажите детям об опасностях моря и о том, как звать на помощь.'
    ]
  },
  emergency: {
    title: 'Важные номера',
    numbers: { '193': 'Пожарная служба', '192': 'SAMU (скорая помощь)', '190': 'Военная полиция', '199': 'Гражданская оборона' },
    note1: 'В случае чрезвычайной ситуации',
    note2: 'позвоните по соответствующему номеру.',
    note3: 'Ваши действия могут спасти жизни!'
  }
},

/* ───────────────────────── हिन्दी ───────────────────────── */
hi: {
  ui: {
    chooseLang: 'अपनी भाषा चुनें',
    tagline: 'रियो के समुद्र तटों पर सभी के लिए जानकारी, बचाव और सुरक्षा',
    otherLangs: 'अन्य भाषाएँ',
    libras: 'Libras',
    librasHint: 'ब्राज़ीलियाई सांकेतिक भाषा',
    menuTitle: 'जानकारी जो जान बचाती है!',
    back: 'वापस',
    home: 'होम',
    changeLang: 'भाषा',
    slogan: 'रियो का आनंद लें। सुरक्षित रहें!',
    cbmerj: 'रियो डी जनेरियो राज्य का सैन्य अग्निशमन विभाग',
    call: 'कॉल करें',
    tapToCall: 'कॉल करने के लिए टैप करें',
    install193: '193RJ ऐप डाउनलोड करें',
    install193Sub: 'मदद माँगने के लिए CBMERJ का आधिकारिक ऐप',
    installed: 'होम स्क्रीन पर जोड़ें',
    next: 'आगे',
    share: 'साझा करें'
  },
  menu: {
    flags: { title: 'चेतावनी झंडे', sub: 'हर रंग का क्या मतलब है' },
    rip: { title: 'रिप करंट (खिंचाव धाराएँ)', sub: 'कैसे पहचानें और कैसे बचें' },
    health: { title: 'स्वास्थ्य और सेहत', sub: 'गर्म मौसम में सावधानियाँ' },
    kids: { title: 'बच्चों की सुरक्षा', sub: 'पहचान बैंड और सुझाव' },
    emergency: { title: 'आपातकाल', sub: 'ज़रूरी नंबर और 193RJ ऐप' }
  },
  flags: {
    title: 'चेतावनी झंडे',
    red: { name: 'लाल झंडा · उच्च जोखिम', items: ['खतरनाक समुद्र', 'इस क्षेत्र में प्रवेश न करें', 'डूबने का उच्च जोखिम'] },
    yellow: { name: 'पीला झंडा · मध्यम जोखिम', items: ['डूबने का मध्यम जोखिम'] },
    green: { name: 'हरा झंडा · कम जोखिम', items: ['समुद्र में नहाने के लिए अनुकूल स्थिति', 'सुरक्षित रूप से आनंद लें!'] },
    purple: { name: 'बैंगनी झंडा · समुद्री जीव', items: ['समुद्री जीवों की उपस्थिति'] },
    attention: 'ध्यान दें:',
    attentionText: 'रात में समुद्र में नहाने की सलाह नहीं दी जाती। सूर्यास्त के बाद लाइफगार्ड सेवा उपलब्ध नहीं होती, जिससे समुद्र में नहाने के जोखिम बढ़ जाते हैं।'
  },
  rip: {
    title: 'रिप करंट (खिंचाव धाराएँ)',
    items: [
      'लाइफगार्ड लाल झंडों या चेतावनी बोर्डों से रिप करंट का संकेत देते हैं।',
      'रिप करंट से निकलने के लिए समुद्र तट के समानांतर तैरें।',
      'मदद माँगने के लिए शांत रहें, हाथ ऊपर उठाएँ और ध्यान आकर्षित करने के लिए पुकारें।',
      'तैरते रहकर ऊर्जा बचाएँ। किनारे पर लौटने के लिए लहरों की ताकत का उपयोग करें।'
    ]
  },
  health: {
    title: 'स्वास्थ्य सुझाव',
    sub: 'गर्म मौसम में',
    water: { title: 'पानी पिएँ', text: 'नियमित रूप से पानी पिएँ।' },
    alcohol: { title: 'शराब', text: 'शराब समझ को कमज़ोर करती है, निर्जलीकरण बढ़ाती है और दुर्घटनाओं व डूबने का जोखिम बढ़ाती है।', strong: 'अगर शराब पी है, तो समुद्र में न जाएँ।', after: 'ज़िम्मेदारी से पिएँ।' },
    sun: { title: 'धूप', text: 'धूप से बचें, खासकर सबसे तेज़ धूप के समय। धूप में जाने से 30 मिनट पहले सनस्क्रीन लगाएँ।' },
    gear: { title: 'सुरक्षा सामान का उपयोग करें', text: 'टोपी, धूप का चश्मा और UV-सुरक्षा वाले कपड़े पहनें।' }
  },
  kids: {
    wristTitle: 'पहचान बैंड',
    wristText: 'एक सरल उपाय जो पहचान को आसान बनाता है और अभिभावक से तुरंत संपर्क संभव करता है।',
    wristFields: ['अभिभावक का नाम', 'संपर्क फ़ोन', 'स्थान / पहचान चिह्न'],
    title: 'बच्चों की सुरक्षा',
    items: [
      'बच्चों को कभी अकेला न छोड़ें।',
      'उन्हें पहचान चिह्न दिखाएँ और ज़रूरत हो तो मिलने की जगह तय करें।',
      'समुद्र की सीमा समझाएँ और बताएँ कि बच्चा कहाँ तक जा सकता है।',
      'बच्चे को कभी अजनबियों के भरोसे न छोड़ें।',
      'अपने आसपास को जानें और देखें कि आपके पास कौन है।',
      'समुद्र में हमेशा पास रहें और बच्चों पर लगातार नज़र रखें।',
      'बच्चों को समुद्र के खतरों और मदद माँगने के तरीके के बारे में सिखाएँ।'
    ]
  },
  emergency: {
    title: 'ज़रूरी नंबर',
    numbers: { '193': 'अग्निशमन विभाग', '192': 'SAMU (एम्बुलेंस)', '190': 'सैन्य पुलिस', '199': 'नागरिक सुरक्षा' },
    note1: 'आपात स्थिति में,',
    note2: 'संबंधित नंबर पर कॉल करें।',
    note3: 'आपका कदम जान बचा सकता है!'
  }
},

/* ───────────────────────── 한국어 ───────────────────────── */
ko: {
  ui: {
    chooseLang: '언어를 선택하세요',
    tagline: '리우 해변의 모든 분을 위한 정보, 예방, 안전',
    otherLangs: '다른 언어',
    libras: 'Libras',
    librasHint: '브라질 수어',
    menuTitle: '생명을 구하는 정보!',
    back: '뒤로',
    home: '홈',
    changeLang: '언어',
    slogan: '리우를 즐기세요. 안전하게!',
    cbmerj: '리우데자네이루주 군사 소방대',
    call: '전화하기',
    tapToCall: '탭하여 전화하기',
    install193: '193RJ 앱 다운로드',
    install193Sub: '구조 요청을 위한 CBMERJ 공식 앱',
    installed: '홈 화면에 추가',
    next: '다음',
    share: '공유'
  },
  menu: {
    flags: { title: '경고 깃발', sub: '색깔별 의미' },
    rip: { title: '이안류', sub: '알아보는 법과 벗어나는 법' },
    health: { title: '건강과 웰빙', sub: '더운 환경에서의 주의사항' },
    kids: { title: '어린이 안전', sub: '신원 확인 팔찌와 주의사항' },
    emergency: { title: '긴급 상황', sub: '주요 전화번호와 193RJ 앱' }
  },
  flags: {
    title: '경고 깃발',
    red: { name: '빨간 깃발 · 고위험', items: ['위험한 바다', '이 구역에 들어가지 마세요', '익사 위험 높음'] },
    yellow: { name: '노란 깃발 · 중간 위험', items: ['익사 위험 보통'] },
    green: { name: '초록 깃발 · 저위험', items: ['해수욕에 적합한 상태', '안전하게 즐기세요!'] },
    purple: { name: '보라 깃발 · 해양 생물', items: ['해양 생물 출현'] },
    attention: '주의:',
    attentionText: '야간 해수욕은 권장하지 않습니다. 일몰 후에는 인명구조 서비스가 없어 해수욕의 위험이 커집니다.'
  },
  rip: {
    title: '이안류',
    items: [
      '이안류는 인명구조원이 빨간 깃발이나 경고 표지판으로 표시합니다.',
      '이안류에서 벗어나려면 해변과 평행하게 헤엄치세요.',
      '도움을 요청할 때는 침착하게 팔을 들고 소리쳐 주의를 끄세요.',
      '물에 떠서 체력을 아끼세요. 파도의 힘을 이용해 해변으로 돌아오세요.'
    ]
  },
  health: {
    title: '건강 관리 팁',
    sub: '더운 환경에서',
    water: { title: '수분 섭취', text: '물을 규칙적으로 마시세요.' },
    alcohol: { title: '음주', text: '술은 판단력을 떨어뜨리고 탈수를 유발하며 사고와 익사 위험을 높입니다.', strong: '술을 마셨다면 바다에 들어가지 마세요.', after: '책임감 있게 마시세요.' },
    sun: { title: '햇빛', text: '특히 햇빛이 가장 강한 시간대에는 자외선을 피하세요. 노출 30분 전에 자외선 차단제를 바르세요.' },
    gear: { title: '보호 용품을 사용하세요', text: '모자, 선글라스, 자외선 차단 의류를 착용하세요.' }
  },
  kids: {
    wristTitle: '신원 확인 팔찌',
    wristText: '신원 확인과 보호자와의 빠른 연락을 돕는 간단한 방법입니다.',
    wristFields: ['보호자 이름', '연락처', '위치 / 기준점'],
    title: '어린이 안전',
    items: [
      '어린이를 절대 혼자 두지 마세요.',
      '기준이 되는 장소를 알려주고 필요하면 만날 장소를 정하세요.',
      '바다의 한계와 어디까지 들어갈 수 있는지 알려주세요.',
      '어린이를 낯선 사람에게 맡기지 마세요.',
      '주변 환경을 파악하고 주위에 누가 있는지 살피세요.',
      '바다에서는 항상 가까이에서 어린이를 계속 지켜보세요.',
      '어린이에게 바다의 위험과 도움을 요청하는 방법을 가르쳐 주세요.'
    ]
  },
  emergency: {
    title: '주요 전화번호',
    numbers: { '193': '소방대', '192': 'SAMU (구급)', '190': '군사 경찰', '199': '민방위' },
    note1: '긴급 상황 시',
    note2: '해당 번호로 전화하세요.',
    note3: '당신의 행동이 생명을 구할 수 있습니다!'
  }
}
};
