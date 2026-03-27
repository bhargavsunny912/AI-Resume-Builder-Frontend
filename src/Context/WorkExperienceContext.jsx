/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

export const WorkExperienceContext = createContext();

export const useWorkExperience = () => useContext(WorkExperienceContext);

const WorkExperienceProvider = ({ children }) => {

  const [details, setDetails] = useState(() => {

    const data = localStorage.getItem("resumeSection");

    if (data) {
      const parse = JSON.parse(data);

      if (parse.work?.types) {
        return {
          types: parse.work.types.map(exp => ({
            company: "",
            role: "",
            start: "",
            end: "",
            summary: "",
            allTrue: "",
            id: Date.now(),
            ...exp
          }))
        };
      }
    }

    return {
      types: [
        {
          company: "",
          role: "",
          start: "",
          end: "",
          summary: "",
          allTrue: "",
          id: Date.now(),
        }
      ]
    };

  });

  return (
    <WorkExperienceContext.Provider value={{ details, setDetails }}>
      {children}
    </WorkExperienceContext.Provider>
  );
};

export default WorkExperienceProvider;