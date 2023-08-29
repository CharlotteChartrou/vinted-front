import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

import Header from "./components/Header";
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Publish from "./pages/Publish";
import Payment from "./pages/Payment";

function App() {
  const [token, setToken] = useState(Cookies.get("token") || null);
  const [search, setSearch] = useState("");
  const [priceSort, setPriceSort] = useState("price-asc");
  const [value, setValue] = useState([10, 80]);

  const handleToken = (token) => {
    if (token) {
      Cookies.set("token", token, { expires: 15 });
      setToken(token);
    } else {
      Cookies.remove("token");
      setToken(null);
    }
  };

  return (
    <Router>
      <Header
        token={token}
        handleToken={handleToken}
        search={search}
        setSearch={setSearch}
        priceSort={priceSort}
        setPriceSort={setPriceSort}
        value={value}
        setValue={setValue}
      />
      <Routes>
        <Route
          path="/"
          element={<Home search={search} priceSort={priceSort} value={value} />}
        />
        <Route path="/offer/:id" element={<Offer token={token} />} />
        <Route path="/signup" element={<Signup handleToken={handleToken} />} />
        <Route path="/login" element={<Login handleToken={handleToken} />} />
        <Route path="/publish" element={<Publish token={token} />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Router>
  );
}

export default App;
