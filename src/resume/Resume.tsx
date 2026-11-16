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
  { label: "Frontend & Mobile", value: "Angular · React · Next.js · Flutter · Tailwind CSS" },
  {
    label: "Cloud & DevOps",
    value: "AWS (Fundamentals) · Docker · Kubernetes · Jenkins · GitHub Actions",
  },
  { label: "Données", value: "PostgreSQL · MongoDB · Redis · SQLite · Neo4j · ChromaDB" },
  {
    label: "IA & Agents",
    value: "RAG · GraphRAG · LangGraph · QLoRA · LLM locaux (Ollama)",
  },
  {
    label: "Messaging & Observabilité",
    value: "RabbitMQ · Prometheus · Grafana · SonarQube",
  },
];

const projects = [
  {
    name: "Kairos — Assistant IA de bureau avec contrôle des actions",
    description:
      "Aide l’utilisateur à interagir avec ses applications et son navigateur, tout en soumettant les actions sensibles à une approbation explicite et en conservant un journal local vérifiable.",
    stack: "Tauri · Rust · React · Hermes Agent · 740+ tests automatisés rapportés · pré-version",
  },
  {
    name: "SahTek — Plateforme de gestion de cabinet médical (web + mobile)",
    description:
      "Aide les médecins à centraliser les dossiers patients, organiser les rendez-vous et structurer les échanges cliniques selon leurs spécialités. Une API unique alimente le site patient (ar/fr), l’espace médecin, un back-office d’administration et l’application mobile.",
    stack: "Next.js · React · Flutter · FastAPI · PostgreSQL · Redis · Docker Compose",
  },
  {
    name: "CampConnect — Plateforme de camping et d’aventure en Tunisie",
    description:
      "Centralise la découverte de campings, les réservations, la planification de sorties et la location d’équipements.",
    stack:
      "Spring Boot · Angular · MongoDB · 12 modules métier · Jenkins · Kubernetes · Prometheus · Grafana",
  },
  {
    name: "SGH — Système de gestion hospitalière",
    description:
      "Coordonne les étapes du parcours hospitalier, de l’admission aux consultations, analyses de laboratoire et pharmacie, à travers des services distribués.",
    stack: "Microservices · RabbitMQ · Keycloak · PostgreSQL · Angular",
  },
  {
    name: "Jarvis — Assistant IA local pour ordinateur",
    description:
      "Permet de rechercher dans les documents, d’interagir par la voix et d’automatiser certaines tâches locales et planifiées.",
    stack: "RAG · ChromaDB · Whisper · Kokoro TTS · Ollama · Tauri · React · FastAPI",
  },
  {
    name: "Cothon — Espace de travail et de productivité pour étudiants",
    description:
      "Centralise cours, notes et fichiers, facilite les révisions avec répétition espacée et permet d’interroger des PDF avec une IA contextuelle.",
    stack: "Tauri v2 · Rust · React · SQLite",
  },
  {
    name: "CarbonOS — Plateforme de bilan carbone",
    description:
      "Aide les organisations à structurer le suivi de leurs émissions de gaz à effet de serre et leur démarche de conformité ISO 14064-1.",
    stack: "FastAPI · PostgreSQL · microservice ML",
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
            <h2>Contact</h2>
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
            <h2>Expertise</h2>
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
                Disponible dès jan. 2027
              </span>
            </div>
            <h1>
              Tlili <span>Houssein</span>
            </h1>
            <p className="role">Étudiant Ingénieur Logiciel — Dernière année à ESPRIT</p>
            <p className="objective">
              En recherche d’un <strong>PFE de 6 mois à partir de janvier 2027</strong>
            </p>
            <div className="hero-summary">
              Étudiant ingénieur en dernière année à ESPRIT, spécialisé en génie logiciel.
              Expérience en IA appliquée, systèmes distribués, développement full-stack et DevOps,
              consolidée par deux stages en entreprise. Je conçois des outils qui simplifient les
              processus métier, centralisent l’information et automatisent les tâches.
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
                <strong>740+</strong>
                <span>tests automatisés</span>
              </div>
            </div>
          </header>

          <section>
            <SectionTitle icon={BriefcaseBusiness}>Expérience</SectionTitle>
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
                  Conception de <strong>KUSOR</strong>, plateforme d’IA souveraine aidant les
                  équipes conformité à rechercher, comprendre et analyser les textes réglementaires
                  de la Banque Centrale de Tunisie, avec des modules KYC et AML. L’analyse d’un
                  dossier passe de jusqu’à 4 h à moins de 30 s.
                </p>
                <p>
                  Recherche hybride : BM25, recherche vectorielle, graphe temporel Neo4j, recherche
                  structurée d’obligations, fusion RRF, Cross-Encoder et LangGraph. Fine-tuning Qwen
                  2.5-7B (QLoRA), Angular (14 modules) et journalisation d’audit SHA-256 — 97,96 %
                  sur le benchmark d’évaluation.
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
                  Développement d’<strong>AlertingSys</strong>, solution de supervision industrielle
                  qui détecte les anomalies et déclenche des alertes en temps réel pour faciliter le
                  suivi des équipements et la maintenance.
                </p>
                <p className="tech-line">
                  Microservices .NET · RabbitMQ · moteur ML Python · dashboard Angular · Docker
                  Compose
                </p>
              </article>
            </div>
          </section>

          <section>
            <SectionTitle icon={GraduationCap}>Formation & certifications</SectionTitle>
            <div className="education-grid">
              <article>
                <time>2024 — présent</time>
                <h3>Cycle Ingénieur en Génie Logiciel</h3>
                <p>ESPRIT · Tunis</p>
              </article>
              <article>
                <time>2020 — 2024</time>
                <h3>Licence en Automatisme & Informatique Industrielle</h3>
                <p>ISET</p>
              </article>
            </div>
            <p className="certifications">
              <span>AWS Cloud Fundamentals (ESPRIT)</span>
              <span>Certification Blockchain</span>
            </p>
          </section>

          <section className="projects-section">
            <SectionTitle icon={Sparkles}>Projets sélectionnés</SectionTitle>
            <div className="project-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.name}>
                  <div className="project-heading">
                    <h3>{project.name}</h3>
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
