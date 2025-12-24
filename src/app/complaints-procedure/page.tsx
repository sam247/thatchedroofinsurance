import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { AlertCircle, FileText, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Complaints Procedure | Thatched Roof Insurance",
  description:
    "Learn about our complaints procedure and how to make a complaint about Thatched Roof Insurance services. We're committed to resolving any issues quickly and fairly.",
  alternates: {
    canonical: "https://thatchedroofinsurance.co.uk/complaints-procedure",
  },
  openGraph: {
    title: "Complaints Procedure | Thatched Roof Insurance",
    description:
      "Learn about our complaints procedure and how to make a complaint about Thatched Roof Insurance services. We're committed to resolving any issues quickly and fairly.",
    url: "https://thatchedroofinsurance.co.uk/complaints-procedure",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Complaints Procedure | Thatched Roof Insurance",
    description:
      "Learn about our complaints procedure and how to make a complaint about Thatched Roof Insurance services. We're committed to resolving any issues quickly and fairly.",
  },
};

export default function ComplaintsProcedurePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header mode="light" />
      <main className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Complaints Procedure</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2025</p>

          <div className="prose prose-lg max-w-none space-y-8 text-foreground">
            <section className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="font-serif text-xl font-semibold text-foreground mb-2">Our Commitment</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We are committed to providing excellent service to all our customers. If you are not satisfied with any aspect of our service, we want to hear from you so we can put things right. We take all complaints seriously and will investigate them thoroughly and fairly.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">1. How to Make a Complaint</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You can make a complaint to us in any of the following ways:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <h3 className="font-serif text-lg font-semibold text-foreground">By Phone</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-2">Call us on:</p>
                  <a href="tel:01234567890" className="text-primary font-semibold hover:underline">
                    01234 567 890
                  </a>
                  <p className="text-muted-foreground text-sm mt-2">Monday to Friday, 9am to 5pm</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <h3 className="font-serif text-lg font-semibold text-foreground">By Email</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-2">Email us at:</p>
                  <a href="mailto:complaints@thatchedroofinsurance.co.uk" className="text-primary font-semibold hover:underline">
                    complaints@thatchedroofinsurance.co.uk
                  </a>
                </div>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center gap-3 mb-3">
                  <FileText className="w-5 h-5 text-primary" />
                  <h3 className="font-serif text-lg font-semibold text-foreground">By Post</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-2">Write to us at:</p>
                <div className="text-muted-foreground text-sm">
                  <p><strong>Complaints Department</strong></p>
                  <p>Thatched Roof Insurance</p>
                  <p>123 Insurance House, Cotswold Way</p>
                  <p>Gloucestershire GL1 2AB</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">2. What Information to Include</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To help us investigate your complaint quickly and effectively, please provide:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4 ml-4">
                <li>Your name and contact details</li>
                <li>Your policy number (if applicable)</li>
                <li>A clear description of what went wrong</li>
                <li>What you would like us to do to resolve the issue</li>
                <li>Any relevant documents or correspondence</li>
                <li>The date(s) when the issue occurred</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">3. Our Complaints Process</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Step 1: Acknowledgment</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We will acknowledge your complaint within 5 working days of receiving it. We will provide you with a unique reference number and the name of the person handling your complaint.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Step 2: Investigation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We will investigate your complaint thoroughly. This may involve reviewing your file, speaking with staff members involved, and gathering any additional information needed. We aim to complete our investigation within 4 weeks.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Step 3: Response</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We will send you a written response explaining our findings and what we propose to do to resolve your complaint. If we need more time to investigate, we will keep you informed of our progress.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Step 4: Resolution</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    If we find that we have made a mistake or provided poor service, we will apologise and take appropriate action to put things right. This may include correcting any errors, providing compensation where appropriate, or improving our processes.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">4. Timescales</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We aim to resolve all complaints as quickly as possible:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4 ml-4">
                <li><strong>Simple complaints:</strong> Resolved within 5 working days</li>
                <li><strong>Standard complaints:</strong> Resolved within 4 weeks</li>
                <li><strong>Complex complaints:</strong> May take up to 8 weeks</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                If we cannot resolve your complaint within 8 weeks, we will write to you explaining why and provide an update on our progress.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">5. If You're Not Satisfied</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you are not satisfied with our final response, or if we have not resolved your complaint within 8 weeks, you have the right to refer your complaint to the Financial Ombudsman Service (FOS).
              </p>
              <div className="bg-muted rounded-lg p-6 space-y-3">
                <h3 className="font-serif text-xl font-semibold text-foreground">Financial Ombudsman Service</h3>
                <p className="text-muted-foreground text-sm">
                  The Financial Ombudsman Service is a free, independent service that can help resolve disputes between consumers and financial services firms.
                </p>
                <div className="text-muted-foreground text-sm space-y-1">
                  <p><strong>Website:</strong> <a href="https://www.financial-ombudsman.org.uk" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">www.financial-ombudsman.org.uk</a></p>
                  <p><strong>Phone:</strong> 0800 023 4567 (free from UK landlines and mobiles)</p>
                  <p><strong>Email:</strong> complaint.info@financial-ombudsman.org.uk</p>
                  <p><strong>Post:</strong> Financial Ombudsman Service, Exchange Tower, London E14 9SR</p>
                </div>
                <p className="text-muted-foreground text-sm mt-4">
                  You must refer your complaint to the Financial Ombudsman Service within 6 months of receiving our final response.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">6. Regulatory Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Thatched Roof Insurance is authorised and regulated by the Financial Conduct Authority (FCA). Our FCA registration number and regulatory status can be provided upon request.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The Financial Ombudsman Service is available to most consumers. However, if you are unsure whether you are eligible, please contact them directly or visit their website for more information.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">7. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions about our complaints procedure, please contact us:
              </p>
              <div className="bg-muted rounded-lg p-6 space-y-2 text-muted-foreground">
                <p><strong>Thatched Roof Insurance</strong></p>
                <p>123 Insurance House, Cotswold Way</p>
                <p>Gloucestershire GL1 2AB</p>
                <p>Email: complaints@thatchedroofinsurance.co.uk</p>
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

