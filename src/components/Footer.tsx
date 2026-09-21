import React from "react";
import { IconGithub, IconLinkedin, IconMail } from "./Icons";
import { PERSONAL_INFO } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";
import { UI_TRANSLATIONS } from "../data/translations";

export default function Footer() {
  const { lang } = useLanguage();
  const t = UI_TRANSLATIONS[lang].footer;

  return (
    <footer
      className="py-10 border-t"
      style={{ borderColor: "rgba(48, 54, 61, 0.4)", background: "#0D1117" }}
      aria-label="Footer"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <p className="text-xs font-mono-tech text-[#8B949E]">
            {t.designedBy}
          </p>
          <p className="text-[11px] text-[#768390]">
            Vite • React 19 • Tailwind CSS • TypeScript
          </p>
        </div>

        <div className="flex items-center gap-6">
          <p className="text-xs text-[#768390]">
            © {new Date().getFullYear()} {t.allRightsReserved}
          </p>

          <div className="flex items-center gap-3">
            {[
              { icon: <IconGithub size={16} />, href: PERSONAL_INFO.github, label: "GitHub" },
              { icon: <IconLinkedin size={16} />, href: PERSONAL_INFO.linkedin, label: "LinkedIn" },
              { icon: <IconMail size={16} />, href: `mailto:${PERSONAL_INFO.email}`, label: "Email" },
            ].map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-[#768390] hover:text-[#58A6FF] hover:bg-[#161B22] transition-colors border border-transparent hover:border-[#30363D]"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
