"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from "react";

export default function HeroSection() {
  const words = [
    "Frontend Developer",
    "Backend Developer",
    "Web Developer",
    "Agentic AI",
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let typingSpeed = 60; // ms per character
    let deletingSpeed = 60; // ms per character
    let pauseTime = 1000; // pause before deleting or typing next word

    const currentWord = words[currentWordIndex];

    if (!isDeleting && displayedText.length < currentWord.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(currentWord.substring(0, displayedText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayedText.length > 0) {
      const timeout = setTimeout(() => {
        setDisplayedText(currentWord.substring(0, displayedText.length - 1));
      }, deletingSpeed);
      return () => clearTimeout(timeout);
    }

    if (!isDeleting && displayedText.length === currentWord.length) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayedText.length === 0) {
      const timeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }, pauseTime);
      return () => clearTimeout(timeout);
    }
  }, [displayedText, isDeleting, currentWordIndex]);

  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row items-center justify-between min-h-screen bg-gradient-to-r from-blue-100 via-gray-50 to-pink-100 px-10 md:px-20"
    >
      {/* Left Content */}
      <div className="flex-1 text-left space-y-6">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent drop-shadow-lg whitespace-nowrap">
          Hi, I'm Maheera Rehman
        </h1>

        <h2 className="text-lg md:text-2xl font-extrabold text-pink-600">
          {displayedText}
          <span className="border-r-2 border-pink-600 animate-pulse ml-1"></span>
        </h2>

        <p className="text-gray-700 text-lg md:text-xl italic font-serif max-w-xl leading-relaxed">
          A passionate Frontend Developer crafting modern web experiences with
           creativity, performance, and elegant design. Blending technology with
           beauty.
        </p>

        <div className="pt-6">
          <Link
            href="/resume.pdf"
            target="_blank"
            className="inline-block px-10 py-3 rounded-xl bg-gradient-to-br from-pink-500 via-red-500 to-pink-700 text-white font-bold tracking-wide shadow-lg transform transition duration-300 hover:scale-110 hover:shadow-[0_15px_45px_rgba(236,72,153,0.6)] hover:rotate-1"
          >
            View Resume
          </Link>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 flex justify-center mt-10 md:mt-0 md:ml-20">
        <div className="relative rounded-full p-[5px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
          <Image
            src="/images/profile.jpg"
            alt="Picture of Developer"
            width={380}
            height={380}
            className="w-64 md:w-80 h-64 md:h-80 object-cover object-top rounded-full shadow-[0_10px_40px_rgba(236,72,153,0.4)] transition-transform duration-500 hover:scale-110 hover:rotate-3 hover:shadow-[0_0_40px_rgba(236,72,153,0.6)]"
          />
        </div>
      </div>
    </section>
  );
}
