import { useSelector } from "react-redux"
import EmptyCart from "./EmptyCart"
import CartItem from "../components/CartItem"

const Cart = () => {
  const items = useSelector(state => state.cart.value)

  if (items.length == 0) {
    return <EmptyCart />
  }

  return (
    <div className="container mx-auto my-10 px-5 ">
      <h2 className="text-2xl text-center mb-5 font-bold ">Your Cart</h2>
      <div className="flex text-center pb-2 border-b">
        <div className="w-1/4 md:text-left text-center">

          <p>Item</p>
        </div>

        <div className="w-1/4">
          <p>Price</p>
        </div>
        <div className="w-1/4">
          <p>Quantity</p>
        </div>
        <div className="w-1/4">
          <p>Remove</p>
        </div>

      </div>
      <div>
        {
          items.map((item) => {
            return <CartItem key={item.idMeal} item={item} />
          })
        }
      </div>
      <h2 className="text-2xl font-bold my-5">Cart Totals</h2>
      <div className="flex flex-wrap items-start">
        <div className="lg:w-1/2 w-full">
          <div className="border-b py-2 flex items-center justify-between">
            <p>Subtotal</p>
            <p>$56</p>
          </div>
          <div className="border-b py-2 flex items-center justify-between">
            <p>Delivery fee</p>
            <p>$56</p>
          </div>
          <div className="border-b py-2 flex items-center justify-between">
            <p>Total</p>
            <p>$56</p>
          </div>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-lg  my-4">PROCESS TO CHECKOUT</button>
        </div>

        <div className="w-full lg:w-1/2  flex items-center justify-center  p-0 ">

          <div className="w-full">
            <p className="mb-2 lg:px-5">if you have a promo code, Enter it here</p>
            <div className="flex lg:px-5">
              <input type="text" placeholder="promo code" className="px-4 py-2 w-full bg-gray-100" />

              <button className="px-2 py-2 bg-gray-800 text-white">Submit</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Cart
