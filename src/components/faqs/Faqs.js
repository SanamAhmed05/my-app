'use client';

import { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';

const faqs = [
  {
    question: 'Lorem ipsum dolor sit amet, consectetuer adipiscing',
    answer: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam',
  },
  {
    question: 'Lorem ipsum dolor sit amet, consectetuer adipiscing',
    answer: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam',
  },
  {
    question: 'Lorem ipsum dolor sit amet, consectetuer adipiscing',
    answer: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam',
  },
  {
    question: 'Lorem ipsum dolor sit amet, consectetuer adipiscing',
    answer: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-12 px-6 md:px-10 flex flex-col items-center -mt-10">
      {/* FAQ Header */}
      <h2 className="text-4xl font-bold text-center mb-10">FAQs</h2>

      {/* FAQ List */}
      <div className="w-full max-w-2xl space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="w-full cursor-pointer"
            onClick={() => toggleFaq(index)}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-black">{faq.question}</h3>
              <FaChevronRight
                className={`text-orange-500 ml-2 transition-transform duration-300 ${
                  openIndex === index ? 'rotate-90' : ''
                }`}
              />
            </div>
            {openIndex === index && (
              <p className="text-sm text-gray-600 mt-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
