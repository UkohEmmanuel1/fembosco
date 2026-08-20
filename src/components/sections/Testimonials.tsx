import { SectionHeading } from "@/components/ui/SectionHeading";
import { StarRating } from "@/components/ui/StarRating";
import { testimonials } from "@/lib/company";

export function Testimonials() {
  return (
    <section className="container-site py-20 md:py-28">
      <SectionHeading
        title="What Our Clients Say"
        subtitle="Trusted by contractors, developers and industry across Nigeria."
      />
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="group relative flex h-full flex-col rounded-2xl border border-slate-200/70 bg-white p-7 shadow-card transition-all duration-300 ease-smooth hover:-translate-y-1 hover:shadow-cardHover"
          >
            <span
              className="absolute right-6 top-5 font-display text-6xl font-semibold leading-none text-brand-secondary-light"
              aria-hidden="true"
            >
              &rdquo;
            </span>
            <StarRating count={5} size={16} />
            <blockquote className="relative mt-4 flex-1 text-sm leading-relaxed text-slate-700">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 border-t border-slate-100 pt-4">
              <p className="font-display text-sm font-semibold text-brand-primary">{t.name}</p>
              <p className="text-xs text-slate-500">{t.role}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}