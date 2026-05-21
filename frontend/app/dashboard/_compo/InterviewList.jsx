"use client"
import useUserStore from '@/utils/zustandStore/userStore'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner'
import MockCard from './MockCard'

const InterviewList = () => {

    const { user } = useUserStore();

    const [allMocks, setAllMocks] = useState([]);
    const [loading, setLoading] = useState(false);

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

                toast.error(error.message);

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

            <h2 className="font-bold text-xl mb-3">
                Previous Mock Interview
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

                {
                    loading
                        ?
                        Array.from({ length: 6 }).map((_, index) => (
                            <div
                                key={index}
                                className="
                                    rounded-xl
                                    border
                                    p-5
                                    space-y-4
                                    animate-pulse
                                "
                            >
                                <div className="h-5 bg-gray-200 rounded w-3/4"></div>
                                <div className="space-y-2">
                                    <div className="h-4 bg-gray-200 rounded"></div>
                                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                                </div>
                                <div className="flex justify-between items-center pt-4">
                                    <div className="h-9 w-24 bg-gray-200 rounded-lg"></div>
                                    <div className="h-9 w-20 bg-gray-200 rounded-lg"></div>
                                </div>
                            </div>
                        ))
                        :
                        allMocks?.map((mock,idx) => (
                            <MockCard
                                key={mock._id}
                                mock={mock}
                                idx={idx}
                            />
                        ))
                }

            </div>

        </div>
    )
}

export default InterviewList