"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Headphones, ShoppingCart, Zap, CheckCircle } from "lucide-react";
const avatars = [
  // Left side avatars
  {
    id: 1,
    src: "https://api.dicebear.com/7.x/bottts/svg?seed=Felix",
    initialX: 8,
    initialY: 15,
    side: "left",
  },
  {
    id: 2,
    src: "https://api.dicebear.com/7.x/bottts/svg?seed=Luna",
    initialX: 12,
    initialY: 45,
    side: "left",
  },
  {
    id: 3,
    src: "https://api.dicebear.com/7.x/bottts/svg?seed=Charlie",
    initialX: 18,
    initialY: 75,
    side: "left",
  },
  {
    id: 4,
    src: "https://api.dicebear.com/7.x/bottts/svg?seed=Oreo",
    initialX: 5,
    initialY: 55,
    side: "left",
  },
  // Right side avatars
  {
    id: 5,
    src: "https://api.dicebear.com/7.x/bottts/svg?seed=Aneka",
    initialX: 88,
    initialY: 12,
    side: "right",
  },
  {
    id: 6,
    src: "https://api.dicebear.com/7.x/bottts/svg?seed=Max",
    initialX: 92,
    initialY: 35,
    side: "right",
  },
  {
    id: 7,
    src: "https://api.dicebear.com/7.x/bottts/svg?seed=Buddy",
    initialX: 90,
    initialY: 70,
    side: "right",
  },
  {
    id: 8,
    src: "https://api.dicebear.com/7.x/bottts/svg?seed=Milo",
    initialX: 85,
    initialY: 88,
    side: "right",
  },
];
const FloatingAvatar = ({ avatar, mouseX, mouseY }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const avatarX = useSpring(0, { stiffness: 50, damping: 20 });
  const avatarY = useSpring(0, { stiffness: 50, damping: 20 });

  useEffect(() => {
    if (!isMounted) return;

    const updatePosition = () => {
      const x = mouseX.get();
      const y = mouseY.get();

      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const offsetX =
        ((avatar.initialX / 100) * window.innerWidth - centerX) / centerX;
      const offsetY =
        ((avatar.initialY / 100) * window.innerHeight - centerY) / centerY;

      // Enhanced parallax effect with side consideration
      const multiplier = avatar.side === "left" ? 0.06 : 0.06;
      const moveX = (x - centerX) * offsetX * multiplier;
      const moveY = (y - centerY) * offsetY * multiplier;

      avatarX.set(moveX);
      avatarY.set(moveY);
    };

    const unsubscribeX = mouseX.on("change", updatePosition);
    const unsubscribeY = mouseY.on("change", updatePosition);

    return () => {
      unsubscribeX();
      unsubscribeY();
    };
  }, [mouseX, mouseY, avatar, avatarX, avatarY, isMounted]);

  return (
    <motion.div
      className="absolute pointer-events-none z-10 opacity-70"
      style={{
        left: `${avatar.initialX}%`,
        top: `${avatar.initialY}%`,
        x: avatarX,
        y: avatarY,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 0.7, scale: 1 }}
      transition={{
        delay: avatar.id * 0.1,
        duration: 0.5,
        ease: "easeOut",
      }}
    >
      <motion.img
        src={avatar.src}
        alt={`Avatar ${avatar.id}`}
        className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-14 lg:h-14 rounded-full border-2 border-purple-400/30 shadow-lg bg-purple-900/20"
        whileHover={{ scale: 1.2, rotate: 10 }}
        transition={{ duration: 0.3 }}
      />
      {/* Colored dots effect */}
      <motion.div
        className="absolute -top-1 -right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-purple-400"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: avatar.id * 0.2,
        }}
      />
    </motion.div>
  );
};

const SaasTech = () => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

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
  useEffect(() => {
    setIsMounted(true);

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

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
        {isMounted &&
          avatars.map((avatar) => (
            <FloatingAvatar
              key={avatar.id}
              avatar={avatar}
              mouseX={mouseX}
              mouseY={mouseY}
            />
          ))}
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
        <div className="w-full max-w-sm h-full xs:max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 relative z-20">
          <div
            className="flex flex-col lg:flex-row 
                 items-center justify-center lg:justify-between 
                 gap-12 xs:gap-8 sm:gap-10 md:gap-12 lg:gap-16 
                 h-screen"
          >
            {/* Left Side - Text Content */}
            <div className="w-full lg:w-1/2 text-center lg:text-left space-y-2 sm:space-y-2">
              <h1 className="text-3xl xs:text-4xl sm:text-4.5xl md:text-5xl lg:text-5xl font-bold text-white mb-2 xs:mb-3 sm:mb-4">
                Convoze for
              </h1>
              <h2 className="text-2xl xs:text-3xl sm:text-3.5xl md:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-[#C068D1] to-[#3224AF] text-transparent bg-clip-text [-webkit-background-clip:text] [color:theme('colors.purple.400')] mb-2 xs:mb-3 sm:mb-4">
                SaaS & Tech
              </h2>
              <p className="text-gray-200 font-extralight text-sm xs:text-base sm:text-lg ">
                Boost Onboarding, Retention & Support with Complete Conversation
                Intelligence
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

            <motion.div
              className="w-full lg:w-1/2 flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Modern contact center with diverse agents working at desks with headsets, representing BPO operations"
                className="w-full max-w-[300px] xs:max-w-[350px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px] h-auto rounded-lg shadow-lg object-cover"
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

      {/* What You Get Inside Convoze Section - Light */}
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
              src="/saas.png"
              alt="Convoze BPO"
              className="w-full h-auto max-w-md rounded-xl shadow-lg"
            />
          </div>

          <div className="w-full md:w-1/2">
            <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-3.5xl lg:text-3xl font-semibold text-black text-center mb-4 xs:mb-6 sm:mb-8">
              Fuel Retention and CX with Real-Time{" "}
              <span className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] text-transparent bg-clip-text">
                Customer Intelligence
              </span>
            </h3>
            <p className="text-gray-800 text-sm sm:text-base md:text-md mb-3  md:text-left">
              In SaaS, every communication matters, from the very first
              onboarding call to ongoing support and upselling. Most teams can
              only review a fraction of these engagements thus leaving valuable
              insights and risks unheard.
            </p>
            <p className="text-gray-800 text-sm sm:text-base md:text-md mb-3  md:text-left">
              Convoze changes that. Our AI-powered platform captures and
              analyzes 100% of customer interactions, giving you instant
              visibility into customer sentiment, compliance, and agent
              performance that too in real time.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="w-full bg-gradient-to-tl to-[#21082b] from-[#27022e] shadow-xl py-8 xs:py-10 sm:py-12 md:py-6 mb-10 xs:mb-12 sm:mb-16 md:mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="w-full max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">
          <h3 className="text-center text-xl xs:text-2xl sm:text-3xl md:text-3.5xl lg:text-4xl font-semibold text-white mb-10">
            Fuel Retention and CX with Real-Time <br />
            <span className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] text-transparent bg-clip-text [-webkit-background-clip:text]">
              Customer Intelligence
            </span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-10">
            <div className="space-y-4">
              {[
                {
                  title: "Real Time Transcription & Sentiment Intelligence",
                  description: [
                    "Live transcription instantly converts calls into searchable text which eliminates digging through recordings.",
                    "Emotion & intent detection pinpoints frustration, urgency, or buying signals as they happen.",
                  ],
                },
                {
                  title: "Automated Compliance and QA scoring",
                  description: [
                    "Compliance alerts flag risky language in-the moment, preventing costly issues.",
                    "Automated QA scoring delivers consistent, unbiased audits for every conversation",
                  ],
                },
                {
                  title: "Agent Assist",
                  description: [
                    "Agent assist suggests the right KB articles or responses live, increasing first-call resolution rates.",
                  ],
                },
                {
                  title: "Real Time Dashboards",
                  description: [
                    "Our Convoze lists up live dashboards that show capability metrics, sentiment trends, and critical alerts so managers can act Instantly.",
                  ],
                },
              ].map((feature, index) => (
                <div key={index} className="space-y-1 mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 flex items-center justify-center bg-purple-500 rounded-full mt-1"></span>
                    <h4 className="text-base sm:text-lg font-semibold text-white">
                      {feature.title}
                    </h4>
                  </div>
                  <div className="ml-5 space-y-1">
                    {feature.description.map((desc, i) => (
                      <div key={i} className="flex items-start space-x-2">
                        <span className="w-[6px] h-[6px] mt-2 bg-white rounded-full flex-shrink-0"></span>
                        <p className="text-gray-300 text-sm sm:text-sm leading-relaxed">
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
                  title: "Faster Product Feedback Loopse",
                  description: [
                    "Surfaces recurring bug mentions, feature requests, and integration issues directly from customer conversations.",
                    "Enables product teams to act faster and prioritize what matters most to users.",
                  ],
                },
                {
                  title: "Measurable Impact",
                  description: [
                    "40–60% faster onboarding for new support engineers through automated QA-based training insights.",
                    "Up to 30% fewer escalations by detecting unresolved issues early in customer conversations.",
                    "25% faster bug/feature identification as recurring product feedback is automatically flagged from conversations.",
                    "Covers 100% conversation vs. <5% manual auditing — ensuring no customer interaction goes unheard.",
                    "10–15% CSAT improvement through better coaching and proactive issue resolution .",
                    "20–25% reduction in QA costs by automating manual auditing at scale.",
                  ],
                },
              ].map((feature, index) => (
                <div key={index} className="space-y-1 mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 flex items-center justify-center bg-purple-500 rounded-full mt-1"></span>
                    <h4 className="text-base sm:text-lg font-semibold text-white">
                      {feature.title}
                    </h4>
                  </div>
                  {feature.title === "Measurable Impact" && (
                    <p className="text-gray-300 text-sm sm:text-sm ml-5 italic mb-3">
                      Teams using Convoze typically gain :
                    </p>
                  )}
                  <div className="ml-5 space-y-1">
                    {feature.description.map((desc, i) => (
                      <div key={i} className="flex items-start space-x-2">
                        <span className="w-[6px] h-[6px] mt-2 bg-white rounded-full flex-shrink-0"></span>
                        <p className="text-gray-300 text-sm sm:text-sm leading-relaxed">
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
        className="w-full flex flex-col md:flex-row bg-slate-200 shadow-xl py-8 md:py-12 mb-10 gap-8 justify-center items-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {/* Left Section */}
        <div className="w-full md:w-1/2 max-w-xl px-4 md:px-6 flex flex-col items-center md:items-start">
          <h3 className="text-xl sm:text-xl md:text-2xl font-semibold text-center md:text-left mb-3">
            Why It Fits Modern{" "}
            <span className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] text-transparent bg-clip-text">
              SaaS
            </span>{" "}
            Workflows
          </h3>
          <p className="text-gray-800 text-sm sm:text-base md:text-md mb-3  md:text-left">
            Contact center and CRM systems are easily integrated with Convoze.
            It supports multiple languages, adapts to regulatory requirements,
            and is 100% customizable according to your business needs, whether
            you’re in fintech, healthtech, e-commerce, or developer tools.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 max-w-xl px-4 md:px-6 flex flex-col items-center md:items-start">
          <h3 className="text-xl sm:text-xl md:text-2xl font-semibold text-center md:text-left mb-3">
            The Convoze Advantage{" "}
            <span className="sm:inline-block block bg-gradient-to-r from-[#C068D1] to-[#3224AF] text-transparent bg-clip-text">
              Advantage
            </span>
          </h3>

          <p className="text-gray-800 text-sm sm:text-base md:text-base mb-3 md:text-left">
            Most QA tools give you fragments of the customer journey. Convoze
            delivers the full picture from enabling product teams to identify
            recurring feature requests, sales leaders to track objection
            patterns, and support managers to recognize top-performing agents.
          </p>

          <p className="text-gray-800 text-sm sm:text-base mt-4 text-center md:text-left">
            With Convoze, every interaction becomes an opportunity to improve
            your product, retain your customers, and grow your revenue.
          </p>
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

      <motion.div
        className="w-full bg-gradient-to-tl to-[#21082b]  from-[#27022e] shadow-xl pb-4 xs:pb-4 sm:pb-8 md:pb-8 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"></div>
      </motion.div>
    </div>
  );
};

export default SaasTech;
