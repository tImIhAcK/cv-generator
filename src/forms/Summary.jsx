import React, { useContext, useState, useEffect } from "react";
import StepperContext from "../context/StepperContext";
import { HiOutlineLightBulb } from "react-icons/hi";

const Summary = () => {
  const { userCVData, setUserCVData } = useContext(StepperContext);

  const [summary, setSummary] = useState("");

  const handleSummaryChange = (e) => {
    const { value } = e.target;
    setSummary(value);
  };

  // Update userCVData whenever the summary changes
  useEffect(() => {
    setUserCVData((prevData) => ({
      ...prevData,
      summary,
    }));
  }, [summary, setUserCVData]);

  return (
    <div className="flex">
      <div className="w-full sm:w-8/12">
        <div className="bg-white w-full my-2 p-2 flex border border-blue">
          <textarea
            rows="4"
            value={summary}
            onChange={handleSummaryChange}
            placeholder="Professional Summary"
            className="p-2 px-2 appearance-none outline-none w-full text-black"
          ></textarea>
        </div>
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
                Write a brief and compelling summary that highlights your
                skills, experience, and career goals.
              </li>
              <li className="text-gray-500 text-[8px] py-1">
                Use concise language and focus on your unique selling points.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
