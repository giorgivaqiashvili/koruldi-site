import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-line bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold text-brand-ink">
          <Image
            src="/koruldi-logo.png"
            alt={`${siteConfig.name} logo`}
            width={48}
            height={48}
            priority
          />
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-brand-slate sm:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-brand-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="rounded-md bg-brand-navy px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-navy-soft"
        >
          Request
        </Link>
      </div>

      <nav className="flex items-center gap-6 overflow-x-auto border-t border-brand-line px-6 py-2 text-sm font-medium text-brand-slate sm:hidden">
        {siteConfig.nav.map((item) => (
          <Link key={item.href} href={item.href} className="whitespace-nowrap hover:text-brand-ink">
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
