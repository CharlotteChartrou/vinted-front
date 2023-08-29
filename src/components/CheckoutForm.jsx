import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { useState } from "react";

const CheckoutForm = ({ title, price, id }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const customFee = Number(1);
  const deliveryFee = Number(3);
  const total = customFee + deliveryFee + price;
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      const cardElement = elements.getElement(CardElement);

      const stripeResponse = await stripe.createToken(cardElement, {
        name: id,
      });

      const stripeToken = stripeResponse.token.id;

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/payment",
        { token: stripeToken, title: title, amount: total }
      );

      console.log(response.data);
      setIsLoading(false);
      if (response.data.status === "succeeded") {
        setPaymentCompleted(true);
      }
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <>
      <form className="form-checkout" onSubmit={handleSubmit}>
        <h3>Résumé de la commande</h3>
        <div className="form-order">
          <div className="lign-order">
            <span>Commande</span> <span>{price}€</span>
          </div>
          <div className="lign-order">
            <span>Frais de protection acheteurs</span>{" "}
            <span>{customFee} €</span>
          </div>
          <div className="lign-order">
            <span>Frais de port</span> <span>{deliveryFee}€</span>
          </div>
          <div className="total">
            <span>Total</span> <span>{total} €</span>
          </div>
          <div>
            Il ne vous reste plus qu'une étape pour vous offrir{" "}
            <span className="bold">{title}</span> Vous allez payer{" "}
            <span className="bold">{total} €</span> (frais de protection et
            frais de port inclus).
          </div>
        </div>
        <CardElement />
        {paymentCompleted === true ? (
          <div>Payment Completed</div>
        ) : (
          <div>
            <input
              style={{
                backgroundColor: "#03C06D",
                color: "white",
                border: "none",
                width: "100%",
                borderRadius: "3px",
                padding: "10px",
                marginTop: "30px",
              }}
              type="submit"
              disabled={isLoading}
              placeholder="Envoyer"
            />
          </div>
        )}
      </form>
    </>
  );
};

export default CheckoutForm;
