import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Home, Package, CheckCircle, Shield, TrendingDown } from "lucide-react";

export const metadata: Metadata = {
  title: "Combined Thatched Property Insurance | Buildings & Contents Cover UK",
  description:
    "Combined buildings and contents insurance for thatched properties in the UK. Comprehensive cover for Grade II listed cottages, antiques, and valuables in one policy. Get a quote today.",
  alternates: {
    canonical: "https://thatchedroofinsurance.co.uk/combined-insurance",
  },
  openGraph: {
    title: "Combined Buildings & Contents Insurance for Thatched Properties",
    description:
      "Combined buildings and contents insurance for thatched properties. Comprehensive cover in one policy.",
    url: "https://thatchedroofinsurance.co.uk/combined-insurance",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Combined Insurance for Thatched Properties",
    description: "Comprehensive buildings and contents cover in one policy.",
  },
};

const benefits = [
  "One policy for buildings and contents - simpler to manage",
  "Potential cost savings compared to separate policies",
  "Single renewal date to remember",
  "One point of contact for all enquiries",
  "Coordinated claims handling if both buildings and contents are affected",
  "Comprehensive cover for your entire property",
];

const whatIncluded = [
  "Full buildings insurance for your thatched property",
  "Comprehensive contents insurance for your belongings",
  "Cover for outbuildings and boundary walls",
  "Alternative accommodation if your home becomes uninhabitable",
  "Cover for antiques, artwork, and valuables",
  "Emergency repairs and temporary protection",
  "Professional fees and debris removal",
  "Cover away from home for your contents",
];

export default function CombinedInsurancePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Combined Buildings and Contents Insurance",
    provider: {
      "@type": "LocalBusiness",
      name: "Thatched Roof Insurance",
      url: "https://thatchedroofinsurance.co.uk",
    },
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
    description: "Combined buildings and contents insurance for thatched properties. Comprehensive cover for your home and belongings in one policy.",
    offers: {
      "@type": "Offer",
      priceCurrency: "GBP",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Header mode="light" />
      <main>
        {/* Breadcrumbs */}
        <section className="container-custom pt-8">
          <Breadcrumbs items={[{ label: "Thatched roof insurance", href: "/" }, { label: "Combined Insurance", href: "/combined-insurance" }]} />
        </section>
        {/* Hero Section */}
        <section className="bg-muted py-12 md:py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Combined Insurance</span>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
                Combined Thatched Property Insurance | Buildings & Contents Cover UK
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Protect both your thatched property and your belongings with one comprehensive policy. Combined insurance offers convenience, potential savings, and comprehensive cover designed specifically for thatched properties.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Why Choose Combined Insurance?
                </h2>
                <p className="text-muted-foreground text-lg">
                  The benefits of combining your buildings and contents insurance.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 bg-card border border-border rounded-lg p-6">
                    <TrendingDown className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="bg-muted section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                  What's Included
                </h2>
                <p className="text-muted-foreground text-lg">
                  Comprehensive cover for both your property and belongings.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Home className="w-8 h-8 text-primary" />
                    <h3 className="font-serif text-xl font-semibold text-foreground">Buildings Cover</h3>
                  </div>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Thatched roof and structure</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Outbuildings and boundary walls</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Alternative accommodation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Emergency repairs</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Package className="w-8 h-8 text-primary" />
                    <h3 className="font-serif text-xl font-semibold text-foreground">Contents Cover</h3>
                  </div>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Furniture and furnishings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Antiques and collectibles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Electrical items and appliances</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>Cover away from home</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-4">Complete Protection</h3>
                <ul className="space-y-3">
                  {whatIncluded.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Combined for Thatched Properties */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Why Combined Insurance Works for Thatched Properties
                </h2>
              </div>
              <div className="space-y-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-3">Coordinated Claims</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    If a fire or major incident affects both your building and contents, having combined insurance means one claims process, one adjuster, and coordinated repairs. This is particularly important for thatched properties where damage can affect both structure and belongings.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-3">Understanding Period Properties</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Many thatched properties contain period features, antiques, and traditional furnishings. Our combined policies understand the value and importance of these items, providing appropriate cover for both the building and its contents.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-3">Simplified Management</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    One policy, one renewal date, one point of contact. Combined insurance makes managing your thatched property insurance simpler, leaving you more time to enjoy your home.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-muted section-padding">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Get Combined Insurance Today
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Protect your thatched property and belongings with one comprehensive policy. Get a quote today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 font-semibold hover:bg-primary/90 transition-colors"
                >
                  Get a Quote
                </Link>
                <div className="flex gap-2 justify-center">
                  <Link
                    href="/buildings-insurance"
                    className="inline-flex items-center justify-center rounded-lg border border-border bg-background text-foreground px-4 py-3 text-sm font-semibold hover:bg-muted transition-colors"
                  >
                    Buildings Only
                  </Link>
                  <Link
                    href="/contents-insurance"
                    className="inline-flex items-center justify-center rounded-lg border border-border bg-background text-foreground px-4 py-3 text-sm font-semibold hover:bg-muted transition-colors"
                  >
                    Contents Only
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

