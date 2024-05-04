import React from 'react'

const LoadingDots = () => {
  return (
    <div class='flex space-x-2 mt-8 justify-center items-center dark:invert'>
 	<span class='sr-only'>Loading...</span>
  	<div class='h-5 w-5 bg-gray-100 rounded-full animate-bounce [animation-delay:-0.3s]'></div>
	<div class='h-5 w-5 bg-gray-200 rounded-full animate-bounce [animation-delay:-0.15s]'></div>
	<div class='h-5 w-5 bg-gray-300 rounded-full animate-bounce'></div>
</div>
  )
}

export default LoadingDots;