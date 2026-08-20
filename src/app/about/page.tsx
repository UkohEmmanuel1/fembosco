import { PageHeader } from "@/components/ui/PageHeader";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/lib/site";
import { teamMembers } from "@/lib/company";
import { ShieldIcon, AwardIcon, BoxIcon, CheckCircleIcon } from "@/components/ui/icons";

export const metadata = {
  title: "About Us",
  description:
    "Learn about Fembosco Engineering Limited — founded in 2003 with SCOA Group heritage, a Legrand partner and Nigeria's trusted supplier of electrical and industrial systems.",
};

const qualityPoints = [
  "Authorised Legrand partner with direct manufacturer sourcing",
  "European sourcing for premium cable management, lighting and switchgear",
  "Every consignment inspected and quality-assured before delivery",
  "Full product documentation, datasheets and warranty support",
];

const capabilities = [
  { title: "Import", text: "Direct import relationships with leading European and global manufacturers." },
  { title: "Export", text: "Supplying Nigerian-made assembled solutions and branded products to the West African market." },
  { title: "Panel Building", text: "In-house assembly of custom electrical panels and distribution boards." },
  { title: "Project Supply", text: "End-to-end supply for construction, manufacturing and infrastructure projects." },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About Us" crumb="About Us" description={`${site.name} — ${site.tagline}`} />

      {/* History & mission */}
      <section className="container-site py-14">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2">
          <div>
            <h2 className="section-title !text-left">Our Story</h2>
            <div className="divider-brand !ml-0" aria-hidden="true" />
            <p className="mt-6 text-[15px] leading-relaxed text-slate-500">{site.aboutText}</p>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-500">
              What began as a specialist supply and assembly company has grown into one of Nigeria&apos;s
              most reliable distributors of electrical, industrial and engineering products. Our SCOA
              Group heritage informs a disciplined, quality-first approach to every order.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-500">
              Our mission is simple: deliver authentic, high-performance electrical systems backed by
              world-class brands and dependable service — from a single socket to a full industrial
              distribution network.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {site.stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-3xl font-semibold tracking-tight text-brand-accent">{s.value}</p>
                  <p className="mt-1 text-xs text-slate-500">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/products/distribution-board.jpg" alt="Fembosco distribution board" className="aspect-[4/3] w-full rounded-2xl object-cover shadow-card" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/products/electrical-panel.jpg" alt="Fembosco electrical panel building" className="aspect-[4/3] w-full rounded-2xl object-cover shadow-card" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/products/cable-management.jpg" alt="Fembosco cable management warehouse stock" className="aspect-[4/3] w-full rounded-2xl object-cover shadow-card" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/products/lighting.jpg" alt="Fembosco lighting products" className="aspect-[4/3] w-full rounded-2xl object-cover shadow-card" />
          </div>
        </div>
      </section>

      {/* Quality assurance */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-primary via-brand-primary-dark to-slate-900">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-brand-secondary/30 blur-[100px]" aria-hidden="true" />
        <div className="container-site relative grid grid-cols-1 items-center gap-10 py-16 lg:grid-cols-2">
          <div className="text-white">
            <p className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-accent backdrop-blur">
              Quality Assurance
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-white">
              European Sourcing. Nigerian Trust.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/80">{site.qualityText}</p>
            <ul className="mt-6 space-y-3">
              {qualityPoints.map((q) => (
                <li key={q} className="flex items-start gap-3 text-sm text-white/90">
                  <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" />
                  {q}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {capabilities.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur transition-all duration-300 ease-smooth hover:-translate-y-1 hover:border-brand-accent/50"
              >
                <h3 className="font-display text-base font-semibold tracking-tight text-white">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legrand partnership */}
      <section className="container-site py-16">
        <div className="relative flex flex-col items-center gap-8 overflow-hidden rounded-2xl border border-brand-secondary/20 bg-brand-secondary-light/60 p-10 text-center">
          <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-brand-accent/15 blur-[80px]" aria-hidden="true" />
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-b from-brand-primary-light to-brand-primary text-white shadow-glowBlue">
            <AwardIcon className="h-8 w-8" />
          </span>
          <div className="relative max-w-2xl">
            <h2 className="font-display text-3xl font-semibold tracking-tight text-brand-primary">
              Authorised Legrand Partner
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-500">
              As an authorised partner of Legrand — a world leader in electrical and digital building
              infrastructure — Fembosco supplies the complete Legrand range from Mallia and Belanko
              switches to P17 Tempra industrial plugs, all genuine and warranty-backed. Our dedicated
              Legrand desk at {site.emailsLagos[1]} supports specification and sourcing for contractors
              and engineers across Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="border-y border-slate-200/60 bg-slate-50/70 py-16">
        <div className="container-site">
          <SectionHeading
            title="Leadership Team"
            subtitle="Experienced leadership guiding Fembosco's mission of trusted electrical supply."
          />
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group flex flex-col items-center gap-5 rounded-2xl border border-slate-200/70 bg-white p-8 text-center shadow-card transition-all duration-300 ease-smooth hover:-translate-y-1 hover:shadow-cardHover sm:flex-row sm:text-left"
              >
                <span className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-brand-primary-light to-brand-primary font-display text-3xl font-semibold text-white shadow-glowBlue">
                  {member.initials}
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold tracking-tight text-slate-900">{member.name}</h3>
                  <p className="text-sm font-semibold uppercase tracking-wide text-brand-accent">{member.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-500">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Icons strip */}
      <section className="container-site py-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            { icon: ShieldIcon, title: "Genuine Products", text: "Authentic, certified and warranty-backed." },
            { icon: AwardIcon, title: "Two Decades of Experience", text: "Trusted by contractors, developers and industry." },
            { icon: BoxIcon, title: "Nationwide Coverage", text: "From Lagos and Abuja to all 36 states." },
          ].map((c) => (
            <div
              key={c.title}
              className="group flex flex-col items-center rounded-2xl border border-slate-200/70 bg-white p-8 text-center shadow-card transition-all duration-300 ease-smooth hover:-translate-y-1 hover:shadow-cardHover"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-brand-secondary/15 bg-brand-secondary-light text-brand-primary shadow-sm transition-all duration-200 ease-smooth group-hover:shadow-glowBlue">
                <c.icon className="h-7 w-7" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-slate-900">{c.title}</h3>
              <p className="mt-2 text-sm text-slate-500">{c.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}