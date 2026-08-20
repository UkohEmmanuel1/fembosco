"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useStore } from "@/components/store/StoreProvider";
import { naira, products } from "@/lib/products";
import { CheckCircleIcon, TruckIcon } from "@/components/ui/icons";

const input =
  "w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition-all duration-200 ease-smooth placeholder:text-slate-400 focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/20";
const label = "mb-1.5 block text-sm font-medium text-slate-700";

function tierDiscount(qty: number, productId: string): number {
  const product = products.find((p) => p.id === productId);
  if (!product) return 0;
  const tier = [...product.bulkTiers].reverse().find((t) => qty >= t.minQty);
  return tier ? tier.discount : 0;
}

export function CheckoutClient() {
  const { cart, cartProducts, cartSubtotal, clearCart } = useStore();
  const [placed, setPlaced] = useState(false);
  const [orderNo, setOrderNo] = useState("");
  const [payment, setPayment] = useState("bank-transfer");

  if (placed) {
    return (
      <div className="container-site py-20">
        <div className="glass mx-auto max-w-md rounded-2xl border border-slate-200/70 bg-white p-10 text-center shadow-cardHover">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
            <CheckCircleIcon className="h-8 w-8" />
          </span>
          <h1 className="mt-5 font-display text-2xl font-semibold tracking-tight text-slate-900">Order Placed!</h1>
          <p className="mt-2 text-sm text-slate-500">
            Your guest order has been received. Save your order number to track delivery:
          </p>
          <p className="mt-4 rounded-xl border border-brand-secondary/20 bg-brand-secondary-light px-4 py-3 font-mono text-lg font-bold text-brand-primary">
            {orderNo}
          </p>
          {payment === "bank-transfer" && (
            <p className="mt-4 text-xs text-slate-500">
              Pay via bank transfer to the account details we email you. Orders dispatch once payment
              is confirmed.
            </p>
          )}
          <div className="mt-6 flex flex-col gap-3">
            <Link href="/track-order" className="btn-pill w-full">
              Track Your Order
            </Link>
            <Link href="/shop" className="btn-outline w-full text-xs">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="container-site py-20 text-center">
        <p className="font-display text-2xl font-semibold tracking-tight text-slate-900">Nothing to check out</p>
        <p className="mt-2 text-sm text-slate-500">Your cart is empty.</p>
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
  const total = cartSubtotal - savings;

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const no = `FMB-${Date.now().toString().slice(-8)}`;
    setOrderNo(no);
    clearCart();
    setPlaced(true);
  };

  return (
    <div className="container-site py-12">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_380px]">
        <form onSubmit={onSubmit} className="space-y-8">
          <section className="glass rounded-2xl border border-slate-200/70 bg-white p-7 shadow-card">
            <h2 className="flex items-center gap-3 font-display text-xl font-semibold tracking-tight text-slate-900">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-b from-brand-primary-light to-brand-primary text-sm text-white">
                1
              </span>
              Contact Details
            </h2>
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className={label}>Full Name *</label>
                <input required name="name" placeholder="Your full name" className={input} />
              </div>
              <div>
                <label className={label}>Email *</label>
                <input required type="email" name="email" placeholder="you@example.com" className={input} />
              </div>
              <div>
                <label className={label}>Phone *</label>
                <input required type="tel" name="phone" placeholder="+234..." className={input} />
              </div>
            </div>
          </section>

          <section className="glass rounded-2xl border border-slate-200/70 bg-white p-7 shadow-card">
            <h2 className="flex items-center gap-3 font-display text-xl font-semibold tracking-tight text-slate-900">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-b from-brand-primary-light to-brand-primary text-sm text-white">
                2
              </span>
              Delivery Address
            </h2>
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className={label}>Street Address *</label>
                <input required name="address" placeholder="House / street address" className={input} />
              </div>
              <div>
                <label className={label}>City *</label>
                <input required name="city" placeholder="e.g. Lagos" className={input} />
              </div>
              <div>
                <label className={label}>State *</label>
                <select required name="state" className={input}>
                  <option value="">Select state</option>
                  <option>Lagos</option>
                  <option>Abuja (FCT)</option>
                  <option>Ogun</option>
                  <option>Rivers</option>
                  <option>Kano</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className={label}>Delivery Notes</label>
                <textarea name="notes" rows={3} placeholder="Gate code, delivery window, site instructions..." className={input} />
              </div>
            </div>
          </section>

          <section className="glass rounded-2xl border border-slate-200/70 bg-white p-7 shadow-card">
            <h2 className="flex items-center gap-3 font-display text-xl font-semibold tracking-tight text-slate-900">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-b from-brand-primary-light to-brand-primary text-sm text-white">
                3
              </span>
              Payment Method
            </h2>
            <div className="mt-5 space-y-3">
              <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 transition-all duration-200 ease-smooth hover:border-brand-secondary">
                <input
                  type="radio"
                  name="payment"
                  value="bank-transfer"
                  checked={payment === "bank-transfer"}
                  onChange={() => setPayment("bank-transfer")}
                  className="mt-1 h-4 w-4 accent-brand-primary"
                />
                <span>
                  <span className="font-semibold text-slate-900">Bank Transfer</span>
                  <span className="block text-sm text-slate-500">Pay by transfer; we confirm and dispatch.</span>
                </span>
              </label>
              <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 transition-all duration-200 ease-smooth hover:border-brand-secondary">
                <input
                  type="radio"
                  name="payment"
                  value="pay-on-delivery"
                  checked={payment === "pay-on-delivery"}
                  onChange={() => setPayment("pay-on-delivery")}
                  className="mt-1 h-4 w-4 accent-brand-primary"
                />
                <span>
                  <span className="font-semibold text-slate-900">Pay on Delivery</span>
                  <span className="block text-sm text-slate-500">Available in Lagos &amp; Abuja on approved orders.</span>
                </span>
              </label>
            </div>
          </section>

          <button type="submit" className="btn-pill w-full py-4 text-base">
            Place Order — {naira(total)}
          </button>
        </form>

        <aside className="glass h-fit rounded-2xl border border-slate-200/70 bg-white/70 p-6 shadow-card backdrop-blur lg:sticky lg:top-28">
          <h2 className="font-display text-lg font-semibold tracking-tight text-slate-900">Order Summary</h2>
          <ul className="mt-4 space-y-4">
            {cartProducts.map((p) => {
              const qty = cart.find((i) => i.productId === p.id)?.qty ?? 0;
              const discount = tierDiscount(qty, p.id);
              const lineTotal = Math.round(p.price * (1 - discount / 100)) * qty;
              return (
                <li key={p.id} className="flex items-center gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.image} alt={p.alt} className="h-12 w-14 rounded-lg object-cover" />
                  <div className="flex-1 text-sm">
                    <p className="font-medium text-slate-900">{p.title}</p>
                    <p className="text-xs text-slate-500">
                      Qty {qty}
                      {discount > 0 && ` • ${discount}% off`}
                    </p>
                  </div>
                  <p className="font-semibold text-slate-900">{naira(lineTotal)}</p>
                </li>
              );
            })}
          </ul>
          <dl className="mt-5 space-y-2 border-t border-slate-200 pt-4 text-sm">
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
              <dd>To be confirmed</dd>
            </div>
            <div className="flex justify-between border-t border-slate-200 pt-3 text-base">
              <dt className="font-semibold text-slate-900">Total</dt>
              <dd className="font-display font-semibold text-brand-primary">{naira(total)}</dd>
            </div>
          </dl>
          <p className="mt-4 flex items-start gap-2 text-xs text-slate-500">
            <TruckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-secondary" />
            Delivery is confirmed by our team after payment. Orders ship from Lagos &amp; Abuja.
          </p>
        </aside>
      </div>
    </div>
  );
}