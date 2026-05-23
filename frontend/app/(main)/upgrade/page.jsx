"use client";
import { toast } from "sonner";

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
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto mt-20">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-pink-400 tracking-[0.3em] uppercase text-sm mb-4">
            Upgrade Your Experience
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Unlock Your
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              {" "}Interview Potential
            </span>
          </h1>

          <p className="text-white/60 mt-6 text-base md:text-lg leading-relaxed">
            Choose a plan that matches your preparation journey and practice with a futuristic AI-powered mock interview platform.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`group relative isolate overflow-hidden rounded-3xl border backdrop-blur-2xl p-8 transition-all duration-500 hover:-translate-y-2 ${plan.active
                ? "border-pink-500/30 bg-white/[0.07] shadow-[0_0_60px_rgba(236,72,153,0.12)]"
                : "border-white/10 bg-white/[0.03] hover:border-white/20"
                }`}
            >
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-pink-500/[0.08] via-purple-500/[0.04] to-transparent transition-all duration-700 pointer-events-none" />

              {/* Top Blur */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-pink-500/10 blur-3xl rounded-full scale-75 pointer-events-none" />

              {plan.active && (
                <div className="absolute top-5 right-5 px-3 py-1 rounded-full border border-pink-500/20 bg-pink-500/[0.12] text-pink-300 text-xs font-medium">
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
                      className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-3"
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
                    ? "border-pink-500/30 bg-white/[0.08] hover:border-pink-500/50 shadow-[0_0_30px_rgba(236,72,153,0.10)]"
                    : "border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/20"} ${plan.name === "Free" ? "cursor-not-allowed" : "cursor-pointer"}`}
                >
                  <div className="absolute inset-0 opacity-0 hover:opacity-100 bg-gradient-to-r from-pink-500/[0.10] via-purple-500/[0.06] to-transparent transition-all duration-500" />

                  <span className="relative z-10">
                    {plan.button}
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-16 text-white/40 text-sm leading-relaxed max-w-2xl mx-auto">
          All plans include access to the futuristic mock interview dashboard, personalized interview sessions, and continuous platform improvements.
        </div>
      </div>
    </main>
  );
}
