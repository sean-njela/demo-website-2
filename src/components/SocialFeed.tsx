
import React from 'react';
import { Instagram } from 'lucide-react';

// Mock Instagram posts
const instagramPosts = [
  {
    id: 1,
    imageUrl: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    likes: 734,
    caption: 'Morning training session. Ready for the day! #kickboxing #training #champion'
  },
  {
    id: 2,
    imageUrl: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    likes: 892,
    caption: 'New workout plan dropping next week. Stay tuned! #fitnessmotivation #workout'
  },
  {
    id: 3,
    imageUrl: 'https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    likes: 1245,
    caption: 'Thanks for all who came to yesterday\'s seminar! #grateful #seminar #teaching'
  },
  {
    id: 4,
    imageUrl: 'https://images.unsplash.com/photo-1609899464926-c3d613589928?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    likes: 958,
    caption: 'New sponsor announcement coming soon. #partnership #announcement #excited'
  }
];

const SocialFeed = () => {
  return (
    <section className="bg-paleblue section-padding">
      <div className="container container-padding">
        <div className="flex items-center justify-between mb-10">
          <h2 className="section-title">Latest From Instagram</h2>
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-navy hover:text-navy-light transition-colors"
          >
            <Instagram size={20} />
            <span className="font-medium">@piotr.siegoczynski</span>
          </a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {instagramPosts.map(post => (
            <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={`Instagram post ${post.id}`} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                  <Instagram size={16} />
                  <span>{post.likes} likes</span>
                </div>
                <p className="text-sm line-clamp-2">{post.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialFeed;
