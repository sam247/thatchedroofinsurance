export type Article = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  content: string[];
  image: string;
  date: string;
  readTime: string;
};

export const articles: Article[] = [
  {
    slug: "thatched-roof-chimney-regulations",
    category: "Regulations",
    title: "Thatched Roof Chimney Regulations 2025",
    excerpt:
      "Understand the 2025 rules for chimneys in thatched properties: 1.8m stack heights, Ecodesign stoves, insulated flues, sweeping proof, and insurer requirements.",
    content: [
      "The allure of a thatched cottage is timeless, but 2025 brings tighter rules for chimneys: Ecodesign-only stoves, higher flue temperatures, and stricter insurer warranties.",
      "Three authorities overlap: Building Regulations (Document J), Environmental legislation (Clean Air Strategy), and insurance warranties—which are often the strictest.",
      "The 1.8 metre rule: chimney pots must terminate at least 1.8m above the thatch ridge to cool embers before they land on dry reed or straw.",
      "Insurance is driving retrofits: short stacks may need brick extensions or tall pots to renew cover, even if Building Regulations aren’t retrospective.",
      "Dorset Model best practice: fire barriers over rafters, micro-porous boarding, insulated rafters, safe chimney positioning, and sacrificial thatch to protect the structure.",
      "Wood burners vs open fires: Ecodesign stoves burn hotter—twin-wall insulated liners or insulated backfill are essential to stop heat transfer through old brickwork.",
      "Spark arrestors are now discouraged; insurers may still demand bird guards instead. Clogged arrestors increase chimney fire and CO risks.",
      "Sweeping and proof: HETAS/NACS sweep prior to winter and mid-season for wood. Keep digital certificates; lack of proof is a common reason for claim denial.",
      "Scottish update 2025: NBHS rollback allows compliant stoves in new builds again, but 1.8m height and insulation rules still apply.",
      "Fuel rules: wet wood and coal are out; “Ready to Burn” (<20% moisture) protects against tar build-up and chimney fires.",
      "Electrical safety in the thatch void: no junctions, protect wiring in conduit, and keep clear of the chimney stack.",
      "Checklist: 1.8m height, insulated liner, Ecodesign appliance, dry fuel, bird guard, sweep certificates, CO alarms, CCTV flue checks every 3–5 years.",
      "Bottom line: the era of casual open fires is over; high-performance stoves plus insulated flues and rigorous maintenance are essential for safe, insurable thatched homes.",
    ],
    image: "/thatched-roof-chimney-regulations.jpg",
    date: "January 2025",
    readTime: "8 min read",
  },
];

export const findArticleBySlug = (slug: string) => articles.find((article) => article.slug === slug);

