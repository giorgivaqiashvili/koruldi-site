import { z } from "zod";

export const serviceRequestSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(200),
  email: z.string().trim().email("Enter a valid email address").max(320),
  company: z.string().trim().max(200).optional().or(z.literal("")),
  serviceType: z.string().trim().min(1, "Select a service"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(5000),
  // Honeypot field: real users never fill this in, bots often do.
  website: z.string().max(0).optional().or(z.literal("")),
});

export type ServiceRequestInput = z.infer<typeof serviceRequestSchema>;
