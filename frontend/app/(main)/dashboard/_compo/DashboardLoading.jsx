import React from 'react'

export const DashboardLoading = () => {
    return (
        <div className="mt-20">

            {/* Heading Skeleton */}

            <div className='space-y-3 mb-8 animate-pulse'>

                <div
                    className='h-8 w-40 rounded-md bg-linear-to-r from-white/6 via-white/[0.14]to-white/[0.06]'
                ></div>
                <div
                    className='h-5 w-72 rounded-md bg-linear-to-r from-white/5  via-white/10  to-white/5'
                ></div>
            </div>

            {/* Add Question Card Skeleton */}
            <div className='grid grid-cols-1 md:grid-cols-3 my-5'>
                <div
                    className='relative overflow-hidden border border-white/10 bg-white/3 backdrop-blur-xl rounded-2xl p-10 space-y-5 animate-pulse shadow-[0_0_30px_rgba(255,255,255,0.03)]'
                >
                    <div
                        className=' relative h-10 w-32 rounded-xl bg-linear-to-r from-pink-500/10 via-purple-500/10 to-pink-500/10 border border-white/10'
                    ></div>
                </div>
            </div>

            {/* Interview List Skeleton */}

            <div className='mt-10'>

                <div
                    className='h-6 w-56 rounded-md mb-5 animate-pulse bg-linear-to-r from-white/6 via-white/[0.14] to-white/6'
                ></div>
                <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                    {
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
                                <div className='flex md:flex-row flex-col gap-3 justify-between items-center pt-4'>
                                    <div
                                        className='md:h-9 h-5  w-full rounded-xl border border-white/10 bg-linear-to-r from-pink-500/10 via-purple-500/10 to-pink-500/10'
                                    ></div>
                                    <div className='md:h-9 h-5  w-full rounded-xl border border-white/10 bg-white/6'
                                    ></div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}


export const InterViewListLoading = () => {
    return (
        <>
            {
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
                        <div className='flex md:flex-row flex-col gap-3 justify-between items-center pt-4'>
                            <div
                                className='md:h-9 h-5 w-full rounded-xl border border-white/10 bg-linear-to-r from-pink-500/10 via-purple-500/10 to-pink-500/10'
                            ></div>
                            <div className='md:h-9 h-5 w-full rounded-xl border border-white/10 bg-white/6'
                            ></div>
                        </div>
                    </div>
                ))
            }
        </>
    )
}