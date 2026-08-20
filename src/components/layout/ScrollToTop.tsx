"use client";

import { useEffect, useState } from "react";
import { ChevronUpIcon } from "@/components/ui/icons";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#"
      aria-label="Scroll to top"
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className={`fixed bottom-24 right-6 z-[999] flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-600 shadow-card backdrop-blur-md transition-all duration-300 ease-smooth hover:border-brand-secondary hover:text-brand-secondary hover:shadow-glow ${
        visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
      }`}
    >
      <ChevronUpIcon className="h-5 w-5" />
    </a>
  );
}