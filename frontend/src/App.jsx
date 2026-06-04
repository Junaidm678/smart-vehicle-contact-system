import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import ContactOwner from "./pages/ContactOwner";
import Emergency from "./pages/Emergency";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home1 from "./pages/Home1";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import { Toaster } from "react-hot-toast";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/:id" element={<Home />} />
        <Route path="/" element={<Home1 />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contact/:id" element={<ContactOwner />} />
        <Route path="/emergency/:id" element={<Emergency />} />
        <Route path="/register-vehicle" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
