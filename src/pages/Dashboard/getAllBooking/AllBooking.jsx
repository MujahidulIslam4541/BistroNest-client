import { useQuery } from "@tanstack/react-query"
import SectionTitle from "../../../components/sectionTitle/SectionTitle"
import useAxiosSecure from "../../../hooks/useAxiosSecure"


const AllBooking = () => {
    const axiosSecure = useAxiosSecure()

    const { data: bookings = [] } = useQuery({
        queryKey: ['booking'],
        queryFn: async () => {
            const result = await axiosSecure.get('/booking')
            return result?.data;
        }
    })
    console.log(bookings)
    return (
        <div>
            <SectionTitle heading="My All Booking" subHeading='sd'></SectionTitle>
        </div>
    )
}

export default AllBooking
