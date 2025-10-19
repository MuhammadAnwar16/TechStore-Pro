import React from "react";
import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import { motion } from "framer-motion";
import { ShieldCheck, Gem, Handshake } from "lucide-react";


const Homepage = () => {
  return (
    <div className="bg-[#f8f8f8] text-gray-900 font-inter min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Featured Products */}
      <section className="bg-white py-16 px-8">
        <h2 className="text-3xl md:text-4xl font-playfair text-center mb-4">
          Featured Collection
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover our handpicked selection of premium products built for quality and style.
        </p>
        <FeaturedProducts />
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#f5f5f5] py-20 px-8">
        <h2 className="text-3xl md:text-4xl font-playfair text-center mb-4">
          Why Choose Us
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Excellence in every product. Reliability in every interaction.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
  {
    title: "Uncompromised Quality",
    description: "Our products meet the highest standards to ensure lasting satisfaction.",
    icon: <ShieldCheck size={48} className="mx-auto text-[#35393d]" />,
  },
  {
    title: "Refined Design",
    description: "Every product is curated for aesthetics, innovation, and usability.",
    icon: <Gem size={48} className="mx-auto text-[#35393d]" />,
  },
  {
    title: "Dedicated Support",
    description: "Our team ensures seamless service from inquiry to aftercare.",
    icon: <Handshake size={48} className="mx-auto text-[#35393d]" />,
  },
].map((item, i) => (
  <motion.div
    key={i}
    whileHover={{ scale: 1.05 }}
    className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition text-center"
  >
    <div className="mb-4">{item.icon}</div>
    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
    <p className="text-gray-600">{item.description}</p>
  </motion.div>
))}

        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#2D2217] text-white text-center py-20 px-8">
        <h2 className="text-4xl md:text-5xl font-playfair mb-4">
          Elevate Your Everyday
        </h2>
        <p className="text-lg text-gray-300 mb-6">
          Explore craftsmanship, performance, and design in one place.
        </p>
        <button className="bg-white text-[#35393d] px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          Explore Collection
        </button>
      </section>

      {/* Newsletter */}
      <section className="bg-gray-100 py-16 px-8 text-center">
        <h2 className="text-3xl font-playfair mb-3">Stay Updated</h2>
        <p className="text-gray-600 mb-8 max-w-lg mx-auto">
          Subscribe to receive updates on new arrivals and exclusive offers.
        </p>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 rounded-l-full w-1/2 md:w-1/3 border shadow-sm focus:outline-none"
          />
          <button className="bg-[#35393d] text-white px-6 py-3 rounded-r-full font-semibold hover:bg-black transition">
            Subscribe
          </button>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
