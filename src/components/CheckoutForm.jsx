import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { useState } from "react";

const CheckoutForm = ({ title, price, name }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  console.log({ name });

  const customFee = Number(1);
  const deliveryFee = Number(3);
  const total = customFee + deliveryFee + price;
  console.log(total);
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      const cardElement = elements.getElement(CardElement);

      const stripeResponse = await stripe.createToken(cardElement, {
        name: name,
      });

      const stripeToken = stripeResponse.token.id;
      console.log(stripeToken);
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/payment",
        { stripeToken: stripeToken, title: title, amount: total }
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
            Total <span>{total} €</span>
          </div>
          <div>
            Il ne vous reste plus qu'une étape pour vous offrir{" "}
            <span>{title}</span> Vous allez payer {total} € (frais de protection
            et frais de port inclus).
          </div>
        </div>
        <CardElement />
        {paymentCompleted === true ? (
          <div>Payment Completed</div>
        ) : (
          <div>
            <input type="submit" disabled={isLoading} />
          </div>
        )}
      </form>
    </>
  );
};

export default CheckoutForm;
