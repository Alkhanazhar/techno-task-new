"use client";
import React, { useEffect, useRef, useState } from "react";
// import Orb from "../org";÷
import { BarChart, Cpu, LineChart, TrendingUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Orb from "@/components/org";
import { TextRoll } from "../TextRoll";

const Hero4 = () => {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % stats.length);
    }, 3000); // Switch every 1 second

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

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
  const floatVariant = (delay) => ({
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay,
        type: "spring",
        stiffness: 70,
      },
    },
  });

  const containerVariants = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 1, // 0.4s delay between each child
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1 },
  };
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75; // Adjust the speed here (0.5 = half speed, 2 = double speed)
    }
  }, []);

  const Icon = stats[currentIndex].icon;

  return (
    <div className="relative zoom-out min-h-[115vh] -mt-12 py-16 overflow-hidden">
      <img
        src="hero-bg.jpg"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute bottom-0 inset-0  bg-gradient-to-t from-[#060606] to-transparent z-10 pointer-events-none" />

      <div className="relative z-20 flex flex-col lg:flex-row items-center justify-center lg:justify-between min-h-screen py-10 px-4 md:px-32">
        <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
          <h1 className="text-[24px] md:text-[28px] lg:text-[34px] drop-shadow-2xl font-medium text-white leading-tight">
            97% of customer conversations are lost.
            <br className="block " />
            <span className="bg-gradient-to-r from-[#B462CE] via-[#c893d8] to-[#6D5DD3] text-transparent bg-clip-text">
              Only 3% get audited.
            </span>
          </h1>

          <p className="text-gray-200/90 text-[11px] md:text-[16px] mt-6 font-normal max-w-[650px] leading-relaxed">
            Convoze AI audits 100% of conversations, flags compliance risks,
            and delivers actionable insights to CX, QA, and compliance teams
            reducing churn, cutting review & driving smarter decisions in real
            time.
          </p>

          {/* Buttons */}
          <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-2 md:gap-6">
            <a href="#contact-us">
              <button className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] w-40 cursor-pointer text-white px-3 md:px-4 py-2 md:py-2.5 rounded-full font-medium hover:opacity-90 transition-all duration-300">
                Book a Demo
              </button>
            </a>

            <a href="#how-itworks">
              <button className="bg-white hidden sm:flex w-fit cursor-pointer text-purple-800 border md:border-none border-purple-500 px-3 md:px-5 py-2 md:py-2.5 rounded-full font-normal hover:bg-purple-500 hover:text-white transition-all duration-300">
                See How It Works
              </button>
            </a>

            <a href="#how-itworks">
              <button className="bg-white sm:hidden mx-auto w-fit cursor-pointer text-purple-800 border border-purple-500 px-3 md:px-5 py-2 md:py-2.5 rounded-full font-normal hover:bg-purple-500 hover:text-white transition-all duration-300">
                See How It Works
              </button>
            </a>
          </div>

          {/* Stats */}
          <h2 className="text-gray-200 text-sm md:text-xl mt-8 md:mt-12 mb-4 md:mb-6 font-medium tracking-wide">
            Our numbers speak for themselves
          </h2>

          <div className="sm:grid grid-cols-2 hidden sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 -my-4 max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto lg:mx-0">
            {stats.map((item, index) => (
              <div
                key={index}
                className={`relative rounded-2xl px-4 md:px-6 py-4 md:py-6 lg:py-8 text-left 
                transition duration-300 shadow-lg hover:shadow-purple-500/20
                bg-white/10 backdrop-blur-sm border border-white/15 hover:scale-105
                ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="absolute top-2 right-4">
                  <div className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center shadow-md bg-white/10 backdrop-blur-sm border border-white/15">
                    <item.icon className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 text-white" />
                  </div>
                </div>
                <div className="text-lg md:text-2xl lg:text-3xl font-normal text-white mb-2">
                  {item.value}
                </div>
                <div className="text-xs mt-2 md:mt-4 text-gray-300">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="relative w-[90%] max-w-sm mx-auto rounded-2xl px-4 md:px-6 sm:hidden py-4 my-8 overflow-hidden md:py-6 lg:py-8 text-left transition duration-300 shadow-lg hover:shadow-purple-500/20 bg-white/10 backdrop-blur-sm border border-white/15 hover:scale-105"
              initial={{ opacity: 0, x: 0 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div className="absolute top-2 right-4">
                <div className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full flex items-center justify-center shadow-md bg-white/10 backdrop-blur-sm border border-white/15">
                  <Icon className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 text-white" />
                </div>
              </div>
              <div className="text-lg md:text-2xl lg:text-3xl font-normal text-white mb-2">
                {stats[currentIndex].value}
              </div>
              <div className="text-xs mt-2 md:mt-4 text-gray-300">
                {stats[currentIndex].label}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Side - Dashboard */}
        <motion.div
          className="relative w-full max-w-[100%] sm:max-w-[80%] lg:max-w-[47%] zoom-out-more h-[300px] xs:h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] px-2 xs:px-4 sm:px-6 lg:px-12 "
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {/* Centered Orb with z-index */}
          <Orb />

          {/* Main centered Customer Analysis panel */}
          <motion.div className="flex items-center justify-center h-full z-10">
            <motion.img
              src="/Customer analysis.png"
              alt="Customer Analysis"
              className="w-[16rem] xs:w-[18rem] sm:w-[22rem] md:w-[28rem] lg:w-[34rem] xl:w-[36rem] brightness-95 rounded-xl object-contain custom-shadow"
              variants={itemVariants}
              animate={{ y: [0, -15, 0] }}
              transition={{
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              }}
            />
          </motion.div>

          {/* Dashboard image behind */}
          <motion.img
            src="/sentiment.png"
            alt="Dashboard"
            className="absolute top-4 xs:top-6 sm:top-8 md:top-10 left-[55%] xs:left-[60%] sm:left-[40%] md:left-[35%] w-[6rem] xs:w-[8rem] sm:w-[10rem] md:w-[12rem] lg:w-[14rem] rounded-xl object-contain z-5 custom-shadow hidden sm:flex"
            variants={itemVariants}
            animate={{ y: [0, -20, 0] }}
            transition={{
              y: { duration: 7, repeat: Infinity, ease: "easeInOut" },
            }}
          />

          {/* Small group images with responsive width */}
          <motion.img
            src="/Group 1000004368.png"
            alt="Group 4368"
            className="absolute top-8 xs:top-10 sm:top-16 md:top-20 left-2 xs:left-4 sm:left-8 md:left-12 w-[6rem] xs:w-[8rem] sm:w-[10rem] md:w-[12rem] lg:w-[14rem] rounded-md z-5 custom-shadow"
            variants={itemVariants}
            animate={{ y: [0, -10, 0] }}
            transition={{
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            }}
          />
          <motion.img
            src="/Group 1000004369.png"
            alt="Group 4369"
            className="absolute top-4 xs:top-6 sm:top-10 md:top-12 right-2 xs:right-4 sm:right-6 md:right-8 w-[6rem] xs:w-[8rem] sm:w-[10rem] md:w-[12rem] lg:w-[14rem] rounded-md z-5 custom-shadow"
            variants={itemVariants}
            animate={{ y: [0, -12, 0] }}
            transition={{
              y: { duration: 5.5, repeat: Infinity, ease: "easeInOut" },
            }}
          />
          <motion.img
            src="/Group 1000004370.png"
            alt="Group 4370"
            className="absolute bottom-6 xs:bottom-6 sm:bottom-10 md:bottom-16 left-2 xs:left-4 sm:left-8 md:left-12 w-[6rem] xs:w-[8rem] sm:w-[10rem] md:w-[12rem] lg:w-[14rem] rounded-md z-5 custom-shadow"
            variants={itemVariants}
            animate={{ y: [0, -8, 0] }}
            transition={{
              y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
            }}
          />
          <motion.img
            src="/Group 1000004371.png"
            alt="Group 4371"
            className="absolute bottom-4 xs:bottom-6 sm:bottom-8 md:bottom-16 right-2 xs:right-4 sm:right-6 md:right-8 w-[6rem] xs:w-[8rem] sm:w-[10rem] md:w-[12rem] lg:w-[14rem] rounded-md z-5 custom-shadow"
            variants={itemVariants}
            animate={{ y: [0, -10, 0] }}
            transition={{
              y: { duration: 6.5, repeat: Infinity, ease: "easeInOut" },
            }}
          />
        </motion.div>
      </div>

      {/* Mobile Dashboard */}
      {/* <div className="lg:hidden w-full mt-8 relative h-64 sm:h-72 overflow-hidden">
        <ScoreBox score="6" delay={0} position="top-4 right-4" />
        <ScoreBox score="6" delay={400} position="top-4 left-4" />
        <ChartBox
          delay={800}
          position="bottom-4 left-1/2 transform -translate-x-1/2"
        />
      </div> */}
    </div>
  );
};

export default Hero4;
