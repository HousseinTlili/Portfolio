import { useRef } from "react";
import { ArrowDown, ArrowUpRight, Mail, MousePointer2 } from "lucide-react";
import { marquee, profile, type Dict, type Lang } from "../content";
import { useIsDesktop, useReducedMotion } from "../hooks/useMediaQuery";
import NeuralBackground from "./NeuralBackground";
import ParticlePortrait from "./ParticlePortrait";
import ScrambleText from "./ScrambleText";
import { GithubIcon, LinkedinIcon, MagneticLink } from "./ui";

const STAT_VALUES = ["< 30 s", "97.96%", "740+", "2"];

export default function Hero({ t, lang }: { t: Dict; lang: Lang }) {
  const isDesktop = useIsDesktop();
  const reduced = useReducedMotion();
  const scramble = lang !== "ar";
  const showOrbs = isDesktop && !reduced;
  const sectionRef = useRef<HTMLElement>(null);
  const anchorRef = useRef<HTMLDivElement>(null);

  const socials = [
    { href: profile.github, label: "GitHub", icon: GithubIcon },
    { href: profile.linkedin, label: "LinkedIn", icon: LinkedinIcon },
    { href: `mailto:${profile.email}`, label: "Email", icon: Mail },
  ];

  return (
    <section id="home" ref={sectionRef} className="relative isolate overflow-hidden pt-28 md:pt-32">
      {isDesktop && !reduced && <NeuralBackground />}
      <div className="pf-grid-bg pointer-events-none absolute inset-0 -z-10 opacity-40" />
      <div className="pf-hero-glow pointer-events-none absolute inset-0 -z-10" />
      {showOrbs && (
        <ParticlePortrait
          imageSrc={profile.cutout}
          containerRef={sectionRef}
          anchorRef={anchorRef}
        />
      )}

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-16 md:px-8 lg:grid-cols-[1.18fr_0.82fr] lg:gap-10">
        <div className="pf-hero-enter relative z-[2]">
          <p className="pf-pill">
            <span className="pf-live-dot" />
            {t.hero.available}
          </p>

          <h1 className="pf-display mt-8" aria-label={t.hero.lines.join(" ")}>
            <ScrambleText text={t.hero.lines[0]} enabled={scramble} speed={35} className="block" />
            <ScrambleText
              text={t.hero.lines[1]}
              enabled={scramble}
              speed={35}
              delay={120}
              className="pf-display-accent block"
            />
            <ScrambleText
              text={t.hero.lines[2]}
              enabled={scramble}
              speed={35}
              delay={240}
              className="block"
            />
          </h1>

          <p className="mt-8 font-mono text-sm uppercase tracking-[0.14em] text-[var(--color-blue)]">
            {t.hero.role}
          </p>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-[var(--color-muted)] md:text-xl">
            {t.hero.intro}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <MagneticLink href="#projects" className="pf-btn-primary h-12 px-6">
              {t.hero.explore}
              <ArrowUpRight size={17} className="rtl:-scale-x-100" />
            </MagneticLink>
            <MagneticLink href="#contact" className="pf-btn-ghost h-12 px-6">
              {t.hero.contact}
            </MagneticLink>
            <div className="ms-1 flex items-center gap-2">
              {socials.map(({ href, label, icon: Icon }) => (
                <MagneticLink
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  strength={0.4}
                  className="pf-icon-button h-12 w-12"
                >
                  <Icon width={18} height={18} />
                </MagneticLink>
              ))}
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[470px]">
          <div className="pf-portrait-stage">
            <div className="pf-portrait-halo" aria-hidden="true" />
            <div className="pf-portrait-ring" aria-hidden="true" />
            <div className="pf-portrait-ring is-inner" aria-hidden="true" />

            <div className="pf-portrait-meta top-0 z-[2]">
              <span>ID · HT-2027</span>
              <span dir="ltr">36.81°N 10.09°E</span>
            </div>

            <div
              ref={anchorRef}
              role="img"
              aria-label={`${profile.name} portrait`}
              className={`relative aspect-[1005/914] w-full ${showOrbs ? "cursor-crosshair" : ""}`}
            >
              {!showOrbs && (
                <img src={profile.cutout} alt="" className="pf-portrait-img" draggable={false} />
              )}
            </div>

            <div className="pf-portrait-meta bottom-0 z-[2]">
              <span>{profile.name}</span>
              {showOrbs && (
                <span className="flex items-center gap-1.5 text-[var(--color-gold)]">
                  <MousePointer2 size={11} />
                  {t.hero.hint}
                </span>
              )}
            </div>
          </div>

          <span
            className="pf-float-chip start-[-2.5rem] top-[22%]"
            style={{ animationDelay: "0s" }}
          >
            RAG · LangGraph
          </span>
          <span className="pf-float-chip end-[-1.5rem] top-[48%]" style={{ animationDelay: "-2s" }}>
            Rust · Tauri
          </span>
          <span
            className="pf-float-chip bottom-[18%] start-[-1.5rem]"
            style={{ animationDelay: "-4s" }}
          >
            .NET · RabbitMQ
          </span>
        </div>
      </div>

      <div className="relative z-[2] mx-auto max-w-7xl px-5 md:px-8">
        <div className="pf-stats">
          {STAT_VALUES.map((value, index) => (
            <div key={value} className="pf-stat">
              <strong dir="ltr">{value}</strong>
              <span>{t.hero.stats[index]}</span>
            </div>
          ))}
        </div>
        <a href="#system" className="pf-scroll-cue" aria-label={t.hero.scroll}>
          <ArrowDown size={14} />
          {t.hero.scroll}
        </a>
      </div>

      <div className="pf-marquee relative z-[2] mt-14" dir="ltr" aria-hidden="true">
        <div className="pf-marquee-track">
          {[...marquee, ...marquee].map((item, index) => (
            <span key={`${item}-${index}`}>
              {item}
              <i />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
