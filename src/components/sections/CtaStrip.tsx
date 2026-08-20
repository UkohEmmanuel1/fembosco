import Link from "next/link";
import { PhoneIcon } from "@/components/ui/icons";
import { site } from "@/lib/site";

export function CtaStrip() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-secondary via-brand-primary to-brand-primary-dark">
      <div className="absolute -left-16 bottom-0 h-72 w-72 rounded-full bg-brand-accent/25 blur-[90px]" aria-hidden="true" />
      <div className="container-site relative flex flex-col items-center justify-between gap-8 px-4 py-[45px] text-center sm:px-6 md:flex-row md:text-left">
        <div>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white">
            Get in touch with us
          </h2>
          <p className="mt-2 flex items-center justify-center gap-2 text-[15px] text-white/80 md:justify-start">
            <PhoneIcon className="h-4 w-4" />
            Our customer service team is always available to answer all your questions — {site.phonePrimary}
          </p>
        </div>
        <Link href="/contact" className="btn-white-blue shrink-0">
          Contact Sales
        </Link>
      </div>
    </section>
  );
}