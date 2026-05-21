"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";
import webcamImg from "../../../../../../public/webcam.png";
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

            <div className="rounded-lg bg-black my-10 flex flex-col justify-center items-center w-full relative overflow-hidden">

                <Image
                    src={webcamImg}
                    width={200}
                    height={200}
                    alt="webcam"
                    className="absolute"
                />

                <Webcam
                    mirrored={true}
                    style={{
                        height: 300,
                        width: "100%",
                        zIndex: 10,
                    }}
                />
            </div>

            {
                activeIndex > mockInterviewQuestion.length - 1 ? (
                    <Link href={`/dashboard/interview/${id}/feedback`}>
                        <Button className="cursor-pointer">
                            End Interview
                        </Button>
                    </Link>

                ) : (
                    <Button
                        variant="outline"
                        className="rounded-lg cursor-pointer"
                        onClick={handleSpeechToText}
                        disabled={isSaving}
                    >
                        {
                            isRecording ? (
                                <h2 className="flex items-center gap-1 text-red-600">
                                    <Mic />
                                    Recording...
                                </h2>
                            ) : (
                                <h2 className="text-purple-600">
                                    {isSaving ? "Saving..." : "Start Recording"}
                                </h2>
                            )
                        }
                    </Button>
                )
            }

            {
                interimResult && (
                    <p className="mt-4 text-sm text-gray-500">
                        {interimResult}
                    </p>
                )
            }

        </div>
    );
};

export default RecordAnswerSection;