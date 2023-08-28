import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import background from "../img/background-img.jpeg";
import { useNavigate } from "react-router-dom";

const Home = ({ search, priceSort }) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offers?sort=${priceSort}&title=${search}`
        );
        setData(response.data);
        console.log(response.data);
        console.log(priceSort);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [search, priceSort]);

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
        </div>
      </div>
      <div className="img-home">
        <img src={background} alt="background" />
      </div>
      <div className="container">
        <div className="display">
          {data.offers.map((offer) => {
            console.log(offer);
            return (
              <div className="display-offers" key={offer._id}>
                <Link
                  to={`/offer/${offer._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <div className="owner-info-home">
                    {offer.owner.account.avatar && (
                      <img
                        src={offer.owner.account.avatar.secure_url}
                        alt={offer.owner.account.username}
                      />
                    )}
                    <span>{offer.owner.account.username}</span>
                  </div>
                  <img src={offer.product_image.secure_url} />
                  <div className="price">{offer.product_price}€</div>

                  {offer.product_details.map((detail, index) => {
                    if (detail.MARQUE || detail.TAILLE) {
                      return (
                        <p key={index} className="offer-info-home">
                          {detail.MARQUE || detail.TAILLE}
                        </p>
                      );
                    } else {
                      return null;
                    }
                  })}
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
