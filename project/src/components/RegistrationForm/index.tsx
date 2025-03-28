import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive";
import StepSix from "./StepSix";
import StepSeven from "./StepSeven";

const StepComponents: { [key: string]: React.FC } = {
  "step-one": StepOne,
  "step-two": StepTwo,
  "step-three": StepThree,
  "step-four": StepFour,
  "step-five": StepFive,
  "step-six": StepSix,
  "step-seven": StepSeven,
};

const RegistrationForm = () => {
  const { step } = useParams();
  const navigate = useNavigate();

  // Default to "step-one" if no step is found
  const StepComponent = StepComponents[step || "step-one"];

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800 rounded-xl p-8 shadow-xl"
        >
          <h1 className="text-3xl font-bold text-white mb-8 text-center">
            Campus Ambassador Registration
          </h1>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mb-6">
            {Object.keys(StepComponents).map((step) => (
              <button
                key={step}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                onClick={() => navigate(`/register/${step}`)}
              >
                {step.replace("-", " ")}
              </button>
            ))}
          </div>

          {/* Render the selected step */}
          <StepComponent />
        </motion.div>
      </div>
    </div>
  );
};

export default RegistrationForm;
