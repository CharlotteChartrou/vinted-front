import { CardElement, useStripe, useElements } from "@stripe/react-strip-js";
import axios from "axios";
import { useState } from "react";

const CheckoutForm = ({ stripe }) => {
  const [isLoading, useIsLoading] = useState(false);
  const [paymentCompleted, usePaymentCompleted] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      const cardElement = elements.getElement(cardElement);

      const stripeResponse = await stripe.createToken(cardElement, {
        name: "coucou",
      });
      console.log(stripResponse);
      const stripeToken = stripeResponse.token.id;
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/payment",
        { stripeToken: stripeToken, title: title, amount: amount }
      );

      console.log(response.data);
      setIsLoading(false);
      if (response.data.status === "succeeded") {
        setPayementCompleted(true);
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Formulaire de paiement</h1>
        <CardElement />
        {paymentCompleted === true ? (
          <p>Payment Completed</p>
        ) : (
          <input type="submit" disabled={isLoading} />
        )}
      </form>
    </>
  );
};

export default CheckoutForm;
