import React, { useEffect } from "react";
import { Project } from "../data/portfolioData";
import { IconClose, IconGithub, IconExternalLink, IconCheck, IconLayers } from "./Icons";
import { useLanguage } from "../context/LanguageContext";
import { UI_TRANSLATIONS, getLocalizedProjects } from "../data/translations";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { lang, isRtl } = useLanguage();
  const t = UI_TRANSLATIONS[lang].modal;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  // Retrieve localized project data by ID
  const localizedProjects = getLocalizedProjects(lang);
  const currentProject = localizedProjects.find((p) => p.id === project.id) || project;
  const caseStudy = currentProject.caseStudy;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      style={{ background: "rgba(13, 17, 23, 0.85)", backdropFilter: "blur(12px)" }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-3xl my-8 rounded-2xl border p-6 sm:p-8 max-h-[90vh] overflow-y-auto card-hover animate-fade-in-up"
        style={{
          background: "#161B22",
          borderColor: "rgba(48, 54, 61, 0.9)",
          borderTop: `3px solid ${currentProject.color}`,
          boxShadow: `0 20px 60px rgba(0, 0, 0, 0.6), 0 0 40px ${currentProject.color}15`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 end-5 w-9 h-9 rounded-lg flex items-center justify-center text-[#8B949E] hover:text-[#E6EDF3] transition-colors focus:outline-none focus:ring-2 focus:ring-[#58A6FF] cursor-pointer"
          style={{ background: "rgba(22, 27, 34, 0.8)", border: "1px solid rgba(48, 54, 61, 0.8)" }}
          aria-label={t.close}
        >
          <IconClose size={18} />
        </button>

        {/* Header */}
        <div className="mb-6 pe-10">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <span
              className="text-xs font-mono-tech px-2.5 py-1 rounded"
              style={{
                background: `${currentProject.color}15`,
                color: currentProject.color,
                border: `1px solid ${currentProject.color}35`,
              }}
            >
              {currentProject.tag}
            </span>
            {currentProject.company && (
              <span className="text-xs font-mono-tech text-[#8B949E]">
                {currentProject.company}
              </span>
            )}
          </div>

          <h2
            id="modal-title"
            className="text-2xl sm:text-3xl font-bold mb-1"
            style={{
              fontFamily: isRtl ? "'Cairo', sans-serif" : "'Space Grotesk', sans-serif",
              color: "#E6EDF3",
            }}
          >
            {currentProject.title}
          </h2>
          {currentProject.subtitle && (
            <p className="text-sm font-medium" style={{ color: currentProject.color }}>
              {currentProject.subtitle}
            </p>
          )}
        </div>

        {/* Metrics Bar if available */}
        {currentProject.metrics && (
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6 p-4 rounded-xl"
            style={{
              background: "rgba(13, 17, 23, 0.6)",
              border: "1px solid rgba(48, 54, 61, 0.6)",
            }}
          >
            {currentProject.metrics.map((m) => (
              <div key={m.label} className="text-center sm:text-start">
                <div
                  className="text-xl font-bold"
                  style={{
                    fontFamily: isRtl ? "'Cairo', sans-serif" : "'Space Grotesk', sans-serif",
                    color: "#58A6FF",
                  }}
                >
                  {m.value}
                </div>
                <div className="text-xs text-[#8B949E]">{m.label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Case Study Details */}
        {caseStudy ? (
          <div className="space-y-6 text-sm text-[#8B949E] leading-relaxed">
            {/* Overview */}
            <div>
              <h3 className="text-xs font-mono-tech uppercase tracking-wider text-[#E6EDF3] mb-2 flex items-center gap-2">
                <IconLayers size={14} /> {t.tabOverview}
              </h3>
              <p>{caseStudy.overview}</p>
            </div>

            {/* Challenge & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#0D1117]/60 border border-[#30363D]/60">
                <h4 className="text-xs font-mono-tech text-rose-400 font-semibold mb-2 uppercase tracking-wide">
                  {t.tabChallenge}
                </h4>
                <p className="text-xs leading-relaxed text-[#8B949E]">{caseStudy.challenge}</p>
              </div>

              <div className="p-4 rounded-xl bg-[#0D1117]/60 border border-[#30363D]/60">
                <h4 className="text-xs font-mono-tech text-emerald-400 font-semibold mb-2 uppercase tracking-wide">
                  {t.tabSolution}
                </h4>
                <p className="text-xs leading-relaxed text-[#8B949E]">{caseStudy.solution}</p>
              </div>
            </div>

            {/* Architecture Highlights */}
            <div>
              <h3 className="text-xs font-mono-tech uppercase tracking-wider text-[#E6EDF3] mb-3">
                {t.tabArchitecture}
              </h3>
              <ul className="space-y-2">
                {caseStudy.architectureHighlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                    <span className="mt-0.5 text-[#58A6FF] shrink-0">
                      <IconCheck size={14} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Measurable Results */}
            <div>
              <h3 className="text-xs font-mono-tech uppercase tracking-wider text-[#C9A84C] mb-3">
                {t.tabResults}
              </h3>
              <ul className="space-y-2">
                {caseStudy.results.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#C9A84C] shrink-0" />
                    <span className="text-[#E6EDF3]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <p className="text-sm text-[#8B949E] leading-relaxed mb-6">{currentProject.desc}</p>
        )}

        {/* Tech Stack Footer */}
        <div className="mt-8 pt-6 border-t border-[#30363D] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-wrap gap-1.5">
            {currentProject.tech.map((item) => (
              <span
                key={item}
                className="px-2.5 py-1 rounded text-xs font-mono-tech"
                style={{
                  background: `${currentProject.color}15`,
                  border: `1px solid ${currentProject.color}35`,
                  color: currentProject.color,
                }}
              >
                {item}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3 shrink-0">
            {currentProject.githubUrl && (
              <a
                href={currentProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-xs font-mono-tech px-4 py-2 rounded-lg text-[#E6EDF3] hover:text-[#58A6FF] transition-colors border border-[#30363D] hover:border-[#58A6FF]/40 bg-[#0D1117]"
              >
                <IconGithub size={15} />
                {t.viewGithub.split(" ")[0] || "GitHub"}
              </a>
            )}
            {currentProject.demoUrl && (
              <a
                href={currentProject.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-xs font-mono-tech px-4 py-2 rounded-lg text-[#0D1117] font-semibold bg-[#58A6FF] hover:bg-[#58A6FF]/90 transition-colors"
              >
                <IconExternalLink size={14} />
                Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
