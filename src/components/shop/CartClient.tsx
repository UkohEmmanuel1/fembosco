"use client";

import { useState } from "react";
import Link from "next/link";
import { useStore } from "@/components/store/StoreProvider";
import { ProductCard } from "@/components/ui/ProductCard";
import { naira, products } from "@/lib/products";
import { PlusIcon, MinusIcon, TrashIcon, TagIcon } from "@/components/ui/icons";
import { CartQuoteModal } from "@/components/shop/CartQuoteModal";

function tierDiscount(qty: number, productId: string): number {
  const product = products.find((p) => p.id === productId);
  if (!product) return 0;
  const tier = [...product.bulkTiers].reverse().find((t) => qty >= t.minQty);
  return tier ? tier.discount : 0;
}

export function CartClient() {
  const { cart, cartProducts, updateQty, removeFromCart, clearCart, cartSubtotal } = useStore();
  const [quoteOpen, setQuoteOpen] = useState(false);

  if (cart.length === 0) {
    return (
      <div className="container-site py-20 text-center">
        <p className="font-display text-2xl font-semibold tracking-tight text-slate-900">Your cart is empty</p>
        <p className="mt-2 text-sm text-slate-500">Browse our catalogue to find the right products for your project.</p>
        <Link href="/shop" className="btn-pill mt-8 inline-flex">
          Shop Products
        </Link>
      </div>
    );
  }

  const savings = cart.reduce((sum, item) => {
    const p = products.find((pp) => pp.id === item.productId);
    if (!p) return sum;
    return sum + Math.round(p.price * (tierDiscount(item.qty, item.productId) / 100) * item.qty);
  }, 0);

  return (
    <div className="container-site py-12">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-2xl font-semibold tracking-tight text-slate-900">Shopping Cart</h1>
        <button type="button" onClick={clearCart} className="text-sm font-semibold text-red-600 hover:text-red-700">
          Clear cart
        </button>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_340px]">
        <div className="space-y-4">
          {cart.map((item) => {
            const product = cartProducts.find((p) => p.id === item.productId);
            if (!product) return null;
            const discount = tierDiscount(item.qty, product.id);
            const unitPrice = Math.round(product.price * (1 - discount / 100));
            const lineTotal = unitPrice * item.qty;
            return (
              <div
                key={item.productId}
                className="glass flex flex-col gap-4 rounded-2xl border border-slate-200/70 bg-white p-5 shadow-card sm:flex-row"
              >
                <Link href={`/shop/${product.slug}`} className="shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={product.image} alt={product.alt} className="h-28 w-32 rounded-xl object-cover" />
                </Link>
                <div className="flex flex-1 flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-brand-secondary">{product.manufacturer}</p>
                      <Link
                        href={`/shop/${product.slug}`}
                        className="font-display text-base font-semibold tracking-tight text-slate-900 hover:text-brand-primary"
                      >
                        {product.title}
                      </Link>
                      {discount > 0 && (
                        <p className="mt-1 inline-flex items-center gap-1 rounded-full bg-brand-accent/10 px-2 py-0.5 text-xs font-semibold text-brand-accent">
                          <TagIcon className="h-3 w-3" />
                          {discount}% volume discount applied
                        </p>
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.productId)}
                      aria-label={`Remove ${product.title}`}
                      className="text-slate-400 transition-colors hover:text-red-600"
                    >
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-4">
                    <div className="flex items-center rounded-full border border-slate-200 bg-white shadow-sm">
                      <button
                        type="button"
                        onClick={() => updateQty(item.productId, item.qty - 1)}
                        aria-label="Decrease quantity"
                        className="flex h-10 w-10 items-center justify-center text-brand-primary hover:text-brand-accent"
                      >
                        <MinusIcon className="h-4 w-4" />
                      </button>
                      <span className="w-10 text-center font-display font-semibold text-slate-900">{item.qty}</span>
                      <button
                        type="button"
                        onClick={() => updateQty(item.productId, item.qty + 1)}
                        aria-label="Increase quantity"
                        className="flex h-10 w-10 items-center justify-center text-brand-primary hover:text-brand-accent"
                      >
                        <PlusIcon className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="font-display text-lg font-semibold text-brand-primary">
                      {naira(lineTotal)}
                      <span className="block text-xs font-normal text-slate-500">
                        {naira(unitPrice)} / {product.unit} {discount > 0 && <span className="line-through">{naira(product.price)}</span>}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary */}
        <aside className="glass h-fit rounded-2xl border border-slate-200/70 bg-white/70 p-6 shadow-card backdrop-blur lg:sticky lg:top-28">
          <h2 className="font-display text-lg font-semibold tracking-tight text-slate-900">Order Summary</h2>
          <dl className="mt-5 space-y-3 text-sm">
            <div className="flex justify-between text-slate-500">
              <dt>Subtotal</dt>
              <dd className="font-semibold text-slate-900">{naira(cartSubtotal)}</dd>
            </div>
            <div className="flex justify-between text-slate-500">
              <dt>Volume savings</dt>
              <dd className="font-semibold text-emerald-600">-{naira(savings)}</dd>
            </div>
            <div className="flex justify-between text-slate-500">
              <dt>Delivery</dt>
              <dd>Calculated at checkout</dd>
            </div>
            <div className="flex justify-between border-t border-slate-200 pt-3 text-base">
              <dt className="font-semibold text-slate-900">Total</dt>
              <dd className="font-display font-semibold text-brand-primary">{naira(cartSubtotal - savings)}</dd>
            </div>
          </dl>
          <button
            type="button"
            onClick={() => setQuoteOpen(true)}
            className="btn-pill mt-6 w-full"
          >
            Request Quote
          </button>
          <p className="mt-4 text-center text-xs text-slate-500">
            Prefer to pay online?{" "}
            <Link href="/checkout" className="font-semibold text-brand-primary hover:text-brand-accent">
              Proceed to Checkout
            </Link>
          </p>
        </aside>
      </div>

      <div className="mt-16">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-900">You May Also Like</h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products
            .filter((p) => !cart.some((i) => i.productId === p.id))
            .slice(0, 3)
            .map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
        </div>
      </div>

      {quoteOpen && <CartQuoteModal onClose={() => setQuoteOpen(false)} />}
    </div>
  );
}