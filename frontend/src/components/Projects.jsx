
import React from 'react'
import { projects } from '../projects'
import ProjectCard from './ProjectCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGgCircle} from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-free/css/all.css';

const Projects = () => {
  return (
    <div>
        <div className='flex items-center mb-12'>
           
            <div className='text-3xl text-bold mr-4 ml-96'>Projects</div>
            <div className='w-6/12 bg bg-black h-0.5'></div>
        </div>
        {projects.map(({ title, videoUrl, description, techstack, github, livelink }) => (
        // <div key={title}>
        //   <h2>{title}</h2>
        //   <video controls>
        //     <source src={videoUrl} type="video/mp4" />
        //     Your browser does not support the video tag.
        //   </video>
        //   <p>{description}</p>
        //   <p>Tech Stack: {techstack}</p>
        //   <p>
        //     <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
        //     {' | '}
        //     <a href={livelink} target="_blank" rel="noopener noreferrer">Live Link</a>
        //   </p>
        // </div>
        <ProjectCard
            key={title}
            title={title}
            videoUrl={videoUrl}
            description={description}
            techstack={techstack}
            github={github}
            livelink={livelink}
        />
      ))}
    </div>
  )
}

export default Projects
