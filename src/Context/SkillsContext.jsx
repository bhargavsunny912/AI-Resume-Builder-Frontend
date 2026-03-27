/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

export const SkillsContext = createContext();

export const useSkills = () => useContext(SkillsContext);

const SkillsProvider = ({ children }) => {

  const [details, setDetails] = useState(() => {

    const data = localStorage.getItem("resumeSection");

    if (data) {
      const parse = JSON.parse(data);

      if (parse?.skills?.types) {
        return {
          types: {
            technical: [],
            soft: [],
            tools: [],
            allTrue: "",
            id: Date.now(),
            ...parse.skills.types
          }
        };
      }
    }

    return {
      types: {
        technical: [],
        soft: [],
        tools: [],
        allTrue: "",
        id: Date.now()
      }
    };
  });

  return (
    <SkillsContext.Provider value={{ details, setDetails }}>
      {children}
    </SkillsContext.Provider>
  );
};

export default SkillsProvider;