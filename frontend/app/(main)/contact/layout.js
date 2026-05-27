import React from "react";
export const metadata = {
  title: "Contact Us - Intervu AI",
  description:
    "Get in touch with Intervu AI for support, feedback, collaboration opportunities, or questions about our AI mock interview platform.",

  keywords: [
    "Contact Intervu AI",
    "AI interview support",
    "mock interview help",
    "Intervu AI contact",
    "AI interview platform support",
    "career interview assistance",
  ],

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    title: "Contact Us - Intervu AI",
    description:
      "Reach out to Intervu AI for support, feedback, or collaboration opportunities.",
    url: "https://ai-inter-vu.vercel.app/contact",
    siteName: "Intervu AI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact Intervu AI",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Us - Intervu AI",
    description:
      "Reach out to Intervu AI for support, feedback, or collaboration opportunities.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};
const layout = ({ children }) => {
  return <>{children}</>;
};

export default layout;
