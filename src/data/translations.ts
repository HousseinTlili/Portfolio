import { Language } from "../context/LanguageContext";
import { Project, ExperienceEntry, EducationEntry, Language as SpokenLanguage } from "./portfolioData";

export interface UiTranslations {
  nav: {
    about: string;
    projects: string;
    experience: string;
    education: string;
    contact: string;
    downloadCv: string;
    roleSubtitle: string;
    language: string;
  };
  hero: {
    availableBadge: string;
    building: string;
    intelligent: string;
    systems: string;
    subtitle: string;
    exploreProjects: string;
    getInTouch: string;
    location: string;
    stats: {
      attijari: { value: string; label: string; desc: string };
      projects: { value: string; label: string; desc: string };
      internships: { value: string; label: string; desc: string };
    };
  };
  about: {
    tag: string;
    title: string;
    bioParagraphs: string[];
    skillsTitle: string;
    skillsSubtitle: string;
    languagesTitle: string;
  };
  projects: {
    tag: string;
    title: string;
    subtitle: string;
    filterAll: string;
    filterAi: string;
    filterBackend: string;
    filterDesktop: string;
    viewCaseStudy: string;
    sourceCode: string;
    featuredBadge: string;
    impactHeader: string;
    architectureHeader: string;
  };
  modal: {
    titleSuffix: string;
    tabOverview: string;
    tabChallenge: string;
    tabSolution: string;
    tabArchitecture: string;
    tabResults: string;
    techStack: string;
    close: string;
    viewGithub: string;
    keyMetrics: string;
  };
  experience: {
    tag: string;
    title: string;
    subtitle: string;
  };
  education: {
    tag: string;
    title: string;
    subtitle: string;
  };
  contact: {
    tag: string;
    title: string;
    subtitle: string;
    intro: string;
    directInbox: string;
    copyEmail: string;
    copied: string;
    network: string;
    locationTitle: string;
    locationValue: string;
    formName: string;
    formNamePlaceholder: string;
    formEmail: string;
    formEmailPlaceholder: string;
    formMessage: string;
    formMessagePlaceholder: string;
    sendMessage: string;
    messageSent: string;
    messageSuccess: string;
  };
  footer: {
    designedBy: string;
    allRightsReserved: string;
    backToTop: string;
  };
}

export const UI_TRANSLATIONS: Record<Language, UiTranslations> = {
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      experience: "Experience",
      education: "Education",
      contact: "Contact",
      downloadCv: "Download CV",
      roleSubtitle: "Full-Stack & AI",
      language: "Language",
    },
    hero: {
      availableBadge: "Available for internships & engineering roles",
      building: "Building",
      intelligent: "Intelligent",
      systems: "Systems.",
      subtitle: "Full-Stack Engineer & AI Builder — turning complex problems into production-grade software. From sovereign banking compliance AI to local-first desktop workspaces, I build robust, measurable architectures.",
      exploreProjects: "Explore Projects",
      getInTouch: "Get in Touch",
      location: "Manouba, Tunisia",
      stats: {
        attijari: { value: "97.96%", label: "Attijari Bank AI", desc: "Fine-tuned Qwen-2.5-7B" },
        projects: { value: "7+", label: "Engineered Platforms", desc: "Full-Stack, AI & Systems" },
        internships: { value: "2", label: "Industry Internships", desc: "Attijari Bank & COFAT" },
      },
    },
    about: {
      tag: "01 / about",
      title: "Engineering & Philosophy",
      bioParagraphs: [
        "I am a third-year Software Engineering student at ESPRIT Tunis, specializing in distributed systems, sovereign AI/ML pipelines, and industrial DevOps. Based in Manouba, Tunisia, I design and build production-grade architectures that solve hard real-world operational challenges.",
        "My flagship production deployment — KUSOR — is an on-premise regulatory AI intelligence system engineered for Attijari Bank Tunisia. It features a quantized Qwen-2.5-7B model fine-tuned via QLoRA that achieves 97.96% precision on complex legal statutory tasks, integrated with a 4-channel GraphRAG retrieval engine over Neo4j.",
        "I operate at the intersection of applied machine learning and low-level systems engineering: from fine-tuning open-weights models and mapping graph knowledge relationships to architecting asynchronous RabbitMQ microservices in .NET and building native desktop software in Rust with Tauri.",
        "When I am not writing production services, I construct productivity software — including an autonomous desktop code editor (Agentic IDE), a local-first study and knowledge workspace (Cothon), a voice assistant (Jarvis), and an automated research browser (Navis).",
      ],
      skillsTitle: "Technical Proficiencies",
      skillsSubtitle: "Categorized",
      languagesTitle: "Spoken Languages",
    },
    projects: {
      tag: "02 / projects",
      title: "What I've Built",
      subtitle: "Production systems, sovereign AI pipelines, and high-performance tools.",
      filterAll: "All Projects",
      filterAi: "AI & ML",
      filterBackend: "Backend & Systems",
      filterDesktop: "Desktop & Tools",
      viewCaseStudy: "Architecture & Case Study",
      sourceCode: "Source Code",
      featuredBadge: "FEATURED PRODUCTION ARCHITECTURE",
      impactHeader: "Measurable Impact",
      architectureHeader: "Core Architecture",
    },
    modal: {
      titleSuffix: "Case Study & Architecture",
      tabOverview: "Overview",
      tabChallenge: "Challenge",
      tabSolution: "Engineered Solution",
      tabArchitecture: "Architecture Highlights",
      tabResults: "Impact & Results",
      techStack: "Technologies & Tools",
      close: "Close Case Study",
      viewGithub: "View Repository on GitHub",
      keyMetrics: "Key Metrics",
    },
    experience: {
      tag: "03 / experience",
      title: "Engineering Experience",
      subtitle: "Industry internships, applied machine learning deployments, and distributed systems architecture.",
    },
    education: {
      tag: "04 / education",
      title: "Academic Foundation",
      subtitle: "Rigorous academic formation in computer science, software engineering, and industrial automation.",
    },
    contact: {
      tag: "05 / contact",
      title: "Let's Build Something",
      subtitle: "Have an engineering challenge, an AI research question, or an open role? Let's talk.",
      intro: "I am actively seeking engineering internships and full-time positions across AI engineering, distributed backend systems, and native software engineering.",
      directInbox: "DIRECT INBOX",
      copyEmail: "Copy Email",
      copied: "Copied to clipboard!",
      network: "PROFESSIONAL NETWORK",
      locationTitle: "LOCATION",
      locationValue: "Manouba, Tunisia (UTC+1) • Remote or On-site",
      formName: "Your Name",
      formNamePlaceholder: "e.g., Sarah Connor",
      formEmail: "Your Email",
      formEmailPlaceholder: "s.connor@example.com",
      formMessage: "Message / Project Scope",
      formMessagePlaceholder: "Describe your project, team opportunity, or engineering requirements...",
      sendMessage: "Send Message",
      messageSent: "Message Sent!",
      messageSuccess: "Thank you for reaching out! I will respond promptly.",
    },
    footer: {
      designedBy: "Designed & Engineered by Houssein Tlili",
      allRightsReserved: "All rights reserved. Built with React 19, TypeScript & Tailwind CSS.",
      backToTop: "Back to top",
    },
  },

  fr: {
    nav: {
      about: "À Propos",
      projects: "Projets",
      experience: "Expérience",
      education: "Formation",
      contact: "Contact",
      downloadCv: "Télécharger CV",
      roleSubtitle: "Full-Stack & IA",
      language: "Langue",
    },
    hero: {
      availableBadge: "Disponible pour stages & opportunités d'ingénierie",
      building: "Conception de",
      intelligent: "Systèmes",
      systems: "Intelligents.",
      subtitle: "Ingénieur Full-Stack & Concepteur IA — transformant des défis complexes en logiciels prêts pour la production. De l'IA souveraine bancaire aux espaces desktop 'local-first', je conçois des architectures robustes et mesurables.",
      exploreProjects: "Explorer les Projets",
      getInTouch: "Me Contacter",
      location: "La Manouba, Tunisie",
      stats: {
        attijari: { value: "97,96%", label: "IA Attijari Bank", desc: "Modèle Qwen-2.5-7B affiné" },
        projects: { value: "7+", label: "Plateformes Conçues", desc: "Full-Stack, IA & Systèmes" },
        internships: { value: "2", label: "Stages Industriels", desc: "Attijari Bank & COFAT" },
      },
    },
    about: {
      tag: "01 / à propos",
      title: "Ingénierie & Philosophie",
      bioParagraphs: [
        "Je suis étudiant en 3ème année de Cycle Ingénieur en Génie Logiciel à l'ESPRIT Tunis, spécialisé dans les systèmes distribués, les pipelines d'IA/ML souverains et le DevOps industriel. Basé à La Manouba, en Tunisie, je conçois et développe des architectures robustes répondant à de réels défis opérationnels.",
        "Mon déploiement de référence en production — KUSOR — est un système d'IA réglementaire on-premise développé pour Attijari Bank Tunisie. Il intègre un modèle quantifié Qwen-2.5-7B affiné par QLoRA atteignant 97,96% de précision sur des tâches juridiques complexes, couplé à un moteur GraphRAG à 4 canaux sur Neo4j.",
        "J'évolue au carrefour de l'apprentissage automatique appliqué et de l'ingénierie système bas niveau : de l'affinement de modèles open-weights à l'orchestration de microservices asynchrones RabbitMQ en .NET et au développement d'applications natives en Rust avec Tauri.",
        "En dehors des services de production, je conçois des outils de productivité avancés — un éditeur de code autonome (Agentic IDE), un espace de connaissances 'local-first' (Cothon), un assistant vocal (Jarvis) et un navigateur de recherche intelligent (Navis).",
      ],
      skillsTitle: "Compétences Techniques",
      skillsSubtitle: "Par Domaine",
      languagesTitle: "Langues Parlées",
    },
    projects: {
      tag: "02 / projets",
      title: "Mes Réalisations",
      subtitle: "Systèmes de production, pipelines d'IA souveraine et outils haute performance.",
      filterAll: "Tous les Projets",
      filterAi: "IA & Machine Learning",
      filterBackend: "Backend & Systèmes",
      filterDesktop: "Desktop & Outils",
      viewCaseStudy: "Architecture & Étude de Cas",
      sourceCode: "Code Source",
      featuredBadge: "ARCHITECTURE DE PRODUCTION À LA UNE",
      impactHeader: "Impact Mesurable",
      architectureHeader: "Architecture Centrale",
    },
    modal: {
      titleSuffix: "Étude de Cas & Architecture",
      tabOverview: "Aperçu",
      tabChallenge: "Défi & Problématique",
      tabSolution: "Solution Conçue",
      tabArchitecture: "Points d'Architecture",
      tabResults: "Résultats & Impact",
      techStack: "Technologies & Outils",
      close: "Fermer l'Étude de Cas",
      viewGithub: "Voir le Répertoire sur GitHub",
      keyMetrics: "Métriques Clés",
    },
    experience: {
      tag: "03 / expérience",
      title: "Expérience Professionnelle",
      subtitle: "Stages en entreprise, déploiements d'IA en production et architecture de systèmes distribués.",
    },
    education: {
      tag: "04 / formation",
      title: "Formation Académique",
      subtitle: "Cursus académique rigoureux en informatique, génie logiciel et automatisation industrielle.",
    },
    contact: {
      tag: "05 / contact",
      title: "Construisons Ensemble",
      subtitle: "Un défi d'ingénierie, un projet d'IA ou une opportunité de recrutement ? Discutons-en.",
      intro: "Je recherche activement des opportunités de stage de fin d'études et des postes d'ingénieur en IA, architectures backend distribuées et développement logiciel natif.",
      directInbox: "BOÎTE DE RÉCEPTION DIRECTE",
      copyEmail: "Copier l'Email",
      copied: "Copié dans le presse-papiers !",
      network: "RÉSEAU PROFESSIONNEL",
      locationTitle: "LOCALISATION",
      locationValue: "La Manouba, Tunisie (UTC+1) • Télétravail ou Sur site",
      formName: "Votre Nom",
      formNamePlaceholder: "ex: Thomas Dubois",
      formEmail: "Votre Email",
      formEmailPlaceholder: "t.dubois@example.com",
      formMessage: "Message / Portée du Projet",
      formMessagePlaceholder: "Décrivez votre projet, l'opportunité d'équipe ou vos exigences techniques...",
      sendMessage: "Envoyer le Message",
      messageSent: "Message Envoyé !",
      messageSuccess: "Merci pour votre message ! Je vous répondrai dans les plus brefs délais.",
    },
    footer: {
      designedBy: "Conçu & Développé par Houssein Tlili",
      allRightsReserved: "Tous droits réservés. Développé avec React 19, TypeScript & Tailwind CSS.",
      backToTop: "Haut de page",
    },
  },

  ar: {
    nav: {
      about: "نبذة عني",
      projects: "المشاريع",
      experience: "الخبرات",
      education: "التعليم",
      contact: "تواصل معي",
      downloadCv: "تحميل السيرة الذاتية",
      roleSubtitle: "هندسة البرمجيات والذكاء الاصطناعي",
      language: "اللغة",
    },
    hero: {
      availableBadge: "متاح لفرص التدريب والتوظيف الهندسي",
      building: "بناء",
      intelligent: "أنظمة برمجية",
      systems: "ذكية ومتكاملة.",
      subtitle: "مهندس برمجيات متكامل ومطور ذكاء اصطناعي — أحول المشكلات التقنية المعقدة إلى برمجيات جاهزة للإنتاج. من الذكاء الاصطناعي السيادي للقطاع المصرفي إلى بيئات العمل المكتبية المحلية، أصمم بنيات برمجية متينة وموثوقة.",
      exploreProjects: "استكشف المشاريع",
      getInTouch: "تواصل معي",
      location: "منوبة، تونس",
      stats: {
        attijari: { value: "97.96%", label: "ذكاء التجاري بنك", desc: "نموذج Qwen-2.5-7B مخصص" },
        projects: { value: "7+", label: "منصات هندسية", desc: "تطبيقات متكاملة وذكاء اصطناعي" },
        internships: { value: "2", label: "تربصات مهنية", desc: "التجاري بنك و COFAT" },
      },
    },
    about: {
      tag: "01 / نبذة عني",
      title: "الهندسة والفلسفة التقنية",
      bioParagraphs: [
        "طالب في السنة الثالثة بمرحلة تكوين المهندسين في الهندسة البرمجية بالمدرسة العليا الخاصة للهندسة والتكنولوجيا (ESPRIT تونس)، متخصص في الأنظمة الموزعة، مسارات الذكاء الاصطناعي السيادي، وممارسات DevOps الصناعية. مقيم في منوبة بتونس، وأركز على تصميم وبناء معمارية برمجية متينة للإنتاج تحل تحديات تقنية حقيقية.",
        "أبرز مشاريعي الميدانية في بيئة الإنتاج — KUSOR — هو نظام ذكاء اصطناعي سيادي محلي (On-Premise) للرقابة والامتثال القانوني مطور لصالح بنك التجاري تونس. يعتمد على نموذج Qwen-2.5-7B مكمم ومعدل عبر QLoRA محققاً دقة 97.96%، ومقترن بمحرك بحث هجين GraphRAG بأربع قنوات فوق Neo4j.",
        "أعمل في نقطة التلاقي بين تعلم الآلة التطبيقي وهندسة الأنظمة المنخفضة المستوى: من تدريب وضبط النماذج المفتوحة ورسم الخرائط البيانية للمعرفة، إلى هندسة خدمات مصغرة غير متزامنة باستخدام .NET و RabbitMQ، وبناء تطبيقات سطح مكتب أصلية فائقة الأداء بلغة Rust وإطار Tauri.",
        "إلى جانب خدمات الإنتاج، أطور برمجيات إنتاجية متقدمة — مثل بيئة التطوير البرمجي ذاتية القيادة (Agentic IDE)، منصة إدارة المعرفة والدراسة المحلية (Cothon)، المساعد الصوتي المعزول (Jarvis)، ومتصفح الأبحاث الذكي (Navis).",
      ],
      skillsTitle: "الكفاءات والمهارات التقنية",
      skillsSubtitle: "تصنيف مجالات الخبرة",
      languagesTitle: "اللغات المتقنة",
    },
    projects: {
      tag: "02 / المشاريع",
      title: "أبرز أعمالي ومشاريعي",
      subtitle: "أنظمة برمجية قيد الإنتاج، مسارات ذكاء اصطناعي سيادية، وأدوات هندسية عالية الأداء.",
      filterAll: "جميع المشاريع",
      filterAi: "الذكاء الاصطناعي وتعلم الآلة",
      filterBackend: "الأنظمة الخلفية والسحابية",
      filterDesktop: "سطح المكتب والأدوات",
      viewCaseStudy: "المعمارية ودراسة الحالة",
      sourceCode: "الكود المصدري",
      featuredBadge: "مشروع بارز قيد التشغيل الفعلي",
      impactHeader: "الأثر والنتائج القابلة للقياس",
      architectureHeader: "الركائز المعمارية",
    },
    modal: {
      titleSuffix: "دراسة الحالة والمعمارية التفصيلية",
      tabOverview: "نظرة عامة",
      tabChallenge: "التحدي والإشكالية",
      tabSolution: "الحل الهندسي المطبق",
      tabArchitecture: "أبرز النقاط المعمارية",
      tabResults: "النتائج والأثر الملموس",
      techStack: "التقنيات والأدوات",
      close: "إغلاق دراسة الحالة",
      viewGithub: "عرض المشروع على GitHub",
      keyMetrics: "المؤشرات الرئيسية",
    },
    experience: {
      tag: "03 / الخبرات المهنية",
      title: "الخبرة الميدانية والمهنية",
      subtitle: "تربصات تطبيقية في الشركات، أنظمة ذكاء اصطناعي في بيئة الإنتاج، وهندسة الخدمات المصغرة.",
    },
    education: {
      tag: "04 / المسار الأكاديمي",
      title: "المسار الأكاديمي والشهادات",
      subtitle: "تكوين علمي وهندسي معمق في علوم الحاسوب، هندسة البرمجيات، والأتمتة الصناعية.",
    },
    contact: {
      tag: "05 / تواصل معي",
      title: "لنعمل ونبني معاً",
      subtitle: "هل لديك تحدٍ برمجي، استفسار حول تطبيقات الذكاء الاصطناعي، أو فرصة عمل ملهمة؟ يسعدني التواصل معك.",
      intro: "أبحث بنشاط عن فرص تربص تخرج ومناصب هندسية في مجالات هندسة الذكاء الاصطناعي، الأنظمة الموزعة الخلفية، وهندسة البرمجيات الأصلية.",
      directInbox: "البريد المباشر",
      copyEmail: "نسخ البريد الإلكتروني",
      copied: "تم النسخ إلى الحافظة!",
      network: "الشبكات المهنية",
      locationTitle: "الموقع الجغرافي",
      locationValue: "منوبة، تونس (UTC+1) • عمل عن بعد أو حضوري",
      formName: "الاسم الكامل",
      formNamePlaceholder: "مثال: حسام التونسي",
      formEmail: "بريدك الإلكتروني",
      formEmailPlaceholder: "h.tounsi@example.com",
      formMessage: "تفاصيل الرسالة أو المشروع",
      formMessagePlaceholder: "صف مشروعك أو متطلبات العمل أو الاستفسار التقني...",
      sendMessage: "إرسال الرسالة",
      messageSent: "تم إرسال الرسالة بنجاح!",
      messageSuccess: "شكراً لتواصلك! سأقوم بالرد عليك في أقرب وقت ممكن.",
    },
    footer: {
      designedBy: "تصميم وتطوير المهندس حسين التليلي",
      allRightsReserved: "جميع الحقوق محفوظة. مطور بواسطة React 19 و TypeScript و Tailwind CSS.",
      backToTop: "العودة للأعلى",
    },
  },
};

// ── Localized Project Lists ──────────────────────────────────────────────────

export function getLocalizedProjects(lang: Language): Project[] {
  if (lang === "fr") {
    return [
      {
        id: "kusor",
        tag: "À LA UNE — Plateforme IA Bancaire",
        title: "KUSOR",
        subtitle: "Plateforme d'Intelligence Réglementaire & Conformité Bancaire",
        category: "ai",
        categories: ["ai", "backend"],
        desc: "Système d'IA souveraine pour Attijari Bank Tunisie — Qwen-2.5-7B affiné (précision de 97,96%), moteur de recherche GraphRAG à 4 canaux, graphe de connaissances temporel Neo4j avec 1 247 relations juridiques. Réduction du temps d'audit de 87%.",
        company: "@ Attijari Bank Tunisie",
        color: "#C9A84C",
        featured: true,
        githubUrl: "https://github.com/HousseinTlili/Kusor-V2",
        metrics: [
          { value: "97,96%", label: "Précision" },
          { value: "-87%", label: "Temps d'Audit" },
          { value: "1 247", label: "Relations Juridiques" },
        ],
        tech: ["Python", "Neo4j", "LangGraph", "Angular 21", "QLoRA", "Docker", "PostgreSQL"],
        caseStudy: {
          overview: "KUSOR est une plateforme d'IA d'entreprise souveraine conçue pour Attijari Bank Tunisie afin d'automatiser la vérification réglementaire, l'analyse de conformité multicanale et l'audit de documents juridiques dans le respect strict de la confidentialité bancaire.",
          challenge: "La documentation bancaire réglementaire comprend des milliers de circulaires et statuts juridiques interconnectés. Les LLMs classiques hallucinaient des clauses légales, échouaient sur l'historique des modifications, et ne pouvaient être hébergés sur des API cloud tierces en raison des règles strictes de la Banque Centrale.",
          solution: "Conception d'un système souverain sur site basé sur un modèle quantifié Qwen-2.5-7B affiné via QLoRA. Déploiement d'une architecture GraphRAG à 4 canaux combinant recherche vectorielle, BM25 et graphe temporel Neo4j répertoriant 1 247 amendements légaux.",
          architectureHighlights: [
            "Graphe de connaissances temporel Neo4j modélisant les dépendances entre statuts et circulaires",
            "Pipeline de recherche hybride à 4 canaux (Dense Vector, BM25, Voisinage de Graphe, Liaison d'Entités)",
            "Modèle Qwen-2.5-7B affiné avec tokenizer adapté au domaine réglementaire et bancaire",
            "Dashboard opérateur réactif sous Angular 21 avec traçabilité et surlignage des citations",
            "Déploiement Docker en environnement hermétique (air-gapped) sans dépendance réseau externe",
          ],
          results: [
            "Atteinte de 97,96% de précision sur les tests de classification de conformité réglementaire",
            "Réduction de 87% du temps de traitement des audits de conformité internes",
            "Élimination des hallucinations juridiques grâce aux contraintes du graphe de vérification",
          ],
        },
      },
      {
        id: "alertingsys",
        tag: "IA Industrielle — Microservices",
        title: "AlertingSys",
        subtitle: "Plateforme de Télémétrie & Détection d'Anomalies en Temps Réel",
        category: "backend",
        categories: ["backend", "ai"],
        desc: "Plateforme de détection d'anomalies et d'alertes en temps réel conçue pour COFAT. Microservices .NET communicant via RabbitMQ de manière asynchrone, moteur ML pour la détection dynamique de seuils, dashboard Angular.",
        company: "@ COFAT",
        color: "#8B5CF6",
        githubUrl: "https://github.com/HousseinTlili",
        tech: [".NET", "RabbitMQ", "Python ML", "Angular", "Docker"],
        caseStudy: {
          overview: "Plateforme de télémétrie IoT industrielle conçue pour les usines de fabrication de COFAT afin de détecter les dérives des équipements et prévenir les arrêts de lignes de production.",
          challenge: "Les flux de capteurs à haute fréquence saturaient les serveurs centralisés et généraient des tempêtes de fausses alertes perturbant les opérateurs d'usine.",
          solution: "Découplage de l'ingestion de données en microservices .NET Core haute performance avec files d'attente RabbitMQ. Création d'un service d'inférence Python ML isolé pour la détection statistique d'anomalies.",
          architectureHighlights: [
            "Courtier de messages asynchrone via RabbitMQ avec équilibrage automatique de charge",
            "Architecture microservices .NET conteneurisée sous Docker",
            "Moteur d'inférence ML en streaming évaluant les anomalies multicapteurs en moins de 10ms",
            "Tableau de bord Angular affichant en direct l'état des lignes et les escalades d'alertes",
          ],
          results: [
            "Traitement continu des flux de télémétrie avec une latence d'alerte inférieure à 15ms",
            "Diminution drastique des faux positifs grâce aux seuils adaptatifs appris par ML",
            "Permis aux opérateurs d'intervenir préventivement avant toute rupture de machine",
          ],
        },
      },
      {
        id: "campconnect",
        tag: "Full-Stack — DevOps",
        title: "CampConnect",
        subtitle: "Écosystème Universitaire & Orchestration Cloud Hybride",
        category: "backend",
        categories: ["backend"],
        desc: "Plateforme universitaire collaborative — 12 modules métier, pipeline CI/CD complet avec Jenkins et cluster Kubernetes 6 nœuds interconnecté via Tailscale VPN, supervisé avec Prometheus et Grafana.",
        color: "#10B981",
        githubUrl: "https://github.com/HousseinTlili/CampConnect",
        tech: ["Spring Boot", "Angular", "MongoDB", "Jenkins", "Kubernetes", "Tailscale", "Prometheus"],
        caseStudy: {
          overview: "Plateforme globale d'infrastructure de campus consolidant la gestion des étudiants, la planification des modules et les services administratifs au sein de 12 modules interconnectés.",
          challenge: "L'ancien système monolithique subissait des pannes régulières lors des inscriptions de rentrée, sans télémétrie automatisée ni capacité de retour en arrière (rollback).",
          solution: "Modernisation du backend vers des microservices Spring Boot adossés à MongoDB, déployés sur un cluster Kubernetes de 6 nœuds piloté par un pipeline CI/CD Jenkins automatisé.",
          architectureHighlights: [
            "Cluster Kubernetes multi-nœuds relié de façon sécurisée via un réseau maillé Tailscale VPN",
            "Pipeline CI/CD complet sous Jenkins avec étapes de tests automatisés et déploiement continu",
            "Observabilité complète avec collecte de métriques Prometheus et tableaux de bord Grafana",
            "Microservices Spring Boot RESTful avec authentification JWT et contrôle d'accès basé sur les rôles",
          ],
          results: [
            "Zéro interruption de service constatée lors des pics d'inscription grâce aux rolling updates",
            "Cycles de déploiement réduits de plusieurs heures à quelques minutes automatisées",
            "Unification de 12 modules universitaires sous une interface et un SSO uniques",
          ],
        },
      },
      {
        id: "cothon",
        tag: "Desktop & IA — Tauri v2",
        title: "Cothon",
        subtitle: "Espace de Connaissances & Hub IA 'Local-First'",
        category: "desktop",
        categories: ["desktop", "ai"],
        desc: "Espace de travail et tableau de bord personnel local-first développé avec Tauri v2 (Rust) et React 19. Intègre un chat IA contextuel sur documents PDF, un graphe de connaissances 2D/3D D3.js, un planificateur à répétition espacée SM2 et un terminal Xterm.js intégré.",
        color: "#F97316",
        githubUrl: "https://github.com/HousseinTlili/Cothon",
        tech: ["Rust", "Tauri v2", "React 19", "TypeScript", "SQLite", "D3.js", "Zustand", "Tailwind CSS v4"],
        caseStudy: {
          overview: "Cothon est un espace de productivité académique et de gestion des connaissances tout-en-un, axé sur la confidentialité et le stockage local. Alliant la puissance native de Tauri v2 (Rust) à un frontend moderne React 19, Cothon offre un espace rapide et élégant pour les étudiants et développeurs.",
          challenge: "Les outils d'étude et de prise de notes sont fragmentés (Notion, Obsidian, Logseq, Anki, émulateurs de terminal). Ils souffrent d'une consommation mémoire exorbitante (Electron), d'enfermement propriétaire et de risques pour la vie privée.",
          solution: "Développement d'une application de bureau native et souveraine utilisant Tauri v2 en Rust avec base SQLite locale. Intégration d'un assistant IA pour PDF (pdf-extract en Rust), d'un graphe de connaissances D3.js, de l'algorithme de répétition espacée SM2 et d'un terminal de travail.",
          architectureHighlights: [
            "Backend natif haute performance en Rust (Tauri v2) avec démarrage instantané et <80 Mo de mémoire",
            "Compagnon IA contextuel pour PDF avec extraction de texte ultrarapide en Rust et bac à sable de code",
            "Graphe de connaissances relationnel 2D/3D sous D3.js reliant concepts, tags et fichiers markdown",
            "Espace d'étude académique avec algorithme SM2, coffre-fort d'examens et heatmap de concentration",
            "Suite créative et développeur : canevas Excalidraw infini, shell de travail Xterm.js et lecteur audio ambient",
            "Frontend React 19 découplé avec Tailwind CSS v4 et animations Framer Motion accélérées matériellement",
          ],
          results: [
            "Stockage 100% privé et local dans SQLite sans synchronisation cloud non sollicitée",
            "Consommation de RAM drastiquement inférieure (<80 Mo) par rapport aux suites Electron classiques",
            "Consolidation fluide de la prise de notes, du chat IA sur documents, du dessin vectoriel et de l'exécution terminal",
          ],
        },
      },
      {
        id: "agentic-ide",
        tag: "Desktop — IA Autonome",
        title: "Agentic IDE",
        subtitle: "Éditeur de Code Natif avec Boucle d'Agent Autonome",
        category: "desktop",
        categories: ["desktop", "ai"],
        desc: "Éditeur de code desktop haute performance développé avec Tauri (Rust) et React. Thème sombre obsidian, routage intelligent multi-modèles d'IA et boucle d'agent autonome capable d'exécuter des actions dans le terminal et le système de fichiers.",
        color: "#EC4899",
        githubUrl: "https://github.com/HousseinTlili",
        tech: ["Rust", "Tauri", "React", "TypeScript", "Monaco Editor", "AI APIs"],
        caseStudy: {
          overview: "Un éditeur de code natif et léger conçu pour la programmation assistée par IA de nouvelle génération, sans la lourdeur en mémoire et les lenteurs de démarrage des éditeurs basés sur Electron.",
          challenge: "Les éditeurs de code IA actuels consomment plusieurs gigaoctets de RAM dès le démarrage et manquent de boucles d'agents déterministes et sécurisées pour refactoriser du code sur plusieurs fichiers.",
          solution: "Architecture native Tauri en Rust combinée à React et à l'éditeur Monaco. Implémentation d'une boucle d'agent autonome avec bascule dynamique de modèles et répartition de commandes IPC en temps réel.",
          architectureHighlights: [
            "Cœur natif Rust ultra-léger maintenant une consommation résidente inférieure à 80 Mo",
            "Boucle d'agent autonome capable de modifier des fichiers en toute sécurité et d'exécuter des commandes CLI",
            "Routeur multi-modèles adaptatif basculant intelligemment entre modèles de raisonnement rapide et de génération lourde",
            "Thème glassmorphism sombre obsidian avec éditeur Monaco intégré et terminal embarqué",
          ],
          results: [
            "Consommation de RAM divisée par 10 par rapport aux éditeurs classiques sous Electron",
            "Démarrage quasi instantané et fluidité totale de l'interface même lors du streaming intensif de tokens IA",
          ],
        },
      },
      {
        id: "jarvis",
        tag: "IA Locale — Assistant Vocal",
        title: "Jarvis",
        subtitle: "Assistant Vocal & Exécution d'Outils en Circuit Fermé",
        category: "ai",
        categories: ["ai", "desktop"],
        desc: "Assistant IA entièrement local et hermétique — Whisper STT, edge-tts, appel d'outils (tool-calling), mémoire SQLite, interface animée PyQt6. Orchestration LLM via Ollama avec gestion des threads et sérialisation des signaux.",
        color: "#06B6D4",
        githubUrl: "https://github.com/HousseinTlili/New-Jarvis",
        tech: ["Python", "Whisper", "Ollama", "PyQt6", "SQLite", "edge-tts"],
        caseStudy: {
          overview: "Un assistant vocal 100% local respectant totalement la confidentialité, fonctionnant directement sur le matériel sans transmettre de flux audio ou textuel à des serveurs tiers.",
          challenge: "Les assistants vocaux cloud exposent des données sensibles, requièrent une connexion internet constante et ne permettent pas d'interagir directement avec le système d'exploitation.",
          solution: "Intégration locale de Whisper pour la transcription vocale, d'Ollama pour l'inférence des modèles de langage, d'edge-tts pour la synthèse vocale, et d'une interface graphique PyQt6 réactive.",
          architectureHighlights: [
            "Modèle Whisper local diffusant la transcription vocale directement dans le contexte d'Ollama",
            "Boucle d'événements thread-safe avec PyQt6 évitant tout blocage de l'interface graphique",
            "Appel déterministe d'outils locaux pour la gestion de fichiers, le lancement d'applications et les requêtes système",
            "Mémoire persistante SQLite conservant l'historique des échanges et les préférences utilisateur",
          ],
          results: [
            "Fonctionnement 100% autonome et hermétique (air-gapped) sans fuite de données",
            "Interface fluide à 60 images par seconde même pendant la génération de réponses par le LLM",
          ],
        },
      },
      {
        id: "navis-browser",
        tag: "Desktop — Electron",
        title: "Navis Browser",
        subtitle: "Navigateur de Recherche Avancée Assisté par IA",
        category: "desktop",
        categories: ["desktop", "ai"],
        desc: "Navigateur Electron pour chercheurs et développeurs, avec barre latérale IA contextuelle, automatisation en arrière-plan, intégration SearXNG et omnibox enrichie par IA. Identité visuelle inspirée de Carthage.",
        color: "#EAB308",
        githubUrl: "https://github.com/HousseinTlili/Navis",
        tech: ["Electron", "JavaScript", "SearXNG", "AI APIs", "HTML/CSS"],
        caseStudy: {
          overview: "Un navigateur dédié aux chercheurs et ingénieurs combinant des moteurs de méta-recherche respectueux de la vie privée avec une extraction contextuelle par IA.",
          challenge: "Les développeurs perdent un temps précieux à basculer continuellement entre moteurs de recherche, documentation technique et fenêtres de chat IA.",
          solution: "Construction d'un navigateur sous Electron intégrant une IA d'appoint, un routage privé via SearXNG auto-hébergé et la vectorisation à la volée du contenu des pages visitées.",
          architectureHighlights: [
            "Agrégation de méta-recherche SearXNG supprimant les traceurs publicitaires et cookies de suivi",
            "Barre latérale IA avec résumé automatique des pages et questions-réponses sémantiques instantanées",
            "Omnibox enrichie par IA avec traduction automatique et expansion contextuelle des requêtes",
            "Thème sombre personnalisé d'inspiration carthaginoise et gestion optimisée des onglets",
          ],
          results: [
            "Accélération notable du travail de recherche en évitant les allers-retours entre onglets",
            "Confidentialité renforcée grâce au filtrage et à l'agrégation locale des requêtes de recherche",
          ],
        },
      },
    ];
  }

  if (lang === "ar") {
    return [
      {
        id: "kusor",
        tag: "مشروع بارز — منصة ذكاء اصطناعي بنكي",
        title: "KUSOR",
        subtitle: "منصة الذكاء التنظيمي والامتثال المصرفي والقانوني",
        category: "ai",
        categories: ["ai", "backend"],
        desc: "نظام ذكاء اصطناعي سيادي لبنك التجاري تونس — نموذج Qwen-2.5-7B مخصص (دقة 97.96%)، محرك استرجاع هجين GraphRAG بأربع قنوات، ورسم بياني زمني للمعرفة على Neo4j بـ 1,247 علاقة قانونية. تقليص زمن التدقيق بنسبة 87%.",
        company: "@ بنك التجاري تونس",
        color: "#C9A84C",
        featured: true,
        githubUrl: "https://github.com/HousseinTlili/Kusor-V2",
        metrics: [
          { value: "97.96%", label: "دقة التصنيف" },
          { value: "-87%", label: "زمن التدقيق" },
          { value: "1,247", label: "علاقة قانونية" },
        ],
        tech: ["Python", "Neo4j", "LangGraph", "Angular 21", "QLoRA", "Docker", "PostgreSQL"],
        caseStudy: {
          overview: "منصة ذكاء اصطناعي مؤسسية سيادية طُورت لصالح بنك التجاري تونس لأتمتة التدقيق التنظيمي وتحليل الامتثال والتحقق من الوثائق القانونية تحت أعلى معايير الخصوصية المصرفية.",
          challenge: "تحتوي الوثائق التنظيمية المصرفية على آلاف المناشير والقوانين المتشابكة. النماذج التقليدية كانت تعاني من الهلوسة القانونية وعدم القدرة على تتبع التعديلات الزمنية، مع استحالة إرسال البيانات لسحابة خارجية نظراً للسرية المصرفية.",
          solution: "تطوير نظام سيادي داخلي (On-Premise) يعتمد نموذج Qwen-2.5-7B مكمم ومعدل عبر QLoRA، مع معمارية GraphRAG رباعية القنوات تدمج البحث الشعاعي ونظام Neo4j لتتبع العلاقات القانونية.",
          architectureHighlights: [
            "رسم بياني زمني للمعرفة عبر Neo4j لربط المناشير والتشريعات وتتبع النسخ الزمنية",
            "محرك استرجاع هجين بأربع قنوات (بحث شعاعي كثيف، BM25، فحص مجاورة الرسم البياني، وربط الكيانات)",
            "تدريب نموذج Qwen-2.5-7B بمصطلحات قانونية ومصرفية متخصصة",
            "لوحة تحكم تفاعلية بتقنية Angular 21 مع تتبع فوري للاستشهادات القانونية وتوثيق المصادر",
            "نشر معزول كلياً داخل حاويات Docker بدون أي اتصال خارجي (Air-gapped)",
          ],
          results: [
            "تحقيق دقة بلغت 97.96% في اختبارات تصنيف الامتثال التنظيمي",
            "تقليص زمن إنجاز عمليات التدقيق الداخلي بنسبة 87%",
            "القضاء التام على الاستشهادات الوهمية بفضل ضوابط التحقق من الرسم البياني",
          ],
        },
      },
      {
        id: "alertingsys",
        tag: "ذكاء اصطناعي صناعي — خدمات مصغرة",
        title: "AlertingSys",
        subtitle: "منصة كشف الانحرافات والتنبيه الآني لمعدات المصانع",
        category: "backend",
        categories: ["backend", "ai"],
        desc: "منصة لكشف الانحرافات والتنبيه الفوري صُممت لمصانع COFAT. خدمات مصغرة بـ .NET متصلة عبر وسيط الرسائل RabbitMQ، ومحرك تعلم آلي لضبط عتبات التنبيه التكيفية، ولوحة تحكم Angular.",
        company: "@ COFAT",
        color: "#8B5CF6",
        githubUrl: "https://github.com/HousseinTlili",
        tech: [".NET", "RabbitMQ", "Python ML", "Angular", "Docker"],
        caseStudy: {
          overview: "منصة قياس عن بعد وإنذار مبكر لإنترنت الأشياء الصناعية طُورت لمصانع COFAT لمراقبة تآكل الماكينات ومنع تعطل خطوط التجميع.",
          challenge: "التدفق الهائل لإشارات المستشعرات عالية التردد تسبب في اختناق الخوادم المركزية وحدوث عواصف من التنبيهات الخاطئة.",
          solution: "فصل استقبال البيانات عبر خدمات .NET Core مصغرة عالية الكفاءة متصلة بطوابير RabbitMQ، مع بناء خدمة استدلال منفصلة بـ Python ML للرصد الإحصائي للانحرافات.",
          architectureHighlights: [
            "وساطة رسائل غير متزامنة عبر طوابير RabbitMQ مع موازنة تلقائية للأحمال",
            "معمارية خدمات مصغرة بتقنية .NET معزولة داخل حاويات Docker",
            "محرك استدلال تدفقي للتعلم الآلي يقيم انحرافات المستشعرات المتعددة في أقل من 10 ميلي ثانية",
            "لوحة تحكم تفاعلية بـ Angular لعرض مؤشرات المصنع الحية ومسارات تصعيد التنبيهات",
          ],
          results: [
            "معالجة تدفقات التليمتري بزمن استجابة للتنبيه يقل عن 15 ميلي ثانية",
            "خفض كبير في الإنذارات الكاذبة بفضل العتبات التكيفية المعتمدة على التعلم الآلي",
            "تمكين فرق الصيانة من التدخل الاستباقي قبل توقف خطوط الإنتاج",
          ],
        },
      },
      {
        id: "campconnect",
        tag: "تطوير شامل — DevOps",
        title: "CampConnect",
        subtitle: "منظومة جامعية سحابية متكاملة وإدارة البنية التحتية",
        category: "backend",
        categories: ["backend"],
        desc: "منصة جامعية تعاونية متكاملة — 12 وحدة وظيفية، مسار CI/CD مؤتمت بالكامل عبر Jenkins، مع عنقود Kubernetes بست عقد متصل عبر شبكة Tailscale VPN، ومراقبة بـ Prometheus و Grafana.",
        color: "#10B981",
        githubUrl: "https://github.com/HousseinTlili/CampConnect",
        tech: ["Spring Boot", "Angular", "MongoDB", "Jenkins", "Kubernetes", "Tailscale", "Prometheus"],
        caseStudy: {
          overview: "بنية تحتية برمجية شاملة للجامعات تجمع سجلات الطلاب، جداول المواد، والخدمات الإدارية ضمن 12 وحدة برمجية مترابطة.",
          challenge: "الأنظمة الجامعية السابقة كانت تعاني من توقفات متكررة خلال ذروة التسجيل الفصلي مع غياب المراقبة التلقائية وإمكانية الاسترجاع عند الفشل.",
          solution: "تحديث النظام الخلفي نحو خدمات مصغرة بـ Spring Boot وقواعد بيانات MongoDB، ونشرها على عنقود Kubernetes مكوّن من 6 عقد يُدار عبر مسار Jenkins المؤتمت.",
          architectureHighlights: [
            "عنقود Kubernetes متعدد العقد متصل بأمان عبر شبكة Tailscale VPN المشفرة",
            "مسار نشر وتكامل مستمر (CI/CD) مؤتمت بـ Jenkins مع مراحل اختبارات برمجية شاملة",
            "منظومة مراقبة كاملة عبر Prometheus لجمع المؤشرات ولوحات Grafana التفاعلية",
            "خدمات Spring Boot RESTful مع مصادقة موثوقة بنظام الصلاحيات والأدوار",
          ],
          results: [
            "تحقيق استقرار تشغيلي بنسبة 100% دون أي توقف أثناء ذروة تسجيل الطلاب",
            "تقليص مدة دورة النشر والتحديث من ساعات يدوية إلى دقائق مؤتمتة",
            "دمج 12 وحدة جامعية مختلفة تحت نظام تسجيل دخول موحد وواجهة متناسقة",
          ],
        },
      },
      {
        id: "cothon",
        tag: "تطبيقات سطح المكتب والذكاء — Tauri v2",
        title: "Cothon",
        subtitle: "مساحة معرفية ومساعد ذكاء اصطناعي محلي فائق الخصوصية",
        category: "desktop",
        categories: ["desktop", "ai"],
        desc: "لوحة تحكم شخصية وبيئة إدارة معرفة تعمل محلياً بالكامل ومبنية باستخدام Tauri v2 (Rust) و React 19. تشمل محادثة ذكية مع ملفات PDF، رسماً بيانياً للمعرفة ثنائي وثلاثي الأبعاد بـ D3.js، مجدول التكرار المتباعد SM2، وموجهاً طرفياً مدمجاً.",
        color: "#F97316",
        githubUrl: "https://github.com/HousseinTlili/Cothon",
        tech: ["Rust", "Tauri v2", "React 19", "TypeScript", "SQLite", "D3.js", "Zustand", "Tailwind CSS v4"],
        caseStudy: {
          overview: "Cothon منصة إنتاجية أكاديمية متكاملة تركز على الخصوصية والعمل المحلي التام. تجمع بين سرعة برمجيات سطح المكتب عبر إطار Tauri v2 ولغة Rust مع واجهة تفاعلية حديثة بـ React 19.",
          challenge: "تشتت أدوات الدراسة وتدوين الملاحظات بين تطبيقات متعددة (Notion، Obsidian، Logseq، Anki)، واستهلاكها الضخم للذاكرة (Electron)، ومخاوف الخصوصية السحابية.",
          solution: "تصميم تطبيق سطح مكتب محلي يعتمد Rust و SQLite، مع دمج مساعد ذكاء اصطناعي للمستندات (pdf-extract)، ورسم بياني تفاعلي للمعرفة، ومجدول SM2 لحفظ المعلومات.",
          architectureHighlights: [
            "نواة أصلية عالية الأداء بـ Rust (Tauri v2) تقلع في أقل من ثانية وتستهلك أقل من 80 ميغابايت ذاكرة",
            "مساعد ذكاء اصطناعي للـ PDF مع استخراج نصوص فائق السرعة وتنفيذ أكواد ومخططات Mermaid",
            "رسم بياني تفاعلي 2D/3D بـ D3.js لربط المفاهيم والملاحظات والوسوم بعلاقات ذكية",
            "بيئة دراسية أكاديمية بخوارزمية SM2 للحفظ، بنك امتحانات، ومخطط جلسات تركيز بأسلوب GitHub",
            "أدوات للمطورين والمبدعين: مساحة رسم Excalidraw غير محدودة، موجه أوامر Xterm.js، ومشغل أصوات تركيز",
            "واجهة React 19 منفصلة مع Tailwind CSS v4 وحركات سلسة عبر تسريع العتاد",
          ],
          results: [
            "تخزين محلي وخاص بنسبة 100% في قاعدة SQLite محلية دون مزامنة سحابية غير مرغوبة",
            "استهلاك ذاكرة RAM منخفض جداً (<80MB) مقارنة ببرمجيات Electron الضخمة",
            "دمج تدوين الملاحظات، استجواب الوثائق بالذكاء الاصطناعي، الرسم، وتنفيذ الأوامر في بيئة واحدة",
          ],
        },
      },
      {
        id: "agentic-ide",
        tag: "سطح المكتب — وكيل ذكاء اصطناعي",
        title: "Agentic IDE",
        subtitle: "محرر أكواد محلي مع حلقة وكيل برمجي ذاتي القيادة",
        category: "desktop",
        categories: ["desktop", "ai"],
        desc: "بيئة تطوير برمجية خفيفة وسريعة مبنية باستخدام Tauri ولغة Rust مع React ومحرر Monaco. تدعم توجيهاً ذكياً لنماذج الذكاء الاصطناعي مع حلقة وكيل ذاتي القيادة لتعديل الملفات وتنفيذ أوامر الطرفية بأمان.",
        color: "#EC4899",
        githubUrl: "https://github.com/HousseinTlili",
        tech: ["Rust", "Tauri", "React", "TypeScript", "Monaco Editor", "AI APIs"],
        caseStudy: {
          overview: "محرر أكواد مكتبي خفيف ومصمم لبرمجة الذكاء الاصطناعي المشتركة دون التكلفة العالية للذاكرة وبطء التشغيل المعتاد في المحررات المبنية على Electron.",
          challenge: "محررات الأكواد الحالية تستهلك غيغابايتات من الذاكرة وتفتقر إلى حلقات وكلاء برمجية آمنة ومحددة قادرة على إعادة هيكلة المشاريع وتعديل ملفات متعددة.",
          solution: "بناء معمارية أصلية بـ Tauri و Rust مع واجهة React ومحرر Monaco المتقدم، مع حلقة وكيل ذكي تبدل تلقائياً بين النماذج وتنفذ الأوامر محلياً بسرعة فائقة.",
          architectureHighlights: [
            "نواة أصلية بلغة Rust تحافظ على استهلاك خامل للذاكرة أقل من 80 ميغابايت",
            "حلقة وكيل ذاتية قادرة على تعديل الأكواد البرمجية وتنفيذ أوامر الطرفية بأمان كامل",
            "موجه نماذج ذكي يبدل ديناميكياً بين نماذج التفكير السريع ونماذج توليد الأكواد الثقيلة",
            "واجهة داكنة زجاجية عصرية مع محرر Monaco وطرفية مدمجة",
          ],
          results: [
            "استهلاك ذاكرة أقل بـ 10 أضعاف مقارنة بالمحررات التقليدية المبنية على Electron",
            "إقلاع فوري وتجربة استخدام خالية من أي بطء أثناء توليد نصوص الذكاء الاصطناعي",
          ],
        },
      },
      {
        id: "jarvis",
        tag: "ذكاء اصطناعي محلي — مساعد صوتي",
        title: "Jarvis",
        subtitle: "مساعد صوتي محلي معزول تماماً ومستدعي للأدوات",
        category: "ai",
        categories: ["ai", "desktop"],
        desc: "مساعد صوتي ذكي يعمل محلياً دون إنترنت — تحويل الصوت لنص Whisper، تركيب الصوت edge-tts، استدعاء أدوات النظام، ذاكرة دائمة بـ SQLite، وواجهة رسومية بـ PyQt6 مع جدولة خيوط معالجة آمنة.",
        color: "#06B6D4",
        githubUrl: "https://github.com/HousseinTlili/New-Jarvis",
        tech: ["Python", "Whisper", "Ollama", "PyQt6", "SQLite", "edge-tts"],
        caseStudy: {
          overview: "مساعد صوتي محلي تماماً لحماية الخصوصية يعمل مباشرة على العتاد الشخصي دون إرسال أي صوت أو نص لخوادم خارجية.",
          challenge: "المساعدات الصوتية السحابية تنتهك خصوصية البيانات الحساسة، تتطلب اتصالاً دائماً بالإنترنت، ولا تملك القدرة على إدارة أدوات نظام التشغيل.",
          solution: "دمج نموذج Whisper لتحويل الصوت لنص محلياً، و Ollama لتشغيل النماذج اللغوية، مع واجهة PyQt6 تفاعلية تعتمد معالجة متوازية تمنع تجمد الواجهة.",
          architectureHighlights: [
            "نموذج Whisper محلي يبث الكلمات المنطوقة مباشرة لسياق Ollama",
            "حلقة أحداث آمنة بـ PyQt6 تضمن عدم تجمد الواجهة أثناء توليد الإجابات",
            "استدعاء محلي للأدوات للتحكم في الملفات، فتح البرامج، والاستعلام عن النظام",
            "تخزين دائم ومحلي بـ SQLite لسجل المحادثات وتفضيلات المستخدم",
          ],
          results: [
            "عمل معزول بنسبة 100% دون أي تسريب للبيانات عبر الشبكة",
            "واجهة فائقة السلاسة بمعدل 60 إطاراً بالثانية أثناء التفاعل وتوليد النصوص",
          ],
        },
      },
      {
        id: "navis-browser",
        tag: "سطح المكتب — Electron",
        title: "Navis Browser",
        subtitle: "متصفح أبحاث متطور معزز بالذكاء الاصطناعي والبحث العميق",
        category: "desktop",
        categories: ["desktop", "ai"],
        desc: "متصفح شخصي للمطورين والباحثين مزود بشريط جانبي للذكاء الاصطناعي، أتمتة مهام الخلفية، محرك SearXNG للخصوصية، وشريط عناوين ذكي. تصميم وهوية قرطاجية أصيلة.",
        color: "#EAB308",
        githubUrl: "https://github.com/HousseinTlili/Navis",
        tech: ["Electron", "JavaScript", "SearXNG", "AI APIs", "HTML/CSS"],
        caseStudy: {
          overview: "متصفح مخصص للباحثين والمطورين يجمع بين محركات البحث المجمعة الحامية للخصوصية والمساعد الذكي لاستخلاص وتلخيص المعلومات.",
          challenge: "تشتت انتباه المهندسين والباحثين جراء التنقل المستمر بين نتائج البحث، المقالات العلمية، ونوافذ المحادثة الذكية.",
          solution: "تطوير متصفح Electron يدمج مساعداً جانبياً ذكياً، توجيهاً تلقائياً عبر SearXNG المحمي، وتحويلاً شعاعياً لمحتوى الصفحات للإجابة الفورية.",
          architectureHighlights: [
            "تجميع نتائج البحث عبر SearXNG مع إزالة معرفات التتبع والإعلانات",
            "شريط ذكاء اصطناعي جانبي يلخص المقالات الطويلة ويجيب عن الأسئلة الدقيقة",
            "شريط عناوين مدعم بالذكاء الاصطناعي للترجمة وتوسيع استعلامات البحث",
            "واجهة داكنة مخصصة مستوحاة من التراث القرطاجي مع تنظيم متقدم للتبويبات",
          ],
          results: [
            "تسريع مهام البحث والاستقصاء البرمجي وإلغاء الحاجة لفتح عشرات التبويبات المتكررة",
            "حماية تامة للخصوصية عبر حجب متتبعات الشركات الكبرى ومحركات البحث التقليدية",
          ],
        },
      },
    ];
  }

  // Default English
  return [
    {
      id: "kusor",
      tag: "FEATURED — Banking AI Platform",
      title: "KUSOR",
      subtitle: "Banking Regulatory Intelligence & Compliance Platform",
      category: "ai",
      categories: ["ai", "backend"],
      desc: "Sovereign AI system for Attijari Bank Tunisia — fine-tuned Qwen-2.5-7B (97.96% accuracy), 4-channel GraphRAG retrieval engine, Neo4j temporal knowledge graph with 1,247 legal relationships. Reduced audit time by 87%.",
      company: "@ Attijari Bank Tunisia",
      color: "#C9A84C",
      featured: true,
      githubUrl: "https://github.com/HousseinTlili/Kusor-V2",
      metrics: [
        { value: "97.96%", label: "Accuracy" },
        { value: "-87%", label: "Audit Time" },
        { value: "1,247", label: "Legal Relations" },
      ],
      tech: ["Python", "Neo4j", "LangGraph", "Angular 21", "QLoRA", "Docker", "PostgreSQL"],
      caseStudy: {
        overview: "KUSOR is a sovereign enterprise AI platform built for Attijari Bank Tunisia to automate regulatory verification, multi-channel compliance analysis, and legal document auditing under strict data privacy mandates.",
        challenge: "Regulatory banking documentation spans thousands of complex, cross-referenced circulars and legal statutes. Standard LLMs hallucinated legal clauses, struggled with historical circular updates, and could not be exposed to cloud third-party APIs due to central bank confidentiality regulations.",
        solution: "Engineered an on-premise sovereign system powered by a quantized Qwen-2.5-7B fine-tuned via QLoRA. Deployed a 4-channel GraphRAG architecture combining vector search, BM25 keyword matching, and a Neo4j temporal knowledge graph tracking 1,247 interconnected legal amendments.",
        architectureHighlights: [
          "Neo4j Temporal Knowledge Graph mapping cross-statute dependencies and circular overrides",
          "4-Channel hybrid retrieval pipeline (Dense Vector, Sparse BM25, Graph Neighborhood, Entity Linking)",
          "Fine-tuned Qwen-2.5-7B with custom domain-adapted legal and regulatory tokenizers",
          "Reactive Angular 21 operator dashboard with real-time citation highlighting and verification tracing",
          "Air-gapped Docker container deployment with zero external network dependencies",
        ],
        results: [
          "Achieved 97.96% precision on regulatory compliance classification benchmarks",
          "Cut internal compliance audit investigation times by 87%",
          "Eliminated hallucinated statute citations through dual-verification graph constraints",
        ],
      },
    },
    {
      id: "alertingsys",
      tag: "Industrial AI — Microservices",
      title: "AlertingSys",
      subtitle: "Real-time Anomaly Detection & Telemetry Platform",
      category: "backend",
      categories: ["backend", "ai"],
      desc: "Real-time anomaly detection and alerting platform built for COFAT. .NET microservices with RabbitMQ async communication, ML engine for threshold detection, Angular dashboard.",
      company: "@ COFAT",
      color: "#8B5CF6",
      githubUrl: "https://github.com/HousseinTlili",
      tech: [".NET", "RabbitMQ", "Python ML", "Angular", "Docker"],
      caseStudy: {
        overview: "Industrial IoT telemetry and alerting platform engineered for COFAT manufacturing plants to detect machinery drift and prevent assembly line downtime.",
        challenge: "High-frequency sensor streams across factory equipment caused bottlenecked centralized servers and false positive alert storms.",
        solution: "Decoupled sensor ingestion into high-throughput .NET Core microservices with RabbitMQ message brokers. Built an isolated Python ML inference service for statistical anomaly detection.",
        architectureHighlights: [
          "Asynchronous message brokering via RabbitMQ queues with automatic consumer balancing",
          ".NET microservices architecture containerized with Docker",
          "Streaming ML inference engine evaluating multi-sensor threshold anomalies in sub-10ms windows",
          "Angular real-time dashboard displaying plant-floor telemetry and escalation status",
        ],
        results: [
          "Processed continuous sensor telemetry with <15ms end-to-end alert latency",
          "Drastically reduced false alerts with ML-based adaptive thresholding",
          "Enabled operators to intervene before equipment failure occurred",
        ],
      },
    },
    {
      id: "campconnect",
      tag: "Full-Stack — DevOps",
      title: "CampConnect",
      subtitle: "Enterprise University Ecosystem & Orchestration",
      category: "backend",
      categories: ["backend"],
      desc: "Collaborative university platform — 12 business modules, full CI/CD pipeline with Jenkins + Kubernetes 6-node cluster via Tailscale VPN, monitored with Prometheus + Grafana.",
      color: "#10B981",
      githubUrl: "https://github.com/HousseinTlili/CampConnect",
      tech: ["Spring Boot", "Angular", "MongoDB", "Jenkins", "Kubernetes", "Tailscale", "Prometheus"],
      caseStudy: {
        overview: "End-to-end campus infrastructure platform consolidating university academic records, module scheduling, and administrative services into 12 interconnected modules.",
        challenge: "Monolithic university systems caused recurring downtime during student registration peaks with zero automated telemetry or automated rollback.",
        solution: "Modernized the backend to Spring Boot microservices backed by MongoDB, deployed onto a 6-node Kubernetes cluster orchestrated through an automated Jenkins CI/CD pipeline.",
        architectureHighlights: [
          "Multi-node Kubernetes cluster connected securely across hybrid nodes using Tailscale VPN mesh",
          "Complete automated CI/CD deployment pipeline driven by Jenkins with automated test stages",
          "Cluster observability stack with Prometheus metrics scraping and Grafana health dashboards",
          "Spring Boot RESTful microservices with role-based access control and token validation",
        ],
        results: [
          "Zero-downtime rolling updates achieved during registration spikes",
          "Reduced manual release cycle from hours to automated minutes via Jenkins",
          "Unified 12 core university modules under a unified SSO and UI",
        ],
      },
    },
    {
      id: "cothon",
      tag: "Desktop & AI — Tauri v2",
      title: "Cothon",
      subtitle: "Local-First AI Workspace & Knowledge Engine",
      category: "desktop",
      categories: ["desktop", "ai"],
      desc: "Local-first all-in-one personal dashboard and knowledge workspace built with Tauri v2 (Rust) and React 19. Features contextual PDF AI chat, D3.js 2D/3D knowledge graph, SM2 spaced-repetition scheduler, integrated Xterm.js terminal, and Excalidraw canvas.",
      color: "#F97316",
      githubUrl: "https://github.com/HousseinTlili/Cothon",
      tech: ["Rust", "Tauri v2", "React 19", "TypeScript", "SQLite", "D3.js", "Zustand", "Tailwind CSS v4"],
      caseStudy: {
        overview: "Cothon is a feature-rich, local-first all-in-one personal dashboard, knowledge-management workspace, and academic productivity platform. Combining the power of a desktop application built on Tauri v2 with a modern React 19 frontend, Cothon delivers a high-performance, beautiful, and private workspace for students, developers, and power users.",
        challenge: "Productivity tools are heavily fragmented across separate applications (Notion, Obsidian, Logseq, Anki, and terminal emulators). They suffer from excessive memory overhead (Electron), vendor lock-in, and cloud privacy concerns.",
        solution: "Engineered a decoupled, local-first desktop application using Tauri v2 in Rust with a local SQLite database (rusqlite/prisma). Integrates a contextual PDF AI assistant (Rust pdf-extract), an interactive D3.js 2D/3D knowledge graph, an SM2 spaced-repetition scheduler, and an integrated Xterm.js workspace terminal.",
        architectureHighlights: [
          "High-performance native desktop backend built on Tauri v2 (Rust) with sub-second launch and <80MB memory footprint",
          "Contextual PDF AI Companion with ultra-fast Rust text extraction (pdf-extract) and dynamic code sandbox with Mermaid.js diagramming",
          "Interactive 2D/3D relational knowledge graph built with D3.js mapping interlinked concepts, tags, and markdown files",
          "Academic study workspace with SM2 spaced-repetition scheduler, Exam Vault, Timetable, and GitHub-style focus session heatmap",
          "Creative & developer suite: Infinite Excalidraw canvas, integrated Xterm.js workspace shell, and ambient audio player (ID3 Rust parser)",
          "Decoupled React 19 frontend with Tailwind CSS v4, Framer Motion hardware-accelerated animations, and Zustand state stores",
        ],
        results: [
          "100% private, local-first storage in local SQLite (cothon.db) with zero unsolicited cloud syncing",
          "Substantially lower RAM utilization (<80MB) compared to standard multi-gigabyte Electron productivity suites",
          "Seamlessly consolidated note-taking, AI document chat, visual canvas ideation, and terminal execution into a unified application",
        ],
      },
    },
    {
      id: "agentic-ide",
      tag: "Desktop — AI-Powered",
      title: "Agentic IDE",
      subtitle: "Native AI-First Code Editor with Autonomous Agent Loop",
      category: "desktop",
      categories: ["desktop", "ai"],
      desc: "High-performance desktop IDE built with Tauri (Rust) and React. Features an obsidian dark glassmorphism theme, intelligent multi-model AI routing, and an autonomous coding agent loop with terminal and filesystem execution.",
      color: "#EC4899",
      githubUrl: "https://github.com/HousseinTlili",
      tech: ["Rust", "Tauri", "React", "TypeScript", "Monaco Editor", "AI APIs"],
      caseStudy: {
        overview: "A lightweight, native desktop code editor designed for AI-first pair programming without the heavy memory footprint and sluggish startup times of Electron-based editors.",
        challenge: "Mainstream AI code editors are resource-heavy, consume gigabytes of RAM on startup, and lack safe, deterministic local agency loops for running multi-step workspace refactoring.",
        solution: "Engineered a native Tauri architecture in Rust with a React frontend and Monaco editor integration. Built an autonomous agentic loop with multi-provider model switching and real-time IPC command dispatching.",
        architectureHighlights: [
          "Ultra-lightweight Rust native core maintaining <80MB idle memory overhead",
          "Autonomous agent loop capable of safe workspace modifications, multi-file edits, and CLI command execution",
          "Intelligent multi-model router dynamically switching between lightweight reasoning and heavy code generation models",
          "Obsidian glassmorphism dark theme with embedded Monaco code editor and integrated terminal",
        ],
        results: [
          "10x lower RAM utilization compared to standard Electron-based code editors",
          "Instant sub-second startup time and zero UI lag during intensive AI token streaming",
        ],
      },
    },
    {
      id: "jarvis",
      tag: "Local AI — Voice Assistant",
      title: "Jarvis",
      subtitle: "Air-Gapped Speech & Tool-Calling Assistant",
      category: "ai",
      categories: ["ai", "desktop"],
      desc: "Fully local AI assistant — Whisper STT, edge-tts, tool-calling, SQLite memory, animated PyQt6 GUI. LLM orchestration via Ollama with threading and signal serialization.",
      color: "#06B6D4",
      githubUrl: "https://github.com/HousseinTlili/New-Jarvis",
      tech: ["Python", "Whisper", "Ollama", "PyQt6", "SQLite", "edge-tts"],
      caseStudy: {
        overview: "A completely local, privacy-first voice assistant running on hardware without transmitting audio or text to any third-party cloud servers.",
        challenge: "Cloud voice assistants compromise sensitive data, require constant internet connectivity, and lack deep OS-level scripting tool-calling.",
        solution: "Integrated OpenAI Whisper STT locally, Ollama for local LLM inference, edge-tts for voice synthesis, and PyQt6 for a reactive GUI with thread-safe signal dispatching.",
        architectureHighlights: [
          "Local Whisper model streaming voice transcription directly into Ollama context",
          "Thread-safe event loop with PyQt6 signal serialization preventing GUI freezes",
          "Deterministic local tool calling for filesystem management, app launching, and system queries",
          "SQLite persistent memory store tracking conversational history and user preferences",
        ],
        results: [
          "100% air-gapped operation with zero network data leakage",
          "Smooth, non-blocking 60fps GUI even during heavy continuous LLM token generation",
        ],
      },
    },
    {
      id: "navis-browser",
      tag: "Desktop — Electron",
      title: "Navis Browser",
      subtitle: "Research-Oriented AI Browser with Deep Search",
      category: "desktop",
      categories: ["desktop", "ai"],
      desc: "Personal Electron browser with AI sidebar, background automation, SearXNG integration, and AI-enriched omnibox. Carthaginian branding.",
      color: "#EAB308",
      githubUrl: "https://github.com/HousseinTlili/Navis",
      tech: ["Electron", "JavaScript", "SearXNG", "AI APIs", "HTML/CSS"],
      caseStudy: {
        overview: "A dedicated researcher browser combining privacy-respecting metasearch engines with ambient AI context extraction and summarization.",
        challenge: "Developers and researchers lose context constantly switching between search engines, research papers, and chat windows.",
        solution: "Constructed an Electron browser with an integrated sidecar AI, automatic privacy routing through self-hosted SearXNG, and page content vectorization.",
        architectureHighlights: [
          "Integrated SearXNG metasearch aggregation stripping tracking tokens",
          "Ambient AI sidebar with instant page summarization and semantic query answering",
          "AI-enriched omnibox with instant natural language translation and query expansion",
          "Custom Carthaginian inspired dark theme and tab group management",
        ],
        results: [
          "Streamlined technical research workflows by eliminating tab hopping",
          "Enhanced privacy by proxying search queries through localized aggregation",
        ],
      },
    },
  ];
}

// ── Localized Experiences ────────────────────────────────────────────────────

export function getLocalizedExperiences(lang: Language): ExperienceEntry[] {
  if (lang === "fr") {
    return [
      {
        company: "ATTIJARI BANK TUNISIE",
        role: "Stagiaire Ingénieur Logiciel",
        period: "Juillet – Août 2026",
        tag: "IA & Conformité Bancaire",
        side: "right",
        color: "#C9A84C",
        bullets: [
          "Conception et déploiement de KUSOR, une plateforme d'IA souveraine atteignant 97,96% de précision en classification réglementaire.",
          "Développement d'un moteur GraphRAG à 4 canaux couplé à un graphe temporel Neo4j modélisant 1 247 relations juridiques.",
          "Affinage de Qwen-2.5-7B via QLoRA ; réduction de 87% du temps de traitement des audits en environnement bancaire de production.",
        ],
      },
      {
        company: "COFAT",
        role: "Stagiaire Ingénieur Logiciel",
        period: "Juillet – Août 2025",
        tag: "Microservices Industriels",
        side: "left",
        color: "#8B5CF6",
        bullets: [
          "Architecture d'AlertingSys, une plateforme de détection d'anomalies en temps réel pour les équipements de production industrielle.",
          "Développement de microservices .NET communicant via des files asynchrones RabbitMQ avec détection de seuils dynamiques par ML.",
          "Création d'un tableau de bord Angular pour la visualisation en temps réel des alertes et le traitement opérationnel.",
        ],
      },
    ];
  }

  if (lang === "ar") {
    return [
      {
        company: "بنك التجاري تونس",
        role: "مهندس برمجيات متدرب",
        period: "جويلية – أوت 2026",
        tag: "الذكاء الاصطناعي والامتثال المصرفي",
        side: "right",
        color: "#C9A84C",
        bullets: [
          "تصميم ونشر KUSOR، منصة ذكاء اصطناعي سيادي حققت دقة تصنيف قانوني وتنظيمي بلغت 97.96%.",
          "بناء محرك بحث هجين GraphRAG بأربع قنوات متصل برسم بياني زمني للمعرفة على Neo4j بـ 1,247 علاقة تشريعية.",
          "ضبط وتدريب نموذج Qwen-2.5-7B بتقنية QLoRA؛ وتقليص زمن دورة التدقيق الداخلي بالبنك بنسبة 87% في بيئة الإنتاج.",
        ],
      },
      {
        company: "COFAT",
        role: "مهندس برمجيات متدرب",
        period: "جويلية – أوت 2025",
        tag: "الأنظمة الموزعة والخدمات المصغرة",
        side: "left",
        color: "#8B5CF6",
        bullets: [
          "هندسة AlertingSys، منصة رصد استباقي للانحرافات والتنبيه الآني لمعدات التصنيع وخطوط التجميع.",
          "تطوير خدمات مصغرة بـ .NET تتواصل عبر طوابير RabbitMQ غير المتزامنة مع رصد ديناميكي للعتبات عبر التعلم الآلي.",
          "تطوير لوحة تحكم تفاعلية بـ Angular لعرض التنبيهات المباشرة وإدارة تدفقات استجابة فرق الصيانة.",
        ],
      },
    ];
  }

  return [
    {
      company: "ATTIJARI BANK TUNISIA",
      role: "Software Engineering Intern",
      period: "July – August 2026",
      tag: "AI & Banking Compliance",
      side: "right",
      color: "#C9A84C",
      bullets: [
        "Designed and deployed KUSOR, a sovereign AI compliance platform achieving 97.96% regulatory classification accuracy.",
        "Built a 4-channel GraphRAG retrieval engine over a Neo4j temporal knowledge graph with 1,247 legal relationships.",
        "Fine-tuned Qwen-2.5-7B using QLoRA; reduced bank audit cycle time by 87% in production deployment.",
      ],
    },
    {
      company: "COFAT",
      role: "Software Engineering Intern",
      period: "July – August 2025",
      tag: "Industrial Microservices",
      side: "left",
      color: "#8B5CF6",
      bullets: [
        "Architected AlertingSys, a real-time anomaly detection platform for industrial manufacturing equipment monitoring.",
        "Built .NET microservices communicating via RabbitMQ async queues with ML-driven dynamic threshold detection.",
        "Developed an Angular dashboard for real-time alert visualization and operator response workflows.",
      ],
    },
  ];
}

// ── Localized Education ──────────────────────────────────────────────────────

export function getLocalizedEducation(lang: Language): EducationEntry[] {
  if (lang === "fr") {
    return [
      {
        school: "ESPRIT Tunis",
        degree: "Cycle Ingénieur — Génie Logiciel (3ème Année)",
        period: "2024 – Présent",
        color: "#58A6FF",
        logo: "/esprit-logo.svg",
        icon: "🎓",
      },
      {
        school: "ISET Mahdia",
        degree: "Licence Appliquée — Automatismes & Informatique Industrielle",
        period: "2020 – 2024",
        color: "#C9A84C",
        logo: "/iset-logo.jpg",
        icon: "🏛️",
      },
      {
        school: "Lycée Ibn Abi Dhief",
        degree: "Baccalauréat — Sciences Techniques",
        period: "2019 – 2020",
        color: "#10B981",
        icon: "📚",
      },
    ];
  }

  if (lang === "ar") {
    return [
      {
        school: "ESPRIT تونس",
        degree: "مرحلة تكوين المهندسين — هندسة البرمجيات (السنة الثالثة)",
        period: "2024 – حتى الآن",
        color: "#58A6FF",
        logo: "/esprit-logo.svg",
        icon: "🎓",
      },
      {
        school: "ISET المهدية",
        degree: "الإجازة التطبيقية — الآليات والإعلامية الصناعية",
        period: "2020 – 2024",
        color: "#C9A84C",
        logo: "/iset-logo.jpg",
        icon: "🏛️",
      },
      {
        school: "معهد ابن أبي ضياف",
        degree: "شهادة الباكالوريا — العلوم التقنية",
        period: "2019 – 2020",
        color: "#10B981",
        icon: "📚",
      },
    ];
  }

  return [
    {
      school: "ESPRIT Tunis",
      degree: "Cycle Ingénieur — Software Engineering (3rd Year)",
      period: "2024 – Present",
      color: "#58A6FF",
      logo: "/esprit-logo.svg",
      icon: "🎓",
    },
    {
      school: "ISET Mahdia",
      degree: "Bachelor's Degree — Industrial Automation & Computer Science",
      period: "2020 – 2024",
      color: "#C9A84C",
      logo: "/iset-logo.jpg",
      icon: "🏛️",
    },
    {
      school: "Lycée Ibn Abi Dhief",
      degree: "Baccalauréat in Technical Sciences",
      period: "2019 – 2020",
      color: "#10B981",
      icon: "📚",
    },
  ];
}

// ── Localized Spoken Languages ───────────────────────────────────────────────

export function getLocalizedLanguages(lang: Language): SpokenLanguage[] {
  if (lang === "fr") {
    return [
      { lang: "Arabe", flag: "🇹🇳", level: "Langue maternelle", pct: 100 },
      { lang: "Anglais", flag: "🇬🇧", level: "Courant (Professionnel)", pct: 95 },
      { lang: "Français", flag: "🇫🇷", level: "Courant (Bilingue)", pct: 90 },
      { lang: "Japonais", flag: "🇯🇵", level: "Débutant", pct: 35 },
      { lang: "Espagnol", flag: "🇪🇸", level: "Débutant", pct: 20 },
    ];
  }

  if (lang === "ar") {
    return [
      { lang: "العربية", flag: "🇹🇳", level: "اللغة الأم", pct: 100 },
      { lang: "الإنجليزية", flag: "🇬🇧", level: "طليق (احترافي)", pct: 95 },
      { lang: "الفرنسية", flag: "🇫🇷", level: "طليق (ثنائي اللغة)", pct: 90 },
      { lang: "اليابانية", flag: "🇯🇵", level: "مبتدئ", pct: 35 },
      { lang: "الإسبانية", flag: "🇪🇸", level: "مبتدئ", pct: 20 },
    ];
  }

  return [
    { lang: "Arabic", flag: "🇹🇳", level: "Native", pct: 100 },
    { lang: "English", flag: "🇬🇧", level: "Fluent (Professional)", pct: 95 },
    { lang: "French", flag: "🇫🇷", level: "Fluent (Bilingual)", pct: 90 },
    { lang: "Japanese", flag: "🇯🇵", level: "Beginner", pct: 35 },
    { lang: "Spanish", flag: "🇪🇸", level: "Beginner", pct: 20 },
  ];
}
