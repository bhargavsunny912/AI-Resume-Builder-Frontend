/* eslint-disable react-hooks/purity */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

export const EducationContext = createContext();

export const useEducation = () => useContext(EducationContext);

const EducationProvider = ({ children }) => {
  const [details, setDetails] = useState(()=>{
    let data=localStorage.getItem("resumeSection");

    if(data){
      let parse=JSON.parse(data);

      if(parse?.education?.types){
        return {
          types:parse?.education?.types?.map((ed)=>({
              school: "",
              degree: "",
              cgpa: "",
              start: "",
              end: "",
              allTrue: "",
              id: Date.now(),
              ...ed
          }))
        }
      }
    }
    
    return {
      types: [
      {
        school: "",
        degree: "",
        cgpa: "",
        start: "",
        end: "",
        allTrue: "",
        id: Date.now(),
      },
    ],
    }
  });

  return (
    <EducationContext.Provider value={{ details, setDetails }}>
      {children}
    </EducationContext.Provider>
  );
};

export default EducationProvider;
