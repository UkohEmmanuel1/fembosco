import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { ContactForm, FaqAccordion } from "@/components/contact/ContactForm";
import { PhoneIcon, ClockIcon, EnvelopeIcon, MapPinIcon, WhatsAppIcon } from "@/components/ui/icons";
import { site } from "@/lib/site";
import { departments } from "@/lib/faqs";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Reach Fembosco Engineering Limited for electrical, industrial and engineering products in Nigeria.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        crumb="Contact Us"
        description="Our team is ready to help — sales, technical support, B2B and delivery enquiries."
      />

      <section className="container-site py-14">
        {/* Quick contact strip */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <a
            href={`tel:${site.phonePrimary.replace(/-/g, "")}`}
            className="group flex items-center gap-4 rounded-2xl border border-slate-200/70 bg-white p-6 shadow-card transition-all duration-300 ease-smooth hover:-translate-y-1 hover:shadow-cardHover"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-brand-secondary/15 bg-brand-secondary-light text-brand-primary shadow-sm">
              <PhoneIcon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs text-slate-500">Call Us</p>
              <p className="font-display text-sm font-semibold tracking-tight text-slate-900">{site.phonePrimary}</p>
              <p className="text-xs text-slate-500">{site.phoneNumbers[0]}</p>
            </div>
          </a>
          <a
            href={`https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(site.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-2xl border border-slate-200/70 bg-white p-6 shadow-card transition-all duration-300 ease-smooth hover:-translate-y-1 hover:shadow-cardHover"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white shadow-sm">
              <WhatsAppIcon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs text-slate-500">WhatsApp</p>
              <p className="font-display text-sm font-semibold tracking-tight text-slate-900">Chat with us</p>
              <p className="text-xs text-slate-500">Fastest response</p>
            </div>
          </a>
          <a
            href={`mailto:${site.emailsLagos[0]}`}
            className="group flex items-center gap-4 rounded-2xl border border-slate-200/70 bg-white p-6 shadow-card transition-all duration-300 ease-smooth hover:-translate-y-1 hover:shadow-cardHover"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-brand-secondary/15 bg-brand-secondary-light text-brand-primary shadow-sm">
              <EnvelopeIcon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs text-slate-500">Email</p>
              <p className="font-display text-sm font-semibold tracking-tight text-slate-900">{site.emailsLagos[0]}</p>
              <p className="text-xs text-slate-500">Sales &amp; enquiries</p>
            </div>
          </a>
          <div className="flex items-center gap-4 rounded-2xl border border-slate-200/70 bg-white p-6 shadow-card">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-brand-secondary/15 bg-brand-secondary-light text-brand-primary shadow-sm">
              <ClockIcon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs text-slate-500">Opening Hours</p>
              <p className="font-display text-sm font-semibold tracking-tight text-slate-900">{site.hoursFooter}</p>
              <p className="text-xs text-slate-500">Lagos &amp; Abuja</p>
            </div>
          </div>
        </div>

        {/* Offices + form */}
        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_420px]">
          <div className="space-y-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="glass rounded-2xl border border-slate-200/70 bg-white p-6 shadow-card">
                <h2 className="font-display text-xl font-semibold tracking-tight text-slate-900">Lagos Office</h2>
                <ul className="mt-4 space-y-3 text-sm text-slate-500">
                  <li className="flex items-start gap-3">
                    <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-primary" />
                    <span>{site.addressLagos}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <PhoneIcon className="h-5 w-5 shrink-0 text-brand-primary" />
                    <a href="tel:+2348023124969" className="hover:text-brand-accent">{site.phonePrimary}</a>
                  </li>
                  <li className="flex items-center gap-3">
                    <EnvelopeIcon className="h-5 w-5 shrink-0 text-brand-primary" />
                    <span>{site.emailsLagos.join(", ")}</span>
                  </li>
                </ul>
              </div>
              <div className="glass rounded-2xl border border-slate-200/70 bg-white p-6 shadow-card">
                <h2 className="font-display text-xl font-semibold tracking-tight text-slate-900">Abuja Office</h2>
                <ul className="mt-4 space-y-3 text-sm text-slate-500">
                  <li className="flex items-start gap-3">
                    <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-primary" />
                    <span>{site.addressAbuja}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <PhoneIcon className="h-5 w-5 shrink-0 text-brand-primary" />
                    <span>{site.phoneNumbers.join(", ")}</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <EnvelopeIcon className="h-5 w-5 shrink-0 text-brand-primary" />
                    <span>{site.emailsAbuja.join(", ")}</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Departments */}
            <div className="glass rounded-2xl border border-slate-200/70 bg-white p-6 shadow-card">
              <h2 className="font-display text-xl font-semibold tracking-tight text-slate-900">Department Routing</h2>
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {departments.map((d) => (
                  <div key={d.id} className="rounded-xl border border-brand-secondary/10 bg-brand-secondary-light/70 px-4 py-3">
                    <p className="font-display text-sm font-semibold text-brand-primary">{d.label}</p>
                    <p className="text-xs text-slate-500">{d.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Map */}
            <div className="overflow-hidden rounded-2xl border border-slate-200/70 shadow-card">
              <iframe
                title="Fembosco Engineering Limited - Lagos location"
                src="https://www.google.com/maps?q=Oshodi%2C%20Lagos%2C%20Nigeria&output=embed"
                className="h-[320px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <ContactForm />
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center font-display text-3xl font-semibold tracking-tight text-slate-900">
              Frequently Asked Questions
            </h2>
            <div className="divider-brand" aria-hidden="true" />
            <div className="mt-8">
              <FaqAccordion />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}