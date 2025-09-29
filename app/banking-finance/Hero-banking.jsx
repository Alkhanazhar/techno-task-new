"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Avatar images data
const avatars = [
  {
    id: 1,
    src: "https://api.dicebear.com/7.x/bottts/svg?seed=Felix",
    initialX: 10,
    initialY: 15,
  },
  {
    id: 2,
    src: "https://api.dicebear.com/7.x/bottts/svg?seed=Aneka",
    initialX: 85,
    initialY: 10,
  },
  {
    id: 3,
    src: "https://api.dicebear.com/7.x/bottts/svg?seed=Luna",
    initialX: 15,
    initialY: 40,
  },
  {
    id: 4,
    src: "https://api.dicebear.com/7.x/bottts/svg?seed=Max",
    initialX: 90,
    initialY: 30,
  },
  {
    id: 5,
    src: "https://api.dicebear.com/7.x/bottts/svg?seed=Charlie",
    initialX: 20,
    initialY: 70,
  },
  {
    id: 6,
    src: "https://api.dicebear.com/7.x/bottts/svg?seed=Buddy",
    initialX: 88,
    initialY: 65,
  },
  {
    id: 7,
    src: "https://api.dicebear.com/7.x/bottts/svg?seed=Oreo",
    initialX: 50,
    initialY: 8,
  },
  {
    id: 8,
    src: "https://api.dicebear.com/7.x/bottts/svg?seed=Milo",
    initialX: 92,
    initialY: 80,
  },
];

const FloatingAvatar = ({ avatar, mouseX, mouseY }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const avatarX = useSpring(0, { stiffness: 50, damping: 20 });
  const avatarY = useSpring(0, { stiffness: 50, damping: 20 });

  useEffect(() => {
    if (!isMounted) return;

    const updatePosition = () => {
      const x = mouseX.get();
      const y = mouseY.get();

      // Calculate parallax effect based on avatar's initial position
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const offsetX =
        ((avatar.initialX / 100) * window.innerWidth - centerX) / centerX;
      const offsetY =
        ((avatar.initialY / 100) * window.innerHeight - centerY) / centerY;

      // Move avatars in opposite direction of mouse (parallax effect)
      const moveX = (x - centerX) * offsetX * 0.05;
      const moveY = (y - centerY) * offsetY * 0.05;

      avatarX.set(moveX);
      avatarY.set(moveY);
    };

    const unsubscribeX = mouseX.on("change", updatePosition);
    const unsubscribeY = mouseY.on("change", updatePosition);

    return () => {
      unsubscribeX();
      unsubscribeY();
    };
  }, [mouseX, mouseY, avatar, avatarX, avatarY, isMounted]);

  return (
    <motion.div
      className="absolute pointer-events-none z-10 opacity-60"
      style={{
        left: `${avatar.initialX}%`,
        top: `${avatar.initialY}%`,
        x: avatarX,
        y: avatarY,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: avatar.id * 0.1,
        duration: 0.5,
        ease: "easeOut",
      }}
    >
      <motion.img
        src={avatar.src}
        alt={`Avatar ${avatar.id}`}
        className="w-12 h-12 sm:w-14 sm:h-14 md:w-12 md:h-12 rounded-full border-2 border-purple-400/30 shadow-lg"
        whileHover={{ scale: 1.2, rotate: 10 }}
        transition={{ duration: 0.3 }}
      />
      {/* Colored dots effect */}
      <motion.div
        className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-purple-400"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: avatar.id * 0.2,
        }}
      />
    </motion.div>
  );
};

export default function HeroSectionBanking() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="w-full min-h-screen bg-gradient-to-tl to-[#21082b] from-[#27022e] shadow-xl relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      transition={{ duration: 0.6 }}
    >
      {/* Floating Avatars */}
      {isMounted &&
        avatars.map((avatar) => (
          <FloatingAvatar
            key={avatar.id}
            avatar={avatar}
            mouseX={mouseX}
            mouseY={mouseY}
          />
        ))}

      {/* Animated particles/dots background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-100/90 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="w-full max-w-sm h-full xs:max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 relative z-20">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-12 xs:gap-8 sm:gap-10 md:gap-12 lg:gap-16 h-screen">
          {/* Left Side - Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl xs:text-4xl sm:text-4.5xl md:text-5xl lg:text-5xl font-bold text-white mb-2 xs:mb-3 sm:mb-5">
              Convoze for
            </h1>
            <h2 className="text-2xl xs:text-3xl sm:text-3.5xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-[#C068D1] to-[#3224AF] text-transparent bg-clip-text [-webkit-background-clip:text] [color:theme('colors.purple.400')] mb-2 xs:mb-3 sm:mb-4">
              BPO & Contact Centers
            </h2>
            <p className="text-gray-200 font-extralight text-sm xs:text-base sm:text-lg">
              Turning Every Conversation into Actionable Insight
            </p>
            <div className="mt-4 flex flex-col sm:flex-row gap-3 md:gap-6 justify-center lg:justify-start">
              <Link href="/contact">
                <button className="w-3/5 sm:w-auto bg-gradient-to-r from-[#C068D1] to-[#3224AF] text-sm cursor-pointer text-white border md:border-none border-purple-500 px-3 md:px-4 py-2 md:py-2 rounded-full font-medium hover:bg-black hover:text-white transition-all duration-300">
                  Book a Demo
                </button>
              </Link>
            </div>
          </div>

          {/* Right Side - Image */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Modern contact center with diverse agents working at desks with headsets, representing BPO operations"
              className="w-full max-w-[300px] xs:max-w-[350px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px] h-auto rounded-lg shadow-lg object-cover"
              loading="lazy"
              whileHover={{
                scale: 1.05,
                rotate: 2,
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
