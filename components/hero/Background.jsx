// components/BlurredSections.jsx
"use client";

import { useEffect, useState } from "react";

export default function BlurredSections() {
  const [positions, setPositions] = useState([]);

  // Generate random positions for each section
  useEffect(() => {
    const generateRandomPositions = () =>
      Array.from({ length: 5 }, () => ({
        top: `${Math.random() * 80}%`,
        left: `${Math.random() * 80}%`,
      }));
    setPositions(generateRandomPositions());
  }, []);

  return (
    <div className="-z-10">
      {Array.from({ length: 5 }).map((_, index) => (
        <section
          key={index}
          className="relative w-full h-screen flex items-center justify-center overflow-hidden"
        >
          <div
            className="absolute w-[500px] h-[500px] rounded-full opacity-50 blur-3xl"
            style={{
              background: `radial-gradient(circle, rgba(59, 130, 246, 0.5), rgba(147, 51, 234, 0.5))`,
              top: positions[index]?.top,
              left: positions[index]?.left,
            }}
          ></div>
        </section>
      ))}
    </div>
  );
}
