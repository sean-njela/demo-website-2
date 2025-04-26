
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const tiles = [
  {
    title: 'Gallery',
    path: '/gallery',
    description: 'View photos and videos'
  },
  {
    title: 'Appearances',
    path: '/appearances',
    description: 'Events & schedules'
  },
  {
    title: 'Personal Trainings',
    path: '/trainings',
    description: 'Work with me'
  },
  {
    title: 'Contact',
    path: '/contact',
    description: 'Get in touch'
  }
];

const NavTiles = () => {
  return (
    <section className="container section-padding">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {tiles.map((tile, index) => (
          <Link to={tile.path} key={index}>
            <div className="nav-tile group">
              <div className="absolute inset-0 bg-navy-light/20 group-hover:bg-navy-light/0 transition-colors duration-300"></div>
              <div className="text-center z-10 p-4">
                <h3 className="text-xl md:text-2xl font-bold mb-2">{tile.title}</h3>
                <p className="text-sm opacity-90">{tile.description}</p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="mx-auto" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default NavTiles;
