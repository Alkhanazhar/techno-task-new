// "use client";

// import Link from "next/link";
// import { Carousel } from "./Carousel";

// export function Industries() {
//   const slideData = [
//     {
//       title: "Healthcare & Insurance",
//       button: "See use cases",
//       description: "Ensure compliance and capture patient sentiment",
//       src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       link: "/",
//     },
//     {
//       title: "BPOs & Call Centers",
//       button: "See use cases",
//       description: "Automate QA and coach agents faster",
//       src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       link: "/bpo-contact-centers",
//     },
//     {
//       title: "Banking & Finance",
//       button: "See use cases",
//       description: "Flag risks, track disclosures, stay audit-ready",
//       src: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       link: "/banking-finance",
//     },
//     {
//       title: "E-commerce & D2C",
//       button: "See use cases",
//       description: "Understand customer issues and improve support",
//       src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       link: "/",
//     },
//     {
//       title: "SaaS & Tech",
//       button: "See use cases",
//       description: "Catch churn signals and boost onboarding success",
//       src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       link: "/",
//     },
//   ];

//   return (
//     <div className="relative w-full h-full bg-gradient-to-tl to-[#21082b] from-[#27022e] py-12 md:py-16 md:mb-16">
//       <div className="text-center mb-5 md:mb-6 px-8">
//         <h2 className="text-2xl md:text-4xl font-medium md:mb-4 mb-2 text-transparent bg-clip-text bg-gradient-to-r to-[#B462CE] from-[#3F2AB2]">
//           Who <span className="font-normal text-white">Its For</span>
//         </h2>
//         <p className="text-gray-400 font-light text-sm md:text-xl max-w-4xl mx-auto">
//           Built for Teams Where Conversations Drive Business Convoze is trusted
//           by fast-moving teams using call center quality assurance software in:
//         </p>
//       </div>

//       <div className="w-screen h-full overflow-hidden !-mb-20 md:mb-0">
//         <Carousel
//           slides={slideData}
//           renderSlide={(slide) => (
//             <div
//               key={slide.title}
//               className="relative cursor-pointer group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition"
//               onClick={() => router.push(slide.link)}
//             >
//               <img
//                 src={slide.src}
//                 alt={slide.title}
//                 className="w-full h-64 sm:h-80 md:h-96 object-cover group-hover:scale-105 transition-transform"
//               />
//               <div className="absolute bottom-4 left-4 text-white">
//                 <h3 className="text-lg sm:text-xl font-semibold">{slide.title}</h3>
//                 <p className="text-sm sm:text-base">{slide.description}</p>
//               </div>
//             </div>
//           )}
//         />
//       </div>
//     </div>
//   );
// }

"use client";

import { Carousel } from "./Carousel";

export const Industries = () => {
  const slideData = [
    {
      title: "Healthcare & Insurance",
      button: "See use cases",
      description: "Ensure compliance and capture patient sentiment",
      src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/",
    },
    {
      title: "BPOs & Call Centers",
      button: "See use cases",
      description: "Turning Every Conversation into Actionable Insight",
      src: "https://plus.unsplash.com/premium_photo-1666299884107-2c2cf920ee59?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/bpo-contact-centers",
    },
    {
      title: "Banking & Finance",
      button: "See use cases",
      description:
        "Powering Smarter, Safer Conversations that Drive Finance Forward",
      src: "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/banking-finance",
    },
    {
      title: "E-commerce & D2C",
      button: "See use cases",
      description: "Understand customer issues and improve support",
      src: "https://plus.unsplash.com/premium_photo-1681488262364-8aeb1b6aac56?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/ecommerce-d2c",
    },
    {
      title: "SaaS & Tech",
      button: "See use cases",
      description:
        "Boost Onboarding, Retention & Support with Complete Conversation Intelligence",
      src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "/saas-tech",
    },
  ];

  return (
    <div className="relative w-full h-full bg-gradient-to-tl to-[#21082b] from-[#27022e] py-16 md:py-24 md:mb-16">
      <div className="text-center mb-5 md:mb-6 px-8">
        <h2 className="text-2xl md:text-4xl font-medium md:mb-4 mb-2 text-transparent bg-clip-text bg-gradient-to-r to-[#B462CE] from-[#3F2AB2]">
          Who <span className="font-normal text-white">Its For</span>
        </h2>
        <p className="text-gray-200 font-light text-sm md:text-xl max-w-4xl mx-auto">
          Built for Teams Where Conversations Drive Business Convoze is trusted
          by fast-moving teams using call center quality assurance software in:
        </p>
      </div>

      <div className="w-screen h-full  !-mb-20 pb-16 md:mb-0 sm:pb-12 overflow-hidden">
        <Carousel slides={slideData} />
      </div>
    </div>
  );
};
