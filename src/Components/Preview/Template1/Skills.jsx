
const Skills = ({details}) => {

    if(details.types.technical.length==0 && details.types.soft.length==0 && details.types.tools.length==0){
        return null;
    }

return (

<div className="resume-section">

<h2 className="section-title">SKILLS</h2>

<div className="skills-group">

<strong>Programming:</strong>
{details.types.technical.join(" , ")}

</div>

<div className="skills-group">

<strong>Soft Skills:</strong>
{details.types.soft.join(" , ")}

</div>

<div className="skills-group">

<strong>Tools:</strong>
{details.types.tools.join(" , ")}

</div>

</div>
);
};

export default Skills;