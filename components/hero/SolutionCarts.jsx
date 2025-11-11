"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BarChart3, UploadCloud, Brain, Waves } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Upload",
    step: "STEP 01",
    subtext:
      "Seamlessly import your call recordings, chats, or emails into Convoze.",
    icon: UploadCloud,
    image: "step1.jpg",
  },
  {
    id: 2,
    title: "Transcribe",
    step: "STEP 02",
    subtext:
      "AI converts every conversation into accurate, searchable text in real time.",
    icon: Waves,
    image: "step2.jpg",
  },
  {
    id: 3,
    title: "Analyze",
    step: "STEP 03",
    subtext:
      "Identify sentiment, compliance risks, and performance patterns instantly.",
    icon: Brain,
    image: "step3.jpg",
  },
  {
    id: 4,
    title: "Insights",
    step: "STEP 04",
    subtext:
      "Get clear, actionable intelligence to improve CX, QA, and team efficiency.",
    icon: BarChart3,
    image: "step4.jpg",
  },
];

export default function SolutionCarts() {
  const [activeStep, setActiveStep] = useState(steps[0]);

  return (
    <section
      className="bg-gradient-to-tl  to-[#21082b]  md:zoom-out from-[#27022e] text-black  px-4 md:px-10 md:py-16 py-8 space-y-8"
      id="how-itworks"
    >
      <div className="text-center space-y-4 md:space-y-8">
        <h2 className="text-2xl md:text-4xl font-semibold  text-transparent bg-clip-text bg-gradient-to-r to-[#B462CE] from-[#3F2AB2]">
          <span className=" !font-light md:text-4xl text-xl text-neutral-50">
            What Sets{" "}
          </span>
          Convoze
          <span className=" !font-light md:text-4xl text-xl text-neutral-50">
            {" "}
            Apart from Other Solutions
          </span>
        </h2>
        <p className="text-gray-200 !font-light text-sm md:text-xl max-w-4xl mx-auto">
          Convoze doesn’t just “listen” — it understands, evaluates, and guides
          your team at every moment, without interrupting their workflow.
        </p>

        {/* CTA Button */}
        {/* <div className="">
          <button className="bg-gradient-to-r text-xs sm:text-base cursor-pointer text-sm md:text-base from-purple-500 to-blue-500 text-white md:px-6 md:py-3 px-3 py-1.5 rounded-full font-medium hover:opacity-90 transition duration-300">
            Try it yourself
          </button>
        </div> */}
      </div>

      <div className="max-w-7xl mx-auto  h-full flex flex-col !mt-12 md:flex-row md:gap-12 gap-6 items-start">
        {/* Left Side - scrollable on mobile */}
        <div className="gap-6 md:flex md:flex-col grid grid-cols-2  mx-auto h-full  w-full md:w-[19%]">
          {steps.map((step) => (
            <motion.div
              key={step.id}
              onClick={() => setActiveStep(step)}
              className={`shadow-[0_3px_10px_rgb(0,0,0,0.2)]  transition-all duration-300 hover:scale-95 rounded-3xl md:px-4 px-4 md:py-3 py-4 cursor-pointer group ${
                activeStep.id === step.id
                  ? "border-purple-600 shadow-2xl bg-gradient-to-tl to-[#B462CE] from-[#3F2AB2]"
                  : "border-zinc-700 bg-gradient-to-br to-[#371d3e] from-[#3F2AB2]"
              }`}
            >
              <div className="relative z-10 flex  justify-between md:justify-center gap-2 md:gap-4">
                {/* Icon for Desktop */}
                {/* <div className="bg-gradient-to-r hidden to-[#B462CE] from-[#3F2AB2] my-auto md:w-10 w-6 md:h-10 h-5 rounded-full md:flex items-center justify-center text-white">
                  <step.icon className="md:w-5 w-4 md:h-5 h-4" />
                </div> */}

                <div className="flex-1 md:text-left">
                  <div className="flex gap-3 items-center mb-1">
                    <div className="bg-gradient-to-r md:hidden to-[#B462CE] from-[#3F2AB2] md:w-10 w-6 md:h-7 h-5 rounded-full flex items-center justify-center text-white">
                      <step.icon className="md:w-4 w-3 md:h-4 h-3" />
                    </div>
                    <h4
                      className={`md:text-sm text-[10px] text-gray-100 font-medium  ${
                        activeStep.id === step.id && "text-white"
                      }`}
                    >
                      {step.step}
                    </h4>
                  </div>

                  <h3
                    className={`md:text-lg text-sm font-semibold text-gray-200 mb-1  ${
                      activeStep.id === step.id && "text-white"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[10px] text-gray-200 font-light mb-1">
                    {step.subtext}
                  </p>
                </div>

                {/* Icon for Mobile */}
                <div className="bg-gradient-to-r hidden to-[#B462CE] from-[#3F2AB2] md:w-10 w-6 md:h-7 h-5 rounded-full flex items-center justify-center text-white">
                  <step.icon className="md:w-4 w-3 md:h-4 h-3" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Side for Desktop Only */}
        <div className="relative w-full flex-1 md:h-[480px] flex items-center mt-4 hidden  md:block">
          {steps.map((step) => {
            const isActive = step.id === activeStep.id;
            return (
              <motion.img
                key={step.id}
                src={step.image}
                alt={step.title}
                className={`absolute inset-0 shadow-[0_3px_10px_rgb(0,0,0,0.4)] aspect-video w-full h-full object-fill rounded-3xl  transition-all duration-500 ${
                  isActive
                    ? "z-30 opacity-100 scale-105"
                    : "z-10 opacity-30 scale-[0.90]"
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: isActive ? 1 : 0.3 }}
                transition={{ duration: 0.5, delay: isActive ? 0.1 : 0 }}
              />
            );
          })}
        </div>
      </div>

      {/* Right Side Image on Mobile Only */}
      <div className="relative  flex-1 h-[240px] -mt-2  md:hidden  rounded-3xl !overflow-hidden ">
        {steps.map((step) => {
          const isActive = step.id === activeStep.id;
          return (
            <motion.img
              key={step.id}
              src={step.image}
              alt={step.title}
              className={`absolute inset-0 w-full origin-left object-left h-full object-cover !rounded-2xl shadow-lg transition-all duration-500 ${
                isActive
                  ? "z-30 opacity-100 scale-105"
                  : "z-10 opacity-30 scale-[0.90]"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: isActive ? 1 : 0.3 }}
              transition={{ duration: 0.5, delay: isActive ? 0.1 : 0 }}
            />
          );
        })}
      </div>
    </section>
  );
}
