import React, { useContext, useState, useEffect } from "react";
import StepperContext from "../context/StepperContext";
import { HiOutlineLightBulb } from "react-icons/hi";

const Education = () => {
  const { userCVData, setUserCVData } = useContext(StepperContext);

  const [educations, setEducations] = useState([
    {
      id: 1,
      institution: "",
      degree: "",
      startDate: "",
      endDate: "",
    },
  ]);

  const handleAddEducation = () => {
    const newEducation = {
      id: Math.random(),
      institution: "",
      degree: "",
      startDate: "",
      endDate: "",
    };
    setEducations([...educations, newEducation]);
  };

  const handleRemoveEducation = (id) => {
    const updatedEducations = educations.filter(
      (education) => education.id !== id
    );
    setEducations(updatedEducations);
  };

  const handleChange = (e, id) => {
    const { name, value } = e.target;
    setEducations((prevEducations) => {
      const updatedEducations = prevEducations.map((education) => {
        if (education.id === id) {
          return { ...education, [name]: value };
        }
        return education;
      });
      return updatedEducations;
    });
  };

  // Update userCVData whenever educations change
  useEffect(() => {
    setUserCVData((prevData) => ({
      ...prevData,
      educations,
    }));
  }, [educations, setUserCVData]);

  return (
    <div className="flex">
      <div className="w-full sm:w-8/12">
        {educations.map((education) => (
          <div className="education-item" key={education.id}>
            <div className="bg-white w-full my-2 p-2 flex border border-blue">
              <input
                type="text"
                name="institution"
                value={education.institution}
                onChange={(e) => handleChange(e, education.id)}
                placeholder="Institution"
                className="p-2 px-2 appearance-none outline-none w-full text-black"
              />
            </div>
            <div className="bg-white w-full my-2 p-2 flex border border-blue">
              <input
                type="text"
                name="degree"
                value={education.degree}
                onChange={(e) => handleChange(e, education.id)}
                placeholder="Degree"
                className="p-2 px-2 appearance-none outline-none w-full text-black"
              />
            </div>
            <div className="bg-white w-full my-2 p-2 flex border border-blue">
              <input
                type="date"
                name="startDate"
                value={education.startDate}
                onChange={(e) => handleChange(e, education.id)}
                className="p-2 px-2 appearance-none outline-none w-full text-black"
              />
            </div>
            <div className="bg-white w-full my-2 p-2 flex border border-blue">
              <input
                type="date"
                name="endDate"
                value={education.endDate}
                onChange={(e) => handleChange(e, education.id)}
                className="p-2 px-2 appearance-none outline-none w-full text-black"
              />
            </div>
            <button
              className="text-white bg-red-600 py-2 px-4 my-2"
              onClick={() => handleRemoveEducation(education.id)}
            >
              Remove
            </button>
          </div>
        ))}
        {educations.length < 4 && (
          <button
            className="text-white bg-green-600 py-2 px-4 my-2"
            onClick={handleAddEducation}
          >
            Add Education
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
                Include relevant educational qualifications
              </li>
              <li className="text-gray-500 text-[8px] py-1">
                Mention honors, awards, or achievements, if any
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
