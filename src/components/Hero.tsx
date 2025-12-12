import Image from "next/image";
import { Phone, Shield, Award, Users } from "lucide-react";
import HeroQuoteForm from "./HeroQuoteForm";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?q=80&w=2070&auto=format&fit=crop"
          alt="Beautiful thatched cottage in English countryside"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          quality={85}
        />
        <div className="absolute inset-0 gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="order-2 lg:order-1">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 bg-card/10 backdrop-blur-sm border border-card/20 rounded-full px-4 py-2 mb-6 animate-fade-in">
              <Award className="w-4 h-4 text-card" aria-hidden="true" />
              <span className="text-card text-sm font-medium">Rated Excellent by our customers</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-card leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Specialist Insurance for Your Thatched Property
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-card/90 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Expert cover from specialists who truly understand thatched homes. Dedicated claims team, flexible payments, and service tailored to your unique property.
            </p>

            {/* Phone CTA */}
            <a
              href="tel:01234567890"
              className="inline-flex items-center gap-2 text-card font-semibold hover:text-card/80 transition-colors mb-10 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
              aria-label="Call us at 01234 567 890"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              <span>Prefer to talk? Call 01234 567 890</span>
            </a>

            {/* Trust Stats */}
            <div className="grid grid-cols-3 gap-6 animate-fade-in-up" style={{ animationDelay: "0.4s" }} role="list" aria-label="Trust statistics">
              <div role="listitem">
                <div className="flex items-center gap-2 mb-1">
                  <Shield className="w-5 h-5 text-card/70" aria-hidden="true" />
                  <span className="text-2xl md:text-3xl font-bold text-card">30+</span>
                </div>
                <span className="text-card/70 text-sm">Years Experience</span>
              </div>
              <div role="listitem">
                <div className="flex items-center gap-2 mb-1">
                  <Users className="w-5 h-5 text-card/70" aria-hidden="true" />
                  <span className="text-2xl md:text-3xl font-bold text-card">15k+</span>
                </div>
                <span className="text-card/70 text-sm">Homes Protected</span>
              </div>
              <div role="listitem">
                <div className="flex items-center gap-2 mb-1">
                  <Award className="w-5 h-5 text-card/70" aria-hidden="true" />
                  <span className="text-2xl md:text-3xl font-bold text-card">4.9/5</span>
                </div>
                <span className="text-card/70 text-sm">Customer Rating</span>
              </div>
            </div>
          </div>

          {/* Right Side - Quote Form */}
          <div className="order-1 lg:order-2 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <HeroQuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;