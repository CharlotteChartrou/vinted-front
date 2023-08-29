import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = ({ handleToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  return (
    <div className="form">
      <h2>S'inscrire</h2>
      <form
        className="signup"
        onSubmit={async (event) => {
          event.preventDefault();
          try {
            setErrorMessage("");
            const response = await axios.post(
              "https://lereacteur-vinted-api.herokuapp.com/user/signup",
              {
                username,
                password,
                email,
                newsletter: true,
              }
            );
            handleToken(response.data.token);
            navigate("/");
          } catch (error) {
            console.log(error.message);
          }
        }}
      >
        <input
          placeholder="Nom d'utilisateur"
          type="text"
          value={username}
          onChange={(event) => setUserName(event.target.value)}
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

        <label className="checkbox">
          <input
            type="checkbox"
            style={{ borderColor: "grey", borderRadius: "10px" }}
          ></input>
          <span className="news" style={{ color: "#666" }}>
            S'inscrire à notre newsletter
          </span>
        </label>
        <div className="condition" style={{ color: "#666" }}>
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
  );
};

export default Signup;
