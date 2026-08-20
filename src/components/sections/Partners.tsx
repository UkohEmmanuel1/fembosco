import { FancyText } from "@/components/ui/FancyText";
import { partners, partnerNames } from "@/lib/partners";

export function Partners() {
  return (
    <section className="container-site py-20 md:py-28">
      <div className="flex flex-col items-center text-center">
        <h2 className="section-title">Our Partners</h2>
        <div className="divider-brand" aria-hidden="true" />
        <p className="mt-4 font-display text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
          <FancyText
            strings={partnerNames}
            prefix="We Partner with "
            suffix=" To Exceed Clients' Expectations"
            className="font-display text-xl font-semibold tracking-tight sm:text-2xl"
            prefixClassName="text-slate-900"
            suffixClassName="text-slate-900"
            stringClassName="text-brand-accent"
            cursorClassName="text-brand-accent"
          />
        </p>
      </div>

      <div className="mt-12 grid grid-cols-3 items-center gap-x-8 gap-y-10">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="flex h-20 items-center justify-center opacity-70 grayscale transition-all duration-300 ease-smooth hover:opacity-100 hover:grayscale-0"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={partner.logo}
              alt={partner.alt}
              loading="lazy"
              className="max-h-full max-w-full object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}