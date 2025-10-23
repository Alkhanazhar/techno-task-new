import { motion } from "framer-motion";
import {
  AlertCircle,
  Users,
  Shield,
  TrendingDown,
  DollarSign,
  Brain,
  BarChart3,
  Frown,
  ThumbsDown,
  Timer,
  ShieldAlert,
  TimerResetIcon,
  TimerOff,
} from "lucide-react";

const Index = () => {
  const statsData = [
    {
      icon: TrendingDown,
      text: "95% of Conversations Are Wasted.",
    },
    {
      icon: AlertCircle,
      text: "Less than 5% of customer conversations are audited.",
    },
    {
      icon: Users,
      text: "Most agent coaching is delayed by days.",
    },
    {
      icon: Shield,
      text: "Compliance risks go unnoticed until escalation.",
    },
    {
      icon: Frown,
      text: "Customer sentiment is misunderstood or ignored.",
    },
  ];

  const bottomCards = [
    {
      icon: ThumbsDown,
      text: "Poor QA leads to customer churn.",
    },
    {
      icon: TimerOff,
      text: "Delayed feedback kills team growth.",
    },
    {
      icon: ShieldAlert,
      text: "Missed compliance breaches cost millions.",
    },
  ];

  const containerVariants = {
    // hidden: { opacity: 0 },
    // visible: {
    //   opacity: 1,
    //   transition: {
    //     staggerChildren: 0.15,
    //   },
    // },
  };

  const itemVariants = {
    // hidden: { opacity: 1, filter: "blur(10px)" },
    // visible: {
    //   opacity: 1,
    //   filter: "blur(0px)",
    //   transition: {
    //     duration: 0.5,
    //   },
    // },
  };

  return (
    <div className="md:min-h-screen  relative  overflow-hidden  bg-white py-16 px-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/bgPattern.png"
          alt="Background Pattern"
          className="w-screen h-full object-cover opacity-15 !z-0"
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 space-y-3"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500"
          >
            Why <span className="text-gray-800 dark:text-white">Convoze?</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="text-lg text-gray-700 dark:text-gray-300"
          >
            In traditional contact center setups —
          </motion.p>
        </motion.div>

        {/* Top Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(20px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16 "
        >
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-4 rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]  bg-white/90 border border-gray-500/10 backdrop-blur-sm dark:bg-slate-800  hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md">
                  <stat.icon className="w-6 h-6" />
                </div>
                <p className="text-sm md:text-base  text-gray-600 dark:text-gray-200">
                  {stat.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section Header */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center text-2xl font-semibold mb-6 text-gray-900 dark:text-white"
        >
          This isn't just inefficient — it's expensive.
        </motion.h3>

        {/* Bottom Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(20px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 zoom-out"
        >
          {bottomCards.map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="py-10 rounded-2xl bg-white/90  border-gray-500/10 border shadow-[0_3px_10px_rgb(0,0,0,0.2)] backdrop-blur-sm dark:bg-slate-800  hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-md">
                  <card.icon className="w-6 h-6" />
                </div>
                <p className="text-sm md:text-base  font-medium text-gray-600 dark:text-gray-200">
                  {card.text}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Final Message */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            You're investing in conversations — but not learning from them.
          </p>
          <p className="text-xl font-semibold text-gray-900 dark:text-white">
            That's where{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500 font-bold">
              Convoze
            </span>{" "}
            steps in.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
