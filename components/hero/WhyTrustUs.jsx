import { Heart } from "lucide-react";
import React from "react";

const trustData = [
  {
    title: "Plug & Play Integration",
    value: "15+",
    subtitle: "Years of AI-Driven Design",
    description:
      "Works with your existing systems instantly. No complicated setup. No dev team required.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=600&fit=crop",
  },
  {
    title: "Multilingual & Region-Aware",
    value: "200+",
    subtitle: "Projects Successfully Delivered",
    description:
      "Understand intent, emotion, and context in native languages — tailored to each region.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=600&fit=crop",
  },
  {
    title: "Built for Compliance",
    value: "95%",
    subtitle: "Client Satisfaction Rate",
    description:
      "Industry-grade phrase detection flags high-risk content in real time — not after it's too late.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=500&h=600&fit=crop",
  },
  {
    title: "Human Feedback Loop",
    value: "95%",
    subtitle: "Client Satisfaction Rate",
    description:
      "Give agents instant, actionable coaching — not weekly summaries.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=600&fit=crop",
  },
];
export default function WhyTrustUs() {
  return (
    <section className="bg-white min-h-screen flex flex-col px-2 justify-center md:-mt-0  md:py-24  text-black  py-6 relative">
      <div className="absolute inset-0 z-0">
        <img
          src="/bgPattern.png"
          alt="Background Pattern"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="max-w-6xl mx-auto text-center mb-6 md:mb-12">
        <h2 className="text-2xl md:text-4xl font-medium">
          Engineered for{" "}
          <span className="font-semibold bg-gradient-to-r to-[#B462CE] from-[#3F2AB2] text-transparent bg-clip-text">
            Impact
          </span>
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mx-2 max-w-7xl px-4 sm:mx-8 md:mx-auto">
        {trustData.map((item, idx) => (
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

            {/* Glassmorphism Effect */}

            {/* Content */}
            <div className="relative p-4 h-full flex flex-col justify-end min-h-[420px] md:min-h-[400px]">
              {/* Heart Icon */}
              {/* <div className="absolute top-6 right-6 bg-pink-500 rounded-full p-2 shadow-lg">
                <Heart className="w-4 h-4 text-white fill-white" />
              </div> */}

              {/* Stats */}
              <div className=" relative rounded-3xl px-4 py-2 overflow-hidden">
                <div className="absolute inset-0 backdrop-blur-sm bg-gradient-to-b  rounded-3xl from-black/30 to-black/60" />

                <div className="text-white relative font-semibold text-sm md:text-[15px] mb-1">
                  {item.title}
                </div>
                <div className="text-purple-400 text-3xl font-bold mb-1 relative">
                  {item.value}
                </div>
                <div className="text-gray-200 text-sm font-thin relative">
                  {item.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Footer Note */}
      {/* <div className="text-center mt-10 text-sm text-gray-300">
        <span className="bg-purple-600 text-white px-2 py-1 rounded-full text-xs mr-2">
          Free
        </span>
        Let’s make something great work together.{" "}
        <span className="text-purple-400 font-semibold cursor-pointer hover:underline">
          Get Free Quote
        </span>
      </div> */}
    </section>
  );
}
