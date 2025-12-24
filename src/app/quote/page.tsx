import type { Metadata } from "next";
import QuotePage from "@/components/QuotePage";

export const metadata: Metadata = {
  title: "Get a Quote | Thatched Roof Insurance",
  description:
    "Get your indicative thatched roof insurance quote in minutes. Answer a few questions about your property for a no-obligation quote and specialist callback.",
  alternates: {
    canonical: "https://thatchedroofinsurance.co.uk/quote",
  },
  openGraph: {
    title: "Get a Quote | Thatched Roof Insurance",
    description:
      "Get your indicative thatched roof insurance quote in minutes. Answer a few questions about your property for a no-obligation quote and specialist callback.",
    url: "https://thatchedroofinsurance.co.uk/quote",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get a Quote | Thatched Roof Insurance",
    description:
      "Get your indicative thatched roof insurance quote in minutes. Answer a few questions about your property for a no-obligation quote and specialist callback.",
  },
};

export default function QuoteRoute() {
  return <QuotePage />;
}

