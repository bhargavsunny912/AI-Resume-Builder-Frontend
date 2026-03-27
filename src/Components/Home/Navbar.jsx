import { Link, useLocation } from "react-router-dom";
import { usePersonalDetails } from "../../Context/PersonDetailsContext";
import { useEducation } from "../../Context/Education";
import { useProjects } from "../../Context/ProjectContext";
import { useSkills } from "../../Context/SkillsContext";
import { useWorkExperience } from "../../Context/WorkExperienceContext";
import { dummyData } from "../../Utils/dummydata";

const FileIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
  </svg>
);

const Navbar=()=>{

  const location=useLocation();
  const page=location.pathname.split("/")[1];

  const { setDetails: setPersonal } = usePersonalDetails();
  const { setDetails: setEducation } = useEducation();
  const { setDetails: setProjects } = useProjects();
  const { setDetails: setSkills } = useSkills();
  const { setDetails: setWorkExpereince } = useWorkExperience();

  const handleFillData = () => {
  // 1. Personal Details (Flat object in state)
  setPersonal({
    ...dummyData.personal 
  });

  // 2. Education (Expects { types: [...] })
  setEducation({
    types: [...dummyData.education]
  });

  // 3. Projects (Expects { types: [...] })
  setProjects({
    types: [...dummyData.projects]
  });

  // 4. Skills (Expects { types: { technical: [], soft: [], tools: [] } })
  setSkills({
    types: { ...dummyData.skills }
  });

  // 5. Work Experience (Expects { types: [...] })
  setWorkExpereince({
    types: [...dummyData.workExperience]
  });
};

  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-linear-to-br from-blue-500 to-teal-400 flex items-center justify-center">
            <FileIcon />
          </div>
          <span className="text-xl font-bold text-gray-900">
            Resume<span className="text-teal-500">AI</span>
          </span>
        </Link>

        {/* Links */}
        <div className={`md:flex items-center gap-8`}>
          {["Features", "How it Works", "Testimonials"].map((link) => (
            <a key={link} href={`#${link}`} className={`${location.pathname==="/"?"":"hidden"} text-gray-600 hover:text-gray-900 text-md font-medium transition-colors`}>
              {link}
            </a>
          ))}
        </div>

        {/* CTA */}
        {page==="builder"?
        <button onClick={handleFillData} className={`hover:scale-110 duration-300 transition-transform bg-linear-to-r from-teal-500 to-blue-500 text-white font-semibold px-5 py-2 rounded-full text-base`}>
          Fill Demo Data
        </button>: 
        <Link to="/landing" className={`${page==="landing"?"hidden":""} hover:scale-110 transition-transform duration-300 bg-linear-to-br from-blue-500 to-teal-400 px-3 py-2 font-semibold rounded-3xl text-white`}>Get Started</Link>}
      </div>
    </nav>
  );
}

export default Navbar;