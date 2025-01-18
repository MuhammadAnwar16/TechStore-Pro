import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#35393d] text-white py-4">
      <div className="max-w-7xl mx-auto px-4">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Left Section */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold">TechStore Pro</h3>
            <p className="text-gray-400 text-sm">
              Your one-stop shop for cutting-edge technology and gadgets.
            </p>
          </div>

          {/* Social Media */}
          <div className="flex space-x-4">
  <a
    href="https://www.facebook.com/muhammad-anwar16"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-blue-600 transition"
  >
    <FaFacebook size={18} />
  </a>
  <a
    href="https://twitter.com/muhammad-anwar16"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-blue-400 transition"
  >
    <FaTwitter size={18} />
  </a>
  <a
    href="https://www.linkedin.com/in/muhammad-anwar16"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-400 hover:text-blue-700 transition"
  >
    <FaLinkedin size={18} />
  </a>
</div>

        </div>

        {/* Bottom Section */}
        <div className="text-center text-gray-500 text-xs mt-4">
          &copy; {new Date().getFullYear()} TechStore Pro. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
