"use client";
import React from "react";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { SparklesCore } from "../ui/sparkles";
import { motion } from "framer-motion";

const ContactUs = ({ isCards = true }) => {
  return (
    <div className="bg-gradient-to-tl to-[#21082b] from-[#27022e]">
      <div className=" text-white max-w-7xl mx-auto px-4 md:px-16 py-12 space-y-12">
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
            className="space-y-4 border border-neutral-400/50 bg-gray-200/90  backdrop-blur-sm  p-5 rounded-lg relative"
          >
            <h2 className="text-2xl relative md:text-4xl font-semibold  bg-gradient-to-r to-[#B462CE] from-[#3F2AB2] text-transparent bg-clip-text">
              Contact Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative">
              <input
                type="text"
                placeholder="First Name"
                className="bg-gray-200 text-black border border-neutral-400 px-4 md:py-3 py-2  rounded-lg  placeholder:text-neutral-600 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="bg-gray-200  text-black  border border-neutral-400 px-4 md:py-3 py-2 rounded-lg placeholder:text-neutral-600"
              />
              <input
                required
                type="text"
                placeholder="Phone No."
                className="bg-gray-200  text-black  border border-neutral-400 px-4 md:py-3 py-2 rounded-lg placeholder:text-neutral-600"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="bg-gray-200  text-black border border-neutral-400 px-4 md:py-3 py-2 rounded-lg placeholder:text-neutral-600"
              />
            </div>
            <textarea
              rows="4"
              placeholder="Write Message..."
              className="w-full bg-gray-200  text-black border border-neutral-400 px-4 py-3 rounded-lg resize-none placeholder:text-neutral-600"
            ></textarea>
            <button className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] py-2 px-4 cursor-pointer rounded-full text-xs md:text-sm text-white font-semibold hover:opacity-90 transition-all">
              Submit Now
            </button>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {/* Contact Us */}
            <div className="bg-[#0A0A0A] rounded-2xl p-6 border border-[#2a2a2a]">
              <div className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full text-xl">
                <Phone className="text-white w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
              <p className="text-sm">
                (+00) 123-254-963
                <br />
                (+12) 761 852 339
              </p>
            </div>

            {/* Email Us */}
            <div className="bg-[#0A0A0A] rounded-2xl p-6 border border-[#2a2a2a]">
              <div className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full text-xl">
                <Mail className="text-white w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-sm">
                info@domainname.com
                <br />
                support@domain.com
              </p>
            </div>

            {/* Working Hours */}
            <div className="bg-[#0A0A0A] rounded-2xl p-6 border border-[#2a2a2a]">
              <div className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full text-xl">
                <Clock className="text-white w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Working Hours</h3>
              <p className="text-sm">
                Mon - Fri : 08AM - 10PM
                <br />
                Sat - Sun : Closed
              </p>
            </div>

            {/* Location */}
            <div className="bg-[#0A0A0A] rounded-2xl p-6 border border-[#2a2a2a]">
              <div className="bg-gradient-to-r from-[#C068D1] to-[#3224AF] w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full text-xl">
                <MapPin className="text-white w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p className="text-sm">
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
