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
