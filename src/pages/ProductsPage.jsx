import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { useCart } from "../context/CartContext";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const { dispatch } = useCart();

  // Fetch products from backend and ensure price is a number
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:5000/products");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        const parsedData = data.map((p) => ({
          ...p,
          price: Number(p.price),
        }));
        setProducts(parsedData);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProducts();
  }, []);

  // Add product to cart
  const handleAddToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
    toast.success(`${product.name} added to cart!`, { autoClose: 2000 });
  };

  // Filter, sort, and search products
  const filterAndSortProducts = () => {
    let filtered = [...products];

    // Filter by style
    if (category) {
      filtered = filtered.filter((p) => p.style === category);
    }

    // Search by name
    if (search.trim() !== "") {
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Sort by price
    if (sort === "lowToHigh") filtered.sort((a, b) => a.price - b.price);
    if (sort === "highToLow") filtered.sort((a, b) => b.price - a.price);

    return filtered;
  };

  const filteredProducts = filterAndSortProducts();

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 px-8 rounded-2xl shadow-lg text-center mb-16">
        <h1 className="text-5xl font-extrabold tracking-wide uppercase">
          Our Collection
        </h1>
        <p className="text-lg mt-4 opacity-90">
          Handcrafted British footwear built to last. Explore our styles and find your perfect pair.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row px-8 py-10 max-w-7xl mx-auto">
        {/* Sidebar */}
        <aside className="w-full lg:w-1/4 bg-white rounded-xl shadow-lg p-6 mb-6 lg:mb-0 lg:mr-6">
          <h2 className="text-xl font-bold mb-6 text-gray-800">Filter by Style</h2>
          <ul className="space-y-3">
            {["", "Loafers", "Chelsea", "Oxford", "Derby", "Boots"].map((cat) => (
              <li
                key={cat}
                className={`cursor-pointer ${
                  category === cat
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-gray-900"
                } transition`}
                onClick={() => setCategory(cat)}
              >
                {cat === "" ? "All Styles" : cat}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <h2 className="text-xl font-bold mb-3 text-gray-800">Sort by Price</h2>
            <select
              className="border p-3 w-full rounded-lg focus:ring-2 focus:ring-blue-400"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="">Default</option>
              <option value="lowToHigh">Low to High</option>
              <option value="highToLow">High to Low</option>
            </select>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="w-full">
          {/* Search */}
          <div className="flex gap-4 mb-8">
            <input
              type="text"
              placeholder="Search collection..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border p-3 rounded-lg w-full md:w-1/2 shadow-sm focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-2xl shadow-md flex flex-col justify-between p-6 hover:shadow-2xl transition-all duration-300"
              >
                <div className="rounded-xl overflow-hidden mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover transform transition duration-300 hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-bold mb-1 text-center text-gray-800">
                  {product.name}{" "}
                  {product.featured && <span className="text-yellow-400 font-bold">★</span>}
                </h3>
                <p className="text-gray-500 mb-3 text-center text-sm">
                  {product.description}
                </p>
                <p className="text-gray-800 font-bold text-center mb-4 text-lg">
                  ${product.price.toFixed(2)}
                </p>

                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-gray-800 text-white py-3 rounded-lg font-semibold hover:bg-gray-900 transition"
                >
                  Add to Cart
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
