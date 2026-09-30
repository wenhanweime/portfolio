import { ArrowUpRight } from "lucide-react";
import { useLang } from "../hooks/useLang";

export default function About() {
  const { t } = useLang();
  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <div className="about-lead">
        <p className="eyebrow">THE BUILDER BEHIND THE WORK</p>
        <h2 id="about-title">{t.about.title}</h2>
        <p>{t.about.intro}</p>
        <a
          className="text-link"
          href="https://github.com/wenhanweime"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t.about.github}
          <ArrowUpRight size={16} />
        </a>
      </div>
      <div className="builder-principles">
        {t.about.principles.map((item) => (
          <div key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
