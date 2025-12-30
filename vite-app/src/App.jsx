import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import StockLogin from "./Pages/StockLogin";
import StockMovement from "./Pages/StockMovement";
import Reports from "./Pages/Reports";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import Footer from "./Components/Footer";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

import "./Style.css";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(sessionStorage.getItem("loggedIn") === "true");
  }, []);

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? <Navigate to="/dashboard" /> : <Login setIsLoggedIn={setIsLoggedIn}/>
          }
        />

        <Route path="/register" element={<Register />} />

        <Route
          path="/dashboard"
          element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />}
        />

        <Route path="/products" element={<Home />} />
        <Route path="/movement-login" element={<StockLogin />} />
        <Route path="/movement-update" element={<StockMovement />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>

      <Footer />
    </>
  );
}
