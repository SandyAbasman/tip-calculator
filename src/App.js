import { useState } from "react";
import "./App.css";

export default function App() {
  const [bill, setBill] = useState("");
  const [percentage1, SetPercentage1] = useState(0);
  const [percentage2, SetPercentage2] = useState(0);

  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  function handleReset() {
    setBill("");
    SetPercentage1(0);
    SetPercentage2(0);
  }

  return (
    <div>
      <Bill bill={bill} OnSetBill={setBill} />
      <SelectPercentage percentage={percentage1} onSelect={SetPercentage1}>
        <span>how did you like the service?</span>
      </SelectPercentage>
      <SelectPercentage percentage={percentage2} onSelect={SetPercentage2}>
        <span>how did your friend like the service?</span>
      </SelectPercentage>

      {bill > 0 && (
        <>
          <Display bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function Bill({ bill, OnSetBill }) {
  return (
    <div>
      <span>how much was the bill?</span>
      <input
        type="text"
        value={bill}
        onChange={(e) => OnSetBill(Number(e.target.value))}
      />
    </div>
  );
}

function SelectPercentage({ children, percentage, onSelect }) {
  return (
    <div>
      {children}
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">Dissatisfied(0%)</option>
        <option value="5">it was okay(5%)</option>
        <option value="10">it was good(10%)</option>
        <option value="20">Absolutly amazing(20%)</option>
      </select>
    </div>
  );
}

function Display({ bill, tip }) {
  return (
    <div>
      <h2>
        your pay ${bill + tip} (${bill} + ${tip})
      </h2>
    </div>
  );
}
function Reset({ onReset }) {
  return <button onClick={onReset}>reset</button>;
}
