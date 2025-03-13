import React, { useState, useEffect } from "react";

function Step3({ prevStep , onSubmit}) {
  const [formData, setFormData] = useState(() => {
    return JSON.parse(localStorage.getItem("step3")) || {
      field11: "",
      field12: "",
      field13: "",
      field14: "",
      field15: "",
    };
  });

  useEffect(() => {
    localStorage.setItem("step3", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Step 3</h2>
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
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
}

export default Step3;
