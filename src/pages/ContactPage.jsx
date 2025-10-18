import React from "react";
import { Phone, Mail, MapPin, SendHorizonal } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen py-16 px-6">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-700 text-white py-14 px-8 rounded-2xl shadow-lg text-center mb-16">
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight">Contact Us</h1>
        <p className="text-lg text-gray-200 max-w-2xl mx-auto">
          Have a question, feedback, or business inquiry? We’re always here to help you.
        </p>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-4xl mx-auto bg-white/70 backdrop-blur-md border border-gray-200 p-10 rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Get in Touch</h2>
        <form className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:border-gray-800 focus:ring-1 focus:ring-gray-800"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:border-gray-800 focus:ring-1 focus:ring-gray-800"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Write your message..."
              className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:border-gray-800 focus:ring-1 focus:ring-gray-800"
            ></textarea>
          </div>

          <button
            type="submit"
            className="flex items-center justify-center gap-2 w-full md:w-auto mx-auto bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all shadow-md"
          >
            <SendHorizonal size={18} />
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Info */}
      <div className="mt-20 max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition">
          <Phone className="mx-auto text-gray-800 mb-3" size={32} />
          <h3 className="text-lg font-bold text-gray-800 mb-2">Phone</h3>
          <p className="text-gray-600">+1 (123) 456-7890</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition">
          <Mail className="mx-auto text-gray-800 mb-3" size={32} />
          <h3 className="text-lg font-bold text-gray-800 mb-2">Email</h3>
          <p className="text-gray-600">support@solovair.com</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition">
          <MapPin className="mx-auto text-gray-800 mb-3" size={32} />
          <h3 className="text-lg font-bold text-gray-800 mb-2">Address</h3>
          <p className="text-gray-600">Innovation City, Pakistan</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
