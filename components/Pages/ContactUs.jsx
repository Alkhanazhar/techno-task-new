"use client";
import React from "react";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import Script from "next/script";

const ContactUs = ({ isCards = true }) => {
  return (
    <div className="bg-gradient-to-tl to-[#21082b] from-[#27022e] mb-8" id="contact-us">
      <div className="text-white max-w-7xl mx-auto px-4 md:px-16 pt-12 space-y-12">
        <h1 className="text-2xl md:text-4xl font-bold text-center text-white">
          <span className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] text-transparent bg-clip-text">
            Need a custom Solution?
          </span>
        </h1>
        {/* Top Section: Centered Form */}
        <div className="flex justify-center items-center rounded-3xl relative px-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="backdrop-blur-sm rounded-lg relative w-full max-w-4xl"
          >
            <div className="flex justify-center items-center px-1 bg-gradient-to-tl to-[#21082b] from-[#27022e]">
              <div
                id="kl__form-container"
                className="mx-auto w-full bg-gradient-to-tl to-[#21082b] from-[#27022e] px-4 zoom-out z-20 mt-8"
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
            {/* Contact Us */}
            <div className="bg-gradient-to-br to-[#371d3e] from-[#3F2AB2] rounded-2xl p-4 border border-[#2a2a2a]">
              <div className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full text-xl">
                <Phone className="text-white w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
              <p className="text-xs text-neutral-200">
                ( +971 ) 507861178

              </p>
            </div>

            {/* Email Us */}
            <div className="bg-gradient-to-br to-[#371d3e] from-[#3F2AB2] rounded-2xl p-4 border border-[#2a2a2a]">
              <div className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full text-xl">
                <Mail className="text-white w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-xs text-neutral-200">
                sales@technotaskglobal.com

              </p>
            </div>

            {/* Working Hours */}
            {/* <div className="bg-gradient-to-br to-[#371d3e] from-[#3F2AB2] rounded-2xl p-4 border border-[#2a2a2a]">
              <div className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full text-xl">
                <Clock className="text-white w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Working Hours</h3>
              <p className="text-xs text-neutral-200">
                Mon - Fri : 08AM - 10PM
                <br />
                Sat - Sun : Closed
              </p>
            </div> */}

            {/* Location */}
            <div className="bg-gradient-to-br to-[#371d3e] from-[#3F2AB2] rounded-2xl p-4 border border-[#2a2a2a]">
              <div className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full text-xl">
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