import React from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div className="bg-[#f9f9f9] min-h-screen font-inter text-gray-800">
      {/* Hero Section */}
      <section className="bg-[#2D2217] text-white py-14 px-8 rounded-2xl shadow-lg text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-playfair font-bold mb-4"
        >
          About Solovair
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg max-w-2xl mx-auto leading-relaxed text-gray-200"
        >
          Solovair is a premium destination for technology and design — 
          where innovation meets timeless sophistication.  
          We believe in creating experiences that redefine modern living.
        </motion.p>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
        >
          <h2 className="text-2xl font-playfair font-bold mb-4 text-gray-900">
            Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to merge exceptional design with cutting-edge innovation. 
            Every product we offer is thoughtfully curated to deliver performance, 
            elegance, and reliability for those who appreciate the art of modern technology.
          </p>
        </motion.div>

        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
        >
          <h2 className="text-2xl font-playfair font-bold mb-4 text-gray-900">
            Our Vision
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We envision a future where technology seamlessly integrates into lifestyle — 
            elegant, purposeful, and inspiring. Solovair aims to become the global symbol 
            of refined innovation and enduring quality.
          </p>
        </motion.div>
      </section>

      {/* Founder Highlight Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <motion.img
            alt="Founder"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-48 h-48 rounded-full object-cover shadow-md"
          />
          <div>
            <h3 className="text-2xl font-playfair font-semibold text-gray-900 mb-2">
              A Message from Our Founder
            </h3>
            <p className="text-gray-600 leading-relaxed">
              “Solovair was born from a passion to blend precision, beauty, and 
              innovation. Our goal is not just to provide products, but to 
              inspire a lifestyle where technology becomes art — purposeful, 
              elegant, and human-centered.”
            </p>
            <p className="mt-4 font-medium text-gray-800">
              — Shaheer Alam, Founder & CEO
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
