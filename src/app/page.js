// src/app/page.js

import Header from '@/components/header/Header';
import HeroSection from '@/components/home/HeroSection';
import ServicesSection from '@/components/services/ServicesSection';
import MembershipCards from '@/components/MembershipCards/MembershipCards';
import FeatureSection from '@/components/FeatureSection/FeatureSection';
export default function HomePage() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ServicesSection/>
      <MembershipCards/>
      <FeatureSection/>
    </div>
  );
}
