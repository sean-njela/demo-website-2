
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Gallery = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Galeria</h1>
          <p className="text-gray-600">
            Ta strona jest w budowie. Wkrótce pojawią się tutaj zdjęcia i filmy z zawodów, 
            treningów i wydarzeń Piotra.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
