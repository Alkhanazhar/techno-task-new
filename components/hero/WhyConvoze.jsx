import React, { useState, useEffect } from "react";
import {
  AlertTriangle,
  TrendingDown,
  Clock,
  Shield,
  Heart,
  DollarSign,
  Users,
  MessageSquare,
  Zap,
  Target,
  CheckCircle,
  ArrowRight,
  BarChart,
  Phone,
  DiscIcon,
  Link,
  Unlink,
} from "lucide-react";

const WhyConvoze = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStatIndex, setActiveStatIndex] = useState(0);
  const [hoveredProblem, setHoveredProblem] = useState(null);

  useEffect(() => {
    setIsVisible(true);

    // Auto-cycle through stats
    const interval = setInterval(() => {
      setActiveStatIndex((prev) => (prev + 1) % 4);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const wastedStats = [
    {
      percentage: "95%",
      label: "Conversations Wasted",
      description: "In traditional contact centers",
      icon: MessageSquare,
    },
    {
      percentage: "<5%",
      label: "conversations Reviewed",
      description: "Through manual QA coverage",
      icon: Phone,
    },
    {
      percentage: "Timing Gap",
      label: "Delayed Coaching",
      description: "Agent feedback timing",
      icon: Clock,
    },
    {
      percentage: "Disconnect",
      label: "Customer Sentiment",
      description: "Is misunderstood or ignored",
      icon: Unlink,
    },
  ];

  const problems = [
    {
      icon: Shield,
      title: "Compliance Risks",
      description: "Go until escalation",
      impact: "Millions in fines",
      delay: 0,
    },
    {
      icon: TrendingDown,
      title: "Poor QA = Churn",
      description: "Drives customers away",
      impact: "40% higher churn",
      delay: 0.1,
    },
    {
      icon: Clock,
      title: "Delayed Feedback",
      description: "Kills team growth",
      impact: "50% slower development",
      delay: 0.2,
    },
    {
      icon: DollarSign,
      title: "Missed Compliance",
      description: "Breaches cost millions",
      impact: "Zero ROI on conversations",
      delay: 0.3,
    },
  ];

  const salesData = [
    { percentage: "34%", label: "Call Back Later" },
    { percentage: "26%", label: "Expensive" },
    { percentage: "23%", label: "Competitor Mentions" },
    { percentage: "17%", label: "Discount Mentions" },
  ];

  return (
    <div className=" md:py-24 py-12  relative w-full zoom-out bg-slate-200 text-black overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/bgPattern.png"
          alt="Background Pattern"
          className="w-full h-full object-cover opacity-20 !z-0"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 ">
        {/* Header Section */}
        {/* <div
          className={`text-center z-5 md:mb-10 mb-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-2xl lg:text-4xl font-medium mb-6 text-transparent bg-clip-text bg-gradient-to-r to-[#B462CE] from-[#3F2AB2]">
            Why
            <span className="font-normal text-black"> Convoze?</span>
          </h1>
          <p className="text-gray-800 ">
            In traditional contact center setups, 95% of Conversations Are
            Wasted. Less than 5% of customer conversations are reviewed
          </p>
        </div> */}

        {/* Main Content - Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-8 relaive">
          {/* Left Column - Wasted Stats */}
          <div className="flex-1 relative flex flex-col">
            <div className="flex-1 space-y-5 p-4 rounded-xl shadow-2xl bg-slate-200 border border-gray-800/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 h-full">
                {wastedStats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={index}
                      className="group p-3 rounded-xl transition-all duration-300 border border-gray-800/20  hover:scale-[1.02] hover:shadow-lg"
                    >
                      <div className="flex items-center gap-4 justify-center">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-tl mt-1 from-[#3F2AB2] to-[#B462CE] p-2 flex-shrink-0">
                          <Icon className="w-full h-full text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold bg-gradient-to-br from-[#3F2AB2] to-[#371d3e] text-transparent bg-clip-text mb-1">
                            {stat.percentage} {stat.label}
                          </h3>
                          <p className="text-gray-900 text-sm">
                            {stat.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column - Problems */}
          <div className="lg:w-1/2 relaive rounded-xl shadow-2xl  backdrop-blur backdrop:opacity-50 bg-gradient-to-tl to-[#B462CE] from-[#3F2AB2] border-gray-800/10 ">
            {/* Sales Data Section */}
            {/* <div className="mb-4">
              <h3 className="text-lg font-medium text-white mb-4">Sales Objections</h3>
              <div className="grid grid-cols-4 gap-3">
                {salesData.map((item, index) => (
                  <div key={index} className="bg-gray-900/50 p-4 rounded-lg">
                    <div className="text-xl font-bold text-white">{item.percentage}</div>
                    <div className="text-gray-400 text-sm">{item.label}</div>
                  </div>
                ))}
              </div>
            </div> */}

            <div className="p-4 rounded-2xl">
              <h2 className="text-center text-2xl font-medium text-white mb-4">
                This isn't just inefficient — it's expensive
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ">
                {problems.map((problem, index) => {
                  const Icon = problem.icon;
                  const isHovered = hoveredProblem === index;

                  return (
                    <div
                      key={index}
                      className={`group transition-all   duration-500 cursor-pointer
                        ${
                          isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-10"
                        }
                      `}
                      style={{ transitionDelay: `${problem.delay + 0.5}s` }}
                      onMouseEnter={() => setHoveredProblem(index)}
                      onMouseLeave={() => setHoveredProblem(null)}
                    >
                      <div
                        className={`p-3  rounded-xl transition-all  bg-gradient-to-br  to-[#371d3e] from-[#3F2AB2]  duration-300 border border-gray-800/50 
                        ${isHovered ? "scale-[1.02] shadow-lg" : ""}
                      `}
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-tl mt-1 my-auto md:my-0 to-[#B462CE] from-[#3F2AB2] p-2 flex-shrink-0">
                            <Icon className="w-full h-full text-white" />
                          </div>
                          <div>
                            <h3 className=" font-semibold text-purple-200 mb-1">
                              {problem.title}
                            </h3>
                            <p className="text-gray-300 md:text-sm text-xs mb-1">
                              {problem.description}
                            </p>
                            <div className="text-gray-300 text-sm ">
                              {problem.impact}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* <div className="mt-8 text-center">
                <p className="text-gray-300">
                  You're spending on conversations, but not learning from them.
                  <br />
                  That's where Convoze steps in.
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyConvoze;
