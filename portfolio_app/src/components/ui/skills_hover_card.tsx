//  HOver Card for skills section


"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { FaReact } from "react-icons/fa6";
import { SiGit, SiGithub, SiJavascript, SiNextdotjs, SiPython, SiTailwindcss, SiTypescript } from "react-icons/si";


const skills = [
  { title: "React", description: "Building interactive UIs with reusable components", icon: <FaReact className="text-sky-400 text-5xl" /> },
  { title: "Next.js", description: "Server-side rendering & static site generation", icon: <SiNextdotjs className="text-white text-5xl" /> },
  { title: "TypeScript", description: "Type-safe JavaScript for scalable projects", icon: <SiTypescript className="text-blue-500 text-5xl" /> },
  { title: "Tailwind CSS", description: "Utility-first CSS for responsive design", icon: <SiTailwindcss className="text-cyan-400 text-5xl" /> },
  { title: "JavaScript", description: "Dynamic programming for the web", icon: <SiJavascript className="text-yellow-400 text-5xl" /> },
  { title: "Python", description: "AI, ML, and backend scripting", icon: <SiPython className="text-green-400 text-5xl" /> },
  { title: "Git", description: "Version control for collaboration", icon: <SiGit className="text-orange-600 text-5xl" /> },
  { title: "GitHub", description: "Open-source hosting & collaboration", icon: <SiGithub className="text-gray-300 text-5xl" /> },
];


export default function SkillsHoverCard() {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10">
          {skills.map((item, idx) => (
            <a
              
              key={idx}
              
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



