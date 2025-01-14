import { useState } from "react";
import InputField from "../InputField";

const CompoundInterestCalculator = () => {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [compoundFrequency, setCompoundFrequency] = useState(1);
  const [result, setResult] = useState(null);
  const [formError, setFormError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!principal || !rate || !time) {
      setFormError("All fields are required.");
      return;
    }

    const P = parseFloat(principal);
    const R = parseFloat(rate) / 100;
    const T = parseFloat(time);
    const n = parseFloat(compoundFrequency);

    setFormError("");

    const A = P * Math.pow(1 + R / n, n * T);
    const compoundInterest = A - P;

    setResult({
      investedAmount: Math.round(P),
      returns: Math.round(compoundInterest),
      totalValue: Math.round(A),
    });
  };

  return (
    <div className="calculator">
      <h2>Compound Interest Calculator</h2>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Principal Amount"
          value={principal}
          setter={setPrincipal}
        />
        <InputField
          label="Rate of Interest (%)"
          value={rate}
          setter={setRate}
          isRate
        />
        <InputField
          label="Time Period (in years)"
          value={time}
          setter={setTime}
        />

        <div>
          <label>Compounding Frequency (per year) : </label>
          <select
            value={compoundFrequency}
            onChange={(e) => setCompoundFrequency(e.target.value)}
          >
            <option value="1">Annually</option>
            <option value="4">Quarterly</option>
            <option value="12">Monthly</option>
          </select>
        </div>

        <button type="submit">Calculate</button>
      </form>
      {formError && <p style={{ color: "red" }}>{formError}</p>}{" "}
      {result && (
        <div>
          <h3>Invested Amount: ₹{result.investedAmount}</h3>
          <h3>Returns: ₹{result.returns}</h3>
          <h3>Total Value: ₹{result.totalValue}</h3>
        </div>
      )}
    </div>
  );
};

export default CompoundInterestCalculator;
