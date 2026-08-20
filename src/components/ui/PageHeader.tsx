import Link from "next/link";

export function PageHeader({
  title,
  crumb,
  description,
}: {
  title: string;
  crumb: string;
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
          <ol className="flex items-center gap-2 text-sm text-slate-500">
            <li>
              <Link href="/" className="font-medium text-brand-primary transition-colors hover:text-brand-accent">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-slate-300">
              /
            </li>
            <li aria-current="page" className="text-slate-500">
              {crumb}
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
}