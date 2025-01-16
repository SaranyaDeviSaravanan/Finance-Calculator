const handleInput = (e, setter, isRate) => {
  const value = e.target.value;
  if (isRate) {
    if (/^\d*\.?\d*$/.test(value)) {
      setter(value);
    }
  } else {
    setter(value.replace(/[^0-9]/g, ""));
  }
};

const InputField = ({ label, value, setter, isRate = false }) => {
  return (
    <div>
      <label>{label}:</label>
      <input
        type="text"
        value={value}
        onInput={(e) => handleInput(e, setter, isRate)}
        placeholder="Enter a number"
      />
    </div>
  );
};

export default InputField;
