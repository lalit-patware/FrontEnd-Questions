import React, { useState, useEffect } from "react";

function Step1({ nextStep }) {
  const [formData, setFormData] = useState(() => {
    return JSON.parse(localStorage.getItem("step1")) || {
      field1: "",
      field2: "",
      field3: "",
      field4: "",
      field5: "",
    };
  });

  useEffect(() => {
    localStorage.setItem("step1", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Step 1</h2>
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
      <button onClick={nextStep}>Next</button>
    </div>
  );
}

export default Step1;
