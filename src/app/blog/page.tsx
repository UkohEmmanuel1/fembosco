import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { ArrowRightIcon } from "@/components/ui/icons";
import { blogPosts } from "@/lib/blog";

export const metadata = {
  title: "Blog & Guides",
  description:
    "Industry news, product how-to guides, electrical safety education and project case studies from Fembosco Engineering.",
};

export default function BlogIndexPage() {
  const categories = Array.from(new Set(blogPosts.map((p) => p.category)));

  return (
    <>
      <PageHeader
        title="Blog & Guides"
        trail={[{ label: "Blog" }]}
        description="Industry news, installation guides, electrical safety education and project case studies."
      />
      <section className="container-site py-14">
        <div className="flex flex-wrap gap-3">
          {categories.map((c) => (
            <span
              key={c}
              className="rounded-full border border-brand-secondary/20 bg-brand-secondary-light px-4 py-1.5 text-xs font-semibold text-brand-primary"
            >
              {c}
            </span>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-card transition-all duration-300 ease-smooth hover:-translate-y-1 hover:shadow-cardHover"
            >
              <div className="overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="aspect-[16/9] w-full object-cover transition-transform duration-500 ease-smooth group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                  <span className="rounded-full border border-brand-secondary/20 bg-brand-secondary-light px-3 py-1 font-semibold text-brand-primary">
                    {post.category}
                  </span>
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-slate-900 transition-colors group-hover:text-brand-primary">
                  {post.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-500">{post.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-primary transition-colors group-hover:text-brand-accent">
                  Read article
                  <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 ease-smooth group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}