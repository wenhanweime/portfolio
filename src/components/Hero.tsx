import Avatar from "./Avatar";
import { useLang } from "../hooks/useLang";

export default function Hero() {
  const { t } = useLang();

  return (
    <section>
      <div className="flex items-center gap-5 mb-8">
        <Avatar size={88} label={t.hero.name} />
        <div className="min-w-0">
          <h1 className="text-[1.5rem] sm:text-[1.75rem] leading-[1.1] font-semibold tracking-tight text-ink">
            {t.hero.name}
          </h1>
          <div className="mt-2.5 text-[13px] text-ink-mute leading-[1.55] flex flex-col gap-1">
            {t.hero.affiliation.map((line) => (
              <p key={line} className="m-0">
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
