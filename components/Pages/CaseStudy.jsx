"use client";
import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Shield,
  Activity,
  MessageSquare,
  TrendingUp,
  Clock,
  Users,
  Bell,
  BarChart3,
  Zap,
  Eye,
  Target,
  Award,
  DollarSign,
  TrendingDown,
  UserX,
  AlertTriangle,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import ConvozeMetrics from "./ConvozeMetrics";

const ColorText = ({ children }) => (
  <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
    {children}
  </span>
);

const BPOContactCenterPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const challenges = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title:
        "Scaling struggles when seasonal surges lead to long wait times and frustrated customers.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title:
        "Inconsistent quality because only a handful of conversations get checked.",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: <UserX className="w-8 h-8" />,
      title:
        "High staff turnover, which means never-ending recruiting and retraining.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title:
        "Costly compliance slips that can damage your brand and trigger escalation & fines.",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title:
        "Missed sentiment cues, like those subtle signs of dissatisfaction until it's too late.",
      color: "from-green-500 to-emerald-500",
    },
  ];

  const features = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Live transcription & speech-to-text",
      description: "Conversations are captured instantly.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Emotion & intent detection",
      description: "Spots frustration, urgency, or satisfaction in real time.",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Compliance alerts",
      description: "Flags risky phrases or missed disclosures on the spot.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Automated QA scoring",
      description: "Gives consistent, fair feedback for every interaction.",
      color: "from-green-500 to-emerald-500",
    },
  ];

  const enhancementFeatures = [
    "Instant transcription for quick reference and keyword searches.",
    "Sentiment audit that recognizes not just the words, but the tone, emotion and intent.",
    "Live compliance monitoring to keep conversations aligned with regulations.",
    "Role-based dashboards showing trends, alerts, and performance heatmaps.",
    "Multilingual capability for diverse customer bases.",
    "Easy integration with your existing systems with no heavy lifting required.",
    "100% customizable according to the business need, ensuring QA and insights adapt to your workflows.",
  ];

  const stats = [
    {
      icon: <Award className="w-12 h-12 text-purple-100" />,
      stat: "35%",
      desc: "Higher customer satisfaction through accelerated and precision-driven service.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Clock className="w-12 h-12 text-purple-100" />,
      stat: "60%",
      desc: "Reduced QA review time reallocating expert talent to strategic initiatives by automating audits.",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: <Eye className="w-12 h-12 text-purple-100" />,
      stat: "100%",
      desc: "Conversation coverage — Achieve total visibility across all interactions.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <DollarSign className="w-12 h-12 text-purple-100" />,
      stat: "90 Days",
      desc: "ROI in under 90 days through significant cost reduction and a dramatic drop in case escalations.",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <div className="min-h-screen -mt-16">
      {/* Hero Section */}
      <HeroSection />

      {/* The Reality Section */}

      <div className="relative bg-slate-100 py-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/bgPattern.png"
            alt="Background Pattern"
            className="w-full h-full rotate-180 object-cover opacity-10"
          />
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-10 lg:px-12 xl:px-16 relative">
          <h3 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Reality{" "}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
              on the Floor
            </span>
          </h3>

          <p className="text-center text-gray-700 mb-6 max-w-3xl mx-auto text-base leading-relaxed">
            The truth? Most centers still manage to audit only{" "}
            <span className="font-bold text-gray-900">3–4%</span> of their
            conversations. That means{" "}
            <span className="font-bold text-gray-900">96%</span> valuable
            insights – performance gaps, compliance risks, and customer
            sentiment shifts – completely unseen.
          </p>

          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto font-semibold">
            And when those go unnoticed, it leads to:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((challenge, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden"
              >
                <div className="flex items-start gap-4 relative z-10">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-br ${challenge.color} text-white group-hover:scale-110 transition-transform flex-shrink-0`}
                  >
                    {challenge.icon}
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {challenge.title}
                  </p>
                </div>
                <div
                  className={`absolute -top-6 -right-6 h-24 w-24 rounded-full bg-gradient-to-br ${challenge.color} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* How Convoze Changes the Game Section */}
        <div className="relative  py-20">
          <div className="absolute inset-0 -z-10 opacity-[0.02]">
            <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="grid"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-10 lg:px-12 xl:px-16">
            <h3 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Convoze{" "}
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
                Changes the Game
              </span>
            </h3>

            <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
              Think of Convoze as an expert QA and customer insight powerhouse
              that listens to every conversation – every single one – without
              missing a moment.
            </p>

            <p className="text-center text-gray-700 mb-8 max-w-2xl mx-auto font-semibold">
              This is exactly what it brings to the table:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm border border-gray-200 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden"
                >
                  <div className="flex items-start gap-4 relative z-10">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-br ${feature.color} text-white group-hover:scale-110 transition-transform flex-shrink-0`}
                    >
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  <div
                    className={`absolute -top-6 -right-6 h-24 w-24 rounded-full bg-gradient-to-br ${feature.color} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity`}
                  />
                </div>
              ))}
            </div>

            <p className="text-center text-gray-700 max-w-3xl mx-auto text-base leading-relaxed">
              With Convoze, managers don't have to wait for the end-of-week
              reports. They can act on insights{" "}
              <span className="font-bold text-gray-900">
                while the conversation is still happening.
              </span>
            </p>

            <div className="flex justify-center mt-8">
              <button className="group shadow-[0px_2px_0px_0px_rgba(255,255,255,0.2)_inset] relative bg-gradient-to-r from-purple-600 to-indigo-600 inline-flex items-center justify-center rounded-full px-8 py-4 text-white font-semibold transition-all hover:shadow-lg hover:scale-105">
                Request a Demo
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Proven Measurable Impact Section */}

        <div className="w-full  max-w-7xl mx-auto px-4 sm:px-8 md:px-10 lg:px-12 xl:px-16 relative">
          <h3 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Proven Measurable <ColorText>Impact</ColorText>
          </h3>

          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            BPOs and contact centers using Convoze are experiencing:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:mb-12">
            {stats.map((item, idx) => (
              <div
                key={idx}
                className="group border border-gray-200 bg-white/80 backdrop-blur-xl relative overflow-hidden rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`flex h-24 w-24 shrink-0 rotate-45 scale-150 opacity-15 absolute -bottom-3 -right-3 items-center justify-center rounded-lg bg-gradient-to-br ${item.color}`}
                  >
                    {item.icon}
                  </div>
                  <p className="text-4xl font-bold relative z-10">
                    <ColorText>{item.stat}</ColorText>
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-gray-700 relative z-10">
                  {item.desc}
                </p>
                <div
                  className={`absolute -top-6 -right-6 h-24 w-24 rounded-full bg-gradient-to-br ${item.color} opacity-20 blur-2xl transition-all duration-500 group-hover:opacity-30`}
                />
              </div>
            ))}
          </div>

          <ConvozeMetrics />
        </div>

        {/* Enhancing BPO Operations Section */}
        <div className="relative  py-20">
          <div className="absolute inset-0 -z-10 opacity-[0.02]">
            <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="grid2"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid2)" />
            </svg>
          </div>

          <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-10 lg:px-12 xl:px-16">
            <h3 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Enhancing BPO Operations{" "}
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
                with Convoze
              </span>
            </h3>

            <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
              Optimize every process of your contact center workflow with
              real-time actionable insights and AI-powered intelligence.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {enhancementFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-purple-50 to-indigo-50 p-6 rounded-2xl border border-purple-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {feature}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Built for Real World Section */}
        <div className="relative  py-20">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-10 lg:px-12 xl:px-16 relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className=" p-2">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Built for the{" "}
                  <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
                    Real World
                  </span>
                </h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  Whether you're managing telecom support, handling travel
                  bookings, or assisting utility customers, Convoze fits
                  seamlessly into your workflow. It is built for high-volume
                  contact centers, global teams, and any business where trust,
                  accuracy, and compliance matter.
                </p>
              </div>

              <div className=" p-2 ">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Why{" "}
                  <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
                    Convoze
                  </span>{" "}
                  Stands Out
                </h3>
                <p className="text-gray-700 text-base leading-relaxed">
                  Most QA tools still work in isolation or rely on a handful of
                  conversation samples. Being different, Convoze audits every
                  single conversation in one unified platform. That gives
                  reduced blind spots, more rapid decisions, and better outcomes
                  for both your customers and your business.
                </p>
              </div>
            </div>

            <div className="flex justify-center mt-12">
              <button className="group shadow-[0px_2px_0px_0px_rgba(255,255,255,0.2)_inset] relative bg-gradient-to-r from-purple-600 to-indigo-600 inline-flex items-center justify-center rounded-full px-8 py-4 text-white font-semibold transition-all hover:shadow-lg hover:scale-105">
                See Convoze in Action
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BPOContactCenterPage;

function HeroSection() {
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
            Convoze for <br />
            <span className="bg-gradient-to-tr relative from-purple-600/50 via-purple-700/85  to-indigo-600 text-transparent bg-clip-text">
              BPO & Contact Centers
            </span>
          </motion.h1>

          <motion.h2
            className="text-xl mt-6 relative font-semibold text-gray-700 max-w-3xl "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Turning Every Conversation into Actionable Insight
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground mx-auto mt-6 max-w-2xl text-start text-base"
          >
            Running a contact center is a constant balancing act. Peaks in
            demand, customers who expect instant answers, and the pressure to
            hit service targets can stretch even the best teams to their limits.
          </motion.p>

          <motion.p
            className="text-base  text-gray-700 relative max-w-4xl mt-6 mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className="font-bold relative text-gray-900">Convoze</span>{" "}
            Audits 100% of conversations, giving teams real-time insights into
            customer sentiment, agent performance and compliance
          </motion.p>

          <motion.div
            className="pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link href="/contact">
              <button className="group shadow-[0px_2px_0px_0px_rgba(255,255,255,0.2)_inset]  relative bg-gradient-to-r from-[#C068D1] to-[#3224AF] border-input inline-flex w-full items-center justify-center rounded-full border-[1px] px-6 py-4 text-center text-white transition-colors hover:bg-transparent/90 sm:w-auto">
                Unlock Full Conversation Intelligence
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
}
