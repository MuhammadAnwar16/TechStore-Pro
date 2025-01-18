import React from "react";
import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Featured Products Section */}
      <div className="bg-white py-12 px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Featured Products
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Explore some of our best-selling and customer-favorite products!
        </p>
        <FeaturedProducts />
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-gray-50 py-16 px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Why Choose TechStore Pro?
        </h2>
        <p className="text-center text-gray-600 mb-12">
          We provide the best products, exceptional customer service, and
          cutting-edge technology for your needs.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
           {
            title: "Quality Products",
            description: "We offer only the best products with guaranteed quality.",
            icon: "https://cdn-icons-png.flaticon.com/512/190/190411.png", // Quality Icon
          },
          {
            title: "Affordable Prices",
            description: "Competitive pricing to make tech accessible to everyone.",
            icon: "https://cdn-icons-png.flaticon.com/512/1040/1040230.png", // Price Tag Icon
          },
          {
            title: "Customer Support",
            description: "24/7 dedicated customer support for all your needs and questions.",
            icon: "https://cdn-icons-png.flaticon.com/512/597/597177.png", // Customer Support Icon
          },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition"
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-[#35393d] text-white py-16 px-8 text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Upgrade Your Tech?</h2>
        <p className="text-lg mb-6">
          Discover the latest gadgets and technology to enhance your lifestyle.
        </p>
        <button className="bg-blue-500 px-6 py-3 rounded text-white font-bold hover:bg-blue-600 transition">
          Shop Now
        </button>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gray-200 py-12 px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Stay updated with the latest products, deals, and news from TechStore
          Pro.
        </p>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 rounded-l-lg w-1/2 md:w-1/3 border-none shadow"
          />
          <button className="bg-blue-500 text-white px-6 py-3 rounded-r-lg font-bold hover:bg-blue-600 transition">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
