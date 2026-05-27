import React from "react";
export const metadata = {
  title: "Upgrade Plans - Intervu AI",

  description:
    "Explore Intervu AI pricing plans and unlock advanced AI mock interview features, smart feedback, voice interviews, and career-focused interview preparation.",

  keywords: [
    "Intervu AI pricing",
    "AI interview plans",
    "mock interview subscription",
    "AI interview preparation",
    "interview practice plans",
    "voice interview AI",
    "career preparation platform",
    "AI feedback system",
  ],

  openGraph: {
    title: "Upgrade Your Interview Experience - Intervu AI",

    description:
      "Choose the best Intervu AI plan and unlock unlimited mock interviews, advanced AI feedback, and smarter interview preparation tools.",

    url: "https://yourdomain.com/upgrade",

    siteName: "Intervu AI",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Intervu AI Upgrade Plans",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Upgrade Your Interview Experience - Intervu AI",

    description:
      "Unlock unlimited AI mock interviews, smart feedback, and advanced interview preparation features with Intervu AI.",

    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/upgrade",
  },
};
const layout = ({ children }) => {
  return <>{children}</>;
};

export default layout;
