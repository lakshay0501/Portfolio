import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-free/css/all.css';

const Footer = () => {
  return (
    <div className='flex flex-auto bg-teal-400 flex-col justify-center items-center fixed bottom-0 w-full'>
       <div className='flex flex-auto'>
           <div className='px-2 cursor-pointer hover:text-white'>About</div>
           <div className='px-2 cursor-pointer hover:text-white'>Connect</div>
           <div className='px-2 cursor-pointer hover:text-white'>Resume</div>
       </div>
       <div>
          <FontAwesomeIcon icon={faFacebook} className="text-2xl mx-2 cursor-pointer hover:text-blue-500 transition-all duration-300" />
          <FontAwesomeIcon icon={faInstagram} className="text-2xl mx-2 cursor-pointer hover:text-purple-600 transition-all duration-300" />
          <FontAwesomeIcon icon={faTwitter} className="text-2xl mx-2 cursor-pointer hover:text-blue-400 transition-all duration-300" />
       </div>
       <div>@ 2024 , Portfolio website</div>
    </div>
  )
}

export default Footer
