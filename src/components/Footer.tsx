import { useLang } from "../hooks/useLang";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="px-6 sm:px-10 py-5 border-t border-border/80 flex items-center justify-between gap-4">
      <span className="text-[11px] text-text-muted tracking-wide">
        &copy; {new Date().getFullYear()} Peter
      </span>
      <span className="text-[10px] text-text-muted font-mono tracking-wider">
        {t.footer.built}
      </span>
    </footer>
  );
}
