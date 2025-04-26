
import React from 'react';

const mediaFeatures = [
  {
    id: 1,
    logo: 'https://placehold.co/200x80?text=ESPN',
    title: 'Wschodząca Gwiazda: Droga Piotra na Szczyt',
    excerpt: 'Ekskluzywny wywiad z mistrzem o jego drodze do sukcesu i przyszłych celach.'
  },
  {
    id: 2,
    logo: 'https://placehold.co/200x80?text=Sports+Illustrated',
    title: 'Metody Treningu Mistrzów: Spojrzenie od Środka',
    excerpt: 'Jak Siegoczyński zrewolucjonizował metody treningowe w profesjonalnym kickboxingu.'
  },
  {
    id: 3,
    logo: 'https://placehold.co/200x80?text=BBC+Sports',
    title: 'Mentalność Mistrza: Siła Psychiczna',
    excerpt: 'Piotr dzieli się swoimi taktykami przygotowania mentalnego i sekretami sukcesu.'
  },
  {
    id: 4,
    logo: 'https://placehold.co/200x80?text=NBC',
    title: 'Poza Ringiem: Działalność Społeczna Piotra',
    excerpt: 'Jak mistrz oddaje społeczności poprzez programy młodzieżowe i mentoring.'
  },
];

const MediaSection = () => {
  return (
    <section className="container section-padding">
      <h2 className="section-title text-center">W Mediach</h2>
      
      <div className="flex overflow-x-auto gap-8 py-6 mb-10 no-scrollbar">
        {Array.from({ length: 8 }).map((_, index) => (
          <img 
            key={index}
            src={`https://placehold.co/180x60?text=Media+${index + 1}`}
            alt={`Partner medialny ${index + 1}`}
            className="h-12 object-contain grayscale hover:grayscale-0 transition-all"
          />
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mediaFeatures.map(item => (
          <div key={item.id} className="border border-gray-100 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <img 
                src={item.logo} 
                alt={`${item.title} logo`} 
                className="h-10 object-contain"
              />
              <div className="h-12 w-px bg-gray-200"></div>
              <span className="text-sm text-gray-500">Artykuł</span>
            </div>
            <h3 className="font-bold text-lg mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.excerpt}</p>
            <button className="mt-4 text-navy font-medium hover:text-navy-light transition-colors">
              Czytaj Więcej
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MediaSection;
