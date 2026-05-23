import { Effect } from '@/components/animate-ui/primitives/effects/effect'
import { Button } from '@/components/ui/button'
import moment from 'moment'
import { useRouter } from 'next/navigation'
import React from 'react'

const MockCard = ({ mock, idx }) => {
    console.log(mock)
    const route = useRouter()
    const handleFeedback = () => {
        route.push(`/dashboard/interview/${mock?._id}/feedback`)
    }
    const handleStart = () => {
        route.push(`/dashboard/interview/${mock?._id}`)
    }
    return (
        <Effect
            delay={idx * 100}
            fade={true}
            slide={true}
            className=""
        >
            <div className="group relative isolate overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-4 md:p-5 space-y-3 shadow-[0_0_30px_rgba(255,255,255,0.03)] hover:border-pink-500/20 hover:shadow-[0_0_40px_rgba(236,72,153,0.08)] transition-all duration-300">

                {/* Background Glow */}
                <div className="absolute inset-0 z-0 bg-linear-to-br from-pink-500/5 via-purple-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />

                {/* Top Blur Glow */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-pink-500/10 blur-2xl rounded-full pointer-events-none scale-75 z-0" />

                <div className="relative z-10 space-y-2">

                    <h2 className="text-base md:text-xl font-bold text-white capitalize tracking-wide">
                        {mock?.jobPosition}
                    </h2>

                    <h3 className="text-sm md:text-base text-white/70">
                        {mock?.jobExperience} Years of Experience
                    </h3>

                    <p className="text-xs md:text-sm text-white/40">
                        Created At: {moment(mock?.createdAt).format("DD-MM-YYYY")}
                    </p>

                    <div className="flex flex-col sm:flex-row justify-between mt-4 gap-3">

                        <Button
                            onClick={handleFeedback}
                            variant="outline"
                            className="flex-1 isolate rounded-xl cursor-pointer border border-white/10 bg-white/[0.04] backdrop-blur-xl text-white/80 hover:bg-white/[0.08] hover:text-white hover:border-white/20 transition-all duration-300"
                        >
                            Feedback
                        </Button>

                        <Button
                            onClick={handleStart}
                            className="group flex-1 relative isolate overflow-hidden rounded-xl cursor-pointer border border-white/10 bg-white/[0.05] backdrop-blur-xl text-white hover:bg-white/[0.10] hover:border-pink-500/20 shadow-[0_0_25px_rgba(236,72,153,0.06)] transition-all duration-300"
                        >
                            {/* Button Glow */}
                            <div className="absolute inset-0 z-0 bg-linear-to-r from-pink-500/[0.08] via-purple-500/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />

                            <span className="relative z-10">
                                Start
                            </span>
                        </Button>
                    </div>
                </div>
            </div>
        </Effect>
    )
}

export default MockCard