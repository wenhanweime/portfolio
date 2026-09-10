import { useState, useCallback } from "react";
import { motion } from "framer-motion";
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
      <div className="min-h-screen flex items-start justify-center py-10 sm:py-16 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-2xl bg-paper rounded-2xl ring-1 ring-border paper-shadow overflow-hidden"
        >
          <Header />
          <main className="px-6 sm:px-10 pb-12">
            <Hero />
            <ProjectList />
            <WritingLinks />
          </main>
          <Footer />
        </motion.div>
      </div>
    </LangContext.Provider>
  );
}

export default App;
