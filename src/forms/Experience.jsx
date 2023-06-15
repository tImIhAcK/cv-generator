import React, { useContext, useState } from "react";
import StepperContext from "../context/StepperContext";
import { HiOutlineLightBulb } from "react-icons/hi";
import Calendar from "react-calendar";

const Experience = () => {
  const { userCVData, setUserCVData } = useContext(StepperContext);

  const [organisationInfo, setOrganisationInfo] = useState([
    {
      organisation_name: "",
      position: "",
      start_date: new Date(),
      end_date: "",
    },
  ]);

  const handleAddExperience = () => {
    setOrganisationInfo([
      ...organisationInfo,
      {
        organisation_name: "",
        position: "",
        start_date: new Date(),
        end_date: new Date(),
      },
    ]);
    setUserCVData([...organisationInfo]);
  };

  const handleRemoveExperience = (index) => {
    const list = [...organisationInfo];
    list.splice(index, 1);
    setOrganisationInfo(list);
    setUserCVData([...organisationInfo]);
  };

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...organisationInfo];
    list[index][name] = value;
    setOrganisationInfo(list);
    setUserCVData((organisationInfo) => ({
      ...organisationInfo,
      [name]: value,
    }));
  };

  return (
    <div className="flex">
      <div className="flex-1">
        {/* EXPERIENCE INFORMATION */}
        {organisationInfo.map((organisation, index) => (
          <div className="w-full sm:w-8/12" key={index}>
            <div className="flex flex-col items-center justify-center">
              {/* ORGANISATION NAME FIELD */}
              <div className="w-full md:w-3/4 mx-2 flex-1">
                <div className="bg-white my-2 p-2 flex border border-blue">
                  <input
                    onChange={(e) => handleChange(e, index)}
                    name="organisation_name"
                    placeholder="Organisation name"
                    className="p-2 px-2 appearance-none outline-none w-full text-black"
                  />
                </div>
              </div>
              {/* POSITION FIELD */}
              <div className="w-full md:w-3/4 mx-2 flex-1">
                <div className="bg-white my-2 p-2 flex border border-blue">
                  <input
                    onChange={(e) => handleChange(e, index)}
                    name="position"
                    placeholder="Position"
                    className="p-2 px-2 appearance-none outline-none w-full text-black"
                  />
                </div>
              </div>

              {/* START AND END DATE FIELD */}
              <div className="w-full md:w-3/4 mx-2 flex flex-col md:flex-row justify-between">
                <div className="bg-white w-full my-2 p-2 mr-2 flex border border-blue">
                  <Calendar
                    onChange={(e) => handleChange(e, index)}
                    name="start_date"
                    placeholder="Start date"
                    className="p-2 px-2 appearance-none outline-none w-full text-black"
                  />
                  {/* <input
                    onChange={(e) => handleChange(e, index)}
                    name="start_date"
                    placeholder="Start date"
                    className="p-2 px-2 appearance-none outline-none w-full text-black"
                  /> */}
                </div>
                <div className="bg-white w-full my-2 p-2 flex border border-blue">
                  <Calendar
                    onChange={(e) => handleChange(e, index)}
                    name="end_date"
                    placeholder="End date"
                    className="p-2 px-2 appearance-none outline-none w-full text-black"
                  />
                  {/* <input
                    onChange={(e) => handleChange(e, index)}
                    name="end_date"
                    placeholder="End date"
                    className="p-2 px-2 appearance-none outline-none w-full text-black"
                  /> */}
                </div>
              </div>

              <div className="w-full md:w-3/4 mx-2 flex flex-col md:flex-row justify-center items-center ">
                {organisationInfo.length - 1 === index &&
                  organisationInfo.length < 4 && (
                    <button
                      className="text-white bg-green-600 py-2 px-4 my-2"
                      onClick={handleAddExperience}
                    >
                      ADD
                    </button>
                  )}

                {organisationInfo.length > 1 && (
                  <button
                    className="text-white bg-red-600 py-2 px-4 my-2"
                    onClick={() => handleRemoveExperience(index)}
                  >
                    DELETE
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* SIDE TIPS */}
      <div className="w-4/12 mt-4 md:mt-0">
        <div className="fixed right-0 mx-auto flex flex-col items-center justify-center px-2 max-w-sm shadow-md shadow-slate-400 overflow-hidden">
          <div className="items-center justify-center">
            <HiOutlineLightBulb size={70} color={"yellow"} />
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
                Other information like Phone number, Job title, are optional.
                Check the job requirements to see what should be included
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
