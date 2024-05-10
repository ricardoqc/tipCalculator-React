import { useEffect, useState } from "react";
import { PercentageButtons } from "./components/PercentageButtons/PercentageButtons.jsx";
import { InputField } from "./components/InputField/InputField.jsx";
import { ResultDisplay } from "./components/ResultDisplay/ResultDisplay.jsx";
import { calculateTotals } from "./Utils/calculationUtils.js";

function TipCalculator() {
  const [billAmount, setBillAmount] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [calculatedTotals, setCalculatedTotals] = useState({ tip: 0, total: 0 });

  useEffect(() => {
    if (numberOfPeople > 0 && tipPercentage > 0 && billAmount > 0) {
      const totals = calculateTotals(billAmount, numberOfPeople, tipPercentage);
      setCalculatedTotals(totals);
    }
  }, [billAmount, numberOfPeople, tipPercentage]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "bill":
        setBillAmount(parseFloat(value));
        break;
      case "people":
        setNumberOfPeople(parseFloat(value));
        break;
      case "percentage":
        setTipPercentage(parseFloat(value));
        break;
      default:
        break;
    }
  };

  const resetCalculator = () => {
    setBillAmount(0);
    setNumberOfPeople(1);
    setTipPercentage(0);
    setCalculatedTotals({ tip: 0, total: 0 });
  };

  return (
    <>
      <header>
        <img src="../images/logo.svg" alt="Logo" />
      </header>
      <div className="general-wrapper">
        <div className="data-wrapper">
          <h1>Bill</h1>
          <InputField
            id={"input-bill"}
            name={"bill"}
            value={billAmount}
            onChange={handleInputChange}
          />

          <h2>Select Tip %</h2>
          <PercentageButtons
            percentage={tipPercentage}
            setPercentage={handleInputChange}
          />

          <h2>
            Number of People <span className="alert">Can't be Zero</span>
          </h2>
          <InputField
            id={"input-people"}
            name={"people"}
            value={numberOfPeople}
            onChange={handleInputChange}
          />
        </div>
        <ResultDisplay
          totals={calculatedTotals}
          resetCalculator={resetCalculator}
        />
      </div>
    </>
  );
}

export default TipCalculator;