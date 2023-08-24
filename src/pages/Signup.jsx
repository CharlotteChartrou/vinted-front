import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const Signup = () => {
  const [data, setData] = useState(Cookies.get("token") || null);
  const [newUser, setNewUser] = useState({ name: "", email: "", password: "" });
  const [isLoading, setIsLoading] = useState(true);

  const handleInput = (event) => {
    setNewUser({ ...newUser, [event.target.name]: event.target.event });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const handleSubmit = (event) => {
          event.preventDefault(); // Pour empêcher le navigateur de changer de page lors de la soumission du formulaire
          axios.post(
            "https://lereacteur-vinted-api.herokuapp.com/user/signup",
            {
              newUser,
            }
          );
          setIsLoading(false);
        };
      } catch (error) {
        console.log("error");
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>Loading</p>
  ) : (
    <div className="container">
      <div className="form">
        <h2>S'inscrire</h2>
        <form className="signup" onSubmit={handleSubmit}>
          <input
            placeholder="Nom d'utilisateur"
            type="text"
            name="name"
            onChange={handleInput}
          />
          <input
            placeholder="Email"
            type="email"
            name="email"
            onChange={handleInput}
          />
          <input
            placeholder="Mot de passe"
            type="password"
            name="password"
            onChange={handleInput}
          />
          <span className="checkbox-container">
            <span className="checkbox" style={{ color: "#666" }}>
              <input type="checkbox" name="price"></input> S'inscrire à notre
              newsletter
            </span>
          </span>{" "}
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
