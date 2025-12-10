import { Check, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const WhatWeCover = () => {
  const coverageItems = [
    {
      category: "Buildings Cover",
      items: [
        "Thatch roof damage (fire, storm, malicious damage)",
        "Main structure and permanent fixtures",
        "Outbuildings and garages",
        "Boundary walls, gates, and fences",
        "Swimming pools and tennis courts",
        "Solar panels and heat pumps",
      ],
    },
    {
      category: "Contents Cover",
      items: [
        "Furniture and household goods",
        "Personal possessions",
        "Valuables and jewellery",
        "Home office equipment",
        "Freezer contents",
        "Money and credit cards",
      ],
    },
    {
      category: "Liability Cover",
      items: [
        "Property owners' liability",
        "Public liability protection",
        "Employers' liability (if applicable)",
        "Legal expenses cover",
        "Personal liability worldwide",
      ],
    },
  ];

  const optionalExtras = [
    "Home emergency cover",
    "Legal expenses protection",
    "Personal accident cover",
    "Accidental damage cover",
    "Garden cover enhancement",
    "Pedal cycle cover",
  ];

  return (
    <section id="coverage" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Coverage</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Comprehensive Protection for Your Thatched Home
          </h2>
          <p className="text-muted-foreground text-lg">
            Our policies are designed specifically for thatched properties, covering the unique risks and requirements of your home.
          </p>
        </div>

        {/* Main Coverage Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {coverageItems.map((section, index) => (
            <div key={index} className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm">
              <h3 className="font-serif text-2xl font-semibold text-foreground mb-6 pb-4 border-b border-border">
                {section.category}
              </h3>
              <ul className="space-y-4">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-success/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-success" />
                    </div>
                    <span className="text-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Optional Extras */}
        <div className="bg-warm rounded-2xl p-8 md:p-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="lg:max-w-xl">
              <h3 className="font-serif text-2xl font-semibold text-warm-foreground mb-4">
                Optional Extras
              </h3>
              <p className="text-warm-foreground/80 mb-6">
                Enhance your policy with additional cover options for complete peace of mind.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {optionalExtras.map((extra, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-warm-foreground text-sm">{extra}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center lg:items-end gap-4">
              <Link to="/quote">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                  Get Your Quote
                </Button>
              </Link>
              <div className="flex items-center gap-2 text-sm text-warm-foreground/70">
                <Info className="w-4 h-4" />
                <span>No obligation, indicative pricing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeCover;