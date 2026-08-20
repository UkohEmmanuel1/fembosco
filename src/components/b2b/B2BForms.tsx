"use client";

import { useState, type FormEvent } from "react";
import { CheckCircleIcon } from "@/components/ui/icons";
import { quoteForm } from "@/lib/quote";

type Tab = "quote" | "corporate" | "credit";

const input =
  "w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition-all duration-200 ease-smooth placeholder:text-slate-400 focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/20";
const label = "mb-1.5 block text-sm font-medium text-slate-700";

function Success({ message }: { message: string }) {
  return (
    <div className="flex flex-col items-center gap-3 py-10 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
        <CheckCircleIcon className="h-7 w-7" />
      </span>
      <p className="max-w-sm text-slate-900">{message}</p>
    </div>
  );
}

export function B2BForms() {
  const [tab, setTab] = useState<Tab>("quote");
  const [done, setDone] = useState(false);
  const [message, setMessage] = useState("");
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);

  const tabs: { key: Tab; label: string }[] = [
    { key: "quote", label: "Bulk Quote" },
    { key: "corporate", label: "Corporate Account" },
    { key: "credit", label: "Trade Credit" },
  ];

  const toggleProduct = (value: string) =>
    setSelectedProducts((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const t = e.currentTarget.getAttribute("data-tab");
    setMessage(
      t === "corporate"
        ? "Your corporate account application has been received. Our B2B team will contact you within one business day."
        : t === "credit"
        ? "Your trade credit application has been submitted for review. We will respond shortly with the next steps."
        : "Your bulk quote request has been received. Our sales team will respond within one business day."
    );
    setDone(true);
  };

  if (done) {
    return (
      <div className="glass rounded-2xl border border-slate-200/70 bg-white p-8 shadow-card lg:sticky lg:top-28">
        <Success message={message} />
        <button
          type="button"
          onClick={() => {
            setDone(false);
            setSelectedProducts([]);
          }}
          className="btn-outline w-full text-xs"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <div className="glass rounded-2xl border border-slate-200/70 bg-white/70 p-6 shadow-card backdrop-blur lg:sticky lg:top-28">
      <div className="flex rounded-full border border-slate-200 bg-white p-1">
        {tabs.map((t) => (
          <button
            key={t.key}
            type="button"
            onClick={() => setTab(t.key)}
            className={`flex-1 rounded-full px-2 py-2.5 text-xs font-semibold uppercase tracking-wide transition-all duration-200 ease-smooth ${
              tab === t.key
                ? "bg-gradient-to-b from-brand-primary-light to-brand-primary text-white shadow-sm"
                : "text-slate-500 hover:text-brand-primary"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === "quote" && (
        <form data-tab="quote" onSubmit={onSubmit} className="mt-6 space-y-5">
          <fieldset>
            <legend className={label}>Products of interest *</legend>
            <div className="grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-2">
              {quoteForm.products.map((p) => (
                <label key={p} className="flex items-center gap-2 text-sm text-slate-700">
                  <input
                    type="checkbox"
                    checked={selectedProducts.includes(p)}
                    onChange={() => toggleProduct(p)}
                    className="h-4 w-4 accent-brand-primary"
                  />
                  {p}
                </label>
              ))}
            </div>
          </fieldset>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className={label}>Quantity / Volume</label>
              <input name="quantity" type="number" min={1} required placeholder="e.g. 500" className={input} />
            </div>
            <div>
              <label className={label}>Company</label>
              <input name="company" required placeholder="Company name" className={input} />
            </div>
            <div>
              <label className={label}>Full Name *</label>
              <input name="name" required placeholder="Your full name" className={input} />
            </div>
            <div>
              <label className={label}>Work Email *</label>
              <input name="email" type="email" required placeholder="you@company.com" className={input} />
            </div>
            <div>
              <label className={label}>Phone *</label>
              <input name="phone" type="tel" required placeholder="+234..." className={input} />
            </div>
            <div>
              <label className={label}>Delivery State</label>
              <input name="state" placeholder="e.g. Lagos" className={input} />
            </div>
          </div>
          <div>
            <label className={label}>Project details</label>
            <textarea name="message" rows={4} placeholder="Timeline, specs, delivery needs..." className={input} />
          </div>
          <button type="submit" className="btn-pill w-full">
            Request Bulk Quote
          </button>
        </form>
      )}

      {tab === "corporate" && (
        <form data-tab="corporate" onSubmit={onSubmit} className="mt-6 space-y-5">
          <p className="text-sm text-slate-500">
            Register your company for a Fembosco corporate account to unlock tiered wholesale pricing
            and a dedicated account manager.
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className={label}>Company Name *</label>
              <input name="company" required placeholder="Legal company name" className={input} />
            </div>
            <div>
              <label className={label}>RC / CAC Number</label>
              <input name="rc" placeholder="Registration number" className={input} />
            </div>
            <div>
              <label className={label}>Contact Name *</label>
              <input name="name" required placeholder="Contact person" className={input} />
            </div>
            <div>
              <label className={label}>Work Email *</label>
              <input name="email" type="email" required placeholder="you@company.com" className={input} />
            </div>
            <div>
              <label className={label}>Phone *</label>
              <input name="phone" type="tel" required placeholder="+234..." className={input} />
            </div>
            <div>
              <label className={label}>Business Type</label>
              <select name="type" className={input}>
                <option value="contractor">Electrical Contractor</option>
                <option value="developer">Developer / Builder</option>
                <option value="oem">Manufacturer / OEM</option>
                <option value="retailer">Retailer / Reseller</option>
                <option value="govt">Government / Institutional</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <button type="submit" className="btn-pill w-full">
            Register Corporate Account
          </button>
        </form>
      )}

      {tab === "credit" && (
        <form data-tab="credit" onSubmit={onSubmit} className="mt-6 space-y-5">
          <p className="text-sm text-slate-500">
            Apply for trade credit on qualifying orders. Approval is subject to account history and
            a credit review by our finance team.
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className={label}>Company Name *</label>
              <input name="company" required placeholder="Legal company name" className={input} />
            </div>
            <div>
              <label className={label}>Years in Business</label>
              <input name="years" type="number" min={0} placeholder="e.g. 5" className={input} />
            </div>
            <div>
              <label className={label}>Credit Limit Requested (₦)</label>
              <input name="limit" type="number" min={0} placeholder="e.g. 5000000" className={input} />
            </div>
            <div>
              <label className={label}>Contact Email *</label>
              <input name="email" type="email" required placeholder="you@company.com" className={input} />
            </div>
          </div>
          <div>
            <label className={label}>Reason for credit</label>
            <textarea name="message" rows={3} placeholder="Project pipeline, order volumes..." className={input} />
          </div>
          <button type="submit" className="btn-pill w-full">
            Apply for Trade Credit
          </button>
        </form>
      )}
    </div>
  );
}