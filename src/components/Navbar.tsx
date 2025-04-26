
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Instagram } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Update scroll state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex justify-between items-center px-4">
        <Link to="/" className="text-xl font-bold">
          <span className={isScrolled ? 'text-navy' : 'text-white'}>
            PS
          </span>
        </Link>
        
        {/* Desktop menu */}
        <nav className="hidden md:block">
          <ul className="flex gap-6">
            {['Gallery', 'Appearances', 'Personal Trainings', 'Contact'].map((item) => (
              <li key={item}>
                <Link 
                  to={`/${item.toLowerCase().replace(' ', '-')}`}
                  className={`font-medium transition-colors hover:text-navy ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Social and contact button */}
        <div className="hidden md:flex items-center gap-4">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`transition-colors ${
              isScrolled ? 'text-navy hover:text-navy-light' : 'text-white hover:text-paleblue'
            }`}
          >
            <Instagram size={20} />
          </a>
          <Button 
            className={isScrolled ? 'bg-navy hover:bg-navy-light' : 'bg-white text-navy hover:bg-paleblue'}
          >
            Book Now
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-5 flex flex-col justify-between transition-all ${isMenuOpen ? 'transform' : ''}`}>
            <span className={`w-full h-0.5 transition-all transform ${isMenuOpen ? 'rotate-45 translate-y-2 bg-navy' : isScrolled ? 'bg-navy' : 'bg-white'}`}></span>
            <span className={`w-full h-0.5 transition-all ${isMenuOpen ? 'opacity-0 bg-navy' : isScrolled ? 'bg-navy' : 'bg-white'}`}></span>
            <span className={`w-full h-0.5 transition-all transform ${isMenuOpen ? '-rotate-45 -translate-y-2 bg-navy' : isScrolled ? 'bg-navy' : 'bg-white'}`}></span>
          </div>
        </button>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md py-4 md:hidden">
            <nav className="container">
              <ul className="flex flex-col gap-3">
                {['Gallery', 'Appearances', 'Personal Trainings', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link 
                      to={`/${item.toLowerCase().replace(' ', '-')}`}
                      className="block py-2 text-gray-700 hover:text-navy font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-4 border-t border-gray-100 pt-4 flex justify-between items-center">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-navy hover:text-navy-light transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <Button className="bg-navy hover:bg-navy-light">
                  Book Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
