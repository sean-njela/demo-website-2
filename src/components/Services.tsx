
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    id: 1,
    title: 'Trening Personalny',
    description: 'Indywidualne treningi dostosowane do Twoich celów, niezależnie czy jesteś początkującym, czy profesjonalnym sportowcem.',
    priceLabel: 'Od 70€/sesja',
    image: 'https://images.unsplash.com/photo-1554284126-aa88f22d8b74?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
  },
  {
    id: 2,
    title: 'Seminaria Grupowe',
    description: 'Warsztaty techniczne dla klubów i organizacji skupiające się na właściwej technice i aspektach taktycznych.',
    priceLabel: 'Wycena indywidualna',
    image: 'https://images.unsplash.com/photo-1519311965067-36d3e5f33d39?ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80'
  },
  {
    id: 3,
    title: 'Coaching Mentalny',
    description: 'Trening mentalny i coaching pomagający przełamać bariery i osiągnąć szczytową formę.',
    priceLabel: 'Programy indywidualne',
    image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
  }
];

const Services = () => {
  return (
    <section className="container section-padding">
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h2 className="section-title text-center">Współpracuj ze Mną</h2>
        <p className="text-gray-600">Przekształć swoje umiejętności, mentalność i wyniki pod okiem mistrza świata.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map(service => (
          <div key={service.id} className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/80 z-10"></div>
            <img 
              src={service.image} 
              alt={service.title} 
              className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 p-5 text-white z-20">
              <h3 className="text-xl font-bold mb-1">{service.title}</h3>
              <p className="text-sm mb-3 opacity-90 line-clamp-2">{service.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">{service.priceLabel}</span>
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 p-2 rounded-full">
                  <ArrowRight size={18} />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <Button className="bg-navy hover:bg-navy-light text-white px-10 py-6 text-lg">
          Umów Konsultację
        </Button>
      </div>
    </section>
  );
};

export default Services;
