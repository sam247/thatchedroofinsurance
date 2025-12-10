import type { Metadata } from "next";
import QuotePage from "@/components/QuotePage";

export const metadata: Metadata = {
  title: "Get an Indicative Quote | Thatched Roof Insurance",
  description:
    "Answer a few questions about your thatched property to receive an indicative quote with no obligation and a specialist callback.",
};

export default function QuoteRoute() {
  return <QuotePage />;
}

