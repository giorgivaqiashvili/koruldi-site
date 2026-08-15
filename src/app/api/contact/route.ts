import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { serviceRequestSchema } from "@/lib/validation";
import { sendServiceRequestNotification } from "@/lib/email";

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const parsed = serviceRequestSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed", issues: parsed.error.flatten().fieldErrors },
      { status: 422 }
    );
  }

  // Honeypot tripped — pretend success so bots don't learn to avoid it.
  if (parsed.data.website) {
    return NextResponse.json({ ok: true });
  }

  const { name, email, company, serviceType, message } = parsed.data;

  try {
    await prisma.serviceRequest.create({
      data: { name, email, company: company || null, serviceType, message },
    });
  } catch (error) {
    console.error("Failed to save service request", error);
    return NextResponse.json({ error: "Failed to save your request" }, { status: 500 });
  }

  try {
    await sendServiceRequestNotification(parsed.data);
  } catch (error) {
    console.error("Failed to send notification email", error);
  }

  return NextResponse.json({ ok: true });
}
