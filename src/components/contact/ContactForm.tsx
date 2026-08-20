"use client";

import { useState, type FormEvent } from "react";
import { CheckCircleIcon, ChevronDownIcon } from "@/components/ui/icons";
import { departments, faqs } from "@/lib/faqs";

const input =
  "w-full rounded-lg border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition-all duration-200 ease-smooth placeholder:text-slate-400 focus:border-brand-secondary focus:ring-2 focus:ring-brand-secondary/20";
const label = "mb-1.5 block text-sm font-medium text-slate-700";

export function ContactForm() {
  const [department, setDepartment] = useState<string>("sales");
  const [done, setDone] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDone(true);
  };

  if (done) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-slate-200/70 bg-white p-10 text-center shadow-card">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
          <CheckCircleIcon className="h-7 w-7" />
        </span>
        <p className="font-display text-lg font-semibold tracking-tight text-slate-900">Message sent</p>
        <p className="max-w-sm text-sm text-slate-500">
          Thanks for contacting Fembosco. Our {departments.find((d) => d.id === department)?.label} team
          will respond within one business day.
        </p>
        <button type="button" onClick={() => setDone(false)} className="btn-outline mt-2 text-xs">
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="glass space-y-5 rounded-2xl border border-slate-200/70 bg-white/70 p-7 shadow-card backdrop-blur"
    >
      <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-900">Send us a message</h2>
      <div>
        <label htmlFor="department" className={label}>
          Department *
        </label>
        <select
          id="department"
          name="department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          className={input}
        >
          {departments.map((d) => (
            <option key={d.id} value={d.id}>
              {d.label}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>
            Your Name *
          </label>
          <input id="name" name="name" required placeholder="Full name" className={input} />
        </div>
        <div>
          <label htmlFor="email" className={label}>
            Your Email *
          </label>
          <input id="email" name="email" type="email" required placeholder="you@example.com" className={input} />
        </div>
      </div>
      <div>
        <label htmlFor="phone" className={label}>
          Phone Number
        </label>
        <input id="phone" name="phone" type="tel" placeholder="+234..." className={input} />
      </div>
      <div>
        <label htmlFor="subject" className={label}>
          Subject
        </label>
        <input id="subject" name="subject" placeholder="How can we help?" className={input} />
      </div>
      <div>
        <label htmlFor="message" className={label}>
          Message *
        </label>
        <textarea id="message" name="message" rows={5} required placeholder="Your message..." className={input} />
      </div>
      <button type="submit" className="btn-pill w-full">
        Send Message
      </button>
    </form>
  );
}

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={faq.question}
          className="overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-card transition-all duration-200 ease-smooth hover:border-brand-secondary/30"
        >
          <button
            type="button"
            onClick={() => setOpenIndex((cur) => (cur === i ? -1 : i))}
            aria-expanded={openIndex === i}
            className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
          >
            <span className="font-display text-sm font-semibold tracking-tight text-slate-900">{faq.question}</span>
            <ChevronDownIcon
              className={`h-4 w-4 shrink-0 text-brand-primary transition-transform duration-200 ease-smooth ${
                openIndex === i ? "rotate-180" : ""
              }`}
            />
          </button>
          {openIndex === i && <p className="px-5 pb-5 text-sm leading-relaxed text-slate-500">{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
}