import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | Thatched Roof Insurance",
  description: "Terms and conditions for using Thatched Roof Insurance services.",
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header mode="light" />
      <main className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2025</p>

          <div className="prose prose-lg max-w-none space-y-8 text-foreground">
            <section>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">1. Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                By accessing or using the Thatched Roof Insurance website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">2. Use License</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Permission is granted to temporarily access the materials on Thatched Roof Insurance's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4 ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">3. Insurance Services</h2>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">3.1 Quote Services</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The quotes provided through our website are indicative only and do not constitute an offer of insurance. Final terms, conditions, and premiums are subject to underwriting approval and may differ from any indicative quote provided.
              </p>

              <h3 className="font-serif text-xl font-semibold text-foreground mb-3 mt-6">3.2 Broker Services</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We act as an insurance broker, working with multiple specialist insurers to find you the best quote. We do not underwrite insurance policies ourselves. All insurance policies are provided by third-party insurers, and the terms and conditions of those policies will apply.
              </p>

              <h3 className="font-serif text-xl font-semibold text-foreground mb-3 mt-6">3.3 Accuracy of Information</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You are responsible for providing accurate and complete information when requesting quotes or applying for insurance. Providing false or misleading information may result in your policy being voided or claims being rejected.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">4. Disclaimer</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The materials on Thatched Roof Insurance's website are provided on an 'as is' basis. Thatched Roof Insurance makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Further, Thatched Roof Insurance does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">5. Limitations</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                In no event shall Thatched Roof Insurance or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Thatched Roof Insurance's website, even if Thatched Roof Insurance or a Thatched Roof Insurance authorised representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">6. Regulatory Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Thatched Roof Insurance is authorised and regulated by the Financial Conduct Authority (FCA). Our FCA registration number and regulatory status can be provided upon request.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We are required to provide you with certain information about our services and the insurance products we arrange. This information will be provided as part of the quote and application process.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">7. Complaints</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have a complaint about our services, please contact us in the first instance. We have a formal complaints procedure and will investigate your complaint promptly. If you are not satisfied with our response, you may refer your complaint to the Financial Ombudsman Service.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">8. Revisions and Errata</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The materials appearing on Thatched Roof Insurance's website could include technical, typographical, or photographic errors. Thatched Roof Insurance does not warrant that any of the materials on its website are accurate, complete, or current. Thatched Roof Insurance may make changes to the materials contained on its website at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">9. Links</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Thatched Roof Insurance has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Thatched Roof Insurance of the site. Use of any such linked website is at the user's own risk.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">10. Modifications</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Thatched Roof Insurance may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">11. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                These terms and conditions are governed by and construed in accordance with the laws of England and Wales. Any disputes relating to these terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">12. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For questions about these Terms of Service, please contact us:
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

