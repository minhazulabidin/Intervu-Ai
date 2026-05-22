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

            <h2 className="font-bold text-xl mb-3 text-neutral-200">
                Previous Mock Interview
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

                {
                    loading
                        ?
                        Array.from({ length: 6 }).map((_, index) => (
                            <div
                                key={index}
                                className='relative overflow-hidden border border-white/10 bg-white/3 backdrop-blur-xl rounded-2xl p-5 space-y-4 animate-pulse shadow-[0_0_30px_rgba(255,255,255,0.03)]'
                            >

                                {/* Glow Overlay */}
                                <div className='absolute inset-0 bg-linear-to-br from-pink-500/3 via-purple-500/2 to-transparent pointer-events-none'></div>
                                <div
                                    className=' relative h-5 w-3/4 rounded-md bg-linear-to-r from-white/8 via-white/16 to-white/8'
                                ></div>
                                <div className='relative space-y-2'>
                                    <div className='h-4 rounded-md bg-linear-to-r from-white/5 via-white/12 to-white/5'
                                    ></div>
                                    <div className='h-4 w-5/6 rounded-md bg-linear-to-r from-white/5 via-white/12 to-white/5'
                                    ></div>
                                </div>
                                <div className='flex justify-between items-center pt-4'>
                                    <div
                                        className='h-9 w-24 rounded-xl border border-white/10 bg-linear-to-r from-pink-500/10 via-purple-500/10 to-pink-500/10'
                                    ></div>
                                    <div className=' h-9 w-20 rounded-xl border border-white/10 bg-white/6'
                                    ></div>
                                </div>
                            </div>
                        ))
                        :
                        allMocks?.map((mock, idx) => (
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