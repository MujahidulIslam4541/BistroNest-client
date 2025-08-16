import { loadStripe } from "@stripe/stripe-js"
import SectionTitle from "../../../components/sectionTitle/SectionTitle"
import CheckOutForm from "./CheckOutForm"
import { Elements } from "@stripe/react-stripe-js"


const publishableKey = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY)
const Payment = () => {
  return (
    <div>
      <SectionTitle heading={'Payment'} subHeading='Please make your payment'></SectionTitle>

      <Elements stripe={publishableKey}>
        <CheckOutForm></CheckOutForm>
      </Elements>
    </div>
  )
}

export default Payment
