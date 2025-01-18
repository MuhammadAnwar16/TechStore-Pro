import React from "react";

const ContactPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      {/* Header Section */}
      <div className="bg-[#35393d] text-white py-12 px-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-extrabold mb-4">Contact Us</h1>
        <p className="text-lg">
          We’d love to hear from you! Reach out to us for any queries, feedback, or support.
        </p>
      </div>

      {/* Contact Form Section */}
      <div className="mt-12 bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Get in Touch</h2>
        <form className="space-y-6 max-w-lg mx-auto">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Your Message
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Write your message here..."
              className="mt-1 block w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-bold hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Information Section */}
      <div className="mt-12 bg-gray-200 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Our Contact Information</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Phone</h3>
            <p className="text-gray-600">+1 (123) 456-7890</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-gray-600">support@techstorepro.com</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-bold mb-2">Address</h3>
            <p className="text-gray-600"> Innovation City</p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="mt-12 bg-[#35393d] text-white py-8 px-6 rounded-lg text-center shadow-lg">
        <h2 className="text-3xl font-extrabold mb-4">We’re Here to Help</h2>
        <p className="text-lg mb-6">
          Have questions? Don’t hesitate to reach out. Our team is always ready to assist you!
        </p>
        <button className="bg-blue-500 px-6 py-3 rounded text-white font-bold hover:bg-blue-600 transition">
          Chat with Us
        </button>
      </div>
    </div>
  );
};

export default ContactPage;
