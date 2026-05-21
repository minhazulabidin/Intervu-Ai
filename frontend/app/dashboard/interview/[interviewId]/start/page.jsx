"use client";

import axios from "axios";
import React, { use, useEffect, useState } from "react";
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
            }finally{
                setLoading(false)
            }
        };

        if (id) {
            fetchMockInterviewQuestion();
        }
    }, [id]);


    return <main className="w-full max-w-7xl mx-auto">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
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