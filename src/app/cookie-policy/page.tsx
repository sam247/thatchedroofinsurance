import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cookie Policy | Thatched Roof Insurance",
  description:
    "Learn about how Thatched Roof Insurance uses cookies on our website. Understand what cookies are, how we use them, and how to manage your cookie preferences.",
  alternates: {
    canonical: "https://thatchedroofinsurance.co.uk/cookie-policy",
  },
  openGraph: {
    title: "Cookie Policy | Thatched Roof Insurance",
    description:
      "Learn about how Thatched Roof Insurance uses cookies on our website. Understand what cookies are, how we use them, and how to manage your cookie preferences.",
    url: "https://thatchedroofinsurance.co.uk/cookie-policy",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Cookie Policy | Thatched Roof Insurance",
    description:
      "Learn about how Thatched Roof Insurance uses cookies on our website. Understand what cookies are, how we use them, and how to manage your cookie preferences.",
  },
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header mode="light" />
      <main className="container-custom py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Cookie Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2025</p>

          <div className="prose prose-lg max-w-none space-y-8 text-foreground">
            <section>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">1. What Are Cookies?</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the website owners.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Cookies allow a website to recognise your device and store some information about your preferences or past actions. This helps us provide you with a better experience when you browse our website and allows us to improve our services.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">2. How We Use Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use cookies on our website for the following purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4 ml-4">
                <li><strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.</li>
                <li><strong>Analytics Cookies:</strong> We use analytics cookies to understand how visitors interact with our website. This helps us improve the website's performance and user experience.</li>
                <li><strong>Functional Cookies:</strong> These cookies allow the website to remember choices you make (such as your username, language, or region) and provide enhanced, personalised features.</li>
                <li><strong>Marketing Cookies:</strong> These cookies are used to track visitors across websites to display relevant advertisements and measure the effectiveness of our marketing campaigns.</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">3. Types of Cookies We Use</h2>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">3.1 Strictly Necessary Cookies</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                These cookies are essential for you to browse the website and use its features. Without these cookies, services you have requested cannot be provided. These cookies do not store any personally identifiable information.
              </p>

              <h3 className="font-serif text-xl font-semibold text-foreground mb-3 mt-6">3.2 Performance Cookies</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                These cookies collect information about how you use our website, such as which pages you visit most often. This data helps us optimise our website and improve the user experience. All information these cookies collect is aggregated and anonymous.
              </p>

              <h3 className="font-serif text-xl font-semibold text-foreground mb-3 mt-6">3.3 Functionality Cookies</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                These cookies allow the website to remember choices you make and provide enhanced, more personal features. They may also be used to provide services you have requested such as watching a video or commenting on a blog.
              </p>

              <h3 className="font-serif text-xl font-semibold text-foreground mb-3 mt-6">3.4 Targeting/Advertising Cookies</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                These cookies are used to deliver advertisements that are more relevant to you and your interests. They are also used to limit the number of times you see an advertisement and help measure the effectiveness of advertising campaigns.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">4. Third-Party Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website, deliver advertisements, and so on. These third-party cookies may include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4 ml-4">
                <li>Google Analytics cookies for website analytics</li>
                <li>Social media cookies for sharing content</li>
                <li>Advertising network cookies for targeted advertising</li>
              </ul>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">5. Managing Your Cookie Preferences</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by setting your preferences in your browser settings.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit{" "}
                <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">
                  www.allaboutcookies.org
                </a>.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Please note that if you choose to disable cookies, some features of our website may not function properly, and your experience may be affected.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">6. Changes to This Cookie Policy</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our business operations. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">7. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
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

