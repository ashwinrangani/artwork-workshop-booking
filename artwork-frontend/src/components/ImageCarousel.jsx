import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Fade } from 'react-awesome-reveal';



const ImageCarousel = () => {

  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const images = [
    '/resin1.jpg',
    '/resin2.jpg',
    '/resin3.jpg',
    '/resin4.jpg'
  ];
 
  return (
    <Fade >
    <div id='gallery' className='grid grid-col md:flex  border-gray-400 border-1 p-2 md:p-5 bg-gradient-to-tr from-[#351b26] to-[#0c0b28]'>
     <div className='bg-gradient-to-tr from-[#351b26] to-[#0c0b28] flex  items-center pt-5 pb-5 '>
      <h1 className='text-yellow-50 font-serif leading-1 text-xl text-center'>Some Glimpse of Our Recent Workshop Arts</h1>
      </div>
      
<Slider {...settings} className='overflow-hidden h-72 w-full'>
      {images.map((image, index) => (
        <div key={index} className="h-72 ">
          <img src={image} alt={`Image ${index + 1}`} className='object-cover w-full h-72 aspect-auto'/>
        </div>
      ))}
      
    </Slider>
    
  
    </div>
    </Fade>
  );
};

export default ImageCarousel;
