import { AlertCircle, Users, Shield, TrendingDown } from "lucide-react";

const Index = () => {
  const statsData = [
    {
      icon: AlertCircle,
      text: "Less than 5% of customer calls are reviewed",
    },
    {
      icon: Users,
      text: "Most agent coaching is delayed by days",
    },
    {
      icon: Shield,
      text: "Compliance risks go unnoticed until escalation",
    },
    {
      icon: TrendingDown,
      text: "Customer sentiment is misunderstood or ignored",
    },
  ];

  const problems = [
    "Poor QA leads to churn",
    "Delayed feedback kills team growth",
    "Missed compliance breaches cost millions",
  ];

  return (
    <div className="min-h-screen relative w-full sm:py-20 py-4  px-4 bg-slate-200">
      {/* Rainbow gradient overlay */}
      {/* <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "repeating-linear-gradient(45deg, hsl(0, 70%, 85%) 0px, hsl(60, 70%, 85%) 20px, hsl(120, 70%, 85%) 40px, hsl(180, 70%, 85%) 60px, hsl(240, 70%, 85%) 80px, hsl(300, 70%, 85%) 100px, hsl(0, 70%, 85%) 120px)",
          backgroundSize: "200% 200%",
        }}
      /> */}

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-3xl text-center lg:text-4xl font-medium mb-6 text-transparent bg-clip-text bg-gradient-to-r to-[#B462CE] from-[#3F2AB2]">
            Why
            <span className="font-normal text-black"> Convoze?</span>
          </h1>
          <h1 className="text-2xl md:text-2xl font-light text-foreground">
            In traditional contact center setups,
          </h1>
          <h2 className="text-3xl md:text-3xl font-bold ">
            95% of Conversations Are Wasted
          </h2>
        </div>

        {/* Stats Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground leading-relaxed">
                  {stat.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Info Card */}
        <div className="gradient-border max-w-3xl mx-auto">
          <div className="gradient-border-inner p-8 md:p-10">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-foreground">
              This isn't just inefficient — it's expensive.
            </h3>

            <ul className="space-y-3 mb-3">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="w-2 h-2 rounded-full bg-destructive mt-2 flex-shrink-0" />
                  <span className="text-foreground text-lg">{problem}</span>
                </li>
              ))}
            </ul>

            <p className="text-lg text-muted-foreground mb-4">
              You're spending on conversations, but not learning from them.
            </p>

            <p className="text-xl font-semibold text-foreground">
              That's where <span className="">Convoze</span> steps in.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
