"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ProductCard } from "@/components/ui/ProductCard";
import { GridIcon, ListIcon, SearchIcon, ChevronDownIcon } from "@/components/ui/icons";
import {
  products,
  categories,
  manufacturers,
  type Category,
  type Manufacturer,
} from "@/lib/products";

type SortKey = "featured" | "price-asc" | "price-desc" | "rating";

type ViewMode = "grid" | "list";

function ListProductRow({ slug }: { slug: string }) {
  const product = products.find((p) => p.slug === slug);
  if (!product) return null;
  return (
    <div className="glass flex gap-5 rounded-2xl border border-slate-200/70 bg-white p-4 shadow-card transition-all duration-300 ease-smooth hover:-translate-y-[2px] hover:shadow-cardHover">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={product.image}
        alt={product.alt}
        className="h-36 w-40 shrink-0 rounded-xl object-cover"
      />
      <div className="flex flex-1 flex-col">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-brand-secondary">{product.manufacturer}</p>
        <h3 className="mt-1 font-display text-lg font-semibold tracking-tight text-slate-900">{product.title}</h3>
        <p className="mt-1 text-sm text-slate-500">{product.shortDescription}</p>
        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-3">
          <p className="font-display text-lg font-semibold text-brand-primary">
            ₦{product.price.toLocaleString("en-NG")}
          </p>
          <a
            href={`/shop/${product.slug}`}
            className="rounded-full bg-gradient-to-b from-brand-primary-light to-brand-primary px-5 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-sm transition-all duration-200 ease-smooth hover:-translate-y-[1px]"
          >
            View Product
          </a>
        </div>
      </div>
    </div>
  );
}

function FilterHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="font-display text-sm font-semibold uppercase tracking-wider text-slate-900">{children}</h2>;
}

export function ShopClient({
  initialCategory,
  initialQuery,
}: {
  initialCategory: string;
  initialQuery: string;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [category, setCategory] = useState<Category | "all">(
    initialCategory && (initialCategory === "industrial" || initialCategory === "residential" || initialCategory === "commercial")
      ? (initialCategory as Category)
      : "all"
  );
  const [selectedManufacturers, setSelectedManufacturers] = useState<Manufacturer[]>([]);
  const [maxPrice, setMaxPrice] = useState<number>(0);
  const [application, setApplication] = useState<string>("all");
  const [query, setQuery] = useState(initialQuery);
  const [view, setView] = useState<ViewMode>("grid");
  const [sort, setSort] = useState<SortKey>("featured");

  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat && (cat === "industrial" || cat === "residential" || cat === "commercial")) {
      setCategory(cat as Category);
    }
    const q = searchParams.get("q");
    if (typeof q === "string") setQuery(q);
  }, [searchParams]);

  const applications = useMemo(
    () => Array.from(new Set(products.map((p) => p.application))),
    []
  );

  const toggleManufacturer = (m: Manufacturer) =>
    setSelectedManufacturers((prev) =>
      prev.includes(m) ? prev.filter((x) => x !== m) : [...prev, m]
    );

  const filtered = useMemo(() => {
    let list = products.filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      if (selectedManufacturers.length > 0 && !selectedManufacturers.includes(p.manufacturer))
        return false;
      if (maxPrice > 0 && p.price > maxPrice) return false;
      if (application !== "all" && p.application !== application) return false;
      if (query.trim()) {
        const q = query.toLowerCase();
        const haystack = `${p.title} ${p.manufacturer} ${p.description} ${p.tags.join(" ")}`.toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });

    switch (sort) {
      case "price-asc":
        list = [...list].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list = [...list].sort((a, b) => b.price - a.price);
        break;
      case "rating":
        list = [...list].sort((a, b) => b.rating - a.rating);
        break;
      default:
        list = [...list].sort((a, b) => Number(b.featured ?? false) - Number(a.featured ?? false));
    }
    return list;
  }, [category, selectedManufacturers, maxPrice, application, query, sort]);

  const onApplyCategory = (key: Category | "all") => {
    setCategory(key);
    const params = new URLSearchParams(searchParams.toString());
    if (key === "all") params.delete("category");
    else params.set("category", key);
    router.push(`/shop?${params.toString()}`);
  };

  const maxPriceRange = useMemo(() => Math.max(...products.map((p) => p.price)), []);

  return (
    <div className="container-site py-12">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[280px_1fr]">
        {/* Filters */}
        <aside className="lg:sticky lg:top-28 lg:h-fit">
          <div className="glass space-y-8 rounded-2xl border border-slate-200/70 bg-white/70 p-6 shadow-card backdrop-blur">
            <div>
              <FilterHeading>Category</FilterHeading>
              <ul className="mt-3 space-y-1">
                {categories.map((c) => (
                  <li key={c.key}>
                    <button
                      type="button"
                      onClick={() => onApplyCategory(c.key)}
                      className={`w-full rounded-lg px-3 py-2 text-left text-sm transition-all duration-200 ease-smooth ${
                        category === c.key
                          ? "bg-gradient-to-b from-brand-primary-light to-brand-primary font-semibold text-white shadow-sm"
                          : "text-slate-600 hover:bg-brand-secondary-light hover:text-brand-primary"
                      }`}
                    >
                      {c.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <FilterHeading>Manufacturer</FilterHeading>
              <ul className="mt-3 space-y-2">
                {manufacturers.map((m) => (
                  <li key={m}>
                    <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-600">
                      <input
                        type="checkbox"
                        checked={selectedManufacturers.includes(m)}
                        onChange={() => toggleManufacturer(m)}
                        className="h-4 w-4 rounded accent-brand-primary"
                      />
                      {m}
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <FilterHeading>Application</FilterHeading>
              <div className="relative mt-3">
                <select
                  value={application}
                  onChange={(e) => setApplication(e.target.value)}
                  className="w-full appearance-none rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none ring-focus"
                >
                  <option value="all">All applications</option>
                  {applications.map((a) => (
                    <option key={a} value={a}>
                      {a}
                    </option>
                  ))}
                </select>
                <ChevronDownIcon className="pointer-events-none absolute right-3 top-3 h-4 w-4 text-slate-400" />
              </div>
            </div>

            <div>
              <FilterHeading>Max Price</FilterHeading>
              <input
                type="range"
                min={0}
                max={maxPriceRange}
                step={10000}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="mt-3 w-full accent-brand-primary"
                aria-label="Maximum price"
              />
              <div className="mt-1 flex justify-between text-xs text-slate-500">
                <span>₦0</span>
                <span className="font-semibold text-brand-primary">
                  {maxPrice === 0 ? "No limit" : `₦${maxPrice.toLocaleString("en-NG")}`}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setCategory("all");
                setSelectedManufacturers([]);
                setMaxPrice(0);
                setApplication("all");
                setQuery("");
                router.push("/shop");
              }}
              className="btn-outline w-full text-xs"
            >
              Clear all filters
            </button>
          </div>
        </aside>

        {/* Results */}
        <div>
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex w-full max-w-sm items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2.5 shadow-sm ring-focus">
              <SearchIcon className="h-4 w-4 shrink-0 text-slate-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
              />
            </div>
            <div className="flex items-center gap-3">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortKey)}
                className="rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none ring-focus"
                aria-label="Sort products"
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <div className="flex overflow-hidden rounded-full border border-slate-200 bg-white">
                <button
                  type="button"
                  onClick={() => setView("grid")}
                  aria-label="Grid view"
                  className={`flex h-10 w-10 items-center justify-center transition-colors ${
                    view === "grid" ? "bg-gradient-to-b from-brand-primary-light to-brand-primary text-white" : "text-slate-400 hover:text-brand-primary"
                  }`}
                >
                  <GridIcon className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setView("list")}
                  aria-label="List view"
                  className={`flex h-10 w-10 items-center justify-center transition-colors ${
                    view === "list" ? "bg-gradient-to-b from-brand-primary-light to-brand-primary text-white" : "text-slate-400 hover:text-brand-primary"
                  }`}
                >
                  <ListIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <p className="mt-5 text-sm text-slate-500">
            {filtered.length} product{filtered.length === 1 ? "" : "s"} found
          </p>

          {filtered.length === 0 ? (
            <div className="glass mt-10 rounded-2xl border border-slate-200/70 bg-white p-12 text-center shadow-card">
              <p className="font-display text-lg font-semibold text-slate-900">No products match your filters</p>
              <p className="mt-2 text-sm text-slate-500">Try adjusting your search or clearing filters.</p>
            </div>
          ) : view === "grid" ? (
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="mt-6 space-y-4">
              {filtered.map((product) => (
                <ListProductRow key={product.id} slug={product.slug} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}