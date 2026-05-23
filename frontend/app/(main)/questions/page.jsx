export default function MockInterviewQuestionPage() {
  const questions = [
    "Tell me about yourself.",
    "What is the difference between == and === in JavaScript?",
    "Explain React lifecycle and hooks.",
    "Describe a challenge you faced in a project.",
  ];

  return (
    <div className="min-h-screen bg-[#070B14] text-white px-4 md:px-8 py-8">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-6 md:p-8 shadow-[0_0_40px_rgba(255,255,255,0.03)]">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/[0.08] via-purple-500/[0.03] to-transparent pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <p className="text-pink-400 text-sm tracking-[0.2em] uppercase mb-2">
                Mock Interview Session
              </p>

              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                Frontend Developer Interview
              </h1>

              <p className="text-white/60 mt-3 max-w-2xl text-sm md:text-base">
                Practice real interview questions with a modern AI-powered mock interview experience.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 min-w-[260px]">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-4">
                <p className="text-white/50 text-sm">Questions</p>
                <h2 className="text-2xl font-bold mt-1">10</h2>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-4">
                <p className="text-white/50 text-sm">Duration</p>
                <h2 className="text-2xl font-bold mt-1">25 Min</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6">

        {/* Sidebar */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-5 h-fit shadow-[0_0_30px_rgba(255,255,255,0.03)]">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/[0.06] to-transparent pointer-events-none" />

          <div className="relative z-10">
            <h2 className="text-xl font-semibold mb-2">Interview Overview</h2>

            <p className="text-sm text-white/50 mb-5 leading-relaxed">
              This mock interview session is designed to help you practice common frontend interview questions in a realistic environment.
            </p>

            <div className="space-y-3">

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-white/40 text-sm mb-1">Interview Type</p>
                <h3 className="font-semibold text-white">Frontend Developer</h3>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-white/40 text-sm mb-1">Difficulty</p>
                <h3 className="font-semibold text-white">Beginner to Intermediate</h3>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-white/40 text-sm mb-1">Topics Covered</p>
                <h3 className="font-semibold text-white">React, JavaScript, Problem Solving</h3>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-white/40 text-sm mb-1">Session Duration</p>
                <h3 className="font-semibold text-white">20 - 30 Minutes</h3>
              </div>
              {questions.map((question, idx) => (
                <button
                  key={idx}
                  className={`w-full text-left rounded-2xl border transition-all duration-300 p-4 group relative overflow-hidden ${
                    idx === 0
                      ? "border-pink-500/30 bg-white/[0.08]"
                      : "border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/20"
                  }`}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-pink-500/[0.05] via-purple-500/[0.03] to-transparent transition-all duration-500 pointer-events-none" />

                  <div className="relative z-10 flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs text-white/40 mb-1">
                        Question {idx + 1}
                      </p>

                      <h3 className="font-medium text-sm line-clamp-2">
                        {question}
                      </h3>
                    </div>

                    <div className="w-9 h-9 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-sm font-semibold shrink-0">
                      {idx + 1}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Question Section */}
        <div className="space-y-6">

          {/* Current Question */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-6 md:p-8 shadow-[0_0_30px_rgba(255,255,255,0.03)]">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/[0.05] via-purple-500/[0.03] to-transparent pointer-events-none" />

            <div className="relative z-10">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-4 py-1 rounded-full border border-pink-500/20 bg-pink-500/[0.08] text-pink-300 text-sm">
                  React
                </span>

                <span className="px-4 py-1 rounded-full border border-yellow-500/20 bg-yellow-500/[0.08] text-yellow-300 text-sm">
                  Medium
                </span>
              </div>

              <h1 className="text-2xl md:text-4xl font-bold leading-relaxed max-w-4xl">
                What is the difference between useEffect and useLayoutEffect in React?
              </h1>

              <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <h3 className="text-lg font-semibold mb-3 text-white/80">
                  Tips for Answering
                </h3>

                <ul className="space-y-3 text-white/60 text-sm md:text-base">
                  <li>• Explain execution timing clearly.</li>
                  <li>• Mention rendering behavior and performance.</li>
                  <li>• Give a real-world example if possible.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-2xl p-6 shadow-[0_0_30px_rgba(255,255,255,0.03)]">
            <h2 className="text-2xl font-bold mb-4">
              Before You Start
            </h2>

            <div className="space-y-4 text-white/60 leading-relaxed">
              <p>
                • Make sure you are in a quiet environment before starting the interview.
              </p>

              <p>
                • Try answering each question naturally instead of memorizing answers.
              </p>

              <p>
                • Focus on communication, confidence, and explaining your thought process clearly.
              </p>

              <p>
                • This mock interview is designed to simulate a real technical interview experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
