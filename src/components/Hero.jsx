import React from "react";
import { motion } from "framer-motion";
import heroImg from "../assets/hero.png";

const Hero = () => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning!";
    if (hour < 18) return "Good Afternoon!";
    return "Good Evening!";
  };

  return (
    <section className="relative overflow-hidden bg-[#2D2217] text-white py-12 sm:py-16 px-4 sm:px-8 md:px-16 rounded-2xl shadow-lg mb-12 sm:mb-16">
      {/* Background Boot Image */}
      <div className="absolute inset-0 flex justify-center sm:justify-end items-center sm:items-end overflow-hidden">
        <img
          src={heroImg}
          alt="Solovair Boot"
          className="
            w-[80%] sm:w-[24rem] md:w-[34rem] lg:w-[42rem]
            max-w-[400px] sm:max-w-none
            opacity-40 sm:opacity-25
            object-contain pointer-events-none select-none
            translate-y-4 sm:translate-y-0
          "
        />
        <div className="absolute inset-0 bg-gradient-to-b sm:bg-gradient-to-r from-[#2D2217] via-[#2D2217]/50 sm:via-[#2D2217]/30 to-transparent" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 max-w-3xl text-center sm:text-left mx-auto sm:mx-0">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair leading-snug sm:leading-tight"
        >
          {getGreeting()} <br />
          Welcome to <span className="text-[#D4AF37]">Solovair</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-base sm:text-lg mt-4 text-gray-200 leading-relaxed max-w-md sm:max-w-xl mx-auto sm:mx-0"
        >
          Discover timeless elegance and soulful design — crafted for heritage,
          comfort, and distinction.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="bg-white text-[#2D2217] px-6 sm:px-8 py-3 rounded-full mt-6 sm:mt-8 font-semibold hover:bg-white/80 transition"
        >
          Explore Now
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
