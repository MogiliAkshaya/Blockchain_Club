import React from 'react';
import Hero from '../components/Hero';
import PartnersMarquee from '../components/PartnersMarquee';
import JoinSection from '../components/JoinSection';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Users, BookOpen } from 'lucide-react';

const HomePage: React.FC = () => {
  const featuredEvents = [
    {
      title: 'Web3 Build-a-thon 2024',
      date: 'Coming Soon',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2940&auto=format&fit=crop',
      description: 'A 12-hour hackathon transforming Web2 applications into decentralized Web3 solutions.',
    },
    {
      title: 'IDEATHON',
      date: 'Feb 17, 2024',
      image: '../src/Images/Events/Ideathon.jpg',
      description: 'Teams pitched blockchain solutions in financial inclusion, healthcare, DAOs, NFTs, education, and gaming.',
    },
  ];

  return (
    <>
      <Hero />
      
      <PartnersMarquee />
      
      {/* About Section Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">About Blockchain Club MU</h2>
              <p className="text-gray-300 mb-6 text-lg">
                We foster a thriving ecosystem of developers, researchers, and industry leaders through hands-on projects, 
                workshops, and hackathons. The club creates an environment where members can explore the complexities of 
                smart contracts, DAOs, NFTs, and other cutting-edge technologies shaping the future of the decentralized web.
              </p>
              <Link 
                to="/about" 
                className="inline-flex items-center text-purple-500 hover:text-purple-400 font-medium"
              >
                Learn more about us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-video rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1591994843349-f415893b3a6b?q=80&w=2940&auto=format&fit=crop" 
                  alt="Blockchain Club MU Team" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-purple-600 rounded-xl p-6 shadow-xl">
                <div className="text-4xl font-bold">3+</div>
                <div className="text-sm">Years of Innovation</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Featured Events */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Events</h2>
            <p className="text-xl text-gray-300">
              Join us for exciting blockchain events, workshops, and hackathons.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {featuredEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:bg-gray-800/80"
              >
                <div className="aspect-video w-full overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {index === 0 && (
                    <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Upcoming
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center text-gray-400 text-sm mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{event.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-300 mb-4">{event.description}</p>
                  {index === 0 ? (
                    <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-md transition-colors">
                      Register Interest
                    </button>
                  ) : (
                    <Link 
                      to="/events" 
                      className="text-purple-500 hover:text-purple-400 text-sm font-medium"
                    >
                      View Details
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center">
            <Link 
              to="/events" 
              className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-md transition-colors"
            >
              View All Events
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 text-center"
            >
              <Calendar className="h-12 w-12 text-purple-500 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-gray-300">Events Organized</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 text-center"
            >
              <Users className="h-12 w-12 text-purple-500 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">60+</div>
              <div className="text-gray-300">Active Members</div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 text-center"
            >
              <BookOpen className="h-12 w-12 text-purple-500 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">10+</div>
              <div className="text-gray-300">Partners</div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Gallery Preview */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Event Gallery</h2>
            <p className="text-xl text-gray-300">
              Glimpses from our past events and activities.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              '../src/Images/Events/Ideathon.jpg',
              '../src/Images/Events/push.jpg',
              '../src/Images/Events/GirlsScript.jpg',
              '../src/Images/Events/Aleph1.jpg',
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="aspect-square overflow-hidden rounded-xl"
              >
                <img 
                  src={image} 
                  alt={`Event gallery ${index + 1}`} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <JoinSection />
    </>
  );
};

export default HomePage;