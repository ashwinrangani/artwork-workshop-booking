import React from 'react'

const HomePage = () => {
  return (
    <div className=''>
      <img
        src="/header-bg.jpg"
        alt="background-image"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
  <div className='h-12 flex justify-start md:justify-center pl-2 md:pl-0 items-center border-2 bg-opacity-50 bg-black rounded-full m-2 relative'>
    <h1 className='text-gray-300 text-md md:text-xl'>Get the Latest Resin Artifacts</h1>
    <div className='absolute right-4 flex space-x-4'>
      <h1 className='text-gray-300'>Login</h1>
      <h1 className='text-gray-300'>Cart</h1>
    </div>
  </div>
  <div className='flex justify-center'>
    <h1 className='text-2xl animate-pulse text-gray-300'>The Store is under development</h1>
  </div>
</div>

  )
}

export default HomePage;