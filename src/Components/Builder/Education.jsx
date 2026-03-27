import { useState } from "react";
import { useEducation } from "../../Context/Education";
import { FaBook } from "react-icons/fa";
import EducationCard from "./EducationCard";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { IoMdArrowDropupCircle } from "react-icons/io";

const Education=()=>{

    const {details,setDetails}=useEducation();
    const [open,setOpen]=useState(false);

    const newObj=()=>({
                school:"",
                degree:"",
                cgpa:"",
                start:"",
                end:"",
                allTrue:"",
                id:Date.now()
            });

    const handleAddEducation=()=>{
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
                    <span><FaBook /></span>
                    <h2>Education Details</h2>
                </div>
                <div>{open?<IoMdArrowDropupCircle />:<IoMdArrowDropdownCircle />}</div>
              </div>
              <div className={`${!open?"opacity-0 max-h-0":"opacity-100 max-h-fit"} transition-all overflow-hidden duration-500 `}>
                    {details?.types?.map((ed)=>{
                        return <EducationCard key={ed.id} index={ed.id}/>
                    })}
                    <div className="flex w-full">
                        <button onClick={handleAddEducation} className={`${details?.types?.length==4?"hidden":""} rounded-xl border-2 border-dashed border-gray-400 mt-5 p-3 w-full text-gray-400 font-semibold`}>+ Add Education</button>
                    </div>
              </div>
            </div>
    );
}
export default Education;