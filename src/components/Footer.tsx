import { useLang } from "../hooks/useLang";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="mt-24 pt-8 border-t border-line flex flex-wrap items-center justify-between gap-3">
      <span className="text-[12px] text-ink-mute">
        &copy; {new Date().getFullYear()} Peter
      </span>
      <div className="flex items-center gap-4">
        <a
          href="https://github.com/wenhanweime"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[12px] text-ink-mute hover:text-accent transition-colors"
        >
          GitHub
        </a>
        <span className="text-[12px] text-ink-mute">{t.footer.built}</span>
      </div>
    </footer>
  );
}
