"use client";

import { useState } from "react";
import Link from "next/link";
import { StarRating } from "@/components/ui/StarRating";
import {
  CompareIcon,
  PlusIcon,
  MinusIcon,
  CheckCircleIcon,
  TruckIcon,
  ShieldIcon,
} from "@/components/ui/icons";
import { useStore } from "@/components/store/StoreProvider";
import { stockLabels, type Product } from "@/lib/products";

export function ProductDetail({ product }: { product: Product }) {
  const [activeImage, setActiveImage] = useState(0);
  const [qty, setQty] = useState(product.moq);
  const { addToCart, isCompared, toggleCompare } = useStore();
  const compared = isCompared(product.id);
  const stock = stockLabels[product.stock];
  const stockOut = product.stock === "out-of-stock";

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
      {/* Gallery */}
      <div>
        <div className="overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-card">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.gallery[activeImage]}
            alt={`${product.alt} - image ${activeImage + 1}`}
            className="aspect-[4/3] w-full object-cover"
          />
        </div>
        <div className="mt-4 grid grid-cols-3 gap-4">
          {product.gallery.map((img, i) => (
            <button
              key={img}
              type="button"
              onClick={() => setActiveImage(i)}
              aria-label={`View image ${i + 1}`}
              className={`overflow-hidden rounded-xl border-2 transition-all duration-200 ease-smooth ${
                activeImage === i
                  ? "border-brand-primary shadow-glow"
                  : "border-slate-200/70 opacity-70 hover:opacity-100"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={img} alt="" className="aspect-[4/3] w-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Summary */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-brand-secondary">
          {product.manufacturer} • {product.application}
        </p>
        <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight text-slate-900">{product.title}</h1>
        <div className="mt-2 flex items-center gap-2">
          <StarRating count={5} size={16} />
          <span className="text-sm text-slate-500">{product.rating} • {product.reviewCount} reviews</span>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <span className="text-sm text-slate-500">{product.unit}</span>
          <span className={`rounded-full px-3 py-1 text-xs font-semibold ${stock.color}`}>{stock.label}</span>
        </div>

        <p className="mt-5 text-[15px] leading-relaxed text-slate-500">{product.shortDescription}</p>

        <div className="mt-5 flex items-center gap-2 text-sm text-slate-900">
          <CheckCircleIcon className="h-5 w-5 text-brand-secondary" />
          Minimum order quantity: <span className="font-semibold">{product.moq}</span>
        </div>

        {/* Quantity + actions */}
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <div className="flex items-center rounded-full border border-slate-200 bg-white shadow-sm">
            <button
              type="button"
              onClick={() => setQty((q) => Math.max(1, q - 1))}
              aria-label="Decrease quantity"
              className="flex h-12 w-12 items-center justify-center text-brand-primary transition-colors hover:text-brand-accent"
            >
              <MinusIcon className="h-4 w-4" />
            </button>
            <span className="w-12 text-center font-display font-semibold text-slate-900">{qty}</span>
            <button
              type="button"
              onClick={() => setQty((q) => q + 1)}
              aria-label="Increase quantity"
              className="flex h-12 w-12 items-center justify-center text-brand-primary transition-colors hover:text-brand-accent"
            >
              <PlusIcon className="h-4 w-4" />
            </button>
          </div>
          <button
            type="button"
            disabled={stockOut}
            onClick={() => addToCart(product.id, qty)}
            className="btn-pill disabled:cursor-not-allowed disabled:opacity-50"
          >
            Add to Cart
          </button>
          <Link href="/cart" className="btn-pill-solid">
            View Cart
          </Link>
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => toggleCompare(product.id)}
            className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-200 ease-smooth ${
              compared
                ? "border-brand-primary bg-brand-primary/10 text-brand-primary"
                : "border-slate-300 text-slate-500 hover:text-brand-primary"
            }`}
          >
            <CompareIcon className="h-4 w-4" />
            {compared ? "In Comparison" : "Add to Compare"}
          </button>
        </div>

        {/* Trust badges */}
        <div className="mt-8 grid grid-cols-1 gap-3 rounded-2xl border border-brand-secondary/15 bg-brand-secondary-light/70 p-5 sm:grid-cols-2">
          <p className="flex items-center gap-2 text-sm text-slate-900">
            <TruckIcon className="h-5 w-5 shrink-0 text-brand-primary" />
            Nationwide delivery from Lagos &amp; Abuja
          </p>
          <p className="flex items-center gap-2 text-sm text-slate-900">
            <ShieldIcon className="h-5 w-5 shrink-0 text-brand-primary" />
            Genuine, warranty-backed products
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {product.tags.map((t) => (
            <Link
              key={t}
              href={`/shop?q=${encodeURIComponent(t)}`}
              className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-500 transition-colors hover:border-brand-secondary hover:bg-brand-secondary-light hover:text-brand-primary"
            >
              #{t}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}