import { useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { projects, type Project } from "../data/projects";
import { useLang } from "../hooks/useLang";

export default function ProjectList() {
  const { t, lang } = useLang();
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section>
      <div className="flex items-end justify-between gap-4 mb-4">
        <h2 className="section-kicker">{t.projects.title}</h2>
        <span className="text-[10px] font-mono text-ink-mute">
          {String(projects.length).padStart(2, "0")}
        </span>
      </div>
      <div className="signal-rule mb-2" />

      <ul className="divide-y divide-line">
        {projects.map((project) => {
          const open = expanded === project.id;
          return (
            <li key={project.id}>
              <ProjectRow
                project={project}
                open={open}
                lang={lang}
                t={t}
                onToggle={() =>
                  setExpanded(open ? null : project.id)
                }
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function ProjectRow({
  project,
  open,
  lang,
  t,
  onToggle,
}: {
  project: Project;
  open: boolean;
  lang: "zh" | "en";
  t: ReturnType<typeof useLang>["t"];
  onToggle: () => void;
}) {
  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        className="group w-full text-left py-3.5 grid grid-cols-[3.25rem_minmax(0,1fr)_auto] sm:grid-cols-[4rem_minmax(0,1fr)_7.5rem_auto] gap-x-3 items-baseline"
        aria-expanded={open}
      >
        <span className="text-[11px] font-mono text-ink-mute tabular-nums">
          {project.year}
        </span>
        <span className="min-w-0">
          <span className="font-display text-[15px] sm:text-[16px] font-bold tracking-tight text-ink group-hover:text-violet-soft transition-colors">
            {project.name[lang]}
          </span>
          <span className="mt-0.5 block text-[12px] text-ink-dim line-clamp-1 sm:hidden">
            {project.description[lang]}
          </span>
        </span>
        <span className="hidden sm:block text-[11px] font-mono text-ink-mute uppercase tracking-wider truncate">
          {project.category[lang]}
        </span>
        <ChevronDown
          size={14}
          className={`text-ink-mute justify-self-end transition-transform ${
            open ? "rotate-180 text-violet-soft" : ""
          }`}
        />
      </button>

      {open && (
        <div className="pb-5 pl-0 sm:pl-[4rem] pr-1">
          <p className="text-[13px] sm:text-[14px] text-ink-dim leading-[1.7] max-w-xl mb-4">
            {project.description[lang]}
          </p>

          <div className="mb-4">
            <p className="section-kicker mb-2">{t.projects.techStack}</p>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] font-mono text-ink-dim px-2 py-0.5 border border-line"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <p className="section-kicker mb-2">{t.projects.highlights}</p>
            <ul className="space-y-1.5">
              {project.highlights[lang].map((h, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-[13px] text-ink-dim leading-relaxed"
                >
                  <span className="mt-2 w-1 h-1 rounded-full bg-violet shrink-0" />
                  {h}
                </li>
              ))}
            </ul>
          </div>

          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[12px] font-mono text-violet-soft hover:text-ink transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              {t.projects.open}
              <ArrowUpRight size={13} />
            </a>
          )}
        </div>
      )}
    </div>
  );
}
