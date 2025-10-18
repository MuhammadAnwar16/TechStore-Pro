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

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:5000/products");
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        setProducts(data.map(p => ({ ...p, price: Number(p.price) })));
      } catch (err) {
        console.error(err);
      }
    };
    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
    toast.success(`${product.name} added to cart!`, { autoClose: 2000 });
  };

  const filterAndSortProducts = () => {
    let filtered = [...products];
    if (category) filtered = filtered.filter(p => p.style === category);
    if (search.trim() !== "")
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    if (sort === "lowToHigh") filtered.sort((a, b) => a.price - b.price);
    if (sort === "highToLow") filtered.sort((a, b) => b.price - a.price);
    return filtered;
  };

  const filteredProducts = filterAndSortProducts();

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-[#2D2217] text-white py-12 px-4 sm:px-6 md:py-16 md:px-12 rounded-2xl shadow-lg text-center mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-wide uppercase">
          Our Collection
        </h1>
        <p className="text-sm sm:text-base md:text-lg mt-2 sm:mt-4 opacity-90">
          Handcrafted British footwear built to last. Explore our styles and find your perfect pair.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row px-4 sm:px-6 md:px-8 gap-6 max-w-7xl mx-auto">
        {/* Sidebar */}
        <aside className="w-full lg:w-1/4 bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-6 flex-shrink-0">
          <h2 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-gray-800">Filter by Style</h2>
          <ul className="space-y-2 sm:space-y-3">
            {["", "Loafers", "Chelsea", "Oxford", "Derby", "Boots"].map(cat => (
              <li
                key={cat}
                className={`cursor-pointer text-sm sm:text-base ${
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

          <div className="mt-4 sm:mt-6">
            <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-800">Sort by Price</h2>
            <select
              className="border p-2 sm:p-3 w-full rounded-lg focus:ring-2 focus:ring-blue-400"
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
        <div className="w-full flex-1">
          {/* Search */}
          <div className="mb-4 sm:mb-6">
            <input
              type="text"
              placeholder="Search collection..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border p-2 sm:p-3 rounded-lg w-full shadow-sm focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-2xl shadow-md flex flex-col justify-between p-3 sm:p-4 hover:shadow-2xl transition-all duration-300 w-full"
              >
                <div className="rounded-xl overflow-hidden mb-2 sm:mb-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 sm:h-56 md:h-60 object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-md sm:text-lg font-bold mb-1 text-center text-gray-800">
                  {product.name} {product.featured && <span className="text-yellow-400 font-bold">★</span>}
                </h3>
                <p className="text-gray-500 mb-2 sm:mb-3 text-center text-sm sm:text-base">
                  {product.description}
                </p>
                <p className="text-gray-800 font-bold text-center mb-3 sm:mb-4 text-base sm:text-lg">
                  ${product.price.toFixed(2)}
                </p>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-gray-800 text-white py-2 sm:py-3 rounded-lg font-semibold hover:bg-gray-900 transition"
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
