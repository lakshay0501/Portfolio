
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {useNavigate} from "react-router-dom"
import '@fortawesome/fontawesome-free/css/all.css';

const AboutMe = () => {
    
  const handleClick = () => {
        window.location.href = "https://www.github.com/lakshay0501";
    };

  return (
    <div className='ml-96'>
        <div className='text-3xl text-red-800 mt-6 mb-4 font-mono'>Hi my name is</div>
        <div className='text-5xl text-bold mb-6'>Lakshay Arora</div>
        <div className='text-3xl animate-pulse mb-4'>
            I am a full stack developer with a good passion in web development.
            <br />
             Everyday I try to become better version of myself
        </div>

        <button className='bg bg-slate-300 rounded-lg w-24 flex items-center mb-16 border border-slate-500' onClick={handleClick}>
            <FontAwesomeIcon icon={faGithub} className='pl-2 pr-2'></FontAwesomeIcon>
            <div>Follow</div>
        </button>
    </div>
  )
}

export default AboutMe
