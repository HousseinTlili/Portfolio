import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import AboutSection from "./components/About";
import ProjectsSection from "./components/Projects";
import ProjectModal from "./components/ProjectModal";
import ExperienceSection from "./components/Experience";
import EducationSection from "./components/Education";
import ContactSection from "./components/Contact";
import Footer from "./components/Footer";
import { Project } from "./data/portfolioData";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";

function PortfolioContent() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeSection, setActiveSection] = useState<string>("hero");

  const { lang } = useLanguage();

  // Scroll reveal observer for elements with .reveal, .reveal-left, .reveal-right
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
    );

    const elements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [lang]);

  // ScrollSpy observer to track which section is currently active for Navbar
  useEffect(() => {
    const sections = ["hero", "about", "projects", "experience", "education", "contact"];
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.25 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) sectionObserver.observe(el);
    });

    return () => sectionObserver.disconnect();
  }, []);

  return (
    <div
      className="min-h-screen text-[#E6EDF3] selection:bg-[#58A6FF]/25 selection:text-white transition-colors duration-300"
      style={{ background: "#0D1117" }}
    >
      {/* Navigation bar with mobile menu, active section spy, and Language Switcher */}
      <Navbar activeSection={activeSection} />

      <main>
        {/* Hero */}
        <HeroSection />

        {/* About */}
        <AboutSection />

        {/* Projects with filter tabs and case study trigger */}
        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />

        {/* Experience with responsive timeline */}
        <ExperienceSection />

        {/* Education */}
        <EducationSection />

        {/* Contact */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Case Study / Architecture Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <PortfolioContent />
    </LanguageProvider>
  );
}
