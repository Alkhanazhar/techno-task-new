"use client";
import React, { useEffect, useRef } from "react";
// import Orb from "../org";÷
import { BarChart, Cpu, LineChart, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Orb from "@/components/org";

const Hero = () => {
  const videoRef = useRef(null);

  const stats = [
    {
      value: "100%",
      label: "conversations audited",
      icon: BarChart,
    },
    {
      value: "60%",
      label: "less time on manual QA",
      icon: Cpu,
    },
    {
      value: "35%",
      label: "increase in CSAT",
      icon: TrendingUp,
    },
    // {
    //   value: "2X",
    //   label: "coaching efficiency",
    //   icon: LineChart,
    // },
  ];

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75; // Adjust the speed here (0.5 = half speed, 2 = double speed)
    }
  }, []);

  return (
    <div className="relative md:-mt-12 -mt-6 zoom-out">
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:50px_50px] select-none opacity-70",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
        )}
      />

      <div className="w-full relative flex flex-col md:flex-row items-start justify-between">
        {/* Orb container */}
        <div className="relative w-full h-[70vh] md:h-[115vh]">
          <Orb />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 backdrop-brightness-90 bg-black/30 z-10 pointer-events-none" />

        {/* Content */}
        <div className="absolute z-20 inset-0 flex flex-col items-center justify-center text-center px-4 md:px-12 pointer-events-none">
          <h1 className="text-lg sm:text-2xl md:text-5xl font-semibold text-white leading-tight drop-shadow-lg">
            97% of customer conversations are lost.
            <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-[#B462CE] via-[#c893d8] to-[#6D5DD3] text-transparent bg-clip-text font-bold">
              Only 3% get audited
            </span>
          </h1>

          <section className="w-full mt-6 md:mt-8">
            <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 justify-center">
              {stats.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="relative rounded-2xl p-4 md:p-6 text-left
        transition duration-300 shadow-lg hover:shadow-purple-500/20
        bg-white/10 backdrop-blur-md border border-white/20"
                >
                  <div className="absolute top-3 right-3">
                    <div
                      className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shadow-md 
            bg-white/10 backdrop-blur-md border border-white/20"
                    >
                      <item.icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>
                  </div>

                  <div className="text-base md:text-2xl font-semibold text-white mb-2">
                    {item.value}
                  </div>
                  <div className="text-xs md:text-sm text-gray-300">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

        <p className="text-gray-200 text-[10px] md:text-[16px] mt-6 font-normal max-w-[650px] leading-relaxed">
           Convoze AI analyses 100% of conversations, flags compliance risks, and delivers actionable insights to CX, QA, and compliance teams reducing churn, cutting review  
            & driving smarter decisions in
            real time.
          </p>


          <div className="mt-6 md:mt-8 flex flex-wrap justify-center gap-3 md:gap-4 pointer-events-auto">
            <button
              className="bg-white text-purple-800 px-4 py-2 md:px-6 md:py-3 rounded-full font-medium 
          hover:bg-purple-700 hover:text-white transition-all duration-300 shadow-md text-sm md:text-base"
            >
              Book a Demo
            </button>
            <button
              className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-medium 
          hover:opacity-90 transition-all duration-300 shadow-md text-sm md:text-base"
            >
              See How It Works
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
