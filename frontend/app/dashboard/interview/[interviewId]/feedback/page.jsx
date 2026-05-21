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
import { useParams, useRouter } from 'next/navigation';
import axios from 'axios';

const FeedbackPage = () => {

    const [feedBacks, setFeedbacks] = useState([]);
    const [loading, setLoading] = useState(true);

    const params = useParams();
    const id = params?.interviewId;
    const router = useRouter();

    useEffect(() => {

        const fetchData = async () => {

            try {

                setLoading(true);

                const res = await axios.get(
                    `${process.env.NEXT_PUBLIC_SERVER_URL}/questions/getQuestions/${id}`
                );

                setFeedbacks(res?.data?.data?.feedback || []);

            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchData();
        }

    }, [id]);

    const overallRating =
        feedBacks.length > 0
            ? feedBacks.reduce((a, b) => a + (b.rating || 0), 0)
            : 0;

    // LOADING SKELETON
    if (loading) {
        return (
            <main>
                <section className="w-full max-w-7xl mx-auto p-4 h-screen animate-pulse">

                    {/* header skeleton */}
                    <div className="space-y-3">
                        <div className="h-6 w-48 bg-gray-200 rounded"></div>
                        <div className="h-5 w-72 bg-gray-200 rounded"></div>
                        <div className="h-5 w-60 bg-gray-200 rounded"></div>
                        <div className="h-4 w-96 bg-gray-200 rounded"></div>
                    </div>

                    {/* cards skeleton */}
                    <div className="mt-8 space-y-4">
                        {Array.from({ length: 4 }).map((_, i) => (
                            <div key={i} className="border p-4 rounded-lg space-y-3">
                                <div className="h-5 bg-gray-200 rounded w-3/4"></div>
                                <div className="h-4 bg-gray-200 rounded"></div>
                                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                            </div>
                        ))}
                    </div>

                </section>
            </main>
        );
    }

    return (
        <main>
            <section className="w-full max-w-7xl mx-auto p-4 h-screen">

                {
                    feedBacks.length === 0 ? (

                        <div className="flex justify-center items-center h-3/4">
                            <h2 className="font-bold md:text-2xl text-xl">
                                No feedback found
                            </h2>
                        </div>

                    ) : (
                        <>
                            <div className="space-y-3">
                                <h2 className="text-green-400 font-bold lg:text-3xl md:text-2xl text-xl">
                                    Congratulations!
                                </h2>

                                <h3 className="text-black font-bold lg:text-2xl md:text-xl text-lg">
                                    Here is your interview feedback.
                                </h3>

                                <h4 className={`lg:text-xl md:text-lg text-md ${overallRating >= 0 && overallRating <= 5 ? 'text-red-600' : overallRating >= 6 && overallRating <= 8 ? 'text-yellow-600' : 'text-green-600'}`}>
                                    Your overall interview rating is {overallRating}/10
                                </h4>

                                <p className='text-sm'>
                                    Find below interview question with correct answer, Your answer and feedback for improvement
                                </p>
                            </div>

                            <div>
                                {
                                    feedBacks.map(feedback => (
                                        <Card className="mx-auto w-full my-5 px-2" key={feedback._id}>
                                            <CardContent>
                                                <Collapsible className="rounded-md data-open:bg-muted">

                                                    <CollapsibleTrigger
                                                        className="wrap"
                                                        render={
                                                            <Button
                                                                variant="ghost"
                                                                className="w-full cursor-pointer wrap text-left"
                                                            >
                                                                {feedback?.currentQuestion}
                                                                <ChevronDownIcon className="ml-auto group-data-panel-open/button:rotate-180" />
                                                            </Button>
                                                        }
                                                    />

                                                    <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down ">

                                                        <div className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">

                                                            <div className='space-y-2 mt-3'>

                                                                <h3 className="text-red-500 font-bold text-base border p-3 rounded-lg bg-white">
                                                                    Rating: {feedback?.rating}
                                                                </h3>

                                                                <p className="text-red-600 text-base border p-3 rounded-lg bg-red-100">
                                                                    <span className="font-bold text-red-800">Your Answer: </span>
                                                                    {feedback?.userAnswer}
                                                                </p>

                                                                <p className="text-green-600 text-base border p-3 rounded-lg bg-green-200">
                                                                    <span className="font-bold text-green-800">Correct Answer: </span>
                                                                    {feedback?.currentAnswer}
                                                                </p>

                                                                <p className="text-blue-600 text-base border p-3 rounded-lg bg-blue-200">
                                                                    <span className="font-bold text-blue-800">Feedback: </span>
                                                                    {feedback?.feedback}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </CollapsibleContent>
                                                </Collapsible>
                                            </CardContent>
                                        </Card>
                                    ))
                                }
                            </div>
                        </>
                    )
                }

                <div className="flex justify-end my-4">
                    <Button
                        className="rounded-lg cursor-pointer"
                        onClick={() => router.push("/dashboard")}
                    >
                        Go Home
                    </Button>
                </div>

            </section>
        </main>
    )
}

export default FeedbackPage;