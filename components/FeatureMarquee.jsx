import React from "react";
import { Marquee } from "./ui/marquee";

const FeatureMarquee = ({ features }) => {
  return (
    <div className="relative flex w-full rounded-3xl bg-transparent flex-col items-center justify-center overflow-hidden">
      <Marquee className="py-4" pauseOnHover>
        {features?.map((feature, index) => (
          <div
            key={index}
            className="p-2 border-black/15 relative hover:scale-105 transition-all duration-300 -mx-1 shadow rounded border bg-white/10"
          >
            <div className="group relative !z-20 w-72 rounded overflow-hidden transform">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover w-84 bg-center"
                style={{
                  backgroundImage: `url(${feature?.image})`,
                }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/50" />
              {/* Content */}
              <div className="relative p-2 h-full flex flex-col justify-end min-h-[320px] md:min-h-[360px]">
                <span className="from-primary/0 via-primary to-primary/0 absolute -bottom-px left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r opacity-60"></span>
                <span className="absolute inset-0 bg-[radial-gradient(30%_5%_at_50%_100%,hsl(var(--primary)/0.15)_0%,transparent_100%)] opacity-60"></span>

                <div className="relative rounded-b px-4 py-2 overflow-hidden backdrop-blur-[2px] bg-gradient-to-b from-black/30 to-black/60 rounded">
                  {/* <div className="absolute inset-0 backdrop-blur-[4px] bg-gradient-to-b from-black/10 to-black/20 rounded" /> */}
                  <div className="text-white text-sm relative">
                    <h2 className="mb-1.5 text-base md:text-xl text-start">
                      {feature?.title}
                    </h2>
                    <p className="text-gray-50 text-sm font-[200] text-pretty">
                      {feature?.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <span className="from-blue-500/10 via-purple-600 to-blue-600/10 absolute -bottom-px left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r opacity-60"></span>
            <span className="absolute inset-0 bg-[radial-gradient(30%_5%_at_50%_100%,hsl(240,100%,50%/0.15)_0%,transparent_100%)] opacity-60"></span>
          </div>
        ))}
      </Marquee>
      <div className="from-white pointer-events-none absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r"></div>
      <div className="from-white pointer-events-none absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l"></div>
    </div>
  );
};

export default FeatureMarquee;
