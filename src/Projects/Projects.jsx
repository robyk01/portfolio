import ProjectCard from './ProjectCard';
import './Projects.css'
import React, { useState } from 'react'
import { projects } from '../projectData';

function Projects(){
    const [activeFilter, setActiveFilter] = useState('All');

    const filteredProjects = projects.filter(project => {
        return activeFilter === 'All' || project.category === activeFilter;
    })

    return(
        <div className="section" id="portfolio">
            <h2>Portfolio</h2>
            <div className="categories">
                <p onClick={() => setActiveFilter('Apps')}
                    className={activeFilter === 'Apps' ? 'active' : ''}
                    >Apps</p>
                <p onClick={() => setActiveFilter('Websites')}
                    className={activeFilter === 'Websites' ? 'active' : ''}
                    >Websites</p>
                <p onClick={() => setActiveFilter('Plugins')}
                    className={activeFilter === 'Plugins' ? 'active' : ''}
                    >Plugins</p>
                <p onClick={() => setActiveFilter('Design')}
                    className={activeFilter === 'Design' ? 'active' : ''}
                    >Design</p>
            </div>
            <div className="projects-grid">
                {filteredProjects.map((project, index) => (
                    <ProjectCard 
                        key={index}
                        title={project.title}
                        description={project.description}
                        tech={project.tech}
                        image={project.image}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    );
}

export default Projects