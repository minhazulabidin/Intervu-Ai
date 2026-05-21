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

    // =========================
    // LOADING SKELETON
    // =========================
    if (loading) {
        return (
            <div className='p-5 rounded-lg border my-10 animate-pulse'>

                {/* Tabs skeleton */}
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                    {
                        Array.from({ length: 8 }).map((_, idx) => (
                            <div
                                key={idx}
                                className='h-10 bg-gray-200 rounded-full'
                            />
                        ))
                    }
                </div>

                {/* Question skeleton */}
                <div className='my-5 space-y-2'>
                    <div className='h-4 bg-gray-200 rounded w-3/4'></div>
                    <div className='h-4 bg-gray-200 rounded w-1/2'></div>
                </div>

                {/* icon skeleton */}
                <div className='h-6 w-6 bg-gray-200 rounded'></div>

                {/* note skeleton (same layout) */}
                <div className='border border-purple-600 p-4 rounded-lg mt-20 space-y-3'>

                    <div className='h-4 bg-gray-200 rounded w-1/3'></div>
                    <div className='h-3 bg-gray-200 rounded'></div>
                    <div className='h-3 bg-gray-200 rounded w-5/6'></div>

                </div>

            </div>
        )
    }

    return (
        mockInterviewQuestion && (
            <div className='p-5 rounded-lg border my-10'>

                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                    {
                        mockInterviewQuestion.map((item, idx) => (
                            <h2
                                key={idx}
                                className={`p-3 rounded-full text-xs md:text-sm text-center cursor-pointer ${activeIndex === idx ? "bg-black text-white" : "bg-secondary"
                                    }`}
                            >
                                Question #{idx + 1}
                            </h2>
                        ))
                    }
                </div>

                <h2 className='my-5 text-sm md:text-md'>
                    {mockInterviewQuestion[activeIndex]?.question}
                </h2>

                <Volume2
                    className='cursor-pointer'
                    onClick={() =>
                        textToSpeech(mockInterviewQuestion[activeIndex]?.question)
                    }
                />

                <div className='border border-purple-600 p-4 rounded-lg bg-purple-400/40 space-y-3 text-sm text-purple-900 mt-20'>

                    <h2 className='flex items-center gap-1'>
                        <Lightbulb />
                        <strong>Note</strong>
                    </h2>

                    <p>
                        Click on Record Answer when you want to answer the question.
                        At the end of interview we will give you feedback.
                    </p>

                </div>

            </div>
        )
    )
}

export default QuestionSection