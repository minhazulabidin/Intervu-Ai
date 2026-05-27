import { ClerkProvider } from "@clerk/nextjs";
import { Outfit } from "next/font/google";
import "./globals.css";

import { Toaster } from "@/components/ui/sonner";
import SyncUser from "@/utils/SyncUser";

import { Analytics } from "@vercel/analytics/next"

import { LayoutGroup } from "framer-motion";
import { IntroProvider } from "@/components/intro/IntroProvider";
import IntroAnimation from "@/components/intro/IntroAnimation";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://ai-inter-vu.vercel.app"),

  alternates: {
    canonical: "/",
  },

  title: {
    default: "Intervu AI - AI Mock Interview Practice & Instant Feedback",
    template: "%s | Intervu AI",
  },

  description:
    "Practice realistic AI mock interviews and get instant feedback to improve your interview skills.",

  applicationName: "Intervu AI",

  keywords: [
    "AI mock interview",
    "mock interview platform",
    "AI interview practice",
    "job interview preparation",
    "technical interview practice",
    "HR interview practice",
    "AI interview coach",
  ],

  authors: [{ name: "Intervu AI Team" }],

  creator: "Intervu AI",

  themeColor: "#000000",

  openGraph: {
    title: "Intervu AI - AI Mock Interview Practice & Instant Feedback",

    description:
      "Practice realistic AI mock interviews and get instant feedback to improve your interview skills.",

    url: "https://ai-inter-vu.vercel.app",

    siteName: "Intervu AI",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Intervu AI",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Intervu AI - AI Mock Interview Practice & Instant Feedback",

    description:
      "Practice realistic AI mock interviews and get instant feedback to improve your interview skills.",

    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${outfit.variable} h-full antialiased`}>
        <body className="min-h-full flex flex-col font-outfit">
          <IntroProvider>
            <LayoutGroup>
              <IntroAnimation />

              <SyncUser />
              <Toaster />

              {children}
            </LayoutGroup>
          </IntroProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
