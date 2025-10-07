"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { QuoteIcon } from "lucide-react";
import { Marquee } from "../ui/marquee";
import { MarqueeCompanies } from "../marquee";

const testimonials = [
  {
    name: "Dr. Priya Sharma",
    company: "Patient Support Lead, Healthcare",
    quote:
      "Convoze’s real-time sentiment analysis has completely transformed how we assist our patients. By detecting emotions like anxiety or frustration during calls, we are able to respond instantly and improve patient satisfaction.",
  },
  {
    name: "Rohit Verma",
    company: "Contact Center Manager, Enterprise Solutions",
    quote:
      "Convoze has helped us automate call audits and provide actionable feedback to our agents. The result has been a significant improvement in agent training and service delivery.",
  },
  {
    name: "Suresh Iyer",
    company: "Support Supervisor, Telecommunications",
    quote:
      "Convoze’s real-time analysis enables our support team to detect problems like billing confusion during calls, allowing us to resolve issues faster and enhance customer satisfaction.",
  },
  {
    name: "Imran Siddiqui",
    company: "Compliance Manager, Banking & Finance",
    quote:
      "With Convoze’s advanced speech analytics, our compliance team can quickly identify potential issues in customer interactions. This has strengthened our regulatory processes and helped us mitigate risks.",
  },
  {
    name: "Ayesha Khan",
    company: "Customer Experience Head, E-commerce & Retail",
    quote:
      "The customer sentiment insights provided by Convoze have allowed us to better understand user experiences and address issues proactively. We’ve seen improved engagement and higher customer loyalty.",
  },
  {
    name: "Farhan Ali",
    company: "HR Manager, Recruitment Services",
    quote:
      "By analyzing candidate conversations, Convoze helps us assess communication skills and behavioral traits more effectively, streamlining our recruitment process and improving hiring decisions.",
  },
  {
    name: "Neha Joshi",
    company: "Sales Director, Real Estate",
    quote:
      "Convoze has given us valuable insights into client concerns and preferences during calls. This has helped our agents build stronger relationships and close deals more efficiently.",
  },
];

export default function WhatCustomerSays() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-tl to-[#21082b] from-[#27022e] text-white min-h-screen  py-12 md:py-16 ">
      <div className="max-w-7xl mx-auto space-y-10 ">
        {/* Heading */}

        {/* <h2 className="text-center text-2xl md:text-4xl font-light leading-tight">
          What Our{" "}
          <span className="font-semibold bg-gradient-to-r to-[#B462CE] from-[#3F2AB2] text-transparent bg-clip-text">
            Customers are Saying
          </span>
        </h2> */}

        <h2 className="text-center text-2xl md:text-4xl font-light leading-tight">
          What Our{" "}
          <span className="block sm:inline font-semibold bg-gradient-to-r to-[#B462CE] from-[#3F2AB2] text-transparent bg-clip-text">
            Customers are Saying
          </span>
        </h2>

        <div className="relative bg-gradient-to-br from-[#0B0B1F] px-6 md:px-12 to-[#1B012A] rounded-2xl p-4 md:p-12 flex flex-col md:flex-row justify-between items-center gap-10 overflow-hidden">
          {/* Left Content */}
          <div className="flex-1 z-10">
            <h3 className="text-xl md:text-3xl font-light leading-snug ">
              Empowering Conversations with <br className="md:block hidden" />
              <span className="bg-gradient-to-r to-[#B462CE] from-[#3F2AB2] text-transparent bg-clip-text font-semibold">
                {" "}
                AI-Driven Intelligence{" "}
              </span>
            </h3>
            <p className="text-slate-300 md:mb-6 mb-4 text-xs font-light md:text-base max-w-md">
              Transforming customer interactions through data, automation, and
              real-time insights — enabling businesses to communicate smarter,
              respond faster, and deliver more personalized experiences powered
              by Convoze AI.
            </p>
            <div className="flex gap-10">
              <div>
                <h4 className="text-purple-500 md:text-2xl text-xl font-bold">
                  200+
                </h4>
                <p className="text-xs text-white mt-1">Businesses Empowered</p>
              </div>
              <div>
                <h4 className="text-purple-500 md:text-2xl text-xl font-bold">
                  1M+
                </h4>
                <p className="text-xs text-white mt-1">Conversations Audited</p>
              </div>
            </div>
          </div>

          {/* Testimonial Card */}
          <div className="relative w-full max-w-lg py-10 z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 0.8, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-[#3F2AB2] md:ml-10 ml-0   via-[#9333ea] to-[#B462CE]  text-white p-4 md:p-6 rounded-xl max-w-sm z-10 shadow-xl"
              >
                <div className="flex items-center mb-4 gap-3">
                  <div>
                    <div className="w-10 h-10 rounded-full bg-white text-purple-800 flex items-center justify-center font-semibold text-sm">
                      {testimonials[index].name.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <h5 className="font-semibold ">
                      {testimonials[index].name}
                    </h5>
                    <p className="text-xs">{testimonials[index].company}</p>
                  </div>
                  <span className="ml-auto text-lg font-bold">
                    <QuoteIcon />
                  </span>
                </div>
                <p className="text-xs md:text-xs mt-6 leading-relaxed ">
                  "{testimonials[index].quote}"
                </p>
              </motion.div>
            </AnimatePresence>

            <div className="absolute -top-16 inset-0 md:flex hidden justify-center items-center -z-10">
              <div className="bg-black opacity-30 w-[30vw] h-[50vh] mr-30 rounded-xl transform -rotate-[12deg] shadow-2xl"></div>
            </div>
          </div>
        </div>
        <MarqueeCompanies />
      </div>
    </section>
  );
}
