"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
export function TypewriterEffect() {
  const words = [
     {
      text: "I'll build responsive websites using",
    },
    {
      text: "TypeScript",
      className: "text-blue-500", // highlight
    },
    {
      text: "React.js",
      className: "text-blue-500",
    },
    {
      text: "Next.js",
      className: "text-blue-500",
    },
    {
      text: "Tailwind",
      className: "text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center  ">
      
      <TypewriterEffectSmooth words={words} />      
      </div>
    
  );
}
