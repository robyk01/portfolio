import ProjectCard from './ProjectCard';
import './Projects.css'
import LearnifyImg from '../assets/Banner 3.png'

function Projects(){
    const projects = [
        {
        title: "Portfolio Website",
        description: "A personal website built with React.",
        image: LearnifyImg,
        link: "https://example.com/portfolio",
    },
    {
        title: "Chat App",
        description: "A real-time chat application using socket.io.",
        image: LearnifyImg,
        link: "https://example.com/chatapp",
    },
    ];

    return(
        <div className="section" id="projects">
            <h2>Projects</h2>
            <div className="categories">
                <p>Apps</p>
                <p>Websites</p>
                <p>Plugins</p>
                <p>Design</p>
            </div>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <ProjectCard 
                        key={index}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    );
}

export default Projects