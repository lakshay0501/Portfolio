import React from 'react'

const Navbar = () => {
  return (
    <div>
       
        <nav className='absolute w-full flex flex-row flex-wrap items-center bg-purple-400 p-5 '>
            <div>
                <a href="/">
                    <a className="inline-flex items-center p-2 mr-4 ">
                        <span className="text-xl text-teaser font-bold  tracking-wide">
                          Lakshay Arora
                        </span>
                   </a>
                </a>
            </div>
            <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto bg-text-background'>
                
                <div className='className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black items-center justify-center hover:text-accent hover:text-white "'>
                    <a href="#">About</a>
                </div>
                
                <div className='className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black items-center justify-center hover:text-accent hover:text-white "'>
                    <a href="#">Projects</a>
                </div>
                <div className='className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black items-center justify-center hover:text-accent hover:text-white "'>
                    <a href="#">Skills</a>
                </div>
                 <div className='className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black items-center justify-center hover:text-accent hover:text-white "'>
                    <a href="#">Resume</a>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
