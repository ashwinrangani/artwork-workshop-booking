import React, { useState, useEffect } from 'react';
import { ArrowUpTrayIcon } from '@heroicons/react/24/outline';

const ScrollTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisible);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', toggleVisible);
    };
  }, []); // Empty dependency array means this effect runs only once after the initial render

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className='bg-[#351b26]'>
      <button 
            onClick={scrollToTop} 
            className={`fixed bottom-8 md:bottom-6 right-3 md:right-10 ${visible ? 'block' : 'hidden'}`} 
            
        > 
            <ArrowUpTrayIcon className='h-9 w-9 text-yellow-50 bg-black rounded-full p-1 hover:bg-slate-700'/> 
        </button> 
      </div>
    
  );
};

export default ScrollTop;
