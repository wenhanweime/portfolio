import Hero from "./Hero";
import ProjectList from "./ProjectList";
import WritingLinks from "./WritingLinks";

export default function HomePage() {
  return (
    <main className="mt-16 sm:mt-20 space-y-20">
      <Hero />
      <ProjectList />
      <WritingLinks />
    </main>
  );
}
