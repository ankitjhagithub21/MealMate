import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaStar } from "react-icons/fa6";
import { FaRegStar, FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../app/slices/cartSlice"
import toast from 'react-hot-toast';
import { SiTicktick } from "react-icons/si";

const FoodItem = ({ food }) => {
  const { idMeal, strMealThumb, strMeal } = food;
  const navigate = useNavigate();
  const [price, setPrice] = useState(Number(idMeal.slice(3, 5)))
  const dispatch = useDispatch()
  const user = useSelector(state => state.auth.user)
  const cartItems = useSelector(state => state.cart.value)
  const token = localStorage.getItem('token')
  const isInCart = cartItems.some(item => item.idMeal === idMeal);

  const handleAddToCart = async () => {

    if (!user) {
      return toast.error("You are not logged in.")
    }
    let foodData = {
      idMeal,
      strMeal,
      strMealThumb,
      price
    }

    try {

      const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/api/cart/add`, {
        method: "POST",
        headers: {
          "authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(foodData)
      })
      const data = await res.json()
      if (data.success) {

        dispatch(addToCart(foodData))
      
        toast.success(data.message)
      } else {
        toast.error(data.message)
      }


    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full header-content ">
      <div className=' shadow-lg relative bg-gray-100 rounded-lg '>
        <img
          alt="food"
          className="object-cover object-center w-full h-48 rounded-t-lg"
          src={strMealThumb}
          loading='lazy'
        />

        <button className='absolute bottom-24 right-2 text-orange-500 bg-white p-2 rounded-full' onClick={handleAddToCart}>
          {
            isInCart ?
              <SiTicktick /> :
              <FaShoppingCart />
          }
        </button>

        <div className="py-3 px-3 rounded-b-xl">
          <div className='flex items-center justify-between text-orange-500 mb-2'>
            <h2
              className="text-lg text-gray-800 hover:underline cursor-pointer"
              onClick={() => navigate(`/meal/${idMeal}`)}
            >
              {strMeal.slice(0, 16)}
            </h2>
            <div className='flex gap-1'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </div>
          </div>
          <b className='text-orange-500 text-xl '>
            $ {price}
          </b>
        </div>
      </div>
    </div>
  );
}

export default FoodItem;
