import Container from "@/components/Container";
import ServiceRequestForm from "@/components/ServiceRequestForm";
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
        <Container className="max-w-2xl">
          <div className="rounded-lg border border-brand-line p-8">
            <ServiceRequestForm />
          </div>
        </Container>
      </section>
    </>
  );
}
