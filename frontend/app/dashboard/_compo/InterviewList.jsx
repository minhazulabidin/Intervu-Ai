"use client"
import useUserStore from '@/utils/zustandStore/userStore'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const InterviewList = () => {

    const { user } = useUserStore();

    const [allMocks, setAllMocks] = useState([]);
    const [loading, setLoading] = useState(false);

    console.log(allMocks);

    useEffect(() => {

        const fetchData = async () => {

            try {

                setLoading(true);

                const res = await axios.get(
                    `${process.env.NEXT_PUBLIC_SERVER_URL}/questions/getQuestions`,
                    {
                        params: {
                            email: user?.email,
                        },
                    }
                );

                setAllMocks(res?.data?.data || []);

            } catch (error) {

                console.log(error);

            } finally {

                setLoading(false);
            }
        };

        if (user?.email) {
            fetchData();
        }

    }, [user]);




    return (
        <div>
            <h1>Previous Mock Interview</h1>

        </div>
    )
}

export default InterviewList