import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { articles } from "@/data/articles";

const ArticlesSection = () => {
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
          {[...articles].sort((a, b) => {
            // Parse "Month Year" format dates and sort newest first
            const parseDate = (dateStr: string) => {
              const [month, year] = dateStr.split(' ');
              const monthIndex = ['January', 'February', 'March', 'April', 'May', 'June', 
                'July', 'August', 'September', 'October', 'November', 'December'].indexOf(month);
              return new Date(parseInt(year), monthIndex);
            };
            return parseDate(b.date).getTime() - parseDate(a.date).getTime();
          }).slice(0, 3).map((article) => (
            <article
              key={article.slug}
              className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <Link href={`/blog/${article.slug}`}>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                </Link>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">{article.excerpt}</p>
                
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
                <Link
                  href={`/blog/${article.slug}`}
                  className="mt-4 inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all"
                >
                  Read Article
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-10">
          <Link href="/blog" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
            View All Articles
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;