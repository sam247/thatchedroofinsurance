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
    slug: "essential-fire-safety-for-thatched-properties",
    category: "Safety",
    title: "Essential Fire Safety Tips for Thatched Property Owners",
    excerpt:
      "Protect your thatched home with crucial fire prevention measures and day-to-day safety habits every owner should know.",
    content: [
      "Thatched properties carry unique fire risks, but most incidents are preventable with the right maintenance routines.",
      "Schedule chimney inspections and sweeping at least once a year to remove soot and creosote build-up that can ignite.",
      "Install fire-resistant barriers and ensure any nearby trees or vegetation are trimmed back from the roof line.",
      "Use spark arrestors on chimneys and fit smoke alarms in loft spaces or near the thatch for early detection.",
      "Keep extinguishers and fire blankets accessible, and make sure family members know evacuation routes.",
    ],
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1200&auto=format&fit=crop",
    date: "December 2024",
    readTime: "5 min read",
  },
  {
    slug: "how-often-to-rethatch-your-roof",
    category: "Maintenance",
    title: "How Often Should You Re-thatch Your Roof?",
    excerpt:
      "Understand the lifespan of different thatching materials and when to plan your next re-thatching to avoid costly surprises.",
    content: [
      "Water reed can last 25–40 years, combed wheat reed 20–30 years, and long straw typically 15–25 years with good care.",
      "Book inspections every few years to spot thinning ridges, loose fixings, or moss growth that can shorten lifespan.",
      "Budget early for re-thatching to avoid emergency work; phased ridge replacements can extend overall roof life.",
      "Maintain clear gutters and ensure good ventilation to reduce moisture build-up in the thatch layers.",
    ],
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1200&auto=format&fit=crop",
    date: "November 2024",
    readTime: "4 min read",
  },
  {
    slug: "understanding-your-thatched-insurance-policy",
    category: "Insurance",
    title: "Understanding Your Thatched Property Insurance Policy",
    excerpt:
      "A practical guide to what’s covered, common exclusions, and how to secure the right level of protection for your home.",
    content: [
      "Review rebuild values regularly to keep pace with material and labour costs specific to thatched properties.",
      "Check conditions around chimney maintenance, fire safety equipment, and heat source declarations to avoid gaps.",
      "Document renovations and upgrades—insurers may offer better terms when safety improvements are recorded.",
      "Ask about optional extras like home emergency cover or legal expenses to tailor the policy to your needs.",
    ],
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1200&auto=format&fit=crop",
    date: "October 2024",
    readTime: "6 min read",
  },
];

export const findArticleBySlug = (slug: string) => articles.find((article) => article.slug === slug);

