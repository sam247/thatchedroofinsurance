"use client";

import { useState, useEffect, useRef } from "react";
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
  const logoContainerRef = useRef<HTMLDivElement>(null);

  // #region agent log
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const logData = {
      location: 'Header.tsx:useEffect',
      message: 'Header component mounted',
      data: {
        mode,
        pathname,
        isTransparent: mode === 'transparent',
        logoPath: mode === 'transparent' ? '/logo.png' : '/logo_black.png'
      },
      timestamp: Date.now(),
      sessionId: 'debug-session',
      runId: 'run1',
      hypothesisId: 'A'
    };
    fetch('http://127.0.0.1:7243/ingest/7b4fcb29-439d-4583-849f-65701debe772', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(logData)
    }).catch(() => {});
  }, [mode, pathname]);
  // #endregion

  // #region agent log
  useEffect(() => {
    if (typeof window === 'undefined' || !logoContainerRef.current) return;
    const checkStyles = () => {
      const container = logoContainerRef.current;
      if (!container) return;
      const image = container.querySelector('img') as HTMLImageElement | null;
      if (!image) return;
      
      const containerStyles = window.getComputedStyle(container);
      const imageStyles = window.getComputedStyle(image);
      const containerRect = container.getBoundingClientRect();
      const imageRect = image.getBoundingClientRect();
      
      const linkParent = container.parentElement;
      const linkParentStyles = linkParent ? window.getComputedStyle(linkParent) : null;
      const linkParentRect = linkParent ? linkParent.getBoundingClientRect() : null;
      
      const flexParent = linkParent?.parentElement;
      const flexParentStyles = flexParent ? window.getComputedStyle(flexParent) : null;
      const flexParentRect = flexParent ? flexParent.getBoundingClientRect() : null;
      
      const logData = {
        location: 'Header.tsx:useEffect:checkStyles',
        message: 'Logo computed styles and dimensions',
        data: {
          mode,
          pathname,
          container: {
            width: containerStyles.width,
            height: containerStyles.height,
            minWidth: containerStyles.minWidth,
            minHeight: containerStyles.minHeight,
            maxWidth: containerStyles.maxWidth,
            maxHeight: containerStyles.maxHeight,
            flexShrink: containerStyles.flexShrink,
            actualWidth: containerRect.width,
            actualHeight: containerRect.height
          },
          image: {
            width: imageStyles.width,
            height: imageStyles.height,
            objectFit: imageStyles.objectFit,
            display: imageStyles.display,
            flexShrink: imageStyles.flexShrink,
            actualWidth: imageRect.width,
            actualHeight: imageRect.height
          },
          linkParent: linkParent ? {
            width: linkParentStyles?.width,
            height: linkParentStyles?.height,
            flexShrink: linkParentStyles?.flexShrink,
            actualWidth: linkParentRect?.width,
            actualHeight: linkParentRect?.height
          } : null,
          flexParent: flexParent ? {
            width: flexParentStyles?.width,
            height: flexParentStyles?.height,
            justifyContent: flexParentStyles?.justifyContent,
            actualWidth: flexParentRect?.width,
            actualHeight: flexParentRect?.height
          } : null
        },
        timestamp: Date.now(),
        sessionId: 'debug-session',
        runId: 'run2',
        hypothesisId: 'B'
      };
      console.log('🔍 Logo Debug:', logData);
      console.log('📏 ACTUAL LOGO SIZE:', {
        page: pathname,
        mode: mode,
        containerActual: `${containerRect.width}px × ${containerRect.height}px`,
        imageActual: `${imageRect.width}px × ${imageRect.height}px`,
        containerComputed: `${containerStyles.width} × ${containerStyles.height}`,
        imageComputed: `${imageStyles.width} × ${imageStyles.height}`,
        expected: '240px × 77px'
      });
      fetch('http://127.0.0.1:7243/ingest/7b4fcb29-439d-4583-849f-65701debe772', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(logData)
      }).catch(() => {});
    };
    
    const timeoutId = setTimeout(checkStyles, 100);
    return () => clearTimeout(timeoutId);
  }, [mode, pathname]);
  // #endregion

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
          width: 240px !important;
          height: 77px !important;
          min-width: 240px !important;
          min-height: 77px !important;
          max-width: 240px !important;
          max-height: 77px !important;
          flex-shrink: 0 !important;
        }
        header .header-logo-fix img {
          width: 240px !important;
          height: 77px !important;
          min-width: 240px !important;
          min-height: 77px !important;
          max-width: 240px !important;
          max-height: 77px !important;
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
              ref={logoContainerRef}
              className="header-logo-fix"
              style={{ 
                width: '240px', 
                height: '77px', 
                minWidth: '240px', 
                minHeight: '77px', 
                maxWidth: '240px', 
                maxHeight: '77px',
                flexShrink: 0,
                position: 'relative'
              }}
            >
              <img
                src={logoPath}
                alt="Thatched Roof Insurance logo"
                width={240}
                height={77}
                style={{
                  width: '240px',
                  height: '77px',
                  minWidth: '240px',
                  minHeight: '77px',
                  maxWidth: '240px',
                  maxHeight: '77px',
                  objectFit: 'contain',
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