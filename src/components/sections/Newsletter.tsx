"use client";

import { useState, type FormEvent } from "react";
import { EnvelopeIcon, CheckCircleIcon } from "@/components/ui/icons";

export function Newsletter() {
  const [done, setDone] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDone(true);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-brand-primary via-brand-primary-light to-brand-secondary">
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-accent/30 blur-[80px]" aria-hidden="true" />
      <div className="container-site relative flex flex-col items-center gap-8 py-14 md:flex-row md:justify-between">
        <div className="flex items-center gap-4 text-white">
          <span className="hidden h-14 w-14 items-center justify-center rounded-full border border-white/25 bg-white/15 backdrop-blur sm:flex">
            <EnvelopeIcon className="h-7 w-7" />
          </span>
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Join our newsletter
            </h2>
            <p className="mt-1 text-sm text-white/85">
              Product launches, industry news and installation guides — straight to your inbox.
            </p>
          </div>
        </div>

        {done ? (
          <p className="flex items-center gap-2 text-sm font-semibold text-white">
            <CheckCircleIcon className="h-6 w-6" />
            Subscribed! Welcome to the Fembosco community.
          </p>
        ) : (
          <form onSubmit={onSubmit} className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              placeholder="Your email address"
              aria-label="Email address for newsletter"
              className="w-full rounded-full border border-white/30 bg-white/90 px-5 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 ring-focus"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-white px-7 py-3 text-sm font-semibold uppercase tracking-wide text-brand-primary shadow-sm transition-all duration-200 ease-smooth hover:-translate-y-[1px] hover:shadow-glowBlue"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}