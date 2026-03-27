import PersonDetailsProvider from "../Context/PersonDetailsContext.jsx";
import EducationProvider from '../Context/Education.jsx';
import WorkExperienceProvider from '../Context/WorkExperienceContext.jsx'
import ProjectProvider from '../Context/ProjectContext.jsx'
import SkillsProvider from '../Context/SkillsContext.jsx'

const RootProvider = ({ children }) => {
  return (
  <PersonDetailsProvider>
    <SkillsProvider>
      <ProjectProvider>
        <WorkExperienceProvider>
          <EducationProvider>
              {children}
          </EducationProvider>
        </WorkExperienceProvider>
      </ProjectProvider>
    </SkillsProvider>
  </PersonDetailsProvider>
  );
};
export default RootProvider;
