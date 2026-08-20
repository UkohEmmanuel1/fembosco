import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRightIcon } from "@/components/ui/icons";
import { blogPosts } from "@/lib/blog";

export function BlogPreview() {
  const posts = blogPosts.slice(0, 3);

  return (
    <section className="container-site py-16 md:py-20">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading
          align="left"
          title="Insights & Guides"
          subtitle="Industry news, installation guides, electrical safety education and project case studies."
        />
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-brand-primary transition-colors hover:text-brand-accent"
        >
          View all articles
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-card transition-all duration-300 ease-smooth hover:-translate-y-1 hover:shadow-cardHover"
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
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-center gap-3 text-xs text-slate-500">
                <span className="rounded-full border border-brand-secondary/20 bg-brand-secondary-light px-3 py-1 font-semibold text-brand-primary">
                  {post.category}
                </span>
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="mt-3 font-display text-lg font-semibold tracking-tight text-slate-900 transition-colors group-hover:text-brand-primary">
                {post.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-500">{post.excerpt}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-primary transition-colors group-hover:text-brand-accent">
                Read article
                <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 ease-smooth group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}