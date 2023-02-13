import React from "react";
import styled from "styled-components";
import { useInput } from "../hooks/useInput";

const Input = () => {
  const email = useInput("", { isEmail: true });
  const password = useInput("", { isPassword: true });

  return (
    <Box>
      <h1>type input</h1>
      <div>
        {email.isBlur && email.emailError && (
          <h4 style={{ color: "red" }}>You forgot @gmail.com or @gmail.ru</h4>
        )}

        <InputStyled
          type="email"
          value={email.value}
          onChange={email.onChange}
          onBlur={email.onBlurHandler}
          placeholder="email"
        />
      </div>

      <div>
        {password.isBlur && password.passwordError && (
          <h4 style={{ color: "red" }}>Password must be a number</h4>
        )}
        <InputStyled
          type="password"
          value={password.value}
          onChange={password.onChange}
          onBlur={password.onBlurHandler}
          placeholder="password"
        />
      </div>

      <Button disabled={!email.inputValid || !password.inputValid}>
        submit
      </Button>
    </Box>
  );
};

export default Input;

const InputStyled = styled.input`
  outline: none;
  padding: 7px;
  margin-bottom: 0.5rem;
`;
const Box = styled.div`
  border-radius: 5px;
  margin: auto;
  width: 350px;
  height: 340px;
  background-color: #e3e713;
`;
const Button = styled.button`
  padding: 6px;
  border: 1px solid grey;
  background-color: #fff;
  margin-top: 1rem;
`;
