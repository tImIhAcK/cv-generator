import { useState } from "react";
import Stepper from "../components/Stepper";
import StepperControl from "../components/StepperControl";
import StepperContext from "../context/StepperContext";

import {
  PersonalInfo,
  Summary,
  Experience,
  Education,
  Final,
  Skills,
} from "../forms";

const BuildCV = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userCVData, setUserCVData] = useState("");
  const [finalUserCVData, setFinalUserCVData] = useState([]);

  const steps = [
    "Personal Information",
    "Experience",
    "Education",
    "Skills",
    "Summary",
    "Completed",
  ];

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <PersonalInfo />;
      case 2:
        return <Experience />;
      case 3:
        return <Education />;
      case 4:
        return <Skills />;
      case 5:
        return <Summary />;
      case 6:
        return <Final />;
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;

    // Check if new step are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <div className="w-full py-3 px-4">
      <div className="pb-8 text-center mx-auto text-[1.5rem] md:text-[2rem] font-[700] max-w-[750px] px-3">
        <p className="text-4xl text-[#02378B] font-bold inline">
          Build Your CV
        </p>
      </div>
      <div className="container horizontal mt-5">
        <Stepper steps={steps} currentStep={currentStep} />

        {/* Display components */}
        <div className="my-10 p-10">
          <StepperContext.Provider
            value={{
              userCVData,
              setUserCVData,
              finalUserCVData,
              setFinalUserCVData,
            }}
          >
            {displayStep(currentStep)}
          </StepperContext.Provider>
        </div>
      </div>

      {currentStep !== steps.length && (
        <StepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        />
      )}
    </div>
  );
};

export default BuildCV;
