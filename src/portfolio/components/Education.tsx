import { Award, GraduationCap, Languages } from "lucide-react";
import type { Dict, Lang } from "../content";
import { useTiltEffect } from "../hooks/useTiltEffect";
import Reveal from "./Reveal";
import { SectionHeading } from "./ui";

function DegreeCard({
  title,
  school,
  period,
  index,
}: {
  title: string;
  school: string;
  period: string;
  index: number;
}) {
  const { ref } = useTiltEffect<HTMLDivElement>({ maxTilt: 6 });
  return (
    <div ref={ref} className="tilt-card pf-card flex h-full flex-col p-7 md:p-8">
      <div className="flex items-center justify-between">
        <span
          className="pf-project-icon"
          style={{ "--accent": index === 0 ? "#58a6ff" : "#3dd6b5" } as React.CSSProperties}
        >
          <GraduationCap size={20} />
        </span>
        <span className="font-mono text-xs text-white/40">{period}</span>
      </div>
      <h3 className="mt-10 text-2xl font-semibold leading-snug tracking-tight text-white">
        {title}
      </h3>
      <p className="mt-3 text-[var(--color-muted)]">{school}</p>
    </div>
  );
}

export default function Education({ t, lang }: { t: Dict; lang: Lang }) {
  const e = t.education;
  const { ref } = useTiltEffect<HTMLDivElement>({ maxTilt: 5 });

  return (
    <section id="education" className="pf-section">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading index="05" kicker={e.kicker} title={e.title} scramble={lang !== "ar"} />
        <div className="grid gap-5 lg:grid-cols-3">
          {e.degrees.map((degree, index) => (
            <Reveal key={degree.title} delay={index * 80}>
              <DegreeCard {...degree} index={index} />
            </Reveal>
          ))}
          <Reveal delay={160}>
            <div ref={ref} className="tilt-card pf-card h-full p-7 md:p-8">
              <div className="flex items-center gap-3 text-white">
                <Award size={18} className="text-[var(--color-gold)]" />
                <h3 className="font-semibold">{e.certTitle}</h3>
              </div>
              <ul className="mt-5 grid gap-2.5">
                {e.certs.map((cert) => (
                  <li
                    key={cert}
                    className="rounded-xl border border-white/[0.07] bg-white/[0.03] px-4 py-3 text-sm text-white/80"
                  >
                    {cert}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex items-center gap-3 text-white">
                <Languages size={18} className="text-[var(--color-teal)]" />
                <h3 className="font-semibold">{e.langTitle}</h3>
              </div>
              <ul className="mt-4 divide-y divide-white/[0.07]">
                {e.languages.map((language) => (
                  <li
                    key={language.name}
                    className="flex items-center justify-between py-2.5 text-sm"
                  >
                    <span className="text-white/85">{language.name}</span>
                    <span className="text-[var(--color-muted)]">{language.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
