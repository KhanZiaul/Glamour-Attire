import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import './ChexkoutForm.css'
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../../CustomHook/useAxiosSecure/useAxiosSecure";
import { AuthContext } from "../../../../Provider/AuthProvider/AuthProvider";
import useSelectedProducts from "../../../../CustomHook/useSelectedProducts/useSelectedProducts";
import Swal from "sweetalert2";

const CheckoutForm = ({ id }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState("");
    const [axiosSecure] = useAxiosSecure()
    const [processing, setProcessing] = useState(false);
    const { user } = useContext(AuthContext)
    const [getError, setError] = useState('')
    const [transactionId, setTransactionId] = useState("");

    const [customerSelectedProducts, refetch] = useSelectedProducts()
    const selectedProduct = customerSelectedProducts?.find(sp => sp._id === id)

    console.log(selectedProduct)

    const { price, productPiece, _id } = selectedProduct

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price: parseFloat(price * productPiece) })
                .then(data => {
                    console.log(data.data)
                    setClientSecret(data.data.clientSecret)
                })
        }

    }, [axiosSecure, productPiece, price]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setError(error.message)
        } else {
            setError('')
        }

        setProcessing(true)

        const { paymentIntent, conFirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user ? user.displayName : 'anomyous',
                        email: user ? user.email : 'unknown'
                    },
                },
            },
        );

        if (conFirmError) {
            console.log(conFirmError)
        }

        console.log(paymentIntent)

        setProcessing(false)

        if (paymentIntent.status == 'succeeded') {
            setTransactionId(paymentIntent.id)
            const date = new Date();
            const options = { dateStyle: 'full', timeZone: 'UTC' };
            const formattedDate = date.toLocaleDateString('en-US', options);
            const timestamp = date.toISOString();

            console.log(formattedDate, timestamp)

            axiosSecure.patch(`/payment/${_id}`, { payment: "true", date: formattedDate, timestamp: timestamp, TransactionId: paymentIntent.id })
                .then(data => {
                    console.log(data.data)
                    if (data.data.matchedCount > 0) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'payment successfull',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })

            refetch()

            //     axiosSecure.patch(`/updateClass/${classId}`, { availableSeats: availableSeats, students: students })
            //         .then(data => {
            //             console.log(data.data)
            //         })
        }

    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn-sm bg-sky-500" type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>

                <p className="text-xl mt-3 text-red-600">{getError}</p>
                <p className="text-xl mt-3 text-green-600">  {transactionId ? `Payment successfully done , transaction id - ${transactionId}` : ' '}</p>
            </form>
        </div>
    );
};

export default CheckoutForm;