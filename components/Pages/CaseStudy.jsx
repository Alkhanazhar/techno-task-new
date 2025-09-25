"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Headphones,ShoppingCart, Zap,CheckCircle  } from "lucide-react";


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
                <Link href="/contact">
                  <button className="w-3/5 sm:w-auto bg-gradient-to-r from-[#C068D1] to-[#3224AF] text-sm cursor-pointer text-white border md:border-none border-purple-500 px-3 md:px-4 py-2 md:py-2 rounded-full font-medium hover:bg-black hover:text-white transition-all duration-300">
                    Book a Demo
                  </button>
                </Link>
                {/* <button className="w-1/2 sm:w-auto mx-auto sm:mx-0  bg-white text-sm cursor-pointer text-purple-800 px-3 md:px-5 py-2 md:py-2 rounded-full font-normal hover:opacity-90 transition-all duration-300">
                  See How It Works
                </button> */}
              </div>

            </div>

            {/* Right Side - Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Modern contact center with diverse agents working at desks with headsets, representing BPO operations"
                className="w-full max-w-[300px] xs:max-w-[350px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px] h-auto rounded-lg shadow-lg object-cover"
                loading="lazy"
              />
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
          <div className="flex mb-2">
            <div className="bg-gray-300 rounded-full p-3 flex items-center justify-center">
              <Headphones className="w-6 h-6 text-purple-700" />
            </div>
          </div>

          <h3 className="text-xl sm:text-xl md:text-2xl font-semibold text-left md:text-left mb-3">
            The{" "}
            <span className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] text-transparent bg-clip-text">
              Reality
            </span>{" "}
            on the Floor
          </h3>
          <p className="text-gray-800 text-sm sm:text-base md:text-md mb-3  md:text-left">
            Running a contact center is a constant balancing act. Peaks in demand,
            customers who expect instant answers, and the pressure to hit service
            targets can stretch even the best teams to their limits. Most centers still
            manage to audit only 3–4% of conversations. That means 96% of valuable
            insights go unseen.
          </p>

          <div className="space-y-2 sm:space-y-3 font-semibold">
            {[
              "Scaling struggles during seasonal surges and long wait times.",
              "Inconsistent quality because few conversations get checked.",
              "High staff turnover with ongoing recruiting and retraining.",
              "Costly compliance slips risking brand damage & fines.",
              "Missed sentiment cues until it’s too late."
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
              <CheckCircle  className="w-6 h-6 text-purple-700" />
            </div>
          </div>
          <h3 className="text-xl sm:text-xl md:text-2xl font-semibold text-center md:text-left mb-3">
            How Convoze Changes the{" "}
            <span className="sm:inline-block block bg-gradient-to-r from-[#C068D1] to-[#3224AF] text-transparent bg-clip-text">
              Game
            </span>
          </h3>

          <p className="text-gray-800 text-sm sm:text-base md:text-base mb-3 md:text-left">
            Convoze is an expert QA & customer insight powerhouse that listens to every
            conversation without missing a moment.
          </p>
          <div className="space-y-2 sm:space-y-3 font-semibold">
            {[
              "Live transcription & speech-to-text so conversations are captured instantly.",
              "Emotion & intent detection to spot frustration, urgency, or satisfaction in real time.",
              "Compliance alerts flag risky phrases or missed disclosures on the spot.",
              "Automated QA scoring gives consistent, fair feedback for every interaction."
            ].map((item, idx) => (
              <div key={idx} className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-[#C068D1] rounded-full mt-1 flex-shrink-0"></div>
                <p className="text-gray-800 text-sm sm:text-base">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-800 text-sm sm:text-base mt-4 text-center md:text-left">
            Managers can act on insights while the conversation is still happening.
          </p>
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
        <div className="w-full max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 flex flex-col md:flex-row items-center gap-8">

          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/generated.png"
              alt="Convoze BPO"
              className="w-full h-auto max-w-md rounded-xl shadow-lg"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2">
            <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-3.5xl lg:text-4xl font-semibold text-black text-center mb-4 xs:mb-6 sm:mb-8">
              Enhancing BPO Operations with{" "}
              <span className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] text-transparent bg-clip-text">
                Convoze
              </span>
            </h3>

            <div className="space-y-2 sm:space-y-3 font-semibold">
              {[
                "Instant transcription for quick reference and keyword searches.",
                "Sentiment audit that recognizes not just the words, but the tone, emotion and intent.",
                "Live compliance monitoring to keep conversations aligned with regulations.",
                "Role-based dashboards showing trends, alerts, and performance heatmaps.",
                "Multilingual capability for diverse customer bases.",
                "Easy integration with your existing systems with no heavy lifting required.",
                "100% customizable according to the business need, ensuring QA and insights adapt to your workflows."
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-[#C068D1] rounded-full mt-1 flex-shrink-0"></div>
                  <p className="text-gray-800 text-sm sm:text-base">{item}</p>
                </div>
              ))}
            </div>
          </div>

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
          <Link href={"/contact"}><motion.button
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}


          {/* AI Detection Badge */}
          {/* <div className="mb-8">
            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <div className="text-white text-sm font-medium mb-1">
                Your Text is Human written
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="text-gray-300 text-xs">0%</div>
                <div className="text-gray-400 text-xs">AI GPT*</div>
              </div>
            </div>
          </div> */}

          {/* Content Section */}


          {/* CTA Button */}

        </div>
      </motion.div>

    </div>
  );
};

export default CaseStudy;
