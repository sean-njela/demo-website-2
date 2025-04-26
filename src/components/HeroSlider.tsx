
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const HeroSlider = () => {
  const slides = [
    {
      title: "Piotr Siegoczyński",
      subtitle: "Champion",
      image: "https://images.unsplash.com/photo-1517438322307-e67111335449?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    },
    {
      title: "Piotr Siegoczyński",
      subtitle: "Coach",
      image: "https://images.unsplash.com/photo-1580261450046-d0a30080dc9b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1953&q=80"
    },
    {
      title: "Piotr Siegoczyński",
      subtitle: "Inspiration",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be97cd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative h-screen max-h-[800px] overflow-hidden w-full">
      {slides.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      ))}
      
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-10 px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-2 tracking-tight animate-fade-in">
          {slides[currentSlide].title}
        </h1>
        <h2 className="text-3xl md:text-5xl mb-8 font-light animate-slide-right">
          {slides[currentSlide].subtitle}
        </h2>
        <Button className="bg-navy hover:bg-navy-light text-lg px-8 py-6">
          Learn More
        </Button>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
