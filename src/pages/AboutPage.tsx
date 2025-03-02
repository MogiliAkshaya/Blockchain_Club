import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Lightbulb } from 'lucide-react';

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Mogili Akshaya',
      role: 'Head',
      image: "/Images/Head.jpg",
    },
    {
      name: 'Vaideesh',
      role: 'Vice Head',
      image: "/Images/Vicehead.jpg",
    },
    {
      name: 'Yashwanth',
      role: 'Technical Head',
      image: "/Images/TechHead.jpg",
    },
    {
      name: 'Parth',
      role: 'Technical ViceHead',
      image: "/Images/TechViceHead.jpg",
    },
  ];

  const values = [
    {
      icon: <Users className="h-8 w-8 text-purple-500" />,
      title: 'Community',
      description: 'We believe in the power of community-driven innovation and collaboration.',
    },
    {
      icon: <Award className="h-8 w-8 text-purple-500" />,
      title: 'Excellence',
      description: 'We strive for excellence in all our initiatives and projects.',
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-purple-500" />,
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and innovative approaches.',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2832&auto=format&fit=crop" 
            alt="Blockchain background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-900/90"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-gray-300 mb-8">
              Learn more about Blockchain Club MU, our mission, and the team behind it.
            </p>
          </div>
        </div>
      </section>
      
      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-300 mb-6">
                Blockchain Club MU is a student-led community dedicated to exploring blockchain, Web3, and decentralized technologies. 
                We foster a thriving ecosystem of developers, researchers, and industry leaders through hands-on projects, workshops, and hackathons.
              </p>
              <p className="text-gray-300">
                Our mission is to provide opportunities for collaboration, knowledge sharing, and skill development, 
                bridging the gap between academic learning and industry application. The club fosters an environment 
                where members can explore the complexities of smart contracts, DAOs, NFTs, and other cutting-edge 
                technologies shaping the future of the decentralized web.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className={`${
                    index === 2 ? 'col-span-2' : 'col-span-1'
                  } bg-gray-800/50 backdrop-blur-sm rounded-xl p-6`}
                >
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-300 text-sm">{value.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Team</h2>
            <p className="text-xl text-gray-300">
              Meet the dedicated team behind Blockchain Club MU.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-purple-500">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* History Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
              <div className="relative pl-8 border-l-2 border-purple-600 space-y-12">
                <div>
                  <div className="absolute -left-2.5 w-6 h-6 rounded-full bg-purple-600"></div>
                  <div className="mb-2 text-xl font-bold">Fall Semester 2023</div>
                  <p className="text-gray-300">
                    Blockchain Club MU was founded by a group of passionate students interested in exploring the potential of blockchain technology.
                  </p>
                </div>
                
                <div>
                  <div className="absolute -left-2.5 w-6 h-6 rounded-full bg-purple-600"></div>
                  <div className="mb-2 text-xl font-bold">Spring Semester 2023</div>
                  <p className="text-gray-300">
                    The club expanded its reach, organizing workshops and hackathons that attracted students from various disciplines.
                  </p>
                </div>
                
                <div>
                  <div className="absolute -left-2.5 w-6 h-6 rounded-full bg-purple-600"></div>
                  <div className="mb-2 text-xl font-bold">2023: Industry Partnerships</div>
                  <p className="text-gray-300">
                    We established partnerships with leading blockchain companies and organizations, providing members with industry exposure and opportunities.
                  </p>
                </div>
                
                <div>
                  <div className="absolute -left-2.5 w-6 h-6 rounded-full bg-purple-600"></div>
                  <div className="mb-2 text-xl font-bold">2024: Innovation Hub</div>
                  <p className="text-gray-300">
                    Today, Blockchain Club MU stands as an innovation hub, fostering research, development, and implementation of blockchain solutions.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;