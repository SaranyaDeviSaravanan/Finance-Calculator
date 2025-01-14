import { useState } from "react";
import InputField from "../InputField";

const SIPCalculator = () => {
  const [sipAmount, setSipAmount] = useState("");
  const [annualRate, setAnnualRate] = useState("");
  const [years, setYears] = useState("");
  const [result, setResult] = useState(null);
  const [formError, setFormError] = useState("");

  const handleSIPSubmit = (e) => {
    e.preventDefault();

    if (!sipAmount || !annualRate || !years) {
      setFormError("All fields are required.");
      return;
    }

    const P = parseFloat(sipAmount);
    const r = parseFloat(annualRate) / 100 / 12;
    const n = parseInt(years) * 12;
    setFormError("");

    const value = P * (((Math.pow(1 + r, n) - 1) / r) * (1 + r));
    const investedAmount = P * n;
    const sipReturns = value - investedAmount;

    setResult({
      totalAmount: Math.round(value),
      invested: Math.round(investedAmount),
      returns: Math.round(sipReturns),
    });
  };

  return (
    <div className="calculator">
      <h2>SIP Calculator</h2>
      <form onSubmit={handleSIPSubmit}>
        <InputField
          label="Monthly SIP Amount"
          value={sipAmount}
          setter={setSipAmount}
        />
        <InputField
          label="Expected Annual Return (%)"
          value={annualRate}
          setter={setAnnualRate}
          isRate
        />
        <InputField
          label="Duration (in years)"
          value={years}
          setter={setYears}
        />

        <button type="submit">Calculate SIP Returns</button>
      </form>

      {formError && <p style={{ color: "red" }}>{formError}</p>}
      {result && (
        <div>
          <h3>Invested Amount: ₹{result.invested}</h3>
          <h3>Returns: ₹{result.returns}</h3>
          <h3>Total Value: ₹{result.totalAmount}</h3>
        </div>
      )}
    </div>
  );
};

export default SIPCalculator;
