import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import Carousel from "react-multi-carousel";
import Header from "./components/Header";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

import { useState, useEffect } from "react";

function App() {
  const [offersHome, setOffersHome] = useState([]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offer/:id" element={<Offer />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
