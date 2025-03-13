import React, { useState } from "react";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step1 from "./Step1";

function MultiStepForm() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);
    const onSubmit = () => {
        console.log('******', {...localStorage.getItem("step1"), ...localStorage.getItem("step2"), ...localStorage.getItem("step3")})
    }
  return (
    <div>
      {step === 1 && <Step1 nextStep={nextStep} />}
      {step === 2 && <Step2 nextStep={nextStep} prevStep={prevStep} />}
      {step === 3 && <Step3 prevStep={prevStep} onSubmit={onSubmit} />}
    </div>
  );
}

export default MultiStepForm;
