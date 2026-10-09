import ProjectCard from './ProjectCard';
import './Projects.css'
import React, { useState } from 'react'
import { projects } from '../projectData';

const CATEGORIES = ['All', 'AI & ML', 'Research', 'Space', 'Robotics', 'Other'];

function Projects(){
    const [activeFilter, setActiveFilter] = useState('All');

    const filteredProjects = projects.filter(project => {
        if (activeFilter === 'All') return true;
        const projectCategories = Array.isArray(project.categories)
            ? project.categories
            : (project.category ? [project.category] : []);
        return projectCategories.includes(activeFilter);
    });

    return(
        <div className="section" id="portfolio">
            <h2>Portfolio</h2>
            <div className="categories">
                {CATEGORIES.map(category => (
                    <p
                        key={category}
                        onClick={() => setActiveFilter(category)}
                        className={activeFilter === category ? 'active' : ''}
                    >
                        {category}
                    </p>
                ))}
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