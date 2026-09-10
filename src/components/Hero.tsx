import AnimatedMark from "./AnimatedMark";
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
    <section className="lg:sticky lg:top-8">
      <div className="flex items-start gap-5 mb-7">
        <AnimatedMark size={72} label={t.hero.name} />
        <div className="min-w-0 pt-1">
          <p className="section-kicker mb-2">{t.hero.role}</p>
          <h1 className="font-display text-[2.35rem] sm:text-[2.75rem] leading-[0.95] font-extrabold tracking-tight text-ink">
            {t.hero.name}
          </h1>
        </div>
      </div>

      <p className="text-[15px] sm:text-[16px] text-ink-dim leading-[1.75] max-w-md mb-6">
        {t.hero.bio}
      </p>

      <div className="flex flex-wrap items-center gap-2 mb-8">
        <span className="section-kicker px-2 py-1 border border-line">PKU</span>
        <span className="section-kicker px-2 py-1 border border-line">SCUT</span>
      </div>

      <a
        href="https://github.com/wenhanweime"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 h-9 px-3 border border-line-strong text-ink-dim hover:text-violet-soft hover:border-violet/50 transition-colors"
      >
        <GithubIcon />
        <span className="text-[12px] font-mono tracking-wide">github.com/wenhanweime</span>
      </a>

      <div className="mt-10 signal-rule" />
      <p className="mt-4 text-[13px] text-ink-mute leading-relaxed max-w-sm">
        {t.hero.manifesto}
      </p>
    </section>
  );
}
