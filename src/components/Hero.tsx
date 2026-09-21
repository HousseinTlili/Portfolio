import React from "react";
import { IconGithub, IconLinkedin, IconMail, FlagTN } from "./Icons";
import { PERSONAL_INFO } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";
import { UI_TRANSLATIONS } from "../data/translations";

export default function HeroSection() {
  const { lang, isRtl } = useLanguage();
  const t = UI_TRANSLATIONS[lang].hero;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      style={{ background: "#0D1117" }}
      aria-label="Hero Section"
    >
      {/* Grid background pattern */}
      <div className="absolute inset-0 grid-bg opacity-35 pointer-events-none" />

      {/* Radial accent glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 75% 55% at 30% 45%, rgba(46,95,163,0.18) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column (Content) */}
          <div className="lg:col-span-7 z-10">
            {/* Available badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 animate-fade-in-up"
              style={{
                background: "rgba(63,185,80,0.08)",
                border: "1px solid rgba(63,185,80,0.3)",
              }}
            >
              <span className="w-2.5 h-2.5 rounded-full pulse-dot" style={{ background: "#3FB950" }} />
              <span className="text-xs font-medium font-mono-tech" style={{ color: "#3FB950" }}>
                {t.availableBadge}
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.12] mb-6 animate-fade-in-up delay-100"
              style={{ fontFamily: isRtl ? "'Cairo', sans-serif" : "'Space Grotesk', sans-serif" }}
            >
              <span style={{ color: "#8B949E" }}>{t.building}</span>
              <br />
              <span className="gradient-text">{t.intelligent}</span>
              <br />
              <span style={{ color: "#E6EDF3" }}>{t.systems}</span>
            </h1>

            {/* Subtitle */}
            <p
              className="text-base sm:text-lg leading-relaxed mb-8 animate-fade-in-up delay-200"
              style={{ color: "#8B949E", maxWidth: "540px" }}
            >
              {t.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-10 animate-fade-in-up delay-300">
              <a
                href="#projects"
                className="px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:opacity-95 hover:scale-105 active:scale-95 text-center"
                style={{
                  background: "linear-gradient(135deg, #2E5FA3, #1c4275)",
                  color: "#E6EDF3",
                  fontFamily: isRtl ? "'Cairo', sans-serif" : "'Space Grotesk', sans-serif",
                  boxShadow: "0 0 28px rgba(88,166,255,0.25)",
                  border: "1px solid rgba(88,166,255,0.3)",
                }}
              >
                {t.exploreProjects}
              </a>
              <a
                href="#contact"
                className="px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:bg-blue-500/10 hover:border-blue-400 text-center"
                style={{
                  border: "1px solid rgba(88,166,255,0.4)",
                  color: "#58A6FF",
                  fontFamily: isRtl ? "'Cairo', sans-serif" : "'Space Grotesk', sans-serif",
                  background: "rgba(22, 27, 34, 0.4)",
                }}
              >
                {t.getInTouch}
              </a>
            </div>

            {/* Social icons & location */}
            <div className="flex flex-wrap items-center gap-4 animate-fade-in-up delay-400">
              <div className="flex items-center gap-3">
                {[
                  { icon: <IconGithub size={19} />, href: PERSONAL_INFO.github, label: "GitHub Profile" },
                  { icon: <IconLinkedin size={19} />, href: PERSONAL_INFO.linkedin, label: "LinkedIn Profile" },
                  { icon: <IconMail size={19} />, href: `mailto:${PERSONAL_INFO.email}`, label: "Send Email" },
                ].map(({ icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
                    style={{
                      background: "rgba(22, 27, 34, 0.8)",
                      border: "1px solid rgba(48, 54, 61, 0.8)",
                      color: "#8B949E",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#58A6FF";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(88,166,255,0.4)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 0 16px rgba(88,166,255,0.15)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#8B949E";
                      (e.currentTarget as HTMLElement).style.borderColor = "rgba(48,54,61,0.8)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    }}
                  >
                    {icon}
                  </a>
                ))}
              </div>
              <span className="text-xs font-mono-tech text-[#768390] inline-flex items-center gap-1.5">
                {t.location} <FlagTN className="w-4.5 h-3" />
              </span>
            </div>
          </div>

          {/* Right Column (Avatar & Badges) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center animate-fade-in-up delay-300">
            <div className="relative w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-[26rem] group">
              {/* Ambient blur glow behind frame */}
              <div
                className="absolute -inset-1 rounded-3xl opacity-60 blur-xl transition duration-700 group-hover:opacity-90 pointer-events-none"
                style={{
                  background: "linear-gradient(135deg, rgba(88,166,255,0.35) 0%, rgba(201,168,76,0.3) 50%, rgba(46,95,163,0.4) 100%)",
                }}
              />

              {/* Modern Tech Portrait Frame */}
              <div
                className="relative w-full h-full rounded-3xl p-1.5 transition-all duration-300"
                style={{
                  background: "linear-gradient(145deg, rgba(88,166,255,0.5), rgba(48,54,61,0.6) 40%, rgba(201,168,76,0.55))",
                  boxShadow: "0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(46,95,163,0.25)",
                }}
              >
                <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-[#161B22]">
                  <img
                    src="/profile.png"
                    alt="Houssein Tlili - Software & AI Engineer"
                    className="w-full h-full object-cover object-top filter contrast-[103%] brightness-[98%] transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Subtle dark gradient overlay at bottom for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117]/85 via-transparent to-transparent pointer-events-none" />

                  {/* Glass Status Chip overlay pinned at bottom */}
                  <div
                    className="absolute bottom-3 inset-x-3 p-2.5 rounded-xl flex items-center justify-between backdrop-blur-md border border-white/10 shadow-lg"
                    style={{ background: "rgba(13, 17, 23, 0.78)" }}
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#3FB950] pulse-dot" />
                      <span className="text-xs font-semibold text-[#E6EDF3]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        Houssein Tlili
                      </span>
                    </div>
                    <span className="text-[10px] font-mono-tech text-[#C9A84C] font-medium">
                      AI &amp; Distributed
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mini Quick Stats Bar under portrait */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-sm mt-6">
              {[t.stats.attijari, t.stats.projects, t.stats.internships].map((stat, i) => (
                <div
                  key={i}
                  className="p-2.5 rounded-xl text-center"
                  style={{
                    background: "rgba(22, 27, 34, 0.6)",
                    border: "1px solid rgba(48, 54, 61, 0.6)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <div className="text-base sm:text-lg font-bold font-mono-tech text-[#58A6FF]">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-semibold text-[#E6EDF3] truncate">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group transition-opacity hover:opacity-100 opacity-70"
        aria-label="Scroll to About section"
      >
        <span className="text-[11px] font-mono-tech uppercase tracking-widest text-[#8B949E] group-hover:text-[#58A6FF] transition-colors">
          scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-[#58A6FF]/60 via-[#8B949E]/30 to-transparent group-hover:from-[#58A6FF]" />
      </a>
    </section>
  );
}
