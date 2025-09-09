import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Dashboard from "./pages/Dashboard";
import JobsterritoryLogin from "./components/login";
import AddPage from "./components/addmode";

export const ProtectedRoute = ({ children }) => {
  const isAdmin = localStorage.getItem("isadmin") === "true"; // or use context/auth check
  return isAdmin ? children : <Navigate to="/login" replace />;
};

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Public Route */}
          <Route path="/login" element={<JobsterritoryLogin />} />
          {/* Protected Dashboard */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/admin/:type/add" element={<AddPage />} />
          {/* Redirect unknown routes */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>

      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}
