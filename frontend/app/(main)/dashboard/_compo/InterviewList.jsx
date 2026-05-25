"use client"
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner'
import MockCard from './MockCard'

import useUserStore from '@/zustandStore/userStore'
import api from '@/lib/api'
import { InterViewListLoading } from './DashboardLoading'
import { Effect } from '@/components/animate-ui/primitives/effects/effect'

const InterviewList = () => {
    const { user } = useUserStore();
    const [allMocks, setAllMocks] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {

        const fetchData = async () => {

            try {

                setLoading(true);
                const res = await api.get(`/questions/getQuestions`,
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
            <Effect
                delay={400}
                fade={true}
                slide={true}
                className=""
                transition={true}
            >
                <h2 className="font-bold text-xl mb-3 text-neutral-200">
                    Previous Mock Interview
                </h2>
            </Effect>


            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

                {
                    loading ? <InterViewListLoading />
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