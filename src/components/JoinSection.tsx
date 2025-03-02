import React from 'react';
import { motion } from 'framer-motion';
import { Code, BookOpen, Users, ArrowRight } from 'lucide-react';

const JoinSection: React.FC = () => {
  const roles = [
    {
      title: 'Developers',
      icon: <Code className="h-8 w-8 text-purple-500" />,
      description: 'Contribute to open-source blockchain projects and participate in hackathons.',
    },
    {
      title: 'Researchers',
      icon: <BookOpen className="h-8 w-8 text-purple-500" />,
      description: 'Explore blockchain use cases and publish reports.',
    },
    {
      title: 'Community Members',
      icon: <Users className="h-8 w-8 text-purple-500" />,
      description: 'Engage in discussions, attend events, and network with industry professionals.',
    },
  ];

  return (
    <section id="join" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Involved</h2>
          <p className="text-xl text-gray-300">
            Blockchain Club MU is more than just a student club—it's a launchpad for future Web3 leaders. 
            Whether you're a developer, researcher, or enthusiast, there's a place for you here.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {roles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 hover:bg-gray-800/80 transition-all duration-300"
            >
              <div className="mb-6">{role.icon}</div>
              <h3 className="text-xl font-bold mb-4">{role.title}</h3>
              <p className="text-gray-300">{role.description}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-1"
          >
            <div className="bg-gray-900 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Join Our Discord</h3>
              <p className="text-gray-300 mb-6">
                Take the first step towards your blockchain journey by becoming a member of our community.
              </p>
              <a 
                onClick={() => window.open("https://discord.com/invite/rvndQbYAuT", "_blank", "noopener,noreferrer")}
                className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-md transition-colors"
              >
                Connect on Discord
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;