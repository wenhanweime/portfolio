import { ArrowUpRight } from "lucide-react";
import { useLang } from "../hooks/useLang";
export default function WritingLinks() {
  const { t } = useLang();
  return (
    <section className="writing">
      <h2>{t.writing.title}</h2>
      <a
        href="https://wenhanweime.github.io/us-stock-daily/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div>
          <h3>{t.writing.stockDaily.label}</h3>
          <p>{t.writing.stockDaily.blurb}</p>
        </div>
        <ArrowUpRight size={16} />
      </a>
    </section>
  );
}
