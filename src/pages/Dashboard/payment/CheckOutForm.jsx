import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import UseContext from "../../../hooks/useContext";


const CheckOutForm = () => {
    const [error, setError] = useState('')
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure()
    const [clientSecret, setClientSecret] = useState('')
    const[paymentSuccess,setPaymentSuccess]=useState('')
    const [cart] = useCart()
    const { user } = UseContext()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    console.log(cart)
    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price: totalPrice })
            .then(res => {
                console.log(res.data.clientSecret)
                setClientSecret(res.data.clientSecret)
            })
    }, [axiosSecure, totalPrice])




    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log("payment method error", error);
            setError(error.message)
        }
        else {
            console.log("payment method", paymentMethod);
            setError('')
        }

        // confirm card payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    name: user?.displayName || "anonymous",
                    email: user?.email || 'anonymous'
                },
            }
        })

        if (confirmError) {
            console.log("confirm error", confirmError)
        } else {
            console.log("payment intent ", paymentIntent)
            if (paymentIntent.status === "succeeded") {
                console.log("your payment successful")
                setPaymentSuccess(paymentIntent.id)
            }
        }
    }
    return (
        <>

            <Helmet>BistroNest || Payment</Helmet>
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

                    <button className="mt-4 sm:mt-0 px-6 py-2 bg-[#D1A054] hover:bg-[#b37335] transition text-white font-semibold rounded-lg shadow-md" type="submit" disabled={!stripe || !clientSecret}>
                        Pay
                    </button>
                    <p>{error}</p>
                    <p>TransactionId:  {paymentSuccess}</p>
                </form>
            </div>
        </>
    )
}

export default CheckOutForm
