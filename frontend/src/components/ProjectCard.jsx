import React from 'react';

const ProjectCard = (props) => {
  return (
    <div className='bg-blue-200 w-6/12 mx-auto mb-10 rounded-lg p-6 border border-black'>
      <div className='text-3xl font-bold mb-4 text-center text-blue-950'>{props.title}</div>
      <video controls className='w-full mb-2'>
        <source src={props.videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className='mb-2'>{props.description}</div>
      <div className='mb-2'>
        <div className='font-semibold'>TechStack:-</div>
        <ul className='list-disc ml-4'>{props.techstack.map((tech, index) => (
          <li key={index}>{tech}</li> // Added keys for list elements
        ))}</ul>
      </div>
      <div className='flex mt-6'>
        <a href={props.github} target="_blank" rel="noopener noreferrer" className='flex-1 bg bg-slate-300 hover:bg-pink-400 p-2 rounded-lg border border-white text-center mr-1'>GitHub</a>
        <a href={props.livelink} target="_blank" rel="noopener noreferrer" className='flex-1 bg bg-slate-300 hover:bg-pink-400 p-2 rounded-lg border border-white text-center ml-1'>Live Link</a>
      </div>
    </div>
  );
};

export default ProjectCard;
