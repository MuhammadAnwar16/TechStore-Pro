import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const newUser = { email, password, role: "user" }; // Default role user

      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

      setSuccess("Registration successful! Redirecting to login...");
      setEmail("");
      setPassword("");

      setTimeout(() => navigate("/login"), 2000); // Redirect after 2s
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

        <h1 className="text-4xl font-extrabold text-gray-800 mb-4 text-center">Create Account</h1>
        <p className="text-center text-gray-500 mb-8">
          Join our exclusive collection of premium shoes.
        </p>

        {error && (
          <p className="bg-red-100 text-red-600 p-3 rounded mb-4 text-center">{error}</p>
        )}
        {success && (
          <p className="bg-green-100 text-green-600 p-3 rounded mb-4 text-center">{success}</p>
        )}

        <form onSubmit={handleRegister} className="space-y-5">
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
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-500">
            Already have an account?{" "}
            <button
              onClick={() => navigate("/login")}
              className="text-blue-500 font-medium hover:underline"
            >
              Log in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
