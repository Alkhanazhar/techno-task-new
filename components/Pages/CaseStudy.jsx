"use client";

import { motion } from "framer-motion";

const CaseStudy = () => {
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
    <div className="min-h-screen bg-gradient-to-tl to-[#21082b] from-[#27022e] py-12 xs:py-16 sm:py-20 md:py-24 lg:py-28 px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 -mt-6">
      <div className="max-w-sm xs:max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-8 xs:mb-10 sm:mb-12 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl xs:text-4xl sm:text-4.5xl md:text-5xl lg:text-6xl font-bold text-white mb-2 xs:mb-3 sm:mb-4">
            Convoze for
          </h1>
          <h2 className="text-2xl xs:text-3xl sm:text-3.5xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#C068D1] to-[#3224AF] text-transparent bg-clip-text [-webkit-background-clip:text] mb-2 xs:mb-3 sm:mb-4">
            BPO & Contact Centers
          </h2>
          <p className="text-gray-400 text-sm xs:text-base sm:text-lg md:text-xl">
            Turning Every Conversation into Actionable Insight
          </p>
        </motion.div>

        {/* Company Info Section */}
        <motion.div
          className="flex flex-col md:flex-row items-start justify-between mb-10 xs:mb-12 sm:mb-16 md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="w-full md:w-1/2 space-y-3 xs:space-y-4 sm:space-y-5 mb-6 xs:mb-8 md:mb-0">
            <div className="flex items-center">
              <span className="text-white font-semibold w-20 xs:w-24 sm:w-28 text-sm xs:text-base">
                Industry:
              </span>
              <span className="text-gray-300 text-sm xs:text-base">
                BPO And Call Centers
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-white font-semibold w-20 xs:w-24 sm:w-28 text-sm xs:text-base">
                Company:
              </span>
              <span className="text-gray-300 text-sm xs:text-base">
                XYZ Solutions, UAE
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-white font-semibold w-20 xs:w-24 sm:w-28 text-sm xs:text-base">
                Client:
              </span>
              <span className="text-gray-300 text-sm xs:text-base">
                Josefin H. Smith
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-white font-semibold w-20 xs:w-24 sm:w-28 text-sm xs:text-base">
                Date:
              </span>
              <span className="text-gray-300 text-sm xs:text-base">
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
              <div className="w-full max-w-[240px] xs:max-w-[280px] sm:max-w-[320px] bg-gray-900 rounded-lg p-4 xs:p-5 sm:p-6">
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

          <div className="w-full md:w-1/2 h-[40vh]  xs:h-[50vh] sm:h-[60vh] md:h-[70vh] flex justify-end">
            <div className="w-full h-full rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-red-500 via-orange-500 to-blue-500 opacity-90"></div>
            </div>
          </div>
        </motion.div>

        {/* The Reality on the Floor Section */}
        <motion.div
          className="mb-10 xs:mb-12 sm:mb-16 md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-3.5xl lg:text-4xl font-semibold text-white mb-4 xs:mb-6 sm:mb-8">
            The{" "}
            <span className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] text-transparent bg-clip-text [-webkit-background-clip:text]">
              Reality
            </span>{" "}
            on the Floor
          </h3>
          <p className="text-gray-300 text-sm xs:text-base sm:text-lg md:text-xl mb-4 xs:mb-6 sm:mb-8 max-w-sm xs:max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
            Business processes in busy call centers, where customers and
            prospects demand instant answers, can stretch even the best teams to
            their limits. The truth? Most centers lose customers every month due
            to 2-4% of their calls going unchecked. That means 90% of valuable
            insights—performance goals, compliance rates, and customer sentiment
            shifts—go completely unseen. This leads to:
          </p>
          <ul className="text-gray-300 text-sm xs:text-base sm:text-lg space-y-2 xs:space-y-3 max-w-sm xs:max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
            <li>
              • Agents face seasoned stress due to poor wait times and
              treatment.
            </li>
            <li>
              • Inconsistent quality because only a handful of calls are
              checked.
            </li>
            <li>
              • High staff turnover, leading to ongoing recruiting and
              retraining.
            </li>
            <li>
              • Costly compliance slips that can damage your brand and trigger
              escalation & fines.
            </li>
            <li>
              • Missed sentiment cues, like subtle signs of dissatisfaction,
              until it’s too late.
            </li>
          </ul>
        </motion.div>

        {/* How Convoze Changes the Game Section */}
        <motion.div
          className="mb-10 xs:mb-12 sm:mb-16 md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-3.5xl lg:text-4xl font-semibold text-white mb-4 xs:mb-6 sm:mb-8">
            How Convoze Changes the{" "}
            <span className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] text-transparent bg-clip-text [-webkit-background-clip:text]">
              Game
            </span>
          </h3>
          <p className="text-gray-300 text-sm xs:text-base sm:text-lg md:text-xl mb-4 xs:mb-6 sm:mb-8 max-w-sm xs:max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
            Think of Convoze as an expert QA and customer insight powerhouse
            that listens to every conversation—every single one—without missing
            a moment.
          </p>
          <p className="text-gray-300 text-sm xs:text-base sm:text-lg md:text-xl mb-4 xs:mb-6 sm:mb-8 max-w-sm xs:max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
            This is exactly what it brings to the table:
          </p>
          <div className="space-y-3 xs:space-y-4 sm:space-y-5 max-w-sm xs:max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
            <div className="flex items-start space-x-2 xs:space-x-3">
              <div className="w-1.5 xs:w-2 h-1.5 xs:h-2 bg-purple-400 rounded-full mt-1.5 xs:mt-2 flex-shrink-0"></div>
              <p className="text-gray-300 text-sm xs:text-base sm:text-lg">
                Live transcription & speech-to-text so calls are captured
                instantly.
              </p>
            </div>
            <div className="flex items-start space-x-2 xs:space-x-3">
              <div className="w-1.5 xs:w-2 h-1.5 xs:h-2 bg-purple-400 rounded-full mt-1.5 xs:mt-2 flex-shrink-0"></div>
              <p className="text-gray-300 text-sm xs:text-base sm:text-lg">
                Emotion & intent detection to spot frustration, urgency, or
                dissatisfaction in real time.
              </p>
            </div>
            <div className="flex items-start space-x-2 xs:space-x-3">
              <div className="w-1.5 xs:w-2 h-1.5 xs:h-2 bg-purple-400 rounded-full mt-1.5 xs:mt-2 flex-shrink-0"></div>
              <p className="text-gray-300 text-sm xs:text-base sm:text-lg">
                Compliance alerts that flag risky phrases or missed disclosures
                on the spot.
              </p>
            </div>
            <div className="flex items-start space-x-2 xs:space-x-3">
              <div className="w-1.5 xs:w-2 h-1.5 xs:h-2 bg-purple-400 rounded-full mt-1.5 xs:mt-2 flex-shrink-0"></div>
              <p className="text-gray-300 text-sm xs:text-base sm:text-lg">
                Automated QA scoring that gives consistent, fair feedback for
                every interaction.
              </p>
            </div>
          </div>
          <p className="text-gray-300 text-sm xs:text-base sm:text-lg md:text-xl mt-4 xs:mt-6 sm:mt-8 max-w-sm xs:max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
            With Convoze, managers don’t have to wait for end-of-week reports.
            They can act on insights while the conversation is still happening.
          </p>
        </motion.div>

        {/* Proven Measurable Impact Section */}
        <motion.div
          className="mb-10 xs:mb-12 sm:mb-16 md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-3.5xl lg:text-4xl font-semibold text-white mb-3 xs:mb-4 sm:mb-6">
            Proven Measurable{" "}
            <span className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] text-transparent bg-clip-text [-webkit-background-clip:text]">
              Impact
            </span>
          </h3>
          <p className="text-gray-400 text-sm xs:text-base sm:text-lg mb-6 xs:mb-8 sm:mb-10 md:mb-12">
            BPOs and contact centers using Convoze are experiencing:
          </p>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-4 xs:gap-6 sm:gap-8 mb-6 xs:mb-8 sm:mb-10 md:mb-12">
            <motion.div
              className="text-center"
              variants={fadeIn}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-3xl xs:text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#C068D1] to-[#3224AF] text-transparent bg-clip-text [-webkit-background-clip:text] mb-1 xs:mb-2 sm:mb-3">
                35%
              </div>
              <p className="text-gray-300 text-xs xs:text-sm sm:text-base">
                Higher customer satisfaction scores, fewer escalations, and more
                accurate service.
              </p>
            </motion.div>
            <motion.div
              className="text-center"
              variants={fadeIn}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
            >
              <div className="text-3xl xs:text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#C068D1] to-[#3224AF] text-transparent bg-clip-text [-webkit-background-clip:text] mb-1 xs:mb-2 sm:mb-3">
                60%
              </div>
              <p className="text-gray-300 text-xs xs:text-sm sm:text-base">
                Less QA review time, freeing up teams for higher-value work.
              </p>
            </motion.div>
            <motion.div
              className="text-center"
              variants={fadeIn}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
            >
              <div className="text-3xl xs:text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#C068D1] to-[#3224AF] text-transparent bg-clip-text [-webkit-background-clip:text] mb-1 xs:mb-2 sm:mb-3">
                100%
              </div>
              <p className="text-gray-300 text-xs xs:text-sm sm:text-base">
                Visibility with best-in-class conversation coverage.
              </p>
            </motion.div>
            <motion.div
              className="text-center"
              variants={fadeIn}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, delay: 0.3 }}
            >
              <div className="text-3xl xs:text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#C068D1] to-[#3224AF] text-transparent bg-clip-text [-webkit-background-clip:text] mb-1 xs:mb-2 sm:mb-3">
                90
              </div>
              <p className="text-gray-300 text-xs xs:text-sm sm:text-base">
                Days to attain ROI from cost savings and fewer escalations.
              </p>
            </motion.div>
          </div>

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
                    5-15 manual placement
                  </td>
                  <td className="text-center p-2 xs:p-3 sm:p-4 text-gray-300 text-xs xs:text-sm sm:text-base">
                    100% digital coverage
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
                    Call Customer Satisfaction
                  </td>
                  <td className="text-center p-2 xs:p-3 sm:p-4 text-gray-300 text-xs xs:text-sm sm:text-base">
                    Inconsistent
                  </td>
                  <td className="text-center p-2 xs:p-3 sm:p-4 text-gray-300 text-xs xs:text-sm sm:text-base">
                    35% increase
                  </td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-2 xs:p-3 sm:p-4 text-white text-xs xs:text-sm sm:text-base">
                    Compliance Monitoring
                  </td>
                  <td className="text-center p-2 xs:p-3 sm:p-4 text-gray-300 text-xs xs:text-sm sm:text-base">
                    Manual spot checks
                  </td>
                  <td className="text-center p-2 xs:p-3 sm:p-4 text-gray-300 text-xs xs:text-sm sm:text-base">
                    Automated alerts
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
                    High QA overhead
                  </td>
                  <td className="text-center p-2 xs:p-3 sm:p-4 text-gray-300 text-xs xs:text-sm sm:text-base">
                    -60% QA time reduction
                  </td>
                </tr>
                <tr>
                  <td className="p-2 xs:p-3 sm:p-4 text-white text-xs xs:text-sm sm:text-base">
                    ROI Realization
                  </td>
                  <td className="text-center p-2 xs:p-3 sm:p-4 text-gray-300 text-xs xs:text-sm sm:text-base">
                    6-12 months
                  </td>
                  <td className="text-center p-2 xs:p-3 sm:p-4 text-gray-300 text-xs xs:text-sm sm:text-base">
                    ~90 days
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* What You Get Inside Convoze Section */}
        <motion.div
          className="mb-8 xs:mb-10 sm:mb-12 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-3.5xl lg:text-4xl font-semibold text-white mb-4 xs:mb-6 sm:mb-8">
            What You Get Inside{" "}
            <span className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] text-transparent bg-clip-text [-webkit-background-clip:text]">
              Convoze
            </span>
          </h3>
          <ul className="text-gray-300 text-sm xs:text-base sm:text-lg space-y-2 xs:space-y-3 max-w-sm xs:max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
            <li>
              • Instant transcription for quick reference and keyword searches.
            </li>
            <li>
              • Sentiment analysis that captures not just the words, but the
              tone behind them.
            </li>
            <li>
              • Live compliance monitoring to keep calls aligned with
              regulations.
            </li>
            <li>
              • Role-based dashboards showing real-time alerts and performance
              heatmaps.
            </li>
            <li>• Multilingual capability for diverse customer bases.</li>
            <li>
              • Easy integration with your existing systems without heavy
              lifting required.
            </li>
          </ul>
        </motion.div>

        {/* Built for the Real World Section */}
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.6 }}
          suicid
        >
          <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-3.5xl lg:text-4xl font-semibold text-white mb-3 xs:mb-4 sm:mb-6">
            Built for the{" "}
            <span className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] text-transparent bg-clip-text [-webkit-background-clip:text]">
              Real World
            </span>
          </h3>
          <p className="text-gray-300 text-sm xs:text-base sm:text-lg md:text-xl max-w-sm xs:max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto">
            Whether you’re managing telecom support, handling travel bookings,
            or assisting utility customers, Convoze fits seamlessly into your
            workflow. It’s built for high-volume contact centers, global teams,
            and any business where every conversation matters.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default CaseStudy;
