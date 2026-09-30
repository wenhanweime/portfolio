import { ArrowUpRight } from "lucide-react";
import { useLang } from "../hooks/useLang";
export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="site-footer">
      <span>© {new Date().getFullYear()} wenhan</span>
      <span>{t.footer.built}</span>
      <a
        href="https://github.com/wenhanweime"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
        <ArrowUpRight size={14} />
      </a>
    </footer>
  );
}
