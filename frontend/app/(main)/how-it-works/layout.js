import React from "react";
export const metadata = {
  title: "How It Works - Intervu AI",

  description:
    "Learn how Intervu AI helps you practice realistic mock interviews, receive AI-powered feedback, improve communication skills, and prepare for technical and HR interviews.",

  keywords: [
    "how Intervu AI works",
    "AI mock interview process",
    "AI interview practice",
    "mock interview platform",
    "technical interview preparation",
    "HR interview preparation",
    "AI feedback interview",
    "communication skill practice",
    "job interview simulator",
  ],

  openGraph: {
    title: "How Intervu AI Works - AI Mock Interview Platform",

    description:
      "Discover how Intervu AI simulates real interviews with smart AI feedback, personalized interview sessions, and performance tracking.",

    url: "https://yourdomain.com/how-it-works",

    siteName: "Intervu AI",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "How Intervu AI Works",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "How Intervu AI Works - AI Interview Preparation",

    description:
      "Practice smarter with AI-powered mock interviews, instant feedback, and realistic interview simulations on Intervu AI.",

    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "/how-it-works",
  },
};
const layout = ({ children }) => {
  return <>{children}</>;
};

export default layout;
