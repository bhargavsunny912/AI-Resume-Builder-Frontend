const isFilled = (value) => {
  
  if (value === null || value === undefined) return false;

  if (typeof value === "string") return value.trim() !== "";

  if (Array.isArray(value)) return value.length > 0;

  return false;
};

const countObjectFields = (obj, ignore = []) => {
  let total = 0;
  let filled = 0;

  Object?.entries(obj || {})?.forEach(([key, value]) => {
    if (ignore?.includes(key)) return;

    total++;

    if (isFilled(value)) filled++;
  });

  return { total, filled };
};

const calculateResumeScore = (data) => {

  let totalFields = 0;
  let filledFields = 0;

  /* PERSONAL DETAILS */

  const personal = countObjectFields(data?.personal, ["allTrue"]);
  totalFields += personal?.total;
  filledFields += personal?.filled;

  /* EDUCATION */

  const educationItem = data?.education?.types?.[0];
  const education = countObjectFields(educationItem, ["id", "allTrue"]);
  totalFields += education?.total;
  filledFields += education?.filled;

  /* WORK EXPERIENCE */

  const workItem = data?.work?.types?.[0];
  const work = countObjectFields(workItem, ["id", "allTrue"]);
  totalFields += work?.total;
  filledFields += work?.filled;

  /* PROJECTS */

  const projectItem = data?.project?.types?.[0];
  const project = countObjectFields(projectItem, ["id", "allTrue", "skills"]);

  totalFields += project?.total;
  filledFields += project?.filled;

  if (projectItem?.skills?.length > 0) {
    filledFields++;
  }

  totalFields++;

  /* SKILLS */

  const skills = data?.skills?.types;

  const skillsArrays = ["technical", "soft", "tools"];

  skillsArrays?.forEach((type) => {
    totalFields++;

    if (skills?.[type]?.length > 0) {
      filledFields++;
    }
  });

  /* FINAL SCORE */

  if (totalFields === 0) return 0;

  return Math.round((filledFields / totalFields) * 100);
};

export default calculateResumeScore;
