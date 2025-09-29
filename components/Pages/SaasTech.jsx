"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Headphones, ShoppingCart, Zap, CheckCircle } from "lucide-react";
import HeroSaas from "./HeroSaas";

const SaasTech = () => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen ">
      {/* Header Section - Dark */}
      <HeroSaas />
      {/* What You Get Inside Convoze Section - Light */}
      <motion.div
        className="w-full bg-slate-200 shadow-xl py-8 xs:py-10 sm:py-12 md:py-12 mb-8 xs:mb-10 sm:mb-12 md:mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="w-full max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/saas.png"
              alt="Convoze BPO"
              className="w-full h-auto max-w-md rounded-xl shadow-lg"
            />
          </div>

          <div className="w-full md:w-1/2">
            <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-3.5xl lg:text-3xl font-semibold text-black text-center mb-4 xs:mb-6 sm:mb-8">
              Fuel Retention and CX with Real-Time{" "}
              <span className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] text-transparent bg-clip-text">
                Customer Intelligence
              </span>
            </h3>
            <p className="text-gray-800 text-sm sm:text-base md:text-md mb-3  md:text-left">
              In SaaS, every communication matters, from the very first
              onboarding call to ongoing support and upselling. Most teams can
              only review a fraction of these engagements thus leaving valuable
              insights and risks unheard.
            </p>
            <p className="text-gray-800 text-sm sm:text-base md:text-md mb-3  md:text-left">
              Convoze changes that. Our AI-powered platform captures and
              analyzes 100% of customer interactions, giving you instant
              visibility into customer sentiment, compliance, and agent
              performance that too in real time.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="w-full bg-gradient-to-tl to-[#21082b] from-[#27022e] shadow-xl py-8 xs:py-10 sm:py-12 md:py-6 mb-10 xs:mb-12 sm:mb-16 md:mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="w-full max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">
          <h3 className="text-center text-xl xs:text-2xl sm:text-3xl md:text-3.5xl lg:text-4xl font-semibold text-white mb-10">
            Fuel Retention and CX with Real-Time <br />
            <span className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] text-transparent bg-clip-text [-webkit-background-clip:text]">
              Customer Intelligence
            </span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-10">
            <div className="space-y-4">
              {[
                {
                  title: "Real Time Transcription & Sentiment Intelligence",
                  description: [
                    "Live transcription instantly converts calls into searchable text which eliminates digging through recordings.",
                    "Emotion & intent detection pinpoints frustration, urgency, or buying signals as they happen.",
                  ],
                },
                {
                  title: "Automated Compliance and QA scoring",
                  description: [
                    "Compliance alerts flag risky language in-the moment, preventing costly issues.",
                    "Automated QA scoring delivers consistent, unbiased audits for every conversation.",
                  ],
                },
                {
                  title: "Agent Assist",
                  description: [
                    "Agent assist suggests the right KB articles or responses live, increasing first-call resolution rates.",
                  ],
                },
                {
                  title: "Real Time Dashboards",
                  description: [
                    "Our Convoze lists up live dashboards that show capability metrics, sentiment trends, and critical alerts so managers can act Instantly.",
                  ],
                },
              ].map((feature, index) => (
                <div key={index} className="space-y-1 mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 flex items-center justify-center bg-purple-500 rounded-full mt-1"></span>
                    <h4 className="text-base sm:text-lg font-semibold text-white">
                      {feature.title}
                    </h4>
                  </div>
                  <div className="ml-5 space-y-1">
                    {feature.description.map((desc, i) => (
                      <div key={i} className="flex items-start space-x-2">
                        <span className="w-[6px] h-[6px] mt-2 bg-white rounded-full flex-shrink-0"></span>
                        <p className="text-gray-300 text-sm sm:text-sm leading-relaxed">
                          {desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              {[
                {
                  title: "Faster Product Feedback Loopse",
                  description: [
                    "Surfaces recurring bug mentions, feature requests, and integration issues directly from customer conversations.",
                    "Enables product teams to act faster and prioritize what matters most to users.",
                  ],
                },
                {
                  title: "Measurable Impact",
                  description: [
                    "40–60% faster onboarding for new support engineers through automated QA-based training insights.",
                    "Up to 30% fewer escalations by detecting unresolved issues early in customer conversations.",
                    "25% faster bug/feature identification as recurring product feedback is automatically flagged from conversations.",
                    "Covers 100% conversation vs. <5% manual auditing — ensuring no customer interaction goes unheard.",
                    "10–15% CSAT improvement through better coaching and proactive issue resolution .",
                    "20–25% reduction in QA costs by automating manual auditing at scale.",
                  ],
                },
              ].map((feature, index) => (
                <div key={index} className="space-y-1 mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 flex items-center justify-center bg-purple-500 rounded-full mt-1"></span>
                    <h4 className="text-base sm:text-lg font-semibold text-white">
                      {feature.title}
                    </h4>
                  </div>
                  {feature.title === "Measurable Impact" && (
                    <p className="text-gray-300 text-sm sm:text-sm ml-5 italic mb-3">
                      Teams using Convoze typically gain :
                    </p>
                  )}
                  <div className="ml-5 space-y-1">
                    {feature.description.map((desc, i) => (
                      <div key={i} className="flex items-start space-x-2">
                        <span className="w-[6px] h-[6px] mt-2 bg-white rounded-full flex-shrink-0"></span>
                        <p className="text-gray-300 text-sm sm:text-sm leading-relaxed">
                          {desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="w-full flex flex-col md:flex-row bg-slate-200 shadow-xl py-8 md:py-12 mb-10 gap-8 justify-center items-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {/* Left Section */}
        <div className="w-full md:w-1/2 max-w-xl px-4 md:px-6 flex flex-col items-center md:items-start">
          <h3 className="text-xl sm:text-xl md:text-2xl font-semibold text-center md:text-left mb-3">
            Why It Fits Modern{" "}
            <span className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] text-transparent bg-clip-text">
              SaaS
            </span>{" "}
            Workflows
          </h3>
          <p className="text-gray-800 text-sm sm:text-base md:text-md mb-3  md:text-left">
            Contact center and CRM systems are easily integrated with Convoze.
            It supports multiple languages, adapts to regulatory requirements,
            and is 100% customizable according to your business needs, whether
            you’re in fintech, healthtech, e-commerce, or developer tools.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 max-w-xl px-4 md:px-6 flex flex-col items-center md:items-start">
          <h3 className="text-xl sm:text-xl md:text-2xl font-semibold text-center md:text-left mb-3">
            The Convoze{" "}
            <span className="sm:inline-block block bg-gradient-to-r from-[#C068D1] to-[#3224AF] text-transparent bg-clip-text">
              Advantage
            </span>
          </h3>

          <p className="text-gray-800 text-sm sm:text-base md:text-base mb-3 md:text-left">
            Most QA tools give you fragments of the customer journey. Convoze
            delivers the full picture from enabling product teams to identify
            recurring feature requests, sales leaders to track objection
            patterns, and support managers to recognize top-performing agents.
          </p>

          <p className="text-gray-800 text-sm sm:text-base mt-4 text-center md:text-left">
            With Convoze, every interaction becomes an opportunity to improve
            your product, retain your customers, and grow your revenue.
          </p>
        </div>
      </motion.div>

      {/* Built for the Real World Section - Dark */}
      <motion.div
        className="w-full bg-gradient-to-tl to-[#21082b] md:-mt-12  flex-col from-[#27022e] shadow-xl py-12 xs:py-10 sm:py-12 md:py-12 text-center flex items-center justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="w-full max-w-sm xs:max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">
          <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-3.5xl lg:text-4xl font-semibold text-white mb-6">
            Why{" "}
            <span className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] text-transparent bg-clip-text [-webkit-background-clip:text] [color:theme('colors.purple.400')]">
              Convoze
            </span>{" "}
            Stands Out
          </h3>
          <p className="text-white text-sm xs:text-base sm:text-lg md:text-xl">
            Most QA tools still work in isolation or rely on a handful of
            conversation samples. Being different, Convoze audits every single
            solitary conversation in one unified platform. That gives reduced
            blind spots, more rapid decisions, and better outcomes for both your
            customers and your business.
          </p>
        </div>

        <div className="mt-8">
          <Link href={"/contact"}>
            <motion.button
              className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] mb-6 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-102 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See Convoze in Action
            </motion.button>
          </Link>
        </div>
      </motion.div>

      <motion.div
        className="w-full bg-gradient-to-tl to-[#21082b]  from-[#27022e] shadow-xl pb-4 xs:pb-4 sm:pb-8 md:pb-8 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"></div>
      </motion.div>
    </div>
  );
};

export default SaasTech;
