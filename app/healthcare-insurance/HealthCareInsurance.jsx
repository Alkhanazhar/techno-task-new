"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Headphones, ShoppingCart, Zap, CheckCircle } from "lucide-react";
import HeroSectionCaseStudy from "@/components/Pages/HomeCaseStudy";
import {
  Repeat,
  Gauge,
  TrendingUp,
  MessageSquare,
  DollarSign,
} from "lucide-react";

const HealthcareInsurance = () => {
  const router = useRouter();

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const stats = [
    {
      icon: <Repeat className="w-8 h-8 text-white" />,
      stat: "30–40%",
      desc: "increase in repeat purchases by proactively identifying at-risk customers.",
    },
    {
      icon: <Gauge className="w-8 h-8 text-white" />,
      stat: "25%",
      desc: "faster product improvement cycles through automated feedback capture.",
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      stat: "20%",
      desc: "higher conversion on upsells using real-time recommendations.",
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-white" />,
      stat: "100%",
      desc: "conversation coverage vs. <5% manual auditing.",
    },
    {
      icon: <DollarSign className="w-8 h-8 text-white" />,
      stat: "15–20%",
      desc: "reduction in QA costs through automation.",
    },
  ];

  return (
    <div className="min-h-screen ">
      {/* Header Section - Dark */}
      {/* <HeroSectionCaseStudy /> */}
      <motion.div
        className="w-full min-h-screen bg-gradient-to-tl to-[#21082b] from-[#27022e] shadow-xl relative overflow-hidden"
        //   initial="hidden"
        //   whileInView="visible"
        //   viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.6 }}
      >
        {/* Floating Avatars */}

        {/* Animated particles/dots background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(25)].map((_, i) => (
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

        <div className="w-full max-w-sm h-full xs:max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 relative z-20">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 xs:gap-10 sm:gap-12 md:gap-14 lg:gap-16 xl:gap-10 min-h-screen py-12 lg:py-0">
            <div className="w-full lg:w-1/2 text-center lg:text-left space-y-2 sm:space-y-2">
              <div className="space-y-2 sm:space-y-3 md:space-y-2">
                <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl font-bold text-white leading-tight">
                  Convoze for
                </h1>
                <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-6xl font-bold bg-gradient-to-r from-[#C068D1] to-[#3224AF]  bg-clip-text [-webkit-background-clip:text] [color:theme('colors.purple.400')] leading-tight">
                  E-Commerce and D2C
                </h2>
              </div>
              <p className="text-gray-200 font-light text-sm xs:text-base sm:text-lg md:text-xl max-w-xl mx-auto lg:mx-0">
                Turn Every Customer Interaction into Loyalty and Revenue
              </p>
              <div className="mt-4 flex flex-col sm:flex-row gap-3 md:gap-6 justify-center lg:justify-start">
                <Link href="/contact">
                  <button className="w-3/5 sm:w-auto bg-gradient-to-r from-[#C068D1] to-[#3224AF] text-sm cursor-pointer text-white border md:border-none border-purple-500 px-3 md:px-4 py-2 md:py-2 rounded-full font-medium hover:bg-black hover:text-white transition-all duration-300">
                    Book a Demo
                  </button>
                </Link>
              </div>
            </div>

            {/* Right Side - Image */}
            <motion.div
              className="w-full lg:w-1/2 flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.img
                src="https://plus.unsplash.com/premium_photo-1661513736823-f325fd06577e?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Modern contact center with diverse agents working at desks with headsets, representing BPO operations"
                className="w-full max-w-[350px] xs:max-w-[320px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[450px] xl:max-w-[500px] h-auto rounded-xl shadow-2xl object-cover"
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
              src="/ecomm.png"
              alt="E-Commerce and D2C"
              className="w-full h-auto max-w-md rounded-xl shadow-lg"
            />
          </div>

          <div className="w-full md:w-1/2">
            <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-3.5xl lg:text-3xl font-semibold text-black text-center mb-4 xs:mb-6 sm:mb-8">
              Transform Customer Conversations into Revenue with <br />
              <span className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] text-transparent bg-clip-text">
                AI Intelligence
              </span>
            </h3>
            <p className="text-gray-800 text-sm sm:text-base md:text-md mb-3  md:text-left">
              In ecommerce and D2C, each customer interaction and support ticket
              is an opportunity to strengthen your brand, boost repeat
              purchases, and gather insights about your products. Most teams
              only capture a small part of these interactions, missing vital
              signals that affect revenue and customer loyalty
            </p>
            <p className="text-gray-800 text-sm sm:text-base md:text-md mb-3  md:text-left">
              Convoze AI changes that. It audits 100% of conversations across
              all channels, tracks key performance metrics (KPIs) for every
              interaction, extracts actionable insights in real time, and helps
              your teams respond instantly on what matters most.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Proven Measurable Impact Section - Dark */}
      <motion.div
        className="w-full bg-gradient-to-tl to-[#21082b] from-[#27022e] shadow-xl py-6 xs:py-10 sm:py-12 md:py-8 mb-10 xs:mb-12 sm:mb-16 md:mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="w-full max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2">
            <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-3.5xl lg:text-3xl font-semibold text-white text-center mb-4 xs:mb-6 sm:mb-8">
              Challenges{" "}
              <span className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] text-transparent bg-clip-text">
                Ecommerce & D2C
              </span>{" "}
              Brands Face
            </h3>
            <div className="space-y-2 sm:space-y-3">
              {[
                "Slow or inconsistent support can lead to customer churn.",
                "Missed chances for upselling, cross-selling, and keeping clients.",
                "Customer journeys can be scattered across chat, calls, email, and social media.",
                "Sales are lost because of unaddressed concerns and cart abandonment.",
                "Data scattered across platforms delays product and marketing insights.",
                "Inconsistent brand experience results from varying responses from agents.",
                "High support volume, fraud, and policy abuse can go unnoticed.",
                "Language and regional diversity can create communication challenges.",
                "There is limited visibility into agent performanc.",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-[#C068D1] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-white text-sm sm:text-base">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/driven.png"
              alt="Ecommerce & D2C Brands Face"
              className="w-full h-auto max-w-md rounded-xl shadow-lg"
            />
          </div>
        </div>
      </motion.div>

      {/* What You Get Inside Convoze Section - Light */}
      <motion.div
        className="w-full bg-slate-200 shadow-xl py-8 xs:py-10 sm:py-12 md:py-20 mb-8 xs:mb-10 sm:mb-12 md:mb-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="w-full max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">
          <h3 className="text-center text-2xl xs:text-2xl sm:text-3xl md:text-3.5xl lg:text-4xl font-semibold text-black mb-5 md:mb-10">
            How Convoze{" "}
            <span className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] text-transparent bg-clip-text [-webkit-background-clip:text]">
              Helps
            </span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-10">
            <div className="space-y-4">
              {[
                {
                  title: "Real-Time Customer Sentiment & Insights",
                  description: [
                    "Detects frustration, urgency, or buying signals instantly.",
                    "Flags high-value or at-risk customers for immediate action driving proactive support and increasing repeat purchases.",
                  ],
                },
                {
                  title: "Automated Product Feedback Loops",
                  description: [
                    "Automatically captures recurring bug reports, feature requests, and product questions.",
                    "Prioritizes improvements based on actual customer demand, this leads to quicker product updates and improved user satisfaction.",
                  ],
                },
                {
                  title: "More Informed Sales and Promotions",
                  description: [
                    "Finds possibilities for cross-selling and upselling during discussions.",
                    "Suggests personalized offers in real time. This results in higher conversion and increased average order value.",
                  ],
                },
              ].map((feature, index) => (
                <div key={index} className="space-y-1 mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 flex items-center justify-center bg-purple-500 rounded-full"></span>
                    <h4 className="text-base sm:text-lg font-semibold text-black">
                      {feature.title}
                    </h4>
                  </div>
                  <div className="ml-5 space-y-1">
                    {feature.description.map((desc, i) => (
                      <div key={i} className="flex items-start space-x-2">
                        <span className="font-[600]">-</span>
                        <p className="text-gray-900 text-sm sm:text-sm leading-relaxed">
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
                  title: "Quality Assurance & Training at Scale",
                  description: [
                    " AI audits every conversation, ensuring consistent service quality.",
                    "A better brand voice, fewer mistakes, and quicker onboarding are all made possible by these initiatives, which highlight top-performing agents and coaching opportunities.",
                  ],
                },
                {
                  title: "Detection of Fraud and Risk",
                  description: [
                    "Spots unusual patterns in returns, complaints, or interactions.",
                    "Flags high-risk issues before they escalate resulting in reduced financial losses and improved trust.",
                  ],
                },
              ].map((feature, index) => (
                <div key={index} className="space-y-1 mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 flex items-center justify-center bg-purple-500 rounded-full"></span>
                    <h4 className="text-base sm:text-lg font-semibold text-black">
                      {feature.title}
                    </h4>
                  </div>

                  <div className="ml-5 space-y-1">
                    {feature.description.map((desc, i) => (
                      <div key={i} className="flex items-start space-x-2">
                        <span className="font-[600]">-</span>
                        <p className="text-gray-900 text-sm sm:text-sm leading-relaxed">
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
        className="w-full bg-gradient-to-tl to-[#21082b] md:-mt-12 flex-col from-[#27022e] shadow-xl py-6 xs:py-10 sm:py-12 md:py-16 text-center flex items-center justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <section className="w-full max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">
          <h3 className="text-center text-2xl xs:text-2xl sm:text-3xl md:text-3.5xl lg:text-4xl font-semibold text-white mb-5 md:mb-10">
            Measurable{" "}
            <span className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] text-transparent bg-clip-text">
              Impact
            </span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-5 md:mb-0">
            {stats.map((item, idx) => (
              <div
                key={idx}
                className="group p-5 bg-gradient-to-br from-[#3224AF]/90 to-[#C068D1]/80 rounded-2xl shadow-md hover:scale-105 hover:shadow-xl transition duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-white/20 rounded-xl group-hover:bg-white/30 transition">
                    {item.icon}
                  </div>
                  <p className="text-2xl font-bold text-white">{item.stat}</p>
                </div>
                <p className="text-white text-xs sm:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </motion.div>

      <motion.div
        className="w-full bg-slate-200 shadow-xl py-10 sm:py-14 md:py-20 mb-8 sm:mb-12 md:mb-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-10 lg:px-12 xl:px-16 mb-5">
          <h3 className="text-center text-2xl sm:text-3xl md:text-3.5xl lg:text-4xl font-semibold text-black mb-6">
            Boost your Ecommerce and D2C growth with <br />
            <span className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] text-transparent bg-clip-text">
              Convoze
            </span>
          </h3>

          <p className="text-center max-w-3xl mx-auto text-gray-800 text-sm sm:text-base leading-relaxed mb-5">
            Convoze transforms all discussions into valuable insights that drive
            sales growth, enhance customer loyalty, and accelerate product
            selection.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-5">
            {/* Left Column */}
            <div className="space-y-6">
              {[
                {
                  title: "Actionable Insights in Real-Time",
                  description:
                    "Provides real-time insights enabling sales, support, and product teams to resolve customer issues quickly and engage effectively.",
                },
                {
                  title: "Multilingual & Accent-Adaptive AI",
                  description:
                    "Ensures seamless communication across regions and languages, breaking barriers for global businesses.",
                },
                {
                  title: "Seamless Integration",
                  description:
                    "Integrates smoothly with chat, email, CRM, and call systems—no disruption to business operations.",
                },
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#C068D1] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-black mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {[
                {
                  title: "Scalable Multi-Channel Operations",
                  description:
                    "Handles large data volumes and seasonal spikes without compromising performance.",
                },
                {
                  title: "Customizable to Your Brand",
                  description:
                    "Adapts to your policies and workflows while preserving brand voice for consistency and compliance.",
                },
                {
                  title: "Risk Reduction & Fraud Detection",
                  description:
                    "Detects unusual patterns in interactions to reduce fraud and financial losses.",
                },
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#3224AF] rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-black mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-center max-w-4xl mx-auto text-gray-800 text-sm sm:text-base leading-relaxed">
            Convoze uses every customer interaction to generate valuable
            business intelligence which enables Ecommerce and D2C brands to
            maintain customer loyalty and boost sales and make better business
            choices.
          </p>
        </div>
      </motion.div>

      {/* Built for the Real World Section - Dark */}
      <motion.div
        className="w-full bg-gradient-to-tl to-[#21082b] md:-mt-12 flex-col from-[#27022e] shadow-xl py-6 xs:py-10 sm:py-12 md:py-16 text-center flex items-center justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="w-full max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
            {/* Left Section */}
            <div>
              <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-3.5xl lg:text-4xl font-semibold text-white mb-3">
                Where Convoze{" "}
                <span className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] bg-clip-text [-webkit-background-clip:text] [color:theme('colors.purple.400')]">
                  Makes
                </span>{" "}
                the Difference
              </h3>
              <p className="text-white text-base xs:text-base sm:text-lg md:text-md !font-light">
                With Convoze, ecommerce and D2C brands don’t just manage support
                — they build loyalty, grow revenue, and make smarter product
                decisions. Every interaction becomes a chance to engage
                customers better, reduce churn, and turn conversations into
                measurable business growth
              </p>
              <p className="mt-4 max-w-4xl mx-auto text-gray-300 text-sm sm:text-base leading-relaxed">
                Convoze ensures brands deliver consistent, personalized, and
                efficient experiences at scale.
              </p>
            </div>

            {/* Right Section */}
            <div>
              <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-3.5xl lg:text-4xl font-semibold text-white mb-3">
                Why{" "}
                <span className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] bg-clip-text [-webkit-background-clip:text] [color:theme('colors.purple.400')]">
                  Convoze
                </span>{" "}
                Stands Out
              </h3>
              <p className="text-white text-base xs:text-base sm:text-lg md:text-md !font-light">
                Most QA tools still work in isolation or rely on a handful of
                conversation samples. Being different, Convoze audits every
                single solitary conversation in one unified platform. That gives
                reduced blind spots, more rapid decisions, and better outcomes
                for both your customers and your business.
              </p>
            </div>
          </div>

          <div className="mt-8 flex justify-center mb-4 md:mb-0">
            <Link href={"/contact"}>
              <motion.button
                className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-102 shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                See Convoze in Action
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HealthcareInsurance;
