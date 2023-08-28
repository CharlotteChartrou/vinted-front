import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Offer = () => {
  const { id } = useParams();

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );
        setData(response.data);
        console.log(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [id]);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div className="container">
      <div className="offer">
        <div className="img-offer">
          <img src={data.product_image.secure_url} alt={data.product_name} />
        </div>
        <div className="bloc-product">
          <div className="description">
            <p className="price-offer">{data.product_price} €</p>
            {data.product_details.map((detail, index) => {
              const keys = Object.keys(detail);
              const key = keys[0];

              return (
                <div key={index} className="product-info">
                  <span className="key">{key}</span>

                  <span className="key-description">{detail[key]}</span>
                </div>
              );
            })}
          </div>
          <div className="description-bloc">
            <h6>{data.product_name}</h6>
            <div className="prod-descr">{data.product_description}</div>
            <div className="owner-info">
              {data.owner.account.avatar && (
                <img
                  src={data.owner.account.avatar.secure_url}
                  alt={data.owner.account.username}
                />
              )}

              {data.owner.account.username}
            </div>{" "}
            <button className="buy-button">Acheter</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
