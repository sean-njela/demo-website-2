
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PersonalTrainings = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Personal Trainings</h1>
          <p className="text-gray-600">
            This page is under construction. Soon you'll find detailed information about 
            Piotr's personal training services, packages, and booking options.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PersonalTrainings;
