"use client";

import { Button } from "@/components/ui/button";
import axios from "axios";
import { WebcamIcon } from "lucide-react";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";

const InterviewId = () => {
  const [question, setQuestion] = useState([]);
  const [enableWebCam, setEnableWebCam] = useState(false);

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
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);


  return <main>
    <div className="w-full max-w-7xl mx-auto">
      <div className="mt-10">
        <h2 className="font-bold text-2xl text-center uppercase">Let's get start</h2>
      </div>
      <div className="flex justify-center">
        {
          enableWebCam
            ?
            <Webcam
              onUserMedia={() => setEnableWebCam(true)}
              onUserMediaError={() => setEnableWebCam(false)}
              mirrored={true}
              style={{
                width: 300,
                height: 300,
              }}
            />
            :
            <div className="flex flex-col">
            <WebcamIcon className="p-20 h-82 w-82 bg-secondary rounded-lg" size={80} />
            <button className="bg-primary px-6 py-3 rounded-lg mt-3 text-white cursor-pointer hover:scale-102 active:scale-90 duration-200" onClick={()=>setEnableWebCam(true)}>Enable Webcam And Microphone</button>
            </div>
        }


      </div>
    </div>
  </main>;
};

export default InterviewId;