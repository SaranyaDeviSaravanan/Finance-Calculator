const handleNumericInput = (e, setter) => {
  const value = e.target.value;
  setter(value.replace(/[^0-9]/g, ""));
};

const handleRateInput = (e, setter) => {
  const value = e.target.value;
  if (/^\d*\.?\d*$/.test(value)) {
    setter(value);
  }
};

const InputField = ({ label, value, setter, isRate = false }) => {
  return (
    <div>
      <label>{label}:</label>
      <input
        type="text"
        value={value}
        onInput={(e) =>
          isRate ? handleRateInput(e, setter) : handleNumericInput(e, setter)
        }
        placeholder="Enter a number"
      />
    </div>
  );
};

export default InputField;
