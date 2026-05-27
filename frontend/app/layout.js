import { ClerkProvider } from "@clerk/nextjs";
import { Outfit } from "next/font/google";
import "./globals.css";

import { Toaster } from "@/components/ui/sonner";
import SyncUser from "@/utils/SyncUser";

import IntroAnimation from "@/components/intro/IntroAnimation";
import { IntroProvider } from "@/components/intro/IntroProvider";
import { LayoutGroup } from "framer-motion";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://yourdomain.com"),

  title: {
    default: "Intervu AI - AI Mock Interview Platform",
    template: "%s | Intervu AI",
  },

  description:
    "Practice AI-powered mock interviews, improve communication skills, and get instant interview feedback with Intervu AI.",

  keywords: [
    "AI mock interview",
    "mock interview platform",
    "AI interview practice",
    "job interview preparation",
    "Next.js AI interview app",
    "interview feedback AI",
    "technical interview practice",
    "HR interview practice",
    "AI career coach",
  ],

  authors: [{ name: "Intervu AI Team" }],

  creator: "Intervu AI",

  openGraph: {
    title: "Intervu AI - AI Mock Interview Practice & Instant Feedback",
    description:
      "Practice realistic AI mock interviews, improve communication skills, and receive instant feedback to prepare for technical and HR job interviews.",
    url: "https://yourdomain.com",
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
      "Practice interviews with AI and improve faster with smart feedback. Practice realistic AI mock interviews, improve communication skills, and receive instant feedback to prepare for technical and HR job interviews.",
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
