import { useEffect } from "react";
import Hero from "./Hero";
import ProjectList from "./ProjectList";
import WritingLinks from "./WritingLinks";
import About from "./About";
import { useLang } from "../hooks/useLang";

export default function HomePage() {
  const { t } = useLang();
  useEffect(() => {
    document.title = t.hero.pageTitle;
  }, [t]);
  return (
    <main id="main-content" className="home">
      <Hero />
      <ProjectList />
      <About />
      <WritingLinks />
    </main>
  );
}
