'use client';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import Marquee from 'react-fast-marquee';

const testimonials = [
  {
    id: 1,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolore.',
    rating: 4,
  },
  {
    id: 2,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  elit  eiusmod tempor incididunt ut labore et dolore.',
    rating: 5,
  },
  {
    id: 3,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  elit  eiusmod tempor incididunt ut labore et dolore.',
    rating: 4,
  },
  {
    id: 4,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  elit eiusmod tempor incididunt ut labore et dolore.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 text-center">
      <h2 className="text-3xl font-bold mb-2">What Clients Say!</h2>
      <p className="text-gray-600 mb-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing
      </p>

      {/* ✅ React Fast Marquee for scrolling cards */}
      <Marquee pauseOnHover={true} speed={60} gradient={false} className="gap-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white w-72 mx-3 p-5 rounded-2xl shadow-[0px_10px_30px_rgba(0,0,0,0.15)]"
          >
            <div className="text-left">
              <div className="text-orange-500 text-sm font-semibold mb-1">
                ● Lorem ipsum
              </div>
              <p className="text-sm text-gray-900">{testimonial.text}</p>
              <div className="mt-3 flex text-orange-500">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <FaStar key={i} className="text-xs" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
}
