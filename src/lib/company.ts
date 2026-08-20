export type TeamMember = {
  name: string;
  role: string;
  initials: string;
  bio: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: "Femi Owolabi",
    role: "Managing Director",
    initials: "FO",
    bio: "Femi leads Fembosco with more than two decades of experience in electrical distribution and engineering supply in Nigeria. He drives the company's vision of reliable, world-class electrical systems.",
  },
  {
    name: "Bosede Owolabi",
    role: "Executive Director",
    initials: "BO",
    bio: "Bosede oversees operations, customer relations and the Fembosco quality assurance programme, ensuring every product that leaves our warehouse meets the highest standards.",
  },
];

export type CaseStudy = {
  title: string;
  sector: string;
  location: string;
  summary: string;
  outcome: string;
  image: string;
};

export const caseStudies: CaseStudy[] = [
  {
    title: "Power Distribution Upgrade for a Manufacturing Plant",
    sector: "Manufacturing",
    location: "Lagos, Nigeria",
    summary:
      "Designed and supplied a complete distribution architecture — custom panels, certified boards and surge protection — for a food processing facility suffering from frequent downtime.",
    outcome: "Zero unplanned electrical downtime in six months; 30% reduction in energy losses.",
    image: "/images/products/electrical-panel.jpg",
  },
  {
    title: "Cable Management for a Commercial Tower",
    sector: "Commercial",
    location: "Victoria Island, Lagos",
    summary:
      "Supplied 2,400m of cable tray, trunking and conduits with full documentation for a 12-storey commercial building.",
    outcome: "On-time delivery supporting a 3-week faster installation than scheduled.",
    image: "/images/products/cable-management.jpg",
  },
  {
    title: "Residential Estate Electrification",
    sector: "Residential",
    location: "Abuja, Nigeria",
    summary:
      "Delivered distribution boards, breakers, switches, sockets and lighting for a 200-unit housing estate rollout.",
    outcome: "Full estate energised with Legrand-certified components and client sign-off.",
    image: "/images/products/distribution-board.jpg",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Fembosco supplied every electrical component for our plant upgrade. Genuine products, honest pricing and delivery exactly when promised.",
    name: "Engr. Adeyemi K.",
    role: "Maintenance Manager, Lagos",
  },
  {
    quote:
      "As a contractor, I rely on Fembosco for Legrand products I can certify. Their technical team has saved us from specification errors more than once.",
    name: "Chinedu O.",
    role: "Electrical Contractor, Abuja",
  },
  {
    quote:
      "The bulk pricing and trade account made it easy to equip 200 housing units. Service has been consistent for years.",
    name: "Mrs. Folake A.",
    role: "Property Developer, Lagos",
  },
];