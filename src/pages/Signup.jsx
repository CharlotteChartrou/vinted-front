import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const Signup = () => {
  const [data, setData] = useState(Cookies.get("token") || null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("https://lereacteur-vinted-api.herokuapp.com/user/signup", {
      name: name,
      password: password,
      email: email,
    });
  };

  return (
    <div className="container">
      <div className="form">
        <h2>S'inscrire</h2>
        <form className="signup" onSubmit={handleSubmit}>
          <input
            placeholder="Nom d'utilisateur"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            placeholder="Mot de passe"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <span className="checkbox-container">
            <span className="checkbox" style={{ color: "#666" }}>
              <input type="checkbox" name="price"></input> S'inscrire à notre
              newsletter
            </span>
          </span>
          <div style={{ color: "#666" }}>
            En m'inscrivant je confirme avoir lu et accepté les Termes &
            Conditions et Politique de Confidentialité de Vinted. Je confirme
            avoir au moins 18 ans.
          </div>
          <button type="submit">S'inscrire</button>
        </form>
        <Link style={{ textDecoration: "none", color: "#007783" }} to="/login">
          Tu as déjà un compte ? Connecte-toi !
        </Link>
      </div>
    </div>
  );
};

export default Signup;
