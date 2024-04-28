import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div>
      <nav className='absolute w-full flex flex-row flex-wrap items-center bg-purple-400 p-5'>
        <div>
          <Link to="/" className="inline-flex items-center p-2 mr-4 cursor-pointer">
            <span className="text-xl text-teaser font-bold  tracking-wide">
              Lakshay Arora
            </span>
          </Link>
        </div>
        <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto bg-text-background'>
          <div className='px-3 py-2 rounded text-black items-center justify-center hover:text-accent hover:text-white cursor-pointer'>
            <Link to="about" smooth={true} duration={500}>About</Link>
          </div>
          <div className='px-3 py-2 rounded text-black items-center justify-center hover:text-accent hover:text-white cursor-pointer'>
            <Link to="projects" smooth={true} duration={500}>Projects</Link>
          </div>
          <div className='px-3 py-2 rounded text-black items-center justify-center hover:text-accent hover:text-white cursor-pointer'>
            <Link to="achievements" smooth={true} duration={500}>Achievements</Link>
          </div>
          <div className='px-3 py-2 rounded text-black items-center justify-center hover:text-accent hover:text-white cursor-pointer'>
            <Link to="resume" smooth={true} duration={500}>Resume</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
