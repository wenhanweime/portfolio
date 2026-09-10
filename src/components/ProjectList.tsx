import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, X } from "lucide-react";
import { projects, type Project } from "../data/projects";
import { useLang } from "../hooks/useLang";

export default function ProjectList() {
  const { t, lang } = useLang();
  const [expanded, setExpanded] = useState<Project | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        {projects.map((project, i) => (
          <motion.button
            key={project.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
            onClick={() =>
              setExpanded(expanded?.id === project.id ? null : project)
            }
            className={`group relative text-left rounded-xl overflow-hidden bg-paper border border-border hover:border-zinc-300 hover:shadow-md transition-all duration-300 ${
              expanded?.id === project.id ? "ring-2 ring-accent/20" : ""
            }`}
          >
            {/* Top gradient bar */}
            <div
              className="h-1 w-full"
              style={{
                background: `linear-gradient(90deg, ${project.tagColor}, ${project.tagColor}80)`,
              }}
            />

            <div className="p-4">
              {/* Header */}
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: project.tagColor }}
                  />
                  <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider">
                    {project.category[lang]}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-text-muted">
                  {project.year}
                </span>
              </div>

              {/* Name */}
              <h3 className="text-base font-bold mb-1.5 group-hover:text-accent transition-colors">
                {project.name[lang]}
              </h3>

              {/* Description */}
              <p className="text-xs text-text-secondary leading-relaxed line-clamp-2 mb-3">
                {project.description[lang]}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-1">
                {project.techStack.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-mono text-text-muted bg-zinc-50 px-2 py-0.5 rounded-full border border-zinc-100"
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

              {/* Expand hint */}
              <div className="flex items-center gap-1 mt-3 text-[10px] font-mono text-text-muted group-hover:text-accent transition-colors">
                <span>{t.projects.viewMore}</span>
                <ChevronRight size={10} className="group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Expanded detail */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            className="mt-4 rounded-xl overflow-hidden border border-border bg-paper"
          >
            {/* Top gradient bar */}
            <div
              className="h-1 w-full"
              style={{
                background: `linear-gradient(90deg, ${expanded.tagColor}, ${expanded.tagColor}80)`,
              }}
            />

            <div className="p-5">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: expanded.tagColor }}
                    />
                    <span className="text-xs font-mono text-text-muted uppercase tracking-wider">
                      {expanded.category[lang]}
                    </span>
                    <span className="text-xs text-text-muted">&middot;</span>
                    <span className="text-xs font-mono text-text-muted">
                      {expanded.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold">{expanded.name[lang]}</h3>
                </div>
                <button
                  onClick={() => setExpanded(null)}
                  className="text-text-muted hover:text-text transition-colors p-1.5 rounded-lg hover:bg-zinc-50"
                >
                  <X size={16} />
                </button>
              </div>

              <p className="text-sm text-text-secondary leading-relaxed mb-5">
                {expanded.description[lang]}
              </p>

              <div className="mb-5">
                <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest mb-2.5">
                  {t.projects.techStack}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {expanded.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2.5 py-1 rounded-full border"
                      style={{
                        color: expanded.tagColor,
                        borderColor: `${expanded.tagColor}30`,
                        backgroundColor: `${expanded.tagColor}08`,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[10px] font-mono text-text-muted uppercase tracking-widest mb-2.5">
                  {t.projects.highlights}
                </p>
                <ul className="space-y-2">
                  {expanded.highlights[lang].map((h, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm text-text-secondary"
                    >
                      <span
                        className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ backgroundColor: expanded.tagColor }}
                      />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
