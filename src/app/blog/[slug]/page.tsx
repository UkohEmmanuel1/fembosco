import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/ui/PageHeader";
import { ShareIcon, CheckCircleIcon } from "@/components/ui/icons";
import { blogPosts, getBlogPost } from "@/lib/blog";
import { site } from "@/lib/site";

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);
  const shareUrl = `${site.url}blog/${post.slug}`;

  return (
    <>
      <PageHeader title="Blog" crumb="Blog" />
      <article className="container-site py-12">
        <div className="max-w-3xl">
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
            <span className="rounded-full border border-brand-secondary/20 bg-brand-secondary-light px-3 py-1 font-semibold text-brand-primary">
              {post.category}
            </span>
            <span>{post.date}</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-3 text-base italic text-slate-500">{post.excerpt}</p>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={post.image}
            alt={post.title}
            className="mt-8 aspect-[16/9] w-full rounded-2xl object-cover shadow-card"
          />

          <div className="mt-10 space-y-8">
            {post.sections.map((s, i) => (
              <section key={s.heading}>
                <h2 className="flex items-start gap-3 font-display text-2xl font-semibold tracking-tight text-brand-primary">
                  <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-brand-accent to-brand-accent-dark text-sm font-bold text-white shadow-sm">
                    {i + 1}
                  </span>
                  {s.heading}
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-slate-500">{s.body}</p>
              </section>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-brand-secondary/15 bg-brand-secondary-light/70 p-6">
            <div className="text-sm text-slate-900">
              <p className="font-semibold">{post.author}</p>
              <p className="text-slate-500">Fembosco Engineering Limited</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-slate-500">Share:</span>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(post.title)} ${shareUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-b from-brand-primary-light to-brand-primary text-white shadow-sm transition-all duration-200 ease-smooth hover:-translate-y-[1px]"
              >
                <ShareIcon className="h-4 w-4" />
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Share on Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-b from-brand-primary-light to-brand-primary text-white shadow-sm transition-all duration-200 ease-smooth hover:-translate-y-[1px]"
              >
                <ShareIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          {related.length > 0 && (
            <div className="mt-14">
              <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-900">Continue Reading</h2>
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="group rounded-2xl border border-slate-200/70 bg-white p-6 shadow-card transition-all duration-300 ease-smooth hover:-translate-y-1 hover:shadow-cardHover"
                  >
                    <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-brand-secondary">
                      <CheckCircleIcon className="h-4 w-4" />
                      {r.category}
                    </p>
                    <h3 className="mt-3 font-display text-lg font-semibold tracking-tight text-slate-900 transition-colors group-hover:text-brand-primary">
                      {r.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </>
  );
}