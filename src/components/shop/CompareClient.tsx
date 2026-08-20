"use client";

import Link from "next/link";
import { useStore } from "@/components/store/StoreProvider";
import { CompareIcon, TrashIcon, CheckCircleIcon } from "@/components/ui/icons";
import { products, naira, stockLabels } from "@/lib/products";

export function CompareClient() {
  const { compare, toggleCompare } = useStore();

  if (compare.length === 0) {
    return (
      <div className="container-site py-20 text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-secondary-light text-brand-primary">
          <CompareIcon className="h-8 w-8" />
        </span>
        <p className="mt-4 font-display text-2xl font-semibold tracking-tight text-slate-900">Nothing to compare yet</p>
        <p className="mt-2 text-sm text-slate-500">Add up to 3 products to compare them side by side.</p>
        <Link href="/shop" className="btn-pill mt-8 inline-flex">
          Browse Products
        </Link>
      </div>
    );
  }

  const items = compare.map((id) => products.find((p) => p.id === id)).filter(Boolean);

  const rows: { label: string; render: (p: (typeof products)[number]) => React.ReactNode }[] = [
    {
      label: "Manufacturer",
      render: (p) => p.manufacturer,
    },
    {
      label: "Category",
      render: (p) => p.category,
    },
    {
      label: "Price",
      render: (p) => (
        <span className="font-display font-semibold text-brand-primary">
          {naira(p.price)}
          <span className="block text-xs font-normal text-slate-500">{p.unit}</span>
        </span>
      ),
    },
    {
      label: "MOQ",
      render: (p) => p.moq,
    },
    {
      label: "Availability",
      render: (p) => (
        <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${stockLabels[p.stock].color}`}>
          {stockLabels[p.stock].label}
        </span>
      ),
    },
    {
      label: "Rating",
      render: (p) => `${p.rating} ★ (${p.reviewCount})`,
    },
    ...(items[0]
      ? items[0].specs.map((s) => ({
          label: s.label,
          render: (p: (typeof products)[number]) => p.specs.find((x) => x.label === s.label)?.value ?? "—",
        }))
      : []),
  ];

  return (
    <div className="container-site py-12">
      <h1 className="font-display text-2xl font-semibold tracking-tight text-slate-900">Product Comparison</h1>
      <p className="mt-2 text-sm text-slate-500">
        {items.length} of 3 slots used — {compare.length < 3 ? "add more products from the shop." : "comparison is full."}
      </p>

      <div className="glass mt-8 overflow-x-auto rounded-2xl border border-slate-200/70 bg-white shadow-card">
        <table className="w-full min-w-[720px] border-collapse text-sm">
          <thead>
            <tr>
              <th className="w-44 border-b border-slate-200 bg-brand-secondary-light/70 px-4 py-4 text-left font-display font-semibold text-brand-primary">
                Product
              </th>
              {items.map((p) => (
                <th key={p!.id} className="border-b border-slate-200 px-4 py-4 text-left">
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => toggleCompare(p!.id)}
                      aria-label={`Remove ${p!.title} from comparison`}
                      className="absolute -right-1 -top-1 z-10 text-slate-400 transition-colors hover:text-red-600"
                    >
                      <TrashIcon className="h-4 w-4" />
                    </button>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p!.image} alt={p!.alt} className="aspect-[4/3] w-full max-w-[180px] rounded-xl object-cover" />
                    <Link
                      href={`/shop/${p!.slug}`}
                      className="mt-2 block font-display font-semibold tracking-tight text-slate-900 hover:text-brand-primary"
                    >
                      {p!.title}
                    </Link>
                    <Link href={`/shop/${p!.slug}`} className="btn-pill mt-3 inline-flex px-4 py-2 text-[11px]">
                      View & Buy
                    </Link>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label} className="border-b border-slate-100 last:border-b-0">
                <td className="bg-slate-50/70 px-4 py-3 font-display font-semibold text-brand-primary">{row.label}</td>
                {items.map((p) => (
                  <td key={p!.id} className="px-4 py-3 text-slate-700">
                    {row.render(p!)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-6 flex items-center gap-2 text-xs text-slate-500">
        <CheckCircleIcon className="h-4 w-4 text-brand-secondary" />
        Specifications shown for direct comparison. Contact sales for project-specific alternatives.
      </p>
    </div>
  );
}