import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { FaUser, FaMapMarkerAlt, FaCity, FaEnvelope, FaBoxOpen } from "react-icons/fa";

const CheckoutPage = () => {
  const { cart, dispatch } = useCart();
  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.1;
  const grandTotal = subtotal + tax;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo({ ...shippingInfo, [name]: value });
  };

  const handlePlaceOrder = async () => {
    if (!shippingInfo.name || !shippingInfo.address || !shippingInfo.city || !shippingInfo.postalCode) {
      alert("Please fill out all shipping information.");
      return;
    }

    const order = {
      id: Date.now(),
      items: cart,
      shippingInfo,
      total: grandTotal,
      date: new Date().toISOString(),
    };

    try {
      const response = await fetch("http://localhost:5000/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(order),
      });

      if (!response.ok) throw new Error("Failed to save order.");

      alert("Order placed successfully!");
      dispatch({ type: "CLEAR_CART" });
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white flex items-center justify-center py-12 px-4">
      <div className="max-w-6xl w-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-10 grid md:grid-cols-2 gap-10">
        {/* LEFT: Shipping Info */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-300">
            Shipping Information
          </h2>

          <div className="space-y-5">
            <div className="relative">
              <FaUser className="absolute top-4 left-4 text-gray-400" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={shippingInfo.name}
                onChange={handleInputChange}
                className="w-full bg-white/5 border border-white/20 text-white placeholder-gray-400 pl-12 p-4 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            <div className="relative">
              <FaMapMarkerAlt className="absolute top-4 left-4 text-gray-400" />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={shippingInfo.address}
                onChange={handleInputChange}
                className="w-full bg-white/5 border border-white/20 text-white placeholder-gray-400 pl-12 p-4 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            <div className="relative">
              <FaCity className="absolute top-4 left-4 text-gray-400" />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={shippingInfo.city}
                onChange={handleInputChange}
                className="w-full bg-white/5 border border-white/20 text-white placeholder-gray-400 pl-12 p-4 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            <div className="relative">
              <FaEnvelope className="absolute top-4 left-4 text-gray-400" />
              <input
                type="text"
                name="postalCode"
                placeholder="Postal Code"
                value={shippingInfo.postalCode}
                onChange={handleInputChange}
                className="w-full bg-white/5 border border-white/20 text-white placeholder-gray-400 pl-12 p-4 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>
          </div>
        </div>

        {/* RIGHT: Order Summary */}
        <div className="bg-white/10 rounded-2xl shadow-xl p-8">
          <div className="flex items-center mb-6">
            <FaBoxOpen className="text-blue-400 text-3xl mr-3" />
            <h2 className="text-3xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-300">
              Order Summary
            </h2>
          </div>

          <div className="space-y-3 text-gray-200">
            <div className="flex justify-between border-b border-white/10 pb-2">
              <span>Subtotal:</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between border-b border-white/10 pb-2">
              <span>Tax (10%):</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold text-lg mt-4">
              <span>Total:</span>
              <span>${grandTotal.toFixed(2)}</span>
            </div>
          </div>

          <button
            onClick={handlePlaceOrder}
            className="w-full mt-8 bg-gradient-to-r from-blue-500 to-teal-400 py-4 rounded-xl font-semibold text-white text-lg shadow-lg hover:shadow-blue-500/40 hover:scale-[1.02] transition-all duration-300"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
