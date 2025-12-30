import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { SeoSchema } from "./SeoSchema";
import Chat from "@/components/Chat";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const siteTitle = "Thatched Roof Insurance UK | Specialist Cover | Get Quote Today";
const siteDescription =
  "Specialist thatched roof insurance for UK properties. Expert cover for Grade II listed cottages, fire safety compliance, and specialist rebuild costs. Get your quote today. Rated 4.9/5.";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "thatched roof insurance",
    "thatched property cover",
    "buildings insurance",
    "contents insurance",
    "specialist home insurance",
    "thatched cottage insurance",
    "grade 2 listed thatched insurance",
    "thatched roof insurance UK",
  ],
  alternates: {
    canonical: "https://thatchedroofinsurance.co.uk",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://thatchedroofinsurance.co.uk",
    siteName: "Thatched Roof Insurance",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "https://thatchedroofinsurance.co.uk/logo.png",
        width: 1200,
        height: 630,
        alt: "Thatched Roof Insurance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["https://thatchedroofinsurance.co.uk/logo.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} bg-background text-foreground antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2"
        >
          Skip to main content
        </a>
        <Providers>{children}</Providers>
        <SeoSchema />
        <Chat />
      </body>
    </html>
  );
}

