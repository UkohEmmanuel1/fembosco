"use client";

import { useEffect, useState, type FormEvent } from "react";
import { CloseIcon, CheckCircleIcon } from "@/components/ui/icons";
import { useStore } from "@/components/store/StoreProvider";
import { salesEmail, buildMailto } from "@/lib/email";

const inputClasses =
  "w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition-all duration-200 ease-smooth placeholder:text-slate-400 focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/20";

const labelClasses = "mb-1.5 block text-sm font-medium text-slate-700";

export function CartQuoteModal({ onClose }: { onClose: () => void }) {
  const { cart, cartProducts } = useStore();
  const [done, setDone] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const items = cartProducts
      .map((p) => {
        const qty = cart.find((i) => i.productId === p.id)?.qty ?? 1;
        return `- ${p.title} (Qty: ${qty}, ${p.unit})`;
      })
      .join("\n");
    const body = [
      "Requesting a quote for the following items:",
      "",
      items,
      "",
      "---",
      `Name: ${String(form.get("name") ?? "")}`,
      `Email: ${String(form.get("email") ?? "")}`,
      `Phone: ${String(form.get("phone") ?? "")}`,
      "",
      String(form.get("message") ?? ""),
    ].join("\n");
    window.location.href = buildMailto({
      to: salesEmail,
      subject: "Quote Request - Fembosco Website",
      body,
    });
    setDone(true);
  };

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center overflow-y-auto bg-slate-900/40 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Request a quote"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="glass-strong relative my-8 w-full max-w-2xl rounded-2xl bg-white p-6 shadow-cardHover sm:p-8 animate-scale-in">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
        >
          <CloseIcon className="h-5 w-5" />
        </button>

        <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-900">Request a Quote</h2>
        <div className="divider-brand !ml-0 mb-5" aria-hidden="true" />

        {done ? (
          <div className="flex flex-col items-center gap-3 py-10 text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
              <CheckCircleIcon className="h-7 w-7" />
            </span>
            <p className="text-lg text-slate-900">Your quote request is ready to send</p>
            <p className="max-w-md text-sm text-slate-500">
              Your email app opened with your selected items and details. Press send to deliver it to our
              sales team — we will respond within one business day.
            </p>
            <button type="button" onClick={onClose} className="btn-pill mt-2 text-sm">
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="max-h-56 space-y-3 overflow-y-auto rounded-xl border border-slate-200/70 bg-slate-50/60 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Selected Items ({cartProducts.length})
              </p>
              {cartProducts.map((p) => {
                const qty = cart.find((i) => i.productId === p.id)?.qty ?? 1;
                return (
                  <div key={p.id} className="flex items-center gap-3">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.image} alt={p.alt} className="h-12 w-14 rounded-lg object-cover" />
                    <div className="flex-1 text-sm">
                      <p className="font-medium text-slate-900">{p.title}</p>
                      <p className="text-xs text-slate-500">
                        Qty {qty} • {p.unit}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <form onSubmit={onSubmit} className="mt-5 space-y-5">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="q-name" className={labelClasses}>
                    Full Name <span className="text-brand-accent">*</span>
                  </label>
                  <input id="q-name" name="name" required placeholder="Your full name" className={inputClasses} />
                </div>
                <div>
                  <label htmlFor="q-email" className={labelClasses}>
                    Email <span className="text-brand-accent">*</span>
                  </label>
                  <input id="q-email" name="email" type="email" required placeholder="you@example.com" className={inputClasses} />
                </div>
                <div>
                  <label htmlFor="q-phone" className={labelClasses}>
                    Phone Number <span className="text-brand-accent">*</span>
                  </label>
                  <input id="q-phone" name="phone" type="tel" required placeholder="+234..." className={inputClasses} />
                </div>
              </div>
              <div>
                <label htmlFor="q-message" className={labelClasses}>
                  Additional Message
                </label>
                <textarea
                  id="q-message"
                  name="message"
                  rows={4}
                  placeholder="Delivery location, deadline, project details..."
                  className={inputClasses}
                />
              </div>
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
                <p className="text-xs text-slate-400">
                  * Required fields. Your details are used only to respond to your request.
                </p>
                <button type="submit" className="btn-pill min-w-[200px] text-sm">
                  Send Request
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}