import { MdDelete } from "react-icons/md";
import { useWorkExperience } from "../../Context/WorkExperienceContext";
import Editor from "../Builder/Editor";

const WorkCard = ({ index }) => {

  const { details, setDetails } = useWorkExperience();

  const experience = details.types.find((f) => f.id === index);

  const handleChange = (field, value) => {
    setDetails((pre) => ({
      ...pre,
      types: pre.types.map((ed) => {
        if (ed.id === index) {
          return { ...ed, [field]: value };
        }
        return ed;
      }),
    }));
  };

  const handleEducationCard = (id) => {
    setDetails((pre) => ({
      ...pre,
      types: pre.types.filter((ed) => ed.id !== id),
    }));
  };

  /* word count */
  const wordCount =
    experience?.summary
      ?.replace(/<[^>]*>/g, " ")
      ?.trim()
      ?.split(/\s+/)
      ?.filter(Boolean).length || 0;

  return (
    <div className="flex flex-wrap justify-between mt-5 gap-1 mb-5 border border-gray-300 p-5 rounded-xl">

      {/* Company */}
      <div className="flex flex-col gap-2 items-start text-gray-500 w-[48%]">
        <label className="text-sm">Company</label>
        <input
          value={experience?.company || ""}
          onChange={(e) => handleChange("company", e.target.value)}
          type="text"
          className="border-2 w-full outline-gray-500 border-gray-200 rounded-lg p-2"
        />
      </div>

      {/* Role */}
      <div className="flex flex-col gap-2 items-start text-gray-500 w-[48%]">
        <label className="text-sm">Role</label>
        <input
          value={experience?.role || ""}
          onChange={(e) => handleChange("role", e.target.value)}
          type="text"
          className="border-2 border-gray-200 rounded-lg p-2 w-full outline-gray-500"
        />
      </div>

      {/* Start Date */}
      <div className="flex flex-col gap-2 items-start text-gray-500 w-[48%]">
        <label className="text-sm">Start Date</label>
        <input
          value={experience?.start || ""}
          onChange={(e) => handleChange("start", e.target.value)}
          type="date"
          className="border-2 border-gray-200 rounded-lg p-2 w-full outline-gray-500"
        />
      </div>

      {/* End Date */}
      <div className="flex flex-col gap-2 items-start text-gray-500 w-[48%]">
        <label className="text-sm">End Date</label>
        <input
          value={experience?.end || ""}
          onChange={(e) => handleChange("end", e.target.value)}
          type="date"
          className="border-2 border-gray-200 rounded-lg p-2 w-full outline-gray-500"
        />
      </div>

      {/* Summary */}
      <div className="flex flex-col gap-2 items-start text-gray-500 w-full">

        <div className="flex items-center justify-between w-full">
          <label className="text-sm">Professional Summary</label>

          <label className={wordCount < 150 ? "text-green-500" : "text-red-500"}>
            {wordCount}/150
          </label>
        </div>

          <Editor
            value={experience?.summary || ""}
            onChange={(data) => handleChange("summary", data)}
          />

      </div>

      {/* Delete button */}
      <div className="flex w-full justify-end text-3xl p-2">
        <button
          className={`${details.types.length === 1 ? "hidden" : ""}`}
          onClick={() => handleEducationCard(index)}
        >
          <MdDelete />
        </button>
      </div>

    </div>
  );
};

export default WorkCard;