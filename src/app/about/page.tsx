import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Shield, Award, Users, Building2, Heart, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Thatched Roof Insurance Specialists",
  description:
    "Learn about Thatched Roof Insurance - specialist brokers with 30+ years of experience protecting thatched properties across the UK. Expert knowledge, dedicated service, and comprehensive cover.",
  alternates: {
    canonical: "https://thatchedroofinsurance.co.uk/about",
  },
  openGraph: {
    title: "About Us | Thatched Roof Insurance Specialists",
    description:
      "Learn about Thatched Roof Insurance - specialist brokers with 30+ years of experience protecting thatched properties across the UK. Expert knowledge, dedicated service, and comprehensive cover.",
    url: "https://thatchedroofinsurance.co.uk/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Thatched Roof Insurance Specialists",
    description:
      "Learn about Thatched Roof Insurance - specialist brokers with 30+ years of experience protecting thatched properties across the UK.",
  },
};

const values = [
  {
    icon: Shield,
    title: "Specialist Expertise",
    description: "We understand the unique risks and requirements of thatched properties, from fire safety to traditional building methods.",
  },
  {
    icon: Heart,
    title: "Passion for Heritage",
    description: "We're committed to protecting Britain's architectural heritage, ensuring these beautiful properties are properly insured.",
  },
  {
    icon: Award,
    title: "Excellence in Service",
    description: "Rated excellent by our customers, we pride ourselves on providing outstanding service and support throughout your policy.",
  },
  {
    icon: Users,
    title: "Personal Approach",
    description: "Every property is unique, and we take the time to understand your specific needs and find the right cover for you.",
  },
];

const stats = [
  { number: "30+", label: "Years Experience" },
  { number: "15,000+", label: "Homes Protected" },
  { number: "4.9/5", label: "Customer Rating" },
  { number: "98%", label: "Claims Satisfaction" },
];

const team = [
  {
    name: "Specialist Underwriting Team",
    description: "Our experienced underwriters understand the complexities of thatched property insurance and work with leading specialist insurers.",
  },
  {
    name: "Claims Specialists",
    description: "Dedicated claims handlers who know how to navigate the unique challenges of thatched property claims, from fire damage to traditional repairs.",
  },
  {
    name: "Customer Service Team",
    description: "Friendly, knowledgeable staff who are here to help with quotes, policy questions, and ongoing support throughout your insurance journey.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header mode="light" />
      <main>
        {/* Breadcrumbs */}
        <section className="container-custom pt-8">
          <Breadcrumbs items={[{ label: "About Us", href: "/about" }]} />
        </section>
        {/* Hero Section */}
        <section className="bg-muted py-12 md:py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Us</span>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
                Specialist Insurance for Thatched Properties
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                With over 30 years of experience, we're the UK's leading specialist brokers for thatched property insurance. We understand the unique challenges of protecting these beautiful heritage homes.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground text-sm md:text-base">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                    Our Story
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      Thatched Roof Insurance was founded with a simple mission: to provide specialist insurance cover for one of Britain's most cherished architectural features. We recognised that standard home insurance policies often failed to adequately protect thatched properties, leaving owners with inadequate cover or facing exclusions.
                    </p>
                    <p>
                      Over three decades, we've built relationships with specialist insurers who understand the unique risks of thatched roofs - from fire safety requirements to the specialist trades needed for repairs. We've helped thousands of property owners protect their heritage homes with comprehensive, appropriate insurance.
                    </p>
                    <p>
                      Today, we're the UK's leading specialist broker for thatched property insurance, combining deep expertise with a personal approach. We understand that every thatched property is unique, and we take the time to understand your specific needs and find the right cover for you.
                    </p>
                  </div>
                </div>
                <div className="relative h-80 rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?q=80&w=2070&auto=format&fit=crop"
                    alt="Traditional thatched cottage in English countryside"
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why We're Different */}
        <section className="bg-muted section-padding">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why We're Different
              </h2>
              <p className="text-muted-foreground text-lg">
                We're not just another insurance broker. We're specialists who truly understand thatched properties.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-6 text-center">
                  <value.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Our Expert Team
                </h2>
                <p className="text-muted-foreground text-lg">
                  Our team brings together decades of experience in specialist property insurance and thatched building expertise.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {team.map((member, index) => (
                  <div key={index} className="bg-card border border-border rounded-xl p-6">
                    <Building2 className="w-8 h-8 text-primary mb-4" />
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{member.name}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What We Cover */}
        <section className="bg-muted section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                  What We Cover
                </h2>
                <p className="text-muted-foreground text-lg">
                  Comprehensive insurance solutions for all types of thatched properties.
                </p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-8">
                <ul className="space-y-4">
                  {[
                    "Buildings insurance for thatched properties",
                    "Contents insurance for period homes",
                    "Combined buildings and contents cover",
                    "Listed building insurance (Grade I, II, II*)",
                    "Holiday let insurance for thatched properties",
                    "Commercial thatched property insurance",
                    "Outbuildings and boundary walls",
                    "Alternative accommodation cover",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Protect Your Thatched Property?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Get a quote from our specialist team today and discover why thousands of thatched property owners trust us with their insurance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 py-3 font-semibold hover:bg-primary/90 transition-colors"
                >
                  Get a Quote
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg border border-border bg-background text-foreground px-6 py-3 font-semibold hover:bg-muted transition-colors"
                >
                  Contact Us
                </Link>
              </div>
              <div className="mt-6 text-center">
                <p className="text-muted-foreground text-sm mb-3">Explore our services:</p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Link href="/buildings-insurance" className="text-primary font-semibold text-sm hover:underline">Buildings Insurance</Link>
                  <span className="text-muted-foreground">•</span>
                  <Link href="/contents-insurance" className="text-primary font-semibold text-sm hover:underline">Contents Insurance</Link>
                  <span className="text-muted-foreground">•</span>
                  <Link href="/combined-insurance" className="text-primary font-semibold text-sm hover:underline">Combined Cover</Link>
                  <span className="text-muted-foreground">•</span>
                  <Link href="/locations" className="text-primary font-semibold text-sm hover:underline">Coverage Areas</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

