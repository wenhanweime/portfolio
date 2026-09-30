import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { useLang } from "../hooks/useLang";

export default function Header() {
  const { lang, t, toggleLang } = useLang();
  return (
    <header className="site-header">
      <Link to="/" className="wordmark" aria-label={t.nav.home}>
        wenhan<span aria-hidden="true">.</span>
      </Link>
      <nav aria-label={t.nav.label}>
        <a
          className="header-github"
          href="https://github.com/wenhanweime"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
          <ArrowUpRight size={14} />
        </a>
        <button
          className="language-toggle"
          type="button"
          onClick={toggleLang}
          aria-label={lang === "zh" ? "Switch to English" : "切换到中文"}
        >
          {lang === "zh" ? "EN" : "中文"}
        </button>
      </nav>
    </header>
  );
}
