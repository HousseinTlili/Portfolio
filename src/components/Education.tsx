import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { UI_TRANSLATIONS, getLocalizedEducation } from "../data/translations";
import { useTiltEffect } from "../hooks/useTiltEffect";

function EducationCard({
  item,
  index,
  isRtl,
}: {
  item: any;
  index: number;
  isRtl: boolean;
}) {
  const cardRef = useTiltEffect<HTMLDivElement>({ maxTilt: 8, scale: 1.02 });

  return (
    <div
      ref={cardRef}
      className="reveal card-hover tilt-card rounded-xl p-6 flex flex-col justify-between overflow-hidden"
      style={{
        background: "rgba(22, 27, 34, 0.65)",
        border: "1px solid rgba(48, 54, 61, 0.7)",
        borderTop: `3px solid ${item.color}`,
        animationDelay: `${index * 100}ms`,
      }}
    >
      <div className="relative z-10">
        <div className="h-14 mb-5 flex items-center">
          {item.logo ? (
            <div className="h-12 px-3 py-1.5 rounded-xl bg-white flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.3)] border border-white/20">
              <img
                src={item.logo}
                alt={`${item.school} logo`}
                className="max-h-8 max-w-[130px] w-auto h-auto object-contain"
              />
            </div>
          ) : (
            <div className="w-12 h-12 rounded-xl bg-[#161B22] border border-[#30363D] flex items-center justify-center text-2xl">
              {item.icon}
            </div>
          )}
        </div>
        <h3
          className="text-lg font-bold mb-2"
          style={{
            fontFamily: isRtl ? "'Cairo', sans-serif" : "'Space Grotesk', sans-serif",
            color: "#E6EDF3",
          }}
        >
          {item.school}
        </h3>
        <p className="text-sm mb-4 text-[#8B949E] leading-relaxed">{item.degree}</p>
      </div>

      <div className="pt-2 relative z-10">
        <span
          className="text-xs font-mono-tech px-2.5 py-1 rounded inline-block"
          style={{
            background: `${item.color}15`,
            color: item.color,
            border: `1px solid ${item.color}35`,
          }}
          dir={isRtl ? "rtl" : "ltr"}
        >
          <bdi>{item.period}</bdi>
        </span>
      </div>
    </div>
  );
}

export default function EducationSection() {
  const { lang, isRtl } = useLanguage();
  const t = UI_TRANSLATIONS[lang].education;
  const educationItems = getLocalizedEducation(lang);

  return (
    <section id="education" className="py-24 scroll-mt-16" style={{ background: "#0D1117" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal mb-12">
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
            className="w-14 h-1 rounded-full mb-4"
            style={{ background: "linear-gradient(to right, #2E5FA3, #C9A84C)" }}
          />
          <p className="text-sm sm:text-base text-[#8B949E]">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {educationItems.map((s, i) => (
            <EducationCard
              key={`edu-${i}`}
              item={s}
              index={i}
              isRtl={isRtl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
