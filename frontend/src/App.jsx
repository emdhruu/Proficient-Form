import React from "react";
import Stepper from "./components/Stepper";
import StepperController from "./components/StepperController";

const App = () => {
  return (
    <div className="md:w-1/2 mx-auto shadow-lg rounded-2xl pb-2 bg-white">
      {/* Stepper */}
      <div className="container horizontal mt-5">
        <Stepper />
      </div>
      {/* Navigation controls */}
      <StepperController />
    </div>
  );
};

export default App;
