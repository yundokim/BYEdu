import Link from "next/link";

import { Logo } from "@/components/site/logo";
import { siteContent } from "@/content/site";

export function Footer() {
  const { footer, contact } = siteContent;

  return (
    <footer className="border-t border-brand-ink/10 bg-brand-cream">
      <div className="container py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-6 max-w-sm whitespace-pre-line text-sm leading-relaxed text-brand-ink/65">
              {footer.description}
            </p>
            <div className="mt-7 space-y-1 text-sm text-brand-ink/65">
              <p>{contact.locationNote}</p>
              <p>대표 {contact.representative}</p>
              <p>
                {contact.phone.display} · {contact.email}
              </p>
            </div>
          </div>

          {footer.columns.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-brand-ink/45">
                {col.title}
              </p>
              <ul className="mt-4 space-y-3">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-brand-ink/75 transition-colors hover:text-brand-accent"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-brand-ink/10 pt-7 text-xs text-brand-ink/45 md:flex-row md:items-center">
          <p>{footer.copyright(new Date().getFullYear())}</p>
          <p className="flex gap-5">
            {footer.bottomLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-brand-accent"
              >
                {link.label}
              </Link>
            ))}
          </p>
        </div>
      </div>
    </footer>
  );
}
