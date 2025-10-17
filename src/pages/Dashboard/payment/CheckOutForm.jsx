import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useCart from "../../../hooks/useCart";
import UseContext from "../../../hooks/useContext";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";


const CheckOutForm = () => {
    const [error, setError] = useState('')
    const [processing, setProcessing] = useState(false)
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = useAxiosSecure()
    const [clientSecret, setClientSecret] = useState('')
    const [cart, refetch] = useCart()
    const { user } = UseContext()
    const navigate = useNavigate()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)

    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [axiosSecure, totalPrice])




    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setProcessing(true)
        setError('')

        const card = elements.getElement(CardElement);
        if (card == null) {
            setProcessing(false)
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            setError(error.message)
            setProcessing(false)
            return;
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
            setError(confirmError.message)
            setProcessing(false)
        } else {
            if (paymentIntent.status === "succeeded") {
                const payment = {
                    email: user.email,
                    price: totalPrice,
                    date: new Date(),
                    TransactionId: paymentIntent.id,
                    cartIds: cart.map(item => item._id),
                    menuItemIds: cart.map(item => item.CartId),
                    status: "pending"
                }
                const res = await axiosSecure.post('/payment', payment)
                if (res.data.paymentResult.insertedId) {
                    refetch()
                    toast.success("Payment successful!")
                    navigate('/dashboard/paymentHistory')
                }
                setProcessing(false)
            }
        }
    }



    return (
        <>
            <Helmet>
                <title>BistroNest || Payment</title>
            </Helmet>

            {/* Modal Overlay */}
            <div 
                className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 animate-fade-in"
            >
                {/* Modal Content */}
                <div 
                    className="bg-white rounded-2xl shadow-2xl max-w-md w-full animate-slide-up"
                >
                    {/* Modal Header */}
                    <div className="bg-gradient-to-r from-[#D1A054] to-[#b37335] text-white p-5 rounded-t-2xl flex items-center justify-between relative">
                        <h2 className="text-xl font-bold">Payment</h2>
                        <Link
                            to='/dashboard/cart'
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors z-10"
                            type="button"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </Link>
                    </div>

                    {/* Modal Body */}
                    <div className="p-6">
                        {/* Price Display */}
                        <div className="mb-6 text-center">
                            <p className="text-sm text-gray-600 mb-1">Total Amount</p>
                            <p className="text-3xl font-bold text-[#D1A054]">
                                ${totalPrice.toFixed(2)}
                            </p>
                        </div>

                        {/* Payment Form */}
                        <form onSubmit={handleSubmit}>
                            <div className="mb-5">
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Card Details
                                </label>
                                <div className="border-2 border-gray-200 rounded-lg p-3 focus-within:border-[#D1A054] transition-colors">
                                    <CardElement
                                        options={{
                                            style: {
                                                base: {
                                                    fontSize: '15px',
                                                    color: '#1f2937',
                                                    '::placeholder': {
                                                        color: '#9ca3af',
                                                    },
                                                },
                                                invalid: {
                                                    color: '#ef4444',
                                                },
                                            },
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Error Message */}
                            {error && (
                                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-start gap-2 animate-shake">
                                    <svg className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <p className="text-red-700 text-xs">{error}</p>
                                </div>
                            )}

                            {/* Submit Button */}
                            <button
                                className="w-full py-3 bg-gradient-to-r from-[#D1A054] to-[#b37335] hover:from-[#b37335] hover:to-[#D1A054] text-white font-semibold rounded-lg shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
                                type="submit"
                                disabled={!stripe || !clientSecret || processing}
                            >
                                {processing ? (
                                    <>
                                        <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        <span>Processing...</span>
                                    </>
                                ) : (
                                    <>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                        </svg>
                                        <span>Pay Now</span>
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <style>{`
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes slide-up {
                    from { 
                        opacity: 0; 
                        transform: translateY(20px); 
                    }
                    to { 
                        opacity: 1; 
                        transform: translateY(0); 
                    }
                }
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
                    20%, 40%, 60%, 80% { transform: translateX(5px); }
                }
                .animate-fade-in {
                    animation: fade-in 0.2s ease-out;
                }
                .animate-slide-up {
                    animation: slide-up 0.3s ease-out;
                }
                .animate-shake {
                    animation: shake 0.5s ease-in-out;
                }
            `}</style>
        </>
    )
}

export default CheckOutForm
