import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { MapPin, Home, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Thatched Roof Insurance Cambridgeshire | Specialist Cover for Cambridgeshire Properties",
  description:
    "Specialist thatched roof insurance for Cambridgeshire properties. Cambridgeshire has approximately 785 thatched roofs, part of East Anglia's secondary concentration. Get expert cover for your Cambridgeshire thatched property.",
  alternates: {
    canonical: "https://thatchedroofinsurance.co.uk/thatched-roof-insurance-cambridgeshire",
  },
  openGraph: {
    title: "Thatched Roof Insurance Cambridgeshire | Specialist Cover",
    description:
      "Specialist thatched roof insurance for Cambridgeshire properties. Cambridgeshire has approximately 785 thatched roofs.",
    url: "https://thatchedroofinsurance.co.uk/thatched-roof-insurance-cambridgeshire",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thatched Roof Insurance Cambridgeshire",
    description: "Specialist cover for Cambridgeshire's thatched properties.",
  },
};

export default function CambridgeshirePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header mode="light" />
      <main>
        <section className="container-custom pt-8">
          <Breadcrumbs items={[{ label: "Thatched roof insurance", href: "/" }, { label: "Locations", href: "/locations" }, { label: "Cambridgeshire", href: "/thatched-roof-insurance-cambridgeshire" }]} />
        </section>
        <section className="bg-muted py-12 md:py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Cambridgeshire</span>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
                Thatched Roof Insurance in Cambridgeshire
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Cambridgeshire records approximately 785 thatched roofs, forming part of East Anglia's secondary concentration of thatched properties. Like Norfolk, Cambridgeshire is distinguished by its use of water reed thatch rather than wheat straw.
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
                  <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">Cambridgeshire's Thatched Heritage</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Cambridgeshire forms part of East Anglia's secondary concentration of thatched properties, with approximately 785 thatched roofs recorded across the county. The area's fenland character and proximity to reed-growing areas influence the thatching materials used.
                  </p>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>~785 thatched roofs across the county</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Part of East Anglia's secondary concentration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Water reed thatch tradition</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <Home className="w-8 h-8 text-primary mb-4" />
                  <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">Water Reed Thatch in Cambridgeshire</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Like Norfolk, Cambridgeshire's thatched properties use water reed thatch rather than wheat straw, reflecting the availability of reed-growing areas in the fens and proximity to reed sources. Water reed thatch typically has superior durability and longevity compared to wheat reed.
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Understanding water reed thatch characteristics is essential for accurate insurance cover. Learn about <Link href="/blog/how-long-does-a-thatched-roof-last" className="text-primary font-semibold hover:underline">thatched roof lifespan</Link> and <Link href="/blog/thatched-roof-cost-perm2" className="text-primary font-semibold hover:underline">costs</Link>.
                  </p>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-8 mb-8">
                <Shield className="w-8 h-8 text-primary mb-4" />
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Insurance Considerations for Cambridgeshire Thatched Properties</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Cambridgeshire's water reed thatched properties present specific insurance considerations:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Water reed thatch typically has higher material costs than wheat reed</li>
                    <li>Longer lifespan (35-40 years) affects maintenance and replacement schedules</li>
                    <li>Fenland locations may face specific weather considerations</li>
                    <li>Many properties are listed, requiring sympathetic restoration</li>
                    <li>Traditional building methods and materials must be used for repairs</li>
                  </ul>
                  <p>
                    Our specialist policies understand these Cambridgeshire-specific requirements and work with insurers who appreciate the county's unique water reed thatched property landscape.
                  </p>
                </div>
              </div>

              <div className="bg-muted rounded-xl p-8">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Getting Insurance for Your Cambridgeshire Thatched Property</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Whether your Cambridgeshire thatched property is in the fens, near Cambridge, or in one of Cambridgeshire's historic villages, we can help you find appropriate insurance cover. Our team understands Cambridgeshire's water reed thatched property market and can guide you through:
                </p>
                <ul className="space-y-3 text-muted-foreground">
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
                    <span>Cover for fenland and rural locations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Understanding listed building requirements</span>
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
                Get a Quote for Your Cambridgeshire Thatched Property
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Protect Cambridgeshire's water reed thatched heritage with specialist insurance designed for the county's unique property landscape.
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

