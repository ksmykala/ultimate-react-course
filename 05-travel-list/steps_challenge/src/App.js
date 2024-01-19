import React, { useEffect, useState } from "react";
import "./style.css";

function App() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);
  const [targetDate, setTargetDate] = useState("");

  useEffect(() => {
    const currentDate = new Date();
    const targetDate = new Date(
      currentDate.getTime() + count * 24 * 60 * 60 * 1000
    );
    const formattedTargetDate = `${targetDate.getDate()}.${
      targetDate.getMonth() + 1
    }.${targetDate.getFullYear()}`;
    setTargetDate(formattedTargetDate);
  }, [step, count]);

  const handleIncrementCount = () => {
    setCount(count + (step || 1));
  };

  const handleDecrementCount = () => {
    setCount(count - (step || 1));
  };

  return (
    <div className="main">
      <div className="counter-row">
        <div className="counter">
          <input
            type="range"
            min="0"
            max="10"
            value={step}
            onChange={(e) => setStep(parseInt(e.target.value))}
          />
          <h1>
            <span>Step: </span>
            <span>{step}</span>
          </h1>
        </div>
      </div>
      <div className="counter-row">
        <div className="counter">

        <button onClick={handleDecrementCount}>-</button>
          <input
            type="number"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />

        <button onClick={handleIncrementCount}>+</button>
        </div>
      </div>
      <div className="counter-row">
        <div className="counter">
          <h1>
            <span>
              {count === 0
                ? "Today is "
                : count > 0
                ? `${count} days from today is `
                : `${Math.abs(count)} days ago was `}
            </span>
            <span>{targetDate}</span>
          </h1>
        </div>
      </div>
      <div className="counter-row">
        <div className="counter">
          <button
            onClick={() => {
              setCount(0);
              setStep(0);
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

function Counter({ title, s_value, setFunc, input_type, multiplier = 1 }) {
  const handleStepChange = () => {};

  const handleIncrementStep = () => {
    setFunc(s_value + (multiplier || 1));
  };

  const handleDecrementStep = () => {
    setFunc(s_value - (multiplier || 1));
  };

  return (
    <div className="counter-row">
      <div className="counter">
        <button onClick={handleDecrementStep}>-</button>
        {/* <h1>
          {title}: {s_value}
        </h1> */}
        {input_type === "range" ? (
          <input
            type={input_type}
            value={s_value}
            onChange={handleIncrementStep}
          />
        ) : null}
        {input_type === "text" ? (
          <input
            type={input_type}
            value={s_value}
            onChange={handleIncrementStep}
          />
        ) : null}
        <button onClick={handleIncrementStep}>+</button>
      </div>
    </div>
  );
}

export default App;
