import React, { useState } from "react";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    setSuccess("");

    try {
      const newUser = { email, password };

      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      setSuccess("Registration successful! You can now log in.");
      setEmail("");
      setPassword("");
    } catch (err) {
      console.error("Error during registration:", err);
      setError("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f4f4f4]">
      <div className="bg-[#35393d] text-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-4xl font-bold text-center text-blue-400 mb-6">
          Register
        </h1>
        <p className="text-gray-300 text-center mb-6">
          Create your account to access exclusive features.
        </p>
        <form onSubmit={handleRegister} className="space-y-4">
          {/* Success and Error Messages */}
          {error && (
            <p className="text-red-500 text-center bg-red-100 p-2 rounded">
              {error}
            </p>
          )}
          {success && (
            <p className="text-green-500 text-center bg-green-100 p-2 rounded">
              {success}
            </p>
          )}

          {/* Email Input */}
          <div className="relative">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-600 bg-[#2c2f34] text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none placeholder-gray-500"
              required
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-600 bg-[#2c2f34] text-white rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none placeholder-gray-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg font-semibold hover:bg-green-600 transition duration-200"
          >
            Register
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-300">
            Already have an account?{" "}
            <button
              onClick={() => (window.location.href = "/login")}
              className="text-blue-400 font-medium hover:underline"
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
