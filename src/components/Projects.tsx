import React, { useState } from "react";
import { Project } from "../data/portfolioData";
import { IconGithub, IconLayers } from "./Icons";
import { useLanguage } from "../context/LanguageContext";
import { UI_TRANSLATIONS, getLocalizedProjects } from "../data/translations";

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export default function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const { lang, isRtl } = useLanguage();
  const t = UI_TRANSLATIONS[lang].projects;
  const allProjects = getLocalizedProjects(lang);

  const filterTabs = [
    {
      id: "all",
      label: t.filterAll,
      count: allProjects.length,
    },
    {
      id: "ai",
      label: t.filterAi,
      count: allProjects.filter((p) => p.categories.includes("ai")).length,
    },
    {
      id: "backend",
      label: t.filterBackend,
      count: allProjects.filter((p) => p.categories.includes("backend")).length,
    },
    {
      id: "desktop",
      label: t.filterDesktop,
      count: allProjects.filter((p) => p.categories.includes("desktop")).length,
    },
  ];

  // Filter projects by selected category
  const filteredProjects =
    selectedFilter === "all"
      ? allProjects
      : allProjects.filter((p) => p.categories.includes(selectedFilter as any));

  // Determine if featured card should be highlighted
  const showFeatured = selectedFilter === "all" || selectedFilter === "ai";
  const featuredProject = showFeatured ? filteredProjects.find((p) => p.featured) : null;
  const gridProjects = featuredProject
    ? filteredProjects.filter((p) => p.id !== featuredProject.id)
    : filteredProjects;

  return (
    <section id="projects" className="py-28 scroll-mt-16" style={{ background: "#0D1117" }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-8">
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
            className="w-14 h-1 mb-4 rounded-full"
            style={{ background: "linear-gradient(to right, #2E5FA3, #C9A84C)" }}
          />
          <p style={{ color: "#8B949E" }}>{t.subtitle}</p>
        </div>

        {/* Clean, Full-Width Organized Filter Bar */}
        <div className="mb-10 flex flex-wrap items-center gap-3">
          <div className="inline-flex flex-wrap sm:flex-nowrap items-center gap-1.5 p-1.5 rounded-2xl bg-[#161B22]/90 border border-[#30363D]/80 shadow-lg max-w-full">
            {filterTabs.map((tab) => {
              const active = selectedFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedFilter(tab.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-mono-tech font-medium transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                    active
                      ? "bg-[#2E5FA3] text-[#E6EDF3] shadow-[0_0_14px_rgba(46,95,163,0.6)]"
                      : "text-[#8B949E] hover:text-[#E6EDF3] hover:bg-[#0D1117]/60"
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                      active ? "bg-white/20 text-white" : "bg-[#0D1117] text-[#8B949E]"
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Project Card (KUSOR) */}
        {featuredProject && (
          <div
            key={`featured-${selectedFilter}-${lang}-${featuredProject.id}`}
            className="animate-fade-in-up card-hover featured-glow rounded-2xl p-6 sm:p-8 mb-8 transition-all"
            style={{
              background: "rgba(22, 27, 34, 0.85)",
              border: "1px solid rgba(201, 168, 76, 0.4)",
              backdropFilter: "blur(14px)",
              boxShadow: "0 0 60px rgba(201, 168, 76, 0.08)",
            }}
          >
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
              <div className="flex-1">
                {/* Badge row */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-medium font-mono-tech"
                    style={{
                      background: "rgba(201, 168, 76, 0.12)",
                      border: "1px solid rgba(201, 168, 76, 0.4)",
                      color: "#C9A84C",
                    }}
                  >
                    {featuredProject.tag}
                  </span>
                  <span className="text-xs font-mono-tech text-[#8B949E]">
                    {featuredProject.company}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-4xl sm:text-5xl font-bold mb-2 tracking-tight"
                  style={{
                    fontFamily: isRtl ? "'Cairo', sans-serif" : "'Space Grotesk', sans-serif",
                    color: "#E6EDF3",
                  }}
                >
                  {featuredProject.title}
                </h3>
                <p className="text-sm sm:text-base font-medium mb-4" style={{ color: "#C9A84C" }}>
                  {featuredProject.subtitle}
                </p>

                {/* Description */}
                <p
                  className="text-sm sm:text-base leading-relaxed mb-6"
                  style={{ color: "#8B949E", maxWidth: "680px" }}
                >
                  {featuredProject.desc}
                </p>

                {/* Metrics */}
                {featuredProject.metrics && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 max-w-lg">
                    {featuredProject.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="metric-tile px-4 py-3 rounded-xl"
                        style={{
                          background: "rgba(88, 166, 255, 0.06)",
                          border: "1px solid rgba(88, 166, 255, 0.18)",
                        }}
                      >
                        <div
                          className="text-2xl font-bold"
                          style={{
                            fontFamily: isRtl ? "'Cairo', sans-serif" : "'Space Grotesk', sans-serif",
                            color: "#58A6FF",
                          }}
                        >
                          {m.value}
                        </div>
                        <div className="text-xs text-[#8B949E] mt-0.5">{m.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredProject.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded text-xs font-mono-tech"
                      style={{
                        background: "rgba(201, 168, 76, 0.12)",
                        border: "1px solid rgba(201, 168, 76, 0.35)",
                        color: "#C9A84C",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => onSelectProject(featuredProject)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs font-mono-tech transition-all hover:scale-105 active:scale-95 cursor-pointer"
                    style={{
                      background: "linear-gradient(135deg, #C9A84C, #967a2c)",
                      color: "#0D1117",
                      boxShadow: "0 0 20px rgba(201, 168, 76, 0.3)",
                    }}
                  >
                    <IconLayers size={15} />
                    {t.viewCaseStudy}
                  </button>

                  {featuredProject.githubUrl && (
                    <a
                      href={featuredProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="View GitHub repository"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono-tech text-[#8B949E] hover:text-white transition-colors border border-[#30363D] hover:border-[#58A6FF]/40 bg-[#0D1117]/60"
                    >
                      <IconGithub size={16} />
                      {t.sourceCode}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {gridProjects.map((project, i) => (
            <div
              key={`${selectedFilter}-${lang}-${project.id}`}
              className="animate-fade-in-up card-hover rounded-xl p-6 flex flex-col justify-between"
              style={{
                background: "rgba(22, 27, 34, 0.8)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(48, 54, 61, 0.7)",
                borderTop: `3px solid ${project.color}`,
                animationDelay: `${i * 80}ms`,
              }}
            >
              <div>
                {/* Card Top */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <span
                    className="text-xs font-mono-tech px-2.5 py-1 rounded"
                    style={{
                      background: `${project.color}15`,
                      color: project.color,
                      border: `1px solid ${project.color}35`,
                    }}
                  >
                    {project.tag}
                  </span>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View ${project.title} on GitHub`}
                      className="text-[#8B949E] hover:text-[#58A6FF] transition-colors p-1"
                    >
                      <IconGithub size={17} />
                    </a>
                  )}
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-bold mb-1"
                  style={{
                    fontFamily: isRtl ? "'Cairo', sans-serif" : "'Space Grotesk', sans-serif",
                    color: "#E6EDF3",
                  }}
                >
                  {project.title}
                </h3>

                {project.company && (
                  <p className="text-xs mb-2 font-mono-tech" style={{ color: project.color }}>
                    {project.company}
                  </p>
                )}

                {/* Description */}
                <p className="text-sm leading-relaxed mb-6" style={{ color: "#8B949E" }}>
                  {project.desc}
                </p>
              </div>

              <div>
                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded text-xs font-mono-tech"
                      style={{
                        background: `${project.color}12`,
                        border: `1px solid ${project.color}30`,
                        color: project.color,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Card Actions */}
                <button
                  onClick={() => onSelectProject(project)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs font-mono-tech font-medium transition-all hover:bg-white/5 border border-[#30363D] hover:border-[#58A6FF]/40 text-[#E6EDF3] cursor-pointer"
                >
                  <IconLayers size={13} />
                  {t.viewCaseStudy}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
