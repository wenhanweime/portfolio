import { motion } from "framer-motion";
import { useLang } from "../hooks/useLang";

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5" aria-hidden>
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

export default function Hero() {
  const { t } = useLang();

  return (
    <section className="pt-9 pb-2">
      <div className="flex items-center gap-5 mb-6">
        <motion.img
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          src="/avatar.png"
          alt={t.hero.name}
          width={64}
          height={64}
          className="w-16 h-16 rounded-full object-cover ring-1 ring-border-strong/70 paper-shadow-sm shrink-0"
        />
        <div className="min-w-0">
          <h1 className="font-serif text-[1.65rem] sm:text-[1.85rem] font-medium tracking-tight leading-none text-text">
            {t.hero.name}
          </h1>
          <p className="mt-2 text-[12px] text-text-muted font-mono tracking-wide">
            {t.hero.role}
          </p>
          <div className="flex items-center gap-1.5 mt-2.5">
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-bg/80 text-text-muted ring-1 ring-border">
              PKU
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-bg/80 text-text-muted ring-1 ring-border">
              SCUT
            </span>
          </div>
        </div>
      </div>

      <p className="text-[15px] text-text-secondary leading-[1.7] mb-6 max-w-lg">
        {t.hero.bio}
      </p>

      <div className="flex items-center gap-2.5 mb-9">
        <a
          href="https://github.com/wenhanweime"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 h-8 pl-2.5 pr-3 rounded-full bg-bg/70 ring-1 ring-border text-text-secondary hover:text-accent hover:ring-accent/30 transition-colors duration-200"
        >
          <GithubIcon />
          <span className="text-[11px] font-mono tracking-wide">GitHub</span>
        </a>
      </div>

      <div className="flex items-center gap-3">
        <span className="w-1 h-1 rounded-full bg-accent" />
        <span className="section-label">{t.projects.title}</span>
        <span className="flex-1 h-px bg-border" />
      </div>
    </section>
  );
}
