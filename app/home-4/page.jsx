"use client";
import React, { useEffect, useRef, useState } from "react";
// import Orb from "../org";÷
import { BarChart, Cpu, LineChart, TrendingUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Orb from "@/components/org";

const Hero = () => {
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

  const ScoreBox = ({ score, delay, position }) => (
    <motion.div
      variants={floatVariant(delay)}
      initial="hidden"
      animate={isVisible ? "show" : "hidden"}
      className={`absolute bg-white rounded-2xl shadow-2xl p-3 w-36 h-16 ${position} sm:w-40 md:w-44`}
    >
      <div className="flex items-center justify-between h-full">
        <div>
          <div className="text-xs text-gray-500 font-medium">POSITIVE</div>
          <div className="text-2xl font-bold text-gray-800 mt-1">{score}</div>
        </div>
        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-xs">{score}</span>
        </div>
      </div>
    </motion.div>
  );

  const CustomerAnalysisBox = ({ delay, position }) => (
    <div
      className={`absolute bg-white rounded-2xl shadow-2xl p-4 md:p-6 w-72 h-56 md:w-80 md:h-64
        transform transition-all duration-700 hover:scale-105 hover:shadow-3xl
        ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}
        ${position}`}
      style={{
        transitionDelay: `${delay}ms`,
        animation: isVisible
          ? `float 8s ease-in-out infinite ${delay}ms`
          : "none",
      }}
    >
      <div className="h-full flex flex-col">
        <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face&auto=format"
            alt="Customer"
            className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
          />
          <div className="flex-1">
            <h3 className="text-sm md:text-lg font-bold text-gray-800">
              Customer Analysis
            </h3>
            <p className="text-xs text-gray-500 hidden md:block">
              Real-time sentiment analysis, mood, and experience using the
              latest AI
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face&auto=format"
            alt="Analyst"
            className="w-12 h-12 md:w-16 md:h-16 rounded-lg object-cover"
          />
          <div className="flex-1">
            <div className="text-xs md:text-sm font-medium text-gray-700 mb-2">
              Customer Profile
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">Satisfaction</span>
                <span className="font-medium">High</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">Engagement</span>
                <span className="font-medium">Active</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-gray-50 rounded-lg p-2 md:p-3">
          <div className="text-xs text-gray-600 mb-2">Sentiment Analysis</div>
          <svg className="w-full h-12 md:h-16" viewBox="0 0 300 60">
            <polyline
              fill="none"
              stroke="#3b82f6"
              strokeWidth="2"
              points="10,40 40,20 70,35 100,15 130,30 160,10 190,25 220,5 250,20 280,15"
              className={`transition-all duration-3000 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{
                strokeDasharray: 400,
                strokeDashoffset: isVisible ? 0 : 400,
              }}
            />
            <polyline
              fill="none"
              stroke="#ef4444"
              strokeWidth="2"
              points="10,45 40,35 70,40 100,25 130,45 160,20 190,40 220,25 250,35 280,30"
              className={`transition-all duration-3000 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
              style={{
                strokeDasharray: 400,
                strokeDashoffset: isVisible ? 0 : 400,
                transitionDelay: "500ms",
              }}
            />
          </svg>
          <div className="flex items-center gap-2 md:gap-4 mt-2">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-xs text-gray-600">Positive</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span className="text-xs text-gray-600">Negative</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ChartBox = ({ delay, position }) => (
    <div
      className={`absolute bg-white rounded-2xl shadow-2xl p-3 md:p-4 w-48 h-40 md:w-56 md:h-48
        transform transition-all duration-700 hover:scale-105 hover:shadow-3xl
        ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}
        ${position}`}
      style={{
        transitionDelay: `${delay}ms`,
        animation: isVisible
          ? `float 7s ease-in-out infinite ${delay}ms`
          : "none",
      }}
    >
      <div className="h-full flex flex-col">
        <h4 className="text-xs md:text-sm font-medium text-gray-700 mb-3">
          Call Resolution
        </h4>

        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-20 h-20 md:w-24 md:h-24">
            <svg
              className="w-full h-full transform -rotate-90"
              viewBox="0 0 36 36"
            >
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="3"
              />
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#8b5cf6"
                strokeWidth="3"
                strokeDasharray="85, 100"
                className={`transition-all duration-2000 ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
                style={{ strokeDashoffset: isVisible ? 0 : 100 }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-base md:text-lg font-bold text-purple-600">
                85%
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 mt-2 md:mt-3">
          <div className="text-center p-2 bg-purple-50 rounded">
            <div className="text-xs text-gray-600">Resolved</div>
            <div className="text-xs md:text-sm font-bold text-purple-600">
              342
            </div>
          </div>
          <div className="text-center p-2 bg-gray-50 rounded">
            <div className="text-xs text-gray-600">Pending</div>
            <div className="text-xs md:text-sm font-bold text-gray-600">58</div>
          </div>
        </div>
      </div>
    </div>
  );

  const SmallChartBox = ({ delay, position, title, value }) => (
    <div
      className={`absolute bg-white rounded-2xl shadow-2xl p-3 md:p-4 w-40 h-28 md:w-48 md:h-32
        transform transition-all duration-700 hover:scale-105 hover:shadow-3xl
        ${isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}
        ${position}`}
      style={{
        transitionDelay: `${delay}ms`,
        animation: isVisible
          ? `float 5s ease-in-out infinite ${delay}ms`
          : "none",
      }}
    >
      <div className="h-full flex flex-col justify-between">
        <div>
          <h4 className="text-xs font-medium text-gray-500 mb-1">{title}</h4>
          <div className="text-xl md:text-2xl font-bold text-gray-800">
            {value}
          </div>
        </div>

        <div className="h-6 md:h-8 bg-gradient-to-r from-purple-400 to-purple-600 rounded relative overflow-hidden">
          <div
            className="absolute inset-0 bg-white/30 transform origin-left transition-transform duration-2000"
            style={{
              transform: isVisible ? "scaleX(0.75)" : "scaleX(0)",
              transitionDelay: `${delay + 1000}ms`,
            }}
          />
        </div>
      </div>
    </div>
  );
  const Icon = stats[currentIndex].icon;

  return (
    <div className="relative zoom-out min-h-[115vh] -mt-6 py-10">
      {/* Background */}
      <img
        src="hero-bg.jpg"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute bottom-0 inset-0  bg-gradient-to-t from-[#060606] to-transparent z-10 pointer-events-none" />

      {/* Main Flex Container */}
      <div className="relative z-20 flex flex-col lg:flex-row items-center justify-center lg:justify-between min-h-screen p-10 px-20">
        {/* Left Side - Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
          <h1 className="text-[24px] md:text-[28px] lg:text-[34px] drop-shadow-2xl font-medium text-white leading-tight">
            97% of customer conversations are lost.
            <br className="hidden md:block " />
            <span className="bg-gradient-to-r from-[#B462CE] via-[#c893d8] to-[#6D5DD3] text-transparent bg-clip-text">
              Only 3% get audited.
            </span>
          </h1>

         <p className="text-gray-200 text-[10px] md:text-[16px] mt-6 font-normal max-w-[650px] leading-relaxed">
           Convoze AI analyses 100% of conversations, flags compliance risks, and delivers actionable insights to CX, QA, and compliance teams reducing churn, cutting review  
             & driving smarter decisions in
            real time.
          </p>


          {/* Buttons */}
          <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 md:gap-6 justify-center lg:justify-start">
            <button className="bg-white cursor-pointer text-purple-800 border md:border-none border-purple-500 px-3 md:px-4 py-2 md:py-2.5 rounded-full font-medium hover:bg-black hover:text-white transition-all duration-300">
              Book a Demo
            </button>
            <button className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] cursor-pointer text-white px-3 md:px-5 py-2 md:py-3 rounded-full font-normal hover:opacity-90 transition-all duration-300">
              See How It Works
            </button>
          </div>

          {/* Stats */}
          <h2 className="text-gray-200 text-sm md:text-xl mt-8 md:mt-12 mb-4 md:mb-6 font-medium tracking-wide">
            Our numbers speak for themselves
          </h2>
          <div className="sm:grid grid-cols-2 hidden sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto lg:mx-0">
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
              key={currentIndex} // Key ensures re-render on index change
              className="relative rounded-2xl px-4 md:px-6 sm:hidden py-4 my-8 overflow-hidden md:py-6 lg:py-8 text-left transition duration-300 shadow-lg hover:shadow-purple-500/20 bg-white/10 backdrop-blur-sm border border-white/15 hover:scale-105"
              initial={{ opacity: 0, x: 20 }} // Slide in from right
              animate={{ opacity: 1, x: 0 }} // Center
              exit={{ opacity: 0, x: -20 }} // Slide out to left
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

export default Hero;
