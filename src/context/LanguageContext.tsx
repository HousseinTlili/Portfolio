import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "fr" | "ar";

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  dir: "ltr" | "rtl";
  isRtl: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = "portfolio_user_lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem(STORAGE_KEY) as Language;
      if (saved === "en" || saved === "fr" || saved === "ar") {
        return saved;
      }
    }
    return "en";
  });

  const dir = lang === "ar" ? "rtl" : "ltr";
  const isRtl = dir === "rtl";

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, newLang);
    }
  };

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("dir", dir);
      document.documentElement.setAttribute("lang", lang);
      if (lang === "ar") {
        document.documentElement.classList.add("rtl");
      } else {
        document.documentElement.classList.remove("rtl");
      }
    }
  }, [lang, dir]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, dir, isRtl }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
