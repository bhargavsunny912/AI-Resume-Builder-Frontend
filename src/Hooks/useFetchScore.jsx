import { useEffect, useRef } from "react";
import { useEducation } from "../Context/Education";
import { usePersonalDetails } from "../Context/PersonDetailsContext";
import { useProjects } from "../Context/ProjectContext";
import { useSkills } from "../Context/SkillsContext";
import { useWorkExperience } from "../Context/WorkExperienceContext";
import calculateResumeScore from "../Utils/stats";

const useFetchScore = () => {

  const { details: personal } = usePersonalDetails();
  const { details: education } = useEducation();
  const { details: skills } = useSkills();
  const { details: work } = useWorkExperience();
  const { details: project } = useProjects();

  const resumeData = { personal, education, skills, work, project };

  const score = calculateResumeScore(resumeData);

  const hydrated = useRef(false);
  const debounceRef=useRef();

  useEffect(() => {

    // Wait one render so providers hydrate
    if (!hydrated.current) {
      hydrated.current = true;
      return;
    }

    if(debounceRef.current){
      clearTimeout(debounceRef.current);
    }

    debounceRef.current=setTimeout(()=>{
      localStorage.setItem("resumeSection", JSON.stringify(resumeData));
    },3000);

    return ()=>clearTimeout(debounceRef.current);

  }, [personal, education, skills, work, project]);

  return score;
};

export default useFetchScore;