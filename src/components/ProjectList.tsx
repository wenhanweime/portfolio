import { useState } from "react";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { projects, type Project } from "../data/projects";
import { useLang } from "../hooks/useLang";

export default function ProjectList() {
  const { t, lang } = useLang();
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section>
      <h2 className="section-label mb-4">{t.projects.title}</h2>
      <div className="hairline mb-1" />

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
                onToggle={() => setExpanded(open ? null : project.id)}
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
        className="group w-full text-left py-4 grid grid-cols-[minmax(0,1fr)_auto] sm:grid-cols-[minmax(0,1fr)_3.5rem_auto] gap-x-4 items-baseline"
        aria-expanded={open}
      >
        <span className="min-w-0">
          <span className="text-[15px] sm:text-[16px] font-medium tracking-tight text-ink group-hover:text-accent transition-colors">
            {project.name[lang]}
          </span>
          <span className="mt-1 block text-[13px] text-ink-dim leading-snug">
            {project.description[lang]}
          </span>
        </span>
        <span className="hidden sm:inline text-[12px] font-mono text-ink-mute tabular-nums justify-self-end">
          {project.year}
        </span>
        <ChevronDown
          size={15}
          strokeWidth={1.75}
          className={`text-ink-mute justify-self-end transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="pb-6 pr-1">
          <p className="sm:hidden text-[12px] font-mono text-ink-mute tabular-nums mb-3">
            {project.year}
          </p>

          <div className="mb-5">
            <p className="text-[12px] text-ink-mute mb-2">{t.projects.techStack}</p>
            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] text-ink-dim px-2 py-0.5 rounded-md bg-surface"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-5">
            <p className="text-[12px] text-ink-mute mb-2">{t.projects.highlights}</p>
            <ul className="space-y-1.5">
              {project.highlights[lang].map((h, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-[13px] text-ink-dim leading-relaxed"
                >
                  <span className="mt-[0.55em] w-1 h-1 rounded-full bg-ink-mute shrink-0" />
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
              className="inline-flex items-center gap-1.5 text-[13px] text-ink-dim hover:text-accent transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              {t.projects.open}
              <ArrowUpRight size={14} strokeWidth={1.75} />
            </a>
          )}
        </div>
      )}
    </div>
  );
}
