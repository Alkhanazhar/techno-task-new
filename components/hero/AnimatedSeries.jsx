import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Phone, Clock, Unlink } from "lucide-react";

const AnimatedStatsCards = () => {
  const wastedStats = [
    {
      percentage: "95%",
      label: "Conversations Wasted",
      description: "In traditional contact centers",
      icon: MessageSquare,
    },
    {
      percentage: "<5%",
      label: "conversations Reviewed",
      description: "Through manual QA coverage",
      icon: Phone,
    },
    {
      percentage: "Timing Gap",
      label: "Delayed Coaching",
      description: "Agent feedback timing",
      icon: Clock,
    },
    {
      percentage: "Disconnect",
      label: "Customer Sentiment",
      description: "Is misunderstood or ignored",
      icon: Unlink,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: (isLeft) => ({
      opacity: 0,
      x: isLeft ? -50 : 50,
      scale: 0.9,
    }),
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      },
    },
  };

  return (
    <div className="flex items-center justify-center">
      <motion.div
        className="relative flex flex-col gap-6 max-w-3xl w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {wastedStats.map((stat, index) => {
          const Icon = stat.icon;
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={index}
              custom={isLeft}
              variants={itemVariants}
              className={`flex ${
                isLeft ? "justify-start" : "justify-end"
              } w-full h-full`}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="group relative p-4 rounded-2xl transition-all duration-300 
                  bg-white border border-gray-200 shadow-lg hover:shadow-2xl w-full max-w-md
                  overflow-hidden"
                initial={{ borderColor: "rgba(229, 231, 235, 1)" }}
                whileHover={{
                  borderColor: "rgba(180, 98, 206, 0.3)",
                  boxShadow:
                    "0 20px 25px -5px rgba(63, 42, 178, 0.1), 0 10px 10px -5px rgba(180, 98, 206, 0.04)",
                }}
              >
                {/* Gradient overlay on hover */}
                {/* <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#3F2AB2]/5 to-[#B462CE]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                /> */}

                {/* Animated background blob */}
                <motion.div
                  className="absolute -top-20 -right-20 w-40 h-32 bg-gradient-to-br from-[#3F2AB2]/10 to-[#B462CE]/10 rounded-full blur-3xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <div className="relative z-10 flex items-start gap-5">
                  {/* Animated Icon Container */}
                  <motion.div
                    className="w-14 h-14 rounded-xl bg-gradient-to-tl from-[#3F2AB2] to-[#B462CE] p-3 flex-shrink-0 shadow-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    <Icon className="w-full h-full text-white" />
                  </motion.div>

                  <div className="flex-1">
                    {/* Animated Title */}
                    <motion.h3
                      className="font-bold text-lg md:text-lg mb-2 bg-gradient-to-br from-[#3F2AB2] to-[#371d3e] text-transparent bg-clip-text"
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: index * 0.2 + 0.3 }}
                    >
                      {stat.percentage} {stat.label}
                    </motion.h3>

                    {/* Animated Description */}
                    <motion.p
                      className="text-gray-600 text-sm md:text-base leading-relaxed"
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: index * 0.2 + 0.4 }}
                    >
                      {stat.description}
                    </motion.p>
                  </div>

                  {/* Animated accent line */}
                  {/* <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#3F2AB2] to-[#B462CE]"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{
                      delay: index * 0.2 + 0.5,
                      duration: 0.8,
                      ease: "easeOut",
                    }}
                  /> */}
                </div>

                {/* Pulse effect on hover */}
              </motion.div>
            </motion.div>
          );
        })}

        {/* Connecting lines between cards */}
        {wastedStats.map((_, index) => {
          if (index === wastedStats.length - 1) return null;
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={`line-${index}`}
              className={`absolute h-6 w-0.5 ${
                isLeft ? "left-1/4" : "right-1/4"
              }`}
              style={{
                top: `${(index + 1) * 25}%`,
                transform: "translateY(-50%)",
              }}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{
                delay: index * 0.2 + 0.8,
                duration: 0.4,
              }}
            />
          );
        })}
      </motion.div>
    </div>
  );
};

export default AnimatedStatsCards;
