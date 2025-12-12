"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Image src="/logo.png" alt="Thatched Roof Insurance logo" width={120} height={120} className="rounded-lg" />
            </div>
            <p className="text-background/70 text-sm leading-relaxed mb-4">
              Specialist insurance for thatched properties. Protecting your unique home with expert knowledge and dedicated service.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a href="tel:01234567890" className="flex items-center gap-2 text-background/80 hover:text-background transition-colors" aria-label="Call us at 01234 567 890">
                <Phone className="w-4 h-4" aria-hidden="true" />
                01234 567 890
              </a>
              <a href="mailto:info@thatchedroofinsurance.co.uk" className="flex items-center gap-2 text-background/80 hover:text-background transition-colors" aria-label="Email us at info@thatchedroofinsurance.co.uk">
                <Mail className="w-4 h-4" aria-hidden="true" />
                info@thatchedroofinsurance.co.uk
              </a>
              <div className="flex items-start gap-2 text-background/80">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <address className="not-italic">123 Insurance House, Cotswold Way, Gloucestershire GL1 2AB</address>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/quote" className="text-background/70 hover:text-background transition-colors">Get a Quote</Link></li>
              <li><Link href="/blog" className="text-background/70 hover:text-background transition-colors">Blog</Link></li>
              <li><Link href="/partners" className="text-background/70 hover:text-background transition-colors">Our Partners</Link></li>
              <li><a href="#why-choose-us" className="text-background/70 hover:text-background transition-colors">Why Choose Us</a></li>
              <li><a href="#coverage" className="text-background/70 hover:text-background transition-colors">What We Cover</a></li>
              <li><a href="#claims" className="text-background/70 hover:text-background transition-colors">Make a Claim</a></li>
              <li><a href="#faq" className="text-background/70 hover:text-background transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Insurance Types */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Our Policies</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="text-background/70">Buildings Insurance</span></li>
              <li><span className="text-background/70">Contents Insurance</span></li>
              <li><span className="text-background/70">Combined Cover</span></li>
              <li><span className="text-background/70">Outbuildings Cover</span></li>
              <li><span className="text-background/70">Liability Insurance</span></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy-policy" className="text-background/70 hover:text-background transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="text-background/70 hover:text-background transition-colors">Terms & Conditions</Link></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-background/70 hover:text-background transition-colors">Complaints Procedure</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
            <p>© {currentYear} Thatched Roof Insurance. All rights reserved.</p>
            <p>Authorised and regulated by the Financial Conduct Authority (FCA)</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;