// src/pages/NotFound.js
import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-4">
      <h1 className="text-8xl font-bold text-gray-800">404</h1>
      <p className="text-2xl text-gray-600 mt-4">Oops! Page not found.</p>
      <p className="text-gray-500 mt-2">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}
