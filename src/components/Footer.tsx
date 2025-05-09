import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-navy text-white">
      <div className="container py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4">Piotr Siegoczyński</h3>
            <p className="text-gray-300 mb-4">
              Mistrz Świata w Kickboxingu, Trener i Mówca Motywacyjny.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-paleblue transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Szybkie Linki</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/gallery" className="text-gray-300 hover:text-white transition-colors">
                  Galeria
                </Link>
              </li>
              <li>
                <Link to="/appearances" className="text-gray-300 hover:text-white transition-colors">
                  Wydarzenia
                </Link>
              </li>
              <li>
                <Link to="/trainings" className="text-gray-300 hover:text-white transition-colors">
                  Treningi Personalne
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Informacje Kontaktowe</h3>
            <address className="not-italic text-gray-300 space-y-2">
              <p>Warszawa, Polska</p>
              <p>
                <a href="mailto:contact@piotrsiegoczynski.com" className="hover:text-white transition-colors">
                  contact@piotrsiegoczynski.com
                </a>
              </p>
              <p>
                <a href="tel:+48123456789" className="hover:text-white transition-colors">
                  +48 123 456 789
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {year} Piotr Siegoczyński. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
