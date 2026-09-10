import AnimatedMark from "./AnimatedMark";
import { useLang } from "../hooks/useLang";

export default function Header() {
  const { lang, toggleLang } = useLang();

  return (
    <header className="flex items-center justify-between gap-4 border-b border-line pb-5">
      <div className="flex items-center gap-3 min-w-0">
        <AnimatedMark size={28} label="Peter" />
        <span className="font-display text-[15px] font-bold tracking-tight text-ink">
          peter
        </span>
        <span className="hidden sm:inline section-kicker ml-1">signal / studio</span>
      </div>
      <button
        type="button"
        onClick={toggleLang}
        className="section-kicker px-2.5 py-1.5 border border-line hover:border-line-strong hover:text-violet-soft transition-colors"
        aria-label="Toggle language"
      >
        {lang === "zh" ? "EN" : "中文"}
      </button>
    </header>
  );
}
