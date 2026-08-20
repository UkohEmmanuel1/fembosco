"use client";

import Link from "next/link";
import { StarRating } from "@/components/ui/StarRating";
import { HeartIcon, CompareIcon, PlusIcon } from "@/components/ui/icons";
import type { Product } from "@/lib/products";
import { naira, stockLabels } from "@/lib/products";
import { useStore } from "@/components/store/StoreProvider";

export function ProductCard({ product }: { product: Product }) {
  const { addToCart, isWishlisted, toggleWishlist, isCompared, toggleCompare } = useStore();
  const wished = isWishlisted(product.id);
  const compared = isCompared(product.id);
  const stock = stockLabels[product.stock];

  return (
    <article className="group glass card-lift relative flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-card">
      <Link href={`/shop/${product.slug}`} className="relative block overflow-hidden" aria-label={product.title}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.alt}
          loading="lazy"
          className="aspect-[4/3] w-full object-cover transition-transform duration-500 ease-smooth group-hover:scale-105"
        />
        <span className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-semibold backdrop-blur-md ${stock.color}`}>
          {stock.label}
        </span>
        <div className="absolute right-3 top-3 flex flex-col gap-2">
          <button
            type="button"
            aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
            onClick={() => toggleWishlist(product.id)}
            className={`flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur transition-all duration-200 ease-smooth hover:-translate-y-0.5 ${
              wished ? "text-brand-accent" : "text-slate-500 hover:text-brand-accent"
            }`}
          >
            <HeartIcon className={`h-4 w-4 ${wished ? "fill-brand-accent" : ""}`} />
          </button>
          <button
            type="button"
            aria-label={compared ? "Remove from comparison" : "Add to comparison"}
            onClick={() => toggleCompare(product.id)}
            className={`flex h-9 w-9 items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur transition-all duration-200 ease-smooth hover:-translate-y-0.5 ${
              compared ? "text-brand-primary" : "text-slate-500 hover:text-brand-primary"
            }`}
          >
            <CompareIcon className="h-4 w-4" />
          </button>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-brand-secondary">{product.manufacturer}</p>
        <Link href={`/shop/${product.slug}`} className="mt-1 block">
          <h3 className="font-display text-lg font-semibold tracking-tight text-slate-900 transition-colors hover:text-brand-primary">
            {product.title}
          </h3>
        </Link>
        <div className="mt-1.5 flex items-center gap-2">
          <StarRating count={5} size={14} />
          <span className="text-xs text-slate-400">({product.reviewCount})</span>
        </div>
        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-slate-500">{product.shortDescription}</p>

        <div className="mt-4 flex items-center justify-between">
          <p className="font-display text-lg font-semibold text-slate-900">
            {naira(product.price)}
            <span className="text-xs font-normal text-slate-400"> {product.unit}</span>
          </p>
          <p className="text-xs text-slate-400">MOQ: {product.moq}</p>
        </div>

        <div className="mt-4 flex gap-2">
          <button
            type="button"
            onClick={() => addToCart(product.id)}
            className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-b from-brand-primary-light to-brand-primary px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-white shadow-sm transition-all duration-200 ease-smooth hover:-translate-y-[1px] hover:shadow-glow"
          >
            <PlusIcon className="h-4 w-4" />
            Add to Cart
          </button>
          <Link
            href={`/shop/${product.slug}`}
            className="flex items-center justify-center rounded-full border border-slate-300 bg-white px-4 py-2.5 text-xs font-semibold uppercase tracking-wide text-brand-primary transition-all duration-200 ease-smooth hover:border-brand-secondary hover:bg-brand-secondary-light"
          >
            View
          </Link>
        </div>
      </div>
    </article>
  );
}