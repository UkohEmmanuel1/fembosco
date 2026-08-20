import { PageHeader } from "@/components/ui/PageHeader";
import { CompareClient } from "@/components/shop/CompareClient";

export const metadata = {
  title: "Compare Products",
  description: "Compare electrical and industrial products side by side with Fembosco.",
};

export default function ComparePage() {
  return (
    <>
      <PageHeader
        title="Compare Products"
        trail={[{ label: "Shop", href: "/shop" }, { label: "Compare" }]}
      />
      <CompareClient />
    </>
  );
}