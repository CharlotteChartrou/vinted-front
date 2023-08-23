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
    <div>
      {data.offers.map((product, index) => {
        id === product._id;
        return (
          <div>
            <span className="title">{product.product_name}</span>
            <span className="price">{product.product_price}€</span>
          </div>
        );
      })}
    </div>
  );
};

export default Offer;
