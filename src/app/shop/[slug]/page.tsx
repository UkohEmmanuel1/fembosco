import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/ui/PageHeader";
import { ProductDetail } from "@/components/shop/ProductDetail";
import { ProductTabs } from "@/components/shop/ProductTabs";
import { ProductCard } from "@/components/ui/ProductCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DownloadIcon, ChevronDownIcon } from "@/components/ui/icons";
import { getProduct, getRelated, stockLabels } from "@/lib/products";

export async function generateStaticParams() {
  const { products } = await import("@/lib/products");
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product) return {};
  return {
    title: `${product.title} - Fembosco Engineering`,
    description: product.shortDescription,
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  const related = getRelated(product);
  const stock = stockLabels[product.stock];

  return (
    <>
      <PageHeader
        title={product.title}
        trail={[{ label: "Shop", href: "/shop" }, { label: product.title }]}
        description={product.shortDescription}
      />
      <section className="container-site py-12">
        <ProductDetail product={product} />

        {/* Description + Reviews tabs, specs and datasheet */}
        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_320px]">
          <ProductTabs product={product} />

          <aside className="space-y-6">
            <div className="glass rounded-2xl border border-slate-200/70 bg-white p-6 shadow-card">
              <h3 className="font-display text-lg font-semibold tracking-tight text-slate-900">Bulk Pricing</h3>
              <p className="mt-1 text-xs text-slate-500">
                Wholesale tiers apply automatically at checkout. MOQ: {product.moq}.
              </p>
              <ul className="mt-4 space-y-2">
                {product.bulkTiers.map((t) => (
                  <li
                    key={t.minQty}
                    className="flex items-center justify-between rounded-lg border border-brand-secondary/15 bg-brand-secondary-light/70 px-3 py-2.5 text-sm"
                  >
                    <span className="text-slate-900">Qty ≥ {t.minQty}</span>
                    <span className="font-semibold text-brand-primary">{t.discount}% off</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass rounded-2xl border border-slate-200/70 bg-white p-6 shadow-card">
              <h3 className="font-display text-lg font-semibold tracking-tight text-slate-900">Downloads</h3>
              <a
                href={`/api/datasheet/${product.slug}`}
                className="btn-pill mt-4 inline-flex w-full items-center justify-center text-sm"
              >
                <DownloadIcon className="h-4 w-4" />
                Download Datasheet (PDF)
              </a>
            </div>

            <div className="glass rounded-2xl border border-slate-200/70 bg-white p-6 shadow-card">
              <h3 className="font-display text-lg font-semibold tracking-tight text-slate-900">Stock Status</h3>
              <p className={`mt-3 inline-flex rounded-full px-3 py-1 text-sm font-semibold ${stock.color}`}>
                {stock.label}
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-primary hover:text-brand-accent"
              >
                Enquire about availability
                <ChevronDownIcon className="h-4 w-4 -rotate-90" />
              </Link>
            </div>
          </aside>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-20">
            <SectionHeading align="left" title="Related Products" />
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
}