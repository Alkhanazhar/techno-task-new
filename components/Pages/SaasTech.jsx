"use client";
import React, { useState, useEffect } from "react";

import {
  ArrowRight,
  Zap,
  Shield,
  Headphones,
  Activity,
  MessageSquare,
  TrendingUp,
  Clock,
  DollarSign,
  Award,
  Globe,
  BarChart3,
  FileText,
  Lightbulb,
  Users,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ColorText } from "@/app/ecommerce-d2c/EcommerceD2c";

const SaaSTechPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const features = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Real Time Transcription & Sentiment Intelligence",
      description:
        "Live transcription instantly converts calls into searchable text. Emotion & intent detection pinpoints frustration, urgency, or buying signals as they happen.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Automated Compliance and QA Scoring",
      description:
        "Compliance alerts flag risky language in-the moment, preventing costly issues. Automated QA scoring delivers consistent, unbiased audits for every conversation.",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "Agent Assist",
      description:
        "Agent assist suggests the right KB articles or responses live, increasing first-call resolution rates.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Real Time Dashboards",
      description:
        "Convoze lists up live dashboards that show capability metrics, sentiment trends, and critical alerts so managers can act instantly.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Faster Product Feedback Loops",
      description:
        "Surfaces recurring bug mentions, feature requests, and integration issues directly from customer conversations. Enables product teams to act faster and prioritize what matters most to users.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Integrated Workflow and Insights",
      description:
        "All features work together to provide full visibility, actionable intelligence, and improved CX across the SaaS workflow.",
      color: "from-pink-500 to-purple-500",
    },
  ];

  const stats = [
    {
      icon: <Clock className="w-12 h-12 text-purple-100" />,
      stat: "40–60%",
      desc: "faster onboarding – Automated QA-based training insight speed up training for support engineers.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-purple-100" />,
      stat: "30%",
      desc: "fewer escalations by detecting unresolved issues early in customer conversations.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Zap className="w-12 h-12 text-purple-100" />,
      stat: "25%",
      desc: "faster bug/feature identification — Recurring product feedback is automatically flagged from conversations.",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-purple-100" />,
      stat: "100%",
      desc: "conversation coverage vs. <5% manual auditing — Ensures no customer interaction goes unheard.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <Award className="w-12 h-12 text-purple-100" />,
      stat: "10–15%",
      desc: "CSAT improvement – Proactive issue resolution and better coaching boost customer satisfaction.",
      color: "from-pink-500 to-purple-500",
    },
    {
      icon: <DollarSign className="w-12 h-12 text-purple-100" />,
      stat: "20–25%",
      desc: "reduction in QA costs – automation reduces manual auditing at scale.",
      color: "from-yellow-500 to-orange-500",
    },
  ];

  return (
    <div className="min-h-screen  -mt-16">
      {/* Hero Section */}
      {/* <div className="relative min-h-screen flex bg-slate-50 items-center pb-10 pt-24 justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute h-full w-full overflow-hidden opacity-30">
          <div className="absolute inset-0">
            <div className="animate-grid h-full w-full [background-image:linear-gradient(to_right,rgba(0,0,0,0.5)_1px,transparent_0),linear-gradient(to_bottom,rgba(40,40,40,0.2)_1px,transparent_0)] [background-size:120px_120px]"></div>
          </div>
        </div>

        <div className="w-full max-w-7xl mx-auto px-4 pt-12 flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 w-fit bg-purple-100/80 backdrop-blur-sm text-purple-900 rounded-full text-xs md:text-sm font-medium border border-purple-200">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              Complete Conversation Intelligence
            </span>

            <h1 className="mt-6 text-4xl lg:text-5xl font-bold text-gray-900">
              Convoze for{" "}
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
                SaaS & Tech
              </span>
            </h1>

            <h2 className="text-xl mt-6 font-semibold text-gray-700 max-w-3xl">
              Boost Onboarding, Retention & Support with Complete Conversation
              Intelligence
            </h2>

            <p className="text-base text-gray-700 max-w-4xl mt-6 leading-relaxed">
              In SaaS, every communication matters, from the very first
              onboarding call to ongoing support and upselling. Most teams can
              only review a fraction of these engagements thus leaving valuable
              insights and risks unheard.
            </p>

            <p className="text-base text-gray-700 max-w-4xl mt-4 leading-relaxed">
              <span className="font-bold text-gray-900">
                Convoze changes that.
              </span>{" "}
              Our AI-powered platform captures and audits 100% of customer
              interactions, giving you instant visibility into customer
              sentiment, compliance, and agent performance too in real time.
            </p>

            <div className="pt-4 mt-4">
              <button className="group shadow-[0px_2px_0px_0px_rgba(255,255,255,0.2)_inset] relative bg-gradient-to-r from-purple-600 to-indigo-600 inline-flex items-center justify-center rounded-full px-6 py-4 text-white transition-all hover:shadow-lg">
                Experience Real-Time Insights
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="w-full md:w-1/2 relative flex justify-end">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-xl opacity-20 group-hover:opacity-30 blur-2xl transition-opacity duration-500"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 rounded-xl opacity-50 group-hover:opacity-75 blur transition-all duration-500"></div>

              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop"
                alt="SaaS Team Collaboration"
                className="relative w-full h-auto max-w-md aspect-square object-cover rounded-xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-105"
              />

              <div className="absolute -top-4 -left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-purple-200">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-gray-700">
                    Real-Time AI
                  </span>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-indigo-200">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-gray-700">
                    100% Coverage
                  </span>
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <HeroSection />

      {/* Integration Framework Section */}
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
            Convoze Integration{" "}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
              Framework
            </span>
          </h3>

          <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
            Fuel Retention and CX with Real-Time Customer Intelligence. Convoze
            captures and audits every interaction, giving teams instant
            visibility into sentiment, compliance, and performance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden"
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
        </div>

        {/* Measurable Impact Section */}
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
              Measurable{" "}
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
                Impact
              </span>
            </h3>

            <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
              Teams using Convoze typically gain
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    <p className="text-4xl font-bold  relative z-10">
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
          </div>
        </div>

        {/* Why It Fits Section */}
        <div className="relative  py-20">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-10 lg:px-12 xl:px-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
                Why It Fits Modern{" "}
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
                  SaaS Workflows
                </span>
              </h3>

              <div className="space-y-6    mx-auto">
                <p className="text-gray-700 text-base leading-relaxed text-center">
                  Contact center and CRM systems are easily integrated with
                  Convoze. It supports multiple languages, adapts to regulatory
                  requirements, and is 100% customizable according to your
                  business needs, whether you're in fintech, healthtech,
                  e-commerce, or developer tools.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-6">
                  {[
                    {
                      industry: "Fintech",
                      image:
                        "https://images.unsplash.com/photo-1579226905180-636b76d96082?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
                    }, // Financial dashboard
                    {
                      industry: "Healthtech",
                      image:
                        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=600",
                    }, // Medical technology
                    {
                      industry: "E-Commerce",
                      image:
                        "https://images.unsplash.com/photo-1586880244406-556ebe35f282?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
                    }, // Online shopping
                    {
                      industry: "Developer Tools",
                      image:
                        "https://images.unsplash.com/photo-1759661990336-51bd4b951fea?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1332",
                    }, // Coding environment
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="group relative rounded-3xl overflow-hidden hover:scale-105 transform transition-all duration-300"
                    >
                      {/* Background Image */}
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${item.image})` }}
                      />

                      {/* Dark Overlay */}
                      <div className="absolute inset-0 bg-black/10" />

                      {/* Content */}
                      <div className="relative p-2 h-full flex flex-col justify-end min-h-[400px]">
                        {/* Stats */}
                        <div className="relative rounded-3xl px-4 py-2 overflow-hidden">
                          <div className="absolute inset-0 backdrop-blur-sm bg-gradient-to-b rounded-3xl from-black/20 to-black/50" />

                          <div className="flex items-center gap-2 justify-center py-2">
                            {/* <CheckCircle className="w-4 h-4 text-white relative" /> */}
                            <span className="text-white relative font-semibold text-sm md:text-[15px]">
                              {item.industry}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The Convoze Advantage Section */}
        <div className="relative  py-20">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-10 lg:px-12 xl:px-16 relative">
            <div className="text-center max-w-5xl mx-auto space-y-8">
              <h3 className="text-3xl md:text-4xl font-bold  text-gray-900">
                The <ColorText>Convoze Advantage</ColorText>
              </h3>

              <p className="text-gray-700 text-base leading-relaxed">
                Most QA tools give you fragments of the customer journey.
                Convoze delivers the full picture from enabling product teams to
                identify recurring feature requests, sales leaders to track
                objection patterns, and support managers to recognize
                top-performing agents.
              </p>

              <p className="text-gray-700 text-base leading-relaxed">
                With Convoze, every interaction becomes an opportunity to
                improve your product, retain your customers, and grow your
                revenue.
              </p>

              <div className="flex justify-center pt-6">
                <button className="group shadow-[0px_2px_0px_0px_rgba(255,255,255,0.2)_inset] relative bg-gradient-to-r from-purple-600 to-indigo-600 inline-flex items-center justify-center rounded-full px-8 py-4 text-white font-semibold transition-all hover:shadow-lg hover:scale-105">
                  See Convoze in Action
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaaSTechPage;

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
            Boost Onboarding, <br />
            Retention & Support <br />
            <span className="bg-gradient-to-tr relative from-purple-600/50 via-purple-700/85  to-indigo-600 text-transparent bg-clip-text">
              with Complete
              <br /> Conversation Intelligence
            </span>
          </motion.h1>

          {/* <motion.h2
            className="text-xl mt-6 relative font-semibold text-gray-700 max-w-3xl "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Turn Every Customer Interaction into Loyalty and Revenue
          </motion.h2> */}

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
            <span className="font-bold relative text-gray-900">Convoze</span>{" "}
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
}
