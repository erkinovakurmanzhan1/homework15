import { useEffect, useState } from "react";

export const useValidation = (value, validations) => {
  const [emailError, setEmailError] = useState(false);
  const [inputValid, setInputValid] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      console.log("val", validations);

      switch (validation) {
        case "isEmail":
          const regexp =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
          regexp.test(String(value).toLowerCase())
            ? setEmailError(false)
            : setEmailError(true);
          break;

        case "isPassword":
          const passRegexp = /(?=[1-5])/;
          passRegexp.test(String(value).toLowerCase())
            ? setPasswordError(false)
            : setPasswordError(true);
          break;
      }
    }
  }, [value]);

  useEffect(() => {
    if (emailError || passwordError) {
      setInputValid(false);
    } else {
      setInputValid(true);
    }
  }, [emailError || passwordError]);

  return {
    emailError,
    inputValid,
    passwordError,
  };
};
