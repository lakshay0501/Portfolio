
import React from 'react'
import { projects } from '../projects'
import ProjectCard from './ProjectCard'
const Projects = () => {
  return (
    <div>
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
