import {
  AlertCircle,
  Users,
  Shield,
  TrendingDown,
  DollarSign,
  Brain,
  BarChart3,
  Frown,
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
      icon: DollarSign,
      text: "Poor QA leads to customer churn.",
    },
    {
      icon: Brain,
      text: "Delayed feedback kills team growth.",
    },
    {
      icon: BarChart3,
      text: "Missed compliance breaches cost millions.",
    },
  ];

  return (
    <div className="md:min-h-screen w-full relative bg-slate-200 py-16 px-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/bgPattern.png"
          alt="Background Pattern"
          className="w-screen h-full object-cover opacity-15 !z-0"
        />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Header Section */}
        <div className="text-center mb-6 space-y-3">
          <h1 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500">
            Why <span className="text-gray-800 dark:text-white">Convoze?</span>
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            In traditional contact center setups —
          </p>
        </div>

        {/* Top Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16 zoom-out">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white/90 backdrop-blur-sm dark:bg-slate-800 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md">
                  <stat.icon className="w-8 h-8" />
                </div>
                <p className="text-base font-medium text-gray-600 dark:text-gray-200">
                  {stat.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section Header */}
        <h3 className="text-center text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
          This isn't just inefficient — it's expensive.
        </h3>

        {/* Bottom Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 zoom-out">
          {bottomCards.map((card, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white/90 backdrop-blur-sm dark:bg-slate-800 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-md">
                  <card.icon className="w-8 h-8" />
                </div>
                <p className="text-base font-medium text-gray-600 dark:text-gray-200">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Final Message */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            You're investing in conversations — but not learning from them.
          </p>
          <p className="text-xl font-semibold text-gray-900 dark:text-white">
            That’s where{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-500 font-bold">
              Convoze
            </span>{" "}
            steps in.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
