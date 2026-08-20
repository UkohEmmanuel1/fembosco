export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "How do I request a quote for bulk or wholesale orders?",
    answer:
      "Use the 'Request a Quote' button anywhere on the site, or visit our B2B/Wholesale page. Provide the products, quantities and your company details and our sales team will respond within one business day.",
  },
  {
    question: "Do you deliver across Nigeria?",
    answer:
      "Yes. We deliver nationwide from our Lagos and Abuja locations. Delivery timelines and rates depend on destination and order size — we will confirm before dispatch.",
  },
  {
    question: "Are all products authentic and backed by warranty?",
    answer:
      "Absolutely. As an authorised partner of Legrand and a distributor for Schneider, ABB, Philips and other global brands, every product is genuine, European-sourced where applicable and warranty-backed.",
  },
  {
    question: "Can I register for corporate/trade credit terms?",
    answer:
      "Yes. Registered corporate accounts can apply for trade credit. Complete the corporate account registration on our B2B page and our finance team will guide you through the approval process.",
  },
  {
    question: "What are your operating hours?",
    answer:
      "Our Lagos and Abuja offices are open Monday to Friday 8AM–6PM and Saturdays 10AM–3PM. You can also reach us anytime via WhatsApp.",
  },
  {
    question: "Can I track my order?",
    answer:
      "Yes. Use the 'Track Order' page with your order number to view the current status of your delivery.",
  },
];

export const departments = [
  {
    id: "sales",
    label: "Sales & Quotations",
    description: "Product enquiries, pricing and quotes",
  },
  {
    id: "b2b",
    label: "B2B / Wholesale",
    description: "Corporate accounts, trade credit and bulk orders",
  },
  {
    id: "support",
    label: "Technical Support",
    description: "Specification, installation and product guidance",
  },
  {
    id: "delivery",
    label: "Delivery & Logistics",
    description: "Order status, delivery scheduling and tracking",
  },
] as const;