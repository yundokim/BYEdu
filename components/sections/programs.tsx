import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { siteContent } from "@/content/site";

export function Programs() {
  const { programs } = siteContent;

  return (
    <section
      id="programs"
      className="section-padding bg-brand-paper"
    >
      <div className="container">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow !text-brand-accentSoft">
              {programs.eyebrow}
            </span>
            <h2 className="section-title mt-5">
              {programs.titleLine1}
              <br />
              {programs.titleLine2}
            </h2>
            <div className="mt-7 h-px w-12 bg-brand-accentSoft" />
          </div>
          <p className="lead max-w-md whitespace-pre-line md:text-right">
            {programs.description}
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {programs.list.map((p, idx) => (
            <article
              key={p.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-brand-ink/10 bg-brand-cream p-7 transition-all hover:-translate-y-0.5 hover:border-brand-accent/40 hover:shadow-[0_28px_60px_-32px_rgba(30,58,138,0.25)] md:p-9"
            >
              <div className="flex items-center justify-between">
                <Badge variant="default">{p.tag}</Badge>
                <span className="font-serif text-xs text-brand-ink/30">
                  0{idx + 1}
                </span>
              </div>

              <h3 className="mt-6 font-serif font-extrabold text-2xl leading-snug text-brand-ink md:text-[1.7rem]">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-ink/65">
                {p.desc}
              </p>

              <ul className="mt-6 space-y-2.5 border-t border-dashed border-brand-ink/15 pt-6">
                {p.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-sm text-brand-ink/80"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
