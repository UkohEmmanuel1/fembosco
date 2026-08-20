import { Hero } from "@/components/sections/Hero";
import { QuickCategories } from "@/components/sections/QuickCategories";
import { FeaturedProducts } from "@/components/sections/FeaturedProducts";
import { Products } from "@/components/sections/Products";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { B2BTeaser } from "@/components/sections/B2BTeaser";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Testimonials } from "@/components/sections/Testimonials";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { Newsletter } from "@/components/sections/Newsletter";
import { Partners } from "@/components/sections/Partners";
import { CtaStrip } from "@/components/sections/CtaStrip";

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickCategories />
      <FeaturedProducts />
      <WhyChooseUs />
      <B2BTeaser />
      <Products />
      <CaseStudies />
      <Testimonials />
      <BlogPreview />
      <Newsletter />
      <Partners />
      <CtaStrip />
    </>
  );
}