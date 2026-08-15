import Link from "next/link";
import Container from "@/components/Container";
import { siteConfig } from "@/lib/site";

const highlights = [
  {
    title: "CI/CD Pipelines",
    description: "Automated build, test, and deploy pipelines that ship safely, every time.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 7h11a3 3 0 013 3v1m0 0l-2.5-2.5M18 11l2.5-2.5M20 17H9a3 3 0 01-3-3v-1m0 0l2.5 2.5M6 13l-2.5 2.5"
      />
    ),
  },
  {
    title: "Cloud Infrastructure",
    description: "Infrastructure as Code on AWS, GCP, or Azure — reproducible and version controlled.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7 17a4 4 0 01-1-7.874A5.5 5.5 0 0116.9 8.02 4.5 4.5 0 0117 17H7z"
      />
    ),
  },
  {
    title: "Observability",
    description: "Monitoring, logging, and alerting so you know about problems before your customers do.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 17l4-8 4 5 3-4 4 3M3 17h18"
      />
    ),
  },
];

const stats = [
  { value: "24/7", label: "On-call coverage" },
  { value: "99.9%", label: "Target uptime SLA" },
  { value: "<15min", label: "Avg. incident response" },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-navy text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        <Container className="relative py-24 sm:py-32">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-accent">
            DevOps Engineering Squad
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            {siteConfig.tagline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            {siteConfig.description}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-md bg-brand-accent px-6 py-3 text-sm font-semibold text-brand-ink transition-colors hover:bg-cyan-300"
            >
              Request our services
            </Link>
            <Link
              href="/services"
              className="rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              See what we do
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-b border-brand-line bg-brand-navy-soft text-white">
        <Container className="grid grid-cols-1 divide-y divide-white/10 py-8 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {stats.map((stat) => (
            <div key={stat.label} className="px-4 py-4 text-center sm:py-0">
              <p className="text-2xl font-bold text-brand-accent">{stat.value}</p>
              <p className="mt-1 text-sm text-slate-300">{stat.label}</p>
            </div>
          ))}
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-brand-ink">
              What we bring to your team
            </h2>
            <p className="mt-4 text-brand-slate">
              We embed DevOps best practices into your existing workflow — no rip-and-replace,
              just reliable systems built to scale with you.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.title} className="rounded-lg border border-brand-line p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-brand-navy/5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.75}
                    stroke="currentColor"
                    className="h-6 w-6 text-brand-accent-dark"
                  >
                    {item.icon}
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-brand-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-brand-slate">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-20">
        <Container className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-ink">
            Ready to stop firefighting and start shipping?
          </h2>
          <p className="max-w-xl text-brand-slate">
            Tell us about your team and we&apos;ll follow up to scope the right engagement.
          </p>
          <Link
            href="/contact"
            className="rounded-md bg-brand-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-navy-soft"
          >
            Request services
          </Link>
        </Container>
      </section>
    </>
  );
}
