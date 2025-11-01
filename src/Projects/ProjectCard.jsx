
function ProjectCard(props){
    return(
        <div className="project-card">
            <img src={props.image} alt={props.title}></img>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <a href={props.link}>View project</a>
        </div>
    );
}

export default ProjectCard