import { ArrowRight, Calendar, Clock } from "lucide-react";

const ArticlesSection = () => {
  const articles = [
    {
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=600&auto=format&fit=crop",
      category: "Safety",
      title: "Essential Fire Safety Tips for Thatched Property Owners",
      excerpt: "Protect your thatched home with these crucial fire prevention measures and safety guidelines every owner should know.",
      date: "December 2024",
      readTime: "5 min read",
    },
    {
      image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=600&auto=format&fit=crop",
      category: "Maintenance",
      title: "How Often Should You Re-thatch Your Roof?",
      excerpt: "Understanding the lifespan of different thatching materials and when to plan for re-thatching to protect your investment.",
      date: "November 2024",
      readTime: "4 min read",
    },
    {
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=600&auto=format&fit=crop",
      category: "Insurance",
      title: "Understanding Your Thatched Property Insurance Policy",
      excerpt: "A comprehensive guide to what's covered, what's not, and how to ensure you have the right level of protection.",
      date: "October 2024",
      readTime: "6 min read",
    },
  ];

  return (
    <section id="articles" className="section-padding bg-secondary">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Resources</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Helpful Guides & Articles
          </h2>
          <p className="text-muted-foreground text-lg">
            Expert advice and insights to help you protect and maintain your thatched property.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <article
              key={index}
              className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                
                {/* Meta */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>

                {/* Read More */}
                <button className="mt-4 flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                  Read Article
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-10">
          <button className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
            View All Articles
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;