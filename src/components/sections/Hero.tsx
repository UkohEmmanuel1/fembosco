import Link from "next/link";
import { QuoteButton } from "@/components/ui/QuoteButton";
import { BoltIcon, ShieldIcon, AwardIcon, TruckIcon, StarIcon } from "@/components/ui/icons";
import { site } from "@/lib/site";
import { products, naira } from "@/lib/products";

const trustItems = [
  { icon: BoltIcon, title: "Est. 2003", text: "Two decades of trusted supply" },
  { icon: ShieldIcon, title: "Legrand Partner", text: "Authorised & warranty-backed" },
  { icon: AwardIcon, title: "European Sourcing", text: "Quality-assured products" },
  { icon: TruckIcon, title: "Nationwide Delivery", text: "Lagos & Abuja to all states" },
];

export function Hero() {
  const featured = products.find((p) => p.featured) ?? products[0];
  const chips = [
    { label: "Legrand P17 Tempra", value: "IP67 · IEC 60309" },
    { label: "Distribution Boards", value: "4–24 ways" },
    { label: "Cable Management", value: "IEC 61537" },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-secondary-light/70 via-white to-white">
      {/* Ambient spotlights */}
      <div className="spotlight" aria-hidden="true">
        <div className="absolute -top-32 -left-24 h-[520px] w-[520px] rounded-full bg-brand-secondary/20 blur-[120px] animate-glow-pulse" />
        <div className="absolute top-1/3 right-0 h-[420px] w-[420px] translate-x-1/3 rounded-full bg-brand-accent/15 blur-[120px]" />
      </div>

      <div className="container-hero relative grid grid-cols-1 items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
        {/* Copy */}
        <div className="flex flex-col items-start text-center lg:text-left">
          <p className="inline-flex items-center gap-2 rounded-full border border-brand-secondary/20 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-primary shadow-sm backdrop-blur">
            <BoltIcon className="h-3.5 w-3.5 text-brand-accent" />
            {site.heritage} Heritage · Est. {site.founded} · Authorised Legrand Partner
          </p>

          <h1 className="mt-6 font-display text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-slate-900 sm:text-6xl">
            Nigeria&apos;s Leading Supplier of{" "}
            <span className="text-gradient">Electrical &amp; Industrial</span> Systems
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-500 sm:text-lg">
            Transformers, distribution boards, cable management, lighting and switchgear — sourced
            from the world&apos;s best brands, quality-assured, and delivered across all 36 states.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <Link href="/shop" className="btn-pill-hero">
              Shop Now
            </Link>
            <QuoteButton>Request a Quote</QuoteButton>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/70 px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-brand-primary backdrop-blur transition-all duration-200 ease-smooth hover:border-brand-secondary hover:text-brand-secondary"
            >
              Contact Sales
            </Link>
          </div>

          <div className="mt-12 grid w-full grid-cols-2 gap-4 sm:grid-cols-4">
            {site.stats.map((s) => (
              <div
                key={s.label}
                className="glass rounded-2xl bg-white/70 px-4 py-4 text-center shadow-sm lg:text-left"
              >
                <p className="font-display text-2xl font-semibold tracking-tight text-brand-primary">{s.value}</p>
                <p className="mt-0.5 text-xs text-slate-500">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Abstract + product composition */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/60 bg-gradient-to-br from-brand-primary via-brand-primary-light to-brand-secondary shadow-glowBlue">
            <div className="absolute inset-0 opacity-40" aria-hidden="true" />
            {/* abstract rings */}
            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full border border-white/20" />
            <div className="absolute -left-14 -top-14 h-56 w-56 rounded-full border border-white/15" />
            <div className="absolute right-0 top-1/3 h-64 w-64 rounded-full bg-brand-accent/30 blur-[90px]" />

            {/* product image */}
            <div className="absolute inset-x-8 bottom-10 top-16 overflow-hidden rounded-2xl border border-white/20 bg-white shadow-cardHover">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={featured.image}
                alt={featured.alt}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="font-display text-lg font-semibold tracking-tight text-white">{featured.title}</p>
                <p className="text-xs text-white/80">{naira(featured.price)} {featured.unit}</p>
              </div>
            </div>

            {/* floating rating chip */}
            <div className="glass-strong absolute right-5 top-6 flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 shadow-sm animate-float">
              <StarIcon className="h-4 w-4 fill-amber-400" />
              <span className="text-xs font-semibold text-slate-900">{featured.rating} · {featured.reviewCount} reviews</span>
            </div>
          </div>

          {/* floating spec chips */}
          <div className="mt-5 grid grid-cols-3 gap-3">
            {chips.map((c) => (
              <div key={c.label} className="glass-strong rounded-xl bg-white/80 px-3 py-2.5 text-center shadow-sm">
                <p className="truncate text-[11px] font-semibold text-slate-900">{c.label}</p>
                <p className="mt-0.5 font-mono text-[10px] text-slate-500">{c.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trust bar */}
      <div className="relative border-t border-slate-200/70 bg-white/50 backdrop-blur">
        <div className="container-site grid grid-cols-1 gap-6 py-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => (
            <div key={item.title} className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-brand-secondary/15 bg-brand-secondary-light text-brand-primary shadow-sm">
                <item.icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                <p className="text-xs text-slate-500">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}