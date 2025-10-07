"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Live Transcription",
    desc: "Instantly capture accurate transcripts of every customer interaction.",
    img: "/live-transaction.png",
  },
  {
    title: "Emotion & Intent Detection",
    desc: "Identify customer tone to reveal satisfaction, confusion, or frustration.",
    img: "/emotion-intent-detection.png",
  },
  {
    title: "Auto QA Scoring",
    desc: "Generate unbiased quality scores from every analyzed conversation.",
    img: "/auto-qa-scoring.png",
  },
  {
    title: "Smart Dashboards",
    desc: "Access clear insights and performance trends in one unified view.",
    img: "/smart-conversation.png",
  },
];
const FeaturesCart = () => {
  return (
    <section className="w-full sm:min-h-screen  text-white md:px-4 px-3 md:py-24 py-12 bg-gradient-to-tl to-[#131113] from-[#27022e]">
      <div className="md:max-w-6xl max-w-7xl mx-auto text-center pb-6 md:mb-12 px-6">
        <h2 className="text-2xl md:text-4xl font-medium md:mb-4 mb-2 text-transparent bg-clip-text bg-gradient-to-r to-[#B462CE] from-[#3F2AB2]">
          What is <span className=" font-normal text-white"> Convoze?</span>
        </h2>
        <p className="text-gray-300 font-light text-base md:text-xl max-w-3xl mx-auto mb-3 md:mb-6">
          Your AI Assistant for <br className="md:hidden block" /> Every
          Customer Conversation
        </p>
        <p className="text-gray-400 font-light text-xs sm:text-sm md:text-base md:max-w-6xl max-w-7xl mx-auto">
          Convoze is an AI-powered voice intelligence platform that helps you
          monitor, understand, and act on every one of your customers' calls —
          instantly and at scale. It’s not just another QA tool. It’s your
          real-time co-pilot for quality, compliance & performance.
        </p>
      </div>

      {/* Demo Section */}
      {/* <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto w-full md:mb-12 mb-8 px-0 md:px-4"
        >
          <div className="w-full aspect-video scroll-smooth rounded-xl overflow-hidden shadow-lg border border-gray-800">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Convoze Product Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </motion.div> */}

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 pb-16 sm:pb-8 lg:grid-cols-4 gap-6 max-w-7xl mx-8 sm:mx-auto">
        {features.map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="group relative rounded-3xl overflow-hidden shadow-lg min-h-[84px] cursor-pointer"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center  transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: `url(${item.img})` }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black/80" />

            {/* Content */}
            <div className="relative p-4 sm:p-4 flex flex-col justify-end h-[350px]">
              <div className="relative backdrop-blur-md bg-black/30 rounded-2xl p-4">
                <h3 className="text-white font-semibold text-base  mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-xs leading-snug">
                  {item.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesCart;
