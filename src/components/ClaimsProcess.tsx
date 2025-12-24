import Link from "next/link";
import { Phone, FileText, Users, CheckCircle, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ClaimsProcess = () => {
  const steps = [
    {
      number: "1",
      icon: Phone,
      title: "Contact Us",
      description: "Call our dedicated claims line or use our online form. We're here to help 24/7 for emergencies.",
      highlight: "Available 24/7 for emergencies",
    },
    {
      number: "2",
      icon: FileText,
      title: "Provide Details",
      description: "Tell us what happened. We'll guide you through the information we need to process your claim quickly.",
      highlight: "Simple, straightforward process",
    },
    {
      number: "3",
      icon: Users,
      title: "Expert Assessment",
      description: "Our specialist assessors will evaluate the damage and arrange for approved contractors if needed.",
      highlight: "Access to specialist thatchers",
    },
    {
      number: "4",
      icon: CheckCircle,
      title: "Settlement",
      description: "Once approved, we'll settle your claim promptly. Most claims are resolved within 14 days.",
      highlight: "Fast, fair settlements",
    },
  ];

  return (
    <section id="claims" className="section-padding bg-primary text-primary-foreground">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Claims</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mt-2 mb-4">
            Making a Claim is Simple
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            When the unexpected happens, our specialist claims team is here to help. We make the process as straightforward as possible. For more information, see our <Link href="/blog/does-home-insurnace-cover-roof-damage-on-a-thatched-proerpty" className="text-accent font-semibold hover:underline">guide on roof damage coverage</Link>.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-primary-foreground/10 rounded-2xl p-6 backdrop-blur-sm border border-primary-foreground/20"
            >
              {/* Step Number */}
              <div className="absolute -top-3 -left-3 w-10 h-10 bg-accent rounded-full flex items-center justify-center font-bold text-accent-foreground text-lg">
                {step.number}
              </div>
              
              {/* Icon */}
              <div className="w-12 h-12 bg-primary-foreground/20 rounded-xl flex items-center justify-center mb-4 mt-2">
                <step.icon className="w-6 h-6" />
              </div>
              
              {/* Content */}
              <h3 className="font-serif text-xl font-semibold mb-2">
                {step.title}
              </h3>
              <p className="text-primary-foreground/70 text-sm mb-3">
                {step.description}
              </p>
              
              {/* Highlight */}
              <div className="flex items-center gap-2 text-accent text-sm font-medium">
                <Clock className="w-4 h-4" />
                {step.highlight}
              </div>

              {/* Arrow (except last) */}
              {index < steps.length - 1 && (
                <ArrowRight className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 text-primary-foreground/30" />
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="relative text-center overflow-hidden rounded-2xl p-8 md:p-12 border border-primary-foreground/20 bg-[url('/thatchedbg.jpg')] bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('/thatchedbg.jpg')",
          }}
        >
          <div className="relative text-white">
            <h3 className="font-serif text-2xl font-semibold mb-4">
              Need to Make a Claim?
            </h3>
            <p className="text-white/85 mb-6 max-w-2xl mx-auto">
              Our specialist claims team is ready to help. Call us now or send us a message and we'll get back to you within 2 hours during business hours.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:01234567891">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold w-full sm:w-auto">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Claims: 01234 567 891
                </Button>
              </a>
              <Button
                size="lg"
                variant="outline"
                className="border-white/60 text-white hover:bg-white/10 font-semibold w-full sm:w-auto"
              >
                <FileText className="w-5 h-5 mr-2" />
                Start Online Claim
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClaimsProcess;