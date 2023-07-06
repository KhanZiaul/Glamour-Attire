import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { useParams } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);

const Payment = () => {
    const {id} = useParams()
    return (
        <div>
            <Elements stripe={stripePromise}>
                <CheckoutForm id={id}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;