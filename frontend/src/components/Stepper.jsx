import React, { useEffect, useRef, useState } from "react";

const Stepper = ({ steps, currentSteps }) => {
  const [newStep, setNewStep] = useState([]);
  const stepRef = useRef();

  const updateStep = (stepNumber, steps) => {
    const newSteps = [...steps];
    let count = 0;

    while (count < newSteps.length) {
      // current steps

      if (count == stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: true,
        };
        count++;
        console.log("1", ...newSteps);
      }
      // completed
      else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true,
        };
        count++;
        console.log("2", ...newSteps);
      }
      //step pending
      else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false,
        };
        count++;
        console.log("3", ...newSteps);
      }
    }
    return newSteps;
  };

  useEffect(() => {
    const stepsState = steps.map((step, index) => {
      console.log("step", step);

      return Object.assign(
        {},
        {
          description: step,
          completed: false,
          highlighted: index == 0 ? true : false,
          selected: index == 0 ? true : false,
        }
      );
    });
    console.log("stepsState", stepsState);
    stepRef.current = stepsState;
    const current = updateStep(currentSteps - 1, stepRef.current);
    setNewStep(current);
  }, [steps, currentSteps]);

  const displaySteps = newStep.map((step, index) => {
    console.log(step);

    return (
      <div
        key={index}
        className={
          index != newStep.length - 1
            ? "w-full flex items-center"
            : "flex items-center"
        }
      >
        <div className="relative flex flex-col items-center text-teal-600">
          <div
            className={` border p-1 px-3 h-12 w-12 border-rose-500  rounded-full flex items-center justify-center  hover:text-white hover:bg-rose-500 transition duration-700 ease-in-out cursor-pointer
              ${
                step.selected &&
                "bg-rose-500 text-white font-bold border border-rose-500"
              }`}
          >
            {/* Steps Number */}
            {step.completed ? (
              <span className="text-white font-bold text-xl">&#10003;</span>
            ) : (
              index + 1
            )}
          </div>
          <div
            className={`absolute t-0 mt-16 w-32 text-xs font-normal uppercase text-center
            ${step.highlighted ? "text-rose-500" : "text-gray-400"}
            `}
          >
            {/* Steps Descriptions */} {step.description}
          </div>
        </div>
        <div className="flex-auto border-t-2 transition duration-500 ease-in-out">
          {/* Steps Line */}
        </div>
      </div>
    );
  });
  return (
    <div className="mx-4 p-4 flex justify-between items-center">
      {displaySteps}
    </div>
  );
};

export default Stepper;
