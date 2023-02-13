import React from "react";
import styled from "styled-components";
import { useCounter } from "../hooks/useCounter";

const Counter = () => {
  const { count, incrementHandler, decrementHandler, resetHandler } =
    useCounter(2);

  return (
    <Container>
      <H1>{count}</H1>
      <Button onClick={incrementHandler}>+</Button>
      <Button onClick={resetHandler}>↺</Button>

      <Button onClick={decrementHandler}>−</Button>
    </Container>
  );
};

export default Counter;

const Button = styled.button`
  font-size: 60px;
  background: rgb(238,174,202);
background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(169,148,233,0.020045518207282953) 68%);
  border: none;
  margin-left: 1rem;
  border-radius: 5px;
  color: #5050a7;
  
`;
const Container = styled.div`
  width: 320px;
  height: 220px;
  background: rgb(238, 174, 202);
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(169, 148, 233, 1) 68%
  );
  padding-top: 2rem;
  margin: auto;
  border-radius: 20px;
  margin-top: 3rem;
`;
const H1 =styled.h1`
  color: #b20fa5;
`