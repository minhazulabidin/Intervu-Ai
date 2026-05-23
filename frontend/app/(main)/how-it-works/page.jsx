import { WorkBtn } from "../_compo/HomeButton";
import ShineText from "../_compo/ShineText";

export default function HowItWorksPage() {
  const steps = [
    {
      title: "Create Your Interview Session",
      description:
        "Choose your preferred role, experience level, and interview category to generate a personalized mock interview experience.",
      number: "01",
    },
    {
      title: "Practice Real Interview Questions",
      description:
        "Answer carefully crafted technical and behavioral questions designed to simulate real-world interview environments.",
      number: "02",
    },
    {
      title: "Get AI-Powered Feedback",
      description:
        "Receive intelligent feedback on your communication, confidence, technical answers, and overall performance.",
      number: "03",
    },
    {
      title: "Improve & Track Progress",
      description:
        "Continue practicing, review previous sessions, and track your interview improvement over time.",
      number: "04",
    },
  ];

  const features = [
    {
      title: "AI Mock Interviews",
      desc: "Practice with modern AI-generated interview questions.",
    },
    {
      title: "Instant Feedback",
      desc: "Understand your strengths and areas to improve instantly.",
    },
    {
      title: "Role-Based Questions",
      desc: "Get customized interview questions for your target role.",
    },
    {
      title: "Futuristic Experience",
      desc: "Clean, immersive, and distraction-free interview interface.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-pink-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-16 mt-20">

        {/* Hero Section */}
        <section className="text-center max-w-4xl mx-auto mb-28">
          <ShineText text="How It Works" />

          <h1 className="text-4xl md:text-7xl font-bold leading-tight mb-8">
            Practice Smarter With
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              {" "}AI-Powered Interviews
            </span>
          </h1>

          <p className="text-white/60 text-base md:text-xl leading-relaxed max-w-3xl mx-auto">
            Our futuristic mock interview platform helps you simulate real interview experiences, improve communication skills, and prepare confidently for your next opportunity.
          </p>
        </section>

        {/* Steps Section */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-5">
              Simple 4-Step Process
            </h2>

            <p className="text-white/50 max-w-2xl mx-auto text-lg leading-relaxed">
              Everything is designed to make interview preparation easier, smarter, and more realistic.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="group relative isolate overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8 shadow-[0_0_40px_rgba(255,255,255,0.03)] hover:border-pink-500/20 hover:-translate-y-1 transition-all duration-500"
              >
                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-pink-500/[0.08] via-purple-500/[0.04] to-transparent transition-all duration-700 pointer-events-none" />

                {/* Blur Glow */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-pink-500/10 blur-3xl rounded-full scale-75 pointer-events-none" />

                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-2xl border border-pink-500/20 bg-white/[0.04] flex items-center justify-center text-2xl font-bold text-pink-300 mb-8">
                    {step.number}
                  </div>

                  <h3 className="text-2xl font-bold mb-4 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-white/60 leading-relaxed text-base md:text-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left Content */}
            <div>
              <p className="text-purple-400 tracking-[0.25em] uppercase text-sm mb-5">
                Why Choose Us
              </p>

              <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
                Designed For Modern
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  {" "}Interview Preparation
                </span>
              </h2>

              <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-2xl">
                Traditional interview preparation can feel overwhelming. Our platform combines AI, realistic interview simulations, and intelligent feedback to help you prepare effectively.
              </p>

              <div className="space-y-5">
                {features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-5"
                  >
                    <div className="w-3 h-3 rounded-full bg-pink-400 mt-2 shrink-0" />

                    <div>
                      <h3 className="text-lg font-semibold mb-1">
                        {feature.title}
                      </h3>

                      <p className="text-white/55 leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side */}
            <div className="relative isolate overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-8 md:p-10 shadow-[0_0_50px_rgba(255,255,255,0.03)]">

              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/[0.06] via-purple-500/[0.04] to-transparent pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-10">
                  <div>
                    <p className="text-white/40 text-sm mb-2">
                      AI Interview Analysis
                    </p>

                    <h3 className="text-3xl font-bold">
                      Smart Feedback
                    </h3>
                  </div>

                  <div className="w-16 h-16 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-2xl">
                    🚀
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <div className="flex justify-between mb-3">
                      <p className="text-white/60">Communication</p>
                      <p className="text-pink-300">92%</p>
                    </div>

                    <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full w-[92%] rounded-full bg-gradient-to-r from-pink-500 to-purple-500" />
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <div className="flex justify-between mb-3">
                      <p className="text-white/60">Technical Skills</p>
                      <p className="text-purple-300">87%</p>
                    </div>

                    <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full w-[87%] rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <div className="flex justify-between mb-3">
                      <p className="text-white/60">Confidence</p>
                      <p className="text-blue-300">95%</p>
                    </div>

                    <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full w-[95%] rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section>
          <div className="relative isolate overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-10 md:p-16 text-center shadow-[0_0_50px_rgba(255,255,255,0.03)]">

            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/[0.08] via-purple-500/[0.04] to-transparent pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <p className="text-pink-400 tracking-[0.25em] uppercase text-sm mb-5">
                Ready To Start?
              </p>

              <h2 className="text-3xl md:text-6xl font-bold leading-tight mb-8">
                Prepare For Your
                <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {" "}Dream Career
                </span>
              </h2>

              <p className="text-white/60 text-lg leading-relaxed mb-10">
                Start practicing today with realistic AI-powered interviews and take your interview preparation to the next level.
              </p>

              <WorkBtn />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
