import React, { useState } from "react";
import Stepper from "./components/Stepper";
import StepperController from "./components/StepperController";
import Account from "./components/steps/Account";
import Bank from "./components/steps/Bank";
import Nominees from "./components/steps/Nominees";
import Complete from "./components/steps/Complete";

const App = () => {
  const [currentSteps, setCurrentSteps] = useState(1);
  const steps = [
    "Account Details",
    "Bank Details",
    "Nominees Details",
    "Complete",
  ];

  const displaySteps = (step) => {
    switch (step) {
      case 1:
        return <Account />;
      case 2:
        return <Bank />;
      case 3:
        return <Nominees />;
      case 4:
        return <Complete />;
    }
  };

  const handleClick = (direction) => {
    let newStep = currentSteps;

    direction == "next" ? newStep++ : newStep--;
    newStep > 0 && newStep <= steps.length && setCurrentSteps(newStep);
    // return;
  };

  return (
    <div className="md:w-2/3 mx-auto shadow-lg rounded-2xl pb-2 bg-white">
      {/* Stepper */}
      <div className="container horizontal mt-5">
        <Stepper steps={steps} currentSteps={currentSteps} />
      </div>
      {/* Navigation controls */}
      <StepperController
        handleClick={handleClick}
        steps={steps}
        currentSteps={currentSteps}
      />
    </div>
  );
};

export default App;
