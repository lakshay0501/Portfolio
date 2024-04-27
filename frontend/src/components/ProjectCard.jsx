import React from 'react';

const ProjectCard = (props) => {
  return (
    <div className='bg-blue-200 w-96 mx-auto mb-10 rounded-sm p-6 border border-black'>
      <div className='text-xl font-bold mb-2'>{props.title}</div>
      <video controls className='w-full mb-2'>
        <source src={props.videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className='mb-2'>{props.description}</div>
      <div className='mb-2'>
        <div className='font-semibold'>TechStack:-</div>
        <div>{props.techstack.map((tech,index)=>(
            <li>{`${tech}`}</li>
        ))}</div>
      </div>
      <div className='m-6 ml-12'>
        <a href={props.github} target="_blank" rel="noopener noreferrer" className='bg bg-slate-300 p-2 rounded-lg border border-white mr-12'>GitHub</a>
        <a href={props.livelink} target="_blank" rel="noopener noreferrer" className='bg bg-slate-300 p-2 rounded-lg border border-white'>Live Link</a>
      </div>
    </div>
  );
};

export default ProjectCard;
