import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const HeroSaas = () => {
  return (
    <motion.div
      className="w-full min-h-screen bg-gradient-to-tl to-[#21082b] from-[#27022e] shadow-xl relative overflow-hidden"
      //   initial="hidden"
      //   whileInView="visible"
      //   viewport={{ once: true }}
      variants={fadeIn}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-100/90 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      <div className="w-full max-w-sm h-full xs:max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">
        <div
          className="flex flex-col lg:flex-row 
                 items-center justify-center lg:justify-between 
                 gap-12 xs:gap-8 sm:gap-10 md:gap-12 lg:gap-16 
                 h-screen"
        >
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-2 sm:space-y-2">
            <div className="space-y-2 sm:space-y-3 md:space-y-2">
              <h1 className="text-2xl xs:text-4xl sm:text-5xl md:text-4xl lg:text-4xl xl:text-4xl font-bold text-white leading-tight">
                Convoze for
              </h1>
              <h2 className="text-4xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-6xl font-bold bg-gradient-to-r from-[#C068D1] to-[#3224AF]  bg-clip-text [-webkit-background-clip:text] [color:theme('colors.purple.400')] leading-tight">
                SaaS & Tech
              </h2>
            </div>
            <p className="text-gray-200 font-light text-sm xs:text-base sm:text-lg md:text-xl max-w-xl mx-auto lg:mx-0">
              Boost Onboarding, Retention & Support with Complete Conversation
              Intelligence
            </p>
            <div className="mt-4 flex flex-col sm:flex-row gap-3 md:gap-6 justify-center lg:justify-start">
              <Link href="/contact">
                <button className="w-3/5 sm:w-auto bg-gradient-to-r from-[#C068D1] to-[#3224AF] text-sm cursor-pointer text-white border md:border-none border-purple-500 px-3 md:px-4 py-2 md:py-2 rounded-full font-medium hover:bg-black hover:text-white transition-all duration-300">
                  Book a Demo
                </button>
              </Link>
            </div>
          </div>

          <motion.div
            className="w-full lg:w-1/2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Modern contact center with diverse agents working at desks with headsets, representing BPO operations"
              className="w-full max-w-[350px] xs:max-w-[350px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px] h-auto rounded-lg shadow-lg object-cover"
              loading="lazy"
              whileHover={{
                scale: 1.05,
                rotate: 2,
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSaas;
