export type Lang = "en" | "fr" | "ar";
export type ProjectCategory = "ai" | "fullstack" | "distributed" | "desktop";
export type ProjectId =
  | "kairos"
  | "sahtek"
  | "campconnect"
  | "sgh"
  | "jarvis"
  | "cothon"
  | "carbonos";
export type SkillGroupId =
  | "languages"
  | "backend"
  | "frontend"
  | "cloud"
  | "data"
  | "ai"
  | "observability";
export type SectionId =
  | "home"
  | "system"
  | "experience"
  | "projects"
  | "stack"
  | "education"
  | "contact";

export const LANGS: { code: Lang; label: string; short: string }[] = [
  { code: "en", label: "English", short: "EN" },
  { code: "fr", label: "Français", short: "FR" },
  { code: "ar", label: "العربية", short: "ع" },
];

export const profile = {
  name: "Houssein Tlili",
  email: "tlilihussein@gmail.com",
  phone: "+216 96 334 161",
  phoneHref: "tel:+21696334161",
  github: "https://github.com/HousseinTlili",
  githubLabel: "github.com/HousseinTlili",
  linkedin: "https://linkedin.com/in/tlili-houssein",
  linkedinLabel: "linkedin.com/in/tlili-houssein",
  website: "https://houssein-tlili.vercel.app",
  portrait: "/houssein-tlili.png",
  cutout: "/houssein-portrait.webp",
  cvPdf: "/CV%20Houssein%20Tlili.pdf",
};

export const projects: {
  id: ProjectId;
  name: string;
  accent: string;
  categories: ProjectCategory[];
  stack: string[];
}[] = [
  {
    id: "kairos",
    name: "Kairos",
    accent: "#58a6ff",
    categories: ["ai", "desktop"],
    stack: ["Tauri", "Rust", "React", "Hermes Agent"],
  },
  {
    id: "sahtek",
    name: "SahTek",
    accent: "#3dd6b5",
    categories: ["fullstack"],
    stack: ["Next.js", "React", "Flutter", "FastAPI", "PostgreSQL", "Redis", "Docker Compose"],
  },
  {
    id: "campconnect",
    name: "CampConnect",
    accent: "#c9a84c",
    categories: ["fullstack", "distributed"],
    stack: ["Spring Boot", "Angular", "MongoDB", "Jenkins", "Kubernetes", "Prometheus", "Grafana"],
  },
  {
    id: "sgh",
    name: "SGH",
    accent: "#ff7b72",
    categories: ["distributed"],
    stack: ["Microservices", "RabbitMQ", "Keycloak", "PostgreSQL", "Angular"],
  },
  {
    id: "jarvis",
    name: "Jarvis",
    accent: "#a78bfa",
    categories: ["ai", "desktop"],
    stack: ["RAG", "ChromaDB", "Whisper", "Kokoro TTS", "Ollama", "Tauri", "React", "FastAPI"],
  },
  {
    id: "cothon",
    name: "Cothon",
    accent: "#f0883e",
    categories: ["desktop", "ai"],
    stack: ["Tauri v2", "Rust", "React", "SQLite"],
  },
  {
    id: "carbonos",
    name: "CarbonOS",
    accent: "#7ee787",
    categories: ["fullstack", "ai"],
    stack: ["FastAPI", "PostgreSQL", "ML microservice"],
  },
];

export const skillGroups: { id: SkillGroupId; items: string[] }[] = [
  { id: "languages", items: ["C#", "Java", "Python", "TypeScript", "Rust", "Dart", "SQL"] },
  { id: "backend", items: [".NET / ASP.NET Core", "Spring Boot", "FastAPI", "Node.js"] },
  { id: "frontend", items: ["Angular", "React", "Next.js", "Flutter", "Tailwind CSS"] },
  {
    id: "cloud",
    items: ["AWS (Fundamentals)", "Docker", "Kubernetes", "Jenkins", "GitHub Actions"],
  },
  { id: "data", items: ["PostgreSQL", "MongoDB", "Redis", "SQLite", "Neo4j", "ChromaDB"] },
  { id: "ai", items: ["RAG", "GraphRAG", "LangGraph", "QLoRA", "Ollama"] },
  { id: "observability", items: ["RabbitMQ", "Prometheus", "Grafana", "SonarQube"] },
];

export const marquee = [
  "LangGraph",
  "Neo4j",
  "Rust",
  "Tauri",
  ".NET",
  "Spring Boot",
  "FastAPI",
  "Angular",
  "React",
  "Next.js",
  "Flutter",
  "Kubernetes",
  "RabbitMQ",
  "PostgreSQL",
  "QLoRA",
  "Ollama",
];

export const experienceStacks = {
  attijari: [
    "LangGraph",
    "Neo4j",
    "BM25",
    "RRF",
    "Cross-Encoder",
    "Qwen 2.5-7B",
    "QLoRA",
    "Angular",
  ],
  cofat: [".NET", "RabbitMQ", "Python ML", "Angular", "Docker Compose"],
};

type ProjectCopy = { tagline: string; description: string; highlight?: string };

export interface Dict {
  nav: Record<Exclude<SectionId, "home">, string> & {
    cv: string;
    command: string;
    menu: string;
    language: string;
  };
  hero: {
    available: string;
    lines: [string, string, string];
    role: string;
    seeking: string;
    intro: string;
    explore: string;
    contact: string;
    scroll: string;
    hint: string;
    stats: [string, string, string, string];
  };
  system: {
    kicker: string;
    title: string;
    text: string;
    query: string;
    retrievers: [string, string, string, string];
    fusion: string;
    rerank: string;
    agent: string;
    answer: string;
    audit: string;
    live: string;
    metrics: [string, string, string, string];
  };
  experience: {
    kicker: string;
    title: string;
    role: string;
    attijari: { period: string; points: string[] };
    cofat: { period: string; points: string[] };
  };
  projects: {
    kicker: string;
    title: string;
    text: string;
    all: string;
    featured: string;
    filters: Record<ProjectCategory, string>;
    items: Record<ProjectId, ProjectCopy>;
  };
  stack: { kicker: string; title: string; text: string; groups: Record<SkillGroupId, string> };
  education: {
    kicker: string;
    title: string;
    degrees: { title: string; school: string; period: string }[];
    certTitle: string;
    certs: string[];
    langTitle: string;
    languages: { name: string; level: string }[];
  };
  contact: {
    kicker: string;
    title: [string, string];
    text: string;
    name: string;
    email: string;
    message: string;
    send: string;
    note: string;
    copy: string;
    copied: string;
    status: string;
    statusText: string;
    location: string;
  };
  footer: { built: string; top: string };
  palette: {
    placeholder: string;
    navigate: string;
    actions: string;
    languages: string;
    copyEmail: string;
    downloadCv: string;
    openCv: string;
    github: string;
    linkedin: string;
    empty: string;
    hint: string;
  };
}

export const dict: Record<Lang, Dict> = {
  en: {
    nav: {
      system: "Signature",
      experience: "Experience",
      projects: "Projects",
      stack: "Stack",
      education: "Education",
      contact: "Contact",
      cv: "Download CV",
      command: "Quick actions",
      menu: "Menu",
      language: "Language",
    },
    hero: {
      available: "Open to a 6-month PFE · January 2027",
      lines: ["Building", "intelligent", "systems."],
      role: "Final-year Software Engineering student at ESPRIT",
      seeking: "Seeking a 6-month end-of-studies internship (PFE) starting January 2027.",
      intro:
        "I design tools that simplify business processes, centralise information and automate work — from applied AI and distributed systems to full-stack products and DevOps.",
      explore: "Explore projects",
      contact: "Get in touch",
      scroll: "Scroll",
      hint: "Hover the portrait",
      stats: [
        "case analysis, from up to 4 h",
        "evaluation benchmark",
        "automated tests",
        "industry internships",
      ],
    },
    system: {
      kicker: "Signature system · Attijari Bank Tunisia",
      title: "KUSOR — sovereign AI for banking compliance",
      text: "A hybrid retrieval and reasoning engine that helps compliance teams search, understand and analyse Central Bank of Tunisia regulations, with dedicated KYC and AML modules.",
      query: "Compliance question",
      retrievers: ["BM25", "Vector search", "Neo4j temporal graph", "Obligation search"],
      fusion: "RRF fusion",
      rerank: "Cross-Encoder",
      agent: "LangGraph agent",
      answer: "Sourced answer",
      audit: "SHA-256 audit trail",
      live: "Live pipeline",
      metrics: [
        "per case, down from up to 4 h",
        "on the evaluation benchmark",
        "Angular modules",
        "Qwen 2.5 fine-tuned with QLoRA",
      ],
    },
    experience: {
      kicker: "Industry experience",
      title: "Shipping inside real organisations",
      role: "Software Engineering Intern",
      attijari: {
        period: "Jul – Aug 2026",
        points: [
          "Designed KUSOR, a sovereign AI platform helping compliance teams search, understand and analyse BCT regulations, with KYC and AML modules.",
          "Reduced case analysis from up to 4 hours to under 30 seconds.",
          "Built hybrid retrieval with BM25, vector search, a Neo4j temporal graph and structured obligation search, fused with RRF, Cross-Encoder reranking and LangGraph.",
          "Fine-tuned Qwen 2.5-7B (QLoRA), delivered 14 Angular modules and SHA-256 audit logging — 97.96% on the evaluation benchmark.",
        ],
      },
      cofat: {
        period: "Jul – Aug 2025",
        points: [
          "Developed AlertingSys, an industrial monitoring solution that detects anomalies and triggers real-time alerts for equipment tracking and maintenance.",
          "Architected .NET microservices with RabbitMQ, a Python ML engine, an Angular dashboard and Docker Compose.",
        ],
      },
    },
    projects: {
      kicker: "Selected work",
      title: "Products with a point of view",
      text: "From local AI agents to distributed healthcare platforms — each project solves a concrete workflow problem.",
      all: "All",
      featured: "Featured",
      filters: {
        ai: "AI",
        fullstack: "Full-stack",
        distributed: "Distributed",
        desktop: "Desktop",
      },
      items: {
        kairos: {
          tagline: "Desktop AI assistant with action control",
          description:
            "Helps users operate their apps and browser while sensitive actions require explicit approval and every step is recorded in a verifiable local log.",
          highlight: "740+ automated tests · pre-release",
        },
        sahtek: {
          tagline: "Medical practice platform · web + mobile",
          description:
            "Centralises patient records, appointments and clinical exchanges by specialty. One API powers the patient site (ar/fr), doctor workspace, admin back-office and mobile app.",
        },
        campconnect: {
          tagline: "Camping & adventure in Tunisia",
          description:
            "Brings campsite discovery, bookings, trip planning and equipment rental together.",
          highlight: "12 business modules",
        },
        sgh: {
          tagline: "Hospital management system",
          description:
            "Coordinates the hospital journey — admission, consultations, lab tests and pharmacy — through distributed services.",
        },
        jarvis: {
          tagline: "Local AI assistant for your computer",
          description:
            "Searches documents, interacts by voice and automates local and scheduled tasks.",
        },
        cothon: {
          tagline: "Student workspace & productivity hub",
          description:
            "Centralises courses, notes and files, supports spaced-repetition revision and lets students query PDFs with contextual AI.",
        },
        carbonos: {
          tagline: "Carbon accounting platform",
          description:
            "Helps organisations structure greenhouse-gas emissions tracking and their ISO 14064-1 compliance process.",
        },
      },
    },
    stack: {
      kicker: "Toolkit",
      title: "Engineering across the full stack",
      text: "Comfortable moving from model fine-tuning to message queues, mobile apps and production pipelines.",
      groups: {
        languages: "Languages",
        backend: "Backend",
        frontend: "Frontend & Mobile",
        cloud: "Cloud & DevOps",
        data: "Data",
        ai: "AI & Agents",
        observability: "Messaging & Observability",
      },
    },
    education: {
      kicker: "Foundations",
      title: "Education & credentials",
      degrees: [
        {
          title: "Engineering Cycle in Software Engineering",
          school: "ESPRIT · Tunis",
          period: "2024 — present",
        },
        {
          title: "Bachelor’s in Automation & Industrial Computing",
          school: "ISET",
          period: "2020 — 2024",
        },
      ],
      certTitle: "Certifications",
      certs: ["AWS Cloud Fundamentals (ESPRIT)", "Blockchain Certification"],
      langTitle: "Languages",
      languages: [
        { name: "Arabic", level: "Native" },
        { name: "French", level: "Fluent" },
        { name: "English", level: "Fluent" },
        { name: "Japanese", level: "Conversational" },
      ],
    },
    contact: {
      kicker: "Contact",
      title: ["Let’s build", "something remarkable."],
      text: "I’m looking for a 6-month PFE from January 2027 in software engineering, AI or distributed systems.",
      name: "Your name",
      email: "Your email",
      message: "Tell me about your team or project",
      send: "Send message",
      note: "Opens your email app with the message prepared.",
      copy: "Copy email",
      copied: "Copied",
      status: "Status",
      statusText: "Available from January 2027",
      location: "Manouba, Tunisia",
    },
    footer: { built: "Designed & engineered by Houssein Tlili", top: "Back to top" },
    palette: {
      placeholder: "Type a command or search…",
      navigate: "Navigate",
      actions: "Actions",
      languages: "Language",
      copyEmail: "Copy email address",
      downloadCv: "Download CV (PDF)",
      openCv: "Open interactive CV",
      github: "Open GitHub",
      linkedin: "Open LinkedIn",
      empty: "No matching command",
      hint: "to open",
    },
  },
  fr: {
    nav: {
      system: "Signature",
      experience: "Expérience",
      projects: "Projets",
      stack: "Stack",
      education: "Formation",
      contact: "Contact",
      cv: "Télécharger le CV",
      command: "Actions rapides",
      menu: "Menu",
      language: "Langue",
    },
    hero: {
      available: "Disponible pour un PFE de 6 mois · janvier 2027",
      lines: ["Concevoir", "des systèmes", "intelligents."],
      role: "Étudiant Ingénieur Logiciel — Dernière année à ESPRIT",
      seeking: "En recherche d’un PFE de 6 mois à partir de janvier 2027.",
      intro:
        "Je conçois des outils qui simplifient les processus métier, centralisent l’information et automatisent les tâches — de l’IA appliquée aux systèmes distribués, du full-stack au DevOps.",
      explore: "Voir les projets",
      contact: "Me contacter",
      scroll: "Défiler",
      hint: "Survolez le portrait",
      stats: [
        "par dossier, contre 4 h",
        "benchmark d’évaluation",
        "tests automatisés",
        "stages en entreprise",
      ],
    },
    system: {
      kicker: "Système signature · Attijari Bank Tunisia",
      title: "KUSOR — IA souveraine pour la conformité bancaire",
      text: "Un moteur hybride de recherche et de raisonnement qui aide les équipes conformité à rechercher, comprendre et analyser les textes réglementaires de la Banque Centrale de Tunisie, avec des modules KYC et AML.",
      query: "Question conformité",
      retrievers: [
        "BM25",
        "Recherche vectorielle",
        "Graphe temporel Neo4j",
        "Recherche d’obligations",
      ],
      fusion: "Fusion RRF",
      rerank: "Cross-Encoder",
      agent: "Agent LangGraph",
      answer: "Réponse sourcée",
      audit: "Journal d’audit SHA-256",
      live: "Pipeline en direct",
      metrics: [
        "par dossier, contre jusqu’à 4 h",
        "sur le benchmark d’évaluation",
        "modules Angular",
        "Qwen 2.5 fine-tuné en QLoRA",
      ],
    },
    experience: {
      kicker: "Expérience professionnelle",
      title: "Livrer dans de vraies organisations",
      role: "Stagiaire Ingénieur Logiciel",
      attijari: {
        period: "Juil. – Août 2026",
        points: [
          "Conçu KUSOR, plateforme d’IA souveraine aidant les équipes conformité à rechercher, comprendre et analyser les textes réglementaires de la BCT, avec des modules KYC et AML.",
          "Analyse d’un dossier ramenée de jusqu’à 4 h à moins de 30 s.",
          "Recherche hybride : BM25, recherche vectorielle, graphe temporel Neo4j et recherche structurée d’obligations · fusion RRF · Cross-Encoder · LangGraph.",
          "Fine-tuning Qwen 2.5-7B (QLoRA), Angular (14 modules) et journalisation d’audit SHA-256 — 97,96 % sur le benchmark d’évaluation.",
        ],
      },
      cofat: {
        period: "Juil. – Août 2025",
        points: [
          "Développé AlertingSys, solution de supervision industrielle qui détecte les anomalies et déclenche des alertes en temps réel pour faciliter le suivi des équipements et la maintenance.",
          "Microservices .NET, RabbitMQ, moteur ML Python, dashboard Angular et Docker Compose.",
        ],
      },
    },
    projects: {
      kicker: "Projets sélectionnés",
      title: "Des produits qui résolvent de vrais problèmes",
      text: "Des agents IA locaux aux plateformes de santé distribuées — chaque projet répond à un besoin métier concret.",
      all: "Tous",
      featured: "À la une",
      filters: { ai: "IA", fullstack: "Full-stack", distributed: "Distribué", desktop: "Desktop" },
      items: {
        kairos: {
          tagline: "Assistant IA de bureau avec contrôle des actions",
          description:
            "Aide l’utilisateur à interagir avec ses applications et son navigateur, tout en soumettant les actions sensibles à une approbation explicite et en conservant un journal local vérifiable.",
          highlight: "740+ tests automatisés rapportés · pré-version",
        },
        sahtek: {
          tagline: "Gestion de cabinet médical · web + mobile",
          description:
            "Aide les médecins à centraliser les dossiers patients, organiser les rendez-vous et structurer les échanges cliniques. Une API unique alimente le site patient (ar/fr), l’espace médecin, le back-office et l’application mobile.",
        },
        campconnect: {
          tagline: "Camping et aventure en Tunisie",
          description:
            "Centralise la découverte de campings, les réservations, la planification de sorties et la location d’équipements.",
          highlight: "12 modules métier",
        },
        sgh: {
          tagline: "Système de gestion hospitalière",
          description:
            "Coordonne le parcours hospitalier, de l’admission aux consultations, analyses de laboratoire et pharmacie, à travers des services distribués.",
        },
        jarvis: {
          tagline: "Assistant IA local pour ordinateur",
          description:
            "Permet de rechercher dans les documents, d’interagir par la voix et d’automatiser certaines tâches locales et planifiées.",
        },
        cothon: {
          tagline: "Espace de travail et de productivité étudiant",
          description:
            "Centralise cours, notes et fichiers, facilite les révisions avec répétition espacée et permet d’interroger des PDF avec une IA contextuelle.",
        },
        carbonos: {
          tagline: "Plateforme de bilan carbone",
          description:
            "Aide les organisations à structurer le suivi de leurs émissions de gaz à effet de serre et leur démarche de conformité ISO 14064-1.",
        },
      },
    },
    stack: {
      kicker: "Compétences",
      title: "Une ingénierie de bout en bout",
      text: "Du fine-tuning de modèles aux files de messages, des applications mobiles aux pipelines de production.",
      groups: {
        languages: "Langages",
        backend: "Backend",
        frontend: "Frontend & Mobile",
        cloud: "Cloud & DevOps",
        data: "Données",
        ai: "IA & Agents",
        observability: "Messaging & Observabilité",
      },
    },
    education: {
      kicker: "Parcours",
      title: "Formation & certifications",
      degrees: [
        {
          title: "Cycle Ingénieur en Génie Logiciel",
          school: "ESPRIT · Tunis",
          period: "2024 — en cours",
        },
        {
          title: "Licence en Automatisme et Informatique Industrielle",
          school: "ISET",
          period: "2020 — 2024",
        },
      ],
      certTitle: "Certifications",
      certs: ["AWS Cloud Fundamentals (ESPRIT)", "Certification Blockchain"],
      langTitle: "Langues",
      languages: [
        { name: "Arabe", level: "Langue maternelle" },
        { name: "Français", level: "Courant" },
        { name: "Anglais", level: "Courant" },
        { name: "Japonais", level: "Conversationnel" },
      ],
    },
    contact: {
      kicker: "Contact",
      title: ["Construisons", "quelque chose de remarquable."],
      text: "Je recherche un PFE de 6 mois à partir de janvier 2027 en génie logiciel, IA ou systèmes distribués.",
      name: "Votre nom",
      email: "Votre email",
      message: "Parlez-moi de votre équipe ou de votre projet",
      send: "Envoyer le message",
      note: "Ouvre votre application email avec le message prérempli.",
      copy: "Copier l’email",
      copied: "Copié",
      status: "Statut",
      statusText: "Disponible à partir de janvier 2027",
      location: "Manouba, Tunisie",
    },
    footer: { built: "Conçu et développé par Houssein Tlili", top: "Retour en haut" },
    palette: {
      placeholder: "Tapez une commande ou recherchez…",
      navigate: "Navigation",
      actions: "Actions",
      languages: "Langue",
      copyEmail: "Copier l’adresse email",
      downloadCv: "Télécharger le CV (PDF)",
      openCv: "Ouvrir le CV interactif",
      github: "Ouvrir GitHub",
      linkedin: "Ouvrir LinkedIn",
      empty: "Aucune commande trouvée",
      hint: "pour ouvrir",
    },
  },
  ar: {
    nav: {
      system: "المشروع الأبرز",
      experience: "الخبرة",
      projects: "المشاريع",
      stack: "المهارات",
      education: "التكوين",
      contact: "تواصل",
      cv: "تحميل السيرة",
      command: "إجراءات سريعة",
      menu: "القائمة",
      language: "اللغة",
    },
    hero: {
      available: "متاح لتربص ختم دروس لمدة 6 أشهر · جانفي 2027",
      lines: ["أبني", "أنظمة", "ذكية."],
      role: "طالب مهندس برمجيات في السنة الأخيرة بإسبريت",
      seeking: "أبحث عن تربص ختم دروس (PFE) لمدة 6 أشهر ابتداءً من جانفي 2027.",
      intro:
        "أصمّم أدوات تبسّط العمليات المهنية، وتجمع المعلومات في مكان واحد، وتؤتمت المهام — من الذكاء الاصطناعي التطبيقي والأنظمة الموزّعة إلى تطوير المنتجات المتكاملة وDevOps.",
      explore: "استكشف المشاريع",
      contact: "تواصل معي",
      scroll: "مرّر",
      hint: "مرّر المؤشر فوق الصورة",
      stats: ["لتحليل الملف بدل 4 ساعات", "في معيار التقييم", "اختبار آلي", "تربصات مهنية"],
    },
    system: {
      kicker: "المشروع الأبرز · التجاري بنك تونس",
      title: "KUSOR — ذكاء اصطناعي سيادي للامتثال البنكي",
      text: "محرّك هجين للبحث والاستدلال يساعد فرق الامتثال على البحث في نصوص البنك المركزي التونسي وفهمها وتحليلها، مع وحدات مخصّصة لـ KYC وAML.",
      query: "سؤال امتثال",
      retrievers: ["BM25", "بحث متّجهي", "رسم زمني Neo4j", "بحث في الالتزامات"],
      fusion: "دمج RRF",
      rerank: "Cross-Encoder",
      agent: "وكيل LangGraph",
      answer: "إجابة موثّقة المصادر",
      audit: "سجل تدقيق SHA-256",
      live: "مسار مباشر",
      metrics: [
        "لكل ملف بدل 4 ساعات",
        "في معيار التقييم",
        "وحدة Angular",
        "Qwen 2.5 مُحسَّن عبر QLoRA",
      ],
    },
    experience: {
      kicker: "الخبرة المهنية",
      title: "حلول حقيقية داخل مؤسسات حقيقية",
      role: "متربص مهندس برمجيات",
      attijari: {
        period: "جويلية – أوت 2026",
        points: [
          "صمّمت KUSOR، منصة ذكاء اصطناعي سيادية تساعد فرق الامتثال على البحث في نصوص البنك المركزي التونسي وفهمها وتحليلها، مع وحدات KYC وAML.",
          "خفّضت مدة تحليل الملف من 4 ساعات إلى أقل من 30 ثانية.",
          "بنيت بحثًا هجينًا يجمع BM25 والبحث المتّجهي ورسمًا زمنيًا في Neo4j والبحث المهيكل في الالتزامات، مع دمج RRF وإعادة ترتيب Cross-Encoder وLangGraph.",
          "حسّنت نموذج Qwen 2.5-7B عبر QLoRA، وطوّرت 14 وحدة Angular وسجل تدقيق SHA-256 — بنتيجة 97.96% في معيار التقييم.",
        ],
      },
      cofat: {
        period: "جويلية – أوت 2025",
        points: [
          "طوّرت AlertingSys، حلًا للمراقبة الصناعية يكتشف الأعطال ويطلق تنبيهات فورية لتسهيل متابعة المعدات وصيانتها.",
          "بنية خدمات مصغّرة ‎.NET مع RabbitMQ ومحرّك تعلّم آلي بلغة Python ولوحة تحكم Angular وDocker Compose.",
        ],
      },
    },
    projects: {
      kicker: "مشاريع مختارة",
      title: "منتجات تحل مشكلات حقيقية",
      text: "من وكلاء الذكاء الاصطناعي المحليين إلى منصات صحية موزّعة — كل مشروع يجيب عن حاجة عملية واضحة.",
      all: "الكل",
      featured: "مميّز",
      filters: {
        ai: "ذكاء اصطناعي",
        fullstack: "تطوير متكامل",
        distributed: "أنظمة موزّعة",
        desktop: "سطح المكتب",
      },
      items: {
        kairos: {
          tagline: "مساعد ذكاء اصطناعي لسطح المكتب مع التحكم في الإجراءات",
          description:
            "يساعد المستخدم على التفاعل مع تطبيقاته ومتصفحه، مع إخضاع الإجراءات الحساسة لموافقة صريحة والاحتفاظ بسجل محلي قابل للتحقق.",
          highlight: "أكثر من 740 اختبارًا آليًا · إصدار تجريبي",
        },
        sahtek: {
          tagline: "منصة لإدارة العيادات الطبية · ويب وجوال",
          description:
            "تساعد الأطباء على تنظيم ملفات المرضى والمواعيد والتبادلات السريرية حسب التخصص. واجهة برمجية واحدة تغذي موقع المرضى (عربي/فرنسي) وفضاء الطبيب ولوحة الإدارة وتطبيق الجوال.",
        },
        campconnect: {
          tagline: "منصة للتخييم والمغامرة في تونس",
          description: "تجمع اكتشاف المخيمات والحجوزات وتخطيط الرحلات وتأجير المعدات في مكان واحد.",
          highlight: "12 وحدة وظيفية",
        },
        sgh: {
          tagline: "نظام لإدارة المستشفيات",
          description:
            "ينسّق مراحل المسار الاستشفائي، من القبول إلى الاستشارات والتحاليل المخبرية والصيدلية، عبر خدمات موزّعة.",
        },
        jarvis: {
          tagline: "مساعد ذكاء اصطناعي محلي للحاسوب",
          description:
            "يتيح البحث في المستندات والتفاعل الصوتي وأتمتة بعض المهام المحلية والمجدولة.",
        },
        cothon: {
          tagline: "فضاء عمل وإنتاجية للطلبة",
          description:
            "يجمع الدروس والملاحظات والملفات، ويسهّل المراجعة بالتكرار المتباعد، ويتيح الاستفسار من ملفات PDF بذكاء اصطناعي سياقي.",
        },
        carbonos: {
          tagline: "منصة لتقييم البصمة الكربونية",
          description:
            "تساعد المؤسسات على هيكلة متابعة انبعاثات غازات الاحتباس الحراري ومسار مطابقتها لمعيار ISO 14064-1.",
        },
      },
    },
    stack: {
      kicker: "الأدوات",
      title: "هندسة برمجيات متكاملة",
      text: "من تحسين النماذج إلى طوابير الرسائل، ومن تطبيقات الجوال إلى مسارات الإنتاج.",
      groups: {
        languages: "لغات البرمجة",
        backend: "الواجهة الخلفية",
        frontend: "الواجهات والجوال",
        cloud: "السحابة وDevOps",
        data: "البيانات",
        ai: "الذكاء الاصطناعي والوكلاء",
        observability: "المراسلة والمراقبة",
      },
    },
    education: {
      kicker: "المسار",
      title: "التكوين والشهادات",
      degrees: [
        {
          title: "مرحلة مهندس في هندسة البرمجيات",
          school: "إسبريت · تونس",
          period: "2024 — حاليًا",
        },
        { title: "إجازة في الآلية والإعلامية الصناعية", school: "ISET", period: "2020 — 2024" },
      ],
      certTitle: "الشهادات",
      certs: ["AWS Cloud Fundamentals (ESPRIT)", "شهادة البلوكتشين"],
      langTitle: "اللغات",
      languages: [
        { name: "العربية", level: "اللغة الأم" },
        { name: "الفرنسية", level: "بطلاقة" },
        { name: "الإنجليزية", level: "بطلاقة" },
        { name: "اليابانية", level: "مستوى محادثة" },
      ],
    },
    contact: {
      kicker: "تواصل",
      title: ["لنبنِ معًا", "شيئًا استثنائيًا."],
      text: "أبحث عن تربص ختم دروس لمدة 6 أشهر ابتداءً من جانفي 2027 في هندسة البرمجيات أو الذكاء الاصطناعي أو الأنظمة الموزّعة.",
      name: "اسمك",
      email: "بريدك الإلكتروني",
      message: "حدّثني عن فريقك أو مشروعك",
      send: "إرسال الرسالة",
      note: "سيفتح تطبيق البريد مع رسالة جاهزة.",
      copy: "نسخ البريد",
      copied: "تم النسخ",
      status: "الحالة",
      statusText: "متاح ابتداءً من جانفي 2027",
      location: "منوبة، تونس",
    },
    footer: { built: "تصميم وتطوير حسين التليلي", top: "العودة للأعلى" },
    palette: {
      placeholder: "اكتب أمرًا أو ابحث…",
      navigate: "التنقل",
      actions: "إجراءات",
      languages: "اللغة",
      copyEmail: "نسخ البريد الإلكتروني",
      downloadCv: "تحميل السيرة الذاتية (PDF)",
      openCv: "فتح السيرة التفاعلية",
      github: "فتح GitHub",
      linkedin: "فتح LinkedIn",
      empty: "لا توجد نتائج",
      hint: "للفتح",
    },
  },
};
