import React, { useState } from "react";
import "./style.css";


function App() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);

  return (
    <div className="main">
      <Counter title="Step" s_value={step} setFunc={setStep} />
      <Counter title="Count" s_value={count} setFunc={setCount} multiplier={step} />
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
