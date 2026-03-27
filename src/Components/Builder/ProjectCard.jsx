import { MdDelete } from "react-icons/md";
import { useProjects } from "../../Context/ProjectContext";
import { useState } from "react";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { IoMdArrowDropupCircle } from "react-icons/io";
import Editor from "./Editor";

const ProjectCard=({index,cards})=>{

    const {details,setDetails}=useProjects();

    const Project=details.types.find((f)=>f.id===index);

    const [skill,setSkill]=useState("");

    const [open,setOpen]=useState(false);

    const wordCount = Project?.summary?.replace(/<[^>]*>/g, " ")?.trim()?.split(/\s+/)?.filter(Boolean).length || 0;

    const handleChange=(feild,value)=>{
        setDetails((pre)=>({...pre,
            types:pre.types.map((ed)=>{
                if(ed.id==index){
                    return {...ed,[feild]:value};
                }
                return ed;
            })
        }));
    };

    const handleProjectCard=(id)=>{
        setDetails((pre)=>({...pre,
            types:pre.types.filter((ed)=>ed.id!==id),
        }));
    };

    // const handleSummary=(e)=>{
    //     if(e.target.value.length<301){
    //         setDetails((pre)=>({...pre,
    //             types:pre?.types?.map((ex)=>{
    //                 if(ex.id===index){
    //                     return {...ex,summary:e.target.value};
    //                 }
    //             return ex;
    //         })
    //     }))
    // }};

    const handleSkill=(e)=>{
        if(e.key === "Enter" && skill){
            setDetails((pre)=>({...pre,
                types:pre?.types?.map((pro)=>{
                    if(pro.id===index){
                        return {...pro,
                            skills:[...pro.skills,skill]
                        }
                    }
                    return pro;
                })
            }));
            setSkill("");
        }
    };

    const handleDeleteSkill=(skill)=>{
        const filterSkills=Project.skills.filter((f)=>f!==skill);
        setDetails((pre)=>({...pre,
            types:pre?.types?.map((sk)=>{
                if(sk.id===index){
                    return {...sk,
                        skills:filterSkills
                    }
                }
                return sk;
            })
        }));
    }

    return (
    <>
        <div className="rounded-xl flex flex-col my-5">
            <div onClick={()=>setOpen(!open)} className={`${open?"":"rounded-b-xl"} flex border border-gray-300 p-3 rounded-t-xl items-center justify-between w-full`}>
                <h1 className="flex items-center gap-3"><span className="text-xl">{!open?<IoMdArrowDropdownCircle />:<IoMdArrowDropupCircle />}</span>{Project.title || "Project Title"}</h1>
                <button className={`${cards===1?"hidden":""} text-2xl mx-2`} onClick={()=>handleProjectCard(index)}><MdDelete /></button>
            </div>
            <div className={`${open?"":"hidden"} flex flex-wrap justify-between gap-1 border border-gray-300 rounded-b-xl p-5`}>
                <div className="flex flex-col gap-2 items-start text-gray-800 w-[48%]">
                    <label htmlFor="Title" className="text-sm">Title</label>
                    <input value={Project?.title || ""} onChange={(e)=>handleChange(e.target.name,e.target.value)} type="Title" name="title" id="Title" className="border-2 w-full outline-gray-500 border-gray-200 rounded-lg p-2" required/>
                </div>
                <div className="flex flex-col gap-2 items-start text-gray-500 w-[48%]">
                    <label htmlFor="url" className="text-sm">URL</label>
                    <input value={Project?.url || ""} onChange={(e)=>handleChange(e.target.name,e.target.value)} type="text" name="url" id="url" className="border-2 border-gray-200 rounded-lg p-2 w-full outline-gray-500" required/>
                </div>
                <div className="flex flex-col gap-2 items-start text-gray-500 w-[48%]">
                    <label htmlFor="Github" className="text-sm">Github</label>
                    <input value={Project?.github || ""} onChange={(e)=>handleChange(e.target.name,e.target.value)} type="text" name="github" id="Github" className={`${(Project.github.length>6 && !Project.github.includes("github.com"))?"outline-0 border-red-500":""} border-2 border-gray-200 rounded-lg p-2 w-full outline-gray-500`} required/>
                </div>
                <div className="flex flex-col gap-2 items-start text-gray-500 w-[48%]">
                    <label htmlFor="skills" className="text-sm">Add Skills</label>
                    <input value={skill} onKeyDown={handleSkill} onChange={(e)=>setSkill(e.target.value)} type="text" name="skills" id="skills" className="border-2 border-gray-200 rounded-lg p-2 w-full outline-gray-500" required placeholder="Type and Press Enter" />
                </div>

                <div className="flex flex-col gap-2 items-start text-gray-500 w-full">
                    <label htmlFor="skills" className="text-sm">Tech Stack</label>
                    <div className="min-h-10 border border-gray-200 rounded-lg p-2 w-full outline-gray-500 flex flex-wrap gap-2">
                        {Project?.skills?.map((skill,index)=>{
                            return <p key={index} className="border-2 border-gray-300 rounded-lg px-2 py-1 w-fit text-sm flex items-center justify-between gap-2"><span>{skill.toUpperCase()}</span><button onClick={()=>handleDeleteSkill(skill)} className="text-red-500 ">X</button></p>
                        })}
                    </div>
                </div>

                <div className="flex flex-col gap-2 items-start text-gray-500 w-full">
                    <div className="flex items-center justify-between w-full">
                        <label htmlFor="Summary" className="text-sm">Project Summary</label>
                        <label className={`${wordCount <150? "text-green-500": "text-red-500"}`}>{wordCount}/150</label>
                    </div>
                        
                    <Editor value={Project?.summary || ""} onChange={(data) => handleChange("summary", data)} />
                </div>
            </div>
        </div>
    </>
    );
}
export default ProjectCard;