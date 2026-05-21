import React from 'react'

const FeedbackPage = () => {
  return (
    <main>
        <section className="w-full max-w-7xl mx-auto">
            <div className="space-y-3">
                <h2 className="text-green-400 font-bold lg:text-3xl md:text-2xl text-xl">Congratulations!</h2>
                <h3 className="text-black font-bold lg:text-2xl md:text-xl text-lg">Here is your interview feedback.</h3>
                <h4 className="text-blue-800 lg:text-xl md:text-lg text-md">Your overall interview rating is 7/10</h4>
                <p className='text-sm'>Find below interview question with correct answer, Your answer and feedback for improvement</p>
            </div>

        </section>
    </main>
  )
}

export default FeedbackPage