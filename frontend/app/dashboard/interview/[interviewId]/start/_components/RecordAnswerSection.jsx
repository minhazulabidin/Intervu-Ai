import Image from 'next/image'
import React from 'react'
import Webcam from 'react-webcam'
import webcamImg from "../../../../../../public/webcam.png"
import { Button } from '@/components/ui/button'

const RecordAnswerSection = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <div className=' rounded-lg bg-black my-10 flex flex-col justify-center items-center w-full'>
                <Image src={webcamImg} weidth={200} height={200} alt='webcam' className='absolute' />
                <Webcam
                    mirrored={true}
                    style={{
                        height: 300,
                        weidth: "100%",
                        zIndex: 10
                    }}
                />
            </div>
            <Button variant='outline' className="rounded-lg cursor-pointer">Record</Button>
        </div>
    )
}

export default RecordAnswerSection