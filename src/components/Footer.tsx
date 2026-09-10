import { useLang } from "../hooks/useLang";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="mt-16 pt-6 border-t border-line flex flex-wrap items-center justify-between gap-3">
      <span className="text-[11px] text-ink-mute tracking-wide">
        &copy; {new Date().getFullYear()} Peter
      </span>
      <span className="text-[10px] text-ink-mute font-mono tracking-wider">
        {t.footer.built}
      </span>
    </footer>
  );
}
