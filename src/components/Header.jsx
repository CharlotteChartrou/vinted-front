import logo from "../img/vinted_logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header-bloc">
          <div>
            <img to="/" src={logo} alt="logo" />
          </div>
          <div className="button">
            <input type="search"></input>
            <button>S'inscrire</button>
            <button>se connecter</button>
            <button>vends tes articles</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
