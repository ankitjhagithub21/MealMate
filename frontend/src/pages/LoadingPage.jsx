import React from 'react'

const LoadingPage = () => {
  return (
    <div className='h-screen w-full bg-[#1B1D21] flex items-center justify-center'>
     <img src="/loader.gif" alt="loader" className='w-1/2 mx-auto h-96  object-contain' /> 
     <h2 className='text-white text-2xl text-center fixed bottom-5'>Loading...</h2>
    </div>
  )
}

export default LoadingPage
