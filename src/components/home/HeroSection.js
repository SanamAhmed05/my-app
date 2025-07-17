import Image from 'next/image';
import React from 'react';

export default function HeroSection() {
  return (
    <section className="bg-gray-50 py-16 px-8 flex flex-col md:flex-row items-center justify-between">
      {/* Left Side Text */}
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h1 className="text-5xl font-bold text-gray-900">
          Lessons and insights <br />
          <span className="text-green-600">from 8 years</span>
        </h1>
        <p className="text-gray-600 mt-4">
          Where to grow your business as a photographer: site or social media?
        </p>
        <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700">
          Register
        </button>
      </div>

      {/* Right Side Image */}
      <div className="md:w-1/2">
        <Image
          src="/assets/hero.jpg"  // ✅ correct path
          alt="Hero Image"
          width={500}
          height={400}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}
