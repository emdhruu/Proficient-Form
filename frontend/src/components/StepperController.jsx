import React from "react";

const StepperController = ({ handleClick, steps, currentSteps }) => {
  return (
    <div className="container flex justify-around mt-8 mb-3">
      {/* back button */}
      <button
        onClick={() => handleClick()}
        className={`bg-white text-slate-400 uppercase rounded-lg py-2 px-4 hover:bg-slate-700 hover:text-white font-semibold cursor-pointer border-2 border-slate-300 transition duration-700 ease-in-out
          ${currentSteps == 1 ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        Back
      </button>
      {/* next button */}
      <button
        onClick={() => handleClick("next")}
        className="bg-rose-500 text-slate-900 uppercase rounded-lg py-2 px-4 hover:bg-slate-700 hover:text-white font-semibold cursor-pointer border-2 border-slate-300 transition duration-700 ease-in-out"
      >
        {currentSteps == steps.length - 1 ? "Confirm" : "Next"}
      </button>
    </div>
  );
};

export default StepperController;
