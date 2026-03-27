import { useEducation } from "../../../Context/Education";
import { usePersonalDetails } from "../../../Context/PersonDetailsContext";
import { useProjects } from "../../../Context/ProjectContext";
import { useSkills } from "../../../Context/SkillsContext";
import { useWorkExperience } from "../../../Context/WorkExperienceContext";
import Education from "./Education";
import Experience from "./Experience";
import Header from "./PersonDetails";
import Summary from "./ProfileSummary";
import Projects from "./Projects";
import Skills from "./Skills";

const Template1 = ({ isBeginner }) => {

  const { details:PersonalDetails } = usePersonalDetails();
  const {details:Skill}=useSkills();
  const {details:WorkExperience}=useWorkExperience();
  const {details:Project}=useProjects();
  const { details:EducationSection } = useEducation();

  return (
    <div className="min-h-screen">
      <Header details={PersonalDetails}/>

      <Summary details={PersonalDetails} />

      <Skills details={Skill} />

      {!isBeginner && <Experience details={WorkExperience} />}

      <Projects details={Project} />

      <Education details={EducationSection} />
    </div>
  );
};
export default Template1;
