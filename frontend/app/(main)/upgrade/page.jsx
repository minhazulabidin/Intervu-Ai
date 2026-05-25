"use client";
import { toast } from "sonner";
import ShineText from "../_compo/ShineText";
import { Effect } from "@/components/animate-ui/primitives/effects/effect";

export default function UpgradePage() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for getting started with mock interviews.",
      features: [
        "3 Mock Interviews",
        "Advanced Questions",
        "Community Support",
        "AI Feedback",
      ],
      button: "Current Plan",
      active: false,
    },
    {
      name: "Pro",
      price: "$19",
      description: "For students and developers preparing seriously.",
      features: [
        "Unlimited Interviews",
        "Advanced AI Feedback",
        "Voice Interview Mode",
        "Priority Support",
      ],
      button: "Upgrade Now",
      active: true,
    },
    {
      name: "Elite",
      price: "$49",
      description: "Complete interview preparation experience.",
      features: [
        "Everything in Pro",
        "Real-time AI Analysis",
        "Custom Interview Tracks",
        "1-on-1 Career Guidance",
      ],
      button: "Get Elite",
      active: false,
    },
  ];

  const handleUpgrade = (name) => {
    if (name === "Pro") {
      toast.error("Currently unavailable")
    } else {
      toast.error("Currently unavailable")
    }
  }
  return (
    <main className="min-h-screen bg-black text-white px-4 md:px-8 py-16 overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-150 bg-purple-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto mt-20">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Effect
            delay={100}
            fade={true}
            slide={true}
            className=""
            transition={true}
          >
            <ShineText text="Upgrade Your Experience" />
          </Effect>
          <Effect
            delay={200}
            fade={true}
            slide={true}
            className=""
            transition={true}
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Unlock Your
              <span className="bg-linear-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                {" "}Interview Potential
              </span>
            </h1>
          </Effect>
          <Effect
            delay={300}
            fade={true}
            slide={true}
            className=""
            transition={true}
          >
            <p className="text-white/60 mt-6 text-base md:text-lg leading-relaxed">
              Choose a plan that matches your preparation journey and practice with a futuristic AI-powered mock interview platform.
            </p>
          </Effect>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <Effect
              key={idx}
              delay={(idx + 1) * 200}
              fade={true}
              slide={true}
              className=""
              transition={true}
            >
              <div
                key={idx}
                className={`group relative isolate overflow-hidden rounded-3xl border backdrop-blur-2xl p-8 transition-all duration-500 hover:-translate-y-2 ${plan.active
                  ? "border-pink-500/30 bg-white/[0.07] shadow-[0_0_60px_rgba(236,72,153,0.12)]"
                  : "border-white/10 bg-white/3 hover:border-white/20"
                  }`}
              >
                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-linear-to-br from-pink-500/8 via-purple-500/4 to-transparent transition-all duration-700 pointer-events-none" />

                {/* Top Blur */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-pink-500/10 blur-3xl rounded-full scale-75 pointer-events-none" />

                {plan.active && (
                  <div className="absolute top-5 right-5 px-3 py-1 rounded-full border border-pink-500/20 bg-pink-500/12 text-pink-300 text-xs font-medium">
                    Most Popular
                  </div>
                )}

                <div className="relative z-10 flex flex-col h-full">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">
                      {plan.name}
                    </h2>

                    <p className="text-white/50 leading-relaxed mb-6">
                      {plan.description}
                    </p>

                    <div className="flex items-end gap-2 mb-8">
                      <h1 className="text-5xl font-bold">
                        {plan.price}
                      </h1>

                      <span className="text-white/40 mb-2">
                        /month
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-10 flex-1">
                    {plan.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/3 px-4 py-3"
                      >
                        <div className="w-2 h-2 rounded-full bg-pink-400" />

                        <p className="text-white/70 text-sm">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>

                  <button
                    disabled={plan.name === "Free" ? true : false}
                    onClick={() => handleUpgrade(plan?.name)}
                    className={`relative overflow-hidden rounded-2xl py-4 font-semibold transition-all duration-300 border ${plan.active
                      ? "border-pink-500/30 bg-white/8 hover:border-pink-500/50 shadow-[0_0_30px_rgba(236,72,153,0.10)]"
                      : "border-white/10 bg-white/4 hover:bg-white/8 hover:border-white/20"} ${plan.name === "Free" ? "cursor-not-allowed" : "cursor-pointer"}`}
                  >
                    <div className="absolute inset-0 opacity-0 hover:opacity-100 bg-linear-to-r from-pink-500/10 via-purple-500/6 to-transparent transition-all duration-500" />

                    <span className="relative z-10">
                      {plan.button}
                    </span>
                  </button>
                </div>
              </div>
            </Effect>

          ))}
        </div>

        {/* Bottom Text */}
        <Effect
          delay={600}
          fade={true}
          slide={true}
          className=""
          transition={true}
        >
          <div className="text-center mt-16 text-white/40 text-sm leading-relaxed max-w-2xl mx-auto">
            All plans include access to the AI-powered Mock interview dashboard, personalized interview sessions, and continuous platform improvements.
          </div>
        </Effect>

      </div>
    </main>
  );
}
