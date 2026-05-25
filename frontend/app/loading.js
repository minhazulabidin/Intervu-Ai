import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen bg-[#0b0b0b] flex items-center justify-center overflow-hidden relative">
      
      {/* Background Blur Glow */}
      <div className="absolute w-75 h-75 bg-purple-500/30 rounded-full blur-3xl -top-20 -left-20" />
      <div className="absolute w-62.5 h-62.5 bg-cyan-500/30 rounded-full blur-3xl -bottom-15 -right-15" />

      {/* Glass Card */}
      <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-3xl px-10 py-8 flex flex-col items-center gap-5">
        
        {/* Loader */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-white/20"></div>

          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-cyan-400 border-r-purple-500 animate-spin"></div>
        </div>

        {/* Text */}
        <div className="text-center">
          <h2 className="text-white text-2xl font-semibold tracking-wide">
            Loading...
          </h2>

          <p className="text-gray-300 text-sm mt-1">
            Please wait a moment
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loading;