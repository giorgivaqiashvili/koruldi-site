"use client";

import { FormEvent, useState } from "react";

const serviceOptions = [
  "CI/CD Pipeline Engineering",
  "Cloud Infrastructure & IaC",
  "Kubernetes & Container Orchestration",
  "Observability & Monitoring",
  "Security & Compliance Automation",
  "Incident Response & On-Call",
  "Not sure yet",
];

type Status = "idle" | "submitting" | "success" | "error";

export default function ServiceRequestForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-brand-line bg-slate-50 p-8 text-center">
        <h3 className="text-lg font-semibold text-brand-ink">Request received</h3>
        <p className="mt-2 text-sm text-brand-slate">
          Thanks for reaching out — we&apos;ll be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Honeypot field, hidden from real users via CSS */}
      <div className="hidden">
        <label htmlFor="website">Website</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-brand-ink">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-1 w-full rounded-md border border-brand-line px-3 py-2 text-sm focus:border-brand-accent focus:outline-none focus:ring-1 focus:ring-brand-accent"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-brand-ink">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1 w-full rounded-md border border-brand-line px-3 py-2 text-sm focus:border-brand-accent focus:outline-none focus:ring-1 focus:ring-brand-accent"
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-brand-ink">
          Company <span className="text-brand-slate">(optional)</span>
        </label>
        <input
          id="company"
          name="company"
          type="text"
          className="mt-1 w-full rounded-md border border-brand-line px-3 py-2 text-sm focus:border-brand-accent focus:outline-none focus:ring-1 focus:ring-brand-accent"
        />
      </div>

      <div>
        <label htmlFor="serviceType" className="block text-sm font-medium text-brand-ink">
          Service needed
        </label>
        <select
          id="serviceType"
          name="serviceType"
          required
          defaultValue=""
          className="mt-1 w-full rounded-md border border-brand-line px-3 py-2 text-sm focus:border-brand-accent focus:outline-none focus:ring-1 focus:ring-brand-accent"
        >
          <option value="" disabled>
            Select a service
          </option>
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-brand-ink">
          Tell us about your team and what you need
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          rows={5}
          className="mt-1 w-full rounded-md border border-brand-line px-3 py-2 text-sm focus:border-brand-accent focus:outline-none focus:ring-1 focus:ring-brand-accent"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600" role="alert">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-md bg-brand-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-navy-soft disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Send request"}
      </button>
    </form>
  );
}
