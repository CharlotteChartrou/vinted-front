import logo from "../img/vinted_logo.png";
import { useNavigate } from "react-router-dom";
import { Range } from "react-range";

const Header = ({
  token,
  handleToken,
  search,
  setSearch,
  priceSort,
  setPriceSort,
}) => {
  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="container">
        <div className="header-bloc">
          <div>
            <img onClick={() => navigate("/")} src={logo} alt="logo" />
          </div>
          <div className="search-container">
            <input
              type="search"
              value={search}
              placeholder="Recherche des articles"
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            ></input>
            <div>
              <span>Trier par prix</span>
              <span className="check-box">
                <input
                  type="checkbox"
                  name="price"
                  onClick={(event) => {
                    priceSort(true)
                      ? setPriceSort("price-desc")
                      : setPriceSort("price-desc");
                  }}
                ></input>
              </span>
              <span>Prix entre :</span>
            </div>
          </div>
          <div className="button">
            {token ? (
              <button
                style={{
                  backgroundColor: "red",
                  color: "white",
                  border: "none",
                }}
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
