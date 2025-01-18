import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Link } from "react-router-dom";


const CartPage = () => {
  const { cart, dispatch } = useCart();
  const navigate = useNavigate(); // Initialize navigation
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.1; // Assuming 10% tax
  const grandTotal = subtotal + tax;

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    navigate("/checkout"); // Navigate to the checkout page
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4 lg:px-16">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Your Shopping Cart</h1>
      {cart.length === 0 ? (
        <div className="text-center bg-white shadow-md rounded-lg p-8">
          <p className="text-gray-700 text-lg mb-4">Your cart is empty.</p>
          <Link
            to="/products"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition"
          >
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row lg:justify-between">
          {/* Cart Items */}
          <div className="lg:w-3/4 bg-white shadow-md rounded-lg p-6 mb-6 lg:mb-0">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Items in Your Cart</h2>
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center mb-4 border-b pb-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">{item.name}</h3>
                    <p className="text-gray-600">
                      ${item.price.toFixed(2)} x {item.quantity}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    className="bg-gray-200 text-gray-800 px-3 py-2 rounded hover:bg-gray-300 transition"
                    onClick={() => dispatch({ type: "DECREMENT_QUANTITY", payload: item })}
                  >
                    -
                  </button>
                  <span className="font-semibold">{item.quantity}</span>
                  <button
                    className="bg-gray-200 text-gray-800 px-3 py-2 rounded hover:bg-gray-300 transition"
                    onClick={() => dispatch({ type: "INCREMENT_QUANTITY", payload: item })}
                  >
                    +
                  </button>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                    onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item })}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Price Summary */}
          <div className="lg:w-1/4 bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Price Summary</h2>
            <div className="space-y-2">
              <p className="flex justify-between text-gray-700">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </p>
              <p className="flex justify-between text-gray-700">
                <span>Tax (10%):</span>
                <span>${tax.toFixed(2)}</span>
              </p>
              <p className="flex justify-between text-lg font-bold text-gray-800">
                <span>Total:</span>
                <span>${grandTotal.toFixed(2)}</span>
              </p>
            </div>
            <button
              className="bg-green-500 text-white w-full py-3 mt-6 rounded-lg shadow hover:bg-green-600 transition"
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
