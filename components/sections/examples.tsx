import Image from "next/image";
import { ArrowRight, ImageIcon } from "lucide-react";

import { siteContent } from "@/content/site";

type ExamplePhoto = {
  src: string;
  alt: string;
};

function PhotoFrame({
  photo,
  label,
  placeholderPath,
  points,
  pointVariant = "neutral",
}: {
  photo: ExamplePhoto;
  label: string;
  placeholderPath: string;
  points?: readonly string[];
  pointVariant?: "before" | "after" | "neutral";
}) {
  // literal narrowing 방지
  const src: string = photo.src;

  const bulletColor =
    pointVariant === "after"
      ? "bg-brand-accent"
      : pointVariant === "before"
        ? "bg-brand-ink/40"
        : "bg-brand-ink/40";

  return (
    <figure className="flex flex-col gap-3">
      <div
        className="
          overflow-hidden
          rounded-2xl
          border
          border-brand-ink/10
          bg-brand-paper
          p-3
          shadow-[0_10px_30px_-6px_rgba(30,58,138,0.18)]
        "
      >
        {src ? (
          <Image
            src={src}
            alt={photo.alt}
            width={1200}
            height={1600}
            sizes="
              (min-width: 1280px) 34vw,
              (min-width: 1024px) 40vw,
              (min-width: 640px) 44vw,
              92vw
            "
            className="
              block
              h-auto
              w-full
              object-contain
            "
          />
        ) : (
          <div className="flex aspect-[4/5] w-full flex-col items-center justify-center gap-3 p-6 text-center text-brand-ink/45">
            <ImageIcon
              className="h-9 w-9 text-brand-accentSoft"
              strokeWidth={1.3}
            />

            <p className="font-serif text-sm text-brand-ink/70">
              {label}
            </p>

            <code className="mt-1 rounded bg-brand-deep/60 px-2 py-1 text-[10px] leading-relaxed text-brand-accentSoft">
              {placeholderPath}
            </code>
          </div>
        )}
      </div>

      <figcaption className="text-center text-xs font-medium tracking-[0.22em] text-brand-ink/55">
        {label}
      </figcaption>

      {points && points.length > 0 && (
        <ul className="mt-4 space-y-4">
          {points.map((point, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-lg leading-relaxed text-brand-ink/80 md:text-xl"
            >
              <span className={`mt-3 h-2 w-2 shrink-0 rounded-full ${bulletColor}`} />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}
    </figure>
  );
}

export function Examples() {
  const { examples } = siteContent;

  return (
    <section id="examples" className="section-padding">
      <div className="container">
        {/* Header */}
        <div className="grid items-end gap-10 md:grid-cols-2">
          <div>
            <span className="eyebrow">
              {examples.eyebrow}
            </span>

            <h2 className="section-title mt-5">
              {examples.titleLine1}
              <br />
              {examples.titleLine2}
            </h2>

            <div className="divider mt-7" />
          </div>

          <p className="lead">
            {examples.description}
          </p>
        </div>

        {/* Example list */}
        <div className="mt-16 space-y-16 lg:space-y-24">
          {examples.list.map((ex, idx) => (
            <article
              key={idx}
              className="flex flex-col gap-6"
            >
              {ex.label && (
                <p className="text-xs font-medium tracking-[0.22em] text-brand-accent">
                  EXAMPLE 0{idx + 1} · {ex.label}
                </p>
              )}

              {/* Before -> After */}
              <div
                className="
                  grid
                  items-center
                  gap-6
                  sm:grid-cols-[1fr_auto_1fr]
                  sm:gap-8
                  lg:gap-10
                "
              >
                {/* BEFORE */}
                <PhotoFrame
                  photo={ex.before}
                  label="BEFORE · 수정 전"
                  placeholderPath={`public/examples/before-${idx + 1}.jpg`}
                  points={ex.beforePoints}
                  pointVariant="before"
                />

                {/* Arrow */}
                <div className="flex items-center justify-center py-4 sm:py-0">
                  <div
                    className="
                      grid
                      h-14
                      w-14
                      place-items-center
                      rounded-full
                      bg-brand-accent
                      text-brand-cream
                      shadow-[0_10px_30px_-8px_rgba(30,58,138,0.5)]
                    "
                  >
                    <ArrowRight
                      className="h-6 w-6 rotate-90 sm:rotate-0"
                      strokeWidth={2.2}
                    />
                  </div>
                </div>

                {/* AFTER */}
                <PhotoFrame
                  photo={ex.after}
                  label="AFTER · 수정 후"
                  placeholderPath={`public/examples/after-${idx + 1}.jpg`}
                  points={ex.afterPoints}
                  pointVariant="after"
                />
              </div>
            </article>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="mt-16 text-center text-xs text-brand-ink/45">
          {examples.disclaimer}
        </p>
      </div>
    </section>
  );
}