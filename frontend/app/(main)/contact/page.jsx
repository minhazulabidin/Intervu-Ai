"use client";

import { useState } from "react";
import { toast } from "sonner";
import api from "@/lib/api";
import useUserStore from "@/zustandStore/userStore";

export default function ContactPage() {
    const { user } = useUserStore();
    const [formData, setFormData] = useState({
        name: user?.fullName || "",
        email: user?.email ||"",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);

            const res = await api.post(`/contact/createContact`, formData);

            toast.success(res.data.message);

            setFormData({
                name: "",
                email: "",
                message: "",
            });
        } catch (error) {
            toast.error("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    

    return (
        <div className="min-h-screen bg-black text-white px-4 md:px-8 py-16 relative overflow-hidden">

            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-150 bg-pink-500/10 blur-[140px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-20">

                {/* Left Side */}
                <div>
                    <p className="text-pink-400 tracking-[0.3em] uppercase text-sm mb-4">
                        Contact Us
                    </p>

                    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                        Let’s Build
                        <span className="bg-linear-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                            {" "}Something Amazing
                        </span>
                    </h1>

                    <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-xl">
                        Have questions, feedback, or collaboration ideas? Send us a message and we’ll get back to you as soon as possible.
                    </p>

                    <div className="mt-10 space-y-4">
                        <div className="rounded-2xl border border-white/10 bg-white/3 backdrop-blur-xl p-5">
                            <p className="text-white/40 text-sm mb-1">Response Time</p>
                            <h3 className="font-medium text-lg">Within 24 Hours</h3>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="relative isolate overflow-hidden rounded-3xl border border-white/10 bg-white/4 backdrop-blur-2xl p-6 md:p-8 shadow-[0_0_40px_rgba(255,255,255,0.03)]">

                    {/* Glow */}
                    <div className="absolute inset-0 opacity-100 bg-linear-to-br from-pink-500/6 via-purple-500/3 to-transparent pointer-events-none" />

                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-2">
                            Send Message
                        </h2>

                        <p className="text-white/50 mb-8">
                            Fill out the form below and send your message directly.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-5">

                            <div>
                                <label className="text-sm text-white/60 mb-2 block">
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    onChange={handleChange}
                                    defaultValue={user?.fullName}
                                    required
                                    placeholder="Enter your name"
                                    className="w-full rounded-2xl border border-white/10 bg-white/4 backdrop-blur-xl px-5 py-4 outline-none focus:border-pink-500/30 transition-all duration-300"
                                />
                            </div>

                            <div>
                                <label className="text-sm text-white/60 mb-2 block">
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    defaultValue={user?.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your email"
                                    className="w-full rounded-2xl border border-white/10 bg-white/4 backdrop-blur-xl px-5 py-4 outline-none focus:border-pink-500/30 transition-all duration-300"
                                />
                            </div>

                            <div>
                                <label className="text-sm text-white/60 mb-2 block">
                                    Message
                                </label>

                                <textarea
                                    rows={6}
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="Write your message..."
                                    className="w-full rounded-2xl border border-white/10 bg-white/4 backdrop-blur-xl px-5 py-4 outline-none resize-none focus:border-pink-500/30 transition-all duration-300"
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="group relative overflow-hidden w-full rounded-2xl border border-pink-500/20 bg-white/5 py-4 font-semibold shadow-[0_0_30px_rgba(236,72,153,0.08)] hover:border-pink-500/40 transition-all duration-300"
                            >
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-linear-to-r from-pink-500/10 via-purple-500/6 to-transparent transition-all duration-500" />

                                <span className="relative z-10">
                                    {loading ? "Sending..." : "Send Message"}
                                </span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}