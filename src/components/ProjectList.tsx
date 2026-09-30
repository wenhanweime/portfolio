import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";
import { caseStudies, featuredIds } from "../data/showcase";
import { asset } from "../lib/asset";
import { useLang } from "../hooks/useLang";

export default function ProjectList() {
  const { t, lang } = useLang();
  return (
    <>
      <section
        id="selected-work"
        className="selected-work"
        aria-labelledby="selected-title"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow">SELECTED WORK</p>
            <h2 id="selected-title">{t.projects.title}</h2>
          </div>
          <p>{t.projects.subtitle}</p>
        </div>
        <div className="featured-list">
          {featuredIds.map((id) => {
            const project = projects.find((entry) => entry.id === id)!;
            const story = caseStudies[id];
            return (
              <article
                className={`featured-card featured-card--${id}`}
                key={id}
              >
                <Link
                  className="featured-image"
                  to={`/project/${id}`}
                  aria-label={`${project.name[lang]} — ${t.projects.viewMore}`}
                >
                  <img
                    src={asset(project.cover)}
                    alt={project.name[lang]}
                    loading="lazy"
                    width="1200"
                    height="750"
                  />
                  <span className="image-link">
                    <ArrowUpRight size={22} />
                  </span>
                </Link>
                <div className="featured-copy">
                  <div className="project-meta">
                    <span>{story.category[lang]}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3>{project.name[lang]}</h3>
                  <p className="project-headline">{story.headline[lang]}</p>
                  <p className="project-intro">{story.intro[lang]}</p>
                  <ul className="capabilities">
                    {story.capabilities.map((label) => (
                      <li key={label}>{label}</li>
                    ))}
                  </ul>
                  <div className="project-actions">
                    <Link className="text-link" to={`/project/${id}`}>
                      {t.projects.viewMore}
                      <ArrowRight size={16} />
                    </Link>
                    {project.href && (
                      <a
                        className="text-link secondary-link"
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.hrefLabel?.[lang] ?? t.projects.open}
                        <ArrowUpRight size={15} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
      <section className="experiments" aria-labelledby="experiments-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">SIDE QUESTS</p>
            <h2 id="experiments-title">{t.projects.experiments}</h2>
          </div>
          <p>{t.projects.experimentsIntro}</p>
        </div>
        <div className="experiment-grid">
          {projects
            .filter((project) => !featuredIds.includes(project.id))
            .map((project) => (
              <Link
                className="experiment-card"
                key={project.id}
                to={`/project/${project.id}`}
              >
                <div className="experiment-image">
                  <img
                    src={asset(project.cover)}
                    alt=""
                    loading="lazy"
                    width="640"
                    height="400"
                    style={{ objectFit: project.coverFit ?? "cover" }}
                  />
                </div>
                <div className="experiment-copy">
                  <div>
                    <h3>{project.name[lang]}</h3>
                    <ArrowUpRight size={17} />
                  </div>
                  <p>{project.summary?.[lang] ?? project.description[lang]}</p>
                  <span>{project.techStack.slice(0, 2).join(" / ")}</span>
                </div>
              </Link>
            ))}
        </div>
      </section>
    </>
  );
}
