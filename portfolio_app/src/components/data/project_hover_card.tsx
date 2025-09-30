// ✅ Fix: import HoverEffect as default, not named
import HoverEffect from "@/components/ui/card-hover-effect";

export function CardHoverEffect() {
  return (
    <div className="max-w-5xl mx-auto px-8 py-16">
      {/* For simple */}
      {/* <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12"> */}
      {/* For Gradient Text */}
      <h2  className="text-3xl font-bold text-center 
               text-gray-800 dark:text-white mb-6
               transition duration-500 ease-in-out
               hover:scale-105 hover:text-transparent 
               hover:bg-clip-text hover:bg-gradient-to-r 
               hover:from-pink-400 hover:to-purple-500 flex justify-center" >
        Projects
      </h2>
      {/* ✅ HoverEffect is default export */}
      <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "E-Commerce Jewelry Store",
    description:
      "A modern jewelry e-commerce app built with Next.js, React, and Tailwind CSS.",
    link: "#",
  },
  {
    title: "Study Planner App",
    description:
      "A productivity app that helps students organize tasks and deadlines using React and Firebase.",
    link: "#",
  },
  {
    title: "Snake Game CLI",
    description:
      "Classic Snake game recreated using TypeScript and Node.js in the command line.",
    link: "#",
  },
  {
    title: "ATM CLI Project",
    description:
      "An advanced ATM simulation built in TypeScript using Inquirer for CLI interactions.",
    link: "#",
  },
  {
    title: "Rock, Paper, Scissors Game",
    description:
      "A simple yet fun Rock, Paper, Scissors game built in Python.",
    link: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "Personal portfolio website showcasing projects and skills, built with Next.js and Tailwind CSS.",
    link: "#",
  },
  {
    title: "Data Sweeping App",
    description:
      "A utility app that demonstrates JavaScript skills in handling arrays and objects effectively.",
    link: "#",
  },
  {
    title: "Weather App",
    description:
      "A weather forecast app fetching real-time data using JavaScript and OpenWeather API.",
    link: "#",
  },
  {
    title: "Grocery Tracker",
    description:
      "A Python project to manage and track groceries, practicing operators and data handling.",
    link: "#",
  },
  {
    title: "Blog Platform",
    description:
      "A full-stack blog application built with Next.js, React, and Markdown support.",
    link: "#",
  },
];

