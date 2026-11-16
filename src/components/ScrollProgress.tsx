import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight <= 0) {
        setProgress(0);
        return;
      }
      const currentScroll = window.scrollY;
      const pct = Math.min(100, Math.max(0, (currentScroll / totalHeight) * 100));
      setProgress(pct);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[3px] z-[100] pointer-events-none"
      style={{
        background: "rgba(22, 27, 34, 0.4)",
      }}
    >
      <div
        className="h-full transition-all duration-75 ease-out shadow-[0_0_10px_rgba(88,166,255,0.7)]"
        style={{
          width: `${progress}%`,
          background: "linear-gradient(90deg, #2E5FA3, #58A6FF 50%, #C9A84C 100%)",
        }}
      />
    </div>
  );
}
