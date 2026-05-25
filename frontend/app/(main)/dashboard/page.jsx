"use client"

import React, { useEffect, useState } from 'react'
import AddNewQues from './_compo/AddNewQues'
import InterviewList from './_compo/InterviewList'
import { DashboardLoading } from './_compo/DashboardLoading'

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

      <section className="max-w-full md:max-w-7xl mx-auto md:p-10 p-2">
        {
          loading ? <DashboardLoading />
            :
            <>
              <h2 className='text-2xl font-bold text-neutral-200 mt-20'>
                Dashboard
              </h2>
              <h2 className='text-gray-500'>
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