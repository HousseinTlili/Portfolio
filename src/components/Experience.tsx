import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { UI_TRANSLATIONS, getLocalizedExperiences } from "../data/translations";

export default function ExperienceSection() {
  const { lang, isRtl } = useLanguage();
  const t = UI_TRANSLATIONS[lang].experience;
  const experiences = getLocalizedExperiences(lang);

  return (
    <section id="experience" className="py-28 scroll-mt-16" style={{ background: "#0D1117" }}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="reveal mb-16 text-center">
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
            className="w-14 h-1 mx-auto rounded-full mb-4"
            style={{ background: "linear-gradient(to right, #2E5FA3, #C9A84C)" }}
          />
          <p className="text-sm sm:text-base text-[#8B949E] max-w-xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Responsive Timeline Container */}
        <div className="relative">
          {/* Vertical line: centered on desktop (md), start-aligned on mobile */}
          <div
            className={`absolute top-0 bottom-0 w-0.5 pointer-events-none ${
              isRtl
                ? "right-4 md:right-auto md:left-1/2 md:-translate-x-1/2"
                : "left-4 md:left-1/2 md:-translate-x-1/2"
            }`}
            style={{ background: "linear-gradient(to bottom, #2E5FA3, #C9A84C)" }}
          />

          <div className="space-y-12">
            {experiences.map((entry, idx) => {
              const isEven = idx % 2 === 0;

              // Alternating sides on desktop:
              // In LTR: entry 0 is right (justify-end), entry 1 is left (justify-start)
              // In RTL: entry 0 is right (justify-start in RTL), entry 1 is left (justify-end in RTL)
              const justifyClass = isRtl
                ? (isEven ? "md:justify-start" : "md:justify-end")
                : (isEven ? "md:justify-end" : "md:justify-start");

              // Mobile padding to keep cards from touching the mobile start line
              const mobilePadding = isRtl ? "pr-10 md:pr-0" : "pl-10 md:pl-0";

              return (
                <div
                  key={`exp-${idx}`}
                  className={`reveal relative flex flex-col md:flex-row ${justifyClass} ${mobilePadding}`}
                >
                  {/* Timeline Node Dot */}
                  <div
                    className={`absolute top-6 w-3.5 h-3.5 rounded-full z-10 pointer-events-none ${
                      isRtl
                        ? "right-4 translate-x-1/2 md:right-auto md:left-1/2 md:-translate-x-1/2"
                        : "left-4 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2"
                    }`}
                    style={{
                      background: entry.color,
                      boxShadow: `0 0 14px ${entry.color}`,
                      border: "2px solid #0D1117",
                    }}
                  />

                  {/* Content Card with dedicated spacing from center line */}
                  <div
                    className="w-full md:w-[calc(50%-2.25rem)] card-hover rounded-xl p-6"
                    style={{
                      background: "rgba(22, 27, 34, 0.75)",
                      backdropFilter: "blur(12px)",
                      border: "1px solid rgba(48, 54, 61, 0.7)",
                      borderTop: `3px solid ${entry.color}`,
                    }}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span
                        className="text-xs font-mono-tech px-2.5 py-1 rounded"
                        style={{
                          background: `${entry.color}15`,
                          color: entry.color,
                          border: `1px solid ${entry.color}35`,
                        }}
                      >
                        {entry.tag}
                      </span>
                      <span
                        className="text-xs font-mono-tech text-[#8B949E]"
                        dir={isRtl ? "rtl" : "ltr"}
                      >
                        <bdi>{entry.period}</bdi>
                      </span>
                    </div>

                    <h3
                      className="text-lg font-bold mt-2 mb-0.5"
                      style={{
                        fontFamily: isRtl ? "'Cairo', sans-serif" : "'Space Grotesk', sans-serif",
                        color: "#E6EDF3",
                      }}
                    >
                      {entry.company}
                    </h3>
                    <p className="text-sm font-medium mb-4" style={{ color: entry.color }}>
                      {entry.role}
                    </p>

                    <ul className="space-y-2.5">
                      {entry.bullets.map((bullet, bIdx) => (
                        <li
                          key={bIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-[#8B949E] leading-relaxed"
                        >
                          <span
                            className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                            style={{ background: entry.color }}
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
