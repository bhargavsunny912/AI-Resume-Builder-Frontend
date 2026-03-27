/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

export const PersonalDetailsContext=createContext();

export const usePersonalDetails=()=>useContext(PersonalDetailsContext);

const PersonDetailsProvider=({children})=>{

    const [details,setDetails] = useState(() => {

        const data = localStorage.getItem("resumeSection");

        if(data){
            const parsed = JSON.parse(data);

            if(parsed.personal){
            return {
                name:"",
                email:"",
                phone:"",
                location:"",
                github:"",
                linkedin:"",
                summary:"",
                allTrue:"",
                ...parsed.personal
            }
            }
        }

        return {
            name:"",
            email:"",
            phone:"",
            location:"",
            github:"",
            linkedin:"",
            summary:"",
            allTrue:""
        };

        });

    return (
        <PersonalDetailsContext.Provider value={{details,setDetails}}>
            {children}
        </PersonalDetailsContext.Provider>
    );
}

export default PersonDetailsProvider;