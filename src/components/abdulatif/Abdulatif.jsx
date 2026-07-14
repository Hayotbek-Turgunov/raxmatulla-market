import React, { useState, useEffect } from "react";
import "./Abdulatif.css";

const Abdulatif = ({ count, setCount, stepSize = 1, targetGoal = 10, addHistoryLog }) => {
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    setIsUpdating(true);
    const timer = setTimeout(() => setIsUpdating(false), 150);
    return () => clearTimeout(timer);
  }, [count]);

  const handleIncrement = () => {
    const diff = Number(stepSize);
    const prev = count;
    const next = count + diff;

    setCount(next);

    if (addHistoryLog) {
      addHistoryLog(`Incremented by ${diff}`, prev, next);
    }
  };

  const handleDecrement = () => {
    const diff = Number(stepSize);
    const prev = count;
    const next = count - diff;

    setCount(next);

    if (addHistoryLog) {
      addHistoryLog(`Decremented by ${diff}`, prev, next);
    }
  };

  const targetReached = count >= targetGoal;

  return (
    <div className="counter-card">
      {targetReached && (
        <div className="target-badge">
          🎉 TARGET MET (Goal: {targetGoal})
        </div>
      )}

      <div className={`counter-value-container ${isUpdating ? "updating" : ""}`}>
        <span className={`counter-number ${targetReached ? "target-met" : ""}`}>
          {count}
        </span>
      </div>

      <div className="counter-buttons">
        <button className="counter-btn btn-decrement" onClick={handleDecrement}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          Decrease
        </button>

        <button className="counter-btn btn-increment" onClick={handleIncrement}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          Increase
        </button>
      </div>
    </div>
  );
};

export default Abdulatif;