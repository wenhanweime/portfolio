import { useLang } from "../hooks/useLang";

export default function Header() {
  const { lang, toggleLang } = useLang();

  return (
    <header className="flex items-center justify-between gap-4">
      <span className="text-[15px] font-semibold tracking-tight text-ink">
        Peter
      </span>
      <button
        type="button"
        onClick={toggleLang}
        className="text-[13px] font-medium text-ink-mute hover:text-ink transition-colors px-1 py-1"
        aria-label="Toggle language"
      >
        {lang === "zh" ? "EN" : "中文"}
      </button>
    </header>
  );
}
