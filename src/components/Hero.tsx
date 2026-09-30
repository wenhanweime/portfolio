import { ArrowDown, ArrowUpRight } from "lucide-react";
import Avatar from "./Avatar";
import { useLang } from "../hooks/useLang";
import Workbench from "./Workbench";

export default function Hero() {
  const { t } = useLang();
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <div className="identity">
          <Avatar size={52} label="wenhan" />
          <div>
            <span className="identity-name">wenhan</span>
            <p>{t.hero.role}</p>
          </div>
        </div>
        <h1 id="hero-title">
          {t.hero.line1}
          <br />
          <span>{t.hero.line2}</span>
        </h1>
        <p className="hero-description">{t.hero.description}</p>
        <div className="hero-actions">
          <a
            className="button button-primary"
            href="#/"
            onClick={(event) => {
              event.preventDefault();
              document
                .getElementById("selected-work")
                ?.scrollIntoView({
                  behavior: window.matchMedia(
                    "(prefers-reduced-motion: reduce)",
                  ).matches
                    ? "instant"
                    : "smooth",
                });
            }}
          >
            {t.hero.explore}
            <ArrowDown size={16} />
          </a>
          <a
            className="text-link"
            href="https://github.com/wenhanweime"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
            <ArrowUpRight size={16} />
          </a>
        </div>
        <p className="hero-personal">
          PKU · SCUT<span aria-hidden="true">/</span>
          {t.hero.personal}
        </p>
      </div>
      <Workbench />
    </section>
  );
}
