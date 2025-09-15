"use client";
import React, { useEffect, useRef } from "react";
import Orb from "../org";
import { cn } from "./lib/utils";
import Customers from "./Customers";
import { BarChart, Cpu, LineChart, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import CardSwap, { Card } from "./CardSwap";

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
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  return (
    <div
      className="relative md:-mt-12 -mt-6 overflow-hidden"
      id="main-hero-section"
    >
      <img src="hero-bg.jpg" className="absolute inset-0 w-full h-full" />

      <div className="w-full relative md:flex items-start justify-between gap-4">
        <div className="relative w-full md:h-[115vh]"></div>

        <div className="absolute inset-0 backdrop-brightness-100 bg-black/20 z-10" />
        <div className="md:absolute z-20 text-left inset-0 h-full flex flex-col justify-start w-full px-4 md:px-7 mt-6">
          <h1 className="text-[18px] drop-shadow-2xl mt-16 md:mt-42 md:text-[38px] font-medium text-white leading-tight">
            97% of customer conversations are lost.
            <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-[#B462CE] via-[#c893d8] to-[#6D5DD3] text-transparent bg-clip-text">
              Only 3% get audited
            </span>
          </h1>

          <p className="text-gray-200 text-[10px] md:text-[16px] mt-6 font-normal max-w-[650px] leading-relaxed">
           Convoze AI analyses 100% of conversations, flags compliance risks, and delivers actionable insights to CX, QA, and compliance teams reducing churn, cutting review  
            & driving smarter decisions in
            real time.
          </p>

          <div className="mt-6 flex flex-row justify-start items-center gap-2 md:gap-4 font-light md:text-[15px] text-xs">
            <button className="bg-white cursor-pointer text-purple-800 border md:border-none border-purple-500 md:px-3.5 px-3 md:py-2.5 py-2 rounded-full font-medium hover:bg-black hover:text-white transition-all duration-300">
              Book a Demo
            </button>
            <button className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] cursor-pointer text-white md:px-4 px-3 md:py-3 py-2 rounded-full font-normal hover:opacity-90 transition-all duration-300">
              See How It Works
            </button>
          </div>

          <section className="w-full md:mt-12 mt-6 text-white text-left">
            <h2 className="text-gray-200 md:text-lg text-sm md:mb-6 mb-3 font-medium tracking-wide">
              Our numbers speak for themselves
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-xl">
              {stats.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  className="relative rounded-xl md:px-4 md:py-6 p-3 text-left 
        transition duration-300 shadow-md hover:shadow-purple-500/20
        bg-white/10 backdrop-blur-sm border border-white/10"
                >
                  <div className="absolute top-2 right-3">
                    <div className="md:w-8 md:h-8 w-6 h-6 rounded-full flex items-center justify-center shadow-sm bg-white/10 backdrop-blur-sm border border-white/10">
                      <item.icon className="md:w-4 md:h-4 w-3 h-3 text-white" />
                    </div>
                  </div>

                  <div className="md:text-2xl text-base font-normal text-white mb-1">
                    {item.value}
                  </div>
                  <div className="text-[10px] mt-2 text-gray-300">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>

        <div className="relative h-[300px] md:h-[600px]">
          <CardSwap
            cardDistance={0}
            verticalDistance={0}
            // cardDistance={60}
            // verticalDistance={70}
            delay={5000}
            pauseOnHover={false}
          >
            <Card>
              <img src="hero-bg-1.png" className="h-full" />
            </Card>

            <Card>
              <img src="hero-bg-2.png" className="h-full" />
            </Card>

            <Card>
              <img src="hero-bg-3.png" className="h-full" />
            </Card>
            <Card>
              <img src="hero-bg-2.png" className="h-full" />
            </Card>
          </CardSwap>
        </div>
      </div>
    </div>
  );
};

export default Hero;
