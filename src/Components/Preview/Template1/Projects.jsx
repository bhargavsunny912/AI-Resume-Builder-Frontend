
const Projects = ({details}) => {

    const project=details?.types?.[0];

    if(!project.title && !project.github && !project.url && !project.summary){
        return null;
    }

return (

<div className="resume-section">

<h2 className="section-title">PROJECTS</h2>

{details.types.map((project)=>(
<div key={project.id} className="project-item">

<div className="project-title">
        <strong>{project.title}</strong>
        <div className="project-links">
            <span>&#128279;{project.github && <a href={project.github}>GitHub</a>}</span>
            <span>&#128279;{project.url && <a href={project.url}>Live</a>}</span>
        </div>
</div>

{/* <p className="project-summary">{project.summary}</p> */}
<div className="project-summary" dangerouslySetInnerHTML={{ __html:project?.summary}} />


<p><span className="techstack">Tech Stack </span>: {project.skills.join(" , ")}</p>

</div>
))}

</div>
);
};

export default Projects;