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
            className="bg-secondary"
        >
            <div className="border px-3 py-2 rounded-lg space-y-2">
                <h2 className="text-xl font-bold text-purple-800 capitalize">{mock?.jobPosition}</h2>
                <h3 className="text-base font-semibold">{mock?.jobExperience} Years of Experince</h3>
                <p className="text-sm text-gray-400">Created At: {moment(mock?.createdAt).format('DD-MM-YYYY')}</p>
                <div className="flex justify-between mt-3 gap-3">
                    <Button onClick={handleFeedback} variant='outline' className="flex-1 rounded-lg cursor-pointer">Feedback</Button>
                    <Button onClick={handleStart} className="flex-1 rounded-lg cursor-pointer">Start</Button>
                </div>
            </div>
        </Effect>
    )
}

export default MockCard