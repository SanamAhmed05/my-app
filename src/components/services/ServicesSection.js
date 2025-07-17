// src/components/services/ServicesSection.js

import Image from 'next/image';
import React from 'react';

const services = [
  {
    image: '/assets/service1.jpeg',
    title: 'Creating Streamlined Safeguarding Processes with OneRen',
    link: 'Readmore →'
  },
  {
    image:'/assets/service2.jpeg',
    title: 'What are your safeguarding responsibilities and how can you manage them?',
    link: 'Readmore →'
  },
  {
    image: '/assets/service3.jpeg',
    title: 'Revamping the Membership Model with Triathlon Australia',
    link: 'Readmore →'
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 text-center">
      <h2 className="text-3xl font-semibold mb-4">Caring is the new marketing</h2>
     <p className="text-gray-600 max-w-xl mx-auto mb-12">
  The Nexcent blog is the best place to read about the latest membership insights,
  trends and more. See who is joining the community, read about how our community
  are increasing their membership income and lot&#39;s more.
</p>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-16">
        {services.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={300}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <p className="font-medium text-gray-800 mb-3">{item.title}</p>
              <a href="#" className="text-green-600 font-semibold hover:underline">{item.link}</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
