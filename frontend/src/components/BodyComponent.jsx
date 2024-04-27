import React from 'react'
import AboutMe from './AboutMe'
import Projects from './Projects'
const BodyComponent = () => {
  return (
    <div className='pt-24 bg bg-pink-200'>
       <AboutMe/>
       <Projects></Projects>
    </div>
  )
}

export default BodyComponent
