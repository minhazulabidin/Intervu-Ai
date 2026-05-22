"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";
import webcamImg from "../../../../../../../public/webcam.png";
import { Button } from "@/components/ui/button";
import useSpeechToText from "react-hook-speech-to-text";
import { Mic } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";

const RecordAnswerSection = ({
    mockInterviewQuestion,
    activeIndex,
    setActiveIndex,
    id,
    loading
}) => {

    const [isSaving, setIsSaving] = useState(false);
    const [userAnswer, setUserAnswer] = useState("");

    const currentQuestion = mockInterviewQuestion?.[activeIndex]?.question;
    const currentAnswer = mockInterviewQuestion?.[activeIndex]?.answer;

    const { user } = useUser();

    const {
        error,
        interimResult,
        isRecording,
        results,
        setResults,
        startSpeechToText,
        stopSpeechToText,
    } = useSpeechToText({
        continuous: true,
        useLegacyResults: false,
    });

    useEffect(() => {
        const finalTranscript = results
            .map((result) => result.transcript)
            .join(" ")
            .trim();

        setUserAnswer(finalTranscript);
    }, [results]);

    useEffect(() => {
        if (error) {
            toast.error("Speech recognition error");
        }
    }, [error]);

    // LOADING SKELETON
    if (loading) {
        return (
            <div className="flex flex-col justify-center items-center animate-pulse">
                {/* Webcam skeleton */}
                <div className="rounded-lg bg-gray-200 my-10 w-full h-75" />
                {/* Button skeleton */}
                <div className="h-10 w-40 bg-gray-200 rounded-lg" />
                {/* Text skeleton */}
                <div className="mt-4 space-y-2 w-full flex flex-col items-center">
                    <div className="h-3 w-1/2 bg-gray-200 rounded"></div>
                    <div className="h-3 w-1/3 bg-gray-200 rounded"></div>
                </div>

            </div>
        );
    }

    const handleSpeechToText = async () => {

        if (isRecording) {
            stopSpeechToText();
            setTimeout(async () => {
                if (!userAnswer || userAnswer.length < 10) {
                    toast.error("Answer is too short. Please record again.");
                    return;
                }
                if (!user?.primaryEmailAddress?.emailAddress) {
                    toast.error("User email not found");
                    return;
                }
                try {
                    setIsSaving(true);
                    const payload = {
                        currentQuestion,
                        currentAnswer,
                        userAnswer,
                        email: user?.primaryEmailAddress?.emailAddress,
                    };
                    const res = await axios.post(
                        `${process.env.NEXT_PUBLIC_SERVER_URL}/feedback/createFeedback`,
                        payload
                    );
                    if (res.status === 200) {
                        toast.success("Your answer recorded successfully");
                        setUserAnswer("");
                        setActiveIndex(activeIndex + 1);
                    }
                } catch (err) {
                    toast.error(
                        err?.response?.data?.message ||
                        "Failed to save feedback"
                    );
                    setUserAnswer("");
                } finally {
                    setIsSaving(false);
                }
            }, 1200);
        } else {
            setUserAnswer("");
            setResults([]);
            startSpeechToText();
            toast.success("Recording started");
        }
    };

    return (
        <div className="flex flex-col justify-center items-center order-1 md:order-2">

            {/* WEBCAM CONTAINER */}
            <div className="rounded-lg my-10 flex flex-col justify-center items-center w-full relative overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md shadow-lg shadow-purple-500/10">

                <Image
                    src={webcamImg}
                    width={200}
                    height={200}
                    alt="webcam"
                    className="absolute opacity-40"
                />

                <Webcam
                    mirrored={true}
                    style={{
                        height: 300,
                        width: "100%",
                        zIndex: 10,
                        borderRadius: "10px",
                    }}
                />

                {/* subtle glow overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.08),transparent_60%)] pointer-events-none"></div>

            </div>

            {/* BUTTON AREA */}
            {
                activeIndex > mockInterviewQuestion.length - 1 ? (

                    <Link href={`/dashboard/interview/${id}/feedback`}>
                        <Button className="cursor-pointer bg-linear-to-r from-purple-500 to-pink-500 text-white shadow-md shadow-pink-500/20 hover:scale-105 active:scale-95 transition">
                            End Interview
                        </Button>
                    </Link>

                ) : (

                    <Button
                        variant="outline"
                        className={`rounded-lg cursor-pointer border border-white/10 bg-white/5  hover:bg-white/10 transition ${isRecording && "text-red-400"}`}
                        onClick={handleSpeechToText}
                        disabled={isSaving}
                    >
                        {
                            isRecording ? (
                                <h2 className="flex items-center gap-1 text-red-400">
                                    <Mic />
                                    Recording...
                                </h2>
                            ) : (
                                <h2 className="text-purple-300">
                                    {isSaving ? "Saving..." : "Start Recording"}
                                </h2>
                            )
                        }
                    </Button>

                )
            }

            {/* INTERIM TEXT */}
            {
                interimResult && (
                    <p className="mt-4 text-sm text-white/60 italic">
                        {interimResult}
                    </p>
                )
            }

        </div>
    );
};

export default RecordAnswerSection;