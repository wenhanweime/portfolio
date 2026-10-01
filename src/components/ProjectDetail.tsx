import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects, getProject, type GalleryItem } from "../data/projects";
import { caseStudies } from "../data/showcase";
import { asset } from "../lib/asset";
import { useLang } from "../hooks/useLang";
import RentkoaGuide from "./RentkoaGuide";

function GalleryBlock({
  item,
  lang,
  fallbackAlt,
}: {
  item: GalleryItem;
  lang: "zh" | "en";
  fallbackAlt: string;
}) {
  if (item.kind === "prose") {
    return (
      <div className="max-w-xl mx-auto text-center py-6 sm:py-8 px-1">
        {item.eyebrow && (
          <p className="text-[11px] tracking-[0.14em] uppercase text-ink-mute mb-3">
            {item.eyebrow[lang]}
          </p>
        )}
        <h3 className="font-serif-bio text-[1.2rem] sm:text-[1.35rem] text-ink leading-snug tracking-tight">
          {item.title[lang]}
        </h3>
        <p className="mt-3.5 font-serif-bio text-[14px] sm:text-[15px] text-ink-dim leading-[1.75]">
          {item.body[lang]}
        </p>
      </div>
    );
  }

  const full = Boolean(item.full);
  return (
    <figure
      className={
        full
          ? "overflow-hidden rounded-[12px] bg-black ring-1 ring-line"
          : "overflow-hidden rounded-[10px] bg-surface ring-1 ring-line"
      }
    >
      <div
        className={
          full ? "overflow-hidden bg-black" : "overflow-hidden bg-surface"
        }
      >
        <img
          src={asset(item.src)}
          alt={item.caption?.[lang] ?? fallbackAlt}
          className="h-auto w-full object-contain"
          loading="lazy"
        />
      </div>
      {item.caption && (
        <figcaption
          className={
            full
              ? "px-3 py-2.5 text-[12px] text-slate-300 bg-black/95 text-center tracking-wide"
              : "px-3 py-2 text-[12px] text-ink-mute"
          }
        >
          {item.caption[lang]}
        </figcaption>
      )}
    </figure>
  );
}

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const { t, lang } = useLang();
  const project = id ? getProject(id) : undefined;

  useEffect(() => {
    document.title = project ? `${project.name[lang]} · wenhan` : "wenhan";
    return () => {
      document.title = "wenhan";
    };
  }, [project, lang]);

  if (!project) {
    return (
      <main id="main-content" className="detail">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-[13px] text-ink-mute hover:text-ink transition-colors"
        >
          <ArrowLeft size={14} strokeWidth={1.75} />
          {t.projects.back}
        </Link>
        <h1 className="mt-10 text-xl">{t.projects.notFound}</h1>
      </main>
    );
  }

  const hasCapabilityGuide = project.id === "rentkoa";
  const gallery = project.gallery ?? [];
  const hasProse = gallery.some((g) => g.kind === "prose");

  const story = caseStudies[project.id];
  const paragraphs = story && "paragraphs" in story ? story.paragraphs : undefined;
  const nextProject =
    projects[(projects.indexOf(project) + 1) % projects.length];
  return (
    <main id="main-content" className="detail">
      <Link to="/" className="text-link detail-back">
        <ArrowLeft size={15} />
        {t.projects.back}
      </Link>
      <article>
        <header className="detail-header">
          <p className="eyebrow">
            {story?.category[lang] ?? t.projects.details} · {project.year}
          </p>
          <h1>{project.name[lang]}</h1>
          {story && <p className="detail-subtitle">{story.headline[lang]}</p>}
          <p className="detail-intro">
            {story?.intro?.[lang] ?? project.description[lang]}
          </p>
          {project.href && (
            <a
              className="button button-primary"
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.hrefLabel?.[lang] ?? t.projects.open}
              <ArrowUpRight size={16} />
            </a>
          )}
        </header>
        {hasCapabilityGuide && <RentkoaGuide lang={lang} />}
        {!hasCapabilityGuide && (
          <div className="detail-cover">
            <img
              src={asset(project.cover)}
              alt={project.name[lang]}
              fetchPriority="high"
            />
          </div>
        )}
        {paragraphs && !hasCapabilityGuide && (
          <div className="detail-narrative">
            {paragraphs.map((paragraph) => (
              <p key={paragraph.en}>{paragraph[lang]}</p>
            ))}
          </div>
        )}
        {story && "challenge" in story && (
          <section className="case-study" aria-label={t.projects.viewMore}>
            <div>
              <h2>{t.projects.challenge}</h2>
              <p>{story.challenge[lang]}</p>
            </div>
            <div>
              <h2>{t.projects.approach}</h2>
              <p>{story.approach[lang]}</p>
            </div>
            <div>
              <h2>{t.projects.evidence}</h2>
              <p>{story.evidence[lang]}</p>
            </div>
          </section>
        )}
        {!paragraphs && (
          <section className="detail-facts">
            <div>
              <h2>{t.projects.techStack}</h2>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded bg-surface text-ink-dim"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h2>{t.projects.highlights}</h2>
              <ul>
                {project.highlights[lang].map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </section>
        )}
        {gallery.length > 0 && !hasCapabilityGuide && (
          <section className="detail-gallery">
            <h2>{t.projects.gallery}</h2>
            {hasProse ? (
              <div className="flex flex-col gap-5 sm:gap-7">
                {gallery.map((item, i) => (
                  <GalleryBlock
                    key={item.kind === "prose" ? `prose-${i}` : item.src}
                    item={item}
                    lang={lang}
                    fallbackAlt={project.name[lang]}
                  />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {gallery.map((item, i) => (
                  <GalleryBlock
                    key={item.kind === "prose" ? `prose-${i}` : item.src}
                    item={item}
                    lang={lang}
                    fallbackAlt={project.name[lang]}
                  />
                ))}
              </div>
            )}
          </section>
        )}
      </article>
      <Link to={`/project/${nextProject.id}`} className="next-project">
        <div>
          <span>{t.projects.next}</span>
          <strong>{nextProject.name[lang]}</strong>
        </div>
        <ArrowUpRight size={24} />
      </Link>
    </main>
  );
}
