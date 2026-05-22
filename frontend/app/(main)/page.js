import { Button } from "@/components/ui/button";
import { Brain, MessageSquareText, TrendingUp } from "lucide-react";
import Link from "next/link";
import ShineText from "./_compo/ShineText";

export default function Home() {
  const steps = [
    {
      icon: <Brain className="w-8 h-8 md:w-10 md:h-10" />,
      title: "Create Your Interview",
      description:
        "Choose your job role, experience level, and skills to generate a fully personalized AI mock interview.",
    },
    {
      icon: <MessageSquareText className="w-8 h-8 md:w-10 md:h-10" />,
      title: "Practice & Improve",
      description:
        "Answer realistic interview questions and improve your speaking confidence with AI-powered guidance.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 md:w-10 md:h-10" />,
      title: "Get Smart Feedback",
      description:
        "Receive instant feedback, performance analysis, and actionable tips to crack your dream job interview.",
    },
  ];

  return (
    <main className="relative overflow-hidden bg-black text-white">
      
      {/* Gradient Blur */}
      <div className="absolute -top-40 md:-top-50 left-1/2 -translate-x-1/2 w-87.5 h-87.5 md:w-175 md:h-175 bg-pink-500/10 blur-[100px] md:blur-[120px] rounded-full z-0 pointer-events-none" />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-20">
        <div className="max-w-5xl mx-auto text-center relative z-10">

          <div className="flex justify-center">
            <ShineText text="Your Personal AI Mock Interview Coach" />
          </div>

          <h1 className="mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
            Your Personal
            <span className="bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              {" "}AI Mock Interview{" "}
            </span>
            Coach
          </h1>

          <p className="text-white/70 text-base md:text-md mt-4 max-w-2xl mx-auto leading-7 md:leading-8 px-2">
            Boost your interview confidence with realistic AI-powered mock
            interviews, instant feedback, and personalized improvement tips.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 w-full">
            
            <Link href="/dashboard" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto h-12 md:h-14 px-6 md:px-8 text-base md:text-lg rounded-xl bg-pink-600 hover:bg-pink-700 transition-all duration-300 hover:scale-105 shadow-lg shadow-pink-500/30 cursor-pointer">
                Get Started
              </Button>
            </Link>

            <Button
              variant="outline"
              className="w-full sm:w-auto h-12 md:h-14 px-6 md:px-8 text-base md:text-lg rounded-xl border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 text-white hover:text-white/80 cursor-pointer"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative py-20 md:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">

          <div className="flex justify-center">
            <ShineText text="How It Works" />
          </div>

          <h2 className="mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
            Simple Process,
            <span className="bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              {" "}Powerful Results
            </span>
          </h2>

          <p className="text-white/60 mt-4 text-base md:text-md max-w-2xl mx-auto leading-7 md:leading-8 px-2">
            Start practicing smarter with our AI interview platform in just
            three simple steps.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 mt-16 md:mt-20">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-8 md:p-10 transition-all duration-500 hover:-translate-y-3 hover:border-pink-500/40 hover:bg-white/10"
              >
                
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-linear-to-b from-pink-500/10 to-purple-500/10" />

                {/* Icon */}
                <div className="relative z-10 w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-linear-to-br from-pink-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center mx-auto text-pink-400 group-hover:scale-110 transition duration-300">
                  {step.icon}
                </div>

                {/* Content */}
                <div className="relative z-10 mt-6 md:mt-8">
                  <h3 className="text-xl md:text-2xl font-bold">
                    {step.title}
                  </h3>

                  <p className="text-white/60 mt-4 md:mt-5 leading-7 md:leading-8 text-sm md:text-base">
                    {step.description}
                  </p>
                </div>

                {/* Number */}
                <div className="absolute top-4 right-4 md:top-6 md:right-6 text-5xl md:text-6xl font-black text-white/5">
                  0{index + 1}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 md:mt-20">
            <Link href="/dashboard" className="">
            <Button className="h-12 md:h-14 px-6 md:px-10 text-base md:text-lg rounded-xl bg-pink-600 hover:bg-pink-700 transition-all cursor-pointer duration-300 hover:scale-105 shadow-lg shadow-pink-500/30">
              Start Your Mock Interview
            </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}