"use client";

import Link from "next/link";
import { useStore } from "@/components/store/StoreProvider";
import { ProductCard } from "@/components/ui/ProductCard";
import { HeartIcon } from "@/components/ui/icons";
import { products } from "@/lib/products";

export function WishlistClient() {
  const { wishlist } = useStore();

  if (wishlist.length === 0) {
    return (
      <div className="container-site py-20 text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-secondary-light text-brand-primary">
          <HeartIcon className="h-8 w-8" />
        </span>
        <p className="mt-4 font-display text-2xl font-semibold tracking-tight text-slate-900">Your wishlist is empty</p>
        <p className="mt-2 text-sm text-slate-500">Save products you are interested in to find them here.</p>
        <Link href="/shop" className="btn-pill mt-8 inline-flex">
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container-site py-12">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-2xl font-semibold tracking-tight text-slate-900">My Wishlist</h1>
        <Link href="/shop" className="text-sm font-semibold text-brand-primary hover:text-brand-accent">
          Continue shopping
        </Link>
      </div>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {wishlist.map((id) => {
          const product = products.find((p) => p.id === id);
          if (!product) return null;
          return <ProductCard key={id} product={product} />;
        })}
      </div>
    </div>
  );
}