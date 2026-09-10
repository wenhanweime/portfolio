import { useLang } from "../hooks/useLang";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="px-6 sm:px-10 py-5 border-t border-border flex items-center justify-between">
      <span className="text-xs text-text-muted">
        &copy; {new Date().getFullYear()}
      </span>
      <span className="text-[10px] text-text-muted font-mono">
        {t.footer.built}
      </span>
    </footer>
  );
}
