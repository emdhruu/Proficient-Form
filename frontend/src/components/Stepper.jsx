import React from "react";

const Stepper = () => {
  return (
    <div className="mx-4 p-4 flex justify-between">
      <div className="relative flex flex-col items-center mx-4">
        <div className="bg-white border-2 p-1 px-3 border-green-500 text-green-500 rounded-full text-center hover:text-white hover:bg-green-500 transition duration-700 ease-in-out cursor-pointer">
          {/* Steps Number */} 1
        </div>
        <div className="text-green-500 absolute mt-10">
          {/* Steps Descriptions */} Descriptions
        </div>
      </div>
      <div>{/* Steps Line */}</div>
    </div>
  );
};

export default Stepper;
