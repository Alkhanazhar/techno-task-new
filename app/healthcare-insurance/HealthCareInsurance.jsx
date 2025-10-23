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
  Award,
  DollarSign,
  TrendingDown,
  UserCheck,
  Globe,
  Lock,
  FileText,
  AlertTriangle,
  ShieldCheck,
  Repeat,
  Gauge,
  ArrowDownCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import InfiniteCarousel from "@/components/hero/InfiniteCarousel";
import { Marquee } from "@/components/ui/marquee";
import { ButtonHover } from "@/components/Pages/SaasTech";
import FeatureMarquee from "@/components/FeatureMarquee";

const ColorText = ({ children }) => (
  <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
    {children}
  </span>
);

const HealthcareInsurance = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const challenges = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Fragmented communication channels.",
      color: "from-blue-500 to-cyan-500",
      image: "fragmented.png",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Strict regulatory & compliance burden.",
      color: "from-purple-500 to-indigo-500",
      image: "strict-regulatory.png",
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Emotionally charged high-stakes interactions.",
      color: "from-red-500 to-pink-500",
      image: "healthcare-emotional.png",
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Hidden fraud risks & claim irregularities.",
      color: "from-orange-500 to-red-500",
      image: "hidden-feature.png",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Inconsistent service & agent performance.",
      color: "from-green-500 to-emerald-500",
      image: "inconsistent-agent.png",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Slow claims resolution & escalations.",
      color: "from-yellow-500 to-orange-500",
      image: "show-claim.png",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "High volume & seasonal pressure.",
      color: "from-indigo-500 to-blue-500",
      image: "high-volume.png",
    },
  ];

  const howConvozeHelps = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "100% Conversation & Ticket Auditing",
      description:
        "Every call, chat and support ticket is automatically analyzed and audited with KPI-linked QA metrics, ensuring no interaction is ever missed.",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Sentiment & Emotion Detection in Real Time",
      description:
        "Helps teams detect and address frustration, stress or confusion instantly improving outcome and member/patient satisfaction.",
      color: "from-purple-500 to-blue-500",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Multilingual Support & Accent Adaptability",
      description:
        "Supports multiple languages and accents. This allows seamless care and service to diverse populations.",
      color: "from-purple-500 to-blue-500",
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Protecting Sensitive Data",
      description:
        "Safeguards confidential information while making compliance and auditing effortless for your team.",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Actionable Insights & Dashboards",
      description:
        "Turns conversation data into actionable insights, giving managers and compliance teams visibility into trends, risks and recurring gaps.",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "AI + Human QA Integration",
      description:
        "Combines automated insights with human oversight for accurate compliance monitoring, fraud and performance monitoring.",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Immediate Risk Detection",
      description:
        "Detect policy violations or potential fraud in real time hence enabling your team to act swiftly and prevent larger issues.",
      color: "from-blue-500 to-purple-500",
    },
  ];

  const redefiningCare = [
    {
      title: "24/7 Patient & Customer Support",
      description:
        "Automate appointment reminders, policy queries, claims updates, and FAQs with a personal touch.",
      bullet: "purple",
      image: "24-7.png",
    },
    {
      title: "Safe and Compliant",
      description:
        "Compliant with HIPAA and other regulatory standards thus ensuring sensitive health and insurance data remains secure within the system.",
      bullet: "purple",
      image: "safe-complaint.png",
    },
    {
      title: "Data Driven Insights",
      description:
        "Easily audits discussions to identify patterns, enhance customer service, and inform wise choices for data driven insights.",
      bullet: "purple",
      image: "data-driven.png",
    },
    {
      title: "Operational Efficiency",
      description:
        "Reduce administrative burden on staff, enabling quicker responses and smoother operations.",
      bullet: "indigo",
      image: "operational.png",
    },
    {
      title: "Unified Customer Communication",
      description:
        "Keep all customer conversations in one place making service faster and more efficient.",
      bullet: "indigo",
      image: "unified.png",
    },
  ];

  const stats = [
    {
      icon: <Repeat className="w-12 h-12 text-purple-100" />,
      stat: "100%",
      desc: "Conversation Coverage",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <ShieldCheck className="w-12 h-12 text-purple-100" />,
      stat: "50%",
      desc: "Faster Compliance & Risk Resolution",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-purple-100" />,
      stat: "10–15%",
      desc: "Higher Member/Patient Satisfaction (CSAT/NPS)",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-purple-100" />,
      stat: "40–60%",
      desc: "Faster QA Reviews & Agent Coaching",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <ArrowDownCircle className="w-12 h-12 text-purple-100" />,
      stat: "20–30%",
      desc: "Fewer Escalations & Disputes",
      color: "from-pink-500 to-purple-500",
    },
    {
      icon: <Gauge className="w-12 h-12 text-purple-100" />,
      stat: "25%",
      desc: "Faster Service & Process Improvements",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: <DollarSign className="w-12 h-12 text-purple-100" />,
      stat: "20–25%",
      desc: "Lower Auditing & Operational Costs",
      color: "from-indigo-500 to-blue-500",
    },
  ];

  return (
    <div className="min-h-screen -mt-16">
      {/* Hero Section */}
      <HeroSection />

      {/* Transforming Section */}
      <div className="relative bg-white py-20">
        {/* <div className="absolute inset-0 z-0">
          <img
            src="/bgPattern.png"
            alt="Background Pattern"
            className="w-full h-full object-cover opacity-10"
          />
        </div> */}

        {/* <div className="w-full max-w-7xl mx-auto px-4 min-h-screen flex items-center sm:px-8 md:px-10 lg:px-12  relative">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src="/medical.png"
                alt="Healthcare & Insurance"
                className="w-full h-auto max-w-md object-cover bg-cover rounded-xl shadow-lg"
              />
            </div>

            <div className="w-full md:w-1/2">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Transforming Risk Management into{" "}
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
                  Relationship Building
                </span>
              </h3>

              <div className="space-y-4 text-sm md:text-base text-gray-700 leading-relaxed">
                <p>
                  In healthcare and insurance, every interaction carries high
                  stakes — from patient well-being to sensitive financial data.
                </p>

                <p>
                  Convoze helps your teams offer caring, compliant, and
                  efficient services. It protects every call, chat, and support
                  ticket.
                </p>

                <p>
                  Instead of catching errors after the damage is done, your
                  teams get real-time alerts for potential risks, policy
                  breaches, or signs of distress — enabling faster claims
                  resolution, reduced escalations, and improved patient/member
                  trust.
                </p>

                <p className="font-semibold">
                  With Convoze, you don't just monitor conversations — you
                  protect lives, secure data, and earn lasting trust.
                </p>
              </div>
            </div>
          </div>
        </div> */}

        {/* Challenges Section */}
        <div className="relative  py-20">
          <div className="w-full max-w-[88rem] mx-auto px-4 sm:px-8 ">
            <h3 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Challenges{" "}
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
                Healthcare & Insurance
              </span>{" "}
              Teams Face
            </h3>

            <p className="text-center text-sm md:text-base text-gray-700 mb-4 max-w-3xl mx-auto">
              Key challenges that healthcare and insurance providers face in
              delivering exceptional service while maintaining compliance.
            </p>

            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {challenges.map((challenge, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden border border-gray-100"
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
            </div> */}
            <InfiniteCarousel items={challenges} />
          </div>
        </div>

        {/* How Convoze Helps Section */}
        <div className="relative  py-20">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-10 lg:px-12 xl:px-16 relative">
            <h3 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Convoze{" "}
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
                Helps
              </span>
            </h3>

            <p className="text-center text-sm md:text-base text-gray-700 mb-8 max-w-3xl mx-auto">
              Comprehensive solutions designed specifically for healthcare and
              insurance providers to ensure quality, compliance, and exceptional
              service.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {howConvozeHelps.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/80  backdrop-blur-sm border border-gray-200 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden"
                >
                  <div className="flex items-start gap-4 relative z-10">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-br  text-white ${feature.color} border group-hover:scale-110 transition-transform flex-shrink-0`}
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
        </div>

        {/* Proven Measurable Impact Section */}
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
              Proven Measurable <ColorText>Impact</ColorText> with Convoze
            </h3>

            <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
              Real results from healthcare and insurance organizations using
              Convoze.
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
          </div>
        </div>

        {/* Redefining Care Section */}
        <div className="relative py-20">
          <div className="w-full max-w-[88rem] mx-auto px-4 sm:px-8 md:px-10 lg:px-12 xl:px-16 relative">
            <h3 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Redefining Care and Service with{" "}
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
                Convoze
              </span>
            </h3>

            <p className="text-center max-w-4xl mx-auto text-gray-700 text-base leading-relaxed mb-8 md:text-base">
              Timely and accurate communication makes all the difference.
              Convoze helps providers, clinics, hospitals, and insurance
              companies enhance patient and client experiences while ensuring
              compliance and efficiency. Trusted by healthcare and insurance
              leaders, here's how it helps.
            </p>

            <FeatureMarquee features={redefiningCare} />

            <p className="text-center max-w-4xl mx-auto  text-gray-700 text-sm md:text-base leading-relaxed mt-12">
              Convoze ensures healthcare and insurance providers don't just
              communicate. They connect, build trust, improve efficiency, and
              deliver exceptional care and service.
            </p>
          </div>
        </div>

        {/* Built for Real World Section */}
        <div className="relative  py-20">
          {/* <div className="absolute inset-0 -z-10 opacity-[0.02]">
            <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="grid3"
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
              <rect width="100%" height="100%" fill="url(#grid3)" />
            </svg>
          </div> */}

          <div className="w-full max-w-[88rem] mx-auto px-4 sm:px-8 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="py-8 ">
                <h3 className="text-2xl md:text-3xl md:whitespace-nowrap font-bold text-gray-900 mb-4">
                  Where Convoze{" "}
                  <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
                    Makes
                  </span>{" "}
                  the Difference
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  With Convoze, healthcare and insurance providers don't just
                  handle interactions — they protect lives, secure sensitive
                  data, and earn lasting trust. Every conversation becomes an
                  opportunity to care better, resolve faster, and deliver safer,
                  compliant service at scale.
                </p>
              </div>

              <div className=" py-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Why{" "}
                  <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
                    Convoze
                  </span>{" "}
                  Stands Out
                </h3>
                <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                  Most QA tools still work in isolation or rely on a handful of
                  conversation samples. Being different, Convoze audits every
                  single conversation in one unified platform. That gives
                  reduced blind spots, more rapid decisions, and better outcomes
                  for both your customers and your business.
                </p>
              </div>
            </div>

            <ButtonHover text={"See Convoze in Action"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthcareInsurance;

function HeroSection() {
  return (
    <div className="relative min-h-screen flex bg-white items-center py-20 md:py-28 justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Decorative Grid */}
      {/* <div className="pointer-events-none absolute h-full w-full overflow-hidden opacity-30 [perspective:300px]">
        <div className="absolute inset-0 [transform:rotateX(0deg)]">
          <div className="animate-grid [inset:0%_0px] [margin-left:-50%] [height:300vh] [width:600vw] [transform-origin:100%_0_0] [background-image:linear-gradient(to_right,rgba(0,0,0,0.5)_1px,transparent_0),linear-gradient(to_bottom,rgba(40,40,40,0.2)_1px,transparent_0)] [background-size:120px_120px] [background-repeat:repeat]"></div>
        </div>
      </div> */}

      {/* <HeroBackgroundGeadientAnimation /> */}

      {/* Content */}
      <div className="w-full max-w-7xl mx-auto sm:px-4 pt-12 md:pt-28 flex flex-col  md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 w-fit bg-purple-100/80 backdrop-blur-sm text-purple-900 rounded-full text-xs md:text-sm font-medium border border-purple-200">
            {/* <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span> */}
            Convoze for Healthcare & Insurance
          </span>

          <motion.h1
            className="from-primary/30 mt-6 items-start via-foreground/85 font-semibold to-foreground/50 bg-gradient-to-tl bg-clip-text text-start text-3xl tracking-normal text-balance text-transparent lg:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Powering Smarter, <br />
            Safer Conversations that <br />
            <span className="bg-gradient-to-tr relative from-purple-600/50 via-purple-700/85 to-indigo-600 text-transparent bg-clip-text">
              Care for Every Life
            </span>
          </motion.h1>

          <motion.p
            className="text-sm md:text-base text-gray-700 relative max-w-4xl mt-4 mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            In healthcare and insurance, every interaction carries weight.{" "}
            <span className="font-bold relative text-gray-900">Convoze</span>{" "}
            ensures your teams deliver caring, compliant, and efficient service
            while protecting sensitive data and building lasting trust.
          </motion.p>

          <ButtonHover text={" Book a Demo"} />
        </div>

        <div className="w-full md:w-1/2 relative flex justify-center">
          <motion.div
            className="relative group"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Glow effect behind image */}

            {/* Animated border */}

            <img
              src="/healthcare.png"
              alt="healthcare technology"
              className="relative w-full h-auto object-cover scale-110 max-w-md  transition-all duration-500 group-hover:scale-115"
            />

            {/* Floating badges */}
            {/* <motion.div
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
                        </motion.div> */}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export function HeroBackgroundGeadientAnimation() {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
          <path
            d="M 60 0 L 0 0 0 60"
            fill="none"
            stroke="rgba(200,180,160,0.8)"
            strokeWidth="0.5"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
      <line
        x1="0"
        y1="20%"
        x2="100%"
        y2="20%"
        className="grid-line"
        style={{ animationDelay: "0.5s" }}
      />
      <line
        x1="0"
        y1="80%"
        x2="100%"
        y2="80%"
        className="grid-line"
        style={{ animationDelay: "1s" }}
      />
      <line
        x1="20%"
        y1="0"
        x2="20%"
        y2="100%"
        className="grid-line"
        style={{ animationDelay: "1.5s" }}
      />
      <line
        x1="80%"
        y1="0"
        x2="80%"
        y2="100%"
        className="grid-line"
        style={{ animationDelay: "2s" }}
      />
      <line
        x1="50%"
        y1="0"
        x2="50%"
        y2="100%"
        className="grid-line"
        style={{ animationDelay: "2.5s", opacity: 0.05 }}
      />
      <line
        x1="0"
        y1="50%"
        x2="100%"
        y2="50%"
        className="grid-line"
        style={{ animationDelay: "3s", opacity: 0.05 }}
      />
      {/* <circle
        cx="20%"
        cy="20%"
        r="2"
        className="detail-dot"
        style={{ animationDelay: "3s" }}
      />
      <circle
        cx="80%"
        cy="20%"
        r="2"
        className="detail-dot"
        style={{ animationDelay: "3.2s" }}
      />
      <circle
        cx="20%"
        cy="80%"
        r="2"
        className="detail-dot"
        style={{ animationDelay: "3.4s" }}
      />
      <circle
        cx="80%"
        cy="80%"
        r="2"
        className="detail-dot"
        style={{ animationDelay: "3.6s" }}
      />
      <circle
        cx="50%"
        cy="50%"
        r="1.5"
        className="detail-dot"
        style={{ animationDelay: "4s" }}
      /> */}
    </svg>
  );
}
