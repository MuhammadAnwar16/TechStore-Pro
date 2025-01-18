import React, { useState, useEffect } from "react";

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("http://localhost:5000/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const handleUpdateProduct = async (updatedProduct) => {
    try {
      const response = await fetch(
        `http://localhost:5000/products/${updatedProduct.id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedProduct)
        }
      );

      if (response.ok) {
        setProducts(
          products.map((product) =>
            product.id === updatedProduct.id ? updatedProduct : product
          )
        );
        setEditingProduct(null);
        alert("Product updated successfully!");
      }
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>

      {/* Edit Product Form */}
      {editingProduct && (
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">Edit Product</h2>
          <input
            type="text"
            placeholder="Name"
            value={editingProduct.name}
            onChange={(e) =>
              setEditingProduct({ ...editingProduct, name: e.target.value })
            }
            className="border p-2 rounded w-full mb-2"
          />
          <input
            type="text"
            placeholder="Category"
            value={editingProduct.category}
            onChange={(e) =>
              setEditingProduct({ ...editingProduct, category: e.target.value })
            }
            className="border p-2 rounded w-full mb-2"
          />
          <input
            type="number"
            placeholder="Price"
            value={editingProduct.price}
            onChange={(e) =>
              setEditingProduct({ ...editingProduct, price: e.target.value })
            }
            className="border p-2 rounded w-full mb-2"
          />
          <textarea
            placeholder="Description"
            value={editingProduct.description}
            onChange={(e) =>
              setEditingProduct({
                ...editingProduct,
                description: e.target.value
              })
            }
            className="border p-2 rounded w-full mb-2"
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded w-full"
            onClick={() => handleUpdateProduct(editingProduct)}
          >
            Update Product
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded w-full mt-2"
            onClick={() => setEditingProduct(null)}
          >
            Cancel
          </button>
        </div>
      )}

      {/* Product List */}
      <h2 className="text-xl font-bold mb-2">Manage Products</h2>
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded mb-2 flex justify-between items-center">
          <div>
            <h3 className="font-bold">{product.name}</h3>
            <p>{product.category}</p>
            <p>${product.price}</p>
          </div>
          <div className="flex gap-2">
            <button
              className="bg-yellow-500 text-white px-4 py-2 rounded"
              onClick={() => setEditingProduct(product)}
            >
              Edit
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={async () => {
                await fetch(`http://localhost:5000/products/${product.id}`, {
                  method: "DELETE"
                });
                setProducts(products.filter((p) => p.id !== product.id));
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminDashboard;
