import Link from "next/link";

type Crumb = {
  label: string;
  href?: string;
};

export function PageHeader({
  title,
  trail,
  description,
}: {
  title: string;
  trail: Crumb[];
  description?: string;
}) {
  return (
    <div className="relative overflow-hidden border-b border-slate-200/70 bg-gradient-to-b from-white to-slate-50">
      <div className="spotlight spotlight-bg" aria-hidden="true" />
      <div className="container-site relative flex flex-col items-start gap-2 py-16 md:py-20">
        <h1 className="font-display text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          {title}
        </h1>
        {description && <p className="max-w-2xl text-sm leading-relaxed text-slate-500">{description}</p>}
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-500">
            <li>
              <Link href="/" className="font-medium text-brand-primary transition-colors hover:text-brand-accent">
                Home
              </Link>
            </li>
            {trail.map((crumb, i) => {
              const isLast = i === trail.length - 1;
              return (
                <li key={`${crumb.label}-${i}`} className="flex items-center gap-2">
                  <span aria-hidden="true" className="text-slate-300">
                    /
                  </span>
                  {crumb.href && !isLast ? (
                    <Link href={crumb.href} className="font-medium text-brand-primary transition-colors hover:text-brand-accent">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span aria-current="page" className="text-slate-500">
                      {crumb.label}
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </div>
  );
}