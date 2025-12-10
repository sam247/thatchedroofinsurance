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
      <main className="pt-20">
        <section className="bg-primary py-12 md:py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center text-primary-foreground">
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {quoteComplete ? "Your Quote is Ready" : "Get Your Indicative Quote"}
              </h1>
              <p className="text-lg text-primary-foreground/80 mb-8">
                {quoteComplete
                  ? "Thank you for your enquiry. Here's your estimated premium."
                  : "Answer a few questions about your thatched property and we'll provide an indicative quote in minutes."}
              </p>

              {!quoteComplete && (
                <div className="flex flex-wrap justify-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-accent" />
                    <span>Takes 3 minutes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-accent" />
                    <span>No obligation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-accent" />
                    <span>Callback available</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto">
              {quoteComplete && quoteData ? (
                <QuoteSummary quote={quoteData.quote} formData={quoteData.formData} />
              ) : (
                <QuoteForm onQuoteComplete={handleQuoteComplete} />
              )}
            </div>
          </div>
        </section>

        {!quoteComplete && (
          <section className="py-12 bg-secondary">
            <div className="container-custom">
              <div className="text-center max-w-2xl mx-auto">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                  Why Get a Quote With Us?
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
                  <div>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <p className="font-medium text-foreground">30+ Years Experience</p>
                    <p className="text-muted-foreground">Specialists in thatched properties</p>
                  </div>
                  <div>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <p className="font-medium text-foreground">Quick Response</p>
                    <p className="text-muted-foreground">Callback within 2 hours</p>
                  </div>
                  <div>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <p className="font-medium text-foreground">Personal Service</p>
                    <p className="text-muted-foreground">Speak to real experts</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default QuotePage;

