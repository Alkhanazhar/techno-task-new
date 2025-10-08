// "use client";

// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { X, Menu } from "lucide-react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const router = useRouter();

//   const [isMobile, setIsMobile] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768); // Tailwind's md breakpoint
//     };

//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };

//     handleResize(); // check initial size
//     window.addEventListener("resize", handleResize);
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);
//   const menuItems = [
//     { name: "Home", route: "/" },
//     { name: "Features", route: "/features" },
//     { name: "Solution", route: "/solution" },
//     { name: "Pricing", route: "/pricing" },
//     { name: "Use Cases", route: "/casestudy" },
//     { name: "Contact Us", route: "/contact" },
//      { name: "Test", route: "" },
//   ];

//   const handleNav = (route) => {
//     setIsOpen(false);
//     router.push(route);
//   };

//   return (
//     <div className="py-3">
//       {/* <nav
//         className={`w-full fixed -mt-3 py-3 px-4 z-50 md:px-10 flex items-center justify-between transition-all duration-300 ${
//           isScrolled && isMobile
//             ? "bg-[#1a1a1a]/60 backdrop-blur-md border-b border-white/10 shadow-sm"
//             : "bg-transparent"
//         }`}
//       > */}
//       <nav
//         className={`w-full fixed -mt-3 py-3 px-4 z-50 md:px-10 flex items-center justify-between transition-all duration-300 ${
//           isScrolled
//             ? "!bg-black/30 !backdrop-blur-md shadow-sm"
//             : "!bg-transparent"
//         }`}
//       >
//         <div
//           className="flex items-center gap-2 cursor-pointer"
//           onClick={() => router.push("/")}
//         >
//           <img src="/logo.png" alt="logo" className="md:h-9 h-6" />
//         </div>

//         <div className="hidden md:flex bg-[#1a1a1a]/60 backdrop-blur-sm border border-gray-50/10 rounded-full px-12 py-3 space-x-8 text-sm">
//           {menuItems.map((item) => (
//             <button
//               key={item.name}
//               onClick={() => router.push(item.route)}
//               className="text-white cursor-pointer hover:text-purple-400 transition-all duration-200"
//             >
//               {item.name}
//             </button>
//           ))}
//         </div>

//         <button
//           onClick={() => router.push("/get-started")}
//           className="hidden md:inline-block bg-gradient-to-r from-[#C068D1] to-[#3224AF] cursor-pointer text-white font-semibold text-sm px-5 py-2 rounded-full hover:opacity-90 transition-all duration-200"
//         >
//           Get Started
//         </button>

//         <button
//           onClick={() => setIsOpen(true)}
//           className="md:hidden text-white text-xl md:text-2xl"
//         >
//           <Menu className="h-6 w-6 text-neutral-100" />
//         </button>
//       </nav>

//       {isOpen && (
//         <div className="fixed inset-0 bg-black/80 z-50 flex flex-col items-end">
//           <div className="w-[70%] bg-[#1a1a1a] h-full p-6 shadow-lg">
//             <div className="flex justify-end mb-6">
//               <button onClick={() => setIsOpen(false)} className="text-white">
//                 <X size={26} />
//               </button>
//             </div>

//             <ul className="flex flex-col gap-6">
//               {menuItems.map((item) => (
//                 <li key={item.name}>
//                   <button
//                     onClick={() => handleNav(item.route)}
//                     className="text-white text-lg font-medium hover:text-purple-400 transition-all duration-200"
//                   >
//                     {item.name}
//                   </button>
//                 </li>
//               ))}
//             </ul>

//             <button
//               onClick={() => handleNav("/get-started")}
//               className="mt-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-sm px-5 py-2 rounded-full hover:opacity-90 transition-all duration-200 w-full"
//             >
//               Get Started
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;

"use client";

import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { X, Menu } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [mobileMegaOpen, setMobileMegaOpen] = useState(false);
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    const handleScroll = () => setIsScrolled(window.scrollY > 10);

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setShowMegaMenu(false);
    setMobileMegaOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (showMegaMenu && !e.target.closest(".mega-menu")) {
        setShowMegaMenu(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [showMegaMenu]);

  const menuItems = [
    { name: "Home", route: "/" },
    { name: "Features", route: "/features" },
    { name: "Solutions", route: "", isMegaMenu: true, arrow: true },
    { name: "Pricing", route: "/pricing" },
    { name: "Contact Us", route: "/contact" },
  ];

  const [openMenu, setOpenMenu] = useState(null);

  const handleClick = (item) => {
    if (item.isMegaMenu) {
      setOpenMenu(openMenu === item.name ? null : item.name);
    }
    handleNav(item);
  };

  const links = [
    { name: "BPO & Contact Centers", route: "/bpo-contact-centers" },
    { name: "Banking & Finance", route: "/banking-finance" },
    { name: "Saas & Tech", route: "/saas-tech" },
    // { name: "Human Resources & Recruitment", route: "/" },
    // { name: "E-commerce & Retail", route: "/" },
    { name: "Healthcare and Insurance", route: "/" },
    // { name: "Enterprise Operations", route: "/" },
    { name: "E-commerce and D2C", route: "/ecommerce-d2c" },
    // { name: "Telecommunications", route: "/" },
  ];

  const handleNav = (item) => {
    setIsOpen(false);
    if (item.isMegaMenu) {
      setShowMegaMenu(!showMegaMenu);
    } else if (item.route) {
      setShowMegaMenu(false);
      setMobileMegaOpen(false);
      router.push(item.route);
    }
  };

  return (
    <div className="py-3 relative">
      <nav
        className={`w-full fixed border-black/10 top-0 py-3 px-4 z-50 md:px-10 flex items-center justify-between transition-all duration-300 ${
          isScrolled
            ? "!bg-black/30 !backdrop-blur-md shadow-sm  border-b-[1px]"
            : "!bg-transparent"
        }`}
      >
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => router.push("/")}
        >
          <img src="/logo.png" alt="logo" className="md:h-9 h-6" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex bg-[#1a1a1a]/60 backdrop-blur-sm border border-gray-50/10 rounded-full px-12 py-3 space-x-8 text-sm relative overflow-visible">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleClick(item)}
              className="text-white cursor-pointer hover:text-purple-400 transition-all duration-200 relative flex items-center gap-1"
            >
              {item.name}
              {item.arrow && (
                <svg
                  className={`w-3 h-3 hover:text-purple-400 transition-transform duration-200 ${
                    openMenu === item.name ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>

        {/* Get Started Button */}
        <button
          onClick={() => router.push("/contact")}
          className="hidden md:inline-block bg-gradient-to-r from-[#C068D1] to-[#3224AF] cursor-pointer text-white font-semibold text-sm px-5 py-2 rounded-full hover:opacity-90 transition-all duration-200"
        >
          Get Started
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-white text-xl md:text-2xl"
        >
          <Menu className="h-6 w-6 text-neutral-100" />
        </button>
      </nav>

      {/* Desktop Mega Menu */}
      {showMegaMenu && (
        <div className="mega-menu fixed top-[64px] left-1/2 transform -translate-x-1/2 w-[900px] max-h-[90vh] overflow-y-auto bg-black/70 backdrop-blur-lg text-gray-900 p-10 rounded-xl shadow-2xl z-40">
          <div className="flex items-start gap-5">
            {/* Left side */}
            <div className="min-w-[120px]">
              <img
                src="/logo.png"
                alt="icon"
                className="h-8 w-30 object-contain rounded-full"
              />
              <p className="text-sm text-white font-sm mt-2">Why Convoze?</p>
              <p className="text-[11px] text-gray-300 mt-2 mb-5">
                See how we help you <br />
                translate customer <br />
                insights into business value.
              </p>
              <Link
                href="/solution"
                className="text-gray-300 font-medium flex items-center gap-1 hover:underline"
              >
                How it work's <span className="text-gray-300">→</span>
              </Link>
              <li className="text-purple-500 font-medium flex items-center gap-1 mb-3">
                Industry <span className="text-purple-500">→</span>
              </li>
            </div>

            {/* Right side: Grid */}
            <div className="grid grid-cols-2 gap-6 flex-1">
              <div className="border-l border-gray-500 pl-2">
                <ul className="space-y-1">
                  <Link href="/bpo-contact-centers">
                    <li className="transition duration-300 ease-in-out hover:bg-gray-700 hover:scale-[1.02] rounded-lg p-2">
                      <h4 className="font-medium text-[14px] text-white">
                        BPO & Contact Centers
                      </h4>
                      <p className="text-[11px] text-gray-400 mt-1">
                        Transform conversations into insights, improving
                        efficiency, agent performance, and overall customer
                        experiences.
                      </p>
                    </li>
                  </Link>
                  <Link href="/banking-finance">
                    <li className="transition duration-300 ease-in-out hover:bg-gray-700 hover:scale-[1.02] rounded-lg p-2">
                      <h4 className="font-medium text-[14px] text-white">
                        Banking & Finance
                      </h4>
                      <p className="text-[11px] text-gray-400 mt-1">
                        Identify compliance risks quickly, strengthen processes,
                        and ensure secure customer interactions with Convoze.
                      </p>
                    </li>
                  </Link>
                  <Link href="/ecommerce-d2c">
                    <li className="transition duration-300 ease-in-out hover:bg-gray-700 hover:scale-[1.02] rounded-lg p-2">
                      <h4 className="font-medium text-[14px] text-white">
                        E-commerce and D2C
                      </h4>
                      <p className="text-[11px] text-gray-400 mt-1">
                        Analyze customer sentiment, address concerns
                        proactively, and increase loyalty effectively.
                      </p>
                    </li>
                  </Link>
                </ul>
              </div>

              {/* Column 2 */}
              <div>
                <ul className="space-y-1">
                  <Link href="/saas-tech">
                    <li className="transition duration-300 ease-in-out hover:bg-gray-700 hover:scale-[1.02] rounded-lg p-2">
                      <h4 className="font-medium text-[14px] text-white">
                        Saas & Tech
                      </h4>
                      <p className="text-[11px] text-gray-400 mt-1">
                        Drive product adoption, reduce churn, and strengthen
                        customer retention with real-time intelligence and
                        seamless onboarding insights.
                      </p>
                    </li>
                  </Link>
                  <li className="transition duration-300 ease-in-out hover:bg-gray-700 hover:scale-[1.02] rounded-lg p-2">
                    <h4 className="font-medium text-[14px] text-white">
                      Healthcare and Insurance
                    </h4>
                    <p className="text-[11px] text-gray-400 mt-1">
                      Detect patient emotions instantly and improve satisfaction
                      through real-time sentiment analysis.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex flex-col items-end">
          <div className="w-[70%] bg-[#1a1a1a] h-full p-6 shadow-lg overflow-y-auto">
            <div className="flex justify-end mb-6">
              <button onClick={() => setIsOpen(false)} className="text-white">
                <X size={26} />
              </button>
            </div>

            <ul className="flex flex-col gap-6">
              {menuItems.map((item) => (
                <li key={item.name}>
                  {item.isMegaMenu ? (
                    <>
                      <button
                        onClick={() => setMobileMegaOpen(!mobileMegaOpen)}
                        className="text-white text-lg font-medium flex justify-between w-full hover:text-purple-400 transition-all duration-200"
                      >
                        {item.name}
                        <span>{mobileMegaOpen ? "−" : "+"}</span>
                      </button>

                      {mobileMegaOpen && (
                        <div className="mt-2 bg-[#1a1a1a]/90 p-4 rounded-lg">
                          <div className="grid grid-cols-1 gap-2">
                            {links.map((link, idx) => (
                              <Link key={idx} href={link.route} passHref>
                                <p
                                  onClick={() => setIsOpen(false)}
                                  className="text-white text-sm hover:text-purple-400 cursor-pointer active:opacity-70 transition-opacity duration-150"
                                >
                                  {link.name}
                                </p>
                              </Link>
                            ))}
                          </div>
                          <Link
                            href="/solution"
                            className="text-gray-300 font-medium flex items-center gap-1 hover:underline mt-5"
                          >
                            How it work <span className="text-gray-300">→</span>
                          </Link>
                          <li className="text-purple-500 font-medium flex items-center gap-1 mb-3 hover:underline">
                            Industry <span className="text-purple-500">→</span>
                          </li>
                        </div>
                      )}
                    </>
                  ) : (
                    <button
                      onClick={() => handleNav(item)}
                      className="text-white text-lg font-medium hover:text-purple-400 transition-all duration-200 w-full text-left"
                    >
                      {item.name}
                    </button>
                  )}
                </li>
              ))}
            </ul>

            <button
              onClick={() => handleNav({ route: "/contact" })}
              className="mt-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-sm px-5 py-2 rounded-full hover:opacity-90 transition-all duration-200 w-full"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
