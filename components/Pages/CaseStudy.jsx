// components/CaseStudy.jsx
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
    <div className="min-h-screen bg-gradient-to-tl to-[#21082b] from-[#27022e] py-28 px-4 -mt-6 ">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Convoze for
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
            BPO & Contact Centers
          </h2>
          <p className="text-gray-400 text-lg">
            Turning Every Conversation into Actionable Insight
          </p>
        </motion.div>

        {/* Company Info Section */}
        <motion.div
          className="flex flex-col md:flex-row items-start justify-between mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="w-full md:w-1/2 space-y-4 mb-8 md:mb-0">
            <div className="flex items-center">
              <span className="text-white font-semibold w-24">Industry:</span>
              <span className="text-gray-300">BPO And Call Centers</span>
            </div>
            <div className="flex items-center">
              <span className="text-white font-semibold w-24">Company:</span>
              <span className="text-gray-300">XYZ Solutions, UAE</span>
            </div>
            <div className="flex items-center">
              <span className="text-white font-semibold w-24">Client:</span>
              <span className="text-gray-300">Josefin H. Smith</span>
            </div>
            <div className="flex items-center">
              <span className="text-white font-semibold w-24">Date:</span>
              <span className="text-gray-300">25 January 2025</span>
            </div>

            <motion.div
              className="mb-20 flex items-start space-x-8 mt-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="w-64 bg-gray-900 rounded-lg p-6">
                <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">co</span>
                </div>
                <h4 className="text-white font-semibold mb-2">
                  We're here help!
                </h4>
                <p className="text-gray-400 text-sm mb-4">
                  Need assistance? We're here to help with support, guidance,
                  and resources. Reach out to us!
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-400 text-sm">
                    <span className="mr-2">📞</span>
                    <span>+1(00) - 123 456 7890</span>
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <span className="mr-2">✉️</span>
                    <span>support@domainname.com</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="w-full md:w-1/2 h-[70vh] flex justify-end">
            <div className="w-full h-full rounded-lg overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-red-500 via-orange-500 to-blue-500 opacity-90"></div>
            </div>
          </div>
        </motion.div>

        {/* Support Section */}

        {/* The Reality on the Floor Section */}
        <motion.div
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-3xl md:text-4xl font-semibold text-white mb-8">
            The{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Reality
            </span>{" "}
            on the Floor
          </h3>
          <p className="text-gray-300 text-lg mb-8 max-w-4xl">
            Business processes in seems-like busy call centers where customers
            and prospect instant answers and the pressure to hit service targets
            can stretch even the best teams to their limits. The Truth? 7 most
            centers are losing customers every month. 2-4 of their calls. That
            means 90% valuable insights - performance goals, compliance rates,
            and customer sentiment shifts - Completely unseen. And when those
            goes unchecked, it leads to:
          </p>
          <ul className="text-gray-300 space-y-2 max-w-4xl">
            <li>
              • Agents are going under seasoned stress due to poor wait times
              and treatment.
            </li>
            <li>
              • Inconsistent quality because only a handful of calls get
              checked.
            </li>
            <li>
              • High staff turnover, which means never-ending recruiting and
              retraining.
            </li>
            <li>
              • Costly compliance slips that can damage your brand and and
              trigger Escalation & fines.
            </li>
            <li>
              • Missed sentiment cues, like those subtle signs of
              dissatisfaction until it's too late.
            </li>
          </ul>
        </motion.div>

        {/* How Convoze changes the Game Section */}
        <motion.div
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-3xl md:text-4xl font-semibold text-white mb-8">
            How Convoze changes the{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Game
            </span>
          </h3>
          <p className="text-gray-300 text-lg mb-8 max-w-4xl">
            Think of Convoze as an expert QA and customer insight powerhouse
            that listens to every conversation every single one without missing
            a moment.
          </p>
          <p className="text-gray-300 text-lg mb-8 max-w-4xl">
            This is exactly what it brings to the table:
          </p>

          <div className="space-y-4 max-w-4xl">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-300">
                Live transcription & speech-to-text so calls are captured
                instantly.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-300">
                Emotion & intent detection to spot frustration, urgency, or
                dissatisfaction in real time.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-300">
                Compliance alerts that flag risky phrases or missed disclosures
                on the spot.
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-300">
                Automated QA scoring that gives consistent, fair feedback for
                every interaction.
              </p>
            </div>
          </div>

          <p className="text-gray-300 text-lg mt-8 max-w-4xl">
            With Convoze, managers don't have to wait for the end-of-week
            reports. They can act on insights while the conversation is still
            happening.
          </p>
        </motion.div>

        {/* Proven Measurable Impact Section */}
        <motion.div
          className="mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <h3 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Proven Measurable{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Impact
            </span>
          </h3>
          <p className="text-gray-400 mb-12">
            BPOs and contact centers using Convoze are experiencing:
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {/* 35% */}
            <motion.div
              className="text-center"
              variants={fadeIn}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                35%
              </div>
              <p className="text-gray-300 text-sm">
                higher customer satisfaction scores, fewer escalations and more
                accurate service.
              </p>
            </motion.div>
            {/* 60% */}
            <motion.div
              className="text-center"
              variants={fadeIn}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
            >
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                60%
              </div>
              <p className="text-gray-300 text-sm">
                less QA review time, freeing up teams for higher-value work.
              </p>
            </motion.div>
            {/* 100% */}
            <motion.div
              className="text-center"
              variants={fadeIn}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
            >
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                100%
              </div>
              <p className="text-gray-300 text-sm">
                visibility with best-in-class conversation coverage.
              </p>
            </motion.div>
            {/* 90 */}
            <motion.div
              className="text-center"
              variants={fadeIn}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, delay: 0.3 }}
            >
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
                90
              </div>
              <p className="text-gray-300 text-sm">
                days to attain ROI from cost savings and fewer escalations.
              </p>
            </motion.div>
          </div>

          {/* Comparison Table */}
          <div className="rounded-lg overflow-hidden border border-white/10">
            <table className="w-full">
              <thead>
                <tr className="bg-white/10 backdrop-blur-sm">
                  <th className="text-left p-2 xs:p-3 sm:p-4 font-semibold text-white">
                    Metric
                  </th>
                  <th className="text-center p-2 xs:p-3 sm:p-4 font-semibold text-white">
                    Before Convoze
                  </th>
                  <th className="text-center p-2 xs:p-3 sm:p-4 font-semibold text-white">
                    After Convoze
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="p-2 xs:p-3 sm:p-4 text-white">QA Coverage</td>
                  <td className="text-center p-2 xs:p-3 sm:p-4 text-gray-300">
                    5-15 manual placement
                  </td>
                  <td className="text-center p-2 xs:p-3 sm:p-4 text-gray-300">
                    100% digital coverage
                  </td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-2 xs:p-3 sm:p-4 text-white">
                    Quality Review Time
                  </td>
                  <td className="text-center p-2 xs:p-3 sm:p-4 text-gray-300">
                    Days for feedback
                  </td>
                  <td className="text-center p-2 xs:p-3 sm:p-4 text-gray-300">
                    Instant real-time scoring
                  </td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-2 xs:p-3 sm:p-4 text-white">
                    Call Customer Satisfaction
                  </td>
                  <td className="text-center p-2 xs:p-3 sm:p-4 text-gray-300">
                    Inconsistent
                  </td>
                  <td className="text-center p-2 xs:p-3 sm:p-4 text-gray-300">
                    35% increase
                  </td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-2 xs:p-3 sm:p-4 text-white">
                    Compliance Monitoring
                  </td>
                  <td className="text-center p-2 xs:p-3 sm:p-4 text-gray-300">
                    Manual spot checks
                  </td>
                  <td className="text-center p-2 xs:p-3 sm:p-4 text-gray-300">
                    Automated alerts
                  </td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-2 xs:p-3 sm:p-4 text-white">
                    Agent Coaching
                  </td>
                  <td className="text-center p-2 xs:p-3 sm:p-4 text-gray-300">
                    Limited sample-based coaching
                  </td>
                  <td className="text-center p-2 xs:p-3 sm:p-4 text-gray-300">
                    Continuous coaching from all data
                  </td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="p-2 xs:p-3 sm:p-4 text-white">
                    Operational Costs
                  </td>
                  <td className="text-center p-2 xs:p-3 sm:p-4 text-gray-300">
                    High QA overhead
                  </td>
                  <td className="text-center p-2 xs:p-3 sm:p-4 text-gray-300">
                    -60% QA time reduction
                  </td>
                </tr>
                <tr>
                  <td className="p-2 xs:p-3 sm:p-4 text-white">
                    ROI Realization
                  </td>
                  <td className="text-center p-2 xs:p-3 sm:p-4 text-gray-300">
                    6-12 months
                  </td>
                  <td className="text-center p-2 xs:p-3 sm:p-4 text-gray-300">
                    ~90 days
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* What you get inside Convoze Section */}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-3xl md:text-4xl font-semibold text-white mb-8">
            What you get inside{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Convoze
            </span>
          </h3>
          <ul className="text-gray-300 space-y-2 max-w-4xl">
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
              • Role-based dashboards showing real-time alerts, alerts, and
              performance heatmaps.
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
        >
          <h3 className="text-3xl md:text-4xl font-semibold text-white mb-6">
            Built for the{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Real World
            </span>
          </h3>
          <p className="text-gray-300 text-lg max-w-4xl mx-auto">
            Whether you're managing telecom support, handling travel bookings,
            or assisting utility customers, Convoze fits seamlessly into your
            workflow. It's built for high-volume contact centers, global teams,
            and any business where every conversation matters.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default CaseStudy;
