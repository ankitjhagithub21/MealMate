import React from 'react'
import Header from '../components/Header'
import Categories from '../components/Categories'
import useFetchCategory from '../hooks/useFetchCategory'
import FoodItems from '../components/FoodItems'


const Home = () => {
    useFetchCategory()
  return (
    <>
    
    <Header/>
    <Categories/>
    <FoodItems/>
    </>
  )
}

export default Home
