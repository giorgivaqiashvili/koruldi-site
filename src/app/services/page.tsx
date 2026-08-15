import Container from "@/components/Container";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
};

const services = [
  {
    title: "CI/CD Pipeline Engineering",
    description:
      "Design and build automated build, test, and deployment pipelines so every change ships safely and consistently.",
  },
  {
    title: "Cloud Infrastructure & IaC",
    description:
      "Provision and manage cloud infrastructure with Terraform or equivalent — version controlled, reviewable, reproducible.",
  },
  {
    title: "Kubernetes & Container Orchestration",
    description:
      "Design, deploy, and operate container platforms that scale with your traffic without turning into a maintenance burden.",
  },
  {
    title: "Observability & Monitoring",
    description:
      "Set up metrics, logging, and tracing with alerting that tells you about real problems before customers do.",
  },
  {
    title: "Security & Compliance Automation",
    description:
      "Bake security scanning, secrets management, and access controls into the pipeline instead of bolting them on later.",
  },
  {
    title: "Incident Response & On-Call",
    description:
      "Runbooks, escalation policies, and on-call rotations so incidents get resolved fast, with a clear postmortem after.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-brand-navy py-20 text-white">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-accent">
            Services
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight">
            End-to-end DevOps, scoped to what your team actually needs
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Engage us for a single project or an ongoing partnership — every engagement starts
            with understanding your current setup before we recommend changes.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2">
            {services.map((service) => (
              <div key={service.title} className="rounded-lg border border-brand-line p-6">
                <h3 className="text-lg font-semibold text-brand-ink">{service.title}</h3>
                <p className="mt-2 text-sm text-brand-slate">{service.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-20">
        <Container className="flex flex-col items-center gap-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-ink">
            Not sure which service you need?
          </h2>
          <p className="max-w-xl text-brand-slate">
            Send us a request and describe your situation — we&apos;ll help you scope the right
            engagement.
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
