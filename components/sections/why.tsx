import Image from "next/image";
import { ImageIcon } from "lucide-react";

import { siteContent } from "@/content/site";

export function Why() {
  const { why } = siteContent;

  return (
    <section id="why" className="section-padding">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: header */}
          <div className="lg:col-span-5">
            <span className="eyebrow">{why.eyebrow}</span>
            <h2 className="section-title mt-5">
              {why.titleLine1}
              <br />
              {why.titleLine2}
            </h2>
            <div className="divider mt-7" />
            <p className="lead mt-7">{why.description}</p>
            <p className="mt-5 text-sm leading-relaxed text-brand-ink/60">
              {why.descriptionExtra}
            </p>
          </div>

          {/* Right: 2 KakaoTalk screenshots */}
          <div className="lg:col-span-7">
            <div className="grid gap-5 sm:grid-cols-2">
              {why.screenshots.map((shot, idx) => {
                // `as const` 로 인해 src 가 리터럴 타입으로 좁혀지는 것 방지
                const src: string = shot.src;
                return (
                  <figure key={idx} className="flex flex-col gap-3">
                    <div className="relative isolate aspect-[3/4] overflow-hidden rounded-2xl border border-brand-ink/10 bg-brand-paper shadow-[0_10px_30px_-6px_rgba(0,0,0,0.35)]">
                      {src ? (
                        <Image
                          src={src}
                          alt={shot.alt}
                          fill
                          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 40vw, 90vw"
                          className="rounded-2xl object-cover"
                        />
                      ) : (
                        <div className="flex h-full w-full flex-col items-center justify-center gap-3 p-6 text-center text-brand-ink/45">
                          <ImageIcon
                            className="h-9 w-9 text-brand-accentSoft"
                            strokeWidth={1.3}
                          />
                          <p className="font-serif text-sm text-brand-ink/70">
                            카카오톡 캡처 {idx + 1}
                          </p>
                          <code className="mt-1 rounded bg-brand-deep/60 px-2 py-1 text-[10px] leading-relaxed text-brand-accentSoft">
                            public/screenshots/chat-{idx + 1}.jpg
                          </code>
                        </div>
                      )}
                    </div>
                    {shot.caption && (
                      <figcaption className="text-center text-xs text-brand-ink/60">
                        {shot.caption}
                      </figcaption>
                    )}
                  </figure>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
