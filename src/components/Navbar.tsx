import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Blocks } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Events', path: '/events' },
    { name: 'Resources', path: '/resources' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            {/* <Blocks className="h-8 w-8 text-purple-500" /> */}
            <img src="/Images/logo1.png" alt="" className='h-9 w-9' />
            <span className="text-xl font-bold tracking-tight text-purple-500">BLOCKCHAIN MAHINDRA UNIVERSITY</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-purple-400 ${
                  location.pathname === link.path ? 'text-purple-500' : 'text-gray-200'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="#join"
              className="px-4 py-2 text-sm font-medium bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors"
            >
              Join Us
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-200 hover:text-white"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 shadow-xl">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-base font-medium transition-colors hover:text-purple-400 ${
                    location.pathname === link.path ? 'text-purple-500' : 'text-gray-200'
                  }`}
                  onClick={closeMenu}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="#join"
                className="px-4 py-2 text-center text-sm font-medium bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors"
                onClick={closeMenu}
              >
                Join Us
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
