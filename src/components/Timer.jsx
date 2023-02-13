import React from "react";
import styled from "styled-components";
import { useTimer } from "../hooks/useTimer";

const Timer = () => {
  const {  start, stop, seconds, input, onChangeHandler, restart, addHandler } =
    useTimer();
  return (
    <Container>
      <Input
        type="number"
        value={input}
        onChange={(e) => onChangeHandler(e.target.value)}
      />
      <Button onClick={addHandler}>➕</Button>
      <H1>{ seconds || "00"}</H1>
      <BoxButtons>
        <Button onClick={start}>start</Button>
        <Button onClick={stop}>stop</Button>
        <Button onClick={restart}>restart</Button>
      </BoxButtons>
    </Container>
  );
};

export default Timer;

const H1 = styled.h1`
  color: yellow;
`;
const BoxButtons = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const Button = styled.button`
  padding: 17px;
  background-color: yellow;
  border: 1px solid black;
  border-radius: 20px;
`;
const Input = styled.input`
  font-size: 20px;
  padding: 10px;
  border-radius: 50px;
  outline: none;
  text-align: center;
  border: 1px solid black;
  margin-top: 3rem;
`;
const Container = styled.div`
  margin: auto;
  width: 400px;
  height: 330px;
  background-color: #a256c5;
`;
