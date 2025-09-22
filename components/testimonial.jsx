import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback } from "./ui/avatar";

const Testimonial = () => {
  const testimonials = [
    {
      industry: "Healthcare",
      quote:
        "Convoze’s real-time sentiment analysis has completely transformed how we assist our patients. By detecting emotions like anxiety or frustration during calls, we are able to respond instantly and improve patient satisfaction.",
      name: "Dr. Priya Sharma",
      title: "Patient Support Lead, Healthcare",
    },
    {
      industry: "Banking & Finance",
      quote:
        "With Convoze’s advanced speech analytics, our compliance team can quickly identify potential issues in customer interactions. This has strengthened our regulatory processes and helped us mitigate risks.",
      name: "Imran Siddiqui",
      title: "Compliance Manager, Banking & Finance",
    },
    {
      industry: "Enterprise Operations",
      quote:
        "Convoze has helped us automate call audits and provide actionable feedback to our agents. The result has been a significant improvement in agent training and service delivery.",
      name: "Rohit Verma",
      title: "Contact Center Manager, Enterprise Solutions",
    },
    {
      industry: "E-commerce & Retail",
      quote:
        "The customer sentiment insights provided by Convoze have allowed us to better understand user experiences and address issues proactively. We’ve seen improved engagement and higher customer loyalty.",
      name: "Ayesha Khan",
      title: "Customer Experience Head, E-commerce & Retail",
    },
    {
      industry: "Telecommunications",
      quote:
        "Convoze’s real-time analysis enables our support team to detect problems like billing confusion during calls, allowing us to resolve issues faster and enhance customer satisfaction.",
      name: "Suresh Iyer",
      title: "Support Supervisor, Telecommunications",
    },
    {
      industry: "Human Resources & Recruitment",
      quote:
        "By analyzing candidate conversations, Convoze helps us assess communication skills and behavioral traits more effectively, streamlining our recruitment process and improving hiring decisions.",
      name: "Farhan Ali",
      title: "HR Manager, Recruitment Services",
    },
    {
      industry: "Real Estate",
      quote:
        "Convoze has given us valuable insights into client concerns and preferences during calls. This has helped our agents build stronger relationships and close deals more efficiently.",
      name: "Neha Joshi",
      title: "Sales Director, Real Estate",
    },
  ];

  return (
    <div className="w-full bg-slate-200 py-8 sm:py-10 md:py-12 lg:py-16">
      <div className="w-full max-w-[95%] sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-3.5xl xl:text-4xl font-semibold text-black mb-6 sm:mb-8 md:mb-10 text-center">
          What Our{" "}
          <span className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] text-transparent bg-clip-text [-webkit-background-clip:text] [color:theme('colors.purple.900')]">
            Clients
          </span>{" "}
          Say
        </h3>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="mb-4 sm:mb-4 rounded-xl p-4 sm:p-6 break-inside-avoid bg-white shadow-[0px_0px_16px_0px_rgba(0,0,0,0.1)]"
            >
              <div className="flex items-center justify-between mb-4 sm:mb-5">
                <div className="flex items-center gap-3 sm:gap-4">
                  <Avatar>
                    <AvatarFallback className="text-lg sm:text-xl font-medium bg-gradient-to-r from-[#C068D1] to-[#3224AF] text-white">
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-base sm:text-lg font-semibold text-black">
                      {testimonial.name}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-sm sm:text-[17px] text-gray-700 mb-4 sm:mb-5">
                {testimonial.quote}
              </p>
              {/* <Link href="/contact">
                <Button
                  className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] text-white text-xs sm:text-sm px-3 sm:px-4 py-2 rounded-full hover:opacity-90 transition-all duration-300"
                >
                  Learn More
                </Button>
              </Link> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;