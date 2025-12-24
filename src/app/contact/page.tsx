import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us | Thatched Roof Insurance",
  description:
    "Get in touch with Thatched Roof Insurance. Call us on 01234 567 890, email info@thatchedroofinsurance.co.uk, or visit our office in Gloucestershire. We're here to help with your thatched property insurance needs.",
  alternates: {
    canonical: "https://thatchedroofinsurance.co.uk/contact",
  },
  openGraph: {
    title: "Contact Us | Thatched Roof Insurance",
    description:
      "Get in touch with Thatched Roof Insurance. Call us on 01234 567 890, email info@thatchedroofinsurance.co.uk, or visit our office in Gloucestershire.",
    url: "https://thatchedroofinsurance.co.uk/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Thatched Roof Insurance",
    description:
      "Get in touch with Thatched Roof Insurance. We're here to help with your thatched property insurance needs.",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header mode="light" />
      <main>
        {/* Breadcrumbs */}
        <section className="container-custom pt-8">
          <Breadcrumbs items={[{ label: "Contact Us", href: "/contact" }]} />
        </section>
        {/* Hero Section */}
        <section className="bg-muted py-12 md:py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Contact Us</span>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
                Get in Touch
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our friendly team is here to help with quotes, policy questions, claims, or any other enquiries about your thatched property insurance.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <Phone className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Phone</h3>
                <p className="text-muted-foreground text-sm mb-3">Call us Monday to Friday</p>
                <a
                  href="tel:01234567890"
                  className="text-primary font-semibold text-lg hover:underline block"
                >
                  01234 567 890
                </a>
                <p className="text-muted-foreground text-xs mt-2">9am - 5pm</p>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <Mail className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Email</h3>
                <p className="text-muted-foreground text-sm mb-3">Send us an email</p>
                <a
                  href="mailto:info@thatchedroofinsurance.co.uk"
                  className="text-primary font-semibold hover:underline block break-all"
                >
                  info@thatchedroofinsurance.co.uk
                </a>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 text-center">
                <MapPin className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Visit Us</h3>
                <p className="text-muted-foreground text-sm mb-3">Our office</p>
                <address className="text-muted-foreground text-sm not-italic">
                  123 Insurance House<br />
                  Cotswold Way<br />
                  Gloucestershire<br />
                  GL1 2AB
                </address>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="bg-muted section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div>
                  <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Send Us a Message</h2>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="">Select a subject</option>
                        <option value="quote">Request a Quote</option>
                        <option value="existing-policy">Existing Policy Enquiry</option>
                        <option value="claim">Make a Claim</option>
                        <option value="general">General Enquiry</option>
                        <option value="complaint">Complaint</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full rounded-lg bg-primary text-primary-foreground px-6 py-3 font-semibold hover:bg-primary/90 transition-colors"
                    >
                      Send Message
                    </button>
                  </form>
                </div>

                {/* Additional Info */}
                <div>
                  <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Other Ways to Reach Us</h2>
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <MessageSquare className="w-5 h-5 text-primary" />
                        <h3 className="font-serif text-lg font-semibold text-foreground">Live Chat</h3>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        Use our live chat feature on the website for instant answers to your questions. Available during business hours.
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <Clock className="w-5 h-5 text-primary" />
                        <h3 className="font-serif text-lg font-semibold text-foreground">Opening Hours</h3>
                      </div>
                      <div className="text-muted-foreground text-sm space-y-1">
                        <p><strong>Monday - Friday:</strong> 9:00am - 5:00pm</p>
                        <p><strong>Saturday:</strong> Closed</p>
                        <p><strong>Sunday:</strong> Closed</p>
                        <p className="mt-3 text-xs">Emergency claims line available 24/7</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-serif text-lg font-semibold text-foreground mb-3">For Specific Enquiries</h3>
                      <div className="text-muted-foreground text-sm space-y-2">
                        <p>
                          <strong>Quotes:</strong> <a href="mailto:quotes@thatchedroofinsurance.co.uk" className="text-primary hover:underline">quotes@thatchedroofinsurance.co.uk</a>
                        </p>
                        <p>
                          <strong>Claims:</strong> <a href="mailto:claims@thatchedroofinsurance.co.uk" className="text-primary hover:underline">claims@thatchedroofinsurance.co.uk</a>
                        </p>
                        <p>
                          <strong>Complaints:</strong> <a href="mailto:complaints@thatchedroofinsurance.co.uk" className="text-primary hover:underline">complaints@thatchedroofinsurance.co.uk</a>
                        </p>
                      </div>
                    </div>

                    <div className="bg-card border border-border rounded-lg p-6">
                      <h3 className="font-serif text-lg font-semibold text-foreground mb-3">Need a Quote?</h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        Get an indicative quote in minutes using our online form.
                      </p>
                      <Link
                        href="/quote"
                        className="inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-4 py-2 text-sm font-semibold hover:bg-primary/90 transition-colors mb-3"
                      >
                        Get a Quote
                      </Link>
                      <div className="pt-3 border-t border-border">
                        <p className="text-muted-foreground text-xs mb-2">Also explore:</p>
                        <div className="flex flex-wrap gap-2">
                          <Link href="/about" className="text-primary font-semibold text-xs hover:underline">About Us</Link>
                          <span className="text-muted-foreground text-xs">•</span>
                          <Link href="/buildings-insurance" className="text-primary font-semibold text-xs hover:underline">Buildings</Link>
                          <span className="text-muted-foreground text-xs">•</span>
                          <Link href="/locations" className="text-primary font-semibold text-xs hover:underline">Locations</Link>
                        </div>
                      </div>
                    </div>
                  </div>
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

