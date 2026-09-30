import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { asset } from "../lib/asset";
import { useLang } from "../hooks/useLang";

const items = [
  {
    id: "herduck",
    name: "Herduck",
    image: "/covers/herduck/agents-v2.jpg",
    zh: "多 Agent 的工作现场",
    en: "A workspace for multiple agents",
  },
  {
    id: "starsay",
    name: "StarSay",
    image: "/covers/starsay/marketing-strip.jpg",
    zh: "把记忆做成一种体验",
    en: "Memory, made into an experience",
  },
  {
    id: "rentkoa",
    name: "RentKoa",
    image: "/covers/rentkoa.jpg",
    zh: "从分身到业务协作",
    en: "From creator twins to collaboration",
  },
];
export default function Workbench() {
  const { lang, t } = useLang();
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const item = items[active];
  return (
    <div className="workbench">
      <div className="workbench-top">
        <span className="live-dot" />
        {t.hero.workbench}
        <span className="workbench-note">PRODUCT / CODE / CRAFT</span>
      </div>
      <div
        role="tablist"
        aria-label={t.hero.switchProject}
        className="workbench-tabs"
      >
        {items.map((entry, index) => (
          <button
            key={entry.id}
            ref={(node) => {
              tabs.current[index] = node;
            }}
            type="button"
            id={`tab-${entry.id}`}
            role="tab"
            aria-selected={active === index}
            aria-controls="workbench-panel"
            tabIndex={active === index ? 0 : -1}
            onClick={() => setActive(index)}
            onKeyDown={(event) => {
              const next =
                event.key === "ArrowRight"
                  ? (index + 1) % items.length
                  : event.key === "ArrowLeft"
                    ? (index + items.length - 1) % items.length
                    : event.key === "Home"
                      ? 0
                      : event.key === "End"
                        ? items.length - 1
                        : undefined;
              if (next !== undefined) {
                event.preventDefault();
                setActive(next);
                tabs.current[next]?.focus();
              }
            }}
          >
            {entry.name}
          </button>
        ))}
      </div>
      <div
        id="workbench-panel"
        role="tabpanel"
        aria-labelledby={`tab-${item.id}`}
        className={`workbench-panel workbench-panel--${item.id}`}
      >
        <Link
          to={`/project/${item.id}`}
          aria-label={`${item.name} — ${t.projects.viewMore}`}
        >
          <img
            src={asset(item.image)}
            alt={item[lang]}
            width="1000"
            height="670"
            fetchPriority="high"
          />
        </Link>
        <Link to={`/project/${item.id}`} className="workbench-caption">
          <span>{item[lang]}</span>
          <ArrowUpRight size={18} />
        </Link>
      </div>
      <p className="workbench-foot">{t.hero.workbenchNote}</p>
    </div>
  );
}
