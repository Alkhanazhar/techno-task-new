import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import Slider from "react-slick";

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="!absolute !right-6 !top-1/2 -translate-y-1/2 z-10 bg-purple-700 text-white p-2 rounded-full hover:bg-purple-800 transition-all duration-300"
    >
      <ChevronRight className="w-6 h-6" />
    </button>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="!absolute !left-6 !top-1/2 -translate-y-1/2 z-10 bg-purple-700 text-white p-2 rounded-full hover:bg-purple-800 transition-all duration-300"
    >
      <ChevronLeft className="w-6 h-6" />
    </button>
  );
};

const InfiniteCarousel = ({ items }) => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    pauseOnHover: true,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 800, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="relative py-8 ">
      <Slider {...settings}>
        {[...items, ...items].map((item, index) => (
          <div key={index} className="p-3">
            <div className="group relative !z-20 rounded-3xl overflow-hidden hover:scale-105 transform transition-all duration-300">
              {/* Background Image */}
              <div
                className="absolute inset-0   bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20" />

              {/* Content */}
              <div className="relative p-2 h-full flex flex-col justify-end min-h-[360px] md:min-h-[360px]">
                <div className="relative rounded-b px-4 py-2 overflow-hidden">
                  <div className="absolute inset-0 backdrop-blur-[2px] bg-gradient-to-b from-black/30 to-black/60 rounded-3xl" />
                  <div className="text-white/80 text-center relative text-sm md:text-[15px] mb-1">
                    {item.title}
                  </div>
                  <div className="text-purple-400 text-3xl font-bold mb-1 relative">
                    {item.value}
                  </div>
                  <div className="text-gray-200 text-sm font-thin relative">
                    {item.description}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="from-white pointer-events-none absolute inset-y-0 left-0 w-1/12 bg-gradient-to-r"></div>
      <div className="from-white pointer-events-none absolute inset-y-0 right-0 w-1/12 bg-gradient-to-l"></div>
    </div>
  );
};

export default InfiniteCarousel;
