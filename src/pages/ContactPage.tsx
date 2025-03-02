import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Instagram, Twitter, Linkedin, MessageSquare, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2940&auto=format&fit=crop" 
            alt="Contact background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-900/90"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-300 mb-8">
              Have questions or want to collaborate? Reach out to us!
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8"
            >
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <form>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                    placeholder="Subject"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea 
                    id="message" 
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white resize-none"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-md transition-colors"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-purple-500 mr-4 mt-1" />
                    <div>
                      <h3 className="font-medium mb-1">Address</h3>
                      <p className="text-gray-300">Blockchain Club, Mahindra University</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-purple-500 mr-4 mt-1" />
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <a href="mailto:blockchainclub@mahindrauniversity.edu.in" className="text-purple-500 hover:text-purple-400 transition-colors">
                        blockchainclub@mahindrauniversity.edu.in
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-purple-500 mr-4 mt-1" />
                    <div>
                      <h3 className="font-medium mb-1">Phone</h3>
                      <p className="text-gray-300">+91 9154466383</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-6">Follow Us</h2>
                <div className="grid grid-cols-2 gap-4">
                  <a 
                    href="https://instagram.com/blockchain_mu" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    <Instagram className="h-6 w-6 text-purple-500 mr-3" />
                    <span>Instagram</span>
                  </a>
                  
                  <a 
                    href="https://x.com/blockchain_mu" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    <Twitter className="h-6 w-6 text-purple-500 mr-3" />
                    <span>Twitter</span>
                  </a>
                  
                  <a 
                    href="https://www.linkedin.com/company/mu-blockchain-club/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    <Linkedin className="h-6 w-6 text-purple-500 mr-3" />
                    <span>LinkedIn</span>
                  </a>
                  
                  <a 
                    href="https://discord.com/invite/rvndQbYAuT" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    <MessageSquare className="h-6 w-6 text-purple-500 mr-3" />
                    <span>Discord</span>
                  </a>
                  
                  {/* <a 
                    href="https://t.me" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    <Send className="h-6 w-6 text-purple-500 mr-3" />
                    <span>Telegram</span>
                  </a> */}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Find Us</h2>
            <p className="text-xl text-gray-300">
              Visit us at Mahindra University campus.
            </p>
          </div>
          
          <div className="rounded-xl overflow-hidden h-96">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3803.7139183143654!2d78.43288647516916!3d17.56880208334964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb8f06a86f0315%3A0x2f80d6e75d32cc14!2sMahindra%20University!5e0!3m2!1sen!2sin!4v1740935937004!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;