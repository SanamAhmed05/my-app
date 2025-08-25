"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Process", href: "/process" },
    { name: "About Us", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "FAQs", href: "/faqs" },
  ];

  return (
    <header className="font-[ADAM.CG.PRO] mt-4">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between md:justify-center items-center h-16 space-x-4 md:space-x-8">
          {/* Logo */}
          <Link href="/">
            <span className="text-xl font-bold text-black">
              AVARON
            </span>
          </Link>

          {/* Desktop Nav links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <span className="text-black hover:text-orange-500 transition-colors duration-300 font-normal">
                  {link.name}
                </span>
              </Link>
            ))}

            {/* Get Started Button */}
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1.5 rounded-md font-normal text-sm transition-colors duration-300 shadow-sm">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black hover:text-orange-500 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-2">
            <div className="flex flex-col items-center px-2 pt-2 pb-3 space-y-3 sm:px-3 bg-white shadow-lg rounded-md">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href}>
                  <span className="block w-full text-center px-3 py-2 rounded-md text-base font-medium text-black hover:text-orange-500 hover:bg-gray-50">
                    {link.name}
                  </span>
                </Link>
              ))}
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md font-medium transition-colors duration-300">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
