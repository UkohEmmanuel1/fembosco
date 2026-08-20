import { ProductFadeShow } from "@/components/ui/ProductFadeShow";
import { FancyText } from "@/components/ui/FancyText";
import { QuoteButton } from "@/components/ui/QuoteButton";
import { fancyStrings } from "@/lib/showcase";

export function ProductShowcase() {
  return (
    <section className="container-site grid grid-cols-1 items-center gap-10 py-14 md:grid-cols-2 md:gap-8">
      <div className="glass rounded-2xl border border-slate-200/70 bg-white/60 p-3 shadow-card backdrop-blur">
        <ProductFadeShow />
      </div>
      <div className="flex flex-col items-start text-left">
        <h2 className="font-display text-[34px] font-semibold leading-tight tracking-tight text-slate-900 sm:text-[42px]">
          <span className="block">We Deliver Superior</span>
        </h2>
        <FancyText
          strings={fancyStrings}
          className="mt-1 block font-display text-[24px] font-semibold tracking-tight text-slate-900 sm:text-[28px]"
          stringClassName="text-gradient-amber"
          cursorClassName="text-brand-accent"
          suffix=" In Nigeria"
          suffixClassName="text-slate-900"
        />
        <div className="divider-brand my-4 !ml-0" aria-hidden="true" />
        <p className="text-[15px] leading-relaxed text-slate-500">
          Whether you are in the market for engineering or industrial products, at Fembosco
          Engineering, we deliver solutions that meet requirements. Our partnership with the leading
          brands in the world ensures that you get only superior products.
        </p>
        <div className="mt-6 md:mb-[60px]">
          <QuoteButton>Get a Quote</QuoteButton>
        </div>
      </div>
    </section>
  );
}