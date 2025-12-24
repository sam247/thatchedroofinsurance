import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { MapPin, Home, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Thatched Roof Insurance Oxfordshire | Specialist Cover for Oxfordshire Properties",
  description:
    "Specialist thatched roof insurance for Oxfordshire properties. Oxfordshire is part of the primary region for traditional thatched cottages, extending the southwest thatched property band. Get expert cover for your Oxfordshire thatched property.",
  alternates: {
    canonical: "https://thatchedroofinsurance.co.uk/thatched-roof-insurance-oxfordshire",
  },
  openGraph: {
    title: "Thatched Roof Insurance Oxfordshire | Specialist Cover",
    description:
      "Specialist thatched roof insurance for Oxfordshire properties. Oxfordshire is a primary region for traditional thatched cottages.",
    url: "https://thatchedroofinsurance.co.uk/thatched-roof-insurance-oxfordshire",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thatched Roof Insurance Oxfordshire",
    description: "Specialist cover for Oxfordshire's thatched properties.",
  },
};

export default function OxfordshirePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header mode="light" />
      <main>
        <section className="container-custom pt-8">
          <Breadcrumbs items={[{ label: "Oxfordshire", href: "/thatched-roof-insurance-oxfordshire" }]} />
        </section>
        <section className="bg-muted py-12 md:py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Oxfordshire</span>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
                Thatched Roof Insurance for Oxfordshire Properties
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Oxfordshire is part of the primary region for traditional thatched cottages, extending the southwest thatched property band through the county. The area's rural villages and traditional architecture preserve this vernacular building tradition.
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
                  <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">Oxfordshire's Thatched Heritage</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Oxfordshire extends the primary southwest thatched property band, with the concentration moving through the county from the southwest. The area's rural villages and traditional architecture preserve this vernacular building tradition, creating picturesque thatched cottages throughout the county.
                  </p>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Part of primary thatched property region</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Extends southwest thatched property band</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Many properties in rural villages</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <Home className="w-8 h-8 text-primary mb-4" />
                  <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">Thatching in Oxfordshire</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Oxfordshire's thatched properties predominantly use combed wheat reed, consistent with the broader southwest tradition. The county's position in the thatched property band means it shares material traditions with Dorset, Wiltshire, and other southwest counties.
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Understanding your property's thatch type and condition is essential for accurate insurance cover. Learn about <Link href="/blog/how-long-does-a-thatched-roof-last" className="text-primary font-semibold hover:underline">thatched roof lifespan</Link> and maintenance.
                  </p>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-8 mb-8">
                <Shield className="w-8 h-8 text-primary mb-4" />
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Insurance Considerations for Oxfordshire Thatched Properties</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Oxfordshire's thatched properties present specific insurance considerations:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Many properties are listed (Grade II common) requiring sympathetic restoration</li>
                    <li>Rural village locations may affect fire service access</li>
                    <li>Traditional building methods and materials must be used for repairs</li>
                    <li>Proximity to other thatched properties in concentrated areas</li>
                    <li>High property values in desirable areas require appropriate sums insured</li>
                  </ul>
                  <p>
                    Our specialist policies understand these Oxfordshire-specific requirements and work with insurers who appreciate the county's thatched property landscape.
                  </p>
                </div>
              </div>

              <div className="bg-muted rounded-xl p-8">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Getting Insurance for Your Oxfordshire Thatched Property</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Whether your Oxfordshire thatched property is in the Cotswolds area, the Chilterns, or one of Oxfordshire's historic villages, we can help you find appropriate insurance cover. Our team understands Oxfordshire's thatched property market and can guide you through:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Accurate rebuild cost assessments for Oxfordshire's traditional building methods</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Understanding listed building requirements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Fire safety considerations for rural village locations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Cover that recognises high property values in desirable areas</span>
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
                Get a Quote for Your Oxfordshire Thatched Property
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Protect Oxfordshire's thatched heritage with specialist insurance designed for the county's unique property landscape.
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

