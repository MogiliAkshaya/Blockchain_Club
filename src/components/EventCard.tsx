import React from 'react';
import { Calendar } from 'lucide-react';

interface EventCardProps {
  title: string;
  date: string;
  description: string;
  image: string;
  highlights?: string[];
  isPast?: boolean;
}

const EventCard: React.FC<EventCardProps> = ({ 
  title, 
  date, 
  description, 
  image, 
  highlights,
  isPast = true
}) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:bg-gray-800/80 hover:shadow-xl">
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {!isPast && (
          <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
            Upcoming
          </div>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center text-gray-400 text-sm mb-2">
          <Calendar className="h-4 w-4 mr-2" />
          <span>{date}</span>
        </div>
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        
        {highlights && highlights.length > 0 && (
          <div className="mt-4">
            <h4 className="text-sm font-semibold text-gray-300 mb-2">Highlights:</h4>
            <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
              {highlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </div>
        )}
        
        {!isPast && (
          <button className="mt-4 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-md transition-colors">
            Register Now
          </button>
        )}
      </div>
    </div>
  );
};

export default EventCard;