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
    <div className="relative md:-mt-12 -mt-6 zoom-out ">
      {/* Top gradient (light to transparent) */}
      {/* <div className="absolute top÷-0 inset-x-0 h-24 bg-gradient-to-b from-[#060606] to-transparent z-10 pointer-events-none" /> */}
      <img src="hero-bg.jpg" className="absolute inset-0 w-full h-full" />

      {/* Bottom gradient (light to transparent) */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#060606] to-transparent z-10 pointer-events-none" />

      {/* Grid Background */}
      {/* <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:50px_50px] select-none opacity-70 ",
          "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]"
        )}
      /> */}

      {/* Half Circle Overlay with mask */}

      {/* Orb + Hero Content */}
      <div className="w-full relative flex items-start justify-between gap-4">
        {/* <Orb />÷ */}
        <div className="relative w-full  h-[115vh]">
           <video
            ref={videoRef}
            className="w-full object-cover h-[115vh]"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/hero-bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video> 
        </div>

        <div className="absolute inset-0 backdrop-brightness-100 bg-black/20 z-10" />

        {/* <div className="absolute z-20 text-left inset-0 h-full flex justify-start flex-col w-full px-4 md:px-7 mt-6">
          <h1 className="text-[18px] drop-shadow-2xl mt-16 md:mt-32 md:text-[38px] md:px-0 px-4 font-medium text-white leading-tight">
            97% of customer conversations are lost.
            <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-[#B462CE] via-[#c893d8] to-[#6D5DD3] text-transparent bg-clip-text">
              Only 3% get audited
            </span>
          </h1>
          <section className="w-full mt-12 pt-2 pb-8 text-white text-left">
            <h2 className="text-gray-200 md:text-xl text-sm mb-6 font-medium tracking-wide">
              Our numbers speak for themselves
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 max-w-xl">
              {stats.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  className="w-50 relative max-w-md rounded-2xl md:px-6 md:py-8 p-4 text-left 
               transition duration-300 shadow-lg hover:shadow-purple-500/20
               bg-white/10 backdrop-blur-sm border border-white/15"
                >
                  <div className="absolute top-2 right-4">
                    <div className="md:w-10 md:h-10 w-8 h-8 rounded-full flex items-center justify-center shadow-md bg-white/10 backdrop-blur-sm border border-white/15">
                      <item.icon className="md:w-5 md:h-5 w-3 h-3 text-white" />
                    </div>
                  </div>

                  <div className="md:text-3xl text-lg font-normal text-white mb-2">
                    {item.value}
                  </div>
                  <div className="text-xs mt-4 text-gray-300">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </section>
          <p className="text-gray-200 text-[10px] md:text-[16px] mt-6 font-normal max-w-[650px]">
            100% conversations audited, flags compliance risks & delivers
            actionable insights to CX, QA & compliance teams reducing churn,
            cutting review time
            <br className="md:block hidden" /> & driving smarter decisions in
            real time.
          </p>

          <div className="mt-6 font-light md:text-[15px] text-xs flex flex-row justify-start items-center gap-2 md:gap-4">
            <button className="bg-white cursor-pointer text-purple-800 border md:border-none border-purple-500 md:px-3.5 px-3 md:py-2.5 py-2 rounded-full font-medium hover:bg-black hover:text-white transition-all duration-300">
              Book a Demo
            </button>
            <button className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] cursor-pointer text-white md:px-4 px-3 md:py-3 py-2 rounded-full font-normal hover:opacity-90 transition-all duration-300">
              See How It Works
            </button>
          </div>
        </div> */}
        <div className="absolute inset-0 z-20 flex flex-col justify-center px-6 md:px-12 lg:px-20 max-w-6xl">
          <h1 className="text-[18px] drop-shadow-2xl mt-12 md:mt-24 md:text-[38px] font-medium text-white leading-tight text-left">
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


          <div className="mt-8 flex flex-row gap-3 md:gap-6">
            <button className="bg-white cursor-pointer text-purple-800 border md:border-none border-purple-500 md:px-4 px-3 md:py-2.5 py-2 rounded-full font-medium hover:bg-black hover:text-white transition-all duration-300">
              Book a Demo
            </button>
            <button className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] cursor-pointer text-white md:px-5 px-3 md:py-3 py-2 rounded-full font-normal hover:opacity-90 transition-all duration-300">
              See How It Works
            </button>
          </div>

          <h2 className="text-gray-200 md:text-xl text-sm mt-12 mb-6 font-medium tracking-wide">
            Our numbers speak for themselves
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-4 max-w-3xl">
            {stats.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="relative rounded-2xl md:px-6 md:py-8 p-4 text-left 
              transition duration-300 shadow-lg hover:shadow-purple-500/20
              bg-white/10 backdrop-blur-sm border border-white/15"
              >
                <div className="absolute top-2 right-4">
                  <div className="md:w-10 md:h-10 w-8 h-8 rounded-full flex items-center justify-center shadow-md bg-white/10 backdrop-blur-sm border border-white/15">
                    <item.icon className="md:w-5 md:h-5 w-3 h-3 text-white" />
                  </div>
                </div>

                <div className="md:text-3xl text-lg font-normal text-white mb-2">
                  {item.value}
                </div>
                <div className="text-xs mt-4 text-gray-300">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
