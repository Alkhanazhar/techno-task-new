"use client";

import { useRouter } from "next/navigation";
import React from "react";

const links = [
  { name: "BPO & Contact Centers", route: "/bpo-contact-centers" },
  { name: "Banking & Finance", route: "/banking-finance" },
  { name: "Saas & Tech", route: "/saas-tech" },
  { name: "Healthcare and Insurance", route: "/healthcare-insurance" },
  { name: "E-commerce and D2C", route: "/ecommerce-d2c" },
];

const menuItems = [
  { name: "Home", route: "/" },
  { name: "Features", route: "/features" },
  { name: "Solutions", route: "/solutions" }, // overriding since footer shouldn't open megamenu
  { name: "Pricing", route: "/pricing" },
  { name: "Contact Us", route: "/contact" },
];

const policyLinks = [
  { name: "Terms & Conditions", route: "/terms" },
  { name: "Privacy Policy", route: "/privacy" },
  { name: "Cookie Policy", route: "/cookies" },
  { name: "Security", route: "/security" },
];

const Footer = () => {
  const router = useRouter();

  return (
    <footer className="bg-[#0A0A0A] text-white py-12 px-6 relative overflow-hidden">
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
              AI solutions.
            </p>
          </div>

          <button
            onClick={() => router.push("/contact")}
            className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] text-white text-xs md:text-sm font-medium px-5 py-2.5 rounded-full shadow-md hover:scale-105 transition"
          >
            Let’s Work Together
          </button>
        </div>

        {/* Middle Section */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-white/10 pb-10 relative z-10">
          {/* Logo */}
          <div>
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => router.push("/")}
            >
              <img src="/logo.png" alt="logo" className="md:h-9 h-6" />
            </div>
            <p className="text-xs text-white/50 mt-3">
              AI-powered solutions for the future of business automation.
            </p>
          </div>

          {/* Menu Items */}
          <div>
            <h4 className="font-semibold mb-2 text-sm md:text-base">Explore</h4>
            <ul className="space-y-2 text-xs md:text-sm text-white/70">
              {menuItems.map((item) => (
                <li
                  key={item.name}
                  onClick={() => router.push(item.route)}
                  className="cursor-pointer hover:text-white transition"
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div>
            <h4 className="font-semibold mb-2 text-sm md:text-base">
              Solutions
            </h4>
            <ul className="space-y-2 text-xs md:text-sm text-white/70">
              {links.map((item) => (
                <li
                  key={item.name}
                  onClick={() => router.push(item.route)}
                  className="cursor-pointer hover:text-white transition"
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Get In Touch */}
          <div>
            <h4 className="font-semibold mb-2 text-sm md:text-base">
              Get In Touch
            </h4>
            <p className="text-xs md:text-sm text-white/70">(+971) 507861178</p>
            <p className="text-xs md:text-sm text-white/70">
              sales@technotaskglobal.com
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-6 relative z-10">
          <p className="text-[10px] md:text-xs text-white/50">
            Copyright © {new Date().getFullYear()} All Rights Reserved.
          </p>

          {/* Policy Links */}
          <div className="flex items-center gap-4 text-[10px] md:text-xs text-white/70 flex-wrap">
            {policyLinks.map((item) => (
              <span
                key={item.name}
                onClick={() => router.push(item.route)}
                className="cursor-pointer hover:text-white transition"
              >
                {item.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Background Branding Text */}
      <h1 className="text-[18vw] absolute left-1/2 -translate-x-1/2 top-1/2 bg-gradient-to-r from-purple-600/5 to-blue-600/5 text-transparent bg-clip-text font-bold leading-none text-center w-fit pointer-events-none">
        Convoze
      </h1>

      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-purple-900 opacity-30 blur-2xl rounded-full -z-0" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-indigo-900 opacity-30 blur-2xl rounded-full -z-0" />
    </footer>
  );
};

export default Footer;
