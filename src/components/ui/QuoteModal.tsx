"use client";

import { useEffect, useState, type FormEvent } from "react";
import { CloseIcon, CheckIcon } from "@/components/ui/icons";
import { quoteForm } from "@/lib/quote";
import { submitQuoteRequest, type QuoteRequest } from "@/services/api";

type QuoteModalProps = {
  onClose: () => void;
};

const inputClasses =
  "w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition-all duration-200 ease-smooth placeholder:text-slate-400 focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/20";

const labelClasses = "mb-1.5 block text-sm font-medium text-slate-700";

export function QuoteModal({ onClose }: QuoteModalProps) {
  const [products, setProducts] = useState<string[]>([]);
  const [brands, setBrands] = useState<string[]>([]);
  const [urgency, setUrgency] = useState<string>("");
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<{ ok: boolean; message: string } | null>(null);

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

  const toggleProduct = (value: string) => {
    setProducts((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const toggleBrand = (value: string) => {
    setBrands((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = new FormData(e.currentTarget);
    const request: QuoteRequest = {
      products,
      brands,
      otherBrands: String(form.get("otherBrands") ?? ""),
      message: String(form.get("message") ?? ""),
      urgency,
      dueDate: String(form.get("dueDate") ?? ""),
      firstName: String(form.get("firstName") ?? ""),
      lastName: String(form.get("lastName") ?? ""),
      email: String(form.get("email") ?? ""),
      phone: String(form.get("phone") ?? ""),
    };
    const res = await submitQuoteRequest(request);
    setResult(res);
    setSubmitting(false);
  };

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center overflow-y-auto bg-slate-900/40 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Get A Quote"
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

        <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-900">Get A Quote</h2>
        <div className="divider-brand !ml-0 mb-5" aria-hidden="true" />

        {result ? (
          <div className="flex flex-col items-center gap-3 py-10 text-center">
            <span
              className={`flex h-14 w-14 items-center justify-center rounded-full ${
                result.ok ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-500"
              }`}
            >
              <CheckIcon className="h-7 w-7" />
            </span>
            <p className="text-lg text-slate-900">{result.message}</p>
            <button type="button" onClick={onClose} className="btn-pill mt-2 text-sm">
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-5">
            <fieldset>
              <legend className="mb-1.5 text-sm font-medium text-slate-700">
                I need quotation for these products: <span className="text-brand-accent">*</span>
              </legend>
              <div className="grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
                {quoteForm.products.map((p) => (
                  <label key={p} className="flex cursor-pointer items-center gap-2 rounded-lg px-1 py-0.5 text-sm text-slate-700 transition-colors hover:text-brand-primary">
                    <input
                      type="checkbox"
                      checked={products.includes(p)}
                      onChange={() => toggleProduct(p)}
                      className="h-4 w-4 accent-brand-accent"
                    />
                    {p}
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="mb-1.5 text-sm font-medium text-slate-700">Select Brands:</legend>
              <div className="grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
                {quoteForm.brands.map((b) => (
                  <label key={b} className="flex cursor-pointer items-center gap-2 rounded-lg px-1 py-0.5 text-sm text-slate-700 transition-colors hover:text-brand-primary">
                    <input
                      type="checkbox"
                      checked={brands.includes(b)}
                      onChange={() => toggleBrand(b)}
                      className="h-4 w-4 accent-brand-accent"
                    />
                    {b}
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className={labelClasses}>
                  First Name <span className="text-brand-accent">*</span>
                </label>
                <input id="firstName" name="firstName" required className={inputClasses} />
              </div>
              <div>
                <label htmlFor="lastName" className={labelClasses}>
                  Last Name <span className="text-brand-accent">*</span>
                </label>
                <input id="lastName" name="lastName" required className={inputClasses} />
              </div>
              <div>
                <label htmlFor="email" className={labelClasses}>
                  Email <span className="text-brand-accent">*</span>
                </label>
                <input id="email" name="email" type="email" required className={inputClasses} />
              </div>
              <div>
                <label htmlFor="phone" className={labelClasses}>
                  Phone Number <span className="text-brand-accent">*</span>
                </label>
                <input id="phone" name="phone" type="tel" required className={inputClasses} />
              </div>
              <div>
                <label htmlFor="otherBrands" className={labelClasses}>
                  Indicate other brands (if any)
                </label>
                <input id="otherBrands" name="otherBrands" className={inputClasses} />
              </div>
              <div>
                <label htmlFor="urgency" className={labelClasses}>
                  Please indicate the urgency of your request.
                </label>
                <select
                  id="urgency"
                  name="urgency"
                  value={urgency}
                  onChange={(e) => setUrgency(e.target.value)}
                  className={inputClasses}
                >
                  <option value="">Select urgency</option>
                  {quoteForm.urgency.map((u) => (
                    <option key={u} value={u}>
                      {u}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="dueDate" className={labelClasses}>
                  Select estimated due date.
                </label>
                <input id="dueDate" name="dueDate" type="date" className={inputClasses} />
              </div>
            </div>

            <div>
              <label htmlFor="message" className={labelClasses}>
                Provide further information you think may be important
              </label>
              <textarea id="message" name="message" rows={4} className={inputClasses} />
            </div>

            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
              <p className="text-xs text-slate-400">
                * Required fields. Your details are used only to respond to your request.
              </p>
              <button
                type="submit"
                disabled={submitting}
                className="btn-pill min-w-[200px] text-sm disabled:cursor-not-allowed disabled:opacity-70"
              >
                {submitting ? "Sending..." : "Request a Quote"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}