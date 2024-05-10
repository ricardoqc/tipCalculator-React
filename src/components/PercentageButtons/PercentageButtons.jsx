import React from "react";

const PercentageButton = ({ value, isActive, onClick }) => (
  <li id={`percentage-${value}`}>
    <button
      type="button"
      name="percentage"
      className={`percentage-button ${isActive && "active"}`}
      value={value}
      onClick={() => onClick({ target: { name: "percentage", value } })}
    >
      {value}%
    </button>
  </li>
);

export const PercentageButtons = ({ setPercentage, percentage }) => {
  const buttonValues = [5, 10, 15, 25, 50];

  return (
    <ul>
      {buttonValues.map((value) => (
        <PercentageButton
          key={value}
          value={value}
          isActive={percentage === value}
          onClick={setPercentage}
        />
      ))}
      <li>
        <input
          type="number"
          name="percentage"
          placeholder="Custom"
          id="custom-percentage-button"
          className="percentage-button"
          onChange={setPercentage}
        />
      </li>
    </ul>
  );
};