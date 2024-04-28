import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-free/css/all.css';
import { Link } from 'react-scroll';

const Footer = () => {
  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/lakshay-arora01/", "_blank");
  };
  
  const handleInstaClick = () => {
     window.open("https://www.instagram.com/lakshay.arora05012001/","__blank");
  }

  const handleXClick = () => {
    window.open("https://twitter.com/LAKSHAY12526624","__blank");
  }

  const handleFacebookClick = () => {
    window.open("https://www.facebook.com/lakshay.arora.7798","__blank");
  }

  return (
    <div className='flex bg-teal-400 flex-col justify-center items-center w-full'>
       <div className='flex'>
        <Link to="about" smooth={true} duration={500} className='px-2 cursor-pointer hover:text-white'>About</Link>
        <div onClick={handleLinkedInClick} className='px-2 cursor-pointer hover:text-white'>Connect</div>
        <Link to="resume" smooth={true} duration={500} className='px-2 cursor-pointer hover:text-white'>Resume</Link>
       </div>
       <div>
          <FontAwesomeIcon onClick={handleFacebookClick} icon={faFacebook} className="text-2xl mx-2 cursor-pointer hover:text-blue-500 transition-all duration-300" />
          <FontAwesomeIcon onClick={handleInstaClick} icon={faInstagram} className="text-2xl mx-2 cursor-pointer hover:text-purple-600 transition-all duration-300" />
          <FontAwesomeIcon onClick={handleXClick} icon={faTwitter} className="text-2xl mx-2 cursor-pointer hover:text-blue-400 transition-all duration-300" />
       </div>
       <div>@ 2024 , Portfolio website</div>
    </div>
  );
}

export default Footer;
