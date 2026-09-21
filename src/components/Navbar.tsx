import React, { useEffect, useState } from "react";
import { IconDownload, IconMenu, IconClose } from "./Icons";
import { PERSONAL_INFO } from "../data/portfolioData";
import { useLanguage } from "../context/LanguageContext";
import { UI_TRANSLATIONS } from "../data/translations";
import LanguageSwitcher from "./LanguageSwitcher";

interface NavbarProps {
  activeSection?: string;
}

export default function Navbar({ activeSection = "" }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang } = useLanguage();
  const t = UI_TRANSLATIONS[lang].nav;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { id: "about", label: t.about, href: "#about" },
    { id: "projects", label: t.projects, href: "#projects" },
    { id: "experience", label: t.experience, href: "#experience" },
    { id: "education", label: t.education, href: "#education" },
    { id: "contact", label: t.contact, href: "#contact" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(13, 17, 23, 0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(48, 54, 61, 0.6)" : "1px solid transparent",
      }}
      aria-label="Main Navigation"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Profile Logo */}
        <a href="#hero" className="flex items-center gap-3 group" aria-label="Houssein Tlili - Home">
          <div
            className="w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(88,166,255,0.4)]"
            style={{
              background: "linear-gradient(135deg, #2E5FA3, #162a4a)",
              border: "1.5px solid rgba(88, 166, 255, 0.45)",
            }}
          >
            <img
              src="/profile.png"
              alt="Houssein Tlili"
              className="w-full h-full object-cover object-top filter brightness-[98%]"
            />
          </div>
          <div className="flex flex-col">
            <span
              className="text-sm font-semibold tracking-tight transition-colors group-hover:text-white"
              style={{ color: "#E6EDF3", fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[11px] font-mono-tech" style={{ color: "#8B949E" }}>
              {t.roleSubtitle}
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links & Actions */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`nav-link text-sm transition-all duration-200 ${
                    isActive ? "text-white font-semibold active" : "hover:text-white"
                  }`}
                  style={{
                    color: isActive ? "#58A6FF" : "#8B949E",
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 500,
                  }}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="h-4 w-px bg-[#30363D]" />

          {/* Language Switcher */}
          <LanguageSwitcher mode="desktop" />

          {/* Download CV */}
          <a
            href={PERSONAL_INFO.cvUrl}
            download="Houssein_Tlili_CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-xs px-3.5 py-2 rounded-xl transition-all duration-200 hover:bg-yellow-500/10 hover:border-yellow-400 hover:scale-105"
            style={{
              border: "1px solid #C9A84C",
              color: "#C9A84C",
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 500,
              boxShadow: "0 0 16px rgba(201, 168, 76, 0.1)",
            }}
          >
            <IconDownload size={14} />
            <span>{t.downloadCv}</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageSwitcher mode="desktop" />
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="w-10 h-10 rounded-lg flex items-center justify-center text-[#E6EDF3] transition-colors focus:outline-none focus:ring-2 focus:ring-[#58A6FF]"
            style={{
              background: "rgba(22, 27, 34, 0.8)",
              border: "1px solid rgba(48, 54, 61, 0.8)",
            }}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileMenuOpen ? <IconClose size={20} /> : <IconMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-x-0 top-[72px] bottom-0 z-40 bg-[#0D1117]/95 backdrop-blur-xl border-t border-[rgba(48,54,61,0.8)] px-6 py-6 flex flex-col justify-between overflow-y-auto animate-fade-in-up"
          style={{ height: "calc(100vh - 72px)" }}
        >
          <div className="flex flex-col gap-3">
            <span className="text-xs font-mono-tech text-[#8B949E] uppercase tracking-wider mb-1">
              Navigation
            </span>
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-semibold py-2.5 px-4 rounded-xl border transition-all ${
                    isActive
                      ? "bg-[#2E5FA3]/20 border-[#58A6FF]/40 text-[#58A6FF]"
                      : "bg-[#161B22]/40 border-transparent text-[#E6EDF3] hover:border-[#30363D]"
                  }`}
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="pt-6 border-t border-[rgba(48,54,61,0.6)] space-y-4">
            {/* Mobile Language Switcher Segmented */}
            <LanguageSwitcher mode="mobile" />

            <a
              href={PERSONAL_INFO.cvUrl}
              download="Houssein_Tlili_CV.pdf"
              target="_blank"
              rel="noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 text-base py-3 rounded-xl font-semibold transition-all"
              style={{
                border: "1px solid #C9A84C",
                color: "#C9A84C",
                background: "rgba(201, 168, 76, 0.08)",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              <IconDownload size={18} />
              {t.downloadCv}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
