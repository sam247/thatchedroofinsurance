import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { MapPin, Home, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Thatched Roof Insurance Somerset | Specialist Cover for Somerset Properties",
  description:
    "Specialist thatched roof insurance for Somerset properties. Somerset has a significant concentration of thatched buildings, part of the core southwest thatched property region. Get expert cover for your Somerset thatched property.",
  alternates: {
    canonical: "https://thatchedroofinsurance.co.uk/thatched-roof-insurance-somerset",
  },
  openGraph: {
    title: "Thatched Roof Insurance Somerset | Specialist Cover",
    description:
      "Specialist thatched roof insurance for Somerset properties. Somerset has a significant concentration of thatched buildings.",
    url: "https://thatchedroofinsurance.co.uk/thatched-roof-insurance-somerset",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thatched Roof Insurance Somerset",
    description: "Specialist cover for Somerset's thatched properties.",
  },
};

export default function SomersetPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header mode="light" />
      <main>
        <section className="container-custom pt-8">
          <Breadcrumbs items={[{ label: "Somerset", href: "/thatched-roof-insurance-somerset" }]} />
        </section>
        <section className="bg-muted py-12 md:py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Somerset</span>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
                Thatched Roof Insurance for Somerset Properties
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Somerset has a significant concentration of thatched buildings, forming part of the core southwest thatched property region alongside Dorset, Devon, and Wiltshire. The county's rural character and traditional building practices have preserved this vernacular architecture.
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
                  <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">Somerset's Thatched Heritage</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Somerset forms part of the core southwest thatched property region, with a significant concentration of thatched buildings. The county's rural character, traditional building practices, and agricultural heritage have preserved this vernacular architecture across many villages and rural areas.
                  </p>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Significant concentration of thatched buildings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Part of core southwest thatched property region</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Strong rural and agricultural heritage</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <Home className="w-8 h-8 text-primary mb-4" />
                  <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">Thatching in Somerset</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Somerset's thatched properties predominantly use combed wheat reed, consistent with the broader southwest tradition. The county's agricultural heritage and traditional building practices have maintained this material tradition.
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Understanding your property's thatch type and condition is essential for accurate insurance cover. Learn about <Link href="/blog/thatched-roof-cost-perm2" className="text-primary font-semibold hover:underline">thatched roof costs</Link> and maintenance.
                  </p>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-8 mb-8">
                <Shield className="w-8 h-8 text-primary mb-4" />
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Insurance Considerations for Somerset Thatched Properties</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Somerset's thatched properties present specific insurance considerations:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Rural locations across the county may affect fire service access</li>
                    <li>Many properties are listed (Grade II common) requiring sympathetic restoration. See our <Link href="/blog/grade-2-thatched-cottage-insruance-checklist" className="text-primary font-semibold hover:underline">Grade II thatched cottage insurance checklist</Link> for guidance.</li>
                    <li>Traditional building methods and materials must be used for repairs</li>
                    <li>Proximity to other thatched properties in concentrated areas</li>
                    <li>Agricultural outbuildings may require additional cover</li>
                    <li>Fire safety is critical - see our guide on <Link href="/blog/thatched-roof-fire-risk-insurer-checks" className="text-primary font-semibold hover:underline">what insurers look for regarding fire risk</Link></li>
                  </ul>
                  <p>
                    Our specialist policies understand these Somerset-specific requirements and work with insurers who appreciate the county's thatched property landscape. Understanding <Link href="/blog/why-is-thatched-cottage-insurance-expensive" className="text-primary font-semibold hover:underline">why thatched cottage insurance is expensive</Link> helps explain the specialist nature of cover needed.
                  </p>
                </div>
              </div>

              <div className="bg-muted rounded-xl p-8 mb-8">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Getting Insurance for Your Somerset Thatched Property</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Whether your Somerset thatched property is in the Mendips, the Quantocks, the Levels, or one of Somerset's historic villages, we can help you find appropriate insurance cover. Our team understands Somerset's thatched property market and can guide you through:
                </p>
                <ul className="space-y-3 text-muted-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Accurate rebuild cost assessments for Somerset's traditional building methods. Learn about <Link href="/blog/thatched-roof-cost-perm2" className="text-primary font-semibold hover:underline">thatched roof costs per square metre</Link>.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Understanding listed building requirements and compliance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Cover for agricultural outbuildings if applicable</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Fire safety considerations for rural Somerset locations, including <Link href="/blog/thatched-roof-chimney-regulations" className="text-primary font-semibold hover:underline">chimney regulations for thatched properties</Link></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Ways to <Link href="/blog/reduce-thatched-cottage-insurance-cost" className="text-primary font-semibold hover:underline">reduce thatched cottage insurance costs</Link> through fire safety and maintenance</span>
                  </li>
                </ul>
              </div>

              {/* Related Resources */}
              <div className="bg-card border border-border rounded-xl p-8">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Helpful Resources for Somerset Thatched Property Owners</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Explore our expert guides to help you understand and manage your Somerset thatched property insurance:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link href="/blog/grade-2-thatched-cottage-insruance-checklist" className="group bg-muted rounded-lg p-4 hover:bg-muted/80 transition-colors">
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">Grade II Thatched Cottage Insurance Checklist</h3>
                    <p className="text-muted-foreground text-sm">Essential preparation guide for listed property insurance quotes.</p>
                  </Link>
                  <Link href="/blog/thatched-roof-fire-risk-insurer-checks" className="group bg-muted rounded-lg p-4 hover:bg-muted/80 transition-colors">
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">What Insurers Look For Regarding Fire Risk</h3>
                    <p className="text-muted-foreground text-sm">Understanding fire risk assessment for thatched properties.</p>
                  </Link>
                  <Link href="/blog/thatched-roof-chimney-regulations" className="group bg-muted rounded-lg p-4 hover:bg-muted/80 transition-colors">
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">Thatched Roof Chimney Regulations 2025</h3>
                    <p className="text-muted-foreground text-sm">Complete guide to 2025 chimney regulations and compliance.</p>
                  </Link>
                  <Link href="/blog/reduce-thatched-cottage-insurance-cost" className="group bg-muted rounded-lg p-4 hover:bg-muted/80 transition-colors">
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">7 Ways to Reduce Insurance Costs</h3>
                    <p className="text-muted-foreground text-sm">Practical steps to lower your thatched property insurance premium.</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-muted section-padding">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Get a Quote for Your Somerset Thatched Property
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Protect Somerset's thatched heritage with specialist insurance designed for the county's unique property landscape.
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

