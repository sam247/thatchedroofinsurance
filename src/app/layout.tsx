import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { SeoSchema } from "./SeoSchema";

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

const siteTitle = "Thatched Roof Insurance | Specialists in Thatched Property Cover";
const siteDescription =
  "Specialist insurance for thatched properties with tailored cover, expert guidance, and quick indicative quotes.";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  keywords: [
    "thatched roof insurance",
    "thatched property cover",
    "buildings insurance",
    "contents insurance",
    "specialist home insurance",
  ],
  openGraph: {
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} bg-background text-foreground antialiased`}>
        <Providers>{children}</Providers>
        <SeoSchema />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(t,e,a,n){function s(){if(!e.getElementById(a)){var t=e.getElementsByTagName(n)[0],s=e.createElement(n);s.type="text/javascript",s.async=!0,s.src="https://cdn.chatfront.io/js/sdk.js",t.parentNode.insertBefore(s,t)}}if("function"!=typeof t.ChatFront){var c=function(){c.q.push(arguments)};c.q=[],t.ChatFront=c,"complete"===e.readyState?s():t.attachEvent?t.attachEvent("onload",s):t.addEventListener("load",s,!1)}}(window,document,"chatfront-js","script");
              window.ChatFront('boot', {
                agent_key: "019b122c-e1e2-7468-836c-ea483fc7530f",
              });
            `,
          }}
        />
      </body>
    </html>
  );
}

