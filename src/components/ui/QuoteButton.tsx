"use client";

import { useQuote } from "@/components/layout/QuoteProvider";
import { ArrowRightIcon } from "@/components/ui/icons";

export function QuoteButton({
  children = "Get a Quote",
  variant = "primary",
}: {
  children?: React.ReactNode;
  variant?: "primary" | "hero";
}) {
  const { openQuote } = useQuote();

  return (
    <button
      type="button"
      onClick={openQuote}
      className={variant === "hero" ? "btn-pill-hero gap-3.5" : "btn-pill gap-3.5"}
    >
      {children}
      <ArrowRightIcon className="h-4 w-4" />
    </button>
  );
}