import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container">
      <div className="form">
        <h2>Se connecter</h2>
        <form className="login">
          <input placeholder="Adresse mail" type="email"></input>
          <input placeholder="Mot de passe" type="password"></input>
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
