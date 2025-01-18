import React from "react";
import { Link } from "react-router-dom";
import laptopImage from "../assets/laptop.jpg";
import headphonesImage from "../assets/headphones.jpg";
import smartphoneImage from "../assets/smartphone.jpg";
import keyboardImage from "../assets/key.jpg";

const featuredProducts = [
  {
    id: 1,
    name: "Laptop",
    description: "High-performance laptop",
    price: 999,
    image: laptopImage,
  },
  {
    id: 2,
    name: "Headphones",
    description: "Noise-cancelling headphones",
    price: 199,
    image: headphonesImage,
  },
  {
    id: 3,
    name: "Smartphone",
    description: "Latest smartphone model",
    price: 799,
    image: smartphoneImage,
  },
  {
    id: 4,
    name: "Keyboard",
    description: "Mechanical keyboard",
    price: 129,
    image: keyboardImage,
  },
];

const FeaturedProducts = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredProducts.map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded-lg shadow hover:shadow-lg transition-shadow flex flex-col justify-between"
          >
            {/* Image Wrapper */}
            <div className="aspect-w-16 aspect-h-9 mb-4 rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Details */}
            <div className="flex-grow">
              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-2">{product.description}</p>
              <p className="text-green-600 font-bold mb-4">${product.price}</p>
            </div>

            {/* Button */}
            <Link
              to="/products"
              className="bg-blue-500 text-white px-4 py-2 rounded mt-auto block text-center hover:bg-blue-600 transition"
            >
              Shop Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
