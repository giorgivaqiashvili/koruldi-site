import Container from "@/components/Container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

const values = [
  {
    title: "Automate everything repeatable",
    description:
      "If a human has to do it twice, it becomes a script. If a script runs twice, it becomes a pipeline.",
  },
  {
    title: "Reliability over heroics",
    description:
      "We design systems so incidents are boring: caught early, diagnosed fast, resolved without a scramble.",
  },
  {
    title: "Work in the open",
    description:
      "Infrastructure changes are reviewed, versioned, and documented — never a one-off change on a live box.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-brand-navy py-20 text-white">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-accent">
            About us
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight">
            A focused squad of DevOps engineers, on call for your infrastructure
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            Koruldi is a small team of engineers who specialize in the unglamorous, essential work
            of keeping software running: build pipelines, cloud infrastructure, monitoring, and
            incident response. We work alongside product teams so engineers can focus on features,
            not infrastructure fires.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <h2 className="text-3xl font-bold tracking-tight text-brand-ink">How we work</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="rounded-lg border border-brand-line p-6">
                <h3 className="text-lg font-semibold text-brand-ink">{value.title}</h3>
                <p className="mt-2 text-sm text-brand-slate">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-20">
        <Container className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-brand-ink">Our story</h2>
          <p className="mt-4 text-brand-slate">
            Koruldi started with a simple observation: most engineering teams don&apos;t need a
            full-time platform organization, but they still need production-grade infrastructure.
            We formed as a squad that plugs into existing teams, brings deep DevOps expertise for
            exactly as long as it&apos;s needed, and leaves behind systems your own engineers can
            operate and extend — not a black box that only we understand.
          </p>
          <p className="mt-4 text-brand-slate">
            We&apos;ve seen what happens when infrastructure is treated as an afterthought:
            fragile deploys, 2am pages for problems that should&apos;ve been caught in CI, and
            cloud bills nobody can explain. Our approach is deliberately unglamorous — clear
            ownership, everything as code, and reliability measured, not assumed.
          </p>
        </Container>
      </section>
    </>
  );
}
