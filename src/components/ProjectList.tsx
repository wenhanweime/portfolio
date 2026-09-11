import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { asset } from "../lib/asset";
import { useLang } from "../hooks/useLang";

export default function ProjectList() {
  const { t, lang } = useLang();

  return (
    <section>
      <h2 className="section-label mb-4">{t.projects.title}</h2>
      <div className="hairline mb-8" />

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-x-7 sm:gap-y-10">
        {projects.map((project) => (
          <li key={project.id}>
            <Link
              to={`/project/${project.id}`}
              className="group block focus-visible:outline-none"
            >
              <div className="overflow-hidden rounded-[12px] bg-surface ring-1 ring-line">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={asset(project.cover)}
                    alt={project.name[lang]}
                    loading="lazy"
                    className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  />
                </div>
              </div>
              <div className="mt-3.5 px-0.5">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="text-[15px] sm:text-[16px] font-medium tracking-tight text-ink group-hover:text-accent transition-colors">
                    {project.name[lang]}
                  </h3>
                  <span className="shrink-0 text-[12px] font-mono text-ink-mute tabular-nums">
                    {project.year}
                  </span>
                </div>
                <p className="mt-1 text-[13px] text-ink-dim leading-snug line-clamp-2">
                  {project.description[lang]}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
