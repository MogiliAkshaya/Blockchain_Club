import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, FileText, Video, Link as LinkIcon } from 'lucide-react';

const ResourcesPage: React.FC = () => {
  // const resourceCategories = [
  //   {
  //     title: 'Blockchain Basics',
  //     icon: <BookOpen className="h-8 w-8 text-purple-500" />,
  //     resources: [
  //       { title: 'Introduction to Blockchain Technology', type: 'Article', link: '#' },
  //       { title: 'How Does Blockchain Work?', type: 'Video', link: '#' },
  //       { title: 'Blockchain vs. Traditional Databases', type: 'Article', link: '#' },
  //       { title: 'Consensus Mechanisms Explained', type: 'Guide', link: '#' },
  //     ]
  //   },
  //   {
  //     title: 'Web3 Development',
  //     icon: <FileText className="h-8 w-8 text-purple-500" />,
  //     resources: [
  //       { title: 'Getting Started with Solidity', type: 'Tutorial', link: '#' },
  //       { title: 'Building Your First dApp', type: 'Workshop', link: '#' },
  //       { title: 'Web3.js vs. Ethers.js', type: 'Comparison', link: '#' },
  //       { title: 'Testing Smart Contracts', type: 'Guide', link: '#' },
  //     ]
  //   },
  //   {
  //     title: 'Blockchain Use Cases',
  //     icon: <LinkIcon className="h-8 w-8 text-purple-500" />,
  //     resources: [
  //       { title: 'Blockchain in Finance', type: 'Case Study', link: '#' },
  //       { title: 'Supply Chain & Blockchain', type: 'Article', link: '#' },
  //       { title: 'NFTs Beyond Art', type: 'Research', link: '#' },
  //       { title: 'DAOs: The Future of Organizations', type: 'Whitepaper', link: '#' },
  //     ]
  //   },
  //   {
  //     title: 'Video Resources',
  //     icon: <Video className="h-8 w-8 text-purple-500" />,
  //     resources: [
  //       { title: 'Blockchain Fundamentals', type: 'Video Series', link: '#' },
  //       { title: 'Smart Contract Security', type: 'Workshop Recording', link: '#' },
  //       { title: 'Web3 Career Paths', type: 'Panel Discussion', link: '#' },
  //       { title: 'Ethereum 2.0 Explained', type: 'Lecture', link: '#' },
  //     ]
  //   },
  // ];

  // const featuredBlogs = [
  //   {
  //     title: 'The Evolution of Blockchain Technology',
  //     excerpt: 'Explore how blockchain has evolved from Bitcoin to complex ecosystems powering the decentralized web.',
  //     date: 'March 15, 2024',
  //     image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2832&auto=format&fit=crop',
  //     author: 'Alex Johnson'
  //   },
  //   {
  //     title: 'Understanding Zero-Knowledge Proofs',
  //     excerpt: 'A beginner-friendly guide to zero-knowledge proofs and their applications in blockchain privacy.',
  //     date: 'February 28, 2024',
  //     image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2832&auto=format&fit=crop',
  //     author: 'Priya Sharma'
  //   },
  //   {
  //     title: 'The Rise of Layer 2 Solutions',
  //     excerpt: 'How Layer 2 scaling solutions are addressing blockchain scalability challenges.',
  //     date: 'January 20, 2024',
  //     image: 'https://images.unsplash.com/photo-1642059889111-3d0d0dbe0892?q=80&w=2832&auto=format&fit=crop',
  //     author: 'David Kim'
  //   },
  // ];

  return (
    <div className="pt-20">
      
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1642059889111-3d0d0dbe0892?q=80&w=2832&auto=format&fit=crop" 
            alt="Resources background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-900/90"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Resources & Blogs</h1>
            <p className="text-xl text-gray-300 mb-8">
              This Resources will be updated soon 🙌
              {/* Dive into our blogs and resources to learn more about blockchain and Web3. We offer easy-to-understand content for beginners and deep insights for those looking to advance their knowledge in the field. */}
            </p>
          </div>
        </div>
      </section>
      
      {/* Featured Blogs
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
              Featured Blogs
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-purple-600"></span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredBlogs.map((blog, index) => (
                <div 
                  key={index} 
                  className="group bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-gray-800/80 transition-all duration-300"
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center text-sm text-gray-400 mb-2">
                      <span>{blog.date}</span>
                      <span>By {blog.author}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
                    <p className="text-gray-300 mb-4">{blog.excerpt}</p>
                    <a 
                      href="#" 
                      className="text-purple-500 hover:text-purple-400 text-sm font-medium"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section> */}
      
      {/* Resource Categories
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Learning Resources</h2>
            <p className="text-xl text-gray-300">
              Explore our curated collection of blockchain and Web3 resources.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resourceCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8"
              >
                <div className="flex items-center mb-6">
                  <div className="mr-4">{category.icon}</div>
                  <h3 className="text-2xl font-bold">{category.title}</h3>
                </div>
                
                <ul className="space-y-4">
                  {category.resources.map((resource, idx) => (
                    <li key={idx} className="flex justify-between items-center border-b border-gray-700 pb-3">
                      <a href={resource.link} className="text-gray-300 hover:text-purple-500 transition-colors">
                        {resource.title}
                      </a>
                      <span className="text-xs px-2 py-1 bg-gray-700 rounded-full text-gray-300">
                        {resource.type}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 text-right">
                  <a 
                    href="#" 
                    className="text-purple-500 hover:text-purple-400 text-sm font-medium"
                  >
                    View All
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
      
      {/* Newsletter Section
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl p-1">
            <div className="bg-gray-900 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="text-gray-300 mb-6">
                Subscribe to our newsletter to receive the latest blockchain resources, event updates, and industry insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-grow px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-md transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default ResourcesPage;