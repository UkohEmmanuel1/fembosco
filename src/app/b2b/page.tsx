import { PageHeader } from "@/components/ui/PageHeader";
import { B2BForms } from "@/components/b2b/B2BForms";
import { CheckCircleIcon, TagIcon, UserIcon, TruckIcon, ShieldIcon } from "@/components/ui/icons";

const benefits = [
  { icon: TagIcon, title: "Tiered Wholesale Pricing", text: "Volume discounts that grow with order size, applied automatically at checkout." },
  { icon: UserIcon, title: "Dedicated Account Manager", text: "A named contact for pricing, stock and project support." },
  { icon: CheckCircleIcon, title: "Trade Credit Terms", text: "Approved corporate accounts can apply for credit terms on qualifying orders." },
  { icon: TruckIcon, title: "Project-Scale Logistics", text: "Planned bulk delivery across all 36 states from Lagos and Abuja." },
  { icon: ShieldIcon, title: "Authenticity Guarantee", text: "Every unit genuine and warranty-backed as an authorised Legrand partner." },
];

export const metadata = {
  title: "B2B / Wholesale",
  description:
    "Register for a Fembosco corporate account to unlock tiered pricing, MOQ guidance, trade credit and dedicated account management for bulk electrical orders.",
};

export default function B2BPage() {
  return (
    <>
      <PageHeader
        title="B2B / Wholesale"
        trail={[{ label: "B2B / Wholesale" }]}
        description="Trade direct with Fembosco for bulk electrical and industrial supplies across Nigeria."
      />

      <section className="container-site py-14">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_420px]">
          <div>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-900">
              Built for Contractors, Developers &amp; Industry
            </h2>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-slate-500">
              Fembosco has supplied major construction, manufacturing and infrastructure projects for
              over two decades. Our B2B programme makes bulk buying simple — transparent tiered
              pricing, clear minimum order quantities, corporate accounts and trade credit for
              approved customers.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {benefits.map((b) => (
                <div
                  key={b.title}
                  className="group rounded-2xl border border-slate-200/70 bg-white p-6 shadow-card transition-all duration-300 ease-smooth hover:-translate-y-1 hover:border-brand-secondary/40 hover:shadow-cardHover"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand-secondary/15 bg-brand-secondary-light text-brand-primary shadow-sm">
                    <b.icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-semibold tracking-tight text-slate-900">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{b.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-card">
              <h3 className="border-b border-slate-200 bg-brand-secondary-light/70 px-6 py-4 font-display text-lg font-semibold tracking-tight text-brand-primary">
                How tiered pricing works
              </h3>
              <div className="p-6">
                <p className="text-sm text-slate-500">
                  Every product page lists its MOQ and discount tiers. Discounts are applied to the
                  whole line automatically once the quantity threshold is reached.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-secondary" />
                    Sign in with a registered corporate account to see your negotiated rates.
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-secondary" />
                    Request a bulk quote for custom pricing on project-scale quantities.
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-secondary" />
                    Approved accounts can apply for trade credit on qualifying orders.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <B2BForms />
        </div>
      </section>
    </>
  );
}