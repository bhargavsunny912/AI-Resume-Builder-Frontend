/* eslint-disable react-hooks/purity */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

export const ProjectContext=createContext();

export const useProjects=()=>useContext(ProjectContext);

const ProjectProvider=({children})=>{

    const [details,setDetails]=useState(()=>{
        let data=localStorage.getItem("resumeSection");

        if(data){
            let parse=JSON.parse(data);

            if(parse.project?.types){
                return {
                    types:parse.project.types.map((pro)=>({
                        title:"",
                        url:"",
                        github:"",
                        skills:[],
                        summary:"",
                        allTrue:"",
                        id:Date.now(),
                        ...pro
                    }))
                }
            }
        }
        return {
            types:[
            {
                title:"",
                url:"",
                github:"",
                skills:[],
                summary:"",
                allTrue:"",
                id:Date.now(),
            },
        ]
        }
    });

    return (
        <ProjectContext.Provider value={{details,setDetails}}>
            {children}
        </ProjectContext.Provider>
    );
}

export default ProjectProvider;