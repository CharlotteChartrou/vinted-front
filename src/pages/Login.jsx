import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container">
      <div className="form">
        <form className="login">
          <input placeholder="Adresse mail" type="email"></input>
          <input placeholder="Mot de passe" type="password"></input>
          <button>Se Connecter</button>
        </form>
        <Link to="/signup">Pas encore de compte ? Inscris-toi !</Link>
      </div>
    </div>
  );
};

export default Login;
