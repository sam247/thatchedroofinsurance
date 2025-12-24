import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { MapPin, Home, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Thatched Roof Insurance Buckinghamshire | Specialist Cover",
  description:
    "Specialist thatched roof insurance for Buckinghamshire properties. Buckinghamshire has 904 listed thatched buildings. Get expert cover for your Buckinghamshire thatched property.",
  alternates: {
    canonical: "https://thatchedroofinsurance.co.uk/thatched-roof-insurance-buckinghamshire",
  },
  openGraph: {
    title: "Thatched Roof Insurance Buckinghamshire | Specialist Cover",
    description: "Specialist thatched roof insurance for Buckinghamshire properties. 904 listed thatched buildings.",
    url: "https://thatchedroofinsurance.co.uk/thatched-roof-insurance-buckinghamshire",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thatched Roof Insurance Buckinghamshire",
    description: "Specialist cover for Buckinghamshire's 904 listed thatched buildings.",
  },
};

export default function BuckinghamshirePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header mode="light" />
      <main>
        <section className="container-custom pt-8">
          <Breadcrumbs items={[{ label: "Buckinghamshire", href: "/thatched-roof-insurance-buckinghamshire" }]} />
        </section>
        <section className="bg-muted py-12 md:py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Buckinghamshire</span>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
                Thatched Roof Insurance for Buckinghamshire Properties
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Buckinghamshire contains 904 listed thatched buildings, representing a significant concentration of thatched properties. The county extends the primary thatched property band from the southwest through to the Midlands.
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
                  <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">Buckinghamshire's Thatched Heritage</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Buckinghamshire contains 904 listed thatched buildings, representing a significant concentration. The county extends the primary thatched property band from the southwest, with the concentration moving through the county before gradually diminishing further north.
                  </p>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>904 listed thatched buildings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Extends primary thatched property band</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Significant concentration across the county</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <Home className="w-8 h-8 text-primary mb-4" />
                  <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">Thatching in Buckinghamshire</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Buckinghamshire's thatched properties predominantly use combed wheat reed, consistent with the broader southwest tradition. The county's position in the thatched property band means it shares material traditions with other counties in the region.
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Understanding your property's thatch type is essential for accurate insurance cover. Learn about <Link href="/blog/thatched-roof-cost-perm2" className="text-primary font-semibold hover:underline">thatched roof costs</Link>.
                  </p>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-8 mb-8">
                <Shield className="w-8 h-8 text-primary mb-4" />
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Insurance Considerations for Buckinghamshire Thatched Properties</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>Buckinghamshire's thatched properties present specific insurance considerations:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Many properties are listed (Grade II common) requiring sympathetic restoration</li>
                    <li>Rural locations may affect fire service access</li>
                    <li>Traditional building methods and materials must be used for repairs</li>
                    <li>Proximity to other thatched properties in concentrated areas</li>
                  </ul>
                  <p>Our specialist policies understand these Buckinghamshire-specific requirements.</p>
                </div>
              </div>

              <div className="bg-muted rounded-xl p-8">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Getting Insurance for Your Buckinghamshire Thatched Property</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Whether your Buckinghamshire thatched property is in the Chilterns, the Vale of Aylesbury, or one of Buckinghamshire's historic villages, we can help you find appropriate insurance cover.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Accurate rebuild cost assessments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Understanding listed building requirements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Fire safety considerations for rural locations</span>
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
                Get a Quote for Your Buckinghamshire Thatched Property
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Protect Buckinghamshire's thatched heritage with specialist insurance.
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

