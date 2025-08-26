import React from "react";
import { BsHeart } from "react-icons/bs";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  // const currentHours = new Date().getHours();
  // const currentMinutes = new Date().getMinutes();
  // const currentTime = `${currentHours}:${currentMinutes < 10 ? '0' : ''}${currentMinutes}`;

  return (
    <footer className="bg-gray-800 text-white text-center py-4 sm:mt-8">
      <div className="container mx-auto px-4  sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center text-xs sm:text-sm md:text-base text-muted-foreground">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
            <span>
              © {new Date().getFullYear()} . Made by
              <a
                href="https://www.linkedin.com/in/uttam-ghosh-7187a2258/"
                className="social-link gradient-ai-text pl-1 sm:pl-2 text-blue-400 animate-pulse"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile of Uttam Ghosh"
              >
                Uttam Ghosh
              </a>{' '}
              with
            </span>
            <BsHeart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>for learners everywhere.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
