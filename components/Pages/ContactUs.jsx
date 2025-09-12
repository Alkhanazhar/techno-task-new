"use client";
import React from "react";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { SparklesCore } from "../ui/sparkles";
import { motion } from "framer-motion";
import Script from "next/script";

const ContactUs = ({ isCards = true }) => {
  return (
    <div className="bg-gradient-to-tl to-[#21082b] from-[#27022e]">
      <div className=" text-white max-w-7xl mx-auto px-4 md:px-16 pt-12 space-y-12">
        <h1 className="text-2xl md:text-4xl  font-bold text-center text-white">
          <span className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] text-transparent bg-clip-text">
            Need a custom Solution?
          </span>
        </h1>
        {/* Top Section: Form + Map */}
        <div className="grid md:grid-cols-2 gap-8 rounded-3xl relative">
          {/* <SparklesCore /> */}
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            // className="flex w-full gap-2"
            className=" backdrop-blur-sm  rounded-lg relative"
          >
             <div className="flex justify-center items-center px-4 bg-gradient-to-tl to-[#21082b] from-[#27022e]">
                    <div
                      id="kl__form-container"
                      className="mx-auto w-full  bg-gradient-to-tl to-[#21082b] from-[#27022e]  px-4 zoom-out z-20 mt-8"
                    ></div>
                  </div>
                  <Script
                    src="https://assets.kylas.io/lead-capture-forms/lcf.min.js"
                    strategy="afterInteractive"
                    form-id="36a6e74c-b840-4b37-b993-6a89cdcb75fc"
                  />
          </motion.div>

          {/* Map */}
          <div className="rounded-lg overflow-hidden h-[420px]">
            <iframe
              title="Google Map"
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29323.189231278346!2d77.3557622344015!3d23.264960032742486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c6808be9f02a7%3A0x8c119eced013a478!2sKohefiza%2C%20Bhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1753698557406!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Bottom Cards */}
        {isCards && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center mb-6">
            {/* Contact Us */}
            <div className="bg-gradient-to-br  to-[#371d3e] from-[#3F2AB2] rounded-2xl p-4 border border-[#2a2a2a]">
              <div className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full text-xl">
                <Phone className="text-white w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
              <p className="text-xs text-neutral-200">
                (+00) 123-254-963
                <br />
                (+12) 761 852 339
              </p>
            </div>

            {/* Email Us */}
            <div className="bg-gradient-to-br  to-[#371d3e] from-[#3F2AB2] rounded-2xl p-4 border border-[#2a2a2a]">
              <div className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full text-xl">
                <Mail className="text-white w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-xs text-neutral-200">
                info@domainname.com
                <br />
                support@domain.com
              </p>
            </div>

            {/* Working Hours */}
            <div className="bg-gradient-to-br  to-[#371d3e] from-[#3F2AB2] rounded-2xl p-4 border border-[#2a2a2a]">
              <div className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full text-xl">
                <Clock className="text-white w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Working Hours</h3>
              <p className="text-xs text-neutral-200">
                Mon - Fri : 08AM - 10PM
                <br />
                Sat - Sun : Closed
              </p>
            </div>

            {/* Location */}
            <div className="bg-gradient-to-br  to-[#371d3e] from-[#3F2AB2] rounded-2xl p-4 border border-[#2a2a2a]">
              <div className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full text-xl">
                <MapPin className="text-white w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p className="text-xs text-neutral-200">
                2715 Ash San Jose, USA
                <br />
                2715 Ash San Jose, USA
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
