"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
} from "react-icons/fa";

const AboutPage = () => {
  const [showMore, setShowMore] = useState(false);
  const router = useRouter();

  return (
    <div className="bg-gradient-to-b from-zinc-900 to-gray-800 text-white min-h-screen flex items-start">
      <div className="container mx-auto px-6 py-12">
        {/* Header Section */}
        <header className="text-center">
          <h1 className="text-5xl font-extrabold text-indigo-400 drop-shadow-lg">
            About Me
          </h1>

          {/* Collapsible Paragraph */}
          <div className="mt-6 max-w-4xl mx-auto leading-relaxed text-lg text-zinc-400 text-center">
            <p calassName="mt-6 text-lg text-zinc-400 max-w-3xl mx-auto leading-relaxed">
              Hi, I am{" "}
              <span className="font-semibold text-gray-300">Uttam Ghosh</span>,
              and I am a MERN Stack Developer specializing in{" "}
              <span className="text-gray-300">Next.js</span>,{" "}
              <span className="text-gray-300">React.js</span>,{" "}
              <span className="text-gray-300">Node.js</span>,{" "}
              <span className="text-gray-300">Express.js</span>,{" "}
              <span className="text-gray-300">MongoDB</span>,{" "}
              <span className="text-gray-300">Tailwind CSS</span>, and{" "}
              <span className="text-gray-300">ShadCN UI</span>.
            </p>

            {showMore && (
              <p className="mt-4 text-gray-400 max-w-4xl mx-auto leading-relaxed">
                I have professional experience as a Frontend Developer at{" "}
                <span className="text-gray-200">Online Savaari</span>, where I
                built booking modules for flights, hotels, visas, and insurance,
                integrated <span className="text-gray-200">multiple APIs</span>,
                and optimized performance, which improved feature delivery by
                60% and page speed by 30%. Earlier, I worked part-time with{" "}
                <span className="text-gray-200">GroceryBays.com</span>, where I
                redesigned their website for better responsiveness,{" "}
                <span className="text-gray-200">improved</span> mobile
                engagement, and reduced bounce rates by 25%. <br />
                <br />
                Beyond professional roles, I have developed several impactful
                projects. These include an{" "}
                <span className="text-gray-200">AI-Powered PDF Analyzer</span>{" "}
                and an <span className="text-gray-200">AI Flashcard Generator</span> using{" "}
                <span className="text-gray-200">LangChain</span> and{" "}
                <span className="text-gray-200">Google Gemini API</span>,
                showcasing my ability to merge{" "}
                <span className="text-gray-200">frontend expertise with AI</span>
                . I also created an{" "}
                <span className="text-gray-200">E-commerce Platform</span> using
                Next.js, TypeScript, TailwindCSS, ShadCN UI, API integration,
                and UI/UX design, delivering a fast, scalable shopping
                experience. Another major project is{" "}
                <span className="text-gray-200">AI Interface Studio</span>, a
                prototype inspired by leading AI platforms, built with Next.js,
                TypeScript, TailwindCSS, ShadCN UI, LangChain, and OpenAI API to
                provide a modern, responsive{" "}
                <span className="text-gray-200">AI interaction interface</span>.
                Additionally, I developed an{" "}
                <span className="text-gray-200">Online Ticket Booking System</span>{" "}
                with real-time airline APIs and Razorpay payments,
                significantly reducing booking time. <br />
                <br />I am passionate about building{" "}
                <span className="text-gray-200">scalable</span>, user-friendly,
                and high-performance applications, and I am eager to contribute
                my <span className="text-gray-200">skills</span> to innovative
                projects like those at Kitchen Spurs.
              </p>
            )}

            {/* Toggle Button */}
            <div className="text-center mt-6">
              <button
                onClick={() => setShowMore(!showMore)}
                className="px-5 py-2 bg-indigo-500 hover:bg-indigo-600 rounded-lg shadow-md font-semibold transition text-white"
              >
                {showMore ? "Show Less" : "Read More"}
              </button>
            </div>
          </div>
        </header>

        {/* Skills Section (Always Visible) */}
        <div className="text-center mt-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent drop-shadow-md">
            Top Skills
          </h2>

          <div className="mt-10 flex flex-wrap justify-center gap-8">
            {/* React.js */}
            <div className="p-6 bg-gray-700  rounded-2xl shadow-lg flex flex-col items-center hover:scale-110 hover:shadow-cyan-500/30 transition duration-300">
              <FaReact className="text-cyan-400 text-4xl animate-spin-slow" />
              <span className="mt-3 text-lg font-semibold">React.js</span>
            </div>

            {/* Node.js */}
            <div className="p-6 bg-gray-700  rounded-2xl shadow-lg flex flex-col items-center hover:scale-110 hover:shadow-green-500/30 transition duration-300">
              <FaNodeJs className="text-green-400 text-4xl" />
              <span className="mt-3 text-lg font-semibold">Node.js</span>
            </div>

            {/* Databases */}
            <div className="p-6 bg-gray-700  rounded-2xl shadow-lg flex flex-col items-center hover:scale-110 hover:shadow-purple-500/30 transition duration-300">
              <FaDatabase className="text-purple-400 text-4xl" />
              <span className="mt-3 text-lg font-semibold">Database</span>
            </div>
          </div>
          <div className="text-center mt-6">
            <button
              onClick={() => router.push("/skills")}
              className="px-5 py-2 bg-indigo-500 hover:bg-indigo-600 rounded-lg shadow-md font-semibold transition text-white"
            >
              View More
            </button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default AboutPage;
