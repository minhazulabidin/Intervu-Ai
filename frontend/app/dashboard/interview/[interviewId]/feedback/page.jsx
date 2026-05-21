"use client";
import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronDownIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useParams } from 'next/navigation';
import axios from 'axios';

const FeedbackPage = () => {
    const [feedBacks, setFeedbacks] = useState([]);
    const params = useParams();
    const id = params?.interviewId;
    console.log(feedBacks)
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/questions/getQuestions/${id}`);
            setFeedbacks(res?.data?.data?.feedback)
        }
        if (!feedBacks.length) {
            fetchData()
        }
    }, [])

    return (
        <main>
            <section className="w-full max-w-7xl mx-auto">
                <div className="space-y-3">
                    <h2 className="text-green-400 font-bold lg:text-3xl md:text-2xl text-xl">Congratulations!</h2>
                    <h3 className="text-black font-bold lg:text-2xl md:text-xl text-lg">Here is your interview feedback.</h3>
                    <h4 className="text-blue-800 lg:text-xl md:text-lg text-md">Your overall interview rating is 7/10</h4>
                    <p className='text-sm'>Find below interview question with correct answer, Your answer and feedback for improvement</p>
                </div>

                <div>
                    {
                        feedBacks.map(feedback => (
                            <Card className="mx-auto w-full my-5" key={feedback._id}>
                                <CardContent>
                                    <Collapsible className="rounded-md data-open:bg-muted">
                                        <CollapsibleTrigger render={<Button variant="ghost" className="w-full cursor-pointer">
                                            {feedback?.currentQuestion}
                                            <ChevronDownIcon className="ml-auto group-data-panel-open/button:rotate-180" /></Button>} />
                                        <CollapsibleContent className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
                                            <div className='space-y-2 mt-3'>
                                                <h3 className="text-red-500 font-bold text-base border p-3 rounded-lg bg-white">Rating: {feedback?.rating}</h3>
                                                <p className="text-red-600 text-base border p-3 rounded-lg bg-red-100"><span className="font-bold text-red-800">Your Answer:  </span>{feedback?.userAnswer}</p>
                                                <p className="text-green-600 text-base border p-3 rounded-lg bg-green-200"><span className="font-bold text-green-800">Correct Answer: </span>{feedback?.currentAnswer}</p>
                                                <p className="text-blue-600 text-base border p-3 rounded-lg bg-blue-200"><span className="font-bold text-blue-800">Feedback: </span>{feedback?.feedback}</p>
                                            </div>
                                        </CollapsibleContent>
                                    </Collapsible>
                                </CardContent>
                            </Card>
                        ))
                    }
                </div>
            </section>
        </main>
    )
}

export default FeedbackPage;