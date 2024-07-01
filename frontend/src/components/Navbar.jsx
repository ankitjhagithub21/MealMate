import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { CiSearch, CiShoppingCart } from "react-icons/ci"
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../app/slices/authSlice'
import toast from 'react-hot-toast'
const Navbar = ({ setShowLogin }) => {
  const links = [
    "home",
    "menu",
    "services",
    "contact"
  ]
  const location = useLocation()
  const currPath = location.pathname.slice(1) || "home"
  const isLoggedIn = useSelector(state => state.auth.user)
  const items = useSelector(state => state.cart.value)
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(setUser(null))
    localStorage.removeItem('token')
    toast.success("Logout successfull.")

  }

  return (
    <nav className='container py-3 px-5 mx-auto flex items-center justify-between'>
      <Link className='text-3xl font-bold text-orange-500' to={"/"}>MealMate</Link>
      <ul className='md:flex hidden gap-3 items-center text-lg'>
        {
          links.map((link, index) => {
            return <Link to={`/${link}`} className={currPath === link ? 'border-b border-gray-600' : ''} key={index}>{link}</Link>
          })
        }
      </ul>
      <div className='flex items-center gap-5'>
        <CiSearch className='cursor-pointer' size={23} />
        {
          isLoggedIn && <Link to={"/cart"} className='relative'><CiShoppingCart size={25} />
            {
              items.length > 0 && <span className='absolute -top-1 -right-1 bg-orange-500 text-white rounded-full px-1  text-xs'>
                {items.length}
              </span>
            }
          </Link>
        }
        {
          isLoggedIn ? <button className='px-3 py-1 hover:bg-orange-600 border bg-orange-500 text-white rounded-full text-lg' onClick={handleLogout}>sign out</button> : <button className='px-3 hover:bg-orange-500  hover:text-white py-1 border rounded-full text-lg' onClick={() => setShowLogin(true)}>sign in</button>
        }
      </div>
    </nav>
  )
}

export default Navbar
