import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/projects";
import { asset } from "../lib/asset";
import { useLang } from "../hooks/useLang";

export default function ProjectList() {
  const { t, lang } = useLang();
  return (
    <section aria-labelledby="work-title" className="portfolio-work">
      <div className="work-heading">
        <h2 id="work-title">{t.projects.title}</h2>
        <span>{t.projects.subtitle}</span>
      </div>
      <div className="work-grid">
        {projects.map((project, index) => (
          <article className="work-item" key={project.id}>
            <Link
              className={`work-image work-image--${project.id}`}
              to={`/project/${project.id}`}
              aria-label={`${project.name[lang]} — ${t.projects.viewMore}`}
            >
              <img
                src={asset(project.cover)}
                alt={project.name[lang]}
                loading={index < 4 ? "eager" : "lazy"}
                width="640"
                height="400"
                style={{ objectFit: project.coverFit ?? "cover" }}
              />
            </Link>
            <div className="work-title">
              <h3>
                <Link to={`/project/${project.id}`}>{project.name[lang]}</Link>
              </h3>
              <span>{project.year}</span>
            </div>
            <p className="work-summary">
              {project.summary?.[lang] ?? project.description[lang]}
            </p>
            <div className="work-links">
              <Link to={`/project/${project.id}`}>{t.projects.viewMore}</Link>
              {project.href && (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.hrefLabel?.[lang] ?? t.projects.open}
                  <ArrowUpRight size={12} />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
