import Image from "next/image";
import Link from "next/link";

import { siteContent } from "@/content/site";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  href = "#top",
}: {
  className?: string;
  href?: string;
}) {
  const { brand } = siteContent;
  const hasLogoImage = brand.logo.src.length > 0;

  return (
    <Link
      href={href}
      className={cn("group flex items-center gap-3", className)}
      aria-label={`${brand.name} 홈`}
    >
      {hasLogoImage ? (
        <Image
          src={brand.logo.src}
          alt={brand.logo.alt}
          width={192}
          height={64}
          className="h-12 w-auto object-contain md:h-14"
          priority
        />
      ) : (
        <span className="font-serif text-3xl leading-none text-brand-accent transition-colors group-hover:text-brand-ink md:text-4xl">
          {brand.initial}
        </span>
      )}

      <span className="flex flex-col leading-none">
        <span className="font-serif text-2xl font-bold tracking-tight text-brand-ink md:text-4xl">
          {brand.name}
        </span>

        <span className="mt-1 text-[9px] font-medium tracking-[0.28em] text-brand-ink/45 md:text-[10px]">
          {brand.nameEn}
        </span>
      </span>
    </Link>
  );
}
