import { Shield, Clock, Award, Headphones, Star } from "lucide-react";

const TrustBar = () => {
  const trustItems = [
    {
      icon: Shield,
      label: "FCA Regulated",
      description: "Fully authorised",
    },
    {
      icon: Clock,
      label: "Quick Quotes",
      description: "In minutes",
    },
    {
      icon: Award,
      label: "Specialist Cover",
      description: "For thatched homes",
    },
    {
      icon: Headphones,
      label: "UK Support Team",
      description: "Mon-Fri 9am-5pm",
    },
    {
      icon: Star,
      label: "Excellent Rating",
      description: "4.9/5 stars",
    },
  ];

  return (
    <section className="bg-primary py-6">
      <div className="container-custom">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-primary-foreground"
            >
              <item.icon className="w-5 h-5 opacity-80" />
              <div>
                <p className="font-semibold text-sm">{item.label}</p>
                <p className="text-xs opacity-70">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;