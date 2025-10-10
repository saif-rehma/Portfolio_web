// "use client";

// import { cn } from "@/lib/utils";
// import { AnimatePresence, motion } from "motion/react";
// import { useState } from "react";

// const projects = [
//   {
//     title: "Weather App",
//     description: "A modern weather app using React, fetching real-time weather data from OpenWeather API.",
//     link: "https://github.com/username/weather-app",
//   },
//   {
//     title: "Data Sweeping App",
//     description: "A Python-based project to clean, analyze, and visualize data, converting Excel files to PDF.",
//     link: "https://github.com/username/data-sweeping-app",
//   },
//   {
//     title: "E-Commerce Jewelry Store",
//     description: "A Next.js + TypeScript full-stack store app for jewelry products with cart and authentication.",
//     link: "https://github.com/username/jewelry-ecommerce",
//   },
//   {
//     title: "Study Planner App",
//     description: "A React productivity app to schedule and track study sessions with progress charts.",
//     link: "https://github.com/username/study-planner",
//   },
//   {
//     title: "ATM CLI App",
//     description: "A TypeScript command-line ATM simulation using Inquirer for deposits and withdrawals.",
//     link: "https://github.com/username/atm-cli",
//   },
//   {
//     title: "Snake Game",
//     description: "A fun JavaScript game created with canvas, inspired by classic Snake gameplay.",
//     link: "https://github.com/username/snake-game",
//   },
// ];

// export default function ProjectHoverCard() {
//   let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

//   return (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10">
//           {projects.map((item, idx) => (
//             <a
//               href={item.link}
//               key={idx}
//               target="_blank"
//               className="relative group block p-2 h-full w-full"
//               onMouseEnter={() => setHoveredIndex(idx)}
//               onMouseLeave={() => setHoveredIndex(null)}
//             >
//               <AnimatePresence>
//                 {hoveredIndex === idx && (
//                   <motion.span
//                     className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
//                     layoutId="hoverBackground"
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1, transition: { duration: 0.15 } }}
//                     exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
//                   />
//                 )}
//               </AnimatePresence>
//               <Card>
//                 <CardTitle>{item.title}</CardTitle>
//                 <CardDescription>{item.description}</CardDescription>
//               </Card>
//             </a>
//           ))}
//         </div>
     
   
//   );
// }

// export const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => {
//   return (
//     <div
//       className={cn(
//         "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
//         className
//       )}
//     >
//       <div className="relative z-50">
//         <div className="p-4">{children}</div>
//       </div>
//     </div>
//   );
// };

// export const CardTitle = ({ className, children }: { className?: string; children: React.ReactNode }) => {
//   return <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>{children}</h4>;
// };

// export const CardDescription = ({ className, children }: { className?: string; children: React.ReactNode }) => {
//   return <p className={cn("mt-4 text-zinc-400 tracking-wide leading-relaxed text-sm", className)}>{children}</p>;
// };



"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const projects = [
  {
    title: "Weather App",
    description: "A modern weather app using React, fetching real-time weather data from OpenWeather API.",
    link: "https://github.com/username/weather-app",
  },
  {
    title: "Data Sweeping App",
    description: "A Python-based project to clean, analyze, and visualize data, converting Excel files to PDF.",
    link: "https://github.com/username/data-sweeping-app",
  },
  {
    title: "E-Commerce Jewelry Store",
    description: "A Next.js + TypeScript full-stack store app for jewelry products with cart and authentication.",
    link: "https://github.com/username/jewelry-ecommerce",
  },
  {
    title: "Study Planner App",
    description: "A React productivity app to schedule and track study sessions with progress charts.",
    link: "https://github.com/username/study-planner",
  },
  {
    title: "ATM CLI App",
    description: "A TypeScript command-line ATM simulation using Inquirer for deposits and withdrawals.",
    link: "https://github.com/username/atm-cli",
  },
  {
    title: "Snake Game",
    description: "A fun JavaScript game created with canvas, inspired by classic Snake gameplay.",
    link: "https://github.com/username/snake-game",
  },
  {
    title: "Calculator CLI App",
    description: "A simple TypeScript CLI calculator app for performing basic arithmetic operations.",
    link: "https://github.com/username/calculator-cli",
  },
  {
    title: "Guessing Number CLI App",
    description: "A fun TypeScript CLI game where users guess a randomly generated number.",
    link: "https://github.com/username/guessing-number-cli",
  },
];

export default function ProjectHoverCard() {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10">
          {projects.map((item, idx) => (
            <a
              href={item.link}
              key={idx}
              target="_blank"
              className="relative group block p-2 h-full w-full"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.span
                    className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                    layoutId="hoverBackground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.15 } }}
                    exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
                  />
                )}
              </AnimatePresence>
              <Card>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </Card>
            </a>
          ))}
        </div>
      
  );
}

export const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>{children}</h4>;
};

export const CardDescription = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <p className={cn("mt-4 text-zinc-400 tracking-wide leading-relaxed text-sm", className)}>{children}</p>;
};