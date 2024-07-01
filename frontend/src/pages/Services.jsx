import React from 'react'
import Service from '../components/Service'

const Services = () => {
   const images = [
      "https://img.freepik.com/free-vector/safe-food-delivery-order-receive_23-2148549716.jpg",
       "https://cdn.grabon.in/gograbon/images/web-images/uploads/1618575517942/food-coupons.jpg",
        "https://edeliveryapp.com/wp-content/uploads/2021/12/factors-which-influence-the-consumer-to-use-an-online-food-delivery-system.jpg"
   ]
  return (
   <section className="py-24">
    <h2 className='text-center text-5xl md:text-3xl font-bold mb-5'>Our Services</h2>
     <div className='my-5 flex px-5  mx-auto  gap-5 items-center justify-center'>
  
    {
      images.map((image,index)=>{
         return <Service key={index} image={image}/>
      })
    }
    </div>
   </section>
  )
}

export default Services
