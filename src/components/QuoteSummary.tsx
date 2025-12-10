"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle, Phone, Mail, Info, ArrowRight, Home } from "lucide-react";

interface QuoteSummaryProps {
  quote: number;
  formData: {
    name: string;
    email: string;
    phone: string;
    coverType: string;
    thatchType: string;
    rebuildValue: string;
    optionalExtras: string[];
  };
}

const QuoteSummary = ({ quote, formData }: QuoteSummaryProps) => {
  const monthlyPayment = Math.round((quote / 12) * 100) / 100;

  const getCoverTypeLabel = (type: string) => {
    switch (type) {
      case "buildings-contents": return "Buildings & Contents";
      case "buildings-only": return "Buildings Only";
      case "contents-only": return "Contents Only";
      default: return type;
    }
  };

  const getThatchTypeLabel = (type: string) => {
    switch (type) {
      case "water-reed": return "Water Reed";
      case "combed-wheat": return "Combed Wheat Reed";
      case "long-straw": return "Long Straw";
      default: return type;
    }
  };

  const extraLabels: Record<string, string> = {
    "home-emergency": "Home Emergency Cover",
    "legal-expenses": "Legal Expenses Protection",
    "personal-accident": "Personal Accident Cover",
    "accidental-damage": "Accidental Damage",
    "garden-cover": "Garden Cover Enhancement",
    "cycle-cover": "Pedal Cycle Cover",
  };

  return (
    <div className="animate-fade-in">
      {/* Success Header */}
      <div className="text-center mb-8">
        <div className="w-20 h-20 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-10 h-10 text-success" />
        </div>
        <h2 className="font-serif text-3xl font-bold text-foreground mb-2">
          Your Indicative Quote
        </h2>
        <p className="text-muted-foreground">
          Thank you, {formData.name.split(" ")[0]}! Here's your estimated premium.
        </p>
      </div>

      {/* Quote Display */}
      <div className="bg-primary text-primary-foreground rounded-2xl p-8 text-center mb-8">
        <p className="text-primary-foreground/80 mb-2">Estimated Annual Premium</p>
        <p className="text-5xl md:text-6xl font-bold mb-4">
          £{quote.toLocaleString()}
        </p>
        <p className="text-primary-foreground/80">
          or <span className="font-semibold">£{monthlyPayment.toFixed(2)}/month</span> with 0% interest
        </p>
      </div>

      {/* Important Notice */}
      <div className="bg-warm rounded-xl p-6 mb-8 flex gap-4">
        <Info className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="font-semibold text-warm-foreground mb-1">This is an Indicative Quote</h4>
          <p className="text-warm-foreground/80 text-sm">
            This estimate is based on the information you've provided. Your final premium will be confirmed when one of our specialists calls you to discuss your requirements in detail.
          </p>
        </div>
      </div>

      {/* Summary Grid */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Quote Details */}
        <div className="bg-card border border-border rounded-xl p-6">
          <h4 className="font-serif text-lg font-semibold text-foreground mb-4">Quote Summary</h4>
          <dl className="space-y-3 text-sm">
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Cover Type</dt>
              <dd className="font-medium text-foreground">{getCoverTypeLabel(formData.coverType)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Thatch Type</dt>
              <dd className="font-medium text-foreground">{getThatchTypeLabel(formData.thatchType)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Rebuild Value</dt>
              <dd className="font-medium text-foreground">£{parseInt(formData.rebuildValue).toLocaleString()}</dd>
            </div>
            {formData.optionalExtras.length > 0 && (
              <div className="pt-3 border-t border-border">
                <dt className="text-muted-foreground mb-2">Optional Extras</dt>
                <dd className="space-y-1">
                  {formData.optionalExtras.map((extra) => (
                    <div key={extra} className="flex items-center gap-2 text-foreground">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span>{extraLabels[extra]}</span>
                    </div>
                  ))}
                </dd>
              </div>
            )}
          </dl>
        </div>

        {/* What Happens Next */}
        <div className="bg-card border border-border rounded-xl p-6">
          <h4 className="font-serif text-lg font-semibold text-foreground mb-4">What Happens Next?</h4>
          <ol className="space-y-4 text-sm">
            <li className="flex gap-3">
              <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary font-semibold flex-shrink-0">1</span>
              <span className="text-muted-foreground">We'll send a confirmation email to <strong className="text-foreground">{formData.email}</strong></span>
            </li>
            <li className="flex gap-3">
              <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary font-semibold flex-shrink-0">2</span>
              <span className="text-muted-foreground">One of our specialists will call you on <strong className="text-foreground">{formData.phone}</strong> within 2 working hours</span>
            </li>
            <li className="flex gap-3">
              <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary font-semibold flex-shrink-0">3</span>
              <span className="text-muted-foreground">We'll confirm your final premium and answer any questions</span>
            </li>
            <li className="flex gap-3">
              <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary font-semibold flex-shrink-0">4</span>
              <span className="text-muted-foreground">If you're happy, we can set up your policy over the phone</span>
            </li>
          </ol>
        </div>
      </div>

      {/* Contact Options */}
      <div className="bg-secondary rounded-xl p-6 mb-8">
        <h4 className="font-serif text-lg font-semibold text-foreground mb-4 text-center">
          Can't Wait? Get in Touch Now
        </h4>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="tel:01234567890">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold w-full sm:w-auto">
              <Phone className="w-5 h-5 mr-2" />
              Call 01234 567 890
            </Button>
          </a>
          <a href="mailto:quotes@thatchedroofinsurance.co.uk">
            <Button variant="outline" className="font-semibold w-full sm:w-auto">
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </Button>
          </a>
        </div>
      </div>

      {/* Return Home */}
      <div className="text-center">
        <Link href="/">
          <Button variant="ghost" className="gap-2">
            <Home className="w-4 h-4" />
            Return to Homepage
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default QuoteSummary;