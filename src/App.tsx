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
      <div className="min-h-screen">
        <div className="mx-auto w-full max-w-5xl px-5 sm:px-8 pt-6 pb-16">
          <Header />
          <main className="mt-10 sm:mt-14 grid grid-cols-1 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1.2fr)] gap-10 lg:gap-16 items-start">
            <Hero />
            <div className="min-w-0 space-y-12">
              <ProjectList />
              <WritingLinks />
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </LangContext.Provider>
  );
}

export default App;
