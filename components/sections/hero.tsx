import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteContent } from "@/content/site";

export function Hero() {
  const { hero } = siteContent;

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 md:pt-36 lg:pt-44"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 grain-bg opacity-60" />
      <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-brand-accentSoft/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 top-1/3 h-[420px] w-[420px] rounded-full bg-brand-paper blur-3xl" />

      <div className="container relative">
        <div className="grid items-start gap-14 lg:grid-cols-12 lg:gap-10">
          {/* LEFT */}
          <div className="lg:col-span-5">
            <span className="eyebrow">
              <Sparkles className="h-3.5 w-3.5" />
              {hero.eyebrow}
            </span>

            <h1 className="mt-6 font-serif font-bold text-4xl leading-[1.18] tracking-tight text-brand-ink md:text-5xl lg:text-[2.75rem] lg:leading-[1.1]">
              {hero.titleLine1}
              <br />
              <span className="relative inline-block">
                <span className="relative z-10">
                  {hero.titleHighlight}
                </span>
                <span className="absolute bottom-2 left-0 -z-0 h-3 w-full bg-brand-accent/25" />
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-relaxed text-brand-ink/70 md:text-lg">
              {hero.description}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" variant="gold">
                <Link href={hero.primaryCta.href}>
                  {hero.primaryCta.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>

              <Button asChild size="lg" variant="outline">
                <Link href={hero.secondaryCta.href}>
                  {hero.secondaryCta.label}
                </Link>
              </Button>
            </div>

            <dl className="mt-14 flex max-w-xl flex-wrap gap-x-10 gap-y-6 border-t border-brand-ink/10 pt-8">
              {hero.stats.map((s) => (
                <div key={s.label} className="min-w-[120px] flex-1">
                  <dt className="font-serif text-2xl text-brand-ink md:text-3xl">
                    {s.value}
                  </dt>
                  <dd className="mt-1 text-xs leading-snug text-brand-ink/55 md:text-sm">
                    {s.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* RIGHT: Images only */}
          <div className="relative lg:col-span-7 overflow-visible">
            <div
              className="
                grid
                grid-cols-1
                gap-4
                sm:grid-cols-2
                overflow-visible
                items-center
              "
            >
              {hero.images.map((img, idx) => {
                const src: string = img.src;

                return (
                  <div
                    key={idx}
                    className="
                      relative
                      aspect-[3/4]
                      overflow-visible
                      p-4
                      flex
                      items-center
                      justify-center
                    "
                  >
                    {src ? (
                      <Image
                        src={src}
                        alt={img.alt}
                        fill
                        sizes="
                          (min-width: 1280px) 32vw,
                          (min-width: 1024px) 36vw,
                          (min-width: 640px) 44vw,
                          92vw
                        "
                        className="
                          object-contain
                          object-center
                          scale-[1.00]
                        "
                        priority={idx === 0}
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-brand-ink/40">
                        No Image
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}