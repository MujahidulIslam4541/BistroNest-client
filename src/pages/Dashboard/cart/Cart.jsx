import useCart from "../../../hooks/useCart"


const Cart = () => {
    const [cart]=useCart()
    return (
        <div className="max-w-3xl mx-auto bg-[#FFFFFF] ">
            <h3>My Cart {cart.length}</h3>
        </div>
    )
}

export default Cart
