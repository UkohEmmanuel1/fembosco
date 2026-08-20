export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
  sections: { heading: string; body: string }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "electrical-safety-in-nigerian-homes",
    title: "10 Electrical Safety Tips Every Nigerian Homeowner Must Know",
    excerpt:
      "From overloaded sockets to faulty wiring, electrical fires are a leading cause of property damage in Nigeria. Learn the essential habits that keep your family and property safe.",
    category: "Electrical Safety",
    date: "2026-07-28",
    readTime: "6 min read",
    image: "/images/products/switches-sockets.jpg",
    author: "Fembosco Engineering",
    sections: [
      {
        heading: "Why electrical safety matters",
        body: "Electricity powers modern life, but it is also a leading cause of home fires in Nigeria. Poor wiring, counterfeit components and overloaded circuits are common culprits. Protecting your home starts with understanding the risks and investing in certified equipment.",
      },
      {
        heading: "Choose certified components",
        body: "Always purchase switches, sockets, breakers and cables from reputable brands such as Legrand, Schneider and ABB. Counterfeit products may look identical but fail under load, creating dangerous hotspots. Insist on original packaging and verify authenticity.",
      },
      {
        heading: "Never overload sockets",
        body: "A single socket is not designed to power a fridge, television, phone charger and heater at once. Distribute appliances across circuits and install surge protectors for sensitive electronics.",
      },
      {
        heading: "Hire a qualified electrician",
        body: "DIY wiring is the number one cause of installation faults. Always engage a certified electrician for new wiring, upgrades or repairs, and insist on quality distribution boards and circuit breakers that protect every circuit.",
      },
      {
        heading: "Test your safety devices",
        body: "Your residual current devices (RCDs) should be tested monthly using the test button. If a breaker trips frequently, it is telling you something — call a professional rather than ignoring it.",
      },
    ],
  },
  {
    slug: "how-to-choose-the-right-distribution-board",
    title: "How to Choose the Right Distribution Board for Your Project",
    excerpt:
      "Ways, IP rating, busbar and component brand — choosing a distribution board is more than picking a size. Here is a practical buyer's guide for contractors and engineers.",
    category: "Buying Guides",
    date: "2026-06-15",
    readTime: "8 min read",
    image: "/images/products/distribution-board.jpg",
    author: "Fembosco Engineering",
    sections: [
      {
        heading: "Count your circuits first",
        body: "A distribution board's number of 'ways' must comfortably exceed the circuits you need today plus room for tomorrow. Count every MCB and RCBO, then add spare ways for future expansion — a cramped board is a safety and maintenance problem.",
      },
      {
        heading: "Match the IP rating to the environment",
        body: "Indoor residential boards typically need IP40, while outdoor, wet or dusty industrial environments require IP54 or higher. Choosing the correct ingress protection prevents corrosion and short circuits.",
      },
      {
        heading: "Specify the right busbar rating",
        body: "The busbar must carry the maximum possible load of all circuits combined. Oversizing your busbar is inexpensive insurance against overheating as loads grow over time.",
      },
      {
        heading: "Insist on genuine components",
        body: "The board is only as good as the breakers inside it. Use genuine Legrand, Schneider or ABB devices with the correct breaking capacity (kA) for your installation to ensure reliable protection.",
      },
      {
        heading: "Buy from a trusted distributor",
        body: "Work with a distributor like Fembosco that supplies complete, quality-assured boards and can support your project from specification to delivery.",
      },
    ],
  },
  {
    slug: "case-study-lagos-manufacturing-plant-upgrade",
    title: "Case Study: Upgrading a Lagos Manufacturing Plant's Power System",
    excerpt:
      "How Fembosco delivered a complete power distribution upgrade for a mid-sized Lagos manufacturing facility — from specification to installation support.",
    category: "Case Studies",
    date: "2026-05-09",
    readTime: "7 min read",
    image: "/images/products/electrical-panel.jpg",
    author: "Fembosco Engineering",
    sections: [
      {
        heading: "The challenge",
        body: "A Lagos-based food processing plant was experiencing frequent breaker trips and equipment damage due to an outdated distribution network. Their panel was undersized, circuits were overloaded, and downtime was costing the business daily.",
      },
      {
        heading: "Our approach",
        body: "Fembosco engineers surveyed the facility, mapped every circuit and load, and designed a new distribution architecture using Schneider panels and breakers with proper kA ratings for the plant's environment.",
      },
      {
        heading: "The solution delivered",
        body: "We supplied custom-built panels, certified distribution boards, quality cables and surge protection. Our team supported the installation electricians throughout commissioning and provided full documentation.",
      },
      {
        heading: "The result",
        body: "The plant reported zero unplanned electrical downtime in the six months following the upgrade, a 30% reduction in energy losses and full compliance with insurer safety requirements.",
      },
    ],
  },
  {
    slug: "legrand-partnership-quality-assurance",
    title: "Our Legrand Partnership: What It Means for Your Projects",
    excerpt:
      "As an authorised partner of Legrand, Fembosco guarantees authentic, warranty-backed electrical products. Here is why brand integrity matters for contractors.",
    category: "Company",
    date: "2026-04-02",
    readTime: "5 min read",
    image: "/images/products/p17-tempra.jpg",
    author: "Fembosco Engineering",
    sections: [
      {
        heading: "Authenticity you can verify",
        body: "Counterfeit electrical products flood some Nigerian markets. As a Legrand partner, every Fembosco product is sourced directly, carries genuine packaging and is backed by manufacturer warranty.",
      },
      {
        heading: "Full range availability",
        body: "From Mallia and Belanko switches to P17 Tempra industrial plugs, our partnership means contractors get the complete Legrand range in one place — with stock on hand for fast delivery.",
      },
      {
        heading: "Technical support",
        body: "Beyond products, our team provides specification guidance, datasheets and project support so your installation meets both safety standards and client expectations.",
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}