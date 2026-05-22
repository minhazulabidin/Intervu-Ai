"use client"

import React, { useEffect, useState } from 'react'
import AddNewQues from './_compo/AddNewQues'
import InterviewList from './_compo/InterviewList'

const DashBoard = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer);

  }, []);

  return (

    <main className="relative overflow-hidden bg-black min-h-screen">
      <div className="absolute -top-40 md:-top-50 left-1/2 -translate-x-1/2 w-87.5 h-87.5 md:w-175 md:h-175 bg-pink-500/10 blur-[100px] md:blur-[120px] rounded-full z-0 pointer-events-none" />

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.08),transparent_30%)] pointer-events-none" />

      {/* Noise Overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')] pointer-events-none" />

      <section className="max-w-full md:max-w-7xl mx-auto p-10  ">
        {
          loading
            ?
            <div>

              {/* Heading Skeleton */}

              <div className='space-y-3 mb-8 animate-pulse'>

                <div
                  className='h-8 w-40 rounded-md bg-gradient-to-r from-white/[0.06] via-white/[0.14]to-white/[0.06]'
                ></div>
                <div
                  className='h-5 w-72 rounded-md bg-gradient-to-r from-white/[0.05]  via-white/[0.10]  to-white/[0.05]'
                ></div>
              </div>

              {/* Add Question Card Skeleton */}
              <div className='grid grid-cols-1 md:grid-cols-3 my-5'>
                <div
                  className='relative overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-xl rounded-2xl p-6 space-y-5 animate-pulse shadow-[0_0_30px_rgba(255,255,255,0.03)]'
                >

                  {/* Glow Overlay */}
                  <div className='absolute inset-0 bg-gradient-to-br from-pink-500/[0.03] via-purple-500/[0.02] to-transparent pointer-events-none'></div>
                  <div
                    className='relative h-6 w-40 rounded-md bg-gradient-to-r from-white/[0.08] via-white/[0.16] to-white/[0.08]'
                  ></div>

                  <div className='relative space-y-3'>
                    <div
                      className=' h-4 rounded-md bg-gradient-to-r from-white/[0.05] via-white/[0.12] to-white/[0.05]'
                    ></div>
                    <div
                      className='h-4 w-5/6 rounded-md bg-gradient-to-r from-white/[0.05] via-white/[0.12] to-white/[0.05]'
                    ></div>
                  </div>
                  <div
                    className=' relative h-10 w-32 rounded-xl bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-pink-500/10 border border-white/10'
                  ></div>
                </div>
              </div>

              {/* Interview List Skeleton */}

              <div className='mt-10'>

                <div
                  className='h-6 w-56 rounded-md mb-5 animate-pulse bg-gradient-to-r from-white/[0.06] via-white/[0.14] to-white/[0.06]'
                ></div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                  {
                    Array.from({ length: 6 }).map((_, index) => (
                      <div
                        key={index}
                        className='relative overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-xl rounded-2xl p-5 space-y-4 animate-pulse shadow-[0_0_30px_rgba(255,255,255,0.03)]'
                      >

                        {/* Glow Overlay */}
                        <div className='absolute inset-0 bg-gradient-to-br from-pink-500/[0.03] via-purple-500/[0.02] to-transparent pointer-events-none'></div>
                        <div
                          className=' relative h-5 w-3/4 rounded-md bg-gradient-to-r from-white/[0.08] via-white/[0.16] to-white/[0.08]'
                        ></div>
                        <div className='relative space-y-2'>
                          <div className='h-4 rounded-md bg-gradient-to-r from-white/[0.05] via-white/[0.12] to-white/[0.05]'
                          ></div>
                          <div className='h-4 w-5/6 rounded-md bg-gradient-to-r from-white/[0.05] via-white/[0.12] to-white/[0.05]'
                          ></div>
                        </div>
                        <div className='flex justify-between items-center pt-4'>
                          <div
                            className='h-9 w-24 rounded-xl border border-white/10 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-pink-500/10'
                          ></div>
                          <div className=' h-9 w-20 rounded-xl border border-white/10 bg-white/[0.06]'
                          ></div>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
            :
            <>
              <h2 className='text-2xl font-bold text-neutral-200 mt-10'>
                Dashboard
              </h2>
              <h2 className='text-gray-500 text-neutral-200'>
                Create and start you Ai Mockup
              </h2>
              <div className='grid grid-cols-1 md:grid-cols-3 my-5'>
                <AddNewQues />
              </div>
              <InterviewList />
            </>
        }

      </section>
    </main>
  )
}

export default DashBoard