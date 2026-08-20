"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import {
  CartIcon,
  ChevronDownIcon,
  CloseIcon,
  ClockIcon,
  CompareIcon,
  FacebookIcon,
  HeartIcon,
  InstagramIcon,
  LinkedInIcon,
  MenuIcon,
  PhoneIcon,
  SearchIcon,
  WhatsAppIcon,
} from "@/components/ui/icons";
import { navItems, type NavItem } from "@/lib/navigation";
import { site, socialLinks } from "@/lib/site";
import { useStore } from "@/components/store/StoreProvider";

function SocialIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "facebook":
      return <FacebookIcon className="h-4 w-4" />;
    case "instagram":
      return <InstagramIcon className="h-4 w-4" />;
    case "linkedin":
      return <LinkedInIcon className="h-4 w-4" />;
    case "whatsapp":
      return <WhatsAppIcon className="h-4 w-4" />;
    default:
      return null;
  }
}

function SocialBar({ className = "" }: { className?: string }) {
  return (
    <div className={`header-bar-social-icons flex items-center ${className}`}>
      {socialLinks.map((s) => (
        <a
          key={s.label}
          href={s.href}
          className="text-white/80 transition-colors hover:text-brand-accent"
          aria-label={s.label}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialIcon icon={s.icon} />
        </a>
      ))}
    </div>
  );
}

function DesktopNavItem({ item, active }: { item: NavItem; active: boolean }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const onOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onOutside);
    return () => document.removeEventListener("mousedown", onOutside);
  }, []);

  if (item.children) {
    return (
      <li
        ref={ref}
        className="relative flex items-center"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <Link
          href={item.href}
          className={`flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
            active ? "bg-brand-secondary-light text-brand-primary" : "text-slate-600 hover:text-brand-primary"
          }`}
          aria-expanded={open}
          aria-haspopup="true"
        >
          {item.label}
          <ChevronDownIcon className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
        </Link>
        {open && (
          <ul className="glass-strong absolute left-0 top-full z-50 mt-2 w-60 rounded-2xl py-2 shadow-cardHover">
            {item.children.map((child) => (
              <li key={child.label}>
                <Link
                  href={child.href}
                  className="block px-4 py-2.5 text-sm text-slate-600 transition-colors hover:bg-brand-secondary-light/60 hover:text-brand-primary"
                  onClick={() => setOpen(false)}
                >
                  {child.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  }

  return (
    <li className="flex items-center">
      <Link
        href={item.href}
        className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
          active ? "bg-brand-secondary-light text-brand-primary" : "text-slate-600 hover:text-brand-primary"
        }`}
      >
        {item.label}
      </Link>
    </li>
  );
}

function MobileNavItem({ item, active, onNavigate }: { item: NavItem; active: boolean; onNavigate: () => void }) {
  const [open, setOpen] = useState(false);
  const hasChildren = !!item.children?.length;

  return (
    <li className="border-b border-slate-100">
      <div className="flex items-center justify-between">
        <Link
          href={item.href}
          onClick={() => onNavigate()}
          className={`flex-1 py-3.5 text-sm font-medium ${active ? "text-brand-primary" : "text-slate-700"}`}
        >
          {item.label}
        </Link>
        {hasChildren && (
          <button
            type="button"
            aria-expanded={open}
            aria-label={`Toggle ${item.label} submenu`}
            onClick={() => setOpen((o) => !o)}
            className="px-3 py-3 text-slate-500"
          >
            <ChevronDownIcon className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
          </button>
        )}
      </div>
      {hasChildren && open && (
        <ul className="pb-2">
          {item.children!.map((child) => (
            <li key={child.label}>
              <Link
                href={child.href}
                onClick={() => onNavigate()}
                className="block py-2.5 pl-5 text-sm text-slate-500"
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();
  const pathname = usePathname();
  const { cartCount, wishlist, compare } = useStore();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const onSubmitSearch = (e: FormEvent) => {
    e.preventDefault();
    router.push(`/shop?q=${encodeURIComponent(query)}`);
    setSearchOpen(false);
    setQuery("");
  };

  const isActive = (href: string) => pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <>
      <header
        className={`sticky top-0 z-[999] border-b backdrop-blur-md transition-all duration-300 ease-smooth ${
          scrolled ? "border-slate-200/70 bg-white/85 shadow-[0_4px_24px_-12px_rgba(15,23,42,0.12)]" : "border-transparent bg-white/60"
        }`}
      >
      {/* Top bar */}
      <div className={`hidden border-b border-slate-100/80 text-slate-500 sm:block ${searchOpen ? "hidden sm:hidden" : ""}`}>
        <div className="container-site flex items-center justify-between py-2">
          <p className="flex flex-wrap items-center gap-x-6 gap-y-1 text-xs">
            <a href={`tel:${site.phonePrimary.replace(/-/g, "")}`} className="inline-flex items-center gap-1.5 transition-colors hover:text-brand-primary">
              <PhoneIcon className="h-3.5 w-3.5" />
              {site.phonePrimary}
            </a>
            <span>{site.location}</span>
            <span className="inline-flex items-center gap-1.5">
              <ClockIcon className="h-3.5 w-3.5" />
              {site.hoursTopbar}
            </span>
          </p>
          <SocialBar className="scale-90" />
        </div>
      </div>

      {/* Main header */}
      <div className="bg-white/0">
        <div className="container-site flex items-center justify-between gap-6 py-3.5">
          <Link href="/" className="flex shrink-0 items-center" aria-label="Fembosco Engineering Limited - Home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo-header.png" alt="Fembosco Engineering Limited" width={170} height={60} className="h-[48px] w-[140px] object-contain" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden flex-1 lg:block" aria-label="Primary">
            <ul className="flex items-center justify-center gap-1">
              {navItems.map((item) => (
                <DesktopNavItem key={item.label} item={item} active={isActive(item.href)} />
              ))}
            </ul>
          </nav>

          {/* Actions */}
          <div className="hidden items-center gap-1.5 lg:flex">
            <button
              type="button"
              aria-label="Search products"
              onClick={() => setSearchOpen((o) => !o)}
              className="flex h-10 w-10 items-center justify-center rounded-full text-slate-600 transition-colors hover:bg-brand-secondary-light hover:text-brand-primary"
            >
              <SearchIcon className="h-5 w-5" />
            </button>
            <Link
              href="/wishlist"
              aria-label="Wishlist"
              className="relative flex h-10 w-10 items-center justify-center rounded-full text-slate-600 transition-colors hover:bg-brand-secondary-light hover:text-brand-primary"
            >
              <HeartIcon className="h-5 w-5" />
              {wishlist.length > 0 && (
                <span className="absolute right-0 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-brand-accent px-1 text-[10px] font-semibold text-white">
                  {wishlist.length}
                </span>
              )}
            </Link>
            <Link
              href="/compare"
              aria-label="Compare products"
              className="relative flex h-10 w-10 items-center justify-center rounded-full text-slate-600 transition-colors hover:bg-brand-secondary-light hover:text-brand-primary"
            >
              <CompareIcon className="h-5 w-5" />
              {compare.length > 0 && (
                <span className="absolute right-0 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-brand-accent px-1 text-[10px] font-semibold text-white">
                  {compare.length}
                </span>
              )}
            </Link>
            <Link
              href="/cart"
              aria-label="Shopping cart"
              className="relative flex h-10 w-10 items-center justify-center rounded-full text-slate-600 transition-colors hover:bg-brand-secondary-light hover:text-brand-primary"
            >
              <CartIcon className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute right-0 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-brand-accent px-1 text-[10px] font-semibold text-white">
                  {cartCount}
                </span>
              )}
            </Link>
            <Link href="/b2b" className="btn-pill ml-1.5 px-5 py-2.5 text-xs">
              B2B / Wholesale
            </Link>
          </div>

          {/* Mobile actions */}
          <div className="flex items-center gap-1.5 lg:hidden">
            <Link
              href="/cart"
              aria-label="Shopping cart"
              className="relative flex h-10 w-10 items-center justify-center rounded-full text-slate-600"
            >
              <CartIcon className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute right-0 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-brand-accent px-1 text-[10px] font-semibold text-white">
                  {cartCount}
                </span>
              )}
            </Link>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full text-slate-700"
              aria-label="Primary Menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(true)}
            >
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className="border-t border-slate-100 bg-white/70 backdrop-blur-xl">
            <div className="container-site py-3">
              <form onSubmit={onSubmitSearch} className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
                <SearchIcon className="h-4 w-4 shrink-0 text-slate-400" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search products, brands, applications..."
                  className="w-full bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400"
                  autoFocus
                />
                <button type="submit" className="btn-pill px-5 py-1.5 text-xs">
                  Search
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[9999] flex flex-col bg-white/95 backdrop-blur-xl lg:hidden ${
          mobileOpen ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none -translate-y-full opacity-0"
        } transition-all duration-300 ease-smooth`}
        role="dialog"
        aria-modal="true"
        aria-label="Primary menu"
        aria-hidden={!mobileOpen}
      >
        <div className="flex items-center justify-between border-b border-slate-100 p-4">
          <Link href="/" onClick={() => setMobileOpen(false)} className="font-display text-lg font-semibold text-slate-900">
            Fembosco
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center rounded-full text-slate-600"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto px-5 py-2" aria-label="Mobile">
          <ul className="border-t border-slate-100">
            {navItems.map((item) => (
              <MobileNavItem key={item.label} item={item} active={isActive(item.href)} onNavigate={() => setMobileOpen(false)} />
            ))}
          </ul>
          <div className="mt-6 grid grid-cols-2 gap-3">
            <Link href="/b2b" onClick={() => setMobileOpen(false)} className="btn-pill py-3 text-center text-xs">
              B2B / Wholesale
            </Link>
            <Link href="/track-order" onClick={() => setMobileOpen(false)} className="btn-outline py-3 text-center text-xs">
              Track Order
            </Link>
          </div>
        </nav>
        <div className="border-t border-slate-100 p-5">
          <a
            href={`tel:${site.phonePrimary.replace(/-/g, "")}`}
            className="flex items-center justify-center gap-2 text-sm font-medium text-slate-700"
          >
            <PhoneIcon className="h-4 w-4" />
            {site.phonePrimary}
          </a>
          <SocialBar className="mt-4 justify-center" />
        </div>
      </div>
    </>
  );
}