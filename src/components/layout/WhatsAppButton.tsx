"use client";

import { useState } from "react";
import { WhatsAppIcon } from "@/components/ui/icons";
import { site } from "@/lib/site";

export function WhatsAppButton() {
  const [hover, setHover] = useState(false);

  const href = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(site.whatsappMessage)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="group fixed bottom-[15px] right-[15px] z-[9999] flex h-[50px] w-[50px] items-center justify-center"
    >
      <span
        className={`pointer-events-none mr-3 whitespace-nowrap rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-cardHover ring-1 ring-slate-200 transition-all duration-200 ease-smooth ${
          hover ? "translate-x-0 opacity-100" : "translate-x-2 opacity-0"
        }`}
      >
        WhatsApp us
      </span>
      <span className="relative flex h-[52px] w-[52px] items-center justify-center rounded-full bg-white shadow-[0_8px_28px_-8px_rgba(37,211,102,0.6)] ring-1 ring-[#25D366]/40 transition-transform duration-200 ease-smooth group-hover:scale-105">
        <WhatsAppIcon className="h-[34px] w-[34px]" />
      </span>
    </a>
  );
}