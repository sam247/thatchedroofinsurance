import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { MapPin, Home, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Thatched Roof Insurance Wiltshire | Specialist Cover for Wiltshire Properties",
  description:
    "Specialist thatched roof insurance for Wiltshire properties. Wiltshire contains thousands of thatched buildings and is recognised by fire services as having a particularly significant concentration. Get expert cover for your Wiltshire thatched property.",
  alternates: {
    canonical: "https://thatchedroofinsurance.co.uk/thatched-roof-insurance-wiltshire",
  },
  openGraph: {
    title: "Thatched Roof Insurance Wiltshire | Specialist Cover",
    description:
      "Specialist thatched roof insurance for Wiltshire properties. Wiltshire contains thousands of thatched buildings.",
    url: "https://thatchedroofinsurance.co.uk/thatched-roof-insurance-wiltshire",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thatched Roof Insurance Wiltshire",
    description: "Specialist cover for Wiltshire's thousands of thatched properties.",
  },
};

export default function WiltshirePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header mode="light" />
      <main>
        <section className="container-custom pt-8">
          <Breadcrumbs items={[{ label: "Thatched roof insurance", href: "/" }, { label: "Locations", href: "/locations" }, { label: "Wiltshire", href: "/thatched-roof-insurance-wiltshire" }]} />
        </section>
        <section className="bg-muted py-12 md:py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Wiltshire</span>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
                Thatched Roof Insurance in Wiltshire
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Wiltshire contains thousands of thatched buildings and is recognised by fire services as having a particularly significant concentration of thatched properties. Together with Dorset, Wiltshire forms part of the core thatched property region in southern England.
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
                  <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">Wiltshire's Thatched Heritage</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Wiltshire, together with Dorset, contains thousands of thatched properties, making it one of the most significant thatched property areas in Britain. The county is recognised by fire services as having a particularly significant concentration of thatched buildings.
                  </p>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Thousands of thatched buildings across the county</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Recognised by fire services as high-density area</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Core thatched property region with Dorset</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <Home className="w-8 h-8 text-primary mb-4" />
                  <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">Thatching in Wiltshire</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Wiltshire's thatched properties predominantly use combed wheat reed, consistent with the broader southwest tradition. The county's rural character and traditional building practices have preserved this vernacular architecture.
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Understanding your property's thatch type and condition is essential for accurate insurance cover. Learn about <Link href="/blog/how-long-does-a-thatched-roof-last" className="text-primary font-semibold hover:underline">thatched roof lifespan</Link> and maintenance.
                  </p>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-8 mb-8">
                <Shield className="w-8 h-8 text-primary mb-4" />
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Insurance Considerations for Wiltshire Thatched Properties</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Wiltshire's significant concentration of thatched properties creates specific insurance considerations:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>High density of thatched properties increases fire spread risk</li>
                    <li>Rural locations may affect fire service access and response times</li>
                    <li>Many properties are listed (Grade II common) requiring sympathetic restoration</li>
                    <li>Proximity to other thatched properties in concentrated areas</li>
                    <li>Traditional building methods and materials must be used for repairs</li>
                  </ul>
                  <p>
                    Our specialist policies understand these Wiltshire-specific requirements and work with insurers who appreciate the county's thatched property landscape.
                  </p>
                </div>
              </div>

              <div className="bg-muted rounded-xl p-8">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Getting Insurance for Your Wiltshire Thatched Property</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Whether your Wiltshire thatched property is in the Vale of Pewsey, the Salisbury Plain area, or one of Wiltshire's historic villages, we can help you find appropriate insurance cover. Our team understands Wiltshire's thatched property market and can guide you through:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Accurate rebuild cost assessments for Wiltshire's traditional building methods</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Understanding listed building requirements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Fire safety considerations for high-density thatched areas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Cover that recognises the value of traditional construction</span>
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
                Get a Quote for Your Wiltshire Thatched Property
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Protect Wiltshire's thatched heritage with specialist insurance designed for the county's unique property landscape.
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

