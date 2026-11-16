import { lazy, Suspense, useEffect, useState } from "react";
import Portfolio from "./portfolio/Portfolio";

const Resume = lazy(() => import("./resume/Resume"));

const isResumeHash = () => window.location.hash === "#cv";

export default function App() {
  const [showResume, setShowResume] = useState(isResumeHash);

  useEffect(() => {
    const onHashChange = () => {
      const next = isResumeHash();
      setShowResume((current) => {
        if (current !== next) window.scrollTo({ top: 0 });
        return next;
      });
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    if (!showResume) return;
    const root = document.documentElement;
    root.lang = "fr";
    root.dir = "ltr";
    document.title = "CV — Tlili Houssein";
  }, [showResume]);

  return showResume ? (
    <Suspense fallback={<div className="min-h-screen bg-[#e9edf4]" />}>
      <Resume />
    </Suspense>
  ) : (
    <Portfolio />
  );
}
