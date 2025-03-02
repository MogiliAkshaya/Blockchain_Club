import React from 'react';
import { motion } from 'framer-motion';
import EventCard from '../components/EventCard';

const EventsPage: React.FC = () => {
  const upcomingEvents = [
    {
      title: 'Web3 Build-a-thon 2024',
      date: 'Coming Soon',
      description: 'A 12-hour hackathon where participants will have the opportunity to transform Web2 applications into decentralized Web3 solutions.',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2940&auto=format&fit=crop',
      highlights: [
        'Collaborate with industry experts',
        'Gain hands-on experience with blockchain technology',
        'Compete for prizes and career opportunities',
        'Challenge skills and explore innovative solutions'
      ],
      isPast: false
    }
  ];

  const pastEvents = [
    {
      title: 'IDEATHON',
      date: 'Feb 17, 2024',
      description: 'A high-impact competition where teams pitched blockchain solutions in financial inclusion, healthcare, DAOs, NFTs, education, and gaming.',
      image: '/Images/Events/Ideathon.jpg',
      highlights: [
        'Sponsored Merch: Participants received exclusive swag from Polygon & The Graph',
        'Evaluation Criteria: Creativity, feasibility, originality, and social impact'
      ]
    },
    {
      title: 'Billion Reasons to Build (Push BRB Tour)',
      date: 'January 2024',
      description: 'A pan-India blockchain initiative with Push Protocol and 12+ global Web3 companies.',
      image: '/Images/Events/push.jpg',
      highlights: [
        'Workshops, expert panels, and networking with top Web3 innovators'
      ]
    },
    {
      title: 'Web3Camp with GirlScript',
      date: 'Dec 4-5, 2023',
      description: 'A city-wide event introducing students to blockchain technology and career opportunities.',
      image: '/Images/Events/GirlsScript.jpg',
      highlights: [
        'Internship Opportunities: Industry leaders identified top talent for internships',
        'Non-Tech Participation: Special sessions for MBA, Law, and Management students'
      ]
    },
    {
      title: 'Aleph Zero Workshop - 1',
      date: 'Sep 18, 2023',
      description: 'An introduction to blockchain technology with insights from industry leaders.',
      image: '/Images/Events/Aleph1.jpg',
      highlights: [
        'Led by Rajashekar, Founder of Colibri Validator & Aleph Zero India Lead',
        'Co-led by Siv Ram Shastri, Co-founder of Hyderabad DAO & Aleph Zero India Co-Lead',
        'Included exclusive NFTs, merchandise, and hands-on blockchain activities'
      ]
    },
    {
      title: 'Namaste Arbitrum Workshop',
      date: 'Oct 14, 2023',
      description: 'An in-depth session on Ethereum, Arbitrum, and blockchain governance.',
      image: '/Images/Events/Namaste.jpg',
      highlights: [
        'Covered Ethereum fundamentals, Arbitrum governance, and blockchain career paths',
        'Included merch, certificates, and surprise quiz prizes'
      ]
    },
    {
      title: 'Web3 101: Blockchain Dev Kickoff',
      date: 'Jan 29, 2024',
      description: 'A hands-on workshop on blockchain development.',
      image: '/Images/Events/Devkickoff.jpg',
      highlights: [
        'Explored EVM chains, MetaMask wallet setup, and transactions',
        'Provided exclusive Web3 resources'
      ]
    },
    {
      title: 'Aleph Zero Blockchain Session - 2',
      date: 'Feb 5, 2024',
      description: 'An interactive session on privacy infrastructure and blockchain projects.',
      image: '/Images/Events/Aleph2.jpg',
      highlights: [
        'Led by Rajashekar (Colibri Validator & Aleph Zero India Lead)',
        'Co-led by Siv Ram Shastri (Hyderabad DAO & Aleph Zero India Co-Lead)',
        'Included blockchain activities, POAPs & NFT rewards, and networking opportunities'
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2874&auto=format&fit=crop" 
            alt="Events background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-900/90"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Events</h1>
            <p className="text-xl text-gray-300 mb-8">
              Discover our upcoming and past blockchain events, workshops, and hackathons.
            </p>
          </div>
        </div>
      </section>
      
      {/* Upcoming Events */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-12 relative inline-block">
              Upcoming Events
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-purple-600"></span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {upcomingEvents.map((event, index) => (
                <EventCard 
                  key={index}
                  title={event.title}
                  date={event.date}
                  description={event.description}
                  image={event.image}
                  highlights={event.highlights}
                  isPast={false}
                />
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-12 relative inline-block">
              Past Events
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-purple-600"></span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.map((event, index) => (
                <EventCard 
                  key={index}
                  title={event.title}
                  date={event.date}
                  description={event.description}
                  image={event.image}
                  highlights={event.highlights}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Collaborations Section */}
      {/* <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Collaborations & Industry Engagement</h2>
            <p className="text-xl text-gray-300">
              We partner with leading blockchain organizations, startups, and DAOs to bring cutting-edge opportunities to students.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6">Collaborations & Partners</h3>
              <ul className="space-y-4">
                {[
                  'Push Protocol (Decentralized notifications & chat)',
                  'Namaste Arbitrum (Ethereum Layer 2 scaling)',
                  'PYOR (Power Your Own Research)',
                  'India Blockchain Week 2023',
                  'Aleph Zero (Privacy-focused blockchain)',
                  'Accelchain (Enterprise blockchain solutions)',
                  'Hyderabad DAO (Web3 community & ecosystem)'
                ].map((partner, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span className="text-gray-300">{partner}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6">Guest Speakers & Mentors</h3>
              <p className="text-gray-300 mb-4">
                We bring industry pioneers to share insights and offer mentorship. Past speakers include:
              </p>
              <ul className="space-y-4">
                {[
                  'Tech Mahindra (Enterprise blockchain solutions)',
                  'Filecoin (Decentralized storage solutions)',
                  'Instadapp (DeFi infrastructure)'
                ].map((speaker, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-purple-500 mr-2">•</span>
                    <span className="text-gray-300">{speaker}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default EventsPage;