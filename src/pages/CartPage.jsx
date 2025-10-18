import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate, Link } from "react-router-dom";
import { Trash2, Plus, Minus, ShoppingCart } from "lucide-react";

const CartPage = () => {
  const { cart, dispatch } = useCart();
  const navigate = useNavigate();
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.1;
  const grandTotal = subtotal + tax;

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }
    navigate("/checkout");
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen py-16 px-6 lg:px-20">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-gray-800 tracking-tight">
        Your Shopping Cart
      </h1>

      {cart.length === 0 ? (
        <div className="text-center bg-white shadow-md rounded-2xl p-10 max-w-lg mx-auto">
          <ShoppingCart className="mx-auto text-gray-500 mb-4" size={48} />
          <p className="text-gray-700 text-lg mb-6">Your cart is empty.</p>
          <Link
            to="/products"
            className="inline-block bg-[#35393d] text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-gray-800 transition-all"
          >
            Browse Products
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row lg:justify-between gap-10">
          {/* Cart Items */}
          <div className="lg:w-3/4 bg-white rounded-2xl shadow-md p-8 border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-3">Cart Items</h2>

            <div className="space-y-6">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col md:flex-row justify-between items-center border-b pb-6"
                >
                  {/* Product Info */}
                  <div className="flex items-center gap-6 w-full md:w-auto">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg border border-gray-200"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                      <p className="text-gray-600 mt-1">
                        ${item.price.toFixed(2)} each
                      </p>
                    </div>
                  </div>

                  {/* Quantity + Actions */}
                  <div className="flex items-center gap-4 mt-4 md:mt-0">
                    <button
                      className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition"
                      onClick={() => dispatch({ type: "DECREMENT_QUANTITY", payload: item })}
                    >
                      <Minus size={18} className="text-gray-800" />
                    </button>
                    <span className="font-semibold text-lg">{item.quantity}</span>
                    <button
                      className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition"
                      onClick={() => dispatch({ type: "INCREMENT_QUANTITY", payload: item })}
                    >
                      <Plus size={18} className="text-gray-800" />
                    </button>
                    <button
                      className="p-2 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition"
                      onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item })}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Price Summary */}
          <div className="lg:w-1/4 bg-white rounded-2xl shadow-md p-8 border border-gray-100 h-fit">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-3">
              Price Summary
            </h2>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax (10%):</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-lg text-gray-900 border-t pt-3">
                <span>Total:</span>
                <span>${grandTotal.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full bg-[#35393d] text-white py-3 mt-8 rounded-lg font-semibold shadow hover:bg-gray-800 transition-all"
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
