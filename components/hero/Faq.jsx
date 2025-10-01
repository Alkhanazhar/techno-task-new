"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "1. What services does your AI agency offer?",
    answer:
      "We provide AI consulting, model development, and integration services tailored to your business.",
  },
  {
    question: "2. Do I need a large amount of data to use AI?",
    answer:
      "Not always. We can start with pre-trained models or small datasets and then scale up.",
  },
  {
    question: "3. How long does it take to develop an AI solution?",
    answer: "Timelines vary between 4–12 weeks depending on complexity.",
  },
  {
    question: "4. Is my data secure with you?",
    answer: "Yes, we follow strict data security and compliance standards.",
  },
  {
    question: "5. Can you integrate AI into our existing systems?",
    answer:
      "Absolutely. We ensure smooth integration with your current workflows.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null); // start closed

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-200 md:py-24 py-12 relative px-4 md:px-8">
      <div className="absolute inset-0 z-0">
        <img
          src="/bgPattern.png"
          alt="Background Pattern"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-20 items-start relative z-10">
        {/* Background */}

        {/* Left Column */}
        <div className="md:w-1/2 md:space-y-6 space-y-2">
          <h2 className="text-2xl md:text-4xl font-semibold text-black">
            Your AI questions, expertly{" "}
            <span className="bg-gradient-to-r to-[#B462CE] from-[#3F2AB2] text-transparent bg-clip-text font-semibold">
              answered here
            </span>
          </h2>
        </div>

        {/* Right Column: FAQ Accordion */}
        <div className="md:w-1/2 space-y-2 md:space-y-4 w-full relative z-10">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-br  to-[#371d3e] from-[#3F2AB2] backdrop-blur border border-white/10 rounded-lg p-4 transition-all duration-300"
            >
              <button
                className="flex items-center justify-between w-full text-left text-white font-light"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-sm md:text-base">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>
              {openIndex === index && (
                <p className="mt-3 text-xs md:text-sm font-light text-neutral-100 leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
