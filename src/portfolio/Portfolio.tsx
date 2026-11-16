import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  Briefcase,
  Code2,
  Copy,
  Download,
  FileText,
  FolderKanban,
  GraduationCap,
  Globe,
  Home,
  Mail,
  Sparkles,
} from "lucide-react";
import { ArrowUp } from "lucide-react";
import { dict, LANGS, profile, type Lang, type SectionId } from "./content";
import { useRichMotion } from "./hooks/useMediaQuery";
import CommandPalette, { type PaletteCommand } from "./components/CommandPalette";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ScrollProgress from "./components/ScrollProgress";
import Stack from "./components/Stack";
import SystemSection from "./components/SystemSection";
import { GithubIcon, LinkedinIcon, MagneticLink } from "./components/ui";

const SECTIONS: SectionId[] = [
  "home",
  "system",
  "experience",
  "projects",
  "stack",
  "education",
  "contact",
];

function getInitialLang(): Lang {
  const stored = window.localStorage.getItem("portfolio-lang");
  if (stored === "en" || stored === "fr" || stored === "ar") return stored;
  const browser = navigator.language.slice(0, 2);
  return browser === "fr" || browser === "ar" ? browser : "en";
}

function CursorAura() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let frame = 0;
    const onMove = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (ref.current) {
          ref.current.style.transform = `translate3d(${event.clientX - 300}px, ${event.clientY - 300}px, 0)`;
          ref.current.style.opacity = "1";
        }
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);
  return <div ref={ref} className="pf-aura" aria-hidden="true" />;
}

export default function Portfolio() {
  const [lang, setLangState] = useState<Lang>(getInitialLang);
  const [active, setActive] = useState<SectionId>("home");
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const richMotion = useRichMotion();
  const t = dict[lang];

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    window.localStorage.setItem("portfolio-lang", next);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = `Houssein Tlili — ${t.hero.role}`;
  }, [lang, t.hero.role]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id as SectionId);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const id of SECTIONS) {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setPaletteOpen((open) => !open);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(null), 2000);
    return () => window.clearTimeout(timer);
  }, [toast]);

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      return true;
    } catch {
      window.location.href = `mailto:${profile.email}`;
      return false;
    }
  }, []);

  const commands = useMemo<PaletteCommand[]>(() => {
    const go = (id: SectionId) => () =>
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    const sectionIcons: Record<SectionId, PaletteCommand["icon"]> = {
      home: Home,
      system: Sparkles,
      experience: Briefcase,
      projects: FolderKanban,
      stack: Code2,
      education: GraduationCap,
      contact: Mail,
    };

    return [
      ...SECTIONS.map((id, index) => ({
        id: `go-${id}`,
        group: t.palette.navigate,
        label: id === "home" ? "Houssein Tlili" : t.nav[id],
        hint: `0${index}`,
        icon: sectionIcons[id],
        run: go(id),
      })),
      {
        id: "copy-email",
        group: t.palette.actions,
        label: t.palette.copyEmail,
        keywords: "email mail contact",
        icon: Copy,
        run: async () => {
          if (await copyEmail()) setToast(`${profile.email} — ${t.contact.copied}`);
        },
      },
      {
        id: "download-cv",
        group: t.palette.actions,
        label: t.palette.downloadCv,
        keywords: "cv resume pdf",
        icon: Download,
        run: () => {
          const link = document.createElement("a");
          link.href = profile.cvPdf;
          link.download = "CV Houssein Tlili.pdf";
          link.click();
        },
      },
      {
        id: "open-cv",
        group: t.palette.actions,
        label: t.palette.openCv,
        keywords: "cv resume",
        icon: FileText,
        run: () => {
          window.location.hash = "cv";
        },
      },
      {
        id: "github",
        group: t.palette.actions,
        label: t.palette.github,
        icon: GithubIcon as unknown as PaletteCommand["icon"],
        run: () => window.open(profile.github, "_blank", "noopener"),
      },
      {
        id: "linkedin",
        group: t.palette.actions,
        label: t.palette.linkedin,
        icon: LinkedinIcon as unknown as PaletteCommand["icon"],
        run: () => window.open(profile.linkedin, "_blank", "noopener"),
      },
      ...LANGS.map((item) => ({
        id: `lang-${item.code}`,
        group: t.palette.languages,
        label: item.label,
        hint: item.code === lang ? "●" : undefined,
        keywords: `language langue ${item.code}`,
        icon: Globe,
        run: () => setLang(item.code),
      })),
    ];
  }, [t, lang, copyEmail, setLang]);

  return (
    <div className="pf-root" dir={lang === "ar" ? "rtl" : "ltr"}>
      <ScrollProgress />
      {richMotion && <CursorAura />}
      <div className="pf-noise" aria-hidden="true" />
      <Navbar
        t={t}
        lang={lang}
        setLang={setLang}
        active={active}
        onOpenPalette={() => setPaletteOpen(true)}
      />

      <main>
        <Hero t={t} lang={lang} />
        <SystemSection t={t} lang={lang} />
        <Experience t={t} lang={lang} />
        <Projects t={t} lang={lang} />
        <Stack t={t} lang={lang} />
        <Education t={t} lang={lang} />
        <Contact t={t} lang={lang} onCopyEmail={copyEmail} />
      </main>

      <footer className="border-t border-white/[0.07]">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-12 md:flex-row md:items-end md:justify-between md:px-8">
          <div>
            <p className="pf-footer-name">Houssein Tlili</p>
            <p className="mt-3 text-sm text-white/40">© 2026 · {t.footer.built}</p>
          </div>
          <div className="flex items-center gap-3">
            <a href="#cv" className="pf-btn-ghost h-11 px-4 text-sm">
              <FileText size={15} />
              {t.palette.openCv}
            </a>
            <MagneticLink
              href="#home"
              className="pf-icon-button h-11 w-11"
              aria-label={t.footer.top}
              strength={0.4}
            >
              <ArrowUp size={17} />
            </MagneticLink>
          </div>
        </div>
      </footer>

      <CommandPalette
        open={paletteOpen}
        onClose={() => setPaletteOpen(false)}
        commands={commands}
        t={t}
      />

      {toast && (
        <div className="pf-toast" role="status">
          {toast}
        </div>
      )}
    </div>
  );
}
