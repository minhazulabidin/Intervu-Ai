import React from 'react'

const ShineText = ({text}) => {
    return (
        <div className="relative inline-flex items-center justify-center md:mb-6 mb-4">

            {/* Soft Glow */}
            <div className="absolute inset-0 rounded-full bg-pink-500/20 blur-xl" />

            {/* Badge */}
            <div className="relative overflow-hidden rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-2">

                {/* Moving Shine */}
                <div className="absolute inset-0">
                    <div className="absolute top-0 -left-[120%] h-full w-16 skew-x-[-20deg] bg-white/10 blur-md animate-shine" />
                </div>

                <p className="relative md:text-sm text-xs tracking-wide text-white/70">
                    {text}
                </p>
            </div>
        </div>
    )
}

export default ShineText