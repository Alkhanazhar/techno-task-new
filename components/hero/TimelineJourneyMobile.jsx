import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useAnimation,
} from "framer-motion";

const TimelineJourneyMobile = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isTimelineComplete, setIsTimelineComplete] = useState(false);
  const [visibleSteps, setVisibleSteps] = useState(new Set()); // Track which steps should be visible
  const containerRef = useRef(null);
  const pathRef = useRef(null);
  const circleRef = useRef(null);
  const timelineRef = useRef(null);
  const [contentPositions, setContentPositions] = useState([]);

  const data = [
    {
      year: 2022,
      stepLabel: "Manual Quality Auditing Systems",
      content: [
        "Manual QA tools used to review conversations",
        "Experienced inefficiencies in traditional call center QA",
      ],
    },
    {
      year: 2023,
      stepLabel: "Quality Management System",
      content: [
        "Built a simple multilingual QA system allowing sound uploads",
        "Could review only 2-5% of support conversations manually",
        "It emphasized the importance of AI-powered call review tools",
      ],
    },
    {
      year: 2024,
      stepLabel: "Convoze Speech Analytics",
      content: [
        "Integrated real-time speech-to-text and emotion detection",
        "Added call summaries, silence indicators, and talk ratio",
        "Established the basis of the speech analytics application and AI call evaluation",
      ],
    },
    {
      year: 2025,
      stepLabel: "Convoze Conversational Analytics",
      content: [
        "Automatic call-reviewing increased to 100%",
        "AI coaching reports are customized and provided to agents",
        "Grew to be a complete conversation analytics platform",
        "Extended support to emails and chats for full omnichannel quality monitoring",
      ],
    },
  ];

  const controls = useAnimation();
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isLocked) {
          setIsLocked(true);
          document.body.style.overflow = "hidden"; // lock scrolling

          // Play animation
          controls
            .start({
              strokeDashoffset: 0,
              transition: { duration: 3, ease: "easeInOut" },
            })
            .then(() => {
              document.body.style.overflow = "auto"; // unlock scrolling
              setIsLocked(false);
            });
        }
      },
      { threshold: 0.5 } // when 50% of section is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [controls, isLocked]);

  // Framer Motion scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"], // start when top hits top, end when bottom hits top
  });
  // Transform scroll progress to timeline progress
  const lineProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Listen to scroll progress changes
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const progress = Math.max(0, Math.min(1, latest));
    const newActiveStep = Math.floor(progress * data.length);
    const clampedStep = Math.min(newActiveStep, data.length - 1);

    setActiveStep(clampedStep);

    // Add current step to visible steps (once visible, stays visible)
    setVisibleSteps((prev) => {
      const newSet = new Set(prev);
      // Only add the current active step (one by one progression)
      newSet.add(clampedStep);
      return newSet;
    });

    // Check if timeline is complete
    const complete = progress >= 0.95; // 95% completion threshold
    setIsTimelineComplete(complete);

    // When complete, show all steps
    if (complete) {
      setVisibleSteps(new Set(data.map((_, i) => i)));
    }
  });

  // Handle scroll locking when timeline is not complete

  // useEffect(() => {
  //   const handleScroll = (e) => {
  //     if (!timelineRef.current || isTimelineComplete) return;

  //     const timelineRect = timelineRef.current.getBoundingClientRect();
  //     const timelineTop = timelineRect.top;
  //     const timelineBottom = timelineRect.bottom;
  //     const windowHeight = window.innerHeight;
  //     const scrollingDown = e.deltaY > 0;

  //     // If user tries to scroll past the timeline before completion
  //     if (scrollingDown && timelineTop < -100 && !isTimelineComplete) {
  //       e.preventDefault();
  //       // Keep the timeline in view
  //       timelineRef.current.scrollIntoView({
  //         behavior: "smooth",
  //         block: "center",
  //       });
  //     }

  //     // If user tries to scroll up past the timeline start
  //     if (!scrollingDown && timelineBottom > windowHeight + 100) {
  //       e.preventDefault();
  //       timelineRef.current.scrollIntoView({
  //         behavior: "smooth",
  //         block: "start",
  //       });
  //     }
  //   };

  //   // Only add scroll lock when timeline is not complete
  //   if (!isTimelineComplete) {
  //     window.addEventListener("wheel", handleScroll, { passive: false });
  //     window.addEventListener("touchmove", handleScroll, { passive: false });
  //   }

  //   return () => {
  //     window.removeEventListener("wheel", handleScroll);
  //     window.removeEventListener("touchmove", handleScroll);
  //   };
  // }, [isTimelineComplete]);

  // // Update SVG circle position based on line progress
  useMotionValueEvent(lineProgress, "change", (latest) => {
    if (!pathRef.current || !circleRef.current) return;

    const pathLength = pathRef.current.getTotalLength();
    const point = pathRef.current.getPointAtLength(latest * pathLength);

    circleRef.current.setAttribute("cx", point.x);
    circleRef.current.setAttribute("cy", point.y);
  });

  // useEffect(() => {
  //   if (!pathRef.current) return;

  //   const pathLength = pathRef.current.getTotalLength();
  //   const totalSentences = data.reduce(
  //     (acc, step) => acc + step.content.length,
  //     0
  //   );
  //   const spacing = pathLength / (totalSentences + 1);

  //   let sentenceIndex = 1;
  //   const positions = [];

  //   data.forEach((step, stepIndex) => {
  //     step.content.forEach((sentence, sentenceIdx) => {
  //       const lengthAt = spacing * sentenceIndex;
  //       const point = pathRef.current.getPointAtLength(lengthAt);
  //       positions.push({
  //         x: point.x,
  //         y: point.y,
  //         sentence,
  //         stepIndex,
  //         sentenceIdx,
  //       });
  //       sentenceIndex++;
  //     });
  //   });

  //   setContentPositions(positions);
  // }, [data]);

  return (
    <motion.div
      ref={containerRef}
      className=" md:hidden relative h-[420vh]   bg-white"
    >
      {" "}
      {/* Sticky timeline */}
      <div className="absolute inset-0 z-0 overflow-hidden w-screen">
        <img
          src="/bgPattern.png"
          alt="Background Pattern"
          className="w-screen h-full object-cover w opacity-15  !z-0"
        />
      </div>
      <motion.div
        ref={timelineRef}
        className="sticky  top-0 left-0 w-full h-screen px-4 z-30 py-12 md:py-20 "
      >
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center ">
            <h2 className="text-2xl md:text-4xl font-bold pb-16 pt-8 text-gray-800">
              <span className="font-medium md:text-4xl text-xl">
                What Sets
              </span>

              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3F2AB2] to-[#B462CE] px-1">
                Convoze
              </span>

              <span className="font-medium md:text-4xl text-xl">
                {" "}Apart from Other Solutions
              </span>
            </h2>
          </div>
          <div ref={containerRef} className="relative  ">
            {/* Main timeline container */}
            <div className="relative h-[420px] md:h-[500px] -mt-12">
              <svg
                className="absolute inset-0 w-full h-full z-10 my-20 "
                viewBox="0 60 1000 1000"
                preserveAspectRatio="xMidYMid meet"
              >
                <defs>
                  <pattern
                    id="zigzagDots"
                    x="0"
                    y="0"
                    width="10"
                    height="10"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="5" cy="5" r="1.5" fill="#d1d5db" />
                  </pattern>
                  <pattern
                    id="activeZigzagDots"
                    x="0"
                    y="0"
                    width="10"
                    height="10"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="5" cy="5" r="1.5" fill="#9333ea" />
                  </pattern>
                </defs>

                {/* Static dotted path - now visible */}
                <path
                  d="M 25 0 L 25 1000"
                  stroke="#d1d5db"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="8,6"
                />

                {/* Animated path */}
                <motion.path
                  ref={pathRef}
                  d="M 25 0 L 25 1000"
                  stroke="#9333ea"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="8,6"
                  style={{
                    strokeDashoffset: useTransform(
                      lineProgress,
                      [0, 1],
                      [1000, 0]
                    ),
                  }}
                  transition={{ duration: 0.1, ease: "easeOut" }}
                />

                {/* Single moving circle indicator */}
                <motion.circle
                  ref={circleRef}
                  r="18"
                  fill="#9333ea"
                  style={{
                    filter: "drop-shadow(0 0 6px rgba(147, 51, 234, 0.8))",
                    scale: useTransform(scrollYProgress, [0, 0.85], [1, 1.2]),
                  }}
                  animate={{
                    scale: isTimelineComplete ? [1.2, 1.4, 1.2] : 1.2,
                  }}
                  transition={{
                    scale: isTimelineComplete
                      ? { duration: 0.8, repeat: Infinity, ease: "easeInOut" }
                      : { duration: 0.1 },
                  }}
                />

                {/* Completion celebration effect */}
                {isTimelineComplete && (
                  <motion.circle
                    cx={circleRef.current?.getAttribute("cx") || 25}
                    cy={circleRef.current?.getAttribute("cy") || 350}
                    r="0"
                    fill="rgba(147, 51, 234, 0.3)"
                    animate={{
                      r: [0, 50, 0],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                  />
                )}
              </svg>

              {/* Timeline step content cards */}
              {data.map((step, index) => {
                const isActive = activeStep === index;
                const isPast = activeStep > index;
                const isVisible = visibleSteps.has(index);

                const positions = [
                  { x: "50%", y: "20%" },
                  { x: "50%", y: "30%" },
                  { x: "50%", y: "40%" },
                  { x: "50%", y: "50%" },
                ];
                const position = positions[index];

                return (
                  <div
                    key={index}
                    className="absolute z-20 scale-80  ml-4"
                    style={{
                      left: position.x,
                      top: position.y,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    {/* Step indicator dot - HIDDEN */}
                    <motion.div
                      className="w-4 h-4 rounded-full  z-30 opacity-0"
                      style={{ visibility: "hidden" }}
                    />

                    {/* Content card - stays visible once shown */}
                    <motion.div
                      className={`
                        absolute left-0 transform -translate-x-1/4
                        md:w-80 w-[60vw] ml-[.01vw] z-30
                      `}
                      initial={{
                        opacity: 0,
                        y: index % 2 === 0 ? 20 : -20,
                        scale: 0.8,
                      }}
                      animate={{
                        opacity: isActive ? 1 : 0,
                        scale: isActive ? 1 : 0,
                        y: 0,
                        filter: "blur(0px)",
                      }}
                      transition={{
                        duration: 0.2,
                        ease: "easeOut",
                      }}
                      style={{ willChange: "filter, opacity, transform" }}
                    >
                      <motion.div
                        className={`
                          bg-white rounded-lg p-4 shadow-xl border-2 transition-all duration-200
                          ${isPast
                            ? " bg-gradient-to-r from-[#C068D1] to-[#3224AF] border-purple-600"
                            : "border-purple-600 bg-gradient-to-r from-[#C068D1] to-[#3224AF]"
                          }
                        `}
                        animate={{
                          scale: 1.05,
                          borderColor: "#9333ea",
                        }}
                        transition={{ duration: 0.15 }}
                      >
                        <div className="font-semibold mb-2 text-purple-100">
                          <span className="text-xl font-bold">{step.year}</span>
                          {" - "}
                          {step.stepLabel}
                        </div>
                        <p className="text-xs leading-relaxed transition-1 text-white">
                          {step.content.map((point, idx) => (
                            <span key={idx}>{point}</span>
                          ))}
                        </p>

                        {/* Completed indicator */}
                        <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#9333ea] rounded-full flex items-center justify-center">
                          <svg
                            className="w-2 h-2 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Progress indicator */}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TimelineJourneyMobile;
