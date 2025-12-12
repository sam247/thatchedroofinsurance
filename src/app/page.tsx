import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import WhyChooseUs from "@/components/WhyChooseUs";
import WhatWeCover from "@/components/WhatWeCover";
import ClaimsProcess from "@/components/ClaimsProcess";
import CustomerReviews from "@/components/CustomerReviews";
import FAQSection from "@/components/FAQSection";
import ArticlesSection from "@/components/ArticlesSection";
import QuoteCTA from "@/components/QuoteCTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="main-content">
        <Hero />
        <TrustBar />
        <WhyChooseUs />
        <WhatWeCover />
        <ClaimsProcess />
        <CustomerReviews />
        <FAQSection />
        <ArticlesSection />
        <QuoteCTA />
      </main>
      <Footer />
    </div>
  );
}

