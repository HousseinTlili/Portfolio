import React, { useState, useRef, useEffect } from "react";
import { useLanguage, Language } from "../context/LanguageContext";
import { FlagGB, FlagFR, FlagTN, IconGlobe } from "./Icons";

interface LanguageOption {
  code: Language;
  label: string;
  nativeLabel: string;
  flag: React.ReactNode;
}

const LANGUAGES: LanguageOption[] = [
  {
    code: "en",
    label: "English",
    nativeLabel: "English",
    flag: <FlagGB className="w-5 h-3.5" />,
  },
  {
    code: "fr",
    label: "French",
    nativeLabel: "Français",
    flag: <FlagFR className="w-5 h-3.5" />,
  },
  {
    code: "ar",
    label: "Arabic",
    nativeLabel: "العربية",
    flag: <FlagTN className="w-5 h-3.5" />,
  },
];

export default function LanguageSwitcher({ mode = "desktop" }: { mode?: "desktop" | "mobile" }) {
  const { lang, setLang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const activeLang = LANGUAGES.find((l) => l.code === lang) || LANGUAGES[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (mode === "mobile") {
    return (
      <div className="flex flex-col gap-2">
        <span className="text-xs font-mono-tech text-[#8B949E] uppercase tracking-wider">
          Language / Langue / اللغة
        </span>
        <div className="grid grid-cols-3 gap-2 p-1.5 rounded-xl bg-[#161B22] border border-[#30363D]">
          {LANGUAGES.map((item) => {
            const isSelected = item.code === lang;
            return (
              <button
                key={item.code}
                type="button"
                onClick={() => setLang(item.code)}
                className={`flex items-center justify-center gap-2 py-2 px-2.5 rounded-lg text-xs font-medium transition-all ${
                  isSelected
                    ? "bg-[#2E5FA3] text-white shadow-[0_0_12px_rgba(46,95,163,0.5)]"
                    : "text-[#8B949E] hover:text-[#E6EDF3] hover:bg-[#1C2128]"
                }`}
              >
                {item.flag}
                <span>{item.nativeLabel}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Desktop Dropdown
  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium transition-all duration-200 hover:border-[#58A6FF]/60 group cursor-pointer"
        style={{
          background: "rgba(22, 27, 34, 0.75)",
          border: isOpen ? "1px solid #58A6FF" : "1px solid rgba(48, 54, 61, 0.8)",
          color: "#E6EDF3",
          backdropFilter: "blur(12px)",
        }}
        aria-label={`Current language: ${activeLang.label}. Click to change.`}
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-1.5">
          <IconGlobe size={14} />
          {activeLang.flag}
          <span className="font-mono-tech font-semibold tracking-wider text-xs uppercase">
            {activeLang.code}
          </span>
        </div>
        <svg
          className={`w-3.5 h-3.5 text-[#8B949E] transition-transform duration-200 group-hover:text-white ${
            isOpen ? "rotate-180 text-[#58A6FF]" : ""
          }`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute end-0 mt-2 w-44 rounded-xl py-1.5 z-50 shadow-[0_12px_36px_rgba(0,0,0,0.6)] animate-fade-in-up"
          style={{
            background: "rgba(18, 22, 30, 0.96)",
            border: "1px solid rgba(48, 54, 61, 0.9)",
            backdropFilter: "blur(16px)",
          }}
        >
          {LANGUAGES.map((item) => {
            const isSelected = item.code === lang;
            return (
              <button
                key={item.code}
                type="button"
                onClick={() => {
                  setLang(item.code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 text-xs transition-colors cursor-pointer ${
                  isSelected
                    ? "bg-[#2E5FA3]/25 text-[#58A6FF] font-semibold"
                    : "text-[#8B949E] hover:text-white hover:bg-white/5"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  {item.flag}
                  <span className="text-xs">{item.nativeLabel}</span>
                </div>
                {isSelected && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#58A6FF]" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
