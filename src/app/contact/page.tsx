import Container from "@/components/Container";
import ServiceRequestForm from "@/components/ServiceRequestForm";
import { siteConfig } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-brand-navy py-20 text-white">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-accent">
            Contact
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight">
            Request our services
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Tell us a bit about your team and what you need. We&apos;ll follow up by email to
            scope the engagement.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-[2fr_1fr]">
          <div className="rounded-lg border border-brand-line p-8">
            <ServiceRequestForm />
          </div>

          <div>
            <h2 className="text-lg font-semibold text-brand-ink">Prefer email?</h2>
            <p className="mt-2 text-sm text-brand-slate">
              Reach us directly at{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-brand-accent-dark underline">
                {siteConfig.email}
              </a>
              .
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
