import type { ReactNode } from "react";

export function SectionHeading({
  title,
  subtitle,
  dividerClassName = "",
  align = "center",
}: {
  title: string;
  subtitle?: ReactNode;
  dividerClassName?: string;
  align?: "center" | "left";
}) {
  const isCenter = align === "center";
  return (
    <div className={isCenter ? "flex flex-col items-center text-center" : "flex flex-col items-start text-left"}>
      <h2 className="section-title">{title}</h2>
      <div className={`divider-brand ${isCenter ? "" : "!ml-0"} ${dividerClassName}`} aria-hidden="true" />
      {subtitle && (
        <p className={`mt-4 max-w-2xl text-base leading-relaxed text-slate-500 ${isCenter ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}