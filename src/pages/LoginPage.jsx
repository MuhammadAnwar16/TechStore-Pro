import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/users");
      if (!response.ok) throw new Error("Failed to fetch users");

      const users = await response.json();
      const user = users.find((u) => u.email === email && u.password === password);

      if (user) {
        login("mockAuthToken123", user);
        setTimeout(() => {
          if (user.role === "admin") navigate("/admin");
          else navigate("/products");
        }, 500);
      } else {
        setError("Invalid email or password!");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-gray-100 to-gray-200 px-4">
      <div className="bg-white shadow-2xl rounded-3xl p-10 max-w-md w-full relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-100 rounded-full -mt-20 -mr-20"></div>
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-100 rounded-full -mb-20 -ml-20"></div>

        <h1 className="text-4xl font-extrabold text-gray-800 mb-4 text-center">Welcome Back</h1>
        <p className="text-center text-gray-500 mb-8">
          Log in to access our premium footwear collection.
        </p>

        {error && (
          <p className="bg-red-100 text-red-600 p-3 rounded mb-4 text-center">{error}</p>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            required
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              required
            />
            <span
              className="absolute right-3 top-3 text-gray-400 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-[#35393d] text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-500">
            Don't have an account?{" "}
            <button
              onClick={() => navigate("/register")}
              className="text-blue-500 font-medium hover:underline"
            >
              Register
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
