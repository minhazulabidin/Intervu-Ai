import { Lightbulb } from 'lucide-react'
import React from 'react'

const QuestionSection = ({ interviewData, activeIndex }) => {
    return interviewData && (
        <div className='p-5 rounded-lg border my-10'>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {
                    interviewData && interviewData.map((item, idx) => (
                        <h2 className={` p-3 rounded-full text-xs md:text-sm text-center cursor-pointer ${activeIndex === idx ? "bg-black text-white" : "bg-secondary"}`}>Question #{idx + 1}</h2>
                    ))
                }
            </div>
            <h2 className='my-5 text-sm md:text-md'>{interviewData[activeIndex]?.question}</h2>
            <div className='border border-purple-600 p-4 rounded-lg bg-purple-400/40 space-y-3 text-sm text-purple-900 mt-20'>
                <h2 className='flex items-center gap-1'>
                    <Lightbulb />
                    <strong>Note</strong>
                </h2>
                <p>
                    Click on Record Answer when you want to answer the question. At the end of interview we will give you the feedback along with correct answer for each of question and your answer to comapre it.
                </p>
            </div>
        </div>
    )
}

export default QuestionSection