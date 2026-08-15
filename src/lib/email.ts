import { Resend } from "resend";
import type { ServiceRequestInput } from "@/lib/validation";

const resendApiKey = process.env.RESEND_API_KEY;
const notifyTo = process.env.CONTACT_NOTIFY_EMAIL;
const fromAddress = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

export async function sendServiceRequestNotification(data: ServiceRequestInput) {
  if (!resendApiKey || !notifyTo) {
    console.warn(
      "RESEND_API_KEY or CONTACT_NOTIFY_EMAIL not set — skipping email notification."
    );
    return;
  }

  const resend = new Resend(resendApiKey);

  await resend.emails.send({
    from: fromAddress,
    to: notifyTo,
    replyTo: data.email,
    subject: `New service request from ${data.name}`,
    text: [
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Company: ${data.company || "-"}`,
      `Service: ${data.serviceType}`,
      "",
      "Message:",
      data.message,
    ].join("\n"),
  });
}
