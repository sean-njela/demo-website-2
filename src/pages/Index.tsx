
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSlider from '@/components/HeroSlider';
import NavTiles from '@/components/NavTiles';
import SocialFeed from '@/components/SocialFeed';
import MediaSection from '@/components/MediaSection';
import Newsletter from '@/components/Newsletter';
import Services from '@/components/Services';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSlider />
        <NavTiles />
        <SocialFeed />
        <MediaSection />
        <Newsletter />
        <Services />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
