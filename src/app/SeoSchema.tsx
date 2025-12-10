import Script from "next/script";

export const SeoSchema = () => {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Thatched Roof Insurance",
    url: "https://thatchedroofinsurance.vercel.app",
    image: "https://thatchedroofinsurance.vercel.app/logo.png",
    description: "Specialist thatched roof insurance covering the UK with compliance to 2025 chimney and fire safety requirements.",
    telephone: "+44-1234-567-890",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Insurance House",
      addressLocality: "Cotswolds",
      addressRegion: "Gloucestershire",
      postalCode: "GL1 2AB",
      addressCountry: "UK",
    },
    areaServed: ["GB"],
    sameAs: ["https://thatchedroofinsurance.vercel.app/blog/thatched-roof-chimney-regulations"],
    potentialAction: {
      "@type": "Action",
      name: "Get a thatched roof insurance quote",
      target: "https://thatchedroofinsurance.vercel.app/quote",
    },
  };

  return <Script id="local-business-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
};

