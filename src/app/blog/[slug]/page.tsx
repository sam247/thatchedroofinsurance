import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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

export default function BlogPostPage({ params }: Props) {
  const article = findArticleBySlug(params.slug);
  if (!article) return notFound();

  return (
    <div className="min-h-screen bg-background">
      <Header mode="light" />
      <main className="container-custom py-16">
        <Link href="/blog" className="inline-flex items-center gap-2 text-primary font-semibold mb-6 hover:gap-3 transition-all">
          <ArrowLeft className="w-4 h-4" />
          Back to Articles
        </Link>

        <article className="max-w-4xl">
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
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}

