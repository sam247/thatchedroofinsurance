import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Shield, CheckCircle, AlertTriangle, Home } from "lucide-react";

export const metadata: Metadata = {
  title: "Thatched Roof Buildings Insurance UK | Specialist Cover for Listed Properties",
  description:
    "Specialist buildings insurance for thatched properties in the UK. Comprehensive cover for Grade II listed cottages, thatched roofs, and outbuildings. Get a quote today.",
  alternates: {
    canonical: "https://thatchedroofinsurance.co.uk/buildings-insurance",
  },
  openGraph: {
    title: "Buildings Insurance for Thatched Properties | Specialist Cover",
    description:
      "Specialist buildings insurance for thatched properties. Comprehensive cover for your thatched roof, structure, and outbuildings.",
    url: "https://thatchedroofinsurance.co.uk/buildings-insurance",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buildings Insurance for Thatched Properties",
    description: "Specialist buildings insurance for thatched properties. Get comprehensive cover today.",
  },
};

const features = [
  "Thatched roof cover including fire, storm, and impact damage",
  "Full rebuild cost cover for listed and period properties",
  "Outbuildings, garages, and boundary walls",
  "Alternative accommodation if your home becomes uninhabitable",
  "Emergency repairs and temporary protection",
  "Debris removal and site clearance",
  "Professional fees (surveyors, architects, etc.)",
  "Cover for traditional building materials and methods",
];

const whatWeCover = [
  "Fire damage to thatch and structure",
  "Storm and weather damage",
  "Water damage and escape of water",
  "Theft and attempted theft",
  "Vandalism and malicious damage",
  "Subsidence, heave, and landslip",
  "Impact damage (falling trees, vehicles, etc.)",
  "Accidental damage",
];

export default function BuildingsInsurancePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Buildings Insurance",
    provider: {
      "@type": "LocalBusiness",
      name: "Thatched Roof Insurance",
      url: "https://thatchedroofinsurance.co.uk",
    },
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
    description: "Specialist buildings insurance for thatched properties. Comprehensive cover for your thatched roof, structure, and outbuildings.",
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
          <Breadcrumbs items={[{ label: "Thatched roof insurance", href: "/" }, { label: "Buildings Insurance", href: "/buildings-insurance" }]} />
        </section>
        {/* Hero Section */}
        <section className="bg-muted py-12 md:py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Buildings Insurance</span>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
                Thatched Roof Buildings Insurance UK | Specialist Cover for Listed Properties
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Comprehensive buildings insurance designed specifically for thatched properties. Protect your home's structure, thatched roof, and outbuildings with specialist cover that understands your unique needs.
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
                  Our buildings insurance provides comprehensive protection for your thatched property.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {whatWeCover.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 bg-card border border-border rounded-lg p-4">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="bg-muted section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Key Features
                </h2>
                <p className="text-muted-foreground text-lg">
                  What makes our buildings insurance different for thatched properties.
                </p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-8">
                <ul className="space-y-4">
                  {features.map((feature, index) => (
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

        {/* Rebuild Costs for Thatched Properties */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Understanding Rebuild Costs for Thatched Properties
                </h2>
                <p className="text-muted-foreground text-lg">
                  Accurate rebuild valuations are essential for proper buildings insurance cover.
                </p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-8 mb-8">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-4">Why Rebuild Costs Are Higher</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Thatched properties typically cost significantly more to rebuild than standard homes. This is due to:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground"><strong>Specialist materials:</strong> Thatched roofs require specific materials (water reed, combed wheat reed, or long straw) that are more expensive than standard roofing materials.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground"><strong>Skilled trades:</strong> Qualified thatchers are limited in number and command premium rates. Learn more about <Link href="/blog/thatched-roof-cost-perm2" className="text-primary font-semibold hover:underline">thatched roof costs per square metre</Link>.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground"><strong>Listed building requirements:</strong> Grade II listed properties must use traditional materials and methods, which increases costs.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground"><strong>Extended rebuild times:</strong> Thatched roof work is weather-dependent and time-consuming, increasing labour costs.</span>
                  </li>
                </ul>
                <div className="bg-warning/10 border-l-4 border-warning p-6 rounded-r-lg">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-warning flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-serif text-lg font-semibold text-foreground mb-2">Important: Rebuild Cost vs Market Value</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        For thatched properties, especially listed buildings, the rebuild cost is often significantly higher than the market value. This is because traditional materials, specialist trades, and listed building requirements make restoration expensive. We'll help you determine the correct rebuild value to ensure you're not underinsured.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Listed Building Requirements */}
        <section className="bg-muted section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Buildings Insurance for Listed Thatched Properties
                </h2>
                <p className="text-muted-foreground text-lg">
                  Specialist cover that understands the unique requirements of Grade II listed buildings.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card border border-border rounded-lg p-6">
                  <Home className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">Listed Building Status</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Many thatched properties are listed (Grade I, II, or II*). Our policies understand the additional requirements for repairs using traditional materials and methods, and the involvement of conservation officers.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    If you own a listed property, see our <Link href="/blog/grade-2-thatched-cottage-insruance-checklist" className="text-primary font-semibold hover:underline">Grade II thatched cottage insurance checklist</Link> for comprehensive guidance on preparing for insurance quotes.
                  </p>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <Shield className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">Fire Safety Requirements</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Thatched roofs have specific fire risks. Our policies include appropriate cover for fire damage, and we can advise on fire safety measures that may help reduce your premium.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    See our guides on <Link href="/blog/thatched-roof-chimney-regulations" className="text-primary font-semibold hover:underline">chimney regulations for thatched properties</Link> and <Link href="/blog/thatched-roof-fire-risk-insurer-checks" className="text-primary font-semibold hover:underline">what insurers look for regarding fire risk</Link>.
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
                Get Buildings Insurance for Your Thatched Property
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Get a quote today and discover why thousands of thatched property owners trust us with their buildings insurance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 font-semibold hover:bg-primary/90 transition-colors"
                >
                  Get a Quote
                </Link>
                <Link
                  href="/contents-insurance"
                  className="inline-flex items-center justify-center rounded-lg border border-border bg-background text-foreground px-6 py-3 font-semibold hover:bg-muted transition-colors"
                >
                  View Contents Insurance
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

