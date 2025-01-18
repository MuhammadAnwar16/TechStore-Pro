import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext"; // Import cart context
import logo from "../assets/logo.png";

const Navbar = () => {
  const { user, logout } = useAuth(); // Get user and logout function from AuthContext
  const { cart } = useCart(); // Access cart state
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  const toggleDropdown = () => setShowDropdown((prev) => !prev);
  const handleLogout = () => {
    logout();
    setShowDropdown(false);
    alert("Logged out successfully!");
  };

  return (
    <nav className="bg-[#35393d] text-white px-6 py-0 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="w-8 h-8" />
          <Link to="/" className="text-xl font-bold">
            TechStore Pro
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
            className="focus:outline-none"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`md:flex space-x-6 font-medium absolute md:static top-16 left-0 bg-[#35393d] w-full md:w-auto z-40 md:z-auto md:bg-transparent md:flex-row ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <li className="text-center md:text-left">
            <Link
              to="/"
              className="block md:inline hover:text-blue-400 py-2 md:py-0 transition duration-200 ease-in-out"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="text-center md:text-left">
            <Link
              to="/products"
              className="block md:inline hover:text-blue-400 py-2 md:py-0 transition duration-200 ease-in-out"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
          </li>
          <li className="text-center md:text-left">
            <Link
              to="/about"
              className="block md:inline hover:text-blue-400 py-2 md:py-0 transition duration-200 ease-in-out"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li className="text-center md:text-left">
            <Link
              to="/contact"
              className="block md:inline hover:text-blue-400 py-2 md:py-0 transition duration-200 ease-in-out"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Cart and User Section */}
        <div className="flex items-center space-x-4 relative">
          {/* Cart Section */}
          <Link
            to="/cart"
            className="hover:text-blue-400 transition duration-200 ease-in-out relative"
            aria-label="Cart"
          >
            <FaShoppingCart size={20} />
            {/* Cart Counter */}
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cart.length}
              </span>
            )}
          </Link>

         {/* User Section */}
<div className="relative">
  <button
    onClick={toggleDropdown}
    className="hover:text-blue-400 transition duration-200 ease-in-out flex items-center focus:outline-none"
    aria-label="User"
  >
    <FaUser size={20} />
    {user && (
      <span className="ml-2 text-sm font-medium truncate">
        {user.name}
      </span>
    )}
  </button>

  {/* Dropdown Menu */}
  {showDropdown && (
    <div
      className="absolute right-0 mt-2 bg-white text-gray-800 w-56 rounded-lg shadow-lg z-50 border border-gray-200"
      onMouseLeave={() => setShowDropdown(false)}
    >
      {!user ? (
        <div className="py-2">
          <Link
            to="/login"
            className="block px-4 py-2 hover:bg-gray-100 transition font-medium text-sm"
            onClick={() => setShowDropdown(false)}
          >
            <FaUser className="inline-block mr-2" /> Login
          </Link>
          <Link
            to="/register"
            className="block px-4 py-2 hover:bg-gray-100 transition font-medium text-sm"
            onClick={() => setShowDropdown(false)}
          >
            <FaUser className="inline-block mr-2" /> Register
          </Link>
        </div>
      ) : (
        <div className="py-2">
          <p className="block px-4 py-2 text-sm font-medium text-gray-600 border-b border-gray-200">
            <span className="font-bold text-gray-800">Hello,</span> {user.name}
          </p>
          <Link
            to="/profile"
            className="block px-4 py-2 hover:bg-gray-100 transition font-medium text-sm"
            onClick={() => setShowDropdown(false)}
          >
            <span className="inline-block w-5 text-gray-500 mr-2">👤</span> Profile
          </Link>
          <Link
            to="/orders"
            className="block px-4 py-2 hover:bg-gray-100 transition font-medium text-sm"
            onClick={() => setShowDropdown(false)}
          >
            <span className="inline-block w-5 text-gray-500 mr-2">📦</span> My Orders
          </Link>
          <button
            className="block px-4 py-2 w-full text-left hover:bg-gray-100 transition font-medium text-sm text-red-600"
            onClick={handleLogout}
          >
            <span className="inline-block w-5 text-red-500 mr-2">🚪</span> Logout
          </button>
        </div>
      )}
    </div>
  )}
</div>
</div>  
      </div>
    </nav>
  );
};

export default Navbar;
