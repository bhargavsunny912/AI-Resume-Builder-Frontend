import { useState } from "react";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { IoMdArrowDropupCircle } from "react-icons/io";
import { FaLaptopCode } from "react-icons/fa6";
import { useWorkExperience } from "../../Context/WorkExperienceContext";
import WorkCard from "./WorkCard";

const WorkExperience=()=>{

    const {details,setDetails}=useWorkExperience();
    const [open,setOpen]=useState(false);

    const newObj=()=>({
                company:"",
                role:"",
                start:"",
                end:"",
                summary:"",
                allTrue:"",
                id:Date.now(),
            });

    const handleAddExperience=()=>{
        if(details.types.length<3){
            setDetails((pre)=>({...pre,
                types:[...pre.types,newObj()]
            }));
        }
    }

    return (
        <div className="border border-gray-300 rounded-xl p-5 w-[95%] mx-auto">
              <div onClick={()=>setOpen(!open)} className="flex items-center gap-3 text-xl justify-between">
                <div className="flex items-center gap-2">
                    <span><FaLaptopCode /></span>
                    <h2>Work Experience</h2>
                </div>
                <div>{open?<IoMdArrowDropupCircle />:<IoMdArrowDropdownCircle />}</div>
              </div>
              <div className={`${!open?"opacity-0 max-h-0":"opacity-100 max-h-fit"} transition-all overflow-hidden duration-500 `}>
                    {details?.types?.map((ed)=>{
                        return <WorkCard key={ed.id} index={ed.id}/>
                    })}
                    <div className="flex w-full">
                        <button onClick={handleAddExperience} className={`${details?.types?.length==2?"hidden":""} rounded-xl border-2 border-dashed border-gray-400 mt-5 p-3 w-full text-gray-400 font-semibold`}>+ Add Work Experience</button>
                    </div>
              </div>
            </div>
    );
}
export default WorkExperience;