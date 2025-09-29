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
    //  {
    //   text: "Python",
    //   className: "text-blue-500",
    // },
  ];
  return (
    <div className="flex flex-col items-center justify-center  ">
      
      <TypewriterEffectSmooth words={words} />      
      </div>
    
  );
}

// "use client";
// import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
// import { Button } from "@/components/ui/button";

// export default function Hero() {
//   const words = [
//     { text: "React.js" },
//     { text: "Next.js" },
//     { text: "TypeScript" },
//     { text: "Tailwind CSS" },
//   ];

//   return (
//     <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-50">
//       <h1 className="text-4xl md:text-6xl font-bold mb-4">
//         Hi, I’m <span className="text-blue-600">Abdur Rahman</span>
//       </h1>
//       <p className="text-lg md:text-xl mb-6 text-gray-600">
//         Frontend Developer | Passionate about building interactive web apps
//       </p>

//       {/* Typewriter Effect */}
//       <TypewriterEffectSmooth words={words} />

//       {/* CTA Buttons */}
//       <div className="mt-6 flex gap-4">
//         <Button>View Projects</Button>
//         <Button variant="outline">Contact Me</Button>
//       </div>
//     </section>
//   );
// }

