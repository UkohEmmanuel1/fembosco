import { PageHeader } from "@/components/ui/PageHeader";
import { CartClient } from "@/components/shop/CartClient";

export const metadata = {
  title: "Shopping Cart",
  description: "Review your Fembosco cart, adjust quantities and proceed to guest checkout.",
};

export default function CartPage() {
  return (
    <>
      <PageHeader title="Shopping Cart" crumb="Cart" />
      <CartClient />
    </>
  );
}