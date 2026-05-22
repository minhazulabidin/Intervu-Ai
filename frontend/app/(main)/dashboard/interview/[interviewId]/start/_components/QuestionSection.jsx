import { Lightbulb, Volume2 } from 'lucide-react'
import React from 'react'

const QuestionSection = ({ mockInterviewQuestion, activeIndex, loading }) => {

    const textToSpeech = (text) => {
        if ('speechSynthesis' in window) {
            const msg = new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(msg);
        } else {
            alert('Speech Synthesis Not Supported')
        }
    }

    // LOADING SKELETON
    if (loading) {
        return (
            <div className="p-5 rounded-lg border border-white/10 bg-white/5 backdrop-blur-md my-10 animate-pulse">

                {/* Tabs skeleton */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

                    {Array.from({ length: 8 }).map((_, idx) => (
                        <div
                            key={idx}
                            className="h-10 rounded-full bg-white/5 border border-white/10 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
                        </div>
                    ))}

                </div>

                {/* Question skeleton */}
                <div className="my-5 space-y-2">
                    <div className="h-4 bg-white/10 rounded w-3/4"></div>
                    <div className="h-4 bg-white/10 rounded w-1/2"></div>
                </div>

                {/* icon skeleton */}
                <div className="h-6 w-6 bg-white/10 rounded"></div>

                {/* note skeleton (match real purple glass box) */}
                <div className="border border-purple-500/20 bg-purple-500/10 rounded-lg mt-20 p-4 space-y-3 backdrop-blur-md">

                    <div className="h-4 bg-purple-200/20 rounded w-1/3"></div>
                    <div className="h-3 bg-purple-200/10 rounded"></div>
                    <div className="h-3 bg-purple-200/10 rounded w-5/6"></div>

                </div>

            </div>
        )
    }

    return (
        mockInterviewQuestion && (
            <div className="p-5 rounded-lg border border-white/10 bg-white/5 backdrop-blur-md my-10 order-2 md:order-1 text-white/80">

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

                    {
                        mockInterviewQuestion.map((item, idx) => (
                            <h2
                                key={idx}
                                className={`p-3 rounded-full text-xs md:text-sm text-center cursor-pointer border transition-all duration-200 ${activeIndex === idx ? "bg-linear-to-r from-purple-500 to-pink-500 text-white border-transparent shadow-md shadow-pink-500/20" : "bg-white/5 text-white/70 border-white/10 hover:bg-white/10 hover:text-white"}`}
                            >
                                Question #{idx + 1}
                            </h2>
                        ))
                    }

                </div>

                <h2 className='my-5 text-sm md:text-md text-white/85 leading-relaxed'>
                    {mockInterviewQuestion[activeIndex]?.question}
                </h2>

                <Volume2
                    className='cursor-pointer text-white/70 hover:text-white transition'
                    onClick={() =>
                        textToSpeech(mockInterviewQuestion[activeIndex]?.question)
                    }
                />

                <div className='mt-8 md:mt-20 p-4 rounded-lg border border-purple-500/20 bg-purple-500/10 backdrop-blur-md space-y-3 text-sm text-purple-100/80'>

                    <h2 className='flex items-center gap-2 text-purple-200'>
                        <Lightbulb />
                        <strong>Note</strong>
                    </h2>

                    <p className="text-purple-100/70">
                        Click on Record Answer when you want to answer the question.
                        At the end of interview we will give you feedback.
                    </p>

                </div>

            </div>
        )
    )
}

export default QuestionSection