'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="mt-[53.58px]">
      <div className="max-w-7xl mx-auto px-85 flex items-center justify-between relative">

        {/* Logo */}
        <div>
          <span className="font-bold text-xl">AVARON</span>
        </div>

        {/* Navigation Links */}
        {/* Add these 2 classes conditionally for mobile toggle */}
        <nav
          className={`flex space-x-6 md:space-x-6 ${
            menuOpen ? 'block absolute top-full left-0 bg-white w-full px-4 py-4 shadow-md md:static md:bg-transparent md:shadow-none md:w-auto md:px-0 md:py-0' : 'hidden md:flex'
          }`}
          style={{ zIndex: 10 }}
        >
          <Link href="#"><span className="hover:text-blue-600 cursor-pointer block md:inline-block py-2 md:py-0">Process</span></Link>
          <Link href="#"><span className="hover:text-blue-600 cursor-pointer block md:inline-block py-2 md:py-0">About Us</span></Link>
          <Link href="#"><span className="hover:text-blue-600 cursor-pointer block md:inline-block py-2 md:py-0">Projects</span></Link>
          <Link href="#"><span className="hover:text-blue-600 cursor-pointer block md:inline-block py-2 md:py-0">FAQs</span></Link>
        </nav>

        {/* Get Started Button */}
        <Link href="#">
          <button className="bg-orange-500 text-white px-4 py-1 rounded hover:bg-orange-600 transition hidden md:block">
            Get Started
          </button>
        </Link>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden text-3xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          type="button"
        >
          ☰
        </button>
      </div>
    </header>
  );
}
