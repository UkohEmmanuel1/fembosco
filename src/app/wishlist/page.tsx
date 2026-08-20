import { PageHeader } from "@/components/ui/PageHeader";
import { WishlistClient } from "@/components/shop/WishlistClient";

export const metadata = {
  title: "My Wishlist",
  description: "Products you have saved for later with Fembosco Engineering.",
};

export default function WishlistPage() {
  return (
    <>
      <PageHeader title="My Wishlist" crumb="Wishlist" />
      <WishlistClient />
    </>
  );
}