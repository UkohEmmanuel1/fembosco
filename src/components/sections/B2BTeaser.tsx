import Link from "next/link";
import { QuoteButton } from "@/components/ui/QuoteButton";
import { CheckCircleIcon, UserIcon, TagIcon, TruckIcon } from "@/components/ui/icons";

const perks = [
  { icon: UserIcon, title: "Corporate Accounts", text: "Dedicated account managers for contractors, developers and industry." },
  { icon: TagIcon, title: "Tiered Pricing", text: "Volume discounts and wholesale rates on bulk orders." },
  { icon: CheckCircleIcon, title: "Trade Credit", text: "Apply for credit terms on approved corporate accounts." },
  { icon: TruckIcon, title: "Bulk Logistics", text: "Project-scale delivery planning across all 36 states." },
];

export function B2BTeaser() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-primary via-brand-primary-dark to-slate-900">
      <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-brand-secondary/40 blur-[100px]" aria-hidden="true" />
      <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-brand-accent/25 blur-[100px]" aria-hidden="true" />
      <div className="container-site relative grid grid-cols-1 items-center gap-12 py-20 md:grid-cols-2 md:py-28">
        <div className="text-white">
          <p className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-accent backdrop-blur">
            B2B / Wholesale
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Trade Direct with Fembosco
          </h2>
          <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-white/80">
            For contractors, developers, OEMs and government projects, our B2B programme offers tiered
            pricing, MOQ guidance, corporate accounts and trade credit — supported by a dedicated
            account team.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/b2b" className="btn-pill">
              Open B2B Account
            </Link>
            <QuoteButton variant="hero">Request a Quote</QuoteButton>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {perks.map((p) => (
            <div
              key={p.title}
              className="group rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur transition-all duration-300 ease-smooth hover:-translate-y-1 hover:border-brand-accent/60"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-accent/20 text-brand-accent">
                <p.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-display text-base font-semibold tracking-tight text-white">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}