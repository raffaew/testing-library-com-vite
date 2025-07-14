import { useState } from "react";

const SummaryForm = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleCheckboxChange = (valueCheckBox) => {
    setIsChecked(valueCheckBox);
    isChecked ? setIsButtonDisabled(true) : setIsButtonDisabled(!valueCheckBox);
  };

  return (
    <div>
      <h1>Summary Form</h1>
      <input
        type="checkbox"
        name="iAgree"
        id="iAgree"
        onChange={(e) => handleCheckboxChange(e.target.checked)}
      />
      <label htmlFor="iAgree">I agree to terms and conditions</label>

      <button disabled={isButtonDisabled}>Confirm order</button>
    </div>
  );
};

export default SummaryForm;
