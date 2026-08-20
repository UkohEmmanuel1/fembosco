import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductCard } from "@/components/ui/ProductCard";
import { ArrowRightIcon } from "@/components/ui/icons";
import { products } from "@/lib/products";

export function Products() {
  return (
    <section className="container-site py-16 md:py-20">
      <SectionHeading
        title="Our Products"
        subtitle="A complete range of electrical, industrial and engineering systems in stock."
      />
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link href="/shop" className="btn-pill gap-2">
          View Full Catalogue
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}