import {
  BrainCircuit,
  FileCheck2,
  Fingerprint,
  GitMerge,
  MessageSquareText,
  Search,
} from "lucide-react";
import type { ReactNode } from "react";
import type { Dict, Lang } from "../content";
import Reveal from "./Reveal";
import { SectionHeading } from "./ui";

const METRIC_VALUES = ["< 30 s", "97.96%", "14", "7B"];

function Connector({ targets, sources = [50] }: { targets: number[]; sources?: number[] }) {
  const paths = sources.flatMap((source) =>
    targets.map((target) => `M0 ${source} C 55 ${source}, 45 ${target}, 100 ${target}`),
  );
  return (
    <>
      <svg
        className="pf-connector hidden lg:block rtl:-scale-x-100"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {paths.map((d, index) => (
          <g key={d}>
            <path d={d} className="pf-connector-base" vectorEffect="non-scaling-stroke" />
            <path
              d={d}
              pathLength={100}
              className="pf-connector-pulse"
              vectorEffect="non-scaling-stroke"
              style={{ animationDelay: `${index * -0.45}s` }}
            />
          </g>
        ))}
      </svg>
      <span className="pf-vline lg:hidden" aria-hidden="true" />
    </>
  );
}

function Stage({
  children,
  icon,
  index,
  tone = "blue",
}: {
  children: ReactNode;
  icon?: ReactNode;
  index: number;
  tone?: "blue" | "gold" | "teal";
}) {
  return (
    <div className={`pf-stage pf-stage-${tone}`} style={{ animationDelay: `${index * 0.45}s` }}>
      {icon && <span className="pf-stage-icon">{icon}</span>}
      <span>{children}</span>
    </div>
  );
}

export default function SystemSection({ t, lang }: { t: Dict; lang: Lang }) {
  const s = t.system;

  return (
    <section id="system" className="pf-section">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          index="01"
          kicker={s.kicker}
          title={s.title}
          text={s.text}
          scramble={lang !== "ar"}
          aside={
            <div className="flex flex-wrap gap-2">
              {["BCT", "KYC", "AML", "GraphRAG"].map((tag) => (
                <span key={tag} className="pf-chip">
                  {tag}
                </span>
              ))}
            </div>
          }
        />

        <Reveal className="pf-panel overflow-hidden">
          <div className="flex items-center justify-between border-b border-white/[0.07] px-5 py-4 md:px-7">
            <span className="font-mono text-xs text-white/45" dir="ltr">
              kusor://retrieval-pipeline
            </span>
            <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--color-teal)]">
              <span className="pf-live-dot" />
              {s.live}
            </span>
          </div>

          <div className="pf-pipeline p-5 md:p-8">
            <div className="pf-col justify-center">
              <Stage index={0} icon={<MessageSquareText size={15} />} tone="gold">
                {s.query}
              </Stage>
            </div>
            <Connector targets={[11, 37, 63, 89]} />
            <div className="pf-col pf-col-retrievers">
              {s.retrievers.map((label, index) => (
                <Stage key={label} index={1 + index * 0.25} icon={<Search size={14} />}>
                  {label}
                </Stage>
              ))}
            </div>
            <Connector sources={[11, 37, 63, 89]} targets={[50]} />
            <div className="pf-col justify-center">
              <Stage index={2} icon={<GitMerge size={15} />}>
                {s.fusion}
              </Stage>
            </div>
            <Connector targets={[50]} />
            <div className="pf-col justify-center">
              <Stage index={3} icon={<FileCheck2 size={15} />}>
                {s.rerank}
              </Stage>
            </div>
            <Connector targets={[50]} />
            <div className="pf-col justify-center">
              <Stage index={4} icon={<BrainCircuit size={15} />} tone="teal">
                {s.agent}
              </Stage>
            </div>
            <Connector targets={[36, 64]} />
            <div className="pf-col pf-col-outputs justify-center">
              <Stage index={5} icon={<MessageSquareText size={15} />} tone="gold">
                {s.answer}
              </Stage>
              <Stage index={5.25} icon={<Fingerprint size={15} />} tone="gold">
                {s.audit}
              </Stage>
            </div>
          </div>

          <div className="grid grid-cols-2 border-t border-white/[0.07] lg:grid-cols-4">
            {METRIC_VALUES.map((value, index) => (
              <div key={value} className="pf-metric">
                <strong dir="ltr">{value}</strong>
                <span>{s.metrics[index]}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
