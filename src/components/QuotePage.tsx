"use client";

import { useState } from "react";
import { Shield, Clock, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import QuoteSummary from "@/components/QuoteSummary";

interface FormData {
  propertyAge: string;
  rebuildValue: string;
  postcode: string;
  propertyType: string;
  thatchType: string;
  thatchAge: string;
  thatchCondition: string;
  heatSource: string;
  chimneySweptYearly: string;
  chimneyLined: string;
  chimneySweepFrequency: string;
  coverType: string;
  contentsValue: string;
  optionalExtras: string[];
  name: string;
  email: string;
  phone: string;
  preferredContact: string;
}

const QuotePage = () => {
  const [quoteComplete, setQuoteComplete] = useState(false);
  const [quoteData, setQuoteData] = useState<{ formData: FormData; quote: number } | null>(null);

  const handleQuoteComplete = (formData: FormData, quote: number) => {
    setQuoteData({ formData, quote });
    setQuoteComplete(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="bg-muted min-h-screen">
        <section className="container-custom py-12 md:py-16">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Get a Quote</span>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-3 mb-3">
              {quoteComplete ? "Your Quote is Ready" : "Get Your Indicative Quote"}
            </h1>
            <p className="text-muted-foreground text-lg">
              {quoteComplete
                ? "Thank you for your enquiry. Here's your estimated premium."
                : "Answer a few questions about your thatched property and we'll provide an indicative quote in minutes."}
            </p>
            {!quoteComplete && (
              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mt-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>Takes 3 minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-primary" />
                  <span>No obligation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>Callback available</span>
                </div>
              </div>
            )}
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-background rounded-2xl shadow-xl border border-border p-6 md:p-8">
              {quoteComplete && quoteData ? (
                <QuoteSummary quote={quoteData.quote} formData={quoteData.formData} />
              ) : (
                <QuoteForm onQuoteComplete={handleQuoteComplete} />
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default QuotePage;

