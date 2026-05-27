import React from 'react'

export const metadata = {
  title: "Interview Feedback - Intervu AI",

  description:
    "View your AI-powered interview feedback, including ratings, correct answers, and personalized improvement suggestions to boost your interview performance.",

  robots: {
    index: false,
    follow: false,
  },

  openGraph: {
    title: "Your Interview Feedback - Intervu AI",
    description:
      "Analyze your mock interview performance with AI feedback, ratings, and improvement tips.",
    url: "https://yourdomain.com/dashboard",
    siteName: "Intervu AI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Intervu AI Feedback",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Interview Feedback - Intervu AI",
    description:
      "Check your AI interview performance and improve with smart feedback.",
    images: ["/og-image.png"],
  },

  alternates: {
    canonical: "/dashboard",
  },
};


const layout = ({children}) => {
  return (
    <>{children}</>
  )
}

export default layout   