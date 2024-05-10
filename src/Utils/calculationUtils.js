export const calculateTotals = (billAmount, numberOfPeople, tipPercentage) => {
    const tip = (billAmount * (tipPercentage / 100)) / numberOfPeople;
    const total = (billAmount * (tipPercentage / 100) + billAmount) / numberOfPeople;
  
    return { tip, total };
  };