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
        className="md:min-h-screen w-full flex flex-col md:flex-row bg-slate-200 shadow-xl py-8 md:py-12 gap-4 justify-center items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="w-full md:w-1/2 max-w-xl px-4 md:px-6 flex justify-center items-center">
          <img
            src="/bank.png"
            alt="Contact Center"
            className="rounded-2xl shadow-lg w-[450px] h-auto object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 max-w-xl px-4 md:px-6 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <h3 className="text-xl sm:text-xl md:text-3xl font-semibold text-center mb-3">
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
      </motion.div>

      <motion.div
        className="md:min-h-screen w-full flex flex-col md:flex-row bg-gradient-to-b from-[#27022e] to-[#21082b] shadow-xl py-8 md:py-12 gap-5 justify-center items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {/* Left Section (Text) */}
        <div className="w-full md:w-1/2 max-w-xl px-4 md:px-6 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <h3 className="text-xl sm:text-xl md:text-3xl text-white font-semibold text-center md:text-left mb-3">
            <span className="inline sm:block">
              Banking and Finance sector{" "}
              <span className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] text-transparent bg-clip-text">
                struggles
              </span>{" "}
              with-
            </span>
          </h3>

          <p className="text-gray-200 text-sm sm:text-base md:text-base mb-3 md:text-left">
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
                <p className="text-gray-200 text-sm sm:text-base">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/2 max-w-xl px-4 md:px-6 flex justify-center items-center">
          <img
            src="/game.png"
            alt="Contact Center"
            className="rounded-2xl shadow-lg w-[450px] h-auto object-cover"
          />
        </div>
      </motion.div>

      {/* Proven Measurable Impact Section - Dark */}
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
                  title: "100% Conversation & Ticket Auditing",
                  description: [
                    "Every call, chat, or support ticket is intelligently analyzed and effortlessly audited — ensuring no customer interaction slips through the cracks and all regulatory obligations are met.",
                  ],
                },
                {
                  title: "Real-Time Sentiment & Emotion Detection",
                  description: [
                    "Uses behavioral and sentiment cues to identify emotional friction in financial conversations—supporting faster resolutions, lower churn, and higher satisfaction.",
                  ],
                },
                {
                  title: "Accent Adaptability & Multilingual Support",
                  description: [
                    "With multilingual support and ability to adapt and understand different accents, AI helps BPO teams deliver clear, inclusive, and personalized service to customers no matter where they’re from.",
                  ],
                },
                {
                  title: "AI + Human QA Integration",
                  description: [
                    "Combines automated insights with human oversight, ensuring accurate compliance monitoring, fraud detection, and maintaining high standards of quality.",
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
                  title: "Real-Time Risk & Compliance Alerts",
                  description: [
                    "Flags fraud indicators, policy violations, or compliance breaches, enabling swift action before small issues turn into bigger problems.",
                  ],
                },
                {
                  title: "Role Based Access with Secure Data Handling",
                  description: [
                    "Sensitive financial data is protected with role-specific access, ensuring privacy, regulatory compliance, and secure audit trails.",
                  ],
                },
                {
                  title: "Dashboards with Actionable Insights",
                  description: [
                    "Managers and compliance teams consistently see how the agents are performing, reviewing risk hotspots and recurring product/service issues, enabling smarter and faster decisions.",
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
        className="w-full bg-gradient-to-tl to-[#21082b] from-[#27022e] sshadow-xl py-8 xs:py-10 sm:py-12 md:py-20 mb-8 xs:mb-10 sm:mb-12 md:mb-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="w-full max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">
          <h3 className="text-xl xs:text-2xl text-center sm:text-3xl md:text-3.5xl lg:text-4xl font-semibold text-white mb-6">
            Redefining conversation <br />
            <span className="bg-gradient-to-r from-[#C068D1] to-[#3224AF]  bg-clip-text [-webkit-background-clip:text] [color:theme('colors.purple.400')]">
              Intelligence{" "}
            </span>
            with Convoze
          </h3>

          <p className="text-center max-w-4xl mx-auto text-gray-200 text-sm sm:text-base leading-relaxed mb-8">
            Most conversation intelligence tools only capture fragments of
            customer interactions, leaving blind spots in compliance, fraud
            detection and risk monitoring. Convoze audits every conversation
            giving financial institutions full visibility and actionable
            intelligence.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-10">
            <div className="space-y-4">
              {[
                {
                  title: "100% Conversation Coverage",
                  description: [
                    "All calls, chats, and support tickets monitored — ensuring no interaction goes unaudited.",
                  ],
                },
                {
                  title: "Immediate Risk Alerts & Resolution",
                  description: [
                    "Real-time alerts for reducing compliance breaches and cuts fraud detection time by up to 50%.",
                  ],
                },
                {
                  title: "Improved Customer Trust & Satisfaction",
                  description: [
                    "Proactive issue resolution and emotion detection lead to 10–15% increase in CSAT/NPS.",
                  ],
                },
                {
                  title: "Enhanced Agent Performance & QA Efficiency",
                  description: [
                    "Automated QA scoring and insights cut manual review time by 40–60%, helping teams coach and scale faster.",
                  ],
                },
              ].map((feature, index) => (
                <div key={index} className="space-y-1 mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 flex items-center justify-center bg-purple-500 rounded-full"></span>
                    <h4 className="text-base sm:text-lg font-semibold text-white">
                      {feature.title}
                    </h4>
                  </div>
                  <div className="ml-5 space-y-1">
                    {feature.description.map((desc, i) => (
                      <div key={i} className="flex items-start space-x-2">
                        <span className="font-[600]">-</span>
                        <p className="text-gray-200 text-sm sm:text-sm leading-relaxed">
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
                  title: "Reduced Escalations & Disputes",
                  description: [
                    "Full visibility into conversations accelerates dispute resolution, reducing escalations by 20–30%.",
                  ],
                },
                {
                  title:
                    "Actionable Insights for Product & Service Improvements",
                  description: [
                    "Frequent issues and feedback surfaced directly from conversations, enabling faster decision-making and 25% faster product/service improvements.",
                  ],
                },
                {
                  title: "Auditing & Operations with Cost Savings",
                  description: [
                    "Automating Q&A and monitoring reduces audit costs by 20–25% , Delivering a 20–25% reduction in audit costs.",
                  ],
                },
              ].map((feature, index) => (
                <div key={index} className="space-y-1 mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 flex items-center justify-center bg-purple-500 rounded-full"></span>
                    <h4 className="text-base sm:text-lg font-semibold text-white">
                      {feature.title}
                    </h4>
                  </div>

                  <div className="ml-5 space-y-1">
                    {feature.description.map((desc, i) => (
                      <div key={i} className="flex items-start space-x-2">
                        <span className="font-[600]">-</span>
                        <p className="text-gray-200 text-sm sm:text-sm leading-relaxed">
                          {desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-center max-w-3xl mx-auto text-gray-200 text-sm sm:text-base leading-relaxed mt-8">
            With Convoze, every interaction becomes an opportunity to protect
            trust, reduce risk, and grow your business with confidence.
          </p>
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
        <div className="w-full md:min-h-screen max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 flex flex-col md:flex-row items-center gap-8">
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
        className="w-full md:min-h-screen bg-gradient-to-tl to-[#21082b] md:-mt-12 flex-col from-[#27022e] shadow-xl py-6 xs:py-10 sm:py-12 md:py-16 text-center flex items-center justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="w-full max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">
          <div className="text-center gap-10 text-left">
            {/* Right Section */}
            <div>
              <h3 className="text-xl text-center xs:text-2xl sm:text-3xl md:text-3.5xl lg:text-4xl font-semibold text-white mb-3">
                Why{" "}
                <span className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] bg-clip-text [-webkit-background-clip:text] [color:theme('colors.purple.400')]">
                  Convoze
                </span>{" "}
                Stands Out
              </h3>
              <p className="text-white text-center text-base xs:text-base sm:text-lg md:text-md !font-light">
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

export default BankingFinance;
