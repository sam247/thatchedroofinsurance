"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

type HeaderMode = "transparent" | "light";

const Header = ({ mode = "transparent" }: { mode?: HeaderMode }) => {
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

  const isTransparent = mode === "transparent";
  const textColor = isTransparent ? "text-white" : "text-foreground";
  const logoPath = isTransparent ? "/logo.png" : "/logo_black.png";

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        header .header-logo-fix {
          width: 192px !important;
          height: 62px !important;
          min-width: 192px !important;
          min-height: 62px !important;
          max-width: 192px !important;
          max-height: 62px !important;
          flex-shrink: 0 !important;
        }
        header .header-logo-fix img {
          width: 192px !important;
          height: 62px !important;
          min-width: 192px !important;
          min-height: 62px !important;
          max-width: 192px !important;
          max-height: 62px !important;
          object-fit: contain !important;
          display: block !important;
          flex-shrink: 0 !important;
        }
      `}} />
    <header
      className={cn(
        "top-0 left-0 right-0 z-50",
        isTransparent ? "absolute bg-transparent" : "relative bg-background border-b border-border",
        textColor,
      )}
    >
      <div className={cn("container-custom", textColor)}>
        <div className="flex items-center justify-between h-20 md:h-24">
          {/* Logo only */}
          <Link href="/" className="flex items-center" style={{ flexShrink: 0 }}>
            <div 
              className="header-logo-fix"
              style={{ 
                width: '192px', 
                height: '62px', 
                minWidth: '192px', 
                minHeight: '62px', 
                maxWidth: '192px', 
                maxHeight: '62px',
                flexShrink: 0,
                position: 'relative'
              }}
            >
              <img
                src={logoPath}
                alt="Thatched Roof Insurance logo"
                width={192}
                height={62}
                style={{
                  width: '192px',
                  height: '62px',
                  minWidth: '192px',
                  minHeight: '62px',
                  maxWidth: '192px',
                  maxHeight: '62px',
                  objectFit: 'contain',
                  objectPosition: 'center',
                  display: 'block',
                  flexShrink: 0
                }}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={cn(
                  "transition-colors font-medium text-sm",
                  isTransparent ? "text-white hover:text-white/80" : "text-foreground hover:text-foreground/80",
                )}
                aria-label={`Navigate to ${link.label}`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            <a
              href="tel:01234567890"
              className={cn(
                "hidden md:flex items-center gap-2 font-semibold",
                isTransparent ? "text-white" : "text-foreground",
              )}
              aria-label="Call us at 01234 567 890"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <span>01234 567 890</span>
            </a>
            <Link href="/quote">
              <Button
                className={cn(
                  "font-semibold",
                  isTransparent ? "bg-white text-primary hover:bg-white/90" : "bg-primary text-primary-foreground hover:bg-primary/90",
                )}
              >
                Get a Quote
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={cn("lg:hidden p-2", isTransparent ? "text-white" : "text-foreground")}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className={cn(
              "lg:hidden py-4 mt-2 rounded-xl border animate-fade-in",
              isTransparent ? "border-white/20 bg-black/80 text-white" : "border-border bg-background text-foreground",
            )}
          >
            <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={cn(
                    "transition-colors font-medium py-2 text-left",
                    isTransparent ? "text-white hover:text-white/80" : "text-foreground hover:text-foreground/80",
                  )}
                  aria-label={`Navigate to ${link.label}`}
                >
                  {link.label}
                </button>
              ))}
              <a
                href="tel:01234567890"
                className={cn(
                  "flex items-center gap-2 font-semibold py-2",
                  isTransparent ? "text-white" : "text-foreground",
                )}
                aria-label="Call us at 01234 567 890"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span>01234 567 890</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
    </>
  );
};

export default Header;