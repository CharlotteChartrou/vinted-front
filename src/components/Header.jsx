import logo from "../img/vinted_logo.png";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Header = ({ token, handleToken }) => {
  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="container">
        <div className="header-bloc">
          <div>
            <img onClick={() => navigate("/")} src={logo} alt="logo" />
          </div>
          <div className="search-container">
            <input type="search" placeholder="Recherche des articles"></input>
            <div>
              <span>Trier par prix</span>{" "}
              <span className="check-box">
                <input type="checkbox" name="price"></input>
              </span>
            </div>
          </div>
          <div className="button">
            {token ? (
              <button
                style={{ backgroundColor: "red", color: "white" }}
                onClick={() => {
                  handleToken(null);
                  navigate("/");
                }}
              >
                se déconnecter
              </button>
            ) : (
              <div>
                <button className="butt-1" onClick={() => navigate("/Signup")}>
                  s'inscrire
                </button>
                <button className="butt-1" onClick={() => navigate("/Login")}>
                  se connecter
                </button>
              </div>
            )}

            <button className="butt-2" onClick={() => navigate("/Publish")}>
              vends tes articles
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
