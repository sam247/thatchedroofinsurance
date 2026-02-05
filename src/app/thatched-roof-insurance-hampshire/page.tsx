import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { MapPin, Home, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Thatched Roof Insurance Hampshire | New Forest Specialist Cover",
  description:
    "Specialist thatched roof insurance for Hampshire properties, including the New Forest area where 20% of listed buildings are thatched. Get expert cover for your Hampshire thatched property.",
  alternates: {
    canonical: "https://thatchedroofinsurance.co.uk/thatched-roof-insurance-hampshire",
  },
  openGraph: {
    title: "Thatched Roof Insurance Hampshire | New Forest Cover",
    description:
      "Specialist thatched roof insurance for Hampshire properties. The New Forest has 20% of listed buildings as thatched.",
    url: "https://thatchedroofinsurance.co.uk/thatched-roof-insurance-hampshire",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thatched Roof Insurance Hampshire",
    description: "Specialist cover for Hampshire's thatched properties including the New Forest.",
  },
};

export default function HampshirePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header mode="light" />
      <main>
        <section className="container-custom pt-8">
          <Breadcrumbs items={[{ label: "Thatched roof insurance", href: "/" }, { label: "Locations", href: "/locations" }, { label: "Hampshire", href: "/thatched-roof-insurance-hampshire" }]} />
        </section>
        <section className="bg-muted py-12 md:py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Hampshire</span>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
                Thatched Roof Insurance in Hampshire
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Hampshire, particularly the New Forest area, contains a significant concentration of thatched properties. In the New Forest, approximately 20% of the 1,600 listed buildings are thatched, representing around 320 thatched structures in this area alone.
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
                  <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">The New Forest Thatched Heritage</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The New Forest area of Hampshire is particularly notable for its thatched properties, with 20% of listed buildings being thatched. This represents approximately 320 thatched buildings in the New Forest alone, making it one of the most significant thatched property areas in southern England.
                  </p>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>~320 thatched buildings in the New Forest</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>20% of listed buildings are thatched</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Significant concentration across Hampshire</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <Home className="w-8 h-8 text-primary mb-4" />
                  <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">Thatching in Hampshire</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Hampshire's thatched properties, particularly in the New Forest, reflect the county's rural heritage and traditional building practices. Many properties use combed wheat reed, consistent with the broader southwest tradition.
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Understanding the specific material and construction of your Hampshire thatched property helps ensure appropriate insurance cover. Learn more about <Link href="/blog/thatched-roof-cost-perm2" className="text-primary font-semibold hover:underline">thatched roof costs</Link>.
                  </p>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-8 mb-8">
                <Shield className="w-8 h-8 text-primary mb-4" />
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Insurance Considerations for Hampshire Thatched Properties</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Hampshire's thatched properties, particularly those in the New Forest, present specific insurance considerations:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>New Forest location may affect fire service access and response times</li>
                    <li>Many properties are in rural or semi-rural locations</li>
                    <li>Listed building status (Grade II common) requires sympathetic restoration</li>
                    <li>Proximity to other thatched properties in concentrated areas</li>
                    <li>Traditional building methods must be used for repairs</li>
                  </ul>
                  <p>
                    Our specialist policies understand these Hampshire-specific requirements and work with insurers who appreciate the county's thatched property landscape.
                  </p>
                </div>
              </div>

              <div className="bg-muted rounded-xl p-8">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Getting Insurance for Your Hampshire Thatched Property</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Whether your Hampshire thatched property is in the New Forest, the South Downs, or one of Hampshire's historic villages, we can help you find appropriate insurance cover. Our team understands Hampshire's thatched property market and can guide you through:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Accurate rebuild cost assessments for Hampshire's traditional building methods</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Understanding listed building requirements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Fire safety considerations for New Forest and rural locations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Cover for properties in high-density thatched areas</span>
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
                Get a Quote for Your Hampshire Thatched Property
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Protect Hampshire's thatched heritage with specialist insurance designed for the county's unique property landscape.
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

