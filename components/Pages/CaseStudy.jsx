"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const CaseStudy = () => {
  const router = useRouter();

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
      <motion.div
        className="w-full min-h-screen bg-gradient-to-tl to-[#21082b] from-[#27022e] shadow-xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.6 }}
      >
        <div className="w-full max-w-sm h-full xs:max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">
          <div
            className="flex flex-col lg:flex-row 
                 items-center justify-center lg:justify-between 
                 gap-12 xs:gap-8 sm:gap-10 md:gap-12 lg:gap-16 
                 h-screen"
          >
            {/* Left Side - Text Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h1 className="text-3xl xs:text-4xl sm:text-4.5xl md:text-5xl lg:text-6xl font-bold text-white mb-2 xs:mb-3 sm:mb-4">
                Convoze for
              </h1>
              <h2 className="text-2xl xs:text-3xl sm:text-3.5xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#C068D1] to-[#3224AF] text-transparent bg-clip-text [-webkit-background-clip:text] [color:theme('colors.purple.400')] mb-2 xs:mb-3 sm:mb-4">
                BPO & Contact Centers
              </h2>
              <p className="text-gray-200 font-extralight text-sm xs:text-base sm:text-lg ">
                Turning Every Conversation into Actionable Insight
              </p>
              <div className="mt-4 flex flex-col sm:flex-row gap-3 md:gap-6 justify-center lg:justify-start">
                <button className="bg-white cursor-pointer text-purple-800 border md:border-none border-purple-500 px-3 md:px-4 py-2 md:py-2.5 rounded-full font-medium hover:bg-black hover:text-white transition-all duration-300">
                  Book a Demo
                </button>
                <button className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] cursor-pointer text-white px-3 md:px-5 py-2 md:py-3 rounded-full font-normal hover:opacity-90 transition-all duration-300">
                  See How It Works
                </button>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <img
                src="https://images.unsplash.com/photo-1651922118990-4017b1f29fd3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Modern contact center with diverse agents working at desks with headsets, representing BPO operations"
                className="w-full max-w-[300px] xs:max-w-[350px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px] h-auto rounded-lg shadow-lg object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Company Info Section - Light */}
      <motion.div
        className="w-full bg-slate-200 shadow-xl py-8 xs:py-10 sm:py-12 md:py-20 mb-10 xs:mb-12 sm:mb-16 md:mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="w-full max-w-sm xs:max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">
          <div className="flex flex-col md:flex-row items-start justify-between">
            <div className="w-full md:w-1/2 space-y-3 xs:space-y-4 sm:space-y-5 mb-6 xs:mb-8 md:mb-0">
              <div className="flex items-center">
                <span className="text-black font-semibold w-20 xs:w-24 sm:w-28 text-sm xs:text-base">
                  Industry:
                </span>
                <span className="text-black text-sm xs:text-base">
                  BPO and Call Centers
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-black font-semibold w-20 xs:w-24 sm:w-28 text-sm xs:text-base">
                  Company:
                </span>
                <span className="text-black text-sm xs:text-base">
                  XYZ Solutions, UAE
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-black font-semibold w-20 xs:w-24 sm:w-28 text-sm xs:text-base">
                  Client:
                </span>
                <span className="text-black text-sm xs:text-base">
                  Josefin H. Smith
                </span>
              </div>
              <div className="flex items-center">
                <span className="text-black font-semibold w-20 xs:w-24 sm:w-28 text-sm xs:text-base">
                  Date:
                </span>
                <span className="text-black text-sm xs:text-base">
                  25 January 2025
                </span>
              </div>

              <motion.div
                className="flex items-start space-x-4 xs:space-x-6 sm:space-x-8 mt-6 xs:mt-8 sm:mt-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div
                  className="w-full max-w-[240px] xs:max-w-[280px] sm:max-w-[320px] bg-gray-900 rounded-lg p-4 xs:p-5 sm:p-6"
                  aria-label="Contact support information"
                >
                  <div className="w-10 xs:w-12 h-10 xs:h-12 bg-pink-500 rounded-lg flex items-center justify-center mb-3 xs:mb-4">
                    <span className="text-white font-bold text-lg xs:text-xl">
                      co
                    </span>
                  </div>
                  <h4 className="text-white font-semibold text-base xs:text-lg mb-2 xs:mb-3">
                    We're here to help!
                  </h4>
                  <p className="text-gray-400 text-xs xs:text-sm sm:text-base mb-3 xs:mb-4">
                    Need assistance? We're here to help with support, guidance,
                    and resources. Reach out to us!
                  </p>
                  <div className="space-y-2 xs:space-y-3">
                    <div className="flex items-center text-gray-400 text-xs xs:text-sm">
                      <span className="mr-1.5 xs:mr-2">📞</span>
                      <span>+1(00) - 123 456 7890</span>
                    </div>
                    <div className="flex items-center text-gray-400 text-xs xs:text-sm">
                      <span className="mr-1.5 xs:mr-2">✉️</span>
                      <span>support@domainname.com</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="w-full md:w-1/2 h-[40vh] xs:h-[50vh] sm:h-[60vh] md:h-[70vh] flex justify-end">
              <div className="w-full h-full rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop&auto=format&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Modern call center office with collaborative team environment"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* The Reality on the Floor Section - Dark */}
      <motion.div
        className="w-full bg-gradient-to-tl to-[#21082b] from-[#27022e] shadow-xl py-8 xs:py-10 sm:py-12 md:py-20 mb-10 xs:mb-12 sm:mb-16 md:mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="w-full max-w-sm xs:max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">
          <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-3.5xl lg:text-4xl font-semibold text-white mb-4 xs:mb-6 sm:mb-8">
            The{" "}
            <span className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] text-transparent bg-clip-text [-webkit-background-clip:text] [color:theme('colors.purple.400')]">
              Reality
            </span>{" "}
            on the Floor
          </h3>
          <p className="text-white text-sm xs:text-base sm:text-lg md:text-xl mb-4 xs:mb-6 sm:mb-8">
            Running a contact center is a constant balancing act. Peaks in
            demand, customers who expect instant answers, and the pressure to
            hit service targets can stretch even the best teams to their limits.
            The truth? Most centers still manage to audit only 3–4% of their
            conversations. That means 96% of valuable insights—performance gaps,
            compliance risks, and customer sentiment shifts—go completely
            unseen. And when those go unnoticed, it leads to:
          </p>
          <ul className="text-gray-300 text-sm xs:text-base sm:text-lg space-y-2 xs:space-y-3">
            <li>
              • Scaling struggles when seasonal surges lead to long wait times
              and frustrated customers.
            </li>
            <li>
              • Inconsistent quality because only a handful of conversations get
              checked.
            </li>
            <li>
              • High staff turnover, which means never-ending recruiting and
              retraining.
            </li>
            <li>
              • Costly compliance slips that can damage your brand and trigger
              escalation & fines.
            </li>
            <li>
              • Missed sentiment cues, like those subtle signs of
              dissatisfaction, until it’s too late.
            </li>
          </ul>
        </div>
      </motion.div>

      {/* How Convoze Changes the Game Section - Light */}
      <motion.div
        className="w-full bg-slate-200 shadow-xl py-8 xs:py-10 sm:py-12 md:py-20 mb-10 xs:mb-12 sm:mb-16 md:mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div className="w-full max-w-sm xs:max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">
          <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-3.5xl lg:text-4xl font-semibold text-black mb-4 xs:mb-6 sm:mb-8">
            How Convoze Changes the{" "}
            <span className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] text-transparent bg-clip-text [-webkit-background-clip:text] [color:theme('colors.purple.900')]">
              Game
            </span>
          </h3>
          <p className="text-black text-sm xs:text-base sm:text-lg md:text-xl mb-4 xs:mb-6 sm:mb-8">
            Think of Convoze as an expert QA and customer insight powerhouse
            that listens to every conversation every single one without missing
            a moment.
          </p>
          <p className="text-black text-sm xs:text-base sm:text-lg md:text-xl mb-4 xs:mb-6 sm:mb-8">
            This is exactly what it brings to the table:
          </p>
          <div className="space-y-3 xs:space-y-4 sm:space-y-5">
            <div className="flex items-start space-x-2 xs:space-x-3">
              <div className="w-1.5 xs:w-2 h-1.5 xs:h-2 bg-[#C068D1] rounded-full mt-1.5 xs:mt-2 flex-shrink-0"></div>
              <p className="text-black text-sm xs:text-base sm:text-lg">
                Live transcription & speech-to-text so conversations are
                captured instantly.
              </p>
            </div>
            <div className="flex items-start space-x-2 xs:space-x-3">
              <div className="w-1.5 xs:w-2 h-1.5 xs:h-2 bg-[#C068D1] rounded-full mt-1.5 xs:mt-2 flex-shrink-0"></div>
              <p className="text-black text-sm xs:text-base sm:text-lg">
                Emotion & intent detection to spot frustration, urgency, or
                satisfaction in real time.
              </p>
            </div>
            <div className="flex items-start space-x-2 xs:space-x-3">
              <div className="w-1.5 xs:w-2 h-1.5 xs:h-2 bg-[#C068D1] rounded-full mt-1.5 xs:mt-2 flex-shrink-0"></div>
              <p className="text-black text-sm xs:text-base sm:text-lg">
                Compliance alerts that flag risky phrases or missed disclosures
                on the spot.
              </p>
            </div>
            <div className="flex items-start space-x-2 xs:space-x-3">
              <div className="w-1.5 xs:w-2 h-1.5 xs:h-2 bg-[#C068D1] rounded-full mt-1.5 xs:mt-2 flex-shrink-0"></div>
              <p className="text-black text-sm xs:text-base sm:text-lg">
                Automated QA scoring that gives consistent, fair feedback for
                every interaction.
              </p>
            </div>
          </div>
          <p className="text-black text-sm xs:text-base sm:text-lg md:text-xl mt-4 xs:mt-6 sm:mt-8">
            With Convoze, managers don’t have to wait for the end-of-week
            reports. They can act on insights while the conversation is still
            happening.
          </p>
        </div>
      </motion.div>

      {/* Proven Measurable Impact Section - Dark */}
      <motion.div
        className="w-full bg-gradient-to-tl to-[#21082b] from-[#27022e] shadow-xl py-8 xs:py-10 sm:py-12 md:py-20 mb-10 xs:mb-12 sm:mb-16 md:mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="w-full max-w-sm xs:max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">
          <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-3.5xl lg:text-4xl font-semibold text-white mb-3 xs:mb-4 sm:mb-6">
            Proven Measurable{" "}
            <span className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] text-transparent bg-clip-text [-webkit-background-clip:text] [color:theme('colors.purple.400')]">
              Impact
            </span>
          </h3>
          <p className="text-white text-sm xs:text-base sm:text-lg mb-6 xs:mb-8 sm:mb-10 md:mb-12">
            BPOs and contact centers using Convoze are experiencing:
          </p>

          {/* Bulleted impact list */}
          <ul className="text-gray-300 text-sm xs:text-base sm:text-lg space-y-3 mb-6 xs:mb-8 sm:mb-10 md:mb-12">
            <li>
              • Elevate customer satisfaction by 35% through accelerated and
              precision-driven service.
            </li>
            <li>
              • Reduce QA review time by 60%, reallocating expert talent to
              strategic initiatives.
            </li>
            <li>
              • Achieve total visibility with comprehensive, 100% conversation
              coverage.
            </li>
            <li>
              • Realize a full return on investment in under 90 days through
              significant cost reduction and a dramatic drop in case
              escalations.
            </li>
          </ul>

          {/* Comparison Table */}
          <div className="rounded-lg overflow-hidden border border-white/10">
            <table className="w-full">
              <thead>
                <tr className="bg-white/10 backdrop-blur-sm">
                  <th
                    scope="col"
                    className="text-left p-2 xs:p-3 sm:p-4 font-semibold text-white text-xs xs:text-sm sm:text-base"
                  >
                    Metric
                  </th>
                  <th
                    scope="col"
                    className="text-center p-2 xs:p-3 sm:p-4 font-semibold text-white text-xs xs:text-sm sm:text-base"
                  >
                    Before Convoze
                  </th>
                  <th
                    scope="col"
                    className="text-center p-2 xs:p-3 sm:p-4 font-semibold text-white text-xs xs:text-sm sm:text-base"
                  >
                    After Convoze
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="p-2 xs:p-3 sm:p-4 text-white text-xs xs:text-sm sm:text-base">
                    QA Coverage
                  </td>
                  <td className="text-center p-2 xs:p-3 sm:p-4 text-gray-300 text-xs xs:text-sm sm:text-base">
                    3–4% manually reviewed
                  </td>
                  <td className="text-center p-2 xs:p-3 sm:p-4 text-gray-300 text-xs xs:text-sm sm:text-base">
                    100% auto-audit
                  </td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-2 xs:p-3 sm:p-4 text-white text-xs xs:text-sm sm:text-base">
                    Quality Review Time
                  </td>
                  <td className="text-center p-2 xs:p-3 sm:p-4 text-gray-300 text-xs xs:text-sm sm:text-base">
                    Days for feedback
                  </td>
                  <td className="text-center p-2 xs:p-3 sm:p-4 text-gray-300 text-xs xs:text-sm sm:text-base">
                    Instant real-time scoring
                  </td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-2 xs:p-3 sm:p-4 text-white text-xs xs:text-sm sm:text-base">
                    CSAT (Customer Satisfaction)
                  </td>
                  <td className="text-center p-2 xs:p-3 sm:p-4 text-gray-300 text-xs xs:text-sm sm:text-base">
                    Inconsistent
                  </td>
                  <td className="text-center p-2 xs:p-3 sm:p-4 text-gray-300 text-xs xs:text-sm sm:text-base">
                    +35% uplift
                  </td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-2 xs:p-3 sm:p-4 text-white text-xs xs:text-sm sm:text-base">
                    Compliance Monitoring
                  </td>
                  <td className="text-center p-2 xs:p-3 sm:p-4 text-gray-300 text-xs xs:text-sm sm:text-base">
                    Breaches found post-escalation
                  </td>
                  <td className="text-center p-2 xs:p-3 sm:p-4 text-gray-300 text-xs xs:text-sm sm:text-base">
                    Live risk flagging
                  </td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-2 xs:p-3 sm:p-4 text-white text-xs xs:text-sm sm:text-base">
                    Agent Coaching
                  </td>
                  <td className="text-center p-2 xs:p-3 sm:p-4 text-gray-300 text-xs xs:text-sm sm:text-base">
                    Limited sample-based coaching
                  </td>
                  <td className="text-center p-2 xs:p-3 sm:p-4 text-gray-300 text-xs xs:text-sm sm:text-base">
                    Continuous coaching from all data
                  </td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-2 xs:p-3 sm:p-4 text-white text-xs xs:text-sm sm:text-base">
                    Operational Costs
                  </td>
                  <td className="text-center p-2 xs:p-3 sm:p-4 text-gray-300 text-xs xs:text-sm sm:text-base">
                    High manual QA costs
                  </td>
                  <td className="text-center p-2 xs:p-3 sm:p-4 text-gray-300 text-xs xs:text-sm sm:text-base">
                    ~60% QA time reduction
                  </td>
                </tr>
                <tr>
                  <td className="p-2 xs:p-3 sm:p-4 text-white text-xs xs:text-sm sm:text-base">
                    ROI Realization
                  </td>
                  <td className="text-center p-2 xs:p-3 sm:p-4 text-gray-300 text-xs xs:text-sm sm:text-base">
                    6–12 months
                  </td>
                  <td className="text-center p-2 xs:p-3 sm:p-4 text-gray-300 text-xs xs:text-sm sm:text-base">
                    ~90 days
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>

      {/* What You Get Inside Convoze Section - Light */}
      <motion.div
        className="w-full bg-slate-200 shadow-xl py-8 xs:py-10 sm:py-12 md:py-20 mb-8 xs:mb-10 sm:mb-12 md:mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="w-full max-w-sm xs:max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">
          <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-3.5xl lg:text-4xl font-semibold text-black mb-4 xs:mb-6 sm:mb-8">
            Enhancing BPO Operations with{" "}
            <span className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] text-transparent bg-clip-text [-webkit-background-clip:text] [color:theme('colors.purple.900')]">
              Convoze
            </span>
          </h3>
          <ul className="text-black text-sm xs:text-base sm:text-lg space-y-2 xs:space-y-3">
            <li>
              • Instant transcription for quick reference and keyword searches.
            </li>
            <li>
              • Sentiment audit that recognizes not just the words, but the
              tone, emotion and intent.
            </li>
            <li>
              • Live compliance monitoring to keep conversations aligned with
              regulations.
            </li>
            <li>
              • Role-based dashboards showing trends, alerts, and performance
              heatmaps.
            </li>
            <li>• Multilingual capability for diverse customer bases.</li>
            <li>
              • Easy integration with your existing systems with no heavy
              lifting required.
            </li>
            <li>
              • 100% customizable according to the business need, ensuring QA
              and insights adapt to your workflows.
            </li>
          </ul>
        </div>
      </motion.div>

      {/* Built for the Real World Section - Dark */}
      <motion.div
        className="w-full bg-gradient-to-tl to-[#21082b] md:-mt-12 from-[#27022e] shadow-xl py-12 xs:py-10 sm:py-12 md:py-24 text-center"
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
      </motion.div>

      <motion.div
        className="w-full bg-gradient-to-tl to-[#21082b] md:-mt-12 from-[#27022e] shadow-xl py-12 xs:py-10 sm:py-12 md:py-24 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              See Convoze in{" "}
              <span className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] text-transparent bg-clip-text [-webkit-background-clip:text] [color:theme('colors.purple.400')]">
                Action - (CTA)
              </span>
            </h2>
          </div>

          {/* AI Detection Badge */}
          <div className="mb-8">
            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <div className="text-white text-sm font-medium mb-1">
                Your Text is Human written
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="text-gray-300 text-xs">0%</div>
                <div className="text-gray-400 text-xs">AI GPT*</div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-white/10 text-left">
            <h3 className="text-lg font-semibold text-white mb-4">
              Convoze for BPO & Contact Centers:
            </h3>

            <div className="space-y-4 text-gray-200 text-sm leading-relaxed">
              <p className="font-medium text-white">
                Turning Every Conversation into Actionable Insights
              </p>

              <p>
                <span className="font-medium text-white">
                  The Reality on the Floor:
                </span>
              </p>

              <p>
                Running a contact center is a constant balancing act. Peaks in
                demand, customers who expect instant answers, and the pressure
                to hit service targets can stretch even the best teams to their
                limits.
              </p>

              <p>
                The truth? Most contact call managers review only 3-4% of their
                calls. That means 96% valuable insights – performance gaps,
                compliance risks, and customer sentiment shifts– completely
                unseen. And when those gaps unnoticed, it leads to:
              </p>

              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Scaling struggles when seasonal surges lead to long wait times
                  and frustrated customers.
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-8">
            <motion.button
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See Convoze in Action
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CaseStudy;
