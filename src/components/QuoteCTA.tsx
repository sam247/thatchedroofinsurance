import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Phone } from "lucide-react";

const QuoteCTA = () => {
  return (
    <section className="section-padding bg-warm">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-warm-foreground mb-4">
            Ready to Protect Your Thatched Home?
          </h2>
          <p className="text-warm-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Get an indicative quote in just a few minutes. No obligation, no pressure – just honest pricing from specialists who understand your property.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
            <Link href="/quote">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 w-full sm:w-auto">
                Get an Indicative Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <a href="tel:01234567890">
              <Button size="lg" variant="outline" className="border-warm-foreground/30 text-warm-foreground hover:bg-warm-foreground/10 font-semibold text-lg px-8 py-6 w-full sm:w-auto">
                <Phone className="w-5 h-5 mr-2" />
                Call for a Quote
              </Button>
            </a>
          </div>

          {/* Trust Points */}
          <div className="flex flex-wrap justify-center gap-8 text-warm-foreground/70 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Quote in 3 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>No obligation</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>Callback available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteCTA;