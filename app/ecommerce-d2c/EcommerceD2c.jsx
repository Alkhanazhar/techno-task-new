// "use client";

// import { motion } from "framer-motion";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useState, useEffect } from "react";
// import { Headphones, ShoppingCart, Zap, CheckCircle } from "lucide-react";
// import HeroSectionCaseStudy from "@/components/Pages/HomeCaseStudy";
// import {
//   Repeat,
//   Gauge,
//   TrendingUp,
//   MessageSquare,
//   DollarSign,
// } from "lucide-react";

// const EcommerceD2c = () => {
//   const router = useRouter();

//   // Animation variants
//   const fadeIn = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//   };
//   const [mounted, setMounted] = useState(false);
//   useEffect(() => setMounted(true), []);
//   if (!mounted) return null;

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const stats = [
//     {
//       icon: <Repeat className="w-8 h-8 text-white" />,
//       stat: "30–40%",
//       desc: "increase in repeat purchases by proactively identifying at-risk customers.",
//     },
//     {
//       icon: <Gauge className="w-8 h-8 text-white" />,
//       stat: "25%",
//       desc: "faster product improvement cycles through automated feedback capture.",
//     },
//     {
//       icon: <TrendingUp className="w-8 h-8 text-white" />,
//       stat: "20%",
//       desc: "higher conversion on upsells using real-time recommendations.",
//     },
//     {
//       icon: <MessageSquare className="w-8 h-8 text-white" />,
//       stat: "100%",
//       desc: "conversation coverage vs. <5% manual auditing.",
//     },
//     {
//       icon: <DollarSign className="w-8 h-8 text-white" />,
//       stat: "15–20%",
//       desc: "reduction in QA costs through automation.",
//     },
//   ];

//   return (
//     <div className="min-h-screen ">
//       {/* Header Section - Dark */}
//       {/* <HeroSectionCaseStudy /> */}
//       <motion.div
//         className="w-full min-h-screen bg-gradient-to-tl to-[#21082b] from-[#27022e]  relative overflow-hidden"
//         //   initial="hidden"
//         //   whileInView="visible"
//         //   viewport={{ once: true }}
//         variants={fadeIn}
//         transition={{ duration: 0.6 }}
//       >
//         {/* Floating Avatars */}

//         {/* Animated particles/dots background */}
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           {[...Array(25)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute w-1 h-1 bg-purple-100/90 rounded-full"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//               }}
//               animate={{
//                 y: [0, -30, 0],
//                 opacity: [0.2, 0.5, 0.2],
//               }}
//               transition={{
//                 duration: 3 + Math.random() * 2,
//                 repeat: Infinity,
//                 delay: Math.random() * 2,
//               }}
//             />
//           ))}
//         </div>

//         <div className="w-full max-w-sm h-full xs:max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 relative z-20">
//           <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 xs:gap-10 sm:gap-12 md:gap-14 lg:gap-16 xl:gap-10 min-h-screen py-12 lg:py-0">
//             <div className="w-full lg:w-1/2 text-center lg:text-left space-y-2 sm:space-y-2">
//               <div className="space-y-2 sm:space-y-3 md:space-y-2">
//                 <h1 className="text-2xl xs:text-4xl sm:text-5xl md:text-4xl lg:text-4xl xl:text-4xl font-bold text-white leading-tight">
//                   Convoze for
//                 </h1>
//                 <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-6xl font-bold bg-gradient-to-r from-[#C068D1] to-[#3224AF]  bg-clip-text [-webkit-background-clip:text] [color:theme('colors.purple.400')] leading-tight">
//                   E-Commerce and D2C
//                 </h2>
//               </div>
//               <p className="text-gray-200 font-light text-sm xs:text-base sm:text-lg md:text-xl max-w-xl mx-auto lg:mx-0">
//                 Turn Every Customer Interaction into Loyalty and Revenue
//               </p>
//               <div className="mt-4 flex flex-col sm:flex-row gap-3 md:gap-6 justify-center lg:justify-start">
//                 <Link href="/contact">
//                   <button className="w-3/5 sm:w-auto bg-gradient-to-r from-[#C068D1] to-[#3224AF] text-sm cursor-pointer text-white border md:border-none border-purple-500 px-3 md:px-4 py-2 md:py-2 rounded-full font-medium hover:bg-black hover:text-white transition-all duration-300">
//                     Book a Demo
//                   </button>
//                 </Link>
//               </div>
//             </div>

//             {/* Right Side - Image */}
//             <motion.div
//               className="w-full lg:w-1/2 flex justify-center lg:justify-end"
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 0.6, ease: "easeOut" }}
//             >
//               <motion.img
//                 src="https://plus.unsplash.com/premium_photo-1661513736823-f325fd06577e?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                 alt="Modern contact center with diverse agents working at desks with headsets, representing BPO operations"
//                 className="w-full max-w-[350px] xs:max-w-[320px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[450px] xl:max-w-[500px] h-auto rounded-xl shadow-2xl object-cover"
//                 loading="lazy"
//                 whileHover={{
//                   scale: 1.05,
//                   rotate: 2,
//                   transition: { duration: 0.3, ease: "easeInOut" },
//                 }}
//               />
//             </motion.div>
//           </div>
//         </div>
//       </motion.div>

//       <motion.div
//         className="w-full md:min-h-screen bg-slate-200  py-8 xs:py-10 sm:py-12 md:py-12 mb-8 xs:mb-10 sm:mb-12 md:mb-16 flex items-center justify-center"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={fadeIn}
//         transition={{ duration: 0.6, delay: 0.4 }}
//       >
//         <div className="w-full max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 flex flex-col md:flex-row items-center gap-8">
//           <div className="w-full md:w-1/2 flex justify-center">
//             <img
//               src="/ecomm.png"
//               alt="E-Commerce and D2C"
//               className="w-full h-auto max-w-md rounded-xl shadow-lg"
//             />
//           </div>

//           <div className="w-full md:w-1/2">
//             <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-3.5xl lg:text-3xl font-semibold text-black text-center mb-4 xs:mb-6 sm:mb-8">
//               Transform Customer Conversations into Revenue with <br />
//               <span className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] text-transparent bg-clip-text">
//                 AI Intelligence
//               </span>
//             </h3>
//             <p className="text-gray-800 text-sm sm:text-base md:text-md mb-3  md:text-left">
//               In ecommerce and D2C, each customer interaction and support ticket
//               is an opportunity to strengthen your brand, boost repeat
//               purchases, and gather insights about your products. Most teams
//               only capture a small part of these interactions, missing vital
//               signals that affect revenue and customer loyalty
//             </p>
//             <p className="text-gray-800 text-sm sm:text-base md:text-md mb-3  md:text-left">
//               Convoze AI changes that. It audits 100% of conversations across
//               all channels, tracks key performance metrics (KPIs) for every
//               interaction, extracts actionable insights in real time, and helps
//               your teams respond instantly on what matters most.
//             </p>
//           </div>
//         </div>
//       </motion.div>

//       {/* Proven Measurable Impact Section - Dark */}
//       <motion.div
//         className="w-full bg-gradient-to-tl to-[#21082b] from-[#27022e] py-6 xs:py-10 sm:py-12 md:py-8 mb-10 xs:mb-12 sm:mb-16 md:mb-20"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={staggerContainer}
//       >
//         <div className="w-full max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 flex flex-col md:flex-row items-center gap-8">
//           <div className="w-full md:w-1/2">
//             <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-3.5xl lg:text-3xl font-semibold text-white text-center mb-4 xs:mb-6 sm:mb-8">
//               Challenges{" "}
//               <span className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] text-transparent bg-clip-text">
//                 Ecommerce & D2C
//               </span>{" "}
//               Brands Face
//             </h3>
//             <div className="space-y-2 sm:space-y-3">
//               {[
//                 "Slow or inconsistent support can lead to customer churn.",
//                 "Missed chances for upselling, cross-selling, and keeping clients.",
//                 "Customer journeys can be scattered across chat, calls, email, and social media.",
//                 "Sales are lost because of unaddressed concerns and cart abandonment.",
//                 "Data scattered across platforms delays product and marketing insights.",
//                 "Inconsistent brand experience results from varying responses from agents.",
//                 "High support volume, fraud, and policy abuse can go unnoticed.",
//                 "Language and regional diversity can create communication challenges.",
//                 "There is limited visibility into agent performanc.",
//               ].map((item, idx) => (
//                 <div key={idx} className="flex items-start space-x-2">
//                   <div className="w-1.5 h-1.5 bg-[#C068D1] rounded-full mt-2 flex-shrink-0"></div>
//                   <p className="text-white text-sm sm:text-base">{item}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="w-full md:w-1/2 max-w-xl px-4 md:px-6 flex justify-center items-center">
//             <img
//               src="/driven.png"
//               alt="Ecommerce & D2C Brands Face"
//               className="rounded-2xl shadow-lg w-[450px] h-auto object-cover"
//             />
//           </div>
//         </div>
//       </motion.div>

//       {/* What You Get Inside Convoze Section - Light */}
//       <motion.div
//         className="w-full md:min-h-screen  bg-slate-200 py-8 xs:py-10 sm:py-12 md:py-20 mb-8 xs:mb-10 sm:mb-12 md:mb-0"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={fadeIn}
//         transition={{ duration: 0.6, delay: 0.4 }}
//       >
//         <div className="w-full max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">
//           <h3 className="text-center text-2xl xs:text-2xl sm:text-3xl md:text-3.5xl lg:text-4xl font-semibold text-black mb-5 md:mb-10">
//             How Convoze{" "}
//             <span className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] text-transparent bg-clip-text [-webkit-background-clip:text]">
//               Helps
//             </span>
//           </h3>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-10">
//             <div className="space-y-4">
//               {[
//                 {
//                   title: "Real-Time Customer Sentiment & Insights",
//                   description: [
//                     "Detects frustration, urgency, or buying signals instantly.",
//                     "Flags high-value or at-risk customers for immediate action driving proactive support and increasing repeat purchases.",
//                   ],
//                 },
//                 {
//                   title: "Automated Product Feedback Loops",
//                   description: [
//                     "Automatically captures recurring bug reports, feature requests, and product questions.",
//                     "Prioritizes improvements based on actual customer demand, this leads to quicker product updates and improved user satisfaction.",
//                   ],
//                 },
//                 {
//                   title: "More Informed Sales and Promotions",
//                   description: [
//                     "Finds possibilities for cross-selling and upselling during discussions.",
//                     "Suggests personalized offers in real time. This results in higher conversion and increased average order value.",
//                   ],
//                 },
//               ].map((feature, index) => (
//                 <div key={index} className="space-y-1 mb-2">
//                   <div className="flex items-center space-x-2">
//                     <span className="w-2 h-2 flex items-center justify-center bg-purple-500 rounded-full"></span>
//                     <h4 className="text-base sm:text-lg font-semibold text-black">
//                       {feature.title}
//                     </h4>
//                   </div>
//                   <div className="ml-5 space-y-1">
//                     {feature.description.map((desc, i) => (
//                       <div key={i} className="flex items-start space-x-2">
//                         <span className="font-[600]">-</span>
//                         <p className="text-gray-900 text-sm sm:text-sm leading-relaxed">
//                           {desc}
//                         </p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Right Column */}
//             <div className="space-y-4">
//               {[
//                 {
//                   title: "Quality Assurance & Training at Scale",
//                   description: [
//                     " AI audits every conversation, ensuring consistent service quality.",
//                     "A better brand voice, fewer mistakes, and quicker onboarding are all made possible by these initiatives, which highlight top-performing agents and coaching opportunities.",
//                   ],
//                 },
//                 {
//                   title: "Detection of Fraud and Risk",
//                   description: [
//                     "Spots unusual patterns in returns, complaints, or interactions.",
//                     "Flags high-risk issues before they escalate resulting in reduced financial losses and improved trust.",
//                   ],
//                 },
//               ].map((feature, index) => (
//                 <div key={index} className="space-y-1 mb-2">
//                   <div className="flex items-center space-x-2">
//                     <span className="w-2 h-2 flex items-center justify-center bg-purple-500 rounded-full"></span>
//                     <h4 className="text-base sm:text-lg font-semibold text-black">
//                       {feature.title}
//                     </h4>
//                   </div>

//                   <div className="ml-5 space-y-1">
//                     {feature.description.map((desc, i) => (
//                       <div key={i} className="flex items-start space-x-2">
//                         <span className="font-[600]">-</span>
//                         <p className="text-gray-900 text-sm sm:text-sm leading-relaxed">
//                           {desc}
//                         </p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </motion.div>

//       <motion.div
//         className="w-full md:min-h-screen bg-gradient-to-tl to-[#21082b] md:-mt-12 flex-col from-[#27022e]  py-6 xs:py-10 sm:py-12  text-center flex items-center justify-center"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={fadeIn}
//         transition={{ duration: 0.6, delay: 0.6 }}
//       >
//         <section className="w-full max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">
//           <h3 className="text-center text-2xl xs:text-2xl sm:text-3xl md:text-3.5xl lg:text-4xl font-semibold text-white mb-5 md:mb-10">
//             Measurable{" "}
//             <span className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] text-transparent bg-clip-text">
//               Impact
//             </span>
//           </h3>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-5 md:mb-0">
//             {stats.map((item, idx) => (
//               <div
//                 key={idx}
//                 className="group p-5 bg-gradient-to-br from-[#3224AF]/90 to-[#C068D1]/80 rounded-2xl shadow-md hover:scale-105 hover: transition duration-300"
//               >
//                 <div className="flex items-center gap-3 mb-4">
//                   <div className="p-2 bg-white/20 rounded-xl group-hover:bg-white/30 transition">
//                     {item.icon}
//                   </div>
//                   <p className="text-2xl font-bold text-white">{item.stat}</p>
//                 </div>
//                 <p className="text-white text-xs sm:text-base leading-relaxed">
//                   {item.desc}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </section>
//       </motion.div>

//       <motion.div
//         className="w-full bg-slate-200  py-10 sm:py-14 md:py-20 mb-8 sm:mb-12 md:mb-0"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={fadeIn}
//         transition={{ duration: 0.6, delay: 0.4 }}
//       >
//         <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-10 lg:px-12 xl:px-16 mb-5">
//           <h3 className="text-center text-2xl sm:text-3xl md:text-3.5xl lg:text-4xl font-semibold text-black mb-6">
//             Boost your Ecommerce and D2C growth with <br />
//             <span className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] text-transparent bg-clip-text">
//               Convoze
//             </span>
//           </h3>

//           <p className="text-center max-w-3xl mx-auto text-gray-800 text-sm sm:text-base leading-relaxed mb-5">
//             Convoze transforms all discussions into valuable insights that drive
//             sales growth, enhance customer loyalty, and accelerate product
//             selection.
//           </p>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-5">
//             {/* Left Column */}
//             <div className="space-y-6">
//               {[
//                 {
//                   title: "Actionable Insights in Real-Time",
//                   description:
//                     "Provides real-time insights enabling sales, support, and product teams to resolve customer issues quickly and engage effectively.",
//                 },
//                 {
//                   title: "Multilingual & Accent-Adaptive AI",
//                   description:
//                     "Ensures seamless communication across regions and languages, breaking barriers for global businesses.",
//                 },
//                 {
//                   title: "Seamless Integration",
//                   description:
//                     "Integrates smoothly with chat, email, CRM, and call systems—no disruption to business operations.",
//                 },
//               ].map((feature, index) => (
//                 <div key={index} className="flex items-start gap-3">
//                   <div className="w-2 h-2 bg-[#C068D1] rounded-full mt-2 flex-shrink-0"></div>
//                   <div>
//                     <h4 className="text-base sm:text-lg font-semibold text-black mb-1">
//                       {feature.title}
//                     </h4>
//                     <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
//                       {feature.description}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Right Column */}
//             <div className="space-y-6">
//               {[
//                 {
//                   title: "Scalable Multi-Channel Operations",
//                   description:
//                     "Handles large data volumes and seasonal spikes without compromising performance.",
//                 },
//                 {
//                   title: "Customizable to Your Brand",
//                   description:
//                     "Adapts to your policies and workflows while preserving brand voice for consistency and compliance.",
//                 },
//                 {
//                   title: "Risk Reduction & Fraud Detection",
//                   description:
//                     "Detects unusual patterns in interactions to reduce fraud and financial losses.",
//                 },
//               ].map((feature, index) => (
//                 <div key={index} className="flex items-start gap-3">
//                   <div className="w-2 h-2 bg-[#3224AF] rounded-full mt-2 flex-shrink-0"></div>
//                   <div>
//                     <h4 className="text-base sm:text-lg font-semibold text-black mb-1">
//                       {feature.title}
//                     </h4>
//                     <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
//                       {feature.description}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <p className="text-center max-w-4xl mx-auto text-gray-800 text-sm sm:text-base leading-relaxed">
//             Convoze uses every customer interaction to generate valuable
//             business intelligence which enables Ecommerce and D2C brands to
//             maintain customer loyalty and boost sales and make better business
//             choices.
//           </p>
//         </div>
//       </motion.div>

//       {/* Built for the Real World Section - Dark */}
//       <motion.div
//         className="w-full md:min-h-screen bg-gradient-to-tl to-[#21082b] md:-mt-12 flex-col from-[#27022e]  py-6 xs:py-10 sm:py-12  text-center flex items-center justify-center"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={fadeIn}
//         transition={{ duration: 0.6, delay: 0.6 }}
//       >
//         <div className="w-full  max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
//             {/* Left Section */}
//             <div>
//               <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-3.5xl lg:text-4xl font-semibold text-white mb-3">
//                 Where Convoze{" "}
//                 <span className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] bg-clip-text [-webkit-background-clip:text] [color:theme('colors.purple.400')]">
//                   Makes
//                 </span>{" "}
//                 the Difference
//               </h3>
//               <p className="text-white text-base xs:text-base sm:text-lg md:text-md !font-light">
//                 With Convoze, ecommerce and D2C brands don’t just manage support
//                 — they build loyalty, grow revenue, and make smarter product
//                 decisions. Every interaction becomes a chance to engage
//                 customers better, reduce churn, and turn conversations into
//                 measurable business growth
//               </p>
//               <p className="mt-4 max-w-4xl mx-auto text-gray-300 text-sm sm:text-base leading-relaxed">
//                 Convoze ensures brands deliver consistent, personalized, and
//                 efficient experiences at scale.
//               </p>
//             </div>

//             {/* Right Section */}
//             <div>
//               <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-3.5xl lg:text-4xl font-semibold text-white mb-3">
//                 Why{" "}
//                 <span className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] bg-clip-text [-webkit-background-clip:text] [color:theme('colors.purple.400')]">
//                   Convoze
//                 </span>{" "}
//                 Stands Out
//               </h3>
//               <p className="text-white text-base xs:text-base sm:text-lg md:text-md !font-light">
//                 Most QA tools still work in isolation or rely on a handful of
//                 conversation samples. Being different, Convoze audits every
//                 single solitary conversation in one unified platform. That gives
//                 reduced blind spots, more rapid decisions, and better outcomes
//                 for both your customers and your business.
//               </p>
//             </div>
//           </div>

//           <div className="mt-8 flex justify-center mb-4 md:mb-0">
//             <Link href={"/contact"}>
//               <motion.button
//                 className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-102 shadow-lg"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 See Convoze in Action
//               </motion.button>
//             </Link>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default EcommerceD2c;

"use client";

// import { motion } from "framer-motion";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useState, useEffect } from "react";
// import {
//   Headphones,
//   ShoppingCart,
//   Zap,
//   CheckCircle,
//   ArrowRight,
//   ShoppingBag,
//   Cloud,
//   Clock,
//   Save,
//   User,
//   Shield,
//   Globe,
//   ChartScatter,
// } from "lucide-react";
// import HeroSectionCaseStudy from "@/components/Pages/HomeCaseStudy";
// import {
//   Repeat,
//   Gauge,
//   TrendingUp,
//   MessageSquare,
//   DollarSign,
// } from "lucide-react";
// import { IconGraph } from "@tabler/icons-react";

// const EcommerceD2c = () => {
//   const router = useRouter();

//   // Animation variants
//   const fadeIn = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//   };
//   const [mounted, setMounted] = useState(false);
//   useEffect(() => setMounted(true), []);
//   if (!mounted) return null;

//   const staggerContainer = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const stats = [
//     {
//       icon: <Repeat className="w-8 h-8 text-purple-100" />,
//       stat: "30–40%",
//       desc: "increase in repeat purchases by proactively identifying at-risk customers.",
//     },
//     {
//       icon: <Gauge className="w-8 h-8 text-purple-100" />,
//       stat: "25%",
//       desc: "faster product improvement cycles through automated feedback capture.",
//     },
//     {
//       icon: <TrendingUp className="w-8 h-8 text-purple-100" />,
//       stat: "20%",
//       desc: "higher conversion on upsells using real-time recommendations.",
//     },
//     {
//       icon: <MessageSquare className="w-8 h-8 text-purple-100" />,
//       stat: "100%",
//       desc: "conversation coverage vs. <5% manual auditing.",
//     },
//     {
//       icon: <DollarSign className="w-8 h-8 text-purple-100" />,
//       stat: "15–20%",
//       desc: "reduction in QA costs through automation.",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-slate-200 -mt-16">
//       {/* Header Section */}

//       <HeroSection />

//       {/* <motion.div
//         className="w-full md:min-h-screen bg-slate-200  py-8 xs:py-10 sm:py-12 md:py-12 mb-8 xs:mb-10 sm:mb-12 md:mb-16 flex items-center justify-center"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={fadeIn}
//         transition={{ duration: 0.6, delay: 0.4 }}
//       >
//         <div className="w-full max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 flex flex-col md:flex-row items-center gap-8">
//           <div className="w-full md:w-1/2 flex justify-center">
//             <img
//               src="/ecomm.png"
//               alt="E-Commerce and D2C"
//               className="w-full h-auto aspect-square max-w-md rounded-xl shadow-lg"
//             />
//           </div>

//           <div className="w-full md:w-1/2">
//             <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-3xl lg:text-2xl font-semibold text-black text-center mb-4 xs:mb-6 sm:mb-8">
//               Transform Customer Conversations into Revenue with <br />
//               <span className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] text-transparent bg-clip-text">
//                 AI Intelligence
//               </span>
//             </h3>
//             <p className="text-gray-800 text-sm sm:text-base md:text-md mb-3 md:text-left">
//               In ecommerce and D2C, each customer interaction and support ticket
//               is an opportunity to strengthen your brand, boost repeat
//               purchases, and gather insights about your products. Most teams
//               only capture a small part of these interactions, missing vital
//               signals that affect revenue and customer loyalty
//             </p>
//             <p className="text-gray-800 text-sm sm:text-base md:text-md mb-3 md:text-left">
//               Convoze AI changes that. It audits 100% of conversations across
//               all channels, tracks key performance metrics (KPIs) for every
//               interaction, extracts actionable insights in real time, and helps
//               your teams respond instantly on what matters most.
//             </p>
//           </div>
//         </div>
//       </motion.div> */}

//       {/* Challenges Section */}
//       <motion.div
//         className="w-full bg-slate-200 relative py-6 xs:py-10  mb-10 xs:mb-12 sm:mb-16 md:mb-0"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={staggerContainer}
//       >
//         <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-blue-600/10 to-transparent pointer-events-none" />{" "}
//         <div className="w-full max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 md:px-10 py-24 lg:px-12 xl:px-16 flex flex-col items-center gap-4">
//           <h3 className="text-xl xs:text-2xl  sm:text-3xl md:text-3.5xl lg:text-3xl font-semibold text-gray-900 text-center mb-2 xs:mb-4 sm:mb-4">
//             Challenges{" "}
//             <span className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] text-transparent bg-clip-text">
//               Ecommerce & D2C
//             </span>{" "}
//             Brands Face
//           </h3>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {[
//               {
//                 icon: <IconGraph />,
//                 title:
//                   "Slow or inconsistent support can lead to customer churn",
//               },
//               {
//                 icon: <ShoppingBag />,
//                 title:
//                   "Missed chances for upselling, cross-selling, and keeping clients",
//               },
//               {
//                 icon: <Cloud />,
//                 title:
//                   "Customer journeys can be scattered across chat, calls, email, and social media",
//               },
//               {
//                 icon: <Clock />,
//                 title:
//                   "Sales are lost because of unaddressed concerns and cart abandonment",
//               },
//               {
//                 icon: <Save />,
//                 title:
//                   "Data scattered across platforms delays product and marketing insights",
//               },
//               {
//                 icon: <User />,
//                 title:
//                   "Inconsistent brand experience results from varying responses from agents",
//               },
//               {
//                 icon: <Shield />,
//                 title:
//                   "High support volume, fraud, and policy abuse can go unnoticed",
//               },
//               {
//                 icon: <Globe />,
//                 title:
//                   "Language and regional diversity can create communication challenges",
//               },
//               {
//                 icon: <ChartScatter />,
//                 title: "There is limited visibility into agent performance",
//               },
//             ].map((item, idx) => (
//               <motion.div
//                 key={idx}
//                 className="bg-white rounded-3xl p-4 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: idx * 0.1 }}
//                 whileHover={{ y: -5, transition: { duration: 0.2 } }}
//               >
//                 <div className="flex items-start gap-4">
//                   <div className="text-4xl bg-gradient-to-br from-purple-100 to-indigo-100 text-purple-700 rounded-xl p-3 flex-shrink-0">
//                     {item.icon}
//                   </div>
//                   <p className="text-gray-700 text-base font-light">
//                     {item.title}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.div>

//       {/* How Convoze Helps Section */}
//       <motion.div
//         className="w-full  bg-slate-200 relative py-8 xs:py-10 sm:py-12 md:py-20 mb-8 xs:mb-10 sm:mb-12 md:mb-0"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={fadeIn}
//         transition={{ duration: 0.6, delay: 0.4 }}
//       >
//         {/* <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-blue-600/10 to-transparent pointer-events-none" />
//         <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-blue-600/10 to-transparent pointer-events-none" /> */}

//         <div className="w-full max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">
//           <h3 className="text-center text-2xl xs:text-2xl sm:text-3xl md:text-3.5xl lg:text-4xl font-semibold text-black mb-5 md:mb-10">
//             How Convoze{" "}
//             <span className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] text-transparent bg-clip-text">
//               Helps
//             </span>
//           </h3>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-10">
//             <div className="space-y-4">
//               {[
//                 {
//                   title: "Real-Time Customer Sentiment & Insights",
//                   description: [
//                     "Detects frustration, urgency, or buying signals instantly.",
//                     "Flags high-value or at-risk customers for immediate action driving proactive support and increasing repeat purchases.",
//                   ],
//                 },
//                 {
//                   title: "Automated Product Feedback Loops",
//                   description: [
//                     "Automatically captures recurring bug reports, feature requests, and product questions.",
//                     "Prioritizes improvements based on actual customer demand, this leads to quicker product updates and improved user satisfaction.",
//                   ],
//                 },
//                 {
//                   title: "More Informed Sales and Promotions",
//                   description: [
//                     "Finds possibilities for cross-selling and upselling during discussions.",
//                     "Suggests personalized offers in real time. This results in higher conversion and increased average order value.",
//                   ],
//                 },
//               ].map((feature, index) => (
//                 <div key={index} className="space-y-1 mb-2">
//                   <div className="flex items-center space-x-2">
//                     <span className="w-2 h-2 flex items-center justify-center bg-purple-500 rounded-full"></span>
//                     <h4 className="text-base sm:text-lg font-semibold text-black">
//                       {feature.title}
//                     </h4>
//                   </div>
//                   <div className="ml-5 space-y-1">
//                     {feature.description.map((desc, i) => (
//                       <div key={i} className="flex items-start space-x-2">
//                         <span className="font-[600]">-</span>
//                         <p className="text-gray-900 text-sm sm:text-sm leading-relaxed">
//                           {desc}
//                         </p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Right Column */}
//             <div className="space-y-4">
//               {[
//                 {
//                   title: "Quality Assurance & Training at Scale",
//                   description: [
//                     " AI audits every conversation, ensuring consistent service quality.",
//                     "A better brand voice, fewer mistakes, and quicker onboarding are all made possible by these initiatives, which highlight top-performing agents and coaching opportunities.",
//                   ],
//                 },
//                 {
//                   title: "Detection of Fraud and Risk",
//                   description: [
//                     "Spots unusual patterns in returns, complaints, or interactions.",
//                     "Flags high-risk issues before they escalate resulting in reduced financial losses and improved trust.",
//                   ],
//                 },
//               ].map((feature, index) => (
//                 <div key={index} className="space-y-1 mb-2">
//                   <div className="flex items-center space-x-2">
//                     <span className="w-2 h-2 flex items-center justify-center bg-purple-500 rounded-full"></span>
//                     <h4 className="text-base sm:text-lg font-semibold text-black">
//                       {feature.title}
//                     </h4>
//                   </div>

//                   <div className="ml-5 space-y-1">
//                     {feature.description.map((desc, i) => (
//                       <div key={i} className="flex items-start space-x-2">
//                         <span className="font-[600]">-</span>
//                         <p className="text-gray-900 text-sm sm:text-sm leading-relaxed">
//                           {desc}
//                         </p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </motion.div>

//       {/* Measurable Impact Section */}
//       <motion.div
//         className="w-full  bg-slate-200 min-h-screen flex-col relative  py-6 xs:py-10 sm:py-24  text-center flex items-center justify-center"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={fadeIn}
//         transition={{ duration: 0.6, delay: 0.6 }}
//       >
//         <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-blue-600/10 to-transparent pointer-events-none" />
//         <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-blue-600/10 to-transparent pointer-events-none" />

//         <section className="w-full max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">
//           <h3 className="text-center text-2xl xs:text-2xl sm:text-3xl md:text-3.5xl lg:text-4xl font-semibold text-gray-900 mb-5 md:mb-10">
//             Measurable{" "}
//             <span className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] text-transparent bg-clip-text">
//               Impact
//             </span>
//           </h3>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-5 md:mb-0">
//             {stats.map((item, idx) => (
//               <div
//                 key={idx}
//                 className="group p-4 bg-gradient-to-br from-[#3224AF] to-[#C068D1] rounded-2xl shadow-md hover:scale-105 hover: transition duration-300"
//               >
//                 <div className="flex items-center gap-4 mb-4">
//                   <div className="p-2 bg-white/20 rounded-xl group-hover:bg-white/30 transition">
//                     {item.icon}
//                   </div>
//                   <p className="text-2xl font-bold text-white">{item.stat}</p>
//                 </div>
//                 <p className="text-white text-xs text-start sm:text-base leading-relaxed">
//                   {item.desc}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </section>
//       </motion.div>

//       {/* Boost Growth Section */}
//       <motion.div
//         className="w-full bg-slate-200 relative min-h-[80vh]  py-10 sm:py-14 md:py-20 mb-8 sm:mb-12 md:mb-0"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={fadeIn}
//         transition={{ duration: 0.6, delay: 0.4 }}
//       >
//         <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-10 lg:px-12 xl:px-16 mb-5">
//           <h3 className="text-center text-2xl sm:text-3xl md:text-3.5xl lg:text-4xl font-semibold text-black mb-6">
//             Boost your Ecommerce and D2C growth with <br />
//             <span className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] text-transparent bg-clip-text">
//               Convoze
//             </span>
//           </h3>

//           <p className="text-center max-w-3xl mx-auto text-gray-800 text-sm sm:text-base leading-relaxed mb-5">
//             Convoze transforms all discussions into valuable insights that drive
//             sales growth, enhance customer loyalty, and accelerate product
//             selection.
//           </p>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-5">
//             {/* Left Column */}
//             <div className="space-y-6">
//               {[
//                 {
//                   title: "Actionable Insights in Real-Time",
//                   description:
//                     "Provides real-time insights enabling sales, support, and product teams to resolve customer issues quickly and engage effectively.",
//                 },
//                 {
//                   title: "Multilingual & Accent-Adaptive AI",
//                   description:
//                     "Ensures seamless communication across regions and languages, breaking barriers for global businesses.",
//                 },
//                 {
//                   title: "Seamless Integration",
//                   description:
//                     "Integrates smoothly with chat, email, CRM, and call systems—no disruption to business operations.",
//                 },
//               ].map((feature, index) => (
//                 <div key={index} className="flex items-start gap-3">
//                   <div className="w-2 h-2 bg-[#C068D1] rounded-full mt-2 flex-shrink-0"></div>
//                   <div>
//                     <h4 className="text-base sm:text-lg font-semibold text-black mb-1">
//                       {feature.title}
//                     </h4>
//                     <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
//                       {feature.description}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Right Column */}
//             <div className="space-y-6">
//               {[
//                 {
//                   title: "Scalable Multi-Channel Operations",
//                   description:
//                     "Handles large data volumes and seasonal spikes without compromising performance.",
//                 },
//                 {
//                   title: "Customizable to Your Brand",
//                   description:
//                     "Adapts to your policies and workflows while preserving brand voice for consistency and compliance.",
//                 },
//                 {
//                   title: "Risk Reduction & Fraud Detection",
//                   description:
//                     "Detects unusual patterns in interactions to reduce fraud and financial losses.",
//                 },
//               ].map((feature, index) => (
//                 <div key={index} className="flex items-start gap-3">
//                   <div className="w-2 h-2 bg-[#3224AF] rounded-full mt-2 flex-shrink-0"></div>
//                   <div>
//                     <h4 className="text-base sm:text-lg font-semibold text-black mb-1">
//                       {feature.title}
//                     </h4>
//                     <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
//                       {feature.description}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <p className="text-center max-w-4xl mx-auto text-gray-800 text-sm sm:text-base leading-relaxed">
//             Convoze uses every customer interaction to generate valuable
//             business intelligence which enables Ecommerce and D2C brands to
//             maintain customer loyalty and boost sales and make better business
//             choices.
//           </p>
//         </div>
//       </motion.div>

//       {/* Final CTA Section */}
//       <motion.div
//         className="w-full  bg-slate-200  flex-col relative min-h-[80vh] py-6 xs:py-10 sm:py-24  text-center flex items-center justify-center"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={fadeIn}
//         transition={{ duration: 0.6, delay: 0.6 }}
//       >
//         <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-blue-600/10 to-transparent pointer-events-none" />
//         <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-blue-600/10 to-transparent pointer-events-none" />
//         <div className="w-full max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
//             {/* Left Section */}
//             <div>
//               <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-3.5xl lg:text-4xl font-semibold text-gray-900 mb-3">
//                 Where Convoze{" "}
//                 <span className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] bg-clip-text text-transparent">
//                   Makes
//                 </span>{" "}
//                 the Difference
//               </h3>
//               <p className="text-gray-800 text-base xs:text-base sm:text-lg md:text-md !font-light">
//                 With Convoze, ecommerce and D2C brands don't just manage support
//                 — they build loyalty, grow revenue, and make smarter product
//                 decisions. Every interaction becomes a chance to engage
//                 customers better, reduce churn, and turn conversations into
//                 measurable business growth
//               </p>
//               <p className="mt-4 max-w-4xl mx-auto text-gray-700 text-sm sm:text-base leading-relaxed">
//                 Convoze ensures brands deliver consistent, personalized, and
//                 efficient experiences at scale.
//               </p>
//             </div>

//             {/* Right Section */}
//             <div>
//               <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-3.5xl lg:text-4xl font-semibold text-gray-900 mb-3">
//                 Why{" "}
//                 <span className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] bg-clip-text text-transparent">
//                   Convoze
//                 </span>{" "}
//                 Stands Out
//               </h3>
//               <p className="text-gray-800 text-base xs:text-base sm:text-lg md:text-md !font-light">
//                 Most QA tools still work in isolation or rely on a handful of
//                 conversation samples. Being different, Convoze audits every
//                 single solitary conversation in one unified platform. That gives
//                 reduced blind spots, more rapid decisions, and better outcomes
//                 for both your customers and your business.
//               </p>
//             </div>
//           </div>

//           <div className="mt-8 flex justify-center mb-4 md:mb-0">
//             <Link href={"/contact"}>
//               <motion.button
//                 className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-102 shadow-lg"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 See Convoze in Action
//               </motion.button>
//             </Link>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default EcommerceD2c;

// function HeroSection() {
//   return (
//     <div className="relative min-h-screen flex items-center pt-16 justify-center overflow-hidden bg-slate-200 px-4 sm:px-6 lg:px-8">
//       {/* === Decorative Blurred Elements === */}
//       <div className="absolute inset-0 -z-10 overflow-hidden">
//         {/* Top-left blob */}
//         <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-purple-400/40 rounded-full blur-[160px] animate-pulse" />
//         {/* Bottom-right blob */}
//         <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-400/40 rounded-full blur-[180px] animate-pulse" />
//         {/* Center glow */}
//         <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-pink-300/30 rounded-full blur-[180px] animate-pulse" />
//       </div>

//       {/* === Floating Particles === */}
//       <div className="absolute inset-0 overflow-hidden -z-10">
//         {Array.from({ length: 10 }).map((_, i) => (
//           <div
//             key={i}
//             className="absolute bg-purple-500/50 rounded-full blur-[2px] animate-float"
//             style={{
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//               width: `${Math.random() * 8 + 4}px`,
//               height: `${Math.random() * 8 + 4}px`,
//               animationDelay: `${Math.random() * 5}s`,
//               animationDuration: `${Math.random() * 10 + 10}s`,
//             }}
//           />
//         ))}
//       </div>

//       {/* === Content === */}
//       <div className="max-w-5xl mx-auto text-center space-y-8 py-24 zoom-out">
//         <h1 className="text-4xl sm:text-5xl md:text-4xl lg:text-7xl font-bold text-gray-900 leading-tight drop-shadow-md">
//           Convoze for E-Commerce and D2C
//         </h1>

//         <h2 className="text-xl sm:text-2xl md:text-2xl font-semibold text-gray-700 max-w-3xl mx-auto">
//           Turn Every Customer Interaction into Loyalty and Revenue
//         </h2>

//         <p className="text-base sm:text-lg md:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
//           In ecommerce and D2C, each customer interaction and support ticket is
//           an opportunity to strengthen your brand, boost repeat purchases, and
//           gather insights about your products. Most teams only capture a small
//           part of these interactions, missing vital signals that affect revenue
//           and customer loyalty.
//         </p>

//         <p className="text-base sm:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
//           <span className="font-bold text-gray-900">Convoze AI</span> changes
//           that. It audits 100% of conversations across all channels, tracks key
//           performance metrics (KPIs) for every interaction, extracts actionable
//           insights in real time, and helps your teams respond instantly on what
//           matters most.
//         </p>

//         <div className="pt-4">
//           <button className="group inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
//             Request a Demo
//             <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//           </button>
//         </div>
//       </div>

//       {/* === Optional: subtle top/bottom fade === */}
//       <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-blue-600/10 to-transparent pointer-events-none" />
//       <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-blue-600/10 to-transparent pointer-events-none" />
//     </div>
//   );
// }

"use client";

import { color, motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import {
  Headphones,
  ShoppingCart,
  Zap,
  CheckCircle,
  ArrowRight,
  ShoppingBag,
  Cloud,
  Clock,
  Save,
  User,
  Shield,
  Globe,
  ChartScatter,
  Repeat,
  Gauge,
  TrendingUp,
  MessageSquare,
  DollarSign,
} from "lucide-react";
import { IconGraph } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import InfiniteCarousel from "@/components/hero/InfiniteCarousel";
import { Marquee } from "@/components/ui/marquee";

const EcommerceD2c = () => {
  const router = useRouter();

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const stats = [
    {
      icon: <Repeat className="w-12 h-12 text-purple-100" />,
      stat: "30–40%",
      desc: "increase in repeat purchases by proactively identifying at-risk customers.",
      color: "from-rose-500 to-orange-500",
    },
    {
      icon: <Gauge className="w-12 h-12 text-purple-100" />,
      stat: "25%",
      desc: "faster product improvement cycles through automated feedback capture.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-purple-100" />,
      stat: "20%",
      desc: "higher conversion on upsells using real-time recommendations.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-purple-100" />,
      stat: "100%",
      desc: "conversation coverage vs. <5% manual auditing.",
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: <DollarSign className="w-12 h-12 text-purple-100" />,
      stat: "15–20%",
      desc: "reduction in QA costs through automation.",
      color: "from-blue-500 to-cyan-500",
    },
  ];

  const challenges = [
    {
      icon: <IconGraph />,
      title: "Slow or inconsistent support can lead to customer churn",
      image: "challenges-ecom-1.png",
    },
    {
      icon: <ShoppingBag />,
      title: "Missed chances for upselling, cross-selling, and keeping clients",
      image: "challenges-ecom-2.png",
    },
    {
      icon: <Cloud />,
      title:
        "Customer journeys can be scattered across chat, calls, email, and social media",
      image: "challenges-ecom-3.png",
    },
    {
      icon: <Clock />,
      title:
        "Sales are lost because of unaddressed concerns and cart abandonment",
      image: "challenges-ecom-4.png",
    },
    {
      icon: <Save />,
      title:
        "Data scattered across platforms delays product and marketing insights",
      image: "enhance-2.png",
    },
    {
      icon: <User />,
      title:
        "Inconsistent brand experience results from varying responses from agents",
      image: "challenges-2.png",
    },
    {
      icon: <Shield />,
      title: "High support volume, fraud, and policy abuse can go unnoticed",
      image: "challenges-2.png",
    },
    {
      icon: <Globe />,
      title:
        "Language and regional diversity can create communication challenges",
      image: "enhance-5.png",
    },
    {
      icon: <ChartScatter />,
      title: "There is limited visibility into agent performance",
      image: "feat-bank-last.png",
    },
  ];

  const features = [
    {
      title: "Actionable Insights in Real-Time",
      image: "enhance-1.png",

      description:
        "Provides real-time insights enabling sales, support, and product teams to resolve customer issues quickly and engage effectively.",
    },

    {
      title: "Multilingual & Accent-Adaptive AI",
      image: "enhance-2.png",

      description:
        "Ensures seamless communication across regions and languages, breaking barriers for global businesses.",
    },

    {
      title: "Seamless Integration",
      image: "enhance-3.png",

      description:
        "Integrates smoothly with chat, email, CRM, and call systems—no disruption to business operations.",
    },

    {
      title: "Scalable Multi-Channel Operations",
      image: "enhance-4.png",

      description:
        "Handles large data volumes and seasonal spikes without compromising performance.",
    },

    {
      title: "Customizable to Your Brand",
      image: "enhance-5.png",

      description:
        "Adapts to your policies and workflows while preserving brand voice for consistency and compliance.",
    },

    {
      title: "Risk Reduction & Fraud Detection",
      image: "enhance-6.png",

      description:
        "Detects unusual patterns in interactions to reduce fraud and financial losses.",
    },
  ];

  return (
    <div className="min-h-screen relative  -mt-16">
      {/* Header Section */}
      <HeroSection />
      <div className="relative bg-white">
        {/* <div className="absolute inset-0 z-0">
          <img
            src="/bgPattern.png"
            alt="Background Pattern"
            className="w-full h-full rotate-180 object-cover opacity-10"
          />
        </div> */}
        {/* Challenges Section */}

        <div className="relative  py-20 max-w-7xl mx-auto">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-10 lg:px-12 xl:px-16 relative">
            <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-3.5xl lg:text-4xl font-bold text-gray-900 text-center mb-2 xs:mb-4 sm:mb-4">
              Challenges{" "}
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
                Ecommerce & D2C
              </span>{" "}
              Brands Face
            </h3>
            {/* 
            <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
              Key challenges financial institutions face in serving customers,
              staying compliant, and managing high volumes.
            </p> */}

            {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative">
              {challenges.map((challenge, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden"
                >
                  <div className="flex flex-col items-center text-center gap-4 relative z-10">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-br ${challenge.color} text-white group-hover:scale-110 transition-transform`}
                    >
                      {challenge.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      {challenge.title}
                    </h4>
                  </div>
                  <div
                    className={`absolute -top-6 -right-6 h-24 w-24 rounded-full bg-gradient-to-br ${challenge.color} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity`}
                  />
                </div>
              ))}
            </div> */}
          </div>
          <InfiniteCarousel items={challenges} />
        </div>

        {/* Boost Growth Section */}

        {/* Measurable Impact Section */}
        <motion.div
          className="w-full min-h-screen flex-col relative py-6 xs:py-10 sm:py-16 text-center flex items-center justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="absolute inset-0 -z-10 opacity-[0.02] dark:opacity-[0.05]">
            <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="grid"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-indigo-100/20 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-indigo-100/20 to-transparent pointer-events-none" />

          <section className="w-full max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">
            <h3 className="text-center text-2xl xs:text-2xl sm:text-3xl md:text-3.5xl lg:text-4xl font-bold text-gray-900 mb-5 md:mb-8">
              Measurable{" "}
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
                Impact
              </span>
            </h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-muted-foreground mb-5 md:mb-8"
            >
              By auditing 100% of conversations, Convoze uncovers hidden
              insights that drive real business results for Ecommerce and D2C
              brands:
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-5 md:mb-8">
              {stats.map((item, idx) => (
                <motion.div
                  key={idx}
                  className={cn(
                    "group border-border/90 bg-gradient-to-l rounded-3xl bg-white/80 backdrop-blur-xl relative overflow-hidden  border p-6 shadow-lg shadow-black-900/[0.3]"
                  )}
                >
                  <div className="flex items-center gap-2 mb-4 overflow-hidden">
                    <div
                      className={cn(
                        "flex h-24 w-24 shrink-0 rotate-45 scale-150 opacity-15 absolute -bottom-3 -right-3 items-center justify-center rounded-lg bg-gradient-to-br text-black",
                        item.color
                      )}
                    >
                      {item.icon}
                    </div>
                    <p className="text-4xl font-bold text-center text-black/80">
                      <ColorText>{item.stat}</ColorText>
                    </p>
                  </div>
                  <p className="text-sm sm:text-base relative leading-relaxed text-black/80 text-left">
                    {item.desc}
                  </p>
                  <div
                    className={cn(
                      "absolute -top-6 -right-6 h-24 w-24 rounded-full bg-gradient-to-br opacity-20 blur-2xl transition-all duration-500 group-hover:opacity-30 group-hover:blur-3xl",
                      item.color
                    )}
                  />
                </motion.div>
              ))}
            </div>
          </section>
        </motion.div>

        {/* How Convoze Helps Section */}
        <motion.div
          className="w-full  relative min-h-[80vh] py-10 sm:py-14 md:py-20 mb-8 sm:mb-12 md:mb-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 md:px-10 lg:px-12 xl:px-16 mb-5">
            <h3 className="text-center text-2xl sm:text-3xl md:text-3.5xl lg:text-4xl font-bold text-gray-900 mb-6">
              Boost your Ecommerce and D2C growth with <br />
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
                Convoze
              </span>
            </h3>

            <p className="text-center max-w-3xl mx-auto text-gray-700 text-sm sm:text-base leading-relaxed mb-5">
              Convoze transforms all discussions into valuable insights that
              drive sales growth, enhance customer loyalty, and accelerate
              product selection.
            </p>
            {/* 
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8 mb-5">
              <div className="space-y-3">
                {[
                  {
                    title: "Actionable Insights in Real-Time",
                    description:
                      "Provides real-time insights enabling sales, support, and product teams to resolve customer issues quickly and engage effectively.",
                  },
                  {
                    title: "Multilingual & Accent-Adaptive AI",
                    description:
                      "Ensures seamless communication across regions and languages, breaking barriers for global businesses.",
                  },
                  {
                    title: "Seamless Integration",
                    description:
                      "Integrates smoothly with chat, email, CRM, and call systems—no disruption to business operations.",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 hover:bg-gray-100 p-4 rounded-xl transition-all duration-300"
                    whileHover={{ y: -3 }}
                  >
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-base sm:text-lg text-black font-semibold  mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="space-y-3">
                {[
                  {
                    title: "Scalable Multi-Channel Operations",
                    description:
                      "Handles large data volumes and seasonal spikes without compromising performance.",
                  },
                  {
                    title: "Customizable to Your Brand",
                    description:
                      "Adapts to your policies and workflows while preserving brand voice for consistency and compliance.",
                  },
                  {
                    title: "Risk Reduction & Fraud Detection",
                    description:
                      "Detects unusual patterns in interactions to reduce fraud and financial losses.",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 bg-gray-100/60 backdrop-blur-lg p-4 rounded-xl transition-all duration-300"
                    whileHover={{ y: -3 }}
                  >
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-base sm:text-lg font-semibold  mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div> */}

            <div className="relative flex w-full rounded-3xl bg-transparent flex-col   items-center justify-center overflow-hidden">
              <Marquee className={"py-4"} pauseOnHover>
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="p-2 border-black/10 hover:scale-105 transition-all duration-300 -mx-1  shadow rounded border bg-white "
                  >
                    <div className="group relative !z-20  w-72 rounded-xl overflow-hidden transform ">
                      {/* Background Image */}
                      <div
                        className="absolute inset-0 bg-cover w-84 bg-center"
                        style={{
                          backgroundImage: `url(${feature.image})`,
                        }}
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/10" />

                      {/* Content */}
                      <div className="relative p-2 h-full flex flex-col justify-end min-h-[300px] md:min-h-[360px]">
                        <div className="relative rounded-b px-4 py-2 overflow-hidden">
                          <div className="absolute inset-0 backdrop-blur-[4px] bg-gradient-to-b from-black/30 to-black/50 rounded" />
                          <div className="text-gray-50 text-sm  relative">
                            <h1 className="relative text-base  text-white font-medium leading-5 ">
                              <>{feature.title}</>
                            </h1>
                            <br />
                            {feature.description}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Marquee>
              <div className="from-white pointer-events-none absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r"></div>
              <div className="from-white pointer-events-none absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l"></div>
            </div>

            <p className="text-center max-w-4xl mx-auto mt-4 text-gray-700 text-sm sm:text-base leading-relaxed">
              Convoze uses every customer interaction to generate valuable
              business intelligence which enables Ecommerce and D2C brands to
              maintain customer loyalty and boost sales and make better business
              choices.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="w-full  relative py-8 xs:py-10 sm:py-12 md:py-20 mb-8 xs:mb-10 sm:mb-12 md:mb-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="w-full max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">
            <h3 className="text-center text-2xl xs:text-2xl sm:text-3xl md:text-3.5xl lg:text-4xl font-bold text-gray-900 mb-5 md:mb-10">
              How Convoze{" "}
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
                Helps
              </span>
            </h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-muted-foreground mb-5 md:mb-8"
            >
              Convoze empowers your teams to act smarter, faster and more
              effectively on every customer interaction.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
              {[
                {
                  title: "Real-Time Customer Sentiment & Insights",
                  description: [
                    "Detects frustration, urgency, or buying signals instantly.Flags high-value or at-risk customers for immediate action driving proactive support and increasing repeat purchases.",
                  ],
                  color: "from-purple-500 to-indigo-500",
                },
                {
                  title: "Automated Product Feedback Loops",
                  description: [
                    "Automatically captures recurring bug reports, feature requests, and product questions and Prioritizes improvements based on actual customer demand, this leads to quicker product updates and improved user satisfaction.",
                  ],
                  color: "from-blue-500 to-indigo-500",
                },
                {
                  title: "More Informed Sales and Promotions",
                  description: [
                    "Finds possibilities for cross-selling and upselling during discussions and Suggests personalized offers in real time. This results in higher conversion and increased average order value.",
                  ],
                  color: "from-red-500 to-indigo-500",
                },
                {
                  title: "Quality Assurance & Training at Scale",
                  description: [
                    "AI audits every conversation to ensure consistent service quality, strengthen your brand voice, reduce mistakes, and accelerate onboarding, highlighting top-performing agents for coaching opportunities.",
                  ],
                  color: "from-pink-500 to-indigo-500",
                },
                {
                  title: "Detection of Fraud and Risk",
                  description: [
                    "Spots unusual patterns in returns, complaints, or interactions and flags high-risk issues before they escalate resulting in reduced financial losses and improved trust.",
                  ],
                  color: "from-green-500 to-yellow-500",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white/80 backdrop-blur-xs overflow-hidden p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center space-x-2 mb-3">
                    <div
                      className={cn(
                        "absolute -top-6 -right-6 h-24 w-24 rounded-full bg-gradient-to-br opacity-20 blur-2xl transition-all duration-500 group-hover:opacity-30 group-hover:blur-3xl",
                        feature.color
                      )}
                    />
                    <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                    <h4 className="text-lg font-semibold ">
                      <ColorText>{feature.title}</ColorText>
                    </h4>
                  </div>
                  <div className="ml-5 space-y-2">
                    {feature.description.map((desc, i) => (
                      <div key={i} className="flex items-start space-x-2">
                        <span className="font-[600] text-purple-600">-</span>
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}

              {/* <div className="space-y-6">
                {[
                  {
                    title: "Quality Assurance & Training at Scale",
                    description: [
                      "AI audits every conversation, ensuring consistent service quality.",
                      "A better brand voice, fewer mistakes, and quicker onboarding are all made possible by these initiatives, which highlight top-performing agents and coaching opportunities.",
                    ],
                  },
                  {
                    title: "Detection of Fraud and Risk",
                    description: [
                      "Spots unusual patterns in returns, complaints, or interactions.",
                      "Flags high-risk issues before they escalate resulting in reduced financial losses and improved trust.",
                    ],
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                      <h4 className="text-lg font-semibold text-gray-900">
                        <ColorText>{feature.title}</ColorText>
                      </h4>
                    </div>
                    <div className="ml-5 space-y-2">
                      {feature.description.map((desc, i) => (
                        <div key={i} className="flex items-start space-x-2">
                          <span className="font-[600] text-purple-600">-</span>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            {desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div> */}
            </div>
          </div>
        </motion.div>
        {/* Final CTA Section */}
        <motion.div
          className="w-full  flex-col relative min-h-[80vh] py-6 xs:py-10 sm:py-24 text-center flex items-center justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-indigo-100/20 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-indigo-100/20 to-transparent pointer-events-none" />
          <div className="w-full max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
              <div>
                <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-3.5xl lg:text-4xl font-bold text-gray-900 mb-3">
                  Where Convoze{" "}
                  <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    Makes
                  </span>{" "}
                  the Difference
                </h3>
                <p className="text-gray-700 text-base xs:text-base sm:text-lg md:text-md !font-light">
                  With Convoze, ecommerce and D2C brands don't just manage
                  support — they build loyalty, grow revenue, and make smarter
                  product decisions. Every interaction becomes a chance to
                  engage customers better, reduce churn, and turn conversations
                  into measurable business growth.
                </p>
                <p className="mt-4 max-w-4xl mx-auto text-gray-600 text-sm sm:text-base leading-relaxed">
                  Convoze ensures brands deliver{" "}
                  <strong>
                    consistent, personalized, and efficient experiences at
                    scale.
                  </strong>
                </p>
              </div>

              <div>
                <h3 className="text-xl xs:text-2xl sm:text-3xl md:text-3.5xl lg:text-4xl font-bold text-gray-900 mb-3">
                  Why{" "}
                  <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    Convoze
                  </span>{" "}
                  Stands Out
                </h3>
                <p className="text-gray-700 text-base xs:text-base sm:text-lg md:text-md !font-light">
                  Most QA tools still work in isolation or rely on a handful of
                  conversation samples. Being different, Convoze audits every
                  single solitary conversation in one unified platform. That
                  gives reduced blind spots, more rapid decisions, and better
                  outcomes for both your customers and your business.
                </p>
              </div>
            </div>

            <div className="mt-8 flex justify-center mb-4 md:mb-0">
              <motion.div
                className="pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Link href="/contact">
                  <button className="group shadow-[0px_2px_0px_0px_rgba(255,255,255,0.2)_inset]  relative bg-gradient-to-r from-[#C068D1] to-[#3224AF] border-input inline-flex w-full items-center justify-center rounded-full border-[1px] px-6 py-4 text-center text-white transition-colors hover:bg-transparent/90 sm:w-auto">
                    See Convoze in Action
                    <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EcommerceD2c;

function HeroSection() {
  return (
    <div className="relative min-h-screen flex bg-white items-center  pb-10 pt-24 justify-center overflow-hidden  px-4 sm:px-6 lg:px-8">
      {/* Decorative Blurred Elements */}
      {/* <div className="pointer-events-none absolute h-full w-full overflow-hidden opacity-30 [perspective:300px]">
        <div className="absolute inset-0 [transform:rotateX(35deg)]">
          <div className="animate-grid [inset:0%_0px] [margin-left:-50%] [height:300vh] [width:600vw] [transform-origin:100%_0_0] [background-image:linear-gradient(to_right,rgba(0,0,0,0.5)_1px,transparent_0),linear-gradient(to_bottom,rgba(40,40,40,0.2)_1px,transparent_0)] [background-size:120px_120px] [background-repeat:repeat]"></div>
        </div>
      </div> */}

      {/* Floating Particles */}

      {/* Content */}
      <div className="w-full max-w-7xl mx-auto px-4 pt-12  flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 w-fit bg-purple-100/80 backdrop-blur-sm text-purple-900 rounded-full text-xs md:text-sm font-medium border border-purple-200">
            Convoze for E-Commerce and D2C
          </span>
          <motion.h1
            className="from-primary/30 mt-6 items-start via-foreground/85 font-semibold to-foreground/50 bg-gradient-to-tl bg-clip-text text-start text-4xl tracking-normal text-balance text-transparent lg:text-[40px] md:whitespace-nowrap "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Turn Every Customer <br /> Interaction into
            <br />
            <span className="bg-gradient-to-tr relative from-purple-600/50 via-purple-700/85  to-indigo-600 text-transparent bg-clip-text">
              {" "}
              Loyalty and Revenue
            </span>
          </motion.h1>

          {/* <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground mx-auto mt-6 max-w-2xl text-start text-base"
          >
            In ecommerce and D2C, each customer interaction and support ticket
            is an opportunity to strengthen your brand, boost repeat purchases,
            and gather insights about your products. Most teams only capture a
            small part of these interactions, missing vital signals that affect
            revenue and customer loyalty.
          </motion.p> */}

          <motion.p
            className="text-base  text-gray-700 relative max-w-4xl mt-6 mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className="font-bold relative text-gray-900">Convoze AI</span>{" "}
            audits 100% of conversations across all channels, tracks key
            performance metrics (KPIs) for every interaction, extracts
            actionable insights in real time, and helps your teams respond
            instantly on what matters most.
          </motion.p>

          <motion.div
            className="pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link href="/contact">
              <button className="group shadow-[0px_2px_0px_0px_rgba(255,255,255,0.2)_inset]  relative bg-gradient-to-r from-[#C068D1] to-[#3224AF] border-input inline-flex w-full items-center justify-center rounded-full border-[1px] px-6 py-4 text-center text-white transition-colors hover:bg-transparent/90 sm:w-auto">
                Request a Demo
                <ArrowRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>
        </div>
        <div className="w-full md:w-1/2 relative flex justify-center">
          <motion.div
            className="relative group"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Glow effect behind image */}

            {/* Animated border */}

            <img
              src="/ecom-img.png"
              alt="ecommerce"
              className="relative w-full h-auto object-cover scale-110 max-w-md  transition-all duration-500 group-hover:scale-115"
            />

            {/* Floating badges */}
            {/* <motion.div
                    className="absolute -top-4 -left-4 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-purple-200"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-semibold text-gray-700">
                        100% Coverage
                      </span>
                    </div>
                  </motion.div>
      
                  <motion.div
                    className="absolute -bottom-4 -right-4 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-indigo-200"
                    animate={{ y: [0, 5, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.5,
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-gray-700">
                        Real-Time AI
                      </span>
                      <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                    </div>
                  </motion.div> */}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export const ColorText = ({ children }) => {
  return (
    <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
      {" "}
      {children}
    </span>
  );
};
