import React from 'react';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Achievements from './Achievements';
import Resume from './Resume';

const BodyComponent = () => {
  return (
    <div className='pt-24 pb-24 bg bg-pink-200'>
      <div id="about">
        <AboutMe/>
      </div>
      <div id="projects">
        <Projects/>
      </div>
      <div id="achievements">
        <Achievements/>
      </div>
      <div id='resume'>
        <Resume/>
      </div>
    </div>
  );
}

export default BodyComponent;
