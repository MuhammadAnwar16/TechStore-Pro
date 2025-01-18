import React from "react";

const Hero = () => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning!";
    if (hour < 18) return "Good Afternoon!";
    return "Good Evening!";
  };

  return (
    <div className="bg-[#35393d] text-white py-9 text-center mt-0 mx-2 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold">{getGreeting()} Welcome to TechStore Pro</h1>
      <p className="text-lg mt-4">
        Explore the best tech deals and upgrade your life with cutting-edge gadgets.
      </p>
      <button className="bg-blue-500 text-white px-6 py-3 rounded mt-6 font-bold hover:bg-blue-600 transition">
        Shop Now
      </button>
    </div>
  );
};

export default Hero;
