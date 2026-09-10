import { ArrowUpRight } from "lucide-react";
import { useLang } from "../hooks/useLang";

const STOCK_DAILY_URL = "https://wenhanweime.github.io/us-stock-daily/";

export default function WritingLinks() {
  const { t } = useLang();

  return (
    <section>
      <div className="flex items-end justify-between gap-4 mb-4">
        <h2 className="section-kicker">{t.writing.title}</h2>
      </div>
      <div className="signal-rule mb-2" />

      <a
        href={STOCK_DAILY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group block py-4"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[10px] font-mono uppercase tracking-[0.14em] text-ink-mute">
                Research
              </span>
              <span className="text-[10px] text-ink-mute">&middot;</span>
              <span className="text-[10px] font-mono text-ink-mute">2026</span>
            </div>
            <h3 className="font-display text-[16px] font-bold tracking-tight group-hover:text-violet-soft transition-colors">
              {t.writing.stockDaily.label}
            </h3>
            <p className="mt-2 text-[13px] text-ink-dim leading-relaxed max-w-md">
              {t.writing.stockDaily.blurb}
            </p>
            <span className="mt-3 inline-flex items-center gap-1 text-[11px] font-mono text-violet-soft">
              {t.writing.stockDaily.cta}
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </span>
          </div>
        </div>
      </a>
    </section>
  );
}
