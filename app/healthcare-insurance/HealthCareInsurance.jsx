"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import {
  Repeat,
  Gauge,
  TrendingUp,
  MessageSquare,
  DollarSign,
  ShieldCheck,
  ArrowDownCircle,
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
      icon: <Repeat className="w-6 h-6 text-white" />,
      stat: "100%",
      desc: "Conversation Coverage",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
      stat: "50%",
      desc: "Faster Compliance & Risk Resolution",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-white" />,
      stat: "10–15%",
      desc: "Higher Member/Patient Satisfaction (CSAT/NPS)",
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-white" />,
      stat: "40–60%",
      desc: "Faster QA Reviews & Agent Coaching",
    },
    {
      icon: <ArrowDownCircle className="w-6 h-6 text-white" />,
      stat: "20–30%",
      desc: "Fewer Escalations & Disputes",
    },
    {
      icon: <Gauge className="w-6 h-6 text-white" />,
      stat: "25%",
      desc: "Faster Service & Process Improvements",
    },
    {
      icon: <DollarSign className="w-6 h-6 text-white" />,
      stat: "20–25%",
      desc: "Lower Auditing & Operational Costs",
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
                <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-4xl lg:text-4xl xl:text-4xl font-bold text-white leading-tight">
                  Convoze for
                </h1>
                <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-6xl font-bold bg-gradient-to-r from-[#C068D1] to-[#3224AF]  bg-clip-text [-webkit-background-clip:text] [color:theme('colors.purple.400')] leading-tight">
                  Healthcare & Insurance
                </h2>
              </div>
              <p className="text-gray-200 font-light text-sm xs:text-base sm:text-lg md:text-xl max-w-xl mx-auto lg:mx-0">
                Powering Smarter, Safer Conversations that Care for Every Life
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
                src="https://plus.unsplash.com/premium_photo-1673953509975-576678fa6710?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
        className="w-full md:min-h-screen bg-slate-200 py-8 xs:py-10 sm:py-12 md:py-12 mb-8 xs:mb-10 sm:mb-12 md:mb-16 flex justify-center items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="w-full max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 flex flex-col md:flex-row items-center justify-center gap-8">

          {/* Left Section - Image */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img
              src="/medical.png"
              alt="E-Commerce and D2C"
              className="w-full h-auto max-w-md rounded-xl shadow-lg object-contain"
            />
          </div>

          {/* Right Section - Text */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left">
            <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-3.5xl lg:text-3xl font-semibold text-center text-black mb-4 xs:mb-6 sm:mb-8">
              Transforming Risk Management into <br />
              <span className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] text-transparent bg-clip-text">
                Relationship Building
              </span>
            </h3>

            <p className="text-gray-800 text-sm sm:text-base md:text-md mb-3">
              In healthcare and insurance, every interaction carries high stakes — from patient
              well-being to sensitive financial data.
            </p>

            <p className="text-gray-800 text-sm sm:text-base md:text-md mb-3">
              Convoze helps your teams offer caring, compliant, and efficient services. It protects every
              call, chat, and support ticket.
            </p>

            <p className="text-gray-800 text-sm sm:text-base md:text-md mb-3">
              Instead of catching errors after the damage is done, your teams get real-time alerts
              for potential risks, policy breaches, or signs of distress — enabling faster claims
              resolution, reduced escalations, and improved patient/member trust.
            </p>

            <p className="text-gray-800 text-sm sm:text-base md:text-md font-semibold">
              With Convoze, you don’t just monitor conversations — you protect lives, secure data,
              and earn lasting trust.
            </p>
          </div>
        </div>
      </motion.div>


      {/* Proven Measurable Impact Section - Dark */}
      <motion.div
        className="w-full bg-gradient-to-tl to-[#21082b] from-[#27022e] py-6 xs:py-10 sm:py-12 md:py-8 mb-10 xs:mb-12 sm:mb-16 md:mb-20"
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
                Healthcare & Insurance
              </span>{" "}
              Teams Face
            </h3>
            <div className="space-y-2 sm:space-y-3">
              {[
                "Fragmented communication channels.",
                "Strict regulatory & compliance burden.",
                "Emotionally charged high-stakes interactions.",
                " Hidden fraud risks & claim irregularities.",
                " Inconsistent service & agent performance.",
                "Slow claims resolution & escalations",
                "High volume & seasonal pressure."
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
              src="/med.png"
              alt="Ecommerce & D2C Brands Face"
              className="w-full h-auto max-w-md rounded-xl shadow-lg"
            />
          </div>
        </div>
      </motion.div>

      {/* What You Get Inside Convoze Section - Light */}
      <motion.div
        className="w-full md:min-h-screen bg-slate-200 shadow-xl py-8 xs:py-10 sm:py-12 md:py-20 mb-8 xs:mb-10 sm:mb-12 flex justify-center items-center"
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
                  title: "100% Conversation & Ticket Auditing",
                  description: [
                    "Every call,chat and support ticket is automatically analyzed and audited with KPI-linked QA metrics, ensuring no interaction is ever missed.",
                  ],
                },
                {
                  title: "Sentiment & Emotion Detection in Real Time",
                  description: [
                    "Helps teams detect and address frustration, stress or confusion instantly improving outcome and member/patient satisfaction.",
                  ],
                },
                {
                  title: "Multilingual Support & accent adaptability",
                  description: [
                    "Supports multiple languages and accents. This allows seamless care and service to diverse populations.",
                  ],
                },
                {
                  title: "Protecting sensitive data",
                  description: [
                    "Safe guards confidential information while making compliance and auditing effortless for your team.",
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
                  title: "Actionable Insights & Dashboards",
                  description: [
                    "Turns conversation data into actionable insights, giving managers and compliance teams visibility into trends, risks and recurring gaps.",
                  ],
                },
                {
                  title: "AI + Human QA Integration",
                  description: [
                    "Combines automated insights with human oversight for accurate compliance monitoring, fraud and performance monitoring.",
                  ],
                },
                {
                  title: "Immediate risk detection",
                  description: [
                    "Detect policy violations or potential fraud in real time hence enabling your team to act swiftly and prevent larger issues.",
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
            Proven Measurable{" "}
            <span className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] text-transparent bg-clip-text">
              Impact
            </span>{" "}<br />
            with Convoze
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-5 md:mb-0">
            {stats.map((item, idx) => (
              <div
                key={idx}
                className="group p-5 bg-gradient-to-br from-[#3224AF]/90 to-[#C068D1]/80 
                 rounded-2xl shadow-md hover:scale-105 hover:shadow-xl 
                 transition duration-300 flex flex-col justify-between h-[130px]"
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
            Redefining Care and Service with<br />
            <span className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] text-transparent bg-clip-text">
              Convoze
            </span>
          </h3>

          <p className="text-center max-w-4xl mx-auto text-gray-800 text-sm sm:text-base leading-relaxed mb-5">
            Timely and accurate communication makes all the difference. Convoze helps providers,
            clinics, hospitals, and insurance companies enhance patient and client
            experiences while ensuring compliance and efficiency.
            Trusted by healthcare and insurance leaders, here's how it helps.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-5">
            {/* Left Column */}
            <div className="space-y-6">
              {[
                {
                  title: "24/7 Patient & Customer Support",
                  description:
                    "Automate appointment reminders, policy queries, claims updates, and FAQs with a personal touch.",
                },
                {
                  title: "Safe and Compliant",
                  description:
                    "Compliant with HIPAA and other regulatory standards thus ensuring sensitive health and insurance data remains secure within the system.",
                },
                {
                  title: "Data Driven Insights",
                  description:
                    "Easily audits discussions to identify patterns , enhance customer service , and inform wise choices for data diven insights.",
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
                  title: "Operational Efficiency",
                  description:
                    "Reduce administrative burden on staff, enabling quicker responses and smoother operations.",
                },
                {
                  title: "Unified customer Communication",
                  description:
                    " Keep all customer conversations in one place making service faster and more efficient.",
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
            Convoze ensures healthcare and insurance providers don’t just communicate.
            They connect, build trust, improve efficiency, and deliver exceptional care
            and service.
          </p>
        </div>
      </motion.div>

      {/* Built for the Real World Section - Dark */}
      <motion.div
        className="w-full md:min-h-screen  bg-gradient-to-tl to-[#21082b] md:-mt-12 flex-col from-[#27022e] shadow-xl py-6 xs:py-10 sm:py-12 md:py-16 text-center flex items-center justify-center"
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
              <h3 className="text-xl xs:text-2xl text-center md:text-left sm:text-3xl md:text-3.5xl lg:text-4xl font-semibold text-white mb-3">
                Where Convoze{" "}
                <span className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] bg-clip-text [-webkit-background-clip:text] [color:theme('colors.purple.400')]">
                  Makes
                </span>{" "}
                the Difference
              </h3>
              <p className="text-white text-base text-center md:text-left  xs:text-base sm:text-lg md:text-md !font-light">
                With Convoze, healthcare and insurance providers don’t just handle interactions — they
                protect lives, secure sensitive data, and earn lasting trust.
                Every conversation becomes an opportunity to care better, resolve faster,
                and deliver safer, compliant service at scale.
              </p>
            </div>

            {/* Right Section */}
            <div>
              <h3 className="text-xl xs:text-2xl text-center md:text-left sm:text-3xl md:text-3.5xl lg:text-4xl font-semibold text-white mb-3">
                Why{" "}
                <span className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] bg-clip-text [-webkit-background-clip:text] [color:theme('colors.purple.400')]">
                  Convoze
                </span>{" "}
                Stands Out
              </h3>
              <p className="text-white text-base text-center md:text-left  xs:text-base sm:text-lg md:text-md !font-light">
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
