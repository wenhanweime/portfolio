import Avatar from "./Avatar";
import { useLang } from "../hooks/useLang";

export default function Hero() {
  const { t } = useLang();

  return (
    <section>
      <div className="flex items-center gap-5 mb-8">
        <Avatar size={88} label={t.hero.name} />
        <div className="min-w-0">
          <h1 className="text-[2rem] sm:text-[2.25rem] leading-[1.1] font-semibold tracking-tight text-ink">
            {t.hero.name}
          </h1>
          <p className="mt-2 text-[13px] text-ink-mute">
            {t.hero.affiliation}
          </p>
        </div>
      </div>

      <p className="font-serif-bio text-[17px] sm:text-[18px] text-ink-dim leading-[1.7] max-w-xl">
        {t.hero.bio}
      </p>
    </section>
  );
}
