import Image from "next/image";

import { siteContent } from "@/content/site";

export function Consultants() {
  const { consultants } = siteContent;

  return (
    <section id="consultants" className="section-padding bg-brand-paper/50">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow justify-center">{consultants.eyebrow}</span>
          <h2 className="section-title mt-5">
            {consultants.titleLine1}
            <br /> {consultants.titleLine2}
          </h2>
          <div className="divider mx-auto mt-7" />
          <p className="lead mt-7">{consultants.description}</p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {consultants.list.map((c) => {
            // `as const` 로 인해 photo 가 리터럴 타입으로 좁혀지는 것을 방지
            // (사진이 있을 때/없을 때 모두 폴백 경로가 도달 가능하도록)
            const photoSrc: string = c.photo;
            return (
            <article
              key={c.name}
              className="group flex flex-col overflow-hidden rounded-2xl border border-brand-ink/10 bg-brand-paper shadow-[0_1px_2px_rgba(26,23,20,0.04)] transition-all hover:-translate-y-0.5 hover:shadow-[0_28px_60px_-32px_rgba(160,122,79,0.35)]"
            >
              <div className="relative aspect-[3/4]">
                <Image
                  src={photoSrc}
                  alt={`${c.name} 컨설턴트 프로필`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute left-5 top-5">
                  <span className="rounded-full bg-black/35 px-3 py-1 text-[10px] font-medium tracking-[0.18em] text-white backdrop-blur">
                    {c.track}
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-7 md:p-8">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-serif text-2xl text-brand-ink md:text-[1.75rem]">
                    {c.name}
                  </h3>
                  <span className="text-[11px] tracking-[0.2em] text-brand-ink/45">
                    {c.nameRoman}
                  </span>
                </div>

                <ul className="mt-6 space-y-2.5 border-t border-brand-ink/10 pt-6">
                  {c.bio.map((line) => (
                    <li
                      key={line}
                      className="flex items-start gap-2.5 text-sm text-brand-ink/80"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-accent" />
                      <span className="leading-relaxed">{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
