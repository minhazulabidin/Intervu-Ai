import { Brain, MessageSquareText, TrendingUp } from "lucide-react";
import ShineText from "./_compo/ShineText";
import { HomeButton } from "./_compo/HomeButton";
import { Effect } from "@/components/animate-ui/primitives/effects/effect";

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
            <Effect
              delay={100}
              fade={true}
              slide={true}
              inView={true}
              once={true}
            >
              <ShineText text="Your Personal Mock Intervu AI Coach" />
            </Effect>
          </div>

          <Effect
            delay={200}
            fade={true}
            slide={true}
            inView={true}
            once={true}
          >
            <h1 className="mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight">
              Your Personal Mock
              <span className="bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                {" "}
                Intervu AI{" "}
              </span>
              Coach
            </h1>
          </Effect>
          <Effect
            delay={300}
            fade={true}
            slide={true}
            inView={true}
            once={true}
          >
            <p className="text-white/70 text-base md:text-md mt-4 max-w-2xl mx-auto leading-7 md:leading-8 px-2">
              Boost your interview confidence with realistic mock Intervu Ai,
              instant feedback, and personalized improvement tips.
            </p>
          </Effect>
          <Effect
            delay={400}
            fade={true}
            slide={true}
            inView={true}
            once={true}
          >
            {/* Buttons */}
            <HomeButton />
          </Effect>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative px-4 sm:px-6 mb-40">
        <div className="max-w-7xl mx-auto text-center space-y-5">
          <div className="flex justify-center">
            <Effect
              delay={100}
              fade={true}
              slide={true}
              inView={true}
              once={true}
            >
              <ShineText text="How It Works" />
            </Effect>
          </div>
          <Effect
            delay={200}
            fade={true}
            slide={true}
            inView={true}
            once={true}
          >
            <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
              Simple Process,
              <span className="bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                {" "}
                Powerful Results
              </span>
            </h2>
          </Effect>
          <Effect
            delay={300}
            fade={true}
            slide={true}
            inView={true}
            once={true}
          >
            <p className="text-white/60 mt-4 text-base md:text-md max-w-2xl mx-auto leading-7 md:leading-8 px-2">
              Start practicing smarter with our AI interview platform in just
              three simple steps.
            </p>
          </Effect>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {steps.map((step, index) => (
              <Effect
                key={index}
                delay={(index + 1) * 200}
                fade={true}
                slide={true}
                inView={true}
                once={true}
              >
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
              </Effect>
            ))}
          </div>
        </div>
      </section>
      {/* ================= AI PERFORMANCE SECTION ================= */}
      <section className="relative px-4 sm:px-6 mb-28 md:mb-40">
        <div className="max-w-7xl mx-auto">
          {/* Top Blur */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-72 md:w-[550px] h-72 md:h-[550px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10 text-center mb-14 md:mb-20">
            <Effect
              delay={100}
              fade={true}
              slide={true}
              inView={true}
              once={true}
            >
              <div className="flex justify-center">
                <ShineText text="AI Performance Analysis" />
              </div>
            </Effect>

            <Effect
              delay={200}
              fade={true}
              slide={true}
              inView={true}
              once={true}
            >
              <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                Real-Time Smart
                <span className="bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                  {" "}
                  Interview Analytics
                </span>
              </h2>
            </Effect>

            <Effect
              delay={300}
              fade={true}
              slide={true}
              inView={true}
              once={true}
            >
              <p className="text-white/60 mt-6 text-base md:text-lg max-w-3xl mx-auto leading-7 md:leading-8">
                Our AI analyzes your communication, technical depth, confidence
                level, and speaking patterns to help you perform better in real
                interviews.
              </p>
            </Effect>
          </div>

          <div className="relative z-10 grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* LEFT SIDE */}
            <div className="space-y-5 md:space-y-6">
              {[
                {
                  title: "Communication Skills",
                  score: "92%",
                  width: "92%",
                  gradient: "from-pink-500 to-purple-500",
                },
                {
                  title: "Technical Accuracy",
                  score: "88%",
                  width: "88%",
                  gradient: "from-purple-500 to-fuchsia-500",
                },
                {
                  title: "Confidence Level",
                  score: "95%",
                  width: "95%",
                  gradient: "from-pink-400 to-violet-500",
                },
              ].map((item, idx) => (
                <Effect
                  key={idx}
                  delay={400 + idx * 120}
                  fade={true}
                  slide={true}
                  inView={true}
                  once={true}
                >
                  <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-5 md:p-7 hover:border-pink-500/20 transition-all duration-500">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-linear-to-br from-pink-500/[0.08] to-purple-500/[0.05] transition duration-500" />

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-base md:text-lg font-semibold text-white">
                          {item.title}
                        </h3>

                        <span className="text-sm md:text-base text-white/70 font-medium">
                          {item.score}
                        </span>
                      </div>

                      <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden">
                        <div
                          className={`h-full rounded-full bg-linear-to-r ${item.gradient}`}
                          style={{
                            width: item.width,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </Effect>
              ))}
            </div>

            {/* RIGHT SIDE */}
            <Effect
              delay={500}
              fade={true}
              slide={true}
              inView={true}
              once={true}
            >
              <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-6 md:p-10">
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-linear-to-br from-pink-500/[0.08] via-purple-500/[0.05] to-transparent transition duration-700" />

                {/* Blur */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-pink-500/10 blur-3xl rounded-full" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-5 mb-8 md:mb-10">
                    <div>
                      <p className="text-white/40 text-sm mb-2">
                        AI Feedback Engine
                      </p>

                      <h3 className="text-2xl md:text-4xl font-bold leading-tight">
                        Smart Suggestions
                      </h3>
                    </div>

                    <div className="w-14 h-14 md:w-18 md:h-18 shrink-0 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-2xl md:text-4xl">
                      🧠
                    </div>
                  </div>

                  <div className="space-y-4">
                    {[
                      "Structure answers with clearer storytelling.",
                      "Add more real-world technical examples.",
                      "Reduce filler words while speaking.",
                      "Excellent confidence level for live interviews.",
                    ].map((item, idx) => (
                      <Effect
                        key={idx}
                        delay={700 + idx * 100}
                        fade={true}
                        slide={true}
                        inView={true}
                        once={true}
                      >
                        <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 md:p-5">
                          <div className="w-2.5 h-2.5 rounded-full bg-pink-400 mt-2 shrink-0" />

                          <p className="text-white/60 leading-7 text-sm md:text-base">
                            {item}
                          </p>
                        </div>
                      </Effect>
                    ))}
                  </div>
                </div>
              </div>
            </Effect>
          </div>
        </div>
      </section>

      {/* ================= FUTURISTIC FEATURES ================= */}
      <section className="relative px-4 sm:px-6 mb-28 md:mb-40">
        {/* Background Glow */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-72 md:w-[500px] h-72 md:h-[500px] bg-pink-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-14 md:mb-20">
            <Effect
              delay={100}
              fade={true}
              slide={true}
              inView={true}
              once={true}
            >
              <div className="flex justify-center">
                <ShineText text="Why Choose Intervu AI" />
              </div>
            </Effect>

            <Effect
              delay={200}
              fade={true}
              slide={true}
              inView={true}
              once={true}
            >
              <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                Built For Modern
                <span className="bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                  {" "}
                  Interview Preparation
                </span>
              </h2>
            </Effect>

            <Effect
              delay={300}
              fade={true}
              slide={true}
              inView={true}
              once={true}
            >
              <p className="text-white/60 mt-6 max-w-3xl mx-auto text-base md:text-lg leading-7 md:leading-8">
                Everything is designed to create a realistic, immersive, and
                futuristic interview preparation experience.
              </p>
            </Effect>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              {
                icon: "⚡",
                title: "Instant AI Interviews",
                desc: "Generate mock interviews instantly based on your role.",
              },
              {
                icon: "🎯",
                title: "Personalized Questions",
                desc: "Questions adapt to your skills and experience level.",
              },
              {
                icon: "🌌",
                title: "Immersive Experience",
                desc: "Minimal futuristic UI built for maximum focus.",
              },
              {
                icon: "📈",
                title: "Track Growth",
                desc: "Monitor progress and improve over multiple sessions.",
              },
            ].map((item, idx) => (
              <Effect
                key={idx}
                delay={400 + idx * 120}
                fade={true}
                slide={true}
                inView={true}
                once={true}
              >
                <div className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-6 md:p-8 hover:-translate-y-2 transition-all duration-500 hover:border-pink-500/20">
                  {/* Hover Gradient */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-linear-to-br from-pink-500/[0.08] via-purple-500/[0.05] to-transparent transition duration-700" />

                  <div className="relative z-10">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-3xl md:text-4xl mb-8 group-hover:scale-110 transition duration-500">
                      {item.icon}
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold mb-4">
                      {item.title}
                    </h3>

                    <p className="text-white/60 leading-7 md:leading-8 text-sm md:text-base">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Effect>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="relative px-4 sm:px-6 pb-24 md:pb-32">
        <div className="max-w-6xl mx-auto">
          <Effect
            delay={100}
            fade={true}
            slide={true}
            inView={true}
            once={true}
          >
            <div className="relative overflow-hidden rounded-[36px] md:rounded-[48px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl px-6 sm:px-8 md:px-16 py-12 md:py-20 text-center">
              {/* Glow */}
              <div className="absolute inset-0 bg-linear-to-r from-pink-500/[0.08] via-purple-500/[0.04] to-transparent pointer-events-none" />

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-72 md:w-[550px] h-72 md:h-[550px] bg-purple-500/10 blur-[130px] rounded-full pointer-events-none" />

              <div className="relative z-10 max-w-4xl mx-auto">
                <div className="flex justify-center mb-6">
                  <ShineText text="Start Your AI Journey" />
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-6xl font-black leading-tight">
                  Prepare Smarter.
                  <br />
                  <span className="bg-linear-to-r from-pink-400 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent">
                    Crack Interviews Faster.
                  </span>
                </h2>

                <p className="text-white/60 text-base md:text-xl leading-7 md:leading-9 mt-8 max-w-3xl mx-auto">
                  Practice realistic mock interviews, improve communication, and
                  gain confidence with AI-powered feedback designed for modern
                  careers.
                </p>

                <div className="mt-10 md:mt-12 flex justify-center">
                  <HomeButton />
                </div>
              </div>
            </div>
          </Effect>
        </div>
      </section>
    </main>
  );
}
