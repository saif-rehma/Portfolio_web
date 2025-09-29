"use client";
import Image from 'next/image'
import { JSX, useEffect, useState } from "react";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export default function HeroSection(): JSX.Element {
  const [showTypewriter, setShowTypewriter] = useState(true);

  // Timer to stop typewriter after first run
  useEffect(() => {
    const timer = setTimeout(() => setShowTypewriter(false), 4000); // 4s duration
    return () => clearTimeout(timer);
  }, []);

  const words = [
    { text: "React.js" },
    { text: "Next.js" },
    { text: "TypeScript" },
    { text: "Tailwind CSS" },
    // { text: "Python" },
  ];

  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-gradient-to-r from-blue-50 via-white to-pink-50 px-10 md:px-20"
    >
      {/* Left Content */}
      <div className="flex-1 text-left space-y-6">
        {/* Attractive Name with gradient text */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-wide bg-gradient-to-r from-blue-600 to-pink-500 bg-clip-text text-transparent drop-shadow-lg">
          Maheera Rehman
        </h1>

        {/* Typewriter Effect (runs only once) */}
        {showTypewriter ? (
          <div className="text-lg md:text-2xl text-blue-500 font-medium">
            <TypewriterEffect words={words} />
          </div>
        ) : (
          <p className="text-lg md:text-2xl text-blue-500 font-medium">
            React.js • Next.js • TypeScript • Tailwind CSS
          </p>
        )}

        {/* Description with cursive font */}
        <p className="text-gray-700 text-lg md:text-xl italic font-serif max-w-xl leading-relaxed">
          A passionate Frontend Developer crafting modern web experiences with
          creativity, performance, and elegant design. Blending technology with
          beauty 
        </p>

        {/* Buttons - both pink */}
        <div className="flex gap-6 pt-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-pink-500 text-white rounded-xl shadow-md hover:bg-pink-600 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-pink-500 text-white rounded-xl shadow-md hover:bg-pink-600 transition"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 flex justify-center mt-10 md:mt-0">
        <Image
          src="/images/profile.jpg"
          alt="Picture of Developer"
          width={400}
          height={400}
          className="w-72 md:w-96 h-72 md:h-96 object-cover object-top rounded-full border-4 border-pink-400 shadow-[0_10px_40px_rgba(236,72,153,0.4)]"
        />
      </div>


    </section>
  );
}
