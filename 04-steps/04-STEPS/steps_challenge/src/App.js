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

  return (
    <div className="main">
      <Counter title="Step" s_value={step} setFunc={setStep} />
      <Counter
        title="Count"
        s_value={count}
        setFunc={setCount}
        multiplier={step}
      />
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
    </div>
  );
}

function Counter({ title, s_value, setFunc, multiplier = 1 }) {
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
        <h1>
          {title}: {s_value}
        </h1>
        <button onClick={handleIncrementStep}>+</button>
      </div>
    </div>
  );
}

export default App;
