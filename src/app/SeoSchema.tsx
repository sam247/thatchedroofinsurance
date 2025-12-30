import Script from "next/script";

export const SeoSchema = () => {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://thatchedroofinsurance.co.uk/#organization",
    name: "Thatched Roof Insurance",
    url: "https://thatchedroofinsurance.co.uk",
    logo: "https://thatchedroofinsurance.co.uk/logo.png",
    image: "https://thatchedroofinsurance.co.uk/logo.png",
    description: "Specialist thatched roof insurance covering the UK with compliance to 2025 chimney and fire safety requirements.",
    telephone: "+44-1234-567-890",
    email: "info@thatchedroofinsurance.co.uk",
    address: {
      "@type": "PostalAddress",
      streetAddress: "123 Insurance House, Cotswold Way",
      addressLocality: "Gloucestershire",
      addressRegion: "England",
      postalCode: "GL1 2AB",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "51.8642",
      longitude: "-2.2382",
    },
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    sameAs: [
      "https://thatchedroofinsurance.co.uk/blog/thatched-roof-chimney-regulations",
    ],
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://thatchedroofinsurance.co.uk/quote",
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform",
        ],
      },
      result: {
        "@type": "Reservation",
        name: "Thatched Roof Insurance Quote",
      },
    },
  };

  return <Script id="local-business-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
};

