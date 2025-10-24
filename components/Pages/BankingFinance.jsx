"use client";
import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Shield,
  Activity,
  MessageSquare,
  TrendingUp,
  Clock,
  DollarSign,
  Award,
  AlertTriangle,
  Users,
  CheckCircle,
  Bell,
  Globe,
  Lock,
  BarChart3,
  FileText,
  Zap,
  Eye,
  UserCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import InfiniteCarousel from "../hero/InfiniteCarousel";
import { Marquee } from "../ui/marquee";
import FeatureMarquee from "../FeatureMarquee";
import { ButtonHover } from "./SaasTech";

const ColorText = ({ children }) => (
  <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
    {children}
  </span>
);

const BankingFinance = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const challenges = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Fragmented Customer Conversations",
      color: "from-blue-500 to-cyan-500",
      image: "challenges-1.png",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Compliance & Regulatory Risks",
      color: "from-purple-500 to-indigo-500",
      image: "challenges-2.png",
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Hidden Fraud Patterns",
      color: "from-red-500 to-orange-500",
      image: "challenges-3.png",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Inconsistent Agent Performance",
      color: "from-green-500 to-emerald-500",
      image: "challenges-4.png",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Slow Dispute Resolution & Escalations",
      color: "from-yellow-500 to-orange-500",
      image: "challenges-5.png",
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Difficulty Measuring Customer Sentiment",
      color: "from-pink-500 to-purple-500",
      image: "challenges-6.png",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "High Volume & Peak Pressure",
      color: "from-indigo-500 to-blue-500",
      image: "challenges-9.png",
    },
  ];

  const features = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "100% Conversation & Ticket Auditing",
      description:
        "Every call, chat, or support ticket is automatically analyzed and audited — ensuring no customer interaction slips through the cracks and all regulatory obligations are met.",
      color: "from-blue-500 to-cyan-500",
      image: "feat-bank-1.png",
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Real-Time Sentiment & Emotion Detection",
      description:
        "Detects stress, frustration, or confusion during financial conversations, helping teams proactively resolve disputes, reduce churn, and improve client satisfaction.",
      color: "from-purple-500 to-indigo-500",
      image: "feat-bank-2.png",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Accent Adaptability & Multilingual Support",
      description:
        "Supports multiple languages and accents, allowing banks and financial institutions to serve diverse customer bases seamlessly.",
      color: "from-green-500 to-emerald-500",
      image: "feat-bank-3.png",
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "AI + Human QA Integration",
      description:
        "Combines automated insights with human oversight, ensuring accurate compliance monitoring, fraud detection, and quality assurance.",
      color: "from-orange-500 to-red-500",
      image: "feat-bank-4.png",
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Real-Time Risk & Compliance Alerts",
      description:
        "Flags fraud indicators, policy violations, or compliance breaches instantly, so corrective action can be taken before issues escalate.",
      color: "from-yellow-500 to-orange-500",
      image: "feat-bank-3last.png",
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Role-Based Access & Secure Data Handling",
      description:
        "Sensitive financial data is protected with role-specific access, ensuring privacy, regulatory compliance, and secure audit trails.",
      color: "from-pink-500 to-purple-500",
      image: "feat-bank-2last.png",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Actionable Insights & Dashboards",
      description:
        "Managers and compliance teams get instant visibility into agent performance, risk hotspots, and recurring product/service issues, enabling smarter, faster decisions.",
      color: "from-indigo-500 to-blue-500",
      image: "feat-bank-last.png",
    },
  ];

  const stats = [
    {
      icon: <Eye className="w-12 h-12 text-purple-100" />,
      stat: "100%",
      desc: "Full conversation coverage — All calls, chats, and support tickets monitored — no interaction goes unreviewed.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Shield className="w-12 h-12 text-purple-100" />,
      stat: "Up to 50%",
      desc: "Faster compliance & risk resolution — Real-time alerts reduce compliance breaches and fraud detection time.",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: <Award className="w-12 h-12 text-purple-100" />,
      stat: "10–15%",
      desc: "Higher customer trust & satisfaction — Proactive issue resolution and emotion detection lead to improved CSAT/NPS.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Users className="w-12 h-12 text-purple-100" />,
      stat: "40–60%",
      desc: "Enhanced agent performance & QA efficiency — Automated QA scoring cuts manual review time, helping teams coach and scale faster.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-purple-100" />,
      stat: "20–30%",
      desc: "Reduced escalations & disputes — Full visibility accelerates dispute resolution, reducing escalations.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: <Zap className="w-12 h-12 text-purple-100" />,
      stat: "25%",
      desc: "Faster product & service improvements — Frequent issues and feedback surfaced from conversations enable quicker decision-making.",
      color: "from-pink-500 to-purple-500",
    },
  ];

  return (
    <div className="min-h-screen -mt-16">
      {/* Hero Section */}
      <HeroSection />
      <div className="relative bg-white">
        {/* <div className="absolute inset-0 z-0">
          <img
            src="/bgPattern.png"
            alt="Background Pattern"
            className="w-full h-full rotate-180 object-cover opacity-10"
          />
        </div> */}
        {/* Challenges Section */}
        <div className="relative  py-20 max-w-[88rem] mx-auto">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-10 lg:px-12 xl:px-16 relative">
            <h3 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Challenges Faced in{" "}
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
                Banking & Finance Sector
              </span>
            </h3>

            <p className="text-center  text-sm md:text-base text-gray-700 mb-12 max-w-3xl mx-auto">
              Key challenges financial institutions face in serving customers,
              staying compliant, and managing high volumes.
            </p>

            {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative">
              {challenges.map((challenge, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden"
                >
                  <div className="flex flex-col items-center text-center gap-4 relative z-10">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-br ${challenge.color} text-white group-hover:scale-110 transition-transform`}
                    >
                      {challenge.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      {challenge.title}
                    </h4>
                  </div>
                  <div
                    className={`absolute -top-6 -right-6 h-24 w-24 rounded-full bg-gradient-to-br ${challenge.color} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity`}
                  />
                </div>
              ))}
            </div> */}
          </div>
          <InfiniteCarousel items={challenges} />
        </div>

        {/* How Convoze Helps Section */}
        <div className="relative py-20">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-10 lg:px-12 xl:px-16 relative">
            <h3 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How <ColorText>Convoze Helps</ColorText>
            </h3>

            <p className="text-center text-sm md:text-base text-gray-600 mb-12 max-w-3xl mx-auto">
              Discover the measurable impact Convoze delivers in banking &
              finance — from faster compliance and reduced risks to higher
              customer trust and improved agent performance.
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

            <p className="text-center  text-sm md:text-base text-gray-600 mt-12  font-medium">
              With Convoze, every interaction becomes an opportunity to protect
              trust, reduce risk, and grow your business with confidence.
            </p>
          </div>
        </div>

        {/* Redefining Conversation Intelligence Section */}
        <div className="relative py-20 max-w-[88rem] mx-auto">
          <div className="w-full relative  mx-auto px-4 sm:px-8 ">
            <h3 className="text-center text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Redefining Conversation Intelligence{" "}
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
                with Convoze
              </span>
            </h3>

            <p className="text-center  text-sm md:text-base text-gray-700 mb-8 max-w-3xl mx-auto">
              Most conversation intelligence tools only capture fragments of
              customer interactions, leaving blind spots in compliance, fraud
              detection and risk monitoring. Convoze audits every conversation
              giving financial institutions full visibility and actionable
              intelligence.
            </p>
            <FeatureMarquee features={features} />
          </div>
        </div>

        {/* Built for Real World Banking Section */}
        <div className="relative  py-20">
          <div className="w-full relative max-w-7xl mx-auto px-4 sm:px-8 md:px-10 lg:px-12 xl:px-16">
            <div className=" p-8 md:p-12 ">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
                Built for Real World{" "}
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
                  Banking Challenges
                </span>
              </h3>

              <div className="space-y-6 max-w-4xl mx-auto">
                <p className="text-gray-700  text-sm md:text-base leading-relaxed text-center">
                  Whether you're managing retail banking, wealth management, or
                  high-value financial support, Convoze fits seamlessly into
                  your operations. It is built for high-volume financial
                  institutions, multilingual teams, and any organization where
                  trust, accuracy, and regulatory compliance are critical.
                </p>

                <p className="text-gray-700  text-sm md:text-base leading-relaxed text-center">
                  From monitoring every conversation to providing real-time
                  insights, Convoze ensures your teams can act with confidence
                  while safeguarding your customers, your brand, and your
                  revenue.
                </p>

                <ButtonHover text={" See Convoze in Action"} center={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankingFinance;

function HeroSection() {
  return (
    <div className="relative min-h-screen flex bg-white items-center pb-10 pt-24 justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Decorative Grid */}
      {/* <div className="pointer-events-none absolute h-full w-full overflow-hidden opacity-30 [perspective:300px]">
        <div className="absolute inset-0 [transform:rotateX(35deg)]">
          <div className="animate-grid [inset:0%_0px] [margin-left:-50%] [height:300vh] [width:600vw] [transform-origin:100%_0_0] [background-image:linear-gradient(to_right,rgba(0,0,0,0.5)_1px,transparent_0),linear-gradient(to_bottom,rgba(40,40,40,0.2)_1px,transparent_0)] [background-size:120px_120px] [background-repeat:repeat]"></div>
        </div>
      </div> */}

      {/* Content */}
      <div className="w-full max-w-7xl mx-auto px-4 pt-12 flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 w-fit bg-purple-100/80 backdrop-blur-sm text-purple-900 rounded-full text-xs md:text-sm font-medium border border-purple-200">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            Convoze for Banking and Finance.
          </span>

          <motion.h1
            className="from-primary/30 mt-6 items-start via-foreground/85 font-semibold to-foreground/50 bg-gradient-to-tl bg-clip-text text-start text-3xl md:text-4xl tracking-normal text-balance text-transparent lg:text-[40px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Powering Smarter, Safer <br />
            <span className="bg-gradient-to-tr relative from-purple-600/50 via-purple-700/85 to-indigo-600 text-transparent bg-clip-text">
              Conversations that Drive
              <br /> Finance Forward
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground mt-6 max-w-2xl text-start text-sm md:text-base text-gray-700"
          >
            In the world of finance, trust is everything.{" "}
            <span className="font-bold relative text-gray-900">Convoze</span>{" "}
            safeguards every customer interaction and alerts your teams to
            irregularities before they escalate. From minor fraud trends to
            compliance issues, Convoze ensures your team acts with precision and
            confidence.
          </motion.p>

          {/* <motion.p
            className="text-base text-gray-700 relative max-w-4xl mt-4 mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          ></motion.p> */}

          <ButtonHover text={" Request a Demo"} />
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
              src="/banking-finance.png"
              alt="banking finance center"
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
