export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
  children?: NavItem[];
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Shop",
    href: "/shop",
    children: [
      { label: "All Products", href: "/shop" },
      { label: "Industrial", href: "/shop?category=industrial" },
      { label: "Residential", href: "/shop?category=residential" },
      { label: "Commercial", href: "/shop?category=commercial" },
      { label: "Product Comparison", href: "/compare" },
    ],
  },
  { label: "B2B / Wholesale", href: "/b2b" },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

export const footerQuickLinks = [
  { label: "Shop All Products", href: "/shop" },
  { label: "Industrial Products", href: "/shop?category=industrial" },
  { label: "Residential Products", href: "/shop?category=residential" },
  { label: "B2B / Wholesale", href: "/b2b" },
  { label: "Track Order", href: "/track-order" },
  { label: "Blog & Guides", href: "/blog" },
];