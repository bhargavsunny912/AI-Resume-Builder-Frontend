
const Summary = ({details}) => {

  if (!details.summary) return null;

  return (
    <div className="resume-section">
      <h2 className="section-title">PROFILE</h2>

      {/* <p className="summary-text">{details.summary}</p> */}
      <div className="summary-text" dangerouslySetInnerHTML={{ __html: details?.summary }} />
    </div>
  );
};

export default Summary;
