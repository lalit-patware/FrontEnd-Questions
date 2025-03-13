import React, { useState, useEffect } from "react";

function Step2({ nextStep, prevStep }) {
  const [formData, setFormData] = useState(() => {
    return JSON.parse(localStorage.getItem("step2")) || {
      field6: "",
      field7: "",
      field8: "",
      field9: "",
      field10: "",
    };
  });

  useEffect(() => {
    localStorage.setItem("step2", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Step 2</h2>
      {Object.keys(formData).map((key) => (
        <input
          key={key}
          type="text"
          name={key}
          value={formData[key]}
          onChange={handleChange}
          placeholder={key}
        />
      ))}
      <button onClick={prevStep}>Back</button>
      <button onClick={nextStep}>Next</button>
    </div>
  );
}

export default Step2;
