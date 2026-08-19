import Image from "next/image";
import Container from "@/components/Container";
import Avatar from "@/components/Avatar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team",
};

const team = [
  {
    name: "Jordan Avery",
    role: "Squad Lead / SRE",
    bio: "Focused on reliability engineering and incident response process.",
    photo: "/team/jordan.jpg",
  },
  {
    name: "Giorgi Vakiashvili",
    role: "DevOps Engineer",
    bio: "Builds and operates the infrastructure behind Koruldi's client engagements.",
    photo: "/team/giorgi.jpg",
  },
  {
    name: "Priya Nair",
    role: "Cloud Infrastructure Engineer",
    bio: "Terraform, AWS, and cost-optimized architecture design.",
    photo: "/team/priya.jpg",
  },
  {
    name: "Sam Okafor",
    role: "Platform Engineer",
    bio: "Kubernetes, container platforms, and internal developer tooling.",
    photo: "/team/sam.jpg",
  },
  {
    name: "Lena Kowalski",
    role: "CI/CD & Automation Engineer",
    bio: "Pipeline design, release automation, and testing infrastructure.",
    photo: "/team/lena.jpg",
  },
];

export default function TeamPage() {
  return (
    <>
      <section className="bg-brand-navy py-20 text-white">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-accent">
            Team
          </p>
          <h1 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight">
            The engineers behind the pipelines
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-300">
            A small, senior squad — every engineer here has run production infrastructure, not
            just written about it.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
            {team.map((member) => (
              <div key={member.name} className="rounded-lg border border-brand-line p-6 text-center">
                {member.photo ? (
                  <Image
                    src={member.photo}
                    alt={member.name}
<p className="mt-2 text-sm text-brand-slate">{member.bio}</p>
                     <p className="mt-2 text-sm text-brand-slate">{member.bio}</p>
                    width={80}
                    height={80}
                    className="mx-auto rounded-full object-cover"
                  />
                ) : (
                  <Avatar name={member.name} size={80} />
                )}
                <h3 className="mt-4 text-base font-semibold text-brand-ink">{member.name}</h3>
                <p className="text-sm font-medium text-brand-accent-dark">{member.role}</p>
                <p className="mt-2 text-sm text-brand-slate">{member.bio}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
