import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { MapPin, Home, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Thatched Roof Insurance by Location | UK Coverage Areas",
  description:
    "Find specialist thatched roof insurance for your area. We cover all major thatched property regions including Dorset, Devon, Hampshire, Wiltshire, Cotswolds, Norfolk, and more. Get location-specific insurance quotes.",
  alternates: {
    canonical: "https://thatchedroofinsurance.co.uk/locations",
  },
  openGraph: {
    title: "Thatched Roof Insurance by Location | UK Coverage Areas",
    description:
      "Find specialist thatched roof insurance for your area. We cover all major thatched property regions across the UK.",
    url: "https://thatchedroofinsurance.co.uk/locations",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thatched Roof Insurance by Location",
    description: "Specialist thatched roof insurance coverage across all major UK regions.",
  },
};

const locations = [
  {
    name: "Dorset",
    slug: "thatched-roof-insurance-dorset",
    description: "Highest concentration of thatched properties in the UK (4 per square mile, ~2,500 listed buildings)",
    highlight: "Highest density",
    stats: "~2,500 listed thatched buildings",
  },
  {
    name: "Devon",
    slug: "thatched-roof-insurance-devon",
    description: "~4,000 thatched buildings with 23% of listed buildings being thatched - the highest percentage in England",
    highlight: "Most buildings",
    stats: "~4,000 thatched buildings, 23% of listed",
  },
  {
    name: "Hampshire",
    slug: "thatched-roof-insurance-hampshire",
    description: "New Forest area has 20% of listed buildings as thatched (~320 buildings in New Forest alone)",
    highlight: "New Forest focus",
    stats: "~320 thatched buildings in New Forest",
  },
  {
    name: "Wiltshire",
    slug: "thatched-roof-insurance-wiltshire",
    description: "Thousands of thatched properties, recognised by fire services as having particularly significant concentration",
    highlight: "High density",
    stats: "Thousands of thatched buildings",
  },
  {
    name: "Cotswolds",
    slug: "thatched-roof-insurance-cotswolds",
    description: "Primary region for traditional thatched cottages with distinctive honey-coloured stone and thatch combination",
    highlight: "Primary region",
    stats: "Primary thatched cottage region",
  },
  {
    name: "Somerset",
    slug: "thatched-roof-insurance-somerset",
    description: "Significant concentration forming part of the core southwest thatched property region",
    highlight: "Core region",
    stats: "Part of core southwest region",
  },
  {
    name: "Oxfordshire",
    slug: "thatched-roof-insurance-oxfordshire",
    description: "Extends the primary thatched property band with many properties in rural villages",
    highlight: "Rural villages",
    stats: "Extends primary thatched band",
  },
  {
    name: "Norfolk",
    slug: "thatched-roof-insurance-norfolk",
    description: "Distinguished by water reed thatch from the Norfolk Broads, creating distinct regional character",
    highlight: "Water reed thatch",
    stats: "Water reed from Norfolk Broads",
  },
  {
    name: "Cambridgeshire",
    slug: "thatched-roof-insurance-cambridgeshire",
    description: "~785 thatched roofs using water reed thatch, part of East Anglia's secondary concentration",
    highlight: "Water reed tradition",
    stats: "~785 thatched roofs",
  },
  {
    name: "Buckinghamshire",
    slug: "thatched-roof-insurance-buckinghamshire",
    description: "904 listed thatched buildings extending the primary thatched property band",
    highlight: "Significant concentration",
    stats: "904 listed thatched buildings",
  },
];

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header mode="light" />
      <main>
        <section className="container-custom pt-8">
          <Breadcrumbs items={[{ label: "Locations", href: "/locations" }]} />
        </section>
        <section className="bg-muted py-12 md:py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Locations</span>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
                Thatched Roof Insurance by Location
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We provide specialist thatched roof insurance across all major thatched property regions in the UK. Each area has unique characteristics, thatching traditions, and insurance considerations. Find location-specific information and get quotes tailored to your area.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {locations.map((location) => (
                  <Link
                    key={location.slug}
                    href={`/${location.slug}`}
                    className="group bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-primary" />
                        <h2 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {location.name}
                        </h2>
                      </div>
                    </div>
                    <div className="mb-3">
                      <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-2 py-1 rounded-full">
                        {location.highlight}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">{location.description}</p>
                    <div className="text-xs text-muted-foreground mb-4">{location.stats}</div>
                    <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                      Learn More
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-muted section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Understanding Regional Differences
                </h2>
                <p className="text-muted-foreground text-lg">
                  Thatched properties vary by region, affecting insurance requirements and costs.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-card border border-border rounded-xl p-6">
                  <Home className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">Thatching Materials</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    The southwest (Dorset, Devon, Wiltshire, Somerset) predominantly uses combed wheat reed, while East Anglia (Norfolk, Cambridgeshire) uses water reed from the Broads. This affects both appearance and maintenance requirements.
                  </p>
                  <Link href="/blog/how-long-does-a-thatched-roof-last" className="text-primary font-semibold text-sm hover:underline">
                    Learn about thatch materials →
                  </Link>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <Shield className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-3">Insurance Considerations</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    High-density areas like Dorset and Devon have specific fire safety considerations. Listed buildings require sympathetic restoration. Rural locations may affect fire service access. Our policies understand these regional differences.
                  </p>
                  <Link href="/blog/why-is-thatched-cottage-insurance-expensive" className="text-primary font-semibold text-sm hover:underline">
                    Why insurance costs more →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Get a Quote for Your Area
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Whether your thatched property is in Dorset, Devon, or any other region, we can provide specialist insurance tailored to your location's unique requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 font-semibold hover:bg-primary/90 transition-colors"
                >
                  Get a Quote
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-lg border border-border bg-background text-foreground px-6 py-3 font-semibold hover:bg-muted transition-colors"
                >
                  Learn About Us
                </Link>
              </div>
              <p className="text-center text-muted-foreground text-sm mt-4">
                Explore our <Link href="/buildings-insurance" className="text-primary font-semibold hover:underline">buildings insurance</Link>, <Link href="/contents-insurance" className="text-primary font-semibold hover:underline">contents insurance</Link>, or <Link href="/combined-insurance" className="text-primary font-semibold hover:underline">combined cover</Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

