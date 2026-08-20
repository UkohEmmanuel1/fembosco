"use client";

import { useState, type FormEvent } from "react";
import { StarRating } from "@/components/ui/StarRating";
import { StarIcon, CheckCircleIcon } from "@/components/ui/icons";
import type { Product } from "@/lib/products";
import { salesEmail, buildMailto } from "@/lib/email";

const input =
  "w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition-all duration-200 ease-smooth placeholder:text-slate-400 focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/20";
const label = "mb-1.5 block text-sm font-medium text-slate-700";

function RatingInput({ value, onChange }: { value: number; onChange: (n: number) => void }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          aria-label={`Rate ${n} out of 5`}
          onClick={() => onChange(n)}
          className="transition-transform duration-150 ease-smooth hover:scale-110"
        >
          <StarIcon
            width={28}
            height={28}
            className={n <= value ? "fill-amber-400" : "fill-slate-200"}
          />
        </button>
      ))}
      {value > 0 && <span className="ml-2 text-sm text-slate-500">{value} / 5</span>}
    </div>
  );
}

export function ProductTabs({ product }: { product: Product }) {
  const [tab, setTab] = useState<"description" | "reviews">("description");
  const [rating, setRating] = useState(0);
  const [done, setDone] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const review = String(form.get("review") ?? "");
    const stars = "★".repeat(rating) || "No rating";
    const body = [
      `Product: ${product.title}`,
      `Name: ${name}`,
      `Email: ${email}`,
      `Rating: ${stars}`,
      "",
      review,
    ].join("\n");
    window.location.href = buildMailto({
      to: salesEmail,
      subject: `Product Review: ${product.title}`,
      body,
    });
    setDone(true);
  };

  return (
    <div>
      <div className="flex flex-wrap gap-2 border-b border-slate-200">
        <button
          type="button"
          onClick={() => setTab("description")}
          className={`rounded-t-xl px-5 py-3 text-sm font-semibold transition-colors ${
            tab === "description"
              ? "border-b-2 border-brand-primary bg-white text-brand-primary"
              : "text-slate-500 hover:text-brand-primary"
          }`}
        >
          Product Description
        </button>
        <button
          type="button"
          onClick={() => setTab("reviews")}
          className={`rounded-t-xl px-5 py-3 text-sm font-semibold transition-colors ${
            tab === "reviews"
              ? "border-b-2 border-brand-primary bg-white text-brand-primary"
              : "text-slate-500 hover:text-brand-primary"
          }`}
        >
          Reviews ({product.reviewCount})
        </button>
      </div>

      {tab === "description" ? (
        <div className="mt-6">
          <p className="text-[15px] leading-relaxed text-slate-500">{product.description}</p>
          <h3 className="mt-8 font-display text-xl font-semibold tracking-tight text-slate-900">
            Technical Specifications
          </h3>
          <div className="divider-brand !ml-0" aria-hidden="true" />
          <table className="spec-table mt-5">
            <thead>
              <tr>
                <th>Specification</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {product.specs.map((s) => (
                <tr key={s.label}>
                  <td>{s.label}</td>
                  <td>{s.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_360px]">
          <form onSubmit={onSubmit} className="glass space-y-5 rounded-2xl border border-slate-200/70 bg-white/70 p-7 shadow-card backdrop-blur">
            {done ? (
              <div className="flex flex-col items-center gap-3 py-10 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <CheckCircleIcon className="h-7 w-7" />
                </span>
                <p className="font-display text-lg font-semibold tracking-tight text-slate-900">
                  Review sent
                </p>
                <p className="max-w-sm text-sm text-slate-500">
                  Your email app opened with your review of {product.title} ready to send to our team.
                  We appreciate your feedback.
                </p>
                <button type="button" onClick={() => setDone(false)} className="btn-outline mt-2 text-xs">
                  Write another review
                </button>
              </div>
            ) : (
              <>
                <div>
                  <label className={label}>Your Rating *</label>
                  <RatingInput value={rating} onChange={setRating} />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="rv-name" className={label}>
                      Name *
                    </label>
                    <input id="rv-name" name="name" required placeholder="Your full name" className={input} />
                  </div>
                  <div>
                    <label htmlFor="rv-email" className={label}>
                      Email *
                    </label>
                    <input id="rv-email" name="email" type="email" required placeholder="you@example.com" className={input} />
                  </div>
                </div>
                <div>
                  <label htmlFor="rv-review" className={label}>
                    Your Review *
                  </label>
                  <textarea
                    id="rv-review"
                    name="review"
                    rows={5}
                    required
                    placeholder="How was the product? Installation, quality, delivery..."
                    className={input}
                  />
                </div>
                <button type="submit" disabled={rating === 0} className="btn-pill w-full disabled:cursor-not-allowed disabled:opacity-60">
                  Submit Review
                </button>
              </>
            )}
          </form>

          <aside className="glass h-fit rounded-2xl border border-slate-200/70 bg-white p-6 shadow-card">
            <h3 className="font-display text-lg font-semibold tracking-tight text-slate-900">Rating Summary</h3>
            <div className="mt-4 flex items-center gap-3">
              <span className="font-display text-4xl font-semibold text-brand-primary">{product.rating}</span>
              <div>
                <StarRating count={5} size={16} />
                <p className="mt-1 text-xs text-slate-500">Based on {product.reviewCount} reviews</p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-slate-500">
              Have you used this product on a project? Tell us what you think — your review helps other
              engineers and contractors choose with confidence.
            </p>
          </aside>
        </div>
      )}
    </div>
  );
}