import React from "react";

export const InputField = ({ id, value, name, onChange }) => {
  const handleInputChange = (e) => {
    const { value } = e.target;
    if (value === "" || !isNaN(parseFloat(value))) {
      onChange(e);
    }
  };

  return (
    <label htmlFor={id}>
      <input
        value={value}
        name={name}
        onChange={handleInputChange}
        className={`${id} ${value === 0 && "input-invalid"}`}
        id={id}
        type="number"
      />
    </label>
  );
};