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
            <h2 className="font-bold text-xl mb-3">Previous Mock Interview</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {
                    allMocks && allMocks.map(mock => (
                        <MockCard key={mock._id} mock={mock} />
                    ))
                }
            </div>
        </div>
    )
}

export default InterviewList