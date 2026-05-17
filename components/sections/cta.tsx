import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { iconRegistry } from "@/components/icons";
import { siteContent } from "@/content/site";

type ChannelInputItem = (typeof siteContent.cta.channels)[number];

function resolveChannel(c: ChannelInputItem) {
  const { contact } = siteContent;
  let value: string;
  if ("value" in c) {
    value = c.value;
  } else if (c.valueKey === "phone") {
    value = contact.phone.display;
  } else if (c.valueKey === "kakao") {
    value = contact.kakao;
  } else {
    value = "";
  }

  let href: string;
  if ("href" in c) {
    href = c.href;
  } else if (c.hrefKey === "phoneTel") {
    href = contact.phone.tel;
  } else {
    href = "#";
  }

  return { value, href };
}

export function Cta() {
  const { cta } = siteContent;

  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-brand-accent text-brand-cream"
    >
      <div className="pointer-events-none absolute -right-32 -top-24 h-[420px] w-[420px] rounded-full bg-brand-cream/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-[360px] w-[360px] rounded-full bg-brand-accentSoft/40 blur-3xl" />

      <div className="container relative section-padding">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <span className="eyebrow !text-brand-accentSoft">{cta.eyebrow}</span>
            <h2 className="mt-6 font-serif font-bold text-4xl leading-[1.18] tracking-tight text-brand-cream md:text-5xl lg:text-[3.5rem] lg:leading-[1.1]">
              {cta.titleLine1}
              <br />
              {cta.titleLine2}
            </h2>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-brand-cream/80 md:text-lg">
              {cta.description}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Button
                asChild
                variant="gold"
                size="lg"
                className="bg-brand-cream text-brand-accent hover:bg-brand-cream/90"
              >
                <Link href={cta.primaryCta.href}>
                  {cta.primaryCta.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-brand-cream/40 text-brand-cream hover:bg-brand-cream hover:text-brand-accent"
              >
                <Link href={cta.secondaryCta.href}>
                  {cta.secondaryCta.label}
                </Link>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-brand-cream/65">
              {cta.assurances.map((a) => (
                <span key={a}>{a}</span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            {/* 컨택트 패널 — 네이비 섹션 위에 떠있는 화이트 카드 (콘트라스트) */}
            <div className="rounded-2xl border border-brand-cream/15 bg-brand-cream p-7 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.45)] md:p-8">
              <p className="text-sm font-medium tracking-[0.18em] text-brand-accent">
                {cta.channelsTitle}
              </p>
              <ul className="mt-6 divide-y divide-brand-ink/10">
                {cta.channels.map((c) => {
                  const Icon = iconRegistry[c.icon];
                  const { value, href } = resolveChannel(c);
                  return (
                    <li key={c.label}>
                      <Link
                        href={href}
                        className="group flex items-center gap-4 py-4 transition-colors"
                      >
                        <span className="grid h-11 w-11 place-items-center rounded-full border border-brand-ink/15 bg-brand-paper text-brand-accent transition-colors group-hover:border-brand-accent/40 group-hover:bg-brand-accent/10">
                          <Icon className="h-4 w-4" strokeWidth={1.6} />
                        </span>
                        <span className="flex-1">
                          <span className="block text-xs uppercase tracking-[0.18em] text-brand-ink/55">
                            {c.label}
                          </span>
                          <span className="mt-0.5 block font-serif text-lg text-brand-ink">
                            {value}
                          </span>
                          <span className="block text-xs text-brand-ink/55">
                            {c.sub}
                          </span>
                        </span>
                        <ArrowRight className="h-4 w-4 text-brand-ink/40 transition-transform group-hover:translate-x-1 group-hover:text-brand-accent" />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
