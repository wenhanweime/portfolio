import { useState, useCallback } from "react";
import { LangContext, getTranslations } from "./hooks/useLang";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectList from "./components/ProjectList";
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
      <div className="min-h-screen flex items-start justify-center py-12 px-4 sm:px-6">
        <div className="w-full max-w-2xl bg-paper rounded-2xl ring-1 ring-border shadow-sm shadow-zinc-200/50">
          <Header />
          <main className="px-6 sm:px-10 pb-10">
            <Hero />
            <ProjectList />
          </main>
          <Footer />
        </div>
      </div>
    </LangContext.Provider>
  );
}

export default App;
