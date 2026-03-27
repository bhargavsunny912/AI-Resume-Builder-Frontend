
const Education = ({details}) => {

  const education=details?.types?.[0];

  if(!education.degree && !education.school && !education.start && !education.end && !education.cgpa){
    return null;
  }

  return (
    <div className="resume-section">
      <h2 className="section-title">EDUCATION</h2>

      {details.types.map((edu) => (
        <div key={edu.id} className="education-item">
          <div className="education-main">
            <span><strong>{edu.degree}</strong></span>
            <div>{edu.school}</div>
          </div>

          <div className="education-meta">
            <span className="education-date">{edu.start} --- {edu.end}</span>
            <span>GPA : {edu.cgpa} </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
