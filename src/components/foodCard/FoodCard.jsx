
import UseContext from "../../hooks/useContext";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";


const FoodCard = ({ item }) => {
    const { user } = UseContext()
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()
    const [, refetch] = useCart()
    const { name, image, recipe, price, _id } = item || {};

    const handleAddToCart = food => {
        console.log(food)
        if (user && user?.email) {
            const cartItem = {
                CartId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/cart', cartItem)
                .then(res => {
                    if (res.data.insertedId) {
                        toast.success(`Great choice! ${name} is now in your cart 🛍️`);
                        refetch()
                    }
                })
        }
        else {
            Swal.fire({
                title: "Login Required",
                text: "To add items to your cart, please log in to your account first.",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Log In",
                cancelButtonText: "Cancel"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/signIn', { state: { from: location } })
                }
            });

        }
    }
    return (
        <div className="max-w-sm mx-auto">
            <div className="bg-white rounded-2xl shadow-md overflow-hidden">
                <figure className="relative h-56 overflow-hidden">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover hover:scale-105 transition duration-300"
                    />
                    <span className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        ${price}
                    </span>
                </figure>

                <div className="p-4 space-y-2">
                    <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
                    <p className="text-gray-600 text-sm">{recipe}</p>
                    <div className="pt-3">
                        <button onClick={() => handleAddToCart(item)} className="w-full border-b-2 border-orange-500 text-orange-500 bg-gray-100 py-2 rounded-lg transition-all duration-300 hover:bg-black hover:text-orange-500">
                            Add to Cart
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default FoodCard
