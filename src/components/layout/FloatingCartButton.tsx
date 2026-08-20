"use client";

import Link from "next/link";
import { useState } from "react";
import { CartIcon } from "@/components/ui/icons";
import { useStore } from "@/components/store/StoreProvider";

export function FloatingCartButton() {
  const [hover, setHover] = useState(false);
  const { cartCount } = useStore();

  return (
    <Link
      href="/cart"
      aria-label={`View cart (${cartCount} item${cartCount === 1 ? "" : "s"})`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="group fixed bottom-[82px] right-[15px] z-[9999] flex items-center justify-center"
    >
      <span
        className={`pointer-events-none mr-3 whitespace-nowrap rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-cardHover ring-1 ring-slate-200 transition-all duration-200 ease-smooth ${
          hover ? "translate-x-0 opacity-100" : "translate-x-2 opacity-0"
        }`}
      >
        View Cart
      </span>
      <span className="relative flex h-[52px] w-[52px] items-center justify-center rounded-full bg-gradient-to-b from-brand-primary-light to-brand-primary shadow-[0_8px_28px_-8px_rgba(15,23,42,0.45)] transition-transform duration-200 ease-smooth group-hover:scale-105">
        <CartIcon className="h-[24px] w-[24px] text-white" />
        {cartCount > 0 && (
          <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-brand-accent px-1 text-[11px] font-bold text-white shadow-sm">
            {cartCount}
          </span>
        )}
      </span>
    </Link>
  );
}