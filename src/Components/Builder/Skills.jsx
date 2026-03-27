import { useState } from "react";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { IoMdArrowDropupCircle } from "react-icons/io";
import { useSkills } from "../../Context/SkillsContext";
import { FaLightbulb } from "react-icons/fa6";

const Skills=()=>{

    const {details,setDetails}=useSkills();
    const [open,setOpen]=useState(false);
    const [skillTechnical,setSkillTechnical]=useState("");
    const [skillSoft,setSkillSoft]=useState("");
    const [skillTools,setSkillTools]=useState("");

    const handleSkill=(e,section)=>{
        if(e.key === "Enter"){
            if(section==="technical" && skillTechnical){
                setDetails((pre)=>({...pre,
                    types:{
                        ...pre.types,
                        technical:[...pre.types.technical,skillTechnical]
                    }
                }));
                setSkillTechnical("");
            }
            else if(section==="soft" && skillSoft){
                setDetails((pre)=>({...pre,
                    types:{
                        ...pre.types,
                        soft:[...pre.types.soft,skillSoft]
                    }
                }));
                setSkillSoft("");
            }
            else if(section==="tools" && skillTools){
                setDetails((pre)=>({...pre,
                    types:{
                        ...pre.types,
                        tools:[...pre.types.tools,skillTools]
                    }
                }));
                setSkillTools("");
            }
        }
    };

    const handleDeleteSkill=(skill,section)=>{
        if(section==="technical"){
            const filterSkills=(details?.types?.technical || []).filter((f)=>f!==skill);
            setDetails((pre)=>({...pre,
                types:{
                    ...pre.types,
                    technical:filterSkills
                }
            }));
        }
        else if(section==="soft"){
            const filterSkills=(details?.types?.soft || []).filter((f)=>f!==skill);
            setDetails((pre)=>({...pre,
                types:{
                    ...pre.types,
                    soft:filterSkills
                }
            }));
        }
        else{
            const filterSkills=(details?.types?.tools||[]).filter((f)=>f!==skill);
            setDetails((pre)=>({...pre,
                types:{
                    ...pre.types,
                    tools:filterSkills
                }
            }));
        }
    }

    return (
        <div className="border border-gray-300 rounded-xl p-5 w-[95%] mx-auto flex flex-col gap-5">
              <div onClick={()=>setOpen(!open)} className="flex items-center gap-3 text-xl justify-between">
                <div className="flex items-center gap-2">
                    <span><FaLightbulb /></span>
                    <h2>Skills</h2>
                </div>
                <div>{open?<IoMdArrowDropupCircle />:<IoMdArrowDropdownCircle />}</div>
              </div>
              <div className={`${open?"":"hidden"} flex flex-col gap-2`}>
                <div className="flex flex-col gap-2 items-start text-gray-500">
                    <label htmlFor="skills" className="text-sm">Add Technical Skills</label>
                    <input value={skillTechnical} onKeyDown={(e)=>handleSkill(e,"technical")} onChange={(e)=>setSkillTechnical(e.target.value)} type="text" name="skills" id="skills" className="border-2 border-gray-200 rounded-lg p-2 w-full outline-gray-500" required placeholder="Type and Press Enter" />
                </div>

                <div className="flex flex-col gap-2 items-start text-gray-500 w-full">
                    <label htmlFor="skills" className="text-lg font-semibold">Technical Skills ({details?.types?.technical?.length})</label>
                    <div className="min-h-10 border border-gray-200 rounded-lg p-2 w-full outline-gray-500 flex flex-wrap gap-2">
                        {details?.types?.technical?.map((skill,index)=>{
                            return <p key={index} className="border-2 border-gray-300 text-black bg-gray-200 rounded-lg px-2 py-1 w-fit text-sm flex items-center justify-between gap-2"><span>{skill.toUpperCase()}</span><button onClick={()=>handleDeleteSkill(skill,"technical")} className="text-red-500 ">X</button></p>
                        })}
                    </div>
                </div>

                <div className="flex flex-col gap-2 items-start text-gray-500">
                    <label htmlFor="skills" className="text-sm">Add Soft Skills</label>
                    <input value={skillSoft} onKeyDown={(e)=>handleSkill(e,"soft")} onChange={(e)=>setSkillSoft(e.target.value)} type="text" name="skills" id="skills" className="border-2 border-gray-200 rounded-lg p-2 w-full outline-gray-500" required placeholder="Type and Press Enter" />
                </div>

                <div className="flex flex-col gap-2 items-start text-gray-500 w-full">
                    <label htmlFor="skills" className="text-lg font-semibold">Soft Skills ({details?.types?.soft?.length})</label>
                    <div className="min-h-10 border border-gray-200 rounded-lg p-2 w-full outline-gray-500 flex flex-wrap gap-2">
                        {details?.types?.soft?.map((skill,index)=>{
                            return <p key={index} className="border-2 border-gray-300 text-black bg-gray-200 rounded-lg px-2 py-1 w-fit text-sm flex items-center justify-between gap-2"><span>{skill.toUpperCase()}</span><button onClick={()=>handleDeleteSkill(skill,"soft")} className="text-red-500 ">X</button></p>
                        })}
                    </div>
                </div>

                <div className="flex flex-col gap-2 items-start text-gray-500">
                    <label htmlFor="skills" className="text-sm">Add Tools And Technologies</label>
                    <input value={skillTools} onKeyDown={(e)=>handleSkill(e,"tools")} onChange={(e)=>setSkillTools(e.target.value)} type="text" name="skills" id="skills" className="border-2 border-gray-200 rounded-lg p-2 w-full outline-gray-500" required placeholder="Type and Press Enter" />
                </div>

                <div className="flex flex-col gap-2 items-start text-gray-500 w-full">
                    <label htmlFor="skills" className="text-lg font-semibold">Tools And Technologies ({details?.types?.tools?.length})</label>
                    <div className="min-h-10 border border-gray-200 rounded-lg p-2 w-full outline-gray-500 flex flex-wrap gap-2">
                        {details?.types?.tools?.map((skill,index)=>{
                            return <p key={index} className="border-2 border-gray-300 text-black bg-gray-200 rounded-lg px-2 py-1 w-fit text-sm flex items-center justify-between gap-2"><span>{skill.toUpperCase()}</span><button onClick={()=>handleDeleteSkill(skill,"tools")} className="text-red-500 ">X</button></p>
                        })}
                    </div>
                </div>
              </div>
            </div>
    );
}
export default Skills;