"use client";

import { Button } from "@/components/ui/button";
import axios from "axios";
import { Lightbulb, WebcamIcon } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";

const InterviewId = () => {
  const [question, setQuestion] = useState(null);
  const [enableWebCam, setEnableWebCam] = useState(false);
  const [loading, setLoading] = useState(true);

  const params = useParams();
  const id = params?.interviewId;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/questions/getQuestions/${id}`
        );

        setQuestion(response?.data?.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  // LOADING SKELETON

  if (loading) {
    return (
      <main>
        <div className="w-full max-w-7xl mx-auto md:px-0 px-3">

          <div className="mt-10">
            <div className="h-8 w-64 bg-gray-200 rounded mx-auto animate-pulse"></div>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-10">

            {/* LEFT SKELETON */}
            <div className="space-y-4">

              <div className="border px-5 py-6 space-y-3 rounded-lg animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>

              <div className="border p-5 rounded-lg border-yellow-300 bg-yellow-100 space-y-2 animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                <div className="h-3 bg-gray-200 rounded w-full"></div>
                <div className="h-3 bg-gray-200 rounded w-5/6"></div>
              </div>

            </div>

            {/* RIGHT SKELETON */}
            <div className="flex justify-center">
              <div className="w-75 h-75 bg-gray-200 rounded-lg animate-pulse"></div>
            </div>

          </div>

          {/* BUTTON SKELETON */}
          <div className="flex justify-end mt-5">
            <div className="h-10 w-40 bg-gray-200 rounded-lg animate-pulse"></div>
          </div>

        </div>
      </main>
    );
  }

  return (
    <main>
      <div className="w-full max-w-7xl mx-auto md:px-0 px-3">
        <div className="mt-10">
          <h2 className="font-bold text-2xl text-center uppercase">
            Let's get start
          </h2>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-10">
          <div className="md:order-1 order-2">
            <div className="border px-5 py-3 space-y-3 rounded-lg ">
              <h2>Job Position: {question?.jobPosition}</h2>
              <h2>Tech Stack: {question?.jobDescription}</h2>
              <h2>Experience: {question?.jobExperience} Years</h2>
            </div>

            <div className="border p-5 rounded-lg mt-5 border-yellow-300 bg-yellow-100 text-yellow-500 space-y-2">
              <h2 className="flex item-center font-bold">
                <Lightbulb /> Information
              </h2>
              <p>
                Enable Video Web Cam and Microphone to Start your Al Generated Mock Interview, It Has 5 question which you can answer and at the last you will get the report on the basis of your answer. NOTE: We never record your video, Web cam access you can disable at any time if you want.
              </p>
            </div>
          </div>

          <div className="flex justify-center h-auto md:order-2 order-1">
            {enableWebCam ? (
              <Webcam
                onUserMedia={() => setEnableWebCam(true)}
                onUserMediaError={() => setEnableWebCam(false)}
                mirrored={true}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "10px",
                  objectFit: "cover",
                }}
              />
            ) : (
              <div className="flex flex-col w-full">
                <WebcamIcon
                  className="h-82 w-full bg-black text-gray-300 rounded-lg"
                  size={80}
                />
                <Button
                  variant="ghost"
                  className="px-6 py-3 rounded-lg mt-3 cursor-pointer"
                  onClick={() => setEnableWebCam(true)}
                >
                  Enable Webcam And Microphone
                </Button>
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-end mt-5">
          <Link href={`/dashboard/interview/${id}/start`}>
            <Button className="bg-primary px-6 py-3 rounded-lg mt-3 text-white cursor-pointer hover:scale-102 active:scale-90 duration-200">
              Start Interview
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default InterviewId;