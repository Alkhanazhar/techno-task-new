"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ShieldCheck, ShoppingCart, Zap, Handshake } from "lucide-react";
import HeroSectionBanking from "@/app/banking-finance/Hero-banking";

const BankingFinance = () => {
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

      <HeroSectionBanking />
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
          <div className="flex mb-2">
            <div className="bg-gray-300 rounded-full p-3 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-purple-700" />
            </div>
          </div>

          <h3 className="text-xl sm:text-xl md:text-2xl font-semibold text-center mb-3">
            Building{" "}
            <span className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] text-transparent bg-clip-text">
              Trust
            </span>{" "}
            in Every Conversation
          </h3>
          <p className="text-gray-800 text-sm sm:text-base md:text-md mb-3  md:text-left">
            Convoze empowers financial institutions to build trust and stay
            compliant — safeguarding every conversation, detecting risks early,
            and ensuring revenue protection with confidence
          </p>

          <div className="space-y-2 sm:space-y-3 font-semibold">
            {[
              "In the world of finance, trust is everything. With Convoze, you don’t just manage conversations. You build trust, protect revenue, and move with absolute confidence.",
              "Convoze helps financial institutions stay ahead of the curve by quietly safeguarding every customer conversation.It does more than just audits; it also safeguards, warning your teams of any irregularities, from minor fraud trends to noncompliance.",
              "Instead of chasing issues after they surface, your teams act early —resolving disputes faster, serving high-value clients with precision, and proving compliance without drowning in manual audit.",
            ].map((item, idx) => (
              <div key={idx} className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-[#C068D1] rounded-full mt-1 flex-shrink-0"></div>
                <p className="text-gray-800 text-sm sm:text-base">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 max-w-xl px-4 md:px-6 flex flex-col items-center md:items-start">
          <div className="flex mb-2">
            <div className="bg-gray-300 rounded-full p-3 flex items-center justify-center">
              <Handshake className="w-6 h-6 text-purple-700" />
            </div>
          </div>
          <h3 className="text-xl sm:text-xl md:text-2xl font-semibold text-center md:text-left mb-3">
            <span className="inline sm:block">
              Banking and Finance sector{" "}
              <span className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] text-transparent bg-clip-text">
                struggles
              </span>{" "}
              with-
            </span>
          </h3>

          <p className="text-gray-800 text-sm sm:text-base md:text-base mb-3 md:text-left">
            Financial institutions face fragmented conversations, compliance
            risks, and hidden fraud. Convoze turns every interaction into a
            safeguard — delivering 100% audits, real-time sentiment insights,
            and multilingual support to boost trust and performance.
          </p>
          <div className="space-y-2 sm:space-y-3 font-semibold">
            {[
              "Fragmented Customer Conversations.",
              "Compliance & Regulatory Risks.",
              "Hidden Fraud Patterns.",
              "Inconsistent Agent Performance.",
              "Slow Dispute Resolution & Escalations.",
              "Difficulty Measuring Customer Sentiment.",
              "High Volume & Peak Pressure.",
            ].map((item, idx) => (
              <div key={idx} className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-[#C068D1] rounded-full mt-1 flex-shrink-0"></div>
                <p className="text-gray-800 text-sm sm:text-base">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Proven Measurable Impact Section - Dark */}
      <motion.div
        className="w-full bg-gradient-to-tl to-[#21082b] from-[#27022e] shadow-xl py-8 xs:py-10 sm:py-12 md:py-12 mb-10 xs:mb-12 sm:mb-16 md:mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="w-full max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Column */}
          <div className="space-y-4">
            <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-3.5xl lg:text-4xl font-semibold text-white mb-6">
              How Convoze{" "}
              <span className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] text-transparent bg-clip-text [-webkit-background-clip:text] [color:theme('colors.purple.400')]">
                helps
              </span>
            </h3>

            {[
              {
                title: "100% Conversation & Ticket Auditing",
                description:
                  "Every call, chat, or support ticket is intelligently analyzed and effortlessly audited — ensuring no customer interaction slips through the cracks and all regulatory obligations are met.",
              },
              {
                title: "Real-Time Sentiment & Emotion Detection",
                description:
                  "Uses behavioral and sentiment cues to identify emotional friction in financial conversations—supporting faster resolutions, lower churn, and higher satisfaction.",
              },
              {
                title: "Accent Adaptability & Multilingual Support",
                description:
                  "With multilingual support and ability to adapt and understand different accents, AI helps BPO teams deliver clear, inclusive, and personalized service to customers no matter where they’re from.",
              },
              {
                title: "AI + Human QA Integration",
                description:
                  "Combines automated insights with human oversight, ensuring accurate compliance monitoring, fraud detection, and maintaining high standards of quality.",
              },
              {
                title: "Real-Time Risk & Compliance Alerts",
                description:
                  "Flags fraud indicators, policy violations, or compliance breaches, enabling swift action before small issues turn into bigger problems.",
              },
              {
                title: "Role Based Access with Secure Data Handling",
                description:
                  "Sensitive financial data is protected with role-specific access, ensuring privacy, regulatory compliance, and secure audit trails.",
              },
              {
                title: "Dashboards with Actionable Insights",
                description:
                  "Managers and compliance teams consistently see how the agents are performing, reviewing risk hotspots and recurring product/service issues, enabling smarter and faster decisions.",
              },
            ].map((feature, index) => (
              <div key={index} className="space-y-1 mb-2">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 flex items-center justify-center bg-purple-500 rounded-full mt-1"></span>
                  <h4 className="text-base sm:text-lg font-semibold text-white">
                    {feature.title}
                  </h4>
                </div>
                <p className="text-gray-300 text-sm sm:text-sm leading-relaxed ml-5">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-3.5xl lg:text-4xl font-semibold text-white ">
              Redefining conversation{" "}
              <span className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] text-transparent bg-clip-text ">
                Intelligence{" "}
              </span>
              with Convoze
            </h3>
            <p className="text-gray-300 text-sm sm:text-sm mb-6">
              Most conversation intelligence tools only capture fragments of
              customer interactions, leaving blind spots in compliance, fraud
              detection and risk monitoring. Convoze audits every conversation
              giving financial institutions full visibility and actionable
              intelligence.
            </p>

            {[
              //   {
              //     title:
              //       "Most conversation intelligence tools only capture fragments",
              //     description:
              //       "Leaving blind spots in compliance, fraud detection and risk monitoring. Convoze audits every conversation giving financial institutions full visibility and actionable intelligence.",
              //   },
              {
                title: "100% Conversation Coverage",
                description:
                  "All calls, chats, and support tickets monitored — ensuring no interaction goes unaudited.",
              },
              {
                title: "Immediate Risk Alerts & Resolution",
                description:
                  "Real-time alerts for reducing compliance breaches and cuts fraud detection time by up to 50%.",
              },
              {
                title: "Improved Customer Trust & Satisfaction",
                description:
                  "Proactive issue resolution and emotion detection lead to 10–15% increase in CSAT/NPS.",
              },
              {
                title: "Enhanced Agent Performance & QA Efficiency",
                description:
                  "Automated QA scoring and insights cut manual review time by 40–60%, helping teams coach and scale faster.",
              },
              {
                title: "Reduced Escalations & Disputes",
                description:
                  "Full visibility into conversations accelerates dispute resolution, reducing escalations by 20–30%.",
              },
              {
                title: "Actionable Insights for Product & Service Improvements",
                description:
                  "Frequent issues and feedback surfaced directly from conversations, enabling faster decision-making and 25% faster product/service improvements.",
              },
              {
                title: "Auditing & Operations with Cost Savings",
                description:
                  "Automating Q&A and monitoring reduces audit costs by 20–25% , Delivering a 20–25% reduction in audit costs.",
              },
            ].map((feature, index) => (
              <div key={index} className="space-y-1 mb-2">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 flex items-center justify-center bg-purple-500 rounded-full mt-1"></span>
                  <h4 className="text-base sm:text-lg font-semibold text-white">
                    {feature.title}
                  </h4>
                </div>
                <p className="text-gray-300 text-sm sm:text-sm leading-relaxed ml-5">
                  {feature.description}
                </p>
              </div>
            ))}
            <p className="text-gray-50 text-sm  mb-3 md:text-left">
              With Convoze, every interaction becomes an opportunity to protect
              trust, reduce risk, and grow your business with confidence.
            </p>
          </div>
        </div>
      </motion.div>

      {/* What You Get Inside Convoze Section - Light */}
      <motion.div
        className="w-full bg-slate-200 shadow-xl py-8 xs:py-10 sm:py-12 md:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="w-full max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 flex flex-col md:flex-row items-center gap-8">
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/banking.png"
              alt="Convoze BPO"
              className="w-full h-auto max-w-md rounded-xl shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2">
            <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-3.5xl lg:text-4xl font-semibold text-black text-center mb-4 xs:mb-6 sm:mb-8">
              <span className="inline sm:block">
                Built for Real World{" "}
                <span className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] text-transparent bg-clip-text">
                  Banking
                </span>{" "}
                Challenges
              </span>
            </h3>

            <div className="space-y-2 sm:space-y-3">
              <p className="text-gray-800 text-sm sm:text-base">
                Whether you’re managing retail banking, wealth management, or
                high-value financial support, Convoze fits seamlessly into every
                operation . Built to handle high-volume financial institutions,
                multilingual teams, and any organization where trust, accuracy,
                and regulatory compliance are critical. From monitoring every
                conversation to providing real-time insights, With Convoze, your
                teams can move fast and confidently knowing your customers,
                brand, and revenue are protected
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Built for the Real World Section - Dark */}
      <motion.div
        className="w-full bg-gradient-to-tl to-[#21082b]   flex-col from-[#27022e] shadow-xl py-12 xs:py-10 sm:py-12 md:py-16 text-center flex items-center justify-center"
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
          <p className="text-white text-base xs:text-base sm:text-lg md:text-xl !font-light">
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

    
    </div>
  );
};

export default BankingFinance;
