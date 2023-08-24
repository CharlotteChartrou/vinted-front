import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        {
          email: email,
          password: password,
          token: token,
        }
      );

      response.data.token &&
        Cookies.set("token", response.data.token, { expires: 7 });
      navigate("/");
      /*   Cookies.set("token", response.data.token, { expires: 7 });
      setToken(response.data.token);
      navigate("/"); */
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="form">
        <h2>Se connecter</h2>
        <form className="login" onSubmit={handleSubmit}>
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
          <button type="submit">Se Connecter</button>
        </form>
        <Link to="/signup" style={{ textDecoration: "none", color: "#007783" }}>
          Pas encore de compte ? Inscris-toi !
        </Link>
      </div>
    </div>
  );
};

export default Login;
