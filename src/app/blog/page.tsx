import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { articles } from "@/data/articles";

export const metadata = {
  title: "Blog | Thatched Roof Insurance",
  description: "Guides, tips, and insights for protecting and maintaining thatched properties.",
};

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header mode="light" />
      <main className="container-custom py-24">
        <div className="max-w-3xl">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Resources</span>
          <h1 className="font-serif text-4xl font-bold text-foreground mt-2 mb-4">Helpful Guides & Articles</h1>
          <p className="text-muted-foreground text-lg">
            Expert advice and practical checklists to keep your thatched home protected and well maintained.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(min-width: 1024px) 400px, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <Link href={`/blog/${article.slug}`}>
                  <h2 className="font-serif text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </h2>
                </Link>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">{article.excerpt}</p>

                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {article.date}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {article.readTime}
                    </span>
                  </div>
                </div>

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
      </main>
      <Footer />
    </div>
  );
}

