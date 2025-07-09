"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { getLanguageByIP } from "../utils/getLanguageByIP";
import { translations } from "../utils/translations";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("ENGLISH");
  const [t, setT] = useState(translations["ENGLISH"]);

  useEffect(() => {
    const savedLang = localStorage.getItem("lang");

    if (savedLang) {
      setLanguage(savedLang);
      setT(translations[savedLang]);
    } else {
      getLanguageByIP().then((lang) => {
        setLanguage(lang);
        setT(translations[lang]);
      });
    }
  }, []);

  const changeLanguage = (langKey) => {
    setLanguage(langKey);
    setT(translations[langKey]);
    localStorage.setItem("lang", langKey);
  };

  return (
    <LanguageContext.Provider value={{ language, t, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
