import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getProject } from "../data/projects";
import { asset } from "../lib/asset";
import { useLang } from "../hooks/useLang";

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const { t, lang } = useLang();
  const project = id ? getProject(id) : undefined;

  if (!project) {
    return (
      <div className="pt-4">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-[13px] text-ink-mute hover:text-ink transition-colors"
        >
          <ArrowLeft size={14} strokeWidth={1.75} />
          {t.projects.back}
        </Link>
        <p className="mt-10 text-[15px] text-ink-dim">{t.projects.notFound}</p>
      </div>
    );
  }

  return (
    <article className="pt-2">
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 text-[13px] text-ink-mute hover:text-ink transition-colors mb-8"
      >
        <ArrowLeft size={14} strokeWidth={1.75} />
        {t.projects.back}
      </Link>

      <div className="overflow-hidden rounded-[12px] bg-surface ring-1 ring-line">
        <div className="aspect-[16/10] sm:aspect-[3/2] overflow-hidden">
          <img
            src={asset(project.cover)}
            alt={project.name[lang]}
            className="h-full w-full object-contain bg-surface"
          />
        </div>
      </div>

      <header className="mt-8">
        <div className="flex items-baseline justify-between gap-4">
          <h1 className="text-[1.75rem] sm:text-[2rem] font-semibold tracking-tight text-ink leading-tight">
            {project.name[lang]}
          </h1>
          <span className="shrink-0 text-[13px] font-mono text-ink-mute tabular-nums">
            {project.year}
          </span>
        </div>
        <p className="mt-4 font-serif-bio text-[16px] sm:text-[17px] text-ink-dim leading-[1.7] max-w-2xl">
          {project.description[lang]}
        </p>
      </header>

      {project.gallery && project.gallery.length > 0 && (
        <section className="mt-10">
          <p className="text-[12px] text-ink-mute mb-3">{t.projects.gallery}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.gallery.map((shot) => (
              <figure
                key={shot.src}
                className="overflow-hidden rounded-[10px] bg-surface ring-1 ring-line"
              >
                <div className="aspect-[4/5] sm:aspect-[3/4] overflow-hidden">
                  <img
                    src={asset(shot.src)}
                    alt={shot.caption?.[lang] ?? project.name[lang]}
                    className="h-full w-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                {shot.caption && (
                  <figcaption className="px-3 py-2 text-[12px] text-ink-mute">
                    {shot.caption[lang]}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </section>
      )}

      <div className="hairline my-8" />

      <div className="mb-8">
        <p className="text-[12px] text-ink-mute mb-2.5">{t.projects.techStack}</p>
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

      <div className="mb-10">
        <p className="text-[12px] text-ink-mute mb-2.5">{t.projects.highlights}</p>
        <ul className="space-y-2">
          {project.highlights[lang].map((h, i) => (
            <li
              key={i}
              className="flex items-start gap-2.5 text-[14px] text-ink-dim leading-relaxed"
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
          className="inline-flex items-center gap-1.5 text-[14px] text-ink-dim hover:text-accent transition-colors"
        >
          {t.projects.open}
          <ArrowUpRight size={15} strokeWidth={1.75} />
        </a>
      )}
    </article>
  );
}
