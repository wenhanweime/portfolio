import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Avatar from "./Avatar";
import { useLang } from "../hooks/useLang";

export default function Hero() {
  const { t } = useLang();
  return (
    <aside className="profile" aria-labelledby="profile-name">
      <div className="profile-identity">
        <Avatar size={80} label="wenhan" />
        <div>
          <h1 id="profile-name">wenhan</h1>
          <p className="profile-role">{t.hero.role}</p>
        </div>
      </div>
      <p className="profile-greeting">{t.hero.greeting}</p>
      <p className="profile-bio">{t.hero.description}</p>
      <p className="profile-now">
        {t.hero.now}
        <Link to="/project/herduck">Herduck</Link>
        {t.hero.and}
        <Link to="/project/starsay">StarSay</Link>
        {t.hero.nowEnd}
      </p>
      <a
        className="profile-link"
        href="https://github.com/wenhanweime"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
        <ArrowUpRight size={14} />
      </a>
      <div className="profile-footnotes">
        <p>PKU · SCUT</p>
        <p>{t.hero.personal}</p>
      </div>
    </aside>
  );
}
