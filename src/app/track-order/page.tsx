import { PageHeader } from "@/components/ui/PageHeader";
import { TrackOrderClient } from "@/components/shop/TrackOrderClient";

export const metadata = {
  title: "Track Order",
  description: "Track the delivery status of your Fembosco order.",
};

export default function TrackOrderPage() {
  return (
    <>
      <PageHeader title="Track Order" trail={[{ label: "Track Order" }]} />
      <TrackOrderClient />
    </>
  );
}