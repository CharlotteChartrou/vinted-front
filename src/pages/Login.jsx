import { Link } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          username: username,
          email: email,
        }
      );

      navigate("/");
    } catch (error) {
      error.response;
    }
  };

  return (
    <div className="container">
      <div className="form">
        <h2>Se connecter</h2>
        <form className="login">
          <input
            placeholder="Adresse mail"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          ></input>
          <input
            placeholder="Mot de passe"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          ></input>
          <button>Se Connecter</button>
        </form>
        <Link to="/signup" style={{ textDecoration: "none", color: "#007783" }}>
          Pas encore de compte ? Inscris-toi !
        </Link>
      </div>
    </div>
  );
};

export default Login;
