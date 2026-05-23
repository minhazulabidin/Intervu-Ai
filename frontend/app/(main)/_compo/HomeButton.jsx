"use client";
import React from 'react'
import useUserStore from "@/utils/zustandStore/userStore";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HomeButton = () => {
    const { user } = useUserStore();
    return (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 w-full">
            <Link href={`/${user ? "dashboard" : "sign-in"}`} className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto h-12 md:h-14 px-6 md:px-8 text-base md:text-lg rounded-xl bg-pink-600 hover:bg-pink-700 transition-all duration-300 hover:scale-105 shadow-lg shadow-pink-500/30 cursor-pointer">
                    Get Started
                </Button>
            </Link>

            <Link href="/how-it-works">
            <Button
                variant="outline"
                className="w-full sm:w-auto h-12 md:h-14 px-6 md:px-8 text-base md:text-lg rounded-xl border-white/20 bg-white/5 backdrop-blur-md hover:bg-white/10 text-white hover:text-white/80 cursor-pointer"
            >
                Learn More
            </Button>
            </Link>
        </div>
    )
}

export default HomeButton