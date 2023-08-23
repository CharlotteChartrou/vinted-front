import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import Carousel from "react-multi-carousel";

import Header from "./components/Header";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [offersHome, setOffersHome] = useState([]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offer/:id" element={<Offer />} />
      </Routes>
    </Router>
  );
}

export default App;
