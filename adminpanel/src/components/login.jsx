import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";


export default function JobsterritoryLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/admin/admin-login`,
        {
          email,
          password,
        }
      );

      const data = response.data;

      toast.success(data.message);
      localStorage.setItem("isadmin", "true");
      localStorage.setItem("adminToken", data.token);

      window.location.href = "/admin-panel";
    } catch (error) {
      const message = error.response?.data?.message || "Login failed";
      toast.error(message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        {/* Logo / Title */}
        <div className="text-center mb-6">
          <img
            src="/images/logo.png"
            alt="Jobsterritory"
            className="mx-auto h-12 mb-3"
          />
          <h2 className="text-2xl font-bold text-gray-800">
            Jobsterritory Admin Login
          </h2>
          <p className="text-sm text-gray-500 mt-1">Authorized access only</p>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="admin@jobsterritory.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-800"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none text-gray-800"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md transition"
          >
            Login
          </button>
        </form>

        {/* Footer Note */}
        <p className="text-xs text-center text-gray-400 mt-6">
          © {new Date().getFullYear()} Jobsterritory. Admin Access Only.
        </p>
      </div>
    </div>
  );
}
