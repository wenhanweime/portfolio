import { useState, useCallback } from "react";
import { LangContext, getTranslations } from "./hooks/useLang";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectList from "./components/ProjectList";
import WritingLinks from "./components/WritingLinks";
import Footer from "./components/Footer";
import type { Lang } from "./types";

function App() {
  const [lang, setLang] = useState<Lang>(() => {
    return (localStorage.getItem("lang") as Lang) || "zh";
  });

  const toggleLang = useCallback(() => {
    setLang((prev) => {
      const next = prev === "zh" ? "en" : "zh";
      localStorage.setItem("lang", next);
      return next;
    });
  }, []);

  return (
    <LangContext.Provider
      value={{ lang, t: getTranslations(lang), toggleLang }}
    >
      <div className="min-h-screen bg-bg">
        <div className="mx-auto w-full max-w-3xl px-6 sm:px-8 pt-10 pb-24">
          <Header />
          <main className="mt-16 sm:mt-20 space-y-20">
            <Hero />
            <ProjectList />
            <WritingLinks />
          </main>
          <Footer />
        </div>
      </div>
    </LangContext.Provider>
  );
}

export default App;
