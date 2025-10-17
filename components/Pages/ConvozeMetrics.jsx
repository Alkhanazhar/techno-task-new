import React, { useState, useEffect } from "react";
import {
  TrendingUp,
  CheckCircle2,
  Clock,
  Shield,
  Users,
  DollarSign,
  Zap,
} from "lucide-react";

export default function ConvozeMetrics() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const metrics = [
    {
      icon: <CheckCircle2 className="w-5 h-5" />,
      metric: "QA Coverage",
      before: "3–4% manually reviewed",
      after: "100% auto-audit",
      improvement: true,
    },
    {
      icon: <Clock className="w-5 h-5" />,
      metric: "Quality Review Time",
      before: "Days for feedback",
      after: "Instant real-time scoring",
      improvement: true,
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      metric: "CSAT (Customer Satisfaction)",
      before: "Inconsistent",
      after: "+35% uplift",
      improvement: true,
    },
    {
      icon: <Shield className="w-5 h-5" />,
      metric: "Compliance Monitoring",
      before: "Breaches found post-escalation",
      after: "Live risk flagging",
      improvement: true,
    },
    {
      icon: <Users className="w-5 h-5" />,
      metric: "Agent Coaching",
      before: "Limited sample-based coaching",
      after: "Continuous coaching from all data",
      improvement: true,
    },
    {
      icon: <DollarSign className="w-5 h-5" />,
      metric: "Operational Costs",
      before: "High manual QA costs",
      after: "~60% QA time reduction",
      improvement: true,
    },
    {
      icon: <Zap className="w-5 h-5" />,
      metric: "ROI Realization",
      before: "6–12 months",
      after: "~90 days",
      improvement: true,
    },
  ];

  return (
    <div className="my-5 md:my-8 md:flex items-center hidden  justify-center">
      <div className="w-full max-w-6xl">
        {/* Metrics Table */}
        <div className="bg-white/5 backdrop-blur-xs rounded-3xl overflow-hidden shadow-xl border border-black/10">
          {/* Table Header */}
          <div className="grid grid-cols-3 gap-px bg-gradient-to-r from-purple-700/90 to-blue-800/90 p-px">
            <div className="bg-slate-900/10  p-6">
              <h2 className="text-lg  text-white">Metric</h2>
            </div>
            <div className="bg-slate-900/10  p-6">
              <h2 className="text-lg text-white ">Before Convoze</h2>
            </div>
            <div className="bg-slate-900/10 p-6">
              <h2 className="text-lg  text-white">After Convoze</h2>
            </div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-white/10">
            {metrics.map((item, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 gap-px bg-white/5transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Metric Column */}
                <div className="p-4 flex items-center gap-3">
                  <div className="text-purple-700">{item.icon}</div>
                  <span className=" text-black/70">{item.metric}</span>
                </div>

                {/* Before Column */}
                <div className="p-4 bg-purple-400/10 border-l border-white/10">
                  <div className="flex items-center h-full">
                    <p className="text-purple-900">{item.before}</p>
                  </div>
                </div>

                {/* After Column */}
                <div className="p-4 bg-blue-500/10 border-l border-white/10">
                  <div className="flex items-center h-full">
                    <p className="text-blue-900 ">{item.after}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Stats */}
        {/* <div
          className={`mt-12 grid grid-cols-3 gap-6 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-lg rounded-xl p-6 border border-purple-500/30">
            <div className="text-4xl font-bold text-purple-300 mb-2">100%</div>
            <div className="text-purple-900">Coverage Achieved</div>
          </div>
          <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-lg rounded-xl p-6 border border-emerald-500/30">
            <div className="text-4xl font-bold text-emerald-300 mb-2">60%</div>
            <div className="text-emerald-900">Cost Reduction</div>
          </div>
          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 backdrop-blur-lg rounded-xl p-6 border border-blue-500/30">
            <div className="text-4xl font-bold text-blue-300 mb-2">35%</div>
            <div className="text-blue-900">CSAT Improvement</div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
