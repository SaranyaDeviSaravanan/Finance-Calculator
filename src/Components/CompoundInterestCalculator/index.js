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

  const inputFields = [
    { label: "Principal Amount", value: principal, setter: setPrincipal },
    {
      label: "Rate of Interest (%)",
      value: rate,
      setter: setRate,
      isRate: true,
    },
    { label: "Time Period (in years)", value: time, setter: setTime },
  ];
  const compoundingOptions = [
    { value: 1, label: "Annually" },
    { value: 4, label: "Quarterly" },
    { value: 12, label: "Monthly" },
  ];

  return (
    <div className="calculator">
      <h2>Compound Interest Calculator</h2>
      <form onSubmit={handleSubmit}>
        {inputFields.map((field, index) => (
          <InputField
            key={index}
            label={field.label}
            value={field.value}
            setter={field.setter}
            isRate={field.isRate}
          />
        ))}
        <div>
          <label>Compounding Frequency (per year): </label>
          <select
            value={compoundFrequency}
            onChange={(e) => setCompoundFrequency(e.target.value)}
          >
            {compoundingOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <button type="submit">Calculate</button>
      </form>

      {formError && <p style={{ color: "red" }}>{formError}</p>}
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
