"use client";

import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ColorText = ({ children }) => (
  <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
    {children}
  </span>
);

export default function HowConvozeHelps() {
  return (
    <motion.div
      className="w-full bg-slate-900 relative py-8 xs:py-10 sm:py-12 md:py-20 mb-8 xs:mb-10 sm:mb-12 md:mb-0"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-indigo-900/20 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-indigo-900/20 to-transparent pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">
        <h3 className="text-center text-2xl xs:text-2xl sm:text-3xl md:text-3.5xl lg:text-4xl font-bold text-gray-100 mb-5 md:mb-10">
          How Convoze <ColorText>Helps</ColorText>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          <div className="space-y-6">
            {[
              {
                title: "Real-Time Customer Sentiment & Insights",
                description: [
                  "Detects frustration, urgency, or buying signals instantly.",
                  "Flags high-value or at-risk customers for immediate action driving proactive support and increasing repeat purchases.",
                ],
                image:
                  "https://images.unsplash.com/photo-1516321318423-ffd3648e0e80?q=80&w=800&auto=format&fit=crop",
                imageAlt: "Customer sentiment analysis dashboard",
                imagePosition: "left",
              },
              {
                title: "Automated Product Feedback Loops",
                description: [
                  "Automatically captures recurring bug reports, feature requests, and product questions.",
                  "Prioritizes improvements based on actual customer demand, this leads to quicker product updates and improved user satisfaction.",
                ],
                image:
                  "https://images.unsplash.com/photo-1551288049-b7f38129e8b3?q=80&w=800&auto=format&fit=crop",
                imageAlt: "Product feedback analysis",
                imagePosition: "right",
              },
              {
                title: "More Informed Sales and Promotions",
                description: [
                  "Finds possibilities for cross-selling and upselling during discussions.",
                  "Suggests personalized offers in real time. This results in higher conversion and increased average order value.",
                ],
                image:
                  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
                imageAlt: "E-commerce sales dashboard",
                imagePosition: "left",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="relative bg-slate-800/80 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-md border border-indigo-500/20"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex flex-col md:flex-row items-start gap-6">
                  {feature.imagePosition === "left" && (
                    <img
                      src={feature.image}
                      alt={feature.imageAlt}
                      className="w-full md:w-40 h-40 object-cover rounded-xl shadow-md"
                    />
                  )}
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                      <h4 className="text-lg font-semibold text-gray-100">
                        <ColorText>{feature.title}</ColorText>
                      </h4>
                    </div>
                    <div className="ml-5 space-y-2">
                      {feature.description.map((desc, i) => (
                        <div key={i} className="flex items-start space-x-2">
                          <span className="font-[600] text-purple-400">-</span>
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  {feature.imagePosition === "right" && (
                    <img
                      src={feature.image}
                      alt={feature.imageAlt}
                      className="w-full md:w-40 h-40 object-cover rounded-xl shadow-md"
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="space-y-6">
            {[
              {
                title: "Quality Assurance & Training at Scale",
                description: [
                  "AI audits every conversation, ensuring consistent service quality.",
                  "A better brand voice, fewer mistakes, and quicker onboarding are all made possible by these initiatives, which highlight top-performing agents and coaching opportunities.",
                ],
                image:
                  "https://images.unsplash.com/photo-1516321318423-ffd3648e0e80?q=80&w=800&auto=format&fit=crop",
                imageAlt: "Quality assurance dashboard",
                imagePosition: "right",
              },
              {
                title: "Detection of Fraud and Risk",
                description: [
                  "Spots unusual patterns in returns, complaints, or interactions.",
                  "Flags high-risk issues before they escalate resulting in reduced financial losses and improved trust.",
                ],
                image:
                  "https://images.unsplash.com/photo-1551288049-b7f38129e8b3?q=80&w=800&auto=format&fit=crop",
                imageAlt: "Fraud detection system",
                imagePosition: "left",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="relative bg-slate-800/80 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-md border border-indigo-500/20"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex flex-col md:flex-row items-start gap-6">
                  {feature.imagePosition === "left" && (
                    <img
                      src={feature.image}
                      alt={feature.imageAlt}
                      className="w-full md:w-40 h-40 object-cover rounded-xl shadow-md"
                    />
                  )}
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                      <h4 className="text-lg font-semibold text-gray-100">
                        <ColorText>{feature.title}</ColorText>
                      </h4>
                    </div>
                    <div className="ml-5 space-y-2">
                      {feature.description.map((desc, i) => (
                        <div key={i} className="flex items-start space-x-2">
                          <span className="font-[600] text-purple-400">-</span>
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  {feature.imagePosition === "right" && (
                    <img
                      src={feature.image}
                      alt={feature.imageAlt}
                      className="w-full md:w-40 h-40 object-cover rounded-xl shadow-md"
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
