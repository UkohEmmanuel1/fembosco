import { site } from "@/lib/site";

export const salesEmail = site.emailsLagos[0] ?? "fembosco@fembosco.com";

export function buildMailto({ to, subject, body }: { to: string; subject: string; body: string }): string {
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}