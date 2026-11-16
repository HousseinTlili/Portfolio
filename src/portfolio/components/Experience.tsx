import { Building2, Check, Factory } from "lucide-react";
import { experienceStacks, type Dict, type Lang } from "../content";
import { useTiltEffect } from "../hooks/useTiltEffect";
import Reveal from "./Reveal";
import { Chip, SectionHeading } from "./ui";

function ExperienceCard({
  company,
  role,
  period,
  points,
  stack,
  icon: Icon,
  accent,
}: {
  company: string;
  role: string;
  period: string;
  points: string[];
  stack: string[];
  icon: typeof Building2;
  accent: string;
}) {
  const { ref } = useTiltEffect<HTMLElement>({ maxTilt: 4, scale: 1.01 });
  return (
    <article ref={ref} className="tilt-card pf-card p-6 md:p-9">
      <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
        <div className="flex items-center gap-4">
          <span
            className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-white/10"
            style={{ background: `${accent}1a`, color: accent }}
          >
            <Icon size={21} />
          </span>
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-white md:text-2xl">
              {company}
            </h3>
            <p className="mt-1 text-[var(--color-muted)]">{role}</p>
          </div>
        </div>
        <span className="pf-chip self-start font-mono">{period}</span>
      </div>
      <ul className="mt-7 grid gap-3.5">
        {points.map((point) => (
          <li key={point} className="flex gap-3 leading-relaxed text-white/75">
            <Check size={17} className="mt-1 shrink-0" style={{ color: accent }} />
            <span>{point}</span>
          </li>
        ))}
      </ul>
      <div className="mt-7 flex flex-wrap gap-2" dir="ltr">
        {stack.map((item) => (
          <Chip key={item}>{item}</Chip>
        ))}
      </div>
    </article>
  );
}

export default function Experience({ t, lang }: { t: Dict; lang: Lang }) {
  const e = t.experience;
  return (
    <section id="experience" className="pf-section">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading index="02" kicker={e.kicker} title={e.title} scramble={lang !== "ar"} />
        <div className="pf-timeline">
          <Reveal className="pf-timeline-item">
            <span className="pf-timeline-dot" />
            <ExperienceCard
              company="Attijari Bank Tunisia"
              role={e.role}
              period={e.attijari.period}
              points={e.attijari.points}
              stack={experienceStacks.attijari}
              icon={Building2}
              accent="#58a6ff"
            />
          </Reveal>
          <Reveal className="pf-timeline-item" delay={100}>
            <span className="pf-timeline-dot is-gold" />
            <ExperienceCard
              company="COFAT"
              role={e.role}
              period={e.cofat.period}
              points={e.cofat.points}
              stack={experienceStacks.cofat}
              icon={Factory}
              accent="#c9a84c"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
