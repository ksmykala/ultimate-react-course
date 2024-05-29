import React, { Children, useState } from "react";
import "./styles.css";

export default function App() {
  const [bill, setBill] = useState("");
  const [myTipPerc, setMyTipPerc] = useState(0);
  const [friendsTipPerc, setFriendsTipPerc] = useState(0);

  function clearTip() {
    setBill("");
    setMyTipPerc(0);
    setFriendsTipPerc(0);
  }

  return (
    <div style={{ margin: 20 }}>
      <Bill bill={bill} onChange={setBill} />
      <Satisfaction tip={myTipPerc} onSelect={setMyTipPerc}>
        How did you like the service?
      </Satisfaction>
      <Satisfaction tip={friendsTipPerc} onSelect={setFriendsTipPerc}>
        How did your friend like the service?
      </Satisfaction>

      {bill > 0 && (
        <>
          <Summary
            bill={bill}
            tip={(bill * myTipPerc) / 100 + (bill * friendsTipPerc) / 100}
          />{" "}
          <Reset onClick={clearTip} />
        </>
      )}
    </div>
  );
}

function Bill({ bill, onChange }) {
  return (
    <div>
      <span>How much was the bill? </span>
      <input
        id="bill"
        type="number"
        placeholder="Enter the bill amount"
        value={bill}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  );
}

function Satisfaction({ tip, onSelect, children }) {
  return (
    <div>
      <span>{children}</span>
      <select
        id={children}
        value={tip}
        onChange={(e) => onSelect(e.target.value)}
      >
        <option value="0">😞 (0%)</option>
        <option value="5">😐 (5%)</option>
        <option value="15">🙂 (15%)</option>
      </select>
    </div>
  );
}

function Summary({ bill, tip }) {
  return (
    <div style={{ margin: "20px 0" }}>
      <h3>
        You pay ${bill + tip} (${bill === "" ? 0 : bill} + ${tip})
      </h3>
    </div>
  );
}

function Reset({ onClick }) {
  return (
    <div>
      <button onClick={() => onClick()}>Reset</button>
    </div>
  );
}
