import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const HeroSaas = () => {
  return (
    <div className="relative min-h-screen flex bg-slate-50 items-center  pb-10 pt-24 justify-center overflow-hidden  px-4 sm:px-6 lg:px-8">
      {/* Decorative Blurred Elements */}
      <div className="pointer-events-none absolute h-full w-full overflow-hidden opacity-30 [perspective:300px]">
        <div className="absolute inset-0 [transform:rotateX(35deg)]">
          <div className="animate-grid [inset:0%_0px] [margin-left:-50%] [height:300vh] [width:600vw] [transform-origin:100%_0_0] [background-image:linear-gradient(to_right,rgba(0,0,0,0.5)_1px,transparent_0),linear-gradient(to_bottom,rgba(40,40,40,0.2)_1px,transparent_0)] [background-size:120px_120px] [background-repeat:repeat]"></div>
        </div>
      </div>

      {/* Floating Particles */}

      {/* Content */}
      <div className="w-full max-w-7xl mx-auto px-4 pt-12  flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 w-fit bg-purple-100/80 backdrop-blur-sm text-purple-900 rounded-full text-xs md:text-sm font-medium border border-purple-200">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            AI-Powered Customer Intelligence
          </span>
          <motion.h1
            className="from-primary/30 mt-6 items-start via-foreground/85 font-semibold to-foreground/50 bg-gradient-to-tl bg-clip-text text-start text-4xl tracking-normal text-balance text-transparent lg:text-[40px] md:whitespace-nowrap "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Boost Onboarding, Retention & Support with Complete
            <span className="bg-gradient-to-tr relative from-purple-600/50 via-purple-700/85  to-indigo-600 text-transparent bg-clip-text">
              Conversation Intelligence
            </span>
          </motion.h1>

          <motion.h2
            className="text-xl mt-6 relative font-semibold text-gray-700 max-w-3xl "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Turn Every Customer Interaction into Loyalty and Revenue
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground mx-auto mt-6 max-w-2xl text-start text-base"
          >
            In SaaS, every communication matters, from the very first onboarding
            call to ongoing support and upselling. Most teams can only review a
            fraction of these engagements thus leaving valuable insights and
            risks unheard.
          </motion.p>

          <motion.p
            className="text-base  text-gray-700 relative max-w-4xl mt-6 mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className="font-bold relative text-gray-900">Convoze </span>{" "}
            changes that. Our AI-powered platform captures and Audits 100% of
            customer interactions, giving you instant visibility into customer
            sentiment, compliance, and agent performance too in real time.
          </motion.p>

          <motion.div
            className="pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link href="/contact">
              <button className="group shadow-[0px_2px_0px_0px_rgba(255,255,255,0.2)_inset]  relative bg-gradient-to-r from-[#C068D1] to-[#3224AF] border-input inline-flex w-full items-center justify-center rounded-full border-[1px] px-6 py-4 text-center text-white transition-colors hover:bg-transparent/90 sm:w-auto">
                Experience Real-Time Insights
                <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>
        </div>
        <div className="w-full md:w-1/2 relative flex justify-end">
          <motion.div
            className="relative group"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Glow effect behind image */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-xl opacity-20 group-hover:opacity-30 blur-2xl transition-opacity duration-500"></div>

            {/* Animated border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 rounded-xl opacity-50 group-hover:opacity-75 blur transition-all duration-500 animate-gradient-xy"></div>

            <img
              src="/ecomm.png"
              alt="E-Commerce and D2C"
              className="relative w-full h-auto max-w-md aspect-square rounded-xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-105"
            />

            {/* Floating badges */}
            <motion.div
              className="absolute -top-4 -left-4 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-purple-200"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-gray-700">
                  100% Coverage
                </span>
              </div>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -right-4 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-indigo-200"
              animate={{ y: [0, 5, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
              }}
            >
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-gray-700">
                  Real-Time AI
                </span>
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSaas;
