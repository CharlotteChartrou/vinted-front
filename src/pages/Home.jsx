import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import background from "../img/background-img.jpeg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <>
      <div className="container">
        <div className="bloc-home">
          <span>Prêts à faire du tri dans vos placards ?</span>
          <button onClick={() => navigate("/Publish")}>
            Commencer à vendre
          </button>
        </div>{" "}
      </div>
      <div className="img-home">
        <img src={background} alt="background" />
      </div>

      <div className="container">
        <div className="display">
          {data.offers.map((product, index) => {
            return (
              <div className="display-offers">
                <Link
                  to={`/offer/${product._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <span className="title">{product.product_name}</span>
                  <img src={product.product_image.secure_url} />
                  <span className="price">{product.product_price}€</span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
