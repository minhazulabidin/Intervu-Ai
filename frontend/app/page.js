import { Button } from "@/components/ui/button";
import { Brain, MessageSquareText, TrendingUp } from "lucide-react";

export default function Home() {
  const steps = [
    {
      icon: <Brain className="w-10 h-10" />,
      title: "Create Your Interview",
      description:
        "Choose your job role, experience level, and skills to generate a fully personalized AI mock interview.",
    },
    {
      icon: <MessageSquareText className="w-10 h-10" />,
      title: "Practice & Improve",
      description:
        "Answer realistic interview questions and improve your speaking confidence with AI-powered guidance.",
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Get Smart Feedback",
      description:
        "Receive instant feedback, performance analysis, and actionable tips to crack your dream job interview.",
    },
  ];

  return (
    <main className="relative overflow-hidden bg-black text-white">
      {/* Gradient Blur */}
      <div className="absolute -top-50 left-1/2 -translate-x-1/2 w-175 h-175 bg-pink-500/10 blur-[120px] rounded-full z-0 pointer-events-none" />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center">

          <div className="relative inline-flex items-center justify-center overflow-hidden rounded-full p-px mb-6">

            {/* Animated Glow Border */}
            <div className="absolute inset-0 bg-linear-to-r from-pink-500 via-purple-500 to-pink-500 animate-spin-slow" />

            {/* Shine Effect */}
            <div className="absolute inset-0 overflow-hidden rounded-full">
              <div className="absolute top-0 -left-[120%] h-full w-[80%] rotate-12 bg-white/20 blur-md animate-shine" />
            </div>

            {/* Content */}
            <div className="relative px-5 py-2 rounded-full bg-black/70 backdrop-blur-xl border border-white/10 text-sm text-white/70">
              AI-Powered Interview Preparation Platform
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
            Your Personal
            <span className="bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              {" "}AI Mock Interview{" "}
            </span>
            Coach
          </h1>

          <p className="text-white/70 text-lg md:text-xl mt-6 max-w-2xl mx-auto leading-8">
            Boost your interview confidence with realistic AI-powered mock
            interviews, instant feedback, and personalized improvement tips.
          </p>

          <div className="flex items-center justify-center gap-4 mt-10 flex-wrap">
            <Button className="h-14 px-8 text-lg rounded-xl bg-pink-600 hover:bg-pink-700 transition-all duration-300 hover:scale-105 shadow-lg shadow-pink-500/30">
              Get Started
            </Button>

            <Button
              variant="outline"
              className="h-14 px-8 text-lg rounded-xl border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 text-white"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">

          <div className="inline-block px-4 py-2 rounded-full border border-pink-500/20 bg-pink-500/10 text-pink-400 text-sm mb-6">
            HOW IT WORKS
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold">
            Simple Process,
            <span className="bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              {" "}Powerful Results
            </span>
          </h2>

          <p className="text-white/60 mt-6 text-lg max-w-2xl mx-auto leading-8">
            Start practicing smarter with our AI interview platform in just
            three simple steps.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 transition-all duration-500 hover:-translate-y-3 hover:border-pink-500/40 hover:bg-white/10"
              >

                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-linear-to-b from-pink-500/10 to-purple-500/10" />

                {/* Icon */}
                <div className="relative z-10 w-20 h-20 rounded-2xl bg-linear-to-br from-pink-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center mx-auto text-pink-400 group-hover:scale-110 transition duration-300">
                  {step.icon}
                </div>

                {/* Content */}
                <div className="relative z-10 mt-8">
                  <h3 className="text-2xl font-bold">
                    {step.title}
                  </h3>

                  <p className="text-white/60 mt-5 leading-8 text-base">
                    {step.description}
                  </p>
                </div>

                {/* Number */}
                <div className="absolute top-6 right-6 text-6xl font-black text-white/5">
                  0{index + 1}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-20">
            <Button className="h-14 px-10 text-lg rounded-xl bg-pink-600 hover:bg-pink-700 transition-all duration-300 hover:scale-105 shadow-lg shadow-pink-500/30">
              Start Your Mock Interview
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}