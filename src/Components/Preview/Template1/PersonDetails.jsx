
const Header = ({details}) => {


  if(!details.name && !details.email && !details.phone && !details.location && !details.github && !details.linkedin){
    return null;
  }

  return (
    <div className="resume-header">
      <h1 className="resume-name">{details?.name}</h1>

      <div className="resume-contact">
        <span>{details?.email}</span>
        <span>{details?.phone}</span>
        <span>{details?.location}</span>
        <span>{details?.github && <a target="_blank" href={details?.github}>GitHub</a>}</span>
        <span>{details?.linkedin && <a target="_blank" href={details?.linkedin}>LinkedIn</a>}</span>
      </div>
    </div>
  );
};

export default Header;
