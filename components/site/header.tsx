"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/site/logo";
import { siteContent } from "@/content/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-brand-cream/85 backdrop-blur-md border-b border-brand-ink/8"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between md:h-20">
        <Logo />

        <nav className="hidden items-center gap-7 lg:flex">
          {siteContent.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-brand-ink/75 transition-colors hover:text-brand-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button asChild variant="gold" size="sm">
            <Link href={siteContent.ctaShort.href}>
              {siteContent.ctaShort.label}
            </Link>
          </Button>
        </div>

        <button
          type="button"
          aria-label="메뉴 열기"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-full border border-brand-ink/15 lg:hidden"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-brand-ink/8 bg-brand-cream/95 backdrop-blur-md lg:hidden">
          <nav className="container flex flex-col py-4">
            {siteContent.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-brand-ink/8 py-3 text-sm font-medium text-brand-ink/80"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild variant="gold" className="mt-4 w-full">
              <Link
                href={siteContent.ctaShort.href}
                onClick={() => setOpen(false)}
              >
                {siteContent.ctaShort.label}
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
