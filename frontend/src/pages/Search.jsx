import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { useSelector } from 'react-redux'

const Search = () => {
    const categories = useSelector((state)=>state.food.categories)
  return (
    <div className='container mx-auto p-5'>
     <div className='lg:w-2/3 w-full mx-auto'>
     <div className='flex items-center px-4 py-2 border'>
        <input type="text" placeholder='Search food ' className='w-full text-lg outline-none' />
        <CiSearch size={30}/>
      </div>
       <h2 className='mt-5 font-bold text-xl'>Popular Cuisines</h2>
       <div className='flex gap-5 overflow-x-auto items-center menu py-5'>
        {
            categories?.map((category)=>{
                return <div key={category.idCategory} className='text-center cursor-pointer'>
                  <div className='w-20 h-16 overflow-hidden bg-gray-100 rounded-full flex items-center justify-center'>
                  <img src={category.strCategoryThumb} alt="food"  className='w-full h-full object-cover object-center '/>
                  </div>
                    <span className='text-sm'>{category.strCategory}</span>
                </div>
            })
        }
       </div>
      
      </div>
    </div>
  )
}

export default Search
