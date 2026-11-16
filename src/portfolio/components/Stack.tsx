import {
  Activity,
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  MonitorSmartphone,
  Server,
} from "lucide-react";
import { skillGroups, type Dict, type Lang, type SkillGroupId } from "../content";
import { useTiltEffect } from "../hooks/useTiltEffect";
import Reveal from "./Reveal";
import { SectionHeading } from "./ui";

const ICONS: Record<SkillGroupId, typeof Code2> = {
  languages: Code2,
  backend: Server,
  frontend: MonitorSmartphone,
  cloud: Cloud,
  data: Database,
  ai: BrainCircuit,
  observability: Activity,
};

const ORDER: SkillGroupId[] = [
  "ai",
  "languages",
  "backend",
  "frontend",
  "cloud",
  "data",
  "observability",
];

function SkillCard({ id, label, items }: { id: SkillGroupId; label: string; items: string[] }) {
  const { ref } = useTiltEffect<HTMLDivElement>({ maxTilt: 7 });
  const Icon = ICONS[id];
  const wide = id === "ai";
  return (
    <div ref={ref} className={`tilt-card pf-card h-full p-6 ${id === "ai" ? "pf-card-ai" : ""}`}>
      <div className="flex items-center justify-between">
        <span
          className="pf-project-icon"
          style={{ "--accent": id === "ai" ? "#c9a84c" : "#58a6ff" } as React.CSSProperties}
        >
          <Icon size={19} />
        </span>
        <span className="font-mono text-xs text-white/30">
          {String(items.length).padStart(2, "0")}
        </span>
      </div>
      <h3 className="mt-6 text-lg font-semibold text-white">{label}</h3>
      <div className={`mt-4 flex flex-wrap gap-2 ${wide ? "md:max-w-xl" : ""}`} dir="ltr">
        {items.map((item) => (
          <span key={item} className="pf-skill">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Stack({ t, lang }: { t: Dict; lang: Lang }) {
  const groups = ORDER.map((id) => skillGroups.find((group) => group.id === id)!);
  return (
    <section id="stack" className="pf-section">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          index="04"
          kicker={t.stack.kicker}
          title={t.stack.title}
          text={t.stack.text}
          scramble={lang !== "ar"}
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((group, index) => (
            <Reveal
              key={group.id}
              delay={index * 60}
              className={group.id === "ai" ? "sm:col-span-2" : ""}
            >
              <SkillCard id={group.id} label={t.stack.groups[group.id]} items={group.items} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
