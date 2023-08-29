import logo from "../img/vinted_logo.png";
import { useNavigate } from "react-router-dom";

import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

const Header = ({
  token,
  handleToken,
  search,
  setSearch,
  priceSort,
  setPriceSort,
  value,
  setValue,
  visible,
  setVisible,
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
            <div className="input-sort">
              <div className="sort">
                <span>Trier par prix</span>
                <div className="check-box">
                  <label className="switch">
                    <input
                      type="checkbox"
                      name="price"
                      onClick={(event) => {
                        priceSort !== "price-desc"
                          ? setPriceSort("price-desc")
                          : setPriceSort("price-asc");
                      }}
                    ></input>
                    <span></span>
                  </label>
                </div>
              </div>
              <div className="slider">
                <span>Prix entre :</span>
                <RangeSlider
                  id="slider"
                  min={0}
                  max={700}
                  value={value}
                  defaultValue={[0, 50]}
                  onInput={setValue}
                />
              </div>
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
              <div className="butt-1">
                <button onClick={() => navigate("/signup")}>s'inscrire</button>
                <button onClick={() => navigate("/login")}>se connecter</button>
              </div>
            )}

            <button
              style={{ color: "white", backgroundColor: "#007783" }}
              onClick={() => {
                token ? navigate("/publish") : navigate("/login");
              }}
            >
              vends tes articles
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
