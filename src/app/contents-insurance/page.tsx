import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Package, CheckCircle, Shield, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Thatched Property Contents Insurance | Specialist Cover for Period Homes",
  description:
    "Specialist contents insurance for thatched and period properties. Cover for antiques, valuables, and high-value items. Get a quote for your Grade II listed cottage contents insurance today.",
  alternates: {
    canonical: "https://thatchedroofinsurance.co.uk/contents-insurance",
  },
  openGraph: {
    title: "Contents Insurance for Thatched Properties | Specialist Cover",
    description:
      "Specialist contents insurance for thatched and period properties. Protect your belongings, antiques, and valuables.",
    url: "https://thatchedroofinsurance.co.uk/contents-insurance",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contents Insurance for Thatched Properties",
    description: "Specialist contents insurance for thatched and period properties.",
  },
};

const coveredItems = [
  "Furniture and furnishings",
  "Electrical items and appliances",
  "Clothing and personal belongings",
  "Antiques and collectibles",
  "Artwork and paintings",
  "Jewellery and watches",
  "Musical instruments",
  "Garden furniture and equipment",
  "Carpets and floor coverings",
  "Curtains and soft furnishings",
];

const perils = [
  "Fire, smoke, and explosion",
  "Theft and attempted theft",
  "Water damage and escape of water",
  "Storm and weather damage",
  "Vandalism and malicious damage",
  "Accidental damage",
  "Impact damage",
  "Freezer contents",
];

const specialFeatures = [
  "High-value item cover for antiques and collectibles",
  "New for old replacement (where applicable)",
  "Cover away from home",
  "Temporary accommodation costs if your home is uninhabitable",
  "Replacement locks and keys following theft",
  "Emergency accommodation expenses",
  "Garden contents and outdoor items",
  "Student belongings cover",
];

export default function ContentsInsurancePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Contents Insurance",
    provider: {
      "@type": "LocalBusiness",
      name: "Thatched Roof Insurance",
      url: "https://thatchedroofinsurance.co.uk",
    },
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
    description: "Specialist contents insurance for thatched and period properties. Cover for antiques, valuables, and high-value items in Grade II listed cottages.",
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
          <Breadcrumbs items={[{ label: "Thatched roof insurance", href: "/" }, { label: "Contents Insurance", href: "/contents-insurance" }]} />
        </section>
        {/* Hero Section */}
        <section className="bg-muted py-12 md:py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Contents Insurance</span>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
                Thatched Property Contents Insurance | Specialist Cover for Period Homes
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Protect your belongings, antiques, and valuables with specialist contents insurance designed for period and thatched properties. Comprehensive cover that understands the unique contents often found in heritage homes.
              </p>
            </div>
          </div>
        </section>

        {/* What's Covered */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                  What's Covered
                </h2>
                <p className="text-muted-foreground text-lg">
                  Our contents insurance protects your personal belongings and household items.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {coveredItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 bg-card border border-border rounded-lg p-4">
                    <Package className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Perils Covered */}
        <section className="bg-muted section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                  What We Protect Against
                </h2>
                <p className="text-muted-foreground text-lg">
                  Your contents are protected against a wide range of risks.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {perils.map((peril, index) => (
                  <div key={index} className="flex items-start gap-3 bg-card border border-border rounded-lg p-4">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{peril}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Special Features */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Special Features
                </h2>
                <p className="text-muted-foreground text-lg">
                  Additional benefits included in our contents insurance.
                </p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-8">
                <ul className="space-y-4">
                  {specialFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contents Insurance for Grade II Listed Properties */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Contents Insurance for Grade II Listed Thatched Cottages
                </h2>
                <p className="text-muted-foreground text-lg">
                  Specialist cover that understands the unique contents found in listed period properties.
                </p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-8">
                <p className="text-foreground leading-relaxed mb-6">
                  Grade II listed thatched cottages often contain valuable period features, antiques, and heritage items that require specialist insurance cover. Our contents insurance for listed properties includes:
                </p>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Cover for period features and architectural elements that form part of your contents</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Protection for antiques, artwork, and collectibles commonly found in heritage homes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Understanding of listed building requirements when replacing or repairing contents</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Flexible cover limits for high-value individual items</span>
                  </li>
                </ul>
                <p className="text-muted-foreground text-sm">
                  If you own a listed property, see our <Link href="/blog/grade-2-thatched-cottage-insruance-checklist" className="text-primary font-semibold hover:underline">Grade II thatched cottage insurance checklist</Link> for comprehensive guidance on preparing for insurance quotes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* High-Value Contents Cover */}
        <section className="bg-muted section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                  High-Value Contents Cover for Period Properties
                </h2>
                <p className="text-muted-foreground text-lg">
                  Specialist protection for valuable items commonly found in thatched and period homes.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-4">Antiques & Collectibles</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Many thatched properties contain valuable antiques, period furniture, and collectibles. Our policies offer flexible cover limits and can include separate itemised cover for individual high-value pieces.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Period furniture and antiques</li>
                    <li>• Collectibles and memorabilia</li>
                    <li>• Vintage textiles and tapestries</li>
                    <li>• Historical documents and books</li>
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-4">Artwork & Valuables</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Paintings, sculptures, and other artworks often require specialist valuation and cover. We work with you to ensure your valuable items are properly protected.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Paintings and artwork</li>
                    <li>• Jewellery and watches</li>
                    <li>• Silver and precious metals</li>
                    <li>• Musical instruments</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-muted-foreground text-lg">
                  Common questions about contents insurance for thatched properties.
                </p>
              </div>
              <div className="space-y-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                    Do I need specialist contents insurance for a thatched property?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    While standard contents insurance may cover basic belongings, thatched and period properties often contain valuable antiques, artwork, and period features that require specialist cover. Our policies understand the unique contents found in heritage homes and offer appropriate cover limits and valuations.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                    How do I value my contents for insurance?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    For standard items, you can estimate replacement costs. For high-value items like antiques, artwork, or jewellery, we recommend professional valuations. Keep receipts, photographs, and valuation certificates as evidence. Review your sum insured annually to account for new purchases or changes in value.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                    What's covered under contents insurance for thatched properties?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Contents insurance covers your personal belongings including furniture, appliances, clothing, antiques, artwork, jewellery, and other valuables. It protects against risks like fire, theft, water damage, storm damage, and accidental damage. Some items may have single-item limits, so high-value pieces may need separate itemised cover.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                    Can I get contents insurance if my property is Grade II listed?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Yes, absolutely. We specialise in contents insurance for listed thatched properties. Our policies understand the unique requirements and valuable contents often found in heritage homes. See our <Link href="/blog/grade-2-thatched-cottage-insruance-checklist" className="text-primary font-semibold hover:underline">Grade II thatched cottage insurance checklist</Link> for guidance.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                    What's the difference between buildings and contents insurance?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Buildings insurance covers the structure of your property (walls, roof, permanent fixtures), while contents insurance covers your belongings (furniture, appliances, personal items). For thatched properties, you can purchase buildings only, contents only, or <Link href="/combined-insurance" className="text-primary font-semibold hover:underline">combined cover</Link> in one policy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Important Considerations */}
        <section className="bg-muted section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="bg-warning/10 border-l-4 border-warning p-6 rounded-r-lg">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-warning flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Valuing Your Contents</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      For thatched and period properties, contents often include valuable antiques, artwork, and collectibles. It's important to:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                      <li>Get professional valuations for high-value items</li>
                      <li>Keep receipts and photographs of valuable belongings</li>
                      <li>Review your sum insured annually to account for new purchases</li>
                      <li>Consider separate cover for individual high-value items if they exceed policy limits</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Protect Your Belongings Today
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Get a quote for contents insurance that understands the unique needs of period and thatched properties.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 font-semibold hover:bg-primary/90 transition-colors"
                >
                  Get a Quote
                </Link>
                <Link
                  href="/buildings-insurance"
                  className="inline-flex items-center justify-center rounded-lg border border-border bg-background text-foreground px-6 py-3 font-semibold hover:bg-muted transition-colors"
                >
                  View Buildings Insurance
                </Link>
              </div>
              <p className="text-center text-muted-foreground text-sm mt-4">
                Or explore <Link href="/combined-insurance" className="text-primary font-semibold hover:underline">combined buildings and contents cover</Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

