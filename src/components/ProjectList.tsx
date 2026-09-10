import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronRight, X } from "lucide-react";
import { projects, type Project } from "../data/projects";
import { useLang } from "../hooks/useLang";

export default function ProjectList() {
  const { t, lang } = useLang();
  const [expanded, setExpanded] = useState<Project | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
        {projects.map((project, i) => (
          <motion.button
            key={project.id}
            type="button"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.08 + i * 0.04,
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            onClick={() =>
              setExpanded(expanded?.id === project.id ? null : project)
            }
            className={`group relative text-left rounded-xl overflow-hidden bg-paper-elevated/60 border border-border hover:border-border-strong hover:bg-paper-elevated transition-all duration-300 paper-shadow-sm ${
              expanded?.id === project.id
                ? "ring-1 ring-accent/25 border-accent/20"
                : ""
            }`}
          >
            <div
              className="h-[2px] w-full opacity-80"
              style={{
                background: `linear-gradient(90deg, ${project.tagColor}, ${project.tagColor}55)`,
              }}
            />

            <div className="p-4">
              <div className="flex items-start justify-between mb-2.5 gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <span
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ backgroundColor: project.tagColor }}
                  />
                  <span className="text-[10px] font-mono text-text-muted uppercase tracking-[0.12em] truncate">
                    {project.category[lang]}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-text-muted shrink-0">
                  {project.year}
                </span>
              </div>

              <h3 className="text-[15px] font-semibold tracking-tight mb-1.5 group-hover:text-accent transition-colors">
                {project.name[lang]}
              </h3>

              <p className="text-[12px] text-text-secondary leading-relaxed line-clamp-2 mb-3.5">
                {project.description[lang]}
              </p>

              <div className="flex flex-wrap gap-1 mb-3">
                {project.techStack.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-mono text-text-muted bg-bg/70 px-2 py-0.5 rounded-full ring-1 ring-border"
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 3 && (
                  <span className="text-[10px] font-mono text-text-muted px-1">
                    +{project.techStack.length - 3}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-1 text-[10px] font-mono text-text-muted group-hover:text-accent transition-colors">
                <span>{t.projects.viewMore}</span>
                <ChevronRight
                  size={11}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 rounded-xl overflow-hidden border border-border bg-paper-elevated paper-shadow-sm"
          >
            <div
              className="h-[2px] w-full"
              style={{
                background: `linear-gradient(90deg, ${expanded.tagColor}, ${expanded.tagColor}55)`,
              }}
            />

            <div className="p-5 sm:p-6">
              <div className="flex items-start justify-between mb-4 gap-3">
                <div>
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: expanded.tagColor }}
                    />
                    <span className="text-[11px] font-mono text-text-muted uppercase tracking-[0.12em]">
                      {expanded.category[lang]}
                    </span>
                    <span className="text-[11px] text-text-muted">&middot;</span>
                    <span className="text-[11px] font-mono text-text-muted">
                      {expanded.year}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-[1.35rem] font-medium tracking-tight">
                    {expanded.name[lang]}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setExpanded(null)}
                  className="text-text-muted hover:text-text transition-colors p-1.5 rounded-lg hover:bg-bg"
                  aria-label={t.projects.close}
                >
                  <X size={16} />
                </button>
              </div>

              <p className="text-[14px] text-text-secondary leading-[1.7] mb-5">
                {expanded.description[lang]}
              </p>

              <div className="mb-5">
                <p className="section-label mb-2.5">{t.projects.techStack}</p>
                <div className="flex flex-wrap gap-1.5">
                  {expanded.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-full ring-1"
                      style={{
                        color: expanded.tagColor,
                        borderColor: `${expanded.tagColor}33`,
                        backgroundColor: `${expanded.tagColor}0d`,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-5">
                <p className="section-label mb-2.5">{t.projects.highlights}</p>
                <ul className="space-y-2">
                  {expanded.highlights[lang].map((h, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-[13px] text-text-secondary leading-relaxed"
                    >
                      <span
                        className="mt-1.5 w-1 h-1 rounded-full shrink-0"
                        style={{ backgroundColor: expanded.tagColor }}
                      />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {expanded.href && (
                <a
                  href={expanded.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[12px] font-medium text-accent hover:opacity-80 transition-opacity"
                  onClick={(e) => e.stopPropagation()}
                >
                  {t.projects.open}
                  <ArrowUpRight size={13} />
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
