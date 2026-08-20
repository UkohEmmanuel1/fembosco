"use client";

import { useRef } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/ui/ProductCard";
import { ChevronDownIcon } from "@/components/ui/icons";
import { products } from "@/lib/products";

export function FeaturedProducts() {
  const trackRef = useRef<HTMLDivElement>(null);
  const featured = products.filter((p) => p.featured);

  const scroll = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <section className="border-y border-slate-200/60 bg-slate-50/70 py-20 md:py-28">
      <div className="container-site">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            align="left"
            title="Featured Products"
            subtitle="Hand-picked bestsellers trusted across Nigerian projects — from Legrand switchgear to industrial panels."
          />
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => scroll(-1)}
              aria-label="Previous products"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-brand-primary shadow-sm transition-all duration-200 ease-smooth hover:border-brand-secondary hover:shadow-glow"
            >
              <ChevronDownIcon className="h-5 w-5 rotate-90" />
            </button>
            <button
              type="button"
              onClick={() => scroll(1)}
              aria-label="Next products"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-brand-primary shadow-sm transition-all duration-200 ease-smooth hover:border-brand-secondary hover:shadow-glow"
            >
              <ChevronDownIcon className="h-5 w-5 -rotate-90" />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [scrollbar-width:thin]"
        >
          {featured.map((product) => (
            <div key={product.id} className="w-[280px] shrink-0 snap-start sm:w-[300px]">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}