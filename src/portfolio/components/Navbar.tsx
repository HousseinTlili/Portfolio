import { useEffect, useState } from "react";
import { Command, Download, Menu, X } from "lucide-react";
import { LANGS, profile, type Dict, type Lang, type SectionId } from "../content";
import { MagneticLink } from "./ui";

const NAV_IDS: Exclude<SectionId, "home">[] = [
  "system",
  "experience",
  "projects",
  "stack",
  "education",
  "contact",
];

export default function Navbar({
  t,
  lang,
  setLang,
  active,
  onOpenPalette,
}: {
  t: Dict;
  lang: Lang;
  setLang: (lang: Lang) => void;
  active: SectionId;
  onOpenPalette: () => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isMac, setIsMac] = useState(true);

  useEffect(() => {
    setIsMac(/Mac|iPhone|iPad/.test(navigator.platform));
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const LangSwitch = ({ className = "" }: { className?: string }) => (
    <div className={`pf-segment ${className}`} role="group" aria-label={t.nav.language}>
      {LANGS.map((item) => (
        <button
          key={item.code}
          type="button"
          onClick={() => setLang(item.code)}
          aria-pressed={lang === item.code}
          title={item.label}
          className={lang === item.code ? "is-active" : ""}
        >
          {item.short}
        </button>
      ))}
    </div>
  );

  return (
    <header className={`pf-nav ${scrolled || open ? "is-scrolled" : ""}`}>
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 md:px-8">
        <a href="#home" className="group flex items-center gap-3" aria-label={profile.name}>
          <span className="pf-logo">HT</span>
          <span className="hidden font-medium tracking-tight text-white sm:block">
            Houssein Tlili
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_IDS.map((id) => (
            <li key={id}>
              <a href={`#${id}`} className={`pf-nav-link ${active === id ? "is-active" : ""}`}>
                {t.nav[id]}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onOpenPalette}
            className="pf-kbd-button hidden md:flex"
            aria-label={t.nav.command}
          >
            <Command size={14} />
            <span className="font-mono text-[11px] text-white/50">{isMac ? "⌘K" : "Ctrl K"}</span>
          </button>
          <LangSwitch className="hidden md:flex" />
          <MagneticLink
            href={profile.cvPdf}
            download="CV Houssein Tlili.pdf"
            strength={0.25}
            className="pf-btn-primary hidden h-10 px-4 text-sm sm:inline-flex"
          >
            <Download size={15} />
            {t.nav.cv}
          </MagneticLink>
          <button
            type="button"
            className="pf-icon-button lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={t.nav.menu}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="pf-mobile-menu lg:hidden">
          <ul className="flex flex-col">
            {NAV_IDS.map((id, index) => (
              <li key={id}>
                <a href={`#${id}`} onClick={() => setOpen(false)} className="pf-mobile-link">
                  <span className="font-mono text-xs text-[var(--color-gold)]">0{index + 1}</span>
                  {t.nav[id]}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <LangSwitch />
            <a
              href={profile.cvPdf}
              download="CV Houssein Tlili.pdf"
              className="pf-btn-primary h-10 px-4 text-sm"
            >
              <Download size={15} />
              {t.nav.cv}
            </a>
            <button
              type="button"
              className="pf-btn-ghost h-10 px-4 text-sm"
              onClick={() => {
                setOpen(false);
                onOpenPalette();
              }}
            >
              <Command size={15} />
              {t.nav.command}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
