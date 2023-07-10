import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation, useParams } from "react-router-dom";
import useTitle from "../../../../CustomHook/useTitle/useTitle";
import useScroll from "../../../../CustomHook/useScroll/useScroll";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_KEY);

const Payment = () => {
    const location = useLocation()
    useScroll(location.pathname)
    useTitle('Payment | Dashboard')
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