import { BsPersonBoundingBox } from "react-icons/bs";
import { usePersonalDetails } from "../../Context/PersonDetailsContext";
import { useState } from "react";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { IoMdArrowDropupCircle } from "react-icons/io";
import Editor from "./Editor";

const PersonalDetails = () => {

    const {details,setDetails}=usePersonalDetails();

    const [open,setOpen]=useState(false);

    const wordCount = details?.summary?.replace(/<[^>]*>/g, " ")?.trim()?.split(/\s+/)?.filter(Boolean).length;

  return (
    <div className="border border-gray-300 rounded-xl p-5 w-[95%] mx-auto">
      <div onClick={()=>setOpen(!open)} className="flex items-center gap-3 text-xl justify-between">
        <div className="flex items-center gap-2">
            <span><BsPersonBoundingBox /></span>
            <h2>Personal Details</h2>
        </div>
        <div>{open?<IoMdArrowDropupCircle />:<IoMdArrowDropdownCircle />}</div>
      </div>
      <div className={`${!open?"opacity-0 max-h-0":"opacity-100 max-h-fit"} transition-all overflow-hidden duration-500 flex flex-wrap justify-between mt-5 gap-1`}>
        <div className="flex flex-col gap-2 items-start text-gray-500 w-[48%]">
            <label htmlFor="name" className="text-sm">Full Name</label>
            <input value={details?.name} onChange={(e)=>setDetails((pre=>({...pre,name:e.target.value})))} type="text" name="name" id="name" className="border-2 w-full outline-gray-500 border-gray-200 rounded-lg p-2" required/>
        </div>
        <div className="flex flex-col gap-2 items-start text-gray-500 w-[48%]">
            <label htmlFor="Email" className="text-sm">Email</label>
            <input value={details?.email} onChange={(e)=>setDetails((pre=>({...pre,email:e.target.value})))} type="email" name="Email" id="Email" className="border-2 border-gray-200 rounded-lg p-2 w-full outline-gray-500" required/>
        </div>
        <div className="flex flex-col gap-2 items-start text-gray-500 w-[48%]">
            <label htmlFor="Phone" className="text-sm">Phone</label>
            <input value={details.phone} onChange={(e)=>{
                if(e.target.value.length<15){
                    setDetails((pre=>({...pre,phone:e.target.value})))
                }
            }} type="text" name="Phone" id="Phone" className={`${details?.phone?.length==14?"border-red-500 outline-0":""} border-2 border-gray-200 rounded-lg p-2 w-full outline-gray-500`} required/>
        </div>
        <div className="flex flex-col gap-2 items-start text-gray-500 w-[48%]">
            <label htmlFor="Location" className="text-sm">Location</label>
            <input value={details?.location} onChange={(e)=>setDetails((pre=>({...pre,location:e.target.value})))} type="text" name="Location" id="Location" className="border-2 border-gray-200 rounded-lg p-2 w-full outline-gray-500" required/>
        </div>
        <div className="flex flex-col gap-2 items-start text-gray-500 w-[48%]">
            <label htmlFor="Github" className="text-sm">Github</label>
            <input value={details?.github} onChange={(e)=>setDetails((pre=>({...pre,github:e.target.value})))} type="text" name="Github" id="Github" className={`${details?.github?.length>0 && !details.github.includes("github.com")?"border-red-500 outline-0":""} border-2 border-gray-200 rounded-lg p-2 w-full outline-gray-500`} required/>
        </div>
        <div className="flex flex-col gap-2 items-start text-gray-500 w-[48%]">
            <label htmlFor="LinkedIn" className="text-sm">LinkedIn</label>
            <input value={details?.linkedin} onChange={(e)=>setDetails((pre=>({...pre,linkedin:e.target.value})))} type="text" name="LinkedIn" id="LinkedIn" className={`${details?.linkedin?.length>0 && !details.linkedin.includes("linkedin.com")?"border-red-500 outline-0":""} border-2 border-gray-200 rounded-lg p-2 w-full outline-gray-500`} required/>
        </div>
        <div className="flex flex-col gap-3 items-start text-gray-500 w-full">
            <div className="flex items-center justify-between w-full">
                <label htmlFor="Summary" className="text-sm">Professional Summary</label>
                <label className={`${wordCount <150? "text-green-500": "text-red-500"}`}>{wordCount}/150</label>
            </div>
            <Editor value={details?.summary} onChange={(data) =>setDetails((prev) => ({...prev,summary: data}))}/>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;