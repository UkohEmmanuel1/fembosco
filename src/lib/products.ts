export type Category = "industrial" | "residential" | "commercial";

export type Manufacturer =
  | "Legrand"
  | "Schneider Electric"
  | "ABB"
  | "Philips"
  | "Trio Lighting"
  | "Socomec"
  | "Brilliant Lighting"
  | "Cablofil"
  | "SAM";

export type StockStatus = "in-stock" | "low-stock" | "out-of-stock";

export type BulkTier = {
  minQty: number;
  discount: number; // percentage
};

export type Spec = {
  label: string;
  value: string;
};

export type Product = {
  id: string;
  title: string;
  slug: string;
  category: Category;
  application: string;
  manufacturer: Manufacturer;
  image: string;
  gallery: string[];
  alt: string;
  shortDescription: string;
  description: string;
  price: number;
  unit: string;
  moq: number;
  stock: StockStatus;
  rating: number;
  reviewCount: number;
  datasheet: string;
  specs: Spec[];
  bulkTiers: BulkTier[];
  tags: string[];
  featured?: boolean;
};

export const categories: { key: Category | "all"; label: string; description: string }[] = [
  {
    key: "all",
    label: "All Products",
    description: "Browse the complete Fembosco catalogue",
  },
  {
    key: "industrial",
    label: "Industrial",
    description: "Heavy-duty systems for plants, factories & infrastructure",
  },
  {
    key: "residential",
    label: "Residential",
    description: "Reliable electrical products for homes & estates",
  },
  {
    key: "commercial",
    label: "Commercial",
    description: "Solutions for offices, retail & public buildings",
  },
];

export const manufacturers: Manufacturer[] = [
  "Legrand",
  "Schneider Electric",
  "ABB",
  "Philips",
  "Trio Lighting",
  "Socomec",
  "Brilliant Lighting",
  "Cablofil",
  "SAM",
];

export const naira = (n: number) => `₦${n.toLocaleString("en-NG")}`;

export const stockLabels: Record<StockStatus, { label: string; color: string }> = {
  "in-stock": { label: "In Stock", color: "text-green-700 bg-green-50" },
  "low-stock": { label: "Low Stock", color: "text-amber-700 bg-amber-50" },
  "out-of-stock": { label: "Out of Stock", color: "text-red-700 bg-red-50" },
};

export const products: Product[] = [
  {
    id: "p-cable-management",
    title: "Cable Management System",
    slug: "cable-management",
    category: "industrial",
    application: "Industrial",
    manufacturer: "Cablofil",
    image: "/images/products/cable-management.jpg",
    gallery: [
      "/images/products/cable-management.jpg",
      "/images/products/pipes-conduits.jpg",
      "/images/products/electrical-panel.jpg",
    ],
    alt: "cable management system in nigeria",
    shortDescription: "Complete cable management solutions for industrial, commercial and residential projects.",
    description:
      "We provide complete solutions for all types of cable management systems in Nigeria. From cable trays and ladders to trunking and conduit systems, our range keeps cabling organised, protected and compliant with safety standards. Backed by European sourcing, every system delivers long-term durability.",
    price: 14500,
    unit: "per meter",
    moq: 10,
    stock: "in-stock",
    rating: 4.8,
    reviewCount: 42,
    datasheet: "cable-management.pdf",
    specs: [
      { label: "Material", value: "Galvanised Steel / Aluminium" },
      { label: "Type", value: "Tray, Ladder, Trunking" },
      { label: "Finish", value: "Hot-dip galvanised / Powder coated" },
      { label: "Standard", value: "IEC 61537, BS 4678" },
      { label: "Width Range", value: "100mm – 600mm" },
    ],
    bulkTiers: [
      { minQty: 10, discount: 0 },
      { minQty: 50, discount: 5 },
      { minQty: 200, discount: 10 },
    ],
    tags: ["cable tray", "trunking", "industrial"],
    featured: true,
  },
  {
    id: "p-electrical-panel",
    title: "Electrical Power & Panel Building",
    slug: "electrical-panel",
    category: "industrial",
    application: "Industrial",
    manufacturer: "Schneider Electric",
    image: "/images/products/electrical-panel.jpg",
    gallery: [
      "/images/products/electrical-panel.jpg",
      "/images/products/distribution-board.jpg",
      "/images/products/transformers.jpg",
    ],
    alt: "electrical panel building in nigeria",
    shortDescription: "High-quality custom electrical panels for industrial and power applications.",
    description:
      "We are the leading supplier and builder of high-quality electrical panels in Nigeria at competitive prices. Our panel building facility assembles distribution panels, motor control centres and switchgear to project specifications with certified components.",
    price: 285000,
    unit: "per unit",
    moq: 1,
    stock: "low-stock",
    rating: 4.9,
    reviewCount: 31,
    datasheet: "electrical-panel.pdf",
    specs: [
      { label: "Configuration", value: "Custom per project" },
      { label: "Protection", value: "IP54 – IP66" },
      { label: "Component Brand", value: "Schneider / Legrand / ABB" },
      { label: "Standards", value: "IEC 61439" },
      { label: "Voltage", value: "415V / 11kV" },
    ],
    bulkTiers: [
      { minQty: 1, discount: 0 },
      { minQty: 5, discount: 5 },
      { minQty: 15, discount: 8 },
    ],
    tags: ["panel", "switchgear", "MCC"],
    featured: true,
  },
  {
    id: "p-lighting",
    title: "Lighting Fittings",
    slug: "lighting",
    category: "residential",
    application: "Residential",
    manufacturer: "Philips",
    image: "/images/products/lighting.jpg",
    gallery: [
      "/images/products/lighting.jpg",
      "/images/products/switches-sockets.jpg",
      "/images/products/cable-management.jpg",
    ],
    alt: "lighting fittings",
    shortDescription: "Exquisite indoor and outdoor lighting fittings for every space.",
    description:
      "Bring life to your home, office and projects with exquisite and ambient lighting fittings. Our range includes downlights, panels, battens, floodlights and decorative luminaires from Philips, Trio Lighting and Brilliant Lighting.",
    price: 8900,
    unit: "per unit",
    moq: 5,
    stock: "in-stock",
    rating: 4.7,
    reviewCount: 58,
    datasheet: "lighting.pdf",
    specs: [
      { label: "Type", value: "Downlight / Panel / Batten / Flood" },
      { label: "Wattage", value: "5W – 200W" },
      { label: "Colour Temp", value: "3000K / 4000K / 6500K" },
      { label: "Lumens", value: "400 – 24000 lm" },
      { label: "Lifespan", value: "25,000 hrs" },
    ],
    bulkTiers: [
      { minQty: 5, discount: 0 },
      { minQty: 25, discount: 5 },
      { minQty: 100, discount: 10 },
    ],
    tags: ["LED", "luminaire", "home"],
    featured: true,
  },
  {
    id: "p-switches-sockets",
    title: "Switches and Sockets",
    slug: "switches-sockets",
    category: "residential",
    application: "Residential",
    manufacturer: "Legrand",
    image: "/images/products/switches-sockets.jpg",
    gallery: [
      "/images/products/switches-sockets.jpg",
      "/images/products/p17-tempra.jpg",
      "/images/products/mallia-silver.jpg",
    ],
    alt: "switches and sockets",
    shortDescription: "Sleek, durable Legrand switches and sockets for every home and office.",
    description:
      "Our sleek but durable switches and sockets are sure to improve the look of your home or office. Featuring the Legrand Mallia, Belanko and Arteor ranges, they combine premium aesthetics with dependable performance.",
    price: 2600,
    unit: "per unit",
    moq: 20,
    stock: "in-stock",
    rating: 4.8,
    reviewCount: 120,
    datasheet: "switches-sockets.pdf",
    specs: [
      { label: "Range", value: "Mallia / Belanko / Arteor" },
      { label: "Rating", value: "10A – 20A, 250V" },
      { label: "Material", value: "Fire-retardant polycarbonate" },
      { label: "Standard", value: "IEC 60669, BS 1363" },
      { label: "Finish", value: "Glossy White, Silver, Black" },
    ],
    bulkTiers: [
      { minQty: 20, discount: 0 },
      { minQty: 100, discount: 5 },
      { minQty: 500, discount: 12 },
    ],
    tags: ["switch", "socket", "legrand"],
    featured: true,
  },
  {
    id: "p-transformers",
    title: "Power Transformers",
    slug: "transformers",
    category: "industrial",
    application: "Industrial",
    manufacturer: "ABB",
    image: "/images/products/transformers.jpg",
    gallery: [
      "/images/products/transformers.jpg",
      "/images/products/electrical-panel.jpg",
      "/images/products/distribution-board.jpg",
    ],
    alt: "power transformers",
    shortDescription: "Reliable distribution and power transformers for residential and industrial use.",
    description:
      "Get a better deal on electrical transformers in Nigeria. Widely used in residential and industrial areas, our transformers are sourced to deliver stable, efficient power distribution with long service life.",
    price: 2450000,
    unit: "per unit",
    moq: 1,
    stock: "out-of-stock",
    rating: 4.9,
    reviewCount: 18,
    datasheet: "transformers.pdf",
    specs: [
      { label: "Rating", value: "50 kVA – 500 kVA" },
      { label: "Type", value: "Distribution / Power" },
      { label: "Voltage", value: "11kV / 0.415kV" },
      { label: "Cooling", value: "ONAN" },
      { label: "Standard", value: "IEC 60076" },
    ],
    bulkTiers: [
      { minQty: 1, discount: 0 },
      { minQty: 3, discount: 3 },
      { minQty: 10, discount: 6 },
    ],
    tags: ["transformer", "power", "distribution"],
  },
  {
    id: "p-pipes-conduits",
    title: "Pipes and Conduits",
    slug: "pipes-conduits",
    category: "commercial",
    application: "Commercial",
    manufacturer: "Legrand",
    image: "/images/products/pipes-conduits.jpg",
    gallery: [
      "/images/products/pipes-conduits.jpg",
      "/images/products/cable-management.jpg",
      "/images/products/shield-box.jpg",
    ],
    alt: "pipes and conduits",
    shortDescription: "Quality PVC pipes, conduits and accessories always in stock.",
    description:
      "We have in stock quality and durable pipes, conduits and accessories. Essential for safe and tidy electrical installations, our conduit systems are engineered for easy routing and long-term protection.",
    price: 3200,
    unit: "per length",
    moq: 25,
    stock: "in-stock",
    rating: 4.6,
    reviewCount: 64,
    datasheet: "pipes-conduits.pdf",
    specs: [
      { label: "Material", value: "uPVC / Rigid PVC" },
      { label: "Diameter", value: "20mm – 50mm" },
      { label: "Length", value: "3m per length" },
      { label: "Colour", value: "Grey / White" },
      { label: "Standard", value: "IEC 61386" },
    ],
    bulkTiers: [
      { minQty: 25, discount: 0 },
      { minQty: 100, discount: 6 },
      { minQty: 500, discount: 12 },
    ],
    tags: ["conduit", "pvc", "cable protection"],
    featured: true,
  },
  {
    id: "p-compressors",
    title: "Air Compressors",
    slug: "compressors",
    category: "industrial",
    application: "Industrial",
    manufacturer: "SAM",
    image: "/images/products/compressors.jpg",
    gallery: [
      "/images/products/compressors.jpg",
      "/images/products/fire-fighting.jpg",
      "/images/products/electrical-panel.jpg",
    ],
    alt: "air compressors",
    shortDescription: "Reliable air compressors for workshops, industry and construction.",
    description:
      "Our range of compressors is sure to exceed your expectations. From workshop models to heavy industrial units, we supply compressors suited to continuous operation and demanding environments.",
    price: 1680000,
    unit: "per unit",
    moq: 1,
    stock: "in-stock",
    rating: 4.7,
    reviewCount: 23,
    datasheet: "compressors.pdf",
    specs: [
      { label: "Type", value: "Piston / Screw" },
      { label: "Capacity", value: "50L – 500L" },
      { label: "Power", value: "1.5kW – 37kW" },
      { label: "Pressure", value: "8 – 13 bar" },
      { label: "Drive", value: "Belt / Direct" },
    ],
    bulkTiers: [
      { minQty: 1, discount: 0 },
      { minQty: 5, discount: 4 },
      { minQty: 15, discount: 7 },
    ],
    tags: ["compressor", "air", "workshop"],
  },
  {
    id: "p-fire-fighting",
    title: "Fire Fighting Equipment",
    slug: "fire-fighting",
    category: "commercial",
    application: "Commercial",
    manufacturer: "Socomec",
    image: "/images/products/fire-fighting.jpg",
    gallery: [
      "/images/products/fire-fighting.jpg",
      "/images/products/compressors.jpg",
      "/images/products/circuit-breakers.jpg",
    ],
    alt: "fire fighting equipment",
    shortDescription: "Complete range of fire-fighting equipment for buildings and industry.",
    description:
      "We stock all ranges of fire-fighting equipment in Nigeria including extinguishers, hose reels, hydrants and fire alarm accessories to help protect lives and property.",
    price: 47500,
    unit: "per unit",
    moq: 2,
    stock: "in-stock",
    rating: 4.8,
    reviewCount: 36,
    datasheet: "fire-fighting.pdf",
    specs: [
      { label: "Type", value: "Extinguisher / Hose Reel / Hydrant" },
      { label: "Capacity", value: "2kg – 100kg" },
      { label: "Agent", value: "ABC Powder / CO2 / Foam" },
      { label: "Standard", value: "NFPA 10, BS EN 3" },
    ],
    bulkTiers: [
      { minQty: 2, discount: 0 },
      { minQty: 10, discount: 5 },
      { minQty: 50, discount: 9 },
    ],
    tags: ["fire", "safety", "extinguisher"],
    featured: true,
  },
  {
    id: "p-circuit-breakers",
    title: "Circuit Breakers",
    slug: "circuit-breakers",
    category: "commercial",
    application: "Commercial",
    manufacturer: "Schneider Electric",
    image: "/images/products/circuit-breakers.jpg",
    gallery: [
      "/images/products/circuit-breakers.jpg",
      "/images/products/distribution-board.jpg",
      "/images/products/switches-sockets.jpg",
    ],
    alt: "circuit breakers",
    shortDescription: "Original circuit breakers that protect your electrical installations.",
    description:
      "Protect the integrity of your electrical installations with our original circuit breakers. Featuring MCB, MCCB, RCD and RCBO options from Schneider and Legrand, they deliver reliable overcurrent and earth-leakage protection.",
    price: 7800,
    unit: "per unit",
    moq: 12,
    stock: "in-stock",
    rating: 4.9,
    reviewCount: 87,
    datasheet: "circuit-breakers.pdf",
    specs: [
      { label: "Type", value: "MCB / MCCB / RCD / RCBO" },
      { label: "Poles", value: "1P – 4P" },
      { label: "Rating", value: "6A – 630A" },
      { label: "Breaking Capacity", value: "6kA – 36kA" },
      { label: "Standard", value: "IEC 60898, IEC 60947" },
    ],
    bulkTiers: [
      { minQty: 12, discount: 0 },
      { minQty: 50, discount: 6 },
      { minQty: 250, discount: 11 },
    ],
    tags: ["breaker", "MCB", "protection"],
    featured: true,
  },
  {
    id: "p-distribution-board",
    title: "Distribution Boards",
    slug: "distribution-board",
    category: "commercial",
    application: "Commercial",
    manufacturer: "Legrand",
    image: "/images/products/distribution-board.jpg",
    gallery: [
      "/images/products/distribution-board.jpg",
      "/images/products/circuit-breakers.jpg",
      "/images/products/shield-box.jpg",
    ],
    alt: "distribution board",
    shortDescription: "Quality distribution boards for home and industrial use.",
    description:
      "Get quality electrical distribution boards for either home or industrial uses. Our DBs are built around Legrand components to safely distribute power across circuits with ease of maintenance.",
    price: 64000,
    unit: "per unit",
    moq: 2,
    stock: "in-stock",
    rating: 4.8,
    reviewCount: 45,
    datasheet: "distribution-board.pdf",
    specs: [
      { label: "Ways", value: "4 – 24 ways" },
      { label: "Protection", value: "IP40 – IP54" },
      { label: "Material", value: "Powder-coated steel" },
      { label: "Standard", value: "IEC 60439" },
    ],
    bulkTiers: [
      { minQty: 2, discount: 0 },
      { minQty: 10, discount: 5 },
      { minQty: 40, discount: 9 },
    ],
    tags: ["distribution board", "DB", "consumer unit"],
    featured: true,
  },
  {
    id: "p-shield-box",
    title: "Surface Terminal Shield Box",
    slug: "shield-box",
    category: "residential",
    application: "Residential",
    manufacturer: "Legrand",
    image: "/images/products/shield-box.jpg",
    gallery: [
      "/images/products/shield-box.jpg",
      "/images/products/pipes-conduits.jpg",
      "/images/products/distribution-board.jpg",
    ],
    alt: "surface terminal shield box",
    shortDescription: "Quality surface terminal shield boxes for home or industrial use.",
    description:
      "Get quality surface terminal shield boxes for your home or industrial uses. Designed for safe termination and neat wiring, they keep connections secure, accessible and protected.",
    price: 4500,
    unit: "per unit",
    moq: 15,
    stock: "in-stock",
    rating: 4.6,
    reviewCount: 29,
    datasheet: "shield-box.pdf",
    specs: [
      { label: "Material", value: "Fire-retardant ABS" },
      { label: "Size", value: "2 – 20 terminals" },
      { label: "Mounting", value: "Surface" },
      { label: "Standard", value: "IEC 60670" },
    ],
    bulkTiers: [
      { minQty: 15, discount: 0 },
      { minQty: 75, discount: 6 },
      { minQty: 300, discount: 12 },
    ],
    tags: ["shield box", "termination", "junction"],
  },
  {
    id: "p-p17-tempra",
    title: "P17 Tempra Pro",
    slug: "p17-tempra",
    category: "industrial",
    application: "Industrial",
    manufacturer: "Legrand",
    image: "/images/products/p17-tempra.jpg",
    gallery: [
      "/images/products/p17-tempra.jpg",
      "/images/products/switches-sockets.jpg",
      "/images/products/circuit-breakers.jpg",
    ],
    alt: "Legrand p17 tempra pro plugs and sockets",
    shortDescription: "Legrand P17 Tempra Pro industrial plugs and sockets.",
    description:
      "Our Legrand P17 Tempra Pro plugs and sockets are suitable for a wide range of applications. Built for heavy-duty industrial use, they offer secure, water-resistant connections trusted across Nigerian industry.",
    price: 18500,
    unit: "per unit",
    moq: 4,
    stock: "in-stock",
    rating: 4.9,
    reviewCount: 52,
    datasheet: "p17-tempra.pdf",
    specs: [
      { label: "Range", value: "P17 Tempra Pro" },
      { label: "Rating", value: "16A – 125A" },
      { label: "IP Rating", value: "IP44 – IP67" },
      { label: "Poles", value: "3P+E, 3P+N+E" },
      { label: "Standard", value: "IEC 60309" },
    ],
    bulkTiers: [
      { minQty: 4, discount: 0 },
      { minQty: 20, discount: 5 },
      { minQty: 100, discount: 10 },
    ],
    tags: ["legrand", "industrial plug", "p17"],
    featured: true,
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelated(product: Product, count = 3): Product[] {
  return products
    .filter((p) => p.id !== product.id)
    .sort((a, b) => {
      const aScore = (a.category === product.category ? 2 : 0) + (a.manufacturer === product.manufacturer ? 1 : 0);
      const bScore = (b.category === product.category ? 2 : 0) + (b.manufacturer === product.manufacturer ? 1 : 0);
      return bScore - aScore;
    })
    .slice(0, count);
}