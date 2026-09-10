import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLang } from "../hooks/useLang";

const STOCK_DAILY_URL = "https://wenhanweime.github.io/us-stock-daily/";

export default function WritingLinks() {
  const { t } = useLang();

  return (
    <section className="mt-12">
      <div className="flex items-center gap-3 mb-5">
        <span className="w-1 h-1 rounded-full bg-accent" />
        <span className="section-label">{t.writing.title}</span>
        <span className="flex-1 h-px bg-border" />
      </div>

      <motion.a
        href={STOCK_DAILY_URL}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="group block rounded-xl border border-border bg-paper-elevated/50 hover:bg-paper-elevated hover:border-border-strong transition-all duration-300 paper-shadow-sm p-5"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-[10px] font-mono uppercase tracking-[0.12em] text-text-muted">
                Research
              </span>
              <span className="text-[10px] text-text-muted">&middot;</span>
              <span className="text-[10px] font-mono text-text-muted">2026</span>
            </div>
            <h3 className="text-[15px] font-semibold tracking-tight group-hover:text-accent transition-colors">
              {t.writing.stockDaily.label}
            </h3>
            <p className="mt-2 text-[13px] text-text-secondary leading-relaxed max-w-md">
              {t.writing.stockDaily.blurb}
            </p>
            <span className="mt-3.5 inline-flex items-center gap-1 text-[11px] font-mono text-accent">
              {t.writing.stockDaily.cta}
              <ArrowUpRight
                size={12}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </span>
          </div>
        </div>
      </motion.a>
    </section>
  );
}
