import { useLang } from "../hooks/useLang";

export default function Header() {
  const { lang, toggleLang } = useLang();

  return (
    <header className="flex items-center justify-between px-6 sm:px-10 py-5 border-b border-border/80">
      <span
        className="text-[13px] font-medium tracking-tight text-text-secondary"
        aria-hidden
      >
        peter
      </span>
      <button
        type="button"
        onClick={toggleLang}
        className="text-[11px] font-mono tracking-wide text-text-muted hover:text-text transition-colors px-2.5 py-1 rounded-md hover:bg-bg/60"
        aria-label="Toggle language"
      >
        {lang === "zh" ? "EN" : "中文"}
      </button>
    </header>
  );
}
