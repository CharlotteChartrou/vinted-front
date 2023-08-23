import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import background from "../img/background-img.jpeg";

const Home = () => {
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
    console.log(data.offers);
  }, []);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <>
      <div className="container">
        <div className="bloc-home">
          <span>Prêts à faire du tri dans vos placards ?</span>
          <button>Commencer à vendre</button>
        </div>{" "}
      </div>
      <div className="img-home">
        <img src={background} alt="background" />
      </div>

      <div className="container">
        <div className="display">
          {data.offers.map((product, index) => {
            console.log(product.product_pictures);
            return (
              <div className="display-offers">
                <Link
                  to={`/offer/${product._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <span className="title">{product.product_name}</span>
                  {product.product_pictures.map((photo) => {
                    return <img src={photo.url} />;
                  })}{" "}
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
