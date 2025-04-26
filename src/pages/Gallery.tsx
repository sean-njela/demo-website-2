
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Gallery = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Gallery</h1>
          <p className="text-gray-600">
            This page is under construction. Check back soon for photos and videos of Piotr's competitions, 
            training sessions, and events.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
