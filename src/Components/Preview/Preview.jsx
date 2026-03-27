import { Activity, useRef, useState } from "react";
import Template1 from "./Template1/Template1";
import { useReactToPrint } from "react-to-print";
import "./resume.css";
import { useParams } from "react-router-dom";
import useFetchScore from "../../Hooks/useFetchScore";
import { toast } from "react-toastify";
import Template1_AI from "./Template1_AI/Template1_AI";
import { usePersonalDetails } from "../../Context/PersonDetailsContext";
import { useWorkExperience } from "../../Context/WorkExperienceContext";
import { useProjects } from "../../Context/ProjectContext";
import { useSkills } from "../../Context/SkillsContext";
import { useEducation } from "../../Context/Education";
import {emptydata} from "../../Utils/emptydata";

const ResumePreview = () => {
  const [active, setActive] = useState("preview");
  const resumeRef = useRef();
  const params = useParams();

  const isBeginner = params.type === "Beginner";

  const score=useFetchScore();

  const Notify=()=>toast.error("Score Should Be Above 80 , To Switch To AI Preview");

  const handlePrint = useReactToPrint({
    contentRef: resumeRef,
    documentTitle: "Bhargav_Resume",
  });

  const {setDetails:person}=usePersonalDetails();
  const {setDetails:work}=useWorkExperience();
  const {setDetails:project}=useProjects();
  const {setDetails:skill}=useSkills();
  const {setDetails:education}=useEducation();

  const handleResetForm=()=>{

    person({...emptydata.personal});
    work({...emptydata.workExperience});
    project({...emptydata.projects});
    skill({...emptydata.skills});
    education({...emptydata.education});
    
    localStorage.removeItem("resumeSection");
    setActive("preview")
    localStorage.removeItem("ai_result");
  }

  return (
    <div className="mt-5 w-full flex flex-col gap-5">

      <div className="flex items-baseline justify-around">
        <div className="inline-flex bg-black rounded-md p-1 gap-1">
          {["preview", "ai_preview"].map((tab) => (
            <button
              key={tab}
              onClick={() => {

                if (tab === "ai_preview" && score < 80) {
                  Notify();
                  return;
                }

                setActive(tab);
              }}
              className={`px-6 py-2 rounded-md font-semibold uppercase text-sm transition-all
                ${
                  active === tab
                    ? "bg-white text-black shadow"
                    : "bg-black text-white"
                }
                ${tab === "ai_preview" && score < 80 ? "opacity-100 cursor-not-allowed" : ""}
              `}
            >
              {tab}
            </button>
          ))}

        </div>

        <div>
          <button onClick={handleResetForm} className="export-btn">
            Reset Resume
          </button>
        </div>

        {/* Export Button */}
        <div>
          <button onClick={handlePrint} className="export-btn">
            Export PDF
          </button>
        </div>
      </div>

      <div ref={resumeRef} className="resume-container">
        <Activity mode={active==="preview"?"visible":"hidden"}>
          <Template1 isBeginner={isBeginner} />
        </Activity>
        <Activity mode={active!=="preview"?"visible":"hidden"}>
          <Template1_AI isBeginner={isBeginner} />
        </Activity>
      </div>
    </div>
  );
};

export default ResumePreview;
