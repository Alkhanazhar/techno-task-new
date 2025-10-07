import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MessageSquare, Phone, Clock, Unlink } from "lucide-react";

const AnimatedStatsCards = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["10%", "100%"]);

  const wastedStats = [
    {
      percentage: "95%",
      label: "Conversations Wasted",
      description: "In traditional contact centers",
      icon: MessageSquare,
    },
    {
      percentage: "<5%",
      label: "conversations Audited",
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

  return (
    <div className=" " ref={containerRef}>
      <div className="max-w-4xl mx-auto sm:px-4">
        <div className="relative">
          {/* Animated vertical line on the left */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-1 bg-gray-200/50 backdrop-blur-xs rounded-full overflow-hidden">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-[#3F2AB2] via-purple-500 to-[#B462CE] origin-top"
            />
          </div>

          {/* Cards */}
          <div className="space-y-4 pl-12 sm:pl-24">
            {wastedStats.map((stat, index) => {
              const Icon = stat.icon;
              const start = index / wastedStats.length;
              const end = (index + 1) / wastedStats.length;

              const cardOpacity = useTransform(
                scrollYProgress,
                [start - 0.6, start, end, end + 0.1],
                [0.6, 1, 1, 0.6]
              );

              const cardScale = useTransform(
                scrollYProgress,
                [start - 0.1, start, end, end + 0.1],
                [0.9, 1, 1, 0.9]
              );

              const dotScale = useTransform(
                scrollYProgress,
                [start - 0.05, start, end, end + 0.05],
                [0.5, 1.5, 1.5, 0.5]
              );

              return (
                <div key={index} className="relative">
                  {/* Animated dot on the line */}
                  <motion.div
                    style={{ scale: dotScale }}
                    className="absolute -left-[38px] sm:-left-[4.4rem] top-8 w-4 h-4 rounded-full bg-gradient-to-br from-[#3F2AB2] to-[#B462CE] shadow-lg"
                  />

                  {/* Card */}
                  <motion.div
                    style={{ opacity: cardOpacity, scale: cardScale }}
                    className="group relative sm:p-4 p-3 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                    whileHover={{
                      borderColor: "rgba(180, 98, 206, 0.3)",
                      boxShadow:
                        "0 20px 25px -5px rgba(63, 42, 178, 0.1), 0 10px 10px -5px rgba(180, 98, 206, 0.04)",
                    }}
                  >
                    {/* Animated background blob */}
                    <motion.div
                      className="absolute -top-10 -right-20 w-40 h-32 bg-gradient-to-br from-[#3F2AB2]/10 to-[#B462CE]/10 rounded-full blur-3xl"
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

                    <div className="relative z-10 flex items-start gap-3">
                      {/* Animated Icon Container */}
                      <motion.div
                        className="sm:w-12 sm:h-12 w-9 h-9 rounded-xl bg-gradient-to-tl from-[#3F2AB2] to-[#B462CE] p-2 flex-shrink-0 shadow-lg"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                      >
                        <Icon className="w-full h-full text-white" />
                      </motion.div>

                      <div className="flex-1">
                        <h3 className="sm:text-xl font-bold mb-1 bg-gradient-to-br from-[#3F2AB2] to-[#371d3e] text-transparent bg-clip-text">
                          {stat.percentage} {stat.label}
                        </h3>

                        <p className="text-gray-600 text-xs leading-relaxed">
                          {stat.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedStatsCards;
