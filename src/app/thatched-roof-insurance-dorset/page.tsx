import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { MapPin, Home, Shield, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Thatched Roof Insurance Dorset | Specialist Cover for Dorset Properties",
  description:
    "Specialist thatched roof insurance for Dorset properties. Dorset has the highest concentration of thatched buildings in the UK (4 per square mile). Get expert cover for your Dorset thatched property.",
  alternates: {
    canonical: "https://thatchedroofinsurance.co.uk/thatched-roof-insurance-dorset",
  },
  openGraph: {
    title: "Thatched Roof Insurance Dorset | Specialist Cover",
    description:
      "Specialist thatched roof insurance for Dorset properties. Dorset has the highest concentration of thatched buildings in the UK.",
    url: "https://thatchedroofinsurance.co.uk/thatched-roof-insurance-dorset",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thatched Roof Insurance Dorset",
    description: "Specialist thatched roof insurance for Dorset's 2,500+ listed thatched buildings.",
  },
};

export default function DorsetPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header mode="light" />
      <main>
        <section className="container-custom pt-8">
          <Breadcrumbs items={[{ label: "Thatched roof insurance", href: "/" }, { label: "Locations", href: "/locations" }, { label: "Dorset", href: "/thatched-roof-insurance-dorset" }]} />
        </section>
        <section className="bg-muted py-12 md:py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Dorset</span>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
                Thatched Roof Insurance in Dorset
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Dorset has the highest concentration of thatched properties in Britain, with approximately 4 thatched buildings per square mile and nearly 2,500 listed thatched structures. We specialise in insuring Dorset's unique thatched heritage.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-card border border-border rounded-xl p-6">
                  <MapPin className="w-8 h-8 text-primary mb-4" />
                  <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">Dorset's Thatched Heritage</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Dorset contains nearly a tenth of all surviving UK thatched roofs, making it the county with the highest density of thatched properties in Britain. The county's approximately 2,500 listed thatched buildings represent exceptional preservation of this vernacular tradition.
                  </p>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Highest concentration: 4 thatched buildings per square mile</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>~2,500 listed thatched buildings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Nearly 10% of all UK thatched roofs</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <Home className="w-8 h-8 text-primary mb-4" />
                  <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">Thatching Materials in Dorset</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Dorset's thatched properties predominantly use combed wheat reed, reflecting the county's historical agricultural practices and the abundance of suitable cereal crops. This material tradition influences both the appearance and maintenance requirements of Dorset's thatched roofs.
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Understanding the specific material used in your Dorset property helps ensure appropriate insurance cover and realistic rebuild costs. Learn more about <Link href="/blog/thatched-roof-cost-perm2" className="text-primary font-semibold hover:underline">thatched roof costs per square metre</Link>.
                  </p>
                </div>
              </div>

              <div className="bg-warning/10 border-l-4 border-warning p-6 rounded-r-lg mb-8">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-warning flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-2">The Dorset Model</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Many Dorset thatched properties are built or renovated according to the "Dorset Model" - a fire safety standard that has become the industry benchmark. This model includes fire-resisting barriers, micro-porous boarding, and specific chimney requirements. When insuring a Dorset thatched property, insurers will want to know if your property meets these standards. See our guide on <Link href="/blog/thatched-roof-chimney-regulations" className="text-primary font-semibold hover:underline">thatched roof chimney regulations</Link> for details.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-8 mb-8">
                <Shield className="w-8 h-8 text-primary mb-4" />
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Why Specialist Insurance Matters in Dorset</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    With Dorset's exceptional concentration of thatched properties, local fire services have extensive experience with thatched property fires. However, the high density also means insurers pay particular attention to:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Proximity to other thatched properties (fire spread risk)</li>
                    <li>Access for fire engines in rural Dorset locations</li>
                    <li>Distance from fire stations</li>
                    <li>Chimney condition and maintenance records</li>
                    <li>Compliance with Dorset Model fire safety standards</li>
                  </ul>
                  <p>
                    Our specialist policies understand these Dorset-specific considerations and work with insurers who appreciate the county's unique thatched property landscape.
                  </p>
                </div>
              </div>

              <div className="bg-muted rounded-xl p-8">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Getting Insurance for Your Dorset Thatched Property</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Whether your Dorset thatched property is in the Purbeck area, the Blackmore Vale, or along the Jurassic Coast, we can help you find appropriate insurance cover. Our team understands Dorset's thatched property market and can guide you through:
                </p>
                <p className="text-muted-foreground text-sm mb-4">
                  Explore our <Link href="/buildings-insurance" className="text-primary font-semibold hover:underline">buildings insurance</Link>, <Link href="/contents-insurance" className="text-primary font-semibold hover:underline">contents insurance</Link>, or <Link href="/combined-insurance" className="text-primary font-semibold hover:underline">combined cover</Link> options. Also see coverage for nearby areas like <Link href="/thatched-roof-insurance-devon" className="text-primary font-semibold hover:underline">Devon</Link> and <Link href="/thatched-roof-insurance-hampshire" className="text-primary font-semibold hover:underline">Hampshire</Link>.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Accurate rebuild cost assessments for Dorset's traditional building methods</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Understanding Dorset Model compliance requirements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Fire safety considerations specific to high-density thatched areas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Cover for listed buildings (many Dorset thatched properties are Grade II listed)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-muted section-padding">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Get a Quote for Your Dorset Thatched Property
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Protect Dorset's thatched heritage with specialist insurance designed for the county's unique property landscape.
              </p>
              <Link
                href="/quote"
                className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 font-semibold hover:bg-primary/90 transition-colors"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

