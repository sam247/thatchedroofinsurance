import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { findArticleBySlug, articles } from "@/data/articles";

type Props = {
  params: { slug: string };
};

export function generateMetadata({ params }: Props): Metadata {
  const article = findArticleBySlug(params.slug);
  if (!article) return { title: "Article not found" };

  const title = `${article.title} | Thatched Roof Insurance`;
  const imageUrl = article.image.startsWith("http") 
    ? article.image 
    : `https://thatchedroofinsurance.co.uk${article.image}`;

  return {
    title,
    description: article.excerpt,
    alternates: {
      canonical: `https://thatchedroofinsurance.co.uk/blog/${params.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url: `https://thatchedroofinsurance.co.uk/blog/${params.slug}`,
      type: "article",
      publishedTime: article.date,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [imageUrl],
    },
  };
}

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

// Helper function to parse links in content
function parseContentWithLinks(text: string) {
  // Match markdown-style links: [text](/url)
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: (string | JSX.Element)[] = [];
  let lastIndex = 0;
  let match;

  while ((match = linkRegex.exec(text)) !== null) {
    // Add text before the link
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    // Add the link
    const linkText = match[1];
    const linkUrl = match[2];
    parts.push(
      <Link key={match.index} href={linkUrl} className="text-primary font-semibold hover:underline">
        {linkText}
      </Link>
    );
    lastIndex = match.index + match[0].length;
  }
  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }
  return parts.length > 0 ? parts : [text];
}

export default function BlogPostPage({ params }: Props) {
  const article = findArticleBySlug(params.slug);
  if (!article) return notFound();

  // Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: `https://thatchedroofinsurance.co.uk${article.image}`,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      "@type": "Organization",
      name: "Thatched Roof Insurance",
      url: "https://thatchedroofinsurance.co.uk",
    },
    publisher: {
      "@type": "Organization",
      name: "Thatched Roof Insurance",
      logo: {
        "@type": "ImageObject",
        url: "https://thatchedroofinsurance.co.uk/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://thatchedroofinsurance.co.uk/blog/${params.slug}`,
    },
    articleBody: article.content.join(" "),
  };

  return (
    <div className="min-h-screen bg-background">
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Header mode="light" />
      <main className="container-custom py-16">
        <article className="max-w-4xl mx-auto">
          <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: article.title, href: `/blog/${params.slug}` }]} />
          <Link href="/blog" className="inline-flex items-center gap-2 text-primary font-semibold mb-8 hover:gap-3 transition-all">
            <ArrowLeft className="w-4 h-4" />
            Back to Articles
          </Link>
          <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full font-semibold text-xs">{article.category}</span>
            <span className="inline-flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {article.date}
            </span>
            <span className="inline-flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {article.readTime}
            </span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">{article.title}</h1>
          <p className="text-muted-foreground text-lg mb-8">{article.excerpt}</p>

          <div className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden mb-10">
            <Image src={article.image} alt={article.title} fill priority className="object-cover" sizes="(min-width: 1024px) 960px, 100vw" />
          </div>

          <div className="space-y-5 text-foreground leading-relaxed text-lg">
            {article.content.map((paragraph, idx) => (
              <p key={idx}>{parseContentWithLinks(paragraph)}</p>
            ))}
          </div>
        </article>

        {/* Related Services */}
        <section className="mt-16 pt-16 border-t border-border max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Our Insurance Services</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Link
              href="/buildings-insurance"
              className="group bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-all"
            >
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                Buildings Insurance
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Specialist cover for your thatched roof, structure, and outbuildings.
              </p>
              <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link
              href="/contents-insurance"
              className="group bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-all"
            >
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                Contents Insurance
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Protect your belongings, antiques, and valuables in period properties.
              </p>
              <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
            <Link
              href="/combined-insurance"
              className="group bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-all"
            >
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                Combined Insurance
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Comprehensive buildings and contents cover in one policy.
              </p>
              <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </div>
          <div className="text-center">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 font-semibold hover:bg-primary/90 transition-colors"
            >
              Get a Quote
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        {article.relatedArticles && article.relatedArticles.length > 0 && (
          <section className="mt-16 pt-16 border-t border-border max-w-4xl mx-auto">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Related Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {article.relatedArticles.map((relatedSlug) => {
                const relatedArticle = findArticleBySlug(relatedSlug);
                if (!relatedArticle) return null;
                return (
                  <Link
                    key={relatedSlug}
                    href={`/blog/${relatedSlug}`}
                    className="group bg-card rounded-xl border border-border p-6 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-semibold">
                        {relatedArticle.category}
                      </span>
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {relatedArticle.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2 mb-4">{relatedArticle.excerpt}</p>
                    <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                      Read Article
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}

