import React, { useContext, useState, useEffect } from "react";
import StepperContext from "../context/StepperContext";
import { HiOutlineLightBulb } from "react-icons/hi";

const Experience = () => {
  const { userCVData, setUserCVData } = useContext(StepperContext);

  const [experiences, setExperiences] = useState([
    {
      id: 1,
      organization: "",
      position: "",
      startDate: "",
      endDate: "",
    },
  ]);

  const handleAddExperience = () => {
    const newExperience = {
      id: Math.random(),
      organization: "",
      position: "",
      startDate: "",
      endDate: "",
    };
    setExperiences([...experiences, newExperience]);
  };

  const handleRemoveExperience = (id) => {
    const updatedExperiences = experiences.filter(
      (experience) => experience.id !== id
    );
    setExperiences(updatedExperiences);
  };

  const handleChange = (e, id) => {
    const { name, value } = e.target;
    setExperiences((prevExperiences) => {
      const updatedExperiences = prevExperiences.map((experience) => {
        if (experience.id === id) {
          return { ...experience, [name]: value };
        }
        return experience;
      });
      return updatedExperiences;
    });
  };

  // Update userCVData whenever experiences change
  useEffect(() => {
    setUserCVData((prevData) => ({
      ...prevData,
      experiences,
    }));
  }, [experiences, setUserCVData]);

  return (
    <div className="flex">
      <div className="w-full sm:w-8/12">
        {experiences.map((experience) => (
          <div className="experience-item" key={experience.id}>
            <div className="bg-white w-full my-2 p-2 flex border border-blue">
              <input
                type="text"
                name="organization"
                value={experience.organization}
                onChange={(e) => handleChange(e, experience.id)}
                placeholder="Organization name"
                className="p-2 px-2 appearance-none outline-none w-full text-black"
              />
            </div>
            <div className="bg-white w-full my-2 p-2 flex border border-blue">
              <input
                type="text"
                name="position"
                value={experience.position}
                onChange={(e) => handleChange(e, experience.id)}
                placeholder="Position"
                className="p-2 px-2 appearance-none outline-none w-full text-black"
              />
            </div>
            <div className="bg-white w-full my-2 p-2 flex border border-blue">
              <input
                type="date"
                name="startDate"
                value={experience.startDate}
                onChange={(e) => handleChange(e, experience.id)}
                className="p-2 px-2 appearance-none outline-none w-full text-black"
              />
            </div>
            <div className="bg-white w-full my-2 p-2 flex border border-blue">
              <input
                type="date"
                name="endDate"
                value={experience.endDate}
                onChange={(e) => handleChange(e, experience.id)}
                className="p-2 px-2 appearance-none outline-none w-full text-black"
              />
            </div>
            <button
              className="text-white bg-red-600 py-2 px-4 my-2"
              onClick={() => handleRemoveExperience(experience.id)}
            >
              Remove
            </button>
          </div>
        ))}
        {experiences.length < 4 && (
          <button
            className="text-white bg-green-600 py-2 px-4 my-2"
            onClick={handleAddExperience}
          >
            Add Experience
          </button>
        )}
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
                Use a professional sounding e-Mail
              </li>
              <li className="text-gray-500 text-[8px] py-1">
                Other information like phone number, job title, etc., are
                optional. Check the job requirements to see what should be
                included.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
