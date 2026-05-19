"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Webcam from 'react-webcam'
import webcamImg from "../../../../../../public/webcam.png"
import { Button } from '@/components/ui/button'
import useSpeechToText from 'react-hook-speech-to-text'
import { Mic } from 'lucide-react'
import { toast } from 'sonner'

const RecordAnswerSection = () => {
    const [userAnswer, setUserAnswer] = useState('')
    const {
        error,
        interimResult,
        isRecording,
        results,
        startSpeechToText,
        stopSpeechToText,
    } = useSpeechToText({
        continuous: true,
        useLegacyResults: false
    });

    useEffect(() => {
        results && results.map(result => setUserAnswer(prev => prev + result.transcript))
    }, [results])

    const handleSpeechToText = () => {
        if (isRecording) {
            stopSpeechToText()
            if (userAnswer.length < 10) {
                toast("Error while saving your answer, Please record again")
                return;
            }
        } else {
            startSpeechToText()
        }
    }

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
            <Button
                variant='outline'
                className="rounded-lg cursor-pointer"
                onClick={handleSpeechToText}
            >
                {
                    isRecording ? <h2 className='flex items-center gap-1 text-red-600'><Mic /> Recording</h2> : <h2 className='text-purple-600'>Start Recording</h2>
                }
            </Button>

        </div>
    )
}

export default RecordAnswerSection