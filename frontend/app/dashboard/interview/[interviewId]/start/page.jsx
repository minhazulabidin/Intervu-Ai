"use client";

import axios from "axios";
import React, { use, useEffect, useState } from "react";
import { useParams } from "next/navigation";
import QuestionSection from "./_components/QuestionSection";
import RecordAnswerSection from "./_components/RecordAnswerSection";

const StartPage = () => {
    const [interviewData, setInterviewData] = useState([]);
    const [mockInterViewquestion, setMockInterviewQuestion] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);

    const params = useParams();
    const id = params?.interviewId;

    useEffect(() => {
        const fetchMockInterviewQuestion = async () => {
            try {
                const response = await axios.get(
                    `${process.env.NEXT_PUBLIC_SERVER_URL}/questions/getQuestions/${id}`
                );

                setMockInterviewQuestion(response?.data?.data);
                setInterviewData(response?.data?.data?.qaList);
            } catch (error) {
                console.log(error);
            }
        };

        if (id) {
            fetchMockInterviewQuestion();
        }
    }, [id]);

    console.log(mockInterViewquestion, interviewData);

    return <main className="w-full max-w-7xl mx-auto">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* questions*/}
            <QuestionSection
                interviewData={interviewData}
                activeIndex={activeIndex}
            />

            {/* video / audio*/}
            <RecordAnswerSection />
        </section>
    </main>;
};

export default StartPage;