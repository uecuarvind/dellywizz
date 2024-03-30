import React from 'react';
import { projects } from '../Constants/contants';
import { SiNetlify, SiGithub } from 'react-icons/si';
import '../Components/style.css';
import Styles from '../utils/Styles';
function Projects() {
  return (
    <>
      <div className="flex-row items-center pl-5 justify-center pt-3  " id='projects' style={{ marginLeft: '20px' }}>
        <span className={Styles.sectionHeadText}>Projects</span>
        <hr className='w-[35%]' />
        <div className={Styles.sectionSubText}>
          Following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described.
        </div>
      </div>

      <div className='overflow-x-auto hide-scrollbar flex flex-nowrap p-8 justify-evenly items-center project-container' >
        {projects.map((project) => (
          <div key={project.name} className="project-card">
            <div className="flex justify-center items-center mb-3">
              <div className="h-[40px] w-[4px] m-3 bg-slate-50 rounded-full shadow-lg shadow-violet-500 flex justify-center items-center">
                <a href={project.source_deploy_link} target='_blank' rel="noopener noreferrer">
                  <SiNetlify className="text-3xl font-bold text-violet-600" />
                </a>
              </div>
            </div>
            <div className="flex justify-center items-center mb-3">
              <div className="h-[40px] w-[4px] m-3 bg-slate-50 rounded-full shadow-lg shadow-violet-500 flex justify-center items-center">
                <a href={project.source_code_link} target='_blank' rel="noopener noreferrer">
                  <SiGithub className="text-3xl font-bold text-violet-600" />
                </a>
                <img src={project.img} alt={project.name} className="h-[150px] w-[250px] object-cover self-center border-2 border-pink rounded-2xl" />
              </div>
              <div className="text-2xl text-violet-600 font-extrabold">{project.name}</div>
            </div>
            <div className="text-center overflow-hidden">
              <h2>{project.name}</h2>
              <p className="whitespace-normal">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Projects;
