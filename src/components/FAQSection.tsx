import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQSection = () => {
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

  return (
    <section id="faq" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">FAQs</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about insuring your thatched property. Can't find what you're looking for? Give us a call.
          </p>
        </div>

        {/* FAQ Accordion - 2 Columns */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.slice(0, Math.ceil(faqs.length / 2)).map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-5">
                    <div className="flex items-start gap-3">
                      <HelpCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 pl-8">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.slice(Math.ceil(faqs.length / 2)).map((faq, index) => (
                <AccordionItem
                  key={index + Math.ceil(faqs.length / 2)}
                  value={`item-${index + Math.ceil(faqs.length / 2)}`}
                  className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-5">
                    <div className="flex items-start gap-3">
                      <HelpCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 pl-8">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions? Our friendly team is here to help.
          </p>
          <a
            href="tel:01234567890"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
          >
            Call us on 01234 567 890
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;