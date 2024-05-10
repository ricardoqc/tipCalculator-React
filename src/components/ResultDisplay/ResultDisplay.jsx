import React from "react";

export const ResultDisplay = ({ totals, resetCalculator }) => {
  return (
    <div className="result-wrapper">
      <div className="result-txt">
        <div className="text-amount">
          <div>
            <h2>Tip Amount</h2>
            <p>/ person</p>
          </div>
          <h3>
            $<span id="tip-amount">{totals.tip.toFixed(2)}</span>
          </h3>
        </div>
        <div className="total-amount">
          <div>
            <h2>Total</h2>
            <p>/ person</p>
          </div>
          <h3>
            $<span id="total">{totals.total.toFixed(2)}</span>
          </h3>
        </div>
      </div>
      <button
        type="button"
        id="reset-button"
        className="reset-button"
        onClick={resetCalculator}
      >
        RESET
      </button>
    </div>
  );
};