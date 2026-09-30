import { useState, useCallback, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { LangContext, getTranslations } from "./hooks/useLang";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import ProjectDetail from "./components/ProjectDetail";
import type { Lang } from "./types";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [lang, setLang] = useState<Lang>(() => {
    try {
      return localStorage.getItem("lang") === "en" ? "en" : "zh";
    } catch {
      return "zh";
    }
  });

  const toggleLang = useCallback(() => {
    setLang((prev) => {
      const next = prev === "zh" ? "en" : "zh";
      try {
        localStorage.setItem("lang", next);
      } catch {
        /* Language still works without storage. */
      }
      return next;
    });
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  }, [lang]);

  return (
    <LangContext.Provider
      value={{ lang, t: getTranslations(lang), toggleLang }}
    >
      <div className="min-h-screen bg-bg">
        <div className="site-shell">
          <a
            className="skip-link"
            href="#main-content"
            onClick={(event) => {
              event.preventDefault();
              const main = document.querySelector<HTMLElement>("main");
              main?.setAttribute("tabindex", "-1");
              main?.focus();
            }}
          >
            {getTranslations(lang).nav.skip}
          </a>
          <ScrollToTop />
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="*" element={<ProjectDetail />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </LangContext.Provider>
  );
}

export default App;
