"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const navLinks = [
    { href: "#why-choose-us", label: "Why Choose Us" },
    { href: "#coverage", label: "What We Cover" },
    { href: "#claims", label: "Claims" },
    { href: "#reviews", label: "Reviews" },
    { href: "#faq", label: "FAQs" },
  ];

  const scrollToSection = (href: string) => {
    if (pathname !== "/") {
      router.push(`/${href}`);
      setIsMenuOpen(false);
      return;
    }

    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Thatched Roof Insurance logo" width={48} height={48} className="rounded-lg" priority />
            <div className="hidden sm:block leading-tight">
              <span className="font-serif font-semibold text-foreground text-lg block">Thatched Roof</span>
              <span className="text-primary font-medium block -mt-0.5">Insurance</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium text-sm"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <a
              href="tel:01onal234567890"
              className="hidden md:flex items-center gap-2 text-primary font-semibold"
            >
              <Phone className="w-4 h-4" />
              <span>01onal 234 567 890</span>
            </a>
            <Link href="/quote">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                Get a Quote
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-muted-foreground hover:text-foreground transition-colors font-medium py-2 text-left"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="tel:01234567890"
                className="flex items-center gap-2 text-primary font-semibold py-2"
              >
                <Phone className="w-4 h-4" />
                <span>01234 567 890</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;