import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Download,
  Globe2,
  GraduationCap,
  Mail,
  MapPin,
  Network,
  Phone,
  Printer,
  Sparkles,
} from "lucide-react";
import "./resume.css";

const contactItems = [
  { icon: Mail, label: "tlilihussein@gmail.com", href: "mailto:tlilihussein@gmail.com" },
  { icon: Phone, label: "+216 96 334 161", href: "tel:+21696334161" },
  { icon: MapPin, label: "Manouba, Tunisie" },
  {
    icon: Code2,
    label: "github.com/HousseinTlili",
    href: "https://github.com/HousseinTlili",
  },
  {
    icon: Network,
    label: "linkedin.com/in/tlili-houssein",
    href: "https://linkedin.com/in/tlili-houssein",
  },
  {
    icon: Globe2,
    label: "houssein-tlili.vercel.app",
    href: "https://houssein-tlili.vercel.app",
  },
];

const skillGroups = [
  { label: "Langages", value: "C# · Java · Python · TypeScript · Rust · Dart · SQL" },
  { label: "Backend", value: ".NET / ASP.NET Core · Spring Boot · FastAPI · Node.js" },
  { label: "Frontend & Mobile", value: "Angular · React 19 · Flutter · Tailwind CSS" },
  {
    label: "Cloud & DevOps",
    value: "AWS (Fundamentals) · Docker · Kubernetes · Jenkins · GitHub Actions",
  },
  { label: "Bases de données", value: "PostgreSQL · MongoDB · Redis · SQLite · Neo4j · ChromaDB" },
  {
    label: "Messaging & Observabilité",
    value: "RabbitMQ · Prometheus · Grafana · SonarQube",
  },
  {
    label: "IA / ML",
    value: "LLM multi-fournisseurs & modèles locaux (Ollama) · RAG, GraphRAG · QLoRA · LangGraph",
  },
  {
    label: "Desktop",
    value: "Tauri v2 (Rust) · PyQt6",
  },
];

const projects = [
  {
    name: "SahTek — Plateforme de santé",
    tag: "Flutter · React · FastAPI",
    description:
      "App mobile Flutter (~23 000 lignes) et portail médecin React ; backend FastAPI + PostgreSQL + Redis. Verrouillage distribué des créneaux (mutex Redis), replanification automatique, moteur clinique (PHQ-9, GAD-7…).",
    stack: "Flutter · React · FastAPI · PostgreSQL · Redis",
  },
  {
    name: "CampConnect — Plateforme universitaire",
    tag: "Spring Boot · Angular · MongoDB",
    description:
      "12 modules métier · CI/CD Jenkins · SonarQube · Kubernetes (6 nœuds) · Prometheus + Grafana.",
    stack: "Spring Boot · Angular · MongoDB · Kubernetes · Docker",
  },
  {
    name: "CarbonOS — Bilan carbone GES",
    tag: "FastAPI + microservice ML",
    description:
      "Plateforme visant la conformité ISO 14064-1 · FastAPI, PostgreSQL, microservice ML Flask.",
    stack: "FastAPI · PostgreSQL · Flask (ML) · Docker",
  },
  {
    name: "Jarvis — Assistant IA de bureau",
    tag: "Tauri/Rust + React + FastAPI",
    description:
      "12 outils autonomes, RAG ChromaDB, routage multi-modèles (OpenAI, Gemini, Anthropic, Ollama), TTS local.",
    stack: "Tauri · Rust · React · ChromaDB · Ollama · Whisper",
  },
  {
    name: "Cothon — Station de travail souveraine",
    tag: "Tauri v2 + React 19",
    description:
      "Backend Rust, recherche plein texte SQLite FTS5, planificateur SM-2, lecture PDF native.",
    stack: "Tauri v2 · Rust · React 19 · SQLite FTS5",
  },
  {
    name: "Navis Browser — Fork de Zen Browser",
    tag: "Gecko · C++ · JavaScript",
    description:
      "HTTPS-only, uBlock Origin, sidebar IA locale Ollama + fallback Anthropic API.",
    stack: "Gecko · C++ · JavaScript · Ollama · Anthropic API",
  },
];

function SectionTitle({
  icon: Icon,
  children,
}: {
  icon: typeof BriefcaseBusiness;
  children: React.ReactNode;
}) {
  return (
    <div className="section-title">
      <span className="section-icon">
        <Icon size={14} strokeWidth={2.2} />
      </span>
      <h2>{children}</h2>
      <span className="section-rule" />
    </div>
  );
}

export default function Resume() {
  const print = () => window.print();

  return (
    <main className="app-shell">
      <div className="toolbar" aria-label="Actions du CV">
        <p>
          <span className="toolbar-dot" />
          <a href="#home" className="toolbar-back">
            ← Portfolio
          </a>
          <span>CV interactif · Version française</span>
        </p>
        <div className="toolbar-actions">
          <button type="button" onClick={print}>
            <Printer size={15} />
            Imprimer
          </button>
          <a
            href="/CV%20Houssein%20Tlili.pdf"
            download="CV Houssein Tlili.pdf"
            className="toolbar-primary"
          >
            <Download size={15} />
            Télécharger PDF
          </a>
        </div>
      </div>

      <article className="resume">
        <aside className="sidebar">
          <div className="sidebar-glow" />
          <div className="portrait-wrap">
            <div className="portrait-ring">
              <img src="/houssein-tlili.png" alt="Portrait de Tlili Houssein" />
            </div>
            <span className="availability-dot" title="Disponible pour un PFE" />
          </div>

          <section className="sidebar-section">
            <h2>Coordonnées</h2>
            <div className="contact-list">
              {contactItems.map(({ icon: Icon, label, href }) => {
                const content = (
                  <>
                    <Icon size={13} aria-hidden="true" />
                    <span>{label}</span>
                    {href && <ArrowUpRight className="contact-arrow" size={11} />}
                  </>
                );
                return href ? (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                  >
                    {content}
                  </a>
                ) : (
                  <div key={label}>{content}</div>
                );
              })}
            </div>
          </section>

          <section className="sidebar-section skills-section">
            <h2>Compétences</h2>
            <div className="skills-list">
              {skillGroups.map((skill) => (
                <div key={skill.label}>
                  <h3>{skill.label}</h3>
                  <p>{skill.value}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="sidebar-section">
            <h2>Langues</h2>
            <div className="language-list">
              {[
                ["Arabe", "Langue maternelle"],
                ["Français", "Courant"],
                ["Anglais", "Courant"],
                ["Japonais", "Conversationnel"],
              ].map(([language, level]) => (
                <div className="language" key={language}>
                  <div>
                    <strong>{language}</strong>
                    <span>{level}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </aside>

        <div className="content">
          <header className="hero">
            <div className="name-line">
              <span className="monogram">TH</span>
              <span className="status-pill">
                <Sparkles size={11} />
                Disponible dès janv. 2027
              </span>
            </div>
            <h1>
              Tlili <span>Houssein</span>
            </h1>
            <p className="role">
              Étudiant Ingénieur Logiciel — Dernière année à ESPRIT · En recherche d’un PFE de 6 mois
            </p>
            <div className="hero-summary">
              Étudiant ingénieur en dernière année à ESPRIT, spécialisé en génie logiciel.
              Expérience en systèmes distribués, développement full-stack et DevOps,
              consolidée par deux stages en entreprise. Recherche un PFE de 6 mois en développement
              logiciel, avec la perspective d’un poste à l’issue du stage. Passionné par l’IA
              appliquée et le développement d’outils sur mesure.
            </div>
            <div className="impact-row">
              <div>
                <strong>&lt; 30 s</strong>
                <span>analyse réglementaire</span>
              </div>
              <div>
                <strong>97,96 %</strong>
                <span>score d’évaluation IA</span>
              </div>
              <div>
                <strong>2 stages</strong>
                <span>Attijari Bank &amp; COFAT</span>
              </div>
            </div>
          </header>

          <section>
            <SectionTitle icon={BriefcaseBusiness}>Expérience professionnelle</SectionTitle>
            <div className="timeline">
              <article className="timeline-item">
                <span className="timeline-dot" />
                <div className="job-header">
                  <div>
                    <span className="company">Attijari Bank Tunisia</span>
                    <h3>Stagiaire Ingénieur Logiciel</h3>
                  </div>
                  <time>Juil. — Août 2026</time>
                </div>
                <p>
                  Conception de <strong>KUSOR</strong>, plateforme d’IA souveraine de veille réglementaire pour la Banque Centrale de Tunisie (BCT), avec modules KYC et AML.
                </p>
                <p>
                  Moteur GraphRAG hybride 4 canaux (BM25, Dense, Neo4j) · RRF · Cross-Encoder · LangGraph.
                  Fine-tuning Qwen-2.5-7B (QLoRA) · frontend Angular 21 (14 modules) · audit SHA-256.
                </p>
              </article>

              <article className="timeline-item">
                <span className="timeline-dot" />
                <div className="job-header">
                  <div>
                    <span className="company">COFAT</span>
                    <h3>Stagiaire Ingénieur Logiciel</h3>
                  </div>
                  <time>Juil. — Août 2025</time>
                </div>
                <p>
                  Conception d’<strong>AlertingSys</strong>, alertes temps réel en architecture microservices .NET + RabbitMQ.
                </p>
                <p className="tech-line">
                  Moteur ML Python · dashboard Angular de monitoring · Docker Compose
                </p>
              </article>
            </div>
          </section>

          <section>
            <SectionTitle icon={GraduationCap}>Formation &amp; Certifications</SectionTitle>
            <div className="education-grid">
              <article>
                <time>2024 — en cours</time>
                <h3>Cycle Ingénieur en Génie Logiciel</h3>
                <p>ESPRIT · Tunis</p>
              </article>
              <article>
                <time>2020 — 2024</time>
                <h3>Licence en Automatisme et Informatique Industrielle</h3>
                <p>ISET</p>
              </article>
            </div>
            <p className="certifications">
              <span>AWS Cloud Fundamentals (formation via ESPRIT)</span>
              <span>Certification Blockchain</span>
            </p>
          </section>

          <section className="projects-section">
            <SectionTitle icon={Sparkles}>Projets techniques</SectionTitle>
            <div className="project-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.name}>
                  <div className="project-heading">
                    <h3>{project.name}</h3>
                    <span>{project.tag}</span>
                  </div>
                  <p>{project.description}</p>
                  <small>{project.stack}</small>
                </article>
              ))}
            </div>
          </section>

          <footer>
            <span>TLILI HOUSSEIN · 2026</span>
            <span>Ingénierie logicielle · IA · Systèmes distribués</span>
          </footer>
        </div>
      </article>
    </main>
  );
}
