import { useState } from "react";

const useInput = (validateType: string) => {
  const [entredValue, setEntredValue] = useState("");
  const [isTouched, setIsTouched] = useState<boolean>(false);

  let validity;

  if (validateType === "Subject") {
    validity = entredValue.trim() !== "";
  }
  if (validateType === "Title") {
    validity = entredValue.trim() !== "";
  }
  if (validateType === "Categorie") {
    validity = entredValue.trim() !== "";
  }
  if (validateType === "Description") {
    validity = entredValue.trim() !== "";
  }

  const valueIsValid = validity;
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setEntredValue(event.currentTarget.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const resetInput = () => {
    setEntredValue("");
    setIsTouched(false);
  };

  return {
    value: entredValue,
    isValid: valueIsValid,
    hasError: hasError,
    isTouched: isTouched,
    inputBlurHandler,
    valueChangeHandler,
    resetInput,
  };
};

export default useInput;
