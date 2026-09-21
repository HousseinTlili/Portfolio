import React from "react";
import { SKILL_GROUPS } from "../data/portfolioData";
import { FlagTN, FlagGB, FlagFR, FlagJP, FlagES } from "./Icons";
import { useLanguage } from "../context/LanguageContext";
import { UI_TRANSLATIONS, getLocalizedLanguages } from "../data/translations";

export default function AboutSection() {
  const { lang, isRtl } = useLanguage();
  const t = UI_TRANSLATIONS[lang].about;
  const spokenLanguages = getLocalizedLanguages(lang);

  return (
    <section id="about" className="py-28 scroll-mt-16" style={{ background: "#0D1117" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left: Bio */}
          <div className="lg:col-span-6 reveal-left">
            <div className="mb-3">
              <span className="font-mono-tech text-xs tracking-wider" style={{ color: "#58A6FF" }}>
                {t.tag}
              </span>
            </div>
            <h2
              className="text-4xl font-bold mb-3 tracking-tight"
              style={{
                fontFamily: isRtl ? "'Cairo', sans-serif" : "'Space Grotesk', sans-serif",
                color: "#E6EDF3",
              }}
            >
              {t.title}
            </h2>
            <div
              className="w-14 h-1 mb-8 rounded-full"
              style={{ background: "linear-gradient(to right, #2E5FA3, #C9A84C)" }}
            />

            <div className="space-y-4 text-sm sm:text-base leading-relaxed" style={{ color: "#8B949E" }}>
              {t.bioParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>

          {/* Right: Skills & Languages */}
          <div className="lg:col-span-6 reveal-right space-y-10">
            {/* Skills */}
            <div
              className="rounded-2xl p-6 sm:p-8"
              style={{
                background: "rgba(22, 27, 34, 0.6)",
                border: "1px solid rgba(48, 54, 61, 0.6)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3
                  className="text-base font-semibold"
                  style={{
                    fontFamily: isRtl ? "'Cairo', sans-serif" : "'Space Grotesk', sans-serif",
                    color: "#E6EDF3",
                  }}
                >
                  {t.skillsTitle}
                </h3>
                <span className="text-xs font-mono-tech text-[#8B949E]">{t.skillsSubtitle}</span>
              </div>

              <div className="space-y-4">
                {SKILL_GROUPS.map((group) => (
                  <div key={group.label} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <span
                      className="text-xs font-semibold font-mono-tech w-24 shrink-0"
                      style={{ color: group.color }}
                    >
                      {group.label}
                    </span>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="badge-shimmer px-2.5 py-1 rounded-md text-xs font-mono-tech cursor-default transition-all duration-300"
                          style={{
                            background: `${group.color}12`,
                            border: `1px solid ${group.color}35`,
                            color: group.color,
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div
              className="rounded-2xl p-6 sm:p-8"
              style={{
                background: "rgba(22, 27, 34, 0.6)",
                border: "1px solid rgba(48, 54, 61, 0.6)",
                backdropFilter: "blur(12px)",
              }}
            >
              <h3
                className="text-base font-semibold mb-5"
                style={{
                  fontFamily: isRtl ? "'Cairo', sans-serif" : "'Space Grotesk', sans-serif",
                  color: "#E6EDF3",
                }}
              >
                {t.languagesTitle}
              </h3>

              <div className="space-y-4">
                {spokenLanguages.map((l, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-8 shrink-0 flex items-center justify-center">
                      {i === 0 && <FlagTN className="w-7 h-5" />}
                      {i === 1 && <FlagGB className="w-7 h-5" />}
                      {i === 2 && <FlagFR className="w-7 h-5" />}
                      {i === 3 && <FlagJP className="w-7 h-5" />}
                      {i === 4 && <FlagES className="w-7 h-5" />}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between mb-1.5">
                        <span className="text-xs sm:text-sm font-medium" style={{ color: "#E6EDF3" }}>
                          {l.lang}
                        </span>
                        <span className="text-xs font-mono-tech" style={{ color: "#8B949E" }}>
                          {l.level}
                        </span>
                      </div>
                      <div
                        className="h-1.5 w-full rounded-full overflow-hidden"
                        style={{ background: "rgba(48, 54, 61, 0.6)" }}
                      >
                        <div
                          className="h-full rounded-full transition-all duration-1000"
                          style={{
                            width: `${l.pct}%`,
                            background: "linear-gradient(to right, #2E5FA3, #58A6FF)",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
