"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { site, socialLinks } from "@/lib/site";
import { footerQuickLinks } from "@/lib/navigation";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  WhatsAppIcon,
  CheckCircleIcon,
} from "@/components/ui/icons";

function WidgetTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-4 flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wider text-slate-900">
      <span className="inline-block h-4 w-1 rounded-full bg-gradient-to-b from-brand-secondary to-brand-accent" aria-hidden="true" />
      {children}
    </h2>
  );
}

function NewsletterForm() {
  const [done, setDone] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDone(true);
  };

  if (done) {
    return (
      <p className="flex items-center gap-2 text-sm text-brand-secondary">
        <CheckCircleIcon className="h-5 w-5" />
        Thanks for subscribing — you are on the list.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3 sm:flex-row">
      <input
        type="email"
        required
        placeholder="Your email address"
        aria-label="Email address for newsletter"
        className="w-full rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none placeholder:text-slate-400 ring-focus"
      />
      <button type="submit" className="btn-pill shrink-0 px-5 py-2.5 text-xs">
        Subscribe
      </button>
    </form>
  );
}

function SocialIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "facebook":
      return <FacebookIcon className="h-4 w-4" />;
    case "instagram":
      return <InstagramIcon className="h-4 w-4" />;
    case "linkedin":
      return <LinkedInIcon className="h-4 w-4" />;
    case "whatsapp":
      return <WhatsAppIcon className="h-4 w-4" />;
    default:
      return null;
  }
}

export function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-slate-50">
      {/* Newsletter band */}
      <div className="border-b border-slate-200/60 bg-gradient-to-br from-brand-secondary-light via-white to-white">
        <div className="container-site flex flex-col items-center justify-between gap-6 py-10 md:flex-row">
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-900">
              Stay ahead of the market
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Product launches, industry news and installation guides — straight to your inbox.
            </p>
          </div>
          <div className="w-full max-w-md">
            <NewsletterForm />
          </div>
        </div>
      </div>

      {/* Columns */}
      <div className="container-site grid grid-cols-1 gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-6">
          <Link href="/" aria-label="Fembosco Engineering Limited">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo-footer.png"
              alt="Fembosco Engineering Limited"
              width={200}
              height={90}
              className="h-[80px] w-[180px] max-w-full object-contain"
            />
          </Link>
          <p className="text-sm leading-relaxed text-slate-500">{site.aboutText}</p>
          <div className="flex items-center gap-2.5">
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-all duration-200 ease-smooth hover:-translate-y-0.5 hover:border-brand-secondary hover:text-brand-secondary"
              >
                <SocialIcon icon={s.icon} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <WidgetTitle>Quick Links</WidgetTitle>
          <ul className="space-y-3 text-sm">
            {footerQuickLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="text-slate-500 transition-colors hover:text-brand-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <WidgetTitle>Contact Us</WidgetTitle>
          <ul className="space-y-4 text-sm leading-relaxed text-slate-500">
            <li>
              <span className="font-medium text-slate-900">Phone:</span>
              <br />
              <a href="tel:+2348023124969" className="transition-colors hover:text-brand-primary">
                {site.phonePrimary}
              </a>
              , {site.phoneNumbers[0]}
            </li>
            <li>
              <span className="font-medium text-slate-900">Lagos:</span>
              <br />
              {site.addressLagos}
            </li>
            <li>
              <span className="font-medium text-slate-900">Abuja:</span>
              <br />
              {site.addressAbuja}
            </li>
            <li>
              <span className="font-medium text-slate-900">We are open:</span>
              <br />
              {site.hoursFooter}
            </li>
          </ul>
        </div>

        <div>
          <WidgetTitle>Our Promise</WidgetTitle>
          <ul className="space-y-3 text-sm text-slate-500">
            <li className="flex items-start gap-2">
              <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-secondary" />
              Authorised Legrand partner
            </li>
            <li className="flex items-start gap-2">
              <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-secondary" />
              European quality sourcing
            </li>
            <li className="flex items-start gap-2">
              <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-secondary" />
              Nationwide delivery
            </li>
            <li className="flex items-start gap-2">
              <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-secondary" />
              Bulk &amp; wholesale pricing
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-200/70">
        <div className="container-site flex flex-col items-center justify-between gap-3 py-6 text-center md:flex-row">
          <p className="text-sm text-slate-400">
            Copyright © {new Date().getFullYear()} Fembosco Engineering Limited. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-500">
            <Link href="/shop" className="transition-colors hover:text-brand-primary">Shop</Link>
            <Link href="/about" className="transition-colors hover:text-brand-primary">About</Link>
            <Link href="/contact" className="transition-colors hover:text-brand-primary">Contact</Link>
            <Link href="/track-order" className="transition-colors hover:text-brand-primary">Track Order</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}