import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext"; // Import Auth Context

const OrderHistoryPage = () => {
  const { user } = useAuth(); // Get the logged-in user
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      if (!user) return; // Ensure the user is logged in
      setLoading(true);
      setError("");

      try {
        // Replace with your backend endpoint to fetch user-specific orders
        const response = await fetch(
          `http://localhost:5000/orders?userId=${user.id}` // Assuming `userId` is stored in orders
        );

        if (!response.ok) {
          throw new Error("Failed to fetch orders.");
        }

        const data = await response.json();
        setOrders(data);
      } catch (err) {
        console.error("Error fetching orders:", err);
        setError("Failed to load order history. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [user]);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Order History</h1>

      {/* Loading State */}
      {loading && <p className="text-blue-500">Loading your orders...</p>}

      {/* Error State */}
      {error && <p className="text-red-500">{error}</p>}

      {/* No Orders Message */}
      {!loading && orders.length === 0 && !error && (
        <p className="text-gray-500">No orders found in your history.</p>
      )}

      {/* Orders List */}
      {orders.length > 0 && (
        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order.id}
              className="border rounded-lg p-6 bg-white shadow hover:shadow-md transition"
            >
              <h2 className="text-xl font-semibold mb-2">Order ID: {order.id}</h2>
              <p className="text-gray-600 mb-1">
                Date: {new Date(order.date).toLocaleDateString()}
              </p>
              <p className="text-gray-600 mb-3">
                Total: <span className="font-bold">${order.total.toFixed(2)}</span>
              </p>
              <h3 className="font-bold mb-2">Items:</h3>
              <ul className="space-y-1">
                {order.items.map((item) => (
                  <li
                    key={item.id}
                    className="flex justify-between text-gray-700"
                  >
                    <span>{item.name}</span>
                    <span>
                      ${item.price.toFixed(2)} x {item.quantity}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrderHistoryPage;
