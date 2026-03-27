import { useEducation } from "../../Context/Education";
import { MdDelete } from "react-icons/md";

const EducationCard=({index})=>{

    const {details,setDetails}=useEducation();

    const education=details.types.find((f)=>f.id===index);

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

    const handleEducationCard=(id)=>{
        setDetails((pre)=>({...pre,
            types:pre.types.filter((ed)=>ed.id!==id),
        }));
    }

    return (
        <div className="flex flex-wrap justify-between mt-5 gap-1 mb-5 border border-gray-300 p-5 rounded-xl">
            <div className="flex flex-col gap-2 items-start text-gray-500 w-[48%]">
                    <label htmlFor="School" className="text-sm">School</label>
                    <input value={education?.school || ""} onChange={(e)=>handleChange("school",e.target.value)} type="text" name="School" id="School" className="border-2 w-full outline-gray-500 border-gray-200 rounded-lg p-2" required/>
                </div>
                <div className="flex flex-col gap-2 items-start text-gray-500 w-[48%]">
                    <label htmlFor="Degree" className="text-sm">Degree</label>
                    <input value={education?.degree || ""} onChange={(e)=>handleChange("degree",e.target.value)} type="text" name="Degree" id="Degree" className="border-2 border-gray-200 rounded-lg p-2 w-full outline-gray-500" required/>
                </div>
                <div className="flex flex-col gap-2 items-start text-gray-500 w-[48%]">
                    <label htmlFor="Start" className="text-sm">Start Date</label>
                    <input value={education?.start || ""} onChange={(e)=>handleChange("start",e.target.value)} type="date" name="Start" id="Start" className="border-2 border-gray-200 rounded-lg p-2 w-full outline-gray-500" required/>
                </div>
                <div className="flex flex-col gap-2 items-start text-gray-500 w-[48%]">
                    <label htmlFor="End" className="text-sm">End Date</label>
                    <input value={education?.end || ""} onChange={(e)=>handleChange("end",e.target.value)} type="date" name="End" id="End" className="border-2 border-gray-200 rounded-lg p-2 w-full outline-gray-500" required/>
                </div>
                <div className="flex flex-col gap-2 items-start text-gray-500 w-[48%]">
                    <label htmlFor="CGPA" className="text-sm">CGPA</label>
                    <input value={education?.cgpa || ""} onChange={(e)=>handleChange("cgpa",e.target.value)} type="text" name="CGPA" id="CGPA" className="border-2 border-gray-200 rounded-lg p-2 w-full outline-gray-500" required/>
                </div>
                <div className="flex justify-end items-end text-3xl p-2">
                    <button className={`${details.types.length==1?"hidden":""}`} onClick={()=>handleEducationCard(index)}><MdDelete /></button>
                </div>
        </div>
    );
}
export default EducationCard;