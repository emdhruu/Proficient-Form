import React from "react";

const StepperController = () => {
  return (
    <div className="container flex justify-around mt-4 mb-3">
      {/* back button */}
      <button className="bg-white text-slate-400 uppercase rounded-lg py-2 px-4 hover:bg-slate-700 hover:text-white font-semibold cursor-pointer border-2 border-slate-300 transition duration-700 ease-in-out">
        Back
      </button>
      {/* next button */}
      <button className="bg-green-500 text-slate-900 uppercase rounded-lg py-2 px-4 hover:bg-slate-700 hover:text-white font-semibold cursor-pointer border-2 border-slate-300 transition duration-700 ease-in-out">
        Next
      </button>
    </div>
  );
};

export default StepperController;
