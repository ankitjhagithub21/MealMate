import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../app/slices/authSlice';
import toast from 'react-hot-toast';
import { RiMenu3Fill } from "react-icons/ri";

const Navbar = ({ setShowLogin }) => {
  const links = ["home", "menu", "services", "contact"];
  const location = useLocation();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const currPath = location.pathname.slice(1) || "home";
  const isLoggedIn = useSelector(state => state.auth.user);
  const items = useSelector(state => state.cart.value);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(setUser(null));
    localStorage.removeItem('token');
    toast.success("Logout successful.");
  };

  return (
    <nav className='container py-3 md:px-5 px-2 mx-auto flex items-center justify-between'>
      <Link className='md:text-3xl text-2xl z-20 font-bold text-orange-500' to="/">MealMate</Link>

      <ul className='md:flex hidden gap-3 items-center '>
        {links.map((link, index) => (
          <Link
            to={`/${link}`}
            className={currPath === link ? 'border-b border-gray-600' : ''}
            key={index}
          >
            {link}
          </Link>
        ))}
      </ul>

      <ul className={`md:hidden fixed z-10 w-full top-0 transition-all duration-500 ${showMobileMenu ? 'left-0' : '-left-full'} flex flex-col justify-center bg-white h-screen gap-5 items-center text-2xl`}>
        {links.map((link, index) => (
          <Link
            to={`/${link}`}
            className={currPath === link ? 'border-b border-gray-600' : ''}
            onClick={() => setShowMobileMenu(false)}
            key={index}
          >
            {link}
          </Link>
        ))}
       
         
        
       
        {isLoggedIn ? (
          <button
            className='px-3 py-1 hover:bg-orange-600 border bg-orange-500 text-white rounded-full'
            onClick={handleLogout}
          >
            Sign Out
          </button>
        ) : (
          <button
            className='px-3 py-1 hover:bg-orange-500 hover:text-white border rounded-full '
            onClick={() => {
              setShowLogin(true)
              setShowMobileMenu(false)

            }
            }
          >
            Sign In
          </button>
        )}
      </ul>

      <div className='flex items-center gap-2 '>
        <Link to={"/search"} className='md:relative absolute md:right-0 right-9'>
        <CiSearch className='cursor-pointer' size={23} />
        </Link>
        {isLoggedIn && (
          <Link to="/cart" className='md:relative absolute md:right-0 right-16'>
            <CiShoppingCart size={25} />
            {items.length > 0 && (
              <span className='absolute -top-1 -right-1 bg-orange-500 text-white rounded-full px-1 text-xs'>
                {items.length}
              </span>
            )}
          </Link>
        )}
        {isLoggedIn ? (
          <button
            className='px-3 py-1 hover:bg-orange-600 border bg-orange-500 text-white rounded-full '
            onClick={handleLogout}
          >
            Sign Out
          </button>
        ) : (
          <button
            className='px-3 py-1 hover:bg-orange-500 hover:text-white md:block hidden border rounded-full'
            onClick={() => setShowLogin(true)}
          >
            Sign In
          </button>
        )}
      </div>

      <button className='text-orange-500 z-20 md:hidden block' onClick={() => setShowMobileMenu(!showMobileMenu)}>
        <RiMenu3Fill size={24} />
      </button>
    </nav>
  );
};

export default Navbar;
