// src/app/page.js

import Header from '@/components/header/Header';
 import Herosection from '@/components/home/HeroSection.js';
import Processwork from '@/components/process/Processwork';
import Aboutus from '@/components/about/Aboutus.js';
   import Aboutus1 from '@/components/about/Aboutus1.js';
   import Faqs from '@/components/faqs/Faqs';
   import Contact from '@/components/contact/Contact';
export default function HomePage() {
  return (
    <div>
      <Header />
      <Herosection />
      <Processwork />
      <Aboutus />
      <Aboutus1 />
      <Faqs />
      <Contact />
    </div>
  );
}
