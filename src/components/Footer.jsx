import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#2D2217] text-white py-6">
      <div className="max-w-7xl mx-auto px-6">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          
          {/* Left Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold tracking-wide">Solovair</h3>
            <p className="text-gray-400 text-sm mt-1">
              A premium platform of timeless elegance, spirituality, and refined design.
            </p>
          </div>

          {/* Social Media */}
          <div className="flex space-x-5 text-gray-400">
            <a
              href="#"
              className="hover:text-blue-500 transition"
              aria-label="Facebook"
            >
              <FaFacebook size={18} />
            </a>
            <a
              href="#"
              className="hover:text-blue-400 transition"
              aria-label="Twitter"
            >
              <FaTwitter size={18} />
            </a>
            <a
              href="#"
              className="hover:text-pink-500 transition"
              aria-label="Instagram"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="#"
              className="hover:text-blue-700 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-6"></div>

        {/* Bottom Section */}
        <div className="text-center text-gray-500 text-xs mt-4 tracking-wide">
          &copy; {new Date().getFullYear()} Solovair. Crafted with excellence and grace.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
