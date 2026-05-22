"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import useUserStore from "@/utils/zustandStore/userStore";
import axios from "axios";
import { useRouter } from "next/navigation";

const AddNewQues = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [jobPosition, setJobPosition] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [jobExperience, setJobExperience] = useState(0);
  const [loading, setLoading] = useState(false);
  const user = useUserStore((state) => state.user);
  const [questionsData, setQuestionsData] = useState([]);
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const questionData = {
      jobPosition,
      jobDescription,
      jobExperience,
      email: user?.email,
    };

    try {
      setLoading(true);

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/questions/addQuestions`,
        questionData
      );

      setQuestionsData(response.data);

      const saveId = response?.data?.data?.savedId;

      setOpenDialog(false);

      router.push(`/dashboard/interview/${saveId}`);
    } catch (error) {
      console.log(error.response?.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div
        className="group relative overflow-hidden p-10 border border-white/10 rounded-2xl cursor-pointer bg-white/[0.03] backdrop-blur-xl hover:scale-105 transition-all duration-300 hover:shadow-[0_0_40px_rgba(236,72,153,0.15)] active:scale-100"
        onClick={() => setOpenDialog(true)}
      >
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/[0.05] via-purple-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

        {/* Border Glow */}
        <div className="absolute inset-0 rounded-2xl border border-white/5 pointer-events-none" />

        <h2
          className="relative z-10 text-lg text-center font-sans text-white/80 tracking-wide group-hover:text-white transition-colors duration-300"
        >
          + Add New
        </h2>
      </div>

      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent
          className="max-w-2xl! border border-white/10 bg-black/70 backdrop-blur-2xl text-white shadow-[0_0_60px_rgba(168,85,247,0.15)]"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/[0.04] via-purple-500/[0.03] to-transparent pointer-events-none rounded-xl" />

          <DialogHeader className="relative z-10">
            <DialogTitle className="text-white text-xl font-semibold tracking-wide">
              Tell us more about your job interview
            </DialogTitle>

            <DialogDescription className="text-white/50">
              Add Details about your job position/role, Job description and
              years of experience
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={onSubmit} className="relative z-10">
            <div>
              <div className="mb-4">
                <label className="text-white/70 text-sm">
                  Job Role/Job Position
                </label>

                <Input
                  className="mt-3 border-white/10 bg-white/[0.04] text-white placeholder:text-white/30 focus-visible:ring-1 focus-visible:ring-pink-500/50 focus-visible:border-pink-500/30 backdrop-blur-md"
                  type="text"
                  placeholder="Job Role/Job Position"
                  required
                  onChange={(e) => setJobPosition(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label className="text-white/70 text-sm">
                  Job Description/ Tech Stack (In Short)
                </label>

                <Textarea
                  className="mt-3 border-white/10 bg-white/[0.04] text-white placeholder:text-white/30 focus-visible:ring-1 focus-visible:ring-pink-500/50 focus-visible:border-pink-500/30 backdrop-blur-md"
                  type="text"
                  placeholder="Ex. React, Angular,NodeJs, NextJs, ETC..."
                  required
                  onChange={(e) => setJobDescription(e.target.value)}
                />
              </div>

              <div className="mb-2">
                <label className="text-white/70 text-sm">
                  Year's Of Experience
                </label>

                <Input
                  className="mt-3 border-white/10 bg-white/[0.04] text-white placeholder:text-white/30 focus-visible:ring-1 focus-visible:ring-pink-500/50 focus-visible:border-pink-500/30 backdrop-blur-md"
                  type="number"
                  placeholder="Ex. 5"
                  required
                  onChange={(e) => setJobExperience(Number(e.target.value))}
                />
              </div>

              <div className="flex items-center justify-end mt-6 gap-4">
                <Button 
                type="button" 
                variant="ghost"
                 onClick={() => setOpenDialog(false)} 
                 className="text-white/70 hover:text-white hover:bg-white/10 border border-white/10 cursor-pointer rounded-xl shadow-[0_0_25px_rgba(255,255,255,0.05)] transition-all duration-300"
                 >
                  Cancel
                </Button>

                <Button
                  type="submit"
                  disabled={loading}
                  className="bg-pink-800/[0.6] backdrop-blur-xl border border-pink-100/10 text-white hover:bg-pink-800/[0.50] hover:border-pink-400/20 rounded-xl shadow-[0_0_25px_rgba(255,255,255,0.05)] transition-all duration-300 cursor-pointer"
                >
                  {loading ? "Loading..." : "Start Interview"}
                </Button>
              </div>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddNewQues;