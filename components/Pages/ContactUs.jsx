"use client";
import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Script from "next/script";

const ContactUs = ({ isCards = true, bg }) => {
  return (
    <div
      className={`${
        bg == "dark"
          ? "bg-gradient-to-tl to-[#21082b] from-[#27022e]"
          : "bg-slate-200"
      } py-12 md:py-24 -mt-16 relative`}
      id="contact-us"
    >
      {/* Background Pattern */}
      {bg !== "dark" && (
        <div className="absolute inset-0 z-0">
          <img
            src="/bgPattern.png"
            alt="Background Pattern"
            className="w-full h-full rotate-180 object-cover opacity-20"
          />
        </div>
      )}

      {/* Form Label Style Override */}
      <style jsx global>{`
        .form-label[for="kl-11-input"],
        .form-label[for="kl-21-input"],
        .form-label[for="kl-31-input"],
        .form-label[for="kl-41-input"],
        .form-label[for="kl-51-input"],
        .form-label[for="kl-61-input"],
        .form-label[for="kl-71-input"],
        .form-label[for="kl-81-input"],
        .form-label[for="kl-91-input"] {
          color: ${bg === "dark" ? "#fff !important" : "#000 !important"};
          font-weight: 400 !important;
        }
      `}</style>

      <div className="text-white max-w-7xl mx-auto px-4 pt-12 space-y-12">
        <h1 className="text-2xl md:text-4xl font-bold text-center text-white">
          <span className="bg-gradient-to-r relative from-[#C068D1] to-[#3224AF] text-transparent bg-clip-text">
            Need a custom Solution?
          </span>
        </h1>

        {/* Form */}
        <div className="flex justify-center items-center !rounded-3xl overflow-hidden relative px-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative w-full max-w-7xl"
          >
            <div className="flex justify-center bg-transparent p-8">
              <div
                id="kl__form-container"
                className="mx-auto w-full relative z-20 mt-8 !bg-transparent"
              ></div>
            </div>
            <Script
              src="https://assets.kylas.io/lead-capture-forms/lcf.min.js"
              strategy="afterInteractive"
              form-id="36a6e74c-b840-4b37-b993-6a89cdcb75fc"
            />
          </motion.div>
        </div>

        {/* Bottom Cards */}
        {isCards && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center mb-6">
            <div className="bg-gradient-to-br to-[#371d3e] from-[#3F2AB2] rounded-2xl p-4 border border-[#2a2a2a]">
              <div className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full text-xl">
                <Phone className="text-white w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
              <p className="text-xs text-neutral-200">( +971 ) 507861178</p>
            </div>

            <div className="bg-gradient-to-br to-[#371d3e] from-[#3F2AB2] rounded-2xl p-4 border border-[#2a2a2a]">
              <div className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full text-xl">
                <Mail className="text-white w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-xs text-neutral-200">
                sales@technotaskglobal.com
              </p>
            </div>

            <div className="bg-gradient-to-br to-[#371d3e] from-[#3F2AB2] rounded-2xl p-4 border border-[#2a2a2a]">
              <div className="bg-gradient-to-r from-[#c068d1d2] to-[#3224AF] w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full text-xl">
                <MapPin className="text-white w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p className="text-xs text-neutral-200">
                123 Ayodhya Bypass Road
                <br />
                Bhopal, India
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
