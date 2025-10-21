"use client";
import { ColorText } from "@/app/ecommerce-d2c/EcommerceD2c";
import { useRouter } from "next/navigation";
import React from "react";

const Footer = () => {
  const router = useRouter();

  return (
    <footer className="bg-[#0A0A0A] border-t   border-white/10 text-white py-10 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Top CTA Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-white/10 pb-10 relative z-10">
          <div>
            <h2 className="text-2xl md:text-4xl font-light mb-2">
              Let’s work{" "}
              <span className="font-semibold bg-gradient-to-r from-[#C068D1] to-[#3224AF] text-transparent bg-clip-text">
                together!
              </span>
            </h2>
            <p className="text-xs md:text-base text-white/50 font-light max-w-xl">
              Partner with us to create intelligent, impactful, and future-ready
              AI solutions together.
            </p>
          </div>
          <button
            onClick={() => router.push("/contact")}
            className="bg-gradient-to-r from-[#C068D1] cursor-pointer to-[#3224AF] text-white text-xs md:text-sm font-medium px-5 py-2.5 rounded-full shadow-md hover:scale-105 transition"
          >
            Let’s Work Together
          </button>
        </div>

        {/* Middle Info Section */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10 border-b border-white/10 pb-10 relative z-10">
          {/* Logo + Brand */}
          <div className="flex items-start space-x-4">
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => router.push("/")}
            >
              <img src="/logo.png" alt="logo" className="md:h-9 h-6" />
            </div>
            {/* <div>
              <h3 className="text-lg md:text-xl font-bold">Convoze</h3>
              <p className="text-[10px] md:text-xs text-white/60 mt-1">AI Speech Analytics Platform</p>
            </div> */}
          </div>

          {/* Get In Touch */}
          <div>
            <h4 className="font-semibold mb-2 text-sm md:text-base">
              Get In Touch
            </h4>
            <p className="text-xs md:text-sm text-white/70">
              ( +971 ) 507861178
            </p>
            <p className="text-xs md:text-sm text-white/70">
              sales@technotaskglobal.com
            </p>
          </div>

          {/* Location */}
          {/* <div>
            <h4 className="font-semibold mb-2 text-sm md:text-base">
              Locations
            </h4>
            <main className="text-xs text-neutral-200 justify-start flex items-center gap-2">
              <img
                src="https://flagcdn.com/in.svg"
                alt="India Flag"
                className="w-9  shadow-xl"
              />
              <img
                src="https://flagcdn.com/ae.svg"
                alt="UAE Flag"
                className="w-12 shadow-xl"
              />
            </main>
          </div> */}
        </div>

        {/* Copyright */}
        <div className="text-center text-[10px] md:text-xs text-white/50 mt-6 relative z-10">
          Copyright © 2025 All Rights Reserved.
        </div>
      </div>
      <h1 className="text-[15vw] absolute left-1/2 -translate-x-1/2 -bottom-24  bg-gradient-to-r from-purple-600/5 to-blue-600/10 text-transparent bg-clip-text font-bold leading-none  text-center w-fit">
        Convoze
      </h1>
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-purple-900 opacity-30 !blur-2xl rounded-full  -z-0" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-indigo-900 opacity-30 !blur-2xl rounded-full -z-0" />
    </footer>
  );
};

export default Footer;
