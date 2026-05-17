import { siteContent } from "@/content/site";

export function Results() {
  const { results } = siteContent;

  return (
    <section
      id="results"
      className="relative overflow-hidden bg-gradient-to-b from-brand-cream via-brand-paper to-brand-accentSoft/45 section-padding"
    >
      <div className="container relative">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="section-title">
            {results.titleLine1}
            <br />
            {results.titleLine2}
          </h2>
          <div className="divider mx-auto mt-7" />
        </div>

        {/* Admission list — 큰 글씨 한 줄씩 */}
        <ul className="mt-16 space-y-7 text-center md:space-y-9 lg:mt-20 lg:space-y-11">
          {results.list.map((item, i) => (
            <li
              key={i}
              className="font-serif text-2xl leading-tight tracking-tight md:text-3xl lg:text-[2.5rem]"
            >
              <span className="text-brand-ink/55">{item.prefix}</span>{" "}
              <span className="font-bold text-brand-accent">{item.target}</span>{" "}
              <span className="font-bold text-brand-ink">합격</span>
            </li>
          ))}
        </ul>

        {/* 세로 ... */}
        <div
          className="my-14 flex flex-col items-center gap-2 font-serif text-3xl text-brand-accent/60 md:my-20 md:text-4xl"
          aria-hidden
        >
          <span>·</span>
          <span>·</span>
          <span>·</span>
        </div>

        {/* Closing — 클라이맥스 메시지 */}
        <p className="text-center font-serif text-3xl font-bold leading-tight text-brand-ink md:text-5xl lg:text-[3.5rem]">
          {results.closing.before}{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-brand-accent">
              {results.closing.highlight}
            </span>
            <span className="absolute bottom-1 left-0 -z-0 h-3 w-full bg-brand-accent/20" />
          </span>
          {results.closing.after}
        </p>
      </div>
    </section>
  );
}
