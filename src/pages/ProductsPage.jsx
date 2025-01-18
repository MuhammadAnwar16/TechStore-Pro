import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";

import cameraImage from "../assets/camera.jpg";
import headImage from "../assets/head.jpg";
import headphonesImage from "../assets/headphones.jpg";
import keyImage from "../assets/key.jpg";
import laptopImage from "../assets/laptop.jpg";
import monitorImage from "../assets/monotor.jpg";
import smartphoneImage from "../assets/smartphone.jpg";
import tabletImage from "../assets/tablet.jpg";

const productsData = [
  { id: 1, name: "Camera", category: "Electronics", price: 599, image: cameraImage, description: "High-quality camera for photography." },
  { id: 2, name: "Head", category: "Accessories", price: 49, image: headImage, description: "Ergonomic headgear for support." },
  { id: 3, name: "Headphones", category: "Accessories", price: 199, image: headphonesImage, description: "Noise-cancelling headphones." },
  { id: 4, name: "Keyboard", category: "Accessories", price: 129, image: keyImage, description: "Mechanical RGB keyboard." },
  { id: 5, name: "Laptop", category: "Electronics", price: 999, image: laptopImage, description: "High-performance laptop." },
  { id: 6, name: "Monitor", category: "Electronics", price: 299, image: monitorImage, description: "4K Ultra HD monitor." },
  { id: 7, name: "Smartphone", category: "Electronics", price: 799, image: smartphoneImage, description: "Latest smartphone model." },
  { id: 8, name: "Tablet", category: "Electronics", price: 499, image: tabletImage, description: "Lightweight tablet for portability." },
  { id: 9, name: "Mouse", category: "Accessories", price: 89, image: keyImage, description: "Ergonomic wireless mouse." },
  { id: 10, name: "Speaker", category: "Accessories", price: 149, image: headphonesImage, description: "Portable Bluetooth speaker with deep bass." },
  { id: 11, name: "Drone", category: "Electronics", price: 1199, image: cameraImage, description: "High-tech drone for aerial photography." },
  { id: 12, name: "Charger", category: "Accessories", price: 29, image: headImage, description: "Fast-charging adapter for devices." },
];

const ProductsPage = () => {
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const { cart, dispatch } = useCart();

  const filterAndSortProducts = () => {
    let filteredProducts = [...productsData];
    if (category) {
      filteredProducts = filteredProducts.filter((p) => p.category === category);
    }
    if (sort === "lowToHigh") {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sort === "highToLow") {
      filteredProducts.sort((a, b) => b.price - a.price);
    }
    if (search.trim()) {
      filteredProducts = filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    return filteredProducts;
  };

  const handleAddToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
    toast.success(`${product.name} added to cart!`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  const filteredProducts = filterAndSortProducts();

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <div className="bg-[#35393d] text-white py-12 px-8 text-center">
        <h1 className="text-4xl font-bold">Our Products</h1>
        <p className="text-lg mt-2">Browse through our premium collection of tech products.</p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row px-8 py-10">
        {/* Sidebar */}
        <aside className="w-full lg:w-1/4 bg-white rounded-lg shadow-lg p-6 mb-6 lg:mb-0 lg:mr-6">
          <h2 className="text-xl font-bold mb-4">Filter by Category</h2>
          <ul className="space-y-4">
            {["", "Electronics", "Accessories"].map((cat) => (
              <li
                key={cat}
                className={`cursor-pointer ${
                  category === cat ? "text-blue-500 font-semibold" : "text-gray-700"
                } hover:underline`}
                onClick={() => setCategory(cat)}
              >
                {cat === "" ? "All Products" : cat}
              </li>
            ))}
          </ul>
        </aside>

        {/* Product Grid */}
        <div className="w-full">
          {/* Search and Sort */}
          <div className="flex gap-4 mb-6">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border p-3 rounded-lg w-full md:w-1/2 shadow-sm focus:ring-2 focus:ring-blue-400"
            />
            <select
              className="border p-3 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="">Sort by</option>
              <option value="lowToHigh">Price: Low to High</option>
              <option value="highToLow">Price: High to Low</option>
            </select>
          </div>

          {/* Products */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                onMouseEnter={() => setHoveredProduct(product)}
                onMouseLeave={() => setHoveredProduct(null)}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg shadow-lg flex flex-col justify-between p-6 hover:shadow-xl transition-transform relative"
              >
                {/* Image Section */}
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold mb-2 text-center">{product.name}</h3>
                <p className="text-gray-600 mb-2 text-center">{product.description}</p>
                <p className="text-green-600 font-bold mb-4 text-center">${product.price.toFixed(2)}</p>
                <button
                  className="bg-[#35393d] text-white px-4 py-2 rounded-lg w-full hover:bg-gray-700 transition"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>

                {/* Product Popup */}
                <AnimatePresence>
                  {hoveredProduct === product && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 text-white rounded-lg p-4 flex flex-col justify-center items-center text-center pointer-events-none z-10"
                    >
                      <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                      <p className="text-sm mb-4">{product.description}</p>
                      <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
