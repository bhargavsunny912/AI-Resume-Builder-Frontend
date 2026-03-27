import { useState } from "react";
import { usePersonalDetails } from "../../../Context/PersonDetailsContext";
import { useEducation } from "../../../Context/Education";
import { useSkills } from "../../../Context/SkillsContext";
import { useWorkExperience } from "../../../Context/WorkExperienceContext";
import { useProjects } from "../../../Context/ProjectContext";
import Header from "../Template1/PersonDetails";
import Summary from "../Template1/ProfileSummary";
import Skills from "../Template1/Skills";
import Experience from "../Template1/Experience";
import Projects from "../Template1/Projects";
import Education from "../Template1/Education";
import { useLocation } from "react-router-dom";

const Template1_AI = () => {
  const [response, setResponse] = useState(()=>{
    const data=localStorage.getItem("ai_result");
    return data?JSON.parse(data):null;
  });
  const [loading,setLoading]=useState(false);
  const location=useLocation();
  const templateLevel=location.pathname.split("/")[2];

  const { details: personal } = usePersonalDetails();
  const { details: education } = useEducation();
  const { details: skills } = useSkills();
  const { details: work } = useWorkExperience();
  const { details: project } = useProjects();

  const resumeData = { personal, education, skills, work, project };

  async function handleRefineAI() {
    try{
        setLoading(true)
        const res = await fetch("http://localhost:8000/refine-resume", {
        method: "POST",
        body: JSON.stringify({
            resumeData: resumeData,
            template:templateLevel
        }),
        headers: {
            "Content-Type": "application/json",
        },
        });
        const resdata = await res.json();
        localStorage.setItem("ai_result",JSON.stringify(resdata.data));
        setResponse(resdata.data)
    }
    catch(err){
        console.error(err);
    }
    finally{
        setLoading(false);
    }
  }

  return (
    <>
      {response ? (
        <div className="min-h-screen">
          <Header details={response.personal} />

          <Summary details={response.personal} />

          <Skills details={response.skills} />

          <Experience details={response.work} />

          <Projects details={response.project} />

          <Education details={response.education} />
        </div>
      ) : (
        <div className="min-h-screen flex flex-col w-[70%] text-justify gap-10 mx-auto justify-center items-center">

          {!loading && <h1 className="text-xl font-semibold">
            Your resume is not analyzed with AI
          </h1>}

          {loading ? (

            <div className="flex flex-col items-center gap-4">

              {/* Loader */}
              <div className="w-16 h-16 rounded-full p-0.75 bg-linear-to-br from-blue-500 to-teal-400 animate-spin">

                <div className="w-full h-full bg-white rounded-full"></div>

              </div>

              <p className="text-gray-600 font-medium">
                AI is analyzing your resume...
              </p>

            </div>

          ) : (

            <button
              onClick={handleRefineAI}
              className="hover:scale-95 transition-transform duration-300 bg-linear-to-br from-blue-500 to-teal-400 p-3 rounded-xl text-white font-semibold text-xl"
            >
              Analyze With AI
            </button>

          )}

        </div>
      )}
    </>
  );
};
export default Template1_AI;
