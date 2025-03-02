import React from 'react';
import { motion } from 'framer-motion';

const partners = [
  { name: 'Lumoslabs', logo: '../src/Images/Patners/Lumoslabs.jpg' },
  { name: 'Arbitrum', logo: '../src/Images/Patners/arbitrium.png' },
  { name: 'Aleph Zero', logo: '../src/Images/Patners/Aleph0.png' },
  { name: 'Filecoin', logo: 'https://cryptologos.cc/logos/filecoin-fil-logo.png' },
  { name: 'Polygon', logo: 'https://cryptologos.cc/logos/polygon-matic-logo.png' },
  { name: 'The Graph', logo: 'https://cryptologos.cc/logos/the-graph-grt-logo.png' },
  { name: 'Tech Mahindra', logo: '../src/Images/Patners/TechMahindra.png' },
  { name: 'Hyderabad DAO', logo: '../src/Images/Patners/HydDAO.png' },
  { name: 'IDW', logo: '../src/Images/Patners/IDW.png' },
];

const PartnersMarquee: React.FC = () => {
  return (
    <div className="w-full overflow-hidden bg-gray-900/50 py-8 backdrop-blur-sm">
      <div className="mb-4 text-center">
        <h3 className="text-lg font-medium text-gray-300">Our Partners & Collaborators</h3>
      </div>
      <div className="relative flex overflow-x-hidden">
        <motion.div
          className="flex space-x-12 py-2 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        >
          {partners.concat(partners).map((partner, index) => (
            <div key={index} className="flex items-center justify-center">
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="h-12 w-auto object-contain mx-4 filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PartnersMarquee;