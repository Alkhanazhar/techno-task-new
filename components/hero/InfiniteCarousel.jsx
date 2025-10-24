// "use client";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import React from "react";
// import Slider from "react-slick";

// const NextArrow = (props) => {
//   const { onClick } = props;
//   return (
//     <button
//       onClick={onClick}
//       className="!absolute !right-8 shadow-2xl !top-1/2 -translate-y-1/2 z-10 bg-gradient-to-l from-purple-600 to-blue-600 text-white p-2 rounded-full hover:bg-purple-800 transition-all duration-300"
//     >
//       <ChevronRight className="w-6 h-6" />
//     </button>
//   );
// };

// const PrevArrow = (props) => {
//   const { onClick } = props;
//   return (
//     <button
//       onClick={onClick}
//       className="!absolute !left-8 !top-1/2 shadow-2xl  -translate-y-1/2 z-10 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-2 rounded-full hover:bg-purple-800 transition-all duration-300"
//     >
//       <ChevronLeft className="w-6 h-6" />
//     </button>
//   );
// };

// const InfiniteCarousel = ({ items }) => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     autoplay: true,
//     autoplaySpeed: 2000,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     pauseOnHover: true,
//     speed: 500,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//     responsive: [
//       { breakpoint: 1024, settings: { slidesToShow: 3 } },
//       { breakpoint: 800, settings: { slidesToShow: 2 } },
//       { breakpoint: 640, settings: { slidesToShow: 1 } },
//     ],
//   };

//   return (
//     <div className="relative py-8">
//       <Slider {...settings}>
//         {[...items, ...items].map((item, index) => (
//           <div key={index} className="p-3">
//             <div className="group relative !z-20 rounded-3xl overflow-hidden hover:scale-105 transform transition-all duration-300">
//               {/* Background Image */}
//               <div
//                 className="absolute inset-0   bg-cover bg-center"
//                 style={{ backgroundImage: `url(${item.image})` }}
//               />

//               {/* Overlay */}
//               <div className="absolute inset-0 from-black/0 to-black/40 bg-gradient-to-b" />

//               {/* Content */}
//               <div className="relative p-2 h-full flex flex-col justify-end min-h-[360px] md:min-h-[360px]">
//                 <div className="relative rounded-b px-4 py-3 overflow-hidden">
//                   <div className="absolute inset-0 backdrop-blur-[2px] bg-gradient-to-b from-black/30 to-black/60 rounded-3xl !border-[.1px] border-white/5" />
//                   <div className="text-white/80 text-center relative text-sm md:text-[15px] mb-1">
//                     {item.title}
//                   </div>
//                   <div className="text-purple-400 text-3xl font-bold mb-1 relative">
//                     {item.value}
//                   </div>
//                   <div className="text-gray-200 text-sm font-thin relative">
//                     {item.description}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//       <div className="from-white pointer-events-none absolute inset-y-0 left-0 w-[4%] bg-gradient-to-r"></div>
//       <div className="from-white pointer-events-none absolute inset-y-0 right-0 w-[4%] bg-gradient-to-l"></div>
//     </div>
//   );
// };

// export default InfiniteCarousel;

"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="!absolute !right-4 sm:!right-6 md:!right-8 shadow-2xl !top-1/2 -translate-y-1/2 z-10 bg-gradient-to-l from-purple-600 to-blue-600 text-white p-1 sm:p-2 rounded-full hover:bg-purple-800 transition-all duration-300"
    >
      <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
    </button>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="!absolute !left-4 sm:!left-6 md:!left-8 !top-1/2 shadow-2xl -translate-y-1/2 z-10 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-1 sm:p-2 rounded-full hover:bg-purple-800 transition-all duration-300"
    >
      <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
    </button>
  );
};

const InfiniteCarousel = ({ items }) => {
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  const [carouselSettings, setCarouselSettings] = useState({
    slidesToShow: 4,
    slidesToScroll: 1,
  });

  // Update screen width on resize
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call to set width

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Update carousel settings based on screen width
  useEffect(() => {
    let slidesToShow = 4;
    let slidesToScroll = 1;

    if (screenWidth <= 480) {
      slidesToShow = 1;
      slidesToScroll = 1;
    } else if (screenWidth <= 768) {
      slidesToShow = 2;
      slidesToScroll = 1;
    } else if (screenWidth <= 1024) {
      slidesToShow = 2;
      slidesToScroll = 1;
    } else if (screenWidth <= 1280) {
      slidesToShow = 3;
      slidesToScroll = 1;
    }

    setCarouselSettings({ slidesToShow, slidesToScroll });
  }, [screenWidth]);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    slidesToShow: carouselSettings.slidesToShow,
    slidesToScroll: carouselSettings.slidesToScroll,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className="relative py-4 sm:py-6 md:py-8 px-2 sm:px-4 md:px-6">
      <Slider {...settings}>
        {[...items, ...items].map((item, index) => (
          <div key={index} className="p-2 sm:p-3">
            <div className="group relative !z-20 rounded-2xl sm:rounded-3xl overflow-hidden hover:scale-105 transform transition-all duration-300">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 from-black/0 to-black/40 bg-gradient-to-b" />

              {/* Content */}
              <div className="relative p-3 sm:p-3 h-full flex flex-col justify-end min-h-[360px] sm:min-h-[380px] ">
                <div className="relative rounded-b sm:rounded-b-xl px-3 sm:px-4 py-2 sm:py-3 backdrop-blur-[2px] bg-gradient-to-b from-black/30 to-black/60 rounded-2xl sm:rounded-3xl overflow-hidden">
                  {/* <div className="absolute inset-0 backdrop-blur-[2px] bg-gradient-to-b from-black/30 to-black/60 rounded-2xl sm:rounded-3xl !border-[.1px] border-white/5" /> */}
                  <div className="text-white/80 text-center relative text-xs sm:text-sm md:text-[15px] mb-1">
                    {item.title}
                  </div>
                  <div className="text-purple-400 text-xl sm:text-2xl md:text-3xl font-bold mb-1 relative">
                    {item.value}
                  </div>
                  <div className="text-gray-200 text-xs sm:text-sm font-thin relative">
                    {item.description}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="from-white pointer-events-none absolute inset-y-0 left-0 w-[4%] sm:w-[6%] bg-gradient-to-r"></div>
      <div className="from-white pointer-events-none absolute inset-y-0 right-0 w-[4%] sm:w-[6%] bg-gradient-to-l"></div>
    </div>
  );
};

export default InfiniteCarousel;
