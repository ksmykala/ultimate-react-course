import { useState, useEffect } from "react";

// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

export default function App() {
  const [amount, setAmount] = useState(100);
  const [amountOutput, setAmountOutput] = useState(0);
  const [curFrom, setCurFrom] = useState("USD");
  const [curTo, setCurTo] = useState("EUR");
  const [error, setError] = useState(null);

  useEffect(
    function () {
      async function fetchCurrency() {
        try {
          setError("");
          const response = await fetch(
            `https://api.frankfurter.app/latest?amount=${amount}&from=${curFrom}&to=${curTo}`
          );
          if (!response.ok) {
            throw new Error("Something went wrong");
          }
          const data = await response.json();

          if (data.Response === "False") throw new Error(data.Error);

          console.log(data.rates[curTo]);
          setAmountOutput(data.rates[curTo]);
        } catch (error) {
          if (error.name !== "AbortError") {
            setError(error.message);
          }
        }
      }

      fetchCurrency();
    },
    [amount, curFrom, curTo]
  );

  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select value={curFrom} onChange={(e) => setCurFrom(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
        <option value="PLN">PLN</option>
      </select>
      <select value={curTo} onChange={(e) => setCurTo(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
        <option value="PLN">PLN</option>
      </select>
      <p>{amountOutput}</p>
      {error && <p className="Error">{error}</p>}
    </div>
  );
}
