import { useState } from "react";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { IoMdArrowDropupCircle } from "react-icons/io";
import { FaFolder } from "react-icons/fa";
import ProjectCard from "./ProjectCard";
import { useProjects } from "../../Context/ProjectContext";

const Projects=()=>{

    const {details,setDetails}=useProjects();
    const [open,setOpen]=useState(false);

    const newObj=()=>({
                title:"",
                url:"",
                github:"",
                skills:[],
                summary:"",
                allTrue:"",
                id:Date.now(),
            });

    const handleAddProjects=()=>{
        if(details.types.length<4){
            setDetails((pre)=>({...pre,
                types:[...pre.types,newObj()]
            }));
        }
    }

    return (
        <div className="border border-gray-300 rounded-xl p-5 w-[95%] mx-auto">
              <div onClick={()=>setOpen(!open)} className="flex items-center gap-3 text-xl justify-between">
                <div className="flex items-center gap-2">
                    <span><FaFolder /></span>
                    <h2>Projects</h2>
                </div>
                <div>{open?<IoMdArrowDropupCircle />:<IoMdArrowDropdownCircle />}</div>
              </div>
              <div className={`${!open?"opacity-0 max-h-0":"opacity-100 max-h-fit"} transition-all overflow-hidden duration-500 `}>
                    {details?.types?.map((ed)=>{
                        return <ProjectCard key={ed.id} index={ed.id} cards={details.types.length}/>
                    })}
                    <div className="flex w-full">
                        <button onClick={handleAddProjects} className={`${details?.types?.length==3?"hidden":""} rounded-xl border-2 border-dashed border-gray-400 mt-5 p-3 w-full text-gray-400 font-semibold`}>+ Add Projects</button>
                    </div>
              </div>
            </div>
    );
}
export default Projects;