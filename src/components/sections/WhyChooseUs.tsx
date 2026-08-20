import { SectionHeading } from "@/components/ui/SectionHeading";
import { ShieldIcon, AwardIcon, BoxIcon, TruckIcon, BoltIcon } from "@/components/ui/icons";
import { site } from "@/lib/site";

const values = [
  {
    icon: ShieldIcon,
    title: "Authenticity Guaranteed",
    text: "As an authorised Legrand partner and distributor for Schneider, ABB and Philips, every product is genuine and warranty-backed.",
  },
  {
    icon: AwardIcon,
    title: "European Quality Sourcing",
    text: "We import from leading European manufacturers and quality-assure every consignment before it reaches your project.",
  },
  {
    icon: BoltIcon,
    title: "Engineering Expertise",
    text: "Two decades of electrical distribution experience mean the right specification, the first time.",
  },
  {
    icon: TruckIcon,
    title: "Nationwide Delivery",
    text: "Warehouses in Lagos and Abuja deliver to all 36 states, with flexible logistics for contractors and industry.",
  },
  {
    icon: BoxIcon,
    title: "Bulk & Wholesale Pricing",
    text: "Tiered pricing, MOQ guidance and trade credit for registered corporate and B2B accounts.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="container-site py-20 md:py-28">
      <SectionHeading
        title="Why Choose Fembosco"
        subtitle="The trusted partner for electrical and industrial systems across Nigeria."
      />
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {values.map((v) => (
          <div
            key={v.title}
            className="group rounded-2xl border border-slate-200/70 bg-white p-7 shadow-card transition-all duration-300 ease-smooth hover:-translate-y-1 hover:border-brand-secondary/40 hover:shadow-cardHover"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-brand-secondary/15 bg-brand-secondary-light text-brand-primary shadow-sm transition-all duration-200 ease-smooth group-hover:shadow-glow">
              <v.icon className="h-7 w-7" />
            </span>
            <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-slate-900">{v.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-500">{v.text}</p>
          </div>
        ))}
        <div className="relative flex flex-col justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-brand-primary to-brand-primary-dark p-7 text-white shadow-glow">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-accent/30 blur-[60px]" aria-hidden="true" />
          <h3 className="relative font-display text-xl font-semibold tracking-tight text-white/80">{site.name}</h3>
          <p className="relative mt-3 text-sm leading-relaxed text-white/80">{site.qualityText}</p>
        </div>
      </div>
    </section>
  );
}