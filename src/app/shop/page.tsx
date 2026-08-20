import { Suspense } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { ShopClient } from "@/components/shop/ShopClient";

export const metadata = {
  title: "Shop All Products",
  description:
    "Browse the full Fembosco catalogue — industrial, residential and commercial electrical products from Legrand, Schneider, ABB, Philips and more.",
};

type SearchParams = { [key: string]: string | string[] | undefined };

export default function ShopPage({ searchParams }: { searchParams: SearchParams }) {
  const category = typeof searchParams.category === "string" ? searchParams.category : "";
  const query = typeof searchParams.q === "string" ? searchParams.q : "";

  return (
    <>
      <PageHeader
        title="Shop All Products"
        crumb="Shop"
        description="Filter by category, manufacturer, price and application. Add to cart, compare or request a bulk quote."
      />
      <Suspense fallback={<div className="container-site py-20 text-center text-slate-500">Loading catalogue...</div>}>
        <ShopClient initialCategory={category} initialQuery={query} />
      </Suspense>
    </>
  );
}