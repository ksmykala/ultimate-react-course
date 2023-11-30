import React, { useEffect, useState } from "react";
import "./style.css";


function App() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);
  const [targetDate, setTargetDate] = useState("")

  useEffect(() => {
    const currentDate = new Date();
    const targetDate = new Date(currentDate.getTime() + count * 24 * 60 * 60 * 1000);
    const month = targetDate.getMonth() + 1;
    const formattedMonth = month < 10 ? `0${month}` : month;
    const formattedTargetDate = `${targetDate.getDate()}.${formattedMonth}.${targetDate.getFullYear()}`;
    setTargetDate(formattedTargetDate);
  }, [step, count]);

  return (
    <div className="main">
      <Counter title="Step" s_value={step} setFunc={setStep} />
      <Counter title="Count" s_value={count} setFunc={setCount} multiplier={step} />
      <div className="counter-row">
        <div className="counter">
        <h1>{count} days from today is {targetDate}</h1>
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
