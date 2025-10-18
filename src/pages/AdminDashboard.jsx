import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaPlus, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isAdding, setIsAdding] = useState(false); // Flag for add new

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/products");
        if (!response.ok) throw new Error("Failed to fetch products.");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const handleUpdateProduct = async (updatedProduct) => {
    try {
      const method = isAdding ? "POST" : "PATCH";
      const url = isAdding
        ? "http://localhost:5000/products"
        : `http://localhost:5000/products/${updatedProduct.id}`;
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedProduct),
      });

      if (!response.ok) throw new Error("Failed to save product.");

      const savedProduct = await response.json();

      if (isAdding) {
        setProducts([savedProduct, ...products]);
      } else {
        setProducts(
          products.map((product) =>
            product.id === savedProduct.id ? savedProduct : product
          )
        );
      }

      setEditingProduct(null);
      setShowModal(false);
      setIsAdding(false);
      alert(isAdding ? "Product added successfully!" : "Product updated successfully!");
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/products/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete product.");
      setProducts(products.filter((product) => product.id !== id));
      alert("Product deleted successfully!");
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && editingProduct) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditingProduct({ ...editingProduct, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Solovair Shoes Admin
      </h1>

      {/* Product Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {/* Add New Shoe Card */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          onClick={() => {
            setEditingProduct({
              name: "",
              style: "",
              price: 0,
              description: "",
              image: "",
              featured: false,
            });
            setShowModal(true);
            setIsAdding(true);
          }}
          className="bg-white rounded-2xl shadow-md flex flex-col items-center justify-center p-6 cursor-pointer hover:shadow-lg transition text-gray-700"
        >
          <FaPlus size={40} className="mb-4 text-blue-500" />
          <p className="font-semibold text-lg">Add New Shoe</p>
        </motion.div>

        {/* Existing Products */}
        {products.map((product) => (
          <motion.div
            key={product.id}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
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
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                {product.name}{" "}
                {product.featured && <FaStar className="inline text-yellow-400" />}
              </h3>
              <p className="text-gray-500 text-sm mb-2">{product.style}</p>
              <p className="text-gray-800 font-bold text-lg">${product.price}</p>
            </div>

            {/* Buttons */}
            <div className="p-5 flex justify-between gap-2">
              <button
                onClick={() => {
                  setEditingProduct(product);
                  setShowModal(true);
                }}
                className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 flex items-center gap-2 justify-center transition"
              >
                <FaEdit /> Edit
              </button>
              <button
                onClick={() => handleDeleteProduct(product.id)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 flex items-center gap-2 justify-center transition"
              >
                <FaTrash /> Delete
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for Add/Edit */}
      {showModal && editingProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl w-full max-w-lg p-6 shadow-lg relative">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              {isAdding ? "Add New Shoe" : "Edit Product"}
            </h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleUpdateProduct(editingProduct);
              }}
              className="space-y-4"
            >
              <input
                type="text"
                placeholder="Name"
                value={editingProduct.name}
                onChange={(e) =>
                  setEditingProduct({ ...editingProduct, name: e.target.value })
                }
                className="border p-3 rounded w-full shadow-sm focus:ring focus:ring-blue-300"
                required
              />
              <input
                type="text"
                placeholder="Style"
                value={editingProduct.style}
                onChange={(e) =>
                  setEditingProduct({ ...editingProduct, style: e.target.value })
                }
                className="border p-3 rounded w-full shadow-sm focus:ring focus:ring-blue-300"
                required
              />
              <input
                type="number"
                placeholder="Price"
                value={editingProduct.price}
                onChange={(e) =>
                  setEditingProduct({ ...editingProduct, price: e.target.value })
                }
                className="border p-3 rounded w-full shadow-sm focus:ring focus:ring-blue-300"
                required
              />
              <textarea
                placeholder="Description"
                value={editingProduct.description}
                onChange={(e) =>
                  setEditingProduct({ ...editingProduct, description: e.target.value })
                }
                className="border p-3 rounded w-full shadow-sm focus:ring focus:ring-blue-300"
                required
              />
              <div>
                <label className="block text-gray-700 mb-1">Product Image</label>
                <input type="file" onChange={handleImageChange} />
                {editingProduct.image && (
                  <img
                    src={editingProduct.image}
                    alt="Preview"
                    className="w-32 h-32 object-cover rounded mt-2"
                  />
                )}
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={editingProduct.featured || false}
                  onChange={(e) =>
                    setEditingProduct({ ...editingProduct, featured: e.target.checked })
                  }
                  id="featured"
                  className="accent-yellow-400"
                />
                <label htmlFor="featured" className="text-gray-700 font-medium">
                  Featured
                </label>
              </div>
              <div className="flex justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowModal(false);
                    setIsAdding(false);
                  }}
                  className="bg-gray-400 text-white px-5 py-2 rounded hover:bg-gray-500 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
                >
                  {isAdding ? "Add Shoe" : "Save Changes"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
