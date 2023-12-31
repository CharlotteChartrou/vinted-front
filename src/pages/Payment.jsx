import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";

const stripePromise = loadStripe(
  "pk_test_51HCObyDVswqktOkX6VVcoA7V2sjOJCUB4FBt3EOiAdSz5vWudpWxwcSY8z2feWXBq6lwMgAb5IVZZ1p84ntLq03H00LDVc2RwP"
);

import CheckoutForm from "../components/CheckoutForm";

const Payment = ({ id }) => {
  const location = useLocation();
  const { title } = location.state;
  const { price } = location.state;

  return (
    <>
      <div className="container">
        <Elements className="stripe-page" stripe={stripePromise}>
          <CheckoutForm title={title} price={price} id={id} />
        </Elements>
      </div>
    </>
  );
};

export default Payment;
