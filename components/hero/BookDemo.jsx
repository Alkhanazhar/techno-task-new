const BookDemo = () => {
  return (
    <section className="bg-white md:py-32 sm:min-h-screen  items-center flex py-16 border border-red-600 md:px-8 px-3 relative">
      <div className="absolute inset-0 z-0">
        <img
          src="/bgPattern.png"
          alt="Background Pattern"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="max-w-6xl w-full mx-auto border border-white/10 bg-gradient-to-br  to-[#371d3e] from-[#3F2AB2] rounded-2xl text-center px-6 md:py-24 py-8 shadow-lg relative overflow-hidden">
        {/* Gradient Lighting Effects */}
        <div className="absolute top-0 left-0 w-60 h-60 bg-[#3F2AB2] blur-[120px] opacity-30 rounded-full -z-10"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-purple-700 blur-[120px] opacity-30 rounded-full -z-10"></div>

        {/* Heading */}
        <h2 className="text-neutral-300 text-xl md:text-4xl font-light md:leading-snug">
          <span className="font-semibold text-white">Don’t miss</span> what your
          customers <br className="hidden md:block" />
          are really saying
        </h2>

        {/* Button */}
        <div className="md:mt-10 mt-5">
          <a href="#contact-us">
            <button className="px-6 py-2 rounded-full  text-white font-medium text-xs md:text-base bg-gradient-to-r from-[#a855f7] to-[#6366f1] hover:from-[#9333ea] hover:to-[#3b82f6] transition-all duration-300">
              Book A Free Demo
            </button>
          </a>
        </div>

        {/* Subtext */}
        <p className="mt-5 md:mt-10 text-xs md:text-sm text-gray-100">
          Includes a free call audit + personalized ROI report
        </p>
      </div>
    </section>
  );
};

export default BookDemo;
