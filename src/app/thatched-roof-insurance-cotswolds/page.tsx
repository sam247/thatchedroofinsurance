import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { MapPin, Home, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Thatched Roof Insurance Cotswolds | Specialist Cover for Cotswold Properties",
  description:
    "Specialist thatched roof insurance for Cotswold properties. The Cotswolds is one of the primary regions for experiencing traditional thatched cottages. Get expert cover for your Cotswold thatched property.",
  alternates: {
    canonical: "https://thatchedroofinsurance.co.uk/thatched-roof-insurance-cotswolds",
  },
  openGraph: {
    title: "Thatched Roof Insurance Cotswolds | Specialist Cover",
    description:
      "Specialist thatched roof insurance for Cotswold properties. The Cotswolds is a primary region for traditional thatched cottages.",
    url: "https://thatchedroofinsurance.co.uk/thatched-roof-insurance-cotswolds",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thatched Roof Insurance Cotswolds",
    description: "Specialist cover for Cotswold thatched properties.",
  },
};

export default function CotswoldsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header mode="light" />
      <main>
        <section className="container-custom pt-8">
          <Breadcrumbs items={[{ label: "Thatched roof insurance", href: "/" }, { label: "Locations", href: "/locations" }, { label: "Cotswolds", href: "/thatched-roof-insurance-cotswolds" }]} />
        </section>
        <section className="bg-muted py-12 md:py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Cotswolds</span>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
                Thatched Roof Insurance in the Cotswolds
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                The Cotswolds, spanning parts of Gloucestershire, Oxfordshire, and other counties, is one of the primary regions for experiencing traditional thatched cottages. The area's distinctive honey-coloured stone and thatched roofs create the quintessential English countryside aesthetic.
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
                  <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">The Cotswolds Thatched Heritage</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The Cotswolds is recognised as one of the primary regions for traditional thatched cottages in Britain. The area's combination of distinctive honey-coloured Cotswold stone and thatched roofs creates the quintessential English countryside aesthetic that draws visitors from around the world.
                  </p>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Primary region for traditional thatched cottages</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Distinctive Cotswold stone and thatch combination</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Many properties are Grade II listed</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <Home className="w-8 h-8 text-primary mb-4" />
                  <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">Thatching in the Cotswolds</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Cotswold thatched properties typically use combed wheat reed, consistent with the broader southwest tradition. The combination of honey-coloured stone walls and thatched roofs creates the area's distinctive architectural character.
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Understanding your property's thatch type and the interaction with Cotswold stone is essential for accurate insurance cover. Learn about <Link href="/blog/thatched-roof-cost-perm2" className="text-primary font-semibold hover:underline">thatched roof costs</Link>.
                  </p>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-8 mb-8">
                <Shield className="w-8 h-8 text-primary mb-4" />
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Insurance Considerations for Cotswold Thatched Properties</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Cotswold thatched properties present specific insurance considerations:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Many properties are Grade II listed, requiring sympathetic restoration with traditional materials</li>
                    <li>Cotswold stone walls require specialist knowledge for rebuild cost assessments</li>
                    <li>Rural locations may affect fire service access</li>
                    <li>High property values require appropriate sums insured</li>
                    <li>Traditional building methods and materials must be used for repairs</li>
                    <li>Tourist/holiday let use may require commercial insurance considerations</li>
                  </ul>
                  <p>
                    Our specialist policies understand these Cotswold-specific requirements and work with insurers who appreciate the area's unique thatched property landscape.
                  </p>
                </div>
              </div>

              <div className="bg-muted rounded-xl p-8">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Getting Insurance for Your Cotswold Thatched Property</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Whether your Cotswold thatched property is in Gloucestershire, Oxfordshire, or another Cotswold county, we can help you find appropriate insurance cover. Our team understands the Cotswold thatched property market and can guide you through:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Accurate rebuild cost assessments for Cotswold stone and thatch combinations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Understanding listed building requirements for Grade II properties</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Cover for holiday lets and commercial use if applicable</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Fire safety considerations for rural Cotswold locations</span>
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
                Get a Quote for Your Cotswold Thatched Property
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Protect the Cotswolds' thatched heritage with specialist insurance designed for the area's unique property landscape.
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

