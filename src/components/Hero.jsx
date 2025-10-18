import React from "react";

const Hero = () => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning!";
    if (hour < 18) return "Good Afternoon!";
    return "Good Evening!";
  };

  return (
    <div className="bg-[#2D2217] text-white py-14 px-8 rounded-2xl shadow-lg text-center mb-16">
      <h1 className="text-4xl font-bold">
        {getGreeting()} Welcome to Solovair
      </h1>
      <p className="text-lg mt-4">
        Discover timeless elegance and soulful design — crafted for spiritual and aesthetic harmony.
      </p>
      <button className="bg-blue-500 text-white px-6 py-3 rounded mt-6 font-bold hover:bg-blue-600 transition">
        Explore Now
      </button>
    </div>
  );
};

export default Hero;
