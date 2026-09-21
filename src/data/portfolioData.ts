export interface Project {
  id: string;
  tag: string;
  title: string;
  subtitle?: string;
  category?: 'ai' | 'backend' | 'desktop';
  categories: ('ai' | 'backend' | 'desktop')[];
  desc: string;
  metrics?: { value: string; label: string }[];
  tech: string[];
  company?: string;
  color: string;
  featured?: boolean;
  githubUrl?: string;
  demoUrl?: string;
  caseStudy?: {
    overview: string;
    challenge: string;
    solution: string;
    architectureHighlights: string[];
    results: string[];
  };
}

export interface SkillGroup {
  label: string;
  color: string;
  skills: string[];
}

export interface Language {
  lang: string;
  flag: string;
  level: string;
  pct: number;
}

export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  tag: string;
  side: 'left' | 'right';
  color: string;
  bullets: string[];
}

export interface EducationEntry {
  school: string;
  degree: string;
  period: string;
  color: string;
  logo?: string;
  icon?: string;
}

export const PERSONAL_INFO = {
  name: "Houssein Tlili",
  title: "Full-Stack & AI Engineer",
  location: "Manouba, Tunisia",
  education: "Software Engineering student at ESPRIT Tunis",
  email: "tlilihussein@gmail.com",
  github: "https://github.com/HousseinTlili",
  linkedin: "https://www.linkedin.com/in/tlili-houssein-7a575a317/",
  cvUrl: "/cv.pdf",
};

export const PROJECTS: Project[] = [
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
        "Air-gapped Docker container deployment with zero external network dependencies"
      ],
      results: [
        "Achieved 97.96% precision on regulatory compliance classification benchmarks",
        "Cut internal compliance audit investigation times by 87%",
        "Eliminated hallucinated statute citations through dual-verification graph constraints"
      ]
    }
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
        "Angular real-time dashboard displaying plant-floor telemetry and escalation status"
      ],
      results: [
        "Processed continuous sensor telemetry with <15ms end-to-end alert latency",
        "Drastically reduced false alerts with ML-based adaptive thresholding",
        "Enabled operators to intervene before equipment failure occurred"
      ]
    }
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
        "Spring Boot RESTful microservices with role-based access control and token validation"
      ],
      results: [
        "Zero-downtime rolling updates achieved during registration spikes",
        "Reduced manual release cycle from hours to automated minutes via Jenkins",
        "Unified 12 core university modules under a unified SSO and UI"
      ]
    }
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
        "Decoupled React 19 frontend with Tailwind CSS v4, Framer Motion hardware-accelerated animations, and Zustand state stores"
      ],
      results: [
        "100% private, local-first storage in local SQLite (cothon.db) with zero unsolicited cloud syncing",
        "Substantially lower RAM utilization (<80MB) compared to standard multi-gigabyte Electron productivity suites",
        "Seamlessly consolidated note-taking, AI document chat, visual canvas ideation, and terminal execution into a unified application"
      ]
    }
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
        "Obsidian glassmorphism dark theme with embedded Monaco code editor and integrated terminal"
      ],
      results: [
        "10x lower RAM utilization compared to standard Electron-based code editors",
        "Instant sub-second startup time and zero UI lag during intensive AI token streaming"
      ]
    }
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
        "SQLite persistent memory store tracking conversational history and user preferences"
      ],
      results: [
        "100% air-gapped operation with zero network data leakage",
        "Smooth, non-blocking 60fps GUI even during heavy continuous LLM token generation"
      ]
    }
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
        "Custom Carthaginian inspired dark theme and tab group management"
      ],
      results: [
        "Streamlined technical research workflows by eliminating tab hopping",
        "Enhanced privacy by proxying search queries through localized aggregation"
      ]
    }
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  { label: "AI / ML", color: "#3B82F6", skills: ["Python", "QLoRA", "LangGraph", "Ollama", "GraphRAG", "PyTorch"] },
  { label: "Backend", color: "#8B5CF6", skills: [".NET", "Spring Boot", "Node.js", "RabbitMQ", "REST APIs"] },
  { label: "Frontend", color: "#06B6D4", skills: ["React", "Angular 21", "Tailwind CSS", "TypeScript"] },
  { label: "DevOps", color: "#10B981", skills: ["Docker", "Kubernetes", "Jenkins", "Grafana", "Prometheus"] },
  { label: "Desktop", color: "#F97316", skills: ["Rust / Tauri", "Electron", "PyQt6"] },
  { label: "Databases", color: "#C9A84C", skills: ["Neo4j", "PostgreSQL", "MongoDB", "SQLite"] },
];

export const LANGUAGES: Language[] = [
  { lang: "Arabic", flag: "🇹🇳", level: "Native", pct: 100 },
  { lang: "English", flag: "🇬🇧", level: "Fluent (Professional)", pct: 95 },
  { lang: "French", flag: "🇫🇷", level: "Fluent (Bilingual)", pct: 90 },
  { lang: "Japanese", flag: "🇯🇵", level: "Beginner", pct: 35 },
  { lang: "Spanish", flag: "🇪🇸", level: "Beginner", pct: 20 },
];

export const EXPERIENCES: ExperienceEntry[] = [
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

export const EDUCATION_ITEMS: EducationEntry[] = [
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
    degree: "Licence — Industrial Automation & Computer Science",
    period: "2020 – 2024",
    color: "#C9A84C",
    logo: "/iset-logo.jpg",
    icon: "🏛️",
  },
  {
    school: "Lycée Ibn Abi Dhief",
    degree: "Baccalauréat Sciences Techniques",
    period: "2019 – 2020",
    color: "#10B981",
    icon: "📚",
  },
];
