import { ArrowUpRight } from "lucide-react";
import { useLang } from "../hooks/useLang";

const STOCK_DAILY_URL = "https://wenhanweime.github.io/us-stock-daily/";

export default function WritingLinks() {
  const { t } = useLang();

  return (
    <section>
      <h2 className="section-label mb-4">{t.writing.title}</h2>
      <div className="hairline mb-1" />

      <a
        href={STOCK_DAILY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-baseline justify-between gap-4 py-5"
      >
        <span className="min-w-0">
          <span className="text-[15px] font-medium tracking-tight text-ink group-hover:text-accent transition-colors">
            {t.writing.stockDaily.label}
          </span>
          <span className="mt-1 block text-[13px] text-ink-dim leading-relaxed max-w-md">
            {t.writing.stockDaily.blurb}
          </span>
        </span>
        <ArrowUpRight
          size={15}
          strokeWidth={1.75}
          className="shrink-0 text-ink-mute group-hover:text-accent transition-colors"
        />
      </a>
    </section>
  );
}
