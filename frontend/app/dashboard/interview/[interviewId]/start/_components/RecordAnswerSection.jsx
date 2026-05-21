"use client";

import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import Webcam from "react-webcam";
import webcamImg from "../../../../../../public/webcam.png";
import { Button } from "@/components/ui/button";
import useSpeechToText from "react-hook-speech-to-text";
import { Mic } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";
import { useUser } from "@clerk/nextjs";

const RecordAnswerSection = ({
    mockInterviewQuestion,
    activeIndex,
    setActiveIndex,
}) => {
    const [isSaving, setIsSaving] = useState(false);
    const currentQuestion = mockInterviewQuestion?.[activeIndex]?.question;
    const currentAnswer = mockInterviewQuestion?.[activeIndex]?.answer;
    const [userAnswer, setUserAnswer] = useState("");
    // const mockQuesId = mockInterviewQuestion?.[activeIndex]?._id

    const { user, isLoaded } = useUser();

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
            console.log(error);
        }
    }, [error]);

    const handleSpeechToText = async () => {

        if (isRecording) {

            stopSpeechToText();

            setTimeout(async () => {


                if (!userAnswer || userAnswer.length < 10) {
                    toast.error(
                        "Answer is too short. Please record again."
                    );
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

                    const res = await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/feedback/createFeedback`, payload);

                    if (res.status === 200) {

                        toast.success("Your answer recorded successfully");
                        setUserAnswer("");
                        setActiveIndex(activeIndex + 1);
                        console.log(res?.data?.data);
                    }

                } catch (err) {

                    console.log(err);

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
        <div className="flex flex-col justify-center items-center">

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
                activeIndex === mockInterviewQuestion.length ? (
                    <Button

                    >
                        End Interview
                    </Button>
                ) :
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
                                    {
                                        isSaving
                                            ? "Saving..."
                                            : "Start Recording"
                                    }
                                </h2>
                            )
                        }
                    </Button>
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