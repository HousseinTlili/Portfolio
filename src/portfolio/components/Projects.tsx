import { useState } from "react";
import {
  BookOpen,
  Bot,
  Check,
  Hospital,
  Leaf,
  Mic,
  ShieldCheck,
  Stethoscope,
  Tent,
  X,
} from "lucide-react";
import { projects, type Dict, type Lang, type ProjectCategory, type ProjectId } from "../content";
import { useTiltEffect } from "../hooks/useTiltEffect";
import Reveal from "./Reveal";
import { Chip, SectionHeading } from "./ui";

const ICONS: Record<ProjectId, typeof Bot> = {
  kairos: Bot,
  sahtek: Stethoscope,
  campconnect: Tent,
  sgh: Hospital,
  jarvis: Mic,
  cothon: BookOpen,
  carbonos: Leaf,
};

type Project = (typeof projects)[number];

function KairosVisual() {
  return (
    <div className="pf-kairos" dir="ltr" aria-hidden="true">
      <div className="pf-kairos-request">
        <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-[var(--color-gold)]">
          <ShieldCheck size={13} />
          approval required
        </div>
        <p className="mt-3 text-sm text-white/85">browser.submit_form("payment")</p>
        <div className="mt-4 flex gap-2">
          <span className="pf-kairos-approve">
            <Check size={13} /> approve
          </span>
          <span className="pf-kairos-deny">
            <X size={13} /> deny
          </span>
        </div>
      </div>
      <div className="pf-kairos-log">
        {[
          ["09:41:02", "app.open", "a3f9…c21"],
          ["09:41:05", "browser.read", "7be1…04d"],
          ["09:41:09", "action.hold", "e52c…9aa"],
          ["09:41:12", "user.approve", "1f0d…b73"],
        ].map(([time, action, hash], index) => (
          <div key={time} className="pf-kairos-line" style={{ animationDelay: `${index * 0.6}s` }}>
            <span className="text-white/30">{time}</span>
            <span className="text-[var(--color-blue)]">{action}</span>
            <span className="ms-auto text-white/30">{hash}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  t,
  index,
  featured = false,
}: {
  project: Project;
  t: Dict;
  index: number;
  featured?: boolean;
}) {
  const { ref } = useTiltEffect<HTMLElement>({ maxTilt: featured ? 4 : 8 });
  const copy = t.projects.items[project.id];
  const Icon = ICONS[project.id];

  return (
    <article
      ref={ref}
      className={`tilt-card pf-card pf-project group h-full ${featured ? "p-6 md:p-10" : "p-6 md:p-7"}`}
      style={{ "--accent": project.accent } as React.CSSProperties}
    >
      <div className="pf-project-glow" />
      <div className={featured ? "grid items-center gap-10 lg:grid-cols-[1fr_1.05fr]" : ""}>
        <div className="relative flex h-full flex-col">
          <div className="flex items-center justify-between">
            <span className="pf-project-icon">
              <Icon size={20} />
            </span>
            <span className="font-mono text-xs text-white/30">
              {featured ? (
                <span className="pf-chip" style={{ color: project.accent }}>
                  {t.projects.featured}
                </span>
              ) : (
                String(index + 1).padStart(2, "0")
              )}
            </span>
          </div>
          <h3
            className={`mt-6 font-semibold tracking-tight text-white ${featured ? "text-4xl md:text-5xl" : "text-2xl"}`}
          >
            {project.name}
          </h3>
          <p className="mt-2 font-medium" style={{ color: project.accent }}>
            {copy.tagline}
          </p>
          <p className={`mt-4 leading-relaxed text-white/65 ${featured ? "text-lg" : ""}`}>
            {copy.description}
          </p>
          {copy.highlight && (
            <p className="mt-5 inline-flex self-start rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 font-mono text-xs text-white/75">
              {copy.highlight}
            </p>
          )}
          <div className="mt-auto flex flex-wrap gap-2 pt-6" dir="ltr">
            {project.stack.map((item) => (
              <Chip key={item}>{item}</Chip>
            ))}
          </div>
        </div>
        {featured && <KairosVisual />}
      </div>
    </article>
  );
}

export default function Projects({ t, lang }: { t: Dict; lang: Lang }) {
  const [filter, setFilter] = useState<ProjectCategory | "all">("all");
  const filters: (ProjectCategory | "all")[] = ["all", "ai", "fullstack", "distributed", "desktop"];
  const visible = projects.filter(
    (project) => filter === "all" || project.categories.includes(filter),
  );
  const featured = visible.find((project) => project.id === "kairos");
  const rest = visible.filter((project) => project.id !== "kairos");

  return (
    <section id="projects" className="pf-section">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          index="03"
          kicker={t.projects.kicker}
          title={t.projects.title}
          text={t.projects.text}
          scramble={lang !== "ar"}
        />

        <Reveal className="mb-8 flex flex-wrap gap-2">
          {filters.map((item) => {
            const count =
              item === "all"
                ? projects.length
                : projects.filter((p) => p.categories.includes(item)).length;
            return (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                aria-pressed={filter === item}
                className={`pf-filter ${filter === item ? "is-active" : ""}`}
              >
                {item === "all" ? t.projects.all : t.projects.filters[item]}
                <span>{count}</span>
              </button>
            );
          })}
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featured && (
            <div key={`featured-${filter}`} className="pf-pop md:col-span-2 lg:col-span-3">
              <ProjectCard project={featured} t={t} index={0} featured />
            </div>
          )}
          {rest.map((project, index) => (
            <div
              key={`${project.id}-${filter}`}
              className="pf-pop"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <ProjectCard project={project} t={t} index={projects.indexOf(project)} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
