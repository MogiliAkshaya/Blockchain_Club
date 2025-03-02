import React from "react";
import { Link } from "react-router-dom";
import {
  Blocks,
  Instagram,
  Twitter,
  Linkedin,
  MessageSquare,
  Send,
} from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Blocks className="h-8 w-8 text-purple-500" />
              <span className="text-xl font-bold tracking-tight">
                Blockchain Club MU
              </span>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              A student-led community dedicated to exploring blockchain, Web3,
              and decentralized technologies.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/blockchain_mu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-500 transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://x.com/blockchain_mu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-500 transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/mu-blockchain-club/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-500 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://discord.com/invite/rvndQbYAuT"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-500 transition-colors"
              >
                <MessageSquare className="h-5 w-5" />
              </a>
              {/* <a
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-500 transition-colors"
              >
                <Send className="h-5 w-5" />
              </a> */}
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-purple-500 transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-purple-500 transition-colors text-sm"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="text-gray-400 hover:text-purple-500 transition-colors text-sm"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/resources"
                  className="text-gray-400 hover:text-purple-500 transition-colors text-sm"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-purple-500 transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-purple-500 transition-colors text-sm"
                >
                  Blockchain Basics
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-purple-500 transition-colors text-sm"
                >
                  Web3 Development
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-purple-500 transition-colors text-sm"
                >
                  Smart Contracts
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-purple-500 transition-colors text-sm"
                >
                  NFTs & DAOs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-purple-500 transition-colors text-sm"
                >
                  Career Opportunities
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400 text-sm mb-2">
              Blockchain Club, Mahindra University
            </p>
            <a
              href="mailto:blockchainclub@mahindrauniversity.edu.in"
              className="text-purple-500 hover:text-purple-400 transition-colors text-sm"
            >
              blockchainclub@mahindrauniversity.edu.in
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Blockchain Club MU. All rights
            reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-500 hover:text-purple-500 transition-colors text-sm mr-4"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-purple-500 transition-colors text-sm"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
