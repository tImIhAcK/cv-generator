const StepperControl = ({ handleClick, currentStep, steps }) => {
  return (
    <div className="flex flex-col md:flex-row mx-auto">
      <div className="w-full md:w-8/12">
        <div className="conatiner flex justify-around mt-3 mb-8">
          {/* BAck button */}
          <button
            onClick={() => handleClick()}
            className={`bg-white text-blue uppercase py-5 px-16 font-bold cursor-pointer border-2 border-blue hover:bg-blue hover:text-white transition duration-200 ease-in-out ${
              currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            back
          </button>

          {/* Next button */}
          <button
            onClick={() => handleClick("next")}
            className="bg-blue text-white uppercase py-5 px-16 font-bold cursor-pointer hover:border-2 hover:border-blue hover:bg-white hover:text-blue transition duration-200 ease-in-out"
          >
            {currentStep === steps.length - 1 ? "Comfirm" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepperControl;
