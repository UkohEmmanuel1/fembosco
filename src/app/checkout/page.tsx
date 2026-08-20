import { PageHeader } from "@/components/ui/PageHeader";
import { CheckoutClient } from "@/components/shop/CheckoutClient";

export const metadata = {
  title: "Checkout",
  description: "Secure guest checkout with Fembosco — bank transfer or pay on delivery.",
};

export default function CheckoutPage() {
  return (
    <>
      <PageHeader title="Checkout" crumb="Checkout" />
      <CheckoutClient />
    </>
  );
}