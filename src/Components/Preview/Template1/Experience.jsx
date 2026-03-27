const Experience = ({ details }) => {
  const exp = details?.types?.[0];

  if (!exp?.role && !exp?.start && !exp?.end && !exp?.company && !exp?.summary) {
    return null;
  }

  return (
    <div className="resume-section">
      <h2 className="section-title">EXPERIENCE</h2>

      {details?.types?.map((exp) => (
        <div key={exp?.id} className="experience-item">
          <div className="experience-header">
            <div>
              <strong>{exp?.role}</strong>
              <span className="experience-summary">({exp?.company})</span>
            </div>

            <span>
              {exp?.start} - {exp?.end}
            </span>
          </div>

          {/* <p className="experience-summary">{exp?.summary}</p> */}
          <div className="experience-summary" dangerouslySetInnerHTML={{ __html: exp?.summary}} />
        </div>
      ))}
    </div>
  );
};

export default Experience;
