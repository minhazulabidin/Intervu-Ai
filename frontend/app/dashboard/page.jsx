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
    <div className='max-w-full md:max-w-7xl mx-auto p-10'>

      {
        loading
          ?
          <div>

            {/* Heading Skeleton */}

            <div className='space-y-3 mb-8 animate-pulse'>

              <div className='h-8 w-40 bg-gray-200 rounded'></div>

              <div className='h-5 w-72 bg-gray-200 rounded'></div>

            </div>

            {/* Add Question Card Skeleton */}

            <div className='grid grid-cols-1 md:grid-cols-3 my-5'>

              <div
                className='
                  border
                  rounded-xl
                  p-6
                  space-y-5
                  animate-pulse
                '
              >

                <div className='h-6 w-40 bg-gray-200 rounded'></div>

                <div className='space-y-3'>
                  <div className='h-4 bg-gray-200 rounded'></div>
                  <div className='h-4 bg-gray-200 rounded w-5/6'></div>
                </div>

                <div className='h-10 w-32 bg-gray-200 rounded-lg'></div>

              </div>

            </div>

            {/* Interview List Skeleton */}

            <div className='mt-10'>

              <div className='h-6 w-56 bg-gray-200 rounded mb-5 animate-pulse'></div>

              <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>

                {
                  Array.from({ length: 6 }).map((_, index) => (
                    <div
                      key={index}
                      className='
                        border
                        rounded-xl
                        p-5
                        space-y-4
                        animate-pulse
                      '
                    >

                      <div className='h-5 w-3/4 bg-gray-200 rounded'></div>

                      <div className='space-y-2'>
                        <div className='h-4 bg-gray-200 rounded'></div>
                        <div className='h-4 bg-gray-200 rounded w-5/6'></div>
                      </div>

                      <div className='flex justify-between items-center pt-4'>
                        <div className='h-9 w-24 bg-gray-200 rounded-lg'></div>
                        <div className='h-9 w-20 bg-gray-200 rounded-lg'></div>
                      </div>

                    </div>
                  ))
                }
              </div>
            </div>
          </div>
          :
          <>
            <h2 className='text-2xl font-bold'>
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

    </div>
  )
}

export default DashBoard