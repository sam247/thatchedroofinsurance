import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { MapPin, Home, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Thatched Roof Insurance Norfolk | Specialist Cover for Norfolk Properties",
  description:
    "Specialist thatched roof insurance for Norfolk properties. Norfolk uses water reed thatch from the Norfolk Broads, creating a distinct regional character. Get expert cover for your Norfolk thatched property.",
  alternates: {
    canonical: "https://thatchedroofinsurance.co.uk/thatched-roof-insurance-norfolk",
  },
  openGraph: {
    title: "Thatched Roof Insurance Norfolk | Specialist Cover",
    description:
      "Specialist thatched roof insurance for Norfolk properties. Norfolk uses water reed thatch from the Norfolk Broads.",
    url: "https://thatchedroofinsurance.co.uk/thatched-roof-insurance-norfolk",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thatched Roof Insurance Norfolk",
    description: "Specialist cover for Norfolk's water reed thatched properties.",
  },
};

export default function NorfolkPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header mode="light" />
      <main>
        <section className="container-custom pt-8">
          <Breadcrumbs items={[{ label: "Thatched roof insurance", href: "/" }, { label: "Locations", href: "/locations" }, { label: "Norfolk", href: "/thatched-roof-insurance-norfolk" }]} />
        </section>
        <section className="bg-muted py-12 md:py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Norfolk</span>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
                Thatched Roof Insurance in Norfolk
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Norfolk forms part of East Anglia's secondary concentration of thatched properties. Norfolk is distinguished by its use of water reed thatch, sourced from the Norfolk Broads, creating a distinct regional character different from the wheat reed used in the southwest.
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
                  <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">Norfolk's Water Reed Thatched Heritage</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Norfolk is distinguished by its use of water reed thatch, sourced from the unique ecosystem of the Norfolk Broads. This creates a distinct regional character different from the wheat reed used in the southwest counties. Water reed thatch typically has superior durability and longevity compared to wheat reed.
                  </p>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Water reed thatch from Norfolk Broads</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Distinct regional character from southwest</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Superior durability and longevity</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <Home className="w-8 h-8 text-primary mb-4" />
                  <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">Thatching Materials in Norfolk</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Norfolk's thatched properties use water reed, which benefits from the unique ecosystem of the Norfolk Broads. Water reed thatch typically lasts 35-40 years with proper maintenance, longer than wheat reed, and has excellent performance in the UK climate where moisture management is critical.
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Understanding water reed thatch characteristics is essential for accurate insurance cover. Learn about <Link href="/blog/how-long-does-a-thatched-roof-last" className="text-primary font-semibold hover:underline">thatched roof lifespan</Link> and <Link href="/blog/thatched-roof-cost-perm2" className="text-primary font-semibold hover:underline">costs</Link>.
                  </p>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-8 mb-8">
                <Shield className="w-8 h-8 text-primary mb-4" />
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Insurance Considerations for Norfolk Thatched Properties</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Norfolk's water reed thatched properties present specific insurance considerations:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Water reed thatch typically has higher material costs than wheat reed. Learn about <Link href="/blog/thatched-roof-cost-perm2" className="text-primary font-semibold hover:underline">thatched roof costs per square metre</Link>.</li>
                    <li>Longer lifespan (35-40 years) affects maintenance and replacement schedules. See our guide on <Link href="/blog/how-long-does-a-thatched-roof-last" className="text-primary font-semibold hover:underline">how long thatched roofs last</Link>.</li>
                    <li>Coastal locations may face additional weather exposure</li>
                    <li>Many properties are listed, requiring sympathetic restoration. See our <Link href="/blog/grade-2-thatched-cottage-insruance-checklist" className="text-primary font-semibold hover:underline">Grade II thatched cottage insurance checklist</Link>.</li>
                    <li>Traditional building methods and materials must be used for repairs</li>
                    <li>Proximity to Norfolk Broads may affect rebuild cost assessments</li>
                    <li>Fire safety is critical - see <Link href="/blog/thatched-roof-fire-risk-insurer-checks" className="text-primary font-semibold hover:underline">what insurers look for regarding fire risk</Link></li>
                  </ul>
                  <p>
                    Our specialist policies understand these Norfolk-specific requirements and work with insurers who appreciate the county's unique water reed thatched property landscape. Understanding <Link href="/blog/why-is-thatched-cottage-insurance-expensive" className="text-primary font-semibold hover:underline">why thatched cottage insurance is expensive</Link> helps explain the specialist nature of cover needed.
                  </p>
                </div>
              </div>

              <div className="bg-muted rounded-xl p-8 mb-8">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Getting Insurance for Your Norfolk Thatched Property</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Whether your Norfolk thatched property is near the Broads, on the coast, or in one of Norfolk's historic villages, we can help you find appropriate insurance cover. Our team understands Norfolk's water reed thatched property market and can guide you through:
                </p>
                <ul className="space-y-3 text-muted-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Accurate rebuild cost assessments for water reed thatch</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Understanding the longer lifespan and maintenance requirements of water reed</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Cover for coastal and Broads-adjacent properties</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Understanding listed building requirements and <Link href="/blog/thatched-roof-chimney-regulations" className="text-primary font-semibold hover:underline">chimney regulations</Link></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Ways to <Link href="/blog/reduce-thatched-cottage-insurance-cost" className="text-primary font-semibold hover:underline">reduce insurance costs</Link> through fire safety and maintenance</span>
                  </li>
                </ul>
              </div>

              {/* Related Resources */}
              <div className="bg-card border border-border rounded-xl p-8">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Helpful Resources for Norfolk Thatched Property Owners</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Explore our expert guides to help you understand and manage your Norfolk thatched property insurance:
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
                Get a Quote for Your Norfolk Thatched Property
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Protect Norfolk's water reed thatched heritage with specialist insurance designed for the county's unique property landscape.
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

