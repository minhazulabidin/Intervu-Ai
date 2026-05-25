import React from 'react'

const ShineText = ({ text }) => {
    return (
        <div className="relative inline-flex items-center justify-center md:mb-3 mb-3">

            {/* Soft Glow */}
            <div className="absolute inset-0 rounded-full bg-pink-500/20 blur-xl" />

            {/* Badge */}
            <div className="relative overflow-hidden rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-1">

                {/* Moving Shine */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 -left-[120%] h-full w-16 skew-x-[-20deg] bg-white/10 blur-md animate-shine" />
                </div>

                <p
                    className=" text-pink-300 text-xs font-medium"
                    style={{
                        textShadow: "0 0 8px rgba(255,255,255,0.6)",
                    }}
                >
                    {text}
                </p>
            </div>
        </div>
    )
}

export default ShineText