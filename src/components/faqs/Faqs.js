'use client';

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

const comparisonPoints = [
  'Lorem ipsum dolor sit amet',
  'Lorem ipsum dolor sit amet',
  'Lorem ipsum dolor sit amet',
  'Lorem ipsum dolor sit amet',
  'Lorem ipsum dolor sit amet',
];

export default function FaqSection() {
  return (
    <section className="bg-white py-20 px-6 -mt-15 md:px-10">
      {/* FAQ Header */}
      <h2 className="text-4xl font-bold text-center mb-12">FAQs</h2>

      {/* FAQ List */}
      <div className="max-w-4xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="flex items-start justify-between pb-5" // Removed border-b
          >
            <div>
              <h3 className="text-lg font-semibold text-black mb-1">
                {faq.question}
              </h3>
              <p className="text-sm text-gray-600">{faq.answer}</p>
            </div>
            <FaChevronRight className="text-orange-500 mt-2 flex-shrink-0" />
          </div>
        ))}
      </div>

      {/* WHY AVARON Section */}
      <div className="text-center mt-24">
        <h3 className="text-2xl md:text-3xl font-bold mb-2">
          But why should it be us <br className="hidden md:block" /> building your Avaron
        </h3>
        <p className="text-gray-600 text-base mb-10">Lorem ipsum dolor sit amet</p>

        {/* Headings Outside Boxes */}
        <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto mb-3">
          <h4 className="text-3xl font-bold text-left pl-25">Other</h4>
          <h4 className="text-3xl font-bold text-left text-orange-500 pl-30">Avaron</h4>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-2xl mx-auto">
          {/* Other Box */}
          <div className="bg-black text-white rounded-xl py-8 px-6 text-left">
            <ul className="space-y-3 text-sm">
              {comparisonPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>

          {/* Avaron Box */}
          <div className="bg-orange-400 text-white rounded-xl py-8 px-6 text-left">
            <ul className="space-y-3 text-sm">
              {comparisonPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
