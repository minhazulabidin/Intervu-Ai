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
      <main className="relative text-white min-h-screen bg-black">

        <div className="w-full max-w-7xl mx-auto md:px-0 px-3 mt-20">

          {/* TITLE */}
          <div>
            <div className="h-8 w-64 bg-white/5 border border-white/10 rounded-lg mx-auto animate-pulse"></div>
          </div>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-10">

            {/* LEFT PANEL */}
            <div className="md:order-1 order-2 space-y-5">

              {/* Job Info (same padding + border + radius) */}
              <div className="px-5 py-3 space-y-3 rounded-lg border border-white/10 bg-white/5 animate-pulse">
                <div className="h-4 bg-white/10 rounded w-3/4"></div>
                <div className="h-4 bg-white/10 rounded w-2/3"></div>
                <div className="h-4 bg-white/10 rounded w-1/2"></div>
              </div>

              {/* Information Box (same layout exactly) */}
              <div className="p-5 rounded-lg border border-yellow-400/20 bg-yellow-500/10 space-y-2 animate-pulse">

                {/* header line */}
                <div className="h-4 bg-yellow-200/20 rounded w-1/3"></div>

                {/* paragraph lines (match real text flow) */}
                <div className="h-3 bg-yellow-200/10 rounded w-full"></div>
                <div className="h-3 bg-yellow-200/10 rounded w-11/12"></div>
                <div className="h-3 bg-yellow-200/10 rounded w-5/6"></div>

                <div className="h-3 bg-yellow-200/10 rounded w-3/4"></div>
              </div>

            </div>

            {/* RIGHT PANEL (IMPORTANT: match webcam area exactly) */}
            <div className="flex justify-center md:order-2 order-1">

              {/* webcam box exact replacement */}
              <div className="w-full rounded-lg overflow-hidden border border-white/10 bg-white/5 animate-pulse">

                {/* maintain aspect feel like webcam */}
                <div className="w-full aspect-video bg-white/5"></div>

              </div>

            </div>

          </div>

          {/* BUTTON AREA */}
          <div className="flex justify-end mt-5">

            <div className="h-10 w-40 bg-white/5 border border-white/10 rounded-lg animate-pulse"></div>

          </div>

        </div>
      </main>
    );
  }

  return (
    <main className="relative text-white min-h-screen bg-black">

      <div className="absolute -top-40 md:-top-50 left-1/2 -translate-x-1/2 w-87.5 h-87.5 md:w-175 md:h-175 bg-pink-500/10 blur-[100px] md:blur-[120px] rounded-full z-0 pointer-events-none" />

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.08),transparent_30%)] pointer-events-none" />

      {/* Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')] pointer-events-none" />

      <div className="relative w-full max-w-7xl mx-auto md:px-0 px-3 mt-20">

        <div className="">
          <h2 className="font-bold text-2xl text-center uppercase text-white/90 tracking-wide">
            Let's get start
          </h2>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-5 mt-10">

          {/* LEFT PANEL */}
          <div className="md:order-1 order-2">

            <div className="px-5 py-3 space-y-3 rounded-lg border border-white/10 bg-white/5 backdrop-blur-md text-white/80">
              <h2>Job Position: {question?.jobPosition}</h2>
              <h2>Tech Stack: {question?.jobDescription}</h2>
              <h2>Experience: {question?.jobExperience} Years</h2>
            </div>

            <div className="p-5 rounded-lg mt-5 border border-yellow-400/30 bg-yellow-500/10 text-yellow-200 space-y-2 backdrop-blur-md">
              <h2 className="flex items-center font-bold gap-2 text-yellow-200">
                <Lightbulb /> Information
              </h2>
              <p className="text-yellow-100/80">
                Enable Video Web Cam and Microphone to Start your AI Generated Mock Interview, It Has 5 question which you can answer and at the last you will get the report on the basis of your answer. NOTE: We never record your video, Web cam access you can disable at any time if you want.
              </p>
            </div>

          </div>

          {/* RIGHT PANEL */}
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
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              />
            ) : (
              <div className="flex flex-col w-full">

                <WebcamIcon
                  className="h-82 w-full bg-white/5 text-white/30 rounded-lg border border-white/10"
                  size={80}
                />

                <Button
                  variant="ghost"
                  className="px-6 py-3 rounded-lg mt-3 cursor-pointer bg-white/5 text-white/80 border border-white/10 hover:bg-white/10 transition hover:text-neutral-50"
                  onClick={() => setEnableWebCam(true)}
                >
                  Enable Webcam And Microphone
                </Button>

              </div>
            )}

          </div>
        </div>

        <div className="flex justify-end my-5">
          <Link href={`/dashboard/interview/${id}/start`}>
            <Button className="bg-linear-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-lg mt-3 text-white cursor-pointer hover:scale-105 active:scale-95 duration-200 shadow-lg shadow-pink-500/20 ">
              Start Interview
            </Button>
          </Link>
        </div>

      </div>
    </main>
  );
};

export default InterviewId;