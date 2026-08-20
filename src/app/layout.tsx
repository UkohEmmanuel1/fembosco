import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { QuoteProvider } from "@/components/layout/QuoteProvider";
import { StoreProvider } from "@/components/store/StoreProvider";
import { site } from "@/lib/site";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Fembosco Engineering Limited - Nigeria's Leading Supplier of Electrical & Industrial Systems",
    template: "%s | Fembosco Engineering Limited",
  },
  description: site.description,
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Fembosco Engineering Limited",
    description: site.description,
    siteName: "Fembosco Engineering Limited",
    url: site.url,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${inter.variable} min-h-screen bg-slate-50 text-slate-900`}>
        <StoreProvider>
          <QuoteProvider>
            <Header />
            <main id="zak-content">{children}</main>
            <Footer />
            <ScrollToTop />
            <WhatsAppButton />
          </QuoteProvider>
        </StoreProvider>
      </body>
    </html>
  );
}