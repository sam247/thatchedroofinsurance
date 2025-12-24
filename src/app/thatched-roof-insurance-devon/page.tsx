import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { MapPin, Home, Shield, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Thatched Roof Insurance Devon | Specialist Cover for Devon Properties",
  description:
    "Specialist thatched roof insurance for Devon properties. Devon has ~4,000 thatched buildings with 23% of listed buildings being thatched - the highest percentage in England. Expert cover for Devon's medieval thatched heritage.",
  alternates: {
    canonical: "https://thatchedroofinsurance.co.uk/thatched-roof-insurance-devon",
  },
  openGraph: {
    title: "Thatched Roof Insurance Devon | Specialist Cover",
    description:
      "Specialist thatched roof insurance for Devon properties. Devon has 23% of listed buildings as thatched - the highest percentage in England.",
    url: "https://thatchedroofinsurance.co.uk/thatched-roof-insurance-devon",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thatched Roof Insurance Devon",
    description: "Specialist cover for Devon's 4,000+ thatched buildings including medieval thatch.",
  },
};

export default function DevonPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header mode="light" />
      <main>
        <section className="container-custom pt-8">
          <Breadcrumbs items={[{ label: "Devon", href: "/thatched-roof-insurance-devon" }]} />
        </section>
        <section className="bg-muted py-12 md:py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Devon</span>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
                Thatched Roof Insurance for Devon Properties
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Devon contains approximately 4,000 thatched buildings, with 23% of its listed buildings being thatched - the highest percentage of any English county. Devon also holds more smoke-blackened medieval thatch than anywhere else in the world.
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
                  <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">Devon's Exceptional Thatched Heritage</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Devon is distinguished by having the highest percentage of listed buildings that are thatched (23%) of any English county. The county contains approximately 4,000 thatched buildings, making it one of the most significant thatched property areas in Britain.
                  </p>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>~4,000 thatched buildings across the county</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>23% of listed buildings are thatched (highest in England)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>600+ years of unbroken thatching tradition</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-xl p-6">
                  <Home className="w-8 h-8 text-primary mb-4" />
                  <h2 className="font-serif text-2xl font-semibold text-foreground mb-3">Medieval Thatched Heritage</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Devon contains more smoke-blackened medieval thatch than anywhere else in the world, with several hundred buildings retaining base coats from the medieval period. This continuity reflects Devon's unbroken thatching tradition spanning over 600 years.
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Properties with medieval thatch require specialist understanding and appropriate insurance cover. Our team understands the unique value and requirements of these historic structures.
                  </p>
                </div>
              </div>

              <div className="bg-warning/10 border-l-4 border-warning p-6 rounded-r-lg mb-8">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-warning flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Thatching Materials in Devon</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Like Dorset, Devon's thatched properties predominantly use combed wheat reed, reflecting the county's historical agricultural practices. This material choice affects both the appearance and maintenance requirements of Devon's thatched roofs. Understanding your property's thatch type is essential for accurate insurance cover. Learn about <Link href="/blog/how-long-does-a-thatched-roof-last" className="text-primary font-semibold hover:underline">how long thatched roofs last</Link> and maintenance requirements.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-8 mb-8">
                <Shield className="w-8 h-8 text-primary mb-4" />
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Insurance Considerations for Devon Thatched Properties</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Devon's high concentration of thatched properties, combined with many properties containing medieval thatch, creates unique insurance considerations:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Historic thatch may require specialist restoration techniques and materials</li>
                    <li>Medieval base coats add significant value and complexity to rebuild assessments</li>
                    <li>Rural locations across Dartmoor, Exmoor, and coastal areas affect fire service access</li>
                    <li>Many properties are Grade I or II listed, requiring sympathetic restoration</li>
                    <li>Traditional building methods and materials must be used for repairs</li>
                  </ul>
                  <p>
                    Our specialist policies understand these Devon-specific requirements and work with insurers who appreciate the county's exceptional thatched heritage.
                  </p>
                </div>
              </div>

              <div className="bg-muted rounded-xl p-8">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">Getting Insurance for Your Devon Thatched Property</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Whether your Devon thatched property is on Dartmoor, in the South Hams, along the Jurassic Coast, or in one of Devon's picturesque villages, we can help you find appropriate insurance cover. Our team understands Devon's thatched property market and can guide you through:
                </p>
                <p className="text-muted-foreground text-sm mb-4">
                  Explore our <Link href="/buildings-insurance" className="text-primary font-semibold hover:underline">buildings insurance</Link>, <Link href="/contents-insurance" className="text-primary font-semibold hover:underline">contents insurance</Link>, or <Link href="/combined-insurance" className="text-primary font-semibold hover:underline">combined cover</Link> options. Also see coverage for nearby areas like <Link href="/thatched-roof-insurance-dorset" className="text-primary font-semibold hover:underline">Dorset</Link> and <Link href="/thatched-roof-insurance-somerset" className="text-primary font-semibold hover:underline">Somerset</Link>.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Accurate rebuild cost assessments for properties with medieval thatch</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Understanding listed building requirements for Grade I and II properties</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Fire safety considerations for rural Devon locations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Cover that recognises the value of historic thatch</span>
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
                Get a Quote for Your Devon Thatched Property
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Protect Devon's exceptional thatched heritage with specialist insurance designed for the county's unique property landscape.
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

