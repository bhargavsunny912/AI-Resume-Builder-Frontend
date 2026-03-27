import { useParams } from "react-router-dom";
import "../App.css";
import Stats from "../Components/Builder/Stats";
import PersonalDetails from "../Components/Builder/PersonalDetails";
import Education from "../Components/Builder/Education";
import WorkExperience from "../Components/Builder/WorkExperience";
import Projects from "../Components/Builder/Projects";
import Skills from "../Components/Builder/Skills";
import Preview from "../Components/Preview/Preview";

const Builder = () => {
  const { type } = useParams();
  const isBeginner = type === "Beginner";

  return (
    <div className="flex h-screen bg-[#f3f1ec] overflow-hidden pb-10">

      {/* LEFT SIDE (FORM) */}
      <div className="w-1/2 h-full builder pb-10 overflow-y-auto bg-white m-5 rounded-xl flex flex-col gap-5 p-5">

        <h1 className="text-center text-3xl font-semibold">
          {type} Template
        </h1>

        <Stats />
        <PersonalDetails />
        <Education />
        {!isBeginner && <WorkExperience />}
        <Projects />
        <Skills />

      </div>

      {/* RIGHT SIDE (PREVIEW) */}
      <div className="w-1/2 h-full builder overflow-y-auto mr-5">

        <Preview />

      </div>

    </div>
  );
};

export default Builder;