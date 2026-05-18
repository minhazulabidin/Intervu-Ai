"use client";

import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const InterviewId = () => {
  const [question, setQuestion] = useState([]);

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

  console.log(question);

  return <div>InterviewId</div>;
};

export default InterviewId;