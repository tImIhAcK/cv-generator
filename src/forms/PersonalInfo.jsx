import { useContext } from "react";

import StepperContext from "../context/StepperContext";

import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

import { HiOutlineLightBulb } from "react-icons/hi";

const PersonalInfo = () => {
  const { userCVData, setUserCVData } = useContext(StepperContext);
  // userCVData.phone_number = +

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(e.target.name);
    setUserCVData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col md:flex-row mx-auto">
      {/* PERSONAL INFOMATION */}
      <div className="w-full sm:w-8/12">
        <div className="flex flex-col items-center justify-center">
          {/* FIRSTNAME FIELD */}
          <div className="w-full md:w-3/4 mx-2 flex-1">
            <div className="bg-white my-2 p-2 flex border border-blue">
              <input
                onChange={handleChange}
                value={userCVData?.firstname || ""}
                name="firstname"
                placeholder="First name"
                className="p-2 px-2 appearance-none outline-none w-full text-black"
              />
            </div>
          </div>
          {/* LASTNAME FIELD */}
          <div className="w-full md:w-3/4 mx-2 flex-1">
            <div className="bg-white my-2 p-2 flex border border-blue">
              <input
                onChange={handleChange}
                value={userCVData?.lastname || ""}
                name="lastname"
                placeholder="Last name"
                className="p-2 px-2 appearance-none outline-none w-full text-black"
              />
            </div>
          </div>

          {/* PROFESSION FIELD */}
          <div className="w-full md:w-3/4 mx-2 flex-1">
            <div className="bg-white my-2 p-2 flex border border-blue">
              <input
                onChange={handleChange}
                value={userCVData?.profession || ""}
                name="profession"
                placeholder="Profession"
                className="p-2 px-2 appearance-none outline-none w-full text-black"
              />
            </div>
          </div>

          {/* COUNTRY, STATE, CITY SELECT DROPDOWN */}
          <div className="w-full md:w-3/4 mx-2 flex flex-col md:flex-row justify-between">
            <div className="bg-white my-2 p-2 flex border border-blue">
              <input
                onChange={handleChange}
                value={userCVData?.address || ""}
                name="address"
                placeholder="Address"
                className="p-2 px-2 appearance-none outline-none w-full text-black"
              />
            </div>
          </div>

          {/* PHONE NUMBER AND EMAIL FIELD */}
          <div className="w-full md:w-3/4 mx-2 flex flex-col md:flex-row justify-between">
            {/* PHONE NUMBER FIELD */}
            <div className="bg-white w-full my-2 mr-2 flex border border-blue">
              <PhoneInput
                // country={"US"}
                value={userCVData.phone_number || ""}
                placeholder="Phone number"
                inputprops={{
                  name: "phone_number",
                  // required: true,
                  // autoFocus: true,
                }}
                onChange={(e) =>
                  setUserCVData({ ...userCVData, phone_number: e })
                }
              />
            </div>

            {/* EMAIL FIELD */}
            <div className="bg-white w-full my-2 p-2 flex border border-blue">
              <input
                onChange={handleChange}
                value={userCVData?.email || ""}
                name="email"
                placeholder="Email"
                type={"email"}
                className="p-2 px-2 appearance-none outline-none w-full text-black"
              />
            </div>
          </div>
        </div>
      </div>

      {/* SIDE TIPS */}
      <div className="w-full sm:w-4/12 mt-4 md:mt-0">
        <div className="mx-auto flex flex-col items-center justify-center px-2 max-w-sm shadow-md shadow-slate-400 overflow-hidden">
          <div className="items-center justify-center">
            <HiOutlineLightBulb size={70} color={"yellow"} />
          </div>
          <div className="px-6 py-4">
            <h2 className="font-bold text-xl mb-2 text-blue">
              Tips and Advise
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

export default PersonalInfo;
