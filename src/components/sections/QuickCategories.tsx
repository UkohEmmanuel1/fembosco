import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRightIcon } from "@/components/ui/icons";
import { categories } from "@/lib/products";

const categoryImages: Record<string, string> = {
  industrial: "/images/products/electrical-panel.jpg",
  residential: "/images/products/switches-sockets.jpg",
  commercial: "/images/products/distribution-board.jpg",
};

export function QuickCategories() {
  const cards = categories.filter((c) => c.key !== "all");

  return (
    <section className="container-site py-20 md:py-28">
      <SectionHeading
        title="Shop by Application"
        subtitle="Quick access to the product range that fits your project — whether industrial, residential or commercial."
      />
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {cards.map((cat, i) => (
          <Link
            key={cat.key}
            href={`/shop?category=${cat.key}`}
            className={`group relative block overflow-hidden rounded-2xl border border-white/60 bg-slate-900 shadow-card transition-all duration-300 ease-smooth hover:-translate-y-1 hover:shadow-cardHover ${
              i === 0 ? "md:col-span-2 md:row-span-1" : ""
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={categoryImages[cat.key]}
              alt={`${cat.label} electrical products`}
              className={`w-full object-cover transition-transform duration-500 ease-smooth group-hover:scale-105 ${
                i === 0 ? "aspect-[16/8]" : "aspect-[16/10]"
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-primary-dark/90 via-brand-primary/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-accent">{cat.label}</p>
              <h3 className="mt-1 font-display text-2xl font-semibold tracking-tight text-white">{cat.label} Range</h3>
              <p className="mt-1 max-w-md text-sm text-white/80">{cat.description}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-white transition-colors group-hover:text-brand-accent">
                Browse Products
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 ease-smooth group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}