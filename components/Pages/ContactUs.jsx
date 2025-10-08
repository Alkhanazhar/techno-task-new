"use client";
import React, { useEffect, useState } from "react";
import { Phone, Mail, MapPin, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

const ContactUs = ({ isCards = true, bg }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setScriptLoaded(false);

    // Clean up existing form container
    const container = document.getElementById("kl__form-container");
    if (container) {
      container.innerHTML = "";
    }

    // Remove existing script if present
    const existingScript = document.querySelector(
      'script[src="https://assets.kylas.io/lead-capture-forms/lcf.min.js"]'
    );
    if (existingScript) {
      existingScript.remove();
    }

    // Load the script
    const script = document.createElement("script");
    script.src = "https://assets.kylas.io/lead-capture-forms/lcf.min.js";
    script.setAttribute("form-id", "36a6e74c-b840-4b37-b993-6a89cdcb75fc");
    script.async = true;

    script.onload = () => {
      setScriptLoaded(true);
      // Wait a bit for the form to render
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    };

    script.onerror = () => {
      console.error("Failed to load Kylas form script");
      setIsLoading(false);
    };

    document.body.appendChild(script);

    return () => {
      // Cleanup on unmount
      if (script.parentNode) {
        script.remove();
      }
      if (container) {
        container.innerHTML = "";
      }
    };
  }, []);

  return (
    <div
      className={`${
        bg == "dark"
          ? "bg-gradient-to-tl to-[#21082b] from-[#27022e]"
          : "bg-slate-200"
      } py-12 md:py-20 min-h-screen -mt-16 relative`}
      id="contact-us"
    >
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

      <div className="text-white max-w-7xl mx-auto px-4 pt-12 space-y-8">
        <h1 className="text-2xl md:text-4xl font-bold text-center text-white">
          <span className="bg-gradient-to-r relative from-[#C068D1] to-[#3224AF] text-transparent bg-clip-text">
            Need a custom Solution?
          </span>
        </h1>

        {/* Form */}
        <div className="flex justify-center items-center  overflow-hidden relative md:px-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative w-full max-w-7xl"
          >
            <div
              className={`flex justify-center bg-transparent ${
                !isCards && "sm:p-8"
              } relative min-h-[400px]`}
            >
              {/* Loader */}
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center z-30">
                  <div className="flex flex-col items-center gap-4">
                    <Loader2 className="w-12 h-12 text-[#C068D1] animate-spin" />
                    <p className="text-white text-sm">Loading form...</p>
                  </div>
                </div>
              )}

              {/* Form Container */}
              <div
                id="kl__form-container"
                className={`mx-auto w-full relative z-20 !bg-transparent  transition-opacity duration-300 ${
                  isLoading ? "opacity-0" : "opacity-100"
                }`}
              ></div>
            </div>
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
              <main className="text-xs text-neutral-200 justify-center flex items-center gap-2">
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
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
