import React, { useContext, useState, useEffect } from "react";
import StepperContext from "../context/StepperContext";
import { HiOutlineLightBulb } from "react-icons/hi";

const Skills = () => {
  const { userCVData, setUserCVData } = useContext(StepperContext);

  const [skills, setSkills] = useState([]);

  const handleAddSkill = () => {
    setSkills([...skills, ""]);
  };

  const handleRemoveSkill = (index) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
  };

  const handleSkillChange = (e, index) => {
    const { value } = e.target;
    const updatedSkills = [...skills];
    updatedSkills[index] = value;
    setSkills(updatedSkills);
  };

  // Update userCVData whenever skills change
  useEffect(() => {
    setUserCVData((prevData) => ({
      ...prevData,
      skills,
    }));
  }, [skills, setUserCVData]);

  return (
    <div className="flex">
      <div className="w-full sm:w-8/12">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white w-full my-2 p-2 flex border border-blue"
          >
            <input
              type="text"
              value={skill}
              onChange={(e) => handleSkillChange(e, index)}
              placeholder="Skill"
              className="p-2 px-2 appearance-none outline-none w-full text-black"
            />
            {skills.length > 1 && (
              <button
                className="text-white bg-red-600 py-2 px-4 ml-2"
                onClick={() => handleRemoveSkill(index)}
              >
                Remove
              </button>
            )}
          </div>
        ))}
        <button
          className="text-white bg-green-600 py-2 px-4 my-2"
          onClick={handleAddSkill}
        >
          Add Skill
        </button>
      </div>
      <div className="w-4/12 hidden md:block">
        <div className="fixed right-0 mx-auto flex flex-col items-center justify-center px-2 max-w-sm shadow-md shadow-slate-400 overflow-hidden">
          <div className="items-center justify-center">
            <HiOutlineLightBulb size={70} color="yellow" />
          </div>
          <div className="px-6 py-4">
            <h2 className="font-bold text-xl mb-2 text-blue">
              Tips and Advice
            </h2>
            <ul className="list-disc text-justify py-2">
              <li className="text-gray-500 text-[8px] py-1">
                List your relevant skills and highlight the ones most important
                for the desired job.
              </li>
              <li className="text-gray-500 text-[8px] py-1">
                Click "Add Skill" to include additional skills.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
