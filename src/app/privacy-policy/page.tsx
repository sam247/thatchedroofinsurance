import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Thatched Roof Insurance",
  description:
    "Read our privacy policy to understand how Thatched Roof Insurance collects, uses, and protects your personal information in compliance with UK data protection laws.",
  alternates: {
    canonical: "https://thatchedroofinsurance.co.uk/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Thatched Roof Insurance",
    description:
      "Read our privacy policy to understand how Thatched Roof Insurance collects, uses, and protects your personal information in compliance with UK data protection laws.",
    url: "https://thatchedroofinsurance.co.uk/privacy-policy",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | Thatched Roof Insurance",
    description:
      "Read our privacy policy to understand how Thatched Roof Insurance collects, uses, and protects your personal information in compliance with UK data protection laws.",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header mode="light" />
      <main className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2025</p>

          <div className="prose prose-lg max-w-none space-y-8 text-foreground">
            <section>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Thatched Roof Insurance ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">2.1 Personal Information</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4 ml-4">
                <li>Request a quote for insurance</li>
                <li>Contact us via email, phone, or our website</li>
                <li>Subscribe to our newsletter or marketing communications</li>
                <li>Complete forms on our website</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-4">
                This information may include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4 ml-4">
                <li>Name and contact details (email address, phone number, postal address)</li>
                <li>Property information (postcode, property type, rebuild value)</li>
                <li>Insurance requirements and preferences</li>
                <li>Payment information (processed securely through third-party payment processors)</li>
              </ul>

              <h3 className="font-serif text-xl font-semibold text-foreground mb-3 mt-6">2.2 Automatically Collected Information</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                When you visit our website, we may automatically collect certain information about your device, including:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4 ml-4">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Pages you visit and time spent on pages</li>
                <li>Referring website addresses</li>
                <li>Device information</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4 ml-4">
                <li>Provide, operate, and maintain our insurance services</li>
                <li>Process your insurance quotes and applications</li>
                <li>Communicate with you about your insurance needs</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
                <li>Prevent fraud and ensure security</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">4. Sharing Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may share your information with:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4 ml-4">
                <li><strong>Insurance Brokers and Partners:</strong> To obtain quotes and arrange insurance policies on your behalf</li>
                <li><strong>Service Providers:</strong> Third-party companies that help us operate our business (e.g., payment processors, IT services)</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In connection with any merger, sale, or acquisition of our business</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell your personal information to third parties for their marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">5. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">6. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Under UK data protection laws, you have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4 ml-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to processing of your information</li>
                <li>Request restriction of processing</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                To exercise these rights, please contact us using the details provided below.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">7. Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our website uses cookies to enhance your experience. You can control cookies through your browser settings. For more information, please see our Cookie Policy.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">8. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We retain your personal information only for as long as necessary to fulfil the purposes outlined in this privacy policy, unless a longer retention period is required or permitted by law.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">9. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">10. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
              </p>
              <div className="bg-muted rounded-lg p-6 space-y-2 text-muted-foreground">
                <p><strong>Thatched Roof Insurance</strong></p>
                <p>123 Insurance House, Cotswold Way</p>
                <p>Gloucestershire GL1 2AB</p>
                <p>Email: info@thatchedroofinsurance.co.uk</p>
                <p>Phone: 01234 567 890</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

