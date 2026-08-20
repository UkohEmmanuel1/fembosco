import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckCircleIcon } from "@/components/ui/icons";
import { caseStudies } from "@/lib/company";

export function CaseStudies() {
  return (
    <section className="border-y border-slate-200/60 bg-slate-50/70 py-20 md:py-28">
      <div className="container-site">
        <SectionHeading
          title="Featured Projects"
          subtitle="Real-world results across manufacturing, commercial and residential sectors."
        />
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {caseStudies.map((cs) => (
            <article
              key={cs.title}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-card transition-all duration-300 ease-smooth hover:-translate-y-1 hover:shadow-cardHover"
            >
              <div className="overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={cs.image}
                  alt={cs.title}
                  loading="lazy"
                  className="aspect-[16/9] w-full object-cover transition-transform duration-500 ease-smooth group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-brand-secondary">
                  {cs.sector} • {cs.location}
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold tracking-tight text-slate-900">{cs.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-500">{cs.summary}</p>
                <p className="mt-4 flex items-start gap-2 text-sm font-medium text-brand-primary">
                  <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" />
                  {cs.outcome}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}