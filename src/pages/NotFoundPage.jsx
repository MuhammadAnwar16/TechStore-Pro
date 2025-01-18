import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-blue-500 mb-4">404</h1>
      <p className="text-gray-700 text-lg mb-6">Page Not Found</p>
      <Link to="/" className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
