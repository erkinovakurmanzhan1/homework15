import { useState } from "react";
import { useValidation } from "./useValidation";

export const useInput = (initial, validations) => {
  const [value, setValue] = useState(initial);
  const [isBlur, setIsBlur] = useState(false);
  const valid = useValidation(value, validations);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onBlurHandler = () => {
    setIsBlur(true);
  };

  return {
    value,
    onChange,
    onBlurHandler,
    isBlur,
    ...valid,
  };
};
