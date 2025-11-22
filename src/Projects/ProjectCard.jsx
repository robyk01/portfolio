
function ProjectCard(props){
    return(
        <div className="project-card">
            <img src={props.image} alt={props.title}></img>
            <h3>{props.title}</h3>
            <p className="project-description">{props.description}</p>
            <div className="project-card-bottom">
                <div className="tech-stack">
                    {props.tech && props.tech.map((techItem, index) => (
                        <span key={index} className="tech-tag">
                            {techItem}
                        </span>
                    ))}
                </div>
                <a href={props.link}>View</a>
            </div>
        </div>
    );
}

export default ProjectCard