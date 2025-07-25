'use client';
import React from 'react';
import { FaStar } from 'react-icons/fa';

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

// ✅ JavaScript-compatible function (no types)
const getRotation = (index, middleIndex) => {
  const diff = index - middleIndex;
  if (diff === 0) return ' translate-x-[17%] scale-122';
  if (diff === -2) return 'translate-x-[-30%] scale-90';
  if (diff === -1) return 'translate-x-[-17%] scale-110';
  if (diff === 1) return 'translate-x-[50%] scale-110';
  return '';
};

export default function Testimonials() {
  const middleIndex = Math.floor(testimonials.length / 2);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 text-center">
      <h2 className="text-3xl font-bold mb-2">What Clients Say!</h2>
      <p className="text-gray-600 mb-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`bg-white sm:w-72 p-5 rounded-2xl shadow-[0px_10px_30px_rgba(0,0,0,10.5)] transition-transform transform ${getRotation(index, middleIndex)}`}
          >
            <div className="text-left max-w-full ">
              <div className="text-orange-500 text-sm font-semibold mb-1">
                ● Lorem ipsum
              </div>
              <p className=" w-75  text-sm text-gray-900">{testimonial.text}</p>
              <div className="mt-3 flex text-orange-500">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <FaStar key={i} className="text-xs" />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
 