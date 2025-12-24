import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Building2, Shield, TrendingUp, Users, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Insurance Partners | Thatched Roof Insurance",
  description:
    "We work with multiple specialist brokers and insurers to find you the best thatched roof insurance quote. Access exclusive rates and comprehensive cover.",
  keywords: [
    "thatched roof insurance brokers",
    "insurance partners",
    "specialist brokers",
    "thatched property insurance",
  ],
  alternates: {
    canonical: "https://thatchedroofinsurance.co.uk/partners",
  },
  openGraph: {
    title: "Our Insurance Partners | Thatched Roof Insurance",
    description:
      "We work with multiple specialist brokers and insurers to find you the best thatched roof insurance quote. Access exclusive rates and comprehensive cover.",
    url: "https://thatchedroofinsurance.co.uk/partners",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Insurance Partners | Thatched Roof Insurance",
    description:
      "We work with multiple specialist brokers and insurers to find you the best thatched roof insurance quote. Access exclusive rates and comprehensive cover.",
  },
};

const benefits = [
  {
    icon: Building2,
    title: "Multiple Broker Network",
    description: "We partner with leading specialist brokers who understand the unique requirements of thatched properties.",
  },
  {
    icon: Shield,
    title: "Exclusive Rates",
    description: "Access to competitive rates through our established relationships with specialist insurers.",
  },
  {
    icon: TrendingUp,
    title: "Best Price Guarantee",
    description: "We compare quotes across our network to ensure you receive the most competitive premium available.",
  },
  {
    icon: Users,
    title: "Expert Knowledge",
    description: "Our partners specialise in thatched property insurance, ensuring you get the right cover for your needs.",
  },
];

const partnerFeatures = [
  "Access to multiple specialist thatched roof insurers",
  "Competitive quotes from our broker network",
  "Expert advice on policy terms and conditions",
  "Ongoing support throughout your policy period",
  "Claims handling through specialist teams",
  "Regular policy reviews to ensure continued value",
];

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header mode="light" />
      <main>
        {/* Hero Section */}
        <section className="bg-muted py-12 md:py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Our Partners</span>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
                Working with Specialist Brokers to Get You the Best Quote
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We work with a network of trusted specialist brokers and insurers to ensure you receive the most competitive quote for your thatched property insurance.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-6">
                  <benefit.icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-muted section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                  How Our Partner Network Works
                </h2>
                <p className="text-muted-foreground text-lg">
                  We leverage our relationships with specialist brokers to find you the best cover at the best price.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    1
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">You Request a Quote</h3>
                  <p className="text-muted-foreground text-sm">
                    Complete our simple form with details about your thatched property.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    2
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">We Search Our Network</h3>
                  <p className="text-muted-foreground text-sm">
                    We compare quotes from multiple specialist brokers in our network.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    3
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">You Get the Best Quote</h3>
                  <p className="text-muted-foreground text-sm">
                    Receive the most competitive quote tailored to your specific needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features List */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-center mb-8">
                What You Get with Our Partner Network
              </h2>
              <div className="bg-card border border-border rounded-2xl p-8">
                <ul className="space-y-4">
                  {partnerFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-muted section-padding">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Get Your Best Quote?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Let us search our network of specialist brokers to find you the most competitive thatched roof insurance quote.
              </p>
              <Link
                href="/quote"
                className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 font-semibold hover:bg-primary/90 transition-colors"
              >
                Get Your Quote Now
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

