import React from 'react';
import { MapPinIcon, CalendarDaysIcon, ClockIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { Fade, Zoom } from 'react-awesome-reveal';

const Events = () => {

  const cardStyle = {
    border: '4px solid transparent',
    boxShadow: '0 0 10px 0 rgba(255, 255, 255, 0.7)',
    transition: 'border-color 0.3s ease',
  };

  return (
    <div id='workshops' className="bg-gradient-to-tr from-[#351b26] to-[#110f33] ">
      <h2 className='text-center pt-3'>
      <span className=" text-center text-gray-200 text-3xl md:text-4xl mx-1 font-bold  relative inline-block stroke-current">
              Upcoming Events
              <svg
                class="absolute -bottom-0.5 w-full max-h-1.5"
                viewBox="0 0 55 5"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path
                  d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002"
                  stroke-width="2"
                ></path>
              </svg>
            </span>
            </h2>
      
      <div className="mt-5 md:mt-10 grid grid-col pb-12 md:flex items-center justify-center gap-5 md:gap-20">
      <Fade cascade damping={0.5}>
        <div className="h-96 w-72 rounded-md" style={cardStyle}>
          <img
            src="./artwork-female.jpg"
            alt="workshop image"
            className="h-40 w-72 object-cover rounded-md"
          />
          <p className="mt-2 text-xl text-gray-300 text-center">Resin Table Top Workshop</p>
          <span className="flex items-center text-gray-300 gap-2 ml-4 mt-4">
            <MapPinIcon className="h-5 w-5 text-gray-300" />Food Cafe, Bandra, Mumbai
          </span>
          <span className="flex items-center text-gray-300 gap-2 ml-4 mt-4">
            <CalendarDaysIcon className="h-5 w-5 text-gray-300" />02nd March, Saturday
          </span>
          <span className="flex items-center text-gray-300 gap-2 ml-4 mt-4">
            <ClockIcon className="h-5 w-5 text-gray-300" />11am to 01pm
          </span>
          <div className="flex justify-center gap-3 max-w-sm mt-4">
            <Link to={'/buyworkshop'}>
            <button
              type="button"
              className="rounded-md w-48 bg-black/50 px-4 py-2 text-sm font-medium text-gray-200 hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
            >
              Register Now
            </button>
            </Link>
            
           
          </div>
         
        </div>
        
        <div className="h-96 w-72 rounded-md" style={cardStyle}>
          <img
            src="./artwork-female.jpg"
            alt="workshop image"
            className="h-40 w-72 object-cover rounded-md"
          />
          <p className="mt-2 text-xl text-gray-300 text-center">Texture Art Moon + Gold Foil</p>
          <span className="flex items-center text-gray-300 gap-2 ml-4 mt-3">
            <MapPinIcon className="h-5 w-5 text-gray-300" />Love letters & food cafe, Bandra, Mumbai
          </span>
          <span className="flex items-center text-gray-300 gap-2 ml-4 mt-3">
            <CalendarDaysIcon className="h-5 w-5 text-gray-300" />02nd May, Saturday
          </span>
          <span className="flex items-center text-gray-300 gap-2 ml-4 mt-3">
            <ClockIcon className="h-5 w-5 text-gray-300" />11am to 01pm
          </span>
          <div className="flex justify-center gap-3 max-w-sm mt-3">
            <Link to={'#'}>
            <button
              type="button"
              className="rounded-md w-48 bg-black/50 px-4 py-2 pb-1 text-sm font-medium text-gray-200 hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
            >
              Registration Closed
            </button>
            </Link>
            
           
          </div>
         
        </div>
        </Fade>
      </div>
      
    </div>
  );
};

export default Events;
