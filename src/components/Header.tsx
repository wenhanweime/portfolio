import { useLang } from "../hooks/useLang";

export default function Header() {
  const { lang, toggleLang } = useLang();

  return (
    <header className="flex items-center justify-between px-6 sm:px-10 py-5 border-b border-border">
      <span className="text-sm font-semibold tracking-tight">{"</>"}</span>
      <button
        onClick={toggleLang}
        className="text-xs font-mono text-text-muted hover:text-text transition-colors px-2 py-1 rounded-md hover:bg-bg"
      >
        {lang === "zh" ? "EN" : "\u4e2d\u6587"}
      </button>
    </header>
  );
}
