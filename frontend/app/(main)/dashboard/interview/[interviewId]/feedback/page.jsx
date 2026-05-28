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
import api from '@/lib/api';
import { toast } from 'sonner';

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

                const res = await api.get(
                    `/questions/getQuestions/${id}`
                );

                setFeedbacks(res?.data?.data?.feedback || []);

            } catch (err) {
                toast.error(err.message);
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
            <main className="relative text-white bg-black">

                <section className="w-full max-w-7xl mx-auto p-4 h-screen mt-20 animate-pulse">

                    {/* HEADER SKELETON (match exact spacing & hierarchy) */}
                    <div className="space-y-3">

                        <div className="h-6 w-48 rounded-lg bg-white/5 border border-white/10"></div>
                        <div className="h-5 w-72 rounded-lg bg-white/5 border border-white/10"></div>
                        <div className="h-5 w-60 rounded-lg bg-white/5 border border-white/10"></div>
                        <div className="h-4 w-96 rounded-lg bg-white/5 border border-white/10"></div>

                    </div>

                    {/* CARDS SKELETON */}
                    <div className="mt-8 space-y-4">

                        {Array.from({ length: 4 }).map((_, i) => (
                            <div
                                key={i}
                                className="border border-white/10 bg-white/5 backdrop-blur-md rounded-lg p-4 space-y-3"
                            >

                                {/* Title line (matches real card trigger) */}
                                <div className="h-5 w-3/4 rounded bg-white/10"></div>

                                {/* content lines */}
                                <div className="h-4 rounded bg-white/10"></div>

                                <div className="h-4 w-5/6 rounded bg-white/10"></div>

                            </div>
                        ))}

                    </div>

                </section>

            </main>
        );
    }

    return (
        <main className='bg-black'>
            <section className="relative p-4 min-h-screen text-white ">

                <div className="absolute -top-40 md:-top-50 left-1/2 -translate-x-1/2 w-87.5 h-87.5 md:w-175 md:h-175 bg-pink-500/10 blur-[100px] md:blur-[120px] rounded-full z-0 pointer-events-none" />

                {/* Background Gradient */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.08),transparent_30%)] pointer-events-none" />

                {/* CONTENT */}
                <div className="relative z-10 w-full max-w-7xl mx-auto mt-20 h-auto">

                    {
                        feedBacks.length === 0 ? (

                            <div className="flex justify-center items-center h-3/4">
                                <h2 className="font-bold md:text-2xl text-xl text-white/80">
                                    No feedback found
                                </h2>
                            </div>

                        ) : (
                            <>

                                {/* HEADER */}
                                <div className="space-y-3">

                                    <h2 className="text-green-400 font-bold lg:text-3xl md:text-2xl text-xl">
                                        Congratulations!
                                    </h2>

                                    <h3 className="text-white/80 font-bold lg:text-2xl md:text-xl text-lg">
                                        Here is your interview feedback.
                                    </h3>

                                    <h4 className={`lg:text-xl md:text-lg text-md font-semibold ${overallRating >= 0 && overallRating <= 5 ? 'text-red-400' : overallRating >= 6 && overallRating <= 8 ? 'text-yellow-300' : 'text-green-400'}`}>
                                        Your overall interview rating is {overallRating}/10
                                    </h4>

                                    <p className='text-sm text-white/60'>
                                        Find below interview question with correct answer, Your answer and feedback for improvement
                                    </p>

                                </div>

                                {/* CARDS */}
                                <div className='h-auto'>
                                    {
                                        feedBacks.map(feedback => (
                                            <Card
                                                key={feedback._id}
                                                className="mx-auto w-full my-5 border border-white/10 bg-white/5 backdrop-blur-md text-white"
                                            >
                                                <CardContent>
                                                    <Collapsible className="rounded-md">
                                                        <CollapsibleTrigger
                                                            className="w-full text-left"
                                                            render={
                                                                <Button
                                                                    variant="ghost"
                                                                    className="w-full cursor-pointer justify-between text-white/80 hover:text-neutral-50 hover:bg-white/5 flex items-center gap-2"
                                                                >
                                                                    <span className="flex-1 min-w-0 truncate">
                                                                        {feedback?.currentQuestion}
                                                                    </span>

                                                                    <ChevronDownIcon className="ml-auto shrink-0 text-white/60 group-data-[state=open]:rotate-180 transition" />
                                                                </Button>
                                                            }
                                                        />

                                                        <CollapsibleContent className="overflow-hidden">

                                                            <div className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">

                                                                <div className='space-y-2 mt-3 w-full'>

                                                                    {/* Rating */}
                                                                    <h3 className=" font-bold text-base border rounded-lg p-3 border-white/10 bg-white/5 text-white/80">
                                                                        Rating: {feedback?.rating}
                                                                    </h3>

                                                                    {/* Your Answer */}
                                                                    <p className="text-base border rounded-lg p-3 border-red-500/20 bg-red-500/10 text-red-200">
                                                                        <span className="font-bold text-red-300">Your Answer: </span>
                                                                        {feedback?.userAnswer}
                                                                    </p>
                                                                    {/* Correct Answer */}
                                                                    <p className=" text-base border rounded-lg p-3  border-green-500/20 bg-green-500/10 text-green-200">
                                                                        <span className="font-bold text-green-300">Correct Answer: </span>
                                                                        {feedback?.currentAnswer}
                                                                    </p>

                                                                    {/* Feedback */}
                                                                    <p className="text-base border rounded-lg p-3 border-blue-500/20 bg-blue-500/10 text-blue-200">
                                                                        <span className="font-bold text-blue-300">Feedback: </span>
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

                    {/* BUTTON */}
                    <div className="flex justify-end my-4">
                        <Button
                            className=" rounded-lg cursor-pointer bg-linear-to-r from-purple-500 to-pink-500 text-white shadow-md shadow-pink-500/20 hover:scale-105 active:scale-95 transition"
                            onClick={() => router.push("/dashboard")}
                        >
                            Go Home
                        </Button>
                    </div>

                </div>
            </section>
        </main>
    )
}

export default FeedbackPage;