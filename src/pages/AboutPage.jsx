import React from "react";
import anwarImage from "../assets/anwar1.png";


const AboutPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      {/* Header Section */}
      <div className="bg-[#35393d] text-white py-12 px-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-extrabold mb-4 text-center">About Us</h1>
        <p className="text-center text-lg">
          Welcome to <span className="font-bold">TechStore Pro</span>, where technology meets innovation. 
          We aim to bring you the best products with exceptional customer service.
        </p>
      </div>

      {/* Mission and Vision Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Our Mission & Vision
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              At TechStore Pro, our mission is to empower people with the latest
              and most reliable technology products. We strive to provide an
              unparalleled shopping experience.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To become the world’s most customer-centric technology store, 
              creating a seamless bridge between innovation and everyday life.
            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center">
            <img
              src={anwarImage}
              alt="Team Member"
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <h3 className="text-lg font-semibold">Muhammad Anwar</h3>
            <p className="text-gray-600 text-sm">Founder & CEO</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center">
            <img
              src={anwarImage}
              alt="Team Member"
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <h3 className="text-lg font-semibold">Muhammad Huzaifa</h3>
            <p className="text-gray-600 text-sm">Chief Technology Officer</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition text-center">
            <img
              src={anwarImage}
              alt="Team Member"
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <h3 className="text-lg font-semibold">Maaz Shah</h3>
            <p className="text-gray-600 text-sm">Head of Marketing</p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Our Core Values</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-600">
          <li>Innovation and Excellence in every product and service.</li>
          <li>Commitment to customer satisfaction.</li>
          <li>Integrity and transparency in all business practices.</li>
          <li>Sustainability and responsibility towards the environment.</li>
        </ul>
      </div>

      {/* Call to Action Section */}
      <div className="mt-12 bg-[#35393d] text-white py-8 px-6 rounded-lg text-center shadow-lg">
        <h2 className="text-3xl font-extrabold mb-4">Join Our Journey</h2>
        <p className="text-lg mb-6">
          Be a part of our story and experience the best in technology. Connect
          with us to stay updated on our latest offerings and innovations.
        </p>
        <button className="bg-blue-500 px-6 py-3 rounded text-white font-bold hover:bg-blue-600 transition">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default AboutPage;
