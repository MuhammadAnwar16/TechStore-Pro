import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const featuredProducts = [
  {
    id: 1,
    name: "Classic Solovair Boot",
    description: "Handcrafted heritage design with premium leather finish.",
    price: 299,
    image: "https://images.unsplash.com/photo-1606813902913-f6e8ef9a9f59?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Chelsea Boot",
    description: "Sleek silhouette blending timeless style and modern comfort.",
    price: 279,
    image: "https://images.unsplash.com/photo-1603808033192-6f6d8b4ffbb1?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Oxford Dress Boot",
    description: "Refined craftsmanship for sophisticated urban looks.",
    price: 319,
    image: "https://images.unsplash.com/photo-1589187155470-1c6736e796de?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Derby Utility Boot",
    description: "Rugged durability with elite detailing for all-day wear.",
    price: 289,
    image: "https://images.unsplash.com/photo-1593032465171-d40b1a6be8b4?auto=format&fit=crop&w=800&q=80",
  },
];

const FeaturedProducts = () => {
  return (
    <div className="py-16 px-6 bg-white font-inter">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuredProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            whileHover={{ scale: 1.03 }}
            className="bg-[#fafafa] border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
          >
            {/* Product Image */}
            <div className="relative w-full h-56 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Product Details */}
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2 font-playfair">
                {product.name}
              </h3>
              <p className="text-gray-600 text-sm flex-grow">{product.description}</p>
              <p className="text-gray-800 font-semibold mt-4 text-lg">
                ${product.price}
              </p>
            </div>

            {/* Button */}
            <div className="px-6 pb-6">
              <Link
                to="/products"
                className="block text-center bg-[#35393d] text-white py-2.5 rounded-full font-medium hover:bg-black transition"
              >
                Explore
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
