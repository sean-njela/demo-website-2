
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Appearances = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Appearances</h1>
          <p className="text-gray-600">
            This page is under construction. Soon you'll find Piotr's upcoming events, 
            seminars, and public appearances schedule here.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Appearances;
