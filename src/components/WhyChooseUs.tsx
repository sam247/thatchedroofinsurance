import Link from "next/link";
import { Shield, Users, CreditCard, Wrench, Phone, FileCheck, Umbrella, Home } from "lucide-react";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Specialist Expertise",
      description: "Over 30 years of experience insuring thatched properties. We understand the unique requirements of your home.",
    },
    {
      icon: Users,
      title: "Dedicated Claims Team",
      description: "Our specialist claims handlers work exclusively with thatched property claims, ensuring expert guidance throughout.",
    },
    {
      icon: CreditCard,
      title: "Flexible Payments",
      description: "Spread the cost with monthly payments at no extra charge. Pay in a way that suits your budget.",
    },
    {
      icon: Wrench,
      title: "Approved Contractors",
      description: "Access our network of specialist thatchers and restoration experts for repairs and maintenance.",
    },
    {
      icon: Phone,
      title: "Personal Service",
      description: "Speak to real people who know thatched properties. No call centres, just friendly UK-based advisors.",
    },
    {
      icon: FileCheck,
      title: "Comprehensive Cover",
      description: "Tailored policies that cover everything from thatch fire damage to storm and flood protection.",
    },
    {
      icon: Umbrella,
      title: "Optional Extras",
      description: "Add legal expenses, home emergency cover, and personal possessions for complete peace of mind.",
    },
    {
      icon: Home,
      title: "Buildings & Contents",
      description: "Protect both your property structure and your valuable belongings under one comprehensive policy.",
    },
  ];

  return (
    <section id="why-choose-us" className="section-padding bg-secondary">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Specialists in Thatched Property Insurance
          </h2>
          <p className="text-muted-foreground text-lg">
            We've been protecting thatched homes for over three decades. Our expertise means you get the right cover at the right price. <Link href="/about" className="text-primary font-semibold hover:underline">Learn more about us</Link> or <Link href="/contact" className="text-primary font-semibold hover:underline">get in touch</Link>.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="feature-card group"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <benefit.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;