import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../components/RegistrationModal';
import { Fade } from "react-awesome-reveal";

const WorkshopResin = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [workshop, setWorkshop] = useState('Resin Top Workshop');
  
  
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
    const images = [
        { src: './resin1.jpg' },
        { src: './resin2.jpg' },
        { src: './resin3.jpg' },
        { src: './resin4.jpg' },
        { src: './resin5.jpg' },
        { src: './resin6.jpg' }
      ];
      
  return (
    <div className="bg-gradient-to-tr from-[#351b26] to-[#0c0b28]  dark:bg-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 lg:flex-1 px-4" >
            
            <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-2 gap-1 md:gap-4 lg:gap-4 mb-4">
            <Fade cascade damping={0.2}>
              {images.map(( image, index) => (
                
                <img
                
                  key={index}
                  className="w-28 h-28 md:h-48 md:w-60 lg:h-48 lg:w-60 border border-teal-100  object-cover rounded-lg"
                  src={image.src}
                  alt={`Resin Workshop ${index + 1}`}
                /> 
              ))}</Fade>
            </div>
            
          </div>
            <div className="md:flex-1 px-4">
                <h2 className="text-3xl font-bold text-gray-200 mb-2">Resin Table Top Workshop - Mumbai</h2>
                <p className="text-gray-200  text-md mb-2">
                Are you ready to create beautiful Resin products??
                  Welcome to HandsWithVision WORKSHOPS!
                </p>
                <p className="text-gray-300 font-semibold text-xl mt-1">
                    Session Overview :
                    </p>
                    <ul className='list-disc text-gray-300 text-md mx-5'>
                      <li>RESIN-Introduction,Types,Viscosity and composition</li>
                      <li>Mixing Techniques,Pouring methods,Ratios and proportions</li>
                      <li>Safety and Precautions</li>
                      <li>Colours used, Pigments(Solubilities)</li>
                      <li>Demonstrations and detailed explanation</li>
                      <li>Resin Coating Technique</li>
                      
                    </ul>
                
                <div className='mt-3'>
                    <span className="font-semibold text-xl text-gray-300">Workshop Description:</span>
                   
                    <p className="text-gray-300 text-md mt-2">
                    RESIN TABLE TOP WORKSHOP (18 INCHES) 
                    <br></br>
                    Venue : Doolally Taproom, Andheri(W)  <span className='underline ml-2'><Link to="https://maps.app.goo.gl/R7h7ttFqMkYSHe3DA" target="_blank">View in Map</Link></span>
                    <br></br>
                    Date: 02nd March, Saturday
                    <br></br>
                    Timings: 11 am to 01 pm
                    </p>
                    
                </div>
                <div className="flex mb-4 mt-2">
                    <div className="mr-4">
                        <span className="font-semibold text-xl text-gray-300 ">Price:</span>
                        <span className="text-gray-300 font-semibold text-xl dark:text-gray-300"> ₹ 5999</span>
                    </div>
                </div>
                <div className="flex mt-2">
                           
                <button type='button' onClick={openModal}
                className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Register Now</button>
                </div>
                <p className='text-gray-300 mt-3'> 👉 All the materials will be provided at the venue.
Join us for a creative weekend and create a beautiful table top at the end of the session!</p>
            </div>
            {isOpen && <Modal  closeModal={closeModal} workshop={workshop}  />}
           
        </div>
    </div>
</div>
  )
}

export default WorkshopResin