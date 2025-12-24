import Script from "next/script";
import Link from "next/link";
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

const faqs = [
  {
    question: "Why do thatched properties need specialist insurance?",
    answer: "Thatched properties have unique risks that standard home insurance doesn't adequately cover. Thatch is more susceptible to fire damage, requires specialist repairs, and has higher rebuild costs. Our policies are specifically designed to address these unique requirements, with appropriate coverage limits and access to specialist contractors.",
  },
  {
    question: "What type of thatch do you cover?",
    answer: "We cover all types of thatch including water reed, combed wheat reed, long straw, and other regional thatching materials. Each type has different characteristics and fire resistance properties, which we take into account when calculating your premium.",
  },
  {
    question: "Do I need a lined chimney for insurance?",
    answer: "Yes, most insurers including ourselves require chimneys to be lined and regularly swept if you have open fires or wood burners. This is a crucial fire safety requirement for thatched properties. We'll need details about your chimney condition when providing a quote.",
  },
  {
    question: "How often should my chimney be swept?",
    answer: "For thatched properties, we recommend chimneys are swept at least twice a year if you use open fires or wood burners regularly – once before the heating season and once during. We may require evidence of regular sweeping as part of your policy terms.",
  },
  {
    question: "Can I have a wood burner in a thatched property?",
    answer: "Yes, but there are important safety requirements. Wood burners and multi-fuel stoves must be professionally installed by a HETAS registered installer, and your chimney must be properly lined. We'll need to know about your heating arrangements when quoting.",
  },
  {
    question: "What affects the cost of my insurance?",
    answer: "Several factors influence your premium: the age and condition of your thatch, property rebuild value, thatch type (reed vs straw), chimney condition, whether you have open fires or wood burners, proximity to other thatched properties, claims history, and the level of cover you choose.",
  },
  {
    question: "How do I make a claim?",
    answer: "Call our dedicated claims line on 01234 567 891, available 24/7 for emergencies. For non-urgent claims, you can also use our online claims form. Our specialist team will guide you through the process and arrange for approved contractors if needed.",
  },
  {
    question: "Do you offer buildings and contents insurance?",
    answer: "Yes, we offer buildings only, contents only, or combined buildings and contents cover. Many customers opt for combined cover to protect both their property structure and their belongings under one comprehensive policy.",
  },
  {
    question: "What's the excess on a thatched roof insurance claim?",
    answer: "Excess amounts vary depending on your policy and the type of claim. Typically, thatch-related claims have a higher excess due to the specialist nature of repairs. We'll clearly explain all excess amounts when providing your quote.",
  },
  {
    question: "Can I get insurance for a listed thatched building?",
    answer: "Absolutely. We specialise in insuring listed thatched properties and understand the additional requirements for repairs using traditional materials and methods. Listed building status doesn't prevent you from getting comprehensive cover.",
  },
];

export default function HomePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: typeof faq.answer === "string" ? faq.answer : "Several factors influence your premium: the age and condition of your thatch, property rebuild value, thatch type (reed vs straw), chimney condition, whether you have open fires or wood burners, proximity to other thatched properties, claims history, and the level of cover you choose. Learn more about why thatched cottage insurance costs more.",
      },
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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

