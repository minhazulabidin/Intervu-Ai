"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import QuestionSection from "./_components/QuestionSection";
import RecordAnswerSection from "./_components/RecordAnswerSection";

const StartPage = () => {
    const [loading, setLoading] = useState(true);
    const [mockInterviewQuestion, setMockInterviewQuestion] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);

    const params = useParams();
    const id = params?.interviewId;

    useEffect(() => {
        const fetchMockInterviewQuestion = async () => {
            try {
                const response = await axios.get(
                    `${process.env.NEXT_PUBLIC_SERVER_URL}/questions/getQuestions/${id}`
                );
                setMockInterviewQuestion(response?.data?.data?.qaList);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false)
            }
        };

        if (id) {
            fetchMockInterviewQuestion();
        }
    }, [id]);


    return <main className=" bg-black min-h-screen">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-5 px-2 md:mt-20 mt-10 w-full max-w-7xl mx-auto">
            <div className="absolute -top-40 md:-top-50 left-1/2 -translate-x-1/2 w-87.5 h-87.5 md:w-175 md:h-175 bg-pink-500/10 blur-[100px] md:blur-[120px] rounded-full z-0 pointer-events-none" />

            {/* Background Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.08),transparent_30%)] pointer-events-none" />

            {/* Noise Overlay */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')] pointer-events-none" />
            {/* questions*/}
            <QuestionSection
                mockInterviewQuestion={mockInterviewQuestion}
                activeIndex={activeIndex}
            />

            {/* video / audio*/}
            <RecordAnswerSection
                mockInterviewQuestion={mockInterviewQuestion}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
                id={id}
            />
        </section>
    </main>;
};

export default StartPage;